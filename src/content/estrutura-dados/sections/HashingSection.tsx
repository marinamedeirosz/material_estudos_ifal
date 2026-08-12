import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, ConceptGrid, PanelList, ComparisonTable } from '../../../components/sections';
import { hashConcepts, hashFunctions, collisionMethods } from './blocks';

export default function HashingSection() {
  const code = `\
# ── Funções hash ──────────────────────────────────
def hash_modulo(item, tamanho):
    return item % tamanho          # simples e eficiente

def hash_string(s, tamanho):
    total = 0
    for i, c in enumerate(s):
        total += ord(c) * (i + 1)  # pondera pela posição
    return total % tamanho

tabela = [None] * 11
slot = hash_modulo(44, 11)   # 44 % 11 = 0
tabela[slot] = 44

# ── Colisão: linear probing ───────────────────────
# rehash(pos) = (pos + 1) % tamanho_da_tabela
def rehash(pos, tamanho):
    return (pos + 1) % tamanho

def inserir(tabela, item):
    slot = item % len(tabela)
    while tabela[slot] is not None:
        slot = rehash(slot, len(tabela))   # tenta o próximo
    tabela[slot] = item

# Exemplo da aula: h(item) = item % 11
# itens 54, 26, 93, 17, 77 e 31 ocupam 6 dos 11 slots
#  slot: 0    1     2     3     4   5   6   7     8     9   10
#        77  None  None  None   26  93  17  None  None  31  54
# FC = 6 / 11 ≈ 0,55

# ── Python dict é uma tabela hash otimizada ───────
dicionario = {}
dicionario['nome'] = 'Ana'   # put(key, val) → O(1)
print(dicionario['nome'])    # get(key)       → O(1)
print('nome' in dicionario)  # in             → O(1)
del dicionario['nome']       # del key        → O(1)`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Hashing e Tabelas Hash"
        subtitle="Busca em O(1) - função hash, colisão e resolução"
        colorClass="text-accent"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Conceitos fundamentais</h3>
        <ConceptGrid items={hashConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Funções hash</h3>
        <PanelList items={hashFunctions} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Implementação e TAD Map</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Métodos de resolução de colisão</h3>
        <ComparisonTable rows={collisionMethods} leftLabel="Como funciona" rightLabel="Problema/característica" />
      </div>

      <HighlightBox title="TAD Map (dicionário)">
        <p>
          Operações: <code>put(key, val)</code>, <code>get(key)</code>, <code>del key</code>, <code>len()</code>,{' '}
          <code>in</code>. Na aula, a classe <code>HashTable</code> nasce com <code>_tamanho = 11</code> e mantém duas
          listas paralelas, <code>_slots</code> (chaves) e <code>_valores</code>. Se <code>put</code> encontra a mesma
          chave já ocupando o slot, ele substitui o valor em vez de inserir de novo.
        </p>
      </HighlightBox>

      <HighlightBox title="Hash de strings e anagramas" accent="var(--color-accent3)">
        <p>
          Somar apenas os <code>ord()</code> dos caracteres faz anagramas colidirem sempre: "cat" e "tac" dão 312, logo o
          mesmo slot. Ponderando cada caractere pela posição (99·1 + 97·2 + 116·3 = 641), "cat" e "tac" passam a cair em
          slots diferentes.
        </p>
      </HighlightBox>

      <HighlightBox title="Quando redimensionar" accent="var(--color-accent5)">
        <p>
          No miniprojeto do gerenciador de eventos, o professor pede o redimensionamento quando o fator de carga fica
          <strong> entre 0,7 e 0,8</strong>: aumenta-se a tabela para um número primo próximo ao dobro do tamanho atual e
          todos os elementos precisam passar por rehashing para entrar na nova tabela.
        </p>
      </HighlightBox>
    </section>
  );
}