import AIQuizGenerator from '../../../components/ui/AIQuizGenerator';
import AIKahootQuiz from '../../../components/ui/AIKahootQuiz';
import ExamQuizSelector from '../../../components/ui/ExamQuizSelector';
import HighlightBox from '../../../components/ui/HighlightBox';
import QuizTabs from '../../../components/ui/QuizTabs';
import { SectionHeader } from '../../../components/sections';
import { LMMD_EXAMS, LMMD_GUIDE_CONTEXT, LMMD_TOPICS, QUIZ_DATA } from '../data';

export default function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="25 questões cobrindo conjuntos, relações, funções, combinatória, sequências, somatórios e lógica — com exercícios adaptados da atividade e dos slides do professor"
        colorClass="text-accent"
      />

      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" exams={LMMD_EXAMS} />}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" exams={LMMD_EXAMS} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>
                A IA usa os conteúdos selecionados de Lógica Matemática e Matemática Discreta para gerar lotes de 1, 5
                ou 10 perguntas inéditas com alternativas, resposta correta e explicação.
              </p>
            </HighlightBox>
            <AIQuizGenerator guideContext={LMMD_GUIDE_CONTEXT} topics={LMMD_TOPICS} />
          </div>
        )}
        aiKahoot={<AIKahootQuiz guideContext={LMMD_GUIDE_CONTEXT} topics={LMMD_TOPICS} />}
      />
    </section>
  );
}
