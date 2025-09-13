import { motion } from 'framer-motion'
import meImage from '../assets/me.jpg'

export default function AboutSection() {
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">

      <div className="flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-primary-50 dark:bg-primary-900 border-4 border-primary-200 dark:border-primary-700 rounded-full shadow-lg overflow-hidden">
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
          I'm an IT graduate who loves building apps and websites. I work with React, PHP, and MySQL to create simple, scalable, and user-friendly projects
          </p>
        </motion.div>

        <div className="space-y-4">
          {[
            {
              icon: "🎯",
              title: "Full-Stack Development",
              description: "Proficient in HTML, CSS, JavaScript, PHP, MySQL, and modern frameworks like React"
            },
            {
              icon: "🎓",
              title: "IT Graduate",
              description: "Bachelor of Science in Information Technology from Bulacan State University (2020-2024)"
            },
            {
              icon: "⚡",
              title: "Agile Methodologies",
              description: "Experienced in building scalable applications using cutting-edge technologies and Agile practices"
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