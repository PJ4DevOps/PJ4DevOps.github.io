import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    published: z.coerce.date(),
    updated: z.string().optional(),
    tags: z.array(z.string()).default([]),
    originalUrl: z.string().url(),
    publisher: z.string(),
    hero: z.string().optional(),
  }),
});

// Pat's own pieces. They live only in this folder (the content import never touches it).
const musings = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/musings' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Pat Johnson'),
    published: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { writing, musings };
