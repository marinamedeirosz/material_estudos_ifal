import SubjectContentLayout from '../../components/layout/SubjectContentLayout';
import LPGMSections from './LPGMSections';
import { LPGM_SECTIONS } from './data';

const heroBackground =
  'radial-gradient(circle at 26% 30%, rgba(108,99,255,0.16) 0%, transparent 46%), radial-gradient(circle at 74% 64%, rgba(78,205,196,0.11) 0%, transparent 44%)';

export default function LPGMContent() {
  return (
    <SubjectContentLayout
      sections={LPGM_SECTIONS}
      eyebrow="2º período · 80h · LPGM"
      title={(
        <>
          Linguagem de<br /><span className="gradient-text">Programação</span>
        </>
      )}
      description="Conceitos comparados em C++ · Java · Python · JavaScript · PHP — a mesma ideia, cinco linguagens"
      heroBackground={heroBackground}
      renderSection={sectionId => <LPGMSections activeSection={sectionId} />}
    />
  );
}
