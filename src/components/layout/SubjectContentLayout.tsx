import { useMemo, useRef, type KeyboardEvent, type ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SITE_LAST_UPDATED_LABEL } from '../../data/siteMetadata';
import ExamMode from './ExamMode';

interface SubjectContentSection {
  id: string;
  shortTitle: string;
  exam?: string;
}

interface SubjectContentLayoutProps {
  sections: readonly SubjectContentSection[];
  eyebrow: string;
  title: ReactNode;
  description: string;
  heroBackground: string;
  renderSection: (sectionId: string) => ReactNode;
}

export default function SubjectContentLayout({
  sections,
  eyebrow,
  title,
  description,
  heroBackground,
  renderSection,
}: SubjectContentLayoutProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sectionIds = useMemo(() => new Set(sections.map(section => section.id)), [sections]);
  const topicParam = searchParams.get('topic');
  const activeSection = topicParam && sectionIds.has(topicParam) ? topicParam : 'intro';

  const examMode = searchParams.get('modo') === 'prova';
  const selectedExam = searchParams.get('av') || 'AVF';

  const tablistRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleExamMode = (enable: boolean) => {
    const nextParams = new URLSearchParams(searchParams);
    if (enable) {
      nextParams.set('modo', 'prova');
      nextParams.delete('topic');
    } else {
      nextParams.delete('modo');
      nextParams.delete('av');
    }
    setSearchParams(nextParams);
  };

  const selectExam = (exam: string) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('modo', 'prova');
    nextParams.set('av', exam);
    setSearchParams(nextParams);
  };

  const selectSection = (sectionId: string, moveFocusToContent = false) => {
    const nextParams = new URLSearchParams(searchParams);

    if (sectionId === 'intro') {
      nextParams.delete('topic');
    } else {
      nextParams.set('topic', sectionId);
    }

    setSearchParams(nextParams);
    if (moveFocusToContent) {
      // Após escolher uma seção, leva o foco ao conteúdo para leitores de tela e teclado.
      requestAnimationFrame(() => contentRef.current?.focus());
    }
  };

  // Navegação por teclado no tablist: setas movem o foco entre as abas (roving tabindex).
  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keyToDelta: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1 };
    let nextIndex: number | null = null;

    if (event.key in keyToDelta) {
      nextIndex = (index + keyToDelta[event.key] + sections.length) % sections.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = sections.length - 1;
    }

    if (nextIndex === null) return;

    event.preventDefault();
    const buttons = tablistRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    buttons?.[nextIndex]?.focus();
    selectSection(sections[nextIndex].id);
  };

  if (examMode) {
    return (
      <div>
        <div className="page-wrap pt-5 md:pt-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-text-muted text-[11px] font-semibold tracking-[0.18em] uppercase">Modo Prova</p>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text">Estudar para a avaliação</h2>
            </div>
            <button
              type="button"
              onClick={() => toggleExamMode(false)}
              className="btn-secondary px-4 py-2 text-sm"
            >
              ← Voltar ao conteúdo
            </button>
          </div>
        </div>
        <ExamMode
          sections={sections}
          selectedExam={selectedExam}
          onSelectExam={selectExam}
          renderSection={renderSection}
        />
      </div>
    );
  }

  return (
    <div>
      {activeSection === 'intro' && (
        <div className="relative min-h-[38vh] md:min-h-[42vh] flex flex-col items-center justify-center text-center px-6 py-12 md:py-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-60">
            <div className="absolute inset-0" style={{ background: heroBackground }} />
          </div>

          <p className="text-text-muted text-[11px] font-semibold tracking-[0.2em] uppercase relative z-10 mb-4">
            {eyebrow}
          </p>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-text relative z-10 mb-3 leading-[1.06] tracking-tight">
            {title}
          </h1>
          <p className="text-text-muted text-sm md:text-base relative z-10 max-w-2xl">
            {description}
          </p>
          <Link
            to="/atualizacoes"
            className="text-text-muted/80 hover:text-text text-xs relative z-10 mt-4 underline underline-offset-2 transition-colors"
          >
            Atualizado em {SITE_LAST_UPDATED_LABEL}
          </Link>
        </div>
      )}

      <div className="page-wrap flex flex-col gap-2 sm:flex-row sm:items-stretch">
        <button
          type="button"
          onClick={() => toggleExamMode(true)}
          className="sticky top-2 z-40 btn-primary shrink-0 px-4 py-2 text-sm inline-flex items-center justify-center gap-1.5"
        >
          <span aria-hidden>📝</span> Modo Prova
        </button>
        <div
          ref={tablistRef}
          role="tablist"
          aria-label="Seções da matéria"
          aria-orientation="horizontal"
          className="sticky top-2 z-40 glass border border-border rounded-xl px-3 py-3 flex gap-2 overflow-x-auto whitespace-nowrap flex-1 min-w-0"
        >
          {sections.map((section, index) => {
            const selected = activeSection === section.id;
            return (
              <button
                key={section.id}
                type="button"
                role="tab"
                id={`tab-${section.id}`}
                aria-selected={selected}
                aria-controls="painel-conteudo"
                tabIndex={selected ? 0 : -1}
                onClick={() => selectSection(section.id, true)}
                onKeyDown={event => handleTabKeyDown(event, index)}
                className={`study-pill px-3 py-1.5 inline-flex items-center gap-1.5 ${selected ? 'active' : ''}`}
              >
                {section.exam && (
                  <span className="text-[10px] font-black opacity-75">{section.exam}</span>
                )}
                {section.shortTitle}
              </button>
            );
          })}
        </div>
      </div>

      <div
        ref={contentRef}
        id="painel-conteudo"
        role="tabpanel"
        tabIndex={-1}
        key={activeSection}
        aria-labelledby={`tab-${activeSection}`}
        className={`page-wrap pb-20 focus:outline-none panel-enter ${activeSection === 'intro' ? 'pt-10 md:pt-12' : 'pt-5 md:pt-6'}`}
      >
        {renderSection(activeSection)}
      </div>
    </div>
  );
}
