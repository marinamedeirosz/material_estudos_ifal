import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, ComparisonTable } from '../../../components/sections';
import { functionParts, functionKinds, notFunctionCases } from './blocks';

export default function FuncoesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Funções"
        subtitle="Um caso particular de relação: a cada elemento do domínio corresponde um e apenas um elemento do contradomínio"
        colorClass="text-accent4"
        badge="AV1"
      />

      <HighlightBox title="Definição">
        <p>
          Uma <strong>função de A em B é uma relação que associa a cada elemento de A um único elemento de B</strong>.
          Escreve-se f: A → B, e a notação y = f(x) indica que o par (x, y) pertence à função.
        </p>
      </HighlightBox>

      <Subsection title="As três partes de uma função" accentClass="text-accent">
        <ConceptGrid items={functionParts} columns="md:grid-cols-3" />
      </Subsection>

      <HighlightBox title="Exemplo resolvido" accent="var(--color-accent3)">
        <p>
          Sejam A = {'{'}0, 1, 2{'}'}, B = {'{'}0, 1, 2, 3, 4, 5{'}'} e f: A → B definida por f(x) = 2x + 1. Aplicando a
          cada elemento: f(0) = 1, f(1) = 3 e f(2) = 5.
        </p>
        <p>
          Logo D(f) = {'{'}0, 1, 2{'}'}, CD(f) = {'{'}0, 1, 2, 3, 4, 5{'}'} e <strong>Im(f) = {'{'}1, 3, 5{'}'}</strong>.
          Como a imagem é menor que o contradomínio, esta função <em>não</em> é sobrejetora.
        </p>
      </HighlightBox>

      <Subsection title="Quando uma relação NÃO é função" accentClass="text-accent2">
        <ComparisonTable
          rows={notFunctionCases}
          leftLabel="Função"
          rightLabel="Não é função"
          criterionLabel="Critério"
        />
      </Subsection>

      <Subsection title="Classificação" accentClass="text-accent5">
        <PanelList items={functionKinds} columns="md:grid-cols-3" />
      </Subsection>

      <HighlightBox title="Por que a bijeção garante a inversa" accent="var(--color-accent4)">
        <p>
          Para que f⁻¹ também seja função, duas coisas precisam valer. Primeiro, todo elemento do contradomínio precisa
          estar associado a alguém do domínio — senão, ao inverter, sobraria elemento de partida sem imagem: é a{' '}
          <strong>sobrejeção</strong>. Segundo, cada elemento da imagem precisa vir de um único elemento do domínio —
          senão, ao inverter, um elemento teria duas imagens: é a <strong>injeção</strong>. Juntas, elas formam a{' '}
          <strong>bijeção</strong>.
        </p>
      </HighlightBox>

      <HighlightBox title="Composição de funções" accent="var(--color-accent5)">
        <p>
          Dadas f: A → B e g: Im(f) → C, define-se <strong>(g ∘ f)(x) = g(f(x))</strong> — aplica-se primeiro a função
          de dentro. Com f(x) = x + 1 e g(x) = 3x: (g ∘ f)(5) = g(6) = 18, enquanto (f ∘ g)(5) = f(15) = 16.
        </p>
        <p>
          <strong>A composição não é comutativa</strong>: g ∘ f e f ∘ g geralmente dão resultados diferentes, e trocar a
          ordem é o erro mais frequente nas questões de composição da atividade.
        </p>
      </HighlightBox>
    </section>
  );
}
