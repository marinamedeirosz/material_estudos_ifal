import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, PanelList, TheoryBlock, ColoredPanelList } from '../../../components/sections';
import { orgStructures, changeModelSteps, fiveForces, performanceMeasures } from './blocks';

export default function OrganizacoesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="SI nas Organizações e Vantagem Competitiva"
        subtitle="Como a estrutura, a cultura e a estratégia da empresa determinam que sistemas ela implanta"
        colorClass="text-accent"
        badge="1ª Prova"
      />

      <TheoryBlock title="A organização também é um sistema">
        <p>
          <strong>Organização</strong> é uma coleção formal de pessoas e outros recursos estabelecida para alcançar um
          conjunto de metas. Ela própria é um sistema, com entradas, mecanismo de transformação e saídas, consumindo
          continuamente dinheiro, pessoas, materiais, máquinas, dados, informações e decisões.
        </p>
        <p>
          Dois processos de valor agregado organizam essa transformação: a{' '}
          <strong>gestão da cadeia de suprimentos (GCS)</strong>, que determina quais suprimentos são necessários, em
          que quantidade, como serão processados em bens e serviços e como o envio será agendado, monitorado e
          controlado; e o <strong>CRM (gestão de relacionamento com o cliente)</strong>, que gerencia todos os aspectos
          dos encontros com o cliente — marketing, propaganda, vendas, atendimento e retenção.
        </p>
      </TheoryBlock>

      <Subsection title="Estruturas organizacionais" accentClass="text-accent2">
        <PanelList items={orgStructures} columns="md:grid-cols-2" />
      </Subsection>

      <Subsection title="Cultura e mudança organizacional" accentClass="text-accent3">
        <p className="reading-measure text-text-muted text-sm leading-relaxed mb-3">
          <strong>Cultura organizacional</strong> é o conjunto dos principais entendimentos e suposições compartilhados
          por um grupo. Implantar um novo sistema quase sempre exige mudar essa cultura, e o material apresenta o
          modelo de mudança em três fases:
        </p>
        <FlowDiagram items={changeModelSteps} />
      </Subsection>

      <HighlightBox title="Reengenharia x melhoria contínua" accent="var(--color-accent4)">
        <p>
          <strong>Reengenharia</strong> é a revisão <em>radical</em> dos processos comerciais, das estruturas
          organizacionais, dos sistemas de informação e dos valores da organização, para alcançar um novo patamar de
          resultados — é ruptura. <strong>Melhoria contínua</strong> busca constantemente maneiras de aperfeiçoar os
          processos existentes e agregar valor — é incremento. A diferença está no grau e na ruptura, não no objetivo.
        </p>
      </HighlightBox>

      <TheoryBlock title="Aceitação da tecnologia">
        <p>
          O <strong>TAM (modelo de aceitação de tecnologia)</strong> especifica os fatores que podem levar a melhores
          atitudes sobre um sistema de informação. Duas medidas complementam o quadro:{' '}
          <strong>difusão da tecnologia</strong> mede quão amplamente ela está espalhada por toda a organização, e{' '}
          <strong>infusão da tecnologia</strong> mede até que ponto ela permeia um departamento específico. Uma
          tecnologia pode estar muito difundida e pouco infundida — presente em todo lugar, mas usada superficialmente.
        </p>
      </TheoryBlock>

      <Subsection title="Vantagem competitiva e as cinco forças" accentClass="text-accent5">
        <p className="reading-measure text-text-muted text-sm leading-relaxed mb-3">
          <strong>Vantagem competitiva</strong> é o benefício significativo e, idealmente, de longo prazo de uma
          empresa sobre seus concorrentes. Cinco forças levam as empresas a persegui-la:
        </p>
        <ColoredPanelList items={fiveForces} columns="md:grid-cols-2" />
      </Subsection>

      <HighlightBox title="Estratégias para obter vantagem competitiva" accent="var(--color-accent2)">
        <p>
          As estratégias citadas no material são: <strong>liderança em custo</strong>,{' '}
          <strong>diferenciação</strong>, <strong>estratégia de nicho</strong>,{' '}
          <strong>alterar a estrutura do setor</strong> (inclusive formando uma aliança estratégica — acordo entre duas
          ou mais empresas para produção ou distribuição conjunta), <strong>criar novos produtos e serviços</strong>,{' '}
          aperfeiçoar linhas existentes, crescimento nas vendas, ser o primeiro no mercado, personalizar produtos,
          contratar as melhores pessoas e inovação.
        </p>
      </HighlightBox>

      <Subsection title="Como medir o desempenho de um SI" accentClass="text-accent">
        <PanelList items={performanceMeasures} columns="md:grid-cols-2" />
      </Subsection>

      <HighlightBox title="Carreiras em Sistemas de Informação" accent="var(--color-accent3)">
        <p>
          Além das habilidades técnicas, os profissionais de SI precisam de <strong>comunicação escrita e oral</strong>,{' '}
          <strong>compreensão de como a organização opera</strong> e <strong>habilidade de trabalhar em grupo</strong>.
          Os papéis se dividem em operações, desenvolvimento de sistemas e suporte. Cargos típicos incluem o{' '}
          <strong>CIO (diretor de informática)</strong>, o CTO, o gestor de SI e o administrador de LAN. A{' '}
          <strong>certificação</strong> é o processo de testar habilidades e conhecimentos, com endosso de uma
          autoridade certificadora de que o indivíduo é capaz de desempenhar determinadas tarefas.
        </p>
      </HighlightBox>

      <HighlightBox title="Fonte" accent="var(--color-accent5)">
        <p>
          Resumo do capítulo 2 de <em>Princípios de Sistemas de Informação</em>, de Stair &amp; Reynolds (tradução da
          11ª edição norte-americana), conforme os slides adotados pela Profa. Wladia Bessa em FNSI 2022.1 — BSI/IFAL.
        </p>
      </HighlightBox>
    </section>
  );
}
