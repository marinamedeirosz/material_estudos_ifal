import AIKahootQuiz from '../../components/ui/AIKahootQuiz';
import AIQuizGenerator from '../../components/ui/AIQuizGenerator';
import CodeBlock from '../../components/ui/CodeBlock';
import ExamQuizSelector from '../../components/ui/ExamQuizSelector';
import HighlightBox from '../../components/ui/HighlightBox';
import MultiCodeBlock from '../../components/ui/MultiCodeBlock';
import QuizTabs from '../../components/ui/QuizTabs';
import {
  SectionHeader,
  ConceptGrid,
  PanelList,
  ComparisonTable,
  TheoryBlock,
  type ConceptItem,
  type PanelItem,
  type ComparisonRow,
} from '../../components/sections';
import { LPGM_GUIDE_CONTEXT, LPGM_TOPICS, QUIZ_DATA } from './data';

interface LPGMSectionsProps {
  activeSection: string;
}

const examLabels = {
  prova1: { label: 'AV1', description: 'Fundamentos, tipos e controle de fluxo.' },
  prova2: { label: 'AV2', description: 'Coleções, funções, escopo e strings.' },
} as const;

/* ============================ INTRO ============================ */

function IntroSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader title="Uma ideia, cinco linguagens" subtitle="Esta matéria mostra o mesmo conceito em C++, Java, Python, JavaScript e PHP — para você entender a essência, não decorar uma sintaxe" colorClass="text-accent" />
      <HighlightBox title="Como estudar aqui">
        <p>
          Em cada exemplo de código há <strong>abas</strong> para trocar de linguagem. O algoritmo é o mesmo; muda a forma de escrever. Aprender a <strong>reconhecer o conceito por baixo da sintaxe</strong> é o que torna fácil migrar para uma nova linguagem — e é a base para Programação Orientada a Objetos, mais adiante.
        </p>
      </HighlightBox>
      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Do código-fonte à execução</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Você escreve o <strong>código-fonte</strong>. Um <strong>tradutor</strong> (compilador ou interpretador) o converte para a <strong>linguagem de máquina</strong>, que o computador executa.
        </p>
        <MultiCodeBlock
          title='"Olá, mundo" nas cinco linguagens'
          code={{
            python: `print("Olá, mundo")`,
            javascript: `console.log("Olá, mundo");`,
            java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Olá, mundo");
    }
}`,
            cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Olá, mundo" << endl;
    return 0;
}`,
            php: `<?php
echo "Olá, mundo";`,
          }}
        />
      </div>
      <ConceptGrid items={introConceitos} columns="md:grid-cols-2" />
    </section>
  );
}

const introConceitos: ConceptItem[] = [
  { title: 'Código-fonte', description: 'O texto que você escreve na linguagem de programação — as instruções do programa.', accent: 'accent' },
  { title: 'Tradutor', description: 'Programa que converte o código-fonte para a linguagem de máquina: um compilador ou um interpretador.', accent: 'accent3' },
  { title: 'Linguagem de máquina', description: 'A linguagem que o processador entende de fato — o alvo da tradução.', accent: 'accent4' },
  { title: 'Expressão', description: 'Combinação de valores, operadores, variáveis e funções, avaliada segundo regras de precedência.', accent: 'accent5' },
];

/* ============================ AV1 ============================ */

function ConceitosSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Compilação e Interpretação" subtitle="Duas formas de o tradutor transformar o seu código em algo que a máquina executa" colorClass="text-accent" />
      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Compilada × Interpretada</h3>
        <ComparisonTable rows={compiladaInterpretada} leftLabel="Compilada (C++, Java*)" rightLabel="Interpretada (Python, JS, PHP)" />
        <p className="text-text-muted text-xs mt-2 reading-measure">
          * Java é um caso híbrido: compila para <em>bytecode</em>, que é depois executado por uma máquina virtual (JVM).
        </p>
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Onde cada linguagem se encaixa</h3>
        <PanelList items={linguagensClassificacao} columns="md:grid-cols-2" />
      </div>
    </section>
  );
}

const compiladaInterpretada: ComparisonRow[] = [
  { criterion: 'Quando traduz', left: 'O programa inteiro, antes de executar', right: 'Linha a linha, durante a execução' },
  { criterion: 'Resultado', left: 'Gera um artefato (executável / bytecode)', right: 'Executa direto do código-fonte' },
  { criterion: 'Velocidade', left: 'Costuma ser mais rápida na execução', right: 'Mais flexível; execução costuma ser mais lenta' },
  { criterion: 'Erros', left: 'Muitos erros aparecem na compilação', right: 'Erros aparecem ao executar a linha' },
];

const linguagensClassificacao: PanelItem[] = [
  { title: 'C++', description: 'Compilada, de tipagem estática. Gera um executável nativo. Muito usada por desempenho (jogos, sistemas).' },
  { title: 'Java', description: 'Compila para bytecode executado pela JVM ("escreva uma vez, rode em qualquer lugar"). Tipagem estática.' },
  { title: 'Python', description: 'Interpretada, tipagem dinâmica. Sintaxe enxuta; popular em ensino, dados e automação.' },
  { title: 'JavaScript', description: 'Interpretada, tipagem dinâmica. A linguagem da web no navegador (e no servidor, via Node.js).' },
  { title: 'PHP', description: 'Interpretada, tipagem dinâmica. Muito usada no back-end de sites; roda no servidor gerando páginas.' },
];

function ParadigmasSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Paradigmas de Programação" subtitle="Diferentes formas de organizar e pensar um programa" colorClass="text-accent3" />
      <TheoryBlock title="O que é um paradigma">
        <p>
          Um <strong>paradigma</strong> é um estilo de estruturar o raciocínio e o código. Uma mesma linguagem pode dar suporte a vários (é <strong>multiparadigma</strong>): Python, JavaScript, Java e C++ combinam mais de um. Conhecer os paradigmas ajuda a escolher a melhor forma de resolver cada problema.
        </p>
      </TheoryBlock>
      <ConceptGrid items={paradigmas} columns="md:grid-cols-2" />
    </section>
  );
}

const paradigmas: ConceptItem[] = [
  { title: 'Imperativo', description: 'Descreve o passo a passo: comandos que alteram o estado do programa (atribuições, laços). É a base das linguagens deste curso.', accent: 'accent' },
  { title: 'Procedural', description: 'Organiza o código em procedimentos/funções reutilizáveis. Uma evolução do imperativo.', accent: 'accent3' },
  { title: 'Orientado a objetos', description: 'Organiza em objetos que reúnem dados e comportamento. É o foco da disciplina de POO, mais adiante.', accent: 'accent4' },
  { title: 'Funcional', description: 'Trata a computação como avaliação de funções, evitando estado mutável. JavaScript e Python têm traços funcionais.', accent: 'accent5' },
];

function TiposSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Tipos de Dados e Variáveis" subtitle="Como cada linguagem guarda e nomeia valores na memória" colorClass="text-accent4" />
      <HighlightBox title="Variável">
        <p>
          Uma <strong>variável</strong> é um espaço na memória que guarda um valor de um <strong>tipo</strong>. O nome dela é o <strong>identificador</strong>, e a <strong>atribuição</strong> (operador <code>=</code>) coloca um valor nesse espaço.
        </p>
      </HighlightBox>
      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Os tipos primitivos</h3>
        <ConceptGrid items={tiposPrimitivos} columns="md:grid-cols-2" />
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Declarar variáveis</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Repare: em C++ e Java você <strong>declara o tipo</strong> (tipagem estática); em Python, JS e PHP o tipo é inferido em tempo de execução (tipagem dinâmica).
        </p>
        <MultiCodeBlock
          title="Uma variável de cada tipo"
          code={{
            python: `idade = 20          # inteiro
altura = 1.75       # real
nome = "Ana"        # texto
maior = True        # booleano`,
            javascript: `let idade = 20;        // inteiro
let altura = 1.75;     // real
let nome = "Ana";      // texto
let maior = true;      // booleano`,
            java: `int idade = 20;         // inteiro
double altura = 1.75;   // real
String nome = "Ana";    // texto
boolean maior = true;   // booleano`,
            cpp: `int idade = 20;         // inteiro
double altura = 1.75;   // real
string nome = "Ana";    // texto
bool maior = true;      // booleano`,
            php: `<?php
$idade = 20;        // inteiro
$altura = 1.75;     // real
$nome = "Ana";      // texto
$maior = true;      // booleano`,
          }}
        />
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-accent5 mb-3">Tipagem: estática × dinâmica</h3>
        <ComparisonTable rows={tipagem} leftLabel="Estática (C++, Java)" rightLabel="Dinâmica (Python, JS, PHP)" />
      </div>
    </section>
  );
}

const tiposPrimitivos: ConceptItem[] = [
  { title: 'Inteiro (int)', description: 'Números sem casas decimais: 0, 42, -7.', accent: 'accent' },
  { title: 'Real (float/double)', description: 'Números com casas decimais: 1.75, 3.14.', accent: 'accent3' },
  { title: 'Texto (string)', description: 'Sequência de caracteres, entre aspas: "Ana".', accent: 'accent4' },
  { title: 'Booleano (bool)', description: 'Valor lógico: verdadeiro ou falso (true/false).', accent: 'accent5' },
];

const tipagem: ComparisonRow[] = [
  { criterion: 'Quando o tipo é verificado', left: 'Em tempo de compilação', right: 'Em tempo de execução' },
  { criterion: 'Declaração', left: 'Você escreve o tipo (int, double…)', right: 'O tipo é inferido pela atribuição' },
  { criterion: 'Vantagem', left: 'Erros de tipo pegos cedo, mais desempenho', right: 'Código mais curto e flexível' },
];

function IOSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Entrada e Saída" subtitle="Ler dados do usuário e mostrar resultados" colorClass="text-accent2" />
      <HighlightBox title="Entrada costuma ser texto">
        <p>
          Ao ler algo digitado, a maioria das linguagens devolve <strong>texto</strong>. Para calcular com esse valor, é preciso <strong>converter</strong> (casting) para número.
        </p>
      </HighlightBox>
      <MultiCodeBlock
        title="Ler um número e mostrar o dobro"
        code={{
          python: `n = int(input("Digite um número: "))
print("O dobro é", n * 2)`,
          javascript: `const entrada = prompt("Digite um número: ");
const n = Number(entrada);
console.log("O dobro é", n * 2);`,
          java: `import java.util.Scanner;

Scanner sc = new Scanner(System.in);
System.out.print("Digite um número: ");
int n = sc.nextInt();
System.out.println("O dobro é " + (n * 2));`,
          cpp: `#include <iostream>
using namespace std;

int n;
cout << "Digite um número: ";
cin >> n;
cout << "O dobro é " << n * 2 << endl;`,
          php: `<?php
$n = (int) readline("Digite um número: ");
echo "O dobro é " . ($n * 2);`,
        }}
      />
    </section>
  );
}

function ControleSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Estruturas de Controle" subtitle="Decidir e repetir: o fluxo do programa deixa de ser uma linha reta" colorClass="text-accent5" />
      <TheoryBlock title="Blocos: chaves × indentação">
        <p>
          Um <strong>bloco</strong> é um grupo de comandos. A maioria das linguagens (C++, Java, JS, PHP) delimita blocos com <strong>chaves <code>{'{ }'}</code></strong>. O <strong>Python</strong> é a exceção: usa a <strong>indentação</strong> (o recuo) para marcar o bloco.
        </p>
      </TheoryBlock>
      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Condicional (if / else)</h3>
        <MultiCodeBlock
          title="Aprovado ou reprovado"
          code={{
            python: `if media >= 6:
    print("Aprovado")
else:
    print("Reprovado")`,
            javascript: `if (media >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}`,
            java: `if (media >= 6) {
    System.out.println("Aprovado");
} else {
    System.out.println("Reprovado");
}`,
            cpp: `if (media >= 6) {
    cout << "Aprovado" << endl;
} else {
    cout << "Reprovado" << endl;
}`,
            php: `<?php
if ($media >= 6) {
    echo "Aprovado";
} else {
    echo "Reprovado";
}`,
          }}
        />
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Repetição (for de 1 a 5)</h3>
        <MultiCodeBlock
          title="Contar de 1 até 5"
          code={{
            python: `for i in range(1, 6):
    print(i)`,
            javascript: `for (let i = 1; i <= 5; i++) {
    console.log(i);
}`,
            java: `for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}`,
            cpp: `for (int i = 1; i <= 5; i++) {
    cout << i << endl;
}`,
            php: `<?php
for ($i = 1; $i <= 5; $i++) {
    echo $i . "\\n";
}`,
          }}
        />
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Operadores</h3>
        <PanelList items={operadores} columns="md:grid-cols-3" />
      </div>
    </section>
  );
}

const operadores: PanelItem[] = [
  { title: 'Aritméticos', description: '+ soma, − subtração, * multiplicação, / divisão, % resto. (** ou pow para potência.)' },
  { title: 'Relacionais', description: '== igual, != diferente, > maior, < menor, >= e <=. Resultam em verdadeiro/falso.' },
  { title: 'Lógicos', description: 'E (and / &&), OU (or / ||), NÃO (not / !). Combinam ou negam condições.' },
];

/* ============================ AV2 ============================ */

function ColecoesSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Listas, Tuplas e Dicionários" subtitle="Guardar muitos valores numa só variável" colorClass="text-accent" />
      <ConceptGrid items={colecoes} columns="md:grid-cols-3" />
      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Lista / array</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Guarda vários valores em ordem, acessados por <strong>índice</strong> (começa em 0) e mutável.
        </p>
        <MultiCodeBlock
          title="Criar uma lista e ler o primeiro item"
          code={{
            python: `frutas = ["maçã", "uva", "pera"]
print(frutas[0])       # maçã
frutas.append("kiwi")  # adiciona no fim`,
            javascript: `let frutas = ["maçã", "uva", "pera"];
console.log(frutas[0]);   // maçã
frutas.push("kiwi");      // adiciona no fim`,
            java: `String[] frutas = {"maçã", "uva", "pera"};
System.out.println(frutas[0]);   // maçã
// arrays têm tamanho fixo; use ArrayList para crescer`,
            cpp: `#include <vector>
#include <string>
using namespace std;

vector<string> frutas = {"maçã", "uva", "pera"};
cout << frutas[0] << endl;   // maçã
frutas.push_back("kiwi");    // adiciona no fim`,
            php: `<?php
$frutas = ["maçã", "uva", "pera"];
echo $frutas[0];         // maçã
$frutas[] = "kiwi";      // adiciona no fim`,
          }}
        />
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-accent4 mb-3">Dicionário / mapa</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Guarda pares <strong>chave → valor</strong>; o acesso é pela chave (única), não por posição.
        </p>
        <MultiCodeBlock
          title="Guardar e ler pela chave"
          code={{
            python: `aluno = {"nome": "Ana", "idade": 20}
print(aluno["nome"])   # Ana`,
            javascript: `let aluno = { nome: "Ana", idade: 20 };
console.log(aluno["nome"]);   // Ana`,
            java: `import java.util.HashMap;

HashMap<String, String> aluno = new HashMap<>();
aluno.put("nome", "Ana");
System.out.println(aluno.get("nome"));   // Ana`,
            cpp: `#include <map>
#include <string>
using namespace std;

map<string, string> aluno;
aluno["nome"] = "Ana";
cout << aluno["nome"] << endl;   // Ana`,
            php: `<?php
$aluno = ["nome" => "Ana", "idade" => 20];
echo $aluno["nome"];   // Ana`,
          }}
        />
      </div>
    </section>
  );
}

const colecoes: ConceptItem[] = [
  { title: 'Lista / Array', description: 'Vários valores em ordem, por índice (começa em 0). Mutável: dá para adicionar e remover.', accent: 'accent' },
  { title: 'Tupla', description: 'Coleção imutável — não se altera depois de criada. Boa para representar registros fixos.', accent: 'accent4' },
  { title: 'Dicionário / Mapa', description: 'Pares chave→valor, acessados pela chave única. Ideal para associar dados.', accent: 'accent3' },
];

function FuncoesSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Funções e Modularização" subtitle="Agrupar instruções para reusar: entrada → processamento → retorno" colorClass="text-accent3" />
      <HighlightBox title="Por que funções">
        <p>
          Uma <strong>função</strong> agrupa passos que resolvem uma tarefa. Ela recebe <strong>parâmetros</strong> e pode <strong>retornar</strong> um valor. Os ganhos: <strong>reuso</strong>, organização (dividir para conquistar), teste e manutenção. <strong>Modularizar</strong> é separar o programa em módulos/bibliotecas importáveis.
        </p>
      </HighlightBox>
      <MultiCodeBlock
        title="Uma função que soma dois números"
        code={{
          python: `def soma(a, b):
    return a + b

print(soma(3, 4))   # 7`,
          javascript: `function soma(a, b) {
    return a + b;
}

console.log(soma(3, 4));   // 7`,
          java: `static int soma(int a, int b) {
    return a + b;
}

System.out.println(soma(3, 4));   // 7`,
          cpp: `int soma(int a, int b) {
    return a + b;
}

cout << soma(3, 4) << endl;   // 7`,
          php: `<?php
function soma($a, $b) {
    return $a + $b;
}

echo soma(3, 4);   // 7`,
        }}
      />
    </section>
  );
}

function EscopoSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Escopo e Parâmetros" subtitle="Onde uma variável vale e como os dados entram na função" colorClass="text-accent4" />
      <div>
        <h3 className="font-display font-bold text-xl text-accent mb-3">Escopo: local × global</h3>
        <ComparisonTable rows={escopo} leftLabel="Local" rightLabel="Global" />
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Passagem de parâmetros</h3>
        <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4 reading-measure">
          Ao chamar uma função, os argumentos podem ser passados <strong>por valor</strong> (a função recebe uma cópia — mudanças não afetam o original) ou <strong>por referência</strong> (a função acessa o próprio dado — mudanças afetam o original).
        </p>
        <ConceptGrid items={passagem} columns="md:grid-cols-2" />
      </div>
      <HighlightBox title="Tempo de vida" accent="var(--color-accent5)">
        <p>
          Uma variável <strong>local</strong> nasce quando a função é chamada e é "esquecida" quando a função termina. Já a <strong>global</strong> vive durante toda a execução do programa.
        </p>
      </HighlightBox>
    </section>
  );
}

const escopo: ComparisonRow[] = [
  { criterion: 'Onde é válida', left: 'Só dentro da função/bloco onde foi criada', right: 'Em todo o programa' },
  { criterion: 'Tempo de vida', left: 'Existe durante a execução da função', right: 'Existe enquanto o programa roda' },
  { criterion: 'Uso recomendado', left: 'Preferível — evita efeitos colaterais', right: 'Com moderação — pode gerar acoplamento' },
];

const passagem: ConceptItem[] = [
  { title: 'Por valor', description: 'A função recebe uma cópia do dado. Alterar o parâmetro não muda a variável original de quem chamou.', accent: 'accent' },
  { title: 'Por referência', description: 'A função recebe acesso ao dado original. Alterá-lo dentro da função reflete fora dela.', accent: 'accent3' },
];

function StringsSection() {
  return (
    <section className="animate-fade-in space-y-8">
      <SectionHeader title="Strings" subtitle="Trabalhar com texto: uma sequência de caracteres" colorClass="text-accent2" />
      <HighlightBox title="String é uma sequência">
        <p>
          Uma <strong>string</strong> é uma sequência de caracteres, indexada a partir do <strong>zero</strong>. Dá para medir o tamanho, acessar um caractere pela posição, concatenar com <code>+</code> e extrair um pedaço (fatiamento/substring).
        </p>
      </HighlightBox>
      <MultiCodeBlock
        title="Tamanho, concatenação e maiúsculas"
        code={{
          python: `nome = "Ana"
print(len(nome))          # 3
print(nome + " Silva")    # Ana Silva
print(nome.upper())       # ANA`,
          javascript: `let nome = "Ana";
console.log(nome.length);        // 3
console.log(nome + " Silva");    // Ana Silva
console.log(nome.toUpperCase()); // ANA`,
          java: `String nome = "Ana";
System.out.println(nome.length());        // 3
System.out.println(nome + " Silva");      // Ana Silva
System.out.println(nome.toUpperCase());   // ANA`,
          cpp: `#include <string>
#include <algorithm>
using namespace std;

string nome = "Ana";
cout << nome.length() << endl;      // 3
cout << nome + " Silva" << endl;    // Ana Silva
// C++ não tem "upper" pronto; usa-se transform()`,
          php: `<?php
$nome = "Ana";
echo strlen($nome);           // 3
echo $nome . " Silva";        // Ana Silva
echo strtoupper($nome);       // ANA`,
        }}
      />
      <div>
        <h3 className="font-display font-bold text-xl text-accent3 mb-3">Fatiamento (substring)</h3>
        <CodeBlock
          language="python"
          title="Em Python: nome[inicio:fim] (o fim não entra)"
          code={`palavra = "programação"
print(palavra[0:4])   # prog
print(palavra[:4])    # prog (do início)
print(palavra[4:])    # ramação (até o fim)`}
        />
      </div>
    </section>
  );
}

function QuizSection() {
  return (
    <section className="animate-fade-in">
      <QuizTabs
        normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" examLabels={examLabels} />}
        ai={(
          <div className="space-y-4">
            <HighlightBox title="Como funciona?">
              <p>A IA analisa os conteúdos selecionados do guia e gera lotes de 1, 5 ou 10 perguntas inéditas com 4 alternativas, resposta correta e explicação detalhada.</p>
            </HighlightBox>
            <AIQuizGenerator guideContext={LPGM_GUIDE_CONTEXT} topics={LPGM_TOPICS} />
          </div>
        )}
        kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" examLabels={examLabels} />}
        aiKahoot={<AIKahootQuiz guideContext={LPGM_GUIDE_CONTEXT} topics={LPGM_TOPICS} />}
      />
    </section>
  );
}

export default function LPGMSections({ activeSection }: LPGMSectionsProps) {
  switch (activeSection) {
    case 'intro':
      return <IntroSection />;
    case 'conceitos':
      return <ConceitosSection />;
    case 'paradigmas':
      return <ParadigmasSection />;
    case 'tipos':
      return <TiposSection />;
    case 'io':
      return <IOSection />;
    case 'controle':
      return <ControleSection />;
    case 'colecoes':
      return <ColecoesSection />;
    case 'funcoes':
      return <FuncoesSection />;
    case 'escopo':
      return <EscopoSection />;
    case 'strings':
      return <StringsSection />;
    case 'quiz':
      return <QuizSection />;
    default:
      return <IntroSection />;
  }
}
