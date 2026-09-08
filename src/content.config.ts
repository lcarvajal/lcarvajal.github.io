import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const startups = defineCollection({
  loader: glob({ base: "./src/content/startups", pattern: "**/*.md" }),
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    highlights: z.array(z.object({
      label: z.string(),
      value: z.string(),
      href: z.string().optional(),
    })),
    recommendation: z.object({
      label: z.string(),
      href: z.string(),
    }).optional(),
  }),
});

const keyProjects = defineCollection({
  loader: glob({ base: "./src/content/key-projects", pattern: "**/*.md" }),
  schema: z.object({
    startup: z.string(),
    title: z.string(),
    summary: z.string(),
    order: z.number(),
  }),
});

const recommendations = defineCollection({
  loader: glob({ base: "./src/content/recommendations", pattern: "**/*.md" }),
  schema: z.object({
    author: z.string(),
    role: z.string(),
    image: z.string(),
  }),
});

export const collections = { keyProjects, recommendations, startups };
