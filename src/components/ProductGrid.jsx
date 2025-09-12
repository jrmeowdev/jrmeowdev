import { useState } from 'react'
import ProductCard from './ProductCard.jsx'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with real-time inventory, payment processing, and analytics dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: '#',
    featured: true,
    category: 'Web Apps'
  }
]

const categories = ['All', 'Web Apps', 'Mobile', 'Dashboard']

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  )

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            aria-pressed={selectedCategory === category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border outline-none focus-visible:ring-2 focus-visible:ring-accent-primary dark:focus-visible:ring-accent-primary-dark ${
              selectedCategory === category
                 ? 'bg-transparent text-accent-primary border-accent-primary shadow-minimal dark:text-accent-primary dark:border-accent-primary-dark'
  : 'bg-transparent text-text-secondary dark:text-text-secondary-dark border-secondary-300 dark:border-secondary-600 hover:bg-secondary-100 dark:hover:bg-secondary-800 hover:border-accent-primary dark:hover:border-accent-primary-dark'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={index}
            className="fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProductCard
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
              featured={project.featured}
            />
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary-dark mb-2">No projects found</h3>
          <p className="text-text-secondary dark:text-text-secondary-dark mb-4">
            No projects match your current filter.
          </p>
          <button 
            onClick={() => setSelectedCategory('All')}
            className="px-4 py-2 bg-accent-primary hover:bg-accent-secondary text-white rounded-lg transition-colors font-medium"
          >
            Show all projects
          </button>
        </div>
      )}
    </div>
  )
}