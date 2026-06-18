import type { ExternalBookChapter } from '../../components/ui/ExternalBookReader';
import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';

export const PDSW_BOOK_CHAPTERS: ExternalBookChapter[] = [
  { id: 'cap1', shortTitle: 'Cap. 1', title: 'Introdução', url: 'https://engsoftmoderna.info/cap1.html' },
  { id: 'cap2', shortTitle: 'Cap. 2', title: 'Processos', url: 'https://engsoftmoderna.info/cap2.html' },
  { id: 'cap3', shortTitle: 'Cap. 3', title: 'Requisitos', url: 'https://engsoftmoderna.info/cap3.html' },
  { id: 'cap4', shortTitle: 'Cap. 4', title: 'Modelos', url: 'https://engsoftmoderna.info/cap4.html' },
  { id: 'cap5', shortTitle: 'Cap. 5', title: 'Princípios de Projeto', url: 'https://engsoftmoderna.info/cap5.html' },
  { id: 'cap6', shortTitle: 'Cap. 6', title: 'Padrões de Projeto', url: 'https://engsoftmoderna.info/cap6.html' },
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
    scope: 'Capítulos 1 a 4: Introdução, Processos, Requisitos e Modelos.',
  },
  {
    id: 'av2',
    label: 'N1 / AV2',
    title: 'Projeto, Padrões e Arquitetura',
    scope: 'Capítulos 5 a 7: Princípios de Projeto, Padrões de Projeto e Arquitetura.',
  },
  {
    id: 's1',
    label: 'N2 / S1',
    title: 'Seminário',
    scope: 'Tema definido pelo professor, apresentado como aprofundamento aplicado.',
  },
  {
    id: 'av4',
    label: 'N2 / AV4',
    title: 'Qualidade, Evolução e Operação',
    scope: 'Capítulos 8 a 10: Testes, Refactoring e DevOps.',
  },
];

export const PDSW_GUIDE_CONTEXT = `
GUIA COMPLETO DE PROCESSOS DE DESENVOLVIMENTO DE SOFTWARE - Resumo:

1. INTRODUÇÃO: Engenharia de Software trata da construção, evolução e manutenção de sistemas complexos. Software é maleável, invisível e sujeito a mudanças constantes. A disciplina conecta produto, processo, pessoas, qualidade e negócio.

2. PROCESSOS: Processos organizam atividades como comunicação, planejamento, modelagem, construção, testes e entrega. Modelos prescritivos ajudam previsibilidade; métodos ágeis favorecem ciclos curtos, colaboração, feedback e adaptação. Scrum, Kanban e XP reduzem risco por entregas incrementais.

3. REQUISITOS: Requisitos descrevem necessidades, regras e restrições do sistema. Podem ser funcionais, não funcionais e de domínio. Histórias de usuário, casos de uso, prototipos e MVP ajudam a validar valor antes de investir demais.

4. MODELOS: Modelos simplificam a comunicação sobre sistemas. UML representa aspectos estruturais e comportamentais por diagramas de classes, sequência, atividades e casos de uso. Modelos bons reduzem ambiguidade e apoiam decisões.

5. PRINCÍPIOS DE PROJETO: Modularidade, abstração, encapsulamento, coesão, baixo acoplamento, separação de responsabilidades e princípios SOLID ajudam a criar software compreensível, flexível e testavel.

6. PADRÕES DE PROJETO: Padrões são soluções recorrentes para problemas conhecidos. Factory Method, Singleton, Strategy, Observer, Adapter, Facade e Template Method ajudam a comunicar e reaproveitar conhecimento de projeto.

7. ARQUITETURA: Arquitetura define organização de componentes, responsabilidades, comunicação e propriedades de qualidade. Camadas, MVC, cliente-servidor, microsserviços, mensageria e APIs envolvem tradeoffs de evolução, acoplamento, deploy e observabilidade.

8. TESTES: Testes aumentam confiança e reduzem regressão. Testes unitários, integração, sistema, aceitação e E2E cobrem níveis diferentes. Playwright permite automatizar fluxos reais do usuário em navegadores.

9. REFACTORING: Refatorar e melhorar estrutura interna sem alterar comportamento observável. Code smells como duplicação, métodos longos e classes inchadas indicam pontos de melhoria. Testes automatizados reduzem risco durante refatoração.

10. DEVOPS: DevOps aproxima desenvolvimento e operação. Git, code review, integração contínua, entrega contínua, conteinerização, monitoramento e automação tornam entregas mais frequentes, rastreáveis e confiáveis.

DIVISÃO DE AVALIAÇÕES: AV1 cobre capítulos 1 a 4; AV2 cobre capítulos 5 a 7; S1 é seminário com tema definido pelo professor; AV4 cobre capítulos 8 a 10.
`;

export const PDSW_TOPICS: QuizTopicOption[] = [
  {
    value: 'av1',
    label: 'AV1: Introdução, Processos, Requisitos e Modelos',
    prompt: 'Conteúdo da AV1 de PDSW: introdução a Engenharia de Software, características do software, crise e complexidade, processos de software, modelos tradicionais e ágeis, Scrum, Kanban, XP, requisitos funcionais, não funcionais e de domínio, histórias de usuário, casos de uso, MVP, prototipação e modelos UML de classes, sequência e atividades.',
  },
  {
    value: 'av2',
    label: 'AV2: Princípios, Padrões e Arquitetura',
    prompt: 'Conteúdo da AV2 de PDSW: princípios de projeto, modularidade, abstração, encapsulamento, coesão, acoplamento, SOLID, padrões de projeto como Strategy, Observer, Factory Method, Singleton, Adapter e Facade, arquitetura de software, camadas, MVC, microsserviços, APIs, mensageria e tradeoffs arquiteturais.',
  },
  {
    value: 'av4',
    label: 'AV4: Testes, Refactoring e DevOps',
    prompt: 'Conteúdo da AV4 de PDSW: testes unitários, integração, sistema, aceitação e E2E, Playwright, pirâmide de testes, refactoring, code smells, preservação de comportamento, Git, CI/CD, DevOps, automação, deploy, observabilidade e colaboração entre desenvolvimento e operação.',
  },
  { value: 'fundamentos', label: 'Fundamentos de Engenharia de Software' },
  { value: 'processos', label: 'Processos e Métodos Ageis' },
  { value: 'requisitos', label: 'Requisitos e MVP' },
  { value: 'modelagem', label: 'Modelagem UML' },
  { value: 'projeto', label: 'Princípios de Projeto' },
  { value: 'padroes', label: 'Padrões de Projeto' },
  { value: 'arquitetura', label: 'Arquitetura de Software' },
  { value: 'testes', label: 'Testes e Playwright' },
  { value: 'refactoring', label: 'Refactoring' },
  { value: 'devops', label: 'DevOps' },
];

export const PDSW_SECTIONS = [
  { id: 'intro', title: 'Visão Geral', shortTitle: 'Visão Geral' },
  { id: 'produto-processo', title: 'Produto e Processo', shortTitle: 'Produto/Processo', exam: 'AV1' },
  { id: 'modelagem-projeto', title: 'Modelagem e Projeto', shortTitle: 'Modelagem/Projeto', exam: 'AV1/AV2' },
  { id: 'arquitetura', title: 'Arquitetura', shortTitle: 'Arquitetura', exam: 'AV2' },
  { id: 'qualidade-evolucao', title: 'Qualidade e Evolução', shortTitle: 'Qualidade', exam: 'AV4' },
  { id: 'praticas', title: 'Práticas da Disciplina', shortTitle: 'Práticas', exam: 'S1' },
  { id: 'livro', title: 'Livro Base', shortTitle: 'Livro' },
  { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
];

const QUIZ_AV1: QuizQuestionData[] = [
  {
    id: 'pdsw-q1',
    exam: 'prova1',
    question: '1. Qual alternativa descreve melhor o objetivo central da Engenharia de Software?',
    options: [
      'Programar rapidamente sem documentar decisões',
      'Aplicar princípios, processos e técnicas para construir e evoluir software com qualidade',
      'Trocar toda modelagem por reuniões informais',
      'Garantir que todo sistema seja feito por uma única pessoa',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Engenharia de Software combina produto, processo, pessoas e qualidade para lidar com sistemas complexos.',
    feedbackWrong: 'O foco não é apenas programar; é construir, manter e evoluir software com qualidade, previsibilidade e valor.',
  },
  {
    id: 'pdsw-q2',
    exam: 'prova1',
    question: '2. Por que software costuma ser considerado difícil de gerenciar?',
    options: [
      'Porque não muda depois da primeira entrega',
      'Porque e invisível, complexo, maleável e sujeito a mudanças frequentes',
      'Porque não depende de requisitos',
      'Porque sempre tem custo de reprodução maior que hardware',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Exato. A invisibilidade e a facilidade aparente de mudança tornam escopo, qualidade e manutenção difíceis.',
    feedbackWrong: 'Software é difícil porque é abstrato, complexo, fácil de alterar e constantemente pressionado por novas necessidades.',
  },
  {
    id: 'pdsw-q3',
    exam: 'prova1',
    question: '3. Um processo de software serve principalmente para:',
    options: [
      'Eliminar comunicação entre pessoas',
      'Organizar atividades, responsabilidades, artefatos e critérios de entrega',
      'Impedir que requisitos mudem',
      'Substituir testes por documentação',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Processo dá ordem ao trabalho e explicita como o time planeja, constrói, valida e entrega.',
    feedbackWrong: 'Processo não elimina mudança nem comunicação; ele organiza o fluxo de trabalho e os critérios de qualidade.',
  },
  {
    id: 'pdsw-q4',
    exam: 'prova1',
    question: '4. Qual caracteristica diferencia métodos ágeis de abordagens prescritivas tradicionais?',
    options: [
      'Ágil elimina planejamento',
      'Ágil valoriza ciclos curtos, feedback frequente e adaptação contínua',
      'Ágil proíbe documentação',
      'Ágil só funciona sem cliente',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Agilidade não é ausência de processo; é capacidade de aprender e ajustar por incrementos.',
    feedbackWrong: 'Métodos ágeis ainda planejam e documentam quando necessário, mas priorizam entrega incremental e feedback rápido.',
  },
  {
    id: 'pdsw-q5',
    exam: 'prova1',
    question: '5. Em Scrum, o Sprint representa:',
    options: [
      'Um ciclo fixo de trabalho para entregar um incremento potencialmente utilizável',
      'Uma reunião anual de planejamento estratégico',
      'Uma lista permanente de bugs sem priorização',
      'Um documento obrigatório de arquitetura corporativa',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Exato. O Sprint é o ciclo de execução em que o time transforma itens priorizados em incremento.',
    feedbackWrong: 'Sprint é um ciclo curto e timeboxed que deve produzir um incremento inspecionável do produto.',
  },
  {
    id: 'pdsw-q6',
    exam: 'prova1',
    question: '6. Um requisito funcional descreve:',
    options: [
      'Uma qualidade global como desempenho ou segurança',
      'Uma funcionalidade ou comportamento esperado do sistema',
      'O salário da equipe de desenvolvimento',
      'A cor obrigatória do logotipo da organização',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Requisitos funcionais definem o que o sistema deve fazer.',
    feedbackWrong: 'Requisitos funcionais descrevem comportamentos. Qualidades como desempenho e segurança são não funcionais.',
  },
  {
    id: 'pdsw-q7',
    exam: 'prova1',
    question: '7. Qual exemplo é um requisito não funcional?',
    options: [
      'O usuário deve cadastrar um anúncio',
      'O sistema deve gerar relatório mensal',
      'A busca deve responder em até dois segundos sob carga prevista',
      'O administrador deve bloquear um usuário',
    ],
    correctIndex: 2,
    feedbackCorrect: 'Correto. Tempo de resposta é uma propriedade de qualidade, portanto requisito não funcional.',
    feedbackWrong: 'Requisito não funcional define atributo de qualidade ou restrição, como desempenho, segurança ou disponibilidade.',
  },
  {
    id: 'pdsw-q8',
    exam: 'prova1',
    question: '8. A principal função de um MVP é:',
    options: [
      'Entregar o produto final com todos os recursos planejados',
      'Validar uma hipótese de valor com o menor conjunto útil de funcionalidades',
      'Evitar contato com usuários reais',
      'Substituir completamente testes automatizados',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Exato. MVP reduz desperdício ao testar valor e aprendizado com uma versão mínima viável.',
    feedbackWrong: 'MVP não é produto incompleto sem critério; é uma versão mínima para validar aprendizado e valor.',
  },
  {
    id: 'pdsw-q9',
    exam: 'prova1',
    question: '9. Em UML, um diagrama de sequência enfatiza:',
    options: [
      'A ordem temporal das mensagens entre objetos ou participantes',
      'A estrutura física do banco de dados',
      'O custo mensal da infraestrutura',
      'A paleta visual da interface',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Diagramas de sequência mostram interações ao longo do tempo.',
    feedbackWrong: 'Diagrama de sequência e comportamental: mostra participantes, mensagens e ordem temporal da interação.',
  },
  {
    id: 'pdsw-q10',
    exam: 'prova1',
    question: '10. Um bom modelo de software deve:',
    options: [
      'Representar todos os detalhes do código fonte',
      'Reduzir ambiguidade e destacar aspectos importantes para decisão e comunicação',
      'Ser criado apenas depois do sistema pronto',
      'Substituir conversas com stakeholders',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Modelo é uma abstração útil; deve omitir detalhes irrelevantes e esclarecer decisões.',
    feedbackWrong: 'Modelos não precisam reproduzir todo o código. Eles ajudam a comunicar, raciocinar e decidir.',
  },
];

const QUIZ_AV2: QuizQuestionData[] = [
  {
    id: 'pdsw-q11',
    exam: 'prova2',
    question: '11. Baixo acoplamento significa que:',
    options: [
      'Os módulos dependem pouco uns dos outros',
      'Todos os métodos ficam na mesma classe',
      'O sistema não possui interfaces',
      'Toda regra de negócio fica no banco de dados',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Baixo acoplamento reduz impacto de mudanças e facilita testes.',
    feedbackWrong: 'Acoplamento mede dependência entre partes. Quanto menor, mais simples evoluir e testar módulos isolados.',
  },
  {
    id: 'pdsw-q12',
    exam: 'prova2',
    question: '12. Alta coesão em uma classe indica que:',
    options: [
      'Ela tem muitas responsabilidades desconectadas',
      'Seus elementos colaboram para uma responsabilidade bem definida',
      'Ela acessa diretamente todos os bancos da empresa',
      'Ela não possui métodos públicos',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Exato. Coesão alta indica foco e clareza de responsabilidade.',
    feedbackWrong: 'Uma unidade coesa agrupa comportamentos relacionados. Classes inchadas e dispersas tendem a baixa coesão.',
  },
  {
    id: 'pdsw-q13',
    exam: 'prova2',
    question: '13. O princípio da responsabilidade única sugere que uma classe deve:',
    options: [
      'Ter apenas um motivo principal para mudar',
      'Conter todas as regras do sistema',
      'Evitar qualquer dependência externa',
      'Ser implementada sempre como Singleton',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. SRP reduz mistura de interesses e facilita manutenção.',
    feedbackWrong: 'Responsabilidade única significa separar motivos de mudança, não eliminar toda dependência.',
  },
  {
    id: 'pdsw-q14',
    exam: 'prova2',
    question: '14. O padrão Strategy é mais adequado quando:',
    options: [
      'Um objeto precisa trocar algoritmos ou políticas em tempo de execução',
      'Um sistema deve ter exatamente uma instância global',
      'Uma classe precisa esconder uma API complexa atrás de uma fachada',
      'Um objeto precisa notificar vários observadores automaticamente',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Strategy encapsula algoritmos intercambiáveis atrás de uma interface comum.',
    feedbackWrong: 'Strategy é usado para variar comportamento sem espalhar condicionais por todo o código.',
  },
  {
    id: 'pdsw-q15',
    exam: 'prova2',
    question: '15. O padrão Observer ajuda quando:',
    options: [
      'Um objeto precisa avisar dependentes sobre mudanças de estado',
      'Uma classe deve impedir toda extensão',
      'Um algoritmo precisa ser escolhido por if/else fixo',
      'Uma interface gráfica deve ignorar eventos',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Observer desacopla o emissor dos interessados em suas mudanças.',
    feedbackWrong: 'Observer implementa uma relação publicador-assinantes: quando o estado muda, observadores são notificados.',
  },
  {
    id: 'pdsw-q16',
    exam: 'prova2',
    question: '16. O padrão Facade tem como intenção:',
    options: [
      'Fornecer uma interface simples para um subsistema complexo',
      'Criar uma árvore de objetos compostos',
      'Garantir múltiplas instâncias de uma classe',
      'Ordenar uma coleção por comparação',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Exato. Facade simplifica o uso de um conjunto de classes e reduz dependência do cliente.',
    feedbackWrong: 'Facade cria uma porta de entrada mais simples para um subsistema que internamente pode ser complexo.',
  },
  {
    id: 'pdsw-q17',
    exam: 'prova2',
    question: '17. Em arquitetura em camadas, uma vantagem esperada é:',
    options: [
      'Separar responsabilidades como apresentação, domínio e persistência',
      'Obrigar todo código a acessar banco diretamente',
      'Eliminar necessidade de testes',
      'Tornar impossível substituir tecnologias',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Camadas organizam responsabilidades e limitam dependências.',
    feedbackWrong: 'Arquitetura em camadas separa interesses e tende a facilitar manutenção, testes e substituição de partes.',
  },
  {
    id: 'pdsw-q18',
    exam: 'prova2',
    question: '18. No padrão MVC, a responsabilidade do Model é:',
    options: [
      'Representar dados, regras e estado do domínio',
      'Renderizar exclusivamente a tela',
      'Capturar cliques e atalhos do usuário',
      'Configurar somente o servidor web',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Model concentra informação e regras do domínio.',
    feedbackWrong: 'No MVC, View exibe, Controller coordena entrada e Model representa domínio e regras.',
  },
  {
    id: 'pdsw-q19',
    exam: 'prova2',
    question: '19. Microsserviços costumam trazer como tradeoff:',
    options: [
      'Mais simplicidade operacional em todos os casos',
      'Independência de deploy em troca de maior complexidade distribuída',
      'Ausência completa de comunicação entre serviços',
      'Obrigação de usar um único banco compartilhado',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. Microsserviços podem facilitar autonomia, mas aumentam desafios de rede, dados e observabilidade.',
    feedbackWrong: 'Microsserviços não são sempre mais simples; eles trocam modularidade operacional por complexidade distribuída.',
  },
  {
    id: 'pdsw-q20',
    exam: 'prova2',
    question: '20. Uma decisão arquitetural deve considerar principalmente:',
    options: [
      'Apenas a preferência pessoal do programador',
      'Requisitos de qualidade, restrições, evolução e tradeoffs',
      'Somente a linguagem mais popular do momento',
      'O menor número possível de discussões com o time',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Exato. Arquitetura é sobre decisões estruturais e seus efeitos em qualidades como desempenho, evolução e confiabilidade.',
    feedbackWrong: 'Decisões arquiteturais devem responder a requisitos e restrições, não apenas a gosto pessoal.',
  },
];

const QUIZ_AV4: QuizQuestionData[] = [
  {
    id: 'pdsw-q21',
    exam: 'prova4',
    question: '21. Testes unitários verificam principalmente:',
    options: [
      'Unidades pequenas de código de forma isolada',
      'Todo o fluxo do usuário no navegador real',
      'A velocidade da rede externa',
      'A aprovação jurídica do produto',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Testes unitários focam funções, classes ou componentes pequenos e isolados.',
    feedbackWrong: 'Testes unitários são de baixo nível. Fluxos completos no navegador são típicos de testes E2E.',
  },
  {
    id: 'pdsw-q22',
    exam: 'prova4',
    question: '22. Testes E2E com Playwright são adequados para:',
    options: [
      'Verificar fluxos reais do usuário em navegadores automatizados',
      'Substituir todo teste unitário',
      'Gerar requisitos automaticamente',
      'Remover a necessidade de deploy',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Exato. Playwright automatiza navegadores e valida jornadas do usuário de ponta a ponta.',
    feedbackWrong: 'E2E valida o sistema integrado do ponto de vista do usuário, mas não substitui todos os outros níveis de teste.',
  },
  {
    id: 'pdsw-q23',
    exam: 'prova4',
    question: '23. A pirâmide de testes sugere que:',
    options: [
      'Todos os testes devem ser E2E',
      'Deve haver base maior de testes rápidos e menos testes caros de ponta a ponta',
      'Testes unitários devem ser evitados',
      'Testes manuais são sempre superiores',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Correto. A ideia é equilibrar feedback rápido com confiança de integração.',
    feedbackWrong: 'A pirâmide favorece muitos testes unitários/integração e menos E2E, porque E2E tende a ser mais caro e frágil.',
  },
  {
    id: 'pdsw-q24',
    exam: 'prova4',
    question: '24. Refactoring significa:',
    options: [
      'Mudar a estrutura interna do código sem alterar comportamento observável',
      'Adicionar novas funcionalidades sem testes',
      'Reescrever o sistema do zero sempre que houver bug',
      'Excluir comentários e documentação',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Refatoração melhora design interno preservando comportamento externo.',
    feedbackWrong: 'Refactoring não é nova funcionalidade. O comportamento observável deve continuar igual.',
  },
  {
    id: 'pdsw-q25',
    exam: 'prova4',
    question: '25. Qual alternativa é um code smell comum?',
    options: [
      'Método longo com muitas responsabilidades',
      'Teste automatizado pequeno e claro',
      'Classe coesa com responsabilidade única',
      'Nome de método expressivo',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Método longo geralmente indica baixa coesão e oportunidade de extração.',
    feedbackWrong: 'Code smells são sintomas de design problemático, como duplicação, método longo e classe inchada.',
  },
  {
    id: 'pdsw-q26',
    exam: 'prova4',
    question: '26. Por que testes automatizados ajudam no refactoring?',
    options: [
      'Porque provam que o código nunca terá defeitos',
      'Porque reduzem risco ao avisar quando uma mudança altera comportamento esperado',
      'Porque eliminam revisão de código',
      'Porque geram automaticamente a arquitetura ideal',
    ],
    correctIndex: 1,
    feedbackCorrect: 'Exato. Testes funcionam como rede de segurança para mudanças internas.',
    feedbackWrong: 'Testes não garantem ausência de defeitos, mas aumentam confiança ao detectar regressão.',
  },
  {
    id: 'pdsw-q27',
    exam: 'prova4',
    question: '27. Integração contínua (CI) é a prática de:',
    options: [
      'Integrar mudanças frequentemente e validar com checks automatizados',
      'Fazer deploy manual uma vez por ano',
      'Trabalhar sem controle de versão',
      'Evitar revisão para acelerar entregas',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. CI reduz risco de integração tardia e gera feedback rápido.',
    feedbackWrong: 'CI envolve integrar com frequência e rodar testes, lint, build ou outros checks automaticamente.',
  },
  {
    id: 'pdsw-q28',
    exam: 'prova4',
    question: '28. DevOps busca principalmente:',
    options: [
      'Aproximar desenvolvimento e operação por colaboração, automação e feedback',
      'Criar barreiras entre times',
      'Trocar todo teste por monitoramento',
      'Impedir deploy frequente',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. DevOps combina cultura, práticas e ferramentas para entregar e operar melhor.',
    feedbackWrong: 'DevOps não é apenas ferramenta; envolve colaboração, automação, fluxo e feedback entre desenvolvimento e operação.',
  },
  {
    id: 'pdsw-q29',
    exam: 'prova4',
    question: '29. Observabilidade em software ajuda a:',
    options: [
      'Entender o comportamento do sistema em produção por logs, métricas e rastreamentos',
      'Evitar qualquer coleta de dados operacionais',
      'Substituir completamente requisitos',
      'Garantir que usuários nunca encontrem erro',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Exato. Observabilidade permite diagnosticar problemas reais e orientar melhoria contínua.',
    feedbackWrong: 'Observabilidade usa sinais como logs, métricas e traces para compreender sistemas em execução.',
  },
  {
    id: 'pdsw-q30',
    exam: 'prova4',
    question: '30. Um pipeline de entrega bem definido deve:',
    options: [
      'Tornar build, testes e deploy mais repetíveis e rastreáveis',
      'Depender de comandos manuais secretos',
      'Executar somente na máquina de uma pessoa',
      'Ignorar falhas para acelerar publicação',
    ],
    correctIndex: 0,
    feedbackCorrect: 'Correto. Pipelines reduzem variação manual e tornam entregas auditáveis.',
    feedbackWrong: 'Um pipeline deve automatizar passos confiáveis e interromper a entrega quando checks importantes falham.',
  },
];

export const QUIZ_DATA: QuizQuestionData[] = [
  ...QUIZ_AV1,
  ...QUIZ_AV2,
  ...QUIZ_AV4,
];
