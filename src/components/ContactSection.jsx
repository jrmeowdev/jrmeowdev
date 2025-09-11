import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section className="contact-section py-20 px-4">
      <div className="contact-container max-w-2xl mx-auto text-center">
        <motion.div 
          className="contact-content space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="contact-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="contact-title text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">
              Let's Connect
            </h2>
            <p className="contact-description text-lg text-text-light-secondary dark:text-text-dark-secondary leading-relaxed mb-6">
              Ready to bring your ideas to life? I'm always excited to work on new projects 
              and collaborate with amazing people.
            </p>
          </motion.div>

          {/* Email Display */}
          <motion.div 
            className="contact-email-card bg-primary-50 dark:bg-primary-900 rounded-xl p-6 border border-primary-200 dark:border-primary-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <div className="email-info flex items-center justify-center gap-4 mb-4">
              <div className="email-text">
                <h3 className="email-title font-semibold text-text-light dark:text-text-dark">Email Me</h3>
                <p className="email-subtitle text-text-light-secondary dark:text-text-dark-secondary text-sm">
                  I typically respond within 24 hours
                </p>
              </div>
            </div>
            
            <motion.a 
              href="mailto:jeremiahreyes.r01@gmail.com"
              className="email-button mt-2 block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors shadow-minimal
                         dark:text-text-dark"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              jeremiahreyes.r01@gmail.com
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="social-links grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a 
              href="https://ph.linkedin.com/in/jeremiah-reyes-832a02321" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-card linkedin-card flex items-center gap-3 p-4 bg-primary-50 dark:bg-primary-900 rounded-lg border border-primary-200 dark:border-primary-700 hover:border-accent-light dark:hover:border-accent-dark transition-colors group"
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="social-icon w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center"
                whileHover={{ 
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="text-white text-lg">💼</span>
              </motion.div>
              <div className="social-info">
                <div className="social-name font-medium text-text-light dark:text-text-dark text-sm">LinkedIn</div>
                <div className="social-action text-text-light-secondary dark:text-text-dark-secondary text-xs">Connect</div>
              </div>
            </motion.a>
            
            <motion.a 
              href="https://github.com/jrmeowdev" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-card github-card flex items-center gap-3 p-4 bg-primary-50 dark:bg-primary-900 rounded-lg border border-primary-200 dark:border-primary-700 hover:border-accent-light dark:hover:border-accent-dark transition-colors group"
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="social-icon w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center"
                whileHover={{ 
                  rotate: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="text-white text-lg">💻</span>
              </motion.div>
              <div className="social-info">
                <div className="social-name font-medium text-text-light dark:text-text-dark text-sm">GitHub</div>
                <div className="social-action text-text-light-secondary dark:text-text-dark-secondary text-xs">View Code</div>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}