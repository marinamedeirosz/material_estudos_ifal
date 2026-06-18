import type { ExternalBookChapter } from '../../components/ui/ExternalBookReader';
import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';

export const PDSW_BOOK_CHAPTERS: ExternalBookChapter[] = [
  { id: 'cap1', shortTitle: 'Cap. 1', title: 'Introducao', url: 'https://engsoftmoderna.info/cap1.html' },
  { id: 'cap2', shortTitle: 'Cap. 2', title: 'Processos', url: 'https://engsoftmoderna.info/cap2.html' },
  { id: 'cap3', shortTitle: 'Cap. 3', title: 'Requisitos', url: 'https://engsoftmoderna.info/cap3.html' },
  { id: 'cap4', shortTitle: 'Cap. 4', title: 'Modelos', url: 'https://engsoftmoderna.info/cap4.html' },
  { id: 'cap5', shortTitle: 'Cap. 5', title: 'Principios de Projeto', url: 'https://engsoftmoderna.info/cap5.html' },
  { id: 'cap6', shortTitle: 'Cap. 6', title: 'Padroes de Projeto', url: 'https://engsoftmoderna.info/cap6.html' },
  { id: 'cap7', shortTitle: 'Cap. 7', title: 'Arquitetura', url: 'https://engsoftmoderna.info/cap7.html' },
  { id: 'cap8', shortTitle: 'Cap. 8', title: 'Testes', url: 'https://engsoftmoderna.info/cap8.html' },
  { id: 'cap9', shortTitle: 'Cap. 9', title: 'Refactoring', url: 'https://engsoftmoderna.info/cap9.html' },
  { id: 'cap10', shortTitle: 'Cap. 10', title: 'DevOps', url: 'https://engsoftmoderna.info/cap10.html' },
];

export const PDSW_EVALUATIONS = [
  {
    id: 'av1',
    label: 'N1 / AV1',
    title: 'Fundamentos da Engenharia de Software',
    scope: 'Capitulos 1 a 4: Introducao, Processos, Requisitos e Modelos.',
  },
  {
    id: 'av2',
    label: 'N1 / AV2',
    title: 'Projeto, Padroes e Arquitetura',
    scope: 'Capitulos 5 a 7: Principios de Projeto, Padroes de Projeto e Arquitetura.',
  },
  {
    id: 's1',
    label: 'N2 / S1',
    title: 'Seminario',
    scope: 'Tema definido pelo professor, apresentado como aprofundamento aplicado.',
  },
  {
    id: 'av4',
    label: 'N2 / AV4',
    title: 'Qualidade, Evolucao e Operacao',
    scope: 'Capitulos 8 a 10: Testes, Refactoring e DevOps.',
  },
];

export const PDSW_GUIDE_CONTEXT = `
GUIA COMPLETO DE PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE - Resumo:

1. INTRODUCAO: Engenharia de Software trata da construcao, evolucao e manutencao de sistemas complexos. Software e maleavel, invisivel e sujeito a mudancas constantes. A disciplina conecta produto, processo, pessoas, qualidade e negocio.

2. PROCESSOS: Processos organizam atividades como comunicacao, planejamento, modelagem, construcao, testes e entrega. Modelos prescritivos ajudam previsibilidade; metodos ageis favorecem ciclos curtos, colaboracao, feedback e adaptacao. Scrum, Kanban e XP reduzem risco por entregas incrementais.

3. REQUISITOS: Requisitos descrevem necessidades, regras e restricoes do sistema. Podem ser funcionais, nao funcionais e de dominio. Historias de usuario, casos de uso, prototipos e MVP ajudam a validar valor antes de investir demais.

4. MODELOS: Modelos simplificam a comunicacao sobre sistemas. UML representa aspectos estruturais e comportamentais por diagramas de classes, sequencia, atividades e casos de uso. Modelos bons reduzem ambiguidade e apoiam decisoes.

5. PRINCIPIOS DE PROJETO: Modularidade, abstracao, encapsulamento, coesao, baixo acoplamento, separacao de responsabilidades e principios SOLID ajudam a criar software compreensivel, flexivel e testavel.

6. PADROES DE PROJETO: Padroes sao solucoes recorrentes para problemas conhecidos. Factory Method, Singleton, Strategy, Observer, Adapter, Facade e Template Method ajudam a comunicar e reaproveitar conhecimento de projeto.

7. ARQUITETURA: Arquitetura define organizacao de componentes, responsabilidades, comunicacao e propriedades de qualidade. Camadas, MVC, cliente-servidor, microsservicos, mensageria e APIs envolvem tradeoffs de evolucao, acoplamento, deploy e observabilidade.

8. TESTES: Testes aumentam confianca e reduzem regressao. Testes unitarios, integracao, sistema, aceitacao e E2E cobrem niveis diferentes. Playwright permite automatizar fluxos reais do usuario em navegadores.

9. REFACTORING: Refatorar e melhorar estrutura interna sem alterar comportamento observavel. Code smells como duplicacao, metodos longos e classes inchadas indicam pontos de melhoria. Testes automatizados reduzem risco durante refatoracao.

10. DEVOPS: DevOps aproxima desenvolvimento e operacao. Git, code review, integracao continua, entrega continua, conteinerizacao, monitoramento e automacao tornam entregas mais frequentes, rastreaveis e confiaveis.

DIVISAO DE AVALIACOES: AV1 cobre capitulos 1 a 4; AV2 cobre capitulos 5 a 7; S1 e seminario com tema definido pelo professor; AV4 cobre capitulos 8 a 10.
`;

export const PDSW_TOPICS: QuizTopicOption[] = [
  {
    value: 'av1',
    label: 'AV1: Introducao, Processos, Requisitos e Modelos',
    prompt: 'Conteudo da AV1 de PDSW: introducao a Engenharia de Software, caracteristicas do software, crise e complexidade, processos de software, modelos tradicionais e ageis, Scrum, Kanban, XP, requisitos funcionais, nao funcionais e de dominio, historias de usuario, casos de uso, MVP, prototipacao e modelos UML de classes, sequencia e atividades.',
  },
  {
    value: 'av2',
    label: 'AV2: Principios, Padroes e Arquitetura',
    prompt: 'Conteudo da AV2 de PDSW: principios de projeto, modularidade, abstracao, encapsulamento, coesao, acoplamento, SOLID, padroes de projeto como Strategy, Observer, Factory Method, Singleton, Adapter e Facade, arquitetura de software, camadas, MVC, microsservicos, APIs, mensageria e tradeoffs arquiteturais.',
  },
  {
    value: 'av4',
    label: 'AV4: Testes, Refactoring e DevOps',
    prompt: 'Conteudo da AV4 de PDSW: testes unitarios, integracao, sistema, aceitacao e E2E, Playwright, piramide de testes, refactoring, code smells, preservacao de comportamento, Git, CI/CD, DevOps, automacao, deploy, observabilidade e colaboracao entre desenvolvimento e operacao.',
  },
  { value: 'fundamentos', label: 'Fundamentos de Engenharia de Software' },
  { value: 'processos', label: 'Processos e Metodos Ageis' },
  { value: 'requisitos', label: 'Requisitos e MVP' },
  { value: 'modelagem', label: 'Modelagem UML' },
  { value: 'projeto', label: 'Principios de Projeto' },
  { value: 'padroes', label: 'Padroes de Projeto' },
  { value: 'arquitetura', label: 'Arquitetura de Software' },
  { value: 'testes', label: 'Testes e Playwright' },
  { value: 'refactoring', label: 'Refactoring' },
  { value: 'devops', label: 'DevOps' },
];

export const PDSW_SECTIONS = [
  { id: 'intro', title: 'Visao Geral', shortTitle: 'Visao Geral' },
  { id: 'produto-processo', title: 'Produto e Processo', shortTitle: 'Produto/Processo', exam: 'AV1' },
  { id: 'modelagem-projeto', title: 'Modelagem e Projeto', shortTitle: 'Modelagem/Projeto', exam: 'AV1/AV2' },
  { id: 'arquitetura', title: 'Arquitetura', shortTitle: 'Arquitetura', exam: 'AV2' },
  { id: 'qualidade-evolucao', title: 'Qualidade e Evolucao', shortTitle: 'Qualidade', exam: 'AV4' },
  { id: 'praticas', title: 'Praticas da Disciplina', shortTitle: 'Praticas', exam: 'S1' },
  { id: 'livro', title: 'Livro Base', shortTitle: 'Livro' },
  { id: 'quiz', title: 'Quiz de Revisao', shortTitle: 'Quiz' },
];

const QUIZ_AV1: QuizQuestionData[] = [
  {
    id: 'pdsw-q1',
    exam: 'prova1',
    question: '1. Qual alternativa descreve melhor o objetivo central da Engenharia de Software?',
    options: [
      'Programar rapidamente sem documentar decisoes',
      'Aplicar principios, processos e tecnicas para construir e evoluir software com qualidade',
      'Trocar toda modelagem por reunioes informais',
      'Garantir que todo sistema seja feito por uma unica pessoa',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Engenharia de Software combina produto, processo, pessoas e qualidade para lidar com sistemas complexos.',
    feedbackWrong: 'O foco nao e apenas programar; e construir, manter e evoluir software com qualidade, previsibilidade e valor.',
  },
  {
    id: 'pdsw-q2',
    exam: 'prova1',
    question: '2. Por que software costuma ser considerado dificil de gerenciar?',
    options: [
      'Porque nao muda depois da primeira entrega',
      'Porque e invisivel, complexo, maleavel e sujeito a mudancas frequentes',
      'Porque nao depende de requisitos',
      'Porque sempre tem custo de reproducao maior que hardware',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Exato. A invisibilidade e a facilidade aparente de mudanca tornam escopo, qualidade e manutencao dificeis.',
    feedbackWrong: 'Software e dificil porque e abstrato, complexo, facil de alterar e constantemente pressionado por novas necessidades.',
  },
  {
    id: 'pdsw-q3',
    exam: 'prova1',
    question: '3. Um processo de software serve principalmente para:',
    options: [
      'Eliminar comunicacao entre pessoas',
      'Organizar atividades, responsabilidades, artefatos e criterios de entrega',
      'Impedir que requisitos mudem',
      'Substituir testes por documentacao',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Processo da ordem ao trabalho e explicita como o time planeja, constroi, valida e entrega.',
    feedbackWrong: 'Processo nao elimina mudanca nem comunicacao; ele organiza o fluxo de trabalho e os criterios de qualidade.',
  },
  {
    id: 'pdsw-q4',
    exam: 'prova1',
    question: '4. Qual caracteristica diferencia metodos ageis de abordagens prescritivas tradicionais?',
    options: [
      'Agil elimina planejamento',
      'Agil valoriza ciclos curtos, feedback frequente e adaptacao continua',
      'Agil proibe documentacao',
      'Agil so funciona sem cliente',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Agilidade nao e ausencia de processo; e capacidade de aprender e ajustar por incrementos.',
    feedbackWrong: 'Metodos ageis ainda planejam e documentam quando necessario, mas priorizam entrega incremental e feedback rapido.',
  },
  {
    id: 'pdsw-q5',
    exam: 'prova1',
    question: '5. Em Scrum, o Sprint representa:',
    options: [
      'Um ciclo fixo de trabalho para entregar um incremento potencialmente utilizavel',
      'Uma reuniao anual de planejamento estrategico',
      'Uma lista permanente de bugs sem priorizacao',
      'Um documento obrigatorio de arquitetura corporativa',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Exato. O Sprint e o ciclo de execucao em que o time transforma itens priorizados em incremento.',
    feedbackWrong: 'Sprint e um ciclo curto e timeboxed que deve produzir um incremento inspecionavel do produto.',
  },
  {
    id: 'pdsw-q6',
    exam: 'prova1',
    question: '6. Um requisito funcional descreve:',
    options: [
      'Uma qualidade global como desempenho ou seguranca',
      'Uma funcionalidade ou comportamento esperado do sistema',
      'O salario da equipe de desenvolvimento',
      'A cor obrigatoria do logotipo da organizacao',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Requisitos funcionais definem o que o sistema deve fazer.',
    feedbackWrong: 'Requisitos funcionais descrevem comportamentos. Qualidades como desempenho e seguranca sao nao funcionais.',
  },
  {
    id: 'pdsw-q7',
    exam: 'prova1',
    question: '7. Qual exemplo e um requisito nao funcional?',
    options: [
      'O usuario deve cadastrar um anuncio',
      'O sistema deve gerar relatorio mensal',
      'A busca deve responder em ate dois segundos sob carga prevista',
      'O administrador deve bloquear um usuario',
    ],
    correctIndex: 2,
    feedbackCorrect: 'Correto. Tempo de resposta e uma propriedade de qualidade, portanto requisito nao funcional.',
    feedbackWrong: 'Requisito nao funcional define atributo de qualidade ou restricao, como desempenho, seguranca ou disponibilidade.',
  },
  {
    id: 'pdsw-q8',
    exam: 'prova1',
    question: '8. A principal funcao de um MVP e:',
    options: [
      'Entregar o produto final com todos os recursos planejados',
      'Validar uma hipotese de valor com o menor conjunto util de funcionalidades',
      'Evitar contato com usuarios reais',
      'Substituir completamente testes automatizados',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Exato. MVP reduz desperdicio ao testar valor e aprendizado com uma versao minima viavel.',
    feedbackWrong: 'MVP nao e produto incompleto sem criterio; e uma versao minima para validar aprendizado e valor.',
  },
  {
    id: 'pdsw-q9',
    exam: 'prova1',
    question: '9. Em UML, um diagrama de sequencia enfatiza:',
    options: [
      'A ordem temporal das mensagens entre objetos ou participantes',
      'A estrutura fisica do banco de dados',
      'O custo mensal da infraestrutura',
      'A paleta visual da interface',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Diagramas de sequencia mostram interacoes ao longo do tempo.',
    feedbackWrong: 'Diagrama de sequencia e comportamental: mostra participantes, mensagens e ordem temporal da interacao.',
  },
  {
    id: 'pdsw-q10',
    exam: 'prova1',
    question: '10. Um bom modelo de software deve:',
    options: [
      'Representar todos os detalhes do codigo fonte',
      'Reduzir ambiguidade e destacar aspectos importantes para decisao e comunicacao',
      'Ser criado apenas depois do sistema pronto',
      'Substituir conversas com stakeholders',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Modelo e uma abstracao util; deve omitir detalhes irrelevantes e esclarecer decisoes.',
    feedbackWrong: 'Modelos nao precisam reproduzir todo o codigo. Eles ajudam a comunicar, raciocinar e decidir.',
  },
];

const QUIZ_AV2: QuizQuestionData[] = [
  {
    id: 'pdsw-q11',
    exam: 'prova2',
    question: '11. Baixo acoplamento significa que:',
    options: [
      'Os modulos dependem pouco uns dos outros',
      'Todos os metodos ficam na mesma classe',
      'O sistema nao possui interfaces',
      'Toda regra de negocio fica no banco de dados',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Baixo acoplamento reduz impacto de mudancas e facilita testes.',
    feedbackWrong: 'Acoplamento mede dependencia entre partes. Quanto menor, mais simples evoluir e testar modulos isolados.',
  },
  {
    id: 'pdsw-q12',
    exam: 'prova2',
    question: '12. Alta coesao em uma classe indica que:',
    options: [
      'Ela tem muitas responsabilidades desconectadas',
      'Seus elementos colaboram para uma responsabilidade bem definida',
      'Ela acessa diretamente todos os bancos da empresa',
      'Ela nao possui metodos publicos',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Exato. Coesao alta indica foco e clareza de responsabilidade.',
    feedbackWrong: 'Uma unidade coesa agrupa comportamentos relacionados. Classes inchadas e dispersas tendem a baixa coesao.',
  },
  {
    id: 'pdsw-q13',
    exam: 'prova2',
    question: '13. O principio da responsabilidade unica sugere que uma classe deve:',
    options: [
      'Ter apenas um motivo principal para mudar',
      'Conter todas as regras do sistema',
      'Evitar qualquer dependencia externa',
      'Ser implementada sempre como Singleton',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. SRP reduz mistura de interesses e facilita manutencao.',
    feedbackWrong: 'Responsabilidade unica significa separar motivos de mudanca, nao eliminar toda dependencia.',
  },
  {
    id: 'pdsw-q14',
    exam: 'prova2',
    question: '14. O padrao Strategy e mais adequado quando:',
    options: [
      'Um objeto precisa trocar algoritmos ou politicas em tempo de execucao',
      'Um sistema deve ter exatamente uma instancia global',
      'Uma classe precisa esconder uma API complexa atras de uma fachada',
      'Um objeto precisa notificar varios observadores automaticamente',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Strategy encapsula algoritmos intercambiaveis atras de uma interface comum.',
    feedbackWrong: 'Strategy e usado para variar comportamento sem espalhar condicionais por todo o codigo.',
  },
  {
    id: 'pdsw-q15',
    exam: 'prova2',
    question: '15. O padrao Observer ajuda quando:',
    options: [
      'Um objeto precisa avisar dependentes sobre mudancas de estado',
      'Uma classe deve impedir toda extensao',
      'Um algoritmo precisa ser escolhido por if/else fixo',
      'Uma interface grafica deve ignorar eventos',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Observer desacopla o emissor dos interessados em suas mudancas.',
    feedbackWrong: 'Observer implementa uma relacao publicador-assinantes: quando o estado muda, observadores sao notificados.',
  },
  {
    id: 'pdsw-q16',
    exam: 'prova2',
    question: '16. O padrao Facade tem como intencao:',
    options: [
      'Fornecer uma interface simples para um subsistema complexo',
      'Criar uma arvore de objetos compostos',
      'Garantir multiplas instancias de uma classe',
      'Ordenar uma colecao por comparacao',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Exato. Facade simplifica o uso de um conjunto de classes e reduz dependencia do cliente.',
    feedbackWrong: 'Facade cria uma porta de entrada mais simples para um subsistema que internamente pode ser complexo.',
  },
  {
    id: 'pdsw-q17',
    exam: 'prova2',
    question: '17. Em arquitetura em camadas, uma vantagem esperada e:',
    options: [
      'Separar responsabilidades como apresentacao, dominio e persistencia',
      'Obrigar todo codigo a acessar banco diretamente',
      'Eliminar necessidade de testes',
      'Tornar impossivel substituir tecnologias',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Camadas organizam responsabilidades e limitam dependencias.',
    feedbackWrong: 'Arquitetura em camadas separa interesses e tende a facilitar manutencao, testes e substituicao de partes.',
  },
  {
    id: 'pdsw-q18',
    exam: 'prova2',
    question: '18. No padrao MVC, a responsabilidade do Model e:',
    options: [
      'Representar dados, regras e estado do dominio',
      'Renderizar exclusivamente a tela',
      'Capturar cliques e atalhos do usuario',
      'Configurar somente o servidor web',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Model concentra informacao e regras do dominio.',
    feedbackWrong: 'No MVC, View exibe, Controller coordena entrada e Model representa dominio e regras.',
  },
  {
    id: 'pdsw-q19',
    exam: 'prova2',
    question: '19. Microsservicos costumam trazer como tradeoff:',
    options: [
      'Mais simplicidade operacional em todos os casos',
      'Independencia de deploy em troca de maior complexidade distribuida',
      'Ausencia completa de comunicacao entre servicos',
      'Obrigacao de usar um unico banco compartilhado',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Microsservicos podem facilitar autonomia, mas aumentam desafios de rede, dados e observabilidade.',
    feedbackWrong: 'Microsservicos nao sao sempre mais simples; eles trocam modularidade operacional por complexidade distribuida.',
  },
  {
    id: 'pdsw-q20',
    exam: 'prova2',
    question: '20. Uma decisao arquitetural deve considerar principalmente:',
    options: [
      'Apenas a preferencia pessoal do programador',
      'Requisitos de qualidade, restricoes, evolucao e tradeoffs',
      'Somente a linguagem mais popular do momento',
      'O menor numero possivel de discussoes com o time',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Exato. Arquitetura e sobre decisoes estruturais e seus efeitos em qualidades como desempenho, evolucao e confiabilidade.',
    feedbackWrong: 'Decisoes arquiteturais devem responder a requisitos e restricoes, nao apenas a gosto pessoal.',
  },
];

const QUIZ_AV4: QuizQuestionData[] = [
  {
    id: 'pdsw-q21',
    exam: 'prova4',
    question: '21. Testes unitarios verificam principalmente:',
    options: [
      'Unidades pequenas de codigo de forma isolada',
      'Todo o fluxo do usuario no navegador real',
      'A velocidade da rede externa',
      'A aprovacao juridica do produto',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Testes unitarios focam funcoes, classes ou componentes pequenos e isolados.',
    feedbackWrong: 'Testes unitarios sao de baixo nivel. Fluxos completos no navegador sao tipicos de testes E2E.',
  },
  {
    id: 'pdsw-q22',
    exam: 'prova4',
    question: '22. Testes E2E com Playwright sao adequados para:',
    options: [
      'Verificar fluxos reais do usuario em navegadores automatizados',
      'Substituir todo teste unitario',
      'Gerar requisitos automaticamente',
      'Remover a necessidade de deploy',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Exato. Playwright automatiza navegadores e valida jornadas do usuario de ponta a ponta.',
    feedbackWrong: 'E2E valida o sistema integrado do ponto de vista do usuario, mas nao substitui todos os outros niveis de teste.',
  },
  {
    id: 'pdsw-q23',
    exam: 'prova4',
    question: '23. A piramide de testes sugere que:',
    options: [
      'Todos os testes devem ser E2E',
      'Deve haver base maior de testes rapidos e menos testes caros de ponta a ponta',
      'Testes unitarios devem ser evitados',
      'Testes manuais sao sempre superiores',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. A ideia e equilibrar feedback rapido com confianca de integracao.',
    feedbackWrong: 'A piramide favorece muitos testes unitarios/integracao e menos E2E, porque E2E tende a ser mais caro e fragil.',
  },
  {
    id: 'pdsw-q24',
    exam: 'prova4',
    question: '24. Refactoring significa:',
    options: [
      'Mudar a estrutura interna do codigo sem alterar comportamento observavel',
      'Adicionar novas funcionalidades sem testes',
      'Reescrever o sistema do zero sempre que houver bug',
      'Excluir comentarios e documentacao',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Refatoracao melhora design interno preservando comportamento externo.',
    feedbackWrong: 'Refactoring nao e nova funcionalidade. O comportamento observavel deve continuar igual.',
  },
  {
    id: 'pdsw-q25',
    exam: 'prova4',
    question: '25. Qual alternativa e um code smell comum?',
    options: [
      'Metodo longo com muitas responsabilidades',
      'Teste automatizado pequeno e claro',
      'Classe coesa com responsabilidade unica',
      'Nome de metodo expressivo',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Metodo longo geralmente indica baixa coesao e oportunidade de extracao.',
    feedbackWrong: 'Code smells sao sintomas de design problemático, como duplicacao, metodo longo e classe inchada.',
  },
  {
    id: 'pdsw-q26',
    exam: 'prova4',
    question: '26. Por que testes automatizados ajudam no refactoring?',
    options: [
      'Porque provam que o codigo nunca tera defeitos',
      'Porque reduzem risco ao avisar quando uma mudanca altera comportamento esperado',
      'Porque eliminam revisao de codigo',
      'Porque geram automaticamente a arquitetura ideal',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Exato. Testes funcionam como rede de seguranca para mudancas internas.',
    feedbackWrong: 'Testes nao garantem ausencia de defeitos, mas aumentam confianca ao detectar regressao.',
  },
  {
    id: 'pdsw-q27',
    exam: 'prova4',
    question: '27. Integracao continua (CI) e a pratica de:',
    options: [
      'Integrar mudancas frequentemente e validar com checks automatizados',
      'Fazer deploy manual uma vez por ano',
      'Trabalhar sem controle de versao',
      'Evitar revisao para acelerar entregas',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. CI reduz risco de integracao tardia e gera feedback rapido.',
    feedbackWrong: 'CI envolve integrar com frequencia e rodar testes, lint, build ou outros checks automaticamente.',
  },
  {
    id: 'pdsw-q28',
    exam: 'prova4',
    question: '28. DevOps busca principalmente:',
    options: [
      'Aproximar desenvolvimento e operacao por colaboracao, automacao e feedback',
      'Criar barreiras entre times',
      'Trocar todo teste por monitoramento',
      'Impedir deploy frequente',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. DevOps combina cultura, praticas e ferramentas para entregar e operar melhor.',
    feedbackWrong: 'DevOps nao e apenas ferramenta; envolve colaboracao, automacao, fluxo e feedback entre desenvolvimento e operacao.',
  },
  {
    id: 'pdsw-q29',
    exam: 'prova4',
    question: '29. Observabilidade em software ajuda a:',
    options: [
      'Entender o comportamento do sistema em producao por logs, metricas e rastreamentos',
      'Evitar qualquer coleta de dados operacionais',
      'Substituir completamente requisitos',
      'Garantir que usuarios nunca encontrem erro',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Exato. Observabilidade permite diagnosticar problemas reais e orientar melhoria continua.',
    feedbackWrong: 'Observabilidade usa sinais como logs, metricas e traces para compreender sistemas em execucao.',
  },
  {
    id: 'pdsw-q30',
    exam: 'prova4',
    question: '30. Um pipeline de entrega bem definido deve:',
    options: [
      'Tornar build, testes e deploy mais repetiveis e rastreaveis',
      'Depender de comandos manuais secretos',
      'Executar somente na maquina de uma pessoa',
      'Ignorar falhas para acelerar publicacao',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Pipelines reduzem variacao manual e tornam entregas auditaveis.',
    feedbackWrong: 'Um pipeline deve automatizar passos confiaveis e interromper a entrega quando checks importantes falham.',
  },
];

export const QUIZ_DATA: QuizQuestionData[] = [
  ...QUIZ_AV1,
  ...QUIZ_AV2,
  ...QUIZ_AV4,
];
