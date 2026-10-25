import { classifyChannel, normalizeHost, type TrafficChannel } from "@/lib/attribution/channels";
import { ATTRIBUTION_KEYS } from "@/lib/attribution/keys";
import { isQualified, type AumBand, type FirmType } from "@/lib/attribution/qualification";

/**
 * First-party, cookie-free attribution kept in localStorage. Nothing is sent anywhere
 * until the visitor books (Cal.com metadata) or has granted marketing consent (GA4).
 */
export const FIRST_TOUCH_STORAGE_KEY = "pj_first_touch";
export const LAST_CTA_STORAGE_KEY = "pj_last_cta";
export const VISITOR_ID_STORAGE_KEY = "pj_vid";

export type FirstTouch = {
  landingPath: string;
  channel: TrafficChannel;
  referrerHost?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  at: string;
};

export type LastCta = { id: string; variant?: string | undefined };

type StorageLike = Pick<Storage, "getItem" | "setItem">;

const MAX_VALUE_LENGTH = 200;

function clean(value: string | null | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed ? trimmed.slice(0, MAX_VALUE_LENGTH) : undefined;
}

export function buildFirstTouch(input: {
  url: string;
  referrer?: string | null;
  now: Date;
}): FirstTouch {
  const url = new URL(input.url);
  const utmSource = clean(url.searchParams.get("utm_source"));
  const utmMedium = clean(url.searchParams.get("utm_medium"));
  const utmCampaign = clean(url.searchParams.get("utm_campaign"));
  const ref = normalizeHost(input.referrer);
  const own = normalizeHost(url.hostname);
  const referrerHost = ref && ref !== own ? ref : undefined;
  return {
    landingPath: url.pathname,
    channel: classifyChannel({
      referrer: referrerHost ? (input.referrer ?? null) : null,
      utmSource: utmSource ?? null,
      utmMedium: utmMedium ?? null,
      ownHost: url.hostname,
    }),
    ...(referrerHost ? { referrerHost } : {}),
    ...(utmSource ? { utmSource } : {}),
    ...(utmMedium ? { utmMedium } : {}),
    ...(utmCampaign ? { utmCampaign } : {}),
    at: input.now.toISOString(),
  };
}

function readJson(storage: StorageLike, key: string): unknown {
  try {
    const raw = storage.getItem(key);
    return raw ? (JSON.parse(raw) as unknown) : null;
  } catch {
    return null;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function readFirstTouch(storage: StorageLike): FirstTouch | null {
  const value = readJson(storage, FIRST_TOUCH_STORAGE_KEY);
  if (!isRecord(value) || typeof value.landingPath !== "string") return null;
  return value as FirstTouch;
}

export function readLastCta(storage: StorageLike): LastCta | null {
  const value = readJson(storage, LAST_CTA_STORAGE_KEY);
  if (!isRecord(value) || typeof value.id !== "string") return null;
  return {
    id: value.id,
    ...(typeof value.variant === "string" ? { variant: value.variant } : {}),
  };
}

/** Stores the first touch once; later visits never overwrite it. Returns the stored record. */
export function captureFirstTouch(storage: StorageLike, candidate: FirstTouch): FirstTouch {
  const existing = readFirstTouch(storage);
  if (existing) return existing;
  try {
    storage.setItem(FIRST_TOUCH_STORAGE_KEY, JSON.stringify(candidate));
  } catch {
    // Storage full or blocked: attribution is best effort.
  }
  return candidate;
}

/** Last CTA clicked before /book-demo. Overwritten on every click (last-touch by design). */
export function recordCtaClick(storage: StorageLike, cta: LastCta): void {
  try {
    storage.setItem(
      LAST_CTA_STORAGE_KEY,
      JSON.stringify({ id: clean(cta.id), variant: clean(cta.variant) }),
    );
  } catch {
    // best effort
  }
}

export type QualificationAnswers = { firmType: FirmType; aumBand?: AumBand | null | undefined };

/**
 * Flat pj_* map for Cal.com booking metadata and GA4 event params.
 * Absent values are omitted, never "undefined".
 */
export function buildAttributionParams(input: {
  firstTouch: FirstTouch | null;
  lastCta: LastCta | null;
  qualification?: QualificationAnswers | null;
}): Record<string, string> {
  const { firstTouch, lastCta, qualification } = input;
  const entries: [string, string | undefined][] = [
    [ATTRIBUTION_KEYS.landingPath, firstTouch?.landingPath],
    [ATTRIBUTION_KEYS.channel, firstTouch?.channel],
    [ATTRIBUTION_KEYS.referrerHost, firstTouch?.referrerHost],
    [ATTRIBUTION_KEYS.utmSource, firstTouch?.utmSource],
    [ATTRIBUTION_KEYS.utmMedium, firstTouch?.utmMedium],
    [ATTRIBUTION_KEYS.utmCampaign, firstTouch?.utmCampaign],
    [ATTRIBUTION_KEYS.ctaId, lastCta?.id],
    [ATTRIBUTION_KEYS.ctaVariant, lastCta?.variant],
    [ATTRIBUTION_KEYS.firmType, qualification?.firmType],
    [ATTRIBUTION_KEYS.aumBand, qualification?.aumBand ?? undefined],
    [
      ATTRIBUTION_KEYS.qualified,
      qualification
        ? isQualified(qualification.firmType, qualification.aumBand)
          ? "yes"
          : "no"
        : undefined,
    ],
  ];
  return Object.fromEntries(
    entries.filter((entry): entry is [string, string] => Boolean(entry[1])),
  );
}

/** Cal.com embed config: `metadata[key]` entries become booking metadata. */
export function toCalMetadataConfig(params: Record<string, string>): Record<string, string> {
  return Object.fromEntries(
    Object.keys(params)
      .sort()
      .map((key) => [`metadata[${key}]`, params[key] ?? ""]),
  );
}
