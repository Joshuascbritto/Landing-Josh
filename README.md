# joshua // portfolio

> Site pessoal do **Joshua Strauch** — Cientista da Computação.
> Brutalismo digital, terminal escuro, três idiomas, zero libs de UI.

```
$ joshua@portfolio:~/$ ls
about/   projects/   contact/   README.md
```

---

## Sobre

Site de portfólio de página única (mas com 3 rotas) construído à mão.
Sem framework de UI, sem biblioteca de i18n, sem Tailwind.
Estética: **terminal + concreto** — fundo quase preto, accent verde-elétrico (`#c8ff2d`),
bordas duras de 1px, sem gradientes, sem sombras, sem cantos arredondados.

O site é multilíngue de verdade: troca **todo o conteúdo** entre **PT / EN / RU**
no clique de uma bandeira, e persiste a escolha em `localStorage`.

---

## Stack

| Camada      | Escolha                                                         |
| ----------- | --------------------------------------------------------------- |
| Build       | [Vite 5](https://vitejs.dev) + TypeScript estrito               |
| UI          | [React 18](https://react.dev) + [React Router 6](https://reactrouter.com) |
| Estilo      | CSS global puro (`src/styles.css`) — sem Tailwind, sem CSS-in-JS |
| i18n        | Context API + objeto de traduções tipado — sem libs             |
| Fontes      | Google Fonts: **JetBrains Mono** (display) + **DM Sans** (body) |
| Persistência| `localStorage` (chave `joshua.locale`)                          |

---

## Estrutura de pastas

```
.
├── index.html                  # entry HTML, link Google Fonts, meta tags
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── .gitignore
└── src/
    ├── main.tsx                # bootstrap React + Router + LanguageProvider
    ├── App.tsx                 # shell, rotas, footer, overlays (grain/scanlines)
    ├── styles.css              # ÚNICA folha de estilo (paleta, layout, animações)
    ├── components/
    │   └── Nav.tsx             # navbar sticky + prompt + bandeiras
    ├── i18n/
    │   ├── translations.ts     # TODO o texto do site (pt/en/ru) — fonte da verdade
    │   └── LanguageContext.tsx # Provider + hook useTranslation()
    └── pages/
        ├── About.tsx           # hero + bio + interesses + timeline (rota /)
        ├── Projects.tsx        # lista hardcoded de repos (rota /projects)
        └── Contact.tsx         # email/telefone/links (rota /contact)
```

---

## Como rodar

**Pré-requisitos:** Node 18+ e npm.

```bash
# Instalar dependências (só na primeira vez)
npm install

# Subir servidor de dev em http://localhost:5173
npm run dev

# Build de produção (gera dist/)
npm run build

# Preview local do build de produção
npm run preview
```

O build de produção atual está em **~61 KB JS gzip** + **~3 KB CSS gzip**. Se subir muito disso, alguma coisa errada não está certa.

---

## Sistema de design

### Paleta

```css
--bg:          #0a0a0a   /* fundo principal */
--bg-elev:     #0e0e0e   /* cards, tags */
--fg:          #ededed   /* texto principal */
--mute:        #6a6a6a   /* texto secundário */
--mute-2:      #3a3a3a   /* dividers, brackets decorativos */
--line:        #1a1a1a
--line-2:      #2a2a2a   /* bordas duras de 1px */
--accent:      #c8ff2d   /* VERDE-ELÉTRICO — só uma cor de destaque, em tudo */
--accent-dim:  rgba(200, 255, 45, 0.18)
```

Regra de ouro: **uma cor de destaque, e só uma**. Não adicionar laranja, ciano, magenta. Se algo precisa ressaltar, ressalta com `--accent` ou com peso/tamanho.

### Tipografia

- **JetBrains Mono** — títulos, navbar, prompts, números, anything code-shaped.
  Pesos carregados: 300 / 400 / 500 / 700 / 800.
- **DM Sans** — corpo de texto longo (bio, descrições).
  Pesos: 300 / 400 / 500 / 600 / 700.

Nunca usar Inter / Roboto / Arial — se for mexer aqui, manter o pareamento *mono display + sans body*.

### Regras visuais

- ❌ Nada de `border-radius`. Tudo retangular.
- ❌ Nada de `box-shadow`.
- ❌ Nada de `linear-gradient` colorido.
- ✅ Bordas sempre `1px solid var(--line-2)` (ou `var(--accent)` em estados ativos).
- ✅ Hovers em `transition: ... steps(2, jump-none)` — estalo, não easing.
- ✅ Cursor customizado (crosshair SVG inline em `styles.css`).
- ✅ Overlay sutil de grain (SVG turbulence, 7% opacity) + scanlines.

### Movimento

- Fade-in escalonado no carregamento das páginas (classe `.stagger` + `animationDelay` inline).
- Cursor piscante (`_`) ao lado do nome no hero — `steps(2, jump-none)` pra dar vibe de terminal.
- `prefers-reduced-motion` desliga tudo.

---

## i18n — como funciona

Toda string visível do site mora em [`src/i18n/translations.ts`](src/i18n/translations.ts).
Formato:

```ts
export interface Translations { /* shape compartilhado */ }

const pt: Translations = { /* ... */ }
const en: Translations = { /* ... */ }
const ru: Translations = { /* ... */ }

export const translations: Record<Locale, Translations> = { pt, en, ru }
```

Como o `Translations` é uma `interface` tipada e cada idioma é declarado com `: Translations`,
**o TypeScript reclama se você adicionar uma chave em só um idioma**. Use isso como rede de segurança.

### Pegar texto num componente

```tsx
import { useTranslation } from '../i18n/LanguageContext'

function MyComponent() {
  const { t, locale, setLocale } = useTranslation()
  return <h1>{t.hero.title}</h1>
}
```

**Nunca** colocar string hardcoded em JSX. Toda string visível deve vir do `t`.
Exceções (intencionais):
- O prompt decorativo `joshua@portfolio:~/$` na navbar — é decoração, não tradução.
- Os nomes dos repos em `/projects` — são identificadores de código.

### Adicionar uma nova chave de tradução

1. Abre [`src/i18n/translations.ts`](src/i18n/translations.ts).
2. Adiciona o campo na `interface Translations`.
3. O TS vai reclamar nos três objetos `pt`, `en`, `ru` — preenche os três.
4. Usa via `t.minha.chave` no JSX.

### Adicionar um novo idioma

1. Adiciona a sigla no tipo: `export type Locale = 'pt' | 'en' | 'ru' | 'es'`.
2. Cria o objeto `const es: Translations = { ... }`.
3. Coloca em `translations`: `{ pt, en, ru, es }`.
4. Adiciona uma entrada em `LOCALES`.
5. Adiciona o item no array `FLAGS` em [`src/components/Nav.tsx`](src/components/Nav.tsx).
6. Adiciona no `HTML_LANG` em [`src/i18n/LanguageContext.tsx`](src/i18n/LanguageContext.tsx).

---

## Onde editar conteúdo real (PLACEHOLDER)

Tudo marcado com `// PLACEHOLDER (xx):` em [`src/i18n/translations.ts`](src/i18n/translations.ts).

| Seção                | O que substituir                                                  |
| -------------------- | ----------------------------------------------------------------- |
| `hero.intro`         | Linha curta de introdução (1–2 frases)                            |
| `about.bio`          | Parágrafo da bio                                                  |
| `interests.items`    | Array de tags                                                     |
| `timeline.entries`   | Array de marcos da carreira (year/title/place/desc)               |
| `contact.email`      | E-mail real                                                       |
| `contact.phone`      | Telefone real                                                     |
| `contact.links`      | URLs reais (github, linkedin, x.com, rss…)                        |

**Importante:** edite cada idioma separadamente, na seção dele. Não automatize — o
diferencial do site é parecer escrito por uma pessoa real em três idiomas.

### Repos no `/projects`

Os repos são hardcoded em [`src/pages/Projects.tsx`](src/pages/Projects.tsx) (constante `REPOS`):
nome, linguagem, cor da bolinha, stars, forks, link.

As **descrições** dos repos ficam em `t.projects.descriptions[<nome-do-repo>]`
no [`translations.ts`](src/i18n/translations.ts). Pra adicionar um repo novo:

1. Acrescenta um objeto na constante `REPOS` em `Projects.tsx`.
2. Adiciona uma chave com o mesmo nome dentro de `descriptions` nos **três idiomas**.

---

## Decisões de arquitetura

- **Sem libs de UI**: o site é pequeno o suficiente pra justificar CSS puro. Adicionar
  Tailwind, MUI, shadcn quebra a estética e pesa o bundle por nada.
- **Sem libs de i18n**: 3 idiomas, conteúdo plano, sem pluralização complexa, sem
  formatação de datas. `react-intl` ou `i18next` seriam canhão pra mosquito.
- **Single CSS file**: Tudo em [`src/styles.css`](src/styles.css). Mais fácil de
  manter coerência visual quando dá pra ver tudo em uma tela.
- **Cor accent única**: Disciplina visual. Se tudo é destaque, nada é destaque.
- **Sem cantos arredondados / sombras**: Brutalismo é compromisso, não estilo de
  marketing. Manter a regra mesmo quando a tentação for grande.
- **`localStorage` em vez de cookies**: Não é dado sensível. Não há SSR. Simples.
- **`<html lang>` atualiza no troca de idioma**: Acessibilidade real (leitores
  de tela trocam o sotaque).

---

## Deploy

O `npm run build` gera `dist/`. Esse diretório é estático puro — funciona em
qualquer hospedagem de site estático:

- **Vercel**: `vercel --prod` (auto-detecta Vite). Para SPA routing,
  já vem ok porque o Vercel trata client-side routing por padrão.
- **Netlify**: build command `npm run build`, publish `dist`.
  Adicionar um `_redirects` com `/* /index.html 200` se 404 nas rotas.
- **GitHub Pages**: precisa setar `base` no `vite.config.ts`
  pra `/<nome-do-repo>/`. Pra rotas client-side funcionarem,
  trocar `BrowserRouter` por `HashRouter`.
- **Cloudflare Pages / Render / Surge**: tudo igual — pasta `dist`.

---

## Checklist antes de mostrar pra um recrutador

- [ ] Trocar todos os `PLACEHOLDER` em [`src/i18n/translations.ts`](src/i18n/translations.ts) (nos **três** idiomas).
- [ ] Trocar URLs dos repos em [`src/pages/Projects.tsx`](src/pages/Projects.tsx) e dos links em `contact.links`.
- [ ] Subir os repos pro GitHub e atualizar stars/forks pros números reais.
- [ ] Verificar que cada idioma soa natural (não traduzido por máquina).
- [ ] Testar em mobile, tablet, desktop wide.
- [ ] `npm run build` sem warnings.
- [ ] Lighthouse > 95 em todas as categorias (deve passar fácil — o site é minúsculo).

---

## Licença

MIT. Faça o que quiser. Se reusar o template, seria legal um crédito.

---

```
$ exit
logout
```
