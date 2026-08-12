import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, PanelList, StatStrip, TheoryBlock } from '../../../components/sections';
import { channelTypes, networkScopes, networkHardware, processingAlternatives } from './blocks';

export default function RedesSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Telecomunicações e Redes"
        subtitle="Meios, canais, alcances e o hardware que conecta os sistemas"
        colorClass="text-accent"
      />

      <HighlightBox title="Este tema não caiu em prova escrita">
        <p>
          Diferente dos demais, Telecomunicações e Redes foi avaliado por{' '}
          <strong>atividade em dupla e mapa mental</strong> (3,0 pontos), não por prova. Isso não o torna dispensável:
          o vocabulário de rede aparece no capítulo de internet, que caiu na 2ª prova, e é base para a disciplina de
          Fundamentos de Redes de Computadores mais adiante no curso.
        </p>
      </HighlightBox>

      <TheoryBlock title="Os conceitos que abrem o capítulo">
        <p>
          <strong>Telecomunicações</strong> é a transmissão eletrônica de sinais para comunicação. O{' '}
          <strong>meio de telecomunicações</strong> é qualquer substância material que carrega esse sinal entre o
          dispositivo emissor e o receptor. O <strong>protocolo de rede</strong> é o conjunto de regras, algoritmos,
          mensagens e mecanismos que permite que softwares e hardwares conectados se comuniquem de forma eficaz.
        </p>
        <p>
          Na comunicação <strong>síncrona</strong>, o receptor recebe a mensagem instantaneamente; na{' '}
          <strong>assíncrona</strong>, recebe após algum atraso — a diferença entre uma ligação e um e-mail.
        </p>
      </TheoryBlock>

      <Subsection title="Tipos de canal" accentClass="text-accent2">
        <PanelList items={channelTypes} columns="md:grid-cols-3" />
        <p className="reading-measure text-text-muted text-sm leading-relaxed mt-3">
          A <strong>largura de banda</strong> do canal é a taxa na qual os dados são trocados, medida em bits por
          segundo. Quanto à forma de estabelecer o caminho, a rede de{' '}
          <strong>comutação de circuitos</strong> estabelece um circuito entre emissor e receptor antes de qualquer
          comunicação, enquanto a de <strong>comutação de pacotes</strong> não cria caminho fixo — é como a internet
          funciona.
        </p>
      </Subsection>

      <HighlightBox title="Meios guiados e sem fio" accent="var(--color-accent4)">
        <p>
          <strong>Guiados:</strong> o <strong>par trançado</strong> (categorias 2, 3, 5, 5E e 6), o{' '}
          <strong>cabo coaxial</strong> (transmissão mais limpa, com menos ruído que o par trançado) e a{' '}
          <strong>fibra óptica</strong> (transmite os sinais com feixes de luz).
        </p>
        <p>
          <strong>Sem fio, por alcance:</strong> curta distância com NFC, Bluetooth, banda ultralarga (UWB),
          infravermelho e Zigbee (baixo custo e pouca energia, usado em segurança e climatização); médio alcance com{' '}
          <strong>Wi-Fi</strong> (cerca de 90 m ao ar livre e 30 m dentro de um edifício); e longo alcance com
          micro-ondas (300 MHz a 300 GHz), satélites (geoestacionário, LEO e VSAT), malha sem fio, 3G, 4G (5 a 40 Mbps),
          LTE e WiMAX.
        </p>
      </HighlightBox>

      <Subsection title="Tipos de rede por área de cobertura" accentClass="text-accent3">
        <StatStrip items={networkScopes} />
      </Subsection>

      <Subsection title="Alternativas de processamento" accentClass="text-accent5">
        <PanelList items={processingAlternatives} columns="md:grid-cols-3" />
        <p className="reading-measure text-text-muted text-sm leading-relaxed mt-3">
          Na <strong>arquitetura cliente/servidor</strong>, múltiplas plataformas são dedicadas a funções especiais: o{' '}
          <strong>cliente</strong> é qualquer computador que envia mensagens requisitando serviços, e o{' '}
          <strong>servidor de banco de dados</strong> envia apenas os dados que satisfazem a consulta — não o arquivo
          inteiro, o que economiza banda.
        </p>
      </Subsection>

      <Subsection title="Hardware de telecomunicações" accentClass="text-accent">
        <PanelList items={networkHardware} columns="md:grid-cols-2" />
      </Subsection>

      <HighlightBox title="Protegendo a transmissão" accent="var(--color-accent2)">
        <p>
          A <strong>criptografia</strong> converte a mensagem original numa forma que só o receptor pretendido
          entende, usando uma <strong>chave de criptografia</strong> aplicada por um algoritmo. Nas redes sem fio, o{' '}
          <strong>WEP</strong> (chave de 64 bits, depois ampliada para 128) foi superado pelo <strong>WPA</strong>, que
          oferece proteção significativamente melhor. <strong>War driving</strong> é a prática de circular com um laptop
          e uma antena procurando pontos de acesso sem fio desprotegidos — o risco concreto que a atividade da turma
          pedia para discutir.
        </p>
      </HighlightBox>

      <HighlightBox title="Aplicações de rede nas organizações" accent="var(--color-accent3)">
        <p>
          <strong>EDI (intercâmbio eletrônico de dados)</strong> conecta os computadores de clientes, fabricantes e
          fornecedores, eliminando documentos em papel e reduzindo erros dispendiosos. A{' '}
          <strong>transferência eletrônica de fundos</strong> move dinheiro entre contas sem papel-moeda. Somam-se a{' '}
          <strong>telecomutação</strong> (trabalho remoto, que exige alta automotivação e não serve a funções que
          demandam muita interação presencial), a videoconferência, os call centers, os{' '}
          <strong>códigos QR</strong> e as aplicações de <strong>GPS</strong>.
        </p>
      </HighlightBox>

      <HighlightBox title="Fonte" accent="var(--color-accent5)">
        <p>
          Resumo do capítulo 6 de <em>Princípios de Sistemas de Informação</em>, de Stair &amp; Reynolds (tradução da
          11ª edição norte-americana), conforme os slides adotados pela Profa. Wladia Bessa em FNSI 2022.1 — BSI/IFAL,
          e do enunciado da atividade de Telecomunicações e Redes proposta por ela à turma.
        </p>
      </HighlightBox>
    </section>
  );
}
