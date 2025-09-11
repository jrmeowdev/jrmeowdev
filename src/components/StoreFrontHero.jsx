import { motion } from 'framer-motion'

export default function StoreFrontHero() {
  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Tailwind', icon: '💨' },
    { name: 'UI/UX', icon: '✨' },
    { name: 'Design', icon: '🎯' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <section id="home" className="py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-text-primary dark:text-text-primary-dark mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full-Stack Developer
            {/* <motion.span 
              className="block text-accent-light dark:text-accent-dark"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              & Designer
            </motion.span> */}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-text-secondary dark:text-text-secondary-dark mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            I create beautiful, functional web experiences with clean code and thoughtful design.
          </motion.p>
        </motion.div>

        {/* Skills grid */}
        <motion.div 
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {skills.map((skill, index) => (
              <motion.span 
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2 bg-secondary-100 dark:bg-secondary-800 text-text-secondary dark:text-text-secondary-dark rounded-full text-sm font-medium cursor-default border border-secondary-200 dark:border-secondary-700"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className="text-base"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  {skill.icon}
                </motion.span>
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}