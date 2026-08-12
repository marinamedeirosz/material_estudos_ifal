import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, ComparisonTable } from '../../../components/sections';
import { setConcepts, setOperations, setProperties, numericSets } from './blocks';

export default function ConjuntosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Teoria dos Conjuntos"
        subtitle="A linguagem básica de toda a matemática discreta — e a origem das operações de união e interseção que você vai usar em SQL"
        colorClass="text-accent2"
        badge="AV1"
      />

      <HighlightBox title="Pertinência ou inclusão?">
        <p>
          Esta é a confusão que mais derruba nota. O símbolo <strong>∈ relaciona um elemento a um conjunto</strong>{' '}
          (2 ∈ {'{'}0, 2, 4{'}'}), enquanto <strong>⊂ relaciona dois conjuntos</strong> ({'{'}2{'}'} ⊂ {'{'}0, 2, 4{'}'}).
          Repare que {'{'}4{'}'} ∈ {'{'}0, 2, 4, 6{'}'} é <em>falso</em>: o conjunto {'{'}4{'}'} não é elemento, o
          número 4 é. Antes de responder, pergunte-se sempre: dos dois lados do símbolo, o que é elemento e o que é
          conjunto?
        </p>
      </HighlightBox>

      <Subsection title="Conceitos fundamentais" accentClass="text-accent">
        <ConceptGrid items={setConcepts} />
      </Subsection>

      <Subsection title="As operações entre conjuntos" accentClass="text-accent3">
        <PanelList items={setOperations} columns="" />
      </Subsection>

      <Subsection title="Propriedades da união e da interseção" accentClass="text-accent4">
        <ComparisonTable
          rows={setProperties}
          leftLabel="União"
          rightLabel="Interseção"
          criterionLabel="Propriedade"
        />
      </Subsection>

      <HighlightBox title="Princípio da inclusão-exclusão" accent="var(--color-accent3)">
        <p>
          Para contar a união sem contar duas vezes quem está nos dois conjuntos:{' '}
          <strong>n(A ∪ B) = n(A) + n(B) − n(A ∩ B)</strong>. Para três conjuntos, alternam-se os sinais:
          n(A∪B∪C) = n(A) + n(B) + n(C) − n(A∩B) − n(A∩C) − n(B∩C) + n(A∩B∩C).
        </p>
        <p>
          Exemplo da aula: dos 11 jogadores do ABC, 8 têm pelo menos 25 anos e 7 têm no máximo 30. Como todos se
          encaixam em ao menos um grupo, 11 = 8 + 7 − n(A∩B), logo 4 jogadores têm entre 25 e 30 anos. Esse mesmo
          raciocínio resolve as questões de "quantos falam os dois idiomas" da atividade.
        </p>
      </HighlightBox>

      <Subsection title="Conjuntos numéricos" accentClass="text-accent5">
        <PanelList items={numericSets} />
      </Subsection>

      <HighlightBox title="Cadeia de inclusões" accent="var(--color-accent4)">
        <p>
          ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ. Os irracionais 𝕀 ficam fora dessa cadeia: são o complemento de ℚ dentro de ℝ, de modo que
          ℝ = ℚ ∪ 𝕀 e ℚ ∩ 𝕀 = ∅. Um erro comum é afirmar que 𝕀 ⊃ ℚ — os dois conjuntos são disjuntos, nenhum contém o
          outro.
        </p>
      </HighlightBox>
    </section>
  );
}
