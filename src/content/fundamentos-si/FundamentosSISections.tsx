import IntroSection from './sections/IntroSection';
import DadosInformacaoSection from './sections/DadosInformacaoSection';
import SistemasSISection from './sections/SistemasSISection';
import OrganizacoesSection from './sections/OrganizacoesSection';
import HardwareSection from './sections/HardwareSection';
import SoftwareSection from './sections/SoftwareSection';
import BancoDadosSection from './sections/BancoDadosSection';
import RedesSection from './sections/RedesSection';
import InternetSection from './sections/InternetSection';
import ComercioEletronicoSection from './sections/ComercioEletronicoSection';
import SistemasNumericosSection from './sections/SistemasNumericosSection';
import AritmeticaBinariaSection from './sections/AritmeticaBinariaSection';
import QuizSection from './sections/QuizSection';
import type { FundamentosSiSectionId } from './data';

interface FundamentosSISectionsProps {
  activeSection: string;
}

/**
 * Mapa de id de seção → componente. A ordem de exibição vem de FUNDAMENTOS_SI_SECTIONS.
 * O `Record` tipado pelos ids reais garante que toda seção tenha componente e que um id
 * inexistente (ou renomeado) quebre a compilação em vez de cair no fallback silenciosamente.
 */
const SECTION_COMPONENTS: Record<FundamentosSiSectionId, () => React.ReactElement> = {
  intro: IntroSection,
  'dados-informacao': DadosInformacaoSection,
  'sistemas-si': SistemasSISection,
  organizacoes: OrganizacoesSection,
  hardware: HardwareSection,
  software: SoftwareSection,
  'banco-dados': BancoDadosSection,
  redes: RedesSection,
  internet: InternetSection,
  'comercio-eletronico': ComercioEletronicoSection,
  'sistemas-numericos': SistemasNumericosSection,
  'aritmetica-binaria': AritmeticaBinariaSection,
  quiz: QuizSection,
};

function isSectionId(id: string): id is FundamentosSiSectionId {
  return id in SECTION_COMPONENTS;
}

export default function FundamentosSISections({ activeSection }: FundamentosSISectionsProps) {
  const Section = isSectionId(activeSection) ? SECTION_COMPONENTS[activeSection] : IntroSection;
  return <Section />;
}
