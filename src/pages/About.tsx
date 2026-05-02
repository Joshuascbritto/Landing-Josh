import { useEffect, useState } from 'react'
import { useTranslation } from '../i18n/LanguageContext'

const styleDelay = (ms: number) => ({ animationDelay: `${ms}ms` })

// PLACEHOLDER: lista de linguagens. Remova as que você não usa de fato.
// Cores seguem o padrão linguist do GitHub (mesmo usado em Projects.tsx).
interface Lang {
  name: string
  color: string
}

const LANGS: Lang[] = [
  { name: 'PHP',        color: '#4F5D95' },
  { name: 'Python',     color: '#3572A5' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'JavaScript', color: '#f1e05a' },
  { name: 'Rust',       color: '#dea584' },
  { name: 'C',          color: '#555555' },
  { name: 'C++',        color: '#f34b7d' },
  { name: 'C#',         color: '#178600' },
  { name: 'Shell',      color: '#89e051' },
  { name: 'SQL',        color: '#e38c00' },
]

export function About() {
  const { t, locale } = useTranslation()
  const [activeInterest, setActiveInterest] = useState<number | null>(null)

  // Reset selection when locale changes — items array reorders are unlikely
  // but the description text would otherwise mismatch the highlighted tag.
  useEffect(() => { setActiveInterest(null) }, [locale])

  // Esc closes the detail panel.
  useEffect(() => {
    if (activeInterest === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveInterest(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeInterest])

  const active = activeInterest !== null ? t.interests.items[activeInterest] : null

  return (
    <div className="page page-about">
      {/* HERO ---------------------------------------------------- */}
      <section className="hero">
        <div className="hero-kicker stagger" style={styleDelay(40)}>
          {t.hero.kicker}
        </div>
        <h1 className="hero-title stagger" style={styleDelay(120)}>
          {t.hero.title}
          <span className="cursor-blink" aria-hidden="true">_</span>
        </h1>
        <div className="hero-subtitle stagger" style={styleDelay(220)}>
          <span className="hero-arrow" aria-hidden="true">›</span>
          {t.hero.subtitle}
        </div>
        <p className="hero-intro stagger" style={styleDelay(320)}>
          {t.hero.intro}
        </p>
        <div className="hero-meta stagger" style={styleDelay(420)}>
          <span className="hero-meta-item">
            <span className="k">{t.hero.statusLabel}:</span>
            <span className="v">{t.hero.statusValue}</span>
          </span>
          <span className="hero-meta-sep" aria-hidden="true">//</span>
          <span className="hero-meta-item">
            <span className="k">{t.hero.locationLabel}:</span>
            <span className="v">{t.hero.locationValue}</span>
          </span>
          <span className="hero-meta-sep" aria-hidden="true">//</span>
          <span className="hero-meta-item">
            <span className="k">{t.hero.languagesLabel}:</span>
            <span className="v">{t.hero.languagesValue}</span>
          </span>
        </div>
      </section>

      {/* LANGUAGES (programming) -------------------------------- */}
      <section className="block stagger" style={styleDelay(500)}>
        <aside className="block-rail">
          <span className="block-label">{t.languages.label}</span>
        </aside>
        <div className="block-body">
          <header className="block-head">
            <h2 className="block-title">{t.languages.heading}</h2>
            <span className="block-rule" aria-hidden="true" />
          </header>
          <ul className="langs">
            {LANGS.map((l) => (
              <li key={l.name} className="lang-cell">
                <span
                  className="lang-dot"
                  style={{ background: l.color }}
                  aria-hidden="true"
                />
                {l.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ABOUT -------------------------------------------------- */}
      <section className="block stagger" style={styleDelay(580)}>
        <aside className="block-rail">
          <span className="block-label">{t.about.label}</span>
        </aside>
        <div className="block-body">
          <header className="block-head">
            <h2 className="block-title">{t.about.heading}</h2>
            <span className="block-rule" aria-hidden="true" />
          </header>
          <p className="prose">{t.about.bio}</p>
        </div>
      </section>

      {/* INTERESTS ---------------------------------------------- */}
      <section className="block stagger" style={styleDelay(660)}>
        <aside className="block-rail">
          <span className="block-label">{t.interests.label}</span>
        </aside>
        <div className="block-body">
          <header className="block-head">
            <h2 className="block-title">{t.interests.heading}</h2>
            <span className="block-rule" aria-hidden="true" />
          </header>
          <ul className="tags">
            {t.interests.items.map((item, i) => (
              <li key={item.name}>
                <button
                  type="button"
                  className={'tag' + (i === activeInterest ? ' is-active' : '')}
                  onClick={() => setActiveInterest(i === activeInterest ? null : i)}
                  aria-expanded={i === activeInterest}
                  aria-controls="interest-detail"
                >
                  <span className="tag-bracket">[</span>
                  {item.name}
                  <span className="tag-bracket">]</span>
                </button>
              </li>
            ))}
          </ul>

          {active && (
            <div id="interest-detail" className="interest-detail" role="region" aria-live="polite">
              <div className="interest-detail-head">
                <span className="interest-detail-prompt" aria-hidden="true">›</span>
                <h3 className="interest-detail-title">{active.name}</h3>
              </div>
              <p className="interest-detail-text">
                {active.description || t.interests.empty}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* TIMELINE ----------------------------------------------- */}
      <section className="block stagger" style={styleDelay(740)}>
        <aside className="block-rail">
          <span className="block-label">{t.timeline.label}</span>
        </aside>
        <div className="block-body">
          <header className="block-head">
            <h2 className="block-title">{t.timeline.heading}</h2>
            <span className="block-rule" aria-hidden="true" />
          </header>
          <ol className="timeline">
            {t.timeline.entries.map((entry, i) => (
              <li key={i} className="timeline-row">
                <span className="timeline-year">{entry.year}</span>
                <div>
                  <h3 className="timeline-title">
                    {entry.title}
                    <span className="timeline-place">{entry.place}</span>
                  </h3>
                  <p className="timeline-desc">{entry.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}
