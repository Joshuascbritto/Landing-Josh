import { Route, Routes } from 'react-router-dom'
import { Nav } from './components/Nav'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'
import { useTranslation } from './i18n/LanguageContext'

export default function App() {
  const { t } = useTranslation()
  return (
    <div className="app">
      <div className="bg-grain" aria-hidden="true" />
      <div className="bg-scanlines" aria-hidden="true" />
      <Nav />
      <main className="main">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* anything else: render About */}
          <Route path="*" element={<About />} />
        </Routes>
      </main>
      <footer className="footer">
        <span>{t.footer.copyright}</span>
        <span>{t.footer.builtWith}</span>
      </footer>
    </div>
  )
}
