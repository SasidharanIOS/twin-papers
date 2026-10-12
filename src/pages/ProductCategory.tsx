import { ArrowLeft } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import { findCategory, productsByCategory, type ProductCategorySlug } from '../data/products'

export default function ProductCategory() {
  const { categorySlug = '' } = useParams()
  const category = findCategory(categorySlug)

  if (!category) return <Navigate to="/products" replace />

  const categoryProducts = productsByCategory(category.slug as ProductCategorySlug)

  return (
    <>
      <PageHero
        eyebrow="Product Category"
        title={category.label}
        text={category.shortDescription}
      />

      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1180px]">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-royal">
            <ArrowLeft size={17} /> Back to all products
          </Link>

          <div className={`mt-8 grid gap-6 ${categoryProducts.length > 1 ? 'md:grid-cols-2' : 'max-w-xl'}`}>
            {categoryProducts.map((product, index) => (
              <Reveal key={product.id} delay={index * 70} className="h-full">
                <ProductCard
                  image={product.image}
                  name={product.shortName}
                  productId={product.id}
                  category={product.categoryLabel}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
