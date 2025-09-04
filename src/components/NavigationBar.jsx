export default function NavigationBar() {
  return (
    <header className="sticky top-0 z-40 bg-chalk/90 backdrop-blur border-b border-neutral-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="signage text-2xl tracking-wide">SARI·SARI PORTFOLIO</span>
        </a>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <a href="#projects" className="hover:text-brick transition">Projects</a>
          <a href="#about" className="hover:text-brick transition">About</a>
          <a href="#contact" className="sticker hover:scale-105 transition-transform">Open</a>
        </nav>
      </div>
    </header>
  )
}
