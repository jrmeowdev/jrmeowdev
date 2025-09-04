export default function AboutSection() {
  return (
    <div className="grid md:grid-cols-5 gap-8 items-start">
      <div className="md:col-span-3">
        <h3 className="signage text-2xl mb-3">Tindero/Tindera's Corner</h3>
        <div className="bg-white border border-neutral-300 rounded-md p-5 leading-relaxed">
          <p className="text-neutral-700">
            Kumusta! I’m <span className="font-semibold">{`{Your Name}`}</span>, a front-end developer and designer inspired by everyday
            Filipino ingenuity. This portfolio is styled like a sari-sari store—simple,
            approachable, and always open for suki. I build web experiences that feel
            friendly and fast, with thoughtful details and clean code.
          </p>
          <p className="text-neutral-700 mt-4">
            Skills: React, TypeScript/JavaScript, Tailwind CSS, UI/UX, and component-driven
            design. I love shipping UI systems, microinteractions, and performant apps.
          </p>
        </div>
      </div>
      <aside className="md:col-span-2 space-y-3">
        <div className="bg-white border border-neutral-300 rounded-md p-4">
          <h4 className="font-semibold mb-2">Stickers</h4>
          <div className="flex flex-wrap gap-2">
            <span className="sticker">Tatak Pinoy</span>
            <span className="sticker">Suki</span>
            <span className="sticker">Bukas</span>
            <span className="sticker">New</span>
          </div>
        </div>
        <div className="bg-white border border-neutral-300 rounded-md p-4">
          <h4 className="font-semibold mb-2">Tools & Tech</h4>
          <ul className="list-disc list-inside text-sm text-neutral-700 space-y-1">
            <li>React, Vite</li>
            <li>Tailwind CSS</li>
            <li>Node, REST/JSON</li>
            <li>Figma, Design Tokens</li>
          </ul>
        </div>
      </aside>
    </div>
  )
}
