import type { ComparisonRow, ConceptItem, PanelItem, StatItem } from '../../../components/sections';
import type { TruthTable } from './TruthTable';

// ------------------------------------------------------------------ Introdução

export const discreteOverview: ConceptItem[] = [
    {
        title: 'Discreto',
        description: 'Objetos separados e desconectados, com transições abruptas entre valores. Os inteiros são o exemplo central; declarações lógicas e grafos também são estruturas discretas.',
        accent: 'accent',
    },
    {
        title: 'Contínuo',
        description: 'Grandezas que variam suavemente, sem saltos: entre dois números há infinitos outros. O sistema dos números reais está no cerne da matemática contínua.',
        accent: 'accent2',
    },
    {
        title: 'Por que isso importa em computação',
        description: 'Um computador digital moderno é, em essência, um sistema discreto finito. Modelar problemas com estruturas discretas é o que torna o problema computável.',
        accent: 'accent3',
    },
];

export const discreteVsContinuous: ComparisonRow[] = [
    {
        criterion: 'Velocidade de um carro',
        left: 'A curva real da velocidade ao longo do tempo, sem interrupções.',
        right: 'Uma série de pontos amostrados em instantes determinados.',
    },
    {
        criterion: 'Imagem',
        left: 'A cena real, com variação contínua de cor e luz.',
        right: 'Uma matriz de pixels, cada um com um valor de cor definido.',
    },
    {
        criterion: 'Mapa',
        left: 'O mapa rodoviário, com traçados e distâncias reais.',
        right: 'Um grafo: cidades viram vértices e estradas viram arestas.',
    },
    {
        criterion: 'Relógio',
        left: 'O analógico, cujos ponteiros percorrem todas as posições.',
        right: 'O digital, que salta de um valor exibido para o próximo.',
    },
];

export const topicApplications: PanelItem[] = [
    { title: 'Lógica e Conjuntos', description: 'Sistemas especialistas e inteligência artificial.' },
    { title: 'Relações e funções', description: 'Bancos de dados relacionais e algoritmos distribuídos.' },
    { title: 'Análise combinatória', description: 'Análise de algoritmos no pior caso.' },
    { title: 'Grafos não dirigidos', description: 'Linguagens formais e parsing.' },
    { title: 'Grafos dirigidos', description: 'Algoritmos de roteamento em redes.' },
    { title: 'Álgebra booleana', description: 'Projeto de circuitos digitais.' },
    { title: 'Autômato de estados finito', description: 'Modelo computacional para resolução de problemas em geral.' },
    { title: 'Probabilidade', description: 'Análise de algoritmos no caso médio.' },
];

export const ementaTopics: PanelItem[] = [
    { title: 'Fundamentos da Lógica e Lógica Proposicional', description: 'Proposições, valor lógico, conectivos, tabelas-verdade e equivalência lógica.' },
    { title: 'Teoria dos Conjuntos', description: 'Pertinência, inclusão, operações, conjunto das partes e conjuntos numéricos.' },
    { title: 'Sequências', description: 'Termo geral, leis de recorrência e somatórios.' },
    { title: 'Teoria dos Números · Números Inteiros e Primos', description: 'Divisibilidade e primalidade — indicados pelo professor por material externo, não por slides da turma.' },
    { title: 'Prova e Indução Matemática', description: 'Demonstrações e o princípio da indução — também indicado por material externo.' },
];

// ------------------------------------------------------------------ Conjuntos

export const setConcepts: ConceptItem[] = [
    {
        title: 'Conjunto e cardinalidade',
        description: 'Coleção de objetos distintos chamados elementos, sem importar a ordem. A quantidade de elementos é a cardinalidade, escrita n(A).',
        accent: 'accent',
    },
    {
        title: 'Vazio, unitário e universo',
        description: 'O vazio ({ } ou ∅) não tem elementos; o unitário tem exatamente um; o universo reúne todos os elementos com uma dada propriedade.',
        accent: 'accent2',
    },
    {
        title: 'Pertinência: ∈ e ∉',
        description: 'Relaciona um ELEMENTO a um conjunto. Se A = {x | x é par}, então 2 ∈ A e 5 ∉ A.',
        accent: 'accent3',
    },
    {
        title: 'Inclusão: ⊂ e ⊃',
        description: 'Relaciona dois CONJUNTOS. A ⊂ B quando todo elemento de A pertence a B. O vazio é subconjunto de qualquer conjunto: ∅ ⊂ A.',
        accent: 'accent4',
    },
    {
        title: 'Conjunto das partes P(A)',
        description: 'Formado por todos os subconjuntos de A, tem cardinalidade 2ⁿ. Para A = {2,3,5,7}, n(P(A)) = 2⁴ = 16, contando ∅ e o próprio A.',
        accent: 'accent5',
    },
    {
        title: 'Igualdade',
        description: 'A = B quando A ⊂ B e B ⊂ A ao mesmo tempo. Por isso {1,2,3} = {2,1,3}: a ordem não conta.',
        accent: 'accent',
    },
];

export const setOperations: PanelItem[] = [
    { title: 'União — A ∪ B = {x | x ∈ A ou x ∈ B}', description: 'Reúne os elementos dos dois conjuntos. Com A = {0,2,4,6,8} e B = {1,2,3,4}, A ∪ B = {0,1,2,3,4,6,8}.' },
    { title: 'Interseção — A ∩ B = {x | x ∈ A e x ∈ B}', description: 'Só o que está nos dois. Nos mesmos conjuntos, A ∩ B = {2,4}.' },
    { title: 'Diferença — A − B = {x | x ∈ A e x ∉ B}', description: 'O que está em A e não está em B. Não é comutativa nem associativa: A − B ≠ B − A.' },
    { title: 'Diferença simétrica — A Δ B = (A − B) ∪ (B − A)', description: 'Tudo o que está em exatamente um dos dois. Equivale a (A ∪ B) − (A ∩ B).' },
    { title: 'Complementar de A em relação a B', description: 'Quando A ⊂ B, é o conjunto B − A. Com A = {1,2,3,4} e B = {1,…,10}, o complementar é {5,6,7,8,9,10}.' },
    { title: 'Produto cartesiano — A × B = {(x,y) | x ∈ A e y ∈ B}', description: 'Pares ordenados combinando cada elemento de A com cada um de B. Não é comutativo, e n(A × B) = n(A) · n(B).' },
];

export const setProperties: ComparisonRow[] = [
    { criterion: 'Idempotente', left: 'A ∪ A = A', right: 'A ∩ A = A' },
    { criterion: 'Elemento neutro', left: 'A ∪ ∅ = A', right: 'A ∩ ∅ = ∅' },
    { criterion: 'Comutativa', left: 'A ∪ B = B ∪ A', right: 'A ∩ B = B ∩ A' },
    { criterion: 'Associativa', left: '(A ∪ B) ∪ C = A ∪ (B ∪ C)', right: '(A ∩ B) ∩ C = A ∩ (B ∩ C)' },
];

export const numericSets: PanelItem[] = [
    { title: 'ℕ — Naturais', description: 'ℕ = {0, 1, 2, 3, 4, …} e ℕ* = {1, 2, 3, 4, …}, que exclui o zero.' },
    { title: 'ℤ — Inteiros', description: 'ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …}: os naturais acrescidos dos negativos. Note que ℕ ⊂ ℤ.' },
    { title: 'ℚ — Racionais', description: 'Números da forma a/b com a, b ∈ ℤ e b ≠ 0. Inclui inteiros, decimais exatos (1/4 = 0,25) e dízimas periódicas (−5/9 = −0,555…).' },
    { title: '𝕀 — Irracionais', description: 'Decimais infinitos e não periódicos, que não se escrevem como fração: √2, √3, π = 3,14159265…' },
    { title: 'ℝ — Reais', description: 'A união dos racionais com os irracionais: ℝ = ℚ ∪ 𝕀.' },
    { title: 'ℂ — Complexos', description: 'Números da forma a + bi, com a, b ∈ ℝ e i = √(−1). Permitem resolver equações como x² + 4 = 0.' },
];

// ------------------------------------------------------------------ Relações

export const relationProperties: ConceptItem[] = [
    {
        title: 'Reflexiva',
        description: '(x, x) ∈ R para TODO x ∈ A. Todo elemento se relaciona consigo mesmo — nenhum pode faltar.',
        accent: 'accent',
    },
    {
        title: 'Simétrica',
        description: 'Se (x, y) ∈ R, então (y, x) ∈ R. Sempre que um par existe, o par invertido também existe.',
        accent: 'accent2',
    },
    {
        title: 'Transitiva',
        description: 'Se (x, y) ∈ R e (y, z) ∈ R, então (x, z) ∈ R. O "atalho" precisa estar na relação.',
        accent: 'accent3',
    },
    {
        title: 'Antirreflexiva',
        description: '(x, x) ∉ R para todo x ∈ A. Nenhum elemento se relaciona consigo mesmo — não é o mesmo que "não ser reflexiva".',
        accent: 'accent4',
    },
    {
        title: 'Antissimétrica',
        description: 'Se (x, y) ∈ R e (y, x) ∈ R, então x = y. Pares invertidos só coexistem quando são o mesmo elemento.',
        accent: 'accent5',
    },
    {
        title: 'Relação de equivalência',
        description: 'Reflexiva, simétrica E transitiva ao mesmo tempo. O exemplo canônico é R = {(x, y) | x = y}.',
        accent: 'accent',
    },
];

// ------------------------------------------------------------------ Funções

export const functionParts: ConceptItem[] = [
    {
        title: 'Domínio D(f)',
        description: 'O conjunto de partida: todos os primeiros elementos dos pares ordenados. Em uma função, nenhum elemento do domínio pode ficar sem imagem.',
        accent: 'accent',
    },
    {
        title: 'Contradomínio CD(f)',
        description: 'Todo o conjunto de chegada, inclusive os elementos que não são atingidos por nenhum elemento do domínio.',
        accent: 'accent2',
    },
    {
        title: 'Imagem Im(f)',
        description: 'O subconjunto do contradomínio efetivamente atingido. Sempre Im(f) ⊆ CD(f).',
        accent: 'accent3',
    },
];

export const functionKinds: PanelItem[] = [
    { title: 'Injetora', description: 'Elementos distintos do domínio têm imagens distintas: f(x) = f(y) implica x = y. Nenhum elemento da imagem é "reaproveitado".' },
    { title: 'Sobrejetora', description: 'A imagem é igual ao contradomínio: todo elemento do conjunto de chegada é atingido por alguém.' },
    { title: 'Bijetora', description: 'Injetora e sobrejetora ao mesmo tempo. Só nesse caso a inversa f⁻¹ é garantidamente uma função.' },
];

export const notFunctionCases: ComparisonRow[] = [
    {
        criterion: 'É função?',
        left: 'Sim — cada elemento de A está ligado a exatamente um elemento de B.',
        right: 'Não — algum elemento de A liga-se a mais de um elemento de B, ou não se liga a nenhum.',
    },
    {
        criterion: 'Sobra em B',
        left: 'Permitido: elementos de B sem ligação apenas indicam que a função não é sobrejetora.',
        right: 'Sobrar em A é proibido: todo elemento do domínio precisa ter imagem.',
    },
];

// ------------------------------------------------------------------ Combinatória

export const countingPrinciples: ConceptItem[] = [
    {
        title: 'Princípio aditivo — "ou"',
        description: 'Quando as escolhas são mutuamente excludentes e A ∩ B = ∅: n(A ∪ B) = n(A) + n(B). Ana escolhe 1 palestra (3) OU 1 seminário (2): 3 + 2 = 5 opções.',
        accent: 'accent',
    },
    {
        title: 'Princípio multiplicativo — "e"',
        description: 'Quando a escolha é feita em etapas sucessivas: n(A × B) = n(A) · n(B). Ana escolhe 1 palestra E 1 seminário: 3 · 2 = 6 opções.',
        accent: 'accent2',
    },
    {
        title: 'Fatorial',
        description: 'n! = n · (n−1) · (n−2) · … · 3 · 2 · 1, com a convenção 0! = 1. Por exemplo, 5! = 120.',
        accent: 'accent3',
    },
];

export const combinatoricsFormulas: PanelItem[] = [
    { title: 'Arranjo simples — A(n,p) = n! / (n − p)!', description: 'Listas ORDENADAS sem repetição de p elementos entre n. Três pessoas em 8 cadeiras: A(8,3) = 8!/5! = 336.' },
    { title: 'Permutação simples — P(n) = n!', description: 'Caso particular do arranjo usando todos os n elementos distintos. Anagramas de FILA: P(4) = 4! = 24.' },
    { title: 'Permutação com repetição — n! / (n₁! · n₂! · … · nₖ!)', description: 'Divide-se pelo fatorial da multiplicidade de cada elemento repetido. ARARA (3 A, 2 R): 5!/(3!·2!) = 10.' },
    { title: 'Combinação simples — C(n,p) = n! / [(n − p)! · p!]', description: 'Subconjuntos, em que a ORDEM NÃO IMPORTA. Escolher 2 professores entre 5: C(5,2) = 10.' },
];

export const orderMatters: ComparisonRow[] = [
    {
        criterion: 'A ordem importa?',
        left: 'Sim — (1,2) é diferente de (2,1).',
        right: 'Não — {1,2} e {2,1} são a mesma escolha.',
    },
    {
        criterion: 'Fórmula',
        left: 'A(n,p) = n! / (n − p)!',
        right: 'C(n,p) = n! / [(n − p)! · p!]',
    },
    {
        criterion: 'Exemplo típico',
        left: 'Senhas, pódios, filas, números de algarismos distintos.',
        right: 'Comissões, jogos de um campeonato, escolher frutas para um suco.',
    },
    {
        criterion: 'Relação entre elas',
        left: 'O arranjo conta cada subconjunto p! vezes, uma por ordenação.',
        right: 'Por isso C(n,p) = A(n,p) / P(p): divide-se pelas repetições.',
    },
];

export const combinatoricsStats: StatItem[] = [
    { label: '192', value: 'Configurações de um jogo com menus de 4, 8 e 6 opções', accent: 'text-accent' },
    { label: '336', value: 'A(8,3) — 3 pessoas em uma fila de 8 cadeiras', accent: 'text-accent2' },
    { label: '151.200', value: 'Anagramas de MATEMATICA — 10!/(3!·2!·2!)', accent: 'text-accent3' },
];

// ------------------------------------------------------------------ Sequências

export const sequenceConcepts: ConceptItem[] = [
    {
        title: 'Sequência finita',
        description: 'Toda função de domínio ℕ* = {1, 2, …, n} cujo contradomínio é um conjunto não vazio. A imagem escreve-se (a₁, a₂, …, aₙ).',
        accent: 'accent',
    },
    {
        title: 'Sequência infinita',
        description: 'Mesma ideia, com domínio ℕ* completo: (a₁, a₂, …, aₙ, …). A sequência dos naturais é o exemplo mais simples.',
        accent: 'accent2',
    },
    {
        title: 'Termo geral',
        description: 'Uma fórmula fechada que calcula qualquer termo direto do índice, como a(n) = 2n − 3. Não depende dos termos anteriores.',
        accent: 'accent3',
    },
    {
        title: 'Lei de recorrência',
        description: 'Dá o termo inicial e uma regra que liga cada termo aos anteriores: S(1) = 2 e S(n) = 2·S(n−1) para n ≥ 2.',
        accent: 'accent4',
    },
];

export const sequenceNotes: PanelItem[] = [
    { title: 'Sequência não é conjunto', description: 'Uma sequência fixa ordem e índices; um conjunto, não. Por isso a (12)-sequência difere do conjunto {12}, e a sequência pode repetir valores.' },
    { title: 'Igualdade de sequências', description: 'Duas sequências são iguais se e somente se têm exatamente os mesmos termos, na mesma ordem — mesmos índices e mesmos valores.' },
    { title: 'Onde o índice começa', description: 'Em Fortran a contagem começa em 1. Em C, Java e Python começa em 0, então uma sequência de n termos vai de 0 a n − 1.' },
    { title: 'Outros nomes', description: 'Em computação, sequências finitas também aparecem como listas, palavras, ênuplas ou cadeias.' },
];

export const sequenceExamples: ComparisonRow[] = [
    {
        criterion: 'Progressão aritmética',
        left: 'a(n) = a₁ + (n − 1) · r, com razão r somada a cada passo.',
        right: 'Com a₁ = 3 e r = 4: (3, 7, 11, 15, 19, …).',
    },
    {
        criterion: 'Progressão geométrica',
        left: 'a(n) = a₁ · q^(n−1), com razão q multiplicada a cada passo.',
        right: 'Com a₁ = 2 e q = 2: (2, 4, 8, 16, 32, …).',
    },
    {
        criterion: 'Fibonacci',
        left: 'F(1) = 1, F(2) = 2 e F(n) = F(n−2) + F(n−1) para n > 2.',
        right: 'Cada termo depende dos DOIS anteriores: (1, 2, 3, 5, 8, 13, …).',
    },
    {
        criterion: 'Achar o termo geral',
        left: 'Em (8, 13, 18, 23, 28, …) a diferença constante é 5, então é uma PA.',
        right: 'a(n) = 8 + 5(n − 1) = 5n + 3. Confira com n = 1, que deve dar 8.',
    },
];

// ------------------------------------------------------------------ Somatórios

export const sumProperties: PanelItem[] = [
    { title: 'Somatório de constante', description: 'Σ (i = p até n) k = (n − p + 1) · k. O fator (n − p + 1) é a quantidade de parcelas.' },
    { title: 'Constante sai do somatório', description: 'Σ k · a(i) = k · Σ a(i). É o que permite calcular Σ 2i² como 2 · Σ i².' },
    { title: 'Soma algébrica se separa', description: 'Σ (a(i) ± b(i)) = Σ a(i) ± Σ b(i).' },
    { title: 'Separação do último termo', description: 'Σ (i = p até n) a(i) = Σ (i = p até n−1) a(i) + a(n).' },
    { title: 'Separação do primeiro termo', description: 'Σ (i = p até n) a(i) = a(p) + Σ (i = p+1 até n) a(i).' },
    { title: 'Avanço dos limites', description: 'Σ (i = p até n) a(i) = Σ (i = p+j até n+j) a(i − j). Deslocam-se os limites e compensa-se no índice.' },
];

export const sumSpecialCases: ComparisonRow[] = [
    {
        criterion: 'O índice é mudo',
        left: 'Σ (i = 1 até 3) i = 6',
        right: 'Σ (j = 1 até 3) j = 6 — a letra do índice não altera o resultado.',
    },
    {
        criterion: 'Somatórios triviais',
        left: 'Σ 0 = 0, qualquer que seja o intervalo.',
        right: 'Σ (i = 1 até n) 1 = n — soma-se o número 1 exatamente n vezes.',
    },
    {
        criterion: 'Somatório com predicado',
        left: 'Σ (P(k)) a(k) soma os termos em que P(k) é verdadeiro.',
        right: 'Com P(k) ímpar e 1 ≤ k ≤ 10: Σ k² = 1² + 3² + 5² + 7² + 9².',
    },
    {
        criterion: 'Somatório duplo',
        left: 'A ordem pode ser trocada: Σⱼ Σᵢ x(i,j) = Σᵢ Σⱼ x(i,j).',
        right: 'O número de parcelas é (n − p + 1) · (m − q + 1).',
    },
];

export const sumFiniteInfinite: ConceptItem[] = [
    {
        title: 'Soma finita',
        description: 'Tem limite superior finito, como Σ (n = 1 até 5) 1/2ⁿ. Em computação, é o caso mais comum.',
        accent: 'accent',
    },
    {
        title: 'Soma infinita (série)',
        description: 'É o limite das somas parciais: Σ (k = 1 até ∞) a(k) = lim (k → ∞) Σ a(k). Em Cálculo, chamam-se séries.',
        accent: 'accent2',
    },
    {
        title: 'Converge ou diverge',
        description: 'A série converge para S quando lim S(n) = S existe. Diverge quando esse limite não existe — porque S(n) cresce sem limite ou porque oscila.',
        accent: 'accent3',
    },
];

// ------------------------------------------------------------------ Proposições

export const propositionPrinciples: ConceptItem[] = [
    {
        title: 'Princípio da identidade',
        description: 'Uma proposição verdadeira é verdadeira; uma proposição falsa é falsa.',
        accent: 'accent',
    },
    {
        title: 'Princípio da não-contradição',
        description: 'Nenhuma proposição pode ser verdadeira e falsa ao mesmo tempo.',
        accent: 'accent2',
    },
    {
        title: 'Princípio do terceiro excluído',
        description: 'Uma proposição ou é verdadeira, ou é falsa: não há uma terceira possibilidade.',
        accent: 'accent3',
    },
];

export const whatIsProposition: ComparisonRow[] = [
    {
        criterion: 'Declarativa',
        left: '"A Terra é maior que a Lua" · "Dois é um número primo" · "5 > 8"',
        right: 'São proposições: dá para atribuir verdadeiro ou falso.',
    },
    {
        criterion: 'Exclamativa',
        left: '"Caramba!" · "Feliz ano novo!"',
        right: 'Não é proposição — não se lhe atribui valor lógico.',
    },
    {
        criterion: 'Interrogativa',
        left: '"Como é o seu nome?" · "O jogo vai acabar logo?"',
        right: 'Não é proposição — pergunta não afirma nada.',
    },
    {
        criterion: 'Imperativa',
        left: '"Estude mais." · "Leia aquele livro."',
        right: 'Não é proposição — ordem não é verdadeira nem falsa.',
    },
    {
        criterion: 'Sentença aberta',
        left: '"x² − 4 = 0" · "Ele é, certamente, um homem alto"',
        right: 'Não é proposição enquanto a variável estiver livre ou o termo for subjetivo.',
    },
];

export const simpleVsCompound: PanelItem[] = [
    { title: 'Proposição simples', description: 'Vem sozinha, sem conectivos: "Todo homem é mortal", "O novo papa é alemão".' },
    { title: 'Proposição composta', description: 'Une duas ou mais simples por um conectivo: "João é médico e Pedro é dentista", "Se chover amanhã de manhã, então não irei à praia".' },
    { title: 'O que determina o valor lógico', description: 'Duas coisas: o valor lógico das proposições componentes e o tipo de conectivo que as une.' },
];

// ------------------------------------------------------------------ Tabelas-verdade

export const conjunctionTable: TruthTable = {
    caption: 'Conjunção — p ∧ q',
    headers: ['p', 'q', 'p ∧ q'],
    rows: [
        ['V', 'V', 'V'],
        ['V', 'F', 'F'],
        ['F', 'V', 'F'],
        ['F', 'F', 'F'],
    ],
};

export const disjunctionTable: TruthTable = {
    caption: 'Disjunção — p ∨ q',
    headers: ['p', 'q', 'p ∨ q'],
    rows: [
        ['V', 'V', 'V'],
        ['V', 'F', 'V'],
        ['F', 'V', 'V'],
        ['F', 'F', 'F'],
    ],
};

export const exclusiveOrTable: TruthTable = {
    caption: 'Disjunção exclusiva — "ou p, ou q"',
    headers: ['p', 'q', 'p ⊻ q'],
    rows: [
        ['V', 'V', 'F'],
        ['V', 'F', 'V'],
        ['F', 'V', 'V'],
        ['F', 'F', 'F'],
    ],
};

export const conditionalTable: TruthTable = {
    caption: 'Condicional — p → q',
    headers: ['p', 'q', 'p → q'],
    rows: [
        ['V', 'V', 'V'],
        ['V', 'F', 'F'],
        ['F', 'V', 'V'],
        ['F', 'F', 'V'],
    ],
};

export const biconditionalTable: TruthTable = {
    caption: 'Bicondicional — p ↔ q',
    headers: ['p', 'q', 'p ↔ q'],
    rows: [
        ['V', 'V', 'V'],
        ['V', 'F', 'F'],
        ['F', 'V', 'F'],
        ['F', 'F', 'V'],
    ],
};

export const negationTable: TruthTable = {
    caption: 'Negação — ~p',
    headers: ['p', '~p'],
    rows: [
        ['V', 'F'],
        ['F', 'V'],
    ],
};

export const deMorganTable: TruthTable = {
    caption: 'As colunas-resultado coincidem, logo ~(p ∧ q) ≡ ~p ∨ ~q',
    headers: ['p', 'q', 'p ∧ q', '~(p ∧ q)', '~p', '~q', '~p ∨ ~q'],
    // As duas colunas-resultado que se quer comparar: ~(p ∧ q) e ~p ∨ ~q.
    highlightColumns: [4, 7],
    rows: [
        ['V', 'V', 'V', 'F', 'F', 'F', 'F'],
        ['V', 'F', 'F', 'V', 'F', 'V', 'V'],
        ['F', 'V', 'F', 'V', 'V', 'F', 'V'],
        ['F', 'F', 'F', 'V', 'V', 'V', 'V'],
    ],
};

export const notTautologyTable: TruthTable = {
    caption: '(A ∧ B) ∨ C → A ∧ (B ∨ C) — falha nas linhas 5 e 7 (A falsa, C verdadeira), logo é contingência',
    headers: ['A', 'B', 'C', '(A ∧ B) ∨ C', 'A ∧ (B ∨ C)', 'Condicional'],
    // A coluna 6 é o resultado da condicional inteira.
    highlightColumns: [6],
    rows: [
        ['V', 'V', 'V', 'V', 'V', 'V'],
        ['V', 'V', 'F', 'V', 'V', 'V'],
        ['V', 'F', 'V', 'V', 'V', 'V'],
        ['V', 'F', 'F', 'F', 'F', 'V'],
        ['F', 'V', 'V', 'V', 'F', 'F'],
        ['F', 'V', 'F', 'F', 'F', 'V'],
        ['F', 'F', 'V', 'V', 'F', 'F'],
        ['F', 'F', 'F', 'F', 'F', 'V'],
    ],
};

export const connectiveSummary: PanelItem[] = [
    { title: 'Conjunção ∧ — "e"', description: 'Só é VERDADEIRA quando ambas as partes são verdadeiras. Em diagrama de conjuntos, corresponde à interseção p ∩ q.' },
    { title: 'Disjunção ∨ — "ou"', description: 'Só é FALSA quando ambas as partes são falsas. Corresponde à união p ∪ q.' },
    { title: 'Disjunção exclusiva — "ou … ou …"', description: 'Verdadeira apenas quando os valores diferem: as situações são mutuamente excludentes.' },
    { title: 'Condicional → — "se … então …"', description: 'Só é FALSA quando o antecedente é V e o consequente é F. Corresponde à inclusão p ⊂ q.' },
    { title: 'Bicondicional ↔ — "se e somente se"', description: 'Verdadeira quando os dois lados têm o mesmo valor. Corresponde à igualdade p = q.' },
    { title: 'Negação ~ — "não"', description: 'Inverte o valor lógico. Equivalem a "não A": "não é verdade que A" e "é falso que A".' },
];

export const conditionVocabulary: ComparisonRow[] = [
    {
        criterion: 'Condição suficiente',
        left: '"Pedro ser rico é condição suficiente para Maria ser médica"',
        right: 'Traduz-se por p → q: o antecedente é a condição suficiente.',
    },
    {
        criterion: 'Condição necessária',
        left: '"Maria ser médica é condição necessária para que Pedro seja rico"',
        right: 'Traduz-se pela MESMA fórmula p → q: o consequente é o resultado necessário.',
    },
    {
        criterion: 'Antecedente e consequente',
        left: 'Em "Se p, então q", p é o antecedente.',
        right: 'E q é o consequente. Uma condição suficiente gera um resultado necessário.',
    },
];

// ------------------------------------------------------------------ Equivalência

export const equivalenceLaws: PanelItem[] = [
    { title: 'De Morgan para a conjunção — ~(p ∧ q) ≡ ~p ∨ ~q', description: 'Nega-se a primeira parte, nega-se a segunda e troca-se o "e" pelo "ou". A negação de "João é médico e Pedro é dentista" é "João não é médico OU Pedro não é dentista".' },
    { title: 'De Morgan para a disjunção — ~(p ∨ q) ≡ ~p ∧ ~q', description: 'Simetricamente: negam-se as duas partes e troca-se o "ou" pelo "e".' },
    { title: 'Negação da condicional — ~(p → q) ≡ p ∧ ~q', description: 'Mantém-se o antecedente e nega-se o consequente. Não se troca a seta por outra seta.' },
    { title: 'Condicional como disjunção — p → q ≡ ~p ∨ q', description: 'Permite eliminar a seta e trabalhar só com ∧, ∨ e ~.' },
    { title: 'Contrapositiva — p → q ≡ ~q → ~p', description: 'Inverte-se a ordem E negam-se as duas partes. É a base da demonstração por contraposição.' },
    { title: 'Bicondicional como conjunção — p ↔ q ≡ (p → q) ∧ (q → p)', description: 'A bicondicional exige que a implicação valha nos dois sentidos.' },
];

export const formulaClassification: ConceptItem[] = [
    {
        title: 'Tautologia',
        description: 'A coluna-resultado dá V em TODAS as linhas. Exemplos verificados: A → (B → A) e (A → B) → [(A ∨ C) → (B ∨ C)].',
        accent: 'accent',
    },
    {
        title: 'Contradição',
        description: 'A coluna-resultado dá F em todas as linhas. O caso mais simples é p ∧ ~p.',
        accent: 'accent2',
    },
    {
        title: 'Contingência',
        description: 'A coluna mistura V e F — o valor depende das proposições. É o caso de (A ∧ B) ∨ C → A ∧ (B ∨ C).',
        accent: 'accent3',
    },
];

export const equivalenceTraps: ComparisonRow[] = [
    {
        criterion: 'Recíproca — q → p',
        left: 'NÃO é equivalente a p → q.',
        right: 'Com p = F e q = V: p → q é V, mas q → p é F. Confundir as duas é o erro clássico.',
    },
    {
        criterion: 'Contrapositiva — ~q → ~p',
        left: 'É equivalente a p → q.',
        right: 'As colunas-resultado coincidem nas quatro linhas.',
    },
    {
        criterion: 'Negar uma conjunção',
        left: 'Errado: ~p ∧ ~q.',
        right: 'Certo: ~p ∨ ~q. Manter o "e" afirma muito mais do que a negação exige.',
    },
    {
        criterion: 'Número de linhas',
        left: 'Uma fórmula com n proposições distintas…',
        right: '…gera 2ⁿ linhas: 2 proposições dão 4 linhas, 3 dão 8.',
    },
];
