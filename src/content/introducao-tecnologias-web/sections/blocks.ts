import type { ComparisonRow, ConceptItem, PanelItem, StatItem } from '../../../components/sections';

export const disciplineOverview: ConceptItem[] = [
  {
    title: 'Estrutura — HTML',
    description:
      'Marca o significado do conteúdo: o que é título, parágrafo, lista, tabela, formulário. Sem HTML não existe página.',
    accent: 'accent',
  },
  {
    title: 'Apresentação — CSS',
    description:
      'Formata a informação entregue pelo HTML: cores, espaçamentos, tipografia e layout. Separado da estrutura, de propósito.',
    accent: 'accent2',
  },
  {
    title: 'Comportamento — JavaScript',
    description:
      'Roda no navegador (client-side) e reage ao usuário: valida campos, altera a página pelo DOM, responde a cliques.',
    accent: 'accent3',
  },
];

export const learningPath = [
  'TIC e o papel de quem desenvolve',
  'Internet, Web e protocolo HTTP',
  'HTML5: estrutura do documento',
  'Semântica, texto, listas e links',
  'Tabelas de dados',
  'Formulários e validação',
  'CSS: seletores e box model',
  'Flexbox e recursos do CSS3',
  'JavaScript e manipulação do DOM',
];

export const examBreakdown: PanelItem[] = [
  {
    title: 'AV1 — Atividade 1 + Atividade de HTML',
    description:
      'A Atividade 1 cobra o material de Introdução à TIC, Internet e Web e a formatação básica de hipertexto (html, head, body, h1 a h6, strong, em, img). A Atividade de HTML foi presencial: formatar um texto num documento HTML usando as tags semânticas article e section, títulos h1 a h3, listas ordenadas e não ordenadas, parágrafos e imagem.',
  },
  {
    title: 'AV2 — Formulário e Tabela + Formulário com CSS',
    description:
      'A primeira parte pede uma página com formulário de busca e outra com a tabela de resultados, no modelo do SIGAA. A segunda é o cadastro de estágio: form.html e style.css, com validação dos campos input e select no HTML, flexbox com display:flex, seletores de id, class e tag, e as propriedades background-image, background-color, box-shadow, border-radius, margin, padding, align-items, width, height, font e color.',
  },
];

export const ticAreas: PanelItem[] = [
  {
    title: 'Comércio e bancos',
    description:
      'Caixas de autoatendimento, pagamento por QR Code, internet banking, caixas eletrônicos e PIX. A tecnologia deixou de ser um diferencial e virou a forma padrão de transacionar.',
  },
  {
    title: 'Saúde',
    description:
      'Prontuário eletrônico, aplicativos de acompanhamento de condições de saúde, agendamento e leitura de laudos de imagem — sistemas em que um erro de interface tem consequência clínica.',
  },
  {
    title: 'Transporte público',
    description:
      'Aplicativos de itinerário em tempo real e cartões de bilhetagem eletrônica, que mudaram a relação do usuário com o tempo de espera.',
  },
  {
    title: 'Educação',
    description:
      'Laboratórios, lousa digital, realidade virtual em sala e ambientes virtuais de aprendizagem — esta própria disciplina é EAD com encontros presenciais mensais.',
  },
  {
    title: 'Política e cidadania',
    description:
      'Urna eletrônica e consulta pública a proposições legislativas: TIC aplicada ao exercício de direitos, onde confiança e transparência são requisitos.',
  },
  {
    title: 'Meios de comunicação e entretenimento',
    description:
      'Streaming, redes sociais e mídia sob demanda, que reorganizaram como a informação circula e quem tem voz na circulação.',
  },
];

export const developerResponsibility: PanelItem[] = [
  {
    title: 'Estar ciente do alcance do trabalho',
    description:
      'O software que você escreve afeta a vida das pessoas que o usam. Essa é a premissa da qual as outras responsabilidades derivam.',
  },
  {
    title: 'Prever os impactos',
    description:
      'Antecipar o efeito do sistema para encaminhar boas intervenções e soluções, em vez de descobrir o problema depois que ele já atingiu o usuário.',
  },
  {
    title: 'Diminuir os impactos negativos previstos',
    description:
      'Quando o efeito ruim é conhecido de antemão, ele deve ser reduzido ainda no projeto — não tratado como custo inevitável.',
  },
  {
    title: 'Fornecer salvaguardas',
    description:
      'Para os impactos negativos que não dá para prever, o sistema precisa oferecer proteções: formas de desfazer, de corrigir e de pedir ajuda.',
  },
];

export const interfaceEvolution = [
  '1940-1950: hardware para engenheiros (painéis eletromecânicos)',
  '1960-1970: interface de programação (COBOL, FORTRAN)',
  '1970-1980: terminais e linguagens de comando',
  '1980: interação por diálogo (GUIs e multimídia)',
  '1990: interface para o trabalho (redes e grupos)',
  '2000 em diante: computação onipresente (móveis, IoT, nuvem)',
];

export const internetVsWeb: ComparisonRow[] = [
  {
    criterion: 'O que é',
    left: 'Rede global de redes de computadores.',
    right: 'Coleção de informações acessada por meio da Internet.',
  },
  {
    criterion: 'Camada',
    left: 'A infraestrutura — o "hardware" da analogia.',
    right: 'Serviço servido em cima da infraestrutura — o "software".',
  },
  {
    criterion: 'Analogia da aula',
    left: 'A livraria inteira.',
    right: 'A coleção de livros dentro da livraria.',
  },
  {
    criterion: 'Protocolo',
    left: 'Pode usar TCP ou UDP, em qualquer porta.',
    right: 'HTTP, que é uma camada sobre o TCP (tradicionalmente porta 80).',
  },
  {
    criterion: 'Exemplo de uso',
    left: 'Enviar dados por um socket numa porta arbitrária.',
    right: 'Abrir uma página no navegador.',
  },
];

export const webPillars: ConceptItem[] = [
  {
    title: 'URI — esquema de nomes',
    description:
      'Um jeito padronizado de nomear e localizar as fontes de informação na Web. É o endereço que identifica o recurso.',
    accent: 'accent',
  },
  {
    title: 'HTTP — protocolo de acesso',
    description:
      'O protocolo usado para acessar essas fontes. É uma camada sobre o TCP e usa tradicionalmente a porta 80 (443 com TLS).',
    accent: 'accent2',
  },
  {
    title: 'HTML — linguagem de hipertexto',
    description:
      'A linguagem que permite navegar com facilidade entre as fontes de informação, ligando documentos por conexões.',
    accent: 'accent3',
  },
];

export const htmlHistory: PanelItem[] = [
  {
    title: '1990 — origem',
    description:
      'Tim Berners-Lee desenvolve o HTML. A linguagem ganha popularidade quando o navegador Mosaic, de Marc Andreessen, se firma na década de 1990.',
  },
  {
    title: '1993-1997 — rumo ao padrão',
    description:
      'Surgem HTML+, HTML 2.0 e HTML 3.0, mas sem status de padrão. Só em 1997 o grupo de trabalho do W3C produz a versão 3.2, tratada como prática comum.',
  },
  {
    title: '2004 — nasce o WHATWG',
    description:
      'Desenvolvedores de Mozilla, Apple e Opera fundam o Web Hypertext Application Technology Working Group, insatisfeitos com o rumo dado ao XHTML.',
  },
  {
    title: '2006-2009 — convergência',
    description:
      'O W3C reconhece o trabalho do grupo e Tim Berners-Lee anuncia parceria na produção do HTML5, em detrimento do XHTML 2 — cujo grupo é descontinuado em 2009.',
  },
];

export const renderEngines: ComparisonRow[] = [
  { criterion: 'Webkit', left: 'Safari, Google Chrome', right: 'Motor mais compatível com os padrões do HTML5 à época do material.' },
  { criterion: 'Gecko', left: 'Firefox, Mozilla, Camino', right: 'Compatível com boa parte da especificação de HTML5 e CSS3.' },
  { criterion: 'Trident', left: 'Internet Explorer 4 ao 9', right: 'IE 8 e 7 praticamente sem suporte a HTML5 — a dor de cabeça da retrocompatibilidade.' },
  { criterion: 'Presto', left: 'Opera 7 ao 10', right: 'O Opera 10 foi pioneiro em implementar os recursos de formulário do HTML5.' },
];

export const documentParts: ConceptItem[] = [
  {
    title: '<!DOCTYPE html>',
    description:
      'Primeira linha do documento, antes da tag html. Não é uma tag: é uma instrução que informa ao navegador qual especificação usar. No HTML5 ficou curto assim.',
    accent: 'accent',
  },
  {
    title: '<html lang="pt-br">',
    description:
      'A raiz da árvore de elementos. O atributo lang informa o idioma principal do documento aos user-agents — e pode ser usado em qualquer outro elemento.',
    accent: 'accent2',
  },
  {
    title: '<head>',
    description:
      'Onde ficam os metadados: informações sobre a página e seu conteúdo, que não aparecem diretamente na tela.',
    accent: 'accent3',
  },
  {
    title: '<meta charset="utf-8">',
    description:
      'Define a tabela de caracteres. Substitui a forma antiga com http-equiv. O Unicode dá um número único a cada caractere, independente de plataforma ou língua.',
    accent: 'accent4',
  },
  {
    title: '<link rel="stylesheet">',
    description:
      'Referencia fontes externas usadas pelo documento. É diferente da tag a: link importa recursos, a leva o usuário a outro documento.',
    accent: 'accent5',
  },
  {
    title: '<body>',
    description:
      'O conteúdo visível da página — tudo o que o usuário lê e com o que interage.',
    accent: 'accent',
  },
];

export const contentCategories: PanelItem[] = [
  {
    title: 'Metadata content',
    description:
      'base, command, link, meta, noscript, script, style e title. Vem antes da apresentação e relaciona o documento a outros documentos.',
  },
  {
    title: 'Flow content',
    description: 'A maioria dos elementos usados dentro do body e em aplicações.',
  },
  {
    title: 'Sectioning content',
    description: 'article, aside, nav e section — definem grupos de cabeçalhos e rodapés, juntando blocos de texto.',
  },
  {
    title: 'Heading content',
    description: 'h1 a h6 e hgroup: definem os cabeçalhos, que podem estar contidos em elementos de sectioning.',
  },
  {
    title: 'Phrasing content',
    description: 'Elementos que marcam o texto do documento, inclusive dentro de um parágrafo.',
  },
  {
    title: 'Embedded content',
    description: 'audio, canvas, embed, iframe, img, math, object, svg e video — importam outra fonte de informação.',
  },
  {
    title: 'Interactive content',
    description: 'Elementos que participam da interação: a, button, details, input, label, select, textarea e outros.',
  },
];

export const inlineVsBlock: ComparisonRow[] = [
  {
    criterion: 'O que marcam',
    left: 'Na maioria das vezes, texto: a, strong, em, img, input, abbr, span.',
    right: 'Caixas que dividem o conteúdo em seções do layout.',
  },
  {
    criterion: 'Podem conter elementos de linha?',
    left: 'Sim, dependendo da categoria (a não pode conter label).',
    right: 'Sim, sempre.',
  },
  {
    criterion: 'Podem conter elementos de bloco?',
    left: 'Nunca.',
    right: 'Depende da categoria: p não pode conter div, mas div pode conter p.',
  },
];

export const semanticTags: ConceptItem[] = [
  {
    title: '<header>',
    description: 'Grupo de introdução ou de elementos de navegação. Pode agrupar índices, campos de busca e até logos.',
    accent: 'accent',
  },
  {
    title: '<nav>',
    description:
      'Seção com links para outras partes do site. Nem todo grupo de links é um nav — só os importantes, como o menu principal.',
    accent: 'accent2',
  },
  {
    title: '<article>',
    description:
      'Parte da página que pode ser distribuída e reutilizada de forma independente: um post, um artigo, um bloco de comentários.',
    accent: 'accent3',
  },
  {
    title: '<section>',
    description:
      'Seção genérica do documento. A home de um site pode se dividir em seções: destaque, novidades, contato.',
    accent: 'accent4',
  },
  {
    title: '<aside>',
    description:
      'Bloco que referencia o conteúdo ao seu redor: sidebars, publicidade ou grupos de links separados do conteúdo principal.',
    accent: 'accent5',
  },
  {
    title: '<footer>',
    description:
      'O rodapé. Não precisa estar necessariamente no fim da página — uma seção também pode ter o seu.',
    accent: 'accent',
  },
];

export const modifiedElements: PanelItem[] = [
  {
    title: 'b e i viraram spans semânticos',
    description:
      'O b mantém o negrito mas não dá importância ao texto; o i mantém o itálico e serve para indicar ênfase, termos técnicos ou frases em outros idiomas. Quando o que importa é o significado, use strong e em.',
  },
  {
    title: 'Descontinuados por serem apenas visuais',
    description:
      'basefont, big, center, font, s, strike, tt e u saíram da especificação: o efeito era puramente visual e o CSS controla isso melhor.',
  },
  {
    title: 'Descontinuados por ferir acessibilidade',
    description: 'frame, frameset e noframes foram removidos por prejudicar acessibilidade e usabilidade.',
  },
  {
    title: 'Substituídos por outros elementos',
    description:
      'acronym saiu em favor de abbr, applet em favor de object, isindex em favor dos controles de formulário e dir em favor de ul.',
  },
  {
    title: 'Atributos de formatação removidos',
    description:
      'align, bgcolor, border, cellpadding, cellspacing e outros foram descontinuados nas tags em que serviam só para formatar — território do CSS.',
  },
];

export const newInputTypes: PanelItem[] = [
  {
    title: 'email e url',
    description: 'Trazem formatação e validação prontas. O agente de usuário pode até integrar com a agenda de contatos.',
  },
  {
    title: 'tel',
    description:
      'Telefone. Propositalmente sem máscara ou validação: não existe no mundo um padrão único para números de telefone. Para restringir o formato, use pattern.',
  },
  {
    title: 'search',
    description: 'Campo de busca. A aparência pode mudar conforme o agente de usuário, para parecer com a busca do sistema.',
  },
  {
    title: 'date, time, month, week e datetime-local',
    description:
      'Validados e formatados pelo agente de usuário, que pode exibir calendário ou seletor de horário. O datetime-local lida com fuso horário do usuário.',
  },
  {
    title: 'number e range',
    description:
      'Aceitam min, max e step. São o mesmo dado com apresentações diferentes: number é caixa numérica, range é controle deslizante.',
  },
  {
    title: 'color',
    description: 'Seletor de cor. O valor devolvido é uma cor no formato #ff6600.',
  },
];

export const validationAttributes: PanelItem[] = [
  {
    title: 'required',
    description: 'Torna o preenchimento obrigatório. O navegador bloqueia o envio e avisa o usuário, sem uma linha de JavaScript.',
  },
  {
    title: 'placeholder',
    description:
      'Texto de exemplo dentro do campo. Antes do HTML5 isso era gambiarra com onfocus e onblur. Atenção: placeholder não substitui o label.',
  },
  {
    title: 'autofocus',
    description:
      'Coloca o foco no campo assim que ele é criado — e não ao final do carregamento, como nas soluções em JavaScript. Isso evita roubar o foco de quem já começou a digitar.',
  },
  {
    title: 'maxlength',
    description: 'Limita a quantidade de caracteres. No HTML5 passou a valer também para textarea, corrigindo uma lacuna antiga.',
  },
  {
    title: 'pattern',
    description: 'Define uma expressão regular de validação, sem JavaScript. Útil para CEP, telefone e matrícula.',
  },
  {
    title: 'novalidate e formnovalidate',
    description:
      'Desligam a validação: novalidate no form inteiro, formnovalidate num botão específico — o caso clássico é o botão "salvar rascunho".',
  },
];

export const cssApplyModes: ComparisonRow[] = [
  {
    criterion: 'Inline (atributo style)',
    left: 'Não precisa de arquivo nem de seletor.',
    right: 'Mistura apresentação com estrutura e não reaproveita nada. Evite.',
  },
  {
    criterion: 'Interno (tag style no head)',
    left: 'Fica tudo num arquivo só, útil para uma página isolada.',
    right: 'Não serve para outras páginas: o estilo morre naquele documento.',
  },
  {
    criterion: 'Externo (link rel="stylesheet")',
    left: 'Separa apresentação de estrutura e vale para o site inteiro.',
    right: 'É o recomendado — e é o que a atividade de CSS da turma pede (form.html + style.css).',
  },
];

export const selectorTypes: ConceptItem[] = [
  {
    title: 'Tag (elemento)',
    description: 'p { } atinge todos os parágrafos do documento. É o seletor mais abrangente e o menos específico.',
    accent: 'accent',
  },
  {
    title: 'Classe',
    description: '.destaque { } vale para todos os elementos que tenham aquela classe. Um elemento pode ter várias classes.',
    accent: 'accent2',
  },
  {
    title: 'Id',
    description: '#cabecalho { } identifica um único elemento na página. É o mais específico dos três.',
    accent: 'accent3',
  },
  {
    title: 'Encadeado (descendente)',
    description: 'div p strong a { } formata o link que está dentro de um strong, dentro de um p, dentro de um div.',
    accent: 'accent4',
  },
  {
    title: 'Agrupado',
    description: 'strong, em, span { } aplica a mesma formatação aos três, separados por vírgula.',
    accent: 'accent5',
  },
  {
    title: 'Complexos',
    description:
      'E > F pega os filhos diretos e E + F pega o elemento imediatamente adjacente. h1 + p formata o parágrafo logo depois do título — sem precisar marcar uma classe.',
    accent: 'accent',
  },
];

export const boxModelParts: StatItem[] = [
  { label: 'content', value: 'O conteúdo (width e height)', accent: 'text-accent' },
  { label: 'padding', value: 'Espaço interno, conteúdo → borda', accent: 'text-accent2' },
  { label: 'border', value: 'A borda em si', accent: 'text-accent3' },
  { label: 'margin', value: 'Espaço externo, borda → vizinhos', accent: 'text-accent4' },
];

export const flexProperties: PanelItem[] = [
  {
    title: 'display: flex',
    description: 'Vai no elemento PAI, que vira o container. Os filhos diretos passam a ser itens flexíveis.',
  },
  {
    title: 'flex-direction',
    description: 'Define o eixo principal: row (padrão, em linha) ou column (em coluna). Tudo o mais depende dessa escolha.',
  },
  {
    title: 'justify-content',
    description:
      'Alinha os itens ao longo do eixo principal: flex-start, center, space-between, space-around.',
  },
  {
    title: 'align-items',
    description:
      'Alinha no eixo transversal, perpendicular ao principal. Trocar justify-content por align-items é o erro mais comum de quem começa.',
  },
  {
    title: 'gap',
    description: 'Espaçamento entre os itens, sem precisar de margin nos filhos.',
  },
  {
    title: 'flex-wrap',
    description: 'Permite que os itens quebrem em várias linhas quando não cabem numa só.',
  },
];

export const css3Features: PanelItem[] = [
  {
    title: 'Gradientes',
    description:
      'Criados só com CSS, evitam uma requisição de imagem ao servidor — o site fica mais rápido. Os "stops" definem, em porcentagem, onde uma cor termina e a outra começa.',
  },
  {
    title: 'Columns',
    description:
      'Divide texto em colunas automaticamente: column-count define a quantidade, column-width a largura mínima e column-gap o espaço entre elas.',
  },
  {
    title: 'Transform 2D',
    description:
      'scale muda a dimensão, skew inclina os ângulos, translation move nos eixos X e Y (sem mexer em float ou position) e rotate gira. Podem ser combinados separando por espaço.',
  },
  {
    title: 'transform-origin',
    description: 'Define o ponto de origem da transformação. O padrão é o centro do objeto.',
  },
  {
    title: 'Transições e animações',
    description: 'A propriedade transition anima a mudança entre dois estados; a regra @keyframes descreve animações com vários passos.',
  },
  {
    title: 'RGBA e opacity',
    description:
      'No RGBA o quarto valor é o alfa e afeta só aquela cor. Já a opacity afeta o elemento inteiro e seus filhos — é essa a diferença entre os dois.',
  },
];

export const jsBasics: ConceptItem[] = [
  {
    title: 'Variáveis',
    description:
      'let para valor que muda, const para valor que não é reatribuído, var é a forma antiga. Guardam number, string, boolean, null ou undefined.',
    accent: 'accent',
  },
  {
    title: 'Operadores',
    description:
      'Aritméticos + - * / e % (resto). Na comparação, === confere valor e tipo; == converte o tipo antes de comparar. Prefira sempre o ===.',
    accent: 'accent2',
  },
  {
    title: 'Condicionais',
    description: 'if, else if e else executam trechos diferentes conforme a condição.',
    accent: 'accent3',
  },
  {
    title: 'Repetição',
    description:
      'while repete enquanto a condição for verdadeira; for reúne inicialização, condição e incremento na mesma linha.',
    accent: 'accent4',
  },
  {
    title: 'Funções',
    description:
      'Declaradas com function, recebem parâmetros e devolvem valor com return. Servem para não repetir o mesmo código.',
    accent: 'accent5',
  },
  {
    title: 'Arrays',
    description:
      'Guardam vários dados numa variável só. Indexados a partir de 0, têm a propriedade length e métodos como push.',
    accent: 'accent',
  },
];

export const domMethods: PanelItem[] = [
  {
    title: 'document.getElementById',
    description: 'Busca um elemento pelo id. É a forma mais direta quando você já sabe qual elemento quer alterar.',
  },
  {
    title: 'getElementsByClassName',
    description: 'Acrescentado pelo HTML5, busca todos os elementos que têm determinada classe.',
  },
  {
    title: 'querySelector e querySelectorAll',
    description:
      'A Selector API aceita seletores CSS: "#msg" busca por id, ".item" por classe. querySelector devolve o primeiro, querySelectorAll devolve todos.',
  },
  {
    title: 'innerHTML',
    description: 'Lê ou substitui o conteúdo de um elemento — é assim que o texto da página muda sem recarregar.',
  },
  {
    title: 'Eventos',
    description:
      'onclick para clique, oninput a cada modificação de um campo, onchange ao final da edição. Ligam a ação do usuário ao seu código.',
  },
  {
    title: 'setCustomValidity',
    description:
      'Recebe uma string: se vazia, o campo é considerado válido; caso contrário, inválido. É a ponte entre a validação do HTML5 e a sua regra própria.',
  },
];

export const ioFunctions: ComparisonRow[] = [
  {
    criterion: 'alert',
    left: 'Exibe uma mensagem numa caixa de diálogo.',
    right: 'Interrompe a página até o usuário fechar. Bom para aprender, ruim em produção.',
  },
  {
    criterion: 'prompt',
    left: 'Pede um valor ao usuário.',
    right: 'Devolve SEMPRE string — converta com Number ou parseInt antes de fazer contas.',
  },
  {
    criterion: 'console.log',
    left: 'Escreve no console do navegador.',
    right: 'A ferramenta de depuração: mostra valores sem atrapalhar quem usa a página.',
  },
];
