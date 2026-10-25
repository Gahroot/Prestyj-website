import { hasMarketingConsent } from "@/lib/consent";

export const GOOGLE_ADS_ID = "AW-18112004799";
export const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? "";
/** One gtag.js loader for Google Ads and GA4. */
export const GTAG_SCRIPT_ID = GA4_MEASUREMENT_ID || GOOGLE_ADS_ID;
export const CONSENT_CHANGED_EVENT = "prestyj:consent-changed";

export type Ga4EventName = "page_view" | "cta_view" | "cta_click" | "generate_lead" | "book_demo";

type GtagWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  __pjGtagReady?: boolean;
};

/** Defines the gtag queue and configures Ads + GA4 once. Requires marketing consent. */
export function ensureGtag(): boolean {
  if (typeof window === "undefined" || !hasMarketingConsent()) return false;
  const w = window as GtagWindow;
  if (w.__pjGtagReady) return true;
  w.dataLayer = w.dataLayer ?? [];
  if (!w.gtag) {
    w.gtag = function gtag() {
      // gtag.js requires the Arguments object, not an array.
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer?.push(arguments);
    };
  }
  w.gtag("js", new Date());
  w.gtag("config", GOOGLE_ADS_ID, { allow_enhanced_conversions: true });
  if (GA4_MEASUREMENT_ID) w.gtag("config", GA4_MEASUREMENT_ID, { send_page_view: false });
  w.__pjGtagReady = true;
  return true;
}

/** Sends a GA4 event. No-op without consent or without NEXT_PUBLIC_GA4_MEASUREMENT_ID. */
export function trackGa4(name: Ga4EventName, params: Record<string, string> = {}): void {
  if (!GA4_MEASUREMENT_ID || !ensureGtag()) return;
  (window as GtagWindow).gtag?.("event", name, { ...params, send_to: GA4_MEASUREMENT_ID });
}
