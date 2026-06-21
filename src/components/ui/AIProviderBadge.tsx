import { Link } from 'react-router-dom';
import { useApiKey } from '../../hooks/useApiKey';
import { getProvider } from '../../lib/aiProviders';

/** Mostra qual provedor/modelo está ativo, com atalho para trocar nas Configurações. */
export default function AIProviderBadge() {
  const { getConfig } = useApiKey();
  const config = getConfig();

  if (!config.apiKey || !config.model) return null;

  const provider = getProvider(config.provider);

  return (
    <div className="flex items-center justify-between gap-3 flex-wrap text-xs">
      <span className="inline-flex items-center gap-2 text-text-muted">
        <span aria-hidden className="h-2 w-2 rounded-full bg-accent5" />
        Usando
        <span className="font-semibold text-text font-mono">{config.model}</span>
        <span className="text-text-muted/60">via {provider.label}</span>
      </span>
      <Link
        to="/configuracoes"
        className="text-text-muted hover:text-text font-semibold underline underline-offset-2 transition-colors"
      >
        Trocar
      </Link>
    </div>
  );
}
