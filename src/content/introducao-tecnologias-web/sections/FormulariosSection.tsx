import HighlightBox from '../../../components/ui/HighlightBox';
import { CodePlayground } from '../../../components/ui/playground';
import { SectionHeader, Subsection, PanelList, ColoredPanelList } from '../../../components/sections';
import { codeFormulario } from './snippets';
import { newInputTypes, validationAttributes } from './blocks';

const formElements = [
  { title: '<form>', description: 'Envolve os campos. O atributo action diz para onde os dados vão e method define GET ou POST.' },
  { title: '<input>', description: 'O campo genérico. Quem determina o comportamento é o atributo type.' },
  { title: '<label for="id">', description: 'Associa o rótulo ao campo pelo id. Aumenta a área clicável e permite ao leitor de tela anunciar o rótulo certo.' },
  { title: '<select> e <option>', description: 'Lista de seleção. Uma option com value vazio serve de instrução ("Selecione...").' },
  { title: '<textarea>', description: 'Campo de texto de várias linhas. No HTML5 passou a aceitar maxlength.' },
  { title: 'radio e checkbox', description: 'Radios com o mesmo name formam um grupo e só um é escolhido; checkboxes permitem marcar várias opções.' },
  { title: '<fieldset> e <legend>', description: 'Agrupam campos relacionados e dão um título ao grupo.' },
  { title: '<button type="submit">', description: 'Envia o formulário. É a ação que dispara a validação do navegador.' },
];

export default function FormulariosSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Formulários e Validação"
        subtitle="O HTML5 assumiu boa parte do trabalho que antes era só de JavaScript"
        colorClass="text-accent"
        badge="AV2"
      />

      <HighlightBox title="A atividade de cadastro de estágio">
        <p>
          A segunda metade da AV2 foi construir o formulário <strong>Inscrição no Estágio</strong> em dois arquivos —{' '}
          <code>form.html</code> e <code>style.css</code> — com validação dos campos <code>input</code> e{' '}
          <code>select</code> feita no próprio HTML. É esse formulário que serve de exemplo aqui e na seção de CSS.
        </p>
      </HighlightBox>

      <Subsection title="Os elementos de um formulário" accentClass="text-accent2">
        <PanelList items={formElements} />
      </Subsection>

      <Subsection title="O formulário de inscrição" accentClass="text-accent3">
        <CodePlayground
          html={codeFormulario}
          title="form.html — inscrição no estágio"
          challenge="Troque o type do campo email para text e veja a validação do navegador desaparecer. Depois tire o required do nome e compare."
        />
      </Subsection>

      <HighlightBox title="O label é o detalhe que mais se esquece" accent="var(--color-accent2)">
        <p>
          O <code>for</code> do label precisa apontar para o <code>id</code> do campo — não para o <code>name</code>.
          Feita a associação, clicar no rótulo foca o campo (o que ajuda muito no celular) e o leitor de tela anuncia
          &quot;Nome, caixa de edição&quot; em vez de só &quot;caixa de edição&quot;. Um <code>placeholder</code>{' '}
          <strong>não substitui</strong> o label: ele desaparece assim que a pessoa começa a digitar.
        </p>
      </HighlightBox>

      <Subsection title="Novos tipos de campo do HTML5" accentClass="text-accent4">
        <PanelList items={newInputTypes} />
      </Subsection>

      <HighlightBox title="Por que tel não valida nada" accent="var(--color-accent5)">
        <p>
          O <code>type=&quot;tel&quot;</code> não tem máscara nem validação — e isso é <em>proposital</em>: não existe no
          mundo um padrão bem definido para números de telefone. O que ele faz é sinalizar a natureza do campo, o que
          permite ao celular abrir o teclado numérico e ao agente de usuário integrar com a agenda de contatos. Se você
          precisa restringir o formato, o caminho é o <code>pattern</code>.
        </p>
      </HighlightBox>

      <Subsection title="Validação sem JavaScript" accentClass="text-accent">
        <ColoredPanelList items={validationAttributes} />
      </Subsection>

      <HighlightBox title="Quando a validação pronta não basta" accent="var(--color-accent3)">
        <p>
          Para regras próprias, o HTML5 oferece dois ganchos. O evento <code>oninput</code> dispara a cada modificação
          do valor — diferente de <code>onchange</code>, que só dispara ao final da edição, e de{' '}
          <code>onkeyup</code>, porque o oninput captura qualquer alteração, feita por teclado, mouse ou outra
          interface. E o método <code>setCustomValidity</code> recebe uma string: <strong>vazia</strong> marca o campo
          como válido, <strong>qualquer outra</strong> o marca como inválido e vira a mensagem exibida.
        </p>
      </HighlightBox>
    </section>
  );
}
