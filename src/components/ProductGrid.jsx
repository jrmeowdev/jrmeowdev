import { useState } from 'react'
import ProductCard from './ProductCard.jsx'
import kitakoImage from '../assets/KitaKo.png'
import mssgemeImage from '../assets/mssgeme.png'
import ecowaiImage from '../assets/ecowai.png'

const projects = [
  {
    title: '🪙 KitaKo — "I See My Income"',
    description: 'A modern budgeting app that helps students, workers, and families manage money wisely with clarity and control. KitaKo allows users to input their income and expenses, visualize their spending through charts, and even download summaries in PDF form. Built for accessibility — usable both online and offline — promoting smart financial management for everyday users.',
    tech: ['React', 'JavaScript', 'CSS'],
    link: 'https://fbex-calcu.vercel.app/',
    github: 'https://github.com/jrmeowdev?tab=repositories',
    image: kitakoImage,
    featured: true,
    category: 'Web Apps'
  },
  {
    title: '💬 MessageMe — Secure Messaging Platform',
    description: 'MessageMe is a real-time messaging application built with a focus on privacy and security. It features encrypted communication, user authentication, and a clean chat interface that balances simplicity and safety. Designed for users who value secure conversations and a modern UI experience.',
    tech: ['React', 'Node.js', 'Firebase'],
    link: 'https://mssgeme-app.vercel.app/',
    github: 'https://github.com/jrmeowdev?tab=repositories',
    image: mssgemeImage,
    featured: true,
    category: 'Web Apps'
  },
  {
    title: 'E-Commerce with AI Automation',
    description: 'A full-stack e-commerce platform with AI-powered smart search, visual search, and a GPT-3.5 chatbot. Features secure authentication, real-time updates, and personalized shopping experiences.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: '#',
    github: 'https://github.com/jrmeowdev?tab=repositories',
    featured: true,
    image: ecowaiImage,
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
              github={project.github}
              image={project.image}
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