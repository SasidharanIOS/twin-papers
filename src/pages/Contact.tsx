import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone, ReceiptText } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { contact, whatsappLink } from '../config/contact'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let’s talk about your <span className="text-royal">paper-product requirement.</span></>}
        text="For product enquiries, bulk supply, private-label requirements or custom packaging discussions, contact Twin Paper Products directly."
      />

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-5">
            <Reveal><SectionTitle eyebrow="Reach Us" title="Twin Paper Products" text="Nasiyanur, Erode, Tamil Nadu, India." /></Reveal>

            <Reveal delay={80}>
              <div className="rounded-[26px] border border-slate-100 bg-white p-5 shadow-card">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky/20 text-navy"><Phone size={20} /></span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400">Call</p>
                    <a href={`tel:${contact.primaryPhoneTel}`} className="mt-1 block font-semibold text-ink hover:text-royal">{contact.primaryPhoneDisplay}</a>
                    <a href={`tel:${contact.secondaryPhoneTel}`} className="mt-1 block text-sm text-slate-500 hover:text-royal">{contact.secondaryPhoneDisplay}</a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={110}>
              <a href={whatsappLink('Hello Twin Paper Products, I would like to enquire about your products.')} target="_blank" rel="noreferrer" className="group flex items-start gap-4 rounded-[26px] border border-slate-100 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-soft">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#e9f9ef] text-[#1b9b4a]"><MessageCircle size={20} /></span>
                <div><p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400">WhatsApp</p><p className="mt-1 font-semibold text-ink">{contact.primaryPhoneDisplay}</p></div>
                <ArrowUpRight size={18} className="ml-auto text-slate-400" />
              </a>
            </Reveal>

            <Reveal delay={140}><a href={`mailto:${contact.email}`} className="group flex items-start gap-4 rounded-[26px] border border-slate-100 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky/20 text-navy"><Mail size={20}/></span><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400">Email</p><p className="mt-1 break-all font-semibold text-ink">{contact.email}</p></div><ArrowUpRight size={18} className="ml-auto text-slate-400"/></a></Reveal>
            <Reveal delay={170}><div className="flex items-start gap-4 rounded-[26px] border border-slate-100 bg-white p-5 shadow-card"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky/20 text-navy"><MapPin size={20}/></span><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400">Address</p><p className="mt-1 font-semibold leading-7 text-ink">{contact.address}</p></div></div></Reveal>
            <Reveal delay={200}><div className="flex items-start gap-4 rounded-[26px] border border-slate-100 bg-white p-5 shadow-card"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky/20 text-navy"><ReceiptText size={20}/></span><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400">GSTIN</p><p className="mt-1 font-semibold text-ink">{contact.gstin}</p></div></div></Reveal>
          </div>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-[34px] border border-slate-100 bg-white p-2 shadow-soft">
              <iframe
                title="Twin Paper Products location"
                src="https://www.google.com/maps?q=No.%201%2F3%2C%20Cheran%20Nagar%2C%20Nasiyanur%2C%20Erode%20638107%2C%20Tamil%20Nadu%2C%20India&output=embed"
                className="h-[430px] w-full rounded-[28px] border-0 sm:h-[560px] lg:h-[650px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
