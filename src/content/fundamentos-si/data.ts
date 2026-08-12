import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';
import type { ExamDefinition } from '../../lib/exams';

export const FUNDAMENTOS_SI_GUIDE_CONTEXT = `
GUIA COMPLETO DE FUNDAMENTOS DE SISTEMAS DE INFORMAÇÃO (FUSI) - Resumo:

1. DADOS, INFORMAÇÃO E CONHECIMENTO: Dados são fatos brutos, sem contexto (ex.: o número 42). Informação é uma coleção de fatos organizados de modo que tenham valor além dos fatos em si — é o dado processado e contextualizado. Processo é um conjunto de tarefas organizadas de forma lógica para obter um resultado definido; é o processo que transforma dado em informação. Conhecimento é a consciência e compreensão de um conjunto de informações e de como elas podem ser úteis para apoiar uma tarefa ou decisão. A cadeia é dado → (processo) → informação → conhecimento. CARACTERÍSTICAS DA INFORMAÇÃO VALIOSA: precisa (livre de erro), completa (contém todos os fatos importantes), econômica (o custo de produzi-la não supera seu valor), flexível (serve a vários propósitos), confiável (depende do método de coleta e da fonte), relevante (importa para o tomador de decisão), simples (sem complexidade excessiva — excesso de informação atrapalha), pontual/no prazo (entregue quando é necessária), verificável (pode ser conferida), acessível (disponível a quem tem direito no formato certo) e segura (protegida de acesso não autorizado). Informação imprecisa ou incompleta leva a decisões ruins e prejuízo.

2. CONCEITO DE SISTEMA E DE SISTEMA DE INFORMAÇÃO: Sistema é um conjunto de elementos que interagem para realizar objetivos. Todo sistema tem quatro componentes: ENTRADA (captar e reunir dados brutos), PROCESSAMENTO (converter ou transformar dados em saídas úteis), SAÍDA (produzir informação útil, normalmente documentos e relatórios) e REALIMENTAÇÃO/FEEDBACK (informação originada no próprio sistema, usada para fazer mudanças na entrada ou no processamento). O feedback é o que permite a correção — é o mecanismo de controle. Sistema de Informação (SI) é um conjunto de componentes inter-relacionados que coleta, manipula, armazena e dissemina dados e informações, fornecendo um mecanismo de realimentação para atender a um objetivo. DESEMPENHO DO SISTEMA: eficiência é a medida do que é produzido dividido pelo que é consumido (fazer certo, com menos recurso); eficácia é a medida do grau em que um sistema alcança suas metas (fazer a coisa certa). Padrão de desempenho é um objetivo específico do sistema (ex.: produzir no máximo 1% de peças com defeito). Não confundir: um sistema pode ser eficiente e ineficaz ao mesmo tempo.

3. CBIS — SISTEMA DE INFORMAÇÃO BASEADO EM COMPUTADOR: conjunto único de SEIS componentes configurados para coletar, manipular, armazenar e processar dados em informação: (1) HARDWARE — equipamentos que realizam entrada, processamento, armazenamento e saída; (2) SOFTWARE — programas que comandam a operação do computador; (3) BANCO DE DADOS — coleção organizada de fatos e informações, com dois ou mais arquivos de dados relacionados; (4) TELECOMUNICAÇÕES E REDES — transmissão eletrônica de sinais, incluindo internet, intranet e extranet; (5) PESSOAS — o elemento MAIS IMPORTANTE na maioria dos CBIS; (6) PROCEDIMENTOS — estratégias, políticas, métodos e regras para utilizar o CBIS. Infraestrutura de tecnologia é o conjunto compartilhado desses recursos, que forma a base de cada CBIS.

4. TIPOS DE SISTEMAS DE INFORMAÇÃO NAS EMPRESAS: TPS (Sistema de Processamento de Transações) — registra e processa o grande volume de transações rotineiras do dia a dia (vendas, folha de pagamento); transação é qualquer intercâmbio relacionado a negócios. ERP (Planejamento de Recursos Empresariais) — conjunto de programas integrados que gerencia as operações comerciais vitais de uma organização, geralmente global e com múltiplas filiais, integrando fabricação e finanças. MIS/SIG (Sistema de Informação Gerencial) — fornece informações de ROTINA em relatórios padrão para gestores, com foco na EFICIÊNCIA OPERACIONAL; alimenta-se dos dados do TPS e do ERP. DSS (Sistema de Apoio a Decisões) — apoia a tomada de decisão específica de um problema, com foco na EFICÁCIA da decisão; usado quando o problema é complexo e as informações necessárias são difíceis de obter. Distinção-chave de prova: MIS = rotina + eficiência + relatórios padrão; DSS = problema específico + eficácia + decisão complexa. SISTEMAS ESPECIALIZADOS: SGC (gestão do conhecimento) cria, armazena, compartilha e usa o conhecimento da organização; IA (inteligência artificial) assume características da inteligência humana e abrange robótica, sistemas de visão, processamento de linguagem natural, sistemas de aprendizagem e redes neurais; sistemas especialistas dão sugestões e funcionam como um especialista de uma área, apoiados numa base de conhecimento com dados, regras, procedimentos e relações; realidade virtual simula um ambiente real ou imaginado em três dimensões.

5. DESENVOLVIMENTO DE SISTEMAS: atividade de criar ou modificar sistemas empresariais existentes, em cinco etapas: INVESTIGAÇÃO de sistemas (compreender claramente o problema a ser solucionado ou a oportunidade a ser abordada), ANÁLISE de sistemas (definir os problemas e as oportunidades do sistema existente), PROJETO de sistemas (determinar COMO o novo sistema funcionará para atender às necessidades definidas na análise), IMPLEMENTAÇÃO (criar ou adquirir os componentes, reuni-los e colocar o sistema em operação) e MANUTENÇÃO E REVISÃO (verificar e modificar o sistema para que continue atendendo às necessidades mutáveis do negócio). Terceirização permite que a empresa foque no que faz melhor e delegue funções a empresas especializadas.

6. SISTEMAS DE INFORMAÇÃO NAS ORGANIZAÇÕES: Organização é uma coleção formal de pessoas e outros recursos estabelecida para alcançar um conjunto de metas; é ela própria um sistema, com entradas, mecanismo de transformação e saídas. CADEIA DE SUPRIMENTOS (GCS) determina quais suprimentos são necessários, em que quantidade, como serão processados em bens e serviços e como o envio será agendado, monitorado e controlado. CRM (gestão de relacionamento com o cliente) gerencia todos os aspectos dos encontros com o cliente — marketing, propaganda, vendas, atendimento e retenção. ESTRUTURAS ORGANIZACIONAIS: tradicional (hierarquia de decisão e fluxo de autoridade do topo à base), plana (poder de decisão nos níveis inferiores, com empoderamento dando mais responsabilidade e autoridade aos funcionários), de projeto (centrada nos principais produtos ou serviços, com equipes muitas vezes temporárias), de equipe (centrada no trabalho de equipes ou grupos) e virtual (emprega pessoas, grupos ou unidades em áreas geograficamente dispersas, reduzindo custos e permitindo trabalho colaborativo). CULTURA E MUDANÇA: cultura organizacional é o conjunto dos principais entendimentos e suposições compartilhados por um grupo; o MODELO DE MUDANÇA tem três fases — DESCONGELAMENTO (interromper velhos hábitos e criar clima receptivo), MOVIMENTO (aprender novos métodos, comportamentos e sistemas) e RECONGELAMENTO (reforçar as mudanças para que o novo processo seja aceito e vire parte do trabalho). Aprendizagem organizacional é a adaptação às novas condições com base na experiência ao longo do tempo. REENGENHARIA é a revisão RADICAL de processos, estruturas, sistemas e valores para alcançar novo patamar de resultados; MELHORIA CONTÍNUA busca constantemente aperfeiçoamentos incrementais — a diferença é o grau e a ruptura. TAM (modelo de aceitação de tecnologia) especifica os fatores que levam a melhores atitudes sobre o SI; difusão da tecnologia mede quão amplamente ela está espalhada pela organização e infusão mede até que ponto ela permeia um departamento.

7. VANTAGEM COMPETITIVA: benefício significativo e, idealmente, de longo prazo de uma empresa sobre seus concorrentes. As CINCO FORÇAS que levam as empresas a buscá-la: rivalidade entre os concorrentes existentes, ameaça de novos concorrentes (maior quando os custos de entrada e saída são baixos), ameaça de produtos e serviços substitutos, poder de negociação dos compradores/clientes e poder de negociação dos fornecedores. ESTRATÉGIAS: liderança em custo, diferenciação, estratégia de nicho, alterar a estrutura do setor (inclusive via aliança estratégica entre duas ou mais empresas), criar novos produtos e serviços, aperfeiçoar linhas existentes, crescimento em vendas, ser o primeiro no mercado, personalizar produtos, contratar as melhores pessoas e inovação. MEDINDO O DESEMPENHO DO SI: PRODUTIVIDADE = (Saída/Entrada) × 100%; ROI (retorno sobre investimento) investiga lucros e benefícios adicionais como porcentagem do investimento feito em TI; crescimento nos ganhos; participação de mercado e velocidade para o mercado; percepção e satisfação do cliente; e custo total de propriedade (soma de todos os custos ao longo da vida do SI). CARREIRAS EM SI: além das habilidades técnicas, exigem comunicação escrita e oral, compreensão de como a organização opera e habilidade de trabalhar em grupo. Papéis: operações, desenvolvimento de sistemas e suporte. Cargos típicos: CIO (diretor de informática), CTO, gestor de SI e administrador de LAN. Certificação é o processo de testar habilidades e conhecimentos, com endosso de uma autoridade certificadora.

8. HARDWARE — CPU E MEMÓRIA: A CPU (unidade central de processamento) tem três partes: a ULA/ALU (unidade aritmética e lógica) que realiza cálculos matemáticos e comparações lógicas; a UNIDADE DE CONTROLE que acessa sequencialmente as instruções, decodifica-as e coordena o fluxo de dados; e os REGISTRADORES, áreas de armazenamento de altíssima velocidade que mantêm temporariamente pequenas unidades de instruções e dados. CICLO DE MÁQUINA em quatro etapas: buscar a instrução, decodificar a instrução, executar a instrução e armazenar o resultado. O tempo de ciclo é medido em nanossegundos (10⁻⁹ s) e picossegundos (10⁻¹² s), e o desempenho também em MIPS (milhões de instruções por segundo). A velocidade do relógio é medida em MHz (milhões de ciclos/s) e GHz (bilhões de ciclos/s). LEI DE MOORE: hipótese de que a densidade de transistores em um único chip dobra a cada dois anos. MEMÓRIA: RAM é temporária e VOLÁTIL (perde o conteúdo ao desligar) e tem variantes DRAM, SRAM, DDR SDRAM; ROM é NÃO VOLÁTIL e guarda permanentemente dados e instruções que não mudam; a memória CACHE é de alta velocidade e é acessada pelo processador mais rapidamente que a memória principal. Oito bits formam um byte. MULTIPROCESSAMENTO é a execução simultânea de duas ou mais instruções; o microprocessador multicore combina dois ou mais processadores independentes num único chip; a GPU é um processador especializado que assume as tarefas de gráficos 3D; a computação paralela executa simultaneamente a mesma tarefa em múltiplos processadores, e o processamento maciçamente paralelo conecta centenas ou milhares deles; a computação em grade usa um conjunto de computadores coordenados para resolver problemas comuns.

9. HARDWARE — ARMAZENAMENTO E DISPOSITIVOS: Comparado à memória, o armazenamento secundário é NÃO VOLÁTIL, tem maior capacidade e é bem mais barato por megabyte. MÉTODOS DE ACESSO: sequencial (os dados devem ser recuperados na ordem em que foram armazenados — SASD, caso da fita magnética) e direto (os registros podem ser recuperados em qualquer ordem — DASD, caso do disco magnético). Dispositivos: fitas magnéticas (usadas sobretudo para backup), discos magnéticos, RAID (matriz redundante de discos que gera bits extras a partir dos dados existentes, dando tolerância a falha), fita virtual, ópticos (CD-ROM, DVD com cerca de 6× a capacidade do CD e Blu-ray com cerca de 3× a do DVD) e SSD em estado sólido, que armazena em chips, tem menos partes móveis e é menos frágil, mas custa mais por GB. Opções corporativas: NAS (armazenamento de disco com endereço próprio na rede), SAN (rede de alta velocidade dedicada entre dispositivos de armazenamento e computadores) e armazenamento como serviço. ENTRADA E SAÍDA: entrada de dados converte dados legíveis por humanos em forma legível por máquina; automação da fonte de dados captura e edita os dados onde eles são criados. Dispositivos de entrada incluem reconhecimento de voz, câmeras digitais, escâneres, leitores ópticos, MICR, tarja magnética, cartões chip e PIN, PDV, ATM, caneta, tela sensível ao toque, código de barras e RFID. Saída: monitores de plasma, LCD e OLED (consumo de energia do maior para o menor: plasma, LCD, OLED), impressoras e plotters. CLASSES DE COMPUTADOR: portáteis (handheld, smartphone, laptop, notebook, netbook, tablet), não portáteis de usuário único (thin client, desktop, nettop, estação de trabalho) e multiusuário (servidor, servidor blade, mainframe e supercomputador). Escalabilidade é a capacidade de aumentar o poder de processamento para atender mais usuários, dados ou transações. INFORMÁTICA VERDE é o programa de eficiência e responsabilidade ambiental no projeto, fabricação, operação e descarte dos produtos de TI, com as metas de reduzir materiais perigosos, reduzir custos de energia e permitir descarte seguro ou reciclagem.

10. SOFTWARE: Programa de computador é uma sequência de instruções para o computador; a documentação descreve suas funções. Duas categorias: SOFTWARE DE SISTEMAS (coordena as atividades e funções do hardware e de outros programas) e SOFTWARE APLICATIVO (ajuda o usuário a resolver determinados problemas). SISTEMA OPERACIONAL é o conjunto de programas que controla o hardware e atua como interface com os aplicativos; seu NÚCLEO (kernel) é o coração do SO, interliga seus componentes e regula os outros programas. Atividades do SO: executar funções comuns de hardware, fornecer interface de usuário e gestão de entrada/saída, dar um grau de independência do hardware, gerenciar a memória, gerenciar o processamento de tarefas, fornecer capacidade de rede, controlar acesso e segurança e gerenciar arquivos. INTERFACES: baseada em comando (exige comandos de texto), GUI (ícones e menus) e natural (toque). A API (interface de programa aplicativo) permite que os aplicativos usem o SO sem que o desenvolvedor conheça os detalhes internos do SO nem do hardware — é o que dá independência de hardware. Multitarefa é executar mais de um programa ao mesmo tempo; compartilhamento de tempo permite mais de uma pessoa usar o sistema simultaneamente. Outros softwares de sistema: programas UTILITÁRIOS (hardware, segurança, compactação, antispam, rede) e MIDDLEWARE, que permite a comunicação e a troca de dados entre sistemas diferentes e serve de interface entre a internet e sistemas legados; a SOA (arquitetura orientada a serviço) usa serviços modulares para que sistemas interajam entre si. TIPOS DE AQUISIÇÃO: software PROPRIETÁRIO (programa único desenvolvido para um aplicativo específico, geralmente sob encomenda, que pode gerar vantagem competitiva) e software COMERCIALMENTE DISPONÍVEL (programa pronto que é adquirido, mais barato e rápido); as três abordagens são construir, comprar ou combinar as duas. SaaS (software como serviço) permite assinar um aplicativo entregue pela web mediante taxa mensal ou por uso; ASP é a empresa que fornece software, suporte e hardware através de uma rede; computação em nuvem é o uso de recursos de computação na internet em vez de em computadores locais. Esfera de influência: pessoal, de grupo de trabalho (groupware/software colaborativo) e de empreendimento. LINGUAGENS DE PROGRAMAÇÃO são conjuntos de palavras-chave, símbolos e regras para construir afirmações; sintaxe é o conjunto de regras da linguagem; o COMPILADOR converte o código-fonte em instruções de linguagem de máquina; as gerações vão da linguagem de máquina às 5GLs usadas em IA e sistemas especialistas. QUESTÕES: bug é um defeito que impede o programa de funcionar como deveria; freeware é distribuído gratuitamente; software de código-fonte aberto é distribuído com o código-fonte, e a licença GPL garante executar, estudar e adaptar, redistribuir cópias e melhorar o programa liberando as melhorias.

11. BANCO DE DADOS E INTELIGÊNCIA DE NEGÓCIOS: Banco de dados é uma coleção organizada de dados. SGBD/DBMS é o grupo de programas que manipula o banco de dados e fornece a interface entre ele, os usuários e os aplicativos. DBA (administrador de banco de dados) é o profissional que dirige todas as atividades relacionadas ao banco de dados. HIERARQUIA DOS DADOS, do menor para o maior: BIT (dígito binário, circuito ligado ou desligado) → BYTE (normalmente oito bits) → CARACTERE → CAMPO (nome, número ou combinação de caracteres que descreve um aspecto de um objeto) → REGISTRO (coleção de campos relacionados) → ARQUIVO (coleção de registros relacionados) → BANCO DE DADOS (coleção de arquivos integrados e relacionados). ENTIDADE é a pessoa, lugar ou coisa sobre a qual os dados são coletados; ATRIBUTO é uma característica da entidade; item de dados é o valor específico de um atributo; CHAVE é o campo ou conjunto de campos usado para identificar um registro, e a CHAVE PRINCIPAL (primária) identifica unicamente o registro. Abordagem tradicional: cada sistema usa arquivos dedicados, gerando redundância; abordagem de banco de dados: o grupo de dados relacionados é COMPARTILHADO por diversos aplicativos. MODELO RELACIONAL descreve os dados em formato tabular: cada LINHA é um registro (entidade) e cada COLUNA é um atributo (campo); domínio é o intervalo de valores permitidos para um atributo. Manipulações: SELEÇÃO elimina LINHAS conforme um critério, PROJEÇÃO elimina COLUNAS, JUNÇÃO combina duas ou mais tabelas e a vinculação manipula tabelas que compartilham ao menos um atributo comum. Modelagem: modelo de dados é o diagrama de entidades e suas relações, e o diagrama ENTIDADE-RELACIONAMENTO (ER) usa símbolos gráficos para mostrar essa organização. Esquema descreve todo o banco de dados; DDL (linguagem de definição de dados) define e descreve os dados e relações; DML (linguagem de manipulação de dados) manipula os dados; SQL é a linguagem-padrão de consulta adotada pelo ANSI para bancos relacionais; dicionário de dados é a descrição detalhada de todos os dados usados. Centro de dados é o edifício climatizado que abriga os servidores e sistemas de missão crítica. DATAWAREHOUSE é o banco que reúne informações de muitas fontes da empresa para apoiar decisão; DATA MART é um subconjunto do datawarehouse; DATA MINING é a descoberta AUTOMATIZADA de padrões e relações no datawarehouse; ANÁLISE PREDITIVA combina dados históricos com suposições sobre o futuro para prever resultados. INTELIGÊNCIA EMPRESARIAL (BI) é reunir a informação certa, no momento oportuno e de forma útil, e analisá-la para impactar positivamente a estratégia, a tática ou as operações; INTELIGÊNCIA COMPETITIVA limita-se a informações sobre os concorrentes; CONTRAINTELIGÊNCIA são as etapas para proteger as informações contra coletores hostis. OLAP permite explorar os dados sob múltiplas perspectivas. NoSQL lida com dados que não se ajustam às tabelas relacionais; bancos distribuídos espalham os dados em vários bancos menores conectados por telecomunicações; banco replicado mantém um conjunto duplicado dos dados mais usados.

12. TELECOMUNICAÇÕES E REDES: Telecomunicações é a transmissão eletrônica de sinais para comunicação; o meio é a substância material que carrega o sinal; protocolo de rede é o conjunto de regras, algoritmos e mensagens que permitem que os dispositivos se comuniquem. Comunicação síncrona: o receptor recebe instantaneamente; assíncrona: recebe após um atraso. CANAIS: SIMPLEX transmite em apenas uma direção; HALF-DUPLEX transmite nas duas direções, mas não ao mesmo tempo; FULL-DUPLEX transmite nas duas direções simultaneamente. Largura de banda é a taxa de troca de dados, medida em bits/s. Rede de comutação de circuitos estabelece um circuito antes da comunicação; rede de comutação de pacotes não cria caminho fixo. MEIOS GUIADOS: par trançado (categorias 2, 3, 5, 5E, 6), coaxial (menos ruído que o par trançado) e fibra óptica (transmite com feixes de luz). SEM FIO de curta distância: NFC, Bluetooth, banda ultralarga (UWB), infravermelho e Zigbee (baixo custo e pouca energia, usado em segurança e climatização); médio alcance: Wi-Fi (cerca de 90 m ao ar livre e 30 m dentro de um edifício); longo alcance: micro-ondas (300 MHz a 300 GHz), satélite (geoestacionário, LEO, VSAT), malha sem fio, 3G, 4G (5 a 40 Mbps), LTE e WiMAX. TIPOS DE REDE POR ALCANCE: PAN (área pessoal, cerca de 10 m), LAN (área local, escritório ou casa), MAN (área metropolitana, campus ou cidade) e WAN (área expandida, grandes regiões). PROCESSAMENTO: centralizado (tudo num único local), descentralizado (dispositivos em vários locais remotos, sem conexão) e distribuído (dispositivos em locais remotos CONECTADOS por rede). Arquitetura cliente/servidor dedica múltiplas plataformas a funções especiais; o cliente requisita serviços e o servidor de banco de dados envia apenas os dados que satisfazem a consulta, não o arquivo inteiro. HARDWARE DE REDE: modem (modulação/demodulação), multiplexador (combina dados de várias fontes num único sinal), PBX, COMUTADOR (usa o endereço físico do dispositivo), PONTE (conecta duas LANs de mesmo protocolo), ROTEADOR (encaminha pacotes através de duas ou mais redes distintas) e GATEWAY (entrada para outra rede). SEGURANÇA: criptografia converte a mensagem numa forma que só o receptor pretendido entende, usando uma chave de criptografia; WEP (chave de 64 bits, depois 128) foi superado pelo WPA, significativamente mais seguro; war driving é procurar pontos de acesso sem fio desprotegidos. VPN é a rede privada que usa uma rede pública para conectar locais remotos com conexão criptografada. Aplicações: EDI (intercâmbio eletrônico de dados entre computadores de organizações, elimina papel e reduz erros), transferência eletrônica de fundos, telecomutação (trabalho remoto), videoconferência, call centers, códigos QR e GPS.

13. INTERNET, INTRANET E EXTRANET: A internet nasceu da ARPANET, projeto iniciado pelo Departamento de Defesa dos EUA em 1969. O PROTOCOLO IP possibilita que os computadores encaminhem tráfego de uma rede para outra, e o TCP é o protocolo da camada de transporte usado com o IP — juntos formam o TCP/IP. Backbone é uma das conexões de longa distância e alta velocidade da internet. URL é o endereço da web que especifica a localização de uma página. A ICANN é responsável por gerenciar os endereços IP e os nomes de domínio e tem autoridade para resolver disputas por nomes de domínio. Formas de acesso: LAN, provedor de acesso (ISP), discada, cabo, DSL, satélite e sem fio. A WEB foi desenvolvida por TIM BERNERS-LEE no CERN, originalmente como sistema interno de gerenciamento de documentos. DISTINÇÃO IMPORTANTE: a INTERNET é a infraestrutura — computadores, roteadores, cabos, software e os protocolos TCP/IP; a WEB é um SERVIÇO que roda sobre ela, formado por servidores, clientes, o protocolo HTTP e as linguagens de marcação. Hyperlink é o texto ou gráfico que, clicado, abre outra página; navegador é o software cliente; HTML é a linguagem-padrão de descrição das páginas, com tags que informam a formatação; CSS define o aspecto visual; XML é a linguagem de marcação para documentos com informações estruturadas e é a chave dos serviços web (com SOAP para o formato das mensagens, WSDL para descrever interfaces e UDDI para registrar os serviços). Web 2.0 é a web como plataforma bidirecional, em que o usuário também contribui com conteúdo. Ferramenta de busca localiza informações por palavras-chave e usa programas chamados spiders. Portal web combina informações e links e atua como ponto de entrada. Computação em nuvem entrega software e armazenamento como serviço de internet, em nuvem pública (aberta ao público geral) ou privada (dentro de uma rede privada). AS TRÊS REDES, distinção clássica de prova: INTERNET é pública e mundial; INTRANET é a rede corporativa INTERNA construída com padrões e tecnologias da internet e da web, restrita aos membros da organização; EXTRANET conecta recursos SELECIONADOS da intranet a usuários EXTERNOS autorizados — clientes, fornecedores e parceiros de negócios. VPN cria uma conexão segura entre dois pontos na internet, e o TUNELAMENTO é o processo pelo qual a VPN transfere informação encapsulando o tráfego em pacotes IP. Utilitários: Telnet (acesso a redes remotas por linha de comando) e FTP (transferência de arquivos entre um hospedeiro e um computador remoto).

14. COMÉRCIO ELETRÔNICO E MÓVEL: Comércio eletrônico é realizar atividades comerciais eletronicamente por redes de computadores; as atividades mais fortes candidatas à conversão são as baseadas em papel, demoradas e inconvenientes para o cliente. CATEGORIAS: B2B (negócio a negócio — todos os participantes são organizações; conecta parceiros na cadeia de suprimentos e reduz tempo de reabastecimento e custos), B2C (negócio a cliente — o cliente trata diretamente com a organização, evitando intermediários), C2C (cliente a cliente — clientes vendem diretamente a outros clientes, como em leilões on-line) e GOVERNO ELETRÔNICO nas formas G2C (governo a cidadão), G2B (governo a negócios) e G2G (governo a governo). DESINTERMEDIAÇÃO é a eliminação das organizações intermediárias entre o produtor e o consumidor — conceito central do B2C. M-COMMERCE (comércio móvel) é o uso de celulares e dispositivos sem fio para fazer pedidos e conduzir negócios; seus desafios são telas pequenas, entrada limitada, menos poder de processamento e menos largura de banda, e o WAP é o padrão de especificações para aplicativos de internet em dispositivos portáteis. E-procurement é o uso de SI e internet para adquirir peças e suprimentos; e-business usa SI e internet para realizar TODAS as tarefas e funções relacionadas ao comércio, sendo portanto mais amplo que o e-commerce. MODELO DE MULTIESTÁGIO da compra eletrônica, em cinco etapas: (1) busca e identificação, (2) seleção e negociação, (3) aquisição eletrônica de produtos e serviços, (4) entrega e (5) serviços pós-venda. VANTAGENS: redução de custos, aceleração do fluxo de bens e informações, aumento da precisão e melhora do atendimento. DESAFIOS: preocupações com a privacidade do cliente (cerca de 1/3 dos usuários adultos não compra on-line por isso), falta de confiança nos vendedores on-line e questões globais de cultura, idioma, tempo e distância, infraestrutura, moeda e questões jurídicas. APLICAÇÕES: e-tailing (venda direta da empresa ao cliente por lojas eletrônicas), cybermall (site único com muitos produtos e serviços), intercâmbios eletrônicos na fabricação (privados, de consórcio ou independentes), segmentação de mercado, anúncios cobrados por CPM/CPC/CPA, redirecionamento (mais de 95% dos visitantes saem sem comprar), comparação de preços, cupons, investimentos, serviços bancários e e-boutiques. ESTRATÉGIA: o site precisa ser fácil de usar, cumprir as metas da empresa, ser seguro e acessível de manter, e o modelo de sucesso tem três componentes — COMUNIDADE, CONTEÚDO e COMÉRCIO. Personalização explícita captura informações fornecidas pelo próprio usuário; a implícita captura dados das sessões on-line. PAGAMENTO ELETRÔNICO: certificado digital verifica a identidade de um remetente ou site e é emitido por uma autoridade certificadora (CA), terceiro confiável; SSL protege dados sensíveis; dinheiro eletrônico; cartão inteligente é do tamanho de um cartão de crédito com microchip embutido que fornece memória e capacidade de processamento; P-Card simplifica compras e pagamento de faturas.

15. SISTEMAS NUMÉRICOS — NOTAÇÃO POSICIONAL E CONVERSÕES: Na notação posicional, a posição de cada algarismo indica sua magnitude, também chamada de PESO. Sistemas: DECIMAL (base 10, algarismos 0-9), BINÁRIO (base 2, algarismos 0 e 1, chamados bits — binary digits), OCTAL (base 8, algarismos 0-7) e HEXADECIMAL (base 16, algarismos 0-9 e A-F, em que A=10, B=11, C=12, D=13, E=14 e F=15). O LSB (Least Significant Bit) é o bit mais à direita, de menor peso; o MSB (Most Significant Bit) é o mais à esquerda, de maior peso. QUALQUER BASE → DECIMAL: aplicar notação posicional, multiplicando cada algarismo pelo peso da sua posição e somando. Ex.: 100111₂ = 1×32 + 0×16 + 0×8 + 1×4 + 1×2 + 1×1 = 39₁₀; 527₈ = 5×64 + 2×8 + 7×1 = 343₁₀; 19C₁₆ = 1×256 + 9×16 + 12×1 = 412₁₀. DECIMAL → QUALQUER BASE: divisões sucessivas pela base, tomando o último quociente e os restos das divisões na ordem inversa. Ex.: 39₁₀ = 100111₂; 343₁₀ = 527₈; 412₁₀ = 19C₁₆. BINÁRIO ↔ OCTAL: agrupar os bits de 3 EM 3 a partir do LSB e substituir cada grupo pelo octal equivalente (e o caminho inverso substitui cada algarismo octal por 3 bits). Ex.: 101010111₂ = 527₈. BINÁRIO ↔ HEXA: agrupar os bits de 4 EM 4 a partir do LSB e substituir cada grupo pelo hexa equivalente (e o inverso substitui cada algarismo hexa por 4 bits). Ex.: 110011100₂ = 19C₁₆; 63D₁₆ = 11000111101₂. Para converter OCTAL ↔ HEXA passa-se pelo binário, porque não há relação direta entre potências de 8 e de 16 em grupos inteiros de bits. FRACIONÁRIOS: binário fracionário → decimal aplica notação posicional com pesos negativos (2⁻¹ = 0,5; 2⁻² = 0,25; 2⁻³ = 0,125). Ex.: 0,101₂ = 0,5 + 0 + 0,125 = 0,625₁₀. Decimal fracionário → binário usa MULTIPLICAÇÕES SUCESSIVAS por 2, tomando a parte inteira de cada produto na ordem em que aparece. Ex.: 0,625₁₀ = 0,101₂; já 0,8₁₀ = 0,11001100…₂ não termina, gerando dízima binária. No fracionário, o agrupamento de 3 em 3 (octal) ou de 4 em 4 (hexa) parte da VÍRGULA para a direita, completando com zeros à direita se faltar bit. OUTROS DETALHES: com N bits representam-se 2ᴺ valores, do 0 até 2ᴺ−1 (com 8 bits: 0 a 255); um grupo de 4 bits é um NIBBLE e um grupo de 8 bits é um BYTE.

DIVISÃO POR AVALIAÇÕES (declarada pela professora no mural da turma):
- 1ª PROVA (26/09/2022): Introdução aos Sistemas de Informação; Sistemas de Informação nas Organizações; Software de Sistemas e Aplicativos; Hardware.
- 2ª PROVA (07/11/2022): Banco de Dados e Inteligência de Negócios; Internet, Intranet e Extranet.
- 3ª PROVA (15/12/2022): Comércio Eletrônico; Conversão de Sistemas Numéricos (decimal, octal, hexadecimal); Soma e Subtração de Binários; Conversão de números fracionários.
- PROVA FINAL (22/12/2022): SGBD; Software; Hardware; Banco de Dados e Inteligência de Negócios; Comércio Eletrônico; Conversão Numérica (incluindo fracionários); Soma e Subtração de Binários.
Telecomunicações e Redes foi trabalhado em atividade e mapa mental, não em prova escrita.
`;

export const FUNDAMENTOS_SI_TOPICS: QuizTopicOption[] = [
    {
        value: 'prova1',
        label: '1ª Prova: Introdução, Organizações, Software e Hardware',
        prompt:
            'Conteúdo da 1ª Prova de Fundamentos de Sistemas de Informação: introdução aos sistemas de informação (dados vs. informação vs. conhecimento, características da informação valiosa, conceito de sistema, entrada/processamento/saída/realimentação, eficiência vs. eficácia, os seis componentes do CBIS, tipos de SI empresariais TPS/ERP/MIS/DSS, sistemas especializados e IA, etapas do desenvolvimento de sistemas); sistemas de informação nas organizações (organização como sistema, cadeia de suprimentos, CRM, estruturas tradicional/plana/projeto/equipe/virtual, cultura organizacional, modelo de mudança descongelamento-movimento-recongelamento, reengenharia vs. melhoria contínua, TAM, difusão e infusão, vantagem competitiva, cinco forças, estratégias competitivas, produtividade, ROI, custo total de propriedade, carreiras e papéis em SI); software (software de sistemas vs. aplicativo, sistema operacional e núcleo, atividades do SO, interfaces por comando/GUI/natural, API e independência de hardware, multitarefa, utilitários, middleware, SOA, software proprietário vs. comercialmente disponível, SaaS, ASP, computação em nuvem, esferas de influência, linguagens de programação e gerações, compilador, sintaxe, bugs, freeware e código aberto); e hardware (CPU com ULA, unidade de controle e registradores, ciclo de máquina em quatro etapas, MIPS, MHz e GHz, Lei de Moore, RAM volátil vs. ROM não volátil, cache, byte, multiprocessamento, multicore, GPU, computação paralela e em grade, armazenamento secundário, acesso sequencial vs. direto, RAID, SSD, NAS e SAN, dispositivos de entrada e saída, classes de computadores e escalabilidade, informática verde).',
    },
    {
        value: 'prova2',
        label: '2ª Prova: Banco de Dados, BI e Internet',
        prompt:
            'Conteúdo da 2ª Prova de Fundamentos de Sistemas de Informação: banco de dados e inteligência de negócios (banco de dados, SGBD/DBMS, DBA, hierarquia dos dados de bit a banco de dados, entidade, atributo, item de dados, chave e chave primária, abordagem tradicional vs. abordagem de banco de dados, modelo relacional com linhas como registros e colunas como atributos, domínio, operações de seleção que elimina linhas e projeção que elimina colunas, junção, modelagem de dados e diagrama entidade-relacionamento, esquema, DDL, DML, SQL, dicionário de dados, centro de dados, limpeza e normalização, datawarehouse, data mart, data mining, análise preditiva, inteligência empresarial, inteligência competitiva, contrainteligência, OLAP, NoSQL, bancos distribuídos e replicados); e internet, intranet e extranet (ARPANET, TCP/IP, backbone, URL, endereço IP, ICANN, formas de acesso, computação em nuvem pública e privada, Tim Berners-Lee e o CERN, diferença entre a internet como infraestrutura e a web como serviço sobre ela, HTTP, hyperlink, navegador, HTML e tags, CSS, XML, serviços web com SOAP/WSDL/UDDI, Web 2.0, ferramentas de busca e spiders, portais, blogs e podcasts, distinção entre internet pública, intranet corporativa interna e extranet que conecta recursos selecionados a parceiros externos, VPN e tunelamento, Telnet e FTP).',
    },
    {
        value: 'prova3',
        label: '3ª Prova: Comércio Eletrônico e Sistemas Numéricos',
        prompt:
            'Conteúdo da 3ª Prova de Fundamentos de Sistemas de Informação: comércio eletrônico e móvel (definição, categorias B2B, B2C, C2C e governo eletrônico G2C/G2B/G2G, desintermediação, m-commerce e seus desafios, WAP, e-procurement, e-business, modelo de multiestágio em cinco etapas, vantagens, desafios de privacidade e confiança, e-tailing, cybermall, intercâmbios eletrônicos, segmentação de mercado, CPM/CPC/CPA, redirecionamento, estratégia com comunidade, conteúdo e comércio, personalização explícita e implícita, certificado digital, autoridade certificadora, SSL, dinheiro eletrônico, cartão inteligente e P-Card); e sistemas numéricos (notação posicional e peso, bases decimal, binária, octal e hexadecimal, LSB e MSB, conversão de qualquer base para decimal por notação posicional, conversão de decimal para qualquer base por divisões sucessivas, conversão binário-octal agrupando de 3 em 3 bits, conversão binário-hexadecimal agrupando de 4 em 4 bits, conversão octal-hexadecimal passando pelo binário, números fracionários com pesos negativos, conversão de decimal fracionário para binário por multiplicações sucessivas, dízimas binárias, faixa de 2 elevado a N valores com N bits, nibble e byte).',
    },
    {
        value: 'redes',
        label: 'Telecomunicações e Redes',
        prompt:
            'Conteúdo de Telecomunicações e Redes de Fundamentos de Sistemas de Informação, trabalhado em atividade e mapa mental: telecomunicações como transmissão eletrônica de sinais, meio de telecomunicações, protocolo de rede, comunicação síncrona e assíncrona, canais simplex, half-duplex e full-duplex, largura de banda em bits por segundo, comutação de circuitos vs. comutação de pacotes, meios guiados com par trançado, cabo coaxial e fibra óptica, opções sem fio de curta distância como NFC, Bluetooth, UWB, infravermelho e Zigbee, Wi-Fi de médio alcance, micro-ondas, satélites geoestacionário, LEO e VSAT, 3G, 4G, LTE e WiMAX, tipos de rede por alcance PAN, LAN, MAN e WAN, processamento centralizado, descentralizado e distribuído, arquitetura cliente/servidor, hardware de rede com modem, multiplexador, PBX, comutador, ponte, roteador e gateway, sistema operacional de rede, criptografia e chave de criptografia, WEP e WPA, war driving, VPN, EDI, transferência eletrônica de fundos, telecomutação, videoconferência, call centers, códigos QR e GPS.',
    },
    {
        value: 'geral',
        label: 'Revisão geral da disciplina',
        prompt:
            'Revisão geral de Fundamentos de Sistemas de Informação, cobrindo toda a ementa da disciplina: conceitos de dado, informação e conhecimento; características da informação valiosa; sistema e seus componentes de entrada, processamento, saída e realimentação; eficiência e eficácia; os seis componentes do CBIS; tipos de sistemas de informação empresariais (TPS, ERP, MIS e DSS) e especializados; etapas do desenvolvimento de sistemas; sistemas de informação nas organizações, estruturas organizacionais, cultura e mudança, reengenharia, vantagem competitiva e cinco forças, medidas de desempenho e carreiras em SI; hardware, CPU, memória, armazenamento, dispositivos de entrada e saída e classes de computadores; software de sistemas e aplicativo, sistema operacional, middleware, formas de aquisição e linguagens de programação; banco de dados, SGBD, hierarquia dos dados, modelo relacional, SQL, datawarehouse, data mining e inteligência empresarial; telecomunicações e redes; internet, web, intranet e extranet; comércio eletrônico e móvel; e sistemas numéricos com conversões entre as bases decimal, binária, octal e hexadecimal, incluindo números fracionários.',
    },
];

export const FUNDAMENTOS_SI_EXAMS: ExamDefinition[] = [
    {
        id: 'p1',
        label: '1ª Prova',
        description: 'Introdução aos SI, SI nas organizações, software e hardware.',
    },
    {
        id: 'p2',
        label: '2ª Prova',
        description: 'Banco de dados e inteligência de negócios; internet, intranet e extranet.',
    },
    {
        id: 'p3',
        label: '3ª Prova',
        description: 'Comércio eletrônico, conversão numérica e aritmética binária.',
    },
    {
        // Rótulo "Prova Final" (e não "Final") para não colidir com a avaliação
        // sintética "Final (tudo)" que a plataforma injeta no seletor. Esta aqui é a
        // prova de 22/12 da turma, com lista de assuntos própria; a outra é "tudo".
        id: 'final',
        label: 'Prova Final',
        description: 'SGBD, software, hardware, banco de dados e BI, comércio eletrônico e conversão numérica.',
    },
    {
        // Telecomunicações e Redes não caiu em nenhuma das quatro listas de prova
        // escrita do mural, mas teve 4 aulas e duas notas: o mapa mental (3,0 pontos,
        // 10/10) e a atividade em dupla (27/10). Marcá-lo como 'p2' seria inventar um
        // fato sobre a prova; deixá-lo sem avaliação nenhuma o fazia sumir do Modo
        // Prova, inclusive de "Final (tudo)". Esta entrada é o registro fiel: a
        // avaliação existiu, só não foi prova escrita.
        id: 'atividades',
        label: 'Atividades avaliadas',
        description: 'Mapa mental de Telecomunicações e Redes (3,0 pontos) e atividade em dupla.',
    },
];

export const FUNDAMENTOS_SI_SECTIONS = [
    { id: 'intro', title: 'Introdução à Disciplina', shortTitle: 'Introdução' },
    // Conceitos-base: caem na 1ª prova e voltam como alicerce do resto da disciplina.
    { id: 'dados-informacao', title: 'Dados, Informação e Conhecimento', shortTitle: 'Dado vs. Info', exams: ['p1'] },
    { id: 'sistemas-si', title: 'Sistemas, CBIS e Tipos de SI', shortTitle: 'Sistemas e CBIS', exams: ['p1'] },
    { id: 'organizacoes', title: 'SI nas Organizações e Vantagem Competitiva', shortTitle: 'Organizações', exams: ['p1'] },
    // Hardware e software voltam na final, conforme a lista da professora.
    { id: 'hardware', title: 'Hardware', shortTitle: 'Hardware', exams: ['p1', 'final'] },
    { id: 'software', title: 'Software', shortTitle: 'Software', exams: ['p1', 'final'] },
    { id: 'banco-dados', title: 'Banco de Dados e Inteligência de Negócios', shortTitle: 'BD e BI', exams: ['p2', 'final'] },
    { id: 'redes', title: 'Telecomunicações e Redes', shortTitle: 'Redes', exams: ['atividades'] },
    { id: 'internet', title: 'Internet, Intranet e Extranet', shortTitle: 'Internet', exams: ['p2'] },
    { id: 'comercio-eletronico', title: 'Comércio Eletrônico e Móvel', shortTitle: 'E-commerce', exams: ['p3', 'final'] },
    { id: 'sistemas-numericos', title: 'Sistemas Numéricos e Conversões', shortTitle: 'Conversões', exams: ['p3', 'final'] },
    { id: 'aritmetica-binaria', title: 'Soma e Subtração de Binários', shortTitle: 'Aritmética', exams: ['p3', 'final'] },
    { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
] as const;

/** Ids reais das seções, derivados da lista acima — usado para tipar o mapa id → componente. */
export type FundamentosSiSectionId = (typeof FUNDAMENTOS_SI_SECTIONS)[number]['id'];

export const QUIZ_DATA: QuizQuestionData[] = [
    {
        id: 'q1',
        exams: ['p1'],
        question:
            'Um supermercado registra todos os cupons fiscais do dia. No fim do expediente, o sistema soma as vendas por seção e monta um ranking dos produtos mais vendidos. O gerente usa esse ranking para decidir o que repor primeiro. Nessa sequência, o ranking corresponde a quê?',
        options: [
            'Dados, porque é composto de números extraídos dos cupons',
            'Informação, porque é o resultado do processamento dos dados com valor além dos fatos isolados',
            'Conhecimento, porque orienta a decisão de reposição do gerente',
            'Realimentação, porque volta ao sistema para corrigir a entrada',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Os cupons fiscais são os dados brutos; a soma e a ordenação são o processo; o ranking é a informação — fatos organizados de modo a ter valor além dos fatos em si. O conhecimento é a compreensão que o gerente aplica ao interpretar esse ranking.',
        feedbackWrong:
            'O ranking é INFORMAÇÃO. Os cupons fiscais são os dados brutos; somar e ordenar é o processo; o resultado organizado, com valor além dos fatos isolados, é a informação. O conhecimento seria a compreensão acumulada que o gerente usa para interpretar o ranking e decidir.',
    },
    {
        id: 'q2',
        exams: ['p1'],
        question:
            'Uma fábrica produz 100 peças por dia usando menos matéria-prima e menos energia que qualquer concorrente, mas o mercado só compra peças de um modelo que ela não fabrica. Como avaliar esse sistema produtivo?',
        options: [
            'Eficiente e eficaz, pois produz muito consumindo pouco',
            'Ineficiente e ineficaz, pois não atinge a meta de vendas',
            'Eficiente, mas ineficaz, pois usa bem os recursos sem alcançar a meta',
            'Eficaz, mas ineficiente, pois atinge a meta gastando demais',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Isso. Eficiência é o que se produz dividido pelo que se consome — a fábrica vai bem nisso. Eficácia é o grau em que o sistema alcança suas metas — e produzir o modelo errado não alcança meta nenhuma. Dá para ser muito eficiente fazendo a coisa errada.',
        feedbackWrong:
            'O sistema é EFICIENTE, MAS INEFICAZ. Eficiência mede o que é produzido dividido pelo que é consumido, e nisso a fábrica é ótima. Eficácia mede o grau em que o sistema alcança suas metas — e fabricar um modelo que ninguém compra não alcança a meta. Os dois conceitos são independentes.',
    },
    {
        id: 'q3',
        exams: ['p1'],
        question:
            'Uma rede de lojas quer um sistema que gere, todo mês, o mesmo relatório padronizado de faturamento por filial, para que a diretoria acompanhe a operação de rotina. Qual tipo de sistema de informação atende diretamente a essa necessidade?',
        options: [
            'DSS, porque apoia a diretoria na tomada de decisão',
            'MIS, porque fornece informações de rotina em relatórios padrão com foco na eficiência operacional',
            'TPS, porque processa as transações de venda que geram o faturamento',
            'ERP, porque integra as operações das várias filiais',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O MIS (Sistema de Informação Gerencial) entrega informações de rotina em relatórios padrão e tem foco na eficiência operacional, alimentando-se dos dados que o TPS e o ERP registram. O DSS entraria se o problema fosse específico, complexo e não rotineiro.',
        feedbackWrong:
            'A resposta é MIS. Ele é definido justamente por fornecer informações de ROTINA em RELATÓRIOS PADRÃO, com foco na eficiência operacional. O TPS registra as transações que alimentam esse relatório e o ERP integra as operações, mas quem produz o relatório gerencial recorrente é o MIS. O DSS serve a decisões específicas e complexas, não a relatórios mensais fixos.',
    },
    {
        id: 'q4',
        exams: ['p1'],
        question:
            'Sobre os componentes de um Sistema de Informação Baseado em Computador (CBIS), qual afirmação está correta?',
        options: [
            'O hardware é o componente mais importante, pois sem equipamento não há processamento',
            'Procedimentos são opcionais, já que o software define como o sistema deve ser operado',
            'As pessoas são o componente mais importante na maioria dos CBIS',
            'Banco de dados e telecomunicações formam um único componente, pois ambos armazenam dados',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Correto. O CBIS tem seis componentes — hardware, software, banco de dados, telecomunicações, pessoas e procedimentos — e as PESSOAS são apontadas como o elemento mais importante na maioria deles. Tecnologia sem quem a opere e a interprete não entrega valor.',
        feedbackWrong:
            'As PESSOAS são o componente mais importante na maioria dos CBIS. Os seis componentes são hardware, software, banco de dados, telecomunicações, pessoas e procedimentos. Procedimentos não são opcionais: são as estratégias, políticas, métodos e regras de uso do sistema. Banco de dados e telecomunicações são componentes distintos.',
    },
    {
        id: 'q5',
        exams: ['p1', 'final'],
        question:
            'Ao desligar o computador, o conteúdo de um tipo de memória se perde, enquanto outro mantém permanentemente as instruções que não mudam. A que tipos essas duas descrições correspondem, respectivamente?',
        options: [
            'ROM e RAM',
            'RAM e ROM',
            'Cache e registrador',
            'RAM e memória virtual',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso mesmo. A RAM é temporária e VOLÁTIL — perde o conteúdo quando falta energia. A ROM é NÃO VOLÁTIL e guarda permanentemente dados e instruções que não mudam. A cache é uma memória de alta velocidade intermediária, mais rápida que a memória principal.',
        feedbackWrong:
            'A ordem correta é RAM e ROM. A RAM é volátil: perde tudo ao desligar. A ROM é não volátil e mantém permanentemente as instruções que não mudam. A cache é uma memória de altíssima velocidade que o processador acessa mais rápido que a memória principal, e os registradores ficam dentro da própria CPU.',
    },
    {
        id: 'q6',
        exams: ['p1', 'final'],
        question:
            'Uma empresa precisa de um sistema com regras de negócio muito particulares, que nenhum produto de mercado atende, e espera que esse sistema lhe dê vantagem sobre os concorrentes. Qual abordagem de software é a indicada, e por quê?',
        options: [
            'Software comercialmente disponível, porque é mais barato e é implantado mais rápido',
            'Software proprietário, porque é desenvolvido sob medida e pode gerar vantagem competitiva',
            'Freeware, porque não tem custo de licença e pode ser adaptado livremente',
            'Middleware, porque permite integrar os sistemas já existentes na empresa',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. O software proprietário é o programa único desenvolvido para atender a uma necessidade específica; é mais caro e mais demorado que comprar pronto, mas atende requisitos exclusivos e pode virar vantagem competitiva. O software comercialmente disponível serve às necessidades comuns.',
        feedbackWrong:
            'A resposta é software PROPRIETÁRIO. Ele é desenvolvido sob medida para necessidades exclusivas e é justamente por isso que pode gerar vantagem competitiva. O software comercialmente disponível é mais rápido e barato, mas atende necessidades comuns, que os concorrentes também podem comprar. Middleware não é uma abordagem de aquisição: é o software que permite a comunicação entre sistemas diferentes.',
    },
    {
        id: 'q7',
        exams: ['p2', 'final'],
        question:
            'Na hierarquia dos dados, qual sequência está na ordem correta, do menor elemento para o maior?',
        options: [
            'Bit → byte → campo → caractere → registro → arquivo → banco de dados',
            'Byte → bit → caractere → campo → registro → arquivo → banco de dados',
            'Bit → byte → caractere → campo → registro → arquivo → banco de dados',
            'Bit → caractere → byte → campo → arquivo → registro → banco de dados',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Correto. A hierarquia é bit (dígito binário) → byte (normalmente oito bits) → caractere → campo (descreve um aspecto de um objeto) → registro (conjunto de campos relacionados) → arquivo (conjunto de registros relacionados) → banco de dados (arquivos integrados e relacionados).',
        feedbackWrong:
            'A ordem é bit → byte → caractere → campo → registro → arquivo → banco de dados. O bit é o menor elemento, o byte reúne normalmente oito bits, o caractere é o bloco básico de informação, o campo descreve um aspecto de um objeto, o registro reúne campos relacionados, o arquivo reúne registros e o banco de dados reúne arquivos integrados.',
    },
    {
        id: 'q8',
        exams: ['p2', 'final'],
        question:
            'Em um banco de dados relacional, uma consulta precisa devolver apenas as colunas "nome" e "matrícula" da tabela de alunos, mantendo todas as linhas. Qual operação de manipulação de dados descreve essa ação?',
        options: [
            'Seleção, porque escolhe o que será mostrado',
            'Projeção, porque elimina colunas da tabela',
            'Junção, porque combina os atributos escolhidos',
            'Vinculação, porque relaciona os atributos em comum',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. A PROJEÇÃO elimina COLUNAS, ficando com os atributos desejados. A SELEÇÃO elimina LINHAS conforme um critério. O par seleção/projeção costuma ser cobrado justamente por essa inversão: quem filtra linha é seleção, quem filtra coluna é projeção.',
        feedbackWrong:
            'A operação é a PROJEÇÃO, que elimina COLUNAS. O erro mais comum é trocá-la pela SELEÇÃO, que elimina LINHAS de acordo com um critério. A junção combina duas ou mais tabelas, e a vinculação manipula tabelas que compartilham ao menos um atributo em comum.',
    },
    {
        id: 'q9',
        exams: ['p2'],
        question:
            'Uma indústria quer que seus fornecedores consultem, pela web, o nível de estoque das peças que fornecem — mas apenas esses dados, e apenas os fornecedores cadastrados. Que tipo de rede atende a essa necessidade?',
        options: [
            'Intranet, porque a rede é construída com tecnologias da web',
            'Internet, porque os fornecedores estão fora da empresa',
            'Extranet, porque conecta recursos selecionados da intranet a parceiros externos autorizados',
            'VPN, porque a conexão precisa ser criptografada',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Exato. A extranet é definida como a rede que conecta recursos SELECIONADOS da intranet de uma empresa a usuários EXTERNOS autorizados — clientes, fornecedores e parceiros. A intranet seria restrita a quem está dentro da organização.',
        feedbackWrong:
            'A resposta é EXTRANET. A intranet é a rede corporativa interna, restrita aos membros da organização. A extranet estende parte dela — recursos selecionados — a usuários externos autorizados, como fornecedores e parceiros. A VPN é o mecanismo de conexão segura que pode ser usado para viabilizar esse acesso, mas não é o tipo de rede descrito.',
    },
    {
        id: 'q10',
        exams: ['p2'],
        question:
            'Qual afirmação distingue corretamente a internet da World Wide Web?',
        options: [
            'São sinônimos: a web é o nome comercial da internet',
            'A internet é a infraestrutura de redes e protocolos TCP/IP; a web é um serviço que roda sobre ela, com HTTP e linguagens de marcação',
            'A web é a infraestrutura física de cabos e roteadores; a internet é o conjunto de páginas acessadas pelo navegador',
            'A internet só transporta e-mail; a web transporta páginas e arquivos',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A internet é a infraestrutura — computadores, roteadores, cabos, software e os protocolos TCP/IP. A web é um dos serviços que rodam sobre ela, formado por servidores, clientes, o protocolo HTTP e as linguagens de marcação. E-mail e FTP são outros serviços da internet que não são a web.',
        feedbackWrong:
            'A internet é a INFRAESTRUTURA (hardware de rede, cabos, software e os protocolos TCP/IP) e a WEB é um SERVIÇO que roda sobre ela, baseado em HTTP e em linguagens de marcação. Elas não são sinônimos, e a relação não é invertida: a web depende da internet, não o contrário. E-mail, FTP e Telnet são outros serviços da mesma infraestrutura.',
    },
    {
        id: 'q11',
        exams: ['p3', 'final'],
        question:
            'Um site permite que pessoas físicas anunciem e vendam objetos usados diretamente para outras pessoas físicas, cobrando uma taxa por anúncio. Que categoria de comércio eletrônico descreve as transações entre os usuários desse site?',
        options: ['B2B', 'B2C', 'C2C', 'G2C'],
        correctIndex: 2,
        feedbackCorrect:
            'Isso. C2C (cliente a cliente) é o subgrupo em que clientes vendem diretamente a outros clientes, típico de leilões e classificados on-line. Repare que o site em si presta um serviço B2C, mas as transações entre os usuários são C2C.',
        feedbackWrong:
            'A categoria é C2C (cliente a cliente), em que clientes vendem diretamente para outros clientes. B2B ocorre quando todos os participantes são organizações; B2C quando a empresa vende ao consumidor final; e G2C é uma forma de governo eletrônico, do governo para o cidadão.',
    },
    {
        id: 'q12',
        exams: ['p3', 'final'],
        question:
            'Uma fabricante passa a vender direto ao consumidor pelo seu próprio site, dispensando as lojas revendedoras que antes intermediavam a venda. Como se chama esse fenômeno?',
        options: [
            'Desintermediação, a eliminação dos intermediários entre produtor e consumidor',
            'Segmentação de mercado, pois a empresa passa a atingir o cliente diretamente',
            'Redirecionamento, pois recaptura o comprador que sairia sem comprar',
            'E-procurement, pois a empresa passa a negociar eletronicamente',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Correto. Desintermediação é a eliminação das organizações intermediárias entre o produtor e o consumidor — o efeito característico do B2C, em que o cliente trata diretamente com a organização e costuma pagar menos por isso.',
        feedbackWrong:
            'O fenômeno é a DESINTERMEDIAÇÃO: a eliminação dos intermediários entre produtor e consumidor, típica do B2C. Segmentação de mercado é identificar mercados específicos para direcionar propaganda; redirecionamento é o uso de anúncios personalizados para trazer de volta quem saiu do site sem comprar; e-procurement é usar SI e internet para adquirir peças e suprimentos.',
    },
    {
        id: 'q13',
        exams: ['p3', 'final'],
        question: 'Convertendo 101101₂ para decimal, qual é o resultado?',
        options: ['41', '45', '46', '53'],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. Aplicando a notação posicional: 1×32 + 0×16 + 1×8 + 1×4 + 0×2 + 1×1 = 32 + 8 + 4 + 1 = 45.',
        feedbackWrong:
            'O resultado é 45. Aplique a notação posicional da direita para a esquerda, com os pesos 1, 2, 4, 8, 16 e 32: 1×32 + 0×16 + 1×8 + 1×4 + 0×2 + 1×1 = 32 + 8 + 4 + 1 = 45. Um erro frequente é desalinhar os pesos com os algarismos — comece sempre pelo LSB, o bit mais à direita.',
    },
    {
        id: 'q14',
        exams: ['p3', 'final'],
        question:
            'Para converter 110110110₂ diretamente para hexadecimal, qual procedimento deve ser adotado e qual o resultado?',
        options: [
            'Agrupar os bits de 3 em 3 a partir do LSB; resultado 666₁₆',
            'Agrupar os bits de 4 em 4 a partir do LSB, completando com zeros à esquerda; resultado 1B6₁₆',
            'Agrupar os bits de 4 em 4 a partir do MSB; resultado 6D8₁₆',
            'Converter antes para decimal e depois dividir por 16 sucessivamente; resultado 2B6₁₆',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Hexadecimal usa grupos de 4 bits, contados a partir do LSB: 1 1011 0110 vira 0001 1011 0110 = 1, B, 6 = 1B6₁₆. Agrupar de 3 em 3 seria a conversão para octal, e agrupar a partir do MSB desalinha os pesos.',
        feedbackWrong:
            'O correto é agrupar de 4 EM 4 bits A PARTIR DO LSB, completando com zeros à esquerda: 0001 1011 0110 = 1B6₁₆. Grupos de 3 bits convertem para octal, não para hexadecimal. E o agrupamento precisa começar pelo bit menos significativo (o da direita); começar pelo MSB desalinha os pesos e produz um valor errado.',
    },
    {
        id: 'q15',
        exams: ['p3', 'final'],
        question: 'Qual é o valor decimal de 0,101₂?',
        options: ['0,101', '0,5', '0,625', '1,25'],
        correctIndex: 2,
        feedbackCorrect:
            'Correto. Depois da vírgula os pesos são negativos: 2⁻¹ = 0,5; 2⁻² = 0,25; 2⁻³ = 0,125. Então 1×0,5 + 0×0,25 + 1×0,125 = 0,625.',
        feedbackWrong:
            'O valor é 0,625. Após a vírgula, os pesos são potências negativas de 2: 0,5; 0,25 e 0,125. Logo 1×0,5 + 0×0,25 + 1×0,125 = 0,625. O engano mais comum é ler "0,101" como se os algarismos binários valessem o mesmo que decimais.',
    },
    {
        id: 'q16',
        exams: ['p3', 'final'],
        question:
            'Ao converter 0,8₁₀ para binário pelo método das multiplicações sucessivas, o que se observa?',
        options: [
            'A conversão termina em três passos, resultando em 0,110₂',
            'A conversão nunca termina exatamente, gerando a dízima 0,11001100…₂',
            'A conversão é impossível, pois números decimais fracionários não têm representação binária',
            'A conversão exige o método das divisões sucessivas, não das multiplicações',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Isso. Multiplicando por 2 sucessivamente: 0,8→1,6; 0,6→1,2; 0,2→0,4; 0,4→0,8 — e o 0,8 reaparece, fechando o ciclo. O resultado é a dízima periódica 0,11001100…₂. É por isso que certos valores decimais "simples" não são representados exatamente em binário.',
        feedbackWrong:
            'A conversão gera uma DÍZIMA: 0,11001100…₂. Multiplicando por 2 e tomando a parte inteira de cada produto, chega-se de volta a 0,8 e o ciclo se repete indefinidamente. A conversão não é impossível — ela apenas não termina — e o método correto para a parte fracionária é mesmo o das multiplicações sucessivas (as divisões sucessivas servem para a parte inteira).',
    },
    {
        id: 'q17',
        exams: ['p3', 'final'],
        question:
            'Um registrador de 8 bits armazena números inteiros sem sinal. Qual é a quantidade de valores distintos representáveis e qual o maior deles?',
        options: [
            '128 valores, sendo 127 o maior',
            '255 valores, sendo 255 o maior',
            '256 valores, sendo 255 o maior',
            '256 valores, sendo 256 o maior',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Correto. Com N bits representam-se 2ᴺ valores distintos, de 0 até 2ᴺ−1. Com 8 bits: 2⁸ = 256 valores, indo de 0 a 255. A pegadinha clássica é confundir a QUANTIDADE de valores (256) com o MAIOR valor (255).',
        feedbackWrong:
            'São 256 valores, sendo 255 o maior. Com N bits há 2ᴺ combinações distintas, numeradas de 0 a 2ᴺ−1. Com 8 bits: 2⁸ = 256 combinações, de 0 até 255. Confundir a quantidade de valores com o maior valor é o erro mais comum aqui — a diferença vem do zero, que também ocupa uma combinação.',
    },
    {
        id: 'q18',
        exams: ['p3', 'final'],
        question: 'Efetuando a soma binária 1011₂ + 110₂, qual é o resultado?',
        options: ['10001₂', '1111₂', '10101₂', '1101₂'],
        correctIndex: 0,
        feedbackCorrect:
            'Correto. Alinhando pelo bit menos significativo: 1011 + 0110. Coluna a coluna, 1+0=1; 1+1=10 (escreve 0, vai 1); 0+1+1=10 (escreve 0, vai 1); 1+0+1=10 (escreve 0, vai 1), sobrando o vai-um final: 10001₂. Conferindo em decimal, 11 + 6 = 17 = 10001₂.',
        feedbackWrong:
            'O resultado é 10001₂. Lembre que em binário 1+1 = 10, ou seja, escreve-se 0 e leva-se 1 para a coluna seguinte. Alinhando 1011 + 0110 e propagando os vai-uns chega-se a 10001₂. A conferência em decimal ajuda: 11 + 6 = 17, e 17 em binário é 10001.',
    },
    {
        id: 'q19',
        exams: ['p1'],
        question:
            'Uma empresa decide abandonar completamente seu processo de atendimento, redesenhando-o do zero junto com a estrutura de equipes e os sistemas que o apoiam, em busca de um salto nos resultados. Como se classifica essa iniciativa?',
        options: [
            'Melhoria contínua, pois busca aperfeiçoar o processo existente',
            'Reengenharia, pois é uma revisão radical de processos, estrutura e sistemas',
            'Recongelamento, pois consolida um novo modo de trabalhar',
            'Terceirização, pois delega o atendimento a especialistas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Exato. Reengenharia é a revisão RADICAL dos processos comerciais, das estruturas organizacionais, dos sistemas de informação e dos valores da organização, para alcançar um novo patamar de resultados. A melhoria contínua é o oposto: ganhos incrementais sobre o processo que já existe.',
        feedbackWrong:
            'Trata-se de REENGENHARIA — a revisão radical de processos, estruturas, sistemas e valores em busca de um novo patamar de resultados. A melhoria contínua busca aperfeiçoamentos incrementais no processo existente, sem rupturas. O recongelamento é apenas a terceira fase do modelo de mudança (após descongelamento e movimento), não o tipo da iniciativa.',
    },
    {
        id: 'q20',
        exams: ['p1', 'final'],
        question:
            'Fitas magnéticas exigem que os dados sejam lidos na ordem em que foram gravados, enquanto discos permitem ler qualquer registro diretamente. Como se chamam esses dois métodos de acesso?',
        options: [
            'Acesso direto e acesso sequencial, respectivamente',
            'Acesso sequencial e acesso direto, respectivamente',
            'Acesso volátil e acesso não volátil, respectivamente',
            'Acesso primário e acesso secundário, respectivamente',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. A fita usa ACESSO SEQUENCIAL — os dados devem ser recuperados na ordem em que foram armazenados, e os equipamentos são chamados de SASD. O disco usa ACESSO DIRETO — os registros podem ser recuperados em qualquer ordem, e os equipamentos são os DASD.',
        feedbackWrong:
            'A ordem é acesso SEQUENCIAL (fita) e acesso DIRETO (disco). Na fita, os dados precisam ser recuperados na ordem em que foram gravados — daí o nome SASD. No disco, qualquer registro pode ser lido diretamente — são os DASD. Volatilidade é outra propriedade: diz respeito a perder ou não o conteúdo sem energia.',
    },
    // SGBD abre a lista da prova final e não tinha nenhuma questão; q21-q23 cobrem
    // as funções do SGBD, o datawarehouse e o data mining, os três itens de BD/BI
    // que a professora cobrou na 2ª prova e repetiu na final.
    {
        id: 'q21',
        exams: ['p2', 'final'],
        question:
            'Dois caixas de uma loja tentam atualizar o estoque do mesmo produto no exato momento em que ele é vendido nos dois terminais. O banco precisa impedir que uma atualização sobrescreva a outra. Qual recurso do SGBD trata desse caso?',
        options: [
            'O dicionário de dados, que descreve todos os dados usados no sistema',
            'O controle de simultaneidade, na função de armazenar e recuperar dados',
            'A DDL, que descreve os dados e as relações do esquema',
            'O QBE, alternativa visual para montar consultas',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O controle de simultaneidade é o mecanismo que o SGBD usa quando dois ou mais usuários precisam do mesmo registro ao mesmo tempo, dentro da função de armazenar e recuperar dados.',
        feedbackWrong:
            'É o controle de simultaneidade. O dicionário de dados apenas detalha os dados usados; a DDL cria e modifica a estrutura do banco; o QBE é uma forma visual de montar consultas. Nenhum deles resolve acesso concorrente — quem faz isso é o controle de simultaneidade.',
    },
    {
        id: 'q22',
        exams: ['p2', 'final'],
        question:
            'Uma rede de farmácias mantém o sistema que registra cada venda no caixa e, separadamente, um banco que reúne dados de vendas, estoque e marketing de todas as filiais para apoiar decisões da diretoria. O segundo banco é um quê?',
        options: [
            'Um data mart, porque atende a diretoria',
            'Um datawarehouse, porque reúne informações de muitas fontes da empresa para apoiar a decisão',
            'Um sistema transacional, porque registra as vendas',
            'Uma análise preditiva, porque orienta decisões futuras',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O datawarehouse reúne as informações comerciais de muitas fontes da empresa com a finalidade de apoiar a tomada de decisão — diferente do banco transacional, que registra a operação do dia a dia.',
        feedbackWrong:
            'É um datawarehouse: reúne dados de muitas fontes da empresa para apoiar a decisão. O data mart seria um recorte dele para uma área específica; o sistema transacional é o do caixa, que registra a operação; a análise preditiva é uma técnica aplicada sobre os dados, não o banco em si.',
    },
    {
        id: 'q23',
        exams: ['p2', 'final'],
        question:
            'Ao varrer o datawarehouse, o sistema descobre sozinho que clientes que compram protetor solar tendem a comprar repelente na mesma visita — uma relação que ninguém havia formulado como hipótese. Esse processo é o quê?',
        options: [
            'Inteligência competitiva, porque gera vantagem sobre concorrentes',
            'Data mining, pela descoberta automatizada de padrões e relações',
            'Contrainteligência, porque protege a informação da empresa',
            'Projeção, porque elimina colunas da tabela',
        ],
        correctIndex: 1,
        feedbackCorrect:
            'Correto. O data mining é a descoberta AUTOMATIZADA de padrões e relações dentro do datawarehouse — o sistema encontra a relação sem que alguém a tenha proposto antes.',
        feedbackWrong:
            'É data mining, definido pela descoberta automatizada de padrões e relações no datawarehouse. A inteligência competitiva trata de informações sobre concorrentes; a contrainteligência protege as próprias informações; a projeção é uma operação relacional que elimina colunas.',
    },
    // Telecomunicações e Redes teve 4 aulas e duas notas, mas nenhuma questão. As duas
    // abaixo cobrem o vocabulário que sustenta o capítulo de Internet (2ª prova).
    {
        id: 'q24',
        exams: ['atividades'],
        question:
            'Uma empresa tem filiais em três cidades. Cada filial processa seus próprios dados em servidores locais, e todos os servidores se comunicam por uma rede corporativa. Como se classifica esse processamento?',
        options: [
            'Centralizado, porque há uma rede corporativa unificando tudo',
            'Descentralizado, porque cada filial processa localmente',
            'Distribuído, porque os locais são remotos mas estão conectados por uma rede',
            'Half-duplex, porque os dados trafegam nos dois sentidos',
        ],
        correctIndex: 2,
        feedbackCorrect:
            'Correto. O que separa o distribuído do descentralizado é justamente a conexão: nos dois casos o processamento ocorre em locais remotos, mas no distribuído esses locais estão ligados por uma rede.',
        feedbackWrong:
            'É distribuído. No descentralizado os dispositivos também ficam em locais remotos, mas SEM conexão entre si — a rede corporativa é o que muda a classificação. Centralizado seria todo o processamento num único local, e half-duplex descreve o sentido de um canal, não o processamento.',
    },
    {
        id: 'q25',
        exams: ['atividades'],
        question:
            'Um roteador e uma ponte (bridge) aparecem no mesmo projeto de rede. O que distingue as duas funções?',
        options: [
            'A ponte conecta duas LANs que usam o mesmo protocolo; o roteador encaminha pacotes entre redes distintas',
            'A ponte encaminha pacotes entre redes distintas; o roteador conecta LANs de mesmo protocolo',
            'Ambos modulam e demodulam o sinal, mudando apenas a velocidade',
            'A ponte combina vários canais num único sinal; o roteador separa esse sinal',
        ],
        correctIndex: 0,
        feedbackCorrect:
            'Correto. A ponte conecta duas LANs que usam o mesmo protocolo de telecomunicações; o roteador encaminha pacotes de dados através de duas ou mais redes distintas até o destino.',
        feedbackWrong:
            'A ordem está trocada: a ponte é que conecta LANs de mesmo protocolo, e o roteador é que atravessa redes distintas. Modular e demodular é função do modem; combinar canais num único sinal é função do multiplexador.',
    },
];
