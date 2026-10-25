/**
 * Cal.com API v2 bookings (read-only). Only aggregate counts leave this module:
 * attendee names/emails are never read into results.
 */
import { z } from "zod";
import { ATTRIBUTION_KEYS } from "../shared/contracts";
import { fetchJson, toPath } from "./util";

export const CAL_API = "https://api.cal.com/v2/bookings";
export const CAL_API_VERSION = "2026-05-01";
const MAX_PAGES = 50;

const bookingSchema = z.object({
  status: z.string(),
  createdAt: z.string(),
  metadata: z.record(z.string(), z.unknown()).nullish(),
});
const pageSchema = z.object({
  data: z.array(bookingSchema),
  pagination: z
    .object({ nextCursor: z.string().nullable(), hasMore: z.boolean() })
    .partial()
    .optional(),
});

export type CalData = {
  totalBookings: number;
  cancelledExcluded: number;
  demosBooked: number;
  qualifiedDemos: number;
  qualifiedDemosFromOrganicOrAi: number;
  unattributed: number;
  byPath: Map<string, { demos: number; qualified: number }>;
  byCta: Array<{ cta: string; variant: string; bookings: number }>;
};

const str = (m: Record<string, unknown> | null | undefined, k: string): string | null => {
  const v = m?.[k];
  return typeof v === "string" && v.trim() ? v.trim() : null;
};

export async function fetchCal(
  apiKey: string,
  window: { start: string; end: string },
): Promise<CalData> {
  const headers = { authorization: `Bearer ${apiKey}`, "cal-api-version": CAL_API_VERSION };
  const bookings: Array<z.infer<typeof bookingSchema>> = [];
  let cursor: string | null = null;
  for (let i = 0; i < MAX_PAGES; i++) {
    const qs = new URLSearchParams({
      afterCreatedAt: `${window.start}T00:00:00.000Z`,
      beforeCreatedAt: `${window.end}T23:59:59.999Z`,
      limit: "100",
    });
    if (cursor) qs.set("cursor", cursor);
    const body = pageSchema.parse(
      await fetchJson(`${CAL_API}?${qs.toString()}`, { label: "Cal.com bookings", headers }),
    );
    bookings.push(...body.data);
    cursor = body.pagination?.hasMore ? (body.pagination.nextCursor ?? null) : null;
    if (!cursor) break;
  }
  const out: CalData = {
    totalBookings: 0,
    cancelledExcluded: 0,
    demosBooked: 0,
    qualifiedDemos: 0,
    qualifiedDemosFromOrganicOrAi: 0,
    unattributed: 0,
    byPath: new Map(),
    byCta: [],
  };
  const cta = new Map<string, number>();
  for (const b of bookings) {
    const day = b.createdAt.slice(0, 10);
    if (day < window.start || day > window.end) continue;
    out.totalBookings++;
    if (b.status === "cancelled" || b.status === "rejected") {
      out.cancelledExcluded++;
      continue;
    }
    const m = b.metadata;
    const qualified = str(m, ATTRIBUTION_KEYS.qualified) === "yes";
    const channel = str(m, ATTRIBUTION_KEYS.channel);
    const landing = str(m, ATTRIBUTION_KEYS.landingPath);
    out.demosBooked++;
    if (qualified) out.qualifiedDemos++;
    if (qualified && (channel === "organic" || channel === "ai"))
      out.qualifiedDemosFromOrganicOrAi++;
    const p = landing ? toPath(landing) : null;
    if (p) {
      const a = out.byPath.get(p) ?? { demos: 0, qualified: 0 };
      a.demos++;
      if (qualified) a.qualified++;
      out.byPath.set(p, a);
    } else out.unattributed++;
    const ctaId = str(m, ATTRIBUTION_KEYS.ctaId);
    if (ctaId) {
      const k = `${ctaId}\u0000${str(m, ATTRIBUTION_KEYS.ctaVariant) ?? ""}`;
      cta.set(k, (cta.get(k) ?? 0) + 1);
    }
  }
  out.byCta = [...cta.entries()].sort().map(([k, bookingsN]) => {
    const [c, v] = k.split("\u0000");
    return { cta: c ?? "", variant: v ?? "", bookings: bookingsN };
  });
  return out;
}
