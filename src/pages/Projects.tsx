import { useTranslation } from '../i18n/LanguageContext'

// Repo NAMES are kept in English (they are code identifiers, not translatable).
interface Repo {
  name: string
  language: string
  langColor: string
  stars: number
  forks: number
  href: string
  liveUrl: string
  imgSrc: string
}

const REPOS: Repo[] = [
  {
    name: 'Landing-Josh',
    language: 'TypeScript',
    langColor: '#3178c6',
    stars: 0,
    forks: 0,
    href: 'https://github.com/Joshuascbritto/Landing-Josh',
    liveUrl: 'https://landing-josh.vercel.app',
    imgSrc: '/projects/landing-josh.png',
  },
  {
    name: 'box-box',
    language: 'PHP',
    langColor: '#4F5D95',
    stars: 0,
    forks: 0,
    href: 'https://github.com/Joshuascbritto/box-box',
    liveUrl: 'https://github.com/Joshuascbritto/box-box',
    imgSrc: '/projects/box-box.png',
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
                <a
                  className="repo-thumb"
                  href={r.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${r.name} preview`}
                >
                  <img
                    src={r.imgSrc}
                    alt={`${r.name} preview`}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
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
