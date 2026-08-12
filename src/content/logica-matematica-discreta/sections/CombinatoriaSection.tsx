import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, StatStrip, ComparisonTable } from '../../../components/sections';
import { countingPrinciples, combinatoricsFormulas, orderMatters, combinatoricsStats } from './blocks';

export default function CombinatoriaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Análise Combinatória"
        subtitle="Contar sem enumerar — a ferramenta que mais tarde vira análise de algoritmos no pior caso"
        colorClass="text-accent5"
        badge="AV2"
      />

      <HighlightBox title="A pergunta que resolve quase toda questão">
        <p>
          Antes de escolher a fórmula, responda a duas perguntas nesta ordem. <strong>(1) A ordem importa?</strong> Se
          sim, é arranjo ou permutação; se não, é combinação. <strong>(2) Uso todos os elementos ou só parte?</strong>{' '}
          Se todos, é permutação; se parte, é arranjo. Errar a fórmula quase sempre vem de pular essas perguntas.
        </p>
      </HighlightBox>

      <Subsection title="Os dois princípios de contagem" accentClass="text-accent">
        <ConceptGrid items={countingPrinciples} columns="md:grid-cols-3" />
      </Subsection>

      <HighlightBox title="Aditivo ou multiplicativo?" accent="var(--color-accent3)">
        <p>
          O exemplo da aula deixa a diferença nítida. Se as palestras (3) e os seminários (2) ocorrem{' '}
          <strong>no mesmo horário</strong>, Ana escolhe um <em>ou</em> outro: são eventos mutuamente excludentes, e o
          total é 3 + 2 = 5. Se ocorrem <strong>em horários diferentes</strong>, ela escolhe um <em>e</em> outro:
          etapas sucessivas, e o total é 3 · 2 = 6.
        </p>
      </HighlightBox>

      <Subsection title="As quatro fórmulas" accentClass="text-accent2">
        <PanelList items={combinatoricsFormulas} columns="" />
      </Subsection>

      <Subsection title="Arranjo × Combinação" accentClass="text-accent3">
        <ComparisonTable
          rows={orderMatters}
          leftLabel="Arranjo A(n,p)"
          rightLabel="Combinação C(n,p)"
          criterionLabel="Aspecto"
        />
      </Subsection>

      <Subsection title="Três resultados da aula" accentClass="text-accent4">
        <StatStrip items={combinatoricsStats} />
      </Subsection>

      <HighlightBox title="Permutação com repetição, passo a passo" accent="var(--color-accent4)">
        <p>
          Quantos anagramas tem ARARA? A palavra tem 5 letras, mas com repetição: 3 letras A e 2 letras R. Se fossem
          todas distintas, seriam P(5) = 120. Como permutar letras iguais entre si não gera anagrama novo, divide-se
          pelo fatorial de cada multiplicidade: <strong>5! / (3! · 2!) = 120 / 12 = 10</strong>. Conferindo pela
          enumeração da aula, são exatamente 10 anagramas.
        </p>
        <p>
          O mesmo vale para MATEMATICA, que tem 10 letras com 3 A, 2 M e 2 T:{' '}
          <strong>10! / (3! · 2! · 2!) = 151.200</strong> anagramas.
        </p>
      </HighlightBox>

      <HighlightBox title="Triângulo de Pascal e binômio de Newton" accent="var(--color-accent5)">
        <p>
          A combinação também se escreve na notação binomial C(n,p) = (n p). Dispostos em triângulo, esses valores
          formam o <strong>Triângulo de Pascal</strong>, cujas linhas são 1 / 1 1 / 1 2 1 / 1 3 3 1 / 1 4 6 4 1 / 1 5 10
          10 5 1.
        </p>
        <p>
          Cada linha dá os coeficientes do <strong>binômio de Newton</strong>: (x + y)ⁿ = Σ C(n,p) · x^(n−p) · y^p, cujo
          termo de ordem p + 1 é T(p+1) = C(n,p) · x^(n−p) · y^p. É essa fórmula que permite achar o termo independente
          de x sem desenvolver o binômio inteiro: basta impor que o expoente de x seja zero.
        </p>
      </HighlightBox>
    </section>
  );
}
