import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroPearls from '../components/HeroPearls.jsx'
import { preloaderRemaining } from '../components/Preloader.jsx'

gsap.registerPlugin(ScrollTrigger)

// How far the page scrolls with the hero held in place while its backdrop comes into focus.
const FOCUS_SCROLL = '+=80%'

// One entry per line on wide screens; narrow screens let the words wrap freely.
const HEADING_LINES = ['Şirketlere Özel', 'Üretken Yapay Zeka', 'Yazılımları']

export default function Hero() {
  const rootRef = useRef(null)
  const revealRef = useRef(null)
  // How unfocused the backdrop is: 1 at the top of the page, 0 once it has been scrolled into focus.
  const blurRef = useRef(1)

  // Entrance, once the preloader starts clearing: heading words rise in one after another,
  // then the supporting copy fades up.
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ delay: preloaderRemaining() + 0.15 })
        .to('.hero-title-word', { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out' })
        .to('.hero-fade', { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, '-=0.4')
        .set(revealRef.current, { visibility: 'visible' })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  // The hero stays put for a short scroll while the backdrop sharpens, then scrolls away.
  useEffect(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      ScrollTrigger.create({
        trigger: rootRef.current,
        start: 'top top',
        end: FOCUS_SCROLL,
        pin: true,
        onUpdate: ({ progress }) => { blurRef.current = 1 - progress },
      })
    })
    return () => media.revert()
  }, [])

  return (
    <section ref={rootRef} className="hero relative isolate w-full min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden px-6 py-28">
      <HeroPearls revealRef={revealRef} blurRef={blurRef} />
      <div className="hero-heading relative z-10 text-center font-extrabold uppercase">
        <h1>
          {HEADING_LINES.map((line) => (
            <span key={line} className="md:block">
              {line.split(' ').flatMap((word) => [
                <span key={word} className="hero-title-word">{word}</span>,
                ' ',
              ])}
            </span>
          ))}
        </h1>
        {/* Coloured copy of the heading, shown only where a pearl passes over it */}
        <div ref={revealRef} aria-hidden="true" className="hero-reveal absolute inset-0 invisible">
          {HEADING_LINES.map((line) => (
            <span key={line} className="md:block">{line} </span>
          ))}
        </div>
      </div>
      <div className="hero-fade hero-cta relative z-10 flex flex-wrap items-center justify-center gap-3">
        <a href="/talep" className="hero-pill hero-pill--solid">
          <span>Sistemi Planlayalım</span>
        </a>
        <a href="/#solutions" className="hero-pill">
          <span>Çözümleri Keşfet ↓</span>
        </a>
      </div>
      <p className="hero-kicker hero-fade absolute z-10 left-6 md:left-12 bottom-8 md:bottom-12 max-w-[62%] md:max-w-[34rem] font-light uppercase">
        Crayn AI, modern işletmeler için özel AI agent'lar, otomasyon sistemleri ve ölçeklenebilir üretken yapay zeka yazılımları geliştiren yerli bir yazılım şirketidir.
      </p>
    </section>
  )
}
