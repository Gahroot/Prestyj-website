declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const GOOGLE_ADS_CONVERSION_ID = "AW-18112004799";

// Paste the label from Google Ads → Conversions → <Purchase action> → Tag setup →
// "Use Google tag". The snippet shows `send_to: 'AW-18112004799/XXXXXXXXX'` — put the
// part after the slash here. Empty string = conversion firing disabled (safe no-op).
export const GOOGLE_ADS_PURCHASE_LABEL = "ZfYuCPG5s6EcEL-FvbxD";

// Label for the "Book Demo" / lead conversion action in Google Ads.
// Google Ads → Conversions → <Lead action> → Tag setup → "Use Google tag".
// The snippet shows `send_to: 'AW-18112004799/XXXXXXXXX'` — put the
// part after the slash here. Empty string = conversion firing disabled (safe no-op).
export const GOOGLE_ADS_BOOKING_LABEL = "nGLYCOXk8YEcEL-FvbxD";

export function getGoogleAdsPurchaseSendTo(): string | null {
  if (!GOOGLE_ADS_PURCHASE_LABEL) return null;
  return `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_PURCHASE_LABEL}`;
}

export function getGoogleAdsBookingSendTo(): string | null {
  if (!GOOGLE_ADS_BOOKING_LABEL) return null;
  return `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_BOOKING_LABEL}`;
}

/**
 * Fire a Google Ads conversion event for a CTA click (e.g. "Book a Demo").
 * Safe no-op if gtag hasn't loaded yet or the label is not configured.
 */
export function trackGoogleAdsConversion(): void {
  const sendTo = getGoogleAdsBookingSendTo();
  if (!sendTo) return;

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: sendTo,
    });
  }
}
