export default function ProductCard({ title, tag = 'Bestseller', description = 'Project description', link = '#' }) {
  return (
    <a href={link} className="group block border border-neutral-300 rounded-md overflow-hidden bg-white hover:shadow-lg transition-shadow">
      <div className="relative">
        <div className="aspect-video bg-chalk/70 flex items-center justify-center text-neutral-500">
          <span className="text-sm">Project Thumbnail</span>
        </div>
        <span className="price-tag absolute top-2 left-2">{tag}</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-neutral-900 group-hover:text-brick transition-colors">{title}</h3>
        <p className="text-sm text-neutral-600 mt-1 line-clamp-2">{description}</p>
      </div>
    </a>
  )
}
