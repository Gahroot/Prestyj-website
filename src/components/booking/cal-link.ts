import { toCalMetadataConfig } from "@/lib/attribution/first-touch";

export const CAL_LINK = "nolan-grout-x0fgn8/30min";

/**
 * Direct Cal.com booking URL with the same prefill and metadata[...] query params the
 * inline embed sends, so a visitor whose embed fails to load keeps their attribution.
 */
export function calBookingUrl(
  prefill: Record<string, string>,
  attribution: Record<string, string>,
): string {
  const url = new URL(`https://cal.com/${CAL_LINK}`);
  for (const [key, value] of Object.entries(prefill).sort())
    if (value) url.searchParams.set(key, value);
  for (const [key, value] of Object.entries(toCalMetadataConfig(attribution)))
    url.searchParams.set(key, value);
  return url.toString();
}
