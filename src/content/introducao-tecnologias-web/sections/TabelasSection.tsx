import HighlightBox from '../../../components/ui/HighlightBox';
import { CodePlayground } from '../../../components/ui/playground';
import { SectionHeader, Subsection, PanelList } from '../../../components/sections';
import { codeTabela } from './snippets';

const tableElements = [
  { title: '<table>', description: 'Delimita a tabela inteira.' },
  { title: '<caption>', description: 'Dá um título à tabela. Vem logo depois da abertura de table e aparece uma vez só.' },
  { title: '<thead>, <tbody>, <tfoot>', description: 'Agrupam cabeçalho, corpo e rodapé — ajudam o navegador e quem lê o código.' },
  { title: '<tr>', description: 'Table row: define uma linha da tabela.' },
  { title: '<th>', description: 'Table header: célula de cabeçalho. Recebe o atributo scope.' },
  { title: '<td>', description: 'Table data: célula de dados comum.' },
  { title: 'colspan e rowspan', description: 'Fazem uma célula ocupar várias colunas (colspan) ou várias linhas (rowspan).' },
  { title: 'scope', description: 'Em th, diz se aquele cabeçalho vale para a coluna (scope="col") ou para a linha (scope="row").' },
];

export default function TabelasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Tabelas"
        subtitle="Para dados tabulares — e só para eles"
        colorClass="text-accent"
        badge="AV2"
      />

      <HighlightBox title="A atividade da turma">
        <p>
          A primeira metade da AV2 pediu duas páginas: uma com um <strong>formulário de busca</strong> e outra com a{' '}
          <strong>tabela de resultados</strong>, seguindo o modelo da consulta de turmas do SIGAA. O enunciado veio
          acompanhado de um PDF — <em>formulario_busca_turmas.pdf</em> — com a <strong>captura da tela real do
          SIGAA</strong> que o aluno deveria reproduzir. É por isso que o exemplo abaixo tem a forma que tem: ele
          persegue um modelo visual concreto, não um layout inventado.
        </p>
      </HighlightBox>

      <HighlightBox title="De onde vem este conteúdo" accent="var(--color-accent5)">
        <p>
          Vale o mesmo aviso que a seção de flexbox faz: a apostila de HTML5 do Curso W3C indicada pelo professor{' '}
          <strong>não tem capítulo sobre tabelas</strong>. Ela trata das <em>novidades</em> do HTML5 — novos campos de
          formulário, validação, canvas, geolocation — e a tabela não é novidade do HTML5, então ficou de fora. Mesmo
          assim o assunto foi cobrado numa atividade avaliativa, e o próprio professor anexou ao enunciado as
          referências que faltavam: a página do <strong>MDN sobre o elemento table</strong> e o{' '}
          <strong>HTML Tables do W3Schools</strong>. É de lá, e do modelo do SIGAA, que sai o que você lê aqui.
        </p>
      </HighlightBox>

      <Subsection title="Os elementos de uma tabela" accentClass="text-accent2">
        <PanelList items={tableElements} />
      </Subsection>

      <Subsection title="A tabela de resultados" accentClass="text-accent3">
        <CodePlayground
          html={codeTabela}
          title="tabela.html — resultados da busca"
          challenge="Acrescente uma linha na tbody com os dados de outra turma. Repare que o th da primeira coluna usa scope=&quot;row&quot; e os do topo, scope=&quot;col&quot;."
        />
      </Subsection>

      <HighlightBox title="th com scope é acessibilidade, não capricho" accent="var(--color-accent4)">
        <p>
          Um <code>td</code> em negrito <em>parece</em> um cabeçalho, mas não é. Quem navega com leitor de tela depende
          do <code>th</code> para saber a que coluna ou linha cada dado pertence — e o <code>scope</code> é o que
          resolve a ambiguidade quando a tabela tem cabeçalho nos dois sentidos. É a diferença entre uma tabela
          navegável e uma sequência de números soltos.
        </p>
      </HighlightBox>

      <HighlightBox title="Tabela não é layout" accent="var(--color-accent2)">
        <p>
          Houve uma época em que sites inteiros eram diagramados com tabelas aninhadas. Isso acabou: dividir a página em
          colunas e posicionar blocos é <strong>responsabilidade do CSS</strong> — hoje, com flexbox e grid. Use{' '}
          <code>table</code> quando o conteúdo for realmente tabular, como notas, horários ou a listagem de turmas do
          exemplo.
        </p>
      </HighlightBox>
    </section>
  );
}
