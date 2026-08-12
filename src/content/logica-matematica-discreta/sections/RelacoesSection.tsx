import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid } from '../../../components/sections';
import { relationProperties } from './blocks';

export default function RelacoesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Relações Binárias"
        subtitle="Um subconjunto do produto cartesiano — e o conceito que dá nome ao modelo relacional de bancos de dados"
        colorClass="text-accent3"
        badge="AV1"
      />

      <HighlightBox title="Definição">
        <p>
          Dados dois conjuntos A e B, uma <strong>relação binária R é um subconjunto de A × B</strong>. Os pares
          ordenados de R associam elementos x ∈ A a elementos y ∈ B, e escreve-se xRy ou simplesmente R ⊂ A × B.
        </p>
        <p>
          Exemplo da aula: com A = {'{'}1, 3, 5, 7{'}'}, B = {'{'}3, 5, 7, 9, 11{'}'} e R = {'{'}(x, y) ∈ A × B | y = 2x
          − 3{'}'}, testa-se cada x e mantém-se apenas os pares cujo y caiu dentro de B — o que dá R = {'{'}(3, 3), (5,
          7), (7, 11){'}'}. Repare que x = 1 ficaria com y = −1, que não pertence a B, então esse par não entra.
        </p>
      </HighlightBox>

      <HighlightBox title="Relação inversa" accent="var(--color-accent4)">
        <p>
          A inversa R⁻¹ = {'{'}(y, x) | (x, y) ∈ R{'}'} simplesmente troca a ordem de cada par. Se R = {'{'}(1, 9), (2,
          8), (3, 7), (4, 6), (5, 5){'}'}, então R⁻¹ = {'{'}(9, 1), (8, 2), (7, 3), (6, 4), (5, 5){'}'}. O par (5, 5)
          permanece igual porque seus dois componentes coincidem.
        </p>
      </HighlightBox>

      <Subsection title="As propriedades de uma relação R ⊂ A × A" accentClass="text-accent2">
        <ConceptGrid items={relationProperties} />
      </Subsection>

      <HighlightBox title="Testando na prática: o exemplo da aula" accent="var(--color-accent5)">
        <p>
          Considere R = {'{'}(2, 8), (3, 7), (4, 6), (5, 5), (6, 4), (7, 3), (8, 2){'}'}. Analisando propriedade a
          propriedade:
        </p>
        <p>
          <strong>Não é reflexiva</strong>, pois faltam (2,2), (3,3), (4,4), (6,6), (7,7) e (8,8).{' '}
          <strong>Não é antirreflexiva</strong>, pois (5,5) ∈ R — repare que uma relação pode não ser nem reflexiva nem
          antirreflexiva. <strong>É simétrica</strong>, pois cada par tem seu invertido presente.{' '}
          <strong>Não é antissimétrica</strong>, pois (2,8) e (8,2) estão em R com 2 ≠ 8.{' '}
          <strong>Não é transitiva</strong>, pois (2,8) e (8,2) ∈ R, mas (2,2) ∉ R.
        </p>
        <p>
          Conclusão: apesar de simétrica, <strong>R não é relação de equivalência</strong> — faltam a reflexividade e a
          transitividade. A lição é que as três propriedades precisam ser verificadas separadamente; uma não implica a
          outra.
        </p>
      </HighlightBox>
    </section>
  );
}
