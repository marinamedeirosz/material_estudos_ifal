import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, ConceptGrid, PanelList, ComparisonTable } from '../../../components/sections';
import {
  codeBst,
  codeSucessor,
  codeHeap,
} from './snippets';
import { bstMapOperations, bstDeleteCases, bstComplexity, heapConcepts, heapOperations } from './blocks';

export default function ArvoresBuscaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Árvores de Busca e Heap"
        subtitle="BST como TAD Map, os três casos da remoção e fila de prioridade com binary heap"
        colorClass="text-accent5"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">A BST implementa o TAD Map</h3>
        <PanelList items={bstMapOperations} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Implementação da BST</h3>
        <CodeBlock code={codeBst} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Remover um nó: os três casos</h3>
        <ConceptGrid items={bstDeleteCases} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Encontrando o sucessor</h3>
        <CodeBlock code={codeSucessor} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Complexidade das operações na BST</h3>
        <ComparisonTable rows={bstComplexity} leftLabel="Operação" rightLabel="Casos balanceada / degenerada" />
      </div>

      <HighlightBox title="BST degenerada" accent="var(--color-accent2)">
        <p>
          Inserir elementos em ordem crescente cria uma árvore "em linha" — a altura h passa a ser n e a busca degrada
          para O(n). Manter a árvore balanceada é o que preserva h ≈ log n.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Fila de prioridade e binary heap</h3>
        <ConceptGrid items={heapConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">As operações do heap</h3>
        <PanelList items={heapOperations} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Implementação do binary heap</h3>
        <CodeBlock code={codeHeap} language="python" />
      </div>

      <HighlightBox title="Duas propriedades, sempre nessa ordem">
        <p>
          Toda operação do heap primeiro faz o movimento que <strong>preserva a estrutura</strong> (anexar ao fim, ou
          mover o último item para a raiz) e só depois faz as trocas que <strong>restauram a ordem</strong> (percUp ou
          percDown). Como a árvore é balanceada, essas trocas percorrem no máximo log n níveis.
        </p>
      </HighlightBox>
    </section>
  );
}
