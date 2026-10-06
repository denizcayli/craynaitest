import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav.jsx'
import FullMenu from './FullMenu.jsx'
import Footer from './Footer.jsx'
import FloatingCta from './FloatingCta.jsx'
import { initSiteAnimations } from '../lib/siteAnimations.js'
import { initGlassButtons } from '../lib/glassButtons.js'

export default function Layout() {
  const { pathname } = useLocation()

  // Re-run per route: the scroll/slider targets differ between pages.
  useEffect(() => initSiteAnimations(), [pathname])

  useEffect(() => initGlassButtons(), [])

  return (
    <>
      <Nav />
      <FullMenu />
      <Outlet />
      <Footer />
      <FloatingCta />
    </>
  )
}
