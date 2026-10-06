import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav.jsx'
import FullMenu from './FullMenu.jsx'
import Footer from './Footer.jsx'
import FloatingCta from './FloatingCta.jsx'
import PlanCard from './PlanCard.jsx'
import { findService } from '../data/services.js'
import { initSiteAnimations } from '../lib/siteAnimations.js'
import { initGlassButtons } from '../lib/glassButtons.js'
import { initMagnetPills } from '../lib/magnetPills.js'

export default function Layout() {
  const { pathname } = useLocation()

  // Re-run per route: the scroll/slider targets differ between pages.
  useEffect(() => initSiteAnimations(), [pathname])

  useEffect(() => initGlassButtons(), [])
  useEffect(() => initMagnetPills(), [])

  // On a service's own page the request card starts with that service chosen.
  const service = pathname.startsWith('/hizmetler/') ? findService(pathname.split('/')[2])?.title ?? '' : ''

  return (
    <>
      <Nav />
      <FullMenu />
      <Outlet />
      <Footer />
      <FloatingCta />
      {/* The request form's own page does not need an invitation to it */}
      {pathname !== '/talep' && <PlanCard key={pathname} service={service} />}
    </>
  )
}
