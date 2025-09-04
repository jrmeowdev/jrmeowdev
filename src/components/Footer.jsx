import { useState, useEffect } from 'react'

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [visitCount] = useState(Math.floor(Math.random() * 1000) + 500) // Simulated visit count
  const [isStoreOpen, setIsStoreOpen] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime(now)
      
      // Check if store is "open" (8AM - 8PM)
      const hours = now.getHours()
      setIsStoreOpen(hours >= 8 && hours < 20)
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })
  }

  const quickLinks = [
    { label: 'Projects', href: '#projects', icon: '🏪' },
    { label: 'About', href: '#about', icon: '👋' },
    { label: 'Contact', href: '#contact', icon: '📞' },
    { label: 'Resume', href: '#', icon: '📄' }
  ]

  const socialLinks = [
    { label: 'LinkedIn', href: '#', icon: '💼', color: 'hover:text-blue-600' },
    { label: 'GitHub', href: '#', icon: '💻', color: 'hover:text-gray-800' },
    { label: 'Dribbble', href: '#', icon: '🎨', color: 'hover:text-pink-500' },
    { label: 'Twitter', href: '#', icon: '🐦', color: 'hover:text-blue-400' }
  ]

  const technologies = [
    'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Next.js', 'Vue.js', 'Firebase', 'MongoDB'
  ]

  return (
    <footer className="relative bg-wood text-white overflow-hidden">
      {/* Decorative awning strip */}
      <div className="awning h-3 md:h-4 w-full"></div>
      
      {/* Overlay + subtle pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.25'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 relative">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Store Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-maya rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-2xl">🏪</span>
              </div>
              <div>
                <div className="signage text-2xl text-white">
                  Salamat, Suki!
                </div>
                <div className="text-sm text-neutral-300">
                  Your friendly neighborhood developer
                </div>
              </div>
            </div>
            
            <p className="text-neutral-300 text-sm leading-relaxed mb-4">
              Just like your favorite sari-sari store, I'm here to provide everything you need 
              for your web development projects. Mura, mabilis, at de-kalidad! 
              Thanks for visiting my digital tindahan.
            </p>

            {/* Store Status */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-3 mb-4">
              <div className="flex items-center justify-between">
                {isStoreOpen ? (
                  <span className="badge-retro">
                    <span className="status-dot" aria-hidden="true"></span>
                    <span className="neon-open font-semibold">Open</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span className="text-sm font-medium text-red-200">Closed</span>
                  </span>
                )}
                <div className="text-xs text-neutral-300">
                  {formatTime(currentTime)}
                </div>
              </div>
              <div className="text-xs text-neutral-400 mt-1">
                Operating Hours: 8:00 AM - 8:00 PM (GMT+8)
              </div>
            </div>

            {/* Visit Counter */}
            <div className="flex items-center gap-4 text-xs text-neutral-400">
              <div className="flex items-center gap-1">
                <span>👥</span>
                <span>Visitors: {visitCount.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>📅</span>
                <span>Est. 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <span>📍</span>
                <span>Metro Manila, PH</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
              <span>🗂️</span>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="flex items-center gap-2 text-neutral-300 hover:text-maya transition-colors text-sm group"
                  >
                    <span className="group-hover:animate-bounce">{link.icon}</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-3 text-sm">Built With</h4>
              <div className="flex flex-wrap gap-1">
                {technologies.slice(0, 4).map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-white/10 px-2 py-1 rounded-md text-neutral-300 hover:bg-maya/20 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
              <span>📱</span>
              Stay Connected
            </h4>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <span>✉️</span>
                <a href="mailto:hello@example.com" className="hover:text-maya transition-colors">
                  hello@example.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <span>📍</span>
                <span>Metro Manila, Philippines</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className={`flex items-center gap-2 text-neutral-300 ${social.color} transition-colors text-sm group`}
                >
                  <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6 bg-white/5 rounded-lg p-3">
              <h5 className="text-sm font-medium text-white mb-2">Get Updates</h5>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 bg-white/10 border border-white/20 rounded px-2 py-1 text-xs text-white placeholder-neutral-400 focus:outline-none focus:border-maya"
                />
                <button className="bg-maya hover:bg-maya/80 px-3 py-1 rounded text-xs font-medium transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-4 text-xs text-neutral-400">
              <span>© {new Date().getFullYear()} {`{Your Name}`}. All rights reserved.</span>
              <span>•</span>
              <span>Made with ❤️ in the Philippines</span>
            </div>

            {/* Fun tagline */}
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span>🏪</span>
              <span>"Coding na, networking pa!" - Your Digital Tindero</span>
            </div>
          </div>

          {/* Extra Fun Element */}
          <div className="text-center mt-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-maya/20 to-mustard/20 rounded-full px-4 py-1">
              <span className="animate-bounce">🙏</span>
              <span className="text-xs text-neutral-300">
                Salamat sa pagbisita! Come back soon, ha?
              </span>
              <span className="animate-bounce">✨</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating back to top button */}
      <a 
        href="#home" 
        className="fixed bottom-6 right-6 bg-maya hover:bg-maya/80 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
        title="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </footer>
  )
}