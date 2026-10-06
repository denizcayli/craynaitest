import Typewriter from '../components/Typewriter.jsx'

// Slogans typed one after another in the heading.
const SLOGANS = [
  'Hazır kalıp değil,\nişinize özel zeka.',
  'Yerli akıl.\nSize özel sistem.',
  'Sizin verinizle düşünen,\nsizin işinize göre çalışan.',
]

const POINTS = [
  {
    title: 'Hazır Kalıp Yok',
    text: 'Her sistemi sizin verinize, sürecinize ve hedefinize göre sıfırdan kurgularız.',
  },
  {
    title: 'Gerçek İş Akışına Uyum',
    text: 'Teknik bir gösteri değil; ekibinizin her gün gerçekten kullandığı çözümler.',
  },
  {
    title: 'Sizinle Büyüyen Mimari',
    text: 'Artan veri ve operasyon yükünü taşıyan, ölçeklenebilir sağlam altyapı.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 px-6 bg-[#0a0a0a] border-y border-[#1a1a1a] relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
          <Typewriter texts={SLOGANS} />
        </h2>
        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-300">
          Crayn AI, yapay zekayı vitrine koyan değil, işin tam ortasına yerleştiren yerli bir yazılım şirketidir. Creodive'ın yıllara dayanan saha deneyiminden, kullanıcı deneyimi, veri analizi ve yazılım geliştirme birikiminden doğdu.
        </p>
        <p className="mt-5 max-w-3xl mx-auto text-lg leading-relaxed text-gray-400">
          Kurduğumuz sistemler birer teknik araç değil; şirketinizin gerçek iş akışına uyan, kullanılabilir ve ölçeklenebilir yazılım altyapılarıdır.
        </p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {POINTS.map((point) => (
            <div key={point.title} className="p-6 md:p-7 border border-[#222] rounded-2xl bg-[#050505]">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
                {point.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
