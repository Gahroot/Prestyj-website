import { VISITOR_ID_STORAGE_KEY } from "@/lib/attribution/first-touch";

/** Stable, random, first-party id used only for CTA bucketing. Null if storage is blocked. */
export function getOrCreateVisitorId(): string | null {
  try {
    const existing = window.localStorage.getItem(VISITOR_ID_STORAGE_KEY);
    if (existing) return existing;
    const id = crypto.randomUUID();
    window.localStorage.setItem(VISITOR_ID_STORAGE_KEY, id);
    return id;
  } catch {
    return null;
  }
}
