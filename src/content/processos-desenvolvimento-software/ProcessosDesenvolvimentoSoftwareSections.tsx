import AIKahootQuiz from '../../components/ui/AIKahootQuiz';
import AIQuizGenerator from '../../components/ui/AIQuizGenerator';
import CodeBlock from '../../components/ui/CodeBlock';
import ConceptCard from '../../components/ui/ConceptCard';
import ExamQuizSelector from '../../components/ui/ExamQuizSelector';
import ExternalBookReader from '../../components/ui/ExternalBookReader';
import FlowDiagram from '../../components/ui/FlowDiagram';
import HighlightBox from '../../components/ui/HighlightBox';
import QuizTabs from '../../components/ui/QuizTabs';
import {
  PDSW_BOOK_CHAPTERS,
  PDSW_EVALUATIONS,
  PDSW_GUIDE_CONTEXT,
  PDSW_TOPICS,
  QUIZ_DATA,
} from './data';

interface ProcessosDesenvolvimentoSoftwareSectionsProps {
  activeSection: string;
}

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  colorClass: string;
}

type Accent = 'accent' | 'accent2' | 'accent3' | 'accent4' | 'accent5';

interface ConceptItem {
  title: string;
  description: string;
  accent: Accent;
}

interface PanelItem {
  title: string;
  description: string;
}

function SectionHeader({ title, subtitle, colorClass }: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      <h2 className={`section-title ${colorClass}`}>{title}</h2>
      <p className="section-subtitle max-w-3xl">{subtitle}</p>
    </div>
  );
}

function ConceptGrid({ items, columns = 'md:grid-cols-2 lg:grid-cols-3' }: { items: ConceptItem[]; columns?: string }) {
  return (
    <div className={`grid grid-cols-1 gap-4 ${columns}`}>
      {items.map(item => (
        <ConceptCard key={item.title} title={item.title} description={item.description} accent={item.accent} />
      ))}
    </div>
  );
}

function PanelList({ items, columns = 'md:grid-cols-2' }: { items: PanelItem[]; columns?: string }) {
  return (
    <div className={`grid grid-cols-1 gap-3 ${columns}`}>
      {items.map(item => (
        <div key={item.title} className="study-surface p-4">
          <h3 className="mb-1 text-sm font-bold text-text">{item.title}</h3>
          <p className="text-sm leading-relaxed text-text-muted">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

const overviewItems: ConceptItem[] = [
  {
    title: 'Produto que evolui',
    description: 'Software muda porque negócio, usuários, tecnologia e regulação mudam. O desafio é evoluir sem perder qualidade.',
    accent: 'accent',
  },
  {
    title: 'Processo como coordenação',
    description: 'Processos alinham comunicação, planejamento, construção, validação e entrega. Eles reduzem improviso sem eliminar adaptação.',
    accent: 'accent3',
  },
  {
    title: 'Qualidade desde cedo',
    description: 'Requisitos, modelos, projeto, arquitetura, testes e DevOps formam um fluxo único de decisão e feedback.',
    accent: 'accent5',
  },
];

const processItems: ConceptItem[] = [
  {
    title: 'Modelos prescritivos',
    description: 'Valorizam planejamento, fases e previsibilidade. Funcionam melhor quando escopo e tecnologia são conhecidos.',
    accent: 'accent',
  },
  {
    title: 'Métodos ágeis',
    description: 'Trabalham em ciclos curtos, com feedback contínuo, entregas incrementais e abertura para mudança controlada.',
    accent: 'accent3',
  },
  {
    title: 'Scrum',
    description: 'Organiza o trabalho em sprints, backlog priorizado, eventos de inspeção e incremento potencialmente entregável.',
    accent: 'accent2',
  },
  {
    title: 'Kanban',
    description: 'Visualiza fluxo, limita trabalho em progresso e evidencia gargalos. Ajuda a melhorar previsibilidade operacional.',
    accent: 'accent4',
  },
  {
    title: 'XP',
    description: 'Enfatiza práticas técnicas como testes automatizados, integração contínua, design simples e programação em pares.',
    accent: 'accent5',
  },
  {
    title: 'MVP',
    description: 'Entrega mínima para validar uma hipótese de valor com usuários reais antes de ampliar investimento.',
    accent: 'accent',
  },
];

const requirementsItems: PanelItem[] = [
  {
    title: 'Requisitos funcionais',
    description: 'Definem comportamentos esperados: cadastrar, consultar, comprar, autenticar, gerar relatório ou aprovar uma ação.',
  },
  {
    title: 'Requisitos não funcionais',
    description: 'Definem qualidades e restrições: desempenho, segurança, disponibilidade, usabilidade, acessibilidade e compatibilidade.',
  },
  {
    title: 'Histórias de usuário',
    description: 'Expressam necessidade sob o ponto de vista de alguém: como usuário, quero uma ação, para obter um benefício.',
  },
  {
    title: 'Casos de uso',
    description: 'Detalham interações entre ator e sistema, incluindo fluxo principal, variações, pré-condições e pós-condições.',
  },
];

const modelItems: ConceptItem[] = [
  {
    title: 'Classes',
    description: 'Representam estrutura: entidades, atributos, operações e relacionamentos. Ajudam a discutir domínio e responsabilidades.',
    accent: 'accent',
  },
  {
    title: 'Sequência',
    description: 'Mostram mensagens ao longo do tempo. São úteis para explicar colaboração entre tela, serviço, repositório e objetos.',
    accent: 'accent3',
  },
  {
    title: 'Atividades',
    description: 'Descrevem fluxo de trabalho, decisões, paralelismo e caminhos alternativos. São bons para processos e regras de negócio.',
    accent: 'accent4',
  },
  {
    title: 'Casos de uso',
    description: 'Mapeiam objetivos dos atores e fronteira do sistema. Ajudam a alinhar escopo com stakeholders.',
    accent: 'accent5',
  },
];

const projectItems: ConceptItem[] = [
  {
    title: 'Baixo acoplamento',
    description: 'Modulos dependem pouco entre si, então mudanças ficam mais localizadas e testes ficam mais simples.',
    accent: 'accent',
  },
  {
    title: 'Alta coesão',
    description: 'Cada módulo possui responsabilidades relacionadas e claras. Coesão alta reduz classes inchadas e métodos confusos.',
    accent: 'accent2',
  },
  {
    title: 'SOLID',
    description: 'Conjunto de princípios para orientar responsabilidades, extensão, substituição, interfaces e inversão de dependências.',
    accent: 'accent3',
  },
  {
    title: 'Padrões de projeto',
    description: 'Solucoes recorrentes para problemas de projeto. Melhoram vocabulário tecnico e reduzem reinvenção de soluções.',
    accent: 'accent5',
  },
];

const patternItems: PanelItem[] = [
  {
    title: 'Strategy',
    description: 'Encapsula algoritmos intercambiáveis. Evita condicionais repetidas quando uma regra pode variar.',
  },
  {
    title: 'Observer',
    description: 'Permite que vários interessados sejam notificados quando um objeto muda de estado.',
  },
  {
    title: 'Factory Method',
    description: 'Centraliza a criação de objetos e reduz acoplamento do cliente a classes concretas.',
  },
  {
    title: 'Facade',
    description: 'Oferece uma interface simples para um subsistema complexo, preservando detalhes internos.',
  },
];

const architectureItems: ConceptItem[] = [
  {
    title: 'Camadas',
    description: 'Separa apresentação, aplicação, domínio e infraestrutura. Facilita manutenção quando as dependências são bem controladas.',
    accent: 'accent',
  },
  {
    title: 'MVC',
    description: 'Divide responsabilidades entre Model, View e Controller. Evita misturar regra de negócio com apresentação.',
    accent: 'accent2',
  },
  {
    title: 'Microsserviços',
    description: 'Favorecem autonomia de deploy e escala, mas trazem complexidade distribuída, observabilidade e consistência de dados.',
    accent: 'accent3',
  },
  {
    title: 'Mensageria',
    description: 'Desacopla produtores e consumidores com comunicação assíncrona. Ajuda em integrações e processamento resiliente.',
    accent: 'accent4',
  },
  {
    title: 'APIs',
    description: 'Contratos de integração entre sistemas. Precisam de versionamento, segurança, documentação e tratamento de erro.',
    accent: 'accent5',
  },
  {
    title: 'Tradeoffs',
    description: 'Toda arquitetura troca qualidades: simplicidade, desempenho, custo, evolução, autonomia, segurança e operação.',
    accent: 'accent',
  },
];

const qualityItems: ConceptItem[] = [
  {
    title: 'Testes unitários',
    description: 'Validam unidades pequenas com feedback rápido. São base para evolução segura e refactoring frequente.',
    accent: 'accent',
  },
  {
    title: 'Testes E2E',
    description: 'Validam jornadas completas do usuário. Com Playwright, fluxos reais podem ser automatizados em navegadores.',
    accent: 'accent3',
  },
  {
    title: 'Refactoring',
    description: 'Melhora a estrutura interna sem alterar comportamento observável. Precisa de testes para reduzir risco.',
    accent: 'accent2',
  },
  {
    title: 'DevOps',
    description: 'Integra desenvolvimento e operação com automação, CI/CD, monitoramento, feedback e colaboração.',
    accent: 'accent5',
  },
];

const practiceItems: PanelItem[] = [
  {
    title: 'Sistema de Classificados Web',
    description: 'Use como estudo de escopo, requisitos, casos de uso, entidades principais e arquitetura inicial de uma aplicação web.',
  },
  {
    title: 'Pitch de criação de MVPs',
    description: 'Conecte problema, público, proposta de valor, hipótese, funcionalidades mínimas e critério de validação.',
  },
  {
    title: 'Diagramas de Atividades e Sequência',
    description: 'Revise fluxo de negócio e interações entre componentes, atores e responsabilidades do sistema.',
  },
  {
    title: 'Atividades de Padrões',
    description: 'Mapeie o problema recorrente, o padrão adequado, os papéis das classes e o tradeoff introduzido.',
  },
  {
    title: 'Atividade de Refactoring',
    description: 'Identifique code smells, proponha pequenas transformações e preserve comportamento com testes.',
  },
  {
    title: 'Testes E2E com Playwright',
    description: 'Modele fluxos críticos do usuário, seletores robustos, asserts claros e execução em pipeline.',
  },
];

const pdswExamLabels = {
  prova1: {
    label: 'AV1',
    description: 'Capítulos 1 a 4: introdução, processos, requisitos e modelos.',
  },
  prova2: {
    label: 'AV2',
    description: 'Capítulos 5 a 7: princípios de projeto, padrões e arquitetura.',
  },
  prova4: {
    label: 'AV4',
    description: 'Capítulos 8 a 10: testes, refactoring e DevOps.',
  },
};

function AssessmentMap() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {PDSW_EVALUATIONS.map(evaluation => (
        <div key={evaluation.id} className="study-surface p-4">
          <span className="mb-2 inline-flex rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">
            {evaluation.label}
          </span>
          <h3 className="mb-1 text-sm font-bold text-text">{evaluation.title}</h3>
          <p className="text-sm leading-relaxed text-text-muted">{evaluation.scope}</p>
        </div>
      ))}
    </div>
  );
}

function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Visão Geral"
        subtitle="Uma trilha para entender como software e concebido, projetado, testado, evoluido e entregue"
        colorClass="text-accent"
      />
      <ConceptGrid items={overviewItems} columns="md:grid-cols-3" />
      <HighlightBox title="Fonte e créditos">
        <p>
          A disciplina foi organizada a partir dos dez primeiros capítulos do livro <strong>Engenharia de Software Moderna</strong>, de Marco Tulio Valente, dos materiais de apoio locais em PDSW e das orientações do professor <strong>Elvys Alves Soares</strong>.
        </p>
      </HighlightBox>
      <div>
        <h3 className="mb-3 font-display text-xl font-bold text-accent3">Como a disciplina foi avaliada</h3>
        <AssessmentMap />
      </div>
    </section>
  );
}

function ProdutoProcessoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Produto e Processo"
        subtitle="Da compreensão do problema ao fluxo de trabalho que permite entregar valor"
        colorClass="text-accent3"
      />
      <ConceptGrid items={processItems} />
      <HighlightBox title="Fluxo de descoberta e entrega" accent="var(--color-accent3)">
        <FlowDiagram items={['Problema', 'Requisitos', 'MVP', 'Sprint', 'Feedback', 'Incremento']} />
      </HighlightBox>
      <div>
        <h3 className="mb-3 font-display text-xl font-bold text-accent4">Requisitos na prática</h3>
        <PanelList items={requirementsItems} />
      </div>
    </section>
  );
}

function ModelagemProjetoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Modelagem e Projeto"
        subtitle="Modelos para comunicar comportamento e princípios para manter o design evolutivo"
        colorClass="text-accent4"
      />
      <div>
        <h3 className="mb-3 font-display text-xl font-bold text-accent">Modelos UML úteis</h3>
        <ConceptGrid items={modelItems} columns="md:grid-cols-2 lg:grid-cols-4" />
      </div>
      <div>
        <h3 className="mb-3 font-display text-xl font-bold text-accent3">Princípios de projeto</h3>
        <ConceptGrid items={projectItems} columns="md:grid-cols-2 lg:grid-cols-4" />
      </div>
      <div>
        <h3 className="mb-3 font-display text-xl font-bold text-accent5">Padrões recorrentes</h3>
        <PanelList items={patternItems} />
      </div>
    </section>
  );
}

function ArquiteturaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Arquitetura"
        subtitle="Decisões estruturais que condicionam manutenção, deploy, desempenho e evolução"
        colorClass="text-accent2"
      />
      <ConceptGrid items={architectureItems} />
      <HighlightBox title="Perguntas de arquitetura" accent="var(--color-accent2)">
        <p>
          Que partes mudam com mais frequência? Quais propriedades de qualidade importam mais? O sistema precisa escalar por módulo, por fluxo ou por carga? Como erros serão observados em produção?
        </p>
      </HighlightBox>
    </section>
  );
}

function QualidadeEvolucaoSection() {
  const playwrightCode = `\
import { test, expect } from '@playwright/test';

test('usuário publica um classificado', async ({ page }) => {
  await page.goto('/classificados/novo');
  await page.getByLabel('Título').fill('Notebook usado');
  await page.getByLabel('Preço').fill('1200');
  await page.getByRole('button', { name: 'Publicar' }).click();

  await expect(page.getByText('Classificado publicado')).toBeVisible();
});`;

  const refactoringCode = `\
// Antes: método longo mistura regra, validação e formatação
function finalizarPedido(pedido) {
  if (!pedido.itens.length) throw new Error('Pedido vazio');
  const total = pedido.itens.reduce((soma, item) => soma + item.preco, 0);
  pedido.status = total > 0 ? 'fechado' : 'pendente';
  return 'Pedido ' + pedido.status + ': R$ ' + total.toFixed(2);
}

// Depois: pequenas funções deixam intenção e testes mais claros
const calcularTotal = pedido => pedido.itens.reduce((soma, item) => soma + item.preco, 0);
const formatarResumo = (status, total) => \`Pedido \${status}: R$ \${total.toFixed(2)}\`;`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Qualidade e Evolução"
        subtitle="Testes, refactoring e DevOps como mecanismos de confiança para mudar software"
        colorClass="text-accent5"
      />
      <ConceptGrid items={qualityItems} columns="md:grid-cols-2 lg:grid-cols-4" />
      <div>
        <h3 className="mb-3 font-display text-xl font-bold text-accent3">Fluxo E2E com Playwright</h3>
        <CodeBlock code={playwrightCode} language="typescript" />
      </div>
      <div>
        <h3 className="mb-3 font-display text-xl font-bold text-accent2">Refactoring seguro</h3>
        <CodeBlock code={refactoringCode} language="typescript" />
      </div>
      <HighlightBox title="CI/CD e feedback" accent="var(--color-accent5)">
        <p>
          Um pipeline confiável deve rodar checks automatizados, impedir entregas quebradas, preservar histórico e tornar falhas visíveis cedo.
        </p>
      </HighlightBox>
    </section>
  );
}

function PraticasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Práticas da Disciplina"
        subtitle="Como conectar os materiais locais aos capítulos do livro e ao seminário"
        colorClass="text-accent"
      />
      <PanelList items={practiceItems} columns="md:grid-cols-2 lg:grid-cols-3" />
      <HighlightBox title="Roteiro para o seminário">
        <p>
          Quando o tema for definido pelo professor, organize a apresentação em: problema, conceito central, exemplo aplicado, relação com Engenharia de Software Moderna, riscos, tradeoffs e perguntas para discussão.
        </p>
      </HighlightBox>
      <HighlightBox title="Preparação para revisão" accent="var(--color-accent4)">
        <p>
          Para cada atividade, conecte o artefato prático a uma decisão: requisito, modelo, princípio de projeto, padrão, estratégia de teste, refactoring ou prática DevOps.
        </p>
      </HighlightBox>
    </section>
  );
}

function LivroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Livro Base"
        subtitle="Leitura guiada dos dez primeiros capítulos de Engenharia de Software Moderna"
        colorClass="text-accent3"
      />
      <ExternalBookReader
        title="Engenharia de Software Moderna"
        description="Livro online de Marco Tulio Valente usado como base da disciplina. O leitor abaixo aponta para o site oficial e preserva o conteúdo na origem."
        chapters={PDSW_BOOK_CHAPTERS}
      />
    </section>
  );
}

function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quiz de Revisão"
        subtitle="Questões organizadas por AV1, AV2 e AV4, com alternativas normais, Kahoot e geração por IA"
        colorClass="text-accent"
      />
      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" examLabels={pdswExamLabels} />}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" examLabels={pdswExamLabels} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>
                A IA usa o contexto da disciplina para gerar lotes de perguntas inéditas sobre os capítulos e práticas selecionadas.
              </p>
            </HighlightBox>
            <AIQuizGenerator guideContext={PDSW_GUIDE_CONTEXT} topics={PDSW_TOPICS} />
          </div>
        )}
        aiKahoot={<AIKahootQuiz guideContext={PDSW_GUIDE_CONTEXT} topics={PDSW_TOPICS} />}
      />
    </section>
  );
}

export default function ProcessosDesenvolvimentoSoftwareSections({
  activeSection,
}: ProcessosDesenvolvimentoSoftwareSectionsProps) {
  switch (activeSection) {
    case 'intro':
      return <IntroSection />;
    case 'produto-processo':
      return <ProdutoProcessoSection />;
    case 'modelagem-projeto':
      return <ModelagemProjetoSection />;
    case 'arquitetura':
      return <ArquiteturaSection />;
    case 'qualidade-evolucao':
      return <QualidadeEvolucaoSection />;
    case 'praticas':
      return <PraticasSection />;
    case 'livro':
      return <LivroSection />;
    case 'quiz':
      return <QuizSection />;
    default:
      return <IntroSection />;
  }
}
