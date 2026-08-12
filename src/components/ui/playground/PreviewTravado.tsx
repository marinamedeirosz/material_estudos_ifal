/**
 * Aviso exibido quando a execução foi interrompida por não terminar a tempo.
 * Numa turma de 1º período o motivo quase sempre é um laço sem fim, então o
 * texto aponta direto para a condição do `while`/`for`.
 */
export default function PreviewTravado() {
  return (
    <div className="h-64 md:h-80 flex items-center justify-center p-6 bg-card">
      <p className="text-center text-sm text-text-muted max-w-xs">
        <span className="block font-bold text-accent2 mb-1">Execução interrompida</span>
        O código não terminou em 3 segundos. O caso mais comum é um laço que nunca acaba — confira se
        a condição do <code>while</code> ou do <code>for</code> chega a ficar falsa.
      </p>
    </div>
  );
}
