import { ArrowRight, ArrowUpRight, Factory, PackageCheck, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { products } from '../data/products'
import collection from '../assets/product-collection.jpg'
import warehouse from '../assets/warehouse-stock.jpg'

const featured = products.slice(0, 4)

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#eef7ff] pt-[72px] sm:pt-[76px]">
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="absolute -left-24 top-20 h-[360px] w-[360px] rounded-full bg-sky/30 blur-3xl" />
        <div className="absolute -right-16 top-36 h-[320px] w-[320px] rounded-full bg-royal/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1500px] px-5 pb-14 pt-12 sm:px-8 sm:pb-16 sm:pt-14 lg:px-12 lg:pb-20 lg:pt-20">
          <div className="mx-auto max-w-5xl text-center">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.17em] text-navy shadow-sm backdrop-blur-xl sm:text-xs">
              <Sparkles size={14} className="text-royal" />
              Premium Tissue Paper Manufacturer
            </div>

            <h1 className="font-serif-display mt-6 text-[clamp(40px,6.8vw,86px)] leading-[.94] tracking-[-.04em] text-ink">
              Softness Made Better.<br />
              Quality Made <span className="text-royal">Twin.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
              Premium tissues, toilet rolls and custom private-label paper products manufactured in Erode for homes, hospitality, institutions and bulk buyers.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link to="/products" className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-ink/20 transition hover:-translate-y-0.5 hover:bg-navy">
                Explore Products <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </Link>
              <Link to="/private-label" className="group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/90 px-6 py-3.5 text-sm font-semibold text-ink shadow-md transition hover:-translate-y-0.5 hover:bg-white">
                Private Label <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-[1180px] overflow-hidden rounded-[32px] border border-white/80 bg-white p-2 shadow-soft sm:mt-14 sm:p-3">
            <img src={collection} alt="Twin Paper Products product range" className="h-auto w-full rounded-[24px] object-contain" />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <SectionTitle
              eyebrow="Featured Products"
              title={<>Products built around <span className="text-royal">daily needs.</span></>}
              text="Start with our most requested tissue options. Open any product to see the full specification and enquire directly through WhatsApp."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((product, index) => (
              <Reveal key={product.id} delay={index * 70} className="h-full">
                <ProductCard
                  image={product.image}
                  name={product.shortName}
                  productId={product.id}
                  category={product.categoryLabel}
                  compact
                />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 text-center">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-mist px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white">
              View Complete Product Range <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[30px] bg-white p-2 shadow-soft">
              <img src={warehouse} alt="Twin Paper Products warehouse stock" className="h-[360px] w-full rounded-[24px] object-cover sm:h-[470px]" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SectionTitle
              eyebrow="Business Supply"
              title={<>Reliable supply for retail, hospitality and <span className="text-royal">bulk orders.</span></>}
              text="Our range supports regular retail requirements as well as hotels, restaurants, offices, hospitals, airlines, institutions, homes and bulk buyers. For brands and distributors, we also support custom packaging and private-label manufacturing conversations."
            />

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                [ShieldCheck, 'Quality Focus'],
                [Sparkles, 'Hygienic Products'],
                [PackageCheck, 'Bulk Capability'],
                [Factory, 'Business Friendly'],
              ].map(([Icon, label]) => {
                const IconComponent = Icon as typeof ShieldCheck
                return (
                  <div key={String(label)} className="flex min-h-[74px] items-center gap-3 rounded-[20px] border border-slate-100 bg-white px-4 py-3 shadow-sm">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky/20 text-navy"><IconComponent size={18} /></span>
                    <span className="text-sm font-semibold text-ink">{String(label)}</span>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
