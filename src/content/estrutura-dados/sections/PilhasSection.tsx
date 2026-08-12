import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, ConceptGrid, PanelList, StatStrip } from '../../../components/sections';
import { stackConcepts, stackApplications, stackComplexity } from './blocks';

export default function PilhasSection() {
  const code = `\
class PilhaArray:
    def __init__(self):
        self._dados = []

    def push(self, e):        # O(1)*
        self._dados.append(e)

    def pop(self):            # O(1)
        return self._dados.pop()

    def top(self):            # O(1) - só consulta, não remove
        return self._dados[-1]

    def is_empty(self):
        return len(self._dados) == 0


# Aplicação: verificar parênteses balanceados
def is_matched(expr):
    pares = {')': '(', ']': '[', '}': '{'}
    pilha = PilhaArray()
    for c in expr:
        if c in '([{':
            pilha.push(c)        # abre → empilha
        elif c in ')]}':
            if pilha.is_empty() or pilha.top() != pares[c]:
                return False     # fecha sem par → inválido
            pilha.pop()
    return pilha.is_empty()      # deve estar vazia no fim

print(is_matched("(a + [b * c])"))   # True
print(is_matched("(a + [b * c)"))    # False - par errado
print(is_matched("((a + b)"))        # False - falta fechar`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Pilhas (Stack)"
        subtitle="Princípio LIFO, operações e aplicações práticas"
        colorClass="text-accent"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Conceitos fundamentais</h3>
        <ConceptGrid items={stackConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Complexidade das operações</h3>
        <StatStrip items={stackComplexity} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Implementação e aplicação</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Outras aplicações de pilhas</h3>
        <PanelList items={stackApplications} />
      </div>

      <HighlightBox title="Algoritmo is_matched()">
        <p>
          Para cada caractere da expressão: símbolo abrindo (parêntese, colchete ou chave) → push. Símbolo fechando → se pilha vazia ou top não corresponde ao par → retorna False. No fim, a pilha deve estar vazia para a expressão ser válida.
        </p>
      </HighlightBox>
    </section>
  );
}