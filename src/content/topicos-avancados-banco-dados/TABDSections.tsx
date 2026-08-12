import AIKahootQuiz from '../../components/ui/AIKahootQuiz';
import AIQuizGenerator from '../../components/ui/AIQuizGenerator';
import ExamQuizSelector from '../../components/ui/ExamQuizSelector';
import FlowDiagram from '../../components/ui/FlowDiagram';
import HighlightBox from '../../components/ui/HighlightBox';
import QuizTabs from '../../components/ui/QuizTabs';
import {
  SectionHeader,
  ConceptGrid,
  PanelList,
  ComparisonTable,
  TheoryBlock,
  type ConceptItem,
  type PanelItem,
  type ComparisonRow,
} from '../../components/sections';
import { TABD_GUIDE_CONTEXT, TABD_TOPICS, QUIZ_DATA } from './data';

interface TABDSectionsProps {
  activeSection: string;
}

const examLabels = {
  prova1: { label: 'AV1', description: 'BI, Data Warehouse, Modelagem e ETL.' },
  prova2: { label: 'AV2', description: 'Análise, OLAP, Big Data e Ciência de Dados.' },
} as const;

/* ============================ AV1 ============================ */

function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="De dados a decisões" subtitle="A disciplina reúne Business Intelligence, Data Warehouse e Ciência de Dados: como transformar dados espalhados em conhecimento para decidir" colorClass="text-accent" />
      <HighlightBox title="O problema central">
        <p>
          As funções de uma empresa — vendas, marketing, operações, finanças, RH — são <strong>interligadas</strong>, mas os dados que elas produzem <strong>não estão</strong>: ficam fragmentados em vários sistemas. O objetivo desta disciplina é reunir, integrar e analisar esses dados para apoiar a decisão.
        </p>
      </HighlightBox>
      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">A cadeia que percorre toda a disciplina</h3>
        <FlowDiagram items={['Fontes (OLTP)', 'ETL', 'Data Warehouse', 'OLAP / Análise', 'Decisão']} />
        <p className="text-text-muted text-sm md:text-base leading-relaxed mt-3 reading-measure">
          Os sistemas transacionais (OLTP) geram os dados; o <strong>ETL</strong> extrai, limpa e integra; o <strong>Data Warehouse</strong> os organiza de forma histórica; e as ferramentas de <strong>OLAP, BI e mineração</strong> os transformam em análise.
        </p>
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Como o conteúdo se divide</h3>
        <ConceptGrid items={disciplinaMapa} columns="md:grid-cols-2" />
      </div>
    </section>
  );
}

const disciplinaMapa: ConceptItem[] = [
  { title: 'AV1 — Fundamentos e Modelagem', description: 'Business Intelligence, Data Warehouse, Modelagem Dimensional (fato, dimensões, star/snowflake) e ETL com Pentaho. É a base para construir o repositório analítico.', accent: 'accent' },
  { title: 'AV2 — Análise e Ciência de Dados', description: 'Análise Exploratória, OLAP, Power BI, Big Data, Mineração de Dados e Orange/Machine Learning. É onde se extrai valor dos dados já organizados.', accent: 'accent3' },
];

function BISection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Business Intelligence" subtitle="Técnicas e ferramentas para transformar dados em informação útil à decisão" colorClass="text-accent" />
      <HighlightBox title="Definição e origem">
        <p>
          O termo <strong>Business Intelligence</strong> surgiu no fim dos anos 1980, atribuído a <strong>Howard Dresner</strong> (Gartner). É o processo de <strong>coletar, organizar, analisar, compartilhar e monitorar</strong> informações que dão suporte à gestão do negócio — apoiado em dois pilares: visão total dos dados e conhecimento do negócio.
        </p>
      </HighlightBox>
      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Para que serve o BI</h3>
        <PanelList items={biUsos} columns="md:grid-cols-2" />
      </div>
      <TheoryBlock title="Arquitetura de um ambiente de BI">
        <p>
          Um ambiente de BI encadeia fontes, integração, repositório e análise:
        </p>
        <FlowDiagram items={['Fontes (Legado, ERP, CRM)', 'ETL + Qualidade', 'DW + Data Marts', 'Servidor', 'Reporting / OLAP / Data Mining']} />
        <p>
          Os <strong>metadados</strong> descrevem os dados do DW (o catálogo), e a administração do ambiente cuida de cargas, segurança e desempenho.
        </p>
      </TheoryBlock>
    </section>
  );
}

const biUsos: PanelItem[] = [
  { title: 'Análise comercial', description: 'Vendas por canal, rentabilidade de clientes e de produtos, análise de marketing e identificação de novos clientes.' },
  { title: 'Gestão e risco', description: 'Análise financeira, gerência de risco, controle de qualidade e integração de bases de clientes.' },
  { title: 'Comportamento', description: 'Análise de padrões de comportamento de compra e de uso, base para segmentação e previsão.' },
  { title: 'Decisão estratégica', description: 'Consolida indicadores dispersos em uma visão única, transformando dados históricos em conhecimento para decidir.' },
];

function DWSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Data Warehouse" subtitle="O repositório integrado, histórico e não volátil que sustenta a análise" colorClass="text-accent3" />
      <HighlightBox title="Definição de Inmon">
        <p>
          Um Data Warehouse é um conjunto de dados <strong>orientado por assunto, integrado, variante no tempo e não volátil</strong>, voltado ao suporte à decisão. Surgiu no início dos anos 1990 como um repositório consolidado, limpo e padronizado, capaz de suportar uma carga de consultas muito maior que a dos sistemas transacionais.
        </p>
      </HighlightBox>
      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">As quatro características</h3>
        <ConceptGrid items={dwCaracteristicas} columns="md:grid-cols-2" />
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">DW × Banco transacional (OLTP)</h3>
        <ComparisonTable rows={dwVsOltp} leftLabel="OLTP (transacional)" rightLabel="DW (analítico)" />
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Componentes do ambiente</h3>
        <PanelList items={dwComponentes} columns="md:grid-cols-2" />
      </div>
    </section>
  );
}

const dwCaracteristicas: ConceptItem[] = [
  { title: 'Orientado por assunto', description: 'Organizado por temas do negócio (vendas, clientes), reunindo dados de diversas fontes operacionais em torno de cada assunto.', accent: 'accent' },
  { title: 'Integrado', description: 'Construído de forma consolidada: nomes, tipos, unidades e formatos são padronizados a partir de fontes heterogêneas.', accent: 'accent3' },
  { title: 'Variante no tempo', description: 'Guarda o histórico. Enquanto o OLTP mostra o "agora", o DW preserva como os dados eram ao longo do tempo.', accent: 'accent4' },
  { title: 'Não volátil', description: 'Os dados são carregados de forma planejada e não são atualizados individualmente — a evolução vem por novas cargas.', accent: 'accent5' },
];

const dwVsOltp: ComparisonRow[] = [
  { criterion: 'Objetivo', left: 'Operar o dia a dia (muitas transações)', right: 'Recuperar grandes volumes para análise' },
  { criterion: 'Modelo', left: 'Relacional normalizado (E-R)', right: 'Dimensional, pode ser desnormalizado' },
  { criterion: 'Operações', left: 'INSERT / UPDATE / DELETE frequentes', right: 'Consulta; atualização só por cargas periódicas' },
  { criterion: 'Dado', left: 'Valor corrente', right: 'Histórico ao longo do tempo' },
];

const dwComponentes: PanelItem[] = [
  { title: 'Staging Area (SA)', description: 'Camada intermediária onde os dados são integrados e transformados antes de entrar no DW.' },
  { title: 'ODS (Operational Data Store)', description: 'Base integrada e volátil, com valores correntes e apenas dados detalhados.' },
  { title: 'Data Mart (DM)', description: 'Subconjunto do DW com visão departamental / de uma área de assunto bem definida.' },
  { title: 'Metadados', description: 'Catálogo que define os dados do DW — informação sobre a informação.' },
];

function DimensionalSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Modelagem Dimensional" subtitle="A técnica de Kimball para organizar o DW em fatos e dimensões, com alto desempenho de consulta" colorClass="text-accent4" />
      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Duas escolas</h3>
        <ComparisonTable rows={kimballInmon} leftLabel="Kimball" rightLabel="Inmon" />
      </div>

      <TheoryBlock title="Esquema estrela (star schema)">
        <p>
          No centro fica a <strong>tabela fato</strong>, com as métricas/KPIs a analisar. Ao redor, as <strong>tabelas dimensão</strong> a detalham, respondendo <strong>Onde? Quando? O quê? Quem?</strong>. Essa distribuição (fato no centro, dimensões nas pontas) dá o nome de "estrela". O <strong>snowflake</strong> (floco de neve) é a variação em que dimensões grandes são normalizadas em hierarquias — reduz redundância, mas exige mais joins.
        </p>
      </TheoryBlock>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Os quatro passos da modelagem</h3>
        <PanelList items={dimensionalPassos} columns="md:grid-cols-2" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">A tabela fato</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Guarda o que <strong>mede</strong> o processo. Sua chave primária é <strong>composta</strong> por todas as FKs que apontam para as dimensões.
        </p>
        <ConceptGrid items={fatoTipos} columns="md:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Tipos de métrica</h3>
        <ConceptGrid items={metricaTipos} columns="md:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">A tabela dimensão</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Reúne os <strong>atributos textuais</strong> (que servem de filtro) e as <strong>hierarquias</strong> (relações 1-N em cascata, como Ano → Semestre → Mês → Dia). Usa <strong>surrogate keys</strong> — chaves artificiais, não os códigos do sistema de origem.
        </p>
        <PanelList items={dimensaoPontos} columns="md:grid-cols-2" />
      </div>

      <HighlightBox title="A dimensão Tempo" accent="var(--color-accent3)">
        <p>
          Está <strong>sempre presente</strong> em qualquer modelo dimensional e é a única que pode ser <strong>carregada antecipadamente, de uma só vez, sem uma fonte de dados</strong> — basta gerar todas as datas do período. Para horas/minutos, cria-se uma dimensão "Hora-do-Dia" separada, evitando explodir a dimensão Tempo.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Slowly Changing Dimensions (SCD)</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Tratam mudanças lentas nos atributos de uma dimensão (ex.: um cliente muda de cidade). A escolha do tipo define se o <strong>histórico é preservado</strong>.
        </p>
        <ComparisonTable rows={scdTipos} leftLabel="Como funciona" rightLabel="Histórico" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Dimensões especiais</h3>
        <PanelList items={dimensoesEspeciais} columns="md:grid-cols-2" />
      </div>
    </section>
  );
}

const kimballInmon: ComparisonRow[] = [
  { criterion: 'Modelagem', left: 'Dimensional (star / snowflake)', right: 'Relacional desnormalizada' },
  { criterion: 'Relação DW ↔ Data Mart', left: 'O DW é a união dos data marts', right: 'O data mart deriva do DW' },
  { criterion: 'Construção', left: 'Incremental, por departamento', right: 'Corporativa, de cima para baixo' },
];

const dimensionalPassos: PanelItem[] = [
  { title: '1. O que avaliamos?', description: 'Define os fatos/métricas — sempre valores numéricos (o que será medido).' },
  { title: '2. Como analisar?', description: 'Define as dimensões relacionadas às métricas (as perspectivas de análise).' },
  { title: '3. Qual o menor detalhe?', description: 'Define a granularidade — o nível de detalhe (grão) de cada dimensão.' },
  { title: '4. Como agrupar?', description: 'Define as hierarquias de sumarização dentro de cada dimensão.' },
];

const fatoTipos: ConceptItem[] = [
  { title: 'Movimento', description: 'Armazena transações no menor grão (ex.: cada movimento bancário, cada item de venda).', accent: 'accent' },
  { title: 'Snapshot', description: '"Foto" de um instante (ex.: saldo bancário no fim do dia, posição de estoque).', accent: 'accent3' },
  { title: 'Factless (sem fato)', description: 'Registra a existência de um evento sem métrica (ex.: alunos matriculados em cursos).', accent: 'accent5' },
];

const metricaTipos: ConceptItem[] = [
  { title: 'Aditiva', description: 'Somável em TODAS as dimensões (ex.: quantidade vendida, valor de venda).', accent: 'accent5' },
  { title: 'Semi-aditiva', description: 'Somável em ALGUMAS dimensões (ex.: saldo e estoque somam entre locais, mas não ao longo do tempo — cabe MAX/MIN).', accent: 'accent4' },
  { title: 'Não-aditiva', description: 'Não somável em nenhuma dimensão (ex.: % de margem, % de desconto, temperatura).', accent: 'accent2' },
];

const dimensaoPontos: PanelItem[] = [
  { title: 'Surrogate keys', description: 'Chaves artificiais isolam o DW das regras de origem, sustentam o histórico (SCD) e melhoram o desempenho. O código de origem pode virar um atributo textual.' },
  { title: 'Atributos e hierarquias', description: 'Atributos textuais funcionam como filtros; hierarquias (1-N em cascata) permitem analisar em mais ou menos detalhe.' },
];

const scdTipos: ComparisonRow[] = [
  { criterion: 'Tipo 1', left: 'Sobrescreve o valor antigo', right: 'Perde o histórico' },
  { criterion: 'Tipo 2', left: 'Insere uma nova linha (com flag/versão)', right: 'Mantém o histórico' },
  { criterion: 'Tipo 3', left: 'Adiciona uma nova coluna (valor atual)', right: 'Guarda só o valor anterior e o atual' },
];

const dimensoesEspeciais: PanelItem[] = [
  { title: 'Degenerate', description: 'Um identificador de documento (nº de nota fiscal, pedido) que fica como atributo na própria tabela fato, sem dimensão própria.' },
  { title: 'Junk (garbage)', description: 'Agrupa flags e indicadores de baixa cardinalidade (sexo, estado civil, forma de pagamento), reduzindo o tamanho da fato.' },
  { title: 'Role-playing', description: 'A mesma dimensão usada em papéis diferentes (ex.: data do pedido e data da entrega), via views separadas.' },
  { title: 'Bridge (multivalorada)', description: 'Tabela associativa para quando o fato se liga a um número aberto de valores (ex.: vários titulares de uma conta).' },
];

function ETLSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="ETL e Pentaho" subtitle="Extrair, transformar e carregar: como os dados chegam limpos e integrados ao Data Warehouse" colorClass="text-accent2" />
      <HighlightBox title="Teoria simples, prática complexa">
        <p>
          Na teoria, ETL é <strong>Extrair</strong> das fontes → <strong>Transformar</strong> conforme o negócio → <strong>Carregar</strong> no destino. Na prática é complexo: os dados vêm de fontes diversas, com convenções de nome, tipos, formatos, unidades de medida e granularidades <strong>diferentes</strong>.
        </p>
      </HighlightBox>
      <FlowDiagram items={['Extração', 'Transformação', 'Carga', 'Data Warehouse']} />

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Preparação dos dados</h3>
        <PanelList items={etlPreparacao} columns="md:grid-cols-2" />
      </div>

      <TheoryBlock title="Pentaho Data Integration (Kettle)">
        <p>
          O <strong>Kettle</strong> é a ferramenta de ETL usada na disciplina. Uma <strong>transformation</strong> é feita de <strong>steps</strong> (passos) ligados por <strong>hops</strong> (o fluxo de dados); um <strong>job</strong> agrupa e orquestra transformations. O step <strong>Dimension Update/Lookup</strong> implementa automaticamente as SCD tipos 1 e 2.
        </p>
      </TheoryBlock>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Os quatro executáveis do Kettle</h3>
        <ConceptGrid items={kettleFerramentas} columns="md:grid-cols-2" />
      </div>
    </section>
  );
}

const etlPreparacao: PanelItem[] = [
  { title: 'Limpeza', description: 'Dados ausentes (média/mediana, valor mais frequente ou por modelo), ruído/outliers (binning, regressão, clustering) e remoção de duplicados.' },
  { title: 'Redução', description: 'Seleção de atributos e redução de dimensionalidade (PCA), amostragem e agregação.' },
  { title: 'Transformação', description: 'Normalização (escalar valores), discretização (contínuo → categórico) e geração de hierarquias de conceitos (cidade → país).' },
  { title: 'Integração', description: 'Trata redundância entre fontes: mesmos dados com nomes, escalas ou representações diferentes.' },
];

const kettleFerramentas: ConceptItem[] = [
  { title: 'Spoon', description: 'A interface gráfica (GUI) onde se desenham as transformations e os jobs.', accent: 'accent' },
  { title: 'Pan', description: 'Executa transformations pela linha de comando / em lote.', accent: 'accent3' },
  { title: 'Kitchen', description: 'Executa jobs em lote (batch).', accent: 'accent4' },
  { title: 'Carte', description: 'Servidor web para execução e monitoramento remoto.', accent: 'accent5' },
];

/* ============================ AV2 ============================ */

function AEDSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Análise Exploratória de Dados" subtitle="A estatística como pilar da Ciência de Dados: organizar, resumir e entender os dados" colorClass="text-accent" />
      <HighlightBox title="Descritiva × Inferencial">
        <p>
          A estatística <strong>descritiva</strong> organiza, apresenta e resume os dados (gráficos, tabelas, medidas). A <strong>inferencial</strong> usa uma <strong>amostra representativa</strong> para generalizar conclusões à <strong>população</strong>. Nas tabelas de dados, as <strong>observações</strong> são as linhas e as <strong>variáveis</strong>, as colunas.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Tipos de variável</h3>
        <ConceptGrid items={variaveisTipos} columns="md:grid-cols-2" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Medidas estatísticas</h3>
        <PanelList items={medidasEstatisticas} columns="md:grid-cols-2" />
      </div>

      <HighlightBox title="Box Plot e outliers" accent="var(--color-accent5)">
        <p>
          O <strong>box plot</strong> resume uma variável quantitativa com <strong>cinco valores</strong>: mínimo, 1º quartil (Q1), mediana (Q2), 3º quartil (Q3) e máximo. Ele dá ideia de posição, dispersão e assimetria, e evidencia <strong>outliers</strong> (valores atípicos). Um coeficiente de variação (CV) ≤ 20% indica um conjunto homogêneo.
        </p>
      </HighlightBox>
    </section>
  );
}

const variaveisTipos: ConceptItem[] = [
  { title: 'Qualitativas', description: 'Valores em categorias. Nominais (sem ordem: cor dos olhos) ou ordinais (com ordem: escolaridade).', accent: 'accent' },
  { title: 'Quantitativas', description: 'Valores numéricos. Discretas (contagem: nº de filhos) ou contínuas (medição: altura, peso).', accent: 'accent3' },
];

const medidasEstatisticas: PanelItem[] = [
  { title: 'Tendência central', description: 'Média (valor médio), mediana (posição central) e moda (valor mais frequente). Em distribuição simétrica, as três coincidem.' },
  { title: 'Dispersão', description: 'Amplitude, variância, desvio-padrão (a mais usada) e coeficiente de variação (compara variabilidades entre conjuntos diferentes).' },
  { title: 'Separatrizes', description: 'Quartis (4 partes), decis (10) e percentis (100). A mediana é o percentil 50 / 2º quartil.' },
  { title: 'Forma', description: 'Assimetria (para onde a cauda se estende) e curtose (grau de achatamento em relação à curva normal).' },
];

function OLAPSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="OLAP e Cubos" subtitle="Análise multidimensional: navegar pelos dados em várias perspectivas" colorClass="text-accent3" />
      <HighlightBox title="A visão multidimensional (o Cubo)">
        <p>
          OLAP (<em>Online Analytical Processing</em>) dá suporte à decisão com uma <strong>visão multidimensional</strong> dos dados — o <strong>Cubo</strong>, composto de dimensões, medidas e células. É um processo <strong>interativo</strong>: o analista formula hipóteses e navega pelos dados.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">OLAP × OLTP</h3>
        <ComparisonTable rows={olapVsOltp} leftLabel="OLTP" rightLabel="OLAP" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Operações sobre o cubo</h3>
        <PanelList items={olapOperacoes} columns="md:grid-cols-2" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Tipos de OLAP (por armazenamento)</h3>
        <ConceptGrid items={olapTipos} columns="md:grid-cols-3" />
      </div>

      <HighlightBox title="Mondrian e MDX" accent="var(--color-accent3)">
        <p>
          O <strong>Mondrian</strong> é um servidor OLAP open source (do tipo ROLAP, em Java) que executa consultas na linguagem <strong>MDX</strong> — semelhante ao SQL, mas voltada a consultas multidimensionais.
        </p>
      </HighlightBox>
    </section>
  );
}

const olapVsOltp: ComparisonRow[] = [
  { criterion: 'Finalidade', left: 'Operação do dia a dia', right: 'Planejamento estratégico e decisão' },
  { criterion: 'Visão', left: 'Bidimensional (relatórios)', right: 'Multidimensional (cubos)' },
  { criterion: 'Uso', left: 'Muitas transações curtas', right: 'Consultas analíticas complexas' },
];

const olapOperacoes: PanelItem[] = [
  { title: 'Drill-Down / Roll-Up', description: 'Navega na hierarquia: drill-down vai do geral ao detalhe (desagrupa); roll-up/drill-up faz o inverso (agrupa).' },
  { title: 'Slice e Dice', description: 'Slice seleciona um membro de uma dimensão (uma "fatia"); dice seleciona vários membros de várias dimensões (um sub-cubo). Ambos são filtros.' },
  { title: 'Pivoteamento (Rotação)', description: 'Gira o cubo, trocando a ordem de visualização das dimensões.' },
  { title: 'Drill Across / Through', description: 'Drill across combina várias tabelas fato; drill through passa de uma dimensão para outra, além da granularidade.' },
];

const olapTipos: ConceptItem[] = [
  { title: 'MOLAP', description: 'Multidimensional: dados em arrays; rápido e compacto, mas com risco de esparsidade.', accent: 'accent' },
  { title: 'ROLAP', description: 'Relacional: traduz as requisições multidimensionais em SQL; arquitetura aberta.', accent: 'accent3' },
  { title: 'HOLAP', description: 'Híbrido: combina a escalabilidade do ROLAP com o desempenho do MOLAP.', accent: 'accent4' },
];

function PowerBISection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Power BI" subtitle="A ferramenta da Microsoft para modelar dados e construir relatórios e dashboards" colorClass="text-accent4" />
      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">As três versões</h3>
        <ConceptGrid items={powerbiVersoes} columns="md:grid-cols-3" />
      </div>

      <TheoryBlock title="Os três motores por trás do Power BI">
        <p>
          O Power BI reúne três tecnologias: <strong>Power Query</strong> (obtenção e limpeza de dados), <strong>Power Pivot</strong> (modelo de dados, relações e medidas) e <strong>Power View</strong> (visualização). O ciclo de trabalho é: obter dados → revisar o modelo → criar relatórios e painéis → publicar.
        </p>
      </TheoryBlock>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Limpeza no Power Query</h3>
        <PanelList items={powerqueryPassos} columns="md:grid-cols-2" />
      </div>

      <HighlightBox title="Medidas com DAX" accent="var(--color-accent5)">
        <p>
          As análises usam a linguagem <strong>DAX</strong>. Funções comuns: <code>SUMX</code>, <code>CALCULATE</code>, <code>DIVIDE</code>, <code>FILTER</code>, <code>AVERAGE</code>, <code>COUNTROWS</code>. Há dezenas de visualizações (tabela, matriz, cartão, mapa, barras, linha, pizza, treemap, dispersão, cascata, medidor, funil) e a segmentação (<em>slicer</em>) filtra os demais visuais.
        </p>
      </HighlightBox>
    </section>
  );
}

const powerbiVersoes: ConceptItem[] = [
  { title: 'Desktop', description: 'Onde o projeto é desenvolvido: conexão, modelagem e criação de relatórios.', accent: 'accent' },
  { title: 'Service', description: 'Versão em nuvem (online), para publicar e compartilhar dashboards.', accent: 'accent3' },
  { title: 'Mobile', description: 'Visualização dos relatórios em dispositivos móveis.', accent: 'accent5' },
];

const powerqueryPassos: PanelItem[] = [
  { title: 'Etapas aplicadas', description: 'Cada transformação vira um passo registrado, que pode ser editado, reordenado ou removido.' },
  { title: 'Tipos e filtros', description: 'Validar tipos de dados; filtrar nulos, outliers e duplicados; usar a primeira linha como cabeçalho.' },
  { title: 'Preenchimento', description: 'Completar vazios (para cima/baixo, média, mediana) e substituir valores.' },
  { title: 'Fechar e aplicar', description: 'Ao final, as transformações são aplicadas e os dados carregados no modelo.' },
];

function BigDataSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Big Data" subtitle="Quando o volume, a velocidade e a variedade superam o software tradicional" colorClass="text-accent5" />
      <HighlightBox title="Os 5 V's">
        <p>
          Big Data são conjuntos de dados grandes e complexos que o software tradicional não consegue gerenciar. É caracterizado por cinco dimensões: <strong>Volume, Velocidade, Variedade, Veracidade</strong> (confiabilidade) e <strong>Valor</strong> (significância para a organização).
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Tipos de dados</h3>
        <ConceptGrid items={bigdataTipos} columns="md:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Armazenar e processar</h3>
        <PanelList items={bigdataTecnologias} columns="md:grid-cols-2" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">NoSQL — quatro categorias</h3>
        <ConceptGrid items={noSqlCategorias} columns="md:grid-cols-2" />
      </div>

      <HighlightBox title="Data Lake × Data Warehouse × Lakehouse" accent="var(--color-accent2)">
        <p>
          O <strong>Data Lake</strong> guarda dados brutos, não processados. O <strong>Data Warehouse</strong> guarda dados já processados para um fim. O <strong>Data Lakehouse</strong> é a arquitetura que combina a flexibilidade e a economia do lake com o gerenciamento do warehouse.
        </p>
      </HighlightBox>
    </section>
  );
}

const bigdataTipos: ConceptItem[] = [
  { title: 'Estruturados', description: 'Domínios definidos, ligados a SGBDs e planilhas (números, datas, texto).', accent: 'accent' },
  { title: 'Semiestruturados', description: 'Meio-termo, com tags (JSON, XML) — comuns na web.', accent: 'accent4' },
  { title: 'Não estruturados', description: 'Sem formato fixo (fotos, vídeos, áudio, mídias sociais).', accent: 'accent2' },
];

const bigdataTecnologias: PanelItem[] = [
  { title: 'Hadoop', description: 'Ecossistema Apache com HDFS (arquivos distribuídos, tolerante a falhas) e MapReduce (processamento distribuído em cluster). Viabiliza o Data Lake com hardware barato.' },
  { title: 'ETL vs ELT', description: 'Resolvem o mesmo problema mudando a ordem da transformação. O ELT (transformar depois de carregar) é a modernização, mais ágil no carregamento.' },
];

const noSqlCategorias: ConceptItem[] = [
  { title: 'Chave/Valor', description: 'Pares simples e rápidos (Redis, Riak).', accent: 'accent' },
  { title: 'Documentos', description: 'Documentos flexíveis, tipo JSON (MongoDB, CouchDB).', accent: 'accent3' },
  { title: 'Grafos', description: 'Nós e relações (Neo4j, OrientDB), ótimos para redes.', accent: 'accent4' },
  { title: 'Colunar', description: 'Orientado a colunas, para grande escala (Cassandra).', accent: 'accent5' },
];

function MineracaoSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Mineração de Dados" subtitle="Descobrir padrões válidos, novos e úteis em grandes massas de dados" colorClass="text-accent2" />
      <HighlightBox title="KDD e Data Mining">
        <p>
          O <strong>KDD</strong> (Knowledge Discovery in Databases) é o processo de identificar padrões <strong>compreensíveis, válidos, novos e potencialmente úteis</strong> (Fayyad, 1996). A <strong>mineração de dados</strong> é a etapa principal do KDD. Lema: "dado sem qualidade resulta em mineração sem qualidade".
        </p>
      </HighlightBox>
      <FlowDiagram items={['Preparação', 'Mineração (tarefa + algoritmo)', 'Avaliação']} />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">As tarefas de mineração</h3>
        <ConceptGrid items={mineracaoTarefas} columns="md:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Data Mining × OLAP</h3>
        <ComparisonTable rows={dmVsOlap} leftLabel="OLAP" rightLabel="Data Mining" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Casos reais</h3>
        <PanelList items={mineracaoCasos} columns="md:grid-cols-3" />
      </div>
    </section>
  );
}

const mineracaoTarefas: ConceptItem[] = [
  { title: 'Classificação', description: 'Tarefa preditiva: constrói um modelo (ex.: árvore de decisão) que classifica novos objetos em uma classe-alvo. Ex.: aprovar ou não um crédito.', accent: 'accent' },
  { title: 'Associação', description: 'Descobre regras antecedente → consequente, medidas por suporte e confiança (algoritmo APRIORI). Ex.: cesta de compras.', accent: 'accent3' },
  { title: 'Agrupamento', description: 'Clusterização: reúne objetos semelhantes por distância (ex.: K-Means). Identifica grupos, mas não explica o porquê.', accent: 'accent5' },
];

const dmVsOlap: ComparisonRow[] = [
  { criterion: 'Abordagem', left: 'Verificação', right: 'Descoberta' },
  { criterion: 'A questão', left: 'O analista conhece e testa a hipótese', right: 'A questão é desconhecida; a ferramenta busca padrões' },
];

const mineracaoCasos: PanelItem[] = [
  { title: 'Wal-Mart', description: 'O clássico "fraldas e cervejas": associação entre produtos aparentemente sem relação, descoberta na cesta de compras.' },
  { title: 'Itaú', description: 'Mineração aplicada à mala direta elevou o retorno de cerca de 2% para 30%.' },
  { title: 'Sprint', description: 'Previu a evasão (churn) de clientes com alta certeza, evitando a perda de milhares deles.' },
];

function OrangeSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Orange e Machine Learning" subtitle="Mineração por programação visual: montar modelos sem escrever código" colorClass="text-accent3" />
      <HighlightBox title="O que é o Orange">
        <p>
          Orange é uma ferramenta de mineração de dados com <strong>programação visual</strong>: componentes chamados <strong>widgets</strong> são conectados em um <strong>fluxo de trabalho</strong>, sem exigir código. Serve tanto para iniciantes quanto para especialistas.
        </p>
      </HighlightBox>
      <FlowDiagram items={['Entrada', 'Amostragem', 'Visualização', 'Pré-processamento', 'Modelo', 'Avaliação', 'Aplicação']} />

      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Supervisionado × Não supervisionado</h3>
        <ComparisonTable rows={aprendizadoTipos} leftLabel="Supervisionado" rightLabel="Não supervisionado" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Avaliação do modelo</h3>
        <PanelList items={avaliacaoModelo} columns="md:grid-cols-2" />
      </div>

      <HighlightBox title="Modelos em destaque" accent="var(--color-accent5)">
        <p>
          A <strong>regressão logística</strong> usa a função <em>sigmoide</em> e é o principal método para classificação binária. As <strong>árvores de decisão</strong> são fáceis de entender e exigem pouca preparação, mas sofrem de <strong>overfitting</strong>. O <strong>kNN</strong> (k vizinhos mais próximos) é um classificador supervisionado.
        </p>
      </HighlightBox>
    </section>
  );
}

const aprendizadoTipos: ComparisonRow[] = [
  { criterion: 'Tem classe-alvo?', left: 'Sim (target definido)', right: 'Não' },
  { criterion: 'Tarefas', left: 'Classificação e regressão', right: 'Clusterização e associação' },
  { criterion: 'Exemplos', left: 'kNN, árvore, Naive Bayes, regressão logística', right: 'K-means, DBSCAN, regras de associação' },
];

const avaliacaoModelo: PanelItem[] = [
  { title: 'Métricas de classificação', description: 'Acurácia (CA), AUC (área sob a curva ROC), F1 (média de precisão e recall), precisão, recall e MCC (para classes desbalanceadas).' },
  { title: 'Métricas de regressão', description: 'MSE, RMSE, MAE e R² medem o erro entre o previsto e o real.' },
  { title: 'Matriz de confusão', description: 'Mostra os classificados versus os reais — verdadeiros/falsos positivos e negativos.' },
  { title: 'Validação', description: 'Métodos de amostragem como validação cruzada (cross validation) e leave-one-out avaliam o modelo com dados que ele não viu no treino.' },
];

function QuizSection() {
  return (
    <section className="animate-fade-in">
      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" examLabels={examLabels} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>A IA analisa os conteúdos selecionados do guia e gera lotes de 1, 5 ou 10 perguntas inéditas com 4 alternativas, resposta correta e explicação detalhada.</p>
            </HighlightBox>
            <AIQuizGenerator guideContext={TABD_GUIDE_CONTEXT} topics={TABD_TOPICS} />
          </div>
        )}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" examLabels={examLabels} />}
        aiKahoot={<AIKahootQuiz guideContext={TABD_GUIDE_CONTEXT} topics={TABD_TOPICS} />}
      />
    </section>
  );
}

export default function TABDSections({ activeSection }: TABDSectionsProps) {
  switch (activeSection) {
    case 'intro':
      return <IntroSection />;
    case 'bi':
      return <BISection />;
    case 'dw':
      return <DWSection />;
    case 'dimensional':
      return <DimensionalSection />;
    case 'etl':
      return <ETLSection />;
    case 'aed':
      return <AEDSection />;
    case 'olap':
      return <OLAPSection />;
    case 'powerbi':
      return <PowerBISection />;
    case 'bigdata':
      return <BigDataSection />;
    case 'mineracao':
      return <MineracaoSection />;
    case 'orange':
      return <OrangeSection />;
    case 'quiz':
      return <QuizSection />;
    default:
      return <IntroSection />;
  }
}
