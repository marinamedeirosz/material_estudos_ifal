import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, TheoryBlock } from '../../../components/sections';
import { dataHierarchy, relationalOperations, dbmsFunctions, biConcepts } from './blocks';

export default function BancoDadosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Banco de Dados e Inteligência de Negócios"
        subtitle="Da hierarquia dos dados ao modelo relacional, ao SGBD e à análise que apoia a decisão"
        colorClass="text-accent"
        badge="2ª Prova · Final"
      />

      <TheoryBlock title="Os três termos que abrem o capítulo">
        <p>
          <strong>Banco de dados</strong> é uma coleção organizada de dados. O{' '}
          <strong>SGBD (ou DBMS)</strong> é o grupo de programas que manipula o banco de dados e fornece a interface
          entre ele, os usuários e os demais programas aplicativos. O <strong>DBA (administrador de banco de dados)</strong>{' '}
          é o profissional de SI que dirige todas as atividades relacionadas ao banco de dados da organização.
        </p>
        <p>
          Repare na distinção: o banco de dados é o <em>conteúdo</em>, o SGBD é o <em>software</em> que o gerencia e o
          DBA é a <em>pessoa</em> responsável. Confundir os três é um erro comum de prova.
        </p>
      </TheoryBlock>

      <Subsection title="A hierarquia dos dados" accentClass="text-accent2">
        <FlowDiagram items={dataHierarchy} />
      </Subsection>

      <HighlightBox title="Entidade, atributo e chave" accent="var(--color-accent4)">
        <p>
          <strong>Entidade</strong> é a pessoa, o lugar ou a coisa sobre a qual os dados são coletados, armazenados e
          mantidos (ex.: um aluno). <strong>Atributo</strong> é uma característica dessa entidade (ex.: o nome).{' '}
          <strong>Item de dados</strong> é o valor específico de um atributo (ex.: "Maria"). <strong>Chave</strong> é o
          campo ou conjunto de campos usado para identificar um registro, e a <strong>chave principal</strong>{' '}
          (primária) é a que identifica o registro de forma única — como a matrícula.
        </p>
      </HighlightBox>

      <TheoryBlock title="Abordagem tradicional x abordagem de banco de dados">
        <p>
          Na <strong>abordagem tradicional</strong>, cada sistema usava arquivos de dados dedicados a ele. O resultado é
          redundância — o mesmo dado repetido em vários arquivos — e inconsistência, quando uma cópia é atualizada e a
          outra não.
        </p>
        <p>
          Na <strong>abordagem de banco de dados</strong>, um grupo de dados relacionados é{' '}
          <strong>compartilhado</strong> por diversos programas aplicativos. É essa partilha que elimina a duplicação e
          garante que todos os sistemas enxerguem o mesmo dado.
        </p>
      </TheoryBlock>

      <TheoryBlock title="O modelo relacional">
        <p>
          O modelo relacional descreve os dados em um <strong>formato tabular</strong> padrão: cada{' '}
          <strong>linha</strong> da tabela representa uma entidade de dados (um <strong>registro</strong>) e cada{' '}
          <strong>coluna</strong> representa um atributo (um <strong>campo</strong>). O{' '}
          <strong>domínio</strong> é o intervalo de valores permitidos para um atributo.
        </p>
        <p>
          A <strong>limpeza de dados</strong> é o processo de procurar e reparar inconsistências para garantir que os
          dados sejam precisos e completos; a normalização do banco costuma ser usada para isso.
        </p>
      </TheoryBlock>

      <Subsection title="Operações de manipulação de dados" accentClass="text-accent3">
        <PanelList items={relationalOperations} columns="md:grid-cols-2" />
        <p className="reading-measure text-text-muted text-sm leading-relaxed mt-3">
          O par <strong>seleção / projeção</strong> é o mais cobrado, justamente porque é fácil trocar um pelo outro:
          quem corta <strong>linha</strong> é a seleção; quem corta <strong>coluna</strong> é a projeção.
        </p>
      </Subsection>

      <Subsection title="As funções de um SGBD" accentClass="text-accent5">
        <PanelList items={dbmsFunctions} columns="md:grid-cols-2" />
      </Subsection>

      <HighlightBox title="Modelagem de dados e diagrama ER" accent="var(--color-accent2)">
        <p>
          Um <strong>modelo de dados</strong> é o diagrama das entidades e de suas relações. O{' '}
          <strong>diagrama Entidade-Relacionamento (ER)</strong> usa símbolos gráficos básicos para mostrar essa
          organização. A modelagem de dados empresariais começa investigando as necessidades gerais de dados e
          informações da organização em nível estratégico — de cima para baixo, portanto.
        </p>
      </HighlightBox>

      <Subsection title="Inteligência de negócios" accentClass="text-accent">
        <ConceptGrid items={biConcepts} columns="md:grid-cols-3" />
      </Subsection>

      <HighlightBox title="Onde os dados moram e outras variações" accent="var(--color-accent3)">
        <p>
          O <strong>centro de dados</strong> é o edifício climatizado que abriga os servidores e os sistemas de missão
          crítica; a tendência são os centros verdes, mais eficientes em energia. Fora do modelo relacional clássico
          existem os <strong>NoSQL</strong>, que lidam com dados que não se ajustam a tabelas; os{' '}
          <strong>bancos distribuídos</strong>, em que os dados se espalham por vários bancos menores conectados por
          telecomunicações; e os <strong>bancos replicados</strong>, que mantêm um conjunto duplicado dos dados mais
          usados. O <strong>OLAP</strong> permite explorar os dados sob múltiplas perspectivas, e o{' '}
          <strong>DLP</strong> (prevenção contra perda de dados) bloqueia a saída indevida de dados da organização.
        </p>
      </HighlightBox>

      <HighlightBox title="Fonte" accent="var(--color-accent5)">
        <p>
          Resumo do capítulo 5 de <em>Princípios de Sistemas de Informação</em>, de Stair &amp; Reynolds (tradução da
          11ª edição norte-americana), conforme os slides adotados pela Profa. Wladia Bessa em FNSI 2022.1 — BSI/IFAL.
        </p>
      </HighlightBox>
    </section>
  );
}
