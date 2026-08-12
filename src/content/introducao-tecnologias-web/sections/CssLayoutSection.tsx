import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, PanelList, ColoredPanelList } from '../../../components/sections';
import { codeFlexbox } from './snippets';
import { flexProperties, css3Features } from './blocks';

export default function CssLayoutSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="CSS: Flexbox e Recursos do CSS3"
        subtitle="Organizar os elementos na tela sem gambiarra"
        colorClass="text-accent"
      />

      <HighlightBox title="Flexbox foi exigido na atividade">
        <p>
          O enunciado da atividade de CSS é explícito: <strong>&quot;No CSS flexbox, usar display:flex&quot;</strong>.
          O flexbox é um modelo de layout em <strong>uma dimensão</strong> — você organiza os itens ao longo de um eixo,
          em linha ou em coluna. Para layouts em duas dimensões existe o grid, que fica fora do escopo desta
          disciplina.
        </p>
      </HighlightBox>

      <Subsection title="As propriedades do flexbox" accentClass="text-accent2">
        <PanelList items={flexProperties} />
      </Subsection>

      <HighlightBox title="O display:flex vai no pai" accent="var(--color-accent3)">
        <p>
          Este é o ponto que mais confunde no começo: você aplica <code>display: flex</code> no{' '}
          <strong>container</strong> — o elemento que envolve — e são os <strong>filhos diretos</strong> dele que viram
          itens flexíveis e passam a se comportar de forma diferente. Aplicar o display:flex no próprio elemento que
          você quer mover não produz efeito nenhum sobre ele.
        </p>
      </HighlightBox>

      <Subsection title="O formulário organizado com flexbox" accentClass="text-accent4">
        <CodeBlock code={codeFlexbox} language="css" title="style.css — layout do formulário de estágio" />
      </Subsection>

      <HighlightBox title="Os dois eixos" accent="var(--color-accent5)">
        <p>
          O <code>flex-direction</code> define qual é o <strong>eixo principal</strong>. Com{' '}
          <code>row</code> (padrão) ele é horizontal; com <code>column</code>, vertical. O{' '}
          <code>justify-content</code> sempre alinha no <strong>eixo principal</strong> e o{' '}
          <code>align-items</code> sempre alinha no <strong>eixo transversal</strong>, perpendicular a ele. Trocar os
          dois é o erro mais comum — e a razão de o item &quot;não centralizar&quot;.
        </p>
      </HighlightBox>

      <Subsection title="Outros recursos do CSS3" accentClass="text-accent">
        <ColoredPanelList items={css3Features} />
      </Subsection>

      <HighlightBox title="RGBA não é opacity" accent="var(--color-accent2)">
        <p>
          No <code>rgba(0, 0, 0, 0.5)</code> o quarto valor é o alfa e afeta <strong>somente aquela cor</strong> — dá
          para ter um fundo semitransparente com o texto por cima totalmente opaco. Já a propriedade{' '}
          <code>opacity</code> afeta o <strong>elemento inteiro e todos os seus filhos</strong>, texto incluído. Quando
          o conteúdo &quot;desbotou junto com o fundo&quot;, o problema foi ter usado opacity onde cabia rgba.
        </p>
      </HighlightBox>

      <HighlightBox title="Por que gradiente em CSS em vez de imagem" accent="var(--color-accent4)">
        <p>
          Uma imagem de fundo obriga o navegador a fazer <strong>mais uma requisição</strong> ao servidor. Um gradiente
          escrito em CSS não custa requisição nenhuma — e o ganho se multiplica por cada elemento que usaria a imagem.
          É um exemplo pequeno de uma ideia grande: menos requisições, página mais rápida.
        </p>
      </HighlightBox>
    </section>
  );
}
