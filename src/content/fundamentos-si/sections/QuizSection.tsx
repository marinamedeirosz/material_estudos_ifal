import AIQuizGenerator from '../../../components/ui/AIQuizGenerator';
import AIKahootQuiz from '../../../components/ui/AIKahootQuiz';
import ExamQuizSelector from '../../../components/ui/ExamQuizSelector';
import HighlightBox from '../../../components/ui/HighlightBox';
import QuizTabs from '../../../components/ui/QuizTabs';
import { SectionHeader } from '../../../components/sections';
import {
  FUNDAMENTOS_SI_EXAMS,
  FUNDAMENTOS_SI_GUIDE_CONTEXT,
  FUNDAMENTOS_SI_TOPICS,
  QUIZ_DATA,
} from '../data';

export default function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="20 questões sobre os assuntos das três provas e da final, no vocabulário usado pela professora"
        colorClass="text-accent"
      />

      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" exams={FUNDAMENTOS_SI_EXAMS} />}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" exams={FUNDAMENTOS_SI_EXAMS} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>
                A IA usa os conteúdos selecionados de Fundamentos de Sistemas de Informação para gerar lotes de 1, 5 ou
                10 perguntas inéditas, com alternativas, resposta correta e explicação.
              </p>
            </HighlightBox>
            <AIQuizGenerator guideContext={FUNDAMENTOS_SI_GUIDE_CONTEXT} topics={FUNDAMENTOS_SI_TOPICS} />
          </div>
        )}
        aiKahoot={<AIKahootQuiz guideContext={FUNDAMENTOS_SI_GUIDE_CONTEXT} topics={FUNDAMENTOS_SI_TOPICS} />}
      />
    </section>
  );
}
