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
  const leverage = input.hoursPerWeek + input.frequency; // 2–10
  const readiness = input.repeatability + input.judgment + input.dataAvailability; // 3–15

  const quadrant = classifyQuadrant(leverage, readiness);
  const rankScore = leverage * (readiness / MAX_READINESS);

  // Savings math: midpoint of the hours-per-week band, haircut by readiness/MAX,
  // multiplied by hourly cost over 52 weeks.
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
