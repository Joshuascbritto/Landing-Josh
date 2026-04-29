import { NavLink } from 'react-router-dom'
import { useTranslation } from '../i18n/LanguageContext'
import type { Locale } from '../i18n/translations'

const FLAGS: { code: Locale; emoji: string; label: string }[] = [
  { code: 'pt', emoji: '🇧🇷', label: 'Português (Brasil)' },
  { code: 'en', emoji: '🇺🇸', label: 'English (United States)' },
  { code: 'ru', emoji: '🇷🇺', label: 'Русский' },
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
              <span aria-hidden="true">{f.emoji}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
