import IntroSection from './sections/IntroSection';
import ConjuntosSection from './sections/ConjuntosSection';
import RelacoesSection from './sections/RelacoesSection';
import FuncoesSection from './sections/FuncoesSection';
import CombinatoriaSection from './sections/CombinatoriaSection';
import SequenciasSection from './sections/SequenciasSection';
import SomatoriosSection from './sections/SomatoriosSection';
import ProposicoesSection from './sections/ProposicoesSection';
import ConectivosSection from './sections/ConectivosSection';
import EquivalenciaSection from './sections/EquivalenciaSection';
import QuizSection from './sections/QuizSection';
import type { LmmdSectionId } from './data';

interface LmmdSectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente. A ordem de exibição vem de LMMD_SECTIONS.
 * O `Record` tipado pelos ids reais garante que toda seção tenha componente e que um id
 * inexistente (ou renomeado) quebre a compilação em vez de cair no fallback silenciosamente.
 */
const SECTION_COMPONENTS: Record<LmmdSectionId, () => React.ReactElement> = {
  intro: IntroSection,
  conjuntos: ConjuntosSection,
  relacoes: RelacoesSection,
  funcoes: FuncoesSection,
  combinatoria: CombinatoriaSection,
  sequencias: SequenciasSection,
  somatorios: SomatoriosSection,
  proposicoes: ProposicoesSection,
  conectivos: ConectivosSection,
  equivalencia: EquivalenciaSection,
  quiz: QuizSection,
};

function isSectionId(id: string): id is LmmdSectionId {
  return id in SECTION_COMPONENTS;
}

export default function LmmdSections({ activeSection }: LmmdSectionsProps) {
  const Section = isSectionId(activeSection) ? SECTION_COMPONENTS[activeSection] : IntroSection;
  return <Section />;
}
