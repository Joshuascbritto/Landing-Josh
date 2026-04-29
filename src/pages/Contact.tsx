import { useTranslation } from '../i18n/LanguageContext'

const styleDelay = (ms: number) => ({ animationDelay: `${ms}ms` })

const sanitizeTel = (v: string) => v.replace(/[^\d+]/g, '')

export function Contact() {
  const { t } = useTranslation()
  const c = t.contact
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
                <a href={`mailto:${c.email}`}>{c.email}</a>
              </dd>
            </div>

            <div className="contact-row stagger" style={styleDelay(280)}>
              <dt className="contact-key">{c.phoneLabel}</dt>
              <dd className="contact-val">
                <a href={`tel:${sanitizeTel(c.phone)}`}>{c.phone}</a>
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
    </div>
  )
}
