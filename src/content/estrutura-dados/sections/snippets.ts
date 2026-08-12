// Trechos de código Python usados nas seções de Estrutura de Dados.
// Todos foram verificados executando em Python 3.
// Fonte: material do Prof. Ricardo · ESTD · BSI/IFAL · 2023.1

export const codeRepresentacoes = `\
# ── Representação 1: lista de listas ────────────────
# [raiz, subárvore_esquerda, subárvore_direita]
def BinaryTree(r):
    return [r, [], []]

def insertLeft(root, newBranch):
    t = root.pop(1)                          # tira a subárvore atual
    if len(t) > 1:
        root.insert(1, [newBranch, t, []])   # a antiga desce um nível
    else:
        root.insert(1, [newBranch, [], []])
    return root

r = BinaryTree(3)
insertLeft(r, 4)
insertLeft(r, 5)        # o 4 desce: vira filho esquerdo do 5
print(r)                # [3, [5, [4, [], []], []], []]

# ── Representação 2: nós e referências ──────────────
class ArvoreBinaria:
    def __init__(self, raiz):
        self.key = raiz
        self.leftChild = None
        self.rightChild = None

    def insertLeft(self, novo):
        if self.leftChild is None:
            self.leftChild = ArvoreBinaria(novo)
        else:
            t = ArvoreBinaria(novo)
            t.leftChild = self.leftChild   # o filho antigo desce
            self.leftChild = t

    def getRootVal(self):
        return self.key

    def getLeftChild(self):
        return self.leftChild

    def getRightChild(self):
        return self.rightChild`;

export const codeTravessias = `\
# As três travessias são recursivas e diferem apenas na
# POSIÇÃO em que a raiz é visitada.

def preorder(tree):          # raiz → esq → dir
    if tree:
        print(tree.getRootVal())
        preorder(tree.getLeftChild())
        preorder(tree.getRightChild())

def inorder(tree):           # esq → raiz → dir
    if tree is not None:
        inorder(tree.getLeftChild())
        print(tree.getRootVal())
        inorder(tree.getRightChild())

def postorder(tree):         # esq → dir → raiz
    if tree is not None:
        postorder(tree.getLeftChild())
        postorder(tree.getRightChild())
        print(tree.getRootVal())

# ── Pós-ordem avaliando uma expressão ───────────────
import operator

def postordereval(tree):
    opers = {'+': operator.add, '-': operator.sub,
             '*': operator.mul, '/': operator.truediv}
    if tree is None:
        return None
    esq = postordereval(tree.getLeftChild())
    dir_ = postordereval(tree.getRightChild())
    if esq is not None and dir_ is not None:
        return opers[tree.getRootVal()](esq, dir_)   # nó interno
    return tree.getRootVal()                         # folha`;

export const codeBst = `\
class NoArvore:
    def __init__(self, chave, valor, esq=None, dir=None, pai=None):
        self.chave = chave
        self.payload = valor
        self.esq = esq
        self.dir = dir
        self.pai = pai          # a referência ao pai facilita a remoção

    def eh_folha(self):
        return not (self.esq or self.dir)

    def tem_dois_filhos(self):
        return self.esq and self.dir

class ArvoreBinariaBusca:
    """BST usada como TAD Map: put, get, in, len e del."""

    def __init__(self):
        self.raiz = None
        self.tamanho = 0

    def put(self, chave, valor):
        if self.raiz:
            self._put(chave, valor, self.raiz)
        else:
            self.raiz = NoArvore(chave, valor)
        self.tamanho += 1

    def _put(self, chave, valor, atual):
        if chave < atual.chave:                      # menor → esquerda
            if atual.esq:
                self._put(chave, valor, atual.esq)
            else:
                atual.esq = NoArvore(chave, valor, pai=atual)
        else:                                        # maior → direita
            if atual.dir:
                self._put(chave, valor, atual.dir)
            else:
                atual.dir = NoArvore(chave, valor, pai=atual)

    def _get(self, chave, atual):
        if not atual:
            return None
        if atual.chave == chave:
            return atual
        if chave < atual.chave:
            return self._get(chave, atual.esq)
        return self._get(chave, atual.dir)

    def get(self, chave):
        no = self._get(chave, self.raiz) if self.raiz else None
        return no.payload if no else None

    # Métodos especiais: dão à árvore a sintaxe de dicionário
    def __setitem__(self, chave, valor):
        self.put(chave, valor)

    def __getitem__(self, chave):
        return self.get(chave)

    def __contains__(self, chave):
        return bool(self._get(chave, self.raiz))

    def __len__(self):
        return self.tamanho

arvore = ArvoreBinariaBusca()
for chave in [70, 31, 93, 94, 14, 23, 73]:
    arvore[chave] = f'valor de {chave}'

print(arvore[31])        # valor de 31
print(70 in arvore)      # True
print(len(arvore))       # 7`;

export const codeSucessor = `\
# Caso 3 da remoção: o nó tem DOIS filhos.
# Nenhum dos filhos pode simplesmente subir, então procura-se
# o sucessor — o nó com a próxima maior chave da árvore.

def encontra_min(no):
    """O menor da subárvore é o nó mais à esquerda."""
    atual = no
    while atual.esq:
        atual = atual.esq
    return atual

def encontra_sucessor(no):
    if no.dir:                       # tem filho direito:
        return encontra_min(no.dir)  # menor chave da subárvore direita
    if no.pai:                       # não tem filho direito:
        if no.pai.esq is no:         # se é filho esquerdo, o pai é o sucessor
            return no.pai
        return encontra_sucessor(no.pai)
    return None

# O sucessor tem a garantia de NÃO ter mais de um filho —
# por isso ele pode ser retirado com segurança (spliceOut)
# e colocado no lugar do nó removido.`;

export const codeHeap = `\
class BinHeap:
    """Heap mínimo em uma única lista. A posição 0 é um sentinela,
    de modo que os filhos de i ficam em 2i e 2i+1, e o pai em i//2."""

    def __init__(self):
        self.heapList = [0]
        self.currentSize = 0

    def percUp(self, i):
        while i // 2 > 0:
            if self.heapList[i] < self.heapList[i // 2]:      # menor que o pai
                self.heapList[i], self.heapList[i // 2] = (
                    self.heapList[i // 2], self.heapList[i])  # troca
            i = i // 2

    def insert(self, k):
        self.heapList.append(k)          # mantém a estrutura
        self.currentSize += 1
        self.percUp(self.currentSize)    # restaura a ordem

    def minChild(self, i):
        if i * 2 + 1 > self.currentSize:
            return i * 2                 # só existe filho esquerdo
        if self.heapList[i * 2] < self.heapList[i * 2 + 1]:
            return i * 2
        return i * 2 + 1

    def percDown(self, i):
        while i * 2 <= self.currentSize:
            mc = self.minChild(i)
            if self.heapList[i] > self.heapList[mc]:
                self.heapList[i], self.heapList[mc] = (
                    self.heapList[mc], self.heapList[i])
            i = mc

    def delMin(self):
        menor = self.heapList[1]                          # a raiz é o mínimo
        self.heapList[1] = self.heapList[self.currentSize]  # último vai à raiz
        self.currentSize -= 1
        self.heapList.pop()
        self.percDown(1)
        return menor

    def buildHeap(self, alist):
        i = len(alist) // 2
        self.currentSize = len(alist)
        self.heapList = [0] + alist[:]
        while i > 0:
            self.percDown(i)
            i -= 1

bh = BinHeap()
for k in [5, 7, 3, 11]:
    bh.insert(k)
print(bh.delMin(), bh.delMin())   # 3 5 — sempre o menor primeiro`;

export const codeBubble = `\
# Bubble Sort - O(n²) médio/pior, O(n) melhor com flag
def bubble_sort(lista):
    n = len(lista)
    for i in range(n - 1):
        trocou = False
        for j in range(n - 1 - i):
            if lista[j] > lista[j + 1]:
                lista[j], lista[j + 1] = lista[j + 1], lista[j]
                trocou = True
        if not trocou:       # já ordenada: para cedo → O(n)
            break

# Selection Sort - O(n²) SEMPRE (uma única troca por varredura).
# Versão da aula: procura o MAIOR e o leva para o fim da parte
# ainda não ordenada. Procurar o menor e levá-lo ao início é
# equivalente — muda a direção, não a complexidade.
def selection_sort(lista):
    for posicao_final in range(len(lista) - 1, 0, -1):
        posicao_maior = 0
        for posicao in range(1, posicao_final + 1):
            if lista[posicao] > lista[posicao_maior]:
                posicao_maior = posicao
        lista[posicao_final], lista[posicao_maior] = (
            lista[posicao_maior], lista[posicao_final])`;

export const codeShell = `\
# Shell Sort - generaliza o insertion sort usando um "gap".
# As sublistas NÃO são de elementos contíguos: são intercaladas
# a cada 'gap' posições. O gap vai diminuindo até chegar a 1,
# quando o algoritmo vira um insertion sort tradicional — só que
# sobre uma lista já quase ordenada, logo com poucas trocas.

def insertion_sort_com_gap(lista, inicio, gap):
    for i in range(inicio + gap, len(lista), gap):
        valor_atual = lista[i]
        posicao = i
        while posicao >= gap and lista[posicao - gap] > valor_atual:
            lista[posicao] = lista[posicao - gap]
            posicao = posicao - gap
        lista[posicao] = valor_atual

def shell_sort(lista):
    gap = len(lista) // 2
    while gap > 0:
        for posicao_inicial in range(gap):
            insertion_sort_com_gap(lista, posicao_inicial, gap)
        gap = gap // 2

# Desempenho: fica entre O(n) e O(n²).
# Com incrementos [4, 2, 1]           → O(n²)
# Com incrementos 2^k - 1 (1,3,7,15…) → O(n^(3/2))`;

export const codeMerge = `\
# Merge Sort - O(n log n) SEMPRE - divide e conquista
def merge_sort(lista):
    if len(lista) <= 1:
        return lista
    meio = len(lista) // 2
    esq = merge_sort(lista[:meio])   # divide
    dir = merge_sort(lista[meio:])   # divide
    return merge(esq, dir)           # conquista

def merge(esq, dir):
    resultado = []
    i = j = 0
    while i < len(esq) and j < len(dir):
        if esq[i] <= dir[j]:
            resultado.append(esq[i])
            i += 1
        else:
            resultado.append(dir[j])
            j += 1
    return resultado + esq[i:] + dir[j:]`;

export const codeQuick = `\
# Quick Sort - divide e conquista SEM memória adicional.
# O pivô é o 1º elemento; leftmark e rightmark convergem
# até cruzarem, e a posição de encontro é o split point.

def quick_sort(lista):
    _quick_sort(lista, 0, len(lista) - 1)

def _quick_sort(lista, inicio, fim):
    if inicio < fim:
        split = particiona(lista, inicio, fim)
        _quick_sort(lista, inicio, split - 1)   # metade menor
        _quick_sort(lista, split + 1, fim)      # metade maior

def particiona(lista, inicio, fim):
    pivo = lista[inicio]
    leftmark = inicio + 1
    rightmark = fim

    while True:
        # avança enquanto os valores são menores que o pivô
        while leftmark <= rightmark and lista[leftmark] <= pivo:
            leftmark += 1
        # recua enquanto os valores são maiores que o pivô
        while rightmark >= leftmark and lista[rightmark] >= pivo:
            rightmark -= 1
        if rightmark < leftmark:
            break                                # as marcas cruzaram
        lista[leftmark], lista[rightmark] = lista[rightmark], lista[leftmark]

    # o pivô troca com o split point e fica no lugar definitivo
    lista[inicio], lista[rightmark] = lista[rightmark], lista[inicio]
    return rightmark

nums = [54, 26, 93, 17, 77, 31, 44, 55, 20]
quick_sort(nums)
print(nums)   # [17, 20, 26, 31, 44, 54, 55, 77, 93]`;

