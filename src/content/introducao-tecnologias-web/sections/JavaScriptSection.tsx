import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { CodePlayground } from '../../../components/ui/playground';
import { SectionHeader, Subsection, ConceptGrid, ComparisonTable, PanelList } from '../../../components/sections';
import { codeJsFundamentos, codeJsDom, htmlJsDom, scriptJsDom } from './snippets';
import { jsBasics, domMethods, ioFunctions } from './blocks';

export default function JavaScriptSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="JavaScript e o DOM"
        subtitle="Client-side script: a camada de comportamento da página"
        colorClass="text-accent"
        badge="AV2"
      />

      <HighlightBox title="O terceiro pilar do client-side">
        <p>
          Se o HTML é a estrutura e o CSS é a apresentação, o JavaScript é o <strong>comportamento</strong>. Ele roda no
          navegador — por isso <em>client-side script</em>, como aparece na ementa — e não exige instalar nada para
          começar: o próprio navegador executa. O código pode ficar dentro da tag <code>script</code> ou num arquivo{' '}
          <code>.js</code> externo, e o console do navegador mostra os erros e permite testar comandos.
        </p>
      </HighlightBox>

      <Subsection title="Os fundamentos da linguagem" accentClass="text-accent2">
        <ConceptGrid items={jsBasics} />
      </Subsection>

      <Subsection title="Um programa completo" accentClass="text-accent3">
        <CodePlayground
          js={codeJsFundamentos}
          editable={['js']}
          hidePreview
          title="fundamentos: variáveis, condicional, laço e função"
          challenge="Acrescente uma nota ao array e execute: a média muda. Este exemplo é lógica pura, então a saída aparece no console — sem página para mostrar."
        />
      </Subsection>

      <Subsection title="Entrada e saída no navegador" accentClass="text-accent4">
        <ComparisonTable rows={ioFunctions} leftLabel="O que faz" rightLabel="Cuidado" criterionLabel="Função" />
      </Subsection>

      <HighlightBox title="A armadilha do prompt" accent="var(--color-accent2)">
        <p>
          O <code>prompt</code> devolve <strong>sempre</strong> uma string, mesmo quando a pessoa digita um número.
          Então <code>&quot;25&quot; + 1</code> não dá 26: o operador + concatena e o resultado é{' '}
          <code>&quot;251&quot;</code>. Converta antes com <code>Number(...)</code> ou <code>parseInt(...)</code> e a
          soma acontece de verdade. Esse é o bug número um de quem está começando.
        </p>
      </HighlightBox>

      <HighlightBox title="=== ou ==?" accent="var(--color-accent5)">
        <p>
          O <code>===</code> compara <strong>valor e tipo</strong>; o <code>==</code> converte o tipo antes de comparar,
          o que faz <code>&quot;1&quot; == 1</code> ser verdadeiro. Como essa conversão automática produz resultados
          surpreendentes, a recomendação é usar sempre o <code>===</code>.
        </p>
      </HighlightBox>

      <Subsection title="O DOM: a página vista como objetos" accentClass="text-accent">
        <p className="reading-measure text-text-muted text-sm md:text-base leading-relaxed mb-4">
          Quando o navegador carrega uma página, ele constrói uma coleção de objetos que representam os elementos HTML —
          o <strong>DOM</strong> (Document Object Model). Cada elemento do código vira um objeto, com propriedades em
          comum e algumas específicas. É por meio do DOM que o JavaScript <strong>lê e altera</strong> a página já
          carregada, sem recarregar nada.
        </p>
        <PanelList items={domMethods} />
      </Subsection>

      <Subsection title="Alterando a página pelo DOM" accentClass="text-accent3">
        <CodePlayground
          html={htmlJsDom}
          js={scriptJsDom}
          editable={['html', 'js']}
          title="DOM: buscar o elemento, ligar o evento, trocar o conteúdo"
          challenge="Execute e clique no botão do preview: o texto muda. Agora troque a mensagem do innerHTML, ou o id do parágrafo — se os ids não baterem, o console mostra o erro."
        />
      </Subsection>

      <HighlightBox title="Num arquivo só" accent="var(--color-accent5)">
        <p>
          No playground acima o markup e o script aparecem em abas separadas, mas no arquivo que você entrega eles
          convivem no mesmo documento — o <code>script</code> vem depois do HTML que ele manipula, senão{' '}
          <code>getElementById</code> procura um elemento que o navegador ainda não criou:
        </p>
      </HighlightBox>

      <CodeBlock code={codeJsDom} language="html" title="pagina.html — o mesmo exemplo num arquivo só" />

      <HighlightBox title="Detecção de recursos" accent="var(--color-accent4)">
        <p>
          Nem todo navegador suporta todo recurso. A técnica de detecção consiste em verificar, pelo DOM, se uma
          propriedade ou método existe antes de usá-lo: checar se a propriedade está no objeto{' '}
          <code>window</code> ou <code>navigator</code>, criar um elemento e conferir se ele tem determinada
          propriedade, ou definir um atributo e ver se o valor foi aceito — é assim que se descobre, por exemplo, quais{' '}
          <code>type</code> de input o navegador reconhece.
        </p>
      </HighlightBox>

      <HighlightBox title="De INTW para PGWB" accent="var(--color-accent3)">
        <p>
          O JavaScript desta disciplina é o começo: variáveis, condicionais, laços, funções, arrays e DOM. Em{' '}
          <strong>PGWB (Programação Web, 5º período)</strong> ele reaparece dentro de aplicações completas, com
          requisições ao servidor e frameworks. A base é a mesma — e ela se assenta aqui.
        </p>
      </HighlightBox>
    </section>
  );
}
