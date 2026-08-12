import CodeBlock from '../../../components/ui/CodeBlock';
import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, ConceptGrid, PanelList } from '../../../components/sections';
import { recursionConcepts, recursionExamples, recursionFlow } from './blocks';

export default function RecursividadeSection() {
  const code = `\
# ── Dois ingredientes obrigatórios ───────────────
# 1. Caso base (condição de parada)
# 2. Redução ao caso base (problema fica menor)

def contagem(n):
    if n == 0:           # caso base
        return
    print(n)
    contagem(n - 1)      # redução: n → n-1

# contagem(3) imprime: 3  2  1

def soma_ateh(n):
    if n == 0:           # caso base
        return 0
    return n + soma_ateh(n - 1)   # redução

print(soma_ateh(5))   # 15
# Pilha de chamadas:
# soma_ateh(5) → 5 + soma_ateh(4)
#   soma_ateh(4) → 4 + soma_ateh(3)
#     soma_ateh(3) → 3 + soma_ateh(2)
#       soma_ateh(2) → 2 + soma_ateh(1)
#         soma_ateh(1) → 1 + soma_ateh(0)
#           soma_ateh(0) → 0  ← caso base!
# ← desempilha retornando: 1, 3, 6, 10, 15

def fib(n):
    if n <= 1:           # caso base duplo
        return n
    return fib(n - 1) + fib(n - 2)   # O(2^n) sem memo!`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Recursividade"
        subtitle="Caso base, redução ao caso base e pilha de chamadas"
        colorClass="text-accent3"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Conceitos fundamentais</h3>
        <ConceptGrid items={recursionConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Como a recursão funciona</h3>
        <FlowDiagram items={recursionFlow} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Exemplos clássicos em código</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Mais exemplos</h3>
        <PanelList items={recursionExamples} />
      </div>

      <HighlightBox title="Cuidado com recursão infinita" accent="var(--color-accent2)">
        <p>
          Toda função recursiva precisa de: (1) caso base explícito e (2) garantia de que cada chamada aproxima o problema do caso base. Sem isso → recursão infinita → StackOverflow.
        </p>
      </HighlightBox>
    </section>
  );
}