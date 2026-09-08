import { defineCollection, z } from 'astro:content';

const specSchema = z.object({
  label: z.string(),
  value: z.string(),
  unit: z.string().optional(),
});

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    series: z.string(),
    // Answer-first paragraph. This is the passage AI engines lift — keep it
    // self-contained and factual.
    summary: z.string().max(320),
    metaTitle: z.string().max(60),
    metaDescription: z.string().max(160),
    order: z.number(),
    specs: z.array(specSchema).min(1),
    features: z.array(z.string()),
    applications: z.array(z.string()).default([]),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

const applications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().max(320),
    metaTitle: z.string().max(60),
    metaDescription: z.string().max(160),
    order: z.number(),
    relatedProducts: z.array(z.string()).default([]),
  }),
});

export const collections = { products, applications };
