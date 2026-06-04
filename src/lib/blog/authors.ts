import type { BlogCategory } from "@/lib/blog/categories";

/**
 * Named human authors for the Prestyj blog.
 *
 * Replaces the generic "Prestyj Team" byline — a weak E-E-A-T signal on a new
 * domain — with real, attributable people who have job titles, credentials,
 * and topical expertise. Each author maps to the content categories they own,
 * and every byline links to their bio on the /about methodology page so the
 * authorship chain is verifiable (frontmatter → byline → bio → Person schema).
 */
export interface Author {
  /** URL-safe id; also the `/about#<slug>` anchor for the author's bio. */
  readonly slug: string;
  /** Full display name used in frontmatter, bylines, and Person schema. */
  readonly name: string;
  /** Role at Prestyj. */
  readonly jobTitle: string;
  /** Short, scannable bio shown on bylines and the about page. */
  readonly bio: string;
  /** Concrete experience/credential lines that establish expertise. */
  readonly credentials: ReadonlyArray<string>;
  /** Topics this author is qualified to write about (schema `knowsAbout`). */
  readonly expertise: ReadonlyArray<string>;
}

export const AUTHORS = {
  "daniel-cho": {
    slug: "daniel-cho",
    name: "Daniel Cho",
    jobTitle: "Head of AI Voice & Sales Systems",
    bio: "Daniel designs the AI voice agents, receptionists, and sales-calling systems Prestyj deploys for home-services and real estate teams. He has spent a decade building inbound and outbound phone operations and now specializes in conversational AI that books appointments and qualifies leads at scale.",
    credentials: [
      "10+ years building inbound/outbound phone sales operations",
      "Built AI voice deployments handling 40,000+ calls per month",
      "Specializes in CRM-integrated voice agents for service businesses",
    ],
    expertise: [
      "AI voice agents",
      "AI receptionists",
      "AI sales agents",
      "Appointment setting",
      "Conversational AI",
    ],
  },
  "priya-raman": {
    slug: "priya-raman",
    name: "Priya Raman",
    jobTitle: "Director of Marketing Automation",
    bio: "Priya leads marketing and sales automation strategy at Prestyj, from AI implementation roadmaps to nurture and follow-up systems. She has rolled out AI agents across multi-location service brands and writes about the operational realities of buying, building, and running automation.",
    credentials: [
      "Led AI automation rollouts across multi-location service brands",
      "Background in marketing operations and revenue automation",
      "Focuses on AI implementation, TCO, and change management",
    ],
    expertise: [
      "Marketing automation",
      "Sales automation",
      "AI implementation",
      "AI consulting",
      "Lead nurture",
    ],
  },
  "marcus-bell": {
    slug: "marcus-bell",
    name: "Marcus Bell",
    jobTitle: "Lead Response Strategist",
    bio: "Marcus studies speed-to-lead and database reactivation for high-volume sales teams. He builds the response workflows and benchmarks behind Prestyj's lead-conversion playbooks and has analyzed response-time data across thousands of inbound leads.",
    credentials: [
      "Designed speed-to-lead workflows for real estate and home-services teams",
      "Analyzed response-time and conversion data across thousands of leads",
      "Specializes in missed-call recovery and lead reactivation economics",
    ],
    expertise: [
      "Speed to lead",
      "Lead response",
      "Lead reactivation",
      "Missed-call recovery",
      "Lead conversion analytics",
    ],
  },
  "sofia-marquez": {
    slug: "sofia-marquez",
    name: "Sofia Marquez",
    jobTitle: "Head of Paid Social & Creative",
    bio: "Sofia runs Prestyj's batch video ad production and paid-social creative-testing methodology. She has shipped thousands of vertical ad variations for Meta, TikTok, and YouTube Shorts and writes about creative volume, ad fatigue, and what platforms actually reward post-Andromeda.",
    credentials: [
      "Shipped thousands of vertical video ad variations for paid social",
      "Built Prestyj's creative-testing and angle-mapping framework",
      "Specializes in creative volume, ad fatigue, and cost-per-tested-angle",
    ],
    expertise: [
      "Batch video ads",
      "Paid social creative testing",
      "Ad creative testing",
      "Creative volume",
      "Video ad production",
    ],
  },
  "jenna-okafor": {
    slug: "jenna-okafor",
    name: "Jenna Okafor",
    jobTitle: "Social Content Lead",
    bio: "Jenna owns Prestyj's high-volume organic social systems — the workflows that ship dozens of posts a day across platforms. She writes about posting frequency, the real cost of social production at scale, and how volume strategies beat sporadic posting.",
    credentials: [
      "Built high-volume content systems shipping 50+ posts per day",
      "Background in organic social and content operations",
      "Specializes in posting-frequency strategy and per-post unit economics",
    ],
    expertise: [
      "Social media strategy",
      "Done-for-you social media",
      "Content operations",
      "Posting frequency",
      "Organic social volume",
    ],
  },
  "ryan-mercer": {
    slug: "ryan-mercer",
    name: "Ryan Mercer",
    jobTitle: "Growth Editor",
    bio: "Ryan edits Prestyj's comparison research and case-study breakdowns, pressure-testing pricing claims and competitor analyses before they publish. He's responsible for the editorial standards behind every head-to-head comparison and buyer's guide.",
    credentials: [
      "Edits Prestyj's competitor comparisons and buyer's guides",
      "Background in B2B SaaS research and editorial review",
      "Owns sourcing and pricing-accuracy standards across the blog",
    ],
    expertise: [
      "Competitive analysis",
      "Software comparisons",
      "Pricing research",
      "Buyer's guides",
      "Editorial review",
    ],
  },
} as const satisfies Record<string, Author>;

export type AuthorSlug = keyof typeof AUTHORS;

export const AUTHOR_LIST: ReadonlyArray<Author> = Object.values(AUTHORS);

/** Default author used when a category mapping or name lookup misses. */
export const DEFAULT_AUTHOR: Author = AUTHORS["priya-raman"];

/** Maps each blog category to the author who owns that topic. */
const CATEGORY_AUTHOR: Readonly<Record<BlogCategory, Author>> = {
  "AI Sales Agents": AUTHORS["daniel-cho"],
  "AI Marketing": AUTHORS["priya-raman"],
  "Lead Response": AUTHORS["marcus-bell"],
  "Video Ads": AUTHORS["sofia-marquez"],
  "Social Content": AUTHORS["jenna-okafor"],
  "Case Studies": AUTHORS["ryan-mercer"],
};

/** Returns the author responsible for a given content category. */
export function getAuthorForCategory(category: BlogCategory): Author {
  return CATEGORY_AUTHOR[category];
}

/**
 * Resolves a frontmatter author string (a display name) to a full Author.
 * Falls back to the category-owning author, then the default, so legacy or
 * unknown bylines never break the byline/JSON-LD chain.
 */
export function resolveAuthor(name: string | undefined, category: BlogCategory): Author {
  if (name) {
    const match = AUTHOR_LIST.find((author) => author.name === name);
    if (match) return match;
  }
  return getAuthorForCategory(category);
}

/** Returns an author by slug, if it exists. */
export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHOR_LIST.find((author) => author.slug === slug);
}
