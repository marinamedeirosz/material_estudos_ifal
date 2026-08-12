import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';
import { disciplineOverview, examTopics, courseActivities } from './blocks';

export default function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Fundamentos de Sistemas de Informação"
        subtitle="A primeira matéria do curso: o vocabulário e o mapa que todas as outras disciplinas assumem que você já tem"
        colorClass="text-accent"
      />

      <HighlightBox title="Por onde começar">
        <p>
          Esta é a porta de entrada do BSI. A disciplina não aprofunda nenhum tema até o fim — ela dá a{' '}
          <strong>visão panorâmica</strong> de como uma organização usa tecnologia para transformar dados em decisão.
          Se você está no primeiro período, o objetivo aqui não é dominar cada assunto, e sim entender como as peças
          se encaixam e reconhecer o vocabulário que vai reaparecer o curso inteiro.
        </p>
      </HighlightBox>

      <Subsection title="Visão geral da disciplina" accentClass="text-accent2">
        <ConceptGrid items={disciplineOverview} columns="md:grid-cols-3" />
      </Subsection>

      <Subsection title="Sequência didática da turma" accentClass="text-accent3">
        <FlowDiagram
          items={[
            'Introdução aos SI (dado, informação, sistema, CBIS)',
            'SI nas Organizações (estrutura, cultura, vantagem competitiva)',
            'Software de Sistemas e Aplicativos',
            'Hardware (seminário em equipes)',
            'Banco de Dados e Inteligência de Negócios',
            'Telecomunicações e Redes (mapa mental)',
            'Internet, Intranet e Extranet',
            'Comércio Eletrônico',
            'Conversão Numérica e Aritmética Binária',
          ]}
        />
      </Subsection>

      <Subsection title="Assuntos declarados pela professora para cada prova" accentClass="text-accent5">
        <PanelList items={examTopics} columns="" />
      </Subsection>

      <HighlightBox title="O que mais se repete nas avaliações" accent="var(--color-accent3)">
        <p>
          Cruzando as quatro listas de assuntos do mural, os temas que aparecem em mais de uma avaliação são{' '}
          <strong>Software</strong>, <strong>Hardware</strong>, <strong>Banco de Dados e Inteligência de Negócios</strong>,{' '}
          <strong>Comércio Eletrônico</strong> e <strong>Conversão Numérica com soma e subtração de binários</strong>.
          Esse é o núcleo que a prova final cobra — e onde vale concentrar a revisão.
        </p>
      </HighlightBox>

      <Subsection title="As atividades avaliativas do período" accentClass="text-accent4">
        <PanelList items={courseActivities} columns="" />
      </Subsection>

      <HighlightBox title="Onde esta matéria te leva" accent="var(--color-accent2)">
        <p>
          FUSI é pré-requisito implícito de <strong>APSI (Análise e Projeto de Sistemas de Informação)</strong> e, mais
          adiante, de <strong>SIGE (Sistemas de Informação Gerenciais)</strong>. Os tipos de sistema apresentados aqui —
          TPS, MIS, DSS e ERP — voltam nessas disciplinas com muito mais profundidade. As etapas de desenvolvimento de
          sistemas vistas no fim do capítulo 1 são o esqueleto do que PDSW detalha depois.
        </p>
      </HighlightBox>

      <HighlightBox title="Fontes deste material" accent="var(--color-accent5)">
        <p>
          Conteúdo resumido e reorganizado a partir do material da disciplina{' '}
          <strong>FNSI — Fundamentos de Sistemas de Informação, BSI/IFAL, 2022.1</strong>, da{' '}
          <strong>Profa. Wladia Bessa da Cruz</strong>. O acervo da turma reúne três origens distintas:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <strong>Livro-texto adotado:</strong> os capítulos 1 a 8 e 14 seguem os slides de{' '}
            <em>Princípios de Sistemas de Informação</em>, de <strong>Ralph M. Stair e George W. Reynolds</strong>{' '}
            (tradução da 11ª edição norte-americana), que a professora adotou como espinha dorsal da disciplina.
          </li>
          <li>
            <strong>Material de terceiros:</strong> a seção de sistemas numéricos deriva das{' '}
            <em>Notas de aula #1 — Sistemas Numéricos</em>, do{' '}
            <strong>Prof. Gustavo B. Borba (UTFPR), disciplina EL66J</strong>, material adotado na disciplina pela
            Profa. Wladia Bessa.
          </li>
          <li>
            <strong>Material autoral da professora:</strong> o conteúdo programático, o cronograma, as listas de
            exercícios de conversão e os enunciados das atividades e seminários.
          </li>
        </ul>
      </HighlightBox>
    </section>
  );
}
