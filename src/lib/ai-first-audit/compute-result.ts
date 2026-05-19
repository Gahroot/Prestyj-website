/**
 * Aggregate result computation. Pure — given a context, a list of task
 * inputs, and an hourly cost, return the full `AuditResult` shape that's
 * persisted to `AiFirstAudit.resultJson` and rendered everywhere else.
 */

import type { AuditResult, AuditTaskInput, BusinessContext, ScoredTask } from "./types";
import { scoreTask } from "./scoring";
import { buildSevenDayPlan } from "./seven-day-plan";

function roundToNearest(value: number, step: number): number {
  return Math.round(value / step) * step;
}

export interface ComputeResultOptions {
  /** Inject a clock for deterministic tests. Defaults to `Date.now()`. */
  readonly now?: () => Date;
}

export function computeResult(
  context: BusinessContext,
  tasks: readonly AuditTaskInput[],
  hourlyCost: number,
  options: ComputeResultOptions = {},
): AuditResult {
  if (tasks.length === 0) {
    throw new Error("Cannot compute audit result with zero tasks");
  }
  if (hourlyCost <= 0) {
    throw new Error("hourlyCost must be greater than zero");
  }

  const scored: ScoredTask[] = tasks.map((t) => scoreTask(t, hourlyCost));

  // Deterministic ordering: rankScore desc, then leverage desc, then id asc
  // to keep ties stable.
  const sorted = [...scored].sort((a, b) => {
    if (b.rankScore !== a.rankScore) return b.rankScore - a.rankScore;
    if (b.leverage !== a.leverage) return b.leverage - a.leverage;
    return a.input.id.localeCompare(b.input.id);
  });

  // Top 3 from the "automate-first" quadrant. If fewer than 3 qualify,
  // fill from the highest-ranked remaining tasks regardless of quadrant
  // so the result page always has 3 cards.
  const automateFirst = sorted.filter((s) => s.quadrant === "automate-first");
  const topThree: ScoredTask[] = [];
  for (const task of automateFirst) {
    if (topThree.length >= 3) break;
    topThree.push(task);
  }
  if (topThree.length < 3) {
    for (const task of sorted) {
      if (topThree.length >= 3) break;
      if (!topThree.includes(task)) topThree.push(task);
    }
  }

  const totalWeeklyHoursSaved = topThree.reduce((sum, t) => sum + t.weeklyHoursSaved, 0);
  const totalAnnualDollarsSaved = topThree.reduce((sum, t) => sum + t.annualDollarsSaved, 0);
  const headlineDollars = roundToNearest(totalAnnualDollarsSaved, 1000);

  const sevenDayPlan = buildSevenDayPlan(topThree, context);

  return {
    version: 1,
    context,
    hourlyCost,
    tasks: sorted,
    topThree,
    totalWeeklyHoursSaved,
    totalAnnualDollarsSaved,
    headlineDollars,
    sevenDayPlan,
    computedAt: (options.now ?? (() => new Date()))().toISOString(),
  };
}
