import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, ConceptGrid, ComparisonTable } from '../../../components/sections';
import { dequeConcepts, dequeVsOthers } from './blocks';

export default function DequeSection() {
  const code = `\
from collections import deque

# Operações nas duas extremidades - todas O(1)
d = deque()
d.append(10)         # add_last  → deque([10])
d.appendleft(5)      # add_first → deque([5, 10])
d.append(20)         # add_last  → deque([5, 10, 20])

print(d.pop())       # delete_last  → 20
print(d.popleft())   # delete_first → 5
print(d)             # deque([10])

# rotate(k): desloca k posições para a direita
d2 = deque([1, 2, 3, 4, 5])
d2.rotate(2)
print(d2)            # deque([4, 5, 1, 2, 3])

# Aplicação: verificar palíndromo
def eh_palindromo(palavra):
    letras = deque(palavra)
    while len(letras) > 1:
        if letras.popleft() != letras.pop():
            return False
    return True

print(eh_palindromo("arara"))    # True
print(eh_palindromo("python"))   # False`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Deque (Double-Ended Queue)"
        subtitle="Inserção e remoção nas duas extremidades em O(1)"
        colorClass="text-accent3"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Conceitos fundamentais</h3>
        <ConceptGrid items={dequeConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Deque vs Fila</h3>
        <ComparisonTable rows={dequeVsOthers} leftLabel="Deque" rightLabel="Fila" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">collections.deque na prática</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <HighlightBox title="collections.deque em Python">
        <p>
          <code>append()</code>/<code>pop()</code> para o fim; <code>appendleft()</code>/<code>popleft()</code> para o início. Ambas O(1). <code>rotate(k)</code> desloca k posições. <code>maxlen</code> cria deque de tamanho fixo (circular buffer).
        </p>
      </HighlightBox>
    </section>
  );
}