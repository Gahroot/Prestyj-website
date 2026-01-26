import { defineDocs, defineConfig, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";

const blogSchema = frontmatterSchema.extend({
  date: z.string().optional().default(() => new Date().toISOString().split("T")[0]),
  updated: z.string().optional(),
  author: z.string().optional().default("Prestyj Team"),
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
