import IntroSection from './sections/IntroSection';
import TicSection from './sections/TicSection';
import InternetWebSection from './sections/InternetWebSection';
import HtmlEstruturaSection from './sections/HtmlEstruturaSection';
import HtmlSemanticaSection from './sections/HtmlSemanticaSection';
import TabelasSection from './sections/TabelasSection';
import FormulariosSection from './sections/FormulariosSection';
import CssFundamentosSection from './sections/CssFundamentosSection';
import CssLayoutSection from './sections/CssLayoutSection';
import JavaScriptSection from './sections/JavaScriptSection';
import ProjetoFinalSection from './sections/ProjetoFinalSection';
import QuizSection from './sections/QuizSection';
import type { IntwSectionId } from './data';

interface IntwSectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente. A ordem de exibição vem de INTW_SECTIONS.
 * O `Record` tipado pelos ids reais garante que toda seção tenha componente e que um id
 * inexistente (ou renomeado) quebre a compilação em vez de cair no fallback silenciosamente.
 */
const SECTION_COMPONENTS: Record<IntwSectionId, () => React.ReactElement> = {
  intro: IntroSection,
  tic: TicSection,
  'internet-web': InternetWebSection,
  'html-estrutura': HtmlEstruturaSection,
  'html-semantica': HtmlSemanticaSection,
  tabelas: TabelasSection,
  formularios: FormulariosSection,
  'css-fundamentos': CssFundamentosSection,
  'css-layout': CssLayoutSection,
  javascript: JavaScriptSection,
  'projeto-final': ProjetoFinalSection,
  quiz: QuizSection,
};

function isSectionId(id: string): id is IntwSectionId {
  return id in SECTION_COMPONENTS;
}

export default function IntwSections({ activeSection }: IntwSectionsProps) {
  const Section = isSectionId(activeSection) ? SECTION_COMPONENTS[activeSection] : IntroSection;
  return <Section />;
}
