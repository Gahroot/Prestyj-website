// source.config.ts
import { defineDocs, defineConfig, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";
var blogSchema = frontmatterSchema.extend({
  date: z.string().optional().default(() => (/* @__PURE__ */ new Date()).toISOString().split("T")[0]),
  updated: z.string().optional(),
  author: z.string().optional().default("Prestyj Team"),
  keywords: z.array(z.string()).optional().default([]),
  image: z.string().optional()
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
