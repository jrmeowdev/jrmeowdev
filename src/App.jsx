import './index.css'
import { useState, useEffect } from 'react'
import NavigationBar from './components/NavigationBar.jsx'
import StoreFrontHero from './components/StoreFrontHero.jsx'
import AboutSection from './components/AboutSection.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import ContactSection from './components/ContactSection.jsx'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <NavigationBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <StoreFrontHero />
        
        <section id="about" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <AboutSection />
          </div>
        </section>
        
        <section id="projects" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <ProductGrid />
          </div>
        </section>
        
        <section id="contact" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <ContactSection />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
