import { ExampleBox } from '../../../components/sections';

/**
 * Os quatro exemplos resolvidos de conversão entre bases, extraídos de
 * SistemasNumericosSection para manter aquele componente dentro do limite de linhas.
 * Todos os valores foram conferidos numericamente antes de entrar no texto.
 */
export default function ConversaoExemplos() {
  return (
    <>
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
          <strong>343₁₀ = ?₈</strong> — 343÷8 = 42 resto 7; 42÷8 = 5 resto 2; 5÷8 = 0 resto 5 → <strong>527₈</strong>
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
          <strong>Hexa, grupos de 4 bits a partir do LSB:</strong> 110011100₂ tem 9 bits, e 9 não é múltiplo de 4 —
          então completa-se com zeros à esquerda até 12 bits: 110011100 → <code>000110011100</code> →{' '}
          <code>0001 | 1001 | 1100</code> → 1, 9, C → <strong>19C₁₆</strong>
        </p>
        <p>
          <strong>No sentido inverso:</strong> 63D₁₆ → 6 = 0110, 3 = 0011, D = 1101 → <strong>11000111101₂</strong>{' '}
          (descartando os zeros à esquerda).
        </p>
      </ExampleBox>

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
    </>
  );
}
