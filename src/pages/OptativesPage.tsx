import { NavLink } from 'react-router-dom';
import subjects, { axes, optativeCategories, type Subject } from '../data/curriculum';

/**
 * Descrição de cada itinerário conforme a seção 9.7 do PPC. O eixo humanístico corresponde
 * à figura 5; os demais são os três itinerários do eixo profissional flexível (figuras 6 e 7,
 * mais o itinerário de gestão).
 */
const itineraries: {
  id: keyof typeof optativeCategories;
  description: string;
}[] = [
  {
    id: 'desenvolvimento',
    description:
      'Aprofundamento técnico em construção de software, da qualidade e arquitetura até inteligência computacional.',
  },
  {
    id: 'infraestrutura',
    description:
      'Redes, segurança e operação de sistemas — do projeto de infraestrutura ao DevOps e à computação forense.',
  },
  {
    id: 'gestao',
    description:
      'Uso estratégico da tecnologia nas organizações: processos, dados aplicados a negócios e comportamento organizacional.',
  },
  {
    id: 'humanistica',
    description:
      'Componentes do eixo humanístico e suplementar, que cumprem as vagas de Optativa Humanística e Optativa Suplementar.',
  },
];

function OptativeCard({ subject }: { subject: Subject }) {
  return (
    <NavLink
      to={`/materia/${subject.slug}`}
      className="study-surface study-surface-hover group flex items-center justify-between gap-3 border-l-4 px-4 py-3.5"
      style={{ borderLeftColor: axes[subject.axis].color }}
    >
      <div className="min-w-0">
        <h3 className="text-text group-hover:text-accent text-sm font-semibold transition-colors text-pretty">
          {subject.name}
        </h3>
        <p className="text-text-muted mt-0.5 text-xs tabular-nums">
          {subject.hours}h · {subject.code}
        </p>
      </div>
      <span
        className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-bold ${
          subject.hasContent ? 'bg-accent/10 text-accent' : 'bg-card-hover text-text-muted'
        }`}
      >
        {subject.hasContent ? 'Com conteúdo' : 'Pendente'}
      </span>
    </NavLink>
  );
}

export default function OptativesPage() {
  const optatives = subjects.filter(subject => subject.period === 'optativa');

  return (
    <div className="page-wrap content-stack py-10 md:py-12 animate-fade-in">
      <header>
        <p className="text-text-muted mb-2 text-[11px] font-semibold uppercase tracking-[0.18em]">
          Matriz Curricular
        </p>
        <h1 className="font-display text-text text-4xl font-bold leading-tight md:text-5xl text-balance">
          Optativas
        </h1>
        <p className="section-subtitle reading-measure">
          A matriz reserva oito vagas de optativas: a Humanística no 4º período, a Suplementar no
          6º e as Optativas I a VI distribuídas entre o 6º e o 8º período. A oferta de cada semestre
          é definida pelo colegiado do curso, considerando o quadro docente e as preferências dos
          discentes.
        </p>
      </header>

      {itineraries.map(itinerary => {
        const items = optatives.filter(subject => subject.optativeCategory === itinerary.id);
        if (items.length === 0) return null;

        return (
          <section key={itinerary.id} className="space-y-4">
            <div>
              <h2 className="section-title text-accent">{optativeCategories[itinerary.id].label}</h2>
              <p className="section-subtitle reading-measure">{itinerary.description}</p>
            </div>
            <div className="stagger-children grid grid-cols-1 gap-3.5 md:grid-cols-2">
              {items.map(subject => (
                <OptativeCard key={subject.id} subject={subject} />
              ))}
            </div>
          </section>
        );
      })}

      <section className="study-surface p-6">
        <h2 className="text-text mb-1 text-sm font-semibold md:text-base">Como as vagas são cumpridas</h2>
        <p className="text-text-muted reading-measure text-sm">
          As Optativas I a VI (80h cada) são cumpridas com componentes do eixo profissional flexível
          — desenvolvimento de software, infraestrutura de comunicação ou gestão de TI —, sem
          obrigação de seguir um único itinerário. As vagas Humanística e Suplementar (40h cada) são
          cumpridas com componentes do eixo humanístico e suplementar.
        </p>
      </section>
    </div>
  );
}
