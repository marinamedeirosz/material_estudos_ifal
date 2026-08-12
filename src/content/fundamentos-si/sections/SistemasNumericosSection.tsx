import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import {
  SectionHeader,
  Subsection,
  PanelList,
  StatStrip,
  TheoryBlock,
  ExampleBox,
} from '../../../components/sections';
import { numberBases, conversionMethods, numericDetails } from './blocks';

export default function SistemasNumericosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Sistemas Numéricos e Conversões"
        subtitle="Notação posicional e a conversão entre as bases decimal, binária, octal e hexadecimal"
        colorClass="text-accent"
        badge="3ª Prova · Final"
      />

      <HighlightBox title="O bloco mais cobrado da disciplina">
        <p>
          Conversão numérica aparece na <strong>3ª prova</strong>, na <strong>2ª chamada</strong> e na{' '}
          <strong>prova final</strong> — em todos os casos junto com soma e subtração de binários e com os números
          fracionários. A professora dedicou cinco aulas ao tema e ainda aplicou uma lista de exercícios. Se houver um
          assunto para treinar até automatizar, é este.
        </p>
      </HighlightBox>

      <TheoryBlock title="Notação posicional">
        <p>
          A posição de cada algarismo no número indica a sua magnitude, também chamada de <strong>peso</strong>. No
          sistema decimal, os pesos são potências de 10: 10⁰, 10¹, 10², 10³ e assim por diante. Por isso{' '}
          <strong>1328₁₀ = 1×1000 + 3×100 + 2×10 + 8×1</strong>.
        </p>
        <p>
          A mesma lógica vale para qualquer base — só muda a potência. Entender isso é o suficiente para fazer{' '}
          <em>toda</em> conversão de qualquer base para decimal.
        </p>
      </TheoryBlock>

      <Subsection title="As quatro bases da disciplina" accentClass="text-accent2">
        <StatStrip items={numberBases} />
        <p className="reading-measure text-text-muted text-sm leading-relaxed mt-3">
          No hexadecimal, as letras representam os valores acima de 9: <strong>A=10, B=11, C=12, D=13, E=14 e F=15</strong>.
          Os algarismos do sistema binário, 0 e 1, são chamados de <strong>bits</strong> (<em>binary digits</em>).
        </p>
      </Subsection>

      <Subsection title="Os caminhos de conversão" accentClass="text-accent3">
        <PanelList items={conversionMethods} columns="md:grid-cols-2" />
      </Subsection>

      <ExampleBox title="Exemplo 1 — de qualquer base para decimal (notação posicional)">
        <p>
          <strong>100111₂ = ?₁₀</strong> — pesos, da direita para a esquerda: 1, 2, 4, 8, 16, 32.
        </p>
        <p>1×32 + 0×16 + 0×8 + 1×4 + 1×2 + 1×1 = 32 + 4 + 2 + 1 = <strong>39₁₀</strong></p>
        <p>
          <strong>527₈ = ?₁₀</strong> — pesos 64, 8, 1: 5×64 + 2×8 + 7×1 = 320 + 16 + 7 = <strong>343₁₀</strong>
        </p>
        <p>
          <strong>19C₁₆ = ?₁₀</strong> — pesos 256, 16, 1, com C = 12: 1×256 + 9×16 + 12×1 = 256 + 144 + 12 ={' '}
          <strong>412₁₀</strong>
        </p>
      </ExampleBox>

      <ExampleBox title="Exemplo 2 — de decimal para qualquer base (divisões sucessivas)" accent="var(--color-accent3)">
        <p>
          Divide-se pela base até o quociente chegar a zero e monta-se a resposta com{' '}
          <strong>o último quociente seguido dos restos, lidos de baixo para cima</strong>.
        </p>
        <p>
          <strong>39₁₀ = ?₂</strong> — 39÷2 = 19 resto 1; 19÷2 = 9 resto 1; 9÷2 = 4 resto 1; 4÷2 = 2 resto 0; 2÷2 = 1
          resto 0; 1÷2 = 0 resto 1. Lendo de trás para frente: <strong>100111₂</strong>
        </p>
        <p>
          <strong>343₁₀ = ?₈</strong> — 343÷8 = 42 resto 7; 42÷8 = 5 resto 2; 5÷8 = 0 resto 5 →{' '}
          <strong>527₈</strong>
        </p>
        <p>
          <strong>412₁₀ = ?₁₆</strong> — 412÷16 = 25 resto 12 (C); 25÷16 = 1 resto 9; 1÷16 = 0 resto 1 →{' '}
          <strong>19C₁₆</strong>
        </p>
      </ExampleBox>

      <ExampleBox title="Exemplo 3 — binário ↔ octal e binário ↔ hexadecimal" accent="var(--color-accent2)">
        <p>
          Aqui a conversão é <strong>imediata</strong>, por substituição de grupos — não precisa passar pelo decimal.
        </p>
        <p>
          <strong>Octal, grupos de 3 bits a partir do LSB:</strong> 101010111₂ → <code>101 | 010 | 111</code> → 5, 2, 7
          → <strong>527₈</strong>
        </p>
        <p>
          <strong>Hexa, grupos de 4 bits a partir do LSB:</strong> 110011100₂ → <code>0001 | 1001 | 1100</code> (com
          zeros à esquerda para completar) → 1, 9, C → <strong>19C₁₆</strong>
        </p>
        <p>
          <strong>No sentido inverso:</strong> 63D₁₆ → 6 = 0110, 3 = 0011, D = 1101 → <strong>11000111101₂</strong>{' '}
          (descartando os zeros à esquerda).
        </p>
      </ExampleBox>

      <HighlightBox title="Por que o binário fica no centro" accent="var(--color-accent4)">
        <p>
          Não existe caminho direto entre octal e hexadecimal: para converter um no outro,{' '}
          <strong>passa-se pelo binário</strong>. Isso acontece porque 8 = 2³ e 16 = 2⁴ — cada algarismo octal
          corresponde exatamente a 3 bits e cada algarismo hexa a 4 bits, mas não há uma relação de grupos inteiros
          entre 8 e 16.
        </p>
        <p>
          É também por isso que octal e hexadecimal existem em computação: eles{' '}
          <strong>representam números binários de forma compacta</strong>. Escrever E6₁₆ é bem mais prático do que
          escrever 11100110₂ — e a tradução entre os dois é uma simples substituição.
        </p>
      </HighlightBox>

      <Subsection title="Caminhos práticos de conversão" accentClass="text-accent5">
        <FlowDiagram
          items={[
            'Decimal → binário: soma de pesos ou divisões sucessivas',
            'Binário → decimal: notação posicional',
            'Binário → octal: grupos de 3 bits',
            'Binário → hexa: grupos de 4 bits',
            'Octal ↔ hexa: sempre passando pelo binário',
          ]}
        />
      </Subsection>

      <ExampleBox title="Exemplo 4 — números fracionários" accent="var(--color-accent5)">
        <p>
          <strong>Binário fracionário → decimal:</strong> depois da vírgula os pesos são potências{' '}
          <em>negativas</em> de 2 — 2⁻¹ = 0,5; 2⁻² = 0,25; 2⁻³ = 0,125; 2⁻⁴ = 0,0625.
        </p>
        <p>0,101₂ = 1×0,5 + 0×0,25 + 1×0,125 = <strong>0,625₁₀</strong></p>
        <p>0,0101₂ = 0×0,5 + 1×0,25 + 0×0,125 + 1×0,0625 = <strong>0,3125₁₀</strong></p>
        <p>
          <strong>Decimal fracionário → binário:</strong> multiplicações sucessivas por 2, anotando a parte inteira de
          cada produto na ordem em que aparece. 0,625×2 = <strong>1</strong>,250 → 0,250×2 = <strong>0</strong>,500 →
          0,500×2 = <strong>1</strong>,000. Resultado: <strong>0,101₂</strong>.
        </p>
        <p>
          Mas cuidado: 0,8₁₀ gera <strong>0,11001100…₂</strong> — uma dízima que nunca fecha. Nem todo decimal
          "redondo" tem representação binária exata, e é daí que vêm os erros de arredondamento em ponto flutuante.
        </p>
        <p>
          No fracionário, o agrupamento de 3 em 3 (octal) ou de 4 em 4 (hexa) parte <strong>da vírgula para a
          direita</strong>, completando com zeros à direita quando faltar bit — o oposto da parte inteira.
        </p>
      </ExampleBox>

      <Subsection title="Detalhes que caem na prova" accentClass="text-accent">
        <PanelList items={numericDetails} columns="md:grid-cols-2" />
      </Subsection>

      <HighlightBox title="Fonte" accent="var(--color-accent5)">
        <p>
          Esta seção deriva das <em>Notas de aula #1 — Sistemas Numéricos</em>, do{' '}
          <strong>Prof. Gustavo B. Borba (UTFPR), disciplina EL66J</strong> — material de terceiros{' '}
          <strong>adotado e redistribuído na disciplina pela Profa. Wladia Bessa</strong> em FNSI 2022.1 — BSI/IFAL. Os
          exemplos foram resumidos e reescritos a partir dessas notas; a lista de exercícios de conversão aplicada à
          turma é de autoria da própria professora.
        </p>
      </HighlightBox>
    </section>
  );
}
