import { ArrowRight, BookOpen, Check, PackageCheck, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { categories, productsByCategory } from '../data/products'
import catalogue from '../assets/product-range.jpg'

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title={<>Explore the complete <span className="text-royal">Twin product range.</span></>}
        text="Choose a product category, view the exact product image, then open the product page for specifications and direct WhatsApp enquiry."
      />

      <section className="border-b border-slate-100 bg-white px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-3 md:grid-cols-4">
          {[
            [ShieldCheck, 'Quality Focus'],
            [Sparkles, 'Hygienic Products'],
            [PackageCheck, 'Bulk Capability'],
            [Check, 'Business Friendly'],
          ].map(([Icon, label]) => {
            const IconComponent = Icon as typeof ShieldCheck
            return (
              <div key={String(label)} className="flex min-h-[68px] items-center gap-3 rounded-[18px] bg-mist px-3.5 py-3.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-navy shadow-sm"><IconComponent size={17} /></span>
                <span className="text-[13px] font-semibold leading-5 text-ink sm:text-sm">{String(label)}</span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <SectionTitle
              eyebrow="Product Categories"
              title={<>Select a category and <span className="text-royal">explore.</span></>}
              text="All product photos are displayed without overlays so the full product image remains visible on mobile and desktop."
            />
          </Reveal>

          <div className="mt-10 space-y-14 sm:mt-12">
            {categories.map((category, categoryIndex) => {
              const categoryProducts = productsByCategory(category.slug)
              return (
                <Reveal key={category.slug} delay={categoryIndex * 60}>
                  <section id={category.slug} className="scroll-mt-28 rounded-[30px] border border-slate-100 bg-mist/60 p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-royal">Category {String(categoryIndex + 1).padStart(2, '0')}</p>
                        <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">{category.label}</h2>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{category.shortDescription}</p>
                      </div>
                      <Link to={`/products/${category.slug}`} className="inline-flex w-max items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:bg-ink hover:text-white">
                        View Category <ArrowRight size={16} />
                      </Link>
                    </div>

                    <div className={`mt-6 grid gap-5 ${categoryProducts.length === 1 ? 'max-w-xl' : 'md:grid-cols-2'}`}>
                      {categoryProducts.map((product) => (
                        <ProductCard
                          key={product.id}
                          image={product.image}
                          name={product.shortName}
                          productId={product.id}
                          category={product.categoryLabel}
                        />
                      ))}
                    </div>
                  </section>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-navy shadow-sm"><BookOpen size={20} /></span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-royal">Product Catalogue</p>
                <h2 className="mt-1 text-2xl font-semibold text-ink sm:text-3xl">Full catalogue view</h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="overflow-hidden rounded-[28px] border border-slate-100 bg-white p-2 shadow-soft sm:p-4">
              <img
                src={catalogue}
                alt="Twin Paper Products full product catalogue"
                className="h-auto w-full object-contain"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
