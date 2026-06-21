import { useMemo, useRef, type KeyboardEvent, type ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';

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

  const tablistRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
        </div>
      )}

      <div className="page-wrap">
        <div
          ref={tablistRef}
          role="tablist"
          aria-label="Seções da matéria"
          aria-orientation="horizontal"
          className="sticky top-2 z-40 glass border border-border rounded-xl px-3 py-3 flex gap-2 overflow-x-auto whitespace-nowrap"
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
