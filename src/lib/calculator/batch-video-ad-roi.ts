/**
 * Batch Video Ad ROI Calculator
 *
 * Models the economics of running batch video ad creative testing: how many
 * winning ad angles you produce per month, what those winners do to CPA, the
 * extra leads gained, payback against Prestyj pricing tiers, and 12-month ROI.
 *
 * Pure functions — no React, no I/O. Tested via the consuming page.
 */

import { pricingTiers, type PricingTier, type TierId } from "@/lib/pricing-data";

export interface BatchVideoAdRoiInputs {
  /** Monthly ad spend in USD (e.g. 5000). */
  monthlyAdSpend: number;
  /** Current cost per acquisition (lead/booking) in USD. */
  currentCpa: number;
  /** Number of distinct creative angles tested per month. */
  anglesTestedPerMonth: number;
  /** Average winner rate as a percentage (0–100) — % of tested angles that beat baseline. */
  winnerRatePercent: number;
  /** Average CPA improvement per winner as a percentage (0–100). */
  cpaLiftPercent: number;
}

export interface TierPayback {
  tierId: TierId;
  tierName: string;
  setupFee: number;
  monthlyPrice: number;
  totalFirstMonth: number;
  totalYearOne: number;
  /** Months to recoup setup + monthly cost from CPA savings (0 if savings ≤ 0). */
  paybackMonths: number;
  /** 12-month ROI as a percentage. */
  twelveMonthRoiPercent: number;
  /** Net savings over 12 months (savings + extra leads × current CPA value − tier cost). */
  netTwelveMonthSavings: number;
}

export interface BatchVideoAdRoiResults {
  /** Baseline leads per month at current CPA. */
  baselineMonthlyLeads: number;
  /** Projected number of winning ad angles per month. */
  projectedMonthlyWinners: number;
  /** Projected new CPA in USD after winners compound through the account. */
  projectedCpa: number;
  /** Absolute CPA improvement in USD (current − projected). */
  cpaImprovementDollars: number;
  /** CPA improvement as a percentage of current CPA. */
  cpaImprovementPercent: number;
  /** Projected total leads/month at the new CPA. */
  projectedMonthlyLeads: number;
  /** Extra leads gained per month vs baseline. */
  monthlyLeadsGained: number;
  /** Extra leads gained over 12 months. */
  annualLeadsGained: number;
  /** Monthly CPA savings on the baseline lead volume in USD. */
  monthlyCpaSavings: number;
  /** 12-month CPA savings on the baseline lead volume in USD. */
  annualCpaSavings: number;
  /** Payback breakdown for each Prestyj pricing tier. */
  tierPaybacks: TierPayback[];
}

export const DEFAULT_BATCH_VIDEO_AD_ROI_INPUTS: BatchVideoAdRoiInputs = {
  monthlyAdSpend: 5000,
  currentCpa: 60,
  anglesTestedPerMonth: 20,
  winnerRatePercent: 15,
  cpaLiftPercent: 25,
};

/**
 * Compound the projected CPA from multiple winners.
 *
 * Each winner reduces CPA by `cpaLiftPercent`. Compounding stacks losses
 * multiplicatively, then we cap the floor at 10% of current CPA so the model
 * never claims an impossible $0 acquisition cost.
 */
function projectCpa(currentCpa: number, winners: number, cpaLiftDecimal: number): number {
  if (currentCpa <= 0 || winners <= 0 || cpaLiftDecimal <= 0) return currentCpa;
  const compounded = currentCpa * Math.pow(1 - cpaLiftDecimal, winners);
  const floor = currentCpa * 0.1;
  return Math.max(compounded, floor);
}

function computeTierPayback(
  tier: PricingTier,
  monthlyCpaSavings: number,
  monthlyLeadsGained: number,
  currentCpa: number,
): TierPayback {
  // Total monthly value = CPA savings on existing volume + value of extra leads
  // (priced at current CPA — i.e. what those leads would have cost before).
  const monthlyValue = monthlyCpaSavings + monthlyLeadsGained * currentCpa;

  const totalYearOne = tier.setupFee + tier.monthlyPrice * 12;
  const twelveMonthValue = monthlyValue * 12;
  const netTwelveMonthSavings = twelveMonthValue - totalYearOne;
  const twelveMonthRoiPercent = totalYearOne > 0 ? (netTwelveMonthSavings / totalYearOne) * 100 : 0;

  const paybackMonths =
    monthlyValue > tier.monthlyPrice ? tier.setupFee / (monthlyValue - tier.monthlyPrice) : 0;

  return {
    tierId: tier.id,
    tierName: tier.name,
    setupFee: tier.setupFee,
    monthlyPrice: tier.monthlyPrice,
    totalFirstMonth: tier.setupFee + tier.monthlyPrice,
    totalYearOne,
    paybackMonths,
    twelveMonthRoiPercent,
    netTwelveMonthSavings,
  };
}

export function calculateBatchVideoAdRoi(input: BatchVideoAdRoiInputs): BatchVideoAdRoiResults {
  const monthlyAdSpend = Math.max(0, input.monthlyAdSpend);
  const currentCpa = Math.max(0, input.currentCpa);
  const anglesTested = Math.max(0, input.anglesTestedPerMonth);
  const winnerRateDecimal = Math.min(1, Math.max(0, input.winnerRatePercent / 100));
  const cpaLiftDecimal = Math.min(1, Math.max(0, input.cpaLiftPercent / 100));

  const baselineMonthlyLeads = currentCpa > 0 ? monthlyAdSpend / currentCpa : 0;
  const projectedMonthlyWinners = anglesTested * winnerRateDecimal;
  const projectedCpa = projectCpa(currentCpa, projectedMonthlyWinners, cpaLiftDecimal);

  const cpaImprovementDollars = currentCpa - projectedCpa;
  const cpaImprovementPercent = currentCpa > 0 ? (cpaImprovementDollars / currentCpa) * 100 : 0;

  const projectedMonthlyLeads = projectedCpa > 0 ? monthlyAdSpend / projectedCpa : 0;
  const monthlyLeadsGained = Math.max(0, projectedMonthlyLeads - baselineMonthlyLeads);
  const annualLeadsGained = monthlyLeadsGained * 12;

  const monthlyCpaSavings = baselineMonthlyLeads * cpaImprovementDollars;
  const annualCpaSavings = monthlyCpaSavings * 12;

  const tierPaybacks = pricingTiers.map((tier) =>
    computeTierPayback(tier, monthlyCpaSavings, monthlyLeadsGained, currentCpa),
  );

  return {
    baselineMonthlyLeads,
    projectedMonthlyWinners,
    projectedCpa,
    cpaImprovementDollars,
    cpaImprovementPercent,
    projectedMonthlyLeads,
    monthlyLeadsGained,
    annualLeadsGained,
    monthlyCpaSavings,
    annualCpaSavings,
    tierPaybacks,
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
  if (abs >= 1_000_000) return `${value < 0 ? "-" : ""}$${(abs / 1_000_000).toFixed(1)}M`;
  if (abs >= 10_000) return `${value < 0 ? "-" : ""}$${(abs / 1_000).toFixed(0)}K`;
  if (abs >= 1_000) return `${value < 0 ? "-" : ""}$${(abs / 1_000).toFixed(1)}K`;
  return formatCurrency(value);
}

export function formatNumber(value: number, maxFractionDigits = 1): string {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: maxFractionDigits,
  }).format(value);
}

export function formatPercent(value: number, fractionDigits = 1): string {
  return `${value.toFixed(fractionDigits)}%`;
}

export function formatMonths(months: number): string {
  if (months <= 0) return "—";
  if (months < 1) {
    const days = Math.max(1, Math.round(months * 30));
    return `${days} day${days === 1 ? "" : "s"}`;
  }
  if (months < 12) return `${months.toFixed(1)} mo`;
  const years = months / 12;
  return `${years.toFixed(1)} yr`;
}
