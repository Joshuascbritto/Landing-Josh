import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from '../i18n/LanguageContext'
import type { Locale } from '../i18n/translations'

const FlagBR = (
  <svg viewBox="0 0 700 490" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="700" height="490" fill="#009c3b" />
    <polygon points="350,40 660,245 350,450 40,245" fill="#ffdf00" />
    <circle cx="350" cy="245" r="90" fill="#002776" />
  </svg>
)

const FlagUS = (
  <svg viewBox="0 0 7410 3900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="7410" height="3900" fill="#b22234" />
    <g fill="#fff">
      <rect y="300" width="7410" height="300" />
      <rect y="900" width="7410" height="300" />
      <rect y="1500" width="7410" height="300" />
      <rect y="2100" width="7410" height="300" />
      <rect y="2700" width="7410" height="300" />
      <rect y="3300" width="7410" height="300" />
    </g>
    <rect width="2964" height="2100" fill="#3c3b6e" />
  </svg>
)

const FlagRU = (
  <svg viewBox="0 0 9 6" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="9" height="2" fill="#fff" />
    <rect y="2" width="9" height="2" fill="#0039a6" />
    <rect y="4" width="9" height="2" fill="#d52b1e" />
  </svg>
)

const FLAGS: { code: Locale; svg: ReactNode; label: string }[] = [
  { code: 'pt', svg: FlagBR, label: 'Português (Brasil)' },
  { code: 'en', svg: FlagUS, label: 'English (United States)' },
  { code: 'ru', svg: FlagRU, label: 'Русский' },
]

const tabClass = ({ isActive }: { isActive: boolean }) =>
  'nav-tab' + (isActive ? ' is-active' : '')

export function Nav() {
  const { t, locale, setLocale } = useTranslation()
  return (
    <header className="nav">
      <div className="nav-inner">
        {/* Decorative terminal prompt — NOT translated, on purpose. */}
        <span className="nav-prompt" aria-hidden="true">
          joshua@portfolio:~/$
        </span>

        <nav className="nav-tabs" aria-label="primary">
          <NavLink to="/" end className={tabClass}>
            {t.nav.about}
          </NavLink>
          <NavLink to="/projects" className={tabClass}>
            {t.nav.projects}
          </NavLink>
          <NavLink to="/contact" className={tabClass}>
            {t.nav.contact}
          </NavLink>
        </nav>

        <div className="nav-langs" role="group" aria-label="language">
          {FLAGS.map((f) => (
            <button
              key={f.code}
              type="button"
              className={'flag' + (locale === f.code ? ' is-active' : '')}
              aria-label={f.label}
              aria-pressed={locale === f.code}
              onClick={() => setLocale(f.code)}
            >
              <span aria-hidden="true">{f.svg}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
