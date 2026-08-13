import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader } from '../../../components/sections';
import { PDSW_PATTERN_EXERCISES, type PdswPatternExercise } from '../data';

const CATEGORY_ACCENT: Record<PdswPatternExercise['category'], string> = {
  Criacional: 'text-accent',
  Estrutural: 'text-accent3',
  Comportamental: 'text-accent5',
};

function ExerciseCard({ exercise, index }: { exercise: PdswPatternExercise; index: number }) {
  return (
    <div className="study-surface space-y-3 p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="font-display text-lg font-bold text-text">{exercise.name}</h3>
        <span className={`text-[11px] font-bold uppercase tracking-wide ${CATEGORY_ACCENT[exercise.category]}`}>
          {exercise.category}
        </span>
      </div>

      <p className="max-w-3xl text-sm leading-relaxed text-text-muted">{exercise.scenario}</p>

      <div>
        <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-text-muted">Código inicial</p>
        <CodeBlock code={exercise.initialCode} language={exercise.language} title={`${exercise.name} — antes da refatoração`} />
      </div>

      <div>
        <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-text-muted">Roteiro de solução</p>
        <ol className="list-decimal space-y-1 pl-5 text-sm leading-relaxed text-text-muted">
          {exercise.steps.map(step => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default function ExerciciosPadroesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Exercícios de Padrões"
        subtitle="Refatorações guiadas para praticar padrões de projeto criacionais, estruturais e comportamentais."
        colorClass="text-accent3"
        badge="AV2"
      />

      <HighlightBox title="Como usar" accent="var(--color-accent3)">
        <p>
          Cada exercício parte de um código que motiva o padrão. Tente refatorar sozinho seguindo o roteiro
          antes de comparar com uma solução pronta. Os enunciados são das listas de prática da disciplina
          (material do professor <strong>Elvys Alves Soares</strong>); a linguagem acompanha a lista de origem.
        </p>
      </HighlightBox>

      <div className="space-y-4">
        {PDSW_PATTERN_EXERCISES.map((exercise, index) => (
          <ExerciseCard key={exercise.id} exercise={exercise} index={index} />
        ))}
      </div>
    </section>
  );
}
