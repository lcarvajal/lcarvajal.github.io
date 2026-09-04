import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
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
    projectLinks: z.array(z.object({
      label: z.string(),
      href: z.string(),
    })),
  }),
});

export const collections = { projects };
