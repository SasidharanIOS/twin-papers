import { ArrowLeft, Check, MessageCircle } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { findProduct } from '../data/products'
import { contact, whatsappLink } from '../config/contact'

export default function ProductDetail() {
  const { productId = '' } = useParams()
  const product = findProduct(productId)

  if (!product) return <Navigate to="/products" replace />

  const enquiryUrl = whatsappLink(`Hello Twin Paper Products, I would like more details about ${product.name}.`)

  return (
    <section className="bg-mist px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-36">
      <div className="mx-auto max-w-[1180px]">
        <Link to={`/products/${product.category}`} className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-royal">
          <ArrowLeft size={17} /> Back to {product.categoryLabel}
        </Link>

        <div className="mt-6 grid overflow-hidden rounded-[32px] border border-slate-100 bg-white shadow-soft lg:grid-cols-[1.02fr_.98fr]">
          <Reveal className="h-full">
            <div className="flex min-h-[360px] h-full items-center justify-center bg-white p-4 sm:min-h-[500px] sm:p-6 lg:min-h-[620px]">
              <img src={product.image} alt={product.name} className="max-h-[600px] w-full object-contain" />
            </div>
          </Reveal>

          <div className="border-t border-slate-100 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-royal">{product.categoryLabel}</p>
            <h1 className="mt-3 text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] tracking-[-.025em] text-ink">{product.name}</h1>
            <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base">{product.description}</p>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400">Specifications</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {product.specs.map((spec) => (
                  <div key={`${spec.label}-${spec.value}`} className="rounded-[18px] bg-mist px-4 py-3.5">
                    <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-slate-400">{spec.label}</p>
                    <p className="mt-1 text-sm font-semibold text-ink">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400">Suitable For</p>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {product.applications.map((application) => (
                  <div key={application} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#e9f7ed] text-[#287a47]"><Check size={13} strokeWidth={3} /></span>
                    {application}
                  </div>
                ))}
              </div>
            </div>

            <a
              href={enquiryUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-[#1fbd59]"
            >
              <MessageCircle size={19} /> Enquire for More Details
            </a>
            <p className="mt-3 text-center text-xs text-slate-500">WhatsApp: {contact.primaryPhoneDisplay}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
