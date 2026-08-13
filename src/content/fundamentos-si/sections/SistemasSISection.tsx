import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  PanelList,
  TheoryBlock,
  ComparisonTable,
} from '../../../components/sections';
import { cbisComponents, businessSystemTypes, misVsDssRows, specializedSystems, systemsDevelopmentSteps } from './blocks';

export default function SistemasSISection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Sistemas, CBIS e Tipos de SI"
        subtitle="O que é um sistema, quais componentes formam um SI baseado em computador e quais tipos existem nas empresas"
        colorClass="text-accent"
        badge="1ª Prova"
      />

      <TheoryBlock title="Sistema e Sistema de Informação">
        <p>
          <strong>Sistema</strong> é um conjunto de elementos que interagem para realizar objetivos. Todo sistema tem
          quatro componentes: <strong>entrada</strong> (captar e reunir os dados brutos),{' '}
          <strong>processamento</strong> (converter ou transformar dados em saídas úteis), <strong>saída</strong>{' '}
          (produzir informação útil, normalmente em documentos e relatórios) e{' '}
          <strong>realimentação (feedback)</strong> — informação originada no próprio sistema e usada para fazer
          mudanças na entrada ou no processamento.
        </p>
        <p>
          O feedback é o que fecha o ciclo e permite a correção: sem ele, o sistema produz, mas não aprende. Um{' '}
          <strong>Sistema de Informação (SI)</strong> é o conjunto de componentes inter-relacionados que coleta,
          manipula, armazena e dissemina dados e informações, fornecendo esse mecanismo de realimentação para atender a
          um objetivo.
        </p>
      </TheoryBlock>

      <Subsection title="O ciclo de um sistema" accentClass="text-accent2">
        <FlowDiagram items={['Entrada', 'Processamento', 'Saída', 'Realimentação (volta à entrada)']} />
      </Subsection>

      <HighlightBox title="Eficiência não é eficácia" accent="var(--color-accent4)">
        <p>
          <strong>Eficiência</strong> é a medida do que é produzido dividido pelo que é consumido — fazer com menos
          recurso. <strong>Eficácia</strong> é a medida do grau em que o sistema alcança suas metas — fazer a coisa
          certa. São independentes: dá para ser <em>muito eficiente fabricando o produto errado</em>. O{' '}
          <strong>padrão de desempenho</strong> é o objetivo específico contra o qual o sistema é medido, como "produzir
          no máximo 1% de peças com defeito".
        </p>
      </HighlightBox>

      <Subsection title="Os seis componentes do CBIS" accentClass="text-accent3">
        <p className="reading-measure text-text-muted text-sm leading-relaxed mb-3">
          Um <strong>CBIS (Sistema de Informação Baseado em Computador)</strong> é o conjunto único desses seis
          componentes, configurados para coletar, manipular, armazenar e processar os dados em informação. Juntos, eles
          formam a <strong>infraestrutura de tecnologia</strong> — os recursos compartilhados que servem de base a cada
          CBIS da organização.
        </p>
        <ConceptGrid items={cbisComponents} columns="md:grid-cols-3" />
      </Subsection>

      <Subsection title="Tipos de SI nas empresas" accentClass="text-accent5">
        <PanelList items={businessSystemTypes} columns="" />
      </Subsection>

      <Subsection title="MIS x DSS — a distinção mais cobrada" accentClass="text-accent">
        <ComparisonTable rows={misVsDssRows} leftLabel="MIS / SIG" rightLabel="DSS" criterionLabel="Critério" />
      </Subsection>

      <Subsection title="Sistemas especializados" accentClass="text-accent2">
        <PanelList items={specializedSystems} columns="md:grid-cols-2" />
      </Subsection>

      <Subsection title="Desenvolvimento de sistemas" accentClass="text-accent3">
        <p className="reading-measure text-text-muted text-sm leading-relaxed mb-3">
          Desenvolvimento de sistemas é a atividade de criar ou modificar sistemas empresariais existentes. O material
          da disciplina o divide em cinco etapas — o esqueleto que a disciplina de Processos de Desenvolvimento de
          Software detalha mais adiante no curso.
        </p>
        <FlowDiagram items={systemsDevelopmentSteps} />
      </Subsection>

      <HighlightBox title="Fonte" accent="var(--color-accent5)">
        <p>
          Resumo do capítulo 1 de <em>Princípios de Sistemas de Informação</em>, de Stair &amp; Reynolds (tradução da
          11ª edição norte-americana), conforme os slides adotados pela Profa. Wladia Bessa em FNSI 2022.1 — BSI/IFAL.
        </p>
      </HighlightBox>
    </section>
  );
}
