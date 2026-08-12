import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, ComparisonTable } from '../../../components/sections';
import { sequenceConcepts, sequenceNotes, sequenceExamples } from './blocks';

export default function SequenciasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Sequências e Recorrências"
        subtitle="Uma sequência é uma função de domínio ℕ* — e a recorrência é a forma matemática da recursividade"
        colorClass="text-accent"
        badge="AV2"
      />

      <HighlightBox title="Sequência é função, não conjunto">
        <p>
          Formalmente, uma <strong>sequência finita de n termos é toda função de domínio ℕ* = {'{'}1, 2, …, n{'}'}</strong>{' '}
          cujo contradomínio é um conjunto não vazio. É por isso que ela fixa <em>ordem</em> e <em>índices</em>, ao
          contrário do conjunto: (1, 2) difere de (2, 1), e uma sequência pode repetir valores, enquanto um conjunto
          não.
        </p>
      </HighlightBox>

      <Subsection title="Conceitos" accentClass="text-accent2">
        <ConceptGrid items={sequenceConcepts} />
      </Subsection>

      <Subsection title="Detalhes que costumam passar batido" accentClass="text-accent3">
        <PanelList items={sequenceNotes} />
      </Subsection>

      <Subsection title="Os padrões clássicos" accentClass="text-accent4">
        <ComparisonTable
          rows={sequenceExamples}
          leftLabel="Definição"
          rightLabel="Exemplo"
          criterionLabel="Padrão"
        />
      </Subsection>

      <HighlightBox title="Termo geral ou recorrência?" accent="var(--color-accent3)">
        <p>
          As duas descrevem a mesma sequência por caminhos diferentes. O <strong>termo geral</strong> a(n) = 2n − 3
          calcula qualquer termo diretamente: para saber a(100), basta substituir. A{' '}
          <strong>lei de recorrência</strong> S(1) = 2, S(n) = 2·S(n−1) define cada termo a partir do anterior — para
          chegar a S(100), é preciso percorrer todos os anteriores.
        </p>
        <p>
          Essa diferença reaparece em Estrutura de Dados: a recorrência é exatamente a estrutura de uma função
          recursiva, com o termo inicial fazendo o papel de <em>caso base</em> e a regra fazendo o papel da{' '}
          <em>chamada recursiva</em>.
        </p>
      </HighlightBox>

      <HighlightBox title="Como achar o termo geral de uma PA" accent="var(--color-accent5)">
        <p>
          Questão POSCOMP 2010 usada na aula: qual expressão gera o n-ésimo termo de (8, 13, 18, 23, 28, …)? Calcule a
          diferença entre termos consecutivos — 13 − 8 = 5, 18 − 13 = 5 — e conclua que é uma PA de razão 5. Aplicando
          a(n) = a₁ + (n − 1)·r, vem a(n) = 8 + 5(n − 1) = <strong>5n + 3</strong>.
        </p>
        <p>
          Sempre confira com n = 1: 5 · 1 + 3 = 8, que é o primeiro termo. Esquecer o ajuste do (n − 1) e escrever 5n +
          8 é o erro típico — daria 13 para n = 1.
        </p>
      </HighlightBox>
    </section>
  );
}
