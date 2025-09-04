export default function Footer() {
  return (
    <footer className="border-t border-neutral-300 bg-white/70">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-neutral-700 flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6 justify-between">
        <div>
          <div className="signage text-xl">Salamat, Suki!</div>
          <p className="text-neutral-600">© {new Date().getFullYear()} {`{Your Name}`}. All rights reserved.</p>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <li>🕘 Hours: 8AM - 8PM</li>
          <li>📍 Metro Manila</li>
          <li>✉️ hello@example.com</li>
        </ul>
      </div>
    </footer>
  )
}
