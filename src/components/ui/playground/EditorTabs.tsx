import { PART_LABELS } from './types';
import type { PartKey } from './types';

interface EditorTabsProps {
  parts: PartKey[];
  active: PartKey;
  onSelect: (part: PartKey) => void;
  /** Partes só de leitura ganham marca visual. */
  readOnlyParts: PartKey[];
}

/** Abas de troca entre as partes do exemplo. Só aparece quando há mais de uma. */
export default function EditorTabs({ parts, active, onSelect, readOnlyParts }: EditorTabsProps) {
  if (parts.length < 2) return null;

  return (
    <div role="tablist" aria-label="Partes do código" className="flex items-center gap-1 px-2 pt-2 bg-card">
      {parts.map((part) => {
        const ativo = part === active;
        const leitura = readOnlyParts.includes(part);
        return (
          <button
            key={part}
            type="button"
            role="tab"
            aria-selected={ativo}
            onClick={() => onSelect(part)}
            className={`px-3 py-1.5 text-xs font-bold rounded-t-md transition-colors cursor-pointer
              ${ativo ? 'bg-bg text-accent' : 'text-text-muted hover:text-text hover:bg-card-hover'}`}
          >
            {PART_LABELS[part]}
            {leitura && <span className="ml-1.5 font-normal opacity-70">(leitura)</span>}
          </button>
        );
      })}
    </div>
  );
}
