import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, ConceptGrid, PanelList, StatStrip, ComparisonTable } from '../../../components/sections';
import { bigOConcepts, bigOClasses, bigOByStructure, bigOSortSummary } from './blocks';

export default function BigOSection() {
  const code = `\
# ── O(1): o custo não depende do tamanho da entrada ──
def topo(pilha):
    return pilha[-1]          # 1 acesso, sempre

# ── O(n): percorre a entrada uma vez ─────────────────
def busca_sequencial(lista, alvo):
    for item in lista:        # até n comparações
        if item == alvo:
            return True
    return False

# ── O(log n): descarta metade a cada passo ───────────
def busca_binaria(lista, alvo):   # lista ORDENADA
    inicio, fim = 0, len(lista) - 1
    while inicio <= fim:
        meio = (inicio + fim) // 2
        if lista[meio] == alvo:
            return True
        elif alvo < lista[meio]:
            fim = meio - 1        # descarta metade
        else:
            inicio = meio + 1     # descarta metade
    return False

# ── O(n²): laço dentro de laço ───────────────────────
def tem_duplicata(lista):
    for i in range(len(lista)):
        for j in range(i + 1, len(lista)):   # n * n / 2
            if lista[i] == lista[j]:
                return True
    return False`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Análise de Desempenho — Notação Big O"
        subtitle="O critério para comparar algoritmos e escolher a estrutura certa"
        colorClass="text-accent3"
        badge="AV1 · AV2 · Final"
      />

      <HighlightBox title="Por que este assunto tem seção própria">
        <p>
          A notação Big O é o único conteúdo que o professor listou nos <strong>três</strong> blocos de avaliação:
          substitutiva da AV1, substitutiva da AV2 e prova final. Ela não é um tópico isolado — é a linguagem usada
          para justificar cada escolha de estrutura no resto da disciplina.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Como ler a notação</h3>
        <ConceptGrid items={bigOConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">As classes que aparecem na disciplina</h3>
        <PanelList items={bigOClasses} columns="" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Uma classe, um exemplo em código</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Custo por estrutura estudada</h3>
        <ComparisonTable rows={bigOByStructure} leftLabel="Operações baratas" rightLabel="Operações caras / condições" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Ordenação em três faixas</h3>
        <StatStrip items={bigOSortSummary} />
      </div>

      <HighlightBox title="De onde vêm esses números" accent="var(--color-accent5)">
        <p>
          Cada complexidade acima foi contada nas aulas a partir do número de comparações. No bubble sort, a soma das
          varreduras dá (n²/2) − (n/2), que vira O(n²). Na busca binária, se são necessárias i comparações até sobrar
          um item, então n/2ⁱ = 1, logo i = log n. Material do Prof. Ricardo · ESTD · BSI/IFAL · 2023.1.
        </p>
      </HighlightBox>
    </section>
  );
}
