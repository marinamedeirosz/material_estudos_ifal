// Histórico de atualizações do site, derivado do registro de contribuições.
// Fonte única: src/data/contribuicoes.json (também documentado em docs/contribuicoes).

import registro from './contribuicoes.json';

export type EscopoContribuicao =
  | 'materia'
  | 'projeto'
  | 'issue'
  | 'pull_request'
  | 'documentacao'
  | 'automacao'
  | 'outro';

interface Contribuinte {
  id: string;
  nome: string;
  matricula: string;
  emailInstitucional: string;
  curso?: string;
}

interface Contribuicao {
  id: string;
  contribuinteId: string;
  quando: { data: string; registradoEm?: string; timezone?: string };
  onde: {
    escopo: EscopoContribuicao;
    materiaSlug?: string;
    materiaCodigo?: string;
    arquivo?: string;
    pullRequest?: string;
    issue?: string;
  };
  tipo: string;
  como: { resumo: string; detalhes?: string; referencia?: string };
  status: string;
  tags?: string[];
}

/** Uma linha do histórico, já com o autor resolvido e a data pronta para exibir. */
export interface UpdateEntry {
  id: string;
  data: string;
  dataLabel: string;
  autor: string;
  escopo: EscopoContribuicao;
  materiaCodigo?: string;
  tipo: string;
  resumo: string;
  referencia?: string;
}

const contribuintes = registro.contribuintes as Contribuinte[];
const contribuicoes = registro.contribuicoes as Contribuicao[];

const nomePorId = new Map(contribuintes.map(c => [c.id, c.nome]));

/** Formata "2026-06-21" como "21 de junho de 2026" (pt-BR). */
export function formatarData(iso: string): string {
  // Interpreta e formata em UTC para que a data nunca deslize de dia,
  // independentemente do fuso horário de quem acessa o site.
  const data = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(data.getTime())) return iso;
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(data);
}

/** Lista de atualizações, da mais recente para a mais antiga. */
export const UPDATES: UpdateEntry[] = [...contribuicoes]
  .sort((a, b) => b.quando.data.localeCompare(a.quando.data))
  .map(c => ({
    id: c.id,
    data: c.quando.data,
    dataLabel: formatarData(c.quando.data),
    autor: nomePorId.get(c.contribuinteId) ?? 'Contribuinte',
    escopo: c.onde.escopo,
    materiaCodigo: c.onde.materiaCodigo,
    tipo: c.tipo,
    resumo: c.como.resumo,
    referencia: c.como.referencia ?? c.onde.pullRequest ?? c.onde.issue,
  }));

/** Data (ISO) da atualização mais recente, ou null se não houver registro. */
export const LATEST_UPDATE_ISO: string | null = UPDATES[0]?.data ?? null;

/** Rótulo pronto para o selo "Atualizado em …". */
export const SITE_LAST_UPDATED_LABEL: string = LATEST_UPDATE_ISO
  ? formatarData(LATEST_UPDATE_ISO)
  : '—';
