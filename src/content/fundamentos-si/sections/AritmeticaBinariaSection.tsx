import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, TheoryBlock, ExampleBox, ComparisonTable } from '../../../components/sections';
import { sumRules } from './blocks';

export default function AritmeticaBinariaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Soma e Subtração de Binários"
        subtitle="As quatro regras da adição, o transporte, o empréstimo e como conferir o resultado"
        colorClass="text-accent"
        badge="3ª Prova · Final"
      />

      <TheoryBlock title="A aritmética é a mesma — só o alfabeto encolhe">
        <p>
          Somar em binário funciona exatamente como somar em decimal: alinha-se pela direita, opera-se coluna a coluna e
          leva-se o excedente para a coluna seguinte. A única diferença é que, no decimal, o "vai um" acontece quando a
          soma chega a 10; no binário, acontece quando chega a <strong>2</strong> — porque só existem os algarismos 0
          e 1.
        </p>
      </TheoryBlock>

      <Subsection title="As regras da adição binária" accentClass="text-accent2">
        <ComparisonTable rows={sumRules} leftLabel="Resultado escrito" rightLabel="Transporte" criterionLabel="Operação" />
        <p className="reading-measure text-text-muted text-sm leading-relaxed mt-3">
          A regra decisiva é <strong>1 + 1 = 10₂</strong>: escreve-se 0 e leva-se 1. Quando há um transporte vindo da
          coluna anterior, aparece o caso <strong>1 + 1 + 1 = 11₂</strong>: escreve-se 1 e leva-se 1.
        </p>
      </Subsection>

      <ExampleBox title="Exemplo 1 — soma simples: 1011₂ + 110₂">
        <p>Alinhando pelo bit menos significativo e completando com zero à esquerda:</p>
        <pre
          className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto"
          aria-label="Soma de 1011 e 0110 em binário, com transporte nas três colunas à esquerda, resultado 10001."
        >
{`  1 1 1        ← transportes
    1 0 1 1     (11)
 +  0 1 1 0     ( 6)
 ──────────
  1 0 0 0 1     (17)`}
        </pre>
        <p>
          Coluna a coluna, da direita: 1+0 = 1; 1+1 = 10, escreve 0 e vai 1; 0+1+1 = 10, escreve 0 e vai 1; 1+0+1 = 10,
          escreve 0 e vai 1 — que desce como o bit mais à esquerda. Resultado: <strong>10001₂</strong>.
        </p>
        <p>
          <strong>Conferindo em decimal:</strong> 11 + 6 = 17, e 17₁₀ = 10001₂. Confere.
        </p>
      </ExampleBox>

      <ExampleBox title="Exemplo 2 — transporte em cadeia: 10110₂ + 1101₂" accent="var(--color-accent3)">
        <pre
          className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto"
          aria-label="Soma de 10110 e 01101 em binário, com transporte em cadeia nas três colunas à esquerda, resultado 100011."
        >
{`  1 1 1          ← transportes
    1 0 1 1 0     (22)
 +  0 1 1 0 1     (13)
 ────────────
  1 0 0 0 1 1     (35)`}
        </pre>
        <p>
          Da direita: 0+1 = 1; 1+0 = 1; 1+1 = 10, escreve 0 e vai 1; 0+1+1 = 10, escreve 0 e vai 1; 1+0+1 = 10, escreve
          0 e vai 1 — que desce como o bit mais à esquerda. Note que o transporte só aparece a partir da terceira
          coluna: as duas primeiras somam sem exceder 1.
        </p>
        <p>
          Resultado: <strong>100011₂</strong>. Conferindo: 22 + 13 = 35, e 35₁₀ = 100011₂.
        </p>
      </ExampleBox>

      <TheoryBlock title="Subtração: o empréstimo">
        <p>
          Na subtração, quando o bit de cima é menor que o de baixo (0 − 1), pega-se{' '}
          <strong>emprestado</strong> da coluna à esquerda. No decimal, o empréstimo vale 10; no binário, vale{' '}
          <strong>2</strong>. Assim, <strong>0 − 1 com empréstimo dá 1</strong>, e a coluna que emprestou fica devendo 1.
        </p>
        <p>As quatro combinações: 0 − 0 = 0; 1 − 0 = 1; 1 − 1 = 0; e 0 − 1 = 1 com empréstimo da coluna à esquerda.</p>
      </TheoryBlock>

      <ExampleBox title="Exemplo 3 — subtração com empréstimo: 1101₂ − 101₂" accent="var(--color-accent2)">
        <pre
          className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto"
          aria-label="Subtração de 0101 de 1101 em binário, resultado 1000."
        >
{`    1 1 0 1     (13)
 −  0 1 0 1     ( 5)
 ──────────
    1 0 0 0     ( 8)`}
        </pre>
        <p>
          Da direita: 1−1 = 0; 0−0 = 0; 1−1 = 0; 1−0 = 1. Resultado: <strong>1000₂</strong>. Conferindo: 13 − 5 = 8, e
          8₁₀ = 1000₂.
        </p>
      </ExampleBox>

      <ExampleBox title="Exemplo 4 — empréstimo em cadeia: 10000₂ − 1₂" accent="var(--color-accent4)">
        <p>
          Este é o caso que mais confunde. A coluna da direita precisa de empréstimo, mas as vizinhas são todas zero —
          então o empréstimo se propaga até achar um 1:
        </p>
        <pre
          className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto"
          aria-label="Subtração de 00001 de 10000 em binário, com empréstimo em cadeia, resultado 01111."
        >
{`    1 0 0 0 0     (16)
 −  0 0 0 0 1     ( 1)
 ────────────
    0 1 1 1 1     (15)`}
        </pre>
        <p>
          O 1 mais à esquerda é consumido e cada zero que ele atravessa vira 1. Resultado: <strong>1111₂</strong>.
          Conferindo: 16 − 1 = 15, e 15₁₀ = 1111₂.
        </p>
      </ExampleBox>

      <HighlightBox title="Sempre confira em decimal" accent="var(--color-accent3)">
        <p>
          Toda operação binária pode ser verificada em três passos: converta os dois operandos para decimal, faça a
          conta em decimal e converta o resultado de volta para binário. Se bater com o que você obteve na conta
          binária, está certo. Em prova, essa conferência custa poucos segundos e pega quase todo erro de transporte ou
          de empréstimo.
        </p>
      </HighlightBox>

      <HighlightBox title="Sobre a fonte desta seção" accent="var(--color-accent5)">
        <p>
          A professora dedicou duas aulas a "Soma e Subtração de Binários" (21/11 e 28/11 de 2022) e cobrou o assunto
          na 3ª prova, na 2ª chamada e na final. O material de apoio que ela distribuiu para este tópico específico
          está em arquivos <code>.ppt</code> e <code>.pps</code> de formato binário antigo, dos quais{' '}
          <strong>não foi possível extrair o texto</strong>. Esta seção foi montada a partir do{' '}
          <strong>tópico declarado no cronograma da disciplina</strong> e do método padrão de aritmética binária,
          coerente com a notação posicional apresentada nas notas de aula do Prof. Gustavo B. Borba (UTFPR, EL66J)
          adotadas na disciplina. Todos os exemplos foram conferidos numericamente.
        </p>
      </HighlightBox>
    </section>
  );
}
