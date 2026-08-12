import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, PanelList, ComparisonTable } from '../../../components/sections';
import TruthTable from './TruthTable';
import {
  conjunctionTable,
  disjunctionTable,
  exclusiveOrTable,
  conditionalTable,
  biconditionalTable,
  negationTable,
  connectiveSummary,
  conditionVocabulary,
} from './blocks';

export default function ConectivosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Conectivos e Tabelas-Verdade"
        subtitle="Seis conectivos, seis tabelas — decorar as colunas-resultado é o que destrava o resto da lógica"
        colorClass="text-accent4"
        badge="AV2"
      />

      <HighlightBox title="Notação usada pelo professor">
        <p>
          Nas aulas os valores lógicos aparecem como <strong>V e F</strong> (não T/F), e a negação é escrita com{' '}
          <strong>til (~)</strong> — embora a cantoneira (¬) também seja padrão na literatura. Este guia segue a
          convenção do professor.
        </p>
      </HighlightBox>

      <Subsection title="Conjunção — o conectivo &quot;e&quot;" accentClass="text-accent">
        <div className="space-y-3">
          <TruthTable {...conjunctionTable} />
          <p className="reading-measure text-text-muted text-sm leading-relaxed">
            Pense na promessa de um pai ao filho: <em>"eu te darei uma bola E te darei uma bicicleta"</em>. Qualquer
            criança entende que a promessa vale pelos dois presentes — se faltar um, a promessa foi descumprida. A
            conjunção só é verdadeira quando as duas partes são verdadeiras.
          </p>
        </div>
      </Subsection>

      <Subsection title="Disjunção — o conectivo &quot;ou&quot;" accentClass="text-accent2">
        <div className="space-y-3">
          <TruthTable {...disjunctionTable} />
          <p className="reading-measure text-text-muted text-sm leading-relaxed">
            Na mesma promessa com "ou", basta entregar um dos presentes para cumpri-la. A promessa inteira só é falsa se
            as duas partes forem descumpridas. Repare que as colunas de p e q são idênticas às da conjunção — só muda a
            coluna-resultado.
          </p>
        </div>
      </Subsection>

      <Subsection title="Disjunção exclusiva — &quot;ou … ou …&quot;" accentClass="text-accent3">
        <div className="space-y-3">
          <TruthTable {...exclusiveOrTable} />
          <p className="reading-measure text-text-muted text-sm leading-relaxed">
            A construção com dois "ou" — <em>"OU te darei uma bola, OU te darei uma bicicleta"</em> — determina que uma
            sentença é necessariamente verdadeira e a outra necessariamente falsa. São situações mutuamente
            excludentes: nunca ambas verdadeiras, nunca ambas falsas.
          </p>
        </div>
      </Subsection>

      <Subsection title="Condicional — &quot;se … então …&quot;" accentClass="text-accent5">
        <div className="space-y-3">
          <TruthTable {...conditionalTable} />
          <p className="reading-measure text-text-muted text-sm leading-relaxed">
            Pense pela via da exceção: <em>"Se nasci em Fortaleza, então sou cearense"</em> só é falsa se eu tiver
            nascido em Fortaleza <strong>e</strong> não for cearense. Em p → q, chamamos p de <strong>antecedente</strong>{' '}
            e q de <strong>consequente</strong>. As duas últimas linhas incomodam à primeira vista, mas fazem sentido:
            se o antecedente não ocorre, a promessa não foi quebrada.
          </p>
        </div>
      </Subsection>

      <Subsection title="Bicondicional — &quot;se e somente se&quot;" accentClass="text-accent">
        <div className="space-y-3">
          <TruthTable {...biconditionalTable} />
          <p className="reading-measure text-text-muted text-sm leading-relaxed">
            <em>"Eduardo fica alegre se e somente se Mariana sorri"</em> equivale à conjunção de duas condicionais:
            (p → q) ∧ (q → p). Por isso a bicondicional é verdadeira nos dois casos em que os lados coincidem — ambos
            verdadeiros ou ambos falsos.
          </p>
        </div>
      </Subsection>

      <Subsection title="Negação — a partícula &quot;não&quot;" accentClass="text-accent2">
        <div className="space-y-3">
          <TruthTable {...negationTable} />
          <p className="reading-measure text-text-muted text-sm leading-relaxed">
            Basta pôr "não" antes da sentença. Se ela já é negativa, negar de novo devolve a afirmativa. São
            equivalentes a "não A" as formas <em>"não é verdade que A"</em> e <em>"é falso que A"</em> — reconhecer
            essas variações é essencial, porque as questões costumam usá-las em vez do "não" direto.
          </p>
        </div>
      </Subsection>

      <Subsection title="Resumo dos seis conectivos" accentClass="text-accent3">
        <PanelList items={connectiveSummary} columns="" />
      </Subsection>

      <Subsection title="Condição suficiente e condição necessária" accentClass="text-accent4">
        <ComparisonTable
          rows={conditionVocabulary}
          leftLabel="Como a questão escreve"
          rightLabel="Como se traduz"
          criterionLabel="Vocabulário"
        />
      </Subsection>

      <HighlightBox title="A ponte com os diagramas de conjuntos" accent="var(--color-accent5)">
        <p>
          Representando p e q como conjuntos, cada conectivo vira uma operação já conhecida:{' '}
          <strong>a conjunção é a interseção</strong> (p ∩ q), <strong>a disjunção é a união</strong> (p ∪ q),{' '}
          <strong>a condicional é a inclusão</strong> (p ⊂ q) e <strong>a bicondicional é a igualdade</strong> (p = q).
          Quem entendeu a seção de conjuntos já tem meio caminho andado aqui.
        </p>
      </HighlightBox>
    </section>
  );
}
