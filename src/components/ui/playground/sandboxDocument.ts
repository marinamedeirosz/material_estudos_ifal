/**
 * Montagem do documento executado dentro do iframe de pré-visualização.
 *
 * Este módulo só produz a string do `srcdoc`. Quem cria o iframe (e define os
 * atributos de sandbox) é o `SandboxPreview` — ver o comentário de segurança lá.
 *
 * O código do aluno roda numa origem opaca, então NADA aqui pode depender de
 * acesso à origem pai: sem `localStorage`, sem `sessionStorage`, sem cookies.
 * A única via de comunicação de volta é `postMessage` para `window.parent`,
 * que funciona mesmo com origem opaca (a mensagem sai com origin "null").
 */

/** Mensagens que o documento do sandbox envia para o pai. */
export type SandboxMessage =
  | { kind: 'log'; level: ConsoleLevel; text: string }
  | { kind: 'error'; text: string }
  | { kind: 'done' };

export type ConsoleLevel = 'log' | 'info' | 'warn' | 'error';

/** Identifica as mensagens deste playground e descarta o resto. */
export const SANDBOX_CHANNEL = 'ifal-playground';

export interface SandboxParts {
  html?: string;
  css?: string;
  js?: string;
}

/**
 * Escapa `</script` para que o código do aluno não consiga fechar cedo a tag
 * `<script>` em que ele é embutido e escapar para o contexto de markup.
 * Não é uma fronteira de segurança (o sandbox é), mas evita que um exemplo
 * legítimo com string "</script>" quebre o documento inteiro.
 */
function escapeScriptClose(code: string): string {
  return code.replace(/<\/script/gi, '<\\/script');
}

/**
 * Runtime injetado antes do código do aluno. Faz três coisas:
 *
 * 1. Redireciona `console.*` para o pai via `postMessage`, mantendo o console
 *    real do navegador funcionando (o aluno pode abrir o DevTools também).
 * 2. Substitui `alert`/`prompt`/`confirm`: o sandbox roda sem `allow-modals`,
 *    então essas funções lançariam erro ou seriam ignoradas pelo navegador.
 *    Viram saída no console — `prompt` devolve string, como o original, para
 *    que o exemplo de `Number(prompt(...))` continue didaticamente correto.
 * 3. Reporta erros não capturados e sinaliza `done` ao terminar, que é como o
 *    pai sabe que não houve laço infinito.
 */
const RUNTIME = `
(function () {
  var CHANNEL = ${JSON.stringify(SANDBOX_CHANNEL)};
  function send(msg) {
    try {
      msg.channel = CHANNEL;
      parent.postMessage(msg, '*');
    } catch (e) { /* nada a fazer: o pai é a única saída */ }
  }

  function format(value) {
    if (typeof value === 'string') return value;
    if (value instanceof Error) return value.name + ': ' + value.message;
    try { return JSON.stringify(value); } catch (e) { return String(value); }
  }
  function joinArgs(args) {
    return Array.prototype.map.call(args, format).join(' ');
  }

  ['log', 'info', 'warn', 'error'].forEach(function (level) {
    var original = console[level];
    console[level] = function () {
      send({ kind: 'log', level: level, text: joinArgs(arguments) });
      if (original) original.apply(console, arguments);
    };
  });

  // Sem allow-modals estas funções não abrem diálogo. Mantê-las utilizáveis
  // como saída de console preserva o sentido dos exemplos da matéria.
  window.alert = function (msg) {
    send({ kind: 'log', level: 'info', text: 'alert: ' + format(msg) });
  };
  window.confirm = function (msg) {
    send({ kind: 'log', level: 'info', text: 'confirm: ' + format(msg) + ' -> true' });
    return true;
  };
  window.prompt = function (msg, valorPadrao) {
    var resposta = valorPadrao == null ? '' : String(valorPadrao);
    send({
      kind: 'log',
      level: 'info',
      text: 'prompt: ' + format(msg) + ' -> "' + resposta + '"',
    });
    return resposta;
  };

  window.onerror = function (message, _fonte, linha) {
    send({
      kind: 'error',
      text: linha ? message + ' (linha ' + linha + ')' : String(message),
    });
    return true;
  };
  window.addEventListener('unhandledrejection', function (evento) {
    send({ kind: 'error', text: 'Promise rejeitada: ' + format(evento.reason) });
  });

  window.__ifalDone = function () { send({ kind: 'done' }); };
})();
`;

/**
 * Compõe o documento final. O JS do aluno vai num `try/catch` para que um erro
 * de sintaxe em tempo de execução vire mensagem no console em vez de silêncio.
 *
 * O sinal de `done` é disparado no fim do script; se o código travar num laço
 * infinito ele nunca chega, e é assim que o pai detecta a trava.
 */
export function buildSandboxDocument({ html = '', css = '', js = '' }: SandboxParts): string {
  const userScript = js.trim()
    ? `<script>
try {
${escapeScriptClose(js)}
} catch (erro) {
  window.onerror(erro && erro.message ? erro.message : String(erro));
}
window.__ifalDone();
</script>`
    : '<script>window.__ifalDone();</script>';

  return `<!doctype html>
<html lang="pt-br">
<head>
<meta charset="utf-8">
<title>Resultado do exemplo</title>
<style>
  /* Base neutra: o preview não herda o tema do site (origem opaca, sem CSS do pai). */
  html { color-scheme: light; }
  body {
    margin: 0;
    padding: 16px;
    background: #ffffff;
    color: #1b2230;
    font-family: system-ui, -apple-system, 'Segoe UI', Arial, sans-serif;
    line-height: 1.6;
  }
</style>
<style>
${css}
</style>
<script>${RUNTIME}</script>
</head>
<body>
${html}
${userScript}
</body>
</html>`;
}
