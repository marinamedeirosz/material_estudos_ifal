import AIQuizGenerator from '../../../components/ui/AIQuizGenerator';
import AIKahootQuiz from '../../../components/ui/AIKahootQuiz';
import ExamQuizSelector from '../../../components/ui/ExamQuizSelector';
import HighlightBox from '../../../components/ui/HighlightBox';
import QuizTabs from '../../../components/ui/QuizTabs';
import { SectionHeader } from '../../../components/sections';
import { INTW_EXAMS, INTW_GUIDE_CONTEXT, INTW_TOPICS, QUIZ_DATA } from '../data';

export default function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="14 questões sobre os assuntos da AV1 e da AV2, no formato das atividades do professor"
        colorClass="text-accent"
      />

      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" exams={INTW_EXAMS} />}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" exams={INTW_EXAMS} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>
                A IA usa os conteúdos selecionados de Introdução às Tecnologias Web para gerar lotes de 1, 5 ou 10
                perguntas inéditas com alternativas, resposta correta e explicação.
              </p>
            </HighlightBox>
            <AIQuizGenerator guideContext={INTW_GUIDE_CONTEXT} topics={INTW_TOPICS} />
          </div>
        )}
        aiKahoot={<AIKahootQuiz guideContext={INTW_GUIDE_CONTEXT} topics={INTW_TOPICS} />}
      />
    </section>
  );
}
