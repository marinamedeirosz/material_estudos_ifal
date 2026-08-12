import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, ComparisonTable, StatStrip } from '../../../components/sections';
import { codeSeletores, codeBoxModel } from './snippets';
import { selectorTypes, boxModelParts, cssApplyModes } from './blocks';

export default function CssFundamentosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="CSS: Seletores e Box Model"
        subtitle="Escolher o elemento certo e entender a caixa que ele ocupa"
        colorClass="text-accent"
      />

      <HighlightBox title="O que o CSS faz">
        <p>
          O CSS <strong>formata a informação entregue pelo HTML</strong> — e essa informação pode ser imagem, texto,
          vídeo ou áudio. A formatação é quase sempre visual, mas não necessariamente: no CSS Aural manipula-se o áudio
          entregue por sistemas de leitura de tela, controlando volume, profundidade e tipo de voz. A sintaxe é sempre a
          mesma: <code>seletor &#123; propriedade: valor; &#125;</code>.
        </p>
      </HighlightBox>

      <Subsection title="Onde escrever o CSS" accentClass="text-accent2">
        <ComparisonTable
          rows={cssApplyModes}
          leftLabel="A favor"
          rightLabel="Contra"
          criterionLabel="Forma"
        />
      </Subsection>

      <Subsection title="Os tipos de seletor" accentClass="text-accent3">
        <ConceptGrid items={selectorTypes} />
      </Subsection>

      <Subsection title="Seletores na prática" accentClass="text-accent4">
        <CodeBlock code={codeSeletores} language="css" title="style.css — os seletores exigidos na atividade" />
      </Subsection>

      <HighlightBox title="Os seletores são a alma do CSS" accent="var(--color-accent5)">
        <p>
          Boa parte da inteligência do CSS está em saber usar seletores de forma eficaz. Seletores complexos alcançam
          elementos que, de outra forma, exigiriam marcar uma classe via JavaScript. O exemplo do material é{' '}
          <code>h1 + p</code>: formatar todo parágrafo que vem logo depois de um título, sem tocar no HTML, sem jQuery
          e sem mexer no CMS — só aplicando o seletor.
        </p>
      </HighlightBox>

      <HighlightBox title="Especificidade: quem vence o conflito" accent="var(--color-accent2)">
        <p>
          Quando várias regras atingem o mesmo elemento, a mais <strong>específica</strong> vence:{' '}
          <strong>id &gt; classe &gt; tag</strong>. É por isso que o id deve identificar um único elemento na página,
          enquanto a classe vale para vários. A ordem no arquivo só desempata entre seletores de{' '}
          <em>mesma</em> especificidade — o que está escrito depois ganha.
        </p>
      </HighlightBox>

      <Subsection title="O modelo de caixa" accentClass="text-accent">
        <StatStrip items={boxModelParts} />
      </Subsection>

      <Subsection title="Todas as propriedades da atividade, numa caixa só" accentClass="text-accent3">
        <CodeBlock code={codeBoxModel} language="css" title="o box model com as propriedades cobradas" />
      </Subsection>

      <HighlightBox title="padding ou margin?" accent="var(--color-accent4)">
        <p>
          A troca entre os dois é o engano mais comum no começo. <strong>Padding</strong> é espaço{' '}
          <em>dentro</em> da caixa, entre o conteúdo e a borda — aumentar o padding afasta o texto da borda.{' '}
          <strong>Margin</strong> é espaço <em>fora</em>, entre a borda e os elementos vizinhos — aumentar a margin
          afasta a caixa das outras caixas. Se o fundo colorido cresceu junto, era padding.
        </p>
      </HighlightBox>
    </section>
  );
}
