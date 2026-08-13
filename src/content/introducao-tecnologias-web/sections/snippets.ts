// Trechos de código das seções. Todos os exemplos foram validados antes de publicados:
// o HTML pelo parser do navegador, o CSS pelo CSSOM e o JavaScript executado no Node.

export const codeEstruturaBasica = `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <title>Minha primeira página</title>
  <link rel="stylesheet" href="estilo.css">
</head>
<body>
  <h1>Olá, IFAL!</h1>
</body>
</html>`;

/**
 * Reescrita do exemplo "Internet x Web" que o professor distribuiu na Aula 1
 * (arquivo www.zip). O original não usava tags semânticas — aqui elas entram,
 * porque a atividade avaliativa seguinte passou a exigi-las.
 */
export const codeDuasPaginas = `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <title>Internet e Web</title>
</head>
<body>
  <header>
    <h1>Internet e Web são a mesma coisa?</h1>
  </header>

  <article>
    <section>
      <h2>A Internet</h2>
      <p>
        A Internet é uma rede global de redes. Ela é a
        <strong>infraestrutura</strong> sobre a qual tudo o mais funciona.
      </p>
    </section>

    <section>
      <h2>A Web</h2>
      <p>
        A Web é uma coleção de informações acessada <em>por meio</em> da
        Internet. Se a Internet é a livraria, a Web é a coleção de livros.
      </p>
    </section>
  </article>

  <nav>
    <a href="p2.html">Ir para a página 2</a>
  </nav>
</body>
</html>`;

export const codeListasLinks = `<h2>O que estudamos na disciplina</h2>

<!-- Lista não ordenada: a ordem dos itens não importa -->
<ul>
  <li>Tecnologias da Informação e Comunicação</li>
  <li>Internet e protocolo HTTP</li>
  <li>Documentos HTML</li>
</ul>

<!-- Lista ordenada: a ordem é parte da informação -->
<ol>
  <li>Escrever a estrutura em HTML</li>
  <li>Aplicar a apresentação com CSS</li>
  <li>Adicionar comportamento com JavaScript</li>
</ol>

<!-- O alt descreve a imagem para quem usa leitor de tela -->
<img src="acessibilidade.jpg" alt="Três pessoas usando tablet, computador e notebook">

<a href="https://www.ifal.edu.br">Site do IFAL</a>`;

/** Estrutura da tabela pedida na atividade "HTML - Formulários e Tabelas". */
export const codeTabela = `<table>
  <caption>Turmas encontradas</caption>
  <thead>
    <tr>
      <th scope="col">Ano/Período</th>
      <th scope="col">Docente</th>
      <th scope="col">Horário</th>
      <th scope="col">Mat./Cap.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">2022.1</th>
      <td>Augusto Cesar Melo de Oliveira</td>
      <td>6M56</td>
      <td>27/50</td>
    </tr>
    <tr>
      <th scope="row">2022.1</th>
      <td>Claudiana Moura dos Santos</td>
      <td>5M5</td>
      <td>27/50</td>
    </tr>
  </tbody>
</table>`;

/** Formulário de inscrição no estágio, no modelo da figura da atividade AV2. */
export const codeFormulario = `<form action="/inscricao" method="post">
  <fieldset>
    <legend>Inscrição no Estágio</legend>

    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome"
           placeholder="Nome completo" required autofocus>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email"
           placeholder="texto@gmail.com" required>

    <label for="telefone">Telefone:</label>
    <input type="tel" id="telefone" name="telefone"
           placeholder="82901234567" pattern="[0-9]{10,11}">

    <label for="area">Área de Interesse:</label>
    <select id="area" name="area" required>
      <option value="">Selecione...</option>
      <option value="web">Web Developer</option>
      <option value="mobile">Mobile</option>
      <option value="dados">Dados</option>
    </select>

    <!-- Mesmo name = um único radio escolhido no grupo -->
    <p>Sexo:</p>
    <input type="radio" id="m" name="sexo" value="m">
    <label for="m">Masculino</label>
    <input type="radio" id="f" name="sexo" value="f">
    <label for="f">Feminino</label>

    <!-- Checkbox permite marcar várias opções -->
    <p>Skills:</p>
    <input type="checkbox" id="html" name="skills" value="html">
    <label for="html">HTML</label>
    <input type="checkbox" id="css" name="skills" value="css">
    <label for="css">CSS</label>

    <label for="obs">Comentários:</label>
    <textarea id="obs" name="obs" rows="4" maxlength="500"></textarea>

    <button type="submit">Enviar</button>
  </fieldset>
</form>`;

export const codeSeletores = `/* Seletor de tag: atinge todos os parágrafos */
p {
  color: #333333;
  line-height: 1.6;
}

/* Seletor de classe: vale para vários elementos */
.destaque {
  background-color: #fff3cd;
  font-weight: bold;
}

/* Seletor de id: identifica um único elemento na página */
#cabecalho {
  background-color: #1b5e20;
  color: #ffffff;
}

/* Encadeado: o link dentro de um strong, dentro de um parágrafo */
p strong a {
  color: #0d47a1;
}

/* Agrupado: os três compartilham a mesma formatação */
strong, em, span {
  font-style: normal;
}

/* Complexo: o parágrafo imediatamente após um h1 */
h1 + p {
  font-size: 1.125rem;
}

/* Atributo: campos obrigatórios ganham uma marca */
input[required] {
  border-left: 3px solid #c62828;
}`;

export const codeBoxModel = `.cartao {
  /* Conteúdo */
  width: 300px;
  height: 200px;

  /* Espaço interno: entre o conteúdo e a borda */
  padding: 16px;

  /* A borda em si */
  border: 2px solid #1b5e20;
  border-radius: 12px;

  /* Espaço externo: entre a borda e os elementos vizinhos */
  margin: 24px;

  background-color: #f1f8e9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font: 1rem Arial, sans-serif;
  color: #1b5e20;
}`;

export const codeFlexbox = `/* O display:flex vai no PAI: ele vira o container */
.formulario {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  border-radius: 16px;
  background-image: url("fundo.jpg");
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

/* Uma linha com os campos lado a lado */
.linha {
  display: flex;
  flex-direction: row;

  /* Eixo principal: distribui o espaço horizontalmente */
  justify-content: space-between;

  /* Eixo transversal: alinha verticalmente */
  align-items: center;

  gap: 8px;
}

/* Em telas estreitas, os campos empilham */
@media (max-width: 600px) {
  .linha {
    flex-direction: column;
    align-items: stretch;
  }
}`;

/**
 * HTML de apoio dos exemplos de CSS. O aluno não edita estes documentos: eles
 * aparecem em aba de leitura para que ele veja sobre qual estrutura o CSS que
 * está editando é aplicado — box model e flexbox só fazem sentido assim.
 */
export const htmlApoioSeletores = `<h1>Guia de Estudo</h1>
<p>Este parágrafo vem logo depois do título.</p>

<p id="cabecalho">Sou o parágrafo com id "cabecalho".</p>

<p class="destaque">Sou um parágrafo com a classe "destaque".</p>

<p>Um link dentro de um <strong><a href="#">strong dentro do parágrafo</a></strong>.</p>

<p><strong>strong</strong>, <em>em</em> e <span>span</span> agrupados.</p>

<form>
  <label for="matricula">Matrícula (obrigatória):</label>
  <input id="matricula" type="text" required>
</form>`;

export const htmlApoioBoxModel = `<div class="cartao">
  Sou a caixa. Mude o padding, a borda e a margin
  no CSS ao lado e veja a caixa mudar de tamanho.
</div>
<div class="cartao">
  Sou a segunda caixa — serve para você enxergar
  o efeito da margin entre as duas.
</div>`;

export const htmlApoioFlexbox = `<div class="formulario">
  <div class="linha">
    <span class="campo">Nome</span>
    <span class="campo">Email</span>
    <span class="campo">Telefone</span>
  </div>
</div>`;

/**
 * Versão do exemplo de flexbox usada no playground: sem a imagem de fundo
 * (que não existe no sandbox) e enxuta, para o aluno enxergar o efeito do
 * justify-content sem rolar o editor.
 */
export const codeFlexboxPlayground = `/* O display:flex vai no PAI: ele vira o container */
.formulario {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  border-radius: 16px;
  background-color: #e8f5e9;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

/* Uma linha com os campos lado a lado */
.linha {
  display: flex;
  flex-direction: row;

  /* Eixo principal: distribui o espaço horizontalmente */
  justify-content: flex-start;

  /* Eixo transversal: alinha verticalmente */
  align-items: center;

  gap: 8px;
  min-height: 80px;
  border: 2px dashed #1b5e20;
}

.campo {
  padding: 8px 12px;
  background-color: #1b5e20;
  color: #ffffff;
  border-radius: 8px;
}`;

/** Troca só o valor de justify-content — o resto do CSS fica igual. */
export function flexboxComJustify(valor: string): string {
  return codeFlexboxPlayground.replace(
    'justify-content: flex-start;',
    `justify-content: ${valor};`,
  );
}

export const codeJsFundamentos = `// let para valor que muda, const para valor que não é reatribuído
let contador = 0;
const nomeDaTurma = "BSI 2022.1";

// prompt SEMPRE devolve string: converta antes de calcular
const idade = Number(prompt("Digite sua idade"));

if (idade >= 18) {
  alert("Maior de idade");
} else {
  alert("Menor de idade");
}

// Função: evita repetir o mesmo cálculo
function calculaMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
  }
  return soma / notas.length;
}

// Array indexado a partir de 0
const notas = [8, 7.5, 9];
console.log(calculaMedia(notas)); // 8.166666666666666`;

export const codeJsDom = `<p id="msg">Clique no botão.</p>
<button id="botao">Trocar texto</button>

<script>
  // getElementById busca o elemento pelo id
  const botao = document.getElementById("botao");
  const msg = document.getElementById("msg");

  // onclick liga a ação do usuário ao código
  botao.onclick = function () {
    // innerHTML substitui o conteúdo do elemento
    msg.innerHTML = "O texto mudou pelo DOM!";
  };

  // querySelector aceita seletores CSS: "#msg" busca pelo id
  const mesmoParagrafo = document.querySelector("#msg");
  console.log(mesmoParagrafo === msg); // true
</script>`;

/**
 * O mesmo exemplo de DOM separado em markup e script, que é como o playground
 * recebe as partes. O `codeJsDom` acima continua exibido como leitura, porque
 * mostra as duas coisas no mesmo arquivo — que é como o aluno vai escrever.
 */
export const htmlJsDom = `<p id="msg">Clique no botão.</p>
<button id="botao">Trocar texto</button>`;

export const scriptJsDom = `// getElementById busca o elemento pelo id
const botao = document.getElementById("botao");
const msg = document.getElementById("msg");

// onclick liga a ação do usuário ao código
botao.onclick = function () {
  // innerHTML substitui o conteúdo do elemento
  msg.innerHTML = "O texto mudou pelo DOM!";
};

// querySelector aceita seletores CSS: "#msg" busca pelo id
const mesmoParagrafo = document.querySelector("#msg");
console.log(mesmoParagrafo === msg); // true`;
