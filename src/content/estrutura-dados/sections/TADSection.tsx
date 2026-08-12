import CodeBlock from '../../../components/ui/CodeBlock';
import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, ConceptGrid, PanelList } from '../../../components/sections';
import { tadConcepts, tadObjectives, tadHierarchy } from './blocks';

export default function TADSection() {
  const code = `\
# TAD define O QUÊ - a interface abstrata
# Implementação define COMO - a classe concreta

class Data:
    """TAD Data: operações dia(), mes(), ano(), eh_valido()"""
    def __init__(self, d, m, a):
        self._dia = d    # dados privados (implementação)
        self._mes = m
        self._ano = a

    # Interface pública (O QUÊ o usuário pode fazer)
    def dia(self):
        return self._dia

    def mes(self):
        return self._mes

    def ano(self):
        return self._ano

    def eh_valido(self):
        return 1 <= self._mes <= 12 and 1 <= self._dia <= 31

# Quem usa o TAD não precisa saber COMO está implementado
d = Data(15, 6, 2025)
print(d.dia())        # 15
print(d.eh_valido())  # True
# d._dia = 99  ← possível, mas viola o contrato do TAD`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Tipos Abstratos de Dados (TAD)"
        subtitle="Separação entre interface e implementação - o conceito central de ED"
        colorClass="text-accent4"
      />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Conceitos fundamentais</h3>
        <ConceptGrid items={tadConcepts} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Hierarquia TAD → Implementação</h3>
        <FlowDiagram items={tadHierarchy} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Objetivos e características</h3>
        <PanelList items={tadObjectives} />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Exemplo: TAD Data em Python</h3>
        <CodeBlock code={code} language="python" />
      </div>

      <HighlightBox title="Interface vs Implementação">
        <p>
          O TAD define <strong>O QUÊ</strong> pode ser feito (interface pública). A implementação define <strong>COMO</strong> fazer (estrutura de armazenamento e algoritmos). Quem usa o TAD não precisa saber como está implementado.
        </p>
      </HighlightBox>
    </section>
  );
}