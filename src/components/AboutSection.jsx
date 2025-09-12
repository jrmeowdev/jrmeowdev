import { motion } from 'framer-motion'
import meImage from '../assets/me.jpg'

export default function AboutSection() {
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">

      <div className="flex justify-center">
        <div className="w-80 aspect-[3/4] bg-primary-50 dark:bg-primary-900 border-4 border-primary-200 dark:border-primary-700 rounded-2xl shadow-lg overflow-hidden">
          <img 
            src={meImage} 
            alt="Profile photo" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">
            About Me
          </h2>
          <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary leading-relaxed mb-6">
            I'm a frontend developer passionate about creating beautiful, functional web experiences. 
            I specialize in React, TypeScript, and modern web technologies.
          </p>
        </motion.div>

        <div className="space-y-4">
          {[
            {
              icon: "🎯",
              title: "Frontend Focus",
              description: "Specialized in React, Next.js, and modern JavaScript frameworks"
            },
            {
              icon: "🎨",
              title: "Design Minded",
              description: "Strong focus on UI/UX design and creating intuitive user experiences"
            },
            {
              icon: "⚡",
              title: "Performance Driven",
              description: "Committed to building fast, accessible, and scalable applications"
            }
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.4 + (index * 0.1),
                ease: "easeOut"
              }}
              whileHover={{ 
                x: 10,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-lg flex items-center justify-center"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="text-xl">{item.icon}</span>
              </motion.div>
              <div>
                <h3 className="font-semibold text-text-light dark:text-text-dark">{item.title}</h3>
                <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}