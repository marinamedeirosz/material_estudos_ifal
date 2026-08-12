import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, ComparisonTable, PanelList } from '../../../components/sections';
import { codeEstruturaBasica } from './snippets';
import { documentParts, inlineVsBlock, contentCategories } from './blocks';

export default function HtmlEstruturaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="HTML5: Estrutura do Documento"
        subtitle="O esqueleto que toda página tem, e as regras de quem pode conter quem"
        colorClass="text-accent"
      />

      <Subsection title="O documento mínimo" accentClass="text-accent2">
        <CodeBlock code={codeEstruturaBasica} language="html" title="estrutura básica de um documento HTML5" />
      </Subsection>

      <HighlightBox title="O que mudou no HTML5">
        <p>
          A estrutura básica continua a mesma das versões anteriores — a exceção está na escrita do{' '}
          <strong>Doctype</strong>. Antes era preciso referenciar o DTD diretamente; no HTML5 basta{' '}
          <code>&lt;!DOCTYPE html&gt;</code> e a escolha do DTD passa a ser responsabilidade do navegador.
        </p>
      </HighlightBox>

      <Subsection title="Cada parte do documento" accentClass="text-accent3">
        <ConceptGrid items={documentParts} />
      </Subsection>

      <HighlightBox title="Por que o charset importa" accent="var(--color-accent4)">
        <p>
          A Web é acessada por pessoas do mundo inteiro. A tabela <strong>Unicode</strong> suporta cerca de um milhão de
          caracteres e fornece um número único para cada um, não importa a plataforma, o programa ou a língua. Declarar{' '}
          <code>&lt;meta charset=&quot;utf-8&quot;&gt;</code> é o que garante que os acentos do português apareçam
          corretamente aqui, na China ou em qualquer outro lugar.
        </p>
      </HighlightBox>

      <Subsection title="Elementos de linha e de bloco" accentClass="text-accent5">
        <ComparisonTable
          rows={inlineVsBlock}
          leftLabel="Elementos de linha"
          rightLabel="Elementos de bloco"
          criterionLabel="Regra"
        />
      </Subsection>

      <HighlightBox title="A pegadinha clássica" accent="var(--color-accent2)">
        <p>
          Um <strong>parágrafo não pode conter um div</strong>, mas um div pode conter um parágrafo. Se você escrever{' '}
          <code>&lt;p&gt;Texto &lt;div&gt;bloco&lt;/div&gt;&lt;/p&gt;</code>, o navegador fecha o parágrafo sozinho
          antes do div — e o resultado na tela não é o que você esperava. Elementos de linha, por sua vez,{' '}
          <strong>nunca</strong> podem conter elementos de bloco.
        </p>
      </HighlightBox>

      <Subsection title="Modelos de conteúdo (categorias)" accentClass="text-accent">
        <PanelList items={contentCategories} />
      </Subsection>
    </section>
  );
}
