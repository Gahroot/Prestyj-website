/**
 * Pure scoring functions. Given a task input, return its leverage,
 * readiness, quadrant, and derived savings — no side effects, no I/O.
 *
 * The math is intentionally simple and pinned by tests. If you change a
 * coefficient here, the tests + the result page math must move together.
 */

import {
  HOURS_PER_WEEK_OPTIONS,
  IMPACT_OPTIONS,
  WEEKLY_HOURS_OPTIONS,
  type AuditTaskInput,
  type FourPointAnswer,
  type ImpactAnswer,
  type ImpactLabel,
  type PriorityAction,
  type Quadrant,
  type ReadinessAnswers,
  type ReadinessLabel,
  type ScoredTask,
  type ScoredWorkflow,
  type SubScore,
  type WorkflowInput,
} from "./types";
import { pickRecipe } from "./tool-library";
import { getWorkflowGuide } from "./workflow-guide-library";

// Leverage = hoursPerWeek + frequency (range 2–10). Midpoint = 6.
// Readiness = repeatability + judgment + dataAvailability (range 3–15). Midpoint = 9.
const LEVERAGE_THRESHOLD = 6;
const READINESS_THRESHOLD = 9;
const MAX_READINESS = 15;

function hoursPerWeekMidpoint(value: SubScore): number {
  const option = HOURS_PER_WEEK_OPTIONS.find((o) => o.value === value);
  if (!option) {
    throw new Error(`Unknown hoursPerWeek sub-score: ${value}`);
  }
  return option.midpoint;
}

function classifyQuadrant(leverage: number, readiness: number): Quadrant {
  const highLeverage = leverage >= LEVERAGE_THRESHOLD;
  const highReadiness = readiness >= READINESS_THRESHOLD;
  if (highLeverage && highReadiness) return "automate-first";
  if (highLeverage && !highReadiness) return "delegate";
  if (!highLeverage && highReadiness) return "automate-later";
  return "ignore";
}

/**
 * Score a single task. The "inverted" sub-score (judgment) is already
 * inverted at question time — option 5 ("rules-based / mechanical") gives
 * the highest readiness contribution, which is the intuitive direction.
 * We sum directly.
 *
 * Axes:
 *   leverage   = hoursPerWeek + frequency                          → 2–10
 *   readiness  = repeatability + judgment + dataAvailability        → 3–15
 *
 * `rankScore` normalizes readiness to a 0–1 ratio so it stays comparable
 * with the leverage magnitude.
 */
export function scoreTask(input: AuditTaskInput, hourlyCost: number): ScoredTask {
  const leverage = input.hoursPerWeek + input.frequency;
  const readiness = input.repeatability + input.judgment + input.dataAvailability;
  const quadrant = classifyQuadrant(leverage, readiness);
  const rankScore = leverage * (readiness / MAX_READINESS);
  const rawWeeklyHours = hoursPerWeekMidpoint(input.hoursPerWeek);
  const weeklyHoursSaved = rawWeeklyHours * (readiness / MAX_READINESS);
  const annualDollarsSaved = weeklyHoursSaved * 52 * hourlyCost;

  return {
    input,
    leverage,
    readiness,
    rankScore,
    quadrant,
    weeklyHoursSaved,
    annualDollarsSaved,
    recipe: pickRecipe(input),
  };
}

const IMPACT_SCORE = new Map(IMPACT_OPTIONS.map((option) => [option.value, option.score]));
const HOURS_MIDPOINT = new Map(
  WEEKLY_HOURS_OPTIONS.map((option) => [option.value, option.midpoint]),
);

export function impactScore(answer: ImpactAnswer): number {
  const score = IMPACT_SCORE.get(answer);
  if (score === undefined) throw new Error(`Unknown impact answer: ${answer}`);
  return score;
}

export function impactLabel(score: number): ImpactLabel {
  if (score <= 0) return "Low";
  if (score <= 33) return "Medium";
  if (score <= 67) return "High";
  return "Critical";
}

function normalizeReadinessAnswer(answer: FourPointAnswer): number {
  return ((answer - 1) / 3) * 100;
}

export function readinessScore(answers: ReadinessAnswers): number {
  const total =
    normalizeReadinessAnswer(answers.sameSteps) +
    normalizeReadinessAnswer(answers.clearRules) +
    normalizeReadinessAnswer(answers.informationEasyToFind);
  return Math.round((total / 3) * 100) / 100;
}

export function readinessLabel(score: number): ReadinessLabel {
  if (score >= 75) return "Ready now";
  if (score >= 50) return "Needs a little prep";
  return "Needs groundwork";
}

export function priorityAction(impact: number, readiness: number): PriorityAction {
  const highImpact = impact >= 67;
  const ready = readiness >= 75;
  if (highImpact && ready) return "Fix first";
  if (highImpact) return "Prepare first";
  if (ready) return "Quick win";
  return "Leave for now";
}

function weeklyHoursMidpoint(input: WorkflowInput): number {
  const midpoint = HOURS_MIDPOINT.get(input.weeklyHours);
  if (midpoint === undefined) throw new Error(`Unknown weekly hours answer: ${input.weeklyHours}`);
  return midpoint;
}

function explainRank(workflow: Pick<ScoredWorkflow, "impactLabel" | "readinessLabel">): string {
  if (workflow.impactLabel === "Critical" && workflow.readinessLabel === "Ready now") {
    return "It combines the strongest business impact with work an AI agent can handle now.";
  }
  if (workflow.impactLabel === "Critical" || workflow.impactLabel === "High") {
    return "It ranks first because delays here carry a high business cost.";
  }
  return "It ranks first because it ties up more team time than the other workflows you chose.";
}

export function scoreWorkflows(
  inputs: readonly WorkflowInput[],
  hourlyCost: number,
): readonly ScoredWorkflow[] {
  if (inputs.length === 0) throw new Error("Cannot score zero workflows");
  if (!Number.isFinite(hourlyCost) || hourlyCost <= 0) {
    throw new Error("hourlyCost must be greater than zero");
  }

  const costs = inputs.map((input) => weeklyHoursMidpoint(input) * hourlyCost * 52);
  const minimumCost = Math.min(...costs);
  const maximumCost = Math.max(...costs);
  const costRange = maximumCost - minimumCost;

  const scored = inputs.map((input, index): ScoredWorkflow => {
    const annualTimeCost = costs[index]!;
    const workflowImpact = impactScore(input.impact);
    const workflowReadiness = readinessScore(input.readiness);
    const normalizedTimeCost = costRange === 0 ? 100 : ((annualTimeCost - minimumCost) / costRange) * 100;
    const priorityScore =
      normalizedTimeCost * 0.4 + workflowImpact * 0.4 + workflowReadiness * 0.2;
    const partial = {
      impactLabel: impactLabel(workflowImpact),
      readinessLabel: readinessLabel(workflowReadiness),
    };

    return {
      input,
      weeklyHoursMidpoint: weeklyHoursMidpoint(input),
      annualTimeCost,
      impactScore: workflowImpact,
      impactLabel: partial.impactLabel,
      readinessScore: workflowReadiness,
      readinessLabel: partial.readinessLabel,
      normalizedTimeCost: Math.round(normalizedTimeCost * 100) / 100,
      priorityScore: Math.round(priorityScore * 100) / 100,
      priorityAction: priorityAction(workflowImpact, workflowReadiness),
      guide: getWorkflowGuide(input.category),
      whyItRanks: explainRank(partial),
    };
  });

  return [...scored].sort((a, b) => {
    if (b.priorityScore !== a.priorityScore) return b.priorityScore - a.priorityScore;
    if (b.impactScore !== a.impactScore) return b.impactScore - a.impactScore;
    if (b.readinessScore !== a.readinessScore) return b.readinessScore - a.readinessScore;
    if (b.annualTimeCost !== a.annualTimeCost) return b.annualTimeCost - a.annualTimeCost;
    return a.input.id.localeCompare(b.input.id);
  });
}
