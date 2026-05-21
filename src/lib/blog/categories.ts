export const BLOG_CATEGORIES = [
  "AI Sales Agents",
  "AI Marketing",
  "Lead Response",
  "Video Ads",
  "Social Content",
  "Case Studies",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

/**
 * Per-category fallback image used when a post has no `image` in frontmatter.
 * Files live at `public/images/blog/fallback-<category-slug>.jpg`.
 */
const CATEGORY_FALLBACK_IMAGE: Readonly<Record<BlogCategory, string>> = {
  "AI Sales Agents": "/images/blog/fallback-ai-sales-agents.jpg",
  "AI Marketing": "/images/blog/fallback-ai-marketing.jpg",
  "Lead Response": "/images/blog/fallback-lead-response.jpg",
  "Video Ads": "/images/blog/fallback-video-ads.jpg",
  "Social Content": "/images/blog/fallback-social-content.jpg",
  "Case Studies": "/images/blog/fallback-case-studies.jpg",
};

/**
 * Returns the per-category fallback image path for a post.
 * Use when a post has no frontmatter `image` so JSON-LD / OG images stay
 * topically relevant instead of falling back to a single generic asset.
 */
export function fallbackImageForCategory(category: BlogCategory): string {
  return CATEGORY_FALLBACK_IMAGE[category];
}

/**
 * Infer a blog post's category from its slug.
 *
 * Order matters: more specific patterns are matched first so a post like
 * `ai-lead-response-for-real-estate` lands in "Lead Response" rather than
 * "AI Sales Agents". Post slugs are derived from the MDX filename without
 * the `.mdx` extension.
 */
export function categorizeSlug(slug: string): BlogCategory {
  const s = slug.toLowerCase();

  // Case Studies — competitor comparisons + "best of" listicles
  if (s.startsWith("prestyj-vs-")) return "Case Studies";
  if (s.startsWith("best-ai-tools") || s.startsWith("best-ai-lead-response")) {
    return "Case Studies";
  }
  if (s === "fair-housing-ai-bias-enterprise-brokerages") return "Case Studies";

  // Lead Response — speed-to-lead, reactivation, missed-call, lead response
  if (s.includes("speed-to-lead")) return "Lead Response";
  if (s.includes("lead-reactivation")) return "Lead Response";
  if (s.includes("missed-call-text-back")) return "Lead Response";
  if (s.includes("ai-lead-response")) return "Lead Response";
  if (s.includes("lead-response-time")) return "Lead Response";
  if (s.includes("designing-lead-response")) return "Lead Response";
  if (s.includes("enterprise-lead-infrastructure")) return "Lead Response";
  if (s.includes("unit-economics-ai-lead-response")) return "Lead Response";
  if (s.includes("ai-lead-generation")) return "Lead Response";
  if (s === "why-leads-go-cold") return "Lead Response";
  if (s === "roofing-lead-magnet-2026") return "Lead Response";
  if (s.includes("real-estate-database-reactivation")) return "Lead Response";
  if (s.includes("real-estate-facebook-ad-lead-follow-up")) return "Lead Response";

  // Social Content — social media, posting, content strategy
  if (s.includes("social-media")) return "Social Content";
  if (s.includes("done-for-you-social")) return "Social Content";
  if (s.includes("posting-frequency") || s.includes("posting-algorithm")) {
    return "Social Content";
  }
  if (s.includes("posts-month") || s.includes("posts-day") || s.includes("posts-a-day")) {
    return "Social Content";
  }
  if (s.includes("per-post-cost") || s.includes("per-platform-cost")) {
    return "Social Content";
  }
  if (s.includes("qualvol-content-strategy")) return "Social Content";
  if (s.includes("junior-social-manager")) return "Social Content";
  if (s.includes("hootsuite") || s.includes("buffer")) return "Social Content";
  if (s.includes("tiktok-shop")) return "Social Content";
  if (s.includes("viral-ugc-social")) return "Social Content";
  if (s.includes("inconsistent-posting")) return "Social Content";
  if (s.includes("free-capcut-templates")) return "Social Content";
  if (s.includes("what-fiverr-social")) return "Social Content";
  if (s.includes("ai-content-vs-human-content")) return "Social Content";
  if (s.includes("ai-social-tools")) return "Social Content";
  if (s.includes("hiring-a-social-media")) return "Social Content";
  if (s.includes("true-cost-per-impression-organic-social")) return "Social Content";
  if (s.includes("best-done-for-you-social-media")) return "Social Content";
  if (s.includes("best-social-media-volume")) return "Social Content";

  // Video Ads — video/ad creative, batch ads, andromeda, creative testing
  if (s.includes("video-ad") || s.includes("video-ads")) return "Video Ads";
  if (s.includes("batch-video")) return "Video Ads";
  if (s.includes("bulk-video")) return "Video Ads";
  if (s.includes("facebook-ad")) return "Video Ads";
  if (s.includes("andromeda")) return "Video Ads";
  if (s.includes("creative-testing") || s.includes("creative-diversity")) {
    return "Video Ads";
  }
  if (s.includes("creative-is-the-new") || s.includes("creative-volume")) {
    return "Video Ads";
  }
  if (s.includes("ad-angle") || s.includes("ad-angles")) return "Video Ads";
  if (s.includes("cost-per-tested") || s.includes("cost-per-winning")) {
    return "Video Ads";
  }
  if (s.includes("how-many-ad") || s.includes("how-many-facebook")) {
    return "Video Ads";
  }
  if (s.includes("how-many-video")) return "Video Ads";
  if (s.includes("1000-ad-sprint") || s.includes("how-to-run-1000-ads")) return "Video Ads";
  if (s.includes("ad-fatigue") || s.includes("ad-creative-testing-tools")) {
    return "Video Ads";
  }
  if (s.includes("cost-of-perfectionism") || s.includes("filming-one-perfect")) {
    return "Video Ads";
  }
  if (s.includes("what-meta-andromeda")) return "Video Ads";
  if (s.includes("what-fiverr-video")) return "Video Ads";
  if (s.includes("ai-avatar-ad-tools")) return "Video Ads";
  if (s.includes("ai-video-ads")) return "Video Ads";
  if (s.includes("ugc-creators") || s.includes("ugc-alternative")) return "Video Ads";
  if (s.includes("video-production")) return "Video Ads";
  if (s.includes("best-video-ad-creators") || s.includes("best-batch-video")) {
    return "Video Ads";
  }
  if (s.includes("best-way-to-test-100-ad")) return "Video Ads";
  if (s.includes("first-facebook-ads") || s.includes("run-your-first-facebook-ads")) {
    return "Video Ads";
  }
  if (s.includes("test-50-hooks") || s.includes("ad-creative-testing-matrix")) {
    return "Video Ads";
  }
  if (s.includes("100-video-ad-ideas")) return "Video Ads";
  if (s.includes("scale-facebook-ads")) return "Video Ads";
  if (s.includes("real-cost-of-testing-100")) return "Video Ads";
  if (s.includes("true-cost-of-one-viral")) return "Video Ads";
  if (s.includes("true-cost-of-in-house-video")) return "Video Ads";
  if (s.includes("why-cpm-is-rising")) return "Video Ads";
  if (s.includes("property-management-owner-acquisition")) return "Video Ads";
  if (s.includes("mortgage-broker-video")) return "Video Ads";

  // AI Sales Agents — voice/receptionist/calling/SDR/ISA agents
  if (s.includes("ai-sales-agent")) return "AI Sales Agents";
  if (s.includes("ai-voice-agent")) return "AI Sales Agents";
  if (s.includes("ai-receptionist")) return "AI Sales Agents";
  if (s.includes("ai-phone")) return "AI Sales Agents";
  if (s.includes("ai-calling")) return "AI Sales Agents";
  if (s.includes("white-label-ai-calling")) return "AI Sales Agents";
  if (s.includes("ai-cold-outreach")) return "AI Sales Agents";
  if (s.includes("ai-texting-agent") || s.includes("ai-sales-text-messaging")) {
    return "AI Sales Agents";
  }
  if (s.includes("ai-appointment-setting")) return "AI Sales Agents";
  if (s.includes("ai-isa") || s === "isa-vs-ai" || s === "isa-cost-2026") {
    return "AI Sales Agents";
  }
  if (s.includes("sales-ai-agent-vs-human")) return "AI Sales Agents";
  if (s.includes("multi-agent-sales")) return "AI Sales Agents";
  if (s.includes("ai-customer-engagement")) return "AI Sales Agents";
  if (s.includes("ai-sales-agents-explained")) return "AI Sales Agents";
  if (s.includes("ai-sales-calling-guide")) return "AI Sales Agents";
  if (s.includes("bilingual-ai-receptionist")) return "AI Sales Agents";
  if (s.includes("hipaa-compliant-ai-receptionist")) return "AI Sales Agents";
  if (s.includes("small-business-ai-receptionist")) return "AI Sales Agents";
  if (s.includes("hidden-cost-answering-services")) return "AI Sales Agents";
  if (s.includes("book-appointments-while-sleeping")) return "AI Sales Agents";

  // AI Marketing — automation, nurture, consulting, implementation
  if (s.includes("ai-marketing")) return "AI Marketing";
  if (s.includes("marketing-automation")) return "AI Marketing";
  if (s.includes("ai-sales-automation") || s.includes("sales-automation")) {
    return "AI Marketing";
  }
  if (s.includes("ai-sales-follow-up")) return "AI Marketing";
  if (s.includes("ai-nurture") || s.includes("ai-past-client-nurture")) {
    return "AI Marketing";
  }
  if (s.includes("conversion-rate-optimization-ai")) return "AI Marketing";
  if (s.includes("done-for-you-ai")) return "AI Marketing";
  if (s.includes("custom-ai-agent") || s.includes("custom-sales-automation")) {
    return "AI Marketing";
  }
  if (s.includes("hidden-costs-custom-ai")) return "AI Marketing";
  if (s.includes("should-you-build-or-buy") || s.includes("build-vs-buy")) {
    return "AI Marketing";
  }
  if (s.includes("ai-consultant") || s.includes("ai-consulting")) {
    return "AI Marketing";
  }
  if (s.includes("ai-adoption") || s.includes("ai-implementation")) {
    return "AI Marketing";
  }
  if (s.includes("ai-rollout") || s.includes("ai-data-readiness")) {
    return "AI Marketing";
  }
  if (s.includes("ai-use-case") || s.includes("change-management-ai")) {
    return "AI Marketing";
  }
  if (s.includes("is-ai-consulting-worth-it")) return "AI Marketing";
  if (s.includes("follow-up-boss-ai")) return "AI Marketing";

  // Default — generic AI/sales tooling
  return "AI Sales Agents";
}

/**
 * Derive a slug from a Fumadocs page url (`/blog/<slug>` → `<slug>`).
 */
export function slugFromUrl(url: string): string {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1] ?? "";
}
