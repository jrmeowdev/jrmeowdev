import './index.css'
import NavigationBar from './components/NavigationBar.jsx'
import StoreFrontHero from './components/StoreFrontHero.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import AboutSection from './components/AboutSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-1">
        <StoreFrontHero />
        <section id="projects" className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="signage text-3xl md:text-4xl mb-6">Tindahan Projects</h2>
            <ProductGrid />
          </div>
        </section>
        <section id="about" className="py-12 bg-chalk/70">
          <div className="max-w-6xl mx-auto px-4">
            <AboutSection />
          </div>
        </section>
        <section id="contact" className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <ContactSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
