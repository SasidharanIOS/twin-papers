import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type Props = {
  image: string
  name: string
  productId: string
  category?: string
  compact?: boolean
}

export default function ProductCard({ image, name, productId, category, compact = false }: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className={`flex items-center justify-center overflow-hidden bg-white p-3 ${compact ? 'h-[245px]' : 'h-[300px] sm:h-[340px]'}`}>
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col border-t border-slate-100 p-5 sm:p-6">
        {category && <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-royal">{category}</p>}
        <h3 className="mt-2 text-lg font-semibold leading-6 text-ink sm:text-xl">{name}</h3>
        <Link
          to={`/product/${productId}`}
          className="group/button mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy"
        >
          Explore the Product
          <ArrowRight size={16} className="transition group-hover/button:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
