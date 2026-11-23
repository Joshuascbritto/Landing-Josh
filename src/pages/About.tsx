import { Fragment, useEffect, useState } from 'react'
import { useTranslation } from '../i18n/LanguageContext'
import type { Translations } from '../i18n/translations'

const styleDelay = (ms: number) => ({ animationDelay: `${ms}ms` })

// Merges both career tracks into one chronological list (newest first) so the
// two columns share the same rows — a year on the left always sits above an
// earlier year on the right.
function timelineRows(timeline: Translations['timeline']) {
  return [
    ...timeline.work.map((e) => ({ ...e, isWork: true })),
    ...timeline.education.map((e) => ({ ...e, isWork: false })),
  ].sort((a, b) => Number(b.year) - Number(a.year))
}

// Skills split by how much evidence backs them: "proficient" = used at work or
// in a shipped project; "familiar" = studied, no project to point at yet.
// Group keys (lang/fw/devops/data) are code-style labels, not translated.
// Dot colors follow GitHub linguist (same palette as Projects.tsx).
interface Skill {
  name: string
  color?: string
}

interface SkillGroup {
  key: string
  items: Skill[]
}

const PROFICIENT: SkillGroup[] = [
  {
    key: 'lang',
    items: [
      { name: 'PHP',        color: '#4F5D95' },
      { name: 'Python',     color: '#3572A5' },
      { name: 'C#',         color: '#178600' },
      { name: 'SQL',        color: '#e38c00' },
      { name: 'TypeScript', color: '#3178c6' },
      { name: 'JavaScript', color: '#f1e05a' },
    ],
  },
  {
    key: 'fw',
    items: [{ name: '.NET' }, { name: 'Laravel' }, { name: 'React' }, { name: 'Next.js' }, { name: 'Fastify' }],
  },
  {
    key: 'devops',
    items: [{ name: 'Docker' }, { name: 'Kubernetes (k3s)' }, { name: 'Linux' }, { name: 'Git' }, { name: 'Vercel' }],
  },
  {
    key: 'data',
    items: [{ name: 'PostgreSQL' }, { name: 'Redis' }, { name: 'Supabase' }],
  },
]

const FAMILIAR: SkillGroup[] = [
  {
    key: 'lang',
    items: [
      { name: 'Shell', color: '#89e051' },
      { name: 'C',     color: '#555555' },
      { name: 'C++',   color: '#f34b7d' },
      { name: 'Rust',  color: '#dea584' },
    ],
  },
]

// Interests beyond this count sit behind a "show all" toggle.
const INTERESTS_VISIBLE = 6

function SkillTier({ label, groups }: { label: string; groups: SkillGroup[] }) {
  return (
    <div className="skill-tier">
      <h3 className="skill-tier-title">{label}</h3>
      {groups.map((g) => (
        <div key={g.key} className="skill-row">
          <span className="skill-key">{g.key}</span>
          <ul className="langs">
            {g.items.map((l) => (
              <li key={l.name} className="lang-cell">
                {l.color && (
                  <span className="lang-dot" style={{ background: l.color }} aria-hidden="true" />
                )}
                {l.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export function About() {
  const { t, locale } = useTranslation()
  const [activeInterest, setActiveInterest] = useState<number | null>(null)
  const [showAllInterests, setShowAllInterests] = useState(false)

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
        <div className="hero-stack stagger" style={styleDelay(270)}>
          {t.hero.stack}
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
          <SkillTier label={t.languages.proficient} groups={PROFICIENT} />
          <SkillTier label={t.languages.familiar} groups={FAMILIAR} />
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
          <p className="interests-hint" aria-hidden="true">
            <span className="interests-hint-prompt">›</span>
            {t.interests.hint}
          </p>
          <ul className="tags">
            {t.interests.items.map((item, i) => {
              if (!showAllInterests && i >= INTERESTS_VISIBLE && i !== activeInterest) return null
              const isActive = i === activeInterest
              return (
                <li key={item.name}>
                  <button
                    type="button"
                    className={'tag' + (isActive ? ' is-active' : '')}
                    onClick={() => setActiveInterest(isActive ? null : i)}
                    aria-expanded={isActive}
                    aria-controls="interest-detail"
                    title={t.interests.hint}
                  >
                    <span className="tag-bracket">[</span>
                    {item.name}
                    <span className="tag-toggle" aria-hidden="true">
                      {isActive ? '−' : '+'}
                    </span>
                    <span className="tag-bracket">]</span>
                  </button>
                </li>
              )
            })}
            {t.interests.items.length > INTERESTS_VISIBLE && (
              <li>
                <button
                  type="button"
                  className="tag tag-more"
                  onClick={() => setShowAllInterests((v) => !v)}
                  aria-expanded={showAllInterests}
                >
                  {showAllInterests
                    ? t.interests.showLess
                    : `${t.interests.showAll} (${t.interests.items.length})`}
                </button>
              </li>
            )}
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
          <div className="timeline-axis-heads">
            <h3 className="timeline-col-title">{t.timeline.workLabel}</h3>
            <span aria-hidden="true" />
            <h3 className="timeline-col-title">{t.timeline.eduLabel}</h3>
          </div>
          <ol className="timeline-axis">
            <li className="timeline-axis-rail" aria-hidden="true" />
            {timelineRows(t.timeline).map((row, i) => (
              <Fragment key={`${row.year}-${row.title}`}>
                <li
                  className="timeline-entry"
                  data-track={row.isWork ? 'work' : 'edu'}
                  style={{ gridRow: i + 1 }}
                >
                  <span className="timeline-track">
                    {row.isWork ? t.timeline.workLabel : t.timeline.eduLabel}
                  </span>
                  <h4 className="timeline-title">
                    {row.title}
                    <span className="timeline-place">{row.place}</span>
                  </h4>
                  <p className="timeline-desc">{row.desc}</p>
                  {row.bullets && (
                    <ul className="timeline-bullets">
                      {row.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </li>
                <li className="timeline-axis-year" style={{ gridRow: i + 1 }}>
                  {row.year}
                </li>
              </Fragment>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}
