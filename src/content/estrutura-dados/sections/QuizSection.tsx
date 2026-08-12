import AIQuizGenerator from '../../../components/ui/AIQuizGenerator';
import AIKahootQuiz from '../../../components/ui/AIKahootQuiz';
import ExamQuizSelector from '../../../components/ui/ExamQuizSelector';
import HighlightBox from '../../../components/ui/HighlightBox';
import QuizTabs from '../../../components/ui/QuizTabs';
import { SectionHeader } from '../../../components/sections';
import { ESTRUTURA_DADOS_GUIDE_CONTEXT, ESTRUTURA_DADOS_TOPICS, QUIZ_DATA } from '../data';

/** O professor usa "AV1/AV2" no mural; o rótulo padrão do seletor é "Prova 1/2". */
const estdExamLabels = {
  prova1: {
    label: 'AV1',
    description: 'Recursividade, pilhas, filas, deques e Big O — mais a base que os precede.',
  },
  prova2: {
    label: 'AV2',
    description: 'Listas encadeadas, busca, hashing, ordenação, árvores e Big O.',
  },
};

export default function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="58 questões sobre os assuntos da AV1 e da AV2, incluindo exercícios adaptados das listas e dos slides do professor"
        colorClass="text-accent"
      />

      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" examLabels={estdExamLabels} />}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" examLabels={estdExamLabels} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>
                A IA usa os conteúdos selecionados de Estrutura de Dados para gerar lotes de 1, 5 ou 10 perguntas inéditas com alternativas, resposta correta e explicação.
              </p>
            </HighlightBox>
            <AIQuizGenerator guideContext={ESTRUTURA_DADOS_GUIDE_CONTEXT} topics={ESTRUTURA_DADOS_TOPICS} />
          </div>
        )}
        aiKahoot={<AIKahootQuiz guideContext={ESTRUTURA_DADOS_GUIDE_CONTEXT} topics={ESTRUTURA_DADOS_TOPICS} />}
      />
    </section>
  );
}