import { useTranslation } from '../i18n/LanguageContext'

// PLACEHOLDER: hardcoded repo metadata. Replace with real GitHub
// usernames / URLs / numbers when you wire this up. Repo NAMES are
// kept in English (they are code identifiers, not translatable).
interface Repo {
  name: string
  language: string
  langColor: string
  stars: number
  forks: number
  href: string
}

const REPOS: Repo[] = [
  {
    name: 'project-alpha',
    language: 'Python',
    langColor: '#3572A5',
    stars: 42,
    forks: 8,
    href: 'https://github.com/joshua/project-alpha',
  },
  {
    name: 'voxel-engine',
    language: 'Rust',
    langColor: '#dea584',
    stars: 128,
    forks: 23,
    href: 'https://github.com/joshua/voxel-engine',
  },
  {
    name: 'dotfiles',
    language: 'Shell',
    langColor: '#89e051',
    stars: 15,
    forks: 3,
    href: 'https://github.com/joshua/dotfiles',
  },
  {
    name: 'portfolio-site',
    language: 'TypeScript',
    langColor: '#3178c6',
    stars: 7,
    forks: 1,
    href: 'https://github.com/joshua/portfolio-site',
  },
  {
    name: 'ml-from-scratch',
    language: 'Python',
    langColor: '#3572A5',
    stars: 89,
    forks: 14,
    href: 'https://github.com/joshua/ml-from-scratch',
  },
]

const styleDelay = (ms: number) => ({ animationDelay: `${ms}ms` })

export function Projects() {
  const { t } = useTranslation()
  return (
    <div className="page page-projects">
      <section className="block stagger" style={styleDelay(40)}>
        <aside className="block-rail">
          <span className="block-label">{t.projects.label}</span>
        </aside>
        <div className="block-body">
          <header className="block-head">
            <h2 className="block-title">{t.projects.heading}</h2>
            <span className="block-rule" aria-hidden="true" />
          </header>

          <p className="prose" style={{ marginBottom: '2rem' }}>
            {t.projects.intro}
          </p>

          <ul className="repos">
            {REPOS.map((r, i) => (
              <li
                key={r.name}
                className="repo stagger"
                style={styleDelay(120 + i * 70)}
              >
                <div className="repo-head">
                  <span className="repo-prompt" aria-hidden="true">$</span>
                  <h3 className="repo-name">{r.name}</h3>
                  <span className="repo-ext" aria-hidden="true">.git</span>
                </div>

                <p className="repo-desc">
                  {t.projects.descriptions[r.name]}
                </p>

                <div className="repo-meta">
                  <span className="repo-lang">
                    <span
                      className="repo-lang-dot"
                      style={{ background: r.langColor }}
                      aria-hidden="true"
                    />
                    {r.language}
                  </span>
                  <span className="repo-stat">
                    <span className="repo-stat-num">{r.stars}</span>
                    {t.projects.stars}
                  </span>
                  <span className="repo-stat">
                    <span className="repo-stat-num">{r.forks}</span>
                    {t.projects.forks}
                  </span>
                  <a
                    className="repo-link"
                    href={r.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    → {t.projects.viewOnGithub}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
