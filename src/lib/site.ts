// Single source of truth for company details and the product catalogue.

export const company = {
  name: 'PRDN Export & Imports',
  short: 'PRDN',
  phone: '+971 52 787 7428',
  phoneHref: 'tel:+971527877428',
  whatsappHref: 'https://wa.me/971527877428',
  instagram: 'prdnexportandimports',
  instagramHref: 'https://www.instagram.com/prdnexportandimports/',
  address: ['Al Waha Street', 'Al Quoz 4', 'Dubai, United Arab Emirates'],
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=Al+Waha+Street+Al+Quoz+4+Dubai',
  mapsEmbed:
    'https://www.google.com/maps?q=Al+Waha+Street,+Al+Quoz+4,+Dubai&output=embed',
  coords: '25.13°N · 55.23°E',
}

/** Netlify Image CDN URL for an image in /public/img. */
export function img(file: string, width: number) {
  return `/.netlify/images?url=/img/${file}&w=${width}&fm=webp`
}

export type CategoryId = 'vegetables' | 'fruits' | 'meat' | 'spices'

export const categories: {
  id: CategoryId
  code: string
  name: string
  tagline: string
  image: string
  blurb: string
}[] = [
  {
    id: 'vegetables',
    code: 'VEG-01',
    name: 'Fresh Vegetables',
    tagline: 'Field to reefer in 24 hours',
    image: 'vegetables.png',
    blurb:
      'Graded, washed and pre-cooled vegetables packed in ventilated cartons for air and sea freight.',
  },
  {
    id: 'fruits',
    code: 'FRT-02',
    name: 'Fresh Fruits',
    tagline: 'Picked at peak, shipped cold',
    image: 'fruits.png',
    blurb:
      'Seasonal and year-round fruit, sorted by size and Brix, with full cold-chain traceability.',
  },
  {
    id: 'meat',
    code: 'MT-03',
    name: 'Fresh Goat Meat',
    tagline: 'Halal certified, chilled & frozen',
    image: 'meat.png',
    blurb:
      'Our focus line: halal goat carcasses and primal cuts, chilled at 0–4°C or blast frozen to order.',
  },
  {
    id: 'spices',
    code: 'SPC-04',
    name: 'Spices',
    tagline: 'Whole, ground & blended',
    image: 'spices.png',
    blurb:
      'Machine-cleaned, sterilised spices in bulk sacks or private-label retail packs.',
  },
]

export type Product = {
  name: string
  category: CategoryId
  origin: string
  packing: string
  season: string
  featured?: boolean
}

export const products: Product[] = [
  // Vegetables
  { name: 'Okra (Lady Finger)', category: 'vegetables', origin: 'India · Oman', packing: '4 / 5 kg cartons', season: 'Year-round' },
  { name: 'Green Chilli', category: 'vegetables', origin: 'India · Pakistan', packing: '4 kg cartons', season: 'Year-round', featured: true },
  { name: 'Red Onion', category: 'vegetables', origin: 'India · Egypt', packing: '5 / 10 / 25 kg mesh', season: 'Year-round' },
  { name: 'Potato', category: 'vegetables', origin: 'Egypt · Pakistan', packing: '10 / 25 kg bags', season: 'Year-round' },
  { name: 'Tomato', category: 'vegetables', origin: 'Jordan · Oman', packing: '6 kg trays', season: 'Year-round' },
  { name: 'Eggplant (Brinjal)', category: 'vegetables', origin: 'India · Jordan', packing: '5 kg cartons', season: 'Year-round' },
  { name: 'Drumstick (Moringa)', category: 'vegetables', origin: 'India · Sri Lanka', packing: '5 kg cartons', season: 'Oct – Jun' },
  { name: 'Bitter Gourd', category: 'vegetables', origin: 'India', packing: '5 kg cartons', season: 'Year-round' },
  { name: 'Cauliflower & Cabbage', category: 'vegetables', origin: 'Jordan · Iran', packing: '8 / 12 kg cartons', season: 'Oct – Apr' },
  { name: 'Carrot', category: 'vegetables', origin: 'China · Australia', packing: '10 kg bags', season: 'Year-round' },

  // Fruits
  { name: 'Alphonso Mango', category: 'fruits', origin: 'India', packing: '3 kg boxes (12 pcs)', season: 'Mar – Jun', featured: true },
  { name: 'Pomegranate', category: 'fruits', origin: 'India · Afghanistan', packing: '3.5 / 5 kg boxes', season: 'Sep – Mar' },
  { name: 'Medjool & Khalas Dates', category: 'fruits', origin: 'UAE · Saudi Arabia', packing: '1 / 5 kg retail & bulk', season: 'Year-round', featured: true },
  { name: 'Banana (Cavendish)', category: 'fruits', origin: 'India · Philippines', packing: '13 kg cartons', season: 'Year-round' },
  { name: 'Grapes', category: 'fruits', origin: 'India · Egypt', packing: '4.5 / 8 kg cartons', season: 'Jan – May' },
  { name: 'Oranges & Mandarins', category: 'fruits', origin: 'Egypt · Pakistan', packing: '15 kg cartons', season: 'Nov – Apr' },
  { name: 'Watermelon', category: 'fruits', origin: 'Iran · Jordan', packing: 'Bulk bins', season: 'Apr – Sep' },
  { name: 'Guava & Papaya', category: 'fruits', origin: 'India', packing: '5 kg cartons', season: 'Year-round' },

  // Goat meat
  { name: 'Whole Goat Carcass', category: 'meat', origin: 'Halal · chilled', packing: 'Individually bagged, 8–14 kg', season: 'Year-round', featured: true },
  { name: 'Goat Leg (Bone-in)', category: 'meat', origin: 'Halal · chilled / frozen', packing: 'Vacuum packed', season: 'Year-round' },
  { name: 'Goat Shoulder', category: 'meat', origin: 'Halal · chilled / frozen', packing: 'Vacuum packed', season: 'Year-round' },
  { name: 'Goat Rack & Chops', category: 'meat', origin: 'Halal · chilled', packing: 'Vacuum packed, frenched', season: 'Year-round' },
  { name: 'Curry Cut (Mixed)', category: 'meat', origin: 'Halal · frozen', packing: '1 kg / 5 kg packs', season: 'Year-round' },
  { name: 'Goat Mince & Offal', category: 'meat', origin: 'Halal · frozen', packing: '1 kg / 10 kg blocks', season: 'Year-round' },

  // Spices
  { name: 'Saffron', category: 'spices', origin: 'Iran · Kashmir', packing: '1 g – 1 kg tins', season: 'Year-round', featured: true },
  { name: 'Green Cardamom', category: 'spices', origin: 'India · Guatemala', packing: '25 kg sacks', season: 'Year-round' },
  { name: 'Turmeric (Finger & Powder)', category: 'spices', origin: 'India', packing: '25 / 50 kg', season: 'Year-round' },
  { name: 'Red Chilli (Whole & Powder)', category: 'spices', origin: 'India', packing: '10 / 25 kg', season: 'Year-round' },
  { name: 'Cumin Seed', category: 'spices', origin: 'India · Syria', packing: '25 / 50 kg sacks', season: 'Year-round' },
  { name: 'Black Pepper', category: 'spices', origin: 'India · Vietnam', packing: '25 / 50 kg sacks', season: 'Year-round' },
  { name: 'Cinnamon & Cloves', category: 'spices', origin: 'Sri Lanka · Indonesia', packing: '25 kg cartons', season: 'Year-round' },
  { name: 'Coriander & Fennel', category: 'spices', origin: 'India', packing: '25 kg sacks', season: 'Year-round' },
]

export const destinations = [
  'Saudi Arabia', 'Oman', 'Qatar', 'Kuwait', 'Bahrain', 'United Kingdom',
  'Germany', 'Netherlands', 'Maldives', 'Malaysia', 'Singapore', 'Hong Kong',
  'Kenya', 'Russia', 'Iraq', 'Jordan',
]
