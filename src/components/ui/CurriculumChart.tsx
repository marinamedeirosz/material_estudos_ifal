import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import subjects, { axes, type AxisId, type Subject } from '../../data/curriculum';

interface Arrow {
  id: string;
  path: string;
}

/**
 * Vagas de componentes optativos previstas na matriz (nºs 22, 30, 33, 34, 39, 40, 44 e 45 do
 * quadro 2). Não são matérias específicas — a oferta varia a cada semestre —, então aparecem
 * como slots do período e apontam para o catálogo de optativas.
 */
const optativeSlots: { id: string; label: string; hours: number; axis: AxisId; period: number }[] = [
  { id: 'opt-hum', label: 'Optativa Humanística', hours: 40, axis: 'FHS', period: 4 },
  { id: 'opt-sup', label: 'Optativa Suplementar (EAD)', hours: 40, axis: 'FHS', period: 6 },
  { id: 'opt-1', label: 'Optativa I', hours: 80, axis: 'FPF', period: 6 },
  { id: 'opt-2', label: 'Optativa II', hours: 80, axis: 'FPF', period: 6 },
  { id: 'opt-3', label: 'Optativa III', hours: 80, axis: 'FPF', period: 7 },
  { id: 'opt-4', label: 'Optativa IV', hours: 80, axis: 'FPF', period: 7 },
  { id: 'opt-5', label: 'Optativa V', hours: 80, axis: 'FPF', period: 8 },
  { id: 'opt-6', label: 'Optativa VI', hours: 80, axis: 'FPF', period: 8 },
];

/** Componentes fora da grade de períodos, exibidos como coluna final (figura 4 do PPC). */
const closingBlocks: { id: string; label: string; hours: number; axis: AxisId }[] = [
  { id: 'tcc', label: 'Trabalho de Conclusão de Curso', hours: 100, axis: 'EXT' },
  { id: 'ace', label: 'Atividades Curriculares de Extensão', hours: 380, axis: 'EXT' },
  { id: 'acp', label: 'Atividades Complementares', hours: 240, axis: 'FHS' },
];

function periodColumns(): { period: number; subjects: Subject[] }[] {
  return Array.from({ length: 8 }, (_, index) => ({
    period: index + 1,
    subjects: subjects.filter(subject => subject.period === index + 1),
  }));
}

export default function CurriculumChart() {
  const boardRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef(new Map<string, HTMLElement>());
  const [arrows, setArrows] = useState<Arrow[]>([]);
  const [board, setBoard] = useState({ width: 0, height: 0 });
  const columns = periodColumns();

  const registerCard = useCallback((id: string, node: HTMLElement | null) => {
    if (node) cardRefs.current.set(id, node);
    else cardRefs.current.delete(id);
  }, []);

  const drawArrows = useCallback(() => {
    const boardNode = boardRef.current;
    if (!boardNode) return;

    const origin = boardNode.getBoundingClientRect();
    setBoard({ width: boardNode.scrollWidth, height: boardNode.scrollHeight });

    const next: Arrow[] = [];

    for (const subject of subjects) {
      for (const prerequisiteId of subject.prerequisites ?? []) {
        const fromNode = cardRefs.current.get(prerequisiteId);
        const toNode = cardRefs.current.get(subject.id);
        if (!fromNode || !toNode) continue;

        const from = fromNode.getBoundingClientRect();
        const to = toNode.getBoundingClientRect();

        // Sai pela borda direita do pré-requisito e entra pela borda esquerda do dependente,
        // com um cotovelo no meio do vão entre as colunas.
        const startX = from.right - origin.left + boardNode.scrollLeft;
        const startY = from.top + from.height / 2 - origin.top + boardNode.scrollTop;
        const endX = to.left - origin.left + boardNode.scrollLeft - 7;
        const endY = to.top + to.height / 2 - origin.top + boardNode.scrollTop;
        const elbowX = startX + (endX - startX) / 2;

        next.push({
          id: `${prerequisiteId}-${subject.id}`,
          path:
            startY === endY
              ? `M ${startX} ${startY} L ${endX} ${endY}`
              : `M ${startX} ${startY} L ${elbowX} ${startY} L ${elbowX} ${endY} L ${endX} ${endY}`,
        });
      }
    }

    setArrows(next);
  }, []);

  useLayoutEffect(() => {
    drawArrows();
  }, [drawArrows]);

  useEffect(() => {
    const boardNode = boardRef.current;
    if (!boardNode || typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', drawArrows);
      return () => window.removeEventListener('resize', drawArrows);
    }

    const observer = new ResizeObserver(drawArrows);
    observer.observe(boardNode);
    return () => observer.disconnect();
  }, [drawArrows]);

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="section-title text-accent">Matriz Curricular</h2>
          <p className="section-subtitle max-w-2xl">
            Componentes agrupados por período e por eixo formativo, com as setas indicando os
            pré-requisitos. Clique em uma matéria para abrir o material de estudo; os blocos
            tracejados são vagas de optativas e levam aos componentes que podem cumpri-las.
          </p>
        </div>
      </div>

      <ul className="flex flex-wrap gap-x-4 gap-y-2">
        {Object.entries(axes).map(([id, axis]) => (
          <li key={id} className="flex items-center gap-1.5 text-text-muted text-[11px] font-semibold">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-[3px]"
              style={{ backgroundColor: axis.color }}
              aria-hidden="true"
            />
            {axis.label}
          </li>
        ))}
      </ul>

      <div className="study-surface overflow-x-auto p-4 md:p-5">
        <div ref={boardRef} className="relative flex min-w-max items-start gap-4 md:gap-5">
          <svg
            className="pointer-events-none absolute left-0 top-0 overflow-visible"
            width={board.width}
            height={board.height}
            aria-hidden="true"
          >
            <defs>
              <marker
                id="curriculum-arrowhead"
                markerWidth="7"
                markerHeight="7"
                refX="6"
                refY="3.5"
                orient="auto"
              >
                <path d="M 0 0 L 7 3.5 L 0 7 z" fill="var(--color-text-muted)" />
              </marker>
            </defs>
            {arrows.map(arrow => (
              <path
                key={arrow.id}
                d={arrow.path}
                fill="none"
                stroke="var(--color-text-muted)"
                strokeWidth="1.5"
                markerEnd="url(#curriculum-arrowhead)"
              />
            ))}
          </svg>

          {columns.map(column => (
            <div key={column.period} className="flex w-[172px] shrink-0 flex-col gap-3">
              <h3 className="text-text-muted border-border border-b pb-2 text-center text-[11px] font-bold uppercase tracking-[0.14em]">
                {column.period}º Período
              </h3>
              {column.subjects.map(subject => (
                <NavLink
                  key={subject.id}
                  ref={node => registerCard(subject.id, node)}
                  to={`/materia/${subject.slug}`}
                  className="card-hover relative z-10 block rounded-lg border-l-4 bg-card p-2.5 text-center transition-colors"
                  style={{ borderLeftColor: axes[subject.axis].color }}
                >
                  <span className="text-text block text-[12px] font-semibold leading-tight text-pretty">
                    {subject.name}
                  </span>
                  <span className="text-text-muted mt-1 block text-[10px] font-bold tabular-nums">
                    {subject.hours}h
                    {subject.hasContent && <span className="text-accent"> · conteúdo</span>}
                  </span>
                </NavLink>
              ))}
              {optativeSlots
                .filter(slot => slot.period === column.period)
                .map(slot => (
                  <NavLink
                    key={slot.id}
                    to="/optativas"
                    title="A oferta é definida a cada semestre pelo colegiado — ver componentes optativos."
                    className="card-hover border-border group relative z-10 block rounded-lg border border-dashed border-l-4 bg-card/60 p-2.5 text-center transition-colors"
                    style={{ borderLeftColor: axes[slot.axis].color }}
                  >
                    <span className="text-text-muted group-hover:text-text block text-[12px] font-semibold leading-tight transition-colors text-pretty">
                      {slot.label}
                    </span>
                    <span className="text-text-muted/70 mt-1 block text-[10px] font-bold tabular-nums">
                      {slot.hours}h · a escolher
                    </span>
                  </NavLink>
                ))}
            </div>
          ))}

          <div className="flex w-[172px] shrink-0 flex-col gap-3">
            <h3 className="text-text-muted border-border border-b pb-2 text-center text-[11px] font-bold uppercase tracking-[0.14em]">
              Integralização
            </h3>
            {closingBlocks.map(block => (
              <div
                key={block.id}
                className="rounded-lg border-l-4 bg-card p-2.5 text-center"
                style={{ borderLeftColor: axes[block.axis].color }}
              >
                <span className="text-text block text-[12px] font-semibold leading-tight text-pretty">
                  {block.label}
                </span>
                <span className="text-text-muted mt-1 block text-[10px] font-bold tabular-nums">
                  {block.hours}h
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
