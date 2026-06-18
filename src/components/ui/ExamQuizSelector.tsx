import { useMemo, useState } from 'react';
import KahootQuiz from './KahootQuiz';
import QuizCard, { type QuizExam, type QuizQuestionData } from './QuizCard';

type ReviewMode = 'quiz' | 'kahoot';

interface ExamFilterOption {
  value: 'todos' | QuizExam;
  label: string;
  description: string;
}

interface ExamLabel {
  label: string;
  description?: string;
}

interface ExamQuizSelectorProps {
  questions: QuizQuestionData[];
  mode: ReviewMode;
  examLabels?: Partial<Record<QuizExam, ExamLabel>>;
}

const ordinais = ['primeira', 'segunda', 'terceira', 'quarta', 'quinta', 'sexta', 'sétima', 'oitava', 'nona', 'décima'];

export default function ExamQuizSelector({ questions, mode, examLabels }: ExamQuizSelectorProps) {
  const [selectedExam, setSelectedExam] = useState<ExamFilterOption['value']>('todos');

  const examOptions = useMemo(() => {
    const exams = [...new Set(questions.map(q => q.exam).filter(Boolean))] as QuizExam[];
    exams.sort((a, b) => Number(a.replace('prova', '')) - Number(b.replace('prova', '')));

    return [
      { value: 'todos' as const, label: 'Todas', description: 'Mistura os conteúdos de todas as avaliações.' },
      ...exams.map(exam => {
        const num = exam.replace('prova', '');
        const customLabel = examLabels?.[exam];

        return {
          value: exam,
          label: customLabel?.label ?? `Prova ${num}`,
          description: customLabel?.description
            ?? `Revisa somente os conteúdos da ${ordinais[Number(num) - 1] ?? `${num}ª`} avaliação.`,
        };
      }),
    ];
  }, [examLabels, questions]);

  const filteredQuestions = useMemo(() => (
    selectedExam === 'todos'
      ? questions
      : questions.filter(question => question.exam === selectedExam)
  ), [questions, selectedExam]);

  return (
    <div className="space-y-4">
      <div className="study-surface p-3">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4" role="tablist" aria-label="Conteúdo da avaliação">
          {examOptions.map(option => {
            const active = selectedExam === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setSelectedExam(option.value)}
                aria-selected={active}
                className={`rounded-lg border px-3 py-2.5 text-left transition-colors ${
                  active
                    ? 'border-accent bg-accent/10 text-text'
                    : 'border-border bg-bg/40 text-text-muted hover:border-border-hover hover:text-text'
                }`}
              >
                <span className="block text-sm font-bold">{option.label}</span>
                <span className="block text-[11px] leading-snug">{option.description}</span>
              </button>
            );
          })}
        </div>
      </div>

      {mode === 'quiz' ? (
        <div>
          {filteredQuestions.map(question => (
            <QuizCard key={question.id} data={question} />
          ))}
        </div>
      ) : (
        <KahootQuiz key={selectedExam} questions={filteredQuestions} />
      )}
    </div>
  );
}
