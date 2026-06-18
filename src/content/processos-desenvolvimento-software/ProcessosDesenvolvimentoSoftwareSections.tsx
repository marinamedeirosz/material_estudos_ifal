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
    description: 'Software muda porque negocio, usuarios, tecnologia e regulacao mudam. O desafio e evoluir sem perder qualidade.',
    accent: 'accent',
  },
  {
    title: 'Processo como coordenacao',
    description: 'Processos alinham comunicacao, planejamento, construcao, validacao e entrega. Eles reduzem improviso sem eliminar adaptacao.',
    accent: 'accent3',
  },
  {
    title: 'Qualidade desde cedo',
    description: 'Requisitos, modelos, projeto, arquitetura, testes e DevOps formam um fluxo unico de decisao e feedback.',
    accent: 'accent5',
  },
];

const processItems: ConceptItem[] = [
  {
    title: 'Modelos prescritivos',
    description: 'Valorizam planejamento, fases e previsibilidade. Funcionam melhor quando escopo e tecnologia sao conhecidos.',
    accent: 'accent',
  },
  {
    title: 'Metodos ageis',
    description: 'Trabalham em ciclos curtos, com feedback continuo, entregas incrementais e abertura para mudanca controlada.',
    accent: 'accent3',
  },
  {
    title: 'Scrum',
    description: 'Organiza o trabalho em sprints, backlog priorizado, eventos de inspecao e incremento potencialmente entregavel.',
    accent: 'accent2',
  },
  {
    title: 'Kanban',
    description: 'Visualiza fluxo, limita trabalho em progresso e evidencia gargalos. Ajuda a melhorar previsibilidade operacional.',
    accent: 'accent4',
  },
  {
    title: 'XP',
    description: 'Enfatiza praticas tecnicas como testes automatizados, integracao continua, design simples e programacao em pares.',
    accent: 'accent5',
  },
  {
    title: 'MVP',
    description: 'Entrega minima para validar uma hipotese de valor com usuarios reais antes de ampliar investimento.',
    accent: 'accent',
  },
];

const requirementsItems: PanelItem[] = [
  {
    title: 'Requisitos funcionais',
    description: 'Definem comportamentos esperados: cadastrar, consultar, comprar, autenticar, gerar relatorio ou aprovar uma acao.',
  },
  {
    title: 'Requisitos nao funcionais',
    description: 'Definem qualidades e restricoes: desempenho, seguranca, disponibilidade, usabilidade, acessibilidade e compatibilidade.',
  },
  {
    title: 'Historias de usuario',
    description: 'Expressam necessidade sob o ponto de vista de alguem: como usuario, quero uma acao, para obter um beneficio.',
  },
  {
    title: 'Casos de uso',
    description: 'Detalham interacoes entre ator e sistema, incluindo fluxo principal, variacoes, pre-condicoes e pos-condicoes.',
  },
];

const modelItems: ConceptItem[] = [
  {
    title: 'Classes',
    description: 'Representam estrutura: entidades, atributos, operacoes e relacionamentos. Ajudam a discutir dominio e responsabilidades.',
    accent: 'accent',
  },
  {
    title: 'Sequencia',
    description: 'Mostram mensagens ao longo do tempo. Sao uteis para explicar colaboracao entre tela, servico, repositorio e objetos.',
    accent: 'accent3',
  },
  {
    title: 'Atividades',
    description: 'Descrevem fluxo de trabalho, decisoes, paralelismo e caminhos alternativos. Sao bons para processos e regras de negocio.',
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
    description: 'Modulos dependem pouco entre si, entao mudancas ficam mais localizadas e testes ficam mais simples.',
    accent: 'accent',
  },
  {
    title: 'Alta coesao',
    description: 'Cada modulo possui responsabilidades relacionadas e claras. Coesao alta reduz classes inchadas e metodos confusos.',
    accent: 'accent2',
  },
  {
    title: 'SOLID',
    description: 'Conjunto de principios para orientar responsabilidades, extensao, substituicao, interfaces e inversao de dependencias.',
    accent: 'accent3',
  },
  {
    title: 'Padroes de projeto',
    description: 'Solucoes recorrentes para problemas de projeto. Melhoram vocabulario tecnico e reduzem reinvencao de solucoes.',
    accent: 'accent5',
  },
];

const patternItems: PanelItem[] = [
  {
    title: 'Strategy',
    description: 'Encapsula algoritmos intercambiaveis. Evita condicionais repetidas quando uma regra pode variar.',
  },
  {
    title: 'Observer',
    description: 'Permite que varios interessados sejam notificados quando um objeto muda de estado.',
  },
  {
    title: 'Factory Method',
    description: 'Centraliza a criacao de objetos e reduz acoplamento do cliente a classes concretas.',
  },
  {
    title: 'Facade',
    description: 'Oferece uma interface simples para um subsistema complexo, preservando detalhes internos.',
  },
];

const architectureItems: ConceptItem[] = [
  {
    title: 'Camadas',
    description: 'Separa apresentacao, aplicacao, dominio e infraestrutura. Facilita manutencao quando as dependencias sao bem controladas.',
    accent: 'accent',
  },
  {
    title: 'MVC',
    description: 'Divide responsabilidades entre Model, View e Controller. Evita misturar regra de negocio com apresentacao.',
    accent: 'accent2',
  },
  {
    title: 'Microsservicos',
    description: 'Favorecem autonomia de deploy e escala, mas trazem complexidade distribuida, observabilidade e consistencia de dados.',
    accent: 'accent3',
  },
  {
    title: 'Mensageria',
    description: 'Desacopla produtores e consumidores com comunicacao assincrona. Ajuda em integracoes e processamento resiliente.',
    accent: 'accent4',
  },
  {
    title: 'APIs',
    description: 'Contratos de integracao entre sistemas. Precisam de versionamento, seguranca, documentacao e tratamento de erro.',
    accent: 'accent5',
  },
  {
    title: 'Tradeoffs',
    description: 'Toda arquitetura troca qualidades: simplicidade, desempenho, custo, evolucao, autonomia, seguranca e operacao.',
    accent: 'accent',
  },
];

const qualityItems: ConceptItem[] = [
  {
    title: 'Testes unitarios',
    description: 'Validam unidades pequenas com feedback rapido. Sao base para evolucao segura e refactoring frequente.',
    accent: 'accent',
  },
  {
    title: 'Testes E2E',
    description: 'Validam jornadas completas do usuario. Com Playwright, fluxos reais podem ser automatizados em navegadores.',
    accent: 'accent3',
  },
  {
    title: 'Refactoring',
    description: 'Melhora a estrutura interna sem alterar comportamento observavel. Precisa de testes para reduzir risco.',
    accent: 'accent2',
  },
  {
    title: 'DevOps',
    description: 'Integra desenvolvimento e operacao com automacao, CI/CD, monitoramento, feedback e colaboracao.',
    accent: 'accent5',
  },
];

const practiceItems: PanelItem[] = [
  {
    title: 'Sistema de Classificados Web',
    description: 'Use como estudo de escopo, requisitos, casos de uso, entidades principais e arquitetura inicial de uma aplicacao web.',
  },
  {
    title: 'Pitch de criacao de MVPs',
    description: 'Conecte problema, publico, proposta de valor, hipotese, funcionalidades minimas e criterio de validacao.',
  },
  {
    title: 'Diagramas de Atividades e Sequencia',
    description: 'Revise fluxo de negocio e interacoes entre componentes, atores e responsabilidades do sistema.',
  },
  {
    title: 'Atividades de Padroes',
    description: 'Mapeie o problema recorrente, o padrao adequado, os papeis das classes e o tradeoff introduzido.',
  },
  {
    title: 'Atividade de Refactoring',
    description: 'Identifique code smells, proponha pequenas transformacoes e preserve comportamento com testes.',
  },
  {
    title: 'Testes E2E com Playwright',
    description: 'Modele fluxos criticos do usuario, seletores robustos, asserts claros e execucao em pipeline.',
  },
];

const pdswExamLabels = {
  prova1: {
    label: 'AV1',
    description: 'Capitulos 1 a 4: introducao, processos, requisitos e modelos.',
  },
  prova2: {
    label: 'AV2',
    description: 'Capitulos 5 a 7: principios de projeto, padroes e arquitetura.',
  },
  prova4: {
    label: 'AV4',
    description: 'Capitulos 8 a 10: testes, refactoring e DevOps.',
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
        title="Visao Geral"
        subtitle="Uma trilha para entender como software e concebido, projetado, testado, evoluido e entregue"
        colorClass="text-accent"
      />
      <ConceptGrid items={overviewItems} columns="md:grid-cols-3" />
      <HighlightBox title="Fonte e creditos">
        <p>
          A disciplina foi organizada a partir dos dez primeiros capitulos do livro <strong>Engenharia de Software Moderna</strong>, de Marco Tulio Valente, dos materiais de apoio locais em PDSW e das orientacoes do professor <strong>Elvys Alves Soares</strong>.
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
        subtitle="Da compreensao do problema ao fluxo de trabalho que permite entregar valor"
        colorClass="text-accent3"
      />
      <ConceptGrid items={processItems} />
      <HighlightBox title="Fluxo de descoberta e entrega" accent="var(--color-accent3)">
        <FlowDiagram items={['Problema', 'Requisitos', 'MVP', 'Sprint', 'Feedback', 'Incremento']} />
      </HighlightBox>
      <div>
        <h3 className="mb-3 font-display text-xl font-bold text-accent4">Requisitos na pratica</h3>
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
        subtitle="Modelos para comunicar comportamento e principios para manter o design evolutivo"
        colorClass="text-accent4"
      />
      <div>
        <h3 className="mb-3 font-display text-xl font-bold text-accent">Modelos UML uteis</h3>
        <ConceptGrid items={modelItems} columns="md:grid-cols-2 lg:grid-cols-4" />
      </div>
      <div>
        <h3 className="mb-3 font-display text-xl font-bold text-accent3">Principios de projeto</h3>
        <ConceptGrid items={projectItems} columns="md:grid-cols-2 lg:grid-cols-4" />
      </div>
      <div>
        <h3 className="mb-3 font-display text-xl font-bold text-accent5">Padroes recorrentes</h3>
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
        subtitle="Decisoes estruturais que condicionam manutencao, deploy, desempenho e evolucao"
        colorClass="text-accent2"
      />
      <ConceptGrid items={architectureItems} />
      <HighlightBox title="Perguntas de arquitetura" accent="var(--color-accent2)">
        <p>
          Que partes mudam com mais frequencia? Quais propriedades de qualidade importam mais? O sistema precisa escalar por modulo, por fluxo ou por carga? Como erros serao observados em producao?
        </p>
      </HighlightBox>
    </section>
  );
}

function QualidadeEvolucaoSection() {
  const playwrightCode = `\
import { test, expect } from '@playwright/test';

test('usuario publica um classificado', async ({ page }) => {
  await page.goto('/classificados/novo');
  await page.getByLabel('Titulo').fill('Notebook usado');
  await page.getByLabel('Preco').fill('1200');
  await page.getByRole('button', { name: 'Publicar' }).click();

  await expect(page.getByText('Classificado publicado')).toBeVisible();
});`;

  const refactoringCode = `\
// Antes: metodo longo mistura regra, validacao e formatacao
function finalizarPedido(pedido) {
  if (!pedido.itens.length) throw new Error('Pedido vazio');
  const total = pedido.itens.reduce((soma, item) => soma + item.preco, 0);
  pedido.status = total > 0 ? 'fechado' : 'pendente';
  return 'Pedido ' + pedido.status + ': R$ ' + total.toFixed(2);
}

// Depois: pequenas funcoes deixam intencao e testes mais claros
const calcularTotal = pedido => pedido.itens.reduce((soma, item) => soma + item.preco, 0);
const formatarResumo = (status, total) => \`Pedido \${status}: R$ \${total.toFixed(2)}\`;`;

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Qualidade e Evolucao"
        subtitle="Testes, refactoring e DevOps como mecanismos de confianca para mudar software"
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
          Um pipeline confiavel deve rodar checks automatizados, impedir entregas quebradas, preservar historico e tornar falhas visiveis cedo.
        </p>
      </HighlightBox>
    </section>
  );
}

function PraticasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Praticas da Disciplina"
        subtitle="Como conectar os materiais locais aos capitulos do livro e ao seminario"
        colorClass="text-accent"
      />
      <PanelList items={practiceItems} columns="md:grid-cols-2 lg:grid-cols-3" />
      <HighlightBox title="Roteiro para o seminario">
        <p>
          Quando o tema for definido pelo professor, organize a apresentacao em: problema, conceito central, exemplo aplicado, relacao com Engenharia de Software Moderna, riscos, tradeoffs e perguntas para discussao.
        </p>
      </HighlightBox>
      <HighlightBox title="Preparacao para revisao" accent="var(--color-accent4)">
        <p>
          Para cada atividade, conecte o artefato pratico a uma decisao: requisito, modelo, principio de projeto, padrao, estrategia de teste, refactoring ou pratica DevOps.
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
        subtitle="Leitura guiada dos dez primeiros capitulos de Engenharia de Software Moderna"
        colorClass="text-accent3"
      />
      <ExternalBookReader
        title="Engenharia de Software Moderna"
        description="Livro online de Marco Tulio Valente usado como base da disciplina. O leitor abaixo aponta para o site oficial e preserva o conteudo na origem."
        chapters={PDSW_BOOK_CHAPTERS}
      />
    </section>
  );
}

function QuizSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Quiz de Revisao"
        subtitle="Questoes organizadas por AV1, AV2 e AV4, com alternativas normais, Kahoot e geracao por IA"
        colorClass="text-accent"
      />
      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" examLabels={pdswExamLabels} />}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" examLabels={pdswExamLabels} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>
                A IA usa o contexto da disciplina para gerar lotes de perguntas ineditas sobre os capitulos e praticas selecionadas.
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
