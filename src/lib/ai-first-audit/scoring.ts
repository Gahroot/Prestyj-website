/**
 * Pure scoring functions. Given a task input, return its leverage,
 * readiness, quadrant, and derived savings — no side effects, no I/O.
 *
 * The math is intentionally simple and pinned by tests. If you change a
 * coefficient here, the tests + the result page math must move together.
 */

import {
  HOURS_PER_WEEK_OPTIONS,
  type AuditTaskInput,
  type Quadrant,
  type ScoredTask,
  type SubScore,
} from "./types";
import { pickRecipe } from "./tool-library";

const QUADRANT_THRESHOLD = 12;
const MAX_AXIS = 20;

function hoursPerWeekMidpoint(value: SubScore): number {
  const option = HOURS_PER_WEEK_OPTIONS.find((o) => o.value === value);
  if (!option) {
    throw new Error(`Unknown hoursPerWeek sub-score: ${value}`);
  }
  return option.midpoint;
}

function classifyQuadrant(leverage: number, readiness: number): Quadrant {
  const highLeverage = leverage >= QUADRANT_THRESHOLD;
  const highReadiness = readiness >= QUADRANT_THRESHOLD;
  if (highLeverage && highReadiness) return "automate-first";
  if (highLeverage && !highReadiness) return "delegate";
  if (!highLeverage && highReadiness) return "automate-later";
  return "ignore";
}

/**
 * Score a single task. The "inverted" sub-scores (judgment, errorTolerance)
 * are already inverted at question time — option index 5 ("rules-based" /
 * "easy to catch") gives the highest readiness contribution, which is the
 * intuitive direction. We sum directly.
 */
export function scoreTask(input: AuditTaskInput, hourlyCost: number): ScoredTask {
  const leverage = input.hoursPerWeek + input.cost + input.frequency + input.bottleneck; // 4–20
  const readiness =
    input.repeatability + input.judgment + input.errorTolerance + input.dataAvailability; // 4–20

  const quadrant = classifyQuadrant(leverage, readiness);
  const rankScore = leverage * (readiness / MAX_AXIS);

  // Savings math: midpoint of the hours-per-week band, haircut by readiness/20,
  // multiplied by hourly cost over 52 weeks.
  const rawWeeklyHours = hoursPerWeekMidpoint(input.hoursPerWeek);
  const weeklyHoursSaved = rawWeeklyHours * (readiness / MAX_AXIS);
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
