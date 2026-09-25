// source.config.ts
import { defineDocs, defineConfig, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";
var blogSchema = frontmatterSchema.extend({
  // Legacy content can lack a date; published registry members are validated at build time.
  date: z.string().optional(),
  updated: z.string().optional(),
  author: z.string().optional().default("Priya Raman"),
  keywords: z.array(z.string()).optional().default([]),
  image: z.string().optional(),
  noindex: z.boolean().optional().default(false)
});
var blog = defineDocs({
  dir: "content/blog",
  docs: {
    schema: blogSchema
  }
});
var source_config_default = defineConfig({
  mdxOptions: {
    rehypePlugins: [],
    remarkPlugins: []
  }
});
export {
  blog,
  source_config_default as default
};
