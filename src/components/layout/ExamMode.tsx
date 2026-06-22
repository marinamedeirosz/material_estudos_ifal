import { useMemo, type ReactNode } from 'react';

export interface ExamModeSection {
  id: string;
  shortTitle: string;
  exam?: string;
}

interface ExamModeProps {
  sections: readonly ExamModeSection[];
  /** Avaliação selecionada: um rótulo (ex: "AV1") ou "AVF" (tudo). */
  selectedExam: string;
  onSelectExam: (exam: string) => void;
  renderSection: (sectionId: string) => ReactNode;
}

const FINAL = 'AVF';

/** Seções que não fazem parte do estudo de prova (introdução e quizzes). */
function isStudySection(section: ExamModeSection): boolean {
  return section.id !== 'intro' && !/quiz/i.test(section.id);
}

/**
 * Modo Prova: mostra TODO o conteúdo da avaliação escolhida numa única página,
 * sem cortes — uma seção após a outra. "AVF" reúne todas as seções de estudo.
 */
export default function ExamMode({ sections, selectedExam, onSelectExam, renderSection }: ExamModeProps) {
  // Rótulos de avaliação realmente presentes na matéria, em ordem de aparição.
  const exams = useMemo(() => {
    const seen: string[] = [];
    for (const section of sections) {
      if (section.exam && !seen.includes(section.exam)) seen.push(section.exam);
    }
    return seen;
  }, [sections]);

  const options = useMemo(() => [...exams, FINAL], [exams]);

  // Seção de estudo pertencente à avaliação escolhida (AVF = todas).
  const examSections = useMemo(() => {
    return sections.filter(section => {
      if (!isStudySection(section)) return false;
      return selectedExam === FINAL ? true : section.exam === selectedExam;
    });
  }, [sections, selectedExam]);

  const examLabel = (exam: string) => (exam === FINAL ? 'Final (tudo)' : exam);

  return (
    <div className="page-wrap pb-20 pt-5 md:pt-6">
      {/* Seletor de avaliação */}
      <div
        role="tablist"
        aria-label="Avaliação para estudar"
        className="sticky top-2 z-40 glass border border-border rounded-xl px-3 py-3 flex flex-wrap gap-2 mb-6"
      >
        {options.map(exam => {
          const selected = exam === selectedExam;
          return (
            <button
              key={exam}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => onSelectExam(exam)}
              className={`study-pill px-4 py-1.5 ${selected ? 'active' : ''}`}
            >
              {examLabel(exam)}
            </button>
          );
        })}
      </div>

      {examSections.length === 0 ? (
        <p className="text-text-muted text-sm">
          Nenhum conteúdo marcado para esta avaliação.
        </p>
      ) : (
        <div key={selectedExam} className="panel-enter space-y-12 md:space-y-16">
          {examSections.map(section => (
            <section key={section.id} aria-label={section.shortTitle}>
              {renderSection(section.id)}
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
