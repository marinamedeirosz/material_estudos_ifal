import { useId, useRef, useState } from 'react';
import type { ChangeEvent, KeyboardEvent } from 'react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  /** Rótulo associado ao campo — obrigatório, não é placeholder. */
  label: string;
  /** Somente leitura: usado no HTML de apoio dos exemplos de CSS. */
  readOnly?: boolean;
}

const MONO = "'JetBrains Mono', 'Fira Code', Consolas, 'Courier New', monospace";
const INDENT = '  ';

/**
 * Editor mínimo: um `<textarea>` monoespaçado. Não usamos CodeMirror nem Monaco
 * de propósito — qualquer um dos dois pesaria mais que o site inteiro.
 */
export default function CodeEditor({ value, onChange, label, readOnly = false }: CodeEditorProps) {
  const id = useId();
  const areaRef = useRef<HTMLTextAreaElement>(null);
  // Quando falso, o Tab volta a navegar entre campos (saída por teclado).
  const [tabIndenta, setTabIndenta] = useState(true);

  function handleKeyDown(evento: KeyboardEvent<HTMLTextAreaElement>) {
    // Escape libera o Tab: sem isso, quem navega por teclado ficaria preso no
    // campo, já que o Tab estaria sempre inserindo espaços.
    if (evento.key === 'Escape') {
      setTabIndenta(false);
      return;
    }
    // Qualquer outra tecla devolve o comportamento de indentar.
    if (evento.key !== 'Tab') {
      if (!tabIndenta) setTabIndenta(true);
      return;
    }
    if (!tabIndenta || readOnly) return;

    evento.preventDefault();
    const area = evento.currentTarget;
    const { selectionStart, selectionEnd } = area;
    const novo = value.slice(0, selectionStart) + INDENT + value.slice(selectionEnd);
    onChange(novo);
    // Reposiciona o cursor depois que o React aplica o novo valor.
    requestAnimationFrame(() => {
      if (!areaRef.current) return;
      areaRef.current.selectionStart = selectionStart + INDENT.length;
      areaRef.current.selectionEnd = selectionStart + INDENT.length;
    });
  }

  function handleChange(evento: ChangeEvent<HTMLTextAreaElement>) {
    onChange(evento.target.value);
  }

  return (
    <div className="flex flex-col h-full">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <textarea
        id={id}
        ref={areaRef}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        readOnly={readOnly}
        spellCheck={false}
        autoCapitalize="off"
        autoCorrect="off"
        wrap="off"
        aria-label={label}
        aria-readonly={readOnly}
        className={`w-full h-64 md:h-80 p-4 text-xs md:text-sm leading-relaxed resize-y
          border-0 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset
          ${readOnly ? 'text-text-muted' : 'text-text'}`}
        style={{ background: 'var(--color-bg)', fontFamily: MONO, tabSize: 2 }}
      />
      <p className="px-3 py-1.5 text-[11px] text-text-muted border-t border-border bg-card">
        {readOnly
          ? 'Somente leitura — este é o HTML de apoio do exemplo.'
          : tabIndenta
            ? 'Tab indenta. Para sair do campo pelo teclado, pressione Esc e depois Tab.'
            : 'Tab agora sai do campo. Qualquer outra tecla volta a indentar.'}
      </p>
    </div>
  );
}
