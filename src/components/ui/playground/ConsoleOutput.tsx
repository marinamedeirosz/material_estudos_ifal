import type { ConsoleEntry } from './SandboxPreview';

interface ConsoleOutputProps {
  entries: ConsoleEntry[];
}

const MONO = "'JetBrains Mono', 'Fira Code', Consolas, 'Courier New', monospace";

/** Cor por nível — sempre variável do design system, nunca cor literal. */
const LEVEL_COLOR: Record<ConsoleEntry['level'], string> = {
  log: 'var(--color-text)',
  info: 'var(--color-accent3)',
  warn: 'var(--color-accent4)',
  error: 'var(--color-accent2)',
};

/** Saída do console capturada do sandbox. */
export default function ConsoleOutput({ entries }: ConsoleOutputProps) {
  return (
    <div className="border-t border-border">
      <div className="px-3 py-1.5 bg-card border-b border-border">
        <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Console</span>
      </div>
      <div
        // polite: anuncia a saída sem interromper o que o leitor de tela já está lendo.
        aria-live="polite"
        aria-atomic="false"
        aria-label="Saída do console"
        className="p-3 max-h-48 overflow-y-auto text-xs leading-relaxed"
        style={{ background: 'var(--color-bg)', fontFamily: MONO }}
      >
        {entries.length === 0 ? (
          <p className="text-text-muted italic">Nenhuma saída. Use console.log para escrever aqui.</p>
        ) : (
          entries.map((entry, i) => (
            <p key={i} style={{ color: LEVEL_COLOR[entry.level] }} className="whitespace-pre-wrap break-words">
              {entry.level === 'error' ? '⚠ ' : ''}
              {entry.text}
            </p>
          ))
        )}
      </div>
    </div>
  );
}
