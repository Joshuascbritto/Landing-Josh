import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { translations, type Locale, type Translations } from './translations'

const STORAGE_KEY = 'joshua.locale'

const HTML_LANG: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en',
  ru: 'ru',
}

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

// Maps the browser's language preferences to a site locale.
// `prefs` is navigator.languages, ordered by the visitor's preference,
// e.g. ['en-US', 'ru', 'pt-BR']. Must return 'en' when nothing matches.
function detectLocale(prefs: readonly string[]): Locale {
  // First supported language in preference order wins, so ['en-US', 'ru']
  // stays English while ['de-DE', 'ru'] lands on Russian.
  for (const tag of prefs) {
    const base = tag.toLowerCase().split('-')[0]
    if (base === 'en' || base === 'pt' || base === 'ru') return base
  }
  return 'en'
}

function readInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'pt' || stored === 'en' || stored === 'ru') return stored
  } catch {
    // localStorage may be blocked; fall through to detection
  }
  const prefs = navigator.languages?.length ? navigator.languages : [navigator.language]
  return detectLocale(prefs)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(readInitialLocale)

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[locale]
    document.title = translations[locale].meta.title
    const desc = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (desc) desc.content = translations[locale].meta.description
    try {
      window.localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // localStorage may be blocked; ignore
    }
  }, [locale])

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: translations[locale] }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useTranslation(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation must be used inside <LanguageProvider>')
  return ctx
}
