import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, ConceptGrid, PanelList, ComparisonTable } from '../../../components/sections';
import { queueConcepts, queueCircular, queueVsStack } from './blocks';

export default function FilasSection() {
  const code = `\
class FilaArray:
    def __init__(self, capacidade=10):
        self._dados = [None] * capacidade
        self._ini = 0      # ponteiro do início
        self._fim = 0      # ponteiro do fim
        self._tam = 0
        self._N = capacidade

    def enqueue(self, e):
        if self._tam == self._N:
            raise IndexError("fila cheia")
        self._dados[self._fim] = e
        self._fim = (self._fim + 1) % self._N   # avança circular
        self._tam += 1

    def dequeue(self):      # O(1) - sem deslocar elementos!
        if self.is_empty():
            raise IndexError("fila vazia")
        val = self._dados[self._ini]
        self._dados[self._ini] = None
        self._ini = (self._ini + 1) % self._N   # avança circular
        self._tam -= 1
        return val

    def first(self):        # O(1)
        if self.is_empty():
            raise IndexError("fila vazia")
        return self._dados[self._ini]

    def is_empty(self):
        return self._tam == 0

# sem array circular: dequeue precisaria deslocar n elementos → O(n)
# com array circular: ini avança com % N → O(1)`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Filas (Queue)"
        subtitle="Princípio FIFO, array circular e aplicações"
        colorClass="text-accent2"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Conceitos fundamentais</h3>
        <ConceptGrid items={queueConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Por que usar array circular?</h3>
        <PanelList items={queueCircular} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Implementação com array circular</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Pilha vs Fila</h3>
        <ComparisonTable rows={queueVsStack} leftLabel="Fila (FIFO)" rightLabel="Pilha (LIFO)" />
      </div>

      <HighlightBox title="Flood Fill (coloração de regiões)" accent="var(--color-accent3)">
        <p>
          Algoritmo usando fila: insere pixel inicial, processa pixel, enfileira vizinhos não coloridos da mesma cor. Continua até fila esvaziar. Similar ao BFS em grafos.
        </p>
      </HighlightBox>
    </section>
  );
}