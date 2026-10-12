import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../config/contact'

const defaultMessage = 'Hello Twin Paper Products, I would like to enquire about your tissue paper products.'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(defaultMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Twin Paper Products on WhatsApp"
      className="group fixed bottom-5 right-5 z-[70] flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_16px_40px_rgba(37,211,102,.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#1fbd59] sm:bottom-6 sm:right-6 sm:px-5 sm:py-3.5"
    >
      <MessageCircle size={23} strokeWidth={2.3} />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/30 opacity-0 blur-md transition group-hover:opacity-100" />
    </a>
  )
}
