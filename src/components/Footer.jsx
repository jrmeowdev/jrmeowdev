export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { label: 'LinkedIn', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Email', href: 'mailto:hello@example.com' }
  ]

  return (
    <footer className="border-t border-primary-200 dark:border-primary-700 bg-background-light dark:bg-background-dark">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-4">
              Let's Build Something Great Together
            </h3>
            <p className="text-text-light-secondary dark:text-text-dark-secondary mb-6 max-w-md">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together.
            </p>
            
            {/* Quick Links */}
            <div className="flex flex-wrap gap-6">
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-text-light dark:text-text-dark mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="block text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-200 dark:border-primary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
              {currentYear} Portfolio. All rights reserved.
            </div>
            <div className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
              Built with React & Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}