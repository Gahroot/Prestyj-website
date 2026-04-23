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

export function getGoogleAdsPurchaseSendTo(): string | null {
  if (!GOOGLE_ADS_PURCHASE_LABEL) return null;
  return `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_PURCHASE_LABEL}`;
}
