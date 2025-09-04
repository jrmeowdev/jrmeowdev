export default function StoreFrontHero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-5 gap-6 items-stretch">
          {/* Signboard */}
          <div className="md:col-span-2 flex items-center justify-center">
            <div className="bg-maya text-white rounded-md shadow-signage px-6 py-8 w-full text-center">
              <h1 className="signage text-4xl md:text-5xl">Tindahan ni {`{Your Name}`}</h1>
              <p className="mt-2 text-chalk/90">Old-meets-modern sari-sari portfolio</p>
            </div>
          </div>

          {/* Window grid */}
          <div className="md:col-span-3 window-grid rounded-md p-4">
            <div className="grid grid-cols-3 gap-2">
              {new Array(9).fill(0).map((_, i) => (
                <div key={i} className="aspect-square bg-chalk/80 border border-neutral-300 flex items-center justify-center text-sm text-neutral-600">
                  <span className="price-tag">Suki</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm text-neutral-600">Bukas: Lunes - Linggo, 8AM - 8PM</span>
              <span className="sticker">Bagong Dating!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
