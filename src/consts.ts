// Single source of truth for NAP data.
// Entity consistency across site / Google Business Profile / IndiaMART
// depends on this never being duplicated by hand elsewhere.

export const SITE = {
  name: 'Aqua Tech Polymers',
  url: 'https://aquatechpolymers.com',
  description:
    'Manufacturer of press board, power transformer, kraft paper and crepe paper tube adhesives for transformer and electrical insulation manufacturers.',
  founded: '2004',
  locale: 'en_IN',
} as const;

export const NAP = {
  street: 'Plot 00, Industrial Area',
  city: 'Indore',
  region: 'Madhya Pradesh',
  postal: '452001',
  country: 'IN',
  phone: '+91-9174090760',
  whatsapp: '919174090760',
  email: 'sales@aquatechpolymers.com',
} as const;

export const WHATSAPP_URL =
  `https://wa.me/${NAP.whatsapp}?text=` +
  encodeURIComponent("Hi, I'd like to enquire about Aqua Tech Polymers products.");

export const NAV = [
  { label: 'Products',     href: '/products' },
  { label: 'Applications', href: '/applications' },
  { label: 'Solutions',    href: '/#solutions' },
  { label: 'Why Us',       href: '/#why-us' },
  { label: 'FAQ',          href: '/#faq' },
] as const;

export const STATS = [
  { value: 20,  suffix: '+', label: 'YEARS IN PRODUCTION' },
  { value: 40,  suffix: '+', label: 'FORMULATED GRADES' },
  { value: 180, suffix: '+', label: 'MANUFACTURERS SERVED' },
  { value: 72,  suffix: 'h', label: 'TYPICAL SAMPLE DESPATCH' },
] as const;
