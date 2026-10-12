export const contact = {
  primaryPhoneDisplay: '+91 95246 74441',
  primaryPhoneTel: '+919524674441',
  primaryWhatsApp: '919524674441',
  secondaryPhoneDisplay: '+91 63797 71042',
  secondaryPhoneTel: '+916379771042',
  email: 'twinpaperproducts@gmail.com',
  address: 'No. 1/3, Cheran Nagar, Nasiyanur, Erode - 638107, Tamil Nadu, India',
  gstin: '33FRKPS3803M2ZB',
}

export const whatsappLink = (message: string) =>
  `https://wa.me/${contact.primaryWhatsApp}?text=${encodeURIComponent(message)}`
