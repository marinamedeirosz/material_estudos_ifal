import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';

export const LPGM_GUIDE_CONTEXT = `
GUIA DE LINGUAGEM DE PROGRAMAÇÃO (LNPG/LPGM) — Resumo. A disciplina compara conceitos entre linguagens (C++, Java, Python, JavaScript, PHP) e ensina fundamentos de programação:

1. CONCEITOS DE LINGUAGENS: Uma linguagem de programação é o meio de escrever instruções para o computador. O texto que escrevemos é o código-fonte. Um software tradutor converte o código-fonte para linguagem de máquina. Esse tradutor é um compilador ou um interpretador. Linguagens compiladas (ex.: C++, Java) traduzem o programa inteiro antes de executar, gerando um artefato; linguagens interpretadas (ex.: Python, JavaScript, PHP) traduzem e executam linha a linha. Uma expressão é a combinação de valores, operadores, constantes, variáveis e funções, avaliada segundo regras de precedência.

2. PARADIGMAS: O paradigma imperativo descreve o passo a passo (comandos que mudam o estado). O procedural organiza em procedimentos/funções. O orientado a objetos organiza em objetos (dados + comportamento). O funcional trata computação como avaliação de funções. Uma mesma linguagem pode suportar vários paradigmas (multiparadigma).

3. TIPOS DE DADOS E VARIÁVEIS: Uma variável é um espaço na memória que guarda um valor de um tipo. Tipos primitivos: inteiro (int), real (float/double), texto (string) e booleano (bool). Tipagem estática (o tipo é verificado em tempo de compilação: C++, Java) vs dinâmica (em tempo de execução: Python, JavaScript, PHP). Tipagem forte vs fraca. Atribuição usa o operador =. Identificadores são os nomes das variáveis.

4. ENTRADA E SAÍDA: Todo programa lê dados de entrada e produz saída. A leitura de entrada costuma retornar texto, exigindo conversão (casting) para número quando necessário.

5. ESTRUTURAS DE CONTROLE DE FLUXO: Condicionais (if/else/else-if) executam blocos conforme uma condição booleana. Operadores relacionais (==, !=, >, <, >=, <=) e lógicos (and/&&, or/||, not/!). Repetição: laço while (repete enquanto a condição for verdadeira) e laço for (itera um número de vezes ou sobre uma coleção). Blocos são delimitados por chaves { } na maioria das linguagens e por indentação em Python.

6. ESTRUTURAS DE DADOS COMPOSTAS: Listas/arrays guardam vários valores em ordem, acessados por índice (começa em 0), mutáveis. Tuplas são coleções imutáveis, usadas como registros. Dicionários/mapas guardam pares chave→valor, acessados pela chave (única).

7. FUNÇÕES E MODULARIZAÇÃO: Uma função agrupa instruções para uma tarefa, recebe parâmetros e pode retornar um valor (entrada → processamento → retorno). Vantagens: reuso, organização, teste e manutenção. Modularização separa o programa em módulos/bibliotecas importáveis.

8. ESCOPO E PASSAGEM DE PARÂMETROS: Escopo define onde uma variável é válida (local dentro da função vs global). Tempo de vida: variáveis locais existem só durante a execução da função. Passagem de parâmetros: por valor (cópia) ou por referência.

9. STRINGS: Sequência de caracteres, indexada a partir de zero. Operações: tamanho (len), concatenação (+), acesso por índice, fatiamento (substring). Métodos comuns: maiúsculas, minúsculas, substituição, divisão.

DIVISÃO POR AVALIAÇÕES:
- AV1 (1ª nota): conceitos de linguagens, compilação vs interpretação, paradigmas, tipos e variáveis, entrada e saída, estruturas de controle de fluxo.
- AV2 (2ª nota): estruturas de dados compostas (listas, tuplas, dicionários), funções e modularização, escopo e passagem de parâmetros, strings.
`;

export const LPGM_TOPICS: QuizTopicOption[] = [
  {
    value: 'av1',
    label: 'AV1: Fundamentos e Controle',
    prompt: 'Conteúdo da AV1: conceitos de linguagens de programação (código-fonte, tradutor, linguagem de máquina), compilação vs interpretação, paradigmas de programação (imperativo, procedural, orientado a objetos, funcional, multiparadigma), tipos de dados primitivos (inteiro, real, texto, booleano), variáveis e identificadores, atribuição, tipagem estática vs dinâmica, tipagem forte vs fraca, expressões e operadores (aritméticos, relacionais, lógicos), entrada e saída de dados com conversão de tipos, e estruturas de controle de fluxo (condicionais if/else/else-if, laços while e for, blocos por chaves ou indentação).',
  },
  {
    value: 'av2',
    label: 'AV2: Estruturas e Funções',
    prompt: 'Conteúdo da AV2: estruturas de dados compostas (listas/arrays com índice a partir de zero e mutabilidade, tuplas imutáveis como registros, dicionários/mapas com pares chave-valor), funções e modularização (definição, parâmetros, retorno, reuso, bibliotecas/módulos importáveis), escopo de variáveis (local vs global) e tempo de vida, passagem de parâmetros (por valor vs por referência), e strings (sequência de caracteres, tamanho, concatenação, índice, fatiamento/substring, métodos comuns).',
  },
  { value: 'conceitos', label: 'Conceitos de Linguagens' },
  { value: 'paradigmas', label: 'Paradigmas' },
  { value: 'tipos', label: 'Tipos e Variáveis' },
  { value: 'controle', label: 'Estruturas de Controle' },
  { value: 'colecoes', label: 'Listas, Tuplas e Dicionários' },
  { value: 'funcoes', label: 'Funções e Modularização' },
  { value: 'strings', label: 'Strings' },
];

export const LPGM_SECTIONS = [
  { id: 'intro', title: 'Introdução: linguagens e tradutores', shortTitle: 'Introdução' },
  { id: 'conceitos', title: 'Compilação e Interpretação', shortTitle: 'Compilada × Interpretada', exam: 'AV1' },
  { id: 'paradigmas', title: 'Paradigmas de Programação', shortTitle: 'Paradigmas', exam: 'AV1' },
  { id: 'tipos', title: 'Tipos de Dados e Variáveis', shortTitle: 'Tipos e Variáveis', exam: 'AV1' },
  { id: 'io', title: 'Entrada e Saída', shortTitle: 'Entrada/Saída', exam: 'AV1' },
  { id: 'controle', title: 'Estruturas de Controle', shortTitle: 'Controle', exam: 'AV1' },
  { id: 'colecoes', title: 'Listas, Tuplas e Dicionários', shortTitle: 'Coleções', exam: 'AV2' },
  { id: 'funcoes', title: 'Funções e Modularização', shortTitle: 'Funções', exam: 'AV2' },
  { id: 'escopo', title: 'Escopo e Parâmetros', shortTitle: 'Escopo', exam: 'AV2' },
  { id: 'strings', title: 'Strings', shortTitle: 'Strings', exam: 'AV2' },
  { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
];

const QUIZ_DATA_AV1: QuizQuestionData[] = [
  {
    id: 'l1',
    question: '1. Como se chama o software que traduz o código-fonte para a linguagem de máquina?',
    options: ['Editor de texto', 'Compilador ou interpretador', 'Sistema operacional', 'Depurador'],
    correctIndex: 1,
    feedbackCorrect: 'O tradutor é um compilador (traduz tudo antes) ou um interpretador (traduz e executa linha a linha).',
    feedbackWrong: 'O tradutor do código-fonte é o compilador ou o interpretador.',
  },
  {
    id: 'l2',
    question: '2. Qual a diferença entre uma linguagem compilada e uma interpretada?',
    options: [
      'A compilada é sempre mais lenta',
      'A compilada traduz o programa inteiro antes de executar; a interpretada traduz e executa linha a linha',
      'A interpretada não usa código-fonte',
      'Não há diferença real',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Compilada: traduz tudo antes (C++, Java). Interpretada: traduz e executa na hora (Python, JS, PHP).',
    feedbackWrong: 'A compilada traduz o programa todo antes de rodar; a interpretada faz isso linha a linha durante a execução.',
  },
  {
    id: 'l3',
    question: '3. Na tipagem ESTÁTICA (como em C++ e Java), quando o tipo de uma variável é verificado?',
    options: ['Em tempo de execução', 'Em tempo de compilação', 'Nunca é verificado', 'Somente na entrada de dados'],
    correctIndex: 1,
    feedbackCorrect: 'Tipagem estática verifica os tipos em tempo de compilação. A dinâmica (Python, JS, PHP) verifica em execução.',
    feedbackWrong: 'Na tipagem estática o tipo é verificado em tempo de compilação, antes de o programa rodar.',
  },
  {
    id: 'l4',
    question: '4. Qual conjunto contém apenas tipos de dados PRIMITIVOS?',
    options: [
      'inteiro, real, texto, booleano',
      'lista, dicionário, função, classe',
      'if, while, for, return',
      'compilador, interpretador, editor, terminal',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Tipos primitivos: inteiro (int), real (float/double), texto (string) e booleano (bool).',
    feedbackWrong: 'Os tipos primitivos são inteiro, real, texto e booleano.',
  },
  {
    id: 'l5',
    question: '5. O paradigma que organiza o programa em objetos (dados + comportamento) é o:',
    options: ['Imperativo', 'Funcional', 'Orientado a objetos', 'Lógico'],
    correctIndex: 2,
    feedbackCorrect: 'O paradigma orientado a objetos organiza o programa em objetos que reúnem dados e comportamento.',
    feedbackWrong: 'É o paradigma orientado a objetos que estrutura o programa em objetos (estado + comportamento).',
  },
  {
    id: 'l6',
    question: '6. Uma variável é definida como:',
    options: [
      'Um comando que repete instruções',
      'Um espaço na memória que guarda um valor de um determinado tipo',
      'Uma função sem retorno',
      'Um operador aritmético',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Variável é um espaço reservado na memória para armazenar um valor de um tipo determinado.',
    feedbackWrong: 'Uma variável é um espaço na memória que guarda um valor de um dado tipo.',
  },
  {
    id: 'l7',
    question: '7. Ao ler uma entrada digitada pelo usuário, por que muitas vezes é preciso fazer conversão (casting)?',
    options: [
      'Porque a entrada vem criptografada',
      'Porque a leitura costuma retornar texto, e é preciso convertê-lo para número quando se quer calcular',
      'Porque o teclado só envia bits',
      'Não é preciso converter nunca',
    ],
    correctIndex: 1,
    feedbackCorrect: 'A entrada normalmente chega como texto; para operar numericamente é preciso converter (casting).',
    feedbackWrong: 'A leitura de entrada costuma retornar texto; converte-se (casting) para número quando se vai calcular.',
  },
  {
    id: 'l8',
    question: '8. Qual estrutura de controle repete um bloco ENQUANTO uma condição for verdadeira?',
    options: ['if', 'while', 'return', 'switch'],
    correctIndex: 1,
    feedbackCorrect: 'O laço while repete o bloco enquanto a condição for verdadeira.',
    feedbackWrong: 'É o while: repete enquanto a condição for verdadeira (o if executa uma única vez).',
  },
  {
    id: 'l9',
    question: '9. Na maioria das linguagens (C++, Java, JS, PHP), como se delimita um bloco de código?',
    options: ['Por chaves { }', 'Por parênteses ( )', 'Por aspas " "', 'Por vírgulas'],
    correctIndex: 0,
    feedbackCorrect: 'A maioria usa chaves { }. O Python é a exceção: delimita blocos por indentação.',
    feedbackWrong: 'C++, Java, JS e PHP usam chaves { }; Python usa indentação.',
  },
  {
    id: 'l10',
    question: '10. Qual grupo lista apenas operadores LÓGICOS?',
    options: [
      'and / or / not (ou &&, ||, !)',
      '+ / - / * / /',
      '== / != / > / <',
      '= / += / -=',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Operadores lógicos: e (and/&&), ou (or/||), não (not/!).',
    feedbackWrong: 'Os lógicos são and/&&, or/|| e not/!. Os de == e > são relacionais; +,- são aritméticos.',
  },
];

const QUIZ_DATA_AV2: QuizQuestionData[] = [
  {
    id: 'l11',
    question: '11. Em uma lista/array, o índice do PRIMEIRO elemento é:',
    options: ['1', '0', '-1', 'o tamanho da lista'],
    correctIndex: 1,
    feedbackCorrect: 'Os índices começam em 0; o último é tamanho − 1.',
    feedbackWrong: 'O primeiro elemento tem índice 0.',
  },
  {
    id: 'l12',
    question: '12. Qual a diferença central entre uma LISTA e uma TUPLA?',
    options: [
      'A lista guarda números e a tupla, texto',
      'A lista é mutável (pode mudar); a tupla é imutável',
      'A tupla tem índice e a lista não',
      'Não há diferença',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Lista é mutável; tupla é imutável (não se adiciona, altera ou remove elementos).',
    feedbackWrong: 'A lista pode ser alterada (mutável); a tupla é imutável.',
  },
  {
    id: 'l13',
    question: '13. Em um dicionário/mapa, os valores são acessados por meio de:',
    options: ['Um índice numérico', 'Uma chave única', 'A posição na memória', 'Um laço for obrigatório'],
    correctIndex: 1,
    feedbackCorrect: 'O dicionário guarda pares chave→valor; o acesso é pela chave, que deve ser única.',
    feedbackWrong: 'No dicionário/mapa, acessa-se o valor pela chave (não por índice numérico).',
  },
  {
    id: 'l14',
    question: '14. Qual é o principal benefício de usar funções?',
    options: [
      'Deixar o programa mais lento de propósito',
      'Reusar código, organizar, facilitar teste e manutenção',
      'Eliminar a necessidade de variáveis',
      'Impedir a entrada de dados',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Funções permitem reuso, organização (dividir para conquistar), teste e manutenção.',
    feedbackWrong: 'O grande ganho das funções é o reuso de código, além de organização, teste e manutenção.',
  },
  {
    id: 'l15',
    question: '15. O modelo de uma função pode ser resumido como:',
    options: [
      'Entrada (parâmetros) → processamento → retorno',
      'Compilar → interpretar → executar',
      'Chave → valor → índice',
      'Início → meio → fim, sem dados',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Uma função recebe parâmetros (entrada), processa e devolve um retorno.',
    feedbackWrong: 'O modelo é: entrada (parâmetros) → processamento → retorno.',
  },
  {
    id: 'l16',
    question: '16. Uma variável LOCAL, criada dentro de uma função, é válida:',
    options: [
      'Em todo o programa',
      'Somente dentro da própria função',
      'Só depois que o programa termina',
      'Apenas em outras funções',
    ],
    correctIndex: 1,
    feedbackCorrect: 'A variável local só existe e é válida dentro da função onde foi criada.',
    feedbackWrong: 'Uma variável local vale apenas dentro da própria função (escopo local).',
  },
  {
    id: 'l17',
    question: '17. Na passagem de parâmetro POR VALOR, o que a função recebe?',
    options: [
      'O endereço da variável original',
      'Uma cópia do valor (mudanças não afetam o original)',
      'Nada, o parâmetro fica vazio',
      'A função inteira',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Por valor, a função recebe uma cópia — alterar o parâmetro não muda a variável original.',
    feedbackWrong: 'Por valor = cópia do dado. Por referência = acesso ao original (aí sim mudanças afetam o original).',
  },
  {
    id: 'l18',
    question: '18. O que é modularização?',
    options: [
      'Escrever todo o código em um só arquivo gigante',
      'Separar o programa em módulos/bibliotecas reutilizáveis e importáveis',
      'Remover todas as funções',
      'Trocar de linguagem no meio do projeto',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Modularizar é dividir o programa em módulos reutilizáveis, importados quando necessário.',
    feedbackWrong: 'Modularização é separar o programa em módulos/bibliotecas que podem ser importados e reusados.',
  },
  {
    id: 'l19',
    question: '19. Sobre strings, o "fatiamento" (slicing/substring) serve para:',
    options: [
      'Contar quantas funções existem',
      'Extrair um pedaço (subsequência) da string',
      'Converter texto em número',
      'Apagar a string da memória',
    ],
    correctIndex: 1,
    feedbackCorrect: 'O fatiamento extrai uma subsequência (um pedaço) da string a partir de posições.',
    feedbackWrong: 'Fatiamento/substring extrai um trecho da string com base em posições de início e fim.',
  },
  {
    id: 'l20',
    question: '20. O operador + aplicado a duas strings faz o quê?',
    options: ['Soma numérica', 'Concatenação (junta os textos)', 'Comparação', 'Divisão'],
    correctIndex: 1,
    feedbackCorrect: 'Com strings, o + concatena (junta) os textos. O mesmo operador muda de comportamento conforme o tipo.',
    feedbackWrong: 'Entre strings, o + concatena os textos (não soma).',
  },
];

export const QUIZ_DATA: QuizQuestionData[] = [
  ...QUIZ_DATA_AV1.map(q => ({ ...q, exam: 'prova1' as const })),
  ...QUIZ_DATA_AV2.map(q => ({ ...q, exam: 'prova2' as const })),
];
