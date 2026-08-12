# Skill: Content Creation

## Objetivo
Criar conteúdo de uma nova matéria seguindo a estrutura do projeto.

## Passo a Passo

### 1. Preparação
- Reunir material-fonte: slides do professor, apostilas, PDFs
- Identificar os tópicos principais (6-15 seções)
- Verificar se a matéria já existe em `src/data/curriculum.ts`

### 2. Criar o arquivo de dados `data.ts`

```typescript
// src/content/<slug>/data.ts

import type { QuizQuestionData } from '../../components/ui/QuizCard';

// Resumo denso de todo o conteúdo, usado como contexto para a IA gerar perguntas
export const GUIDE_CONTEXT = `
...resumo completo aqui...
`;

// Tópicos para filtro do quiz IA
export const TOPICS = [
  { value: 'topico1', label: 'Nome do Tópico 1' },
  // ... pelo menos 5 tópicos
];

// Seções de navegação
export const SECTIONS = [
  { id: 'intro', title: 'Introdução', shortTitle: 'Introdução' },
  // ... todas as seções
  { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
  { id: 'iaquiz', title: 'Quiz com IA', shortTitle: 'Quiz IA' },
];

// Mínimo 10 perguntas de quiz estático
export const QUIZ_DATA: QuizQuestionData[] = [
  {
    id: 'q1',
    question: 'Pergunta aqui?',
    options: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
    correctIndex: 1,
    feedbackCorrect: 'Explicação do acerto.',
    feedbackWrong: 'Explicação do erro e resposta correta.',
  },
];
```

### 2b. Declarar as avaliações da matéria

Seções e questões apontam para as avaliações por id, via `exams: string[]`. Uma seção pode
valer para **mais de uma prova** — Big O, por exemplo, cai na AV1 e na AV2.

```typescript
import type { ExamDefinition } from '../../lib/exams';

export const NOME_DA_MATERIA_EXAMS: ExamDefinition[] = [
  { id: 'av1', label: 'AV1', description: 'O que a primeira avaliação cobra' },
  { id: 'av2', label: 'AV2', description: 'O que a segunda avaliação cobra' },
];
```

Use o vocabulário do professor (AV1/AV2, N1, S1 — o que estiver no mural da turma).
O campo `exam` (singular) ainda é aceito como legado, mas **matéria nova usa `exams`**.

### 3. Criar os componentes

O padrão atual é **uma seção por arquivo**, não um arquivo único gigante:

```
src/content/<slug>/
  data.ts                    GUIDE_CONTEXT, EXAMS, TOPICS, SECTIONS, QUIZ_DATA
  <Nome>Content.tsx          casca: monta o SubjectContentLayout
  <Nome>Sections.tsx         mapa id → componente
  sections/
    IntroSection.tsx         uma por seção, < 150 linhas cada
    ...
    blocks.ts                dados dos cards, tabelas e listas
    snippets.ts              trechos de código (quando houver)
```

`<Nome>Content.tsx` passa `sections` e `exams` ao `SubjectContentLayout`, que já cuida do
hero, do nav sticky, da folha mobile e do Modo Prova — não reimplemente nada disso.

Componentes disponíveis (`src/components/ui/` e `src/components/sections/`):
- `ConceptCard` — conceitos com título + descrição
- `HighlightBox` — definições importantes
- `FlowDiagram` — sequências com setas
- `ComparisonTable` — comparação entre duas abordagens
- `CodeBlock` — código com destaque (Python, JS, TS, Java, C, C++, Go, Rust)
- `VideoEmbed` — YouTube e Google Drive
- `AlgorithmVisualizer` — visualização passo a passo de algoritmos de ordenação
- `QuizCard`, `ExamQuizSelector`, `AIQuizGenerator`

### 4. Registrar

1. Em `src/data/curriculum.ts` → marcar `hasContent: true`
2. Em `src/pages/SubjectPage.tsx` → adicionar ao `contentRegistry`, **com `lazy()`**

```typescript
const contentRegistry: Record<string, ComponentType> = {
  // ...existentes
  '<slug>': lazy(() => import('../content/<slug>/<Nome>Content')),
};
```

O `lazy()` é obrigatório: sem ele, o conteúdo de todas as matérias entra no bundle inicial.

### 5. Verificar
- `npx tsc -b`, `npm run lint` e `npm run build` — sem erros
- Dev server: **suba numa porta livre e confirme que é o seu que responde** antes de medir
- Todas as seções navegáveis, em desktop (1280px) e mobile (375px)
- Quiz com pelo menos 10 perguntas
- Todo código de exemplo **executado**, não só revisado

## Referência: Matéria Modelo
Use `src/content/estrutura-dados/` — é a que segue o padrão atual (`sections/`, `exams`,
`lazy()`). As matérias mais antigas ainda usam o arquivo único e não devem ser copiadas.
