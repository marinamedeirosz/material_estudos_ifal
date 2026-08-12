import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, ConceptGrid, PanelList } from '../../../components/sections';
import { pythonTypes, pythonOperators, pythonControlFlow, pythonFunctionsConcepts } from './blocks';

export default function PythonSection() {
  const code = `\
# Tipos primitivos e tipagem dinâmica
idade = 25           # int
altura = 1.75        # float
ativo = True         # bool
nome = "Ana"         # str

# Operadores especiais
print(7 // 2)        # 3   - divisão inteira
print(7 % 2)         # 1   - resto
print(2 ** 10)       # 1024 - potência

# Estruturas de controle
for i in range(1, 6):
    if i % 2 == 0:
        print(i, "é par")
    else:
        print(i, "é ímpar")

# Funções - input() SEMPRE retorna str!
def dobrar(n):
    return n * 2

x = int(input("Digite um número: "))
print(dobrar(x))`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Python Básico"
        subtitle="Tipos primitivos, operadores, estruturas de controle e funções"
        colorClass="text-accent"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Tipos primitivos em Python</h3>
        <ConceptGrid items={pythonTypes} columns="md:grid-cols-2 lg:grid-cols-4" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Operadores especiais</h3>
        <PanelList items={pythonOperators} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Estruturas de controle</h3>
        <PanelList items={pythonControlFlow} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Funções e conceitos-chave</h3>
        <ConceptGrid items={pythonFunctionsConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Exemplo prático</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <HighlightBox title="Atenção na prova" accent="var(--color-accent3)">
        <p>
          <code>input()</code> sempre retorna str. Sem conversão explícita, <code>2 + "3"</code> gera TypeError. Use <code>int(input())</code> ou <code>float(input())</code> para ler números.
        </p>
      </HighlightBox>
    </section>
  );
}