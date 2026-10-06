import HandWrite from '../components/HandWrite.jsx'
import ParallaxFixedImage from '../components/ParallaxFixedImage.jsx'

const photo = (id) => `https://images.unsplash.com/photo-${id}?q=80&w=2000&auto=format&fit=crop`

const ITEMS = [
  {
    number: '01',
    label: 'VERİ',
    title: 'Dağınık veri ve ölçümlenemeyen yapılar.',
    text: 'İşletmeniz müşteri görüşmelerinden veri topluyor ancak bunu merkezi ve takip edilebilir bir yapıya dönüştüremiyorsa sistem tıkanır.',
    image: photo('1526628953301-3e589a6a8b74'), // screens full of metrics and charts
  },
  {
    number: '02',
    label: 'OPERASYON',
    title: 'Manuel iş yükü ve yavaş karar alma.',
    text: 'Şirket içi koordinasyonu manuel tablolarla yürütmeye çalışmak, operasyonel hızı düşürür ve hata payını artırır.',
    image: photo('1454165804606-c3d57bc86b40'), // notes taken by hand beside laptops
  },
  {
    number: '03',
    label: 'SATIŞ',
    title: 'Takip edilemeyen potansiyel süreçler.',
    text: "Satış süreçlerinde lead'leri doğru yönetememek, gelire doğrudan yansıyan en büyük operasyonel eksikliktir.",
    image: photo('1596526131083-e8c633c948d2'), // unread badge on a mail app icon
  },
  {
    number: '04',
    label: 'ÇÖZÜM MİMARİSİ',
    title: 'Modüler AI ajanları, otomasyon ve özel yazılım.',
    text: 'Crayn AI, bu problemleri modüler AI ajanları, otomasyon ve özel yazılım gücüyle çözer.',
    image: photo('1518770660439-4636190af475'), // circuit board
  },
]

export default function Diagnostic() {
  return (
    <section id="diagnostic-section" className="w-full bg-black border-t border-gray-900 px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
            <HandWrite text={'Sistem Nerede\nDevreye Girer?'} breakClassName="md:hidden" />
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Her şirketin ihtiyacı, verisi ve operasyon yapısı farklıdır. Crayn AI, hazır kalıplar yerine kronik problemlere mühendislik odaklı çözümler üretir.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          {ITEMS.map((item) => (
            <ParallaxFixedImage key={item.number} image={item.image} overlay={0.5} className="h-[70vh] min-h-[420px] rounded-[1.75rem] text-white">
              <div className="flex h-full flex-col justify-between p-7 md:p-12">
                <span className="text-sm font-semibold tracking-widest">
                  {item.number}
                  <span className="ml-3 text-white/70">{item.label}</span>
                </span>
                <div className="max-w-2xl">
                  <h3 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base md:text-xl leading-relaxed text-white/85">
                    {item.text}
                  </p>
                </div>
              </div>
            </ParallaxFixedImage>
          ))}
        </div>
      </div>
    </section>
  )
}
