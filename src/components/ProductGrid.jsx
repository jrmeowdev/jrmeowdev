import { useState } from 'react'
import ProductCard from './ProductCard.jsx'

const projects = [
  {
    title: 'E-Padala Tracker',
    tag: 'Bestseller',
    description: 'Real-time parcel tracking system with QR codes, SMS notifications, and receipt generation.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    link: '#',
    featured: true
  },
  {
    title: 'Load Wallet App',
    tag: '₱ Promo',
    description: 'Mobile top-up dashboard with suki loyalty system, auto-discounts, and payment gateway.',
    tech: ['Next.js', 'Tailwind', 'Stripe API', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Paninda Inventory',
    tag: 'Bagong Dating',
    description: 'Smart inventory manager with barcode scanning, price bundling, and sales analytics.',
    tech: ['Vue.js', 'Express', 'Chart.js', 'MySQL'],
    link: '#',
  },
  {
    title: 'Karinderya POS',
    tag: 'Bestseller',
    description: 'Touch-friendly point-of-sale for food stalls with daily menu management.',
    tech: ['React Native', 'Firebase', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Barangay Connect',
    tag: 'Limited',
    description: 'Community bulletin board app for announcements, events, and local services.',
    tech: ['React', 'Supabase', 'PWA', 'Push API'],
    link: '#',
  },
  {
    title: 'Trike Booking System',
    tag: '₱ Promo',
    description: 'Transportation booking platform with driver tracking and fare calculator.',
    tech: ['Flutter', 'Google Maps', 'Node.js'],
    link: '#',
  }
]

const categories = ['All', 'Web Apps', 'Mobile', 'E-Commerce', 'Dashboard']

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [isGridView, setIsGridView] = useState(true)

  return (
    <div className="space-y-6">
      {/* Filter Bar */}
      <div className="bg-white border-2 border-neutral-300 rounded-lg p-4 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-maya text-white shadow-lg transform scale-105'
                    : 'bg-chalk border border-neutral-300 text-neutral-700 hover:border-maya hover:shadow-md'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Sort */}
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 border border-neutral-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-maya"
            >
              <option value="featured">Featured First</option>
              <option value="newest">Newest</option>
              <option value="popular">Most Popular</option>
            </select>

            {/* View Toggle */}
            <div className="flex items-center bg-chalk rounded-md border border-neutral-300 p-0.5">
              <button
                onClick={() => setIsGridView(true)}
                className={`p-1.5 rounded transition-all ${
                  isGridView ? 'bg-white shadow-sm' : ''
                }`}
                aria-label="Grid view"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setIsGridView(false)}
                className={`p-1.5 rounded transition-all ${
                  !isGridView ? 'bg-white shadow-sm' : ''
                }`}
                aria-label="List view"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Active filters indicator */}
        <div className="mt-3 flex items-center gap-2"></div>
      </div>
    </div>
  )
}


  