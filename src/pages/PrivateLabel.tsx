import { ArrowRight, Boxes, Check, Layers3, PackageCheck, Palette, Ruler, Tags } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import collection from '../assets/product-collection.jpg'
import bambuso from '../assets/bambuso.jpg'

const steps = [
  ['01', 'Tell us your market', 'Share your target customer, use case, quantity expectation and preferred product category.'],
  ['02', 'Select specification', 'Discuss size, ply, GSM, softness, absorbency and pack format.'],
  ['03', 'Plan your branding', 'Choose custom packaging, private-label identity and front-pack positioning.'],
  ['04', 'Confirm & produce', 'Finalize order requirements and move into production planning and supply.'],
]

export default function PrivateLabel() {
  return (
    <>
      <PageHero eyebrow="Private Label & Customization" title={<>Your brand. Our manufacturing <span className="text-royal">support.</span></>} text="Create a tissue-paper product range around your own brand, customer segment and packaging direction — from product specification through custom presentation." />

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
          <Reveal><div className="grid grid-cols-2 gap-4"><img src={collection} alt="Custom tissue product range" className="col-span-2 h-[340px] w-full rounded-[30px] object-cover shadow-soft"/><img src={bambuso} alt="Bambuso tissue custom packaging" className="h-[280px] w-full rounded-[30px] object-cover shadow-card"/><div className="flex h-[280px] flex-col justify-end rounded-[30px] bg-ink p-7 text-white shadow-card"><Tags size={28} className="text-sky"/><p className="font-serif-display mt-5 text-3xl sm:text-4xl">Private label ready.</p><p className="mt-3 text-sm leading-6 text-white/[0.65]">Packaging and branding options for business buyers.</p></div></div></Reveal>
          <Reveal delay={120}>
            <SectionTitle eyebrow="Customization Options" title={<>Build a product around <span className="text-royal">your audience.</span></>} text="Our customization discussions can cover the core product specification as well as how the finished pack looks on shelf or reaches your end customer." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {([
                [Ruler, 'Custom Size', 'Adapt dimensions to the product format you need.'],
                [Layers3, 'Custom Ply', 'Choose a ply configuration suitable for the use case.'],
                [Palette, 'Brand Presentation', 'Build packaging around your visual identity.'],
                [PackageCheck, 'Pack Format', 'Discuss pack quantity, labeling and outer presentation.'],
              ] as const).map(([Icon,title,text]) => <div key={String(title)} className="rounded-[24px] border border-slate-100 bg-white p-5 shadow-sm"><span className="grid h-10 w-10 place-items-center rounded-xl bg-sky/20 text-navy"><Icon size={19}/></span><h3 className="mt-4 font-semibold text-ink">{String(title)}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{String(text)}</p></div>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <Reveal><SectionTitle align="center" eyebrow="How It Works" title={<>A simple path from idea to <span className="text-royal">finished pack.</span></>} /></Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {steps.map(([num,title,text], i) => <Reveal key={num} delay={i*100}><div className="h-full rounded-[28px] border border-white bg-white p-6 shadow-card"><span className="inline-flex rounded-full bg-ink px-3 py-1.5 text-xs font-bold text-white">{num}</span><h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-8 lg:grid-cols-2">
          <Reveal><div className="h-full rounded-[34px] bg-ink p-8 text-white sm:p-10"><Boxes size={30} className="text-sky"/><h2 className="font-serif-display mt-6 text-4xl sm:text-5xl">Suitable for distributors, hospitality suppliers and growing brands.</h2><div className="mt-8 grid gap-3">{['Retail & wholesale distribution','Hotels, restaurants & institutions','Corporate & facility supply','New consumer brands & private labels'].map(x => <div key={x} className="flex items-center gap-3 text-sm text-white/75"><span className="grid h-6 w-6 place-items-center rounded-full bg-white/10"><Check size={14}/></span>{x}</div>)}</div></div></Reveal>
          <Reveal delay={100}><div className="flex h-full flex-col justify-between rounded-[34px] bg-[#eef7ff] p-8 sm:p-10"><div><p className="text-xs font-semibold uppercase tracking-[.2em] text-royal">Start a discussion</p><h2 className="font-serif-display mt-4 text-4xl text-ink sm:text-5xl">Have a custom tissue-paper requirement?</h2><p className="mt-5 leading-8 text-slate-600">Send us your preferred product, size, ply, approximate quantity and branding requirement. We can discuss the right next step.</p></div><Link to="/contact" className="group mt-10 inline-flex w-max items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy">Contact Twin <ArrowRight size={17} className="transition group-hover:translate-x-1" /></Link></div></Reveal>
        </div>
      </section>
    </>
  )
}
