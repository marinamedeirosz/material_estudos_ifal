import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';
import { disciplineOverview, learningPath, examBreakdown } from './blocks';

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Introdução às Tecnologias Web"
        subtitle="Do que é a Web até publicar uma página com estrutura, estilo e comportamento"
        colorClass="text-accent"
      />

      <HighlightBox title="Objetivo da disciplina">
        <p>
          INTW é uma das primeiras matérias do curso e tem 40 horas — metade da carga das disciplinas comuns. A ementa
          é enxuta de propósito: <strong>Introdução às TIC</strong>, <strong>Internet e protocolo HTTP</strong>,{' '}
          <strong>documentos HTML</strong>, <strong>folhas de estilo</strong> e <strong>client-side script</strong>. O
          fio condutor é a separação entre as três camadas: o HTML diz o que a informação é, o CSS diz como ela
          aparece, o JavaScript diz como ela reage.
        </p>
      </HighlightBox>

      <Subsection title="As três camadas da página" accentClass="text-accent2">
        <ConceptGrid items={disciplineOverview} columns="md:grid-cols-3" />
      </Subsection>

      <Subsection title="Sequência das aulas" accentClass="text-accent3">
        <FlowDiagram items={learningPath} />
      </Subsection>

      <Subsection title="Como as avaliações foram divididas" accentClass="text-accent4">
        <PanelList items={examBreakdown} columns="" />
      </Subsection>

      <HighlightBox title="Onde esta matéria vai dar" accent="var(--color-accent3)">
        <p>
          O que você aprende aqui é a base direta de <strong>PGWB — Programação Web</strong>, no 5º período. Lá o
          assunto é aplicação web completa, com servidor e banco de dados; mas a página que chega ao navegador continua
          sendo HTML, CSS e JavaScript. Entender bem semântica, formulários e box model agora economiza muito
          retrabalho depois.
        </p>
      </HighlightBox>

      <HighlightBox title="Fonte do conteúdo" accent="var(--color-accent5)">
        <p>
          Todo o material desta matéria foi resumido e reorganizado a partir das aulas, atividades e referências do{' '}
          <strong>Prof. Augusto Cesar Melo de Oliveira · INTW · BSI/IFAL · turma 2022.1 (EAD)</strong>. As apostilas
          indicadas por ele são as do <em>Curso W3C Escritório Brasil</em> — <em>HTML5</em>, de Elcio Ferreira e Diego
          Eis, e <em>CSS</em> — além de <em>Lógica de Programação: crie seus primeiros programas usando JavaScript e
          HTML</em>, de Paulo Silveira e Adriano Almeida (Casa do Código). A bibliografia da ementa inclui ainda as
          obras de Maurício Samy Silva sobre HTML e CSS.
        </p>
      </HighlightBox>
    </section>
  );
}
