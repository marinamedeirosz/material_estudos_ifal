import AIKahootQuiz from '../../components/ui/AIKahootQuiz';
import AIQuizGenerator from '../../components/ui/AIQuizGenerator';
import CodeBlock from '../../components/ui/CodeBlock';
import ExamQuizSelector from '../../components/ui/ExamQuizSelector';
import ExternalBookReader from '../../components/ui/ExternalBookReader';
import FlowDiagram from '../../components/ui/FlowDiagram';
import HighlightBox from '../../components/ui/HighlightBox';
import QuizTabs from '../../components/ui/QuizTabs';
import { SectionHeader, ConceptGrid, PanelList } from '../../components/sections';
import {
  PDSW_BOOK_CHAPTERS,
  PDSW_CHAPTER_CONTENT,
  PDSW_EVALUATIONS,
  PDSW_GUIDE_CONTEXT,
  PDSW_SEMINAR_CRITERIA,
  PDSW_TOPICS,
  QUIZ_DATA,
  type PdswChapterContent,
  type PdswConcept,
} from './data';

interface ProcessosDesenvolvimentoSoftwareSectionsProps {
  activeSection: string;
}

function AssessmentMap() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {PDSW_EVALUATIONS.map(evaluation => (
        <div key={evaluation.id} className="study-surface p-4">
          <span className="mb-2 inline-flex rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">
            {evaluation.label}
          </span>
          <h3 className="mb-1 text-sm font-bold text-text">{evaluation.title}</h3>
          <p className="text-sm leading-relaxed text-text-muted">{evaluation.scope}</p>
        </div>
      ))}
    </div>
  );
}

function IntroSection() {
  const overviewItems: PdswConcept[] = [
    {
      title: 'Roteiro por capítulos',
      description: 'A navegação agora acompanha os dez capítulos do livro-base, com subdivisões internas para os temas mais densos.',
      accent: 'accent',
    },
    {
      title: 'Avaliação sem perder contexto',
      description: 'O mapa de N1 e N2 aparece no início, mas o estudo segue a progressão conceitual do livro.',
      accent: 'accent3',
    },
    {
      title: 'Teoria conectada à prática',
      description: 'Cada capítulo liga conceitos a decisões de projeto, atividades locais, quiz e exemplos de implementação.',
      accent: 'accent5',
    },
  ];

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Visão Geral"
        subtitle="Uma trilha de estudo para entender como software é concebido, projetado, testado, evoluído e entregue."
        colorClass="text-accent"
      />
      <ConceptGrid items={overviewItems} columns="md:grid-cols-3" />
      <HighlightBox title="Fonte e créditos">
        <p>
          A disciplina foi organizada a partir dos dez primeiros capítulos do livro <strong>Engenharia de Software Moderna</strong>, de Marco Tulio Valente, dos materiais locais de PDSW e das orientações do professor <strong>Elvys Alves Soares</strong>.
        </p>
      </HighlightBox>
      <div>
        <h3 className="mb-3 font-display text-xl font-bold text-accent3">Mapa de avaliações</h3>
        <AssessmentMap />
      </div>
    </section>
  );
}

function ChapterSection({ chapter }: { chapter: PdswChapterContent }) {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title={`Capítulo ${chapter.number}: ${chapter.title}`}
        subtitle={chapter.subtitle}
        colorClass="text-accent3"
        badge={chapter.exam}
      />

      <HighlightBox title="Foco do capítulo" accent="var(--color-accent3)">
        <p>{chapter.focus}</p>
        <p>
          Leitura-base:{' '}
          <a className="text-accent underline-offset-4 hover:underline" href={chapter.sourceUrl} target="_blank" rel="noreferrer">
            Engenharia de Software Moderna, capítulo {chapter.number}
          </a>
          .
        </p>
      </HighlightBox>

      {chapter.subsections.map(subsection => (
        <div key={subsection.title} className="space-y-3">
          <div>
            <h3 className="mb-1 font-display text-xl font-bold text-accent">{subsection.title}</h3>
            <p className="max-w-3xl text-sm leading-relaxed text-text-muted">{subsection.description}</p>
          </div>
          {subsection.concepts && <ConceptGrid items={subsection.concepts} columns="md:grid-cols-2 lg:grid-cols-3" />}
          {subsection.panels && <PanelList items={subsection.panels} />}
          {subsection.flow && (
            <HighlightBox title="Fluxo mental" accent="var(--color-accent4)">
              <FlowDiagram items={subsection.flow} />
            </HighlightBox>
          )}
          {subsection.code && <CodeBlock code={subsection.code.content} language={subsection.code.language} />}
        </div>
      ))}
    </section>
  );
}

function SeminarSection() {
  const seminarFlow = ['Tema', 'Objetivos', 'Prós e contras', 'Demonstração', 'Perguntas', 'Fechamento'];

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Seminário"
        subtitle="Critérios de avaliação e roteiro de preparação para o tema definido pelo professor."
        colorClass="text-accent5"
        badge="N2 / S1"
      />
      <PanelList items={PDSW_SEMINAR_CRITERIA} />
      <HighlightBox title="Estrutura recomendada" accent="var(--color-accent5)">
        <FlowDiagram items={seminarFlow} />
      </HighlightBox>
      <HighlightBox title="Como demonstrar domínio">
        <p>
          Apresente o problema, defina o conceito central, mostre um exemplo prático ou teórico, discuta vantagens e limitações, conecte com Engenharia de Software Moderna e reserve tempo para perguntas.
        </p>
      </HighlightBox>
    </section>
  );
}

function LivroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Livro Base"
        subtitle="Leitura guiada dos dez primeiros capítulos de Engenharia de Software Moderna."
        colorClass="text-accent3"
      />
      <ExternalBookReader
        title="Engenharia de Software Moderna"
        description="Livro online de Marco Tulio Valente usado como base da disciplina. O leitor aponta para o site oficial e preserva o conteúdo na origem."
        chapters={PDSW_BOOK_CHAPTERS}
      />
    </section>
  );
}

const pdswExamLabels = {
  prova1: {
    label: 'N1 / AV1',
    description: 'Capítulos 1 a 4: introdução, processos, requisitos e modelos.',
  },
  prova2: {
    label: 'N1 / AV2',
    description: 'Capítulos 5 a 7: princípios de projeto, padrões e arquitetura.',
  },
  prova4: {
    label: 'N2 / AV4',
    description: 'Capítulos 8 a 10: testes, refactoring e DevOps.',
  },
};

function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="Questões organizadas por N1 / AV1, N1 / AV2 e N2 / AV4, com alternativas normais, Kahoot e geração por IA."
        colorClass="text-accent"
      />
      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" examLabels={pdswExamLabels} />}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" examLabels={pdswExamLabels} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>
                A IA usa o contexto da disciplina para gerar lotes de perguntas inéditas por avaliação ou capítulo.
              </p>
            </HighlightBox>
            <AIQuizGenerator guideContext={PDSW_GUIDE_CONTEXT} topics={PDSW_TOPICS} />
          </div>
        )}
        aiKahoot={<AIKahootQuiz guideContext={PDSW_GUIDE_CONTEXT} topics={PDSW_TOPICS} />}
      />
    </section>
  );
}

export default function ProcessosDesenvolvimentoSoftwareSections({
  activeSection,
}: ProcessosDesenvolvimentoSoftwareSectionsProps) {
  const chapter = PDSW_CHAPTER_CONTENT.find(item => item.id === activeSection);

  if (chapter) {
    return <ChapterSection chapter={chapter} />;
  }

  switch (activeSection) {
    case 'intro':
      return <IntroSection />;
    case 'seminario':
      return <SeminarSection />;
    case 'livro':
      return <LivroSection />;
    case 'quiz':
      return <QuizSection />;
    default:
      return <IntroSection />;
  }
}
