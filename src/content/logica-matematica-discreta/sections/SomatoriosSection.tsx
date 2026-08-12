import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, ComparisonTable } from '../../../components/sections';
import { sumProperties, sumSpecialCases, sumFiniteInfinite } from './blocks';

export default function SomatoriosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Somatórios"
        subtitle="A notação sigma abrevia somas longas — e é a linguagem em que se conta o número de operações de um algoritmo"
        colorClass="text-accent2"
        badge="AV2"
      />

      <HighlightBox title="Anatomia da notação">
        <p>
          A soma 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 escreve-se como <strong>Σ (i = 1 até 9) i</strong>, que vale 45. A
          letra grega sigma denota o somatório; abaixo dela ficam o <em>índice</em> (i) e o <em>limite inferior</em> (1);
          acima, o <em>limite superior</em> (9).
        </p>
        <p>
          Uma variante mais geral põe um <strong>predicado</strong> no índice: Σ (P(k)) a(k) soma todos os termos para
          os quais P(k) é verdadeiro. Se P(k) significa "k é ímpar" e 1 ≤ k ≤ 10, então Σ k² = 1² + 3² + 5² + 7² + 9².
        </p>
      </HighlightBox>

      <Subsection title="As seis propriedades" accentClass="text-accent3">
        <PanelList items={sumProperties} columns="" />
      </Subsection>

      <Subsection title="Casos especiais e somatório duplo" accentClass="text-accent4">
        <ComparisonTable
          rows={sumSpecialCases}
          leftLabel="Forma"
          rightLabel="Consequência"
          criterionLabel="Caso"
        />
      </Subsection>

      <HighlightBox title="Um cálculo completo" accent="var(--color-accent3)">
        <p>
          Quanto vale Σ (i = 1 até 5) 2i²? Pela propriedade da constante, o 2 sai do somatório: 2 · Σ i². Somando os
          quadrados, 1 + 4 + 9 + 16 + 25 = 55. Logo o resultado é <strong>2 · 55 = 110</strong>.
        </p>
      </HighlightBox>

      <Subsection title="Somas finitas e infinitas" accentClass="text-accent5">
        <ConceptGrid items={sumFiniteInfinite} columns="md:grid-cols-3" />
      </Subsection>

      <HighlightBox title="O erro clássico do somatório duplo" accent="var(--color-accent2)">
        <p>
          Em somatórios aninhados, <strong>cada um precisa da sua própria letra de índice</strong>. Reutilizar a mesma
          letra faz o índice interno "capturar" o externo e produz resultados absurdos — é justamente o erro que o
          professor pede para localizar no exercício em que (Σ aⱼ)(Σ 1/aₖ) acaba "provando" que a expressão vale n².
        </p>
        <p>
          Vale lembrar também que o índice é <em>mudo</em>: Σ (i = 1 até 3) i e Σ (j = 1 até 3) j dão o mesmo 6. Trocar
          a letra é seguro; repeti-la em somatórios aninhados, não.
        </p>
      </HighlightBox>
    </section>
  );
}
