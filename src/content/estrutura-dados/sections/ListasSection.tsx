import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, PanelList, StatStrip } from '../../../components/sections';
import { listInterface, listComplexity } from './blocks';

export default function ListasSection() {
  const code = `\
# A list do Python já é um array dinâmico (TAD Lista)

lista = []

# adicionar(e)      → O(1) amortizado
lista.append(10)
lista.append(20)
lista.append(30)

# adicionar_em(pos, e) → O(n) - desloca elementos
lista.insert(0, 5)    # [5, 10, 20, 30]

# recuperar(pos)    → O(1) - acesso direto por índice
print(lista[2])       # 20

# remover(pos)      → O(n) - desloca elementos
lista.pop(0)          # remove o 5

# pertence(e)       → O(n) - busca sequencial
print(10 in lista)    # True

# tamanho()         → O(1) se guardado como atributo
print(len(lista))     # 3

# O array dobra de tamanho quando necessário (crescimento exponencial)
# Isso garante que append() seja O(1) AMORTIZADO`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Listas Sequenciais"
        subtitle="Interface de TAD lista e análise de complexidade das operações"
        colorClass="text-accent5"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Interface da Lista como TAD</h3>
        <PanelList items={listInterface} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Complexidade das operações</h3>
        <StatStrip items={listComplexity} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Exemplo com complexidades comentadas</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <HighlightBox title="O que significa O(1) amortizado?">
        <p>
          O asterisco em O(1)* indica <strong>amortizado</strong>: na maior parte das vezes é O(1), mas eventualmente o array dobra de tamanho (O(n) pontual). A média ao longo de n operações ainda é O(1).
        </p>
      </HighlightBox>
    </section>
  );
}