import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

export const ALPG_GUIDE_CONTEXT = `
GUIA DE ALGORITMOS E LÓGICA DE PROGRAMAÇÃO (disciplina introdutória, em Python) — Resumo:

1. CONCEITOS BÁSICOS: O computador manipula dados a partir de uma lista de instruções (programas). Toda tarefa segue o modelo Entrada → Processamento → Saída. Lógica é a "arte de bem pensar": parte de premissas e chega a uma conclusão, que deve ser validada. Lógica de programação é a técnica de desenvolver algoritmos usando uma linguagem de programação. Algoritmo é uma sequência finita de passos lógicos para resolver um problema. Programar é representar um algoritmo em uma linguagem executável. Algoritmos podem ser representados de forma textual (passo a passo) ou gráfica (fluxograma).

2. PYTHON — DADOS E EXPRESSÕES: Python é uma linguagem de alto nível, geralmente interpretada. O comando de saída é print() (parênteses obrigatórios; texto entre aspas). Tipos de dados: int (inteiro), float (real), str (texto) e bool (True/False); a função type() mostra o tipo. Cuidado com armadilhas: "13" com aspas é str; print(1,000,000) imprime "1 0 0" porque as vírgulas separam argumentos. A entrada input() sempre retorna texto (str), por isso usa-se casting: int(input(...)), float(input(...)). Operadores: aritméticos (+ - * / **), relacionais (== > < >= <=) e lógicos (and, or, not). Comentários começam com #.

3. ESTRUTURAS CONDICIONAIS: Permitem executar comandos conforme uma condição (expressão lógica). Simples (só if), composta (if/else) e encadeada (if/elif/else). O elif significa "senão, se" e pode se repetir; o else é opcional. Condições podem ser aninhadas (testar uma condição dentro de outra). Os operadores lógicos and, or e not combinam ou negam condições.

4. ESCOPO DE VARIÁVEIS: O escopo determina onde uma variável é válida. Global: existe durante toda a execução do programa. Local: só existe dentro do bloco ou função onde foi criada. Parâmetros: variáveis locais de uma função. Um erro comum é criar uma variável dentro de um bloco if e tentar usá-la fora dele — a solução é declará-la em um escopo mais amplo (inicializar antes do if).

5. ESTRUTURAS DE REPETIÇÃO: A execução repetida de instruções chama-se iteração/laço. O while repete um bloco enquanto uma condição for verdadeira (é preciso atualizar a variável de controle para não cair em loop infinito). O for itera sobre um conjunto de itens (uma lista ou a função range). range(stop), range(start, stop) e range(start, stop, step) geram sequências de números. O while é para repetição condicional; o for, quando se conhece o conjunto a percorrer.

6. LISTAS: Uma lista é uma coleção ordenada de valores, com índice iniciando em 0; os elementos podem ter tipos diferentes e a lista pode ser aninhada. Operações: criar (x = [1,2,3]), acessar por índice (numeros[2], negativo numeros[-2]), verificar pertinência ("jaca" in frutas), adicionar (frutas.append("x")), remover (del(frutas[1])) e medir tamanho (len(frutas)).

7. MÓDULOS: Um módulo é um arquivo Python com definições reutilizáveis; para usar suas funções é preciso importá-lo antes (import modulo) e chamá-las como modulo.funcao. Algumas funções são built-in (input, print) e não exigem importação. O módulo math traz cálculos prontos: sqrt(x), pi, log(x,y), log10(x). Atenção: pow é uma função built-in (não precisa de import) e devolve int quando recebe inteiros, aceitando ainda um terceiro argumento para o resto da divisão; math.pow existe, mas sempre devolve float. O módulo random dá aleatoriedade: randint(a,b) para inteiros, uniform para fracionados, choice([lista]) para escolher um item, shuffle para embaralhar a própria lista no lugar (a original muda) e sample para devolver uma nova lista com k itens sorteados, sem alterar a original.

8. FUNÇÕES: Uma função é uma sequência de instruções agrupadas para realizar uma tarefa. Vantagens: dividir para conquistar, reuso, facilidade de teste e de manutenção. Define-se com def nome(): e o código indentado pertence a ela. Há dois momentos: definição (criar) e chamada (usar) — se não for chamada, nada acontece. Parâmetros passam valores para a função; return devolve um resultado (sem return, a função apenas executa/imprime). A função main() com if __name__ == '__main__': é o ponto de entrada do programa. A palavra global indica variáveis de escopo maior.

9. STRINGS: Uma string (str) é uma sequência de caracteres imutáveis, criada com aspas simples ou duplas. Por ser imutável, não se pode alterar um caractere pelo índice (gera TypeError). Formatação: print concatena com espaço, o operador + concatena sem espaço, e há .format({0}) e f-strings (f"{variavel}"). Métodos úteis: len, find, capitalize, upper, lower, strip/lstrip/rstrip, replace, startswith, endswith, count, isalnum e isdigit.

10. EXCEÇÕES: Certos erros quebram o programa: divisão por zero (ZeroDivisionError), índice inexistente (IndexError) ou tipo errado. Uma exceção é uma situação inesperada, que foge ao fluxo previsto. Como não se pode parar um sistema por causa de erros, é preciso tratá-los com try/except: o try tenta executar o código e o except captura a exceção. O bloco finally executa sempre, tendo havido erro ou não.

DIVISÃO POR AVALIAÇÕES:
- AV1 (fundamentos): conceitos de algoritmo e lógica, Python (tipos, entrada/saída, operadores), estruturas condicionais, escopo de variáveis e estruturas de repetição (while e for).
- AV2 (aprofundamento): listas, módulos (math e random), funções (parâmetros, retorno, escopo), strings e tratamento de exceções.
`;

export const ALPG_TOPICS: QuizTopicOption[] = [
  {
    value: 'av1',
    label: 'AV1: Fundamentos e Python básico',
    prompt: 'Conteúdo da AV1: conceitos de algoritmo e lógica de programação, modelo entrada/processamento/saída, formas de representar algoritmos, Python (tipos int/float/str/bool, type, print, input, casting, operadores aritméticos/relacionais/lógicos, comentários), estruturas condicionais (if, if/else, if/elif/else, condições aninhadas, and/or/not), escopo de variáveis (global, local) e estruturas de repetição (while, for, range, contador, loop infinito).',
  },
  {
    value: 'av2',
    label: 'AV2: Listas, Funções e mais',
    prompt: 'Conteúdo da AV2: listas (índice, pertinência, append, del, len), módulos (import, funções built-in como pow, math com sqrt/pi/log, random com randint/choice/shuffle/sample), funções (def, parâmetros, return, main, if __name__, escopo global), strings (imutabilidade, indexação, formatação com format e f-strings, métodos como upper/lower/find/replace/split/count/isdigit) e tratamento de exceções (try/except/finally, ZeroDivisionError, IndexError).',
  },
  { value: 'conceitos', label: 'Conceitos de Algoritmo e Lógica' },
  { value: 'python', label: 'Python: Dados e Expressões' },
  { value: 'condicionais', label: 'Estruturas Condicionais' },
  { value: 'escopo', label: 'Escopo de Variáveis' },
  { value: 'repeticao', label: 'Estruturas de Repetição' },
  { value: 'listas', label: 'Listas' },
  { value: 'modulos', label: 'Módulos (math e random)' },
  { value: 'funcoes', label: 'Funções' },
  { value: 'strings', label: 'Strings' },
  { value: 'excecoes', label: 'Exceções' },
];

export const ALPG_EXAMS: ExamDefinition[] = [
  {
    id: 'av1',
    label: 'AV1',
    description: 'Fundamentos, Python, condicionais, escopo e laços.',
  },
  {
    id: 'av2',
    label: 'AV2',
    description: 'Listas, módulos, funções, strings e exceções.',
  },
];

export const ALPG_SECTIONS = [
  { id: 'intro', title: 'Introdução: algoritmos e lógica', shortTitle: 'Introdução' },
  { id: 'conceitos', title: 'Conceitos de Algoritmo e Lógica', shortTitle: 'Conceitos', exams: ['av1'] },
  { id: 'python', title: 'Python: Dados e Expressões', shortTitle: 'Python', exams: ['av1'] },
  { id: 'condicionais', title: 'Estruturas Condicionais', shortTitle: 'Condicionais', exams: ['av1'] },
  { id: 'escopo', title: 'Escopo de Variáveis', shortTitle: 'Escopo', exams: ['av1'] },
  { id: 'repeticao', title: 'Estruturas de Repetição', shortTitle: 'Repetição', exams: ['av1'] },
  { id: 'listas', title: 'Listas', shortTitle: 'Listas', exams: ['av2'] },
  { id: 'modulos', title: 'Módulos: math e random', shortTitle: 'Módulos', exams: ['av2'] },
  { id: 'funcoes', title: 'Funções', shortTitle: 'Funções', exams: ['av2'] },
  { id: 'strings', title: 'Strings', shortTitle: 'Strings', exams: ['av2'] },
  { id: 'excecoes', title: 'Tratamento de Exceções', shortTitle: 'Exceções', exams: ['av2'] },
  { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
];

const QUIZ_DATA_AV1: QuizQuestionData[] = [
  {
    id: 'a1',
    question: '1. Qual é a definição de algoritmo?',
    options: [
      'Uma linguagem de programação',
      'Uma sequência finita de passos lógicos para resolver um problema',
      'Um programa já compilado',
      'Um tipo de dado do Python',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Algoritmo é uma sequência finita de passos lógicos para resolver um problema.',
    feedbackWrong: 'Algoritmo é a sequência finita de passos lógicos que resolve um problema — a linguagem é só o meio de escrevê-lo.',
  },
  {
    id: 'a2',
    question: '2. Toda tarefa executada no computador segue qual modelo?',
    options: [
      'Compilar → Executar → Depurar',
      'Entrada → Processamento → Saída',
      'Início → Meio → Fim',
      'Variável → Função → Retorno',
    ],
    correctIndex: 1,
    feedbackCorrect: 'O modelo é Entrada → Processamento → Saída.',
    feedbackWrong: 'É o modelo Entrada → Processamento → Saída (ex.: ler dois números, somá-los, mostrar o resultado).',
  },
  {
    id: 'a3',
    question: '3. Em Python, o que a função type("13") retorna?',
    options: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "<class 'bool'>"],
    correctIndex: 1,
    feedbackCorrect: 'Aspas fazem de "13" uma string (str), mesmo sendo dígitos.',
    feedbackWrong: 'Com aspas, "13" é uma string (str) — não um número.',
  },
  {
    id: 'a4',
    question: '4. Por que geralmente se escreve int(input("...")) em vez de só input("...")?',
    options: [
      'Porque input não existe em Python',
      'Porque input() sempre retorna texto (str), e int() converte para número',
      'Porque int é mais rápido',
      'Porque input só funciona dentro de funções',
    ],
    correctIndex: 1,
    feedbackCorrect: 'input() devolve sempre uma str; int() faz o casting para inteiro.',
    feedbackWrong: 'input() sempre retorna str; usa-se int()/float() para converter (casting) e poder calcular.',
  },
  {
    id: 'a5',
    question: '5. Qual estrutura representa a condicional ENCADEADA em Python?',
    options: ['if / else', 'if / elif / else', 'while / else', 'for / in'],
    correctIndex: 1,
    feedbackCorrect: 'A encadeada usa if / elif / else, testando várias alternativas.',
    feedbackWrong: 'A condicional encadeada é if / elif / else — o elif significa "senão, se".',
  },
  {
    id: 'a6',
    question: '6. Um erro comum de escopo em Python ocorre quando:',
    options: [
      'Uma variável global é usada em uma função',
      'Uma variável criada dentro de um bloco if é usada fora dele',
      'Uma constante é alterada',
      'Duas variáveis têm o mesmo valor',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Variável criada dentro do if é local àquele bloco; se o if não executa, ela não existe fora.',
    feedbackWrong: 'O erro clássico é criar a variável dentro do if e usá-la fora. Solução: inicializá-la antes do if.',
  },
  {
    id: 'a7',
    question: '7. O que provoca um "loop infinito" em um laço while?',
    options: [
      'Usar range no while',
      'A condição do while nunca se tornar falsa',
      'Esquecer os dois-pontos',
      'Usar um contador',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Se a condição nunca fica falsa (ex.: não atualizar o contador), o while repete para sempre.',
    feedbackWrong: 'Loop infinito acontece quando a condição do while nunca se torna falsa — é preciso atualizar a variável de controle.',
  },
  {
    id: 'a8',
    question: '8. O que a chamada range(2, 101, 2) representa?',
    options: [
      'Os números de 2 a 101, um a um',
      'Os números pares de 2 até 100 (start 2, stop 101, passo 2)',
      'Os números de 1 a 2',
      'Uma lista com dois elementos: 2 e 101',
    ],
    correctIndex: 1,
    feedbackCorrect: 'range(start, stop, step): começa em 2, vai até antes de 101, de 2 em 2 → os pares até 100.',
    feedbackWrong: 'range(2, 101, 2) gera 2, 4, 6, ... 100 (start=2, stop=101 exclusivo, step=2).',
  },
  {
    id: 'a9',
    question: '9. Qual a diferença entre while e for, segundo a disciplina?',
    options: [
      'Não há diferença',
      'while repete enquanto uma condição é verdadeira; for itera sobre um conjunto de itens',
      'for é mais rápido que while sempre',
      'while só funciona com listas',
    ],
    correctIndex: 1,
    feedbackCorrect: 'while é repetição condicional; for itera sobre um conjunto (lista ou range).',
    feedbackWrong: 'O while repete por condição; o for percorre um conjunto de itens (com range substituindo o contador).',
  },
  {
    id: 'a10',
    question: '10. Qual símbolo inicia um comentário em Python?',
    options: ['//', '/*', '#', '--'],
    correctIndex: 2,
    feedbackCorrect: 'Em Python, comentários de linha começam com #.',
    feedbackWrong: 'É o # que inicia um comentário em Python.',
  },
];

const QUIZ_DATA_AV2: QuizQuestionData[] = [
  {
    id: 'a11',
    question: '11. Em uma lista Python como frutas = ["umbu", "jaca"], qual é o índice do primeiro elemento?',
    options: ['1', '0', '-1', 'len(frutas)'],
    correctIndex: 1,
    feedbackCorrect: 'Índices começam em 0 — frutas[0] é "umbu".',
    feedbackWrong: 'O índice do primeiro elemento é 0. O último pode ser acessado por frutas[-1].',
  },
  {
    id: 'a12',
    question: '12. Como se adiciona um item ao FINAL de uma lista?',
    options: ['lista.add("x")', 'lista.append("x")', 'lista.insert("x")', 'lista + "x"'],
    correctIndex: 1,
    feedbackCorrect: 'O método append() adiciona um item ao final da lista.',
    feedbackWrong: 'É lista.append("x") que adiciona ao final.',
  },
  {
    id: 'a13',
    question: '13. Por que a linha "import math" é necessária antes de usar math.sqrt(x)?',
    options: [
      'Porque sqrt é uma função built-in',
      'Porque math é um módulo e precisa ser importado antes de usar suas funções',
      'Porque sqrt não existe em Python',
      'Porque math é mais lento',
    ],
    correctIndex: 1,
    feedbackCorrect: 'math é um módulo; sem importá-lo, o Python não reconhece math.sqrt e dá erro.',
    feedbackWrong: 'sqrt está no módulo math — é preciso "import math" antes. (pow, ao contrário, é built-in.)',
  },
  {
    id: 'a14',
    question: '14. No módulo random, qual função escolhe UM item aleatório de uma lista?',
    options: ['random.shuffle', 'random.choice', 'random.sample', 'random.sort'],
    correctIndex: 1,
    feedbackCorrect: 'random.choice([...]) seleciona um item; shuffle embaralha a lista inteira.',
    feedbackWrong: 'É random.choice que escolhe um item. shuffle/sample embaralham a lista.',
  },
  {
    id: 'a15',
    question: '15. Qual palavra-chave cria uma função em Python?',
    options: ['function', 'def', 'func', 'define'],
    correctIndex: 1,
    feedbackCorrect: 'Usa-se def nome(): para definir uma função.',
    feedbackWrong: 'A palavra-chave é def.',
  },
  {
    id: 'a16',
    question: '16. Qual a diferença entre uma função com return e uma sem return?',
    options: [
      'Não há diferença',
      'Com return a função devolve um valor; sem return ela apenas executa/imprime',
      'Sem return a função não pode ter parâmetros',
      'Com return a função é mais lenta',
    ],
    correctIndex: 1,
    feedbackCorrect: 'return devolve um valor a quem chamou; sem ele, a função só executa suas instruções.',
    feedbackWrong: 'Com return a função entrega um resultado; sem return ela apenas realiza a tarefa (ex.: imprime).',
  },
  {
    id: 'a17',
    question: '17. Por que a linha linguagem[0] = "a" gera um erro em Python?',
    options: [
      'Porque índices começam em 1',
      'Porque strings são imutáveis — não se pode alterar um caractere pelo índice',
      'Porque falta importar um módulo',
      'Porque "a" não é uma string',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Strings são imutáveis; alterar um caractere pelo índice gera TypeError.',
    feedbackWrong: 'As strings são imutáveis — não dá para trocar um caractere pelo índice (isso gera TypeError).',
  },
  {
    id: 'a18',
    question: '18. Qual método transforma "banana" em "BANANA"?',
    options: ['.capitalize()', '.upper()', '.title()', '.strip()'],
    correctIndex: 1,
    feedbackCorrect: '.upper() coloca tudo em maiúsculas. .capitalize() só a primeira letra.',
    feedbackWrong: 'É o método .upper() que deixa toda a string em maiúsculas.',
  },
  {
    id: 'a19',
    question: '19. Dividir um número por zero em Python lança qual exceção?',
    options: ['IndexError', 'ZeroDivisionError', 'TypeError', 'ValueError'],
    correctIndex: 1,
    feedbackCorrect: 'Divisão por zero lança ZeroDivisionError.',
    feedbackWrong: 'É o ZeroDivisionError. IndexError é para índice inexistente numa lista.',
  },
  {
    id: 'a20',
    question: '20. No tratamento de exceções, para que serve o bloco finally?',
    options: [
      'Só executa se houve erro',
      'Executa sempre, tendo havido erro ou não',
      'Substitui o except',
      'Ignora o erro',
    ],
    correctIndex: 1,
    feedbackCorrect: 'O finally executa sempre, independentemente de ter ocorrido exceção.',
    feedbackWrong: 'O finally roda sempre, com ou sem erro — útil para finalizar recursos.',
  },
];

export const QUIZ_DATA: QuizQuestionData[] = [
  ...QUIZ_DATA_AV1.map(q => ({ ...q, exams: ['av1'] })),
  ...QUIZ_DATA_AV2.map(q => ({ ...q, exams: ['av2'] })),
];
