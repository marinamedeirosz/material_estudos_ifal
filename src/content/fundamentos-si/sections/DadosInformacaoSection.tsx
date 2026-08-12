import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, PanelList, TheoryBlock, ExampleBox } from '../../../components/sections';
import { valuableInfoAttributes } from './blocks';

export default function DadosInformacaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Dados, Informação e Conhecimento"
        subtitle="A distinção que abre a disciplina e sustenta tudo o que vem depois"
        colorClass="text-accent"
        badge="1ª Prova"
      />

      <TheoryBlock title="Três níveis, uma cadeia">
        <p>
          <strong>Dados</strong> são fatos brutos, sem contexto. O número 42, sozinho, não diz nada: pode ser uma
          idade, uma temperatura ou a quantidade de itens num estoque.
        </p>
        <p>
          <strong>Informação</strong> é uma coleção de fatos organizados de modo que tenham valor{' '}
          <em>além dos fatos em si</em>. Ela nasce quando um <strong>processo</strong> — um conjunto de tarefas
          organizadas de forma lógica para obter um resultado definido — age sobre os dados: agrupa, ordena, soma,
          compara, contextualiza.
        </p>
        <p>
          <strong>Conhecimento</strong> é a consciência e a compreensão de um conjunto de informações e de como elas
          podem ser úteis para apoiar uma tarefa ou uma decisão. É o que permite olhar para a informação e saber o que
          fazer com ela.
        </p>
      </TheoryBlock>

      <Subsection title="A transformação, passo a passo" accentClass="text-accent2">
        <FlowDiagram
          items={[
            'Dados — fatos brutos, sem contexto',
            'Processo — tarefas lógicas que organizam os dados',
            'Informação — fatos organizados, com valor agregado',
            'Conhecimento — compreensão que orienta a ação',
          ]}
        />
      </Subsection>

      <ExampleBox title="Exemplo concreto: a papelaria">
        <p>
          Cada venda registrada no caixa — produto, quantidade, horário — é um <strong>dado</strong>. Somar as vendas
          por produto e ordená-las da maior para a menor é o <strong>processo</strong>. A lista "caderno: 120 unidades;
          caneta: 95; borracha: 12" é a <strong>informação</strong>. Perceber que borrachas encalham e que vale reduzir
          a compra do próximo lote é o <strong>conhecimento</strong> em uso.
        </p>
      </ExampleBox>

      <Subsection title="As características da informação valiosa" accentClass="text-accent3">
        <p className="reading-measure text-text-muted text-sm leading-relaxed mb-3">
          Nem toda informação serve. O material da disciplina lista onze atributos que separam a informação útil da
          que atrapalha. Dependendo do tipo de dado necessário, algumas dessas características pesam mais que outras.
        </p>
        <PanelList items={valuableInfoAttributes} columns="md:grid-cols-2" />
      </Subsection>

      <HighlightBox title="Por que isso importa na prática" accent="var(--color-accent4)">
        <p>
          Se a informação de uma organização não for precisa ou completa, as pessoas tomam decisões ruins e a empresa
          perde dinheiro. Repare que <strong>precisão e pontualidade competem entre si</strong>: uma informação
          perfeita que chega depois da decisão não vale nada, e uma informação rápida e errada custa caro. Boa parte do
          trabalho de projetar um sistema de informação é equilibrar esses atributos.
        </p>
      </HighlightBox>

      <HighlightBox title="Fonte" accent="var(--color-accent5)">
        <p>
          Resumo do capítulo 1 de <em>Princípios de Sistemas de Informação</em>, de Stair &amp; Reynolds (tradução da
          11ª edição norte-americana), conforme os slides adotados pela Profa. Wladia Bessa em FNSI 2022.1 — BSI/IFAL.
        </p>
      </HighlightBox>
    </section>
  );
}
