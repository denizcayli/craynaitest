import BentoGrid from '../components/BentoGrid.jsx'
import HandWrite from '../components/HandWrite.jsx'

const photo = (id) => `https://images.unsplash.com/photo-${id}?q=80&w=1200&auto=format&fit=crop`

const SOLUTIONS = [
  {
    title: 'AI Agent Geliştirme',
    text: 'Şirketinize özel, otonom kararlar alabilen, veri okuyup aksiyona geçen yapay zeka personelleri inşa ediyoruz.',
    image: photo('1674027444485-cec3da58eef4'), // glowing neural-network brain
  },
  {
    title: 'AI Chatbox Sistemleri',
    text: "Müşterilerinizi tanıyan, lead'leri toplayıp CRM'inize doğrudan bağlayan akıllı iletişim sistemleri.",
    image: photo('1577563908411-5077b6dc7624'), // speech bubble with typing dots
  },
  {
    title: 'Otomasyon & Orkestrasyon',
    text: 'İş akışlarını ve API bağlantılarını hatasız, insansız ve otonom bir şekilde çalıştıran altyapılar.',
    image: photo('1537462715879-360eeb61a0ad'), // interlocking machine gears
  },
  {
    title: 'Karar Destek Sistemleri',
    text: 'Saha ve CRM verilerini yöneticilerin anlık okuyabileceği akıllı analitik tablolara dönüştürürüz.',
    image: photo('1542744094-3a31f272c490'), // person working at monitors showing a business dashboard
  },
  {
    title: 'Kurumsal Entegrasyon',
    text: 'Operasyon departmanları arası bilgi kopukluğunu yapay zeka entegrasyonuyla ortadan kaldırıyoruz.',
    image: photo('1544197150-b99a580bb7a8'), // network cables in a patch panel
  },
  {
    title: 'Üretken Çözümler',
    text: 'Tamamen işletmenize özel LLM modelleri ve güvenlik duvarlarıyla örülü akıllı yazılım mimarileri kuruyoruz.',
    image: photo('1526374965328-7f61d4dc18c5'), // streams of green code
  },
].map((item, index) => ({ ...item, label: String(index + 1).padStart(2, '0'), color: '#0d0d10', cover: true }))

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 md:py-32 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
            <HandWrite text="Neler Yapıyoruz?" />
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Yapay zekanın ve otomasyonun sınırlarını zorlayarak işletmenizi geleceğe taşıyan otonom sistemler ve kullanıcı merkezli deneyimler tasarlıyoruz.
          </p>
        </div>
        <BentoGrid items={SOLUTIONS} />
      </div>
    </section>
  )
}
