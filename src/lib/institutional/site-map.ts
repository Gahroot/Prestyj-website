import { audiences } from "@/lib/institutional/audiences";
import { capabilities } from "@/lib/institutional/capabilities";
import { researchArticles } from "@/lib/institutional/research";

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

export const institutionalBlogSlugs = researchArticles.map((article) => article.slug);

// The interactive demo is public but intentionally excluded from search discovery.
export const indexableStaticRoutes = canonicalPublicRoutes.filter((route) => route !== "/demo");

export const institutionalIndexablePaths: readonly string[] = [
  ...indexableStaticRoutes,
  ...institutionalBlogSlugs.map((slug) => `/blog/${slug}`),
];

export const institutionalPublicPaths: readonly string[] = [
  ...canonicalPublicRoutes,
  ...institutionalBlogSlugs.map((slug) => `/blog/${slug}`),
];

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
