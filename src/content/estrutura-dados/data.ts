import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';

export const ESTRUTURA_DADOS_GUIDE_CONTEXT = `
GUIA COMPLETO DE ESTRUTURA DE DADOS - Resumo:

1. PYTHON BÁSICO: Python é linguagem dinamicamente tipada (os tipos são inferidos em tempo de execução). Tipos primitivos: int, float, bool, str. Entrada de dados via input() sempre retorna string - use int() ou float() para converter. Operadores: ** (potência), // (divisão inteira), % (módulo/resto). Expressões booleanas: and, or, not. Estrutura condicional: if/elif/else com indentação obrigatória. Repetição: for (percorre sequência/range) e while (baseado em condição). range(start, stop, step) gera sequências de inteiros. Funções definidas com def, podem ter return. Palavras reservadas não podem ser usadas como identificadores. print() para saída, input() para entrada. Variáveis não precisam de declaração prévia de tipo.

2. STRINGS E LISTAS: Strings são sequências imutáveis de caracteres, indexadas a partir de 0. Operações: concatenação (+), repetição (*), fatiamento/slice (s[i:j]), comprimento (len()). Métodos: upper(), lower(), strip(), split(). Strings não podem ser modificadas no lugar - toda operação retorna uma nova string. Listas são sequências mutáveis, indexadas a partir de 0. Métodos: append(e) adiciona ao fim, insert(i,e) insere em posição, remove(e) remove primeira ocorrência, pop(i) remove por índice, sort() ordena, reverse() inverte, count(e) conta ocorrências, index(e) busca. Listas podem conter tipos mistos e ser aninhadas. Objetos e referências: "is" verifica identidade (mesmo objeto), "==" verifica igualdade de valor. Aliasing: dois nomes para o mesmo objeto - modificar por um afeta o outro. Clonar: a[:] cria cópia independente. Funções modificadoras alteram a lista original e geralmente retornam None; funções puras retornam nova lista sem alterar a original.

3. RECURSIVIDADE: Uma função é recursiva quando chama a si mesma diretamente ou indiretamente. Dois ingredientes essenciais: (1) caso base - condição de parada sem chamada recursiva; (2) redução ao caso base - cada chamada reduz o problema em direção ao caso base. Exemplo clássico: contagem regressiva(n) → se n==0 retorna, senão imprime n e chama contagem_regressiva(n-1). Soma de 1 a n: soma_ateh(n) = n + soma_ateh(n-1), com caso base soma_ateh(0)=0. A pilha de chamadas (call stack) gerencia frames - cada chamada empilha um frame que é desempilhado ao retornar. Sem caso base adequado → recursão infinita → StackOverflow. Vantagem: código elegante para problemas com subestrutura recursiva (ex.: árvores, divide e conquista).

4. TIPOS ABSTRATOS DE DADOS (TAD): TAD = conjunto de valores + série de operações sobre esses valores, definido de forma matemática independente de implementação. Tipos primitivos (int, float, bool, char) são atômicos, não decomponíveis. Tipos complexos são compostos de partes menores. TAD separa interface (o que pode ser feito) da implementação (como é feito). A implementação especifica estruturas de armazenamento e algoritmos. Objetivos das Estruturas de Dados: teórico - criar modelos matemáticos; prático - criar representações concretas e rotinas eficientes. Hierarquia: TAD → Implementação → Tipo Concreto. Exemplo TAD Data: operações dia(), mes(), ano(), criar(d,m,a), eh_valido(). Armazenamento sequencial: dados contíguos na memória, acessados por índice.

5. LISTAS SEQUENCIAIS: Interface da lista como TAD: adicionar(e), adicionar_em(pos,e), recuperar(pos), remover(pos), pertence(e), tamanho(). Implementação com array (lista Python): acesso por índice O(1). Inserção no final: O(1) amortizado (eventual realocação). Inserção em posição i: O(n) por deslocamento dos elementos. Remoção: O(n). Busca: O(n). Armazenar o tamanho junto evita percorrer a lista para contar. Alocação dinâmica em Python: a list cresce automaticamente quando necessário, dobrando a capacidade (estratégia de crescimento exponencial para amortizar custo).

6. PILHAS (STACK): Princípio LIFO - Last In, First Out (último a entrar, primeiro a sair). Interface: push(e) empilha no topo, pop() desempilha e retorna o topo, top() consulta sem remover, is_empty() verifica se vazia, len()/size() retorna tamanho. Complexidade: todas as operações são O(1) amortizado com implementação por array. Classe PilhaArray usa lista Python internamente. Aplicações práticas: histórico de browser (voltar/avançar), inversão de strings e arquivos, matching de parênteses/colchetes/chaves (is_matched()), conversão de decimal para binário, expressões pós-fixas (polonesa reversa), chamadas de funções no SO (call stack). Algoritmo is_matched(): percorre a expressão; abre colchete → push; fecha colchete → se vazia ou top não corresponde → false.

7. FILAS (QUEUE): Princípio FIFO - First In, First Out (primeiro a entrar, primeiro a sair). Interface: enqueue(e) insere no final, dequeue() remove do início, first() consulta sem remover, is_empty(), len()/size(). Complexidade: O(1) amortizado para todas as operações. Implementação com array circular (FilaArray) evita o O(n) de deslocar elementos: mantém ponteiros ini e fim. Fórmula: ini = (ini + 1) % N (avança de forma circular). Aplicações: sistemas de atendimento, call centers, BFS em grafos, coloração de regiões em imagens (flood fill usando fila).

8. DEQUE (Double-Ended Queue): Fila de dupla entrada - inserção e remoção nas duas extremidades. Interface: add_first(e), add_last(e), delete_first(), delete_last(), first(), last(), is_empty(), len(). Todas as operações são O(1). Python oferece collections.deque com operações adicionais: appendleft() ≡ add_first, popleft() ≡ delete_first, rotate(k) rotaciona k posições, maxlen para limitar tamanho. Internamente usa lista duplamente encadeada. Acesso ao meio O(n). Pode simular tanto pilha quanto fila. Aplicação: verificação de palíndromos, sliding window, histórico bidirecional.

9. LISTAS ENCADEADAS: Nós distribuídos na memória, ligados por referências (ponteiros). Classe Nó: atributos _dados (valor) e _proximo (referência para o próximo nó, ou None). Lista não ordenada (ListaNaoOrdenada): atributo head aponta para o primeiro nó. add(e): cria novo nó, aponta seu _proximo para head, atualiza head para o novo nó → O(1). is_empty(): verifica head == None → O(1). size(): percorre todos os nós contando → O(n). search(e): percorre nós comparando → O(n). remove(e): percorre mantendo referência ao nó anterior para reencadear após remover → O(n). Lista ordenada: insere na posição correta mantendo ordem, percorrendo para encontrar o ponto de inserção → O(n).

10. PESQUISA/BUSCA: Busca sequencial: percorre elemento por elemento até encontrar ou chegar ao fim. O(n) no pior caso. Em lista ordenada, pode parar ao encontrar elemento maior - média de n/2 comparações mas ainda O(n). Busca binária: exige lista ordenada; compara o elemento do meio e descarta metade da lista a cada passo. O(log n). Estratégia dividir e conquistar. Versão iterativa: usa índices low e high. Versão recursiva: passa sublista (atenção: slice é O(k)). Prática: Python bisect usa busca binária.

11. HASHING: Objetivo: busca e inserção em O(1). Função hash: mapeia um item (chave) a uma posição (slot) na tabela. Fator de carga FC = itens/tamanho_tabela (0 ≤ FC ≤ 1). Colisão: dois itens mapeados para o mesmo slot. Função hash perfeita mapeia cada item a um slot único, mas não há como construí-la para uma coleção qualquer; a meta é minimizar colisões, ser fácil de computar e distribuir uniformemente. Funções hash: módulo (item % m), folding method (divide o item em pedaços de tamanhos iguais e soma; ex.: telefone (82)7989.1507 em grupos de 2 dá 82+79+89+15+07 = 272, e 272%11 = 8), mid-square method (eleva ao quadrado e pega dígitos do meio: 44² = 1936, extrai 93, 93%11 = 5). Hash para strings: somar apenas os ord() faz anagramas colidirem ("cat" e "tac" somam 312); ponderar pela posição resolve (99·1+97·2+116·3 = 641). Resolução de colisões: linear probing com rehash(pos) = (pos+1)%tamanho (sofre clustering), quadratic probing (incrementos 1, 4, 9, 16), chaining (cada slot referencia uma coleção de itens). TAD Map: put(key,val), get(key), del key, len(), in; a classe HashTable da aula nasce com _tamanho = 11 e mantém as listas paralelas _slots e _valores. Análise: O(1) inicialmente, O(1 + FC/2) considerando colisões. No miniprojeto de hashing o professor pede redimensionamento quando o FC fica entre 0,7 e 0,8, aumentando a tabela para um primo próximo ao dobro e refazendo o hash de todos os itens.

12. ORDENAÇÃO: Bubble sort: faz varreduras comparando posições adjacentes e trocando quando necessário; após a primeira varredura o maior elemento está no lugar; a soma das comparações é (n²/2)−(n/2), logo O(n²); a versão otimizada (shortBubbleSort) para quando uma varredura não faz trocas, chegando a O(n) na lista já ordenada. Selection sort: melhora o bubble fazendo uma única troca por varredura — procura o extremo (na versão da aula, o maior) e o coloca na posição final; faz o mesmo número de comparações do bubble, logo O(n²) sempre. Insertion sort: insere cada elemento na posição correta da parte já ordenada, deslocando os maiores; O(n²) pior, O(n) melhor (quase ordenada). Shell sort: melhora o insertion quebrando a lista em sublistas intercaladas a cada 'gap' posições, com o gap diminuindo até 1 (quando vira um insertion tradicional sobre lista quase ordenada); fica entre O(n) e O(n²) — com incrementos [4,2,1] é O(n²) e com incrementos 2^k−1 (1,3,7,15,…) é O(n^3/2). Merge sort: divide ao meio recursivamente até listas de 0 ou 1 item e depois intercala as metades ordenadas; O(n log n) sempre; usa O(n) de espaço extra. Quick sort: também divide e conquista, mas sem armazenamento adicional; o pivô é o 1º elemento, leftmark avança até achar valor maior que o pivô e rightmark recua até achar valor menor; trocam-se os itens do lado errado até as marcas cruzarem, e a posição de rightmark é o split point, onde o pivô é colocado; O(n log n) médio e O(n²) quando o split point cai muito à esquerda ou à direita; a técnica da mediana de três (primeiro, último e elemento do meio) reduz esse risco. Python usa Timsort (híbrido merge+insertion) O(n log n).

13. ÁRVORES — CONCEITOS E REPRESENTAÇÕES: Tipo de dado não linear, hierárquico, com raiz (root), galhos (branches) e folhas (leaves); a raiz é representada no topo. Vocabulário: nó (node) é a parte fundamental, tem um nome chamado chave e opcionalmente um conteúdo (payload), também é chamado vértice; aresta (edge) conecta dois nós; raiz é o único nó sem aresta de entrada; caminho (path) é uma lista ordenada de nós conectados por arestas; filhos são os nós com aresta de entrada vinda do mesmo nó; pai é o nó conectado por aresta de saída; irmãos têm o mesmo pai; folha é o nó sem filhos; nível é o número de arestas do caminho da raiz até o nó; altura é o maior nível da árvore. Se cada nó tem no máximo dois filhos, é uma árvore binária. Representação em lista de listas: [raiz, subárvore_esquerda, subárvore_direita]; insertLeft insere uma nova lista na segunda posição e, se já havia conteúdo à esquerda, esse filho desce um nível. Representação com nós e referências: classe com key, leftChild e rightChild, em que os filhos são outras instâncias da própria classe. Travessias recursivas: pré-ordem (raiz→esq→dir), em-ordem (esq→raiz→dir), pós-ordem (esq→dir→raiz). ÁRVORE DE ANÁLISE (PARSE TREE): representa a estrutura de uma expressão matemática parentizada, com operadores nos nós internos e operandos nas folhas. Regras de construção a partir da lista de tokens: '(' adiciona novo nó como filho esquerdo e desce até ele; operador (+,−,*,/) altera o valor do nó atual, adiciona filho direito e desce; número altera o valor do nó atual e retorna ao pai; ')' vai ao pai do nó atual. Como a interface só tem getLeftChild e getRightChild, usa-se uma PILHA para guardar os pais durante a construção. A expressão é avaliada por recursão: se o nó tem os dois filhos, aplica o operador da raiz aos resultados de esquerda e direita; senão devolve o próprio valor (folha). A travessia em-ordem com parênteses recupera a expressão original.

14. ÁRVORE BINÁRIA DE BUSCA (BST) COMO MAP: Implementa Map(), put(key,val), get(key), del, len() e in. Propriedade: cada chave menor que a do pai fica na subárvore esquerda e cada chave maior fica na direita. Classes BinarySearchTree (root, size) e TreeNode (key, payload, leftChild, rightChild, parent), com auxiliares hasLeftChild, isLeftChild, isRoot, isLeaf, hasAnyChildren, hasBothChildren e replaceNodeData. put desce comparando até achar posição livre e cria o TreeNode com referência ao pai; um problema conhecido do algoritmo é que chaves duplicadas não são tratadas — o nó novo nunca seria encontrado numa pesquisa; a saída é substituir o valor antigo. Métodos especiais dão sintaxe de dicionário: __setitem__ chama put, __getitem__ chama get, __contains__ implementa o operador in e __iter__ percorre a árvore em-ordem com yield. REMOÇÃO, três casos: (1) o nó é folha — basta apagar a referência correspondente no pai; (2) o nó tem um filho — promove-se o filho ao lugar do pai, reencadeando as referências dos dois lados, ou usa-se replaceNodeData quando o nó removido é a raiz; (3) o nó tem dois filhos — nenhum filho pode simplesmente subir, então procura-se o sucessor, o nó com a próxima maior chave, que tem garantia de não ter mais de um filho; ele é retirado com spliceOut e assume o lugar do nó removido. Encontrar o sucessor: se o nó tem filho direito, o sucessor é a menor chave da subárvore direita (findMin desce sempre à esquerda); se não tem filho direito e o nó é filho esquerdo do pai, o sucessor é o pai. Complexidade: O(h), sendo h ≈ log n na árvore balanceada e h = n na degenerada.

15. FILA DE PRIORIDADE E BINARY HEAP: A fila de prioridade é uma variação da fila em que o dequeue continua saindo pela frente, mas a ordem interna é dada pela prioridade — alta no início, baixa no fim. Implementada com lista, inserir seria O(n) e ordenar O(n log n); com binary heap, enqueue e dequeue ficam O(log n). Variações: heap mínimo (menor chave sempre na frente) e heap máximo. Propriedade estrutural: árvore balanceada, com o mesmo número de nós à esquerda e à direita exceto no último nível — o que permite representá-la em uma única lista, com o filho esquerdo do nó na posição p em 2p, o filho direito em 2p+1 e o pai do nó n em n//2. Propriedade de ordem: para todo nó x com pai p, a chave de p é menor ou igual à chave de x. Operações: BinaryHeap(), insert(k), findMin(), delMin(), isEmpty(), size(), buildHeap(list). insert anexa a chave ao fim da lista (preservando a estrutura) e percUp compara com o pai em i//2 trocando enquanto for menor. delMin devolve a raiz, move o último item para a raiz e percDown desce trocando com o menor filho, obtido por minChild(i). buildHeap parte da lista inteira e aplica percDown de trás para frente a partir de len(lista)//2, o que é melhor que inserir uma chave por vez (O(n log n)).

16. NOTAÇÃO BIG O (ANÁLISE DE DESEMPENHO): Descreve como o custo de um algoritmo cresce conforme n aumenta — mede quantidade de operações relevantes (comparações, trocas, acessos), não segundos. Melhor, pior e caso médio: na busca sequencial por item presente em lista não ordenada são 1 comparação no melhor caso, n no pior e n/2 em média; para item ausente são n comparações em qualquer caso. Em lista ordenada, o item ausente cai para n/2 em média porque a busca para ao encontrar um valor maior — mas a técnica continua O(n). Constantes são descartadas: (n²/2)−(n/2) vira O(n²). Classes na disciplina: O(1) constante (push, pop, top, enqueue e dequeue na fila circular, add na cabeça da lista encadeada, acesso por índice na lista Python); O(log n) logarítmica (busca binária e BST balanceada — se são necessárias i comparações até restar 1 item, então n/2^i = 1, logo i = log n); O(n) linear (busca sequencial, size, search e remove na lista encadeada, travessia de árvore); O(n log n) log-linear (merge sort sempre, quick sort médio); O(n^3/2) (shell sort com incrementos 2^k−1); O(n²) quadrática (bubble, selection e insertion sort). Este assunto é o único que o professor listou nos três blocos de avaliação: AV1, AV2 e prova final.

MINIPROJETOS APLICADOS DA TURMA:
- Labirinto com pilhas: matriz m×n em que " " é caminho livre e "#" é parede; o rato parte de (1,0) e quer chegar a (m−2, n−1) movendo-se para os lados, acima ou abaixo; a função eh_possivel_sair() devolve True se há saída; marcam-se as casas visitadas e, ao entrar num caminho sem saída, volta-se — a pilha é a melhor estrutura para o retorno.
- Dominó com lista encadeada: cria as peças (dois valores de 0 a 6), embaralha, distribui igualmente entre os jogadores, permite jogar peças cujas extremidades correspondam às já jogadas e determina o vencedor; obrigatório usar implementação própria (ou adaptada da aula) do TAD Lista Encadeada.
- Gerenciador de eventos com HashMap: inserir, remover, buscar por categoria e listar categorias; a chave é a categoria e o valor é a lista de eventos; exige redimensionamento quando o FC fica entre 0,7 e 0,8, para um primo próximo ao dobro do tamanho, com rehashing de todos os itens; não é permitido usar dicionário do Python.

DIVISÃO POR AVALIAÇÕES (declarada pelo professor no mural):
- AV1: Recursividade, Pilhas, Filas, Deques, Análise de desempenho de algoritmos (Notação Big O). Também cobrados na sequência didática: Python básico, strings e listas, TAD e listas sequenciais.
- AV2: Listas encadeadas, Algoritmos de Busca, Algoritmos de Ordenação, Árvores, Análise de desempenho de algoritmos (Notação Big O). Hashing entra nesse bloco na sequência das aulas.
- PROVA FINAL: Recursividade, Pilhas, Filas, Algoritmos de Busca (sequencial e binária), Algoritmos de Ordenação, Árvores, Análise de desempenho de algoritmos (Notação Big O).
`;

export const ESTRUTURA_DADOS_TOPICS: QuizTopicOption[] = [
    {
        value: 'prova1',
        label: 'AV1: Recursividade, Pilhas, Filas, Deques e Big O',
        prompt: 'Conteúdo da AV1 de Estrutura de Dados, conforme os assuntos declarados pelo professor (recursividade, pilhas, filas, deques e análise de desempenho com notação Big O), mais a sequência didática que os precede: Python básico (tipos primitivos, tipagem dinâmica, operadores //, %, **, input/print, if/elif/else, for/while, range, funções), strings (imutabilidade, indexação, slice, métodos upper/lower/strip/split), listas (mutabilidade, append/insert/remove/pop/sort/reverse, aliasing, clone), recursividade (caso base, redução ao caso base, pilha de chamadas, fatorial, inversão de string, Fibonacci, MDC recursivo, palíndromo), Tipos Abstratos de Dados TAD (definição, interface vs implementação, tipos primitivos vs complexos), listas sequenciais (interface, complexidade de operações), pilhas LIFO (push, pop, top, is_empty, len, aplicações: matching de parênteses, inversão, call stack, labirinto), filas FIFO (enqueue, dequeue, first, array circular com (ini+1)%N, coloração de regiões), deque double-ended queue (add_first, add_last, delete_first, delete_last, collections.deque, palíndromo), e notação Big O (melhor/pior/caso médio, O(1), O(log n), O(n), O(n log n), O(n²), descarte de constantes).',
    },
    {
        value: 'prova2',
        label: 'AV2: Listas Encadeadas, Busca, Ordenação, Árvores e Big O',
        prompt: 'Conteúdo da AV2 de Estrutura de Dados: listas encadeadas (classe Nó com dado e próximo, head, add O(1), search/remove/size O(n), lista encadeada ordenada), pesquisa sequencial (O(n); tabelas de melhor, pior e caso médio para item presente e ausente; lista ordenada permite parar ao achar valor maior), busca binária (exige lista ordenada, O(log n) porque n/2^i = 1 implica i = log n, dividir e conquistar, versão iterativa com inicio/fim e versão recursiva cujo slice custa O(k)), hashing (função hash, fator de carga FC, colisão, linear probing com rehash (pos+1)%tamanho, quadratic probing com incrementos 1/4/9/16, chaining, folding method, mid-square, hash de string ponderado por posição para evitar colisão de anagramas, TAD Map com put/get e HashTable com _slots e _valores), ordenação (bubble sort e shortBubbleSort, selection sort com uma troca por varredura, insertion sort, shell sort com gap decrescente, merge sort O(n log n) sempre, quick sort com pivô, leftmark, rightmark, split point e mediana de três), árvores (vocabulário, lista de listas, nós e referências, travessias, parse tree construída com pilha), BST como TAD Map (put, get, __setitem__, __getitem__, __contains__, __iter__, remoção nos três casos e busca do sucessor), binary heap e fila de prioridade (percUp, percDown, minChild, delMin, buildHeap), e notação Big O aplicada a todas essas estruturas.',
    },
    { value: 'python', label: 'Python Básico' },
    { value: 'strings-listas', label: 'Strings e Listas' },
    { value: 'recursividade', label: 'Recursividade' },
    {
        value: 'big-o',
        label: 'Notação Big O (cai nas 3 provas)',
        prompt: 'Análise de desempenho de algoritmos com notação Big O em Estrutura de Dados: o que a notação mede (crescimento do número de operações conforme n aumenta, não tempo em segundos), melhor caso, pior caso e caso médio, descarte de constantes (a soma das comparações do bubble sort é (n²/2)−(n/2), que vira O(n²)), classes O(1) (push, pop, enqueue, dequeue em fila circular, add na cabeça de lista encadeada, acesso por índice), O(log n) (busca binária, BST balanceada — porque n/2^i = 1 implica i = log n), O(n) (busca sequencial, size e search em lista encadeada, travessia de árvore), O(n log n) (merge sort sempre, quick sort no caso médio), O(n^3/2) (shell sort com incrementos 2^k−1) e O(n²) (bubble, selection e insertion sort). Custo por estrutura: tabela hash O(1) sem colisão e O(1+FC/2) com linear probing; BST O(h), com h ≈ log n se balanceada e h = n se degenerada.',
    },
    { value: 'tad', label: 'Tipos Abstratos de Dados' },
    { value: 'listas', label: 'Listas Sequenciais' },
    { value: 'pilhas', label: 'Pilhas (Stack)' },
    { value: 'filas', label: 'Filas (Queue)' },
    { value: 'deque', label: 'Deque' },
    { value: 'listas-encadeadas', label: 'Listas Encadeadas' },
    { value: 'pesquisa', label: 'Pesquisa e Busca' },
    { value: 'hashing', label: 'Hashing e Tabelas Hash' },
    { value: 'ordenacao', label: 'Algoritmos de Ordenação' },
    {
        value: 'arvores',
        label: 'Árvores: conceitos e representações',
        prompt: 'Árvores em Estrutura de Dados: tipo de dado não linear e hierárquico com raiz, galhos e folhas. Vocabulário: nó (tem uma chave e opcionalmente um payload; também chamado vértice), aresta (conecta dois nós), raiz (único nó sem aresta de entrada), caminho (lista ordenada de nós conectados), pai, filho, irmão, subárvore, folha (nó sem filhos), nível (número de arestas da raiz até o nó) e altura (maior nível da árvore). Árvore binária: cada nó tem no máximo dois filhos. Representações: lista de listas ([raiz, subárvore_esquerda, subárvore_direita], com insertLeft empurrando o filho antigo um nível para baixo) e nós e referências (classe com key, leftChild e rightChild). Travessias recursivas: pré-ordem (raiz, esquerda, direita), em-ordem (esquerda, raiz, direita) e pós-ordem (esquerda, direita, raiz). Árvore de análise (parse tree): representa expressões matemáticas parentizadas, com operadores nos nós internos e operandos nas folhas; as regras de construção são "(" cria filho esquerdo e desce, operador grava no nó atual e cria filho direito, número grava e volta ao pai, ")" volta ao pai; usa-se uma pilha para guardar os pais porque a interface não tem ponteiro para o pai. Avaliação da expressão por recursão em pós-ordem.',
    },
    {
        value: 'arvores-busca',
        label: 'Árvores de Busca (BST) e Heap',
        prompt: 'Árvore Binária de Busca e heap em Estrutura de Dados: a BST implementa o TAD Map com Map(), put(key,val), get(key), del, len() e in. Propriedade: cada chave menor que a do pai está na subárvore esquerda e cada chave maior está na direita. TreeNode guarda key, payload, leftChild, rightChild e parent, com auxiliares isLeaf, hasBothChildren, isLeftChild e replaceNodeData. Métodos especiais do Python dão sintaxe de dicionário: __setitem__ chama put, __getitem__ chama get, __contains__ implementa in e __iter__ percorre em-ordem com yield. Remoção tem três casos: (1) nó folha, basta apagar a referência no pai; (2) nó com um filho, promove-se o filho e reencadeia-se pai e filho, usando replaceNodeData se for a raiz; (3) nó com dois filhos, procura-se o sucessor (a próxima maior chave, que tem garantia de não ter mais de um filho), remove-se com spliceOut e coloca-se no lugar. Achar o sucessor: se há filho direito, é a menor chave da subárvore direita (findMin desce sempre à esquerda); se não há e o nó é filho esquerdo, o sucessor é o pai. Complexidade O(h). Fila de prioridade com binary heap: enqueue e dequeue em O(log n); heap mínimo mantém o menor na raiz; propriedade estrutural de árvore balanceada permite guardar em lista única, com filhos de p em 2p e 2p+1 e pai de n em n//2; insert anexa ao fim e percUp sobe trocando com o pai; delMin retira a raiz, move o último item para a raiz e percDown desce trocando com o menor filho (minChild); buildHeap aplica percDown de trás para frente a partir de len(lista)//2.',
    },
];

export const ESTRUTURA_DADOS_SECTIONS = [
    { id: 'intro', title: 'Introdução à Estrutura de Dados', shortTitle: 'Introdução' },
    { id: 'python', title: 'Python Básico', shortTitle: 'Python', exam: 'AV1' },
    { id: 'strings-listas', title: 'Strings e Listas', shortTitle: 'Strings/Listas', exam: 'AV1' },
    { id: 'recursividade', title: 'Recursividade', shortTitle: 'Recursividade', exam: 'AV1' },
    { id: 'big-o', title: 'Análise de Desempenho — Notação Big O', shortTitle: 'Big O', exam: 'AV1' },
    { id: 'tad', title: 'Tipos Abstratos de Dados', shortTitle: 'TAD', exam: 'AV1' },
    { id: 'listas', title: 'Listas Sequenciais', shortTitle: 'Listas', exam: 'AV1' },
    { id: 'pilhas', title: 'Pilhas (Stack)', shortTitle: 'Pilhas', exam: 'AV1' },
    { id: 'filas', title: 'Filas (Queue)', shortTitle: 'Filas', exam: 'AV1' },
    { id: 'deque', title: 'Deque', shortTitle: 'Deque', exam: 'AV1' },
    { id: 'listas-encadeadas', title: 'Listas Encadeadas', shortTitle: 'Enc.', exam: 'AV2' },
    { id: 'pesquisa', title: 'Pesquisa e Busca', shortTitle: 'Pesquisa', exam: 'AV2' },
    { id: 'hashing', title: 'Hashing', shortTitle: 'Hashing', exam: 'AV2' },
    { id: 'ordenacao', title: 'Ordenação', shortTitle: 'Ordenação', exam: 'AV2' },
    { id: 'arvores', title: 'Árvores — Conceitos e Representações', shortTitle: 'Árvores', exam: 'AV2' },
    { id: 'arvores-busca', title: 'Árvores de Busca e Heap', shortTitle: 'BST/Heap', exam: 'AV2' },
    { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
];

const QUIZ_DATA_BASE: QuizQuestionData[] = [
    {
        id: 'q1',
        question: '1. Em Python, o que acontece ao usar o operador // entre dois números?',
        options: [
            'Calcula o resto da divisão',
            'Realiza divisão com resultado float sempre',
            'Realiza divisão inteira, descartando a parte decimal',
            'Calcula a potência entre os dois números',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. O operador // realiza divisão inteira (floor division), descartando a parte decimal.',
        feedbackWrong: 'O operador // realiza divisão inteira. Por exemplo: 7 // 2 = 3. O operador % calcula o resto e ** calcula potência.',
    },
    {
        id: 'q2',
        question: '2. Python é uma linguagem de tipagem:',
        options: [
            'Estática - os tipos são declarados antes de usar a variável',
            'Dinâmica - os tipos são inferidos em tempo de execução',
            'Fraca - qualquer operação entre tipos é permitida automaticamente',
            'Manual - o programador aloca e libera memória explicitamente',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. Python é dinamicamente tipado: o tipo da variável é determinado em tempo de execução.',
        feedbackWrong: 'Python é dinamicamente tipado - não é necessário declarar tipos; eles são inferidos em tempo de execução.',
    },
    {
        id: 'q3',
        question: '3. Qual das afirmações sobre a função input() em Python está correta?',
        options: [
            'Ela retorna automaticamente int se o usuário digitar um número',
            'Ela retorna sempre um valor do tipo string, independente do que for digitado',
            'Ela retorna float quando o usuário digita números decimais',
            'Ela lança exceção se o usuário digitar texto em vez de número',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Exato. input() sempre retorna string - é necessário usar int() ou float() para converter.',
        feedbackWrong: 'input() sempre retorna str. Use int(input()) ou float(input()) para obter outros tipos.',
    },
    {
        id: 'q4',
        question: '4. Strings em Python são:',
        options: [
            'Mutáveis - podem ser modificadas no lugar por índice',
            'Imutáveis - não podem ser alteradas após a criação',
            'Mutáveis somente se declaradas com aspas duplas',
            'Imutáveis apenas quando armazenadas em variáveis',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. Strings são imutáveis em Python. Operações como upper() retornam uma nova string.',
        feedbackWrong: 'Strings são imutáveis. Você não pode fazer s[0] = "X". Qualquer operação retorna uma nova string.',
    },
    {
        id: 'q5',
        question: '5. Qual é a diferença entre aliasing e clonagem de lista em Python?',
        options: [
            'Aliasing cria uma cópia independente; clonar cria um segundo nome para o mesmo objeto',
            'Aliasing atribui um segundo nome ao mesmo objeto; clonar cria uma cópia independente via a[:]',
            'Aliasing e clonagem são a mesma operação, apenas com sintaxe diferente',
            'Clonagem preserva os tipos; aliasing converte todos para string',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. Aliasing = dois nomes para o mesmo objeto. Clonar com a[:] cria uma lista independente.',
        feedbackWrong: 'Aliasing: b = a faz b e a apontarem para o mesmo objeto. Clonar: b = a[:] cria cópia independente.',
    },
    {
        id: 'q6',
        question: '6. Em Python, funções modificadoras de lista:',
        options: [
            'Retornam uma nova lista com as modificações, sem alterar a original',
            'Lançam exceção se a lista for vazia',
            'Alteram a lista original no lugar e geralmente retornam None',
            'São exclusivas de listas ordenadas',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. Funções modificadoras alteram a lista no lugar. Por exemplo, lista.sort() retorna None.',
        feedbackWrong: 'Funções modificadoras (como append, sort) alteram a lista original. Funções puras retornam nova lista sem modificar a original.',
    },
    {
        id: 'q7',
        question: '7. Quais são os dois ingredientes essenciais de uma função recursiva?',
        options: [
            'Laço for e condição while',
            'Caso base (condição de parada) e redução ao caso base',
            'Declaração de variável global e chamada a outro módulo',
            'Retorno obrigatório de lista e uso de range()',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Exato. Toda função recursiva precisa de: (1) caso base e (2) redução progressiva ao caso base.',
        feedbackWrong: 'Os dois ingredientes são: caso base (onde não há chamada recursiva) e a redução do problema em direção ao caso base.',
    },
    {
        id: 'q8',
        question: '8. O que acontece em uma função recursiva sem caso base adequado?',
        options: [
            'A função retorna None automaticamente',
            'O Python converte em iteração automaticamente',
            'Ocorre recursão infinita e estouro de pilha (StackOverflow)',
            'A função executa exatamente uma vez e para',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. Sem caso base, as chamadas se acumulam na pilha até esgotar a memória.',
        feedbackWrong: 'Sem caso base, a função chama a si mesma indefinidamente causando recursão infinita e StackOverflow.',
    },
    {
        id: 'q9',
        question: '9. Um Tipo Abstrato de Dados (TAD) é definido como:',
        options: [
            'Uma classe Python com pelo menos três métodos públicos',
            'Um conjunto de valores e um conjunto de operações, definidos matematicamente independente de implementação',
            'Qualquer tipo de dado que usa alocação dinâmica de memória',
            'Uma estrutura de dados que armazena apenas tipos primitivos',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. TAD define O QUE pode ser feito (interface) independentemente de COMO será implementado.',
        feedbackWrong: 'TAD = conjunto de valores + operações definidos matematicamente, separando interface de implementação.',
    },
    {
        id: 'q10',
        question: '10. Qual é a principal diferença entre tipos primitivos e tipos complexos em Estrutura de Dados?',
        options: [
            'Tipos primitivos são definidos pelo programador; tipos complexos pelo Python',
            'Tipos primitivos são atômicos e não decomponíveis; tipos complexos são compostos de partes menores',
            'Tipos complexos só existem em linguagens orientadas a objeto',
            'Tipos primitivos ocupam mais memória que tipos complexos',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. Tipos primitivos (int, float, bool) são indivisíveis. Tipos complexos são compostos de partes.',
        feedbackWrong: 'Tipos primitivos são atômicos (int, float, bool, char). Tipos complexos são decomponíveis em partes menores.',
    },
    {
        id: 'q11',
        question: '11. O princípio LIFO, que rege as Pilhas, significa:',
        options: [
            'Last Insert, First Output - a última inserção define a primeira saída de forma aleatória',
            'List In, Free Out - a lista é liberada após uso',
            'Last In, First Out - o último elemento inserido é o primeiro a ser removido',
            'Linear Input, First Output - entrada linear e saída pelo início',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. LIFO = Last In, First Out. O topo da pilha é sempre o elemento mais recente.',
        feedbackWrong: 'LIFO = Last In, First Out. O último a entrar é o primeiro a sair, como uma pilha de pratos.',
    },
    {
        id: 'q12',
        question: '12. Na implementação de uma pilha, a operação pop():',
        options: [
            'Consulta o elemento do topo sem removê-lo',
            'Remove e retorna o elemento do topo da pilha',
            'Adiciona um novo elemento no topo da pilha',
            'Verifica se a pilha está vazia',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Exato. pop() remove e retorna o topo. top() apenas consulta sem remover.',
        feedbackWrong: 'pop() remove e retorna o elemento do topo. push(e) empilha, top() consulta sem remover.',
    },
    {
        id: 'q13',
        question: '13. Qual das seguintes NÃO é uma aplicação típica de pilhas?',
        options: [
            'Verificação de parênteses balanceados em expressões',
            'Gerenciamento de chamadas de funções (call stack)',
            'Algoritmo BFS (Busca em Largura) em grafos',
            'Histórico de navegação (botão voltar do browser)',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. BFS usa fila (FIFO), não pilha. DFS é que usa pilha (ou recursão).',
        feedbackWrong: 'BFS usa FILA (FIFO). Pilhas são usadas para: matching de parênteses, call stack, histórico de browser, DFS, conversão para binário.',
    },
    {
        id: 'q14',
        question: '14. O princípio FIFO, que rege as Filas, significa:',
        options: [
            'Fast Input, Fast Output - operações em tempo constante',
            'First In, First Out - o primeiro elemento inserido é o primeiro a ser removido',
            'Fixed Index, First Output - acesso por índice fixo',
            'Flexible Input, Fixed Output - entrada flexível e saída fixa',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. FIFO = First In, First Out. Como uma fila de banco.',
        feedbackWrong: 'FIFO = First In, First Out. O primeiro a entrar é o primeiro a sair, como fila de supermercado.',
    },
    {
        id: 'q15',
        question: '15. Na implementação circular de uma Fila (FilaArray), qual é a fórmula para avançar o ponteiro do início após um dequeue?',
        options: [
            'ini = ini - 1',
            'ini = ini + 1',
            'ini = (ini + 1) % N',
            'ini = (ini * 2) % N',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. A fórmula (ini + 1) % N garante que o ponteiro volte ao início quando chega ao final do array.',
        feedbackWrong: 'ini = (ini + 1) % N. O módulo N faz o ponteiro "dar a volta" circularmente, evitando desperdício de espaço.',
    },
    {
        id: 'q16',
        question: '16. Qual é a complexidade de tempo das operações push, pop e top em uma pilha implementada com array?',
        options: [
            'O(n) para todas as operações',
            'O(log n) para todas as operações',
            'O(1) amortizado para todas as operações',
            'O(1) para push; O(n) para pop e top',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Exato. Todas as operações de pilha são O(1) amortizado com implementação por array (lista Python).',
        feedbackWrong: 'Todas as operações de pilha (push, pop, top, is_empty, len) são O(1) amortizado com implementação por array.',
    },
    {
        id: 'q17',
        question: '17. O Deque (Double-Ended Queue) se diferencia de uma fila comum porque:',
        options: [
            'Apenas permite inserção no início',
            'Permite inserção e remoção nas duas extremidades (início e fim)',
            'Não permite remoção de elementos',
            'Usa o princípio LIFO em vez de FIFO',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. Deque permite add_first, add_last, delete_first e delete_last - todos O(1).',
        feedbackWrong: 'Deque = Double-Ended Queue. Permite inserção e remoção nas duas extremidades (início e fim).',
    },
    {
        id: 'q18',
        question: '18. Em uma lista encadeada, a classe Nó geralmente contém:',
        options: [
            'Apenas o dado armazenado',
            'O dado e um índice numérico de posição',
            'O dado e uma referência para o próximo nó',
            'O dado, o índice e o tamanho da lista',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Exato. A classe Nó (Node) contém _dados e _proximo (referência para o próximo nó, ou None).',
        feedbackWrong: 'A classe Nó contém: o dado armazenado (_dados) e a referência para o próximo nó (_proximo, None se for o último).',
    },
    {
        id: 'q19',
        question: '19. Qual é a complexidade da operação add() em uma lista encadeada não ordenada que insere na cabeça (head)?',
        options: [
            'O(n) - precisa percorrer toda a lista',
            'O(log n) - divide a lista ao meio',
            'O(1) - insere diretamente no início sem percorrer',
            'O(n²) - comparações aninhadas',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. add() é O(1): cria nó, aponta seu _proximo para head, atualiza head - sem percorrer a lista.',
        feedbackWrong: 'add() na cabeça é O(1): cria novo nó, aponta para head, atualiza head. Não precisa percorrer.',
    },
    {
        id: 'q20',
        question: '20. Qual é a complexidade das operações search() e remove() em uma lista encadeada?',
        options: [
            'O(1) - acesso direto por ponteiro',
            'O(n) - é necessário percorrer os nós sequencialmente',
            'O(log n) - usa busca binária interna',
            'O(n²) - percorre a lista duas vezes',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Exato. search() e remove() são O(n) pois precisam percorrer os nós um a um até encontrar o elemento.',
        feedbackWrong: 'search() e remove() em lista encadeada são O(n) - sem índices, é necessário percorrer sequencialmente.',
    },
    {
        id: 'q21',
        question: '21. A busca sequencial em uma lista não ordenada tem complexidade:',
        options: [
            'O(1) no caso médio',
            'O(log n) usando comparação binária',
            'O(n) - no pior caso percorre todos os elementos',
            'O(n log n) - requer ordenação prévia',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. A busca sequencial é O(n): no pior caso, verifica todos os n elementos.',
        feedbackWrong: 'Busca sequencial é O(n). No pior caso (elemento no fim ou ausente), percorre todos os n elementos.',
    },
    {
        id: 'q22',
        question: '22. Qual é o pré-requisito para aplicar a busca binária em uma lista?',
        options: [
            'A lista deve ser encadeada (lista ligada)',
            'A lista deve estar ordenada',
            'A lista deve ter tamanho par',
            'A lista deve conter apenas números inteiros',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. A busca binária exige que a lista esteja previamente ordenada.',
        feedbackWrong: 'A busca binária exige lista ordenada para poder descartar metade dos elementos a cada comparação.',
    },
    {
        id: 'q23',
        question: '23. A complexidade da busca binária é O(log n) porque:',
        options: [
            'Ela usa uma estrutura de árvore internamente',
            'Ela percorre a lista de trás para frente',
            'A cada comparação, metade dos elementos restantes é descartada',
            'Ela usa hashing para localizar o elemento',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Exato. A cada passo, a região de busca é dividida ao meio, resultando em O(log n) comparações.',
        feedbackWrong: 'A cada comparação, a busca binária descarta metade dos elementos restantes. Com n=1.000.000, precisamos de no máximo ~20 comparações.',
    },
    {
        id: 'q24',
        question: '24. Em uma tabela hash, o fator de carga (FC) é definido como:',
        options: [
            'O número total de slots da tabela',
            'A quantidade de colisões ocorridas',
            'A razão entre o número de itens armazenados e o tamanho da tabela',
            'O número de rehashes realizados',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. FC = itens / tamanho_tabela. Quanto maior o FC, maior a probabilidade de colisão.',
        feedbackWrong: 'FC = número de itens / tamanho da tabela. Quando FC > 0.5, recomenda-se um rehash.',
    },
    {
        id: 'q25',
        question: '25. O que é uma colisão em uma tabela hash?',
        options: [
            'Quando dois slots têm o mesmo endereço de memória',
            'Quando dois itens diferentes são mapeados para o mesmo slot pela função hash',
            'Quando a tabela está completamente cheia',
            'Quando a função hash retorna um valor negativo',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. Colisão ocorre quando dois itens distintos produzem o mesmo índice pela função hash.',
        feedbackWrong: 'Colisão: dois ou mais itens mapeados para o mesmo slot. Métodos de resolução: linear probing, quadratic probing, chaining.',
    },
    {
        id: 'q26',
        question: '26. No método de resolução de colisão por linear probing:',
        options: [
            'Cada slot contém uma lista encadeada com os itens colididos',
            'A tabela é dobrada de tamanho imediatamente',
            'Tenta-se o próximo slot sequencialmente até encontrar um livre',
            'O item é descartado se houver colisão',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. Linear probing tenta (h+1)%m, (h+2)%m, ... até encontrar slot vazio. Sofre de agrupamento (clustering).',
        feedbackWrong: 'Linear probing: ao colidir no slot h, tenta (h+1)%m, (h+2)%m... Problema: clustering (agrupamento de elementos).',
    },
    {
        id: 'q27',
        question: '27. Qual é a complexidade média das operações put() e get() em uma tabela hash com boa função hash e baixo fator de carga?',
        options: [
            'O(n)',
            'O(log n)',
            'O(n log n)',
            'O(1)',
        ],
        correctIndex: 3,
        feedbackCorrect: 'Exato. Hashing atinge O(1) em média para put e get - o principal objetivo dessa estrutura.',
        feedbackWrong: 'O objetivo do hashing é O(1) para busca e inserção. Com colisões, é O(1 + FC/2) em média.',
    },
    {
        id: 'q28',
        question: '28. Qual algoritmo de ordenação tem complexidade O(n²) no pior, médio E melhor caso?',
        options: [
            'Bubble sort com otimização de flag',
            'Insertion sort',
            'Merge sort',
            'Selection sort',
        ],
        correctIndex: 3,
        feedbackCorrect: 'Correto. Selection sort sempre faz n(n-1)/2 comparações, independente da ordem inicial dos dados.',
        feedbackWrong: 'Selection sort é O(n²) em todos os casos pois sempre busca o mínimo no restante da lista. Bubble e insertion sort têm O(n) no melhor caso.',
    },
    {
        id: 'q29',
        question: '29. O Merge Sort tem vantagem sobre o Bubble Sort principalmente porque:',
        options: [
            'Usa menos memória que o Bubble Sort',
            'É O(n log n) no pior caso, enquanto Bubble Sort é O(n²)',
            'Não precisa de comparações entre elementos',
            'Funciona apenas com listas encadeadas',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Exato. Merge sort é O(n log n) sempre, enquanto bubble sort é O(n²) no pior e médio caso.',
        feedbackWrong: 'Merge sort é O(n log n) em todos os casos. Bubble sort é O(n²) no pior/médio caso e O(n) somente se otimizado e a lista já estiver ordenada.',
    },
    {
        id: 'q30',
        question: '30. Em uma Árvore Binária de Busca (BST), qual é a propriedade fundamental?',
        options: [
            'Cada nó tem exatamente dois filhos',
            'Para cada nó, todos os elementos da subárvore esquerda são menores e da direita são maiores',
            'A árvore deve estar sempre completamente balanceada',
            'O nó raiz é sempre o maior elemento da árvore',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. A propriedade BST: subárvore esquerda < nó < subárvore direita, garantindo busca eficiente.',
        feedbackWrong: 'BST: para cada nó N, todos os elementos à esquerda são menores que N e todos à direita são maiores.',
    },
    {
        id: 'q31',
        question: '31. Na travessia em-ordem (in-order) de uma BST, os elementos são visitados em qual ordem?',
        options: [
            'Da raiz, depois subárvore esquerda, depois subárvore direita',
            'Da subárvore esquerda, depois raiz, depois subárvore direita - resultando em ordem crescente',
            'Da subárvore esquerda, depois subárvore direita, depois raiz',
            'Nível por nível, da raiz para as folhas',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Exato. Em-ordem (esq → raiz → dir) em uma BST visita os elementos em ordem crescente.',
        feedbackWrong: 'Em-ordem: esq → raiz → dir. Em uma BST, isso visita os elementos em ordem crescente.',
    },
    {
        id: 'q32',
        question: '32. Qual é a complexidade de busca em uma BST?',
        options: [
            'Sempre O(log n)',
            'Sempre O(n)',
            'O(h), onde h é a altura - O(log n) para BST balanceada e O(n) para degenerada',
            'O(1) - acesso direto pelo valor',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. O(h) onde h é a altura. Em BST balanceada h ≈ log n. Em BST degenerada (tipo lista) h = n.',
        feedbackWrong: 'Busca em BST é O(h). Se balanceada: O(log n). Se degenerada (todos os elementos em um lado): O(n).',
    },
    {
        id: 'q33',
        question: '33. Em uma pilha inicialmente vazia foram executadas 25 operações push, 12 operações top e 10 operações pop, sendo que 3 dos pops lançaram a exceção "Pilha Vazia". Qual é o tamanho atual da pilha?',
        options: ['15', '18', '13', '25'],
        correctIndex: 1,
        feedbackCorrect: 'Correto. O top apenas consulta e não altera o tamanho. Dos 10 pops, 3 falharam e não removeram nada, então saíram 7 elementos: 25 − 7 = 18.',
        feedbackWrong: 'São 18. As 12 operações top não removem nada, e os 3 pops que lançaram exceção também não. Logo: 25 − (10 − 3) = 18.',
    },
    {
        id: 'q34',
        question: '34. Por que a análise da busca binária recursiva escrita com fatiamento (lista[:meio]) não é realmente O(log n)?',
        options: [
            'Porque a recursão consome memória na pilha de chamadas',
            'Porque o slice copia os elementos, custando O(k) em vez de O(1) por chamada',
            'Porque a versão recursiva compara duas vezes o elemento do meio',
            'Porque a lista precisa ser reordenada a cada chamada recursiva',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Exato. A análise supõe que o slice é O(1), mas ele copia os elementos e custa O(k). A versão iterativa com índices inicio e fim evita esse custo.',
        feedbackWrong: 'O problema é o operador de fatiamento: lista[:meio] não é O(1), e sim O(k), porque copia elementos. Use a versão iterativa com índices.',
    },
    {
        id: 'q35',
        question: '35. Na função hash para strings que apenas soma os ord() dos caracteres, qual problema aparece?',
        options: [
            'Strings com acento geram erro de execução',
            'Strings muito longas ultrapassam o tamanho da tabela',
            'Anagramas produzem sempre o mesmo hash e colidem',
            'Strings vazias produzem hash negativo',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. "cat" e "tac" somam 312 e caem no mesmo slot. A correção é ponderar cada caractere pela sua posição: 99·1 + 97·2 + 116·3 = 641.',
        feedbackWrong: 'Anagramas colidem: "cat" e "tac" têm a mesma soma de ord(). Ponderar cada caractere pela posição resolve o problema.',
    },
    {
        id: 'q36',
        question: '36. No quick sort estudado em aula, o que é o split point?',
        options: [
            'O elemento do meio da lista, escolhido como pivô',
            'A posição onde leftmark e rightmark se cruzam, que é o lugar definitivo do pivô',
            'O ponto em que a lista é dividida exatamente ao meio',
            'A quantidade de trocas feitas em cada particionamento',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. Quando rightmark fica menor que leftmark, as marcas cruzaram: essa posição é o split point, onde o pivô é colocado e a partir da qual a lista é dividida.',
        feedbackWrong: 'O split point é a posição de encontro de leftmark e rightmark. O pivô é trocado para lá e passa a ocupar seu lugar definitivo na lista ordenada.',
    },
    {
        id: 'q37',
        question: '37. Qual algoritmo de ordenação tem garantia de O(n log n) mesmo no pior caso?',
        options: ['Shell Sort', 'Quick Sort', 'Merge Sort', 'Insertion Sort'],
        correctIndex: 2,
        feedbackCorrect: 'Correto. O merge sort divide sempre ao meio, então é O(n log n) em qualquer entrada. O preço é O(n) de espaço extra.',
        feedbackWrong: 'É o merge sort. O quick sort cai para O(n²) quando a divisão é desigual, o shell sort depende dos incrementos e o insertion sort é O(n²) no pior caso.',
    },
    {
        id: 'q38',
        question: '38. Ao construir a árvore de análise de uma expressão como (3+(4*5)), por que é necessária uma pilha?',
        options: [
            'Para armazenar os operadores até o fim da leitura dos tokens',
            'Para guardar os nós pais, já que a interface da árvore só permite descer aos filhos',
            'Para inverter a expressão antes de montar a árvore',
            'Para verificar se os parênteses da expressão estão balanceados',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Exato. A interface oferece getLeftChild e getRightChild, mas não referência ao pai. Empilha-se o nó atual antes de descer e desempilha-se ao encontrar ")".',
        feedbackWrong: 'A pilha guarda os nós pais. Como a árvore só permite descer (getLeftChild/getRightChild), é ela que permite voltar ao pai quando o token é ")".',
    },
    {
        id: 'q39',
        question: '39. Em um binary heap mínimo representado por uma única lista, onde está o filho esquerdo do nó que ocupa a posição p?',
        options: ['Na posição p + 1', 'Na posição 2p', 'Na posição p // 2', 'Na posição 2p + 1'],
        correctIndex: 1,
        feedbackCorrect: 'Correto. O filho esquerdo fica em 2p, o direito em 2p+1 e o pai do nó n em n//2. É essa aritmética que dispensa nós e referências.',
        feedbackWrong: 'O filho esquerdo fica em 2p. O filho direito fica em 2p+1 e o pai do nó n em n//2.',
    },
    {
        id: 'q40',
        question: '40. Na remoção de um nó com DOIS filhos em uma BST, o que é feito?',
        options: [
            'Promove-se o filho esquerdo ao lugar do nó removido',
            'A subárvore inteira é reconstruída do zero',
            'Busca-se o sucessor (próxima maior chave), que é retirado e colocado no lugar do nó removido',
            'O nó é apenas marcado como removido e permanece na árvore',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. Nenhum dos filhos pode simplesmente subir. O sucessor tem garantia de não ter mais de um filho, por isso pode ser retirado com segurança e assumir o lugar.',
        feedbackWrong: 'Procura-se o sucessor: o nó com a próxima maior chave. Ele nunca tem mais de um filho, é retirado (spliceOut) e colocado na posição do nó removido.',
    },
    {
        id: 'q41',
        question: '41. Ao inserir uma nova chave em um binary heap, qual é a sequência correta de passos?',
        options: [
            'Insere na raiz e desce trocando com o menor filho (percDown)',
            'Anexa ao fim da lista e sobe trocando com o pai enquanto for menor (percUp)',
            'Percorre a lista até achar a posição ordenada e desloca os demais',
            'Reconstrói o heap inteiro com buildHeap a cada inserção',
        ],
        correctIndex: 1,
        feedbackCorrect: 'Correto. Anexar ao fim preserva a propriedade estrutural; o percUp então restaura a propriedade de ordem comparando com o pai em i//2. Custa O(log n).',
        feedbackWrong: 'Primeiro anexa-se ao fim da lista (preserva a estrutura) e depois o percUp sobe o item trocando com o pai enquanto ele for menor. O percDown é usado no delMin.',
    },
    {
        id: 'q42',
        question: '42. Por que a notação Big O descarta os termos de menor grau e as constantes?',
        options: [
            'Porque eles não afetam o resultado do algoritmo',
            'Porque só interessa o consumo de memória, não o de tempo',
            'Porque, à medida que n cresce, o termo dominante determina o comportamento do custo',
            'Porque os compiladores modernos eliminam essas operações',
        ],
        correctIndex: 2,
        feedbackCorrect: 'Correto. A soma das comparações do bubble sort é (n²/2) − (n/2), mas para n grande o n² domina — por isso escreve-se apenas O(n²).',
        feedbackWrong: 'Big O descreve o crescimento assintótico: quando n aumenta, o termo de maior grau domina. (n²/2) − (n/2) é simplesmente O(n²).',
    },
    {
        id: 'q43',
        question: '43. Buscando um item que NÃO está presente em uma lista ordenada com busca sequencial, qual é o número médio de comparações?',
        options: ['n comparações, sempre', 'n/2 comparações', '1 comparação', 'log n comparações'],
        correctIndex: 1,
        feedbackCorrect: 'Correto. Em lista ordenada, a busca para assim que encontra um valor maior que o procurado — média n/2. Em lista não ordenada seriam n comparações. A técnica continua O(n).',
        feedbackWrong: 'São n/2 em média: a lista ordenada permite parar ao encontrar um valor maior que o procurado. Em lista não ordenada, item ausente exige sempre n comparações.',
    },
];

/**
 * Questões da AV1. As demais pertencem à AV2.
 * O mapeamento é explícito por id — e não por posição — para que inserir uma
 * questão no meio da lista não reclassifique as seguintes por acidente.
 */
const AV1_QUESTION_IDS = new Set([
    'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10',
    'q11', 'q12', 'q13', 'q14', 'q15', 'q16', 'q17',
    'q33', // pilha: contagem de push/top/pop
    'q42', // Big O: descarte de constantes (assunto das três avaliações)
]);

export const QUIZ_DATA: QuizQuestionData[] = QUIZ_DATA_BASE.map(question => ({
    ...question,
    exam: AV1_QUESTION_IDS.has(question.id) ? ('prova1' as const) : ('prova2' as const),
}));
