import { defineDocs, defineConfig, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";

const blogSchema = frontmatterSchema.extend({
  // Legacy content can lack a date; published registry members are validated at build time.
  date: z.string().optional(),
  updated: z.string().optional(),
  author: z.string().optional().default("Priya Raman"),
  keywords: z.array(z.string()).optional().default([]),
  image: z.string().optional(),
  noindex: z.boolean().optional().default(false),
});

export const blog = defineDocs({
  dir: "content/blog",
  docs: {
    schema: blogSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
