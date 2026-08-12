import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import PreviewTravado from './PreviewTravado';
import { SANDBOX_CHANNEL, buildSandboxDocument } from './sandboxDocument';
import type { ConsoleLevel, SandboxParts } from './sandboxDocument';

/** Uma linha de saída capturada do console do sandbox. */
export interface ConsoleEntry {
  level: ConsoleLevel;
  text: string;
}

interface SandboxPreviewProps extends SandboxParts {
  /** Muda a cada clique em "Executar": força a recriação do iframe. */
  runId: number;
  /** Descrição do que está sendo mostrado, para leitores de tela. */
  title: string;
  /** Recebe cada linha de console/erro emitida pela execução atual. */
  onConsole?: (entry: ConsoleEntry) => void;
  /** Chamado quando o código não sinaliza conclusão a tempo (provável laço infinito). */
  onTimeout?: () => void;
  /** Esconde o quadro visual — usado quando só interessa o console. */
  hidden?: boolean;
}

/**
 * Tempo até considerar que o código travou. O documento sinaliza `done` no fim
 * do script; se o sinal não chega, quase sempre é `while (true)`.
 */
const TIMEOUT_MS = 3000;

/**
 * ┌─────────────────────────── SEGURANÇA — NÃO ALTERAR SEM LER ───────────────────────────┐
 * │                                                                                       │
 * │ O atributo abaixo é `sandbox="allow-scripts"` e NUNCA pode ganhar `allow-same-origin`.│
 * │                                                                                       │
 * │ Os dois juntos ANULAM o sandbox: o documento volta a ter a origem do site, e aí o     │
 * │ código digitado pelo aluno passa a ler `sessionStorage` — onde fica a chave de API do │
 * │ provedor de IA (`ifal_bsi_ai_config`, ver `src/hooks/useApiKey.ts`) — além do         │
 * │ `localStorage`, dos cookies e do DOM do site inteiro.                                 │
 * │                                                                                       │
 * │ Não é ameaça hipotética de "aluno mal-intencionado": basta colar código de um         │
 * │ tutorial qualquer para que ele rode com acesso à chave. Só com `allow-scripts` o      │
 * │ documento recebe uma ORIGEM OPACA e não enxerga nada do pai.                          │
 * │                                                                                       │
 * │ Também ficam de fora, de propósito:                                                   │
 * │   allow-modals          → um `alert()` dentro de um laço travaria a aba               │
 * │                           (alert/prompt/confirm viram console — ver sandboxDocument)  │
 * │   allow-popups          → nada de abrir janelas                                       │
 * │   allow-top-navigation  → nada de navegar a aba do site para fora                     │
 * │   allow-forms           → o submit de um form recarregaria o documento do exemplo     │
 * │                                                                                       │
 * │ O conteúdo entra por `srcdoc` (string), NUNCA por `blob:` ou `data:` URL: essas       │
 * │ herdam contexto de origem de formas que variam entre navegadores.                     │
 * └───────────────────────────────────────────────────────────────────────────────────────┘
 */
const SANDBOX_ATTR = 'allow-scripts';

export default function SandboxPreview({
  html,
  css,
  js,
  runId,
  title,
  onConsole,
  onTimeout,
  hidden = false,
}: SandboxPreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Guardamos QUAL execução travou, não um booleano. Assim o estado se invalida
  // sozinho: ao iniciar a execução seguinte o runId muda e `travou` volta a ser
  // falso sem precisar de reset — que era a origem do playground ficar mudo
  // para sempre depois do primeiro laço infinito.
  const [runIdTravado, setRunIdTravado] = useState<number | null>(null);
  const travou = runIdTravado === runId;

  // Callbacks em ref: mudar a identidade delas não deve reiniciar a execução.
  const onConsoleRef = useRef(onConsole);
  const onTimeoutRef = useRef(onTimeout);
  useEffect(() => {
    onConsoleRef.current = onConsole;
    onTimeoutRef.current = onTimeout;
  });

  const doc = buildSandboxDocument({ html, css, js });

  // useLayoutEffect (e não useEffect): o listener precisa estar registrado
  // ANTES de o navegador carregar o srcdoc do elemento recém-montado. Com o
  // efeito assíncrono, o documento do sandbox chegava a executar e a mandar as
  // primeiras mensagens antes de haver alguém escutando — e a saída da segunda
  // execução em diante se perdia.
  useLayoutEffect(() => {
    // Se o `done` não chegar, o código provavelmente está preso num laço.
    // Só marcamos o estado, anotando QUAL execução travou: quem realmente
    // descarta o documento preso é a troca da `key` na execução seguinte.
    let concluiu = false;
    const timer = window.setTimeout(() => {
      if (concluiu) return;
      setRunIdTravado(runId);
      onTimeoutRef.current?.();
    }, TIMEOUT_MS);

    function handleMessage(event: MessageEvent) {
      // Validação essencial: só aceitamos mensagens vindas DESTE iframe.
      // Sem isto, qualquer outra aba/janela com referência a esta window
      // poderia injetar linhas falsas no console do aluno.
      //
      // A comparação é feita no momento da mensagem (e não com um valor
      // capturado antes): o elemento é recriado a cada execução, então guardar
      // o contentWindow numa variável do efeito descartaria a saída da
      // execução nova, que chega logo depois da troca do elemento.
      const iframeAtual = iframeRef.current;
      if (!iframeAtual || !event.source || event.source !== iframeAtual.contentWindow) return;

      const data = event.data as { channel?: string; kind?: string; level?: ConsoleLevel; text?: string };
      if (!data || data.channel !== SANDBOX_CHANNEL) return;

      if (data.kind === 'done') {
        concluiu = true;
        window.clearTimeout(timer);
        // Se esta execução já tinha sido dada como travada (o aluno clicou em
        // Executar logo depois do aviso), o `done` desfaz a marcação — senão o
        // aviso continuaria na tela por cima de uma execução que deu certo.
        setRunIdTravado((anterior) => (anterior === runId ? null : anterior));
        return;
      }
      if (data.kind === 'log') {
        onConsoleRef.current?.({ level: data.level ?? 'log', text: data.text ?? '' });
        return;
      }
      if (data.kind === 'error') {
        onConsoleRef.current?.({ level: 'error', text: data.text ?? 'Erro desconhecido' });
      }
    }

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
      window.clearTimeout(timer);
    };
    // Depende só de `runId` e `doc` — uma entrada por execução. `travou` NÃO
    // entra: ele muda quando o cronômetro dispara e, se estivesse aqui, o
    // efeito se reiniciaria, removeria o listener no cleanup e re-armaria o
    // cronômetro. Era essa a razão de o console ficar mudo depois do primeiro
    // laço infinito — a execução seguinte não tinha mais quem escutasse.
  }, [runId, doc]);

  const iframe = (
    <iframe
      // key: recria o elemento a cada execução, descartando timers, listeners
      // e qualquer laço que ainda estivesse rodando na execução anterior — é
      // esta troca que interrompe de fato o código preso num while(true).
      key={runId}
      ref={iframeRef}
      sandbox={SANDBOX_ATTR}
      srcDoc={doc}
      title={title}
      // O iframe precisa de ÁREA REAL para o navegador carregar o srcdoc:
      // `display:none`, tamanho zero e posicionamento fora do fluxo impedem a
      // execução e deixam o console mudo. No modo só-console ele fica baixo,
      // mas visível — a saída que interessa aparece no `ConsoleOutput`.
      className={`w-full block bg-white ${hidden ? 'h-16' : 'h-64 md:h-80'}`}
    />
  );

  // O iframe fica SEMPRE montado, inclusive durante o aviso de travamento.
  // Quem descarta o documento preso no laço é a troca da `key` na execução
  // seguinte. Desmontá-lo aqui colapsaria o contêiner, e o elemento da execução
  // seguinte nasceria com área zero — que é justamente a condição em que o
  // navegador não executa o documento e o console fica mudo.
  if (hidden) {
    // Exemplos de lógica pura (só console) ainda precisam de um iframe que o
    // navegador de fato carregue: `display:none`, área zero e posicionamento
    // fora do fluxo foram testados e, em todos, o documento não executa e o
    // console fica mudo. Então o iframe é renderizado normalmente, só que
    // baixinho — a saída de verdade aparece no `ConsoleOutput` logo abaixo.
    return <div className="border-t border-border">{iframe}</div>;
  }

  return (
    <div className="relative rounded-lg overflow-hidden border border-border bg-white">
      {iframe}
      {/* O aviso COBRE o iframe em vez de substituí-lo: desmontar o elemento
          colapsaria o contêiner e a execução seguinte nasceria sem área. */}
      {travou && (
        <div className="absolute inset-0">
          <PreviewTravado />
        </div>
      )}
    </div>
  );
}
