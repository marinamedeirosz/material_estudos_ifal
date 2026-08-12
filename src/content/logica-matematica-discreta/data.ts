import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

export const LMMD_GUIDE_CONTEXT = `
GUIA COMPLETO DE LÓGICA MATEMÁTICA E MATEMÁTICA DISCRETA (LMMD) - Resumo:

1. O QUE É MATEMÁTICA DISCRETA: é o ramo da matemática que estuda estruturas discretas, enumeráveis e finitas, em oposição à matemática contínua. O mundo da matemática divide-se em dois domínios: o contínuo, cujo cerne é o sistema dos números reais, em que não há transições abruptas e existem infinitos valores entre cada par de números; e o discreto, que trata de objetos separados e desconectados, como os números inteiros. Exemplos de estruturas discretas além dos inteiros: declarações lógicas e grafos. Tipos de conjuntos: finitos; enumeráveis ou contáveis (N, Z, Q); recursivamente enumeráveis; não contáveis (P(X) para X infinito); contínuos (R). Contraste prático contínuo vs discreto: a velocidade real de um carro é contínua, mas amostrada pelo computador vira uma série de pontos discretos; uma cena real é contínua, a imagem digital é uma matriz de pixels; um mapa rodoviário é contínuo, o modelo computacional é um grafo de cidades e arestas; relógio analógico vs digital. Por que estudar: oferece ao estudante de computação um conjunto de técnicas para modelar problemas, e um computador digital moderno é basicamente um sistema discreto finito. Aplicações declaradas pelo professor: Lógica e Conjuntos → sistemas especialistas (IA); Relações e funções → bancos de dados relacionais e algoritmos distribuídos; Análise combinatória → análise de algoritmos (pior caso); Grafos não dirigidos → linguagens e parsing; Grafos dirigidos → algoritmos de roteamento em redes; Álgebra booleana → projeto de circuitos digitais; Teoria de grupo → teoria da informação; Autômato de estados finito → modelo computacional geral; Probabilidade → análise de algoritmos (caso médio). Modelo matemático é uma estrutura que descreve aproximadamente as características de um fenômeno em estudo.

2. FUNDAMENTOS DA LÓGICA — PROPOSIÇÕES: a lógica estuda a natureza do raciocínio e do conhecimento, e formaliza os elementos usados nas demonstrações de teoremas. A lógica clássica baseia-se em um mundo bivalente (binário), em que as sentenças só assumem dois valores-verdade. PROPOSIÇÃO é uma sentença declarativa cujo conteúdo pode ser considerado verdadeiro ou falso. Só sentenças declarativas são estudadas: sentenças exclamativas ("Caramba!"), interrogativas ("Como é o seu nome?") e imperativas ("Estude mais.") NÃO são proposições, pois não se lhes pode atribuir valor lógico. Também não são proposições as sentenças abertas com variável livre, como "x² − 4 = 0", cujo valor depende de x, nem frases vagas e subjetivas como "Ele é, certamente, um homem alto". Proposições são representadas por letras minúsculas (p, q, r, s). Notação de valor lógico: VL(p) = V significa que p é verdadeira; VL(q) = F que q é falsa. TRÊS PRINCÍPIOS: (i) Princípio da Identidade — uma proposição verdadeira é verdadeira e uma falsa é falsa; (ii) Princípio da Não-Contradição — nenhuma proposição pode ser verdadeira e falsa ao mesmo tempo; (iii) Princípio do Terceiro Excluído — uma proposição ou é verdadeira ou é falsa, não há outra possibilidade. Proposições SIMPLES vêm sozinhas ("Todo homem é mortal"); proposições COMPOSTAS unem duas ou mais por conectivos. O valor lógico de uma composta depende de duas coisas: o valor lógico das componentes e o tipo de conectivo que as une.

3. CONECTIVOS LÓGICOS E TABELAS-VERDADE: o professor usa V/F (não T/F) e adota o TIL (~) para negação, embora a cantoneira (¬) também exista.
- CONJUNÇÃO "e", símbolo ∧: p∧q só é verdadeira quando ambas as componentes são verdadeiras; falsa nos demais casos. Tabela: VV→V, VF→F, FV→F, FF→F. Mnemônico do professor: a promessa de um pai ao filho "eu te darei uma bola E te darei uma bicicleta" só é cumprida se os dois presentes vierem. Em diagrama de conjuntos, a conjunção corresponde à INTERSEÇÃO p ∩ q.
- DISJUNÇÃO "ou", símbolo ∨: p∨q só é falsa quando as duas partes são falsas; verdadeira nos demais casos. Tabela: VV→V, VF→V, FV→V, FF→F. A promessa inteira só é descumprida se as duas partes forem descumpridas. Corresponde à UNIÃO p ∪ q.
- DISJUNÇÃO EXCLUSIVA "ou … ou …", símbolo ∨ sublinhado (XOR): só é verdadeira quando uma das sentenças é verdadeira e a outra falsa — situações mutuamente excludentes. Tabela: VV→F, VF→V, FV→V, FF→F.
- CONDICIONAL "se … então …", símbolo →: p→q só é FALSA quando o antecedente p é verdadeiro e o consequente q é falso; nos demais casos é verdadeira. Tabela: VV→V, VF→F, FV→V, FF→V. Em "Se p, então q", p é o ANTECEDENTE e q o CONSEQUENTE. Vocabulário de condição: "p é condição SUFICIENTE para q" e "q é condição NECESSÁRIA para p" traduzem-se ambos por p→q; uma condição suficiente gera um resultado necessário. Em diagrama, corresponde à INCLUSÃO p ⊂ q.
- BICONDICIONAL "se e somente se", símbolo ↔: verdadeira quando antecedente e consequente têm o mesmo valor (ambos V ou ambos F); falsa nos demais casos. Tabela: VV→V, VF→F, FV→F, FF→V. É a conjunção de duas condicionais: p↔q equivale a (p→q) ∧ (q→p). Em diagrama, corresponde à IGUALDADE dos conjuntos p = q.
- NEGAÇÃO "não", símbolo ~ (til) ou ¬: inverte o valor lógico. Tabela: V→F, F→V. Negar uma sentença que já é negativa devolve a afirmativa. São equivalentes a "não A": "não é verdade que A" e "é falso que A".

4. EQUIVALÊNCIA LÓGICA E NEGAÇÃO DE COMPOSTAS: duas proposições são logicamente equivalentes quando têm a mesma coluna-resultado na tabela-verdade — comparar as colunas é o método que o professor usa para provar equivalência. LEIS DE DE MORGAN: para negar uma conjunção, nega-se a primeira parte, nega-se a segunda e troca-se "e" por "ou": ~(p ∧ q) = ~p ∨ ~q. Exemplo do professor: a negação de "João é médico e Pedro é dentista" é "João não é médico OU Pedro não é dentista". Simetricamente, ~(p ∨ q) = ~p ∧ ~q. NEGAÇÃO DA CONDICIONAL: ~(p → q) = p ∧ ~q — mantém-se o antecedente e nega-se o consequente. A condicional também equivale a p → q = ~p ∨ q. CONTRAPOSITIVA: p → q é logicamente equivalente a ~q → ~p. Já a RECÍPROCA q → p NÃO é equivalente à condicional original — é o erro clássico. TAUTOLOGIA é a fórmula que resulta V em todas as linhas; CONTRADIÇÃO é a que resulta F em todas; CONTINGÊNCIA é a que mistura V e F. Exemplos verificados: A → (B → A) é tautologia; (A → B) → [(A ∨ C) → (B ∨ C)] é tautologia; já (A ∧ B) ∨ C → A ∧ (B ∨ C) NÃO é tautologia — falha quando A é falsa e C verdadeira. Uma fórmula com n proposições distintas gera uma tabela-verdade de 2^n linhas.

5. TEORIA DOS CONJUNTOS: conjunto é uma coleção de objetos distintos chamados elementos, não importando a ordem. Representação por chaves ou por diagrama de Venn. Conjunto VAZIO ({ } ou ∅) não tem elementos; conjunto UNITÁRIO tem um só; conjunto UNIVERSO reúne todos os elementos com dada propriedade. Notação por propriedade: P = {x | x é um número primo}. CARDINALIDADE n(A) é a quantidade de elementos. PERTINÊNCIA relaciona elemento e conjunto: ∈ (pertence) e ∉ (não pertence). INCLUSÃO relaciona dois conjuntos: A ⊂ B (A está contido em B) quando todo elemento de A também pertence a B; B ⊃ A (B contém A); ⊄ nega a inclusão. O conjunto vazio é subconjunto de qualquer conjunto: ∅ ⊂ A. Distinguir pertinência de inclusão é a confusão mais comum. CONJUNTO DAS PARTES P(A) (conjunto potência) é formado por todos os subconjuntos de A e tem cardinalidade 2^n, com n = n(A); para A = {2,3,5,7}, n(P(A)) = 2⁴ = 16. Dois conjuntos são IGUAIS quando A ⊂ B e B ⊂ A.
OPERAÇÕES: UNIÃO A ∪ B = {x | x ∈ A ou x ∈ B}; INTERSEÇÃO A ∩ B = {x | x ∈ A e x ∈ B}; DIFERENÇA A − B = {x | x ∈ A e x ∉ B}, que não é comutativa nem associativa; DIFERENÇA SIMÉTRICA A Δ B = (A − B) ∪ (B − A) = (A ∪ B) − (A ∩ B); COMPLEMENTAR de A em relação a B (quando A ⊂ B) é B − A. PROPRIEDADES da união e da interseção: idempotente (A ∪ A = A, A ∩ A = A), elemento neutro (A ∪ ∅ = A, A ∩ ∅ = ∅), comutativa e associativa. Propriedades da diferença simétrica: A Δ ∅ = A, A Δ A = ∅, A Δ B = B Δ A. PRINCÍPIO DA INCLUSÃO-EXCLUSÃO: n(A ∪ B) = n(A) + n(B) − n(A ∩ B); para três conjuntos, n(A∪B∪C) = n(A)+n(B)+n(C) − n(A∩B) − n(A∩C) − n(B∩C) + n(A∩B∩C). PRODUTO CARTESIANO A × B = {(x,y) | x ∈ A e y ∈ B}, não é comutativo (A × B ≠ B × A) e tem n(A × B) = n(A)·n(B). CONJUNTOS NUMÉRICOS: N = {0,1,2,3,…} e N* = {1,2,3,…}; Z acrescenta os negativos, com N ⊂ Z; Q são os que se escrevem como fração a/b com a,b ∈ Z e b ≠ 0 (inclui decimais exatos e dízimas periódicas); I são os irracionais (decimais infinitos não periódicos, como √2, √3 e π); R = Q ∪ I; C são os complexos da forma a + bi com i = √(−1).

6. RELAÇÕES: dados A e B, uma RELAÇÃO BINÁRIA R é um subconjunto do produto cartesiano, R ⊂ A × B; os pares associam x ∈ A a y ∈ B e denotam-se xRy. Exemplo: A = {1,3,5,7}, B = {3,5,7,9,11} e R = {(x,y) ∈ A×B | y = 2x − 3} resulta em R = {(3,3), (5,7), (7,11)}. RELAÇÃO INVERSA R⁻¹ = {(y,x) | (x,y) ∈ R} inverte a ordem dos pares. PROPRIEDADES de R ⊂ A × A: REFLEXIVA se (x,x) ∈ R para todo x ∈ A; SIMÉTRICA se (x,y) ∈ R implica (y,x) ∈ R; TRANSITIVA se (x,y) e (y,z) ∈ R implicam (x,z) ∈ R; ANTIRREFLEXIVA se (x,x) ∉ R para todo x; ANTISSIMÉTRICA se (x,y) ∈ R e (y,x) ∈ R implicam x = y. RELAÇÃO DE EQUIVALÊNCIA é a que é simultaneamente reflexiva, simétrica e transitiva. A relação R = {(x,y) | x = y} é de equivalência. Cuidado: ser simétrica não basta — no exemplo do professor, R = {(2,8),(3,7),(4,6),(5,5),(6,4),(7,3),(8,2)} é simétrica mas não é reflexiva nem transitiva, logo não é de equivalência.

7. FUNÇÕES: uma FUNÇÃO de A em B é uma relação que associa a cada elemento de A um ÚNICO elemento de B; escreve-se f: A → B e y = f(x). Uma relação falha em ser função por dois motivos: algum elemento de A associado a mais de um elemento de B, ou algum elemento de A sem associação nenhuma. DOMÍNIO D(f) é o conjunto dos primeiros elementos dos pares; CONTRADOMÍNIO CD(f) é todo o conjunto de chegada; IMAGEM Im(f) é o subconjunto do contradomínio efetivamente atingido. Para f: A → B com A = {0,1,2}, B = {0,1,2,3,4,5} e f(x) = 2x + 1, temos D(f) = {0,1,2}, CD(f) = {0,1,2,3,4,5} e Im(f) = {1,3,5}. CLASSIFICAÇÃO: f é SOBREJETORA quando a imagem é igual ao contradomínio; f é INJETORA quando elementos distintos do domínio têm imagens distintas, ou seja, f(x) = f(y) implica x = y; f é BIJETORA quando é injetora e sobrejetora ao mesmo tempo — e só nesse caso a inversa f⁻¹ é garantidamente uma função. COMPOSIÇÃO: dadas f: A → B e g: Im(f) → C, define-se (g ∘ f)(x) = g(f(x)). A composição não é comutativa: com f(x) = x + 1 e g(x) = 3x, (g∘f)(5) = g(6) = 18, enquanto (f∘g)(5) = f(15) = 16.

8. ANÁLISE COMBINATÓRIA: PRINCÍPIO ADITIVO — se A e B não têm elementos em comum, n(A ∪ B) = n(A) + n(B); usa-se quando as escolhas são mutuamente excludentes ("ou"). PRINCÍPIO MULTIPLICATIVO — n(A × B) = n(A)·n(B); usa-se quando as escolhas são feitas em etapas sucessivas ("e"). Exemplo: um jogo com três menus de 4, 8 e 6 opções pode ser configurado de 4·8·6 = 192 modos; uma sobremesa com 5 sabores, 3 acompanhamentos e 2 caldas dá 5·3·2 = 30 combinações. FATORIAL: n! = n·(n−1)·(n−2)·…·3·2·1, com a convenção 0! = 1. ARRANJO SIMPLES A(n,p) é uma lista ORDENADA sem repetição de p elementos escolhidos entre n: A(n,p) = n!/(n−p)!. Exemplo: 3 pessoas em fila de 8 cadeiras dá A(8,3) = 8!/5! = 336. PERMUTAÇÃO SIMPLES é o caso particular do arranjo em que se usam todos os n elementos: P(n) = n!. Anagramas de FILA: P(4) = 4! = 24. PERMUTAÇÃO COM REPETIÇÃO, quando há elementos repetidos, divide-se pelo fatorial de cada multiplicidade: P(n; n1,n2,…,nk) = n!/(n1!·n2!·…·nk!). Anagramas de ARARA (3 A e 2 R): 5!/(3!·2!) = 10. Anagramas de MATEMATICA: 10!/(3!·2!·2!) = 151200. COMBINAÇÃO SIMPLES C(n,p) conta subconjuntos, ou seja, a ORDEM NÃO IMPORTA: C(n,p) = A(n,p)/P(p) = n!/[(n−p)!·p!]. Escolher 2 professores entre 5 dá C(5,2) = 10. A distinção arranjo vs combinação é exatamente se a ordem importa. Notação binomial C(n,p) = (n p), que forma o TRIÂNGULO DE PASCAL, cujas linhas dão os coeficientes do BINÔMIO DE NEWTON: (x+y)^n = Σ C(n,p)·x^(n−p)·y^p, com termo geral T(p+1) = C(n,p)·x^(n−p)·y^p.

9. SEQUÊNCIAS: uma SEQUÊNCIA FINITA de n termos é toda função de domínio N* = {1,2,…,n} cujo contradomínio é um conjunto não vazio; a imagem indica-se por (a1, a2, …, an). Uma SEQUÊNCIA INFINITA tem domínio N* completo. Em computação, sequências finitas também são chamadas de listas, palavras, ênuplas ou cadeias. Uma sequência especifica não só os valores, mas a ORDEM e os ÍNDICES; pode ter termos repetidos; duas sequências são iguais se e somente se têm os mesmos termos, na mesma ordem. Cuidado com a notação: (2,3) como par ordenado difere de (2,3) como sequência, e (12)-sequência difere do conjunto {12}. Em Fortran os índices começam em 1; em C, Java e Python começam em 0, então uma sequência de n termos vai de 0 a n−1. Uma sequência pode ser definida por TERMO GERAL (ex.: a(n) = 2n − 3) ou por LEI DE RECORRÊNCIA, que dá o(s) termo(s) inicial(is) e uma regra ligando cada termo aos anteriores — por exemplo S(1) = 2 e S(n) = 2·S(n−1) para n ≥ 2, ou Fibonacci com F(1) = 1, F(2) = 2 e F(n) = F(n−2) + F(n−1). PA de razão r tem termo geral a(n) = a1 + (n−1)·r; PG de razão q tem a(n) = a1·q^(n−1). A sequência (8,13,18,23,28,…) tem termo geral 5n + 3.

10. SOMATÓRIOS: a letra grega sigma (Σ) denota o somatório; abaixo dela ficam o índice e o limite inferior, acima o limite superior. Assim, 1+2+…+9 escreve-se como Σ(i=1 até 9) i, que vale 45. Uma variante mais geral é Σ com um PREDICADO no índice, Σ(P(k)) a(k), que soma todos os termos para os quais P(k) é verdadeiro. PROPRIEDADES: (i) somatório de constante Σ(i=p até n) k = (n − p + 1)·k; (ii) constante sai do somatório, Σ k·a(i) = k·Σ a(i); (iii) somatório de soma algébrica se separa, Σ (a(i) ± b(i)) = Σ a(i) ± Σ b(i); (iv) separação do último termo, Σ(i=p até n) a(i) = Σ(i=p até n−1) a(i) + a(n); (v) separação do primeiro termo; (vi) avanço dos limites, Σ(i=p até n) a(i) = Σ(i=p+j até n+j) a(i−j). Casos especiais: Σ 0 = 0; Σ(i=1 até n) 1 = n; o índice é mudo, então Σ(i=1 até 3) i = Σ(j=1 até 3) j = 6. SOMATÓRIO DUPLO soma todos os elementos de uma matriz e pode ter a ordem trocada: Σ(j)Σ(i) x(i,j) = Σ(i)Σ(j) x(i,j); o número de parcelas de um somatório duplo é (n − p + 1)·(m − q + 1). Erro clássico a evitar: reutilizar a mesma letra de índice em dois somatórios aninhados, o que leva a resultados absurdos. SOMA FINITA tem limite superior finito; SOMA INFINITA (chamada série em Cálculo) é o limite das somas parciais: Σ(k=1 até ∞) a(k) = lim(k→∞) Σ a(k). Uma soma parcial é S(N) = Σ(n=1 até N) a(n). A série CONVERGE para S quando lim S(n) = S existe, e DIVERGE quando esse limite não existe, seja porque S(n) tende ao infinito, seja porque oscila. Em computação, somas finitas são mais comuns que as infinitas.

EMENTA OFICIAL (PPC, código LMMD, 1º período, 80h, 4h semanais, sem pré-requisitos): Fundamentos da Lógica; Lógica Proposicional; Teoria dos Conjuntos; Sequências; Teoria dos Números; Números Inteiros e Primos; Prova e Indução Matemática.
`;

export const LMMD_TOPICS: QuizTopicOption[] = [
    {
        value: 'av1',
        label: 'AV1: Conjuntos, Relações e Funções',
        prompt: 'Conteúdo da primeira metade de Lógica Matemática e Matemática Discreta, na sequência didática do professor: introdução à matemática discreta (discreto vs contínuo, estruturas enumeráveis e finitas, aplicações em computação), teoria dos conjuntos (definição, cardinalidade, conjunto vazio/unitário/universo, pertinência ∈ e ∉, inclusão ⊂ e ⊃, conjunto das partes com 2^n elementos, igualdade de conjuntos, união, interseção, diferença, diferença simétrica, complementar, produto cartesiano com n(A×B) = n(A)·n(B), princípio da inclusão-exclusão n(A∪B) = n(A)+n(B)−n(A∩B), conjuntos numéricos N, Z, Q, I, R e C), relações binárias (subconjunto de A×B, relação inversa, propriedades reflexiva, simétrica, transitiva, antirreflexiva e antissimétrica, relação de equivalência) e funções (definição, domínio, contradomínio, imagem, injetora, sobrejetora, bijetora, função inversa e composição de funções).',
    },
    {
        value: 'av2',
        label: 'AV2: Combinatória, Sequências, Somatórios e Lógica',
        prompt: 'Conteúdo da segunda metade de Lógica Matemática e Matemática Discreta: análise combinatória (princípio aditivo e princípio multiplicativo, fatorial com 0! = 1, arranjo simples A(n,p) = n!/(n−p)!, permutação simples P(n) = n!, permutação com repetição n!/(n1!·n2!·…), combinação simples C(n,p) = n!/[(n−p)!p!], quando a ordem importa ou não, triângulo de Pascal e binômio de Newton), sequências (finitas e infinitas como funções de domínio N*, termo geral, lei de recorrência, PA, PG e Fibonacci), somatórios (notação sigma, índice mudo, somatório com predicado, propriedades de constante, separação do primeiro e do último termo, avanço dos limites, somatório duplo e número de parcelas, somas finitas e infinitas, convergência e divergência) e fundamentos da lógica proposicional (proposições, valor lógico, princípios da identidade, não-contradição e terceiro excluído, conectivos ∧, ∨, ou-exclusivo, →, ↔ e negação ~, tabelas-verdade, equivalência lógica, leis de De Morgan, negação da condicional, contrapositiva, tautologia, contradição e contingência).',
    },
    { value: 'introducao', label: 'Introdução: discreto vs contínuo' },
    { value: 'conjuntos', label: 'Teoria dos Conjuntos' },
    { value: 'relacoes', label: 'Relações e suas propriedades' },
    { value: 'funcoes', label: 'Funções: injetora, sobrejetora, bijetora' },
    { value: 'combinatoria', label: 'Análise Combinatória' },
    { value: 'sequencias', label: 'Sequências e Recorrências' },
    { value: 'somatorios', label: 'Somatórios' },
    {
        value: 'proposicoes',
        label: 'Proposições e conectivos lógicos',
        prompt: 'Fundamentos da lógica em LMMD: o que é uma proposição (sentença declarativa à qual se atribui verdadeiro ou falso), o que NÃO é proposição (sentenças exclamativas, interrogativas, imperativas, sentenças abertas com variável livre e frases subjetivas), notação de valor lógico VL(p), princípios da identidade, da não-contradição e do terceiro excluído, proposições simples e compostas, e os conectivos lógicos com suas tabelas-verdade: conjunção ∧ (só V quando ambas V), disjunção ∨ (só F quando ambas F), disjunção exclusiva (V só quando os valores diferem), condicional → (só F quando o antecedente é V e o consequente é F, com o vocabulário de condição suficiente e condição necessária), bicondicional ↔ (V quando os valores coincidem) e negação ~ (inverte o valor). O professor adota o til (~) para a negação e usa V/F em vez de T/F.',
    },
    {
        value: 'equivalencia',
        label: 'Equivalência lógica e tabelas-verdade',
        prompt: 'Equivalência lógica em LMMD: duas proposições são logicamente equivalentes quando têm a mesma coluna-resultado na tabela-verdade, e comparar as colunas é o método usado para provar a equivalência. Leis de De Morgan: ~(p ∧ q) = ~p ∨ ~q e ~(p ∨ q) = ~p ∧ ~q — para negar uma conjunção nega-se cada parte e troca-se "e" por "ou". Negação da condicional: ~(p → q) = p ∧ ~q. Equivalência da condicional: p → q = ~p ∨ q. Contrapositiva: p → q equivale a ~q → ~p, enquanto a recíproca q → p NÃO é equivalente. Classificação de fórmulas: tautologia (V em todas as linhas), contradição (F em todas) e contingência (mistura). Uma fórmula com n proposições distintas gera 2^n linhas na tabela-verdade. Exemplos verificados: A → (B → A) é tautologia; (A → B) → [(A ∨ C) → (B ∨ C)] é tautologia; (A ∧ B) ∨ C → A ∧ (B ∨ C) não é tautologia.',
    },
];

/**
 * A turma coletada não traz um mural com a divisão nominal das provas, então as
 * avaliações seguem a sequência didática real das aulas: o primeiro bloco vai da
 * introdução às funções (fev–mar/2023) e o segundo, de combinatória à lógica
 * proposicional (mar–mai/2023). O rótulo AV1/AV2 é o vocabulário corrente do IFAL.
 */
export const LMMD_EXAMS: ExamDefinition[] = [
    {
        id: 'av1',
        label: 'AV1',
        description: 'Conjuntos, relações e funções — a base que o resto da disciplina usa.',
    },
    {
        id: 'av2',
        label: 'AV2',
        description: 'Combinatória, sequências, somatórios e lógica proposicional.',
    },
];

export const LMMD_SECTIONS = [
    { id: 'intro', title: 'Introdução à Matemática Discreta', shortTitle: 'Introdução' },
    { id: 'conjuntos', title: 'Teoria dos Conjuntos', shortTitle: 'Conjuntos', exams: ['av1'] },
    { id: 'relacoes', title: 'Relações Binárias', shortTitle: 'Relações', exams: ['av1'] },
    { id: 'funcoes', title: 'Funções', shortTitle: 'Funções', exams: ['av1'] },
    { id: 'combinatoria', title: 'Análise Combinatória', shortTitle: 'Combinatória', exams: ['av2'] },
    { id: 'sequencias', title: 'Sequências e Recorrências', shortTitle: 'Sequências', exams: ['av2'] },
    { id: 'somatorios', title: 'Somatórios', shortTitle: 'Somatórios', exams: ['av2'] },
    { id: 'proposicoes', title: 'Fundamentos da Lógica — Proposições', shortTitle: 'Proposições', exams: ['av2'] },
    { id: 'conectivos', title: 'Conectivos e Tabelas-Verdade', shortTitle: 'Conectivos', exams: ['av2'] },
    { id: 'equivalencia', title: 'Equivalência Lógica e De Morgan', shortTitle: 'Equivalência', exams: ['av2'] },
    { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
] as const;

/** Ids reais das seções, derivados da lista acima — usado para tipar o mapa id → componente. */
export type LmmdSectionId = (typeof LMMD_SECTIONS)[number]['id'];

export const QUIZ_DATA: QuizQuestionData[] = [
    // ---------------------------------------------------------------- AV1
    {
        id: 'q1',
        exams: ['av1'],
        question: 'O que caracteriza a matemática discreta em oposição à matemática contínua?',
        options: [
            'Estuda estruturas discretas, enumeráveis e finitas, com transições abruptas entre valores',
            'Estuda apenas números inteiros positivos, excluindo o zero e os negativos',
            'Estuda grandezas que variam suavemente, com infinitos valores entre cada par de números',
            'Estuda exclusivamente problemas que podem ser resolvidos por fórmulas algébricas',
        ],
        correctIndex: 0,
        feedbackCorrect: 'Isso. A matemática discreta trata de objetos separados e desconectados — inteiros, declarações lógicas, grafos. O contínuo, cujo cerne são os reais, admite infinitos valores entre dois pontos.',
        feedbackWrong: 'A resposta é a primeira. A matemática discreta estuda estruturas discretas, enumeráveis e finitas. A descrição de variação suave com infinitos valores intermediários é justamente a da matemática contínua.',
    },
    {
        id: 'q2',
        exams: ['av1'],
        question: 'Considerando A = {0, 2, 4, 6} e B = {0, 1, 2, 3, 4, 5}, qual afirmação é correta?',
        options: [
            'A ⊂ B, porque todo elemento de A também pertence a B',
            'A ⊄ B, porque 6 pertence a A mas não pertence a B',
            'A = B, porque ambos contêm apenas números naturais',
            'B ⊂ A, porque B tem mais elementos que A',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Exato. Basta um único elemento de A fora de B para quebrar a inclusão: 6 ∈ A mas 6 ∉ B, logo A ⊄ B.',
        feedbackWrong: 'A correta é a segunda. A inclusão A ⊂ B exige que TODO elemento de A esteja em B — e 6 ∈ A não pertence a B, o que já basta para negar a inclusão.',
    },
    {
        id: 'q3',
        exams: ['av1'],
        question: 'O conjunto A = {2, 3, 5, 7} tem quantos subconjuntos, ou seja, qual a cardinalidade de P(A)?',
        options: ['8', '12', '16', '24'],
        correctIndex: 2,
        feedbackCorrect: 'Correto. O conjunto das partes tem 2ⁿ elementos, com n = n(A). Aqui n = 4, então n(P(A)) = 2⁴ = 16 — contando o vazio e o próprio A.',
        feedbackWrong: 'A resposta é 16. A cardinalidade do conjunto das partes é 2ⁿ, e como A tem 4 elementos, 2⁴ = 16. Lembre que ∅ e o próprio A entram na contagem.',
    },
    {
        id: 'q4',
        exams: ['av1'],
        question: 'Em um grupo de 42 turistas, todos falam inglês ou francês. Sabe-se que 35 falam inglês e 18 falam francês. Quantos falam os dois idiomas?',
        options: ['7', '11', '18', '24'],
        correctIndex: 1,
        feedbackCorrect: 'Isso. Pelo princípio da inclusão-exclusão, n(A∪B) = n(A) + n(B) − n(A∩B). Logo 42 = 35 + 18 − n(A∩B), o que dá n(A∩B) = 53 − 42 = 11.',
        feedbackWrong: 'São 11. Aplique n(A∪B) = n(A) + n(B) − n(A∩B): como todos falam ao menos um idioma, 42 = 35 + 18 − x, portanto x = 11. Somar 35 + 18 = 53 conta duas vezes quem fala os dois.',
    },
    {
        id: 'q5',
        exams: ['av1'],
        question: 'Dados A = {1, 2, 3, 4} e B = {2, 3, 6, 7, 8}, qual é a diferença simétrica A Δ B?',
        options: [
            '{2, 3}',
            '{1, 4}',
            '{1, 4, 6, 7, 8}',
            '{1, 2, 3, 4, 6, 7, 8}',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Certo. A Δ B = (A − B) ∪ (B − A) = {1,4} ∪ {6,7,8} = {1,4,6,7,8} — equivale a tirar a interseção da união.',
        feedbackWrong: 'A resposta é {1, 4, 6, 7, 8}. A diferença simétrica reúne o que está em A mas não em B ({1,4}) com o que está em B mas não em A ({6,7,8}); os elementos comuns 2 e 3 ficam de fora.',
    },
    {
        id: 'q6',
        exams: ['av1'],
        question: 'Se A tem 5 elementos e B tem 4 elementos, quantos pares ordenados tem o produto cartesiano A × B?',
        options: ['9', '20', '25', '45'],
        correctIndex: 1,
        feedbackCorrect: 'Exato. n(A × B) = n(A) · n(B) = 5 · 4 = 20. Cada elemento de A se combina com todos os de B.',
        feedbackWrong: 'São 20 pares. O produto cartesiano combina cada elemento de A com cada um de B, então n(A × B) = n(A) · n(B) = 5 · 4 = 20 — multiplica-se, não se soma.',
    },
    {
        id: 'q7',
        exams: ['av1'],
        question: 'Uma relação R sobre um conjunto A é chamada de relação de equivalência quando é:',
        options: [
            'Reflexiva, simétrica e transitiva',
            'Simétrica e antissimétrica ao mesmo tempo',
            'Reflexiva e antissimétrica',
            'Apenas simétrica, já que a simetria garante as demais propriedades',
        ],
        correctIndex: 0,
        feedbackCorrect: 'Isso mesmo. As três propriedades precisam valer juntas. A relação R = {(x,y) | x = y} é o exemplo canônico de relação de equivalência.',
        feedbackWrong: 'A correta é a primeira: reflexiva, simétrica e transitiva. Só a simetria não basta — no exemplo do professor, R = {(2,8),(8,2),(3,7),(7,3),(4,6),(6,4),(5,5)} é simétrica, mas não é reflexiva nem transitiva.',
    },
    {
        id: 'q8',
        exams: ['av1'],
        question: 'Dados A = {0, 1, 2}, B = {0, 1, 2, 3, 4, 5} e f: A → B definida por f(x) = 2x + 1, qual é a imagem Im(f)?',
        options: ['{0, 1, 2}', '{1, 3, 5}', '{0, 1, 2, 3, 4, 5}', '{1, 2, 3}'],
        correctIndex: 1,
        feedbackCorrect: 'Correto. Aplicando f a cada elemento do domínio: f(0) = 1, f(1) = 3, f(2) = 5. A imagem é {1, 3, 5}, um subconjunto próprio do contradomínio.',
        feedbackWrong: 'A imagem é {1, 3, 5}. Calcule f(0) = 1, f(1) = 3 e f(2) = 5. O conjunto {0,1,2} é o domínio e {0,1,2,3,4,5} é o contradomínio — a imagem é só o que a função efetivamente atinge.',
    },
    {
        id: 'q9',
        exams: ['av1'],
        question: 'Uma função é bijetora quando:',
        options: [
            'Sua imagem é igual ao contradomínio, apenas',
            'Elementos distintos do domínio têm imagens distintas, apenas',
            'É injetora e sobrejetora ao mesmo tempo, e só então sua inversa é sempre função',
            'Cada elemento do domínio está associado a pelo menos um elemento do contradomínio',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Exato. Sobrejetora garante que a imagem cobre o contradomínio; injetora garante imagens distintas para elementos distintos. Juntas, elas fazem a inversa f⁻¹ ser função.',
        feedbackWrong: 'A resposta é a terceira. Imagem igual ao contradomínio sozinha define apenas a sobrejetora; imagens distintas sozinhas definem apenas a injetora. A bijeção exige as duas — e é o que garante que a inversa também seja função.',
    },
    {
        id: 'q10',
        exams: ['av1'],
        question: 'Sendo f(x) = x + 1 e g(x) = 3x, qual é o valor de (g ∘ f)(5)?',
        options: ['16', '18', '15', '20'],
        correctIndex: 1,
        feedbackCorrect: 'Certo. (g ∘ f)(5) = g(f(5)) = g(6) = 18. Aplica-se primeiro a função de dentro.',
        feedbackWrong: 'O valor é 18. Em (g ∘ f)(x) = g(f(x)), aplica-se f primeiro: f(5) = 6, depois g(6) = 18. O resultado 16 corresponde a (f ∘ g)(5) = f(15) — a composição não é comutativa.',
    },
    // ---------------------------------------------------------------- AV2
    {
        id: 'q11',
        exams: ['av2'],
        question: 'Um jogo de computador é iniciado escolhendo opções em três menus: número de jogadores (4 opções), nível de dificuldade (8 opções) e velocidade (6 opções). Com quantas configurações o jogo pode ser jogado?',
        options: ['18', '96', '192', '288'],
        correctIndex: 2,
        feedbackCorrect: 'Isso. As escolhas são feitas em etapas sucessivas, então vale o princípio multiplicativo: 4 · 8 · 6 = 192 configurações.',
        feedbackWrong: 'São 192. Como uma configuração exige uma escolha em cada menu (etapas sucessivas), multiplica-se: 4 · 8 · 6 = 192. Somar daria 18, que seria o caso de escolhas mutuamente excludentes.',
    },
    {
        id: 'q12',
        exams: ['av2'],
        question: 'Qual é a diferença essencial entre um arranjo simples e uma combinação simples?',
        options: [
            'No arranjo a ordem dos elementos importa; na combinação, não',
            'No arranjo pode haver repetição de elementos; na combinação, não',
            'O arranjo usa todos os elementos do conjunto; a combinação usa apenas parte deles',
            'O arranjo se aplica a conjuntos numéricos e a combinação a conjuntos de pessoas',
        ],
        correctIndex: 0,
        feedbackCorrect: 'Exato. O arranjo forma listas ordenadas e a combinação forma subconjuntos. Por isso C(n,p) = A(n,p)/P(p): divide-se pelas permutações que representam a mesma escolha.',
        feedbackWrong: 'A distinção é a ordem. Nos dois casos não há repetição e escolhem-se p elementos entre n; o que muda é que no arranjo (1,2) difere de (2,1), e na combinação são a mesma escolha.',
    },
    {
        id: 'q13',
        exams: ['av2'],
        question: 'De quantos modos diferentes 3 pessoas podem ocupar lugares em uma fila com 8 cadeiras?',
        options: ['24', '56', '336', '512'],
        correctIndex: 2,
        feedbackCorrect: 'Certo. Como a posição de cada pessoa importa, é arranjo: A(8,3) = 8!/(8−3)! = 8·7·6 = 336.',
        feedbackWrong: 'São 336. Trata-se de um arranjo, pois a ordem importa: A(8,3) = 8!/5! = 8·7·6 = 336. O valor 56 seria C(8,3), que ignoraria quem senta em qual cadeira.',
    },
    {
        id: 'q14',
        exams: ['av2'],
        question: 'Quantos anagramas podem ser formados com as letras da palavra ARARA?',
        options: ['10', '20', '60', '120'],
        correctIndex: 0,
        feedbackCorrect: 'Isso. ARARA tem 5 letras, com 3 letras A e 2 letras R, então é permutação com repetição: 5!/(3!·2!) = 120/12 = 10.',
        feedbackWrong: 'São 10 anagramas. Como há letras repetidas (3 A e 2 R), divide-se pelo fatorial de cada multiplicidade: 5!/(3!·2!) = 10. O valor 120 seria P(5) = 5!, válido apenas se as 5 letras fossem distintas.',
    },
    {
        id: 'q15',
        exams: ['av2'],
        question: 'Em um campeonato com 5 times, cada time enfrenta todos os outros uma única vez. Quantos jogos serão realizados?',
        options: ['10', '15', '20', '25'],
        correctIndex: 0,
        feedbackCorrect: 'Correto. Um jogo é um par não ordenado de times — "A contra B" é o mesmo jogo que "B contra A" —, logo é combinação: C(5,2) = 5!/(3!·2!) = 10.',
        feedbackWrong: 'São 10 jogos. Como a ordem dos times não define um jogo diferente, usa-se combinação: C(5,2) = 10. O valor 20 corresponde a A(5,2), que contaria cada confronto duas vezes.',
    },
    {
        id: 'q16',
        exams: ['av2'],
        question: 'Uma sequência é definida pela recorrência S(1) = 2 e S(n) = 2·S(n−1) para n ≥ 2. Quais são os quatro primeiros termos?',
        options: ['2, 4, 6, 8', '2, 4, 8, 16', '2, 3, 5, 9', '1, 2, 4, 8'],
        correctIndex: 1,
        feedbackCorrect: 'Isso. Cada termo dobra o anterior: S(1) = 2, S(2) = 4, S(3) = 8, S(4) = 16 — uma PG de razão 2.',
        feedbackWrong: 'A sequência é 2, 4, 8, 16. A recorrência multiplica o termo anterior por 2, não soma 2 — somar daria 2, 4, 6, 8, que corresponderia a S(n) = S(n−1) + 2.',
    },
    {
        id: 'q17',
        exams: ['av2'],
        question: 'Qual é a expressão que gera o n-ésimo termo da sequência (8, 13, 18, 23, 28, …)?',
        options: ['a(n) = 5n + 3', 'a(n) = 8n − 5', 'a(n) = 5n + 8', 'a(n) = 3n + 5'],
        correctIndex: 0,
        feedbackCorrect: 'Certo. É uma PA de primeiro termo 8 e razão 5: a(n) = a₁ + (n−1)·r = 8 + 5(n−1) = 5n + 3. Conferindo, a(1) = 8 e a(2) = 13.',
        feedbackWrong: 'A expressão é a(n) = 5n + 3. A razão da PA é 5 (a diferença entre termos consecutivos), e ajustando o termo inicial: 8 + 5(n−1) = 5n + 3. Teste sempre com n = 1, que deve devolver 8.',
    },
    {
        id: 'q18',
        exams: ['av2'],
        question: 'Qual é o valor do somatório Σ (i = 1 até 5) de 2i²?',
        options: ['55', '110', '220', '50'],
        correctIndex: 1,
        feedbackCorrect: 'Exato. A constante 2 sai do somatório: 2·(1 + 4 + 9 + 16 + 25) = 2 · 55 = 110.',
        feedbackWrong: 'O valor é 110. Some os quadrados de 1 a 5, que dá 55, e multiplique pela constante 2 — a propriedade Σ k·a(i) = k·Σ a(i) permite pôr o 2 em evidência.',
    },
    {
        id: 'q19',
        exams: ['av2'],
        question: 'Qual das sentenças a seguir é uma proposição lógica?',
        options: [
            'O jogo vai acabar logo?',
            'Dois é um número primo.',
            'Estude mais para a prova.',
            'x² − 4 = 0',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Isso. "Dois é um número primo" é uma sentença declarativa à qual se atribui um valor lógico — no caso, verdadeiro.',
        feedbackWrong: 'A proposição é "Dois é um número primo". Sentenças interrogativas e imperativas não recebem valor lógico, e "x² − 4 = 0" é uma sentença aberta: seu valor depende de x, então não é proposição enquanto a variável estiver livre.',
    },
    {
        id: 'q20',
        exams: ['av2'],
        question: 'Em que única situação a proposição condicional p → q é falsa?',
        options: [
            'Quando p é falsa e q é verdadeira',
            'Quando p e q são ambas falsas',
            'Quando p é verdadeira e q é falsa',
            'Quando p e q são ambas verdadeiras',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. A condicional só falha quando a condição suficiente ocorre mas o resultado necessário não se confirma: antecedente V e consequente F.',
        feedbackWrong: 'A condicional só é falsa com antecedente verdadeiro e consequente falso. Nos demais casos — inclusive quando p é falsa, situação em que a promessa nada garante — ela é verdadeira.',
    },
    {
        id: 'q21',
        exams: ['av2'],
        question: 'Qual é a negação lógica de "João é médico e Pedro é dentista"?',
        options: [
            'João não é médico e Pedro não é dentista',
            'João não é médico ou Pedro não é dentista',
            'Se João é médico, então Pedro não é dentista',
            'João é médico ou Pedro é dentista',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Isso. É a Lei de De Morgan: ~(p ∧ q) = ~p ∨ ~q. Nega-se cada parte e troca-se o "e" pelo "ou".',
        feedbackWrong: 'A negação correta é "João não é médico ou Pedro não é dentista". Pela Lei de De Morgan, ~(p ∧ q) = ~p ∨ ~q: negar as duas partes mantendo o "e" é o erro mais comum, pois isso afirma bem mais do que a negação exige.',
    },
    {
        id: 'q22',
        exams: ['av2'],
        question: 'A proposição bicondicional p ↔ q equivale a qual proposição composta?',
        options: [
            '(p → q) ∧ (q → p)',
            '(p → q) ∨ (q → p)',
            'p ∧ q',
            '~p ∨ q',
        ],
        correctIndex: 0,
        feedbackCorrect: 'Exato. A bicondicional é a conjunção das duas condicionais, uma em cada sentido — por isso só é verdadeira quando p e q têm o mesmo valor lógico.',
        feedbackWrong: 'A equivalência é (p → q) ∧ (q → p). A bicondicional exige que a implicação valha nos DOIS sentidos; a expressão ~p ∨ q equivale apenas à condicional simples p → q.',
    },
    {
        id: 'q23',
        exams: ['av2'],
        question: 'Quantas linhas tem a tabela-verdade de uma fórmula com 3 proposições simples distintas?',
        options: ['6', '8', '9', '16'],
        correctIndex: 1,
        feedbackCorrect: 'Certo. Cada proposição admite dois valores independentes, então são 2³ = 8 combinações possíveis.',
        feedbackWrong: 'São 8 linhas. Com n proposições distintas há 2ⁿ combinações de valores; para n = 3, isso dá 2³ = 8. O número 6 viria de 2·3 e 9 de 3², que não descrevem as combinações.',
    },
    {
        id: 'q24',
        exams: ['av2'],
        question: 'A fórmula (A ∧ B) ∨ C → A ∧ (B ∨ C) é uma tautologia?',
        options: [
            'Sim, resulta em V nas oito linhas da tabela-verdade',
            'Não — com A falsa e C verdadeira o antecedente é V e o consequente é F',
            'Não, porque é uma contradição: resulta em F em todas as linhas',
            'Sim, porque o antecedente e o consequente são logicamente equivalentes',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Isso. Com A = F e C = V, o antecedente (A∧B)∨C é verdadeiro, mas A∧(B∨C) é falso porque A é falsa — e a condicional com antecedente V e consequente F é falsa. Logo, é uma contingência.',
        feedbackWrong: 'Não é tautologia. Basta um contraexemplo: com A = F e C = V, o antecedente vale V e o consequente vale F, tornando a condicional falsa. Como há linhas V e linhas F, a fórmula é uma contingência — não uma contradição.',
    },
    {
        id: 'q25',
        exams: ['av2'],
        question: 'A condicional p → q é logicamente equivalente a qual das proposições abaixo?',
        options: [
            'À sua recíproca, q → p',
            'À sua contrapositiva, ~q → ~p',
            'À conjunção p ∧ ~q',
            'À bicondicional p ↔ q',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. A contrapositiva ~q → ~p tem exatamente a mesma coluna-resultado que p → q — é a base das demonstrações por contraposição.',
        feedbackWrong: 'A equivalente é a contrapositiva ~q → ~p. A recíproca q → p NÃO é equivalente (é o erro clássico), e p ∧ ~q é justamente a NEGAÇÃO da condicional.',
    },
];
