import { audiences } from "@/lib/institutional/audiences";
import { capabilities } from "@/lib/institutional/capabilities";

export const canonicalStaticRoutes = [
  "/",
  "/platform",
  "/results",
  "/pricing",
  "/about",
  "/book-demo",
  "/contact",
  "/faq",
  "/demo",
  "/blog",
  "/research",
  "/pilot",
  "/privacy",
  "/terms",
  "/accessibility",
  "/commercial-real-estate-commission-calculator",
] as const;

export const canonicalCapabilityRoutes = capabilities.map(
  (capability) => `/capabilities/${capability.slug}` as const,
);

export const canonicalAudienceRoutes = audiences.map(
  (audience) => `/for/${audience.slug}` as const,
);

export const canonicalPublicRoutes = [
  ...canonicalStaticRoutes,
  ...canonicalCapabilityRoutes,
  ...canonicalAudienceRoutes,
] as const;

export const institutionalBlogSlugs = [
  "ai-for-real-estate-investment-funds-exception-queues",
  "ai-agents-real-estate-investment-funds",
  "ai-assisted-quarter-end-close",
  "explainable-distribution-waterfalls",
  "lp-reporting-data-boundaries",
  "evidence-led-real-estate-diligence",
  "reconciling-property-data-conflicts",
  "ai-voice-agents-commercial-brokerage",
  "keep-the-system-of-record",
] as const;

const institutionalBlogSlugSet = new Set<string>(institutionalBlogSlugs);

export function isInstitutionalBlogSlug(slug: string): boolean {
  return institutionalBlogSlugSet.has(slug);
}

export const bannedCanonicalCopy = [
  "service business",
  "home service",
  "realtor",
  "residential agent",
  "$1,997",
  "$3,497",
  "$5,997",
  "starter plan",
  "pro plan",
  "scale plan",
  "founding rate",
  "early-adopter pricing",
] as const;
