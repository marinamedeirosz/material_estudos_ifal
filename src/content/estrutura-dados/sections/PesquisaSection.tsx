import CodeBlock from '../../../components/ui/CodeBlock';
import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, ConceptGrid, ComparisonTable } from '../../../components/sections';
import { searchConcepts, binarySearchSteps, searchComparison, sequentialSearchCases } from './blocks';

export default function PesquisaSection() {
  const code = `\
# ── Busca Sequencial - O(n) ──────────────────────
def busca_sequencial(lista, alvo):
    for i in range(len(lista)):
        if lista[i] == alvo:
            return i       # encontrou na posição i
    return -1              # não encontrou

# ── Busca Binária - O(log n) ─────────────────────
# PRÉ-REQUISITO: lista deve estar ORDENADA!
def busca_binaria(lista, alvo):
    low = 0
    high = len(lista) - 1

    while low <= high:
        mid = (low + high) // 2      # meio do intervalo

        if lista[mid] == alvo:
            return mid               # encontrou!
        elif lista[mid] < alvo:
            low = mid + 1            # descarta metade esquerda
        else:
            high = mid - 1           # descarta metade direita

    return -1                        # não encontrou

nums = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
print(busca_sequencial(nums, 23))   # 5
print(busca_binaria(nums, 23))      # 5
print(busca_binaria(nums, 10))      # -1

# Para n=1.000.000: sequencial pode fazer 1.000.000 comparações
# Binária faz no máximo log2(1.000.000) ≈ 20 comparações!`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Pesquisa e Busca"
        subtitle="Busca sequencial O(n) e busca binária O(log n) - dividir e conquistar"
        colorClass="text-accent5"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Conceitos fundamentais</h3>
        <ConceptGrid items={searchConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Passo a passo da busca binária</h3>
        <FlowDiagram items={binarySearchSteps} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Implementação dos dois algoritmos</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Busca Sequencial vs Busca Binária</h3>
        <ComparisonTable rows={searchComparison} leftLabel="Sequencial" rightLabel="Binária" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Busca sequencial em número de comparações</h3>
        <ComparisonTable
          rows={sequentialSearchCases}
          leftLabel="Melhor e pior caso"
          rightLabel="Caso médio"
        />
      </div>

      <HighlightBox title="O que a lista ordenada muda de fato" accent="var(--color-accent3)">
        <p>
          Em lista não ordenada, procurar um item <strong>ausente</strong> obriga a percorrer os n elementos, sempre. Em
          lista ordenada, a busca pode parar assim que encontra um valor maior que o procurado — o caso médio de item
          ausente cai de n para n/2. Mesmo assim, a técnica continua sendo O(n): a diferença é constante, não de classe.
        </p>
      </HighlightBox>

      <HighlightBox title="Por que O(log n)?">
        <p>
          A busca binária divide o espaço de busca ao meio a cada passo. Se são necessárias i comparações até restar um
          único item, então n/2ⁱ = 1, ou seja, 2ⁱ = n e i = log n. Para n = 1.000.000, são no máximo cerca de 20
          comparações.
        </p>
      </HighlightBox>

      <HighlightBox title="Cuidado com a versão recursiva" accent="var(--color-accent2)">
        <p>
          A análise acima supõe que o slice <code>lista[:meio]</code> custa O(1) — mas ele custa O(k), porque copia os
          elementos. A versão iterativa com os índices <code>inicio</code> e <code>fim</code> não tem esse problema.
        </p>
      </HighlightBox>
    </section>
  );
}