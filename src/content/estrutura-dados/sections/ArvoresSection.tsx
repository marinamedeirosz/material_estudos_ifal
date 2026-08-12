import CodeBlock from '../../../components/ui/CodeBlock';
import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, ConceptGrid, PanelList } from '../../../components/sections';
import {
  codeRepresentacoes,
  codeTravessias,
} from './snippets';
import {
  treeConcepts,
  treeVocabulary,
  treeRepresentations,
  treeTraversals,
  parseTreeRules,
  parseTreeConcepts,
} from './blocks';

export default function ArvoresSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Árvores — Conceitos e Representações"
        subtitle="Vocabulário, lista de listas, nós e referências, travessias e árvore de análise"
        colorClass="text-accent3"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Conceitos fundamentais</h3>
        <ConceptGrid items={treeConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Vocabulário da aula</h3>
        <PanelList items={treeVocabulary} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Duas formas de representar</h3>
        <ConceptGrid items={treeRepresentations} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">As duas representações em código</h3>
        <CodeBlock code={codeRepresentacoes} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Travessias de árvore binária</h3>
        <PanelList items={treeTraversals} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">As três travessias em código</h3>
        <CodeBlock code={codeTravessias} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Árvore de análise (parse tree)</h3>
        <PanelList items={parseTreeConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Regras para construir a árvore de análise</h3>
        <FlowDiagram items={parseTreeRules} />
      </div>

      <HighlightBox title="Onde a pilha reaparece" accent="var(--color-accent5)">
        <p>
          Construir a parse tree de <code>(3+(4*5))</code> exige voltar ao nó pai, mas a interface da árvore só oferece{' '}
          <code>getLeftChild</code> e <code>getRightChild</code>. A solução da aula é empilhar o nó atual antes de descer
          e desempilhar ao encontrar <code>)</code> — a mesma pilha estudada na AV1.
        </p>
      </HighlightBox>
    </section>
  );
}
