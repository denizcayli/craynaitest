import { useEffect } from 'react'
import Hero from '../sections/Hero.jsx'
import Diagnostic from '../sections/Diagnostic.jsx'
import Services from '../sections/Services.jsx'
import Solutions from '../sections/Solutions.jsx'
import References from '../sections/References.jsx'
import About from '../sections/About.jsx'
import Blog from '../sections/Blog.jsx'
import Cta from '../sections/Cta.jsx'

export default function Home() {
  // Arriving from another page with /#section: the target only exists after render.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <>
      <Hero />
      <Diagnostic />
      <Services />
      <Solutions />
      <References />
      <About />
      <Blog />
      <Cta />
    </>
  )
}
