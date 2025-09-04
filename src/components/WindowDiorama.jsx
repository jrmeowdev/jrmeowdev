import { useRef, useState } from 'react'

export default function WindowDiorama() {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -6, y: px * 8 })
  }

  const onLeave = () => setTilt({ x: 0, y: 0 })

  const playBell = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)()
      const o = ctx.createOscillator()
      const g = ctx.createGain()
      const now = ctx.currentTime

      o.type = 'sine'
      o.frequency.setValueAtTime(1320, now)
      g.gain.setValueAtTime(0.0001, now)
      g.gain.exponentialRampToValueAtTime(0.18, now + 0.01)
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.25)

      const bell = ctx.createBiquadFilter()
      bell.type = 'bandpass'
      bell.frequency.setValueAtTime(1500, now)
      bell.Q.value = 6

      o.connect(bell)
      bell.connect(g)
      g.connect(ctx.destination)
      o.start(now)
      o.stop(now + 0.3)
      setTimeout(() => ctx.close(), 400)
    } catch {}
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="diorama window-grid card-paper relative grid-overlay rounded-xl p-4 shadow-sm h-40 md:h-48 overflow-hidden select-none"
      style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      aria-label="Sari-sari window diorama"
    >
      {/* Background chalkboard */}
      <div className="parallax-layer parallax-depth--1 bg-chalkboard rounded-lg" />

      {/* Shelves / items (emoji stand-ins for now) */}
      <div className="parallax-layer parallax-depth-0 pointer-events-none">
        <div className="absolute left-4 top-6 text-2xl animate-float">🥫</div>
        <div className="absolute left-16 top-10 text-2xl animate-float-delayed">🍪</div>
        <div className="absolute left-28 top-7 text-2xl animate-float">🥤</div>
        <div className="absolute left-40 top-12 text-2xl animate-float-delayed">🍜</div>
      </div>

      {/* Foreground note and bell */}
      <div className="parallax-layer parallax-depth-1">
        <div className="absolute right-4 top-4 bg-white/80 border border-neutral-200 rounded-md px-2 py-1 text-xs text-neutral-700 shadow-sm">Bukas: 8AM–8PM</div>
        <button
          onClick={playBell}
          className="absolute left-4 bottom-4 text-xl hover:animate-wiggle"
          aria-label="Bell"
          type="button"
        >🔔</button>
      </div>

      {/* Grill overlay */}
      <div className="absolute inset-0 grill-overlay rounded-lg" aria-hidden="true" />
    </div>
  )
}
