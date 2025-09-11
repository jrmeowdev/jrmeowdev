import { motion } from 'framer-motion'

export default function ProductCard({ 
  title, 
  description = 'Project description', 
  link = '#',
  tech = ['React', 'Tailwind'],
  image,
  github,
  featured = false
}) {
  // Tech icons mapping
  const techIcons = {
    'React': '⚛️',
    'JavaScript': '🟨',
    'TypeScript': '🔷',
    'Node.js': '🟢',
    'Tailwind': '💨',
    'CSS': '🎨',
    'HTML': '🌐',
    'Vue': '💚',
    'Next.js': '▲',
    'MongoDB': '🍃',
    'Firebase': '🔥',
    'Python': '🐍',
    'Express': '🚂'
  }
  return (
    <motion.div 
      className="bg-dominant-light dark:bg-dominant-dark rounded-2xl shadow-minimal border border-secondary-200 dark:border-secondary-700 overflow-hidden group hover:border-accent-primary dark:hover:border-accent-primary-dark transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* Image */}
      <div className="aspect-video bg-secondary-100 dark:bg-secondary-800 relative overflow-hidden">
        {image ? (
          <motion.img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <motion.div 
            className="w-full h-full flex items-center justify-center text-text-muted dark:text-text-muted-dark"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span 
              className="text-4xl"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🖼️
            </motion.span>
          </motion.div>
        )}
        {/* Featured indicator */}
        {featured && (
          <div className="absolute top-3 right-3">
            <div className="w-3 h-3 bg-accent-primary dark:bg-accent-primary-dark rounded-full"></div>
          </div>
        )}
      </div>

      {/* Content */}
      <motion.div 
        className="p-6 space-y-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Title */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg text-text-primary dark:text-text-primary-dark group-hover:text-accent-primary dark:group-hover:text-accent-primary-dark transition-colors leading-tight">
            {title}
          </h3>
          <motion.svg 
            className="w-5 h-5 text-text-muted dark:text-text-muted-dark group-hover:text-accent-primary dark:group-hover:text-accent-primary-dark transition-all flex-shrink-0 mt-0.5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            whileHover={{ 
              x: 5,
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </motion.svg>
        </div>

        {/* Description */}
        <p className="text-text-secondary dark:text-text-secondary-dark leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, i) => (
            <motion.span 
              key={i}
              className="flex items-center gap-1 text-xs bg-secondary-100 dark:bg-secondary-800 text-text-secondary dark:text-text-secondary-dark px-2 py-1 rounded-md transition-colors border border-secondary-200 dark:border-secondary-700"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.3, 
                delay: 0.3 + (i * 0.05),
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.1,
                y: -2,
                transition: { duration: 0.2 }
              }}
            >
              <motion.span 
                className="text-sm"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              >
                {techIcons[item] || '🔧'}
              </motion.span>
              {item}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <motion.a
            href={github || '#'}
            className="flex items-center gap-2 px-4 py-2 bg-secondary-800 hover:bg-secondary-700 text-white rounded-lg text-sm font-medium transition-colors flex-1 justify-center"
            whileHover={{ 
              scale: 1.02,
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </motion.a>
          
          <motion.a
            href={link || '#'}
            className="flex items-center gap-2 px-4 py-2 bg-accent-primary hover:bg-accent-secondary text-white rounded-lg text-sm font-medium transition-colors flex-1 justify-center"
            whileHover={{ 
              scale: 1.02,
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}