import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, ConceptGrid, ComparisonTable } from '../../../components/sections';
import { stringConcepts, listConcepts, strVsListComparison } from './blocks';

export default function StringsListasSection() {
  const code = `\
# ── Strings: IMUTÁVEIS ──────────────────────────
s = "python"
print(s[0])          # 'p'   - índice 0
print(s[-1])         # 'n'   - último
print(s[1:4])        # 'yth' - slice
print(s.upper())     # 'PYTHON'
print(s.split('t'))  # ['py', 'hon']
# s[0] = 'P'        # TypeError! strings não mudam

# ── Listas: MUTÁVEIS ─────────────────────────────
lista = [10, 20, 30]
lista.append(40)     # [10, 20, 30, 40]
lista.insert(0, 5)   # [5, 10, 20, 30, 40]
lista.pop(0)         # remove o 5 → [10, 20, 30, 40]
lista[0] = 99        # [99, 20, 30, 40]

# ── Aliasing vs Clonar ───────────────────────────
a = [1, 2, 3]
b = a          # aliasing: b e a são o MESMO objeto
c = a[:]       # clone:    c é uma cópia independente

b.append(4)
print(a)       # [1, 2, 3, 4] - afetado pelo alias!
print(b)       # [1, 2, 3, 4]
print(c)       # [1, 2, 3]    - clone não foi afetado
print(a is b)  # True  - mesmo objeto
print(a is c)  # False - objetos diferentes`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Strings e Listas"
        subtitle="Sequências imutáveis e mutáveis, métodos, aliasing e clonagem"
        colorClass="text-accent2"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Propriedades de Strings</h3>
        <ConceptGrid items={stringConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Propriedades de Listas</h3>
        <ConceptGrid items={listConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">String vs Lista</h3>
        <ComparisonTable rows={strVsListComparison} leftLabel="String" rightLabel="Lista" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Exemplo: aliasing, clone e imutabilidade</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <HighlightBox title="Identidade vs igualdade">
        <p>
          Use <code>a is b</code> para verificar se são o mesmo objeto na memória. Use <code>a == b</code> para verificar se têm o mesmo valor. Para clonar uma lista: <code>b = a[:]</code>.
        </p>
      </HighlightBox>
    </section>
  );
}