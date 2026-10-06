import AuroraGradient from '../components/AuroraGradient.jsx'
import Faq from '../components/Faq.jsx'

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

// Closing section over a slowly swaying blue-grey aurora on a dark ground: the questions,
// then the call to action.
export default function Cta() {
  return (
    <section id="cta" className="relative isolate overflow-hidden bg-graphite text-cloud py-20 md:py-24 px-6 md:px-12">
      {/* Mesh gradient in muted blue-greys, swaying very slowly behind the questions */}
      <AuroraGradient className="-z-10" colors={['#4f6d99', '#5b6b80', '#7f97b8']} speed={0.6} blur={0} />
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-center mb-10">
          Sıkça Sorulan Sorular
        </h2>
        <Faq items={QUESTIONS} className="w-full" />
        <a href="/talep" className="magnetic-btn justify-center mt-12">
          İşletmeniz İçin Planlayalım
        </a>
      </div>
    </section>
  )
}
