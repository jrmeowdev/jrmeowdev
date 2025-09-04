export default function ContactSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white border border-neutral-300 rounded-md p-5">
        <h3 className="signage text-2xl mb-3">Order Slip</h3>
        <form className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" className="w-full border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-maya" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-maya" placeholder="you@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea rows={4} className="w-full border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-maya" placeholder="Sabihin mo lang, suki!"></textarea>
          </div>
          <button type="submit" className="bg-bottle text-white px-4 py-2 rounded-md hover:bg-bottle/90 transition">Send</button>
        </form>
      </div>
      <div className="space-y-3">
        <div className="bg-white border border-neutral-300 rounded-md p-5">
          <h4 className="font-semibold mb-2">Find Me</h4>
          <ul className="text-sm text-neutral-700 space-y-1">
            <li>📍 Metro Manila, PH</li>
            <li>⏰ Bukas: 8AM - 8PM daily</li>
            <li>📫 Email: hello@example.com</li>
          </ul>
        </div>
        <div className="bg-white border border-neutral-300 rounded-md p-5">
          <h4 className="font-semibold mb-2">Stickers</h4>
          <div className="flex flex-wrap gap-2">
            <span className="sticker">Follow</span>
            <span className="sticker">Hire Me</span>
            <span className="sticker">Open</span>
          </div>
        </div>
      </div>
    </div>
  )
}
