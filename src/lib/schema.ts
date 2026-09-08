import { SITE, NAP } from '@/consts';

const ORG_ID = `${SITE.url}/#organization`;

export const orgSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  foundingDate: SITE.founded,
  address: {
    '@type': 'PostalAddress',
    streetAddress: NAP.street,
    addressLocality: NAP.city,
    addressRegion: NAP.region,
    postalCode: NAP.postal,
    addressCountry: NAP.country,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: NAP.phone,
    email: NAP.email,
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['en', 'hi'],
  },
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  publisher: { '@id': ORG_ID },
});

export interface Spec { label: string; value: string; unit?: string }

export const productSchema = (p: {
  title: string; series: string; summary: string; slug: string; specs: Spec[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: p.title,
  sku: p.series,
  description: p.summary,
  url: `${SITE.url}/products/${p.slug}`,
  brand: { '@type': 'Brand', name: SITE.name },
  manufacturer: { '@id': ORG_ID },
  // Specs as structured properties — this is what AI engines extract.
  additionalProperty: p.specs.map((s) => ({
    '@type': 'PropertyValue',
    name: s.label,
    value: s.unit ? `${s.value} ${s.unit}` : s.value,
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const breadcrumbSchema = (crumbs: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: `${SITE.url}${c.url}`,
  })),
});
