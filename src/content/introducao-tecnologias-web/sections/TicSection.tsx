import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, PanelList, ColoredPanelList } from '../../../components/sections';
import { ticAreas, developerResponsibility, interfaceEvolution } from './blocks';

export default function TicSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Tecnologias da Informação e Comunicação"
        subtitle="Onde as TICs já estão e o que isso cobra de quem as desenvolve"
        colorClass="text-accent"
        badge="AV1"
      />

      <HighlightBox title="O que são TICs">
        <p>
          TICs são o conjunto de tecnologias que permitem <strong>produzir, armazenar, transmitir e acessar</strong>{' '}
          informação. A primeira aula da disciplina começa por uma pergunta simples: em que áreas da vida pessoal e
          profissional as TICs já estão presentes? A resposta mostra que praticamente não sobra área de fora.
        </p>
      </HighlightBox>

      <Subsection title="TICs no cotidiano" accentClass="text-accent2">
        <PanelList items={ticAreas} />
      </Subsection>

      <Subsection title="A responsabilidade de quem desenvolve" accentClass="text-accent3">
        <ColoredPanelList items={developerResponsibility} />
      </Subsection>

      <HighlightBox title="Por que isso abre a disciplina" accent="var(--color-accent2)">
        <p>
          Não é enfeite introdutório. Se o seu formulário é o caminho para marcar uma consulta ou pedir uma bolsa, um
          campo mal rotulado deixa alguém de fora. É por isso que os temas de <strong>acessibilidade</strong> aparecem
          já na primeira atividade prática da turma — o texto que os alunos formataram em HTML era justamente sobre o
          que fazer quando um site tem problemas de acessibilidade.
        </p>
      </HighlightBox>

      <Subsection title="Sistemas interativos" accentClass="text-accent4">
        <p className="reading-measure text-text-muted text-sm md:text-base leading-relaxed">
          Sistemas interativos são um subconjunto das TICs: o <strong>caixa automático</strong> é interativo, porque há
          uma pessoa dialogando com ele; já o sistema em <em>batch</em> que processa as informações bancárias durante a
          madrugada não é. Numa situação típica de uso, um <strong>usuário</strong> com um <strong>objetivo</strong>{' '}
          interage com um <strong>sistema</strong> por meio de uma <strong>interface</strong>, dentro de um contexto de
          uso que inclui o tempo e o ambiente físico, social e cultural.
        </p>
      </Subsection>

      <Subsection title="A evolução das interfaces" accentClass="text-accent5">
        <FlowDiagram items={interfaceEvolution} />
      </Subsection>
    </section>
  );
}
