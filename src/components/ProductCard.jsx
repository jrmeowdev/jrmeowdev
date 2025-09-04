import { useState } from 'react'

export default function ProductCard({ 
  title, 
  tag = 'Bestseller', 
  description = 'Project description', 
  link = '#',
  tech = ['React', 'Tailwind'],
  image = null,
  featured = false
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const tagColors = {
    'Bestseller': 'bg-brick',
    '₱ Promo': 'bg-mustard text-neutral-900',
    'Bagong Dating': 'bg-bottle',
    'Limited': 'bg-maya',
    'Sale': 'bg-red-500'
  }

  return (
    <a 
      href={link} 
      className={`group block border-2 rounded-lg overflow-hidden transition-all duration-300 ${
        featured 
          ? 'border-maya bg-gradient-to-br from-white to-chalk shadow-xl hover:shadow-2xl transform hover:-translate-y-2' 
          : 'border-neutral-300 bg-white hover:shadow-xl hover:border-neutral-400 hover:-translate-y-1'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-chalk to-neutral-100">
        {image ? (
          <div className="relative w-full h-full">
            <img 
              src={image} 
              alt={title}
              className={`w-full h-full object-cover transition-all duration-700 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              } group-hover:scale-110`}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-maya"></div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full relative overflow-hidden">
            {/* Animated placeholder background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-maya/20 to-transparent animate-pulse"></div>
            </div>
            
            {/* Placeholder content */}
            <div className="relative text-center">
              <div className="text-4xl mb-2 group-hover:animate-bounce">📦</div>
              <span className="text-sm text-neutral-500">Project Preview</span>
            </div>
          </div>
        )}

        {/* Tag */}
        <div className="absolute top-3 left-3 transform group-hover:rotate-3 transition-transform duration-300">
          <span className={`${tagColors[tag] || 'bg-neutral-600'} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg inline-flex items-center gap-1`}>
            {tag === 'Bestseller' && '🔥'}
            {tag === '₱ Promo' && '💰'}
            {tag === 'Bagong Dating' && '✨'}
            {tag}
          </span>
        </div>

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-3 right-3">
            <span className="bg-mustard text-neutral-900 rounded-full p-2 shadow-lg inline-block animate-pulse">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
          </div>
        )}

        {/* Hover overlay with quick actions */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3`}>
          <div className="flex gap-2">
            <span className="bg-white/90 backdrop-blur text-neutral-800 px-3 py-1 rounded-md text-xs font-medium hover:bg-white transition">
              View Details
            </span>
            <span className="bg-white/90 backdrop-blur text-neutral-800 px-3 py-1 rounded-md text-xs font-medium hover:bg-white transition">
              Live Demo
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title with icon */}
        <div className="flex items-start gap-2 mb-2">
          <h3 className="font-bold text-lg text-neutral-900 group-hover:text-brick transition-colors flex-1 leading-tight">
            {title}
          </h3>
          <span className="text-maya opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300">
            →
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {tech.map((item, i) => (
            <span 
              key={i}
              className="text-xs bg-chalk/80 border border-neutral-200 px-2 py-0.5 rounded-md text-neutral-600 group-hover:border-maya/30 group-hover:bg-maya/10 transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Hover indicator */}
        <div className={`h-0.5 bg-gradient-to-r from-maya to-mustard mt-3 transition-all duration-500 ${
          isHovered ? 'w-full' : 'w-0'
        }`}></div>
      </div>
    </a>
  )
}