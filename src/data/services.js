const photo = (id) => `https://images.unsplash.com/photo-${id}?q=80&w=1600&auto=format&fit=crop`

// One entry per service page. `features` become the tabs of the page's content section:
// `summary` is the line under the tab, `heading` and `points` fill the panel it opens.
export const SERVICES = [
  {
    slug: 'web-cozumleri',
    label: 'ÇÖZÜMLER',
    title: 'Web Çözümleri',
    lead: 'Estetik tasarımı güçlü bir kullanıcı deneyimiyle birleştiriyoruz. Tasarımdan geliştirmeye kadar tüm süreçlerde, markanızın dijital dünyada daha görünür, etkili ve akılda kalıcı olmasını sağlıyoruz.',
    tags: ['UI/UX', 'Tasarım', 'Landing Page', 'Yazılım', 'Hosting'],
    features: [
      {
        icon: 'layout',
        title: 'UI/UX Tasarım',
        summary: 'Kullanıcının yolunu önce kağıt üzerinde netleştiririz.',
        heading: 'Önce akış, sonra arayüz',
        points: [
          'Ziyaretçinin sayfada ne aradığını ve nerede takıldığını çıkarırız',
          'Tel kafes taslaklarla yapıyı tasarımdan önce birlikte onaylarız',
          'Marka kimliğinize uyan, tutarlı bir arayüz dili kurarız',
          'Telefon, tablet ve masaüstü için ayrı ayrı düşünülmüş ekranlar',
        ],
        image: photo('1586717791821-3f44a563fa4c'), // wireframes drawn on a tablet
      },
      {
        icon: 'window',
        title: 'Landing Page & Kurumsal Site',
        summary: 'Tek bir hedefe odaklanan sayfalar ve kurumsal siteler.',
        heading: 'Ziyaretçiyi talebe taşıyan sayfalar',
        points: [
          'Her sayfa tek bir net çağrıya göre kurgulanır',
          'Metin, görsel ve hareket aynı mesajı taşır',
          'Hızlı açılan, arama motorlarının rahat okuduğu yapı',
          'İçeriği kendi ekibinizin güncelleyebileceği düzen',
        ],
        image: photo('1559028012-481c04fa702d'), // web designs open on two monitors
      },
      {
        icon: 'server',
        title: 'Geliştirme & Hosting',
        summary: 'Tasarımı çalışan, hızlı ve güvenli bir siteye çeviririz.',
        heading: 'Yayına alır, ayakta tutarız',
        points: [
          'Tasarıma birebir sadık, temiz ve bakımı kolay kod',
          'Form, CRM ve analitik araçlarınızla entegrasyon',
          'Barındırma, alan adı ve SSL kurulumu tek elden',
          'Yayın sonrası izleme, güncelleme ve destek',
        ],
        image: photo('1547658719-da2b51169166'), // code beside a landing-page design
      },
    ],
  },
  {
    slug: 'dijital-pazarlama',
    label: 'STRATEJİ',
    title: 'Dijital Pazarlama',
    lead: 'Doğru hedef kitleye, doğru kanalda ve etkili bir mesajla ulaşmanız için dijital pazarlama süreçlerinizi stratejik bir yaklaşımla yönetiyoruz. Veri odaklı planlama ve yaratıcı içeriklerle markanızın dijital performansını güçlendiriyoruz.',
    tags: ['SEO', 'GEO', 'Google Ads ( SEM )', 'Performans Pazarlama'],
    features: [
      {
        icon: 'search',
        title: 'SEO & GEO',
        summary: 'Arama motorlarında ve yapay zeka yanıtlarında görünürlük.',
        heading: 'Arandığınız yerde bulunun',
        points: [
          'Teknik altyapı, içerik ve bağlantı yapısının denetimi',
          'Müşterinizin gerçekten sorduğu sorulara göre içerik planı',
          'Yapay zeka asistanlarının yanıtlarında yer almak için GEO çalışması',
          'Sıralama ve trafik değişimlerinin düzenli raporu',
        ],
        image: photo('1560472354-b33ff0c44a43'), // search performance report on a screen
      },
      {
        icon: 'target',
        title: 'Google Ads',
        summary: 'Arama anında, doğru kelimede, ölçülebilir reklam.',
        heading: 'Bütçeyi sonuca bağlayın',
        points: [
          'Anahtar kelime ve rakip araştırmasıyla kampanya kurulumu',
          'Reklam metni ve açılış sayfasının birlikte ele alınması',
          'Dönüşüm takibinin doğru kurulması',
          'Harcamanın düzenli olarak verimli kelimelere kaydırılması',
        ],
        image: photo('1460925895917-afdab827c52f'), // analytics dashboard on a laptop
      },
      {
        icon: 'chart',
        title: 'Performans Pazarlama',
        summary: 'Kanalları tek tabloda görün, neyin işe yaradığını bilin.',
        heading: 'Tahminle değil, veriyle karar',
        points: [
          'Tüm kanalların tek bir ölçüm yapısında toplanması',
          'Hangi kanalın hangi talebi getirdiğinin izlenmesi',
          'Deneme, ölçme ve işe yarayanı büyütme döngüsü',
          'Yöneticiler için sade, düzenli performans raporu',
        ],
        image: photo('1504868584819-f8e8b4b6d7e3'), // charts on a laptop screen
      },
    ],
  },
  {
    slug: 'kreatif-icerik',
    label: 'YARATICILIK',
    title: 'Kreatif & İçerik',
    lead: 'Markanızın hikayesini doğru ton, güçlü fikir ve yaratıcı içeriklerle anlatıyoruz. Hedef kitlenizin ilgisini çeken, marka kimliğinizi yansıtan ve dijitalde etki yaratan içeriklerle iletişiminizi güçlendiriyoruz.',
    tags: ['Marka Kimliği', 'Video & Fotoğraf', 'Grafik Tasarım'],
    features: [
      {
        icon: 'spark',
        title: 'Marka Kimliği',
        summary: 'Logo, renk, yazı ve ses tonu tek bir bütün olarak.',
        heading: 'Her yerde aynı marka',
        points: [
          'Markanın ne söylediğini ve kime söylediğini netleştiririz',
          'Logo, renk paleti ve tipografi sistemi',
          'Yazılı ve görsel dilde tutarlı bir ton',
          'Ekibinizin kullanabileceği sade bir marka kılavuzu',
        ],
        image: photo('1541462608143-67571c6738dd'), // brand and interface layouts on a desk
      },
      {
        icon: 'video',
        title: 'Video & Fotoğraf',
        summary: 'Fikirden kurguya, markanıza özel görsel üretim.',
        heading: 'Anlatmak yerine gösterin',
        points: [
          'Senaryo ve çekim planının birlikte hazırlanması',
          'Ürün, ekip ve mekan çekimleri',
          'Kurgu, renk ve ses düzenlemesi',
          'Her kanalın ölçüsüne uygun ayrı sürümler',
        ],
        image: photo('1574717024653-61fd2cf4d44d'), // video editing timeline
      },
      {
        icon: 'pen',
        title: 'Grafik Tasarım',
        summary: 'Sunumdan sosyal medya görseline, tutarlı tasarım.',
        heading: 'Göze çarpan, markaya sadık',
        points: [
          'Sosyal medya, reklam ve kampanya görselleri',
          'Sunum, katalog ve basılı işler',
          'Tekrar kullanılabilir şablon setleri',
          'Marka kılavuzuna uyumun her işte korunması',
        ],
        image: photo('1572044162444-ad60f128bdea'), // designer at work beside colour swatches
      },
    ],
  },
  {
    slug: 'sosyal-medya',
    label: 'ETKİLEŞİM',
    title: 'Sosyal Medya',
    lead: 'Markanızın sosyal medyada görünür, anlaşılır ve akılda kalıcı olmasını sağlıyoruz. Hedef kitlenize uygun stratejiler ve yaratıcı içeriklerle etkileşimi güçlendiren, sürdürülebilir bir sosyal medya yönetimi sunuyoruz.',
    tags: ['Topluluk Yönetimi', 'Kreatif İçerik', 'SM Reklamları'],
    features: [
      {
        icon: 'users',
        title: 'Topluluk Yönetimi',
        summary: 'Yorumlar ve mesajlar yanıtsız kalmaz.',
        heading: 'Takipçiyle konuşan marka',
        points: [
          'Yorum ve mesajların düzenli takibi ve yanıtlanması',
          'Markanın ses tonuna uygun hazır yanıt çerçevesi',
          'Şikayet ve taleplerin ilgili ekibe aktarılması',
          'Topluluktan gelen geri bildirimlerin raporlanması',
        ],
        image: photo('1573152143286-0c422b4d2175'), // row of people scrolling on their phones
      },
      {
        icon: 'image',
        title: 'Kreatif İçerik',
        summary: 'Aylık plan, özgün görsel ve metin üretimi.',
        heading: 'Planlı, düzenli, özgün',
        points: [
          'Hedef kitleye göre aylık içerik takvimi',
          'Her platformun diline uygun görsel ve video',
          'Paylaşım öncesi onay akışı',
          'Hangi içeriğin ilgi gördüğünün ölçülmesi',
        ],
        image: photo('1611162616305-c69b3fa7fbe0'), // 3D social app icon
      },
      {
        icon: 'megaphone',
        title: 'SM Reklamları',
        summary: 'Doğru kitleye, doğru görselle ulaşan reklamlar.',
        heading: 'Erişimi talebe çevirin',
        points: [
          'Hedef kitle tanımı ve kampanya kurgusu',
          'Reklam görseli ve metninin birlikte üretilmesi',
          'Farklı sürümlerin denenmesi ve karşılaştırılması',
          'Bütçe ve sonuçların anlaşılır raporu',
        ],
        image: photo('1579869847557-1f67382cc158'), // social apps on a phone screen
      },
    ],
  },
  {
    slug: 'ai-danismanligi',
    label: 'GELECEK',
    title: 'AI Danışmanlığı',
    lead: 'Şirketlerin iş akışlarını analiz ederek süreçleri üretken yapay zeka entegrasyonu, akıllı yapay zeka ajanları ve otonom iş akışı orkestrasyonları ile geleceğe taşıyoruz.',
    tags: ['AI Agent', 'LLM Entegrasyonu', 'Otomasyon'],
    features: [
      {
        icon: 'bot',
        title: 'AI Agent',
        summary: 'Veri okuyan, karar öneren ve aksiyon alan ajanlar.',
        heading: 'İşi yapan dijital ekip arkadaşı',
        points: [
          'Ajanın üstleneceği sürecin birlikte seçilmesi',
          'Şirket verinize ve araçlarınıza bağlı çalışma',
          'Geri alınamayan kararlarda son söz ekibinizde',
          'Ajanın ne yaptığını izleyebileceğiniz kayıtlar',
        ],
        image: photo('1674027444485-cec3da58eef4'), // glowing neural-network brain
      },
      {
        icon: 'link',
        title: 'LLM Entegrasyonu',
        summary: 'Dil modellerini mevcut sistemlerinize bağlarız.',
        heading: 'Kullandığınız araçların içinde yapay zeka',
        points: [
          'İhtiyaca uygun modelin seçilmesi',
          'CRM, ERP ve iç dokümanlarınızla bağlantı',
          'Verinin nerede tutulacağının baştan belirlenmesi',
          'Yanıt kalitesinin ölçülmesi ve iyileştirilmesi',
        ],
        image: photo('1655720828018-edd2daec9349'), // abstract network of connected nodes
      },
      {
        icon: 'flow',
        title: 'Otomasyon',
        summary: 'Tekrarlayan işleri insansız, hatasız akışlara çeviririz.',
        heading: 'Elle yapılan iş, kendiliğinden yürüsün',
        points: [
          'Zaman alan manuel adımların tespiti',
          'Sistemler arası veri akışının otomatikleşmesi',
          'Hata ve istisna durumlarında ekibe bildirim',
          'Kazanılan zamanın ölçülmesi',
        ],
        image: photo('1537462715879-360eeb61a0ad'), // interlocking machine gears
      },
    ],
  },
  {
    slug: 'ozel-yazilim',
    label: 'MÜHENDİSLİK',
    title: 'Özel Yazılım',
    lead: 'Hazır şablonlar kullanmıyoruz. Tamamen işletmenizin veri ve operasyon yapısına özel, ölçeklenebilir, güvenli ve yüksek performanslı yazılım altyapıları kuruyoruz.',
    tags: ['Özel API', 'Enterprise Web', 'Veri Yönetimi'],
    features: [
      {
        icon: 'code',
        title: 'Özel API',
        summary: 'Sistemlerinizi birbirine bağlayan özel servisler.',
        heading: 'Araçlarınız aynı dili konuşsun',
        points: [
          'İhtiyaca göre tasarlanmış, belgelenmiş servisler',
          'API\'si olmayan sistemler için ara çözümler',
          'Yetkilendirme ve erişim kayıtları',
          'Yük arttıkça ölçeklenen altyapı',
        ],
        image: photo('1461749280684-dccba630e2f6'), // source code
      },
      {
        icon: 'monitor',
        title: 'Enterprise Web',
        summary: 'Ekibinizin her gün kullandığı iç uygulamalar.',
        heading: 'Sürecinize göre yazılmış uygulama',
        points: [
          'Panel, portal ve yönetim ekranları',
          'Rol bazlı erişim ve onay akışları',
          'Mevcut sistemlerinizle birlikte çalışma',
          'Dar bir ilk sürümle başlayıp adım adım genişleme',
        ],
        image: photo('1542744094-3a31f272c490'), // person working at monitors showing a business dashboard
      },
      {
        icon: 'database',
        title: 'Veri Yönetimi',
        summary: 'Dağınık veriyi tek, güvenilir bir kaynağa toplarız.',
        heading: 'Tek doğru, herkes için',
        points: [
          'Farklı kaynaklardaki verinin birleştirilmesi',
          'Temizleme, eşleştirme ve tutarlılık kontrolleri',
          'Yöneticilerin anlık okuyabileceği tablolar',
          'Erişim ve saklama kurallarının baştan tanımlanması',
        ],
        image: photo('1526628953301-3e589a6a8b74'), // screens full of metrics and charts
      },
    ],
  },
]

export const findService = (slug) => SERVICES.find((service) => service.slug === slug)
