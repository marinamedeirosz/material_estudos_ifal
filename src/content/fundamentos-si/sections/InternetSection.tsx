import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  PanelList,
  TheoryBlock,
  ComparisonTable,
} from '../../../components/sections';
import { threeNetworks, webConcepts } from './blocks';

export default function InternetSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Internet, Intranet e Extranet"
        subtitle="Como a internet funciona, o que a distingue da web e quem acessa cada uma das três redes"
        colorClass="text-accent"
        badge="2ª Prova"
      />

      <TheoryBlock title="De onde a internet veio">
        <p>
          A internet descende da <strong>ARPANET</strong>, projeto iniciado pelo Departamento de Defesa dos Estados
          Unidos em <strong>1969</strong>. O <strong>Protocolo de Internet (IP)</strong> é o que possibilita que
          computadores encaminhem o tráfego de comunicação de uma rede para outra; o{' '}
          <strong>TCP (Protocolo de Controle de Transmissão)</strong> é o protocolo da camada de transporte que a
          maioria dos aplicativos usa junto com o IP — daí a sigla <strong>TCP/IP</strong>.
        </p>
        <p>
          O <strong>backbone</strong> é uma das conexões de longa distância e alta velocidade da internet. A{' '}
          <strong>URL</strong> é o endereço que especifica a localização de uma página. A{' '}
          <strong>ICANN</strong> é a corporação responsável por gerenciar os endereços IP e os nomes de domínio, com
          autoridade para resolver disputas por nomes.
        </p>
      </TheoryBlock>

      <HighlightBox title="A distinção que mais cai: internet x web" accent="var(--color-accent4)">
        <p>
          A <strong>internet</strong> é a <em>infraestrutura</em>: computadores, hardware de rede (roteadores, cabos de
          fibra óptica), software e os protocolos TCP/IP. A <strong>web</strong> é um <em>serviço que roda sobre ela</em>,
          formado pelo software de servidor e cliente, pelo protocolo <strong>HTTP</strong> e pelas linguagens de
          marcação.
        </p>
        <p>
          Não são sinônimos: e-mail, FTP e Telnet também são serviços da internet e não fazem parte da web. A web foi
          desenvolvida por <strong>Tim Berners-Lee, no CERN</strong>, originalmente como um sistema{' '}
          <em>interno de gerenciamento de documentos</em> — e só depois virou a principal fonte de informação, um canal
          de comércio e um centro de interação social.
        </p>
      </HighlightBox>

      <Subsection title="Tecnologias da web" accentClass="text-accent2">
        <PanelList items={webConcepts} columns="md:grid-cols-2" />
      </Subsection>

      <HighlightBox title="Como se acessa a internet" accent="var(--color-accent3)">
        <p>
          Pelas conexões via <strong>servidor LAN</strong> (usada por empresas que gerenciam uma rede local) ou via{' '}
          <strong>ISP (provedor de serviços de internet)</strong> — qualquer organização que fornece acesso às pessoas.
          As opções de enlace incluem a conexão discada (modem e linha telefônica), cabo, DSL, satélite e sem fio
          (celular e Wi-Fi). A <strong>computação em nuvem</strong> entrega software e armazenamento como serviço
          acessado pelo navegador, em <strong>nuvem pública</strong> (aberta ao público geral) ou{' '}
          <strong>privada</strong> (dentro dos limites de uma rede privada).
        </p>
      </HighlightBox>

      <Subsection title="Intranet x Extranet" accentClass="text-accent5">
        <p className="reading-measure text-text-muted text-sm leading-relaxed mb-3">
          Ambas usam os mesmos padrões e tecnologias da internet e da web. O que as separa é{' '}
          <strong>quem tem acesso</strong>.
        </p>
        <ComparisonTable rows={threeNetworks} leftLabel="Intranet" rightLabel="Extranet" criterionLabel="Critério" />
        <p className="reading-measure text-text-muted text-sm leading-relaxed mt-3">
          A <strong>intranet</strong> é a rede corporativa interna, uma alternativa de comunicação econômica e
          poderosa. A <strong>extranet</strong> conecta recursos <em>selecionados</em> dessa intranet a clientes,
          fornecedores ou outros parceiros de negócios — usuários externos, mas autorizados.
        </p>
      </Subsection>

      <HighlightBox title="Aplicações e questões da internet" accent="var(--color-accent2)">
        <p>
          As <strong>ferramentas de busca</strong> localizam informações por palavras-chave usando programas chamados{' '}
          <em>spiders</em>, que vasculham a web automaticamente. O <strong>portal web</strong> combina informações e
          links úteis e atua como ponto de entrada, podendo ser vertical (grupos de interesse específico) ou corporativo.
          Somam-se e-mail, mensagem instantânea, microblogs, conferência e telepresença, blogs e podcasts, streaming,
          e-books, jogos on-line, lojas e-tail, leilões e geolocalização com <em>geo-tagging</em>.
        </p>
        <p>
          Entre as questões: invasão de privacidade — sobretudo nas redes sociais —, o recurso{' '}
          <em>do-not-track</em>, o reconhecimento facial, a tributação das vendas on-line e os ataques e invasões.
        </p>
      </HighlightBox>

      <HighlightBox title="Fonte" accent="var(--color-accent5)">
        <p>
          Resumo do capítulo 7 de <em>Princípios de Sistemas de Informação</em>, de Stair &amp; Reynolds (tradução da
          11ª edição norte-americana), conforme os slides adotados pela Profa. Wladia Bessa em FNSI 2022.1 — BSI/IFAL.
        </p>
      </HighlightBox>
    </section>
  );
}
