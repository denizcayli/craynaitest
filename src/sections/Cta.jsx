import Faq from '../components/Faq.jsx'
import Halo from '../components/Halo.jsx'
import Typewriter from '../components/Typewriter.jsx'
import { MAIL_HREF, SITE } from '../lib/site.js'

const QUESTIONS = [
  {
    question: 'Başlamak için elimizde ne olması gerekiyor?',
    answer: 'Hazır bir veri altyapısı ya da teknik ekip şart değil. Çözmek istediğiniz bir süreç ve o sürecin bugün nasıl yürüdüğünü anlatabilecek bir kişi yeterli; gerisini keşif görüşmesinde birlikte çıkarıyoruz.',
  },
  {
    question: 'Bir proje ne kadar sürer?',
    answer: 'Kapsama göre değişir. Her şeyi bir anda değiştirmek yerine dar ve ölçülebilir bir ilk sürümle başlamayı öneriyoruz; süreyi ve takvimi yol haritasında birlikte netleştiriyoruz.',
  },
  {
    question: 'Mevcut sistemlerimizle çalışır mı?',
    answer: "Evet. Amacımız kullandığınız araçları değiştirmek değil, birbirine bağlamak. CRM, ERP, e-posta ve tablolarınızla; API'si olanlarla doğrudan, olmayanlarla ara çözümler üzerinden entegre oluyoruz.",
  },
  {
    question: 'Verilerimiz nasıl korunuyor?',
    answer: 'Verinin nerede tutulacağı, kimlerin erişeceği ve hangi modellerin kullanılacağı proje başında sizinle birlikte belirlenir. Verileriniz yalnızca sizin projeniz için kullanılır.',
  },
  {
    question: 'Maliyet nasıl belirleniyor?',
    answer: 'Kapsama, entegrasyon sayısına ve sürecin karmaşıklığına göre. Keşif görüşmesinden sonra yol haritasıyla birlikte net bir teklif sunuyoruz.',
  },
  {
    question: 'Yayına aldıktan sonra destek veriyor musunuz?',
    answer: 'Evet. Sistemi izlemeye, ölçmeye ve iyileştirmeye devam ediyoruz; işe yarayan çözümü diğer süreçlerinize birlikte genişletiyoruz.',
  },
]

// Closing section over slowly wandering halos of blue light on a dark ground: the heading with
// a typed line under it, the questions, and where to write.
export default function Cta() {
  return (
    <section id="cta" className="relative isolate overflow-hidden bg-graphite text-cloud py-20 md:py-24 px-6 md:px-12">
      {/* Discs of light in the brand's blues, drifting very slowly behind the questions */}
      <Halo
        className="-z-10"
        colors={[['#7da3ff', 5], ['#a9c1ff', 4], ['#f8fafc', 3]]}
        size={340}
        blur={90}
        seconds={16}
      />
      <div className="absolute inset-0 -z-10 bg-graphite/45" />
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-center">
          Sıkça Sorulan Sorular
        </h2>
        <p className="mt-4 mb-10 text-center text-xl md:text-2xl font-semibold tracking-tight">
          <Typewriter texts={['Bilmeniz gereken her şey...']} />
        </p>
        <Faq items={QUESTIONS} className="w-full" />
        <p className="mt-10 text-center text-lg text-cloud/75">
          Aradığınızı bulamadınız mı? Bize yazın:{' '}
          <a href={MAIL_HREF} className="font-semibold text-cloud underline decoration-cloud/40 underline-offset-4 transition-colors hover:decoration-crayn">{SITE.email}</a>
        </p>
      </div>
    </section>
  )
}
