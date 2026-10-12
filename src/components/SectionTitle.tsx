import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: ReactNode
  text?: string
  align?: 'left' | 'center'
  inverse?: boolean
}

export default function SectionTitle({ eyebrow, title, text, align = 'left', inverse = false }: Props) {
  const centered = align === 'center'
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className={`text-[10px] font-semibold uppercase tracking-[.2em] sm:text-xs ${inverse ? 'text-sky' : 'text-royal'}`}>{eyebrow}</p>}
      <h2 className={`font-serif-display mt-3 text-[clamp(30px,4.2vw,56px)] leading-[1.04] tracking-[-.025em] ${inverse ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {text && <p className={`mt-4 text-[15px] leading-7 sm:text-base sm:leading-8 ${inverse ? 'text-white/[0.65]' : 'text-slate-600'}`}>{text}</p>}
    </div>
  )
}
