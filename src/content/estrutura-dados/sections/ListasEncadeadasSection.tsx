import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, ConceptGrid, PanelList, ComparisonTable } from '../../../components/sections';
import { linkedListConcepts, linkedListOperations, linkedVsArray } from './blocks';

export default function ListasEncadeadasSection() {
  const code = `\
class No:
    def __init__(self, dado):
        self._dados = dado
        self._proximo = None   # aponta para o próximo nó

class ListaNaoOrdenada:
    def __init__(self):
        self._head = None      # lista vazia

    def add(self, e):          # O(1) - insere na cabeça
        novo = No(e)
        novo._proximo = self._head
        self._head = novo

    def is_empty(self):        # O(1)
        return self._head is None

    def size(self):            # O(n) - percorre tudo
        contador = 0
        atual = self._head
        while atual is not None:
            contador += 1
            atual = atual._proximo
        return contador

    def search(self, e):       # O(n)
        atual = self._head
        while atual is not None:
            if atual._dados == e:
                return True
            atual = atual._proximo
        return False

    def remove(self, e):       # O(n)
        anterior = None
        atual = self._head
        while atual is not None:
            if atual._dados == e:
                if anterior is None:         # removendo head
                    self._head = atual._proximo
                else:
                    anterior._proximo = atual._proximo
                return
            anterior = atual
            atual = atual._proximo`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Listas Encadeadas"
        subtitle="Nós ligados por referências - estrutura dinâmica sem deslocamentos"
        colorClass="text-accent4"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Conceitos fundamentais</h3>
        <ConceptGrid items={linkedListConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Operações e complexidades</h3>
        <PanelList items={linkedListOperations} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Implementação completa</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Lista Encadeada vs Array</h3>
        <ComparisonTable rows={linkedVsArray} leftLabel="Lista Encadeada" rightLabel="Array (lista Python)" />
      </div>

      <HighlightBox title="Remoção do head" accent="var(--color-accent4)">
        <p>
          Para remover um nó, é necessário manter referência ao nó anterior para poder fazer <code>anterior._proximo = nó._proximo</code>. Caso especial: remover o head - apenas atualize head para o próximo nó.
        </p>
      </HighlightBox>
    </section>
  );
}