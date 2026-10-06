import { useEffect, useRef } from 'react'

const GRAIN = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E\")"

// An animated mesh gradient painted on a canvas: three large blobs of colour that sway slowly
// and add up where they overlap. Fills its positioned parent. `colors` is the three blob
// colours; `speed` scales the sway; `grain` is the opacity of the noise laid on top.
export default function AuroraGradient({ colors, speed = 1, blur = 40, grain = 0.12, className = '' }) {
  const canvasRef = useRef(null)
  const [colorA, colorB, colorC] = colors

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const blobs = [
      { c: colorA, x: 0.3, y: 0.35, r: 0.55, sx: 0.9, sy: 1.3 },
      { c: colorB, x: 0.7, y: 0.4, r: 0.5, sx: -1.2, sy: 0.8 },
      { c: colorC, x: 0.5, y: 0.7, r: 0.6, sx: 0.7, sy: -1 },
    ]
    // Start on a frame with the blobs well separated.
    let t = 2.1
    let frame = 0

    const paint = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'lighter'
      for (const blob of blobs) {
        const cx = (blob.x + Math.sin(t * blob.sx) * 0.12) * width
        const cy = (blob.y + Math.cos(t * blob.sy) * 0.12) * height
        const radius = blob.r * Math.max(width, height)
        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
        gradient.addColorStop(0, blob.c)
        gradient.addColorStop(1, 'transparent')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(cx, cy, radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Resizing a canvas clears it, so always repaint afterwards.
    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = Math.max(1, rect.width * dpr)
      canvas.height = Math.max(1, rect.height * dpr)
      paint()
    }
    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)

    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const loop = () => {
      paint()
      t += speed * 0.004
      frame = requestAnimationFrame(loop)
    }
    const start = () => {
      if (!frame && !still) loop()
    }
    const stop = () => {
      cancelAnimationFrame(frame)
      frame = 0
    }
    // Only animate while on screen.
    const observer = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()))
    observer.observe(canvas)

    return () => {
      observer.disconnect()
      resizeObserver.disconnect()
      stop()
    }
  }, [colorA, colorB, colorC, speed])

  return (
    <div aria-hidden="true" className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" style={{ filter: `blur(${blur}px)` }} />
      {grain > 0 && <div className="absolute inset-0" style={{ opacity: grain, backgroundImage: GRAIN }} />}
    </div>
  )
}
