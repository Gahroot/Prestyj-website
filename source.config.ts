import { defineDocs, defineConfig } from "fumadocs-mdx/config";

export const blog = defineDocs({
  dir: "content/blog",
});

export default defineConfig({
  mdxOptions: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
