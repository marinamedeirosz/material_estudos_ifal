import { useMemo, useState } from 'react';
import CodeEditor from './CodeEditor';
import ConsoleOutput from './ConsoleOutput';
import EditorTabs from './EditorTabs';
import PlaygroundControls from './PlaygroundControls';
import SandboxPreview from './SandboxPreview';
import { usePlaygroundState } from './usePlaygroundState';
import { PART_LABELS } from './types';
import type { CodePlaygroundProps, PartKey, PlaygroundParts } from './types';

const ALL_PARTS: PartKey[] = ['html', 'css', 'js'];

/**
 * Bloco de código executável: o aluno edita HTML, CSS e/ou JavaScript e vê o
 * resultado na hora. Todo o código roda isolado — leia o comentário de
 * segurança em `SandboxPreview.tsx` antes de mexer no iframe.
 */
export default function CodePlayground({
  html,
  css,
  js,
  editable = ['html'],
  presets,
  showConsole,
  hidePreview = false,
  title,
  challenge,
}: CodePlaygroundProps) {
  const original = useMemo<PlaygroundParts>(() => ({ html, css, js }), [html, css, js]);
  const estado = usePlaygroundState(original);

  const partesPresentes = useMemo(
    () => ALL_PARTS.filter((p) => (original[p] ?? '').trim().length > 0),
    [original],
  );
  const [abaAtiva, setAbaAtiva] = useState<PartKey>(
    () => partesPresentes.find((p) => editable.includes(p)) ?? partesPresentes[0] ?? 'html',
  );

  const mostrarConsole = showConsole ?? (js ?? '').trim().length > 0;
  const somenteLeitura = partesPresentes.filter((p) => !editable.includes(p));
  const tituloPreview = title ? `Resultado do exemplo: ${title}` : 'Resultado do exemplo';

  const preview = (
    <SandboxPreview
      html={estado.parts.html}
      css={estado.parts.css}
      js={estado.parts.js}
      runId={estado.runId}
      title={tituloPreview}
      onConsole={estado.adicionarLinha}
      onTimeout={estado.reportarTimeout}
      hidden={hidePreview}
    />
  );

  return (
    <div className="rounded-xl overflow-hidden border border-border">
      {(title || challenge) && (
        <div className="px-4 py-2.5 bg-card border-b border-border">
          {title && <p className="text-text-muted text-xs">{title}</p>}
          {challenge && (
            <p className="text-xs md:text-sm text-accent3 mt-0.5">
              <span aria-hidden="true">→ </span>
              {challenge}
            </p>
          )}
        </div>
      )}

      {/* Mobile: preview primeiro (é o que interessa ver). Desktop: editor à esquerda. */}
      <div className="flex flex-col md:grid md:grid-cols-2">
        {!hidePreview && (
          <div className="order-1 md:order-2 md:border-l border-border p-3 bg-card">{preview}</div>
        )}

        <div className="order-2 md:order-1 flex flex-col">
          <EditorTabs
            parts={partesPresentes}
            active={abaAtiva}
            onSelect={setAbaAtiva}
            readOnlyParts={somenteLeitura}
          />
          <CodeEditor
            value={estado.parts[abaAtiva] ?? ''}
            onChange={(valor) => estado.editarParte(abaAtiva, valor)}
            label={`Editor de ${PART_LABELS[abaAtiva]}${title ? ` — ${title}` : ''}`}
            readOnly={!editable.includes(abaAtiva)}
          />
        </div>
      </div>

      {/* Sem preview visível ainda é preciso executar para alimentar o console. */}
      {hidePreview && preview}

      {mostrarConsole && <ConsoleOutput entries={estado.entries} />}

      <PlaygroundControls
        onRun={estado.executar}
        onReset={estado.restaurar}
        modificado={estado.modificado}
        presets={presets}
        onPreset={estado.aplicarPreset}
        presetAtivo={estado.presetAtivo}
      />
    </div>
  );
}
