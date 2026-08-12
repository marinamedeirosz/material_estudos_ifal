import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  ConceptGrid,
  PanelList,
  TheoryBlock,
  ComparisonTable,
} from '../../../components/sections';
import { cpuParts, machineCycle, memoryTypes, storageDevices, computerClasses } from './blocks';

export default function HardwareSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Hardware"
        subtitle="CPU, memória, armazenamento, dispositivos de entrada e saída e as classes de computadores"
        colorClass="text-accent"
        badge="1ª Prova · Final"
      />

      <Subsection title="As três partes da CPU" accentClass="text-accent2">
        <ConceptGrid items={cpuParts} columns="md:grid-cols-3" />
      </Subsection>

      <Subsection title="O ciclo de máquina" accentClass="text-accent3">
        <FlowDiagram items={machineCycle} />
      </Subsection>

      <TheoryBlock title="Como se mede a velocidade">
        <p>
          O <strong>tempo de ciclo da máquina</strong> é medido em <strong>nanossegundos</strong> (bilionésimos de
          segundo) e <strong>picossegundos</strong> (trilionésimos), e o desempenho também em{' '}
          <strong>MIPS</strong> (milhões de instruções por segundo). A <strong>velocidade do relógio</strong> é a série
          de pulsos eletrônicos produzida a uma taxa predeterminada, medida em <strong>MHz</strong> (milhões de ciclos
          por segundo) e <strong>GHz</strong> (bilhões).
        </p>
        <p>
          A <strong>Lei de Moore</strong> é a hipótese de que a densidade de transistores em um único chip dobra a cada
          dois anos. Ela não é uma lei física, e sim uma observação sobre o ritmo da indústria — por isso o material a
          apresenta como hipótese, não como certeza.
        </p>
      </TheoryBlock>

      <Subsection title="RAM x ROM" accentClass="text-accent4">
        <ComparisonTable rows={memoryTypes} leftLabel="RAM" rightLabel="ROM" criterionLabel="Critério" />
        <p className="reading-measure text-text-muted text-sm leading-relaxed mt-3">
          Entre a CPU e a memória principal fica ainda a <strong>memória cache</strong>: de alta velocidade, o
          processador a acessa mais rapidamente do que a memória principal. Oito bits formam um <strong>byte</strong>.
        </p>
      </Subsection>

      <HighlightBox title="Multiprocessamento e paralelismo" accent="var(--color-accent2)">
        <p>
          <strong>Multiprocessamento</strong> é a execução simultânea de duas ou mais instruções. O{' '}
          <strong>microprocessador multicore</strong> combina dois ou mais processadores independentes num único chip; o{' '}
          <strong>coprocessador</strong> executa tipos específicos de instrução; e a <strong>GPU</strong> é um
          processador especializado que assume da CPU as tarefas de gráficos 3D e de operações vetoriais massivas. Já a{' '}
          <strong>computação paralela</strong> é a execução simultânea da <em>mesma</em> tarefa em múltiplos
          processadores; o <strong>processamento maciçamente paralelo</strong> conecta centenas ou milhares deles, e a{' '}
          <strong>computação em grade</strong> coordena um conjunto de computadores para resolver problemas comuns.
        </p>
      </HighlightBox>

      <Subsection title="Armazenamento secundário" accentClass="text-accent5">
        <p className="reading-measure text-text-muted text-sm leading-relaxed mb-3">
          Comparado à memória, o armazenamento secundário é <strong>não volátil</strong>, tem{' '}
          <strong>maior capacidade</strong> e é <strong>bem mais barato por megabyte</strong>. Os dois métodos de acesso
          são o <strong>sequencial</strong> (os dados devem ser recuperados na ordem em que foram armazenados —
          equipamentos SASD) e o <strong>direto</strong> (os registros podem ser recuperados em qualquer ordem —
          equipamentos DASD).
        </p>
        <PanelList items={storageDevices} columns="md:grid-cols-2" />
      </Subsection>

      <TheoryBlock title="Entrada e saída">
        <p>
          A <strong>entrada de dados</strong> converte dados legíveis por humanos em forma legível por máquina, e a{' '}
          <strong>automação da fonte de dados</strong> captura e edita os dados no ponto em que são criados, já num
          formato que o computador aceita — é o que elimina a redigitação e os erros que vêm com ela.
        </p>
        <p>
          Dispositivos de entrada citados: reconhecimento de voz, câmeras digitais, escâneres, leitores ópticos, MICR
          (reconhecimento de caracteres com tinta magnética), tarja magnética, cartões chip e PIN, terminais de ponto de
          venda, caixas eletrônicos, caneta, telas sensíveis ao toque, leitores de código de barras e RFID.
        </p>
        <p>
          Na saída, os monitores de <strong>plasma</strong>, <strong>LCD</strong> e <strong>OLED</strong> diferem em
          tecnologia e consumo — do que gasta mais para o que gasta menos: plasma, LCD, OLED. Somam-se impressoras a
          laser e jato de tinta e os plotters, usados em trabalho de design.
        </p>
      </TheoryBlock>

      <Subsection title="Classes de sistemas de computador" accentClass="text-accent">
        <PanelList items={computerClasses} columns="" />
        <p className="reading-measure text-text-muted text-sm leading-relaxed mt-3">
          <strong>Escalabilidade</strong> é a habilidade de aumentar a capacidade de processamento de um sistema para
          que ele lide com mais usuários, mais dados ou mais transações.
        </p>
      </Subsection>

      <HighlightBox title="Informática verde" accent="var(--color-accent3)">
        <p>
          Programa relacionado à eficiência e à responsabilidade ambiental no projeto, na fabricação, na operação e no
          descarte dos produtos de TI. Suas metas são <strong>reduzir o uso de materiais perigosos</strong>,{' '}
          <strong>permitir que as empresas reduzam custos com energia</strong> e{' '}
          <strong>possibilitar o descarte seguro ou a reciclagem</strong> dos equipamentos.
        </p>
      </HighlightBox>

      <HighlightBox title="Fonte" accent="var(--color-accent5)">
        <p>
          Resumo do capítulo 3 de <em>Princípios de Sistemas de Informação</em>, de Stair &amp; Reynolds (tradução da
          11ª edição norte-americana), conforme os slides adotados pela Profa. Wladia Bessa em FNSI 2022.1 — BSI/IFAL.
          Na turma, este tema foi trabalhado sobretudo pelo <strong>seminário de hardware</strong> em equipes, que
          cobria componentes, tipos de processador, memórias e dispositivos de entrada e saída. Como o seminário exigia
          trabalho escrito, a professora disponibilizou a <strong>ABNT NBR 6023</strong> e um modelo de referências —
          para muitos alunos, a primeira vez em que se cobra formalmente a citação de fontes no curso.
        </p>
      </HighlightBox>
    </section>
  );
}
