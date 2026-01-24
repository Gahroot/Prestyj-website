// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  blog: create.doc("blog", {"ai-sales-agents-explained.mdx": () => import("../content/blog/ai-sales-agents-explained.mdx?collection=blog"), "isa-vs-ai.mdx": () => import("../content/blog/isa-vs-ai.mdx?collection=blog"), "speed-to-lead.mdx": () => import("../content/blog/speed-to-lead.mdx?collection=blog"), "why-leads-go-cold.mdx": () => import("../content/blog/why-leads-go-cold.mdx?collection=blog"), }),
};
export default browserCollections;