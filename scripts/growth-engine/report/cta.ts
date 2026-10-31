/**
 * CTA winner promotion without GA4 (owner decision, 2026-10-31: no GA4).
 * There are no exposure counts, so the test uses Cal.com bookings only:
 * pj_cta matches an experiment when it equals the experiment id or starts with `${id}:`;
 * bookings per variant come from booking metadata (pj_cta_variant).
 * Variants are assigned by weight, so with no real difference each arm's share of
 * bookings should equal its share of weight. Rule: the experiment needs at least
 * MIN_BOOKINGS attributed bookings across testing arms; the best arm (bookings/weight)
 * must beat EVERY other testing arm in an exact two-sided binomial test of the pairwise
 * booking split against the weight split at p < ALPHA. Then best → winner (weight 100),
 * others → retired (weight 0). Copy fields are never touched.
 * Caveat: this assumes visitors see arms in proportion to weight (true for random
 * assignment); it cannot detect exposure skew without exposure data.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { z } from "zod";
import type { CtaStats } from "../measure/index";
import { CTA_STATS_FILE, readJson } from "../measure/util";

export const CTA_EXPERIMENTS_FILE = "src/lib/conversion/cta-experiments.json";
export const MIN_BOOKINGS = 20;
export const ALPHA = 0.05;

const variantSchema = z
  .object({ id: z.string(), weight: z.number(), status: z.enum(["testing", "winner", "retired"]) })
  .passthrough();
const experimentSchema = z
  .object({ id: z.string(), placement: z.string(), variants: z.array(variantSchema) })
  .passthrough();
export const experimentsFileSchema = z
  .object({ experiments: z.array(experimentSchema) })
  .passthrough();
export type ExperimentsFile = z.infer<typeof experimentsFileSchema>;

export type ArmStats = { variant: string; weight: number; bookings: number };

function logChoose(n: number, k: number): number {
  let r = 0;
  for (let i = 1; i <= k; i++) r += Math.log(n - k + i) - Math.log(i);
  return r;
}

/** Exact two-sided binomial p-value: P(outcomes at most as likely as x | n, p). */
export function binomialPValue(x: number, n: number, p: number): number {
  if (n === 0 || p <= 0 || p >= 1) return 1;
  const pmf = (k: number) =>
    Math.exp(logChoose(n, k) + k * Math.log(p) + (n - k) * Math.log(1 - p));
  const observed = pmf(x);
  let total = 0;
  for (let k = 0; k <= n; k++) {
    const q = pmf(k);
    if (q <= observed * (1 + 1e-9)) total += q;
  }
  return Math.min(1, total);
}

export function pickWinner(
  arms: ArmStats[],
): { winner: string; pValues: Record<string, number> } | null {
  if (arms.length < 2 || arms.some((a) => a.weight <= 0)) return null;
  if (arms.reduce((n, a) => n + a.bookings, 0) < MIN_BOOKINGS) return null;
  const rate = (a: ArmStats) => a.bookings / a.weight;
  const sorted = [...arms].sort((a, b) => rate(b) - rate(a) || a.variant.localeCompare(b.variant));
  const best = sorted[0];
  if (!best) return null;
  const pValues: Record<string, number> = {};
  for (const other of sorted.slice(1)) {
    const p = binomialPValue(
      best.bookings,
      best.bookings + other.bookings,
      best.weight / (best.weight + other.weight),
    );
    pValues[other.variant] = p;
    if (!(rate(best) > rate(other)) || p >= ALPHA) return null;
  }
  return { winner: best.variant, pValues };
}

/** Cal.com bookings per variant for one experiment. */
export function bookingsByVariant(experimentId: string, stats: CtaStats): Map<string, number> {
  const match = (cta: string) => cta === experimentId || cta.startsWith(`${experimentId}:`);
  const out = new Map<string, number>();
  for (const b of stats.cal ?? [])
    if (match(b.cta) && b.variant) out.set(b.variant, (out.get(b.variant) ?? 0) + b.bookings);
  return out;
}

/** Pure: returns the updated file and the ids promoted. */
export function applyWinners(
  file: ExperimentsFile,
  stats: CtaStats,
): { next: ExperimentsFile; promoted: Array<{ experiment: string; variant: string }> } {
  const promoted: Array<{ experiment: string; variant: string }> = [];
  const experiments = file.experiments.map((exp) => {
    if (exp.variants.some((v) => v.status === "winner")) return exp;
    const testing = exp.variants.filter((v) => v.status === "testing");
    const booked = bookingsByVariant(exp.id, stats);
    const result = pickWinner(
      testing.map((v) => ({ variant: v.id, weight: v.weight, bookings: booked.get(v.id) ?? 0 })),
    );
    if (!result) return exp;
    promoted.push({ experiment: exp.id, variant: result.winner });
    return {
      ...exp,
      variants: exp.variants.map((v) =>
        v.id === result.winner
          ? { ...v, status: "winner" as const, weight: 100 }
          : v.status === "testing"
            ? { ...v, status: "retired" as const, weight: 0 }
            : v,
      ),
    };
  });
  return { next: { ...file, experiments }, promoted };
}

export async function promoteCtaWinners(opts: {
  root: string;
  dryRun: boolean;
}): Promise<{ changedFiles: string[] }> {
  const file = path.join(opts.root, CTA_EXPERIMENTS_FILE);
  if (!existsSync(file)) return { changedFiles: [] };
  const stats = readJson<CtaStats | null>(path.join(opts.root, CTA_STATS_FILE), null);
  if (!stats || !stats.cal) return { changedFiles: [] }; // no Cal.com data → nothing provable
  const current = experimentsFileSchema.parse(JSON.parse(readFileSync(file, "utf8")));
  const { next, promoted } = applyWinners(current, stats);
  if (promoted.length === 0) return { changedFiles: [] };
  for (const p of promoted)
    console.log(`[cta] ${p.experiment}: variant ${p.variant} promoted to winner`);
  if (!opts.dryRun) writeFileSync(file, `${JSON.stringify(next, null, 2)}\n`);
  return { changedFiles: opts.dryRun ? [] : [CTA_EXPERIMENTS_FILE] };
}
