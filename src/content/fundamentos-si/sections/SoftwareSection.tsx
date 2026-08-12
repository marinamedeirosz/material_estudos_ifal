import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  PanelList,
  TheoryBlock,
  ComparisonTable,
} from '../../../components/sections';
import { osActivities, softwareAcquisition, softwareTrends } from './blocks';

export default function SoftwareSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Software"
        subtitle="Software de sistemas e aplicativo, o papel do sistema operacional e as formas de adquirir software"
        colorClass="text-accent"
        badge="1ª Prova · Final"
      />

      <TheoryBlock title="As duas grandes categorias">
        <p>
          Um <strong>programa de computador</strong> é uma sequência de instruções para o computador, e a{' '}
          <strong>documentação</strong> descreve suas funções para auxiliar quem opera o sistema. Todo software cai em
          uma de duas categorias.
        </p>
        <p>
          <strong>Software de sistemas</strong> é o conjunto de programas que coordena as atividades e funções do
          hardware e de outros programas. A combinação de uma configuração de hardware com o software de sistemas forma
          a <strong>plataforma</strong> — e cada software de sistemas é projetado para uma CPU e uma classe de hardware
          específicas.
        </p>
        <p>
          <strong>Software aplicativo</strong> ajuda o usuário a resolver determinados problemas. A maioria das
          organizações gasta mais com software do que com hardware.
        </p>
      </TheoryBlock>

      <HighlightBox title="Esferas de influência" accent="var(--color-accent2)">
        <p>
          O material classifica o software aplicativo pelo escopo de problemas que ele atende:{' '}
          <strong>pessoal</strong> (serve às necessidades de um usuário individual — a chamada produtividade pessoal),{' '}
          <strong>de grupo de trabalho</strong> (duas ou mais pessoas trabalhando por uma meta comum, apoiadas por{' '}
          <em>groupware</em> ou software colaborativo) e <strong>de empreendimento</strong> (apoia a empresa inteira em
          sua interação com o ambiente).
        </p>
      </HighlightBox>

      <TheoryBlock title="O sistema operacional e seu núcleo">
        <p>
          O <strong>sistema operacional</strong> é o conjunto de programas que controla o hardware e atua como interface
          com os programas aplicativos. Seu <strong>núcleo (kernel)</strong> é o coração do SO: interliga todos os seus
          componentes e regula os outros programas.
        </p>
        <p>
          A <strong>API (interface de programa aplicativo)</strong> é o que dá{' '}
          <strong>independência do hardware</strong>: ela permite que os aplicativos usem o sistema operacional, de modo
          que o desenvolvedor construa software sem precisar entender o funcionamento interno do SO nem do hardware.
        </p>
      </TheoryBlock>

      <Subsection title="As atividades realizadas pelo sistema operacional" accentClass="text-accent3">
        <PanelList items={osActivities} columns="md:grid-cols-2" />
      </Subsection>

      <HighlightBox title="Utilitários, middleware e SOA" accent="var(--color-accent4)">
        <p>
          Além do SO, o software de sistemas inclui os <strong>programas utilitários</strong> (hardware, segurança,
          compactação de arquivos, filtragem de spam, rede e internet) e o <strong>middleware</strong> — software que
          permite a comunicação e a troca de dados entre sistemas diferentes, servindo inclusive de interface entre a
          internet e sistemas legados mais antigos. A <strong>SOA (arquitetura orientada a serviço)</strong> usa
          serviços de aplicação modulares para que usuários e sistemas interajam entre si.
        </p>
      </HighlightBox>

      <Subsection title="Proprietário x comercialmente disponível" accentClass="text-accent5">
        <p className="reading-measure text-text-muted text-sm leading-relaxed mb-3">
          São três as abordagens para obter software aplicativo: <strong>construir</strong> um software proprietário,{' '}
          <strong>comprar</strong> um programa comercialmente disponível ou <strong>combinar</strong> as duas coisas.
        </p>
        <ComparisonTable
          rows={softwareAcquisition}
          leftLabel="Proprietário"
          rightLabel="Comercialmente disponível"
          criterionLabel="Critério"
        />
      </Subsection>

      <HighlightBox title="SaaS, ASP e nuvem" accent="var(--color-accent2)">
        <p>
          O <strong>SaaS (software como serviço)</strong> permite que a empresa assine um aplicativo comercial entregue
          pela web, pagando uma taxa mensal ou por uso — o custo cai porque o fornecedor compartilha a mesma aplicação
          entre muitos clientes, o que em contrapartida levanta preocupações de segurança dos dados. O{' '}
          <strong>ASP (provedor de serviços de aplicativos)</strong> é a empresa que fornece o software, o suporte e o
          hardware onde ele roda, através de uma rede. A <strong>computação em nuvem</strong> é o uso de recursos de
          computação na internet em vez de em computadores locais.
        </p>
      </HighlightBox>

      <TheoryBlock title="Linguagens de programação">
        <p>
          São conjuntos de palavras-chave, símbolos e regras para construir afirmações pelas quais as pessoas comunicam
          instruções ao computador. O <strong>código do programa</strong> é o conjunto dessas instruções e a{' '}
          <strong>sintaxe</strong> é o conjunto de regras associadas à linguagem.
        </p>
        <p>
          O <strong>compilador</strong> converte o código-fonte escrito pelo programador em instruções na linguagem de
          máquina. As gerações vão da linguagem de máquina até as <strong>5GLs</strong>, usadas para criar inteligência
          artificial e sistemas especialistas, passando pela programação visual e pelas linguagens orientadas a objetos.
        </p>
      </TheoryBlock>

      <Subsection title="Questões e tendências do software" accentClass="text-accent">
        <PanelList items={softwareTrends} columns="md:grid-cols-2" />
      </Subsection>

      <HighlightBox title="Fonte" accent="var(--color-accent5)">
        <p>
          Resumo do capítulo 4 de <em>Princípios de Sistemas de Informação</em>, de Stair &amp; Reynolds (tradução da
          11ª edição norte-americana), conforme os slides adotados pela Profa. Wladia Bessa em FNSI 2022.1 — BSI/IFAL.
        </p>
      </HighlightBox>
    </section>
  );
}
