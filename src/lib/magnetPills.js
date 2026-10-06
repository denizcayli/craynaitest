// Tells every `.magnet-pill` button and `.spot-card` card where the pointer is over it (--mx,
// --my), for the light that follows the pointer round its rim. One listener serves them all, whichever page they are on.
// Returns a cleanup function.
export function initMagnetPills() {
  const track = (event) => {
    const pill = event.target.closest?.('.magnet-pill, .spot-card')
    if (!pill) return
    const box = pill.getBoundingClientRect()
    pill.style.setProperty('--mx', `${event.clientX - box.left}px`)
    pill.style.setProperty('--my', `${event.clientY - box.top}px`)
  }
  document.addEventListener('pointermove', track, { passive: true })
  return () => document.removeEventListener('pointermove', track)
}
