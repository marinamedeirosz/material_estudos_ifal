import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, ConceptGrid, PanelList } from '../../../components/sections';
import { revisionOverview, examTopics, miniProjects } from './blocks';

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Estrutura de Dados"
        subtitle="Da representação em memória à análise de complexidade - escolha a estrutura certa para cada problema"
        colorClass="text-accent"
      />

      <HighlightBox title="Objetivo da disciplina">
        <p>
          A disciplina parte de Python como linguagem de implementação e avança progressivamente: dos tipos primitivos
          até TADs complexos como árvores e tabelas hash. O fio condutor é sempre a análise de complexidade - saber
          escolher a estrutura certa para o problema certo.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent2 mb-3">Visão geral da disciplina</h3>
        <ConceptGrid items={revisionOverview} columns="md:grid-cols-3" />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Fluxo de aprendizado</h3>
        <FlowDiagram
          items={[
            'Python Básico (tipos, controle, funções)',
            'Strings e Listas (sequências Python)',
            'Recursividade (base para DFS, divisão)',
            'Notação Big O (critério de comparação)',
            'TAD (abstração de dados)',
            'Estruturas Lineares (listas, pilhas, filas, deque)',
            'Encadeamento e Busca (O(n) vs O(log n))',
            'Hashing e Ordenação (rumo a O(1) e O(n log n))',
            'Árvores, BST e Heap (estruturas hierárquicas)',
          ]}
        />
      </div>

      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Assuntos declarados pelo professor</h3>
        <PanelList items={examTopics} columns="" />
      </div>

      <HighlightBox title="Big O cai nas três avaliações" accent="var(--color-accent3)">
        <p>
          Recursividade, pilhas, filas, busca, ordenação e árvores se dividem entre AV1 e AV2. A{' '}
          <strong>análise de desempenho com notação Big O</strong> é o único assunto que aparece nas três listas — AV1,
          AV2 e prova final.
        </p>
      </HighlightBox>

      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Os três miniprojetos da turma</h3>
        <PanelList items={miniProjects} columns="" />
      </div>

      <HighlightBox title="Fonte do conteúdo" accent="var(--color-accent5)">
        <p>
          Todo o material desta matéria foi resumido e reorganizado a partir das aulas, listas de exercícios e
          miniprojetos do <strong>Prof. Ricardo · ESTD · BSI/IFAL · 2023.1</strong>. A bibliografia indicada por ele
          inclui <em>Problem Solving with Algorithms and Data Structures using Python</em>, de Miller e Ranum, e{' '}
          <em>Algoritmo e Estrutura de Dados I e II</em>, de A. C. Santos.
        </p>
      </HighlightBox>
    </section>
  );
}
