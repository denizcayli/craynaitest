import Mullion from '../components/Mullion.jsx'

const photo = (id) => `https://images.unsplash.com/photo-${id}?q=80&w=1600&auto=format&fit=crop`

const ITEMS = [
  {
    id: 'hakkimizda',
    title: 'Hakkımızda',
    image: photo('1600880292203-757bb62b4baf'), // two colleagues celebrating at a desk
    caption: (
      <>
        <p>
          Crayn AI; modern işletmeler için özel AI agent'lar, otomasyon sistemleri ve ölçeklenebilir üretken yapay zeka yazılımları geliştiren yerli bir yazılım şirketidir. Kocaeli'de, Bilişim Vadisi'nde çalışıyoruz.
        </p>
        <p>
          Her şirketin ihtiyacı, verisi ve operasyon yapısı farklıdır. Bu yüzden hazır kalıplar satmıyoruz: önce süreci dinliyor, nerede tıkandığını ölçüyor; sonra o sürece özel, mevcut sistemlerinizle birlikte çalışan bir çözüm kuruyoruz.
        </p>
        <p>
          Bir çözümün değerini, ekibinizin gününden kaç saati geri verdiğiyle ve kararlarınızı ne kadar hızlandırdığıyla ölçüyoruz.
        </p>
      </>
    ),
  },
  {
    id: 'vizyon',
    title: 'Vizyon',
    image: photo('1677442136019-21780ecad995'), // the letters "AI" in blue
    caption: (
      <>
        <p>
          Yapay zekanın yalnızca büyük teknoloji şirketlerinin değil, her ölçekteki işletmenin günlük işinin doğal bir parçası olduğu bir gelecek hayal ediyoruz.
        </p>
        <p>
          Bu gelecekte ekipler tekrarlayan işlere değil, karar vermeye ve üretmeye zaman ayırıyor; veriler departmanlar arasında kendiliğinden akıyor ve sorular günler sonra değil, anında yanıt buluyor.
        </p>
        <p>
          Hedefimiz bu dönüşümde şirketlerin güvenle başvurduğu çözüm ortağı olmak ve Türkiye'den, kendi alanında örnek gösterilen işler üretmek.
        </p>
      </>
    ),
  },
  {
    id: 'misyon',
    title: 'Misyon',
    image: photo('1547658719-da2b51169166'), // code beside a landing-page design
    caption: (
      <>
        <p>
          Ekiplerin zamanını tüketen manuel işleri otomatikleştiriyor, dağınık veriyi tek bir doğruya bağlıyor ve satıştan operasyona kadar süreçleri izlenebilir hale getiriyoruz.
        </p>
        <p>
          Küçük ve ölçülebilir adımlarla ilerliyoruz: önce çalışan bir ilk sürüm, sonra kanıtlanmış olanı diğer süreçlere yaymak.
        </p>
        <p>
          Kurduğumuz her sistemde geri alınamayan kararlarda son söz ekibinizde kalır, sistemin ne yaptığını görebilirsiniz ve kullandığınız araçları değiştirmeniz gerekmez. İşimiz teslimle bitmez; çözümleri izlemeye ve geliştirmeye devam ederiz.
        </p>
      </>
    ),
  },
  {
    id: 'iletisim',
    title: 'İletişim',
    link: '/talep',
    image: photo('1521791136064-7986c2920216'), // handshake
    caption: (
      <>
        <p>
          Aklınızdaki süreci birkaç cümleyle anlatmanız yeterli; teknik bir hazırlık yapmanıza gerek yok. İlk görüşmede ihtiyacınızı dinliyor ve nereden başlanabileceğini birlikte netleştiriyoruz.
        </p>
        <p>
          <a href="mailto:hello@crayn.ai" className="font-semibold text-graphite underline-offset-4 hover:underline">hello@crayn.ai</a>
          {' · '}
          <a href="tel:05442407199" className="font-semibold text-graphite underline-offset-4 hover:underline">0544 240 71 99</a>
        </p>
        <p>Bilişim Vadisi, Teknoloji Geliştirme Bölgesi, Kocaeli / Türkiye</p>
        <p>
          <a href="/talep" className="font-semibold text-graphite underline underline-offset-4">Talep formunu doldurun →</a>
        </p>
      </>
    ),
  },
]

export default function Hakkimizda() {
  return (
    <main>
      <h1 className="sr-only">Hakkımızda</h1>
      {/* The card is the page: edge to edge, a full screen tall, running under the top bar */}
      <Mullion items={ITEMS} className="mullion--page" />
    </main>
  )
}
