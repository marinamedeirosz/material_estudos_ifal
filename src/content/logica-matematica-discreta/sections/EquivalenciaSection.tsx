import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, ComparisonTable } from '../../../components/sections';
import TruthTable from './TruthTable';
import { equivalenceLaws, formulaClassification, equivalenceTraps, deMorganTable, notTautologyTable } from './blocks';

export default function EquivalenciaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Equivalência Lógica e De Morgan"
        subtitle="Duas proposições são equivalentes quando têm a mesma coluna-resultado — e a tabela-verdade é a prova"
        colorClass="text-accent5"
        badge="AV2"
      />

      <HighlightBox title="O método: comparar colunas">
        <p>
          Para dizer se uma proposição é, do ponto de vista lógico, equivalente a outra,{' '}
          <strong>basta comparar suas tabelas-verdade</strong>. Se as colunas-resultado coincidem linha a linha, as
          proposições são logicamente equivalentes. É assim que se demonstra cada uma das leis desta seção — não por
          decoreba, mas por construção.
        </p>
      </HighlightBox>

      <Subsection title="Provando a Lei de De Morgan" accentClass="text-accent">
        <div className="space-y-3">
          <TruthTable {...deMorganTable} />
          <p className="reading-measure text-text-muted text-sm leading-relaxed">
            As duas colunas destacadas são idênticas: F, V, V, V. Logo{' '}
            <strong>~(p ∧ q) ≡ ~p ∨ ~q</strong>. Na prática: para negar "João é médico <em>e</em> Pedro é dentista",
            nega-se a primeira parte, nega-se a segunda e troca-se o "e" pelo "ou" — resultando em{' '}
            <em>"João não é médico OU Pedro não é dentista"</em>.
          </p>
        </div>
      </Subsection>

      <Subsection title="As equivalências que caem em prova" accentClass="text-accent2">
        <PanelList items={equivalenceLaws} columns="" />
      </Subsection>

      <Subsection title="Tautologia, contradição e contingência" accentClass="text-accent3">
        <ConceptGrid items={formulaClassification} columns="md:grid-cols-3" />
      </Subsection>

      <Subsection title="Nem toda condicional bonita é tautologia" accentClass="text-accent4">
        <div className="space-y-3">
          <TruthTable {...notTautologyTable} />
          <p className="reading-measure text-text-muted text-sm leading-relaxed">
            A fórmula (A ∧ B) ∨ C → A ∧ (B ∨ C), pedida na atividade do professor, <strong>não é tautologia</strong>.
            Quando A é falsa e C é verdadeira, o antecedente vale V (porque C sozinha sustenta a disjunção) mas o
            consequente vale F (porque A falsa derruba a conjunção) — e condicional com antecedente V e consequente F é
            falsa. Como a coluna final mistura V e F, trata-se de uma <strong>contingência</strong>.
          </p>
          <p className="reading-measure text-text-muted text-sm leading-relaxed">
            Para efeito de comparação, as outras duas fórmulas da mesma questão <em>são</em> tautologias: A → (B → A) e
            (A → B) → [(A ∨ C) → (B ∨ C)] dão V em todas as linhas.
          </p>
        </div>
      </Subsection>

      <Subsection title="As armadilhas mais comuns" accentClass="text-accent5">
        <ComparisonTable
          rows={equivalenceTraps}
          leftLabel="O que se costuma pensar"
          rightLabel="O que a tabela mostra"
          criterionLabel="Situação"
        />
      </Subsection>

      <HighlightBox title="Recíproca não é contrapositiva" accent="var(--color-accent2)">
        <p>
          De p → q derivam-se duas fórmulas parecidas e com destinos opostos. A <strong>contrapositiva ~q → ~p</strong>{' '}
          inverte a ordem <em>e</em> nega os dois lados — e é equivalente à original. A{' '}
          <strong>recíproca q → p</strong> apenas inverte a ordem — e <em>não</em> é equivalente. Basta testar com p
          falsa e q verdadeira: p → q dá V, enquanto q → p dá F.
        </p>
      </HighlightBox>
    </section>
  );
}
