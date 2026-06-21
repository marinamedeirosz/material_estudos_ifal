// Tipos compartilhados pelos componentes de seção do conteúdo das matérias.

export type Accent = 'accent' | 'accent2' | 'accent3' | 'accent4' | 'accent5';

export interface ConceptItem {
  title: string;
  description: string;
  accent: Accent;
}

export interface PanelItem {
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: string;
  accent: string;
}

export interface ComparisonRow {
  criterion: string;
  left: string;
  right: string;
}
