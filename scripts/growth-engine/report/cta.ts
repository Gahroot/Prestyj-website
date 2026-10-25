/**
 * CTA winner promotion.
 * Exposures = GA4 `cta_view` events per (pj_cta, pj_cta_variant).
 * Conversions = max(GA4 `book_demo` events, Cal.com bookings) per variant
 *   (Cal is ground truth; GA4 covers bookings Cal metadata missed).
 * pj_cta matches an experiment when it equals the experiment id or starts with `${id}:`.
 * Rule: every testing arm needs ≥ MIN_EXPOSURES; the best-rate arm must beat EVERY other
 * testing arm in a two-sided two-proportion z-test at p < ALPHA. Then best → winner
 * (weight 100), others → retired (weight 0). Copy fields are never touched.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { z } from "zod";
import type { CtaStats } from "../measure/index";
import { CTA_STATS_FILE, readJson } from "../measure/util";

export const CTA_EXPERIMENTS_FILE = "src/lib/conversion/cta-experiments.json";
export const MIN_EXPOSURES = 100;
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

export type ArmStats = { variant: string; exposures: number; conversions: number };

/** Standard normal CDF (Abramowitz–Stegun 7.1.26 via erf). */
function normCdf(z: number): number {
  const t = 1 / (1 + 0.3275911 * (Math.abs(z) / Math.SQRT2));
  const y =
    1 -
    ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) *
      t *
      Math.exp(-(z * z) / 2);
  return z >= 0 ? (1 + y) / 2 : (1 - y) / 2;
}

/** Two-sided p-value for H0: p1 == p2 (pooled two-proportion z-test). */
export function twoProportionPValue(x1: number, n1: number, x2: number, n2: number): number {
  if (n1 === 0 || n2 === 0) return 1;
  const pool = (x1 + x2) / (n1 + n2);
  const se = Math.sqrt(pool * (1 - pool) * (1 / n1 + 1 / n2));
  if (se === 0) return 1;
  const z = (x1 / n1 - x2 / n2) / se;
  return 2 * (1 - normCdf(Math.abs(z)));
}

export function pickWinner(
  arms: ArmStats[],
): { winner: string; pValues: Record<string, number> } | null {
  if (arms.length < 2 || arms.some((a) => a.exposures < MIN_EXPOSURES)) return null;
  const sorted = [...arms].sort(
    (a, b) =>
      b.conversions / b.exposures - a.conversions / a.exposures ||
      a.variant.localeCompare(b.variant),
  );
  const best = sorted[0];
  if (!best) return null;
  const pValues: Record<string, number> = {};
  for (const other of sorted.slice(1)) {
    const p = twoProportionPValue(
      best.conversions,
      best.exposures,
      other.conversions,
      other.exposures,
    );
    pValues[other.variant] = p;
    if (!(best.conversions / best.exposures > other.conversions / other.exposures) || p >= ALPHA)
      return null;
  }
  return { winner: best.variant, pValues };
}

export function armStats(experimentId: string, stats: CtaStats): Map<string, ArmStats> {
  const match = (cta: string) => cta === experimentId || cta.startsWith(`${experimentId}:`);
  const arms = new Map<string, ArmStats>();
  const arm = (v: string) => arms.get(v) ?? { variant: v, exposures: 0, conversions: 0 };
  const ga4Conv = new Map<string, number>();
  for (const e of stats.ga4 ?? []) {
    if (!match(e.cta) || !e.variant) continue;
    if (e.event === "cta_view")
      arms.set(e.variant, { ...arm(e.variant), exposures: arm(e.variant).exposures + e.count });
    if (e.event === "book_demo") ga4Conv.set(e.variant, (ga4Conv.get(e.variant) ?? 0) + e.count);
  }
  const calConv = new Map<string, number>();
  for (const b of stats.cal ?? [])
    if (match(b.cta) && b.variant)
      calConv.set(b.variant, (calConv.get(b.variant) ?? 0) + b.bookings);
  for (const [v, a] of arms)
    arms.set(v, { ...a, conversions: Math.max(ga4Conv.get(v) ?? 0, calConv.get(v) ?? 0) });
  return arms;
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
    const arms = armStats(exp.id, stats);
    const result = pickWinner(
      testing.map((v) => arms.get(v.id) ?? { variant: v.id, exposures: 0, conversions: 0 }),
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
  if (!stats || !stats.ga4) return { changedFiles: [] }; // no exposure data → nothing provable
  const current = experimentsFileSchema.parse(JSON.parse(readFileSync(file, "utf8")));
  const { next, promoted } = applyWinners(current, stats);
  if (promoted.length === 0) return { changedFiles: [] };
  for (const p of promoted)
    console.log(`[cta] ${p.experiment}: variant ${p.variant} promoted to winner`);
  if (!opts.dryRun) writeFileSync(file, `${JSON.stringify(next, null, 2)}\n`);
  return { changedFiles: opts.dryRun ? [] : [CTA_EXPERIMENTS_FILE] };
}
