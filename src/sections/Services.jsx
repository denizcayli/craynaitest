import ExpandingCards from '../components/ExpandingCards.jsx'
import HandWrite from '../components/HandWrite.jsx'
import { withBase } from '../lib/paths.js'

const photo = (id) => `https://images.unsplash.com/photo-${id}?q=80&w=1600&auto=format&fit=crop`

const SERVICES = [
  {
    label: 'ÇÖZÜMLER',
    title: 'Web Çözümleri',
    href: withBase('/hizmetler/web-cozumleri'),
    tags: ['UI/UX', 'Tasarım', 'Landing Page', 'Yazılım', 'Hosting'],
    text: 'Estetik tasarımı güçlü bir kullanıcı deneyimiyle birleştiriyoruz. Tasarımdan geliştirmeye kadar tüm süreçlerde, markanızın dijital dünyada daha görünür, etkili ve akılda kalıcı olmasını sağlıyoruz.',
    image: photo('1547658719-da2b51169166'), // code beside a landing-page design
    color: '#191919',
  },
  {
    label: 'STRATEJİ',
    title: 'Dijital Pazarlama',
    href: withBase('/hizmetler/dijital-pazarlama'),
    tags: ['SEO', 'GEO', 'Google Ads ( SEM )', 'Performans Pazarlama'],
    text: 'Doğru hedef kitleye, doğru kanalda ve etkili bir mesajla ulaşmanız için dijital pazarlama süreçlerinizi stratejik bir yaklaşımla yönetiyoruz. Veri odaklı planlama ve yaratıcı içeriklerle markanızın dijital performansını güçlendiriyoruz.',
    image: photo('1460925895917-afdab827c52f'), // analytics dashboard
    color: '#b01c68',
  },
  {
    label: 'YARATICILIK',
    title: 'Kreatif & İçerik',
    href: withBase('/hizmetler/kreatif-icerik'),
    tags: ['Marka Kimliği', 'Video & Fotoğraf', 'Grafik Tasarım'],
    text: 'Markanızın hikayesini doğru ton, güçlü fikir ve yaratıcı içeriklerle anlatıyoruz. Hedef kitlenizin ilgisini çeken, marka kimliğinizi yansıtan ve dijitalde etki yaratan içeriklerle iletişiminizi güçlendiriyoruz.',
    image: photo('1561070791-2526d30994b5'), // colour swatches and design sketches
    color: '#2e1065',
  },
  {
    label: 'ETKİLEŞİM',
    title: 'Sosyal Medya',
    href: withBase('/hizmetler/sosyal-medya'),
    tags: ['Topluluk Yönetimi', 'Kreatif İçerik', 'SM Reklamları'],
    text: 'Markanızın sosyal medyada görünür, anlaşılır ve akılda kalıcı olmasını sağlıyoruz. Hedef kitlenize uygun stratejiler ve yaratıcı içeriklerle etkileşimi güçlendiren, sürdürülebilir bir sosyal medya yönetimi sunuyoruz.',
    image: photo('1573152143286-0c422b4d2175'), // row of people scrolling on their phones
    color: '#0a2540',
  },
  {
    label: 'GELECEK',
    title: 'AI Danışmanlığı',
    href: withBase('/hizmetler/ai-danismanligi'),
    tags: ['AI Agent', 'LLM Entegrasyonu', 'Otomasyon'],
    text: 'Şirketlerin iş akışlarını analiz ederek süreçleri üretken yapay zeka entegrasyonu, akıllı yapay zeka ajanları ve otonom iş akışı orkestrasyonları ile geleceğe taşıyoruz.',
    image: photo('1655720828018-edd2daec9349'), // abstract network of connected nodes
    color: '#1e1b4b',
  },
  {
    label: 'MÜHENDİSLİK',
    title: 'Özel Yazılım',
    href: withBase('/hizmetler/ozel-yazilim'),
    tags: ['Özel API', 'Enterprise Web', 'Veri Yönetimi'],
    text: 'Hazır şablonlar kullanmıyoruz. Tamamen işletmenizin veri ve operasyon yapısına özel, ölçeklenebilir, güvenli ve yüksek performanslı yazılım altyapıları kuruyoruz.',
    image: photo('1461749280684-dccba630e2f6'), // source code
    color: '#064e3b',
  },
].map((item, index) => ({ ...item, number: String(index + 1).padStart(2, '0') }))

// On wide screens the section is exactly one viewport tall, so the heading and the cards stay
// on screen together while the cards step through on scroll.
export default function Services() {
  return (
    <section id="services" className="w-full bg-[#e6ebf2] text-graphite px-6 md:px-12 py-24 md:h-screen md:min-h-[560px] md:pt-24 md:pb-8">
      <div className="max-w-[1600px] mx-auto md:h-full md:flex md:flex-col">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-7">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 md:mb-3">
            <HandWrite text="Hizmetler" />
          </h2>
          <p className="text-slate-brand text-lg leading-relaxed">
            Yapay zeka odaklı dönüşümden, özel yazılım çözümlerine kadar işletmenizin ihtiyaç duyduğu tüm dijital katmanları inşa ediyoruz.
          </p>
        </div>
        <ExpandingCards items={SERVICES} scrollLength="+=150%" className="md:flex-1 md:min-h-0" />
      </div>
    </section>
  )
}
