import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function NavigationBar({ darkMode, toggleDarkMode }) {
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
      isScrolled 
        ? 'bg-dominant-light/95 dark:bg-dominant-dark/95 backdrop-blur-md shadow-minimal' 
        : 'bg-dominant-light/90 dark:bg-dominant-dark/90 backdrop-blur'
    } border-b border-secondary-200 dark:border-secondary-700`}>
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.a 
            href="#home" 
            className="flex items-center gap-3 group relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <motion.span 
                className="text-xl md:text-2xl font-bold text-text-primary dark:text-text-primary-dark tracking-tight relative z-10"
                whileHover={{
                  textShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
                }}
                transition={{ duration: 0.3 }}
              >
                Jeremiah Reyes
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-primary-dark rounded-lg blur-sm opacity-0 -z-10"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-text-secondary dark:text-text-secondary-dark hover:text-accent-primary dark:hover:text-accent-primary-dark transition-colors font-medium">
              About
            </a>
            <a href="#projects" className="text-text-secondary dark:text-text-secondary-dark hover:text-accent-primary dark:hover:text-accent-primary-dark transition-colors font-medium">
              Projects
            </a>
            <a href="#contact" className="text-text-secondary dark:text-text-secondary-dark hover:text-accent-primary dark:hover:text-accent-primary-dark transition-colors font-medium">
              Contact
            </a>
            
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors"
              aria-label="Toggle dark mode"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: darkMode ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {darkMode ? (
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </nav>

          <div className="md:hidden flex items-center gap-3">
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors"
              aria-label="Toggle dark mode"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: darkMode ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {darkMode ? (
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-slate-700 dark:text-slate-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </motion.div>
            </motion.button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-center"
              aria-label="Menu"
            >
              <span className={`block w-6 h-0.5 bg-text-primary dark:bg-text-primary-dark transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-text-primary dark:bg-text-primary-dark transition-all duration-300 my-1 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-text-primary dark:bg-text-primary-dark transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </button>
          </div>
        </div>

        <nav className={`md:hidden border-t border-secondary-200 dark:border-secondary-700 mt-4 pt-4 transition-all duration-300 ${
          mobileMenuOpen ? 'block opacity-100' : 'hidden opacity-0'
        }`}>
          <div className="flex flex-col gap-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} 
               className="text-text-secondary dark:text-text-secondary-dark hover:text-accent-primary dark:hover:text-accent-primary-dark transition-colors font-medium py-2">
              About
            </a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}
               className="text-text-secondary dark:text-text-secondary-dark hover:text-accent-primary dark:hover:text-accent-primary-dark transition-colors font-medium py-2">
              Projects
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}
               className="text-text-secondary dark:text-text-secondary-dark hover:text-accent-primary dark:hover:text-accent-primary-dark transition-colors font-medium py-2">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}