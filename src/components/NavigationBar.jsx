import { useState, useEffect } from 'react'

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-chalk/95 backdrop-blur-md shadow-lg' : 'bg-chalk/90 backdrop-blur'
    } border-b-2 border-neutral-800`}>
      {/* Awning strip */}
      <div className="awning h-2 w-full"></div>
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with hanging sign animation */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <span className="signage text-xl md:text-2xl tracking-wide transform group-hover:rotate-1 transition-transform duration-300">
                SARI·SARI
              </span>
              <span className="absolute -bottom-1 left-0 text-[10px] text-brick font-semibold tracking-wider">
                EST. 2025
              </span>
            </div>
            <div className="hidden md:block w-px h-8 bg-neutral-400 mx-2" />
            <span className="hidden md:inline-block text-sm font-medium text-neutral-600 group-hover:text-brick transition-colors">
              PORTFOLIO
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#projects" className="nav-link group">
              <span className="relative">
                Projects
                <span className="nav-underline"></span>
              </span>
            </a>
            <a href="#about" className="nav-link group">
              <span className="relative">
                About
                <span className="nav-underline"></span>
              </span>
            </a>
            <a href="#contact" className="relative inline-flex items-center gap-2">
              <span className="badge-retro hover:scale-105 transition-transform duration-300">
                <span className="status-dot" aria-hidden="true"></span>
                <span className="neon-open font-semibold">Open</span>
              </span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-neutral-800 transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-neutral-800 transition-all duration-300 my-1 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-neutral-800 transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <nav className={`md:hidden border-t border-neutral-300 mt-3 pt-3 transition-all duration-300 ${
          mobileMenuOpen ? 'block opacity-100' : 'hidden opacity-0'
        }`}>
          <div className="flex flex-col gap-3">
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} 
               className="text-neutral-800 hover:text-brick transition-colors py-2">
              Projects
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}
               className="text-neutral-800 hover:text-brick transition-colors py-2">
              About
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}
               className="text-neutral-800 hover:text-brick transition-colors py-2">
              Contact
            </a>
          </div>
        </nav>
      </div>

    </header>
  )
}