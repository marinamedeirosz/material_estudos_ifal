import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, ConceptGrid, ComparisonTable } from '../../../components/sections';
import {
  codeBubble,
  codeShell,
  codeMerge,
  codeQuick,
} from './snippets';
import { sortConcepts, sortComplexity } from './blocks';

export default function OrdenacaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Algoritmos de Ordenação"
        subtitle="Bubble, Selection, Insertion, Shell, Merge e Quick Sort — análise comparativa"
        colorClass="text-accent2"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Os principais algoritmos</h3>
        <ConceptGrid items={sortConcepts} columns="md:grid-cols-2 lg:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Bubble Sort e Selection Sort</h3>
        <CodeBlock code={codeBubble} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Shell Sort</h3>
        <CodeBlock code={codeShell} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Merge Sort</h3>
        <CodeBlock code={codeMerge} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Quick Sort com partição in-place</h3>
        <CodeBlock code={codeQuick} language="python" />
      </div>

      <HighlightBox title="Mediana de três" accent="var(--color-accent3)">
        <p>
          O quick sort degrada para O(n²) quando o split point cai muito à esquerda ou à direita, gerando divisões
          desiguais. A técnica da <strong>mediana de três</strong> reduz esse risco: pega-se o primeiro, o último e o
          elemento do meio, e usa-se o valor mediano entre eles como pivô.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Análise de complexidade</h3>
        <ComparisonTable rows={sortComplexity} leftLabel="Complexidade de tempo" rightLabel="Espaço e estabilidade" />
      </div>

      <HighlightBox title="Algoritmo estável">
        <p>
          Mantém a ordem relativa de elementos com chaves iguais. Bubble, Insertion e Merge são estáveis. Selection e Quick Sort (implementação padrão) não são.
        </p>
      </HighlightBox>

      <HighlightBox title="Na prática" accent="var(--color-accent5)">
        <p>
          Python usa Timsort (híbrido de Merge Sort + Insertion Sort), O(n log n), estável. Para dados quase ordenados, Insertion Sort é imbatível. Merge Sort garante O(n log n) mas usa O(n) espaço extra.
        </p>
      </HighlightBox>
    </section>
  );
}