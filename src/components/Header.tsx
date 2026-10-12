import { ArrowUpRight, ChevronDown, Menu, Phone, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import logo from '../assets/twin-logo.png'
import { categories } from '../data/products'
import { contact } from '../config/contact'

const primaryLinks = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/private-label', 'Private Label'],
  ['/contact', 'Contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [productOpen, setProductOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setProductOpen(false)
    setMobileProductsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductOpen(false)
      }
    }
    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [])

  const productActive = location.pathname.startsWith('/products') || location.pathname.startsWith('/product/')

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-white/60 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between px-4 sm:h-[76px] sm:px-6 lg:px-10 xl:px-12">
        <Link to="/" className="relative z-10 flex items-center" aria-label="Twin Paper Products home">
          <span className="rounded-2xl bg-ink px-3 py-2 shadow-lg shadow-ink/10">
            <img src={logo} alt="Twin Paper Products" className="h-8 w-auto object-contain sm:h-10" />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/80 bg-white/75 p-1.5 shadow-sm backdrop-blur-xl lg:flex">
          <NavLink to="/" className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-ink text-white shadow' : 'text-slate-600 hover:bg-white hover:text-ink'}`}>
            Home
          </NavLink>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setProductOpen((value) => !value)}
              aria-expanded={productOpen}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${productActive ? 'bg-ink text-white shadow' : 'text-slate-600 hover:bg-white hover:text-ink'}`}
            >
              Products
              <ChevronDown size={15} className={`transition ${productOpen ? 'rotate-180' : ''}`} />
            </button>

            {productOpen && (
              <div className="absolute left-1/2 top-[calc(100%+12px)] w-[310px] -translate-x-1/2 overflow-hidden rounded-[24px] border border-slate-100 bg-white p-2 shadow-soft">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    to={`/products/${category.slug}`}
                    className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-mist hover:text-ink"
                  >
                    {category.label}
                  </Link>
                ))}
                <Link to="/products" className="mt-1 flex items-center justify-between rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-white">
                  View All Products <ArrowUpRight size={16} />
                </Link>
              </div>
            )}
          </div>

          {primaryLinks.slice(1).map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-ink text-white shadow' : 'text-slate-600 hover:bg-white hover:text-ink'}`}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={`tel:${contact.primaryPhoneTel}`} className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/80 text-ink transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md" aria-label={`Call ${contact.primaryPhoneDisplay}`}>
            <Phone size={18} />
          </a>
          <Link to="/contact" className="group flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-ink/20 transition hover:-translate-y-0.5 hover:bg-navy">
            Get a Quote <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-sm lg:hidden" aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mb-4 max-h-[calc(100vh-96px)] overflow-y-auto rounded-[28px] border border-white/70 bg-white/95 p-3 shadow-soft backdrop-blur-xl lg:hidden animate-fade-up">
          <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => `block rounded-2xl px-4 py-3 text-sm font-semibold ${isActive ? 'bg-ink text-white' : 'text-slate-700 hover:bg-slate-50'}`}>
            Home
          </NavLink>

          <button
            type="button"
            onClick={() => setMobileProductsOpen((value) => !value)}
            className={`mt-1 flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold ${productActive ? 'bg-ink text-white' : 'text-slate-700 hover:bg-slate-50'}`}
          >
            Products
            <ChevronDown size={17} className={`transition ${mobileProductsOpen ? 'rotate-180' : ''}`} />
          </button>

          {mobileProductsOpen && (
            <div className="mt-1 rounded-2xl bg-mist p-2">
              {categories.map((category) => (
                <Link key={category.slug} to={`/products/${category.slug}`} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-2.5 text-[13px] font-semibold text-slate-700 hover:bg-white">
                  {category.label}
                </Link>
              ))}
              <Link to="/products" onClick={() => setOpen(false)} className="mt-1 block rounded-xl bg-white px-3 py-2.5 text-[13px] font-semibold text-ink">
                View All Products
              </Link>
            </div>
          )}

          {primaryLinks.slice(1).map(([to, label]) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => `mt-1 block rounded-2xl px-4 py-3 text-sm font-semibold ${isActive ? 'bg-ink text-white' : 'text-slate-700 hover:bg-slate-50'}`}>
              {label}
            </NavLink>
          ))}

          <a href={`tel:${contact.primaryPhoneTel}`} className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-sky/20 px-4 py-3 text-sm font-semibold text-navy">
            <Phone size={17} /> {contact.primaryPhoneDisplay}
          </a>
        </div>
      )}
    </header>
  )
}
