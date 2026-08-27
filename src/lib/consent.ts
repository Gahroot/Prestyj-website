export const MARKETING_CONSENT_STORAGE_KEY = "prestyj-marketing-consent";
export const OPEN_PRIVACY_CHOICES_EVENT = "prestyj:privacy-choices";

export function hasMarketingConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage?.getItem(MARKETING_CONSENT_STORAGE_KEY) === "granted";
  } catch {
    return false;
  }
}
