import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';

export const TABD_GUIDE_CONTEXT = `
GUIA DE TÓPICOS AVANÇADOS EM BANCO DE DADOS (Business Intelligence, Data Warehouse e Data Science) — Resumo:

1. BUSINESS INTELLIGENCE (BI): Conjunto de técnicas e ferramentas para transformar dados em informação útil à tomada de decisão. O termo surgiu no fim dos anos 1980, atribuído a Howard Dresner (Gartner). Def.: processo de coletar, organizar, analisar, compartilhar e monitorar informações que dão suporte à gestão. Problema central: as funções da empresa são interligadas, mas os dados ficam fragmentados em vários sistemas. Arquitetura de BI: Fontes (Legado/ERP/CRM) → ETL e qualidade de dados → Data Warehouse e Data Marts (+ metadados) → Servidor → Query/Reporting, OLAP, Data Mining. Cadeia essencial: fonte OLTP → ETL → Data Warehouse → OLAP/análise.

2. DATA WAREHOUSE (DW): Repositório integrado, consolidado, limpo e padronizado, surgido no início dos anos 1990. Definição de Inmon: conjunto de dados "orientado por assunto, integrado, variante no tempo e não volátil" para suporte à decisão. As 4 características: orientado por assunto; integrado; variante no tempo (histórico); não-volátil (carga planejada, não se atualiza). Componentes do ambiente: Staging Area (integração/transformação), ODS (Operational Data Store, volátil), Data Mart (visão departamental), Metadados (catálogo). DW vs OLTP: OLTP é normalizado e transacional; DW é desnormalizado, voltado à consulta e atualizado por cargas periódicas.

3. MODELAGEM DIMENSIONAL: Técnica de Ralph Kimball para apresentar dados de forma padronizada e intuitiva, com alto desempenho de acesso. Duas escolas: Kimball (dimensional, star/snowflake, DW = união dos data marts) e Inmon (relacional desnormalizada, data mart deriva do DW). Star Schema (esquema estrela): tabela FATO central com as métricas/KPIs, cercada por tabelas DIMENSÃO que a detalham (respondem Onde? Quando? O quê? Quem?). Snowflake (floco de neve): dimensões normalizadas em hierarquias, usado para dimensões grandes, mas exige mais joins. Etapas: 1) O que avaliamos? (fatos/métricas numéricas) 2) Como analisar? (dimensões) 3) Menor detalhe? (granularidade) 4) Como agrupar? (hierarquia). TABELA FATO: PK composta (todas as FKs das dimensões) + métricas; tipos: movimento, snapshot e factless (existência sem métrica). MÉTRICAS: aditivas (somam em todas as dimensões), semi-aditivas (só em algumas, ex.: saldo) e não-aditivas (%, temperatura). DIMENSÃO: PK (surrogate key artificial, não reusar código de origem) + atributos textuais (filtros) + hierarquias (1-N em cascata). DIMENSÃO TEMPO: sempre presente, pode ser carregada antecipadamente sem fonte. GRANULARIDADE: nível de detalhe; o grão é o nível mais detalhado; todas as métricas compartilham a mesma granularidade. SCD (Slowly Changing Dimensions): Tipo 1 sobrescreve (perde histórico), Tipo 2 cria nova linha (mantém histórico), Tipo 3 nova coluna. Outras: degenerate (dimensão na fato, ex.: nº da nota fiscal), junk (agrupa flags), role-playing (mesma dimensão em papéis via views), bridge (multivalorada).

4. ETL (Extract, Transform, Load): Extração das fontes → Transformação conforme o negócio → Carga no destino. Na prática é complexo: fontes diversas com convenções, tipos, unidades e granularidades diferentes. Preparação: limpeza (dados ausentes, ruído/outliers, duplicados), redução (PCA, amostragem), transformação (normalização, discretização) e integração (redundância). Ferramenta: Pentaho Data Integration (Kettle): Spoon (GUI para transformations e jobs), Pan (roda transformations), Kitchen (roda jobs), Carte (servidor remoto). Transformation = Steps ligados por Hops; Job agrupa transformations. Step "Dimension Update/Lookup" implementa SCD tipos 1 e 2.

5. ANÁLISE EXPLORATÓRIA DE DADOS (AED): A estatística é o pilar da Ciência de Dados. Descritiva (organiza e resume) vs Inferencial (usa amostra para generalizar à população). População vs amostra representativa. Observações = linhas; variáveis = colunas. Variáveis qualitativas (nominal/ordinal) e quantitativas (discreta/contínua). Medidas de tendência central: média, mediana, moda. Medidas de dispersão: amplitude, variância, desvio-padrão, coeficiente de variação (homogêneo se CV ≤ 20%). Assimetria e curtose. Separatrizes: quartis, decis, percentis. Box Plot com 5 valores (mín, Q1, Q2, Q3, máx) evidencia outliers.

6. OLAP (Online Analytical Processing): Tecnologias de suporte à decisão com visão multidimensional dos dados (o Cubo, composto de dimensões, medidas e células). OLAP (analítico, multidimensional) vs OLTP (transacional, bidimensional). Operações: Drill-Down (geral→detalhe), Roll-Up/Drill-Up (detalhe→geral), Drill Across (entre tabelas fato), Drill Through (entre dimensões), Slice (uma fatia, 1 membro), Dice (sub-cubo, vários membros), Pivoteamento/Rotação (gira o cubo). Tipos por armazenamento: MOLAP (multidimensional), ROLAP (relacional, traduz para SQL), HOLAP (híbrido), DOLAP (desktop), WOLAP (web). Mondrian: servidor OLAP open source (ROLAP) que usa a linguagem MDX.

7. POWER BI: Ferramenta de BI da Microsoft, em 3 versões: Desktop (desenvolvimento), Service (nuvem/compartilhamento) e Mobile. Composto por Power Query (obtenção e limpeza de dados), Power Pivot (modelo e medidas) e Power View (visualização). Ciclo: obter dados → modelo de dados (medidas, relações) → relatórios/painéis → publicação. Medidas em linguagem DAX (SUMX, CALCULATE, DIVIDE, FILTER, AVERAGE). Muitas visualizações: tabela, matriz, cartão, mapa, barras, linha, pizza, treemap, dispersão, cascata, medidor, funil, segmentação (slicer).

8. BIG DATA: Conjuntos de dados grandes e complexos que o software tradicional não consegue gerenciar. Os 5 V's: Volume, Velocidade, Variedade, Veracidade (confiabilidade) e Valor. Tipos de dados: estruturados (SGBD), semiestruturados (JSON/XML) e não estruturados (fotos, vídeos). Três etapas: coletar (ETL vs ELT), armazenar e analisar. Hadoop (Apache): HDFS (arquivos distribuídos), MapReduce (processamento distribuído); viabiliza o Data Lake. NoSQL (não relacional, schemaless), em 4 categorias: chave/valor (Redis), documentos (MongoDB), grafos (Neo4j) e colunar (Cassandra). Data Lake (dados brutos) vs Data Warehouse (dados processados) vs Lakehouse (combina os dois). Big Data Analytics é apoiado por IA e Machine Learning.

9. MINERAÇÃO DE DADOS (Data Mining): O KDD (Knowledge Discovery in Databases) é o processo de descobrir padrões compreensíveis, válidos, novos e úteis (Fayyad, 1996); a mineração é a etapa principal do KDD. Etapas: preparação (limpeza), mineração (tarefa + algoritmo) e avaliação. Tarefas: classificação (preditiva, com atributos preditivos e a classe-alvo; ex.: árvore de decisão), associação (antecedente→consequente, medida por suporte e confiança; algoritmo APRIORI; ex.: cesta de compras) e agrupamento/clusterização (reúne semelhantes por distância; K-Means). DM vs OLAP: OLAP é verificação (testa hipótese conhecida); DM é descoberta (busca padrões desconhecidos). Casos reais: Wal-Mart (fraldas e cervejas), Itaú (mala direta de 2% para 30%), Sprint (previu evasão de clientes).

10. ORANGE E APRENDIZADO DE MÁQUINA: Orange é uma ferramenta de mineração com programação visual (widgets em um fluxo de trabalho), sem exigir código. Fluxo: entrada → amostragem → visualização → pré-processamento → criação do modelo → avaliação → aplicação. Aprendizado supervisionado (com classe-alvo: classificação e regressão; ex.: kNN, árvore, Naive Bayes, regressão logística) vs não supervisionado (sem alvo: clusterização, associação). Avaliação de classificação: acurácia (CA), AUC, F1, precisão, recall, matriz de confusão, curva ROC. Regressão: MSE, RMSE, MAE, R². Regressão logística usa a função sigmoide para classificação binária; árvores de decisão sofrem de overfitting.

DIVISÃO POR AVALIAÇÕES:
- AV1 (1ª nota): Business Intelligence, Data Warehouse, Modelagem Dimensional (star/snowflake, fato, dimensões, SCD, granularidade) e ETL com Pentaho.
- AV2 (2ª nota): Análise Exploratória de Dados, OLAP, Power BI, Big Data, Mineração de Dados e Orange/Machine Learning.
`;

export const TABD_TOPICS: QuizTopicOption[] = [
  {
    value: 'av1',
    label: 'AV1: BI, Data Warehouse e Modelagem',
    prompt: 'Conteúdo da AV1: Business Intelligence (origem, definição, arquitetura), Data Warehouse (definição de Inmon e as 4 características, componentes, DW vs OLTP), Modelagem Dimensional (Kimball vs Inmon, star schema, snowflake, tabela fato, tipos de fato, métricas aditivas/semi-aditivas/não-aditivas, dimensões, surrogate keys, dimensão tempo, granularidade, SCD tipos 1/2/3, degenerate, junk, role-playing, bridge) e ETL (extração/transformação/carga, limpeza de dados, Pentaho Data Integration/Kettle, Spoon/Pan/Kitchen/Carte, steps e hops).',
  },
  {
    value: 'av2',
    label: 'AV2: Análise, OLAP e Data Science',
    prompt: 'Conteúdo da AV2: Análise Exploratória de Dados (estatística descritiva e inferencial, população e amostra, variáveis qualitativas e quantitativas, média/mediana/moda, dispersão, coeficiente de variação, quartis, box plot, outliers), OLAP (cubo, OLAP vs OLTP, operações drill-down/roll-up/slice/dice/pivot, tipos MOLAP/ROLAP/HOLAP, MDX), Power BI (versões, Power Query/Pivot/View, DAX, visualizações), Big Data (5 Vs, dados estruturados/semi/não estruturados, Hadoop, HDFS, MapReduce, NoSQL e suas 4 categorias, Data Lake vs DW vs Lakehouse), Mineração de Dados (KDD, classificação, associação com suporte e confiança, APRIORI, agrupamento, K-Means, DM vs OLAP) e Orange/Machine Learning (fluxo de widgets, aprendizado supervisionado vs não supervisionado, avaliação, acurácia, matriz de confusão, ROC).',
  },
  { value: 'bi', label: 'Business Intelligence' },
  { value: 'dw', label: 'Data Warehouse' },
  { value: 'dimensional', label: 'Modelagem Dimensional' },
  { value: 'etl', label: 'ETL e Pentaho' },
  { value: 'aed', label: 'Análise Exploratória de Dados' },
  { value: 'olap', label: 'OLAP' },
  { value: 'powerbi', label: 'Power BI' },
  { value: 'bigdata', label: 'Big Data' },
  { value: 'mineracao', label: 'Mineração de Dados' },
  { value: 'orange', label: 'Orange e Machine Learning' },
];

export const TABD_SECTIONS = [
  { id: 'intro', title: 'Introdução: BI e a cadeia de decisão', shortTitle: 'Introdução' },
  { id: 'bi', title: 'Business Intelligence', shortTitle: 'BI', exam: 'AV1' },
  { id: 'dw', title: 'Data Warehouse', shortTitle: 'Data Warehouse', exam: 'AV1' },
  { id: 'dimensional', title: 'Modelagem Dimensional', shortTitle: 'Dimensional', exam: 'AV1' },
  { id: 'etl', title: 'ETL e Pentaho', shortTitle: 'ETL', exam: 'AV1' },
  { id: 'aed', title: 'Análise Exploratória de Dados', shortTitle: 'Análise', exam: 'AV2' },
  { id: 'olap', title: 'OLAP e Cubos', shortTitle: 'OLAP', exam: 'AV2' },
  { id: 'powerbi', title: 'Power BI', shortTitle: 'Power BI', exam: 'AV2' },
  { id: 'bigdata', title: 'Big Data', shortTitle: 'Big Data', exam: 'AV2' },
  { id: 'mineracao', title: 'Mineração de Dados', shortTitle: 'Mineração', exam: 'AV2' },
  { id: 'orange', title: 'Orange e Machine Learning', shortTitle: 'Orange/ML', exam: 'AV2' },
  { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
];

const QUIZ_DATA_AV1: QuizQuestionData[] = [
  {
    id: 't1',
    question: '1. A quem é atribuído o termo "Business Intelligence", no fim dos anos 1980?',
    options: ['Ralph Kimball', 'Bill Inmon', 'Howard Dresner (Gartner)', 'Edgar Codd'],
    correctIndex: 2,
    feedbackCorrect: 'O termo é atribuído a Howard Dresner, do Gartner Group.',
    feedbackWrong: 'Foi Howard Dresner (Gartner) que popularizou o termo Business Intelligence.',
  },
  {
    id: 't2',
    question: '2. Na definição de Inmon, quais são as quatro características de um Data Warehouse?',
    options: [
      'Rápido, barato, seguro e escalável',
      'Orientado por assunto, integrado, variante no tempo e não volátil',
      'Normalizado, transacional, volátil e distribuído',
      'Relacional, dimensional, físico e lógico',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto: orientado por assunto, integrado, variante no tempo e não volátil.',
    feedbackWrong: 'Inmon define o DW como orientado por assunto, integrado, variante no tempo e não volátil.',
  },
  {
    id: 't3',
    question: '3. No esquema estrela (star schema), o que fica na tabela central (fato)?',
    options: [
      'Os atributos textuais de filtro',
      'As métricas e indicadores a serem analisados',
      'As hierarquias das dimensões',
      'Os metadados do Data Warehouse',
    ],
    correctIndex: 1,
    feedbackCorrect: 'A tabela fato guarda as métricas/KPIs; as dimensões a detalham ao redor.',
    feedbackWrong: 'A tabela fato central contém as métricas/indicadores; os atributos ficam nas dimensões.',
  },
  {
    id: 't4',
    question: '4. Uma métrica que só pode ser somada em ALGUMAS dimensões (como saldo bancário, que não soma ao longo do tempo) é:',
    options: ['Aditiva', 'Semi-aditiva', 'Não-aditiva', 'Degenerada'],
    correctIndex: 1,
    feedbackCorrect: 'Semi-aditiva: soma em algumas dimensões, mas não em todas (ex.: saldo, estoque).',
    feedbackWrong: 'Saldo é uma métrica semi-aditiva — soma entre agências, mas não ao longo do tempo.',
  },
  {
    id: 't5',
    question: '5. Por que se usam surrogate keys (chaves artificiais) nas dimensões, em vez do código do sistema de origem?',
    options: [
      'Porque são obrigatórias no SQL',
      'Para isolar o DW das regras operacionais, preservar histórico e melhorar o desempenho',
      'Porque ocupam menos espaço que qualquer outra chave',
      'Porque o Pentaho não aceita chaves de origem',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Surrogate keys isolam o DW da origem, sustentam o histórico (SCD) e dão desempenho.',
    feedbackWrong: 'A surrogate key isola o DW das regras de origem, preserva histórico e melhora desempenho.',
  },
  {
    id: 't6',
    question: '6. Qual tipo de SCD (Slowly Changing Dimension) cria uma NOVA LINHA para manter o histórico da mudança?',
    options: ['Tipo 1', 'Tipo 2', 'Tipo 3', 'Tipo 0'],
    correctIndex: 1,
    feedbackCorrect: 'O SCD Tipo 2 insere uma nova linha, preservando o histórico (com flag/versão de atual).',
    feedbackWrong: 'Tipo 1 sobrescreve (perde histórico); o Tipo 2 cria nova linha e mantém o histórico.',
  },
  {
    id: 't7',
    question: '7. O que é a granularidade em um Data Warehouse?',
    options: [
      'O número de dimensões do modelo',
      'O nível de detalhe (o grão) em que os dados estão armazenados',
      'A quantidade de tabelas fato',
      'O tamanho físico do banco em disco',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Granularidade é o nível de detalhe; o grão é o nível mais detalhado, e todas as métricas o compartilham.',
    feedbackWrong: 'Granularidade é o nível de detalhe (grão) dos dados — quanto menor o grão, mais detalhe e volume.',
  },
  {
    id: 't8',
    question: '8. No Pentaho Data Integration (Kettle), qual componente é a interface gráfica para desenhar transformations e jobs?',
    options: ['Pan', 'Kitchen', 'Spoon', 'Carte'],
    correctIndex: 2,
    feedbackCorrect: 'Spoon é a GUI. Pan roda transformations, Kitchen roda jobs, Carte é o servidor remoto.',
    feedbackWrong: 'A interface gráfica é o Spoon. Pan (transformations), Kitchen (jobs) e Carte (remoto) são de linha de comando/serviço.',
  },
  {
    id: 't9',
    question: '9. Qual a diferença essencial entre o esquema estrela (star) e o floco de neve (snowflake)?',
    options: [
      'O star não tem tabela fato',
      'No snowflake as dimensões são normalizadas em hierarquias, gerando mais joins',
      'O snowflake não permite métricas',
      'São exatamente iguais',
    ],
    correctIndex: 1,
    feedbackCorrect: 'No snowflake as dimensões são normalizadas (hierarquias), o que reduz redundância mas exige mais joins.',
    feedbackWrong: 'O snowflake normaliza as dimensões em hierarquias — menos redundância, porém mais joins nas consultas.',
  },
  {
    id: 't10',
    question: '10. Uma "degenerate dimension" (dimensão degenerada) é caracterizada por:',
    options: [
      'Ser a maior dimensão do modelo',
      'Ser um atributo dentro da própria tabela fato, sem tabela própria (ex.: nº da nota fiscal)',
      'Agrupar apenas flags booleanas',
      'Mudar de valor muito lentamente',
    ],
    correctIndex: 1,
    feedbackCorrect: 'A degenerate fica como atributo na fato (nº de pedido, nota fiscal), sem dimensão própria.',
    feedbackWrong: 'Degenerate dimension é um identificador de documento (nota, pedido) que fica na fato, sem tabela de dimensão.',
  },
];

const QUIZ_DATA_AV2: QuizQuestionData[] = [
  {
    id: 't11',
    question: '11. Em estatística, qual medida de dispersão indica distribuição homogênea quando é menor ou igual a 20%?',
    options: ['Desvio-padrão', 'Amplitude', 'Coeficiente de variação (CV)', 'Variância'],
    correctIndex: 2,
    feedbackCorrect: 'O coeficiente de variação (CV) ≤ 20% indica um conjunto de dados homogêneo.',
    feedbackWrong: 'É o coeficiente de variação (CV): CV ≤ 20% indica distribuição homogênea.',
  },
  {
    id: 't12',
    question: '12. O Box Plot é construído a partir de quais cinco valores?',
    options: [
      'Média, moda, variância, desvio e amplitude',
      'Mínimo, Q1, mediana (Q2), Q3 e máximo',
      'Média, mediana, moda, mínimo e máximo',
      'Os cinco maiores valores do conjunto',
    ],
    correctIndex: 1,
    feedbackCorrect: 'O box plot usa mínimo, Q1, mediana (Q2), Q3 e máximo — e evidencia outliers.',
    feedbackWrong: 'São cinco: mínimo, primeiro quartil, mediana, terceiro quartil e máximo.',
  },
  {
    id: 't13',
    question: '13. Qual operação OLAP navega do nível mais geral para o mais detalhado de uma hierarquia?',
    options: ['Roll-Up (Drill-Up)', 'Drill-Down', 'Slice', 'Pivot'],
    correctIndex: 1,
    feedbackCorrect: 'Drill-Down vai do geral ao detalhe (desagrupa). Roll-Up faz o inverso.',
    feedbackWrong: 'Drill-Down desce ao detalhe; Roll-Up/Drill-Up sobe ao geral.',
  },
  {
    id: 't14',
    question: '14. A operação OLAP que seleciona vários membros de várias dimensões, formando um sub-cubo, é o:',
    options: ['Slice', 'Dice', 'Pivot', 'Drill Across'],
    correctIndex: 1,
    feedbackCorrect: 'Dice seleciona vários membros de várias dimensões (sub-cubo). Slice é uma única fatia.',
    feedbackWrong: 'O Dice forma um sub-cubo (vários membros/dimensões); o Slice é uma fatia de um só membro.',
  },
  {
    id: 't15',
    question: '15. No Power BI, qual componente é responsável pela obtenção e limpeza (transformação) dos dados?',
    options: ['Power View', 'Power Pivot', 'Power Query', 'Power Automate'],
    correctIndex: 2,
    feedbackCorrect: 'Power Query obtém e limpa os dados; Power Pivot cuida do modelo/medidas; Power View, da visualização.',
    feedbackWrong: 'A limpeza e obtenção de dados é feita no Power Query.',
  },
  {
    id: 't16',
    question: '16. Quais são os "5 V\'s" do Big Data?',
    options: [
      'Volume, Velocidade, Variedade, Veracidade e Valor',
      'Volume, Visão, Valor, Velocidade e Vetor',
      'Variedade, Validade, Volume, Verdade e Valor',
      'Velocidade, Volume, Vetor, Visão e Valor',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Os 5 V\'s: Volume, Velocidade, Variedade, Veracidade e Valor.',
    feedbackWrong: 'São Volume, Velocidade, Variedade, Veracidade (confiabilidade) e Valor.',
  },
  {
    id: 't17',
    question: '17. No ecossistema Hadoop, qual componente é o sistema de arquivos distribuído?',
    options: ['MapReduce', 'HDFS', 'YARN', 'Hive'],
    correctIndex: 1,
    feedbackCorrect: 'HDFS é o sistema de arquivos distribuído; MapReduce faz o processamento distribuído.',
    feedbackWrong: 'O HDFS (Hadoop Distributed File System) é o sistema de arquivos; o MapReduce processa.',
  },
  {
    id: 't18',
    question: '18. Um banco NoSQL orientado a documentos, como o MongoDB, pertence a qual das 4 categorias?',
    options: ['Chave/Valor', 'Documentos', 'Grafos', 'Colunar'],
    correctIndex: 1,
    feedbackCorrect: 'MongoDB e CouchDB são bancos NoSQL de documentos.',
    feedbackWrong: 'MongoDB é orientado a documentos (uma das 4 categorias: chave/valor, documentos, grafos, colunar).',
  },
  {
    id: 't19',
    question: '19. Na mineração de dados, a tarefa que descobre regras do tipo "quem compra A tende a comprar B", medida por suporte e confiança, é a:',
    options: ['Classificação', 'Associação', 'Clusterização', 'Regressão'],
    correctIndex: 1,
    feedbackCorrect: 'Associação (algoritmo APRIORI) usa suporte e confiança — é o caso clássico da cesta de compras.',
    feedbackWrong: 'É a associação (regras antecedente→consequente), medida por suporte e confiança.',
  },
  {
    id: 't20',
    question: '20. Qual a diferença fundamental entre OLAP e Data Mining?',
    options: [
      'OLAP é gratuito e Data Mining é pago',
      'OLAP é verificação (o analista testa uma hipótese conhecida); Data Mining é descoberta (busca padrões desconhecidos)',
      'OLAP só funciona com Big Data',
      'Não há diferença prática',
    ],
    correctIndex: 1,
    feedbackCorrect: 'OLAP verifica hipóteses conhecidas; a mineração descobre padrões que ainda não conhecemos.',
    feedbackWrong: 'OLAP = verificação (hipótese conhecida); Data Mining = descoberta (padrões desconhecidos).',
  },
  {
    id: 't21',
    question: '21. No aprendizado de máquina, a clusterização (agrupamento) e as regras de associação são exemplos de aprendizado:',
    options: ['Supervisionado', 'Não supervisionado', 'Por reforço', 'Semissupervisionado'],
    correctIndex: 1,
    feedbackCorrect: 'Não supervisionado: não há classe-alvo — a máquina descobre a estrutura sozinha.',
    feedbackWrong: 'Clusterização e associação são não supervisionadas (sem classe-alvo). Classificação/regressão é que são supervisionadas.',
  },
  {
    id: 't22',
    question: '22. Qual ferramenta permite fazer mineração de dados por programação visual (widgets), sem escrever código?',
    options: ['Pentaho', 'Power BI', 'Orange', 'Oracle SQL Developer'],
    correctIndex: 2,
    feedbackCorrect: 'Orange usa programação visual: widgets conectados em um fluxo de trabalho.',
    feedbackWrong: 'O Orange Data Mining faz mineração por programação visual (widgets), sem exigir código.',
  },
];

export const QUIZ_DATA: QuizQuestionData[] = [
  ...QUIZ_DATA_AV1.map(q => ({ ...q, exam: 'prova1' as const })),
  ...QUIZ_DATA_AV2.map(q => ({ ...q, exam: 'prova2' as const })),
];
