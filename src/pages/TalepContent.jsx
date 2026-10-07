import RobotScene from '../components/RobotScene.jsx'
import { withBase } from '../lib/paths.js'

export default function TalepContent() {
  return (
    <section className="tlp-wrap py-6 md:py-8 px-6">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="tlp-glow" />
      <div className="max-w-3xl lg:max-w-7xl mx-auto relative z-10 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12 lg:items-start">
        <RobotScene />
        <div>
          <div className="text-center mb-5">
            <span className="tlp-eyebrow inline-block text-xs font-bold uppercase tlp-accent mb-2">
              Talep Formu
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-white leading-tight">
              Projenizi birlikte planlayalım
            </h1>
          </div>
          <div className="tlp-glass">
          <div className="tlp-shimmer" />
          <div id="talepProgress">
            <div className="tlp-prog" aria-hidden="true">
              <span className="tlp-seg is-now" data-seg="1" />
              <span className="tlp-seg" data-seg="2" />
              <span className="tlp-seg" data-seg="3" />
              <span className="tlp-seg" data-seg="4" />
            </div>
            <div className="tlp-meta">
              <span id="stepTag" className="tlp-tag">Hizmet</span>
              <span id="stepCounter" className="tlp-count">1 / 4</span>
            </div>
          </div>
          <div id="talepSuccess" className="hidden text-center py-10">
            {/* The tick that draws itself, as in the request card; it starts when this block is shown */}
            <svg viewBox="0 0 52 52" className="plan-check mx-auto mb-6 size-20" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="26" cy="26" r="24" className="stroke-crayn" />
              <path d="M16 27l7 7 14-15" className="stroke-cloud" />
            </svg>
            <h2 className="text-2xl font-extrabold text-white mb-3">
              Talebiniz alındı!
            </h2>
            <p id="talepSuccessMsg" className="text-gray-400 max-w-md mx-auto">
              Talebiniz alındı! Ekibimiz en kısa sürede sizinle iletişime geçecek.
            </p>
            <a href={withBase('/')} className="inline-block mt-8 tlp-accent font-semibold hover:underline">
              ← Ana sayfaya dön
            </a>
          </div>
          <form id="talepForm" method="POST" data-steps="4">
            <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
              <input type="text" name="_hp" tabIndex="-1" autoComplete="off" />
            </div>
            <input type="hidden" name="_url" value="https://crayn.ai/talep" />
            {' '}
            <input type="hidden" name="_referrer" value="https://crayn.ai/" />
            {' '}
            <input type="hidden" name="_utm_source" value="" />
            {' '}
            <input type="hidden" name="_utm_medium" value="" />
            {' '}
            <input type="hidden" name="_utm_campaign" value="" />
            {' '}
            <input type="hidden" name="_utm_content" value="" />
            {' '}
            <input type="hidden" name="_utm_term" value="" />
            <div className="talep-step " data-step="1" data-tag="Hizmet">
              <div className="mb-5">
                <h2 className="tlp-title">
                  İlgilendiğiniz Hizmet
                </h2>
                <p className="tlp-sub">
                  Size nasıl yardımcı olabiliriz?
                </p>
              </div>
              <div className="space-y-4">
                <div className="talep-field" data-field="hizmet">
                  <label className="tlp-label">
                    Hangi konuda destek istiyorsunuz?
                    <span className="tlp-accent ml-0.5">
                      *
                    </span>
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <label className="tlp-opt">
                      <input type="radio" name="fields[hizmet]" value="generative_ai" data-required="1" />
                      {' '}
                      <span className="tlp-mark tlp-mark--radio">
                        <span className="tlp-dot" />
                      </span>
                      {' '}
                      <span className="tlp-opt-label">
                        Üretken Yapay Zeka Çözümleri
                      </span>
                    </label>
                    {' '}
                    <label className="tlp-opt">
                      <input type="radio" name="fields[hizmet]" value="otomasyon" data-required="1" />
                      {' '}
                      <span className="tlp-mark tlp-mark--radio">
                        <span className="tlp-dot" />
                      </span>
                      {' '}
                      <span className="tlp-opt-label">
                        Süreç Otomasyonu
                      </span>
                    </label>
                    {' '}
                    <label className="tlp-opt">
                      <input type="radio" name="fields[hizmet]" value="veri_analitik" data-required="1" />
                      {' '}
                      <span className="tlp-mark tlp-mark--radio">
                        <span className="tlp-dot" />
                      </span>
                      {' '}
                      <span className="tlp-opt-label">
                        Veri &amp; Analitik
                      </span>
                    </label>
                    {' '}
                    <label className="tlp-opt">
                      <input type="radio" name="fields[hizmet]" value="ozel_yazilim" data-required="1" />
                      {' '}
                      <span className="tlp-mark tlp-mark--radio">
                        <span className="tlp-dot" />
                      </span>
                      {' '}
                      <span className="tlp-opt-label">
                        Özel Yazılım Geliştirme
                      </span>
                    </label>
                    {' '}
                    <label className="tlp-opt">
                      <input type="radio" name="fields[hizmet]" value="danismanlik" data-required="1" />
                      {' '}
                      <span className="tlp-mark tlp-mark--radio">
                        <span className="tlp-dot" />
                      </span>
                      {' '}
                      <span className="tlp-opt-label">
                        Danışmanlık
                      </span>
                    </label>
                    {' '}
                    <label className="tlp-opt">
                      <input type="radio" name="fields[hizmet]" value="diger" data-required="1" />
                      {' '}
                      <span className="tlp-mark tlp-mark--radio">
                        <span className="tlp-dot" />
                      </span>
                      {' '}
                      <span className="tlp-opt-label">
                        Diğer
                      </span>
                    </label>
                  </div>
                  <p className="field-error hidden text-xs text-red-400 mt-2" />
                </div>
              </div>
            </div>
            <div className="talep-step hidden" data-step="2" data-tag="Proje">
              <div className="mb-5">
                <h2 className="tlp-title">
                  Proje Detayları
                </h2>
                <p className="tlp-sub">
                  Bütçe, zaman çizelgesi ve kapsam.
                </p>
              </div>
              <div className="space-y-4">
                <div className="talep-field" data-field="butce">
                  <label className="tlp-label">
                    Tahmini Bütçe
                    <span className="tlp-accent ml-0.5">
                      *
                    </span>
                  </label>
                  {' '}
                  <select name="fields[butce]" data-required="1" className="tlp-input">
                    <option value="">
                      Bütçe aralığı seçin
                    </option>
                    <option value="0-100k">
                      100.000 ₺ altı
                    </option>
                    <option value="100k-500k">
                      100.000 – 500.000 ₺
                    </option>
                    <option value="500k-1m">
                      500.000 – 1.000.000 ₺
                    </option>
                    <option value="1m+">
                      1.000.000 ₺ üzeri
                    </option>
                    <option value="belirsiz">
                      Henüz net değil
                    </option>
                  </select>
                  <p className="field-error hidden text-xs text-red-400 mt-2" />
                </div>
                <div className="talep-field" data-field="zaman">
                  <label className="tlp-label">
                    Zaman Çizelgesi
                    <span className="tlp-accent ml-0.5">
                      *
                    </span>
                  </label>
                  {' '}
                  <select name="fields[zaman]" data-required="1" className="tlp-input">
                    <option value="">
                      Ne zaman başlamak istersiniz?
                    </option>
                    <option value="hemen">
                      Hemen
                    </option>
                    <option value="1-3ay">
                      1-3 ay içinde
                    </option>
                    <option value="3-6ay">
                      3-6 ay içinde
                    </option>
                    <option value="arastirma">
                      Sadece araştırıyorum
                    </option>
                  </select>
                  <p className="field-error hidden text-xs text-red-400 mt-2" />
                </div>
                <div className="talep-field" data-field="aciklama">
                  <label className="tlp-label">
                    Projenizi kısaca anlatın
                  </label>
                  <textarea name="fields[aciklama]" rows="3" placeholder="İhtiyaçlarınızı ve hedeflerinizi birkaç cümleyle paylaşın..." className="tlp-input" />
                  <p className="field-error hidden text-xs text-red-400 mt-2" />
                </div>
              </div>
            </div>
            <div className="talep-step hidden" data-step="3" data-tag="Şirket">
              <div className="mb-5">
                <h2 className="tlp-title">
                  Şirket Bilgileri
                </h2>
                <p className="tlp-sub">
                  Sizi biraz tanıyalım.
                </p>
              </div>
              <div className="space-y-4">
                <div className="talep-field" data-field="firma">
                  <label className="tlp-label">
                    Firma Adı
                    <span className="tlp-accent ml-0.5">
                      *
                    </span>
                  </label>
                  {' '}
                  <input type="text" name="fields[firma]" defaultValue="" placeholder="Şirketinizin adı" data-required="1" className="tlp-input" />
                  <p className="field-error hidden text-xs text-red-400 mt-2" />
                </div>
                <div className="talep-field" data-field="sektor">
                  <label className="tlp-label">
                    Sektör
                    <span className="tlp-accent ml-0.5">
                      *
                    </span>
                  </label>
                  {' '}
                  <select name="fields[sektor]" data-required="1" className="tlp-input">
                    <option value="">
                      Sektör seçin
                    </option>
                    <option value="uretim">
                      Üretim / Sanayi
                    </option>
                    <option value="eticaret">
                      E-ticaret / Perakende
                    </option>
                    <option value="finans">
                      Finans / Bankacılık
                    </option>
                    <option value="saglik">
                      Sağlık
                    </option>
                    <option value="teknoloji">
                      Teknoloji / Yazılım
                    </option>
                    <option value="egitim">
                      Eğitim
                    </option>
                    <option value="diger">
                      Diğer
                    </option>
                  </select>
                  <p className="field-error hidden text-xs text-red-400 mt-2" />
                </div>
                <div className="talep-field" data-field="olcek">
                  <label className="tlp-label">
                    Çalışan Sayısı
                    <span className="tlp-accent ml-0.5">
                      *
                    </span>
                  </label>
                  {' '}
                  <select name="fields[olcek]" data-required="1" className="tlp-input">
                    <option value="">
                      Şirket ölçeği
                    </option>
                    <option value="1-10">
                      1-10
                    </option>
                    <option value="11-50">
                      11-50
                    </option>
                    <option value="51-200">
                      51-200
                    </option>
                    <option value="200+">
                      200+
                    </option>
                  </select>
                  <p className="field-error hidden text-xs text-red-400 mt-2" />
                </div>
              </div>
            </div>
            <div className="talep-step hidden" data-step="4" data-tag="İletişim">
              <div className="mb-5">
                <h2 className="tlp-title">
                  İletişim Bilgileri
                </h2>
                <p className="tlp-sub">
                  Size nasıl ulaşalım?
                </p>
              </div>
              <div className="space-y-4">
                <div className="talep-field" data-field="ad_soyad">
                  <label className="tlp-label">
                    Ad Soyad
                    <span className="tlp-accent ml-0.5">
                      *
                    </span>
                  </label>
                  {' '}
                  <input type="text" name="fields[ad_soyad]" defaultValue="" placeholder="Adınız ve soyadınız" data-required="1" className="tlp-input" />
                  <p className="field-error hidden text-xs text-red-400 mt-2" />
                </div>
                <div className="talep-field" data-field="eposta">
                  <label className="tlp-label">
                    E-posta
                    <span className="tlp-accent ml-0.5">
                      *
                    </span>
                  </label>
                  {' '}
                  <input type="email" name="fields[eposta]" defaultValue="" placeholder="ornek@firma.com" data-required="1" className="tlp-input" />
                  <p className="field-error hidden text-xs text-red-400 mt-2" />
                </div>
                <div className="talep-field" data-field="telefon">
                  <label className="tlp-label">
                    Telefon
                  </label>
                  {' '}
                  <input type="tel" name="fields[telefon]" defaultValue="" placeholder="+90 5XX XXX XX XX" className="tlp-input" />
                  <p className="field-error hidden text-xs text-red-400 mt-2" />
                </div>
                <div className="talep-field" data-field="kvkk_onay">
                  <label className="tlp-opt tlp-opt--start">
                    <input type="checkbox" name="fields[kvkk_onay]" value="1" data-required="1" />
                    {' '}
                    <span className="tlp-mark tlp-mark--check">
                      <svg className="tlp-ico" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    {' '}
                    <span className="text-sm text-gray-400 leading-relaxed">
                      Kişisel verilerimin işlenmesine ilişkin aydınlatma metnini okudum ve onaylıyorum.
                    </span>
                  </label>
                  <p className="field-error hidden text-xs text-red-400 mt-2" />
                </div>
              </div>
            </div>
            <div className="tlp-footer">
              <button type="button" id="talepPrev" className="tlp-btn-back hidden">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                Geri
              </button>
              <button type="button" id="talepNext" className="magnet-pill magnet-pill--light tlp-btn-main">
                <span className="magnet-pill__face">
                  Devam et <span className="tlp-arr" aria-hidden="true">→</span>
                </span>
              </button>
              <button type="submit" id="talepSubmit" className="magnet-pill magnet-pill--light tlp-btn-main hidden">
                <span className="magnet-pill__face">
                  Talebi Gönder <span className="tlp-arr" aria-hidden="true">→</span>
                </span>
              </button>
            </div>
            <p id="talepFormError" className="hidden text-sm text-red-400 mt-4 text-center" />
          </form>
          </div>
        </div>
      </div>
    </section>
  )
}
