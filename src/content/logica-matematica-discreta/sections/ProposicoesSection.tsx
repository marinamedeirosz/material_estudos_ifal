import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, ComparisonTable } from '../../../components/sections';
import { propositionPrinciples, whatIsProposition, simpleVsCompound } from './blocks';

export default function ProposicoesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Fundamentos da Lógica — Proposições"
        subtitle="A lógica clássica é bivalente: toda proposição é verdadeira ou falsa, sem meio-termo"
        colorClass="text-accent3"
        badge="AV2"
      />

      <HighlightBox title="O que é uma proposição">
        <p>
          O conceito mais elementar da lógica. Uma <strong>proposição é uma sentença declarativa</strong> — algo
          declarado por meio de termos, palavras ou símbolos — <strong>cujo conteúdo pode ser considerado verdadeiro ou
          falso</strong>. Ao afirmar "a Terra é maior que a Lua", temos uma proposição cujo valor lógico é verdadeiro.
        </p>
        <p>
          A notação abrevia isso: <strong>VL(p) = V</strong> significa que o valor lógico de p é verdadeiro, e VL(q) = F
          que o de q é falso. Proposições são representadas por letras minúsculas: p, q, r, s.
        </p>
      </HighlightBox>

      <Subsection title="O que é e o que não é proposição" accentClass="text-accent">
        <ComparisonTable
          rows={whatIsProposition}
          leftLabel="Exemplos"
          rightLabel="Veredito"
          criterionLabel="Tipo de sentença"
        />
      </Subsection>

      <Subsection title="Os três princípios do raciocínio lógico" accentClass="text-accent2">
        <ConceptGrid items={propositionPrinciples} columns="md:grid-cols-3" />
      </Subsection>

      <Subsection title="Proposições simples e compostas" accentClass="text-accent4">
        <PanelList items={simpleVsCompound} columns="md:grid-cols-3" />
      </Subsection>

      <HighlightBox title="Por que a lógica é bivalente" accent="var(--color-accent5)">
        <p>
          A lógica clássica se baseia em um <strong>mundo bivalente (binário)</strong> — uma visão deliberadamente
          restrita do mundo real —, em que os conhecimentos são representados por sentenças que só podem assumir dois
          valores-verdade. Nesse contexto, uma demonstração é um meio de descobrir uma verdade pré-existente desse
          mundo.
        </p>
        <p>
          Essa mesma bivalência é a do <code>bool</code> das linguagens de programação: uma condição de <code>if</code>{' '}
          avalia para verdadeiro ou falso, nunca para um terceiro estado. É a ponte direta entre esta seção e a primeira
          estrutura condicional que você escreve em Algoritmos.
        </p>
      </HighlightBox>
    </section>
  );
}
