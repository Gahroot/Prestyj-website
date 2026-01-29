// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  blog: create.doc("blog", {"ai-sales-agents-explained.mdx": () => import("../content/blog/ai-sales-agents-explained.mdx?collection=blog"), "best-ai-tools-real-estate.mdx": () => import("../content/blog/best-ai-tools-real-estate.mdx?collection=blog"), "build-vs-buy-ai-sales-agents-real-estate.mdx": () => import("../content/blog/build-vs-buy-ai-sales-agents-real-estate.mdx?collection=blog"), "designing-lead-response-operations-50-offices.mdx": () => import("../content/blog/designing-lead-response-operations-50-offices.mdx?collection=blog"), "enterprise-lead-infrastructure.mdx": () => import("../content/blog/enterprise-lead-infrastructure.mdx?collection=blog"), "fair-housing-ai-bias-enterprise-brokerages.mdx": () => import("../content/blog/fair-housing-ai-bias-enterprise-brokerages.mdx?collection=blog"), "isa-cost-2026.mdx": () => import("../content/blog/isa-cost-2026.mdx?collection=blog"), "isa-vs-ai.mdx": () => import("../content/blog/isa-vs-ai.mdx?collection=blog"), "lead-reactivation-guide.mdx": () => import("../content/blog/lead-reactivation-guide.mdx?collection=blog"), "speed-to-lead-statistics.mdx": () => import("../content/blog/speed-to-lead-statistics.mdx?collection=blog"), "speed-to-lead.mdx": () => import("../content/blog/speed-to-lead.mdx?collection=blog"), "unit-economics-ai-lead-response.mdx": () => import("../content/blog/unit-economics-ai-lead-response.mdx?collection=blog"), "why-leads-go-cold.mdx": () => import("../content/blog/why-leads-go-cold.mdx?collection=blog"), }),
};
export default browserCollections;