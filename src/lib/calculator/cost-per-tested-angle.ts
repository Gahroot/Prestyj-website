/**
 * Cost Per Tested Ad Angle Calculator
 *
 * Compares the all-in cost of testing distinct creative angles across six
 * production approaches: premium agency, freelance editor, UGC marketplace,
 * AI avatar tool, in-house creative team, and the Prestyj batch pipeline.
 *
 * Benchmarks are grounded in
 * `content/blog/cost-per-tested-ad-angle-the-only-metric-that-matters-2026.mdx`
 * and the surrounding blog cluster.
 *
 * Pure functions — no React, no I/O.
 */

export type ApproachId =
  | "premium-agency"
  | "freelance-editor"
  | "ugc-marketplace"
  | "ai-avatar"
  | "in-house"
  | "prestyj";

export interface ApproachBenchmark {
  id: ApproachId;
  name: string;
  shortName: string;
  /** Midpoint cost-per-tested-angle benchmark in USD (used when user keeps default). */
  defaultCostPerAngle: number;
  /** Lower bound of the published benchmark range. */
  benchmarkLow: number;
  /** Upper bound of the published benchmark range. */
  benchmarkHigh: number;
  /** Typical winner rate (decimal, e.g. 0.12 = 12%) at the threshold most teams care about. */
  winnerRate: number;
  /** Realistic ceiling on distinct angles this approach can sustainably produce per month. */
  maxMonthlyAngleCapacity: number;
  /** One-line positioning summary for the UI. */
  description: string;
  /** Where this approach genuinely wins, for the recommendation copy. */
  whereItWins: string;
}

/**
 * Approach benchmarks. Costs reflect the midpoint of the published range in
 * `cost-per-tested-ad-angle-the-only-metric-that-matters-2026.mdx`. Winner
 * rates come from the same article's cost-per-winner table.
 */
export const APPROACH_BENCHMARKS: readonly ApproachBenchmark[] = [
  {
    id: "premium-agency",
    name: "Premium Production Agency",
    shortName: "Agency",
    defaultCostPerAngle: 14400,
    benchmarkLow: 9600,
    benchmarkHigh: 19200,
    winnerRate: 0.12,
    maxMonthlyAngleCapacity: 5,
    description: "$3.2K–$9.6K per fully loaded ad, 6–10 distinct angles per 100-ad quarter.",
    whereItWins: "brand films and hero spots — not paid creative testing",
  },
  {
    id: "freelance-editor",
    name: "Freelance Editor / Fiverr",
    shortName: "Freelance",
    defaultCostPerAngle: 2400,
    benchmarkLow: 1500,
    benchmarkHigh: 3200,
    winnerRate: 0.1,
    maxMonthlyAngleCapacity: 8,
    description:
      "Per-edit pricing looks cheap; brief loops + revisions push real angle cost above $1.5K.",
    whereItWins: "one-off polish on existing angles, not net-new hypotheses",
  },
  {
    id: "ugc-marketplace",
    name: "UGC Marketplace (Billo, Insense, Trend)",
    shortName: "UGC",
    defaultCostPerAngle: 2400,
    benchmarkLow: 1080,
    benchmarkHigh: 3840,
    winnerRate: 0.11,
    maxMonthlyAngleCapacity: 18,
    description: "$322 fully loaded per ad, 12–18 distinct angles per quarter.",
    whereItWins: "testimonial-style angles in authenticity-heavy verticals",
  },
  {
    id: "ai-avatar",
    name: "AI Avatar Tool (Arcads, HeyGen, Creatify)",
    shortName: "AI Avatar",
    defaultCostPerAngle: 200,
    benchmarkLow: 160,
    benchmarkHigh: 240,
    winnerRate: 0.09,
    maxMonthlyAngleCapacity: 40,
    description:
      "Cheap per render, but plateaus at 25–40 angles before avatar identity becomes a confound.",
    whereItWins: "high-volume narrow concepts before avatar fatigue sets in",
  },
  {
    id: "in-house",
    name: "In-House Creative Team",
    shortName: "In-House",
    defaultCostPerAngle: 8800,
    benchmarkLow: 6600,
    benchmarkHigh: 11100,
    winnerRate: 0.1,
    maxMonthlyAngleCapacity: 6,
    description: "Fully loaded $1K–$1.6K per ad, but correlated creative drags angle diversity.",
    whereItWins: "year-1 brand build, not the angle-diversity ladder",
  },
  {
    id: "prestyj",
    name: "Prestyj Batch Pipeline",
    shortName: "Prestyj",
    defaultCostPerAngle: 170,
    benchmarkLow: 80,
    benchmarkHigh: 260,
    winnerRate: 0.14,
    maxMonthlyAngleCapacity: 140,
    description: "80–140 distinct angles per 200-ad quarter at $80–$260 per tested angle.",
    whereItWins: "diverse angle testing at scale in the rational zone",
  },
] as const;

export interface CostPerTestedAngleInputs {
  /** Distinct angles the team wants to test per month. */
  anglesPerMonth: number;
  /** Cost the team is currently paying per tested angle (USD). */
  currentCostPerAngle: number;
  /** Per-approach cost-per-angle override (USD). Defaults come from APPROACH_BENCHMARKS. */
  costOverrides: Partial<Record<ApproachId, number>>;
}

export interface ApproachResult {
  id: ApproachId;
  name: string;
  shortName: string;
  costPerAngle: number;
  /** Total monthly cost at the requested angle volume (capped at the approach's capacity). */
  monthlyTotalCost: number;
  /** Angles per month the approach can realistically deliver (≤ requested). */
  deliverableAngles: number;
  /** Whether deliverableAngles < requested (i.e. the approach can't keep up). */
  capacityConstrained: boolean;
  /** Cost per winning angle = costPerAngle ÷ winnerRate. */
  costPerWinner: number;
  /** Estimated winners per month at deliverable volume. */
  expectedWinnersPerMonth: number;
  /** Description copy from the benchmark. */
  description: string;
  /** "Where it wins" copy from the benchmark. */
  whereItWins: string;
  /** Sits in the under-$300 rational zone per the blog post. */
  inRationalZone: boolean;
  /** Sits in the under-$150 dominant zone per the blog post. */
  inDominantZone: boolean;
}

export interface BreakevenComparison {
  /** Approach being compared against the user's current spend. */
  approachId: ApproachId;
  approachName: string;
  /** Absolute monthly savings vs current spend (negative = approach costs more). */
  monthlySavings: number;
  /** Annual savings vs current spend. */
  annualSavings: number;
  /** Extra angles per month gained at the same budget (vs current cost/angle). */
  additionalAnglesAtSameBudget: number;
  /** Multiple of testing throughput at the same budget (e.g. 14.1× more angles). */
  throughputMultiple: number;
}

export interface RecommendationOutput {
  approachId: ApproachId;
  approachName: string;
  /** Headline copy for the recommendation card. */
  headline: string;
  /** Reasoning copy explaining why this approach wins for the inputs. */
  reasoning: string;
}

export interface CostPerTestedAngleResults {
  /** All approach results, ordered by ascending costPerAngle. */
  approaches: ApproachResult[];
  /** The user's own cost line, treated as an additional comparison point. */
  currentSpend: {
    costPerAngle: number;
    monthlyTotalCost: number;
    inRationalZone: boolean;
    inDominantZone: boolean;
  };
  /** Cheapest viable approach (lowest cost-per-angle that can deliver the requested volume). */
  cheapestViable: ApproachResult;
  /** Breakeven analysis vs user's current spend, per approach. */
  breakevens: BreakevenComparison[];
  /** Final recommendation. */
  recommendation: RecommendationOutput;
}

export const DEFAULT_COST_PER_TESTED_ANGLE_INPUTS: CostPerTestedAngleInputs = {
  anglesPerMonth: 25,
  currentCostPerAngle: 2000,
  costOverrides: {},
};

function clampNonNegative(value: number): number {
  if (!Number.isFinite(value) || value < 0) return 0;
  return value;
}

function resolveCostPerAngle(
  benchmark: ApproachBenchmark,
  overrides: Partial<Record<ApproachId, number>>,
): number {
  const override = overrides[benchmark.id];
  if (typeof override === "number" && Number.isFinite(override) && override >= 0) return override;
  return benchmark.defaultCostPerAngle;
}

function buildRecommendation(
  cheapestViable: ApproachResult,
  approaches: ApproachResult[],
  anglesPerMonth: number,
  currentCostPerAngle: number,
): RecommendationOutput {
  // Match-up rule: if requested volume is small enough that UGC or freelance can
  // cover it AND the user already pays less than premium rates, pick the
  // lowest-cost-per-winner approach that meets capacity. Otherwise: Prestyj.
  const capable = approaches.filter((a) => !a.capacityConstrained);
  const byCostPerWinner = [...capable].sort((a, b) => a.costPerWinner - b.costPerWinner);
  const winner = byCostPerWinner[0] ?? cheapestViable;

  const dollarsPerAngleDelta = currentCostPerAngle - winner.costPerAngle;
  const multiple =
    winner.costPerAngle > 0 ? currentCostPerAngle / winner.costPerAngle : Number.POSITIVE_INFINITY;

  const headline =
    winner.id === "prestyj"
      ? `Prestyj at $${Math.round(winner.costPerAngle)}/angle is the only approach that delivers ${anglesPerMonth} angles/month inside the rational zone.`
      : `${winner.name} at $${Math.round(winner.costPerAngle)}/angle delivers the lowest cost per winner for your volume.`;

  const reasoningParts: string[] = [];
  if (dollarsPerAngleDelta > 0) {
    reasoningParts.push(
      `Your current $${Math.round(currentCostPerAngle).toLocaleString()}/angle drops to $${Math.round(winner.costPerAngle).toLocaleString()} — ${multiple.toFixed(1)}× cheaper per hypothesis tested.`,
    );
  } else if (dollarsPerAngleDelta < 0) {
    reasoningParts.push(
      `Your current $${Math.round(currentCostPerAngle).toLocaleString()}/angle is already below this benchmark — switching only helps if you need ${winner.name.toLowerCase()}'s capacity (${winner.deliverableAngles}/mo).`,
    );
  }
  reasoningParts.push(
    `Cost per winner: $${Math.round(winner.costPerWinner).toLocaleString()} at a ${(APPROACH_BENCHMARKS.find((b) => b.id === winner.id)?.winnerRate ?? 0) * 100}% winner rate.`,
  );
  reasoningParts.push(`Best for ${winner.whereItWins}.`);

  return {
    approachId: winner.id,
    approachName: winner.name,
    headline,
    reasoning: reasoningParts.join(" "),
  };
}

export function calculateCostPerTestedAngle(
  input: CostPerTestedAngleInputs,
): CostPerTestedAngleResults {
  const anglesPerMonth = Math.max(0, Math.round(clampNonNegative(input.anglesPerMonth)));
  const currentCostPerAngle = clampNonNegative(input.currentCostPerAngle);

  const approaches: ApproachResult[] = APPROACH_BENCHMARKS.map((benchmark) => {
    const costPerAngle = resolveCostPerAngle(benchmark, input.costOverrides);
    const deliverableAngles = Math.min(anglesPerMonth, benchmark.maxMonthlyAngleCapacity);
    const monthlyTotalCost = deliverableAngles * costPerAngle;
    const capacityConstrained = deliverableAngles < anglesPerMonth;
    const costPerWinner = benchmark.winnerRate > 0 ? costPerAngle / benchmark.winnerRate : 0;
    const expectedWinnersPerMonth = deliverableAngles * benchmark.winnerRate;

    return {
      id: benchmark.id,
      name: benchmark.name,
      shortName: benchmark.shortName,
      costPerAngle,
      monthlyTotalCost,
      deliverableAngles,
      capacityConstrained,
      costPerWinner,
      expectedWinnersPerMonth,
      description: benchmark.description,
      whereItWins: benchmark.whereItWins,
      inRationalZone: costPerAngle < 300,
      inDominantZone: costPerAngle < 150,
    };
  }).sort((a, b) => a.costPerAngle - b.costPerAngle);

  const cheapestViable = approaches.find((a) => !a.capacityConstrained) ??
    approaches[0] ?? {
      id: "prestyj" as ApproachId,
      name: "Prestyj Batch Pipeline",
      shortName: "Prestyj",
      costPerAngle: 0,
      monthlyTotalCost: 0,
      deliverableAngles: 0,
      capacityConstrained: false,
      costPerWinner: 0,
      expectedWinnersPerMonth: 0,
      description: "",
      whereItWins: "",
      inRationalZone: true,
      inDominantZone: true,
    };

  const currentMonthlyTotalCost = anglesPerMonth * currentCostPerAngle;

  const breakevens: BreakevenComparison[] = approaches.map((approach) => {
    const monthlySavings = currentMonthlyTotalCost - approach.monthlyTotalCost;
    const annualSavings = monthlySavings * 12;
    const additionalAnglesAtSameBudget =
      approach.costPerAngle > 0
        ? Math.max(0, currentMonthlyTotalCost / approach.costPerAngle - anglesPerMonth)
        : 0;
    const throughputMultiple =
      approach.costPerAngle > 0 ? currentCostPerAngle / approach.costPerAngle : 0;

    return {
      approachId: approach.id,
      approachName: approach.name,
      monthlySavings,
      annualSavings,
      additionalAnglesAtSameBudget,
      throughputMultiple,
    };
  });

  const recommendation = buildRecommendation(
    cheapestViable,
    approaches,
    anglesPerMonth,
    currentCostPerAngle,
  );

  return {
    approaches,
    currentSpend: {
      costPerAngle: currentCostPerAngle,
      monthlyTotalCost: currentMonthlyTotalCost,
      inRationalZone: currentCostPerAngle < 300,
      inDominantZone: currentCostPerAngle < 150,
    },
    cheapestViable,
    breakevens,
    recommendation,
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatCurrencyCompact(value: number): string {
  const abs = Math.abs(value);
  const sign = value < 0 ? "-" : "";
  if (abs >= 1_000_000) return `${sign}$${(abs / 1_000_000).toFixed(1)}M`;
  if (abs >= 10_000) return `${sign}$${(abs / 1_000).toFixed(0)}K`;
  if (abs >= 1_000) return `${sign}$${(abs / 1_000).toFixed(1)}K`;
  return formatCurrency(value);
}

export function formatNumber(value: number, maxFractionDigits = 1): string {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: maxFractionDigits,
  }).format(value);
}

export function formatMultiple(value: number): string {
  if (!Number.isFinite(value) || value <= 0) return "—";
  if (value >= 100) return `${value.toFixed(0)}×`;
  if (value >= 10) return `${value.toFixed(1)}×`;
  return `${value.toFixed(2)}×`;
}
