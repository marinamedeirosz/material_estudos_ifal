export type PartKey = 'html' | 'css' | 'js';

/** Rótulo exibido na aba de cada parte. */
export const PART_LABELS: Record<PartKey, string> = {
  html: 'HTML',
  css: 'CSS',
  js: 'JavaScript',
};

/** As três partes que compõem o documento executado. */
export interface PlaygroundParts {
  html?: string;
  css?: string;
  js?: string;
}

/**
 * Botão que troca um trecho do código — ex.: os valores de `justify-content`.
 * O `patch` substitui a parte inteira indicada, mantendo as demais.
 */
export interface PlaygroundPreset {
  label: string;
  patch: PlaygroundParts;
}

export interface CodePlaygroundProps extends PlaygroundParts {
  /** Quais partes o aluno pode editar; as demais viram somente leitura. */
  editable?: PartKey[];
  presets?: PlaygroundPreset[];
  /** Mostrar o console. Padrão: só quando há JS. */
  showConsole?: boolean;
  /** Esconder a pré-visualização — para exemplos de lógica pura. */
  hidePreview?: boolean;
  /** Título do exemplo, exibido no cabeçalho. */
  title?: string;
  /** A provocação: o que o aluno deve tentar mudar. Sem isso o bloco vira distração. */
  challenge?: string;
}
