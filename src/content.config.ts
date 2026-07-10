import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog-Posts 1:1 aus excellence/blog (Erhaltungs-Constraint: URLs /excellence/blog/<Dateiname>/).
// generateId erhält den Dateinamen exakt, inkl. Klammern und Großschreibung ("Task-A(G)I").
const blog = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/content/blog',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    layout: z.string().optional(),
    title: z.string(),
    author: z.string().default('Christopher Pollin'),
    date: z.coerce.date(),
    published: z.boolean().default(true),
    keywords: z.array(z.string()).optional(),
    short_title: z.string().optional(),
    schema_type: z.string().default('BlogPosting'),
    citation: z
      .object({
        type: z.string().optional(),
        'container-title': z.string().optional(),
        URL: z.string().optional(),
        language: z.enum(['de', 'en']).default('de'),
        abstract: z.string().optional(),
        accessed: z.string().optional(),
      })
      .optional(),
    dublin_core: z
      .object({
        creator: z.string().optional(),
        publisher: z.string().optional(),
        subject: z.array(z.string()).optional(),
        description: z.string().optional(),
        type: z.string().optional(),
        format: z.string().optional(),
        rights: z.string().optional(),
        language: z.string().optional(),
      })
      .optional(),
    coins_data: z.object({ rft_type: z.string().optional() }).optional(),
    website_title: z.string().optional(),
    website_type: z.string().optional(),
    last_modified_at: z.coerce.date().optional(),
  }),
});

export const collections = { blog };
