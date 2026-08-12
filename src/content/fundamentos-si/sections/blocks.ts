// Dados dos cards, tabelas e listas das seções de Fundamentos de Sistemas de Informação.
// Resumidos e reorganizados a partir do material da turma FNSI 2022.1 — BSI/IFAL
// (Profa. Wladia Bessa da Cruz), que adota os slides de "Princípios de Sistemas de
// Informação", de Stair & Reynolds (tradução da 11ª edição norte-americana), e, no tema
// de sistemas numéricos, as notas de aula do Prof. Gustavo B. Borba (UTFPR, disciplina EL66J).

import type { ComparisonRow, ConceptItem, PanelItem, StatItem } from '../../../components/sections';

/* ------------------------------------------------------------------ Introdução */

export const disciplineOverview: ConceptItem[] = [
    {
        title: 'A porta de entrada do curso',
        description:
            'FUSI é a primeira disciplina do BSI e dá o vocabulário que todas as outras assumem como conhecido: dado, informação, sistema, hardware, software, banco de dados, rede.',
        accent: 'accent',
    },
    {
        title: 'Visão panorâmica, não profundidade',
        description:
            'A disciplina passa por todas as camadas de um sistema de informação sem esgotar nenhuma. Cada capítulo aqui vira uma disciplina inteira mais adiante no curso.',
        accent: 'accent2',
    },
    {
        title: 'Negócio antes da tecnologia',
        description:
            'O fio condutor é o valor que o SI gera para a organização. Tecnologia aparece sempre respondendo a uma necessidade de negócio, nunca como fim em si mesma.',
        accent: 'accent3',
    },
    {
        title: 'Uma parte técnica e concreta',
        description:
            'O último bloco muda de registro: sistemas numéricos e aritmética binária são conteúdo de cálculo, cobrados na 3ª prova e na final com exercícios de conversão.',
        accent: 'accent4',
    },
    {
        title: 'Pré-requisito implícito',
        description:
            'FUSI sustenta APSI (Análise e Projeto de SI) e, mais adiante, SIGE (Sistemas de Informação Gerenciais). Os conceitos de TPS, MIS, DSS e ERP reaparecem lá com profundidade.',
        accent: 'accent5',
    },
    {
        title: 'Avaliação em três provas e uma final',
        description:
            'A professora dividiu o período em três provas por bloco de assunto, mais 2ª chamada e prova final. A final reúne os assuntos mais cobrados dos três blocos.',
        accent: 'accent',
    },
];

export const examTopics: PanelItem[] = [
    {
        title: '1ª Prova — 26/09/2022',
        description:
            'Introdução aos Sistemas de Informação; Sistemas de Informação nas Organizações; Software de Sistemas e Aplicativos; Hardware.',
    },
    {
        title: '2ª Prova — 07/11/2022',
        description: 'Banco de Dados e Inteligência de Negócios; Internet, Intranet e Extranet.',
    },
    {
        title: '3ª Prova — 15/12/2022',
        description:
            'Comércio Eletrônico; Conversão de Sistemas Numéricos (decimal, octal, hexadecimal); Soma e Subtração de Binários; Conversão de números fracionários.',
    },
    {
        title: 'Prova Final — 22/12/2022',
        description:
            'SGBD; Software; Hardware; Banco de Dados e Inteligência de Negócios; Comércio Eletrônico; Conversão Numérica (incluindo fracionários); Soma e Subtração de Binários.',
    },
];

export const courseActivities: PanelItem[] = [
    {
        title: 'Seminário de Hardware (equipes de 4)',
        description:
            'Pesquisa e apresentação sobre um tipo de hardware — desktop, notebook, celular, tablet, console, Raspberry ou supercomputador — cobrindo componentes, tipos de processador (com multiprocessamento, se houver), tipos de memória e dispositivos de entrada e saída. Parte escrita valia até 7 pontos (nota da equipe) e a apresentação até 3 (nota individual).',
    },
    {
        title: 'Mapa mental de Telecomunicações e Redes (dupla)',
        description:
            'Mapa mental do capítulo de Telecomunicações e Redes, em Miro, CmapTools, Canva, Coggle, FigJam ou no papel, entregue como imagem. Valia 3,0 pontos. É por isso que o tema teve atividade em vez de prova escrita.',
    },
    {
        title: 'Atividade de Telecomunicações (dupla)',
        description:
            'Três questões de pesquisa: riscos de transmitir dados em redes Wi-Fi não seguras e etapas para protegê-las; panorama do 5G e das operadoras; e oportunidades de carreira na indústria de telecomunicações e redes na região.',
    },
    {
        title: 'Lista de conversão numérica',
        description:
            'Lista de exercícios de conversão entre bases, aplicada na reta final do período e corrigida em sala, preparando diretamente a 3ª prova e a final.',
    },
];

/* ------------------------------------------ Dados, informação e conhecimento */

export const valuableInfoAttributes: PanelItem[] = [
    { title: 'Precisa', description: 'Livre de erro. Dado de entrada errado produz informação errada — o princípio do "entra lixo, sai lixo".' },
    { title: 'Completa', description: 'Contém todos os fatos importantes. Uma informação parcial pode induzir a uma decisão pior do que a ausência dela.' },
    { title: 'Econômica', description: 'O custo de produzi-la não deve superar o valor que ela gera para a decisão.' },
    { title: 'Flexível', description: 'Serve a mais de um propósito e a mais de um usuário.' },
    { title: 'Confiável', description: 'Depende do método de coleta e da reputação da fonte.' },
    { title: 'Relevante', description: 'Importa para quem vai decidir. Informação correta sobre o assunto errado não ajuda.' },
    { title: 'Simples', description: 'Sem complexidade desnecessária. Excesso de informação atrapalha tanto quanto a falta dela.' },
    { title: 'No prazo', description: 'Entregue quando ainda é útil. Informação correta que chega tarde perde o valor.' },
    { title: 'Verificável', description: 'Pode ser conferida, de preferência em mais de uma fonte.' },
    { title: 'Acessível', description: 'Disponível a quem tem direito, no formato e no momento certos.' },
    { title: 'Segura', description: 'Protegida contra o acesso de quem não está autorizado.' },
];

/* ------------------------------------------------ Sistemas, CBIS e tipos de SI */

export const cbisComponents: ConceptItem[] = [
    {
        title: 'Hardware',
        description: 'Os equipamentos que realizam entrada, processamento, armazenamento e saída.',
        accent: 'accent',
    },
    {
        title: 'Software',
        description: 'Os programas que comandam a operação do computador — de sistemas e aplicativos.',
        accent: 'accent2',
    },
    {
        title: 'Banco de dados',
        description: 'Coleção organizada de fatos e informações, com dois ou mais arquivos de dados relacionados.',
        accent: 'accent3',
    },
    {
        title: 'Telecomunicações e redes',
        description: 'A transmissão eletrônica de sinais que conecta os equipamentos — inclui internet, intranet e extranet.',
        accent: 'accent4',
    },
    {
        title: 'Pessoas',
        description: 'O elemento MAIS IMPORTANTE na maioria dos CBIS. São elas que operam o sistema e interpretam a saída.',
        accent: 'accent5',
    },
    {
        title: 'Procedimentos',
        description: 'As estratégias, políticas, métodos e regras que definem como o CBIS deve ser utilizado.',
        accent: 'accent',
    },
];

export const businessSystemTypes: PanelItem[] = [
    {
        title: 'TPS — Sistema de Processamento de Transações',
        description:
            'Registra e processa o grande volume de transações rotineiras do dia a dia: vendas, pedidos, folha de pagamento. Transação é qualquer intercâmbio relacionado a negócios. É a base que alimenta os demais sistemas com dados.',
    },
    {
        title: 'ERP — Planejamento de Recursos Empresariais',
        description:
            'Conjunto de programas integrados que gerencia as operações vitais de uma organização, tipicamente global e com múltiplas filiais, dando suporte integrado à fabricação e às finanças.',
    },
    {
        title: 'MIS / SIG — Sistema de Informação Gerencial',
        description:
            'Fornece informações de ROTINA em relatórios PADRÃO para gestores, com foco na EFICIÊNCIA OPERACIONAL. Alimenta-se dos dados registrados pelo TPS e pelo ERP.',
    },
    {
        title: 'DSS — Sistema de Apoio a Decisões',
        description:
            'Apoia a decisão específica de um problema, com foco na EFICÁCIA da decisão. Entra em cena quando o problema é complexo e as informações necessárias são difíceis de obter.',
    },
];

export const misVsDssRows: ComparisonRow[] = [
    { criterion: 'Tipo de problema', left: 'Rotineiro, previsível, recorrente', right: 'Específico, complexo, não estruturado' },
    { criterion: 'Foco', left: 'Eficiência operacional', right: 'Eficácia da decisão' },
    { criterion: 'Saída', left: 'Relatórios padrão, periódicos', right: 'Análises sob demanda, cenários' },
    { criterion: 'Pergunta típica', left: '"Quanto vendemos por filial no mês?"', right: '"Vale a pena abrir uma filial nesta cidade?"' },
    { criterion: 'Origem dos dados', left: 'TPS e ERP da própria empresa', right: 'Dados internos e externos combinados' },
];

export const specializedSystems: PanelItem[] = [
    {
        title: 'SGC — Sistemas de Gestão do Conhecimento',
        description: 'Criam, armazenam, compartilham e utilizam o conhecimento e a experiência acumulados pela organização.',
    },
    {
        title: 'IA — Inteligência Artificial',
        description:
            'Sistema que assume características da inteligência humana. Abrange robótica, sistemas de visão, processamento de linguagem natural, sistemas de aprendizagem (aprendem com erros e experiências anteriores) e redes neurais (reconhecem padrões e tendências).',
    },
    {
        title: 'Sistemas especialistas',
        description:
            'Dão sugestões e funcionam como um especialista de determinada área, apoiados numa base de conhecimento com dados, regras, procedimentos e relações.',
    },
    {
        title: 'Realidade virtual',
        description: 'Simulação de um ambiente real ou imaginado, vivenciado visualmente em três dimensões.',
    },
];

export const systemsDevelopmentSteps = [
    'Investigação — entender o problema a resolver ou a oportunidade',
    'Análise — definir problemas e oportunidades do sistema atual',
    'Projeto — determinar COMO o novo sistema vai funcionar',
    'Implementação — criar/adquirir, integrar e colocar em operação',
    'Manutenção e revisão — ajustar conforme o negócio muda',
];

/* ------------------------------------------------------- SI nas organizações */

export const orgStructures: PanelItem[] = [
    {
        title: 'Tradicional',
        description:
            'Hierarquia de tomada de decisão e fluxo de autoridade que desce da gestão estratégica até a gestão operacional e os funcionários. A estrutura plana é a variante que empurra a decisão para os níveis inferiores, com empoderamento — mais responsabilidade e autoridade para quem está na ponta.',
    },
    {
        title: 'De projeto',
        description: 'Centrada nos principais produtos ou serviços; as equipes de projeto são muitas vezes temporárias.',
    },
    {
        title: 'De equipe',
        description: 'Centrada no trabalho de equipes ou grupos, que podem ser temporários ou permanentes conforme a tarefa.',
    },
    {
        title: 'Virtual',
        description:
            'Emprega pessoas, grupos ou unidades de negócio inteiras em áreas geograficamente dispersas. Reduz custos e viabiliza o trabalho colaborativo mesmo entre membros de países diferentes.',
    },
];

export const changeModelSteps = [
    'Descongelamento — interromper velhos hábitos e criar clima receptivo',
    'Movimento — aprender novos métodos, comportamentos e sistemas',
    'Recongelamento — reforçar a mudança até virar parte natural do trabalho',
];

export const fiveForces: PanelItem[] = [
    { title: 'Rivalidade entre os concorrentes existentes', description: 'Setores com rivalidade mais forte têm mais empresas correndo atrás de vantagem competitiva.' },
    { title: 'Ameaça de novos concorrentes', description: 'Cresce quando os custos de entrada e saída do setor são baixos e a tecnologia necessária está disponível.' },
    { title: 'Ameaça de produtos e serviços substitutos', description: 'Quanto mais fácil for encontrar substitutos que atendam à mesma necessidade, maior a pressão por diferenciação.' },
    { title: 'Poder de negociação dos compradores', description: 'Clientes com muito poder de barganha forçam a empresa a aumentar sua vantagem competitiva para retê-los.' },
    { title: 'Poder de negociação dos fornecedores', description: 'Fornecedores fortes conseguem impor preços e condições, comprimindo a margem da empresa.' },
];

export const performanceMeasures: PanelItem[] = [
    { title: 'Produtividade', description: 'Produtividade = (Saída / Entrada) × 100%. Mais saída para a mesma entrada significa maior produtividade.' },
    { title: 'ROI — Retorno sobre Investimento', description: 'Mede os lucros e benefícios adicionais gerados como porcentagem do investimento feito em tecnologia de SI.' },
    { title: 'Crescimento nos ganhos', description: 'O aumento de lucro que pode ser atribuído ao sistema.' },
    { title: 'Participação no mercado e velocidade para o mercado', description: 'A fatia de vendas do produto sobre o mercado total e a rapidez em chegar nele.' },
    { title: 'Percepção e satisfação do cliente', description: 'Medida baseada no retorno de usuários internos e externos.' },
    { title: 'Custo total de propriedade', description: 'A soma de todos os custos ao longo de toda a vida útil do sistema de informação, não apenas o da compra.' },
];

/* ---------------------------------------------------------------- Hardware */

export const cpuParts: ConceptItem[] = [
    {
        title: 'ULA (Unidade Aritmética e Lógica)',
        description: 'Realiza os cálculos matemáticos e as comparações lógicas.',
        accent: 'accent',
    },
    {
        title: 'Unidade de Controle',
        description:
            'Acessa sequencialmente as instruções do programa, decodifica-as e coordena o fluxo de dados que entra e sai da ULA, dos registradores e do armazenamento.',
        accent: 'accent2',
    },
    {
        title: 'Registradores',
        description:
            'Áreas de armazenamento de altíssima velocidade dentro da própria CPU, que mantêm temporariamente pequenas unidades de instruções e dados.',
        accent: 'accent3',
    },
];

export const machineCycle = [
    'Buscar a instrução',
    'Decodificar a instrução',
    'Executar a instrução',
    'Armazenar o resultado',
];

export const memoryTypes: ComparisonRow[] = [
    { criterion: 'Volatilidade', left: 'Volátil — perde tudo ao desligar', right: 'Não volátil — mantém o conteúdo' },
    { criterion: 'Função', left: 'Área de trabalho para programas e dados em uso', right: 'Guarda instruções permanentes que não mudam' },
    { criterion: 'Escrita', left: 'Leitura e escrita livres', right: 'Somente leitura (Read-Only Memory)' },
    { criterion: 'Variantes citadas', left: 'DRAM, SRAM, DDR2 e DDR3 SDRAM', right: 'Firmware e instruções de inicialização' },
];

export const storageDevices: PanelItem[] = [
    { title: 'Fita magnética', description: 'Acesso sequencial (SASD). Usada principalmente para backup de dados organizacionais críticos.' },
    { title: 'Disco magnético', description: 'Acesso direto (DASD): qualquer registro pode ser lido diretamente, sem percorrer os anteriores.' },
    { title: 'RAID', description: 'Matriz redundante de discos que gera bits extras a partir dos dados existentes, dando tolerância a falhas.' },
    { title: 'Ópticos', description: 'CD-ROM, DVD (cerca de 6× a capacidade do CD) e Blu-ray (cerca de 3× a do DVD).' },
    { title: 'SSD — estado sólido', description: 'Armazena em chips de memória; menos partes móveis e menos frágil que o disco rígido, mas com custo maior por GB.' },
    { title: 'NAS e SAN', description: 'NAS é o armazenamento com endereço próprio na rede; SAN é a rede dedicada de alta velocidade entre armazenamento e servidores.' },
];

export const computerClasses: PanelItem[] = [
    {
        title: 'Portáteis',
        description: 'Handheld, smartphone, laptop, notebook (menos de 3 kg), netbook (pequeno e econômico) e tablet (sem teclado físico).',
    },
    {
        title: 'Não portáteis de usuário único',
        description:
            'Thin client (baixo custo, gerenciado centralmente, sem drives extras), desktop, nettop (desktop econômico e de baixo consumo) e estação de trabalho (mais potente que o PC comum).',
    },
    {
        title: 'Multiusuário',
        description:
            'Servidor (executa aplicativos de rede ou internet para muitos usuários), servidor blade (aloja muitas placas-mãe), mainframe (grande e potente, compartilhado por dezenas ou centenas de usuários) e supercomputador (o mais rápido e de maior desempenho).',
    },
];

/* ---------------------------------------------------------------- Software */

export const osActivities: PanelItem[] = [
    { title: 'Executar funções comuns de hardware', description: 'Obter entrada do teclado, recuperar e gravar dados em disco, exibir informação no monitor ou na impressora.' },
    { title: 'Fornecer interface e gerenciar entrada/saída', description: 'Interface por comando (texto), gráfica (GUI, com ícones e menus) ou natural (toque).' },
    { title: 'Dar independência do hardware', description: 'Via API, o desenvolvedor constrói aplicativos sem conhecer os detalhes internos do SO nem do hardware.' },
    { title: 'Gerenciar a memória do sistema', description: 'Permite que o computador execute as instruções de forma eficiente e na velocidade do processador.' },
    { title: 'Gerenciar o processamento de tarefas', description: 'Multitarefa (mais de um programa ao mesmo tempo) e compartilhamento de tempo (mais de uma pessoa ao mesmo tempo).' },
    { title: 'Fornecer capacidade de rede', description: 'Permite que os computadores enviem e recebam dados e compartilhem recursos.' },
    { title: 'Controlar acesso e segurança', description: 'Protege contra acesso não autorizado; o SO estabelece o procedimento de logon.' },
    { title: 'Gerenciar arquivos', description: 'Garante que os arquivos estejam disponíveis quando necessários e protegidos de quem não tem autorização.' },
];

export const softwareAcquisition: ComparisonRow[] = [
    { criterion: 'O que é', left: 'Programa único feito para uma necessidade específica', right: 'Programa pronto, já existente, que é adquirido' },
    { criterion: 'Custo e prazo', left: 'Mais caro e mais demorado', right: 'Mais barato e disponível de imediato' },
    { criterion: 'Aderência ao processo', left: 'Atende exatamente às regras do negócio', right: 'Pode exigir adaptar o processo ao software' },
    { criterion: 'Vantagem competitiva', left: 'Pode gerar, por ser exclusivo', right: 'Dificilmente gera — o concorrente compra igual' },
    { criterion: 'Manutenção', left: 'Responsabilidade de quem encomendou', right: 'Do fornecedor, via atualizações e suporte' },
];

export const softwareTrends: PanelItem[] = [
    { title: 'Bug de software', description: 'Defeito que impede o programa de funcionar como deveria. Mitiga-se registrando o software, lendo os arquivos leia-me, buscando correções no site do fabricante e instalando as atualizações.' },
    { title: 'Freeware', description: 'Software disponibilizado ao público gratuitamente — o que não significa que o código-fonte esteja aberto.' },
    { title: 'Código-fonte aberto', description: 'Distribuído, normalmente de graça, junto com o código-fonte. A licença GPL garante executar para qualquer fim, estudar e adaptar, redistribuir cópias e liberar melhorias ao público.' },
    { title: 'SaaS e computação em nuvem', description: 'SaaS permite assinar um aplicativo entregue pela web mediante taxa mensal ou por uso; a computação em nuvem usa recursos de computação na internet em vez de máquinas locais.' },
];

/* ------------------------------------------------- Banco de dados e BI */

export const dataHierarchy = [
    'Bit — dígito binário, circuito ligado ou desligado',
    'Byte — normalmente oito bits',
    'Caractere — bloco de construção básico da informação',
    'Campo — descreve um aspecto de um objeto ou atividade',
    'Registro — coleção de campos relacionados',
    'Arquivo — coleção de registros relacionados',
    'Banco de dados — coleção de arquivos integrados e relacionados',
];

export const relationalOperations: PanelItem[] = [
    { title: 'Seleção', description: 'Elimina LINHAS de acordo com um critério. Ex.: apenas os alunos do 1º período.' },
    { title: 'Projeção', description: 'Elimina COLUNAS da tabela. Ex.: apenas os campos nome e matrícula, de todos os alunos.' },
    { title: 'Junção', description: 'Combina duas ou mais tabelas em um resultado único.' },
    { title: 'Vinculação', description: 'Manipula duas ou mais tabelas que compartilham pelo menos um atributo de dados em comum.' },
];

export const dbmsFunctions: PanelItem[] = [
    { title: 'Fornecer uma visão ao usuário', description: 'O esquema descreve todo o banco de dados e o SGBD o consulta para localizar onde acessar os dados pedidos.' },
    { title: 'Criar e modificar o banco', description: 'Pela DDL (linguagem de definição de dados), que descreve os dados e as relações do esquema. O dicionário de dados detalha todos os dados usados.' },
    { title: 'Armazenar e recuperar dados', description: 'Os aplicativos pedem os dados ao SGBD; o controle de simultaneidade resolve o caso de dois usuários precisarem do mesmo registro ao mesmo tempo.' },
    { title: 'Manipular dados e gerar relatórios', description: 'Pela DML e pela SQL, adotada pelo ANSI como linguagem-padrão de consulta dos bancos relacionais. O QBE é a alternativa visual de montar consultas.' },
];

export const biConcepts: ConceptItem[] = [
    {
        title: 'Datawarehouse',
        description: 'Banco de dados que reúne as informações comerciais de muitas fontes da empresa para apoiar a tomada de decisão.',
        accent: 'accent',
    },
    {
        title: 'Data mart',
        description: 'Subconjunto de um datawarehouse, recortado para uma área ou assunto específico.',
        accent: 'accent2',
    },
    {
        title: 'Data mining',
        description: 'Descoberta AUTOMATIZADA de padrões e relações dentro do datawarehouse.',
        accent: 'accent3',
    },
    {
        title: 'Análise preditiva',
        description: 'Forma de data mining que combina dados históricos com suposições sobre o futuro para prever resultados de eventos.',
        accent: 'accent4',
    },
    {
        title: 'Inteligência empresarial (BI)',
        description: 'Reunir a informação certa, no momento oportuno e de forma útil, e analisá-la para impactar a estratégia, a tática ou as operações.',
        accent: 'accent5',
    },
    {
        title: 'Inteligência competitiva e contrainteligência',
        description:
            'A competitiva limita-se a informações sobre os concorrentes; a contrainteligência são as etapas para proteger as próprias informações de coletores hostis.',
        accent: 'accent',
    },
];

/* ------------------------------------------------------ Telecomunicações */

export const channelTypes: PanelItem[] = [
    { title: 'Simplex', description: 'Transmite os dados em apenas uma direção.' },
    { title: 'Half-duplex', description: 'Transmite nas duas direções, mas não simultaneamente — uma de cada vez.' },
    { title: 'Full-duplex', description: 'Transmite nas duas direções ao mesmo tempo.' },
];

export const networkScopes: StatItem[] = [
    { label: 'PAN', value: 'Área pessoal, cerca de 10 m', accent: 'text-accent' },
    { label: 'LAN', value: 'Área local: escritório ou casa', accent: 'text-accent2' },
    { label: 'MAN', value: 'Área metropolitana: campus ou cidade', accent: 'text-accent3' },
    { label: 'WAN', value: 'Área expandida: grandes regiões', accent: 'text-accent4' },
];

export const networkHardware: PanelItem[] = [
    { title: 'Modem', description: 'Dispositivo de modulação e demodulação do sinal.' },
    { title: 'Multiplexador', description: 'Combina dados de diversas fontes em um único sinal de saída que carrega múltiplos canais.' },
    { title: 'Comutador (switch)', description: 'Usa o endereço físico do dispositivo em cada mensagem que entra na rede.' },
    { title: 'Ponte (bridge)', description: 'Conecta duas LANs que usam o mesmo protocolo de telecomunicações.' },
    { title: 'Roteador', description: 'Encaminha pacotes de dados através de duas ou mais redes DISTINTAS até o destino.' },
    { title: 'Gateway', description: 'Atua como a entrada para outra rede.' },
];

export const processingAlternatives: PanelItem[] = [
    { title: 'Centralizado', description: 'Todo o processamento ocorre em um único local ou instalação.' },
    { title: 'Descentralizado', description: 'Os dispositivos de processamento ficam em vários locais remotos, sem conexão entre si.' },
    { title: 'Distribuído', description: 'Os dispositivos ficam em locais remotos, mas CONECTADOS por uma rede — é o que diferencia do descentralizado.' },
];

/* -------------------------------------------------------------- Internet */

export const threeNetworks: ComparisonRow[] = [
    { criterion: 'Quem acessa', left: 'Membros da própria organização', right: 'Parceiros externos autorizados' },
    { criterion: 'Alcance', left: 'Interno à empresa', right: 'Estende recursos SELECIONADOS da intranet' },
    { criterion: 'Exemplo típico', left: 'Portal do funcionário, normas internas', right: 'Fornecedor consultando o nível de estoque' },
    { criterion: 'Tecnologia', left: 'Padrões da internet e da web', right: 'Padrões da internet e da web' },
];

export const webConcepts: PanelItem[] = [
    { title: 'HTML', description: 'A linguagem-padrão de descrição das páginas web. As tags informam ao navegador como formatar o conteúdo.' },
    { title: 'CSS', description: 'Linguagem de marcação que define o aspecto visual do conteúdo de uma página.' },
    { title: 'XML', description: 'Linguagem de marcação para documentos que contêm informações estruturadas; é a chave dos serviços web.' },
    { title: 'Serviços web', description: 'SOAP define o formato XML das mensagens, WSDL descreve as interfaces do serviço e UDDI registra os serviços.' },
    { title: 'Web 2.0', description: 'A web como recurso bidirecional e plataforma de computação: o usuário deixa de só consumir e passa a contribuir com conteúdo.' },
    { title: 'VPN e tunelamento', description: 'A VPN é a conexão segura entre dois pontos na internet; o tunelamento é o processo de encapsular o tráfego em pacotes IP para transportá-lo.' },
];

/* -------------------------------------------------- Comércio eletrônico */

export const ecommerceCategories: ConceptItem[] = [
    {
        title: 'B2B — Negócio a Negócio',
        description:
            'Todos os participantes são organizações. Conecta parceiros na cadeia de suprimentos virtual, reduzindo tempo de reabastecimento e custos.',
        accent: 'accent',
    },
    {
        title: 'B2C — Negócio a Cliente',
        description:
            'O cliente trata diretamente com a organização e evita intermediários. É onde ocorre a desintermediação, e muitos bens saem mais baratos por isso.',
        accent: 'accent2',
    },
    {
        title: 'C2C — Cliente a Cliente',
        description: 'Clientes vendem diretamente a outros clientes, em leilões e classificados on-line.',
        accent: 'accent3',
    },
    {
        title: 'Governo eletrônico',
        description:
            'Uso de TIC para simplificar o compartilhamento de informações e acelerar processos que eram em papel. Formas: G2C (governo a cidadão), G2B (governo a negócios) e G2G (governo a governo).',
        accent: 'accent4',
    },
];

export const multiStageModel = [
    'Busca e identificação',
    'Seleção e negociação',
    'Aquisição eletrônica de produtos e serviços',
    'Entrega de produtos e serviços',
    'Serviços pós-venda',
];

export const ecommerceChallenges: PanelItem[] = [
    { title: 'Privacidade do cliente', description: 'Cerca de um terço dos usuários adultos da internet não compra on-line por preocupação com privacidade.' },
    { title: 'Falta de confiança no vendedor', description: 'Superar a desconfiança em relação a vendedores on-line desconhecidos é um obstáculo direto à conversão.' },
    { title: 'Questões globais', description: 'Cultura, idioma, tempo e distância, infraestrutura, moeda e desafios jurídicos entre países.' },
    { title: 'Limitações do móvel', description: 'Telas pequenas, entrada limitada, menos poder de processamento e menos largura de banda. O WAP é o padrão para aplicativos de internet em dispositivos sem fio.' },
];

export const paymentSystems: PanelItem[] = [
    { title: 'Certificado digital', description: 'Anexo a uma mensagem ou dados embutidos em um site que verifica a identidade de um remetente ou de um site.' },
    { title: 'Autoridade certificadora (CA)', description: 'Organização terceirizada de confiança que emite os certificados digitais.' },
    { title: 'SSL', description: 'Protocolo usado para proteger dados sensíveis em trânsito.' },
    { title: 'Dinheiro eletrônico', description: 'Quantia computadorizada, armazenada e usada à vista em transações de comércio eletrônico.' },
    { title: 'Cartão inteligente', description: 'Dispositivo do tamanho de um cartão de crédito com microchip embutido, que fornece memória eletrônica e capacidade de processamento.' },
    { title: 'P-Card', description: 'Cartão de crédito usado para simplificar os processos tradicionais de compra e de pagamento de faturas.' },
];

/* ---------------------------------------------------- Sistemas numéricos */

export const numberBases: StatItem[] = [
    { label: 'Base 2', value: 'Binário: 0 e 1', accent: 'text-accent' },
    { label: 'Base 8', value: 'Octal: 0 a 7', accent: 'text-accent2' },
    { label: 'Base 10', value: 'Decimal: 0 a 9', accent: 'text-accent3' },
    { label: 'Base 16', value: 'Hexa: 0-9 e A-F', accent: 'text-accent4' },
];

export const conversionMethods: PanelItem[] = [
    {
        title: 'Qualquer base → decimal',
        description:
            'Aplicar a notação posicional: multiplicar cada algarismo pelo peso da sua posição e somar. Ex.: 527₈ = 5×64 + 2×8 + 7×1 = 343₁₀.',
    },
    {
        title: 'Decimal → qualquer base',
        description:
            'Divisões sucessivas pela base. O resultado é o último quociente seguido dos restos, lidos de baixo para cima. Ex.: 412₁₀ ÷ 16 sucessivamente dá 19C₁₆.',
    },
    {
        title: 'Binário ↔ octal',
        description:
            'Agrupar os bits de 3 EM 3 a partir do LSB e trocar cada grupo pelo octal equivalente. No sentido inverso, trocar cada algarismo octal por 3 bits.',
    },
    {
        title: 'Binário ↔ hexadecimal',
        description:
            'Agrupar os bits de 4 EM 4 a partir do LSB e trocar cada grupo pelo hexa equivalente. No sentido inverso, trocar cada algarismo hexa por 4 bits.',
    },
    {
        title: 'Octal ↔ hexadecimal',
        description:
            'Não há caminho direto: converte-se para binário no meio do caminho. É por isso que o binário fica no centro do diagrama de conversões.',
    },
    {
        title: 'Decimal fracionário → binário',
        description:
            'Multiplicações sucessivas por 2, anotando a parte inteira de cada produto na ordem em que aparece. Pode não terminar, gerando dízima binária.',
    },
];

export const numericDetails: PanelItem[] = [
    { title: 'LSB e MSB', description: 'O bit mais à direita é o LSB (menos significativo, menor peso); o mais à esquerda é o MSB (mais significativo, maior peso).' },
    { title: 'Faixa de N bits', description: 'Com N bits representam-se 2ᴺ valores distintos, indo de 0 até 2ᴺ − 1. Com 8 bits: 256 valores, de 0 a 255.' },
    { title: 'Nibble e byte', description: 'Um grupo de 4 bits é um nibble; um grupo de 8 bits é um byte.' },
    { title: 'Por que octal e hexa existem', description: 'Servem para representar números binários de forma compacta e legível. É mais fácil escrever E6₁₆ do que 11100110₂ — e a conversão entre eles é imediata.' },
];

/* ---------------------------------------------------- Aritmética binária */

export const sumRules: ComparisonRow[] = [
    { criterion: '0 + 0', left: '0', right: 'Nenhum transporte' },
    { criterion: '0 + 1', left: '1', right: 'Nenhum transporte' },
    { criterion: '1 + 0', left: '1', right: 'Nenhum transporte' },
    { criterion: '1 + 1', left: '0', right: 'Vai 1 para a coluna seguinte' },
    { criterion: '1 + 1 + 1', left: '1', right: 'Vai 1 para a coluna seguinte' },
];
