# Estudo: blocos de código executáveis (HTML, CSS e JavaScript)

**Motivação:** a matéria INTW (Introdução às Tecnologias Web) hoje *descreve* HTML, CSS e
JavaScript, mas o aluno só lê. Numa disciplina prática de 40h, ler código não substitui
escrever e ver o resultado. A proposta é tornar os blocos editáveis, com preview ao vivo,
rodando inteiramente no computador do aluno.

O projeto não tem backend — as chamadas de IA já saem do browser. Executar código do aluno
localmente é coerente com essa arquitetura e não muda o modelo de deploy (GitHub Pages).

## Escala real

`src/content/introducao-tecnologias-web/sections/snippets.ts` tem **10 snippets**:

| Linguagem | Quantos | Quais |
|---|---|---|
| HTML | 5 | `codeEstruturaBasica`, `codeDuasPaginas`, `codeListasLinks`, `codeTabela`, `codeFormulario` |
| CSS | 3 | `codeSeletores`, `codeBoxModel`, `codeFlexbox` |
| JS | 2 | `codeJsFundamentos`, `codeJsDom` |

Escala tratável: não é reescrever a matéria, é trocar o componente de exibição em ~10 pontos.

## A decisão central: isolamento

Executar código arbitrário na mesma origem da aplicação é o risco real desta proposta. Um
`<script>` do aluno teria acesso a `sessionStorage` — onde vive **a chave de API do provedor
de IA** (`ifal_bsi_ai_config`) — e ao DOM do site inteiro.

Não é um risco hipotético de "aluno mal-intencionado": basta um aluno colar código de um
tutorial qualquer para que esse código passe a rodar com acesso à chave dele.

**Solução: `<iframe sandbox>` com origem opaca.**

```html
<iframe
  sandbox="allow-scripts"
  srcdoc="<!doctype html><html>…"
  title="Pré-visualização do exemplo"
/>
```

O ponto essencial: `sandbox="allow-scripts"` **sem** `allow-same-origin`. A combinação dos
dois anula o sandbox — o iframe volta a ter acesso à origem pai. Com apenas `allow-scripts`,
o documento recebe uma origem opaca: sem acesso a `sessionStorage`, `localStorage`, cookies
nem ao DOM do site.

Conteúdo via `srcdoc` (string), nunca `blob:` ou `data:` URL — essas herdam contexto de
formas menos previsíveis entre navegadores.

Não usar `allow-modals` (um `alert()` em laço travaria a aba), nem `allow-popups`,
nem `allow-top-navigation`.

## Os três modos

### 1. HTML — editar e ver
Editor de texto simples à esquerda, iframe à direita (empilhados no mobile). O aluno digita
markup e vê o resultado. É o modo mais direto e o de maior retorno: 5 dos 10 snippets.

### 2. CSS — ver o efeito sobre um HTML fixo
O aluno edita **só o CSS**; o HTML de apoio é dado e visível em aba separada (somente
leitura). É assim que a matéria ensina — `codeBoxModel` e `codeFlexbox` só fazem sentido
aplicados a uma estrutura.

Você mencionou **predefinições**: aqui é onde elas rendem mais. Botões que trocam o valor de
uma propriedade (`justify-content: flex-start | center | space-between | space-around`) e o
aluno vê a caixa se mover. Ensina mais que o texto descrevendo cada valor.

### 3. JavaScript — executar e ver a saída
Duas variações, porque os dois snippets são de naturezas diferentes:
- `codeJsFundamentos` é lógica pura → um **console** capturando `console.log`
- `codeJsDom` manipula o DOM → precisa do **preview**, é HTML + JS juntos

Então o componente deve aceitar as três partes (html, css, js) e mostrar preview e/ou console
conforme o que o exemplo tiver.

## Desenho proposto

Um componente `CodePlayground` em `src/components/ui/playground/`:

```ts
interface PlaygroundProps {
  /** Partes iniciais; as vazias não geram aba. */
  html?: string;
  css?: string;
  js?: string;
  /** Quais partes o aluno pode editar (as demais viram leitura). */
  editable?: Array<'html' | 'css' | 'js'>;
  /** Botões que trocam um trecho do código — ex.: valores de justify-content. */
  presets?: Array<{ label: string; patch: Partial<Pick<PlaygroundProps,'html'|'css'|'js'>> }>;
  /** Mostrar console de saída (padrão: só se houver js). */
  showConsole?: boolean;
  title?: string;
}
```

**Montagem do documento:** as três partes são compostas numa string `srcdoc`, com o JS
embrulhado em `try/catch` e um shim de `console.log` que faz `postMessage` para o pai. O pai
escuta `message` e **valida `event.source === iframe.contentWindow`** antes de aceitar —
sem isso, qualquer aba poderia injetar mensagens no console.

**Execução:** só ao clicar "Executar" ou com debounce de ~600ms — não a cada tecla, que
reexecutaria laços a cada caractere.

**Laço infinito:** é o modo de falha mais provável numa turma de 1º período (`while(true)`
por engano trava a aba). Mitigação: o iframe é recriado a cada execução, e um timer no pai
que remove o iframe se ele não sinalizar conclusão em ~3s. Não é sandbox de CPU real — é
proteção contra o erro honesto, que é o caso a cobrir.

**Reset:** botão "Restaurar original" sempre visível. O aluno precisa poder quebrar sem medo.

## Restrições
- **Sem dependência nova.** Um editor de código completo (CodeMirror, Monaco) pesaria mais
  que o site inteiro. Um `<textarea>` com fonte monoespaçada, `spellcheck={false}` e Tab
  inserindo espaços resolve. Se depois quiserem destaque de sintaxe enquanto digita, aí sim
  se avalia uma lib — em PR próprio.
- Componentes < 150 linhas: separar editor, preview, console e controles.
- Sem `any`; cores só via variáveis do design system.
- O `CodeBlock` atual **continua existindo** — nem todo snippet deve virar playground
  (`codeDuasPaginas` mostra dois arquivos, não roda como um).

## Acessibilidade
- O `<textarea>` precisa de `<label>` associado, não só placeholder
- O iframe precisa de `title` descritivo
- O console de saída deve ser `aria-live="polite"`
- Tab dentro do editor: se capturar Tab para indentar, é preciso uma saída por teclado
  (Escape e depois Tab) — senão o usuário de teclado fica preso no campo

## Riscos
- **Segurança**, tratada acima. É o item que não admite atalho: se `allow-same-origin`
  entrar junto com `allow-scripts` em algum momento, a proteção desaparece silenciosamente.
  Vale um comentário no código explicando por que os dois nunca podem coexistir.
- **Escopo.** Três modos × 10 snippets é trabalho real. Fatiar: HTML primeiro (maior retorno,
  5 snippets), depois CSS com predefinições, depois JS.
- **Virar brinquedo.** Um playground sem enunciado é distração. Cada bloco editável deveria
  vir com uma provocação curta — "troque `justify-content` e veja o que acontece" —, senão o
  aluno lê o código e segue adiante, igual a hoje.
- **Mobile.** Editor e preview lado a lado não cabem em 375px; empilhar, com o preview
  primeiro (é o que interessa ver).

## Alcance além do INTW
`PGWB` (Programação Web, 5º período) é a continuação natural desta matéria e ainda não tem
conteúdo — nasceria já com playground. `ALPG` e `LPGM` usam outras linguagens e **não** são
cobertas por esta proposta: rodar Python no browser exigiria Pyodide (~10 MB), o que é outro
estudo.

## Recomendação
PR próprio, separado de qualquer conteúdo, começando pelo modo HTML. Se funcionar bem,
estender a CSS com predefinições e depois a JS. O componente entra em
`src/components/ui/playground/` desde o início — é plataforma, não conteúdo de matéria.
