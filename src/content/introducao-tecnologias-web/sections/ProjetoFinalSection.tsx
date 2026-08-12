import FlowDiagram from '../../../components/ui/FlowDiagram';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, PanelList, ColoredPanelList } from '../../../components/sections';
import { projetoFinalChecklist, projetoFinalPlataformas, projetoFinalRoteiro } from './blocks';

export default function ProjetoFinalSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Projeto Final: juntando as três camadas"
        subtitle="O destino para onde o cronograma da disciplina aponta"
        colorClass="text-accent"
        badge="AV2"
      />

      <HighlightBox title="O que o cronograma reservou">
        <p>
          O <strong>Cronograma da Unidade</strong> publicado pelo professor reserva três encontros ao fim da
          disciplina: <em>&quot;Projeto Final — Aula presencial dia 17/dezembro — Avaliação AV2-2&quot;</em> (23/11) e
          mais duas aulas extras de <em>&quot;Projeto de WebSite&quot;</em> (07/12 e 14/12). O material{' '}
          <em>Datas e Prazos</em> confirma a data: <strong>17 de dezembro, AV2-2, JavaScript</strong>. Depois de
          percorrer HTML, CSS e JavaScript separadamente, a disciplina termina reunindo os três num site publicado.
        </p>
      </HighlightBox>

      <HighlightBox title="Uma ressalva honesta sobre esta seção" accent="var(--color-accent4)">
        <p>
          O aviso de lançamento de notas, de 29/12, define a AV2 pelas <strong>duas atividades de formulário, tabela
          e CSS</strong> — sem citar o projeto. Tudo indica que ele não chegou a ser cobrado como nota naquela turma.
          Esta seção não inventa um enunciado que não existe: ela registra o que o cronograma previa e transforma isso
          no que de fato serve a você — o melhor roteiro de revisão da matéria inteira.
        </p>
      </HighlightBox>

      <Subsection title="Um roteiro para montar o seu" accentClass="text-accent2">
        <FlowDiagram items={projetoFinalRoteiro} />
      </Subsection>

      <Subsection title="Checklist de revisão: o site usa tudo que a disciplina ensinou?" accentClass="text-accent3">
        <PanelList items={projetoFinalChecklist} columns="" />
      </Subsection>

      <Subsection title="Onde publicar" accentClass="text-accent5">
        <ColoredPanelList items={projetoFinalPlataformas} />
      </Subsection>

      <HighlightBox title="Por que um projeto integrador ensina o que as atividades soltas não ensinam" accent="var(--color-accent2)">
        <p>
          Cada atividade da disciplina isola uma camada: uma cobra semântica, outra tabela, outra CSS. Num site
          inteiro os problemas passam a ser <strong>de integração</strong> — o CSS que funcionava sozinho quebra
          quando o HTML muda, o link relativo que abria na sua máquina não abre depois de publicado, o script que
          rodava no console não acha o elemento porque roda antes de a página carregar. São exatamente os erros que
          aparecem na primeira vez que se publica algo, e nenhum deles cabe numa atividade de camada única.
        </p>
      </HighlightBox>
    </section>
  );
}
