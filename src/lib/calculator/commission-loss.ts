/**
 * Team Commission Loss Calculator
 * Calculates commission losses due to slow lead response times for real estate teams
 */

import type { TeamCalculatorInput } from "@/lib/validations/lead-magnet-schemas";

export interface CalculatorResults {
  lostCommissionPerMonth: number;
  lostCommissionPerYear: number;
  lostDealsPerMonth: number;
  perAgentLossPerMonth: number;
  teamEfficiencyScore: number; // 0-100
  benchmarkComparison: {
    currentResponseTime: string;
    aiResponseTime: string;
    potentialRecovery: number;
  };
  roiAnalysis: {
    estimatedAICost: number;
    annualRecovery: number;
    roi: number; // percentage
    breakEvenMonths: number;
  };
}

/**
 * Response time decay curve based on industry research
 * 78% of buyers work with first responder
 */
const RESPONSE_TIME_DECAY_CURVE: Record<string, number> = {
  "under-1-min": 1.0,    // No penalty
  "5-min": 0.9,          // 10% penalty
  "30-min": 0.7,         // 30% penalty
  "1-hour": 0.5,         // 50% penalty
  "4-hour": 0.2,         // 80% penalty (industry avg)
  "24-hour": 0.05,       // 95% penalty
};

/**
 * Get decay multiplier for given response time
 */
function getDecayMultiplier(responseTime: string): number {
  return RESPONSE_TIME_DECAY_CURVE[responseTime] ?? 0.2;
}

/**
 * Calculate efficiency score (0-100) based on response performance
 */
function calculateEfficiencyScore(decayMultiplier: number): number {
  return Math.round(decayMultiplier * 100);
}

/**
 * Estimate AI agent cost per month
 * Based on typical team size and usage
 */
function estimateAICost(teamSize: number, monthlyLeads: number): number {
  // Base cost: $500/month for first agent
  // Additional cost: $200/month per additional concurrent agent needed
  const baseAgentCost = 500;
  const additionalAgentCost = 200;

  // Estimate concurrent agents needed based on lead volume
  const leadsPerAgent = 250; // One agent can handle ~250 leads/month
  const agentsNeeded = Math.ceil(monthlyLeads / leadsPerAgent);

  // But cap at team size (won't need more AI agents than human agents)
  const effectiveAgents = Math.min(agentsNeeded, Math.ceil(teamSize / 2));

  return baseAgentCost + ((effectiveAgents - 1) * additionalAgentCost);
}

/**
 * Main calculation function
 */
export function calculateCommissionLoss(input: TeamCalculatorInput): CalculatorResults {
  const {
    teamSize,
    monthlyLeads,
    avgCommission,
    closeRate,
    responseTime,
  } = input;

  // Convert close rate from percentage to decimal
  const closeRateDecimal = closeRate / 100;

  // Calculate potential deals with perfect response time
  const potentialDealsPerMonth = monthlyLeads * closeRateDecimal;

  // Calculate actual deals with current response time
  const decayMultiplier = getDecayMultiplier(responseTime);
  const actualDealsPerMonth = potentialDealsPerMonth * decayMultiplier;

  // Calculate losses
  const lostDealsPerMonth = potentialDealsPerMonth - actualDealsPerMonth;
  const lostCommissionPerMonth = lostDealsPerMonth * avgCommission;
  const lostCommissionPerYear = lostCommissionPerMonth * 12;

  // Per-agent impact
  const perAgentLossPerMonth = lostCommissionPerMonth / teamSize;

  // Efficiency score
  const teamEfficiencyScore = calculateEfficiencyScore(decayMultiplier);

  // Benchmark comparison (AI responds in <1 min)
  const aiDecayMultiplier = getDecayMultiplier("under-1-min");
  const potentialDealsWithAI = potentialDealsPerMonth * aiDecayMultiplier;
  const potentialRecovery = (potentialDealsWithAI - actualDealsPerMonth) * avgCommission;

  // ROI analysis
  const estimatedAICost = estimateAICost(teamSize, monthlyLeads);
  const annualRecovery = potentialRecovery * 12;
  const annualAICost = estimatedAICost * 12;
  const roi = annualAICost > 0 ? ((annualRecovery - annualAICost) / annualAICost) * 100 : 0;
  const breakEvenMonths = potentialRecovery > 0 ? estimatedAICost / potentialRecovery : 0;

  return {
    lostCommissionPerMonth,
    lostCommissionPerYear,
    lostDealsPerMonth,
    perAgentLossPerMonth,
    teamEfficiencyScore,
    benchmarkComparison: {
      currentResponseTime: responseTime,
      aiResponseTime: "under-1-min",
      potentialRecovery,
    },
    roiAnalysis: {
      estimatedAICost,
      annualRecovery,
      roi,
      breakEvenMonths,
    },
  };
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format number with commas
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(num);
}
