/**
 * Tabela-verdade com número livre de colunas.
 *
 * O `ComparisonTable` compartilhado é fixo em três colunas (critério + dois lados),
 * o que não serve aqui: uma tabela-verdade tem uma coluna por proposição simples
 * mais uma por resultado parcial — a comparação de De Morgan usa sete. Enquanto não
 * existir um componente de notação matemática na plataforma, esta tabela fica no
 * escopo da matéria, reaproveitando as mesmas classes visuais do design system.
 */

/** Valor lógico exibido na célula. O professor usa V/F, não T/F. */
export type TruthValue = 'V' | 'F';

export interface TruthTable {
  /** Legenda exibida abaixo da tabela, explicando o que ela demonstra. */
  caption: string;
  /** Cabeçalhos das colunas, na ordem de exibição. */
  headers: string[];
  /** Linhas de valores lógicos; cada linha precisa ter o mesmo tamanho de `headers`. */
  rows: TruthValue[][];
  /** Índices 1-based das colunas de resultado, destacadas com fundo de acento. */
  highlightColumns?: number[];
}

/**
 * Verde para verdadeiro, vermelho para falso. No design system, `accent5` é o verde
 * e `accent2` é o vermelho — conferido em `src/index.css`, nos três temas.
 */
const VALUE_CLASS: Record<TruthValue, string> = {
  V: 'text-accent5',
  F: 'text-accent2',
};

export default function TruthTable({ caption, headers, rows, highlightColumns = [] }: TruthTable) {
  // `highlightColumns` é 1-based (a "coluna 4" da tabela), então converte-se aqui.
  const isHighlighted = (index: number) => highlightColumns.includes(index + 1);

  return (
    <figure className="study-surface overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            {headers.map((header, index) => (
              <th
                key={header}
                scope="col"
                // Sem `uppercase`: as proposições são p e q minúsculos por convenção.
                className={`py-3 px-4 text-center font-semibold tracking-wider text-xs whitespace-nowrap ${
                  isHighlighted(index) ? 'bg-accent/10 text-accent' : 'text-text-muted'
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-border/50 last:border-0">
              {row.map((value, columnIndex) => (
                <td
                  key={columnIndex}
                  className={`py-2.5 px-4 text-center font-bold tabular-nums ${VALUE_CLASS[value]} ${
                    isHighlighted(columnIndex) ? 'bg-accent/8' : ''
                  }`}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="text-text-muted text-xs leading-relaxed px-4 py-3 border-t border-border">
        {caption}
      </figcaption>
    </figure>
  );
}
