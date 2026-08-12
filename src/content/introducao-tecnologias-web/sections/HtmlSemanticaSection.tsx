import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList } from '../../../components/sections';
import { codeDuasPaginas, codeListasLinks } from './snippets';
import { semanticTags, modifiedElements } from './blocks';

export default function HtmlSemanticaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Semântica e Formatação de Texto"
        subtitle="Marcar o que a informação é, não como ela deve parecer"
        colorClass="text-accent"
        badge="AV1"
      />

      <HighlightBox title="Para que serve a semântica">
        <p>
          Quando lemos um livro, distinguimos um título de um parágrafo pelo tamanho e pelo peso da letra. Robôs de
          busca e leitores de tela não têm essa pista visual. A função do HTML é justamente{' '}
          <strong>indicar que tipo de informação a página exibe</strong>, para que ela possa ser interpretada por
          diferentes dispositivos. Antes do HTML5 não havia padrão para marcar rodapé, cabeçalho, sidebar ou menu — a
          diferença era só visual.
        </p>
      </HighlightBox>

      <Subsection title="As tags semânticas do HTML5" accentClass="text-accent2">
        <ConceptGrid items={semanticTags} />
      </Subsection>

      <Subsection title="Exemplo: a página da atividade AV1" accentClass="text-accent3">
        <CodeBlock code={codeDuasPaginas} language="html" title="pagina.html — Internet e Web com tags semânticas" />
      </Subsection>

      <HighlightBox title="Sobre este exemplo" accent="var(--color-accent4)">
        <p>
          A atividade avaliativa presencial pedia <strong>duas páginas HTML com links entre elas</strong>, contendo
          texto sobre Internet e Web, formatado com h1, h2, h3, strong, em, img, a e p, mais as tags semânticas{' '}
          <code>article</code> e <code>section</code> e as listas ordenadas e não ordenadas. O exemplo acima é a
          reescrita do arquivo que o professor distribuiu na Aula 1 — o original ainda não usava as tags semânticas, que
          passaram a ser exigidas na atividade seguinte.
        </p>
      </HighlightBox>

      <Subsection title="Texto, listas, imagens e links" accentClass="text-accent5">
        <CodeBlock code={codeListasLinks} language="html" title="formatação de texto e listas" />
      </Subsection>

      <HighlightBox title="strong e em, não b e i" accent="var(--color-accent3)">
        <p>
          <code>strong</code> indica <strong>importância forte</strong> e <code>em</code> indica{' '}
          <strong>ênfase</strong>: os dois carregam significado e são anunciados por leitores de tela. Já{' '}
          <code>b</code> e <code>i</code> passaram, no HTML5, a ter o mesmo nível semântico de um <code>span</code> —
          continuam produzindo negrito e itálico, mas não comunicam nada. Quando o que importa é o significado, use o
          par semântico.
        </p>
      </HighlightBox>

      <HighlightBox title="O atributo alt não é opcional" accent="var(--color-accent2)">
        <p>
          Toda imagem que carrega informação precisa de um <code>alt</code> que a descreva. É o que permite a quem usa
          leitor de tela saber o que está ali — e é o texto que aparece quando a imagem não carrega. Deixar o alt de
          fora é o erro de acessibilidade mais comum e um dos mais fáceis de evitar.
        </p>
        <p className="mt-3">
          Mas escrever <em>qualquer</em> alt não resolve. A pergunta certa é:{' '}
          <strong>se a imagem sumisse, que texto ocuparia o lugar dela sem perda de informação?</strong>
        </p>
        <ul className="mt-3 space-y-2">
          <li>
            <code>alt=&quot;imagem&quot;</code> ou <code>alt=&quot;foto1.jpg&quot;</code> — inútil. Anuncia que existe
            uma imagem, que é justamente o que o leitor de tela já sabe, e não diz nada sobre o conteúdo.
          </li>
          <li>
            <code>alt=&quot;Pessoa usando leitor de tela para navegar num site&quot;</code> — útil. Descreve o que a
            imagem mostra, na medida em que isso importa para o texto ao redor.
          </li>
          <li>
            <code>alt=&quot;&quot;</code> (vazio, mas presente) — correto para imagem <strong>puramente
            decorativa</strong>. Diz ao leitor de tela para pular aquilo, em vez de fazê-lo ler um nome de arquivo.
            Omitir o atributo não é a mesma coisa: sem alt, alguns leitores anunciam o endereço do arquivo.
          </li>
        </ul>
        <p className="mt-3">
          Não é tema lateral desta disciplina: a atividade presencial de HTML pedia a formatação de um{' '}
          <strong>texto sobre acessibilidade digital</strong>, com a imagem que o professor anexou ao enunciado. O
          assunto do exercício era o próprio motivo pelo qual o alt existe.
        </p>
      </HighlightBox>

      <Subsection title="Elementos modificados e descontinuados" accentClass="text-accent">
        <PanelList items={modifiedElements} columns="" />
      </Subsection>
    </section>
  );
}
