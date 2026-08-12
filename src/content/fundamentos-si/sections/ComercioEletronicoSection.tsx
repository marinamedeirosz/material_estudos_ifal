import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, TheoryBlock } from '../../../components/sections';
import { ecommerceCategories, multiStageModel, ecommerceChallenges, paymentSystems } from './blocks';

export default function ComercioEletronicoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Comércio Eletrônico e Móvel"
        subtitle="Categorias, o modelo de compra em cinco estágios, estratégia de site e pagamento eletrônico"
        colorClass="text-accent"
        badge="3ª Prova · Final"
      />

      <TheoryBlock title="O que é comércio eletrônico">
        <p>
          <strong>Comércio eletrônico</strong> é realizar atividades comerciais eletronicamente por redes de
          computadores. As atividades mais fortes candidatas à conversão são aquelas{' '}
          <strong>baseadas em papel, demoradas e inconvenientes para o cliente</strong> — é onde a digitalização gera
          mais ganho.
        </p>
        <p>
          Três termos vizinhos costumam ser confundidos: o <strong>e-procurement</strong> é o uso de SI e da internet
          para <em>adquirir</em> peças e suprimentos; o <strong>m-commerce</strong> é o uso de celulares e dispositivos
          sem fio para fazer pedidos e conduzir negócios; e o <strong>e-business</strong> é mais amplo que todos —
          usa SI e internet para realizar <em>todas</em> as tarefas e funções relacionadas ao comércio.
        </p>
      </TheoryBlock>

      <Subsection title="As categorias de comércio eletrônico" accentClass="text-accent2">
        <ConceptGrid items={ecommerceCategories} columns="md:grid-cols-2" />
      </Subsection>

      <HighlightBox title="Desintermediação" accent="var(--color-accent4)">
        <p>
          É a <strong>eliminação das organizações intermediárias entre o produtor e o consumidor</strong> — o efeito
          característico do B2C. Como o cliente passa a tratar diretamente com a organização, muitos bens e serviços
          saem mais baratos on-line, o que por sua vez alimenta o crescimento contínuo dessa modalidade.
        </p>
      </HighlightBox>

      <Subsection title="O modelo de multiestágio da compra eletrônica" accentClass="text-accent3">
        <FlowDiagram items={multiStageModel} />
        <p className="reading-measure text-text-muted text-sm leading-relaxed mt-3">
          Um sistema de comércio eletrônico bem-sucedido precisa atender a <em>todos</em> os cinco estágios. Falhar no
          pós-venda derruba a experiência inteira, mesmo que a compra em si tenha sido impecável.
        </p>
      </Subsection>

      <HighlightBox title="Vantagens" accent="var(--color-accent2)">
        <p>
          <strong>Redução de custos</strong>, <strong>aceleração do fluxo de bens e informações</strong>,{' '}
          <strong>aumento na precisão</strong> e <strong>melhora do serviço ao consumidor</strong>. No B2B, soma-se a
          coordenação mais próxima entre fabricantes, fornecedores e clientes na cadeia de suprimentos.
        </p>
      </HighlightBox>

      <Subsection title="Desafios" accentClass="text-accent5">
        <PanelList items={ecommerceChallenges} columns="md:grid-cols-2" />
      </Subsection>

      <HighlightBox title="Estratégia: comunidade, conteúdo e comércio" accent="var(--color-accent3)">
        <p>
          O primeiro grande desafio é a empresa definir um modelo e uma estratégia eficazes, e o material aponta{' '}
          <strong>três componentes de um modelo de sucesso: comunidade, conteúdo e comércio</strong>. O site precisa ser{' '}
          <strong>fácil de usar</strong>, <strong>cumprir as metas da empresa</strong>, ser <strong>seguro</strong> e{' '}
          <strong>acessível de configurar e manter</strong>.
        </p>
        <p>
          Para gerar tráfego: registrar um nome de domínio, aparecer nos mecanismos de busca, usar meta tags, analisar o
          tráfego, oferecer conteúdo de qualidade rico em palavras-chave, atualizá-lo com frequência e adquirir links. Na
          manutenção, a <strong>personalização explícita</strong> captura informações que o próprio usuário fornece,
          enquanto a <strong>implícita</strong> captura dados das sessões on-line dele.
        </p>
      </HighlightBox>

      <HighlightBox title="Aplicações citadas" accent="var(--color-accent2)">
        <p>
          <strong>E-tailing</strong> (venda direta da empresa ao cliente por lojas eletrônicas),{' '}
          <strong>cybermall</strong> (site único que reúne muitos produtos e serviços), intercâmbios eletrônicos na
          fabricação — privados, operados por consórcio ou independentes —, segmentação de mercado, anúncios cobrados
          por <strong>CPM, CPC ou CPA</strong>, <strong>redirecionamento</strong> (mais de 95% dos visitantes deixam o
          site sem comprar, e anúncios personalizados tentam recapturá-los), comparação de preços, cupons, investimentos
          e corretagem, serviços bancários on-line e e-boutiques.
        </p>
      </HighlightBox>

      <Subsection title="Sistemas de pagamento eletrônico" accentClass="text-accent">
        <PanelList items={paymentSystems} columns="md:grid-cols-2" />
      </Subsection>

      <HighlightBox title="Fonte" accent="var(--color-accent5)">
        <p>
          Resumo do capítulo 8 de <em>Princípios de Sistemas de Informação</em>, de Stair &amp; Reynolds (tradução da
          11ª edição norte-americana), conforme os slides adotados pela Profa. Wladia Bessa em FNSI 2022.1 — BSI/IFAL.
        </p>
      </HighlightBox>
    </section>
  );
}
