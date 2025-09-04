import ProductCard from './ProductCard.jsx'

const sampleProjects = [
  {
    title: 'E-Padala Tracker',
    tag: 'Bestseller',
    description: 'A simple parcel tracking UI with receipts and QR codes.',
    link: '#',
  },
  {
    title: 'Load Wallet App',
    tag: '₱ Promo',
    description: 'Mobile top-up dashboard with suki price tiers.',
    link: '#',
  },
  {
    title: 'Paninda Inventory',
    tag: 'Bagong Dating',
    description: 'Inventory manager inspired by sari-sari pricing and bundles.',
    link: '#',
  },
]

export default function ProductGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sampleProjects.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  )
}
