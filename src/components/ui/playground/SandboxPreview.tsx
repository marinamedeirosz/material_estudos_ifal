import { useEffect, useRef, useState } from 'react';
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
  const [travou, setTravou] = useState(false);

  // Cada execução começa sem o aviso de trava. Ajustar durante a renderização
  // (e não num efeito) evita o render extra com o estado antigo.
  const [runIdAnterior, setRunIdAnterior] = useState(runId);
  if (runIdAnterior !== runId) {
    setRunIdAnterior(runId);
    setTravou(false);
  }

  // Callbacks em ref: mudar a identidade delas não deve reiniciar a execução.
  const onConsoleRef = useRef(onConsole);
  const onTimeoutRef = useRef(onTimeout);
  useEffect(() => {
    onConsoleRef.current = onConsole;
    onTimeoutRef.current = onTimeout;
  });

  const doc = buildSandboxDocument({ html, css, js });

  useEffect(() => {
    // Se o `done` não chegar, o código provavelmente está preso num laço.
    // Removemos o srcdoc para que o navegador descarte o documento travado.
    const timer = window.setTimeout(() => {
      setTravou(true);
      if (iframeRef.current) iframeRef.current.removeAttribute('srcdoc');
      onTimeoutRef.current?.();
    }, TIMEOUT_MS);

    function handleMessage(event: MessageEvent) {
      // Validação essencial: só aceitamos mensagens vindas DESTE iframe.
      // Sem isto, qualquer outra aba/janela com referência a esta window
      // poderia injetar linhas falsas no console do aluno.
      if (!iframeRef.current || event.source !== iframeRef.current.contentWindow) return;

      const data = event.data as { channel?: string; kind?: string; level?: ConsoleLevel; text?: string };
      if (!data || data.channel !== SANDBOX_CHANNEL) return;

      if (data.kind === 'done') {
        window.clearTimeout(timer);
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
  }, [runId, doc]);

  const iframe = (
    <iframe
      // key: recria o elemento a cada execução, descartando timers, listeners
      // e qualquer laço que ainda estivesse rodando na execução anterior.
      key={runId}
      ref={iframeRef}
      sandbox={SANDBOX_ATTR}
      srcDoc={doc}
      title={title}
      className={hidden ? 'hidden' : 'w-full h-64 md:h-80 block bg-white'}
    />
  );

  // Escondido: ainda executa (o console depende disso), mas sem ocupar espaço.
  if (hidden) return iframe;

  return (
    <div className="rounded-lg overflow-hidden border border-border bg-white">
      {travou ? <PreviewTravado /> : iframe}
    </div>
  );
}
