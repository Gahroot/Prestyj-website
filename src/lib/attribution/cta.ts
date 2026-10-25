/** Data attributes read by AttributionTracker when a /book-demo link is clicked or seen. */
export const CTA_ID_ATTR = "data-pj-cta";
export const CTA_VARIANT_ATTR = "data-pj-cta-variant";

export function ctaDataProps(id: string, variant?: string): Record<string, string> {
  return variant ? { [CTA_ID_ATTR]: id, [CTA_VARIANT_ATTR]: variant } : { [CTA_ID_ATTR]: id };
}

export function bookDemoHref(workflow?: string): string {
  return workflow ? `/book-demo?workflow=${encodeURIComponent(workflow)}` : "/book-demo";
}

/** True for links that land on the booking page (relative or absolute same-site). */
export function isBookDemoHref(href: string, origin: string): boolean {
  try {
    const url = new URL(href, origin);
    return url.origin === origin && url.pathname.replace(/\/$/, "") === "/book-demo";
  } catch {
    return false;
  }
}

/** Fallback id for untagged /book-demo links: "link:<page path>". */
export function fallbackCtaId(pathname: string): string {
  return `link:${pathname}`;
}
