import AIKahootQuiz from '../../components/ui/AIKahootQuiz';
import AIQuizGenerator from '../../components/ui/AIQuizGenerator';
import CodeBlock from '../../components/ui/CodeBlock';
import ExamQuizSelector from '../../components/ui/ExamQuizSelector';
import FlowDiagram from '../../components/ui/FlowDiagram';
import HighlightBox from '../../components/ui/HighlightBox';
import QuizTabs from '../../components/ui/QuizTabs';
import {
  SectionHeader,
  ConceptGrid,
  PanelList,
  ComparisonTable,
  TheoryBlock,
  type ConceptItem,
  type PanelItem,
  type ComparisonRow,
} from '../../components/sections';
import { ALPG_GUIDE_CONTEXT, ALPG_TOPICS, QUIZ_DATA } from './data';

interface ALPGSectionsProps {
  activeSection: string;
}

const examLabels = {
  prova1: { label: 'AV1', description: 'Fundamentos, Python, condicionais, escopo e laços.' },
  prova2: { label: 'AV2', description: 'Listas, módulos, funções, strings e exceções.' },
} as const;

/* ============================ AV1 ============================ */

function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Aprender a pensar como um programador" subtitle="A porta de entrada da programação: transformar problemas em algoritmos e escrevê-los em Python" colorClass="text-accent" />
      <HighlightBox title="A ideia central">
        <p>
          O computador manipula dados a partir de uma <strong>lista de instruções</strong>. Nossa tarefa é descobrir a sequência de passos que resolve um problema — o <strong>algoritmo</strong> — e escrevê-la em uma <strong>linguagem de programação</strong>. Nesta disciplina, essa linguagem é o <strong>Python</strong>.
        </p>
      </HighlightBox>
      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Todo programa segue o mesmo modelo</h3>
        <FlowDiagram items={['Entrada', 'Processamento', 'Saída']} />
        <p className="text-text-muted text-sm md:text-base leading-relaxed mt-3 reading-measure">
          Para somar dois números: a <strong>entrada</strong> fornece os números, o <strong>processamento</strong> faz a soma e a <strong>saída</strong> mostra o resultado.
        </p>
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Como o conteúdo se organiza</h3>
        <ConceptGrid items={disciplinaMapa} columns="md:grid-cols-2" />
      </div>
    </section>
  );
}

const disciplinaMapa: ConceptItem[] = [
  { title: 'AV1 — Fundamentos', description: 'Conceitos de algoritmo e lógica, Python básico (tipos, entrada/saída, operadores), estruturas condicionais, escopo e estruturas de repetição.', accent: 'accent' },
  { title: 'AV2 — Aprofundamento', description: 'Listas, módulos (math e random), funções (parâmetros e retorno), strings e tratamento de exceções.', accent: 'accent3' },
];

function ConceitosSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Conceitos de Algoritmo e Lógica" subtitle="O que é pensar logicamente e como isso vira um algoritmo" colorClass="text-accent" />
      <TheoryBlock title="Lógica: a arte de bem pensar">
        <p>
          A <strong>lógica</strong> determina quais raciocínios são válidos. Parte de <strong>premissas</strong> e chega a uma <strong>conclusão</strong> — que precisa ser verificada. A <strong>lógica de programação</strong> é a técnica de desenvolver <strong>algoritmos</strong> (sequências lógicas) para resolver problemas com uma linguagem de programação.
        </p>
      </TheoryBlock>

      <HighlightBox title="Um exemplo de raciocínio lógico">
        <p>
          Premissa: todo mamífero é um animal. Premissa: todo cavalo é um mamífero. <strong>Conclusão:</strong> logo, todo cavalo é um animal.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Resolvendo um problema com algoritmo</h3>
        <PanelList items={algoritmoPassos} columns="md:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Formas de representar um algoritmo</h3>
        <ConceptGrid items={representacoes} columns="md:grid-cols-2" />
      </div>
    </section>
  );
}

const algoritmoPassos: PanelItem[] = [
  { title: '1. Entender o problema', description: 'Pensar sobre o que precisa ser resolvido e quais dados estão envolvidos.' },
  { title: '2. Planejar os passos', description: 'Definir a sequência lógica de passos que leva à solução.' },
  { title: '3. Executar e verificar', description: 'Rodar a sequência e conferir se ela realmente resolve o problema.' },
];

const representacoes: ConceptItem[] = [
  { title: 'Textual (passo a passo)', description: 'Descreve o algoritmo em linguagem natural ou pseudocódigo: "Passo 1: fazer isso; Passo 2: fazer aquilo...".', accent: 'accent' },
  { title: 'Gráfica (fluxograma)', description: 'Representa o algoritmo por um diagrama, com símbolos para início, entrada, decisão, processo e fim.', accent: 'accent3' },
];

function PythonSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Python: Dados e Expressões" subtitle="Tipos de dados, variáveis, entrada, saída e operadores" colorClass="text-accent3" />
      <HighlightBox title="Saída com print()">
        <p>
          O comando de saída é o <code>print()</code> — os parênteses são obrigatórios. Texto vai entre aspas; expressões são calculadas antes de aparecer.
        </p>
      </HighlightBox>
      <CodeBlock
        language="python"
        title="Saída de dados"
        code={`print(1 + 1)          # mostra 2 (expressão calculada)
print("oi mundo")     # mostra o texto entre aspas
print(1, 2, "fim")    # vários valores separados por vírgula`}
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Os tipos de dados</h3>
        <ConceptGrid items={tiposDados} columns="md:grid-cols-2" />
      </div>

      <HighlightBox title="Cuidado com as armadilhas" accent="var(--color-accent2)">
        <p>
          <code>type("13")</code> devolve <code>str</code> (com aspas, é texto, não número). E <code>print(1,000,000)</code> imprime <code>1 0 0</code> — as vírgulas separam três argumentos, não formam um milhão.
        </p>
      </HighlightBox>

      <TheoryBlock title="Entrada e conversão de tipos">
        <p>
          A entrada de dados usa <code>input()</code>, que <strong>sempre retorna texto (str)</strong>. Para fazer contas, é preciso converter (fazer <em>casting</em>) com <code>int()</code> ou <code>float()</code>.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Entrada e casting"
        code={`nome = input("Qual seu nome? ")           # texto (str)
idade = int(input("Qual sua idade? "))     # convertido para inteiro
altura = float(input("Qual sua altura? ")) # convertido para real`}
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Operadores</h3>
        <PanelList items={operadores} columns="md:grid-cols-3" />
      </div>
    </section>
  );
}

const tiposDados: ConceptItem[] = [
  { title: 'int', description: 'Número inteiro. Ex.: 2, -5, 100.', accent: 'accent' },
  { title: 'float', description: 'Número real, com ponto decimal. Ex.: 3.2, -0.5.', accent: 'accent3' },
  { title: 'str', description: 'Texto (string), entre aspas. Ex.: "oi mundo".', accent: 'accent4' },
  { title: 'bool', description: 'Valor lógico: True (verdadeiro) ou False (falso).', accent: 'accent5' },
];

const operadores: PanelItem[] = [
  { title: 'Aritméticos', description: 'Fazem contas: + (soma), - (subtração), * (multiplicação), / (divisão) e ** (potência).' },
  { title: 'Relacionais', description: 'Comparam valores: == (igual), > , < , >= , <=. Resultam em True ou False.' },
  { title: 'Lógicos', description: 'Combinam ou negam condições: and (e), or (ou), not (negação).' },
];

function CondicionaisSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Estruturas Condicionais" subtitle="Tomar decisões no programa conforme uma condição" colorClass="text-accent4" />
      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Três formas de condicional</h3>
        <ConceptGrid items={condicionaisTipos} columns="md:grid-cols-3" />
      </div>

      <TheoryBlock title="A condicional encadeada (if / elif / else)">
        <p>
          Quando há várias alternativas, usamos <code>if</code>, <code>elif</code> (senão, se) e <code>else</code>. A condição é sempre uma <strong>expressão lógica</strong>, e o <code>else</code> é opcional.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Jogo do número secreto"
        code={`numeroSecreto = 10
chute = 12

if chute == numeroSecreto:
    print("Acertou!")
elif chute > numeroSecreto:
    print("O chute foi maior")
else:
    print("O chute foi menor")`}
      />

      <HighlightBox title="Condições aninhadas" accent="var(--color-accent3)">
        <p>
          Às vezes, dentro de uma alternativa, é preciso testar outra condição. Combinando faixas: aprovado se <code>media &gt;= 6.0</code>; recuperação se <code>media &gt;= 4.1 and media &lt; 6.0</code>; reprovado se <code>media &lt; 4.0</code>.
        </p>
      </HighlightBox>
    </section>
  );
}

const condicionaisTipos: ConceptItem[] = [
  { title: 'Simples (if)', description: 'Executa um bloco só quando a condição é verdadeira.', accent: 'accent' },
  { title: 'Composta (if/else)', description: 'Duas alternativas: um caminho quando é verdadeira, outro quando é falsa.', accent: 'accent3' },
  { title: 'Encadeada (if/elif/else)', description: 'Várias alternativas testadas em sequência, com um elif para cada caso.', accent: 'accent5' },
];

function EscopoSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Escopo de Variáveis" subtitle="Onde cada variável é válida — e por que isso causa erros comuns" colorClass="text-accent2" />
      <HighlightBox title="O que é escopo">
        <p>
          O <strong>escopo</strong> determina <strong>onde uma variável pode ser usada</strong>. Uma variável <strong>global</strong> existe durante toda a execução; uma <strong>local</strong> só existe dentro do bloco ou função em que foi criada.
        </p>
      </HighlightBox>

      <TheoryBlock title="O erro clássico de escopo">
        <p>
          Se uma variável é criada <strong>dentro de um bloco if</strong> e esse bloco não é executado, ela <strong>não existe</strong> — e usá-la depois causa erro. Veja: se o usuário não escolher "+", a variável <code>soma</code> nunca é criada.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Variável presa dentro do if"
        code={`opcao = input("Escolha (+, -): ")
if opcao == "+":
    soma = numero1 + numero2
print("Soma =", soma)   # ERRO se opcao não foi "+"`}
      />

      <HighlightBox title="Como resolver" accent="var(--color-accent5)">
        <p>
          Coloque a variável em um escopo mais amplo: <strong>inicialize-a antes do if</strong> (ex.: <code>soma = 0</code>), garantindo que ela sempre exista quando for usada.
        </p>
      </HighlightBox>
    </section>
  );
}

function RepeticaoSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Estruturas de Repetição" subtitle="Repetir instruções: os laços while e for" colorClass="text-accent5" />
      <HighlightBox title="Iteração">
        <p>
          Quando é preciso <strong>repetir</strong> a execução de comandos, usamos um <strong>laço</strong> (iteração). Há dois principais: o <code>while</code> (repetição por condição) e o <code>for</code> (percorre um conjunto).
        </p>
      </HighlightBox>

      <TheoryBlock title="Laço while — repete enquanto a condição for verdadeira">
        <p>
          É preciso <strong>atualizar a variável de controle</strong> dentro do laço; senão, a condição nunca fica falsa e ocorre um <strong>loop infinito</strong>.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Contador com while"
        code={`contador = 0
while contador < 9:
    print("Valor do contador:", contador)
    contador = contador + 1   # atualiza o contador
print("Tchau!")`}
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Laço for e a função range</h3>
        <PanelList items={rangeFormas} columns="md:grid-cols-3" />
      </div>
      <CodeBlock
        language="python"
        title="Números pares de 2 a 100 com for + range"
        code={`for numero in range(2, 101, 2):
    print(numero)`}
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">while × for</h3>
        <ComparisonTable rows={whileVsFor} leftLabel="while" rightLabel="for" />
      </div>
    </section>
  );
}

const rangeFormas: PanelItem[] = [
  { title: 'range(stop)', description: 'De 0 até stop-1. range(5) gera 0, 1, 2, 3, 4.' },
  { title: 'range(start, stop)', description: 'De start até stop-1. range(4, 8) gera 4, 5, 6, 7.' },
  { title: 'range(start, stop, step)', description: 'Com passo. range(1, 8, 2) gera 1, 3, 5, 7.' },
];

const whileVsFor: ComparisonRow[] = [
  { criterion: 'Quando usar', left: 'Repetição condicional (não se sabe quantas vezes)', right: 'Percorrer um conjunto conhecido (lista, range)' },
  { criterion: 'Controle', left: 'Contador e condição controlados à mão', right: 'O range substitui o contador' },
  { criterion: 'Risco', left: 'Loop infinito se a condição não muda', right: 'Termina ao esgotar o conjunto' },
];

/* ============================ AV2 ============================ */

function ListasSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Listas" subtitle="Coleções ordenadas de valores — a base para percorrer dados" colorClass="text-accent" />
      <HighlightBox title="O que é uma lista">
        <p>
          Uma <strong>lista</strong> é uma coleção <strong>ordenada</strong> de valores. Cada valor tem um <strong>índice que começa em 0</strong>; os elementos podem ter tipos diferentes e a lista pode ser aninhada.
        </p>
      </HighlightBox>
      <CodeBlock
        language="python"
        title="Operações com listas"
        code={`frutas = ["umbu", "jaca", "pitomba", "manga"]

print(frutas[0])         # "umbu" (primeiro, índice 0)
print(frutas[-1])        # "manga" (último)
print("jaca" in frutas)  # True (pertinência)

frutas.append("coco")    # adiciona ao final
del(frutas[1])           # remove o índice 1
print(len(frutas))       # tamanho da lista`}
      />
      <TheoryBlock title="Percorrer uma lista">
        <p>
          Com <code>for</code>, a variável recebe cada item automaticamente — a forma mais direta de percorrer uma lista.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Percorrendo com for"
        code={`alunos = ["joao", "pedro", "jose", "maria"]
for aluno in alunos:
    print("aluno:", aluno)`}
      />
    </section>
  );
}

function ModulosSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Módulos: math e random" subtitle="Reaproveitar código pronto do Python" colorClass="text-accent3" />
      <HighlightBox title="O que é um módulo">
        <p>
          Um <strong>módulo</strong> é um arquivo Python com definições reutilizáveis. Para usar suas funções, é preciso <strong>importá-lo antes</strong> (<code>import modulo</code>) e chamá-las como <code>modulo.funcao</code>. Algumas funções são <em>built-in</em> (como <code>print</code> e <code>input</code>) e não exigem importação.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Módulo math (cálculos prontos)</h3>
        <PanelList items={mathFuncoes} columns="md:grid-cols-2" />
      </div>
      <CodeBlock
        language="python"
        title="Raiz quadrada com math"
        code={`import math

numero = float(input("Número para a raiz quadrada: "))
print("Resultado:", math.sqrt(numero))
print("Valor de Pi:", math.pi)`}
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Módulo random (aleatoriedade)</h3>
        <PanelList items={randomFuncoes} columns="md:grid-cols-2" />
      </div>
      <CodeBlock
        language="python"
        title="Sorteios com random"
        code={`import random

print(random.randint(0, 5))                 # inteiro aleatório de 0 a 5
print(random.choice(["praia", "serra", 42]))  # escolhe um item da lista`}
      />
    </section>
  );
}

const mathFuncoes: PanelItem[] = [
  { title: 'pow(x, y) e sqrt(x)', description: 'Potência de x elevado a y e raiz quadrada de x.' },
  { title: 'pi', description: 'A constante Pi já armazenada (3.14159...).' },
  { title: 'log(x, y) e log10(x)', description: 'Logaritmo de x na base y, e logaritmo na base 10.' },
  { title: 'Sem saber a fórmula', description: 'A vantagem do módulo é usar o cálculo pronto, sem precisar decorar a fórmula.' },
];

const randomFuncoes: PanelItem[] = [
  { title: 'randint(a, b)', description: 'Sorteia um número inteiro entre a e b.' },
  { title: 'uniform', description: 'Sorteia um número fracionado (real).' },
  { title: 'choice([lista])', description: 'Escolhe um item aleatório de uma lista (de tipos variados).' },
  { title: 'shuffle e sample', description: 'shuffle embaralha a lista definitivamente; sample embaralha temporariamente.' },
];

function FuncoesSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Funções" subtitle="Agrupar código em blocos reutilizáveis: dividir para conquistar" colorClass="text-accent4" />
      <HighlightBox title="O que é uma função">
        <p>
          Uma <strong>função</strong> é uma sequência de instruções agrupadas para realizar uma tarefa. Define-se com <code>def</code>, e o código indentado pertence a ela. Há dois momentos: a <strong>definição</strong> (criar) e a <strong>chamada</strong> (usar) — se a função nunca for chamada, nada acontece.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Por que usar funções</h3>
        <ConceptGrid items={funcoesVantagens} columns="md:grid-cols-2" />
      </div>

      <TheoryBlock title="Parâmetros e retorno">
        <p>
          <strong>Parâmetros</strong> passam valores para a função. O <code>return</code> devolve um resultado a quem chamou; sem <code>return</code>, a função apenas executa (por exemplo, imprime).
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Função com parâmetros e retorno"
        code={`def calcular_media(m1, m2, m3, m4):
    media = (m1 + m2 + m3 + m4) / 4
    return media                 # devolve o resultado

def verificar_aprovacao(media):
    if media >= 6:
        print("Aprovado")
    else:
        print("Reprovado")

def main():
    media = calcular_media(9.0, 5.0, 4.0, 3.0)  # recebe o retorno
    verificar_aprovacao(media)                  # passa como parâmetro

if __name__ == '__main__':
    main()`}
      />

      <HighlightBox title="A função main()" accent="var(--color-accent5)">
        <p>
          A <code>main()</code> é o ponto de entrada do programa, reconhecido por <code>if __name__ == '__main__':</code>. Ela é executada primeiro e organiza as chamadas das demais funções. A palavra <code>global</code> indica variáveis de escopo maior, válidas em todo o programa.
        </p>
      </HighlightBox>
    </section>
  );
}

const funcoesVantagens: ConceptItem[] = [
  { title: 'Dividir para conquistar', description: 'Quebrar uma solução grande em partes pequenas e gerenciáveis.', accent: 'accent' },
  { title: 'Reuso', description: 'Escrever uma vez e chamar quantas vezes precisar, sem repetir código.', accent: 'accent3' },
  { title: 'Teste', description: 'Testar cada função isoladamente é mais fácil do que testar tudo de uma vez.', accent: 'accent4' },
  { title: 'Manutenção', description: 'Corrigir ou melhorar um trecho num único lugar afeta todos os usos.', accent: 'accent5' },
];

function StringsSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Strings" subtitle="Trabalhar com texto: uma sequência de caracteres imutáveis" colorClass="text-accent" />
      <HighlightBox title="O que é uma string">
        <p>
          Uma <strong>string</strong> (<code>str</code>) é uma sequência de caracteres, criada com aspas simples ou duplas. Ela é <strong>imutável</strong>: não se pode alterar um caractere pelo índice — <code>linguagem[0] = "a"</code> gera um <code>TypeError</code>.
        </p>
      </HighlightBox>

      <TheoryBlock title="Formatação de texto">
        <p>
          O <code>print</code> concatena com um espaço entre os argumentos; o operador <code>+</code> concatena <strong>sem</strong> espaço. Para montar mensagens, usam-se o <code>.format()</code> e as <strong>f-strings</strong>.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Formatando strings"
        code={`print("Admiravel", "Mundo", "Novo")    # espaço entre os argumentos
print("#" + "Python" + "3")            # sem espaço (concatenação com +)

frase = "base {0}, altura {1}, area {2}".format(3, 4, 12)
linguagem = "Python"
print(f"Programando em {linguagem}")   # f-string`}
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Métodos úteis de string</h3>
        <PanelList items={stringMetodos} columns="md:grid-cols-2" />
      </div>
    </section>
  );
}

const stringMetodos: PanelItem[] = [
  { title: 'len(s)', description: 'Quantidade de caracteres. len("Banana") → 6.' },
  { title: 'upper() / lower()', description: 'Tudo em maiúsculas ou minúsculas. "banana".upper() → "BANANA".' },
  { title: 'capitalize()', description: 'Primeira letra maiúscula, resto minúsculo. "banana" → "Banana".' },
  { title: 'strip() / lstrip() / rstrip()', description: 'Remove espaços em branco do início e/ou do fim.' },
  { title: 'find(sub) / count(sub)', description: 'Posição da primeira ocorrência e número de ocorrências de um trecho.' },
  { title: 'replace(a, b)', description: 'Substitui todas as ocorrências de a por b.' },
  { title: 'startswith / endswith', description: 'Verifica se a string começa ou termina com um trecho (retorna True/False).' },
  { title: 'isdigit() / isalnum()', description: 'Verifica se são só dígitos, ou só letras e números.' },
];

function ExcecoesSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Tratamento de Exceções" subtitle="Lidar com erros sem deixar o programa quebrar" colorClass="text-accent2" />
      <HighlightBox title="O que é uma exceção">
        <p>
          Uma <strong>exceção</strong> é uma situação inesperada, que foge ao fluxo previsto — como dividir por zero ou acessar um índice que não existe. Quando ela ocorre, o programa <strong>para</strong> e lança o erro. Como não se pode parar um sistema por causa disso, é preciso <strong>tratar</strong> as exceções.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Erros comuns</h3>
        <PanelList items={errosComuns} columns="md:grid-cols-3" />
      </div>

      <TheoryBlock title="try / except / finally">
        <p>
          O <code>try</code> tenta executar o código; se algo falha, a exceção é capturada pelo <code>except</code>. O <code>finally</code> executa <strong>sempre</strong>, tendo havido erro ou não.
        </p>
      </TheoryBlock>
      <CodeBlock
        language="python"
        title="Tratando um erro"
        code={`lista = [1, 2, 3]
try:
    for x in range(0, 5):
        print(lista[x])
except Exception as e:
    print("Erro:", e)          # captura o IndexError
finally:
    print(">>> Sempre executa")`}
      />
    </section>
  );
}

const errosComuns: PanelItem[] = [
  { title: 'ZeroDivisionError', description: 'Tentar dividir um número por zero.' },
  { title: 'IndexError', description: 'Acessar um índice que não existe em uma lista.' },
  { title: 'TypeError', description: 'Usar um tipo onde outro é esperado (ex.: texto onde se espera número).' },
];

function QuizSection() {
  return (
    <section className="animate-fade-in">
      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" examLabels={examLabels} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>A IA analisa os conteúdos selecionados do guia e gera lotes de 1, 5 ou 10 perguntas inéditas com 4 alternativas, resposta correta e explicação detalhada.</p>
            </HighlightBox>
            <AIQuizGenerator guideContext={ALPG_GUIDE_CONTEXT} topics={ALPG_TOPICS} />
          </div>
        )}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" examLabels={examLabels} />}
        aiKahoot={<AIKahootQuiz guideContext={ALPG_GUIDE_CONTEXT} topics={ALPG_TOPICS} />}
      />
    </section>
  );
}

export default function ALPGSections({ activeSection }: ALPGSectionsProps) {
  switch (activeSection) {
    case 'intro':
      return <IntroSection />;
    case 'conceitos':
      return <ConceitosSection />;
    case 'python':
      return <PythonSection />;
    case 'condicionais':
      return <CondicionaisSection />;
    case 'escopo':
      return <EscopoSection />;
    case 'repeticao':
      return <RepeticaoSection />;
    case 'listas':
      return <ListasSection />;
    case 'modulos':
      return <ModulosSection />;
    case 'funcoes':
      return <FuncoesSection />;
    case 'strings':
      return <StringsSection />;
    case 'excecoes':
      return <ExcecoesSection />;
    case 'quiz':
      return <QuizSection />;
    default:
      return <IntroSection />;
  }
}
