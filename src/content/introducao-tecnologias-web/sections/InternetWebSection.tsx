import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, ComparisonTable, PanelList } from '../../../components/sections';
import { internetVsWeb, webPillars, htmlHistory, renderEngines } from './blocks';

export default function InternetWebSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Internet, Web e Protocolo HTTP"
        subtitle="Duas coisas diferentes que quase todo mundo trata como sinônimo"
        colorClass="text-accent"
        badge="AV1"
      />

      <HighlightBox title="A pergunta que abre a aula">
        <p>
          <em>Internet e Web são a mesma coisa?</em> Não. A <strong>Internet</strong> é uma rede global de redes — a
          infraestrutura. A <strong>Web</strong> (World Wide Web, WWW) é uma coleção de informações acessada por meio
          dela. A Internet é a livraria; a Web é a coleção de livros daquela livraria. Em alto nível: a Internet é o
          hardware, a Web é o software.
        </p>
      </HighlightBox>

      <Subsection title="Internet x Web, lado a lado" accentClass="text-accent2">
        <ComparisonTable rows={internetVsWeb} leftLabel="Internet" rightLabel="Web (WWW)" criterionLabel="Aspecto" />
      </Subsection>

      <HighlightBox title="Onde o HTTP entra" accent="var(--color-accent3)">
        <p>
          As aplicações da Web usam o protocolo <strong>HTTP</strong>, que é uma camada sobre o <strong>TCP</strong>.
          Aplicações de Internet em geral podem usar TCP ou UDP e qualquer porta, enquanto o HTTP tradicionalmente usa
          a porta 80 (e a 443 quando cifrado com TLS). Se você abrir uma conexão de socket numa porta qualquer e enviar
          dados para outro computador, está usando a Internet <em>sem</em> usar a Web.
        </p>
      </HighlightBox>

      <Subsection title="Os três pilares da Web, segundo o W3C" accentClass="text-accent4">
        <ConceptGrid items={webPillars} columns="md:grid-cols-3" />
      </Subsection>

      <Subsection title="Hipertexto: a ideia por trás do HTML" accentClass="text-accent5">
        <p className="reading-measure text-text-muted text-sm md:text-base leading-relaxed">
          HTML é a sigla de <strong>HyperText Markup Language</strong> — Linguagem de Marcação de Hipertexto. Hipertexto
          é um conjunto de elementos, ou nós, ligados por conexões: palavras, imagens, vídeos, documentos. Esses
          elementos conectados formam uma grande rede de informação, e é justamente aí que está a diferença para um
          livro: <strong>eles não estão ligados linearmente</strong>, um assunto seguido do outro. A conexão feita num
          hipertexto é imprevista — é ela que permite organizar conhecimento e guardar informações relacionadas.
        </p>
      </Subsection>

      <Subsection title="Como o HTML virou padrão" accentClass="text-accent">
        <PanelList items={htmlHistory} />
      </Subsection>

      <HighlightBox title="Interoperabilidade significa menos custo" accent="var(--color-accent4)">
        <p>
          Desde o começo o HTML foi criado para ser independente de plataforma, navegador e meio de acesso. Você
          escreve <strong>um</strong> código e ele é lido por diversos meios, em vez de manter versões diferentes para
          cada dispositivo. Isso evitou que a Web nascesse sobre uma base proprietária, com formatos incompatíveis — e é
          o que permite que a mesma página sirva a telas de tamanhos distintos e a dispositivos de acessibilidade.
        </p>
      </HighlightBox>

      <Subsection title="Motores de renderização" accentClass="text-accent2">
        <ComparisonTable
          rows={renderEngines}
          leftLabel="Navegadores"
          rightLabel="Observação"
          criterionLabel="Motor"
        />
      </Subsection>

      <HighlightBox title="Desenvolvimento modular" accent="var(--color-accent5)">
        <p>
          Com o HTML5 e o CSS3, as duas tecnologias passaram a ser divididas em <strong>módulos</strong>: um grupo cuida
          de background, outro de bordas, outro de texto. Cada grupo lança novidades quando está pronto, sem esperar o
          padrão inteiro ser publicado. O lado bom é a evolução mais rápida; o lado ruim é que problemas de
          compatibilidade entre navegadores ficam mais frequentes.
        </p>
      </HighlightBox>
    </section>
  );
}
