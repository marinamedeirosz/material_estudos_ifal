import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, PanelList, StatStrip, TheoryBlock } from '../../../components/sections';
import ConversaoExemplos from './ConversaoExemplos';
import { numberBases, conversionMethods, numericDetails } from './blocks';

export default function SistemasNumericosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Sistemas Numéricos e Conversões"
        subtitle="Notação posicional e a conversão entre as bases decimal, binária, octal e hexadecimal"
        colorClass="text-accent"
        badge="3ª Prova · Final"
      />

      <HighlightBox title="O bloco mais cobrado da disciplina">
        <p>
          Conversão numérica aparece na <strong>3ª prova</strong>, na <strong>2ª chamada</strong> e na{' '}
          <strong>prova final</strong> — em todos os casos junto com soma e subtração de binários e com os números
          fracionários. A professora dedicou cinco aulas ao tema e ainda aplicou uma lista de exercícios. Se houver um
          assunto para treinar até automatizar, é este.
        </p>
      </HighlightBox>

      <TheoryBlock title="Notação posicional">
        <p>
          A posição de cada algarismo no número indica a sua magnitude, também chamada de <strong>peso</strong>. No
          sistema decimal, os pesos são potências de 10: 10⁰, 10¹, 10², 10³ e assim por diante. Por isso{' '}
          <strong>1328₁₀ = 1×1000 + 3×100 + 2×10 + 8×1</strong>.
        </p>
        <p>
          A mesma lógica vale para qualquer base — só muda a potência. Entender isso é o suficiente para fazer{' '}
          <em>toda</em> conversão de qualquer base para decimal.
        </p>
      </TheoryBlock>

      <Subsection title="As quatro bases da disciplina" accentClass="text-accent2">
        <StatStrip items={numberBases} />
        <p className="reading-measure text-text-muted text-sm leading-relaxed mt-3">
          No hexadecimal, as letras representam os valores acima de 9:{' '}
          <strong>A=10, B=11, C=12, D=13, E=14 e F=15</strong>. Os algarismos do sistema binário, 0 e 1, são chamados de{' '}
          <strong>bits</strong> (<em>binary digits</em>).
        </p>
      </Subsection>

      <Subsection title="Os caminhos de conversão" accentClass="text-accent3">
        <PanelList items={conversionMethods} columns="md:grid-cols-2" />
      </Subsection>

      <ConversaoExemplos />

      <HighlightBox title="Por que o binário fica no centro" accent="var(--color-accent4)">
        <p>
          Não existe caminho direto entre octal e hexadecimal: para converter um no outro,{' '}
          <strong>passa-se pelo binário</strong>. Isso acontece porque 8 = 2³ e 16 = 2⁴ — cada algarismo octal
          corresponde exatamente a 3 bits e cada algarismo hexa a 4 bits, mas não há uma relação de grupos inteiros
          entre 8 e 16.
        </p>
        <p>
          É também por isso que octal e hexadecimal existem em computação: eles{' '}
          <strong>representam números binários de forma compacta</strong>. Escrever E6₁₆ é bem mais prático do que
          escrever 11100110₂ — e a tradução entre os dois é uma simples substituição.
        </p>
      </HighlightBox>

      <Subsection title="Caminhos práticos de conversão" accentClass="text-accent5">
        <FlowDiagram
          items={[
            'Decimal → binário: soma de pesos ou divisões sucessivas',
            'Binário → decimal: notação posicional',
            'Binário → octal: grupos de 3 bits',
            'Binário → hexa: grupos de 4 bits',
            'Octal ↔ hexa: sempre passando pelo binário',
          ]}
        />
      </Subsection>

      <Subsection title="Detalhes que caem na prova" accentClass="text-accent">
        <PanelList items={numericDetails} columns="md:grid-cols-2" />
      </Subsection>

      <HighlightBox title="Fonte" accent="var(--color-accent5)">
        <p>
          Esta seção deriva das <em>Notas de aula #1 — Sistemas Numéricos</em>, do{' '}
          <strong>Prof. Gustavo B. Borba (UTFPR), disciplina EL66J</strong> — material de terceiros{' '}
          <strong>adotado e redistribuído na disciplina pela Profa. Wladia Bessa</strong> em FNSI 2022.1 — BSI/IFAL. Os
          exemplos foram resumidos e reescritos a partir dessas notas; a lista de exercícios de conversão aplicada à
          turma é de autoria da própria professora.
        </p>
      </HighlightBox>
    </section>
  );
}
