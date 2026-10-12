import type { ReactNode } from 'react'

type Props = { eyebrow: string; title: ReactNode; text: string }

export default function PageHero({ eyebrow, title, text }: Props) {
  return (
    <section className="relative overflow-hidden bg-mist px-5 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:px-12 lg:pb-20 lg:pt-36">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-sky/25 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-royal/10 blur-3xl" />
      <div className="relative mx-auto max-w-[1320px]">
        <p className="animate-fade-up text-[10px] font-semibold uppercase tracking-[.22em] text-royal sm:text-xs">{eyebrow}</p>
        <h1 className="font-serif-display mt-4 max-w-5xl animate-text-reveal text-[clamp(36px,6vw,74px)] leading-[.98] tracking-[-.03em] text-ink">{title}</h1>
        <p className="delay-200 mt-5 max-w-2xl animate-fade-up text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">{text}</p>
      </div>
    </section>
  )
}
