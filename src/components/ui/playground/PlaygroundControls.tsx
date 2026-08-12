import type { PlaygroundPreset } from './types';

interface PlaygroundControlsProps {
  onRun: () => void;
  onReset: () => void;
  /** Verdadeiro quando o código foi editado em relação ao original. */
  modificado: boolean;
  presets?: PlaygroundPreset[];
  onPreset: (preset: PlaygroundPreset) => void;
  presetAtivo: string | null;
}

/** Barra de ações: predefinições à esquerda, executar/restaurar à direita. */
export default function PlaygroundControls({
  onRun,
  onReset,
  modificado,
  presets,
  onPreset,
  presetAtivo,
}: PlaygroundControlsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 px-3 py-2 bg-card border-t border-border">
      {presets && presets.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 mr-auto">
          <span className="text-[11px] text-text-muted mr-1">Experimente:</span>
          {presets.map((preset) => {
            const ativo = preset.label === presetAtivo;
            return (
              <button
                key={preset.label}
                type="button"
                onClick={() => onPreset(preset)}
                aria-pressed={ativo}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-md border transition-colors cursor-pointer
                  ${
                    ativo
                      ? 'border-accent text-accent bg-accent/10'
                      : 'border-border text-text-muted hover:text-text hover:border-border-hover'
                  }`}
              >
                {preset.label}
              </button>
            );
          })}
        </div>
      )}

      <div className={`flex items-center gap-2 ${presets && presets.length > 0 ? '' : 'ml-auto'}`}>
        {modificado && (
          <button
            type="button"
            onClick={onReset}
            className="px-3 py-1.5 text-xs font-bold rounded-md border border-border text-text-muted
              hover:text-text hover:border-border-hover transition-colors cursor-pointer"
          >
            Restaurar original
          </button>
        )}
        <button
          type="button"
          onClick={onRun}
          className="px-4 py-1.5 text-xs font-bold rounded-md bg-accent text-white
            hover:opacity-90 transition-opacity cursor-pointer"
        >
          Executar
        </button>
      </div>
    </div>
  );
}
