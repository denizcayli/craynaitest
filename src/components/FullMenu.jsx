import AuroraFlow from './AuroraFlow.jsx'
import SocialLinks from './SocialLinks.jsx'

const LINKS = [
  { label: 'Ana Sayfa', href: '/#' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Crayn AI Nedir?', href: '/#services' },
  { label: 'Üretken AI', href: '/#services' },
  { label: 'Hizmetler', href: '/#services' },
  { label: 'Neler Yapıyoruz', href: '/#solutions' },
  { label: 'İletişim', href: '/talep' },
]

// Profile addresses are not set yet.
const SOCIALS = [
  { icon: 'instagram', label: 'Instagram', href: '#' },
  { icon: 'x', label: 'Twitter', href: '#' },
  { icon: 'linkedin', label: 'LinkedIn', href: '#' },
]

// Full-screen menu: a dark sheet with slow ribbons of light flowing behind it, opening in a
// circle from the toggle. The links come
// in one after another out of a blur; pointing at one nudges it forward and dims the rest.
// Opening and closing are driven from lib/siteAnimations.js.
export default function FullMenu() {
  return (
    <div id="full-menu" className="menu-overlay" role="dialog" aria-modal="true" aria-label="Menü" style={{ display: 'none' }}>
      <AuroraFlow background="#05070a" color1="#7da3ff" color2="#33507f" intensity={0.42} speed={0.7} pointerSpeed={0.35} className="!fixed pointer-events-none" />
      <div className="menu-overlay__body">
        <nav aria-label="Ana menü">
          <ul className="menu-overlay__links">
            {LINKS.map((link, index) => (
              <li key={link.label} className="menu-list-item">
                <a href={link.href} className="menu-link-item">
                  <span className="menu-link-item__number">{String(index + 1).padStart(2, '0')}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="menu-overlay__info">
          <div className="menu-info-item">
            <span className="menu-overlay__caption">İletişim Kurun</span>
            <a href="mailto:hello@crayn.ai" className="menu-overlay__contact text-2xl md:text-3xl font-bold">
              hello@crayn.ai
              <span className="menu-overlay__underline" />
            </a>
            <a href="tel:05442407199" className="menu-overlay__contact mt-2 text-base font-semibold text-white/60">
              0544 240 71 99
              <span className="menu-overlay__underline" />
            </a>
          </div>
          <div className="menu-info-item">
            <span className="menu-overlay__caption">Merkez</span>
            <p className="max-w-[250px] leading-relaxed text-white/60">
              Bilişim Vadisi, Teknoloji Geliştirme Bölgesi, Kocaeli / Türkiye
            </p>
          </div>
          <div className="menu-info-item">
            <SocialLinks links={SOCIALS} />
          </div>
        </div>
      </div>
      <p className="menu-overlay__note menu-info-item">© 2026 Crayn AI</p>
    </div>
  )
}
