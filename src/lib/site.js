import { withBase } from './paths.js'

// Site-wide details and menus. Under WordPress the theme passes what is set in its settings
// page and in Appearance → Menus as window.CRAYN; whatever is left empty there keeps the
// value below.
const wp = window.CRAYN ?? {}

const DEFAULTS = {
  email: 'hello@crayn.ai',
  phone: '0544 240 71 99',
  address: 'Bilişim Vadisi, Teknoloji Geliştirme Bölgesi, Kocaeli / Türkiye',
  footerText: "Şirketlere özel AI agent'lar, otomasyon sistemleri ve üretken yapay zeka yazılımları geliştiriyoruz.",
  copyright: '© 2026 Crayn AI. Tüm hakları saklıdır.',
  footerNote: 'Bilişim Vadisi, Kocaeli · Yerli Yazılım Şirketi',
  menuNote: '© 2026 Crayn AI',
  instagram: '#',
  x: '#',
  linkedin: '#',
}

const filled = Object.fromEntries(Object.entries(wp.site ?? {}).filter(([, value]) => value))

export const SITE = { ...DEFAULTS, ...filled }
export const MAIL_HREF = `mailto:${SITE.email}`
export const PHONE_HREF = `tel:${SITE.phone.replace(/[^\d+]/g, '')}`

// Links of the full-screen menu.
export const MAIN_MENU = wp.menus?.main?.length ? wp.menus.main : [
  { label: 'Ana Sayfa', href: withBase('/#') },
  { label: 'Hakkımızda', href: withBase('/hakkimizda') },
  { label: 'Crayn AI Nedir?', href: withBase('/#services') },
  { label: 'Üretken AI', href: withBase('/#services') },
  { label: 'Hizmetler', href: withBase('/#services') },
  { label: 'Neler Yapıyoruz', href: withBase('/#solutions') },
  { label: 'İletişim', href: withBase('/talep') },
]

// Columns of the footer, each `{ title, links }`.
export const FOOTER_MENUS = wp.menus?.footer?.length ? wp.menus.footer : [
  {
    title: 'Crayn AI',
    links: [
      { label: 'Hizmetler', href: withBase('/#services') },
      { label: 'Neler Yapıyoruz', href: withBase('/#solutions') },
      { label: 'Hakkımızda', href: withBase('/hakkimizda') },
    ],
  },
  {
    title: 'Keşfet',
    links: [
      { label: 'İçerikler', href: withBase('/icerikler') },
      { label: 'Sıkça Sorulan Sorular', href: withBase('/#cta') },
    ],
  },
  {
    title: 'İletişim',
    links: [
      { label: 'Bize Ulaşın', href: withBase('/talep') },
      { label: SITE.email, href: MAIL_HREF },
      { label: SITE.phone, href: PHONE_HREF },
    ],
  },
]
