import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const gamesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/games" }),
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    description: z.string(),
    description_en: z.string().optional(),
    coverImage: z.string(),
    publishDate: z.coerce.date(),
    itchUrl: z.string().url(),
    platforms: z.array(z.string()),
    status: z.enum(['Publicado', 'En Desarrollo', 'Prototipo', 'Concepto']),
    screenshots: z.array(z.string()).optional(),
  }),
});

const musicCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/music" }),
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    description: z.string(),
    description_en: z.string().optional(),
    coverImage: z.string(),
    releaseDate: z.coerce.date(),
    embedUrl: z.string().optional(),
    linkUrl: z.string().url(),
    gallery: z.array(z.string()).optional(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    description: z.string(),
    description_en: z.string().optional(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    description: z.string(),
    description_en: z.string().optional(),
    coverImage: z.string(),
    status: z.enum(['Planificación', 'En Desarrollo', 'Pausado', 'Completado']),
    startDate: z.coerce.date(),
    demoUrl: z.string().url().optional(),
  }),
});

const devlogsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/devlogs" }),
  schema: z.object({
    project: z.string(),
    title: z.string(),
    title_en: z.string().optional(),
    date: z.coerce.date(),
    summary: z.string(),
    summary_en: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  games: gamesCollection,
  music: musicCollection,
  blog: blogCollection,
  projects: projectsCollection,
  devlogs: devlogsCollection,
};
