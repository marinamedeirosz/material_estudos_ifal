import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, ComparisonTable } from '../../../components/sections';
import { discreteOverview, discreteVsContinuous, topicApplications, ementaTopics } from './blocks';

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Lógica Matemática e Matemática Discreta"
        subtitle="A linguagem formal que sustenta a computação: conjuntos, relações, contagem e raciocínio lógico"
        colorClass="text-accent"
      />

      <HighlightBox title="Se você está no 1º período, comece por aqui">
        <p>
          Esta é a primeira matéria de matemática do curso e uma das que mais reprovam — não porque seja difícil em
          si, mas porque é <strong>abstrata</strong> e chega antes de o aluno ter repertório. O antídoto é entender
          desde já <em>para que serve</em>: quase tudo aqui reaparece mais à frente. Conjuntos e relações voltam em
          Banco de Dados; contagem vira análise de algoritmos; lógica proposicional é a base das condicionais que você
          vai escrever em Algoritmos e, depois, em Estrutura de Dados.
        </p>
      </HighlightBox>

      <Subsection title="Discreto e contínuo: os dois mundos" accentClass="text-accent2">
        <ConceptGrid items={discreteOverview} columns="md:grid-cols-3" />
      </Subsection>

      <Subsection title="O mesmo objeto nos dois mundos" accentClass="text-accent3">
        <ComparisonTable
          rows={discreteVsContinuous}
          leftLabel="No mundo real — contínuo"
          rightLabel="Na computação — discreto"
          criterionLabel="Exemplo"
        />
      </Subsection>

      <Subsection title="Sequência das aulas" accentClass="text-accent4">
        <FlowDiagram
          items={[
            'Introdução (discreto vs contínuo)',
            'Teoria dos Conjuntos',
            'Relações e Funções',
            'Análise Combinatória',
            'Sequências e Somatórios',
            'Fundamentos da Lógica Proposicional',
          ]}
        />
      </Subsection>

      <Subsection title="Onde cada tópico é usado em computação" accentClass="text-accent5">
        <PanelList items={topicApplications} />
      </Subsection>

      <Subsection title="Ementa oficial da disciplina" accentClass="text-accent2">
        <PanelList items={ementaTopics} columns="" />
      </Subsection>

      <HighlightBox title="Duas lacunas conhecidas deste guia" accent="var(--color-accent2)">
        <p>
          A ementa do PPC inclui <strong>Teoria dos Números, Números Inteiros e Primos</strong> e{' '}
          <strong>Prova e Indução Matemática</strong>, mas a turma de 2023.1 não recebeu slides desses assuntos — o
          professor os indicou apenas por links para material externo (UFPR, UFMG e UNIVASF). Como este guia se baseia
          no material real da turma, esses dois tópicos ainda não têm seção própria. Estude-os pela bibliografia da
          disciplina.
        </p>
      </HighlightBox>

      <HighlightBox title="Fonte do conteúdo" accent="var(--color-accent5)">
        <p>
          Todo o material desta matéria foi resumido e reorganizado a partir das aulas e da atividade avaliativa do{' '}
          <strong>Prof. Dr. André Luiz de Carvalho · Matemática Discreta · BSI/IFAL · 2023.1</strong>. A aula de
          Sequências e Somas usa material do IFSC reaproveitado pelo professor. A bibliografia básica indicada no plano
          de ensino inclui <em>Noções Básicas de Matemática</em> (Favaro e Kmeteuk Filho), <em>Iniciação à Lógica
          Matemática</em> (Borba e Penteado) e <em>Introdução à Lógica da Matemática</em> (Bespo); entre as
          complementares está <em>Discrete Mathematics and Its Applications</em>, de Rosen.
        </p>
      </HighlightBox>
    </section>
  );
}
