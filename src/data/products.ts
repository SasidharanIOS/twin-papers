import premium from '../assets/premium-tissues.jpg'
import finch from '../assets/finch-party-napkin.jpg'
import semiSoft from '../assets/semi-soft-tissues.jpg'
import bambuso from '../assets/bambuso.jpg'
import printed from '../assets/printed-tissues.jpg'
import toilet100 from '../assets/toilet-roll-100.jpg'
import toilet350 from '../assets/toilet-roll-350.jpg'
import hrt from '../assets/hrt-roll-140.jpg'

export type ProductCategorySlug =
  | 'premium-tissues'
  | 'recycled-tissues'
  | 'bamboo-tissues'
  | 'printed-tissues'
  | 'toilet-roll'
  | 'hrt-roll'

export type Product = {
  id: string
  name: string
  shortName: string
  category: ProductCategorySlug
  categoryLabel: string
  image: string
  description: string
  specs: Array<{ label: string; value: string }>
  applications: string[]
}

export const categories: Array<{
  slug: ProductCategorySlug
  label: string
  shortDescription: string
}> = [
  {
    slug: 'premium-tissues',
    label: 'Virgin / Premium Tissues',
    shortDescription: 'Premium tissue options for soft, hygienic everyday and hospitality use.',
  },
  {
    slug: 'recycled-tissues',
    label: 'Recycled Tissues',
    shortDescription: 'Semi-soft tissue option for practical and value-focused requirements.',
  },
  {
    slug: 'bamboo-tissues',
    label: 'Bamboo Tissues',
    shortDescription: 'Bamboo tissue option with a clean eco-conscious presentation.',
  },
  {
    slug: 'printed-tissues',
    label: 'Printed Tissues',
    shortDescription: 'Logo-printed tissues for brands, events, hotels and custom requirements.',
  },
  {
    slug: 'toilet-roll',
    label: 'Toilet Roll',
    shortDescription: '100-pull and 350-pull toilet roll options.',
  },
  {
    slug: 'hrt-roll',
    label: 'HRT Roll',
    shortDescription: 'Hand roll tissue for dispensers and high-usage commercial spaces.',
  },
]

export const products: Product[] = [
  {
    id: 'premium-27x27',
    name: 'Twin Premium Tissues — 27 × 27 cm',
    shortName: 'Premium Tissues 27 × 27',
    category: 'premium-tissues',
    categoryLabel: 'Virgin / Premium Tissues',
    image: premium,
    description: 'Ultra-soft premium tissue made for hygienic everyday, hospitality and institutional use.',
    specs: [
      { label: 'Size', value: '27 × 27 cm' },
      { label: 'Ply', value: '1 Ply' },
      { label: 'GSM', value: '15 GSM' },
      { label: 'Pack', value: '80 sheets (approx.)' },
    ],
    applications: ['Homes', 'Hotels & restaurants', 'Offices', 'Hospitality supply'],
  },
  {
    id: 'finch-27x30',
    name: 'Finch Party Napkin — 27 × 30 cm',
    shortName: 'Finch Tissue 27 × 30',
    category: 'premium-tissues',
    categoryLabel: 'Virgin / Premium Tissues',
    image: finch,
    description: 'Soft and hygienic party napkin suited to dining, events, catering and food-service use.',
    specs: [
      { label: 'Size', value: '27 × 30 cm' },
      { label: 'Ply', value: '1 Ply' },
      { label: 'GSM', value: '15 GSM' },
      { label: 'Pack', value: '80 sheets (approx.)' },
    ],
    applications: ['Restaurants', 'Catering', 'Events', 'Dining tables'],
  },
  {
    id: 'semi-soft-recycled',
    name: 'Twin Semi Soft Tissues',
    shortName: 'Semi Soft Tissue',
    category: 'recycled-tissues',
    categoryLabel: 'Recycled Tissues',
    image: semiSoft,
    description: 'Semi-soft tissue for value-focused regular use with practical strength and hygiene.',
    specs: [
      { label: 'Size', value: '27 × 27 cm' },
      { label: 'Ply', value: '1 Ply' },
      { label: 'GSM', value: '17 GSM' },
      { label: 'Pack', value: '80 sheets (approx.)' },
    ],
    applications: ['General use', 'Offices', 'Retail', 'Bulk supply'],
  },
  {
    id: 'bambuso-27x30',
    name: 'Bambuso Bamboo Tissues',
    shortName: 'Bambuso Bamboo Tissue',
    category: 'bamboo-tissues',
    categoryLabel: 'Bamboo Tissues',
    image: bambuso,
    description: 'Bamboo tissue option designed around softness, strength and an eco-conscious product presentation.',
    specs: [
      { label: 'Size', value: '27 × 30 cm' },
      { label: 'Ply', value: '1 Ply' },
      { label: 'GSM', value: '17 GSM' },
      { label: 'Pack', value: '80 sheets (approx.)' },
    ],
    applications: ['Homes', 'Eco-conscious retail', 'Hotels', 'Corporate supply'],
  },
  {
    id: 'printed-logo-tissue',
    name: 'Custom Printed Logo Tissue',
    shortName: 'Printed Logo Tissue',
    category: 'printed-tissues',
    categoryLabel: 'Printed Tissues',
    image: printed,
    description: 'Custom logo printed tissue for events, hotels, restaurants, brands and private-label requirements.',
    specs: [
      { label: 'Printing', value: 'Custom logo / branding' },
      { label: 'Size', value: 'Customisable' },
      { label: 'Ply', value: 'Based on requirement' },
      { label: 'MOQ', value: 'Contact for details' },
    ],
    applications: ['Hotels', 'Events', 'Restaurants', 'Private-label brands'],
  },
  {
    id: 'toilet-roll-100',
    name: 'Toilet Roll — 100 Pulls',
    shortName: 'Toilet Roll 100 Pulls',
    category: 'toilet-roll',
    categoryLabel: 'Toilet Roll',
    image: toilet100,
    description: 'Compact 2-ply toilet roll suited to homes, hotels, offices and regular washroom requirements.',
    specs: [
      { label: 'Pulls', value: '100 Pulls' },
      { label: 'Ply', value: '2 Ply' },
      { label: 'Feel', value: 'Soft & strong' },
      { label: 'Use', value: 'Regular / premium use' },
    ],
    applications: ['Homes', 'Hotels', 'Offices', 'Washrooms'],
  },
  {
    id: 'toilet-roll-350',
    name: 'Toilet Roll — 350 Pulls',
    shortName: 'Toilet Roll 350 Pulls',
    category: 'toilet-roll',
    categoryLabel: 'Toilet Roll',
    image: toilet350,
    description: 'Extra-long 2-ply toilet roll for higher-usage environments and dependable absorbency.',
    specs: [
      { label: 'Pulls', value: '350 Pulls' },
      { label: 'Ply', value: '2 Ply' },
      { label: 'Format', value: 'Extra-long roll' },
      { label: 'Performance', value: 'High absorbency' },
    ],
    applications: ['Hotels', 'Institutions', 'Commercial spaces', 'Bulk supply'],
  },
  {
    id: 'hrt-roll-140',
    name: 'HRT Hand Roll Tissue — 140 Metres',
    shortName: 'HRT Hand Roll Tissue',
    category: 'hrt-roll',
    categoryLabel: 'HRT Roll',
    image: hrt,
    description: 'High-capacity hand roll tissue for dispensers in offices, restaurants, hospitals and commercial spaces.',
    specs: [
      { label: 'Length', value: '140 Metres' },
      { label: 'Paper', value: 'High-quality tissue paper' },
      { label: 'Compatibility', value: 'Dispenser compatible' },
      { label: 'Use', value: 'Commercial / institutional' },
    ],
    applications: ['Hospitals', 'Restaurants', 'Offices', 'Commercial washrooms'],
  },
]

export const productsByCategory = (slug: ProductCategorySlug) =>
  products.filter((product) => product.category === slug)

export const findProduct = (id: string) => products.find((product) => product.id === id)

export const findCategory = (slug: string) =>
  categories.find((category) => category.slug === slug)
