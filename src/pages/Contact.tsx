import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from '../i18n/LanguageContext'

const styleDelay = (ms: number) => ({ animationDelay: `${ms}ms` })

const TOAST_MS = 2000

async function copyToClipboard(value: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value)
      return
    } catch {
      // fall through to legacy path
    }
  }
  const ta = document.createElement('textarea')
  ta.value = value
  ta.setAttribute('readonly', '')
  ta.style.position = 'fixed'
  ta.style.opacity = '0'
  document.body.appendChild(ta)
  ta.select()
  try {
    document.execCommand('copy')
  } catch {
    // best-effort; nothing else to do
  }
  ta.remove()
}

export function Contact() {
  const { t } = useTranslation()
  const c = t.contact
  const [toastId, setToastId] = useState<number | null>(null)

  useEffect(() => {
    if (toastId === null) return
    const timer = window.setTimeout(() => setToastId(null), TOAST_MS)
    return () => window.clearTimeout(timer)
  }, [toastId])

  const copy = useCallback((value: string) => {
    void copyToClipboard(value).then(() => setToastId(Date.now()))
  }, [])

  return (
    <div className="page page-contact">
      <section className="block stagger" style={styleDelay(40)}>
        <aside className="block-rail">
          <span className="block-label">{c.label}</span>
        </aside>

        <div className="block-body">
          <header className="block-head">
            <h2 className="block-title">{c.heading}</h2>
            <span className="block-rule" aria-hidden="true" />
          </header>

          <h1 className="contact-h1 stagger" style={styleDelay(120)}>
            {c.title}
            <span className="cursor-blink" aria-hidden="true">_</span>
          </h1>

          <dl className="contact-list">
            <div className="contact-row stagger" style={styleDelay(200)}>
              <dt className="contact-key">{c.emailLabel}</dt>
              <dd className="contact-val">
                <button
                  type="button"
                  className="contact-copy"
                  onClick={() => copy(c.email)}
                  title={c.email}
                >
                  {c.email}
                </button>
              </dd>
            </div>

            <div className="contact-row stagger" style={styleDelay(280)}>
              <dt className="contact-key">{c.phoneLabel}</dt>
              <dd className="contact-val">
                <a
                  className="contact-copy"
                  href={`https://wa.me/${c.phone.replace(/\D/g, '')}?text=${encodeURIComponent(c.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={c.whatsappLabel}
                >
                  {c.phone}
                </a>
              </dd>
            </div>

            <div className="contact-row stagger" style={styleDelay(360)}>
              <dt className="contact-key">{c.linksLabel}</dt>
              <dd className="contact-val">
                <ul className="contact-links">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>

          <p className="contact-closing stagger" style={styleDelay(440)}>
            {c.closing}
          </p>
        </div>
      </section>

      {toastId !== null && (
        <div
          key={toastId}
          className="copy-toast"
          role="status"
          aria-live="polite"
        >
          <span className="copy-toast-prompt" aria-hidden="true">›</span>
          <span>{c.copied}</span>
        </div>
      )}
    </div>
  )
}
