import { BadgeCheck, Factory, HeartHandshake, PackageCheck, ShieldCheck, Sparkles } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import warehouse from '../assets/warehouse-stock.jpg'
import collection from '../assets/product-collection.jpg'
import video2 from '../assets/factory-video-2.mp4'

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Twin" title={<>Paper products made with <span className="text-royal">care and purpose.</span></>} text="Twin Paper Products is based in Nasiyanur, Erode, Tamil Nadu, manufacturing tissue-paper products for everyday use, institutional demand and branded business requirements." />

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-[36px] shadow-soft"><img src={warehouse} alt="Twin Paper Products warehouse stock" className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[560px]" /></div>
            <div className="absolute -bottom-5 left-5 rounded-[24px] bg-white p-5 shadow-soft sm:left-8"><p className="text-xs font-semibold uppercase tracking-[.18em] text-royal">Erode, Tamil Nadu</p><p className="font-serif-display mt-1 text-3xl text-ink">Manufactured in India</p></div>
          </Reveal>
          <Reveal delay={120}>
            <SectionTitle eyebrow="Our Approach" title={<>Simple promise: <span className="text-royal">dependable paper products.</span></>} text="We focus on the qualities that matter most in daily-use tissue products — softness, hygiene, strength, absorbency, practical pack formats and dependable supply." />
            <p className="mt-6 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">Our range supports regular retail requirements as well as hotels, restaurants, offices, hospitals, airlines, institutions, homes and bulk orders. For brands and distributors, we also support custom packaging and private-label manufacturing conversations.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {([
                [ShieldCheck, 'Quality Focus'], [Sparkles, 'Hygienic Products'], [PackageCheck, 'Bulk Capability'], [HeartHandshake, 'Business Friendly']
              ] as const).map(([Icon, label]) => <div key={String(label)} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"><span className="grid h-10 w-10 place-items-center rounded-xl bg-sky/20 text-navy"><Icon size={19}/></span><span className="text-sm font-semibold text-ink">{String(label)}</span></div>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <Reveal><SectionTitle inverse eyebrow="Inside the Business" title={<>A growing production story from <span className="text-sky">Erode.</span></>} text="Product development, packaging and supply all come together around one goal: give buyers a practical tissue-paper partner they can rely on." /></Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
            <Reveal><div className="overflow-hidden rounded-[32px] bg-white/5"><video src={video2} controls playsInline className="h-[360px] w-full object-cover sm:h-[440px] lg:h-[520px]" /></div></Reveal>
            <div className="grid gap-5">
              <Reveal delay={80}><div className="overflow-hidden rounded-[32px]"><img src={collection} alt="Twin tissue product collection" className="h-[300px] w-full object-cover" /></div></Reveal>
              <Reveal delay={160}><div className="rounded-[32px] bg-white/[0.07] p-7"><Factory size={26} className="text-sky"/><p className="font-serif-display mt-5 text-3xl sm:text-4xl">Built to scale with your requirement.</p><p className="mt-4 text-sm leading-7 text-white/[0.65]">From routine stock orders to private-label discussions, our product setup is designed to support business needs across multiple customer segments.</p></div></Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <Reveal><SectionTitle align="center" eyebrow="What We Stand For" title={<>Quality customers can <span className="text-royal">feel.</span></>} /></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ['01','Care','Manufacture everyday paper products with attention to finish, cleanliness and usability.'],
              ['02','Consistency','Support buyers with product specifications and supply they can plan around.'],
              ['03','Flexibility','Adapt size, ply, packaging and branding discussions to different business needs.'],
            ].map(([num,title,text], i) => <Reveal key={num} delay={i*100}><div className="rounded-[30px] border border-slate-100 bg-white p-7 shadow-card"><p className="text-xs font-semibold tracking-[.2em] text-royal">{num}</p><h3 className="font-serif-display mt-4 text-3xl text-ink sm:text-4xl">{title}</h3><p className="mt-4 leading-7 text-slate-600">{text}</p></div></Reveal>)}
          </div>
          <Reveal className="mt-12 text-center"><div className="inline-flex items-center gap-3 rounded-full bg-mist px-5 py-3 text-sm font-semibold text-navy"><BadgeCheck size={18}/> GSTIN: 33FRKPS3803M2ZB</div></Reveal>
        </div>
      </section>
    </>
  )
}
