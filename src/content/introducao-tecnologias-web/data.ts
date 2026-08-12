import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

export const INTW_GUIDE_CONTEXT = `
GUIA DE INTRODUÇÃO ÀS TECNOLOGIAS WEB (INTW) - Resumo:

1. TECNOLOGIAS DA INFORMAÇÃO E COMUNICAÇÃO (TIC): TICs são o conjunto de tecnologias que permitem produzir, armazenar, transmitir e acessar informação. Estão presentes no cotidiano em comércio (caixas de autoatendimento, QR Code para pagamento), bancos (internet banking, caixas eletrônicos, PIX), saúde (prontuário eletrônico, aplicativos de acompanhamento, laudos de imagem), transporte público (aplicativos de itinerário, cartão de bilhetagem eletrônica), educação (laboratórios, lousa digital, realidade virtual), meios de comunicação, entretenimento e política (urna eletrônica, consulta pública legislativa). Responsabilidade do desenvolvedor de TIC: estar ciente de que seu trabalho afeta a vida das pessoas; prever os impactos do trabalho para encaminhar boas soluções, diminuir impactos negativos previstos e fornecer salvaguardas para impactos negativos imprevistos. Sistemas interativos são um subconjunto das TICs: o caixa automático é interativo, o sistema em batch que processa informações bancárias não é. Situação típica de uso: um usuário com um objetivo interage com um sistema por meio de uma interface, dentro de um contexto de uso que inclui tempo e ambiente físico, social e cultural. Evolução das interfaces: anos 1940-1950 interface de hardware para engenheiros, com painéis e controles eletromecânicos; anos 1960-1970 interface de programação (COBOL, FORTRAN); anos 1970-1980 primeiros aplicativos e interface de terminais com linguagens de comando; anos 1980 interface de interação para diálogo (GUIs e multimídia); anos 1990 interface para realizar trabalho (redes e grupos); a partir de 2000 a interface torna-se onipresente (celulares, bluetooth, dispositivos móveis, telas interativas, tecnologia embarcada/IoT e aplicações em nuvem).

2. INTERNET E WEB NÃO SÃO A MESMA COISA: a Internet é uma rede global de redes — é a infraestrutura. A Web (World Wide Web, WWW) é uma coleção de informações acessada por meio da Internet — é servida em cima dessa infraestrutura. Analogia: a Internet é a livraria, a Web é a coleção de livros dela; a Internet é o hardware, a Web é o software. Aplicações web usam o protocolo HTTP, que é uma camada sobre o TCP; aplicações de Internet em geral podem usar TCP ou UDP e qualquer porta, enquanto o HTTP tradicionalmente usa a porta 80. Enviar dados por um socket numa porta arbitrária é usar a Internet sem usar a Web.

3. OS TRÊS PILARES DA WEB SEGUNDO O W3C: (1) um esquema de nomes para localizar fontes de informação, a URI; (2) um protocolo de acesso a essas fontes, hoje o HTTP; (3) uma linguagem de hipertexto para navegar entre as fontes, o HTML.

4. HIPERTEXTO E HTML: HTML é a sigla de HyperText Markup Language, Linguagem de Marcação de Hipertexto. É uma linguagem para publicação de conteúdo (texto, imagem, vídeo, áudio) na Web. Hipertexto é um conjunto de elementos, ou nós, ligados por conexões; esses elementos formam uma rede de informação e não são conectados linearmente como as páginas de um livro. O HTML foi desenvolvido originalmente por Tim Berners-Lee e ganhou popularidade com o navegador Mosaic, de Marc Andreessen, na década de 1990. Desde o começo foi projetado para ser independente de plataforma, navegador e meio de acesso — interoperabilidade significa menos custo, porque um mesmo código é lido por diversos meios.

5. HISTÓRIA E PADRONIZAÇÃO: entre 1993 e 1995 surgiram HTML+, HTML 2.0 e HTML 3.0, mas o HTML ainda não era tratado como padrão; só em 1997 o grupo de trabalho do W3C produziu a versão 3.2. Em 2004, desenvolvedores de Mozilla, Apple e Opera fundaram o WHATWG (Web Hypertext Application Technology Working Group), insatisfeitos com o rumo dado ao XHTML. Em 2006 o W3C reconheceu o trabalho do grupo e Tim Berners-Lee anunciou que trabalharia junto com o WHATWG na produção do HTML5, em detrimento do XHTML 2, cujo grupo foi descontinuado em 2009. O HTML5 mantém foco em retrocompatibilidade: nenhum site precisa ser refeito para se adequar aos novos conceitos.

6. MOTORES DE RENDERIZAÇÃO: cada navegador usa um motor responsável por processar o código da página. Webkit (Safari e Google Chrome), Gecko (Firefox, Mozilla, Camino), Trident (Internet Explorer 4 ao 9) e Presto (Opera 7 ao 10). Focar a compatibilidade nos motores, e não em cada navegador, alcança uma amplitude maior de meios de acesso. Com HTML5 e CSS3 o desenvolvimento passou a ser modular: as propriedades foram divididas em grupos independentes que lançam novidades a qualquer momento, o que torna a evolução mais dinâmica mas aumenta a chance de incompatibilidade entre navegadores.

7. ESTRUTURA BÁSICA DE UM DOCUMENTO HTML5: o Doctype é a primeira linha do documento, antes da tag html, e não é uma tag — é uma instrução que informa ao navegador qual especificação usar. No HTML5 ele é simplesmente <!DOCTYPE html>. O elemento html é a raiz da árvore de elementos e leva o atributo lang (ex.: lang="pt-br"), necessário para que os user-agents saibam o idioma principal do documento; lang pode ser usado em qualquer elemento. O head guarda os metadados — informações sobre a página. A metatag charset define a tabela de caracteres: <meta charset="utf-8">, forma que substitui o antigo <meta http-equiv="Content-Type" content="text/html; charset=utf-8">. A tabela Unicode suporta cerca de um milhão de caracteres e fornece um número único para cada caractere, independente de plataforma, programa ou língua. Há dois tipos de link no HTML: a tag a, que leva o usuário a outros documentos, e a tag link, que referencia fontes externas usadas pelo documento — por exemplo <link rel="stylesheet" href="estilo.css">.

8. ELEMENTOS DE LINHA E DE BLOCO: elementos de linha marcam na maioria das vezes texto (a, strong, em, img, input, abbr, span). Elementos de bloco são caixas que dividem o conteúdo em seções do layout. Regras: elementos de linha podem conter outros elementos de linha, dependendo da categoria; elementos de linha nunca podem conter elementos de bloco; elementos de bloco sempre podem conter elementos de linha; elementos de bloco podem conter outros elementos de bloco dependendo da categoria — um parágrafo não pode conter um div, mas o contrário é possível.

9. MODELOS DE CONTEÚDO (CATEGORIAS DO HTML5): Metadata content (base, command, link, meta, noscript, script, style, title) vem antes da apresentação e relaciona o documento a outros. Flow content reúne a maioria dos elementos usados no body. Sectioning content define grupos de cabeçalhos e rodapés: article, aside, nav e section. Heading content: h1 a h6 e hgroup. Phrasing content marca o texto do documento. Embedded content importa outra fonte de informação: audio, canvas, embed, iframe, img, math, object, svg, video. Interactive content são os elementos que participam da interação do usuário.

10. TAGS SEMÂNTICAS DO HTML5: a função do HTML é indicar que tipo de informação a página exibe. Antes do HTML5 não havia padrão para marcar rodapé, cabeçalho, sidebar e menus, e a diferenciação era apenas visual. section define uma seção genérica do documento. nav representa uma seção com links para outras partes do site — apenas grupos de links importantes, como o menu principal. article representa uma parte da página que poderá ser distribuída e reutilizada, como um post ou artigo. aside é um bloco que referencia o conteúdo ao seu redor, como sidebars e publicidade. header é um grupo de introdução ou de elementos de navegação. footer representa o rodapé. hgroup agrupa títulos de h1 a h6 quando há título e subtítulos. time marca um horário ou data precisa. Com essas tags, buscadores conseguem vasculhar o código de maneira mais eficaz.

11. ELEMENTOS MODIFICADOS E DESCONTINUADOS: b passou a ter o mesmo nível semântico de um span, mantendo o estilo negrito mas sem dar importância ao texto; i também virou um span, com o itálico servindo para indicar ênfase em termos técnicos ou frases em outros idiomas; strong ganhou mais importância; hr passou a ter o nível de um parágrafo, usado para quebrar linhas e fazer separações; a sem href representa um placeholder no lugar onde o link se encontra. Foram descontinuados por terem efeito apenas visual: basefont, big, center, font, s, strike, tt e u — suas funções são melhor controladas pelo CSS. Foram descontinuados por ferir acessibilidade e usabilidade: frame, frameset e noframes. Não foram incluídos: acronym (em favor de abbr), applet (em favor de object), isindex (em favor de form controls) e dir (em favor de ul). Também foram descontinuados atributos de formatação como align, bgcolor, border, cellpadding e cellspacing, porque o CSS controla melhor essas características.

12. FORMATAÇÃO DE TEXTO, LISTAS E LINKS: os títulos vão de h1 a h6, em ordem de importância. p marca parágrafos. strong indica importância forte e em indica ênfase — ambos são semânticos, diferente de b e i, que são apenas visuais. Listas não ordenadas usam ul com itens li e listas ordenadas usam ol com itens li; o atributo reversed em ol inverte a numeração. Links usam a com o atributo href, que aponta para outro documento, uma âncora na mesma página ou um endereço externo. Imagens usam img com src e o atributo alt, que descreve a imagem para leitores de tela — o alt é requisito de acessibilidade.

13. TABELAS EM HTML: table delimita a tabela; tr define uma linha; th define uma célula de cabeçalho; td define uma célula de dados. thead, tbody e tfoot agrupam cabeçalho, corpo e rodapé. caption dá um título à tabela. Os atributos colspan e rowspan fazem uma célula ocupar várias colunas ou várias linhas. O atributo scope em th indica se o cabeçalho vale para a coluna ou para a linha, o que ajuda leitores de tela. Tabelas devem ser usadas para dados tabulares, não para diagramar layout — layout é responsabilidade do CSS.

14. FORMULÁRIOS EM HTML: form envolve os campos e tem os atributos action (para onde os dados vão) e method (GET ou POST). input é o campo genérico, controlado pelo atributo type. label associa um rótulo a um campo pelo atributo for, que aponta para o id do campo — isso aumenta a área clicável e é requisito de acessibilidade. select com options cria uma lista de seleção; textarea cria um campo de texto de várias linhas; button e input type="submit" enviam o formulário. Campos de escolha: type="radio" permite uma opção por grupo (mesmo name) e type="checkbox" permite várias. fieldset agrupa campos relacionados e legend dá título ao grupo.

15. NOVOS TIPOS DE CAMPO DO HTML5: o atributo type do input ganhou novos valores. tel para telefone, sem máscara ou validação porque não há padrão mundial para números de telefone. search para campo de busca, cuja aparência pode mudar conforme o agente de usuário. email com formatação e validação. url para endereço web, também com validação. Campos de data e hora: datetime, date, month, week, time e datetime-local — todos validados e formatados pelo agente de usuário, que pode exibir um calendário ou seletor de horário. number para números, com os atributos min, max e step. range, que muda a apresentação do mesmo dado para um controle deslizante. color, um seletor de cor cujo valor é uma cor no formato #ff6600. O atributo step define a diferença mínima entre dois valores.

16. VALIDAÇÃO DE FORMULÁRIOS NO HTML5: antes do HTML5 validar formulário era tarefa de JavaScript; o HTML5 automatiza boa parte do processo. required torna o campo obrigatório. placeholder mostra um texto de exemplo dentro do campo — antes isso era feito com gambiarra em onfocus e onblur. autofocus coloca o foco no campo assim que a página carrega, e diferente da solução em JavaScript o foco é aplicado tão logo o campo é criado, não ao final do carregamento, o que evita roubar o foco de quem já começou a digitar. maxlength limita a quantidade de caracteres e no HTML5 passou a valer também para textarea. pattern define uma expressão regular de validação sem JavaScript. novalidate no form e formnovalidate no botão de submit desligam a validação, útil para um botão de "salvar rascunho". Para validação customizada, o evento oninput é disparado a cada modificação do valor — diferente de onchange, que dispara ao final da edição — e o método setCustomValidity recebe uma string: se vazia o campo é válido, caso contrário é inválido.

17. O QUE É CSS: CSS formata a informação entregue pelo HTML — essa informação pode ser imagem, texto, vídeo, áudio ou qualquer outro elemento. A formatação é na maioria das vezes visual, mas não necessariamente: no CSS Aural manipula-se o áudio entregue por sistemas de leitura de tela, controlando volume, profundidade e tipo de voz. A separação entre estrutura (HTML) e apresentação (CSS) é o princípio central. A sintaxe é seletor { propriedade: valor; }.

18. SELETORES CSS: o seletor representa uma estrutura usada como condição para determinar quais elementos serão formatados — é a alma do CSS. Seletor de tag/elemento aplica a todos os elementos daquele tipo (p { }). Seletor de classe usa ponto e vale para vários elementos (.destaque { }). Seletor de id usa cerquilha e deve identificar um único elemento na página (#cabecalho { }). Seletor encadeado (descendente) formata um elemento dentro de outro: div p strong a { } atinge o link dentro de um strong, dentro de um p, dentro de um div. Seletor agrupado separa elementos por vírgula para que compartilhem a mesma formatação: strong, em, span { }. Seletores complexos alcançam elementos que antes exigiriam marcar uma classe via JavaScript: E > F seleciona os elementos F que são filhos diretos de E; E + F seleciona o elemento F imediatamente adjacente a E — h1 + p formata o parágrafo que vem logo depois de um título. Seletores de atributo: elemento[atr] com o atributo presente, elemento[atr="x"] com valor exato, elemento[atr^="x"] começando com x, elemento[atr$="x"] terminando com x e elemento[atr*="x"] contendo x. Pseudo-classes: :root seleciona o elemento raiz do documento, normalmente o html; :nth-child(n) seleciona o enésimo elemento; :empty seleciona elementos sem filhos; :enabled, :disabled e :checked selecionam estados de elementos de interface como checkbox e radio button.

19. FORMAS DE APLICAR CSS: inline pelo atributo style no próprio elemento, interno com a tag style dentro do head, e externo com um arquivo .css referenciado por <link rel="stylesheet" href="estilo.css">. O CSS externo é o recomendado porque separa apresentação de estrutura e permite reaproveitar a mesma folha em várias páginas.

20. PROPRIEDADES DE ESTILO E O MODELO DE CAIXA: com CSS controlam-se cores, background, características de fonte, margins, paddings e posição. Toda caixa tem conteúdo, padding (espaço interno, entre conteúdo e borda), border (a borda) e margin (espaço externo, entre a borda e os outros elementos). Propriedades cobradas nas atividades da turma: background-image, background-color, box-shadow, border-radius, margin, padding, width, height, font e color. border-radius arredonda os cantos; box-shadow projeta sombra. Cores podem ser escritas em hexadecimal, por nome ou em RGBA, em que o quarto valor é o alfa (transparência) — a diferença para a propriedade opacity é que RGBA afeta só aquela cor, enquanto opacity afeta o elemento inteiro e seus filhos.

21. CSS3 — RECURSOS MODULARES: gradientes criados só com CSS evitam uma requisição de imagem ao servidor, deixando o site mais rápido; os "stops" definem em que ponto uma cor termina e a outra começa, em porcentagem. Columns divide texto em colunas automaticamente com column-count (quantidade), column-width (largura mínima) e column-gap (espaço entre colunas). Transform 2D manipula a forma como o elemento aparece na tela com scale (dimensão), skew (ângulos dos eixos X e Y), translation (move nos eixos X e Y, sem precisar mexer em float, position ou margin) e rotate (rotação); várias transformações podem ser combinadas separando os valores por espaço, e transform-origin define o ponto de origem da transformação, cujo padrão é o centro do objeto. Transições e animações usam a propriedade transition e a regra @keyframes. Há ainda múltiplos backgrounds, @font-face para fontes personalizadas e paged media com @page.

22. FLEXBOX: layout em uma dimensão, ativado com display:flex no elemento pai (o container). Os filhos diretos viram itens flexíveis. flex-direction define o eixo principal (row ou column). justify-content alinha os itens ao longo do eixo principal. align-items alinha no eixo transversal. gap define o espaçamento entre os itens. flex-wrap permite quebrar em várias linhas. O flexbox foi exigido explicitamente na atividade de CSS da turma, junto com a validação de formulário.

23. JAVASCRIPT — CLIENT-SIDE SCRIPT: o JavaScript é executado no navegador, do lado do cliente, e é o terceiro pilar do desenvolvimento web ao lado de HTML (estrutura) e CSS (apresentação): ele cuida do comportamento. Não é preciso instalar nada para começar — o próprio navegador executa. O código pode ser escrito dentro da tag script ou em um arquivo .js externo. O console do navegador (Ctrl+Shift+J no Chrome) mostra erros e permite testar comandos.

24. FUNDAMENTOS DE JAVASCRIPT: variáveis guardam dados e são declaradas com let (valor que muda), const (valor que não é reatribuído) ou o antigo var. Tipos básicos: number, string, boolean, além de null e undefined. Concatenação de texto usa o operador + e template literals usam crase com \${}. Operadores aritméticos: + - * / e % (resto). Comparação: === compara valor e tipo (estrito) e == faz conversão de tipo antes de comparar, por isso o === é o recomendado. Estruturas condicionais: if, else if e else. Estruturas de repetição: while, que repete enquanto a condição for verdadeira, e for, que reúne inicialização, condição e incremento na mesma linha. Funções são declaradas com function, recebem parâmetros e podem devolver um valor com return — servem para não repetir código. Arrays guardam vários dados numa mesma variável, são indexados a partir de 0, têm a propriedade length e métodos como push. Entrada e saída no navegador: alert exibe uma mensagem, prompt pede um valor ao usuário e sempre devolve string (por isso é preciso converter com Number ou parseInt para fazer contas), e console.log escreve no console.

25. JAVASCRIPT E O DOM: quando o navegador carrega a página, ele constrói uma coleção de objetos que representam os elementos HTML — o DOM (Document Object Model). Cada elemento vira um objeto. É pelo DOM que o JavaScript lê e altera a página. document.getElementById busca um elemento pelo id. O HTML5 acrescentou getElementsByClassName, que busca por classe, e a Selector API com querySelector e querySelectorAll, que aceitam seletores CSS. innerHTML lê ou substitui o conteúdo de um elemento. Eventos conectam a ação do usuário ao código: onclick para clique, oninput para modificação de valor de campo, onchange para o fim da edição. O atributo hidden esconde um elemento e pode ser manipulado por JavaScript.

DIVISÃO POR AVALIAÇÕES (declarada pelo professor no mural da turma):
- AV1: composta pela Atividade 1 (Introdução à TIC, Internet e Web, criação e formatação básica de hipertexto com html, head, body, h1 a h6, strong, em, img) e pela Atividade de HTML (avaliação presencial de formatação de documento: duas páginas HTML com links entre elas sobre Internet e Web, usando h1, h2, h3, strong, em, img, a, p; tags semânticas article e section; listas ordenadas e não ordenadas).
- AV2: composta pela Atividade de Formulário e Tabela (páginas de formulário de busca e de tabela de resultados, no modelo do SIGAA) e pela Atividade de Formulário com CSS (cadastro de estágio: arquivo form.html mais style.css, com validação de campos input e select no HTML, flexbox com display:flex, seletores de id, class e tag, e as propriedades background-image, background-color, box-shadow, border-radius, margin, padding, align-items, width, height, font e color).
`;

export const INTW_TOPICS: QuizTopicOption[] = [
  {
    value: 'prova1',
    label: 'AV1: TIC, Internet/Web e HTML',
    prompt:
      'Conteúdo da AV1 de Introdução às Tecnologias Web, conforme as atividades declaradas pelo professor: Tecnologias da Informação e Comunicação (presença das TICs no cotidiano em comércio, bancos, saúde, transporte, educação e política; responsabilidade do desenvolvedor de TIC de prever impactos; sistemas interativos; evolução das interfaces dos anos 1940 até a computação onipresente); diferença entre Internet e Web (a Internet é a rede global de redes, a infraestrutura; a Web é a coleção de informações servida sobre ela; HTTP é uma camada sobre TCP e usa tradicionalmente a porta 80); os três pilares da Web segundo o W3C (URI, HTTP e HTML); hipertexto e a história do HTML (Tim Berners-Lee, navegador Mosaic, W3C, WHATWG fundado em 2004 por Mozilla, Apple e Opera, HTML5 em detrimento do XHTML 2, retrocompatibilidade); motores de renderização (Webkit, Gecko, Trident, Presto); estrutura básica de um documento HTML5 (Doctype simplificado, elemento html com atributo lang, head, meta charset utf-8 e Unicode, tag link para folha de estilo); elementos de linha e de bloco e suas regras de aninhamento; modelos de conteúdo do HTML5 (metadata, flow, sectioning, heading, phrasing, embedded e interactive content); tags semânticas (section, nav, article, aside, header, footer, hgroup, time); elementos modificados e descontinuados (b e i viraram span semanticamente; center, font, big, u descontinuados por serem apenas visuais; frame e frameset por ferir acessibilidade); e formatação de texto com h1 a h6, p, strong, em, listas ul, ol e li, links com a e href, imagens com img, src e alt.',
  },
  {
    value: 'prova2',
    label: 'AV2: Tabelas, Formulários, CSS e JavaScript',
    prompt:
      'Conteúdo da AV2 de Introdução às Tecnologias Web: tabelas em HTML (table, tr, th, td, thead, tbody, tfoot, caption, colspan, rowspan, scope; tabela é para dados tabulares e não para layout); formulários (form com action e method, input, label com for apontando para o id do campo, select com option, textarea, radio e checkbox, fieldset e legend); novos tipos de campo do HTML5 (tel, search, email, url, date e demais tipos de data e hora, number com min, max e step, range e color); validação de formulários sem JavaScript (required, placeholder, autofocus, maxlength também em textarea, pattern com expressão regular, novalidate e formnovalidate, evento oninput e método setCustomValidity); o que é CSS e a separação entre estrutura e apresentação; sintaxe seletor, propriedade e valor; seletores de tag, de classe, de id, encadeado/descendente, agrupado, seletores complexos E > F e E + F, seletores de atributo e pseudo-classes como :nth-child, :checked e :disabled; formas de aplicar CSS (inline, interno e externo com a tag link); modelo de caixa com content, padding, border e margin; propriedades exigidas na atividade (background-image, background-color, box-shadow, border-radius, margin, padding, width, height, font e color); cores em hexadecimal e RGBA e a diferença entre RGBA e opacity; recursos do CSS3 (gradientes e stops, columns, transform 2D com scale, skew, translation e rotate, transform-origin, transitions e @keyframes); flexbox com display:flex, flex-direction, justify-content, align-items e gap; e JavaScript como client-side script (variáveis com let e const, tipos, operadores, === versus ==, if/else, while e for, funções com parâmetros e return, arrays com índice a partir de 0 e length, alert, prompt que sempre devolve string e console.log, e manipulação do DOM com getElementById, querySelector, innerHTML e eventos como onclick).',
  },
  { value: 'tic', label: 'TIC e sociedade' },
  { value: 'internet-web', label: 'Internet, Web e HTTP' },
  { value: 'html-estrutura', label: 'HTML: estrutura do documento' },
  { value: 'html-semantica', label: 'HTML: semântica e formatação de texto' },
  { value: 'tabelas', label: 'Tabelas' },
  { value: 'formularios', label: 'Formulários e validação' },
  { value: 'css-fundamentos', label: 'CSS: seletores e box model' },
  { value: 'css-layout', label: 'CSS: flexbox e CSS3' },
  { value: 'javascript', label: 'JavaScript e DOM' },
];

/**
 * Avaliações declaradas pelo professor no mural. Cada uma reúne duas atividades:
 * a AV1 junta a Atividade 1 e a Atividade de HTML; a AV2 junta a atividade de
 * Formulário e Tabela e a de Formulário com CSS.
 */
export const INTW_EXAMS: ExamDefinition[] = [
  {
    id: 'av1',
    label: 'AV1',
    description: 'TIC, Internet e Web, e formatação de documentos HTML com tags semânticas.',
  },
  {
    id: 'av2',
    label: 'AV2',
    description: 'Tabelas, formulários com validação, CSS (incluindo flexbox) e JavaScript.',
  },
];

export const INTW_SECTIONS = [
  { id: 'intro', title: 'Introdução às Tecnologias Web', shortTitle: 'Introdução' },
  { id: 'tic', title: 'Tecnologias da Informação e Comunicação', shortTitle: 'TIC', exams: ['av1'] },
  { id: 'internet-web', title: 'Internet, Web e Protocolo HTTP', shortTitle: 'Internet/Web', exams: ['av1'] },
  { id: 'html-estrutura', title: 'HTML5: Estrutura do Documento', shortTitle: 'HTML: estrutura', exams: ['av1'] },
  { id: 'html-semantica', title: 'Semântica e Formatação de Texto', shortTitle: 'Semântica', exams: ['av1'] },
  { id: 'tabelas', title: 'Tabelas', shortTitle: 'Tabelas', exams: ['av2'] },
  { id: 'formularios', title: 'Formulários e Validação', shortTitle: 'Formulários', exams: ['av2'] },
  { id: 'css-fundamentos', title: 'CSS: Seletores e Box Model', shortTitle: 'CSS: base', exams: ['av2'] },
  { id: 'css-layout', title: 'CSS: Flexbox e Recursos do CSS3', shortTitle: 'Flexbox/CSS3', exams: ['av2'] },
  { id: 'javascript', title: 'JavaScript e o DOM', shortTitle: 'JavaScript', exams: ['av2'] },
  { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
] as const;

export type IntwSectionId = (typeof INTW_SECTIONS)[number]['id'];

export const QUIZ_DATA: QuizQuestionData[] = [
  {
    id: 'q1',
    exams: ['av1'],
    question: 'Qual afirmação descreve corretamente a relação entre Internet e Web?',
    options: [
      'São sinônimos: "Internet" é o termo técnico e "Web" é o termo popular para a mesma tecnologia.',
      'A Internet é a infraestrutura de rede; a Web é uma coleção de informações servida sobre essa infraestrutura.',
      'A Web é a infraestrutura física de cabos e roteadores; a Internet é o conjunto de sites acessados por ela.',
      'A Internet só existe desde a criação do HTML; antes disso havia apenas redes locais isoladas.',
    ],
    correctIndex: 1,
    feedbackCorrect:
      'Exato. A Internet é uma rede global de redes — a infraestrutura. A Web (WWW) é uma coleção de informações servida em cima dela. A analogia da aula: a Internet é a livraria, a Web é a coleção de livros; a Internet é o hardware, a Web é o software.',
    feedbackWrong:
      'A resposta correta é que a Internet é a infraestrutura e a Web é servida sobre ela. Não são sinônimos: enviar dados por um socket numa porta arbitrária usa a Internet sem usar a Web. E a relação não é invertida — quem é infraestrutura é a Internet.',
  },
  {
    id: 'q2',
    exams: ['av1'],
    question:
      'Segundo o W3C, a Web se apoia em três pilares. Qual alternativa lista corretamente esses três pilares?',
    options: [
      'HTML, CSS e JavaScript.',
      'TCP, UDP e IP.',
      'URI (esquema de nomes), HTTP (protocolo de acesso) e HTML (linguagem de hipertexto).',
      'Navegador, servidor e banco de dados.',
    ],
    correctIndex: 2,
    feedbackCorrect:
      'Isso mesmo. O W3C define a Web sobre um esquema de nomes para localizar fontes (URI), um protocolo para acessá-las (HTTP) e uma linguagem de hipertexto para navegar entre elas (HTML).',
    feedbackWrong:
      'Os três pilares são URI, HTTP e HTML. HTML/CSS/JavaScript é o trio de tecnologias client-side (estrutura, apresentação e comportamento) — importante, mas não é a definição de pilares do W3C. TCP/UDP/IP são protocolos de rede, camada abaixo da Web.',
  },
  {
    id: 'q3',
    exams: ['av1'],
    question:
      'Você precisa marcar o nome de um produto de forma que leitores de tela e buscadores entendam que aquele texto tem importância destacada. Qual marcação é a mais adequada?',
    options: [
      '<b>Notebook</b>, porque deixa o texto em negrito.',
      '<strong>Notebook</strong>, porque indica importância forte, e não apenas aparência.',
      '<font weight="bold">Notebook</font>, porque controla o peso da fonte.',
      '<span style="font-weight:bold">Notebook</span>, porque aplica o negrito via CSS.',
    ],
    correctIndex: 1,
    feedbackCorrect:
      'Correto. strong carrega significado — indica importância forte — e por isso é interpretado por leitores de tela e buscadores. No HTML5 o b passou a ter o mesmo nível semântico de um span: mantém o negrito, mas não atribui importância.',
    feedbackWrong:
      'A escolha semântica é strong. O b existe e continua deixando em negrito, mas no HTML5 ele equivale semanticamente a um span — não comunica importância. A tag font foi descontinuada por ter efeito apenas visual, e o span com style resolve a aparência sem comunicar significado algum.',
  },
  {
    id: 'q4',
    exams: ['av1'],
    question:
      'Por que as tags center, font e big foram descontinuadas no HTML5, enquanto frame e frameset foram descontinuadas por outro motivo?',
    options: [
      'As primeiras porque têm efeito apenas visual, que o CSS controla melhor; as segundas porque ferem acessibilidade e usabilidade.',
      'As primeiras porque eram lentas de renderizar; as segundas porque consumiam muita memória.',
      'As primeiras porque não funcionavam no Internet Explorer; as segundas porque não funcionavam no Webkit.',
      'Todas foram descontinuadas pelo mesmo motivo: incompatibilidade com o XHTML.',
    ],
    correctIndex: 0,
    feedbackCorrect:
      'Exatamente. O HTML5 separa estrutura de apresentação: elementos cujo efeito era puramente visual (basefont, big, center, font, s, strike, tt, u) saíram porque o CSS faz isso melhor. Já frame, frameset e noframes saíram por ferir princípios de acessibilidade e usabilidade.',
    feedbackWrong:
      'São dois motivos diferentes. center, font e big saíram por serem apenas visuais — território do CSS. frame e frameset saíram por prejudicar acessibilidade e usabilidade. Desempenho e compatibilidade com navegadores específicos não foram os critérios.',
  },
  {
    id: 'q5',
    exams: ['av1'],
    question: 'Considere o trecho abaixo. Ele é válido segundo as regras de aninhamento do HTML?\n<p>Texto <div>bloco</div></p>',
    options: [
      'Sim, porque qualquer elemento pode conter qualquer outro elemento.',
      'Sim, porque p e div são ambos elementos de bloco.',
      'Não, porque um parágrafo não pode conter um div, embora um div possa conter um parágrafo.',
      'Não, porque div é um elemento de linha e não pode ficar dentro de um elemento de bloco.',
    ],
    correctIndex: 2,
    feedbackCorrect:
      'Certo. A regra da aula é explícita: elementos de bloco podem conter outros elementos de bloco dependendo da categoria — um parágrafo não pode conter um div, mas o contrário é possível. O p só aceita conteúdo de texto (phrasing content).',
    feedbackWrong:
      'O trecho é inválido. Elementos de bloco podem conter outros blocos dependendo da categoria, e o parágrafo é justamente a exceção citada na aula: p não pode conter div, mas div pode conter p. E o div é elemento de bloco, não de linha.',
  },
  {
    id: 'q6',
    exams: ['av1'],
    question:
      'Numa página de notícias, você precisa marcar o bloco de links do menu principal e o texto da notícia em si. Quais tags semânticas do HTML5 são as mais adequadas?',
    options: [
      '<div class="menu"> para o menu e <div class="texto"> para a notícia.',
      '<nav> para o menu e <article> para a notícia.',
      '<aside> para o menu e <section> para a notícia.',
      '<header> para o menu e <footer> para a notícia.',
    ],
    correctIndex: 1,
    feedbackCorrect:
      'Isso. nav representa uma seção com links importantes para outras partes do site, como o menu principal. article representa uma parte da página que pode ser distribuída e reutilizada de forma independente — exatamente o caso de uma notícia.',
    feedbackWrong:
      'O par correto é nav e article. Os divs funcionam visualmente, mas não comunicam significado — era justamente essa a limitação anterior ao HTML5. aside é conteúdo lateral que referencia o que está ao redor, e footer é rodapé; nenhum dos dois descreve um menu ou uma notícia.',
  },
  {
    id: 'q7',
    exams: ['av2'],
    question:
      'Numa tabela de resultados, você quer que a primeira célula de cada linha funcione como cabeçalho daquela linha, e não da coluna. Como indicar isso corretamente?',
    options: [
      'Usar <td> e aplicar negrito com CSS.',
      'Usar <th scope="row">, porque scope indica se o cabeçalho vale para a linha ou para a coluna.',
      'Usar <th colspan="1">, porque colspan define a direção do cabeçalho.',
      'Usar <caption> em cada linha da tabela.',
    ],
    correctIndex: 1,
    feedbackCorrect:
      'Correto. th marca a célula como cabeçalho e o atributo scope diz a quem ele se refere: scope="row" para a linha, scope="col" para a coluna. Isso é o que permite ao leitor de tela anunciar o cabeçalho certo ao navegar pelos dados.',
    feedbackWrong:
      'A resposta é th com scope="row". Um td com negrito parece cabeçalho mas não é — a informação semântica se perde para quem usa leitor de tela. colspan controla quantas colunas a célula ocupa, não sua direção semântica, e caption dá título à tabela inteira, uma vez só.',
  },
  {
    id: 'q8',
    exams: ['av2'],
    question:
      'No formulário de cadastro de estágio, o campo de e-mail precisa ser obrigatório e validado pelo navegador, sem escrever JavaScript. Qual marcação atende a isso?',
    options: [
      '<input type="text" name="email" obrigatorio>',
      '<input type="email" name="email" required>',
      '<input type="text" name="email" validate="email">',
      '<input type="email" name="email" novalidate>',
    ],
    correctIndex: 1,
    feedbackCorrect:
      'Exato. type="email" já traz formatação e validação de e-mail no próprio agente de usuário, e required torna o preenchimento obrigatório. Essa é a proposta do HTML5: automatizar boa parte da validação que antes exigia JavaScript.',
    feedbackWrong:
      'O correto é type="email" com required. Não existe atributo "obrigatorio" nem "validate" no HTML — os nomes são em inglês e padronizados. E novalidate faz o oposto do pedido: desliga a validação do formulário.',
  },
  {
    id: 'q9',
    exams: ['av2'],
    question:
      'Qual é a diferença prática entre associar um rótulo com <label for="nome"> e apenas colocar o texto "Nome:" antes do campo?',
    options: [
      'Nenhuma: o resultado visual é idêntico, então tanto faz.',
      'O label deixa o texto em negrito automaticamente.',
      'O label associa o rótulo ao campo pelo id, aumentando a área clicável e permitindo que leitores de tela anunciem o rótulo do campo.',
      'O label é obrigatório para que o formulário seja enviado.',
    ],
    correctIndex: 2,
    feedbackCorrect:
      'Isso mesmo. O atributo for aponta para o id do campo e cria uma associação real: clicar no rótulo foca o campo, e o leitor de tela anuncia qual rótulo pertence a qual campo. Texto solto não cria nenhuma dessas ligações.',
    feedbackWrong:
      'A diferença é de acessibilidade e usabilidade, não de aparência. O for aponta para o id do campo, criando uma associação que amplia a área clicável e permite ao leitor de tela anunciar o rótulo correto. O label não formata nada por conta própria nem é condição para o envio.',
  },
  {
    id: 'q10',
    exams: ['av2'],
    question: 'Considere a folha de estilo abaixo. Qual regra tem precedência para colorir o parágrafo?\n#aviso { color: red; }\n.destaque { color: blue; }\np { color: green; }',
    options: [
      'A regra p, porque seletores de tag são avaliados por último.',
      'A regra .destaque, porque classes são mais flexíveis que ids.',
      'A regra #aviso, porque o seletor de id é o mais específico dos três.',
      'A que estiver escrita por último no arquivo, independente do seletor.',
    ],
    correctIndex: 2,
    feedbackCorrect:
      'Certo. A especificidade cresce de tag para classe e de classe para id: o seletor de id vence os outros dois. A ordem no arquivo só desempata entre seletores de mesma especificidade.',
    feedbackWrong:
      'Vence o #aviso. O seletor de id é o mais específico dos três — por isso ele deve identificar um único elemento na página, enquanto a classe vale para vários e o seletor de tag atinge todos daquele tipo. A ordem no arquivo só decide entre seletores igualmente específicos.',
  },
  {
    id: 'q11',
    exams: ['av2'],
    question:
      'Um botão tem width de 200px, padding de 10px e border de 2px. No box model padrão do CSS, o que a propriedade margin controla?',
    options: [
      'O espaço interno entre o conteúdo e a borda do botão.',
      'O espaço externo, entre a borda do botão e os elementos vizinhos.',
      'A espessura da borda do botão.',
      'A largura total do botão, somando conteúdo e borda.',
    ],
    correctIndex: 1,
    feedbackCorrect:
      'Exato. No box model, o padding é o espaço interno (entre conteúdo e borda), a border é a borda em si, e a margin é o espaço externo que separa a caixa dos elementos ao redor.',
    feedbackWrong:
      'A margin é o espaço externo. Quem controla o espaço interno, entre conteúdo e borda, é o padding — essa é a troca mais comum. A espessura da borda é a border, e a largura do conteúdo é o width.',
  },
  {
    id: 'q12',
    exams: ['av2'],
    question:
      'Na atividade de CSS, o professor pediu para usar flexbox. Depois de aplicar display:flex no container, qual propriedade alinha os itens ao longo do eixo principal?',
    options: [
      'align-items, que distribui os itens no eixo principal.',
      'justify-content, que alinha os itens ao longo do eixo principal.',
      'flex-wrap, que define o alinhamento dos itens.',
      'text-align, que alinha o conteúdo de todos os itens.',
    ],
    correctIndex: 1,
    feedbackCorrect:
      'Correto. justify-content atua no eixo principal (definido por flex-direction) e align-items atua no eixo transversal. Trocar os dois é o erro mais comum de quem está começando com flexbox.',
    feedbackWrong:
      'Quem alinha no eixo principal é o justify-content; o align-items alinha no eixo transversal, perpendicular a ele. flex-wrap decide se os itens quebram em várias linhas, e text-align alinha texto dentro de um elemento, sem relação com o eixo do flex container.',
  },
  {
    id: 'q13',
    exams: ['av2'],
    question:
      'Você lê um valor com prompt("Digite sua idade") e soma 1 ao resultado, mas em vez de 26 aparece "251". Qual é a causa?',
    options: [
      'O prompt sempre devolve string, então o + concatenou em vez de somar; era preciso converter com Number.',
      'O JavaScript não consegue somar números digitados pelo usuário.',
      'Faltou declarar a variável com const em vez de let.',
      'O operador + não funciona com números no JavaScript; é preciso usar add().',
    ],
    correctIndex: 0,
    feedbackCorrect:
      'Isso mesmo. O prompt devolve sempre uma string. Com "25" + 1 o operador + concatena e produz "251". Convertendo antes — Number(prompt(...)) ou parseInt — a soma acontece de verdade e o resultado é 26.',
    feedbackWrong:
      'A causa é o tipo do valor: prompt devolve sempre string, e o + entre string e número concatena em vez de somar. A correção é converter com Number ou parseInt antes de calcular. A escolha entre let e const não afeta o tipo, e o + soma normalmente quando os dois lados são números.',
  },
  {
    id: 'q14',
    exams: ['av2'],
    question:
      'Você quer trocar o texto de um elemento <p id="msg"> quando o usuário clicar num botão. Qual combinação faz isso pelo DOM?',
    options: [
      'document.getElementById("msg").innerHTML = "Novo texto", disparado no evento onclick do botão.',
      'document.getElementByClass("msg").text = "Novo texto", disparado no evento onload.',
      'Alterar o arquivo HTML e salvar, porque o DOM é somente leitura.',
      'document.querySelector("msg").value = "Novo texto", disparado no evento oninput.',
    ],
    correctIndex: 0,
    feedbackCorrect:
      'Correto. getElementById localiza o elemento pelo id, innerHTML substitui seu conteúdo, e o onclick liga a ação ao clique do usuário. É assim que o JavaScript altera a página já carregada.',
    feedbackWrong:
      'A forma correta é getElementById("msg").innerHTML no onclick. Não existe getElementByClass (o nome é getElementsByClassName, no plural). O DOM não é somente leitura — alterá-lo é justamente o papel do JavaScript. E querySelector("msg") buscaria uma tag chamada "msg"; para id seria "#msg", e value serve para campos de formulário, não para parágrafos.',
  },
];
