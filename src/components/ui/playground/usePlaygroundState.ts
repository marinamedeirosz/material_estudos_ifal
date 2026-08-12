import { useCallback, useMemo, useRef, useState } from 'react';
import type { ConsoleEntry } from './SandboxPreview';
import type { PartKey, PlaygroundParts, PlaygroundPreset } from './types';

const ALL_PARTS: PartKey[] = ['html', 'css', 'js'];

/**
 * Estado do playground: o código atual, o contador de execuções e o console.
 *
 * O `runId` é o eixo de tudo — ele muda a cada execução, e é o que faz o
 * `SandboxPreview` recriar o iframe do zero (descartando timers, listeners e
 * qualquer laço que ainda estivesse rodando).
 */
export function usePlaygroundState(original: PlaygroundParts) {
  const [parts, setParts] = useState<PlaygroundParts>(original);
  const [runId, setRunId] = useState(0);
  const [entries, setEntries] = useState<ConsoleEntry[]>([]);
  const [presetAtivo, setPresetAtivo] = useState<string | null>(null);
  // Acumula as linhas fora do estado para não perder mensagens que cheguem
  // no mesmo tick — o setState com função ficaria dependente da ordem.
  const bufferRef = useRef<ConsoleEntry[]>([]);

  const modificado = useMemo(
    () => ALL_PARTS.some((p) => parts[p] !== original[p]),
    [parts, original],
  );

  const limparConsole = useCallback(() => {
    bufferRef.current = [];
    setEntries([]);
  }, []);

  const adicionarLinha = useCallback((entry: ConsoleEntry) => {
    bufferRef.current = [...bufferRef.current, entry];
    setEntries(bufferRef.current);
  }, []);

  const executar = useCallback(() => {
    limparConsole();
    setRunId((n) => n + 1);
  }, [limparConsole]);

  const restaurar = useCallback(() => {
    setParts(original);
    setPresetAtivo(null);
    limparConsole();
    setRunId((n) => n + 1);
  }, [original, limparConsole]);

  const aplicarPreset = useCallback(
    (preset: PlaygroundPreset) => {
      setParts((atual) => ({ ...atual, ...preset.patch }));
      setPresetAtivo(preset.label);
      limparConsole();
      setRunId((n) => n + 1);
    },
    [limparConsole],
  );

  const editarParte = useCallback((parte: PartKey, valor: string) => {
    setParts((atual) => ({ ...atual, [parte]: valor }));
    // Editar à mão desfaz a correspondência com o preset selecionado.
    setPresetAtivo(null);
  }, []);

  const reportarTimeout = useCallback(() => {
    adicionarLinha({
      level: 'error',
      text: 'Execução interrompida após 3 segundos — verifique se algum laço não termina.',
    });
  }, [adicionarLinha]);

  return {
    parts,
    runId,
    entries,
    presetAtivo,
    modificado,
    executar,
    restaurar,
    aplicarPreset,
    editarParte,
    adicionarLinha,
    reportarTimeout,
  };
}
