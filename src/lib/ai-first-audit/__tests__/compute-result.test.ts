import { describe, it, expect } from "vitest";
import { computeResult } from "../compute-result";
import type { AuditTaskInput, BusinessContext } from "../types";

const FIXED_CLOCK = () => new Date("2025-01-15T12:00:00.000Z");

const CONTEXT: BusinessContext = {
  firstName: "Sam",
  lastName: "Operator",
  email: "sam@example.com",
  phone: null,
  businessType: "agency",
  revenueBand: "1m-3m",
  role: "owner",
};

function task(id: string, overrides: Partial<AuditTaskInput> = {}): AuditTaskInput {
  return {
    id,
    title: `Task ${id}`,
    category: "inbox-triage",
    hoursPerWeek: 3,
    cost: 3,
    frequency: 3,
    bottleneck: 3,
    repeatability: 3,
    judgment: 3,
    errorTolerance: 3,
    dataAvailability: 3,
    ...overrides,
  };
}

describe("computeResult", () => {
  it("ranks automate-first tasks by composite rank score", () => {
    const tasks: AuditTaskInput[] = [
      task("low", {
        hoursPerWeek: 1,
        cost: 1,
        frequency: 1,
        bottleneck: 1,
        repeatability: 1,
        judgment: 1,
        errorTolerance: 1,
        dataAvailability: 1,
      }),
      task("mid", {
        hoursPerWeek: 3,
        cost: 3,
        frequency: 3,
        bottleneck: 3,
        repeatability: 4,
        judgment: 4,
        errorTolerance: 4,
        dataAvailability: 4,
      }),
      task("high", {
        hoursPerWeek: 5,
        cost: 5,
        frequency: 5,
        bottleneck: 5,
        repeatability: 5,
        judgment: 5,
        errorTolerance: 5,
        dataAvailability: 5,
      }),
    ];

    const result = computeResult(CONTEXT, tasks, 75, { now: FIXED_CLOCK });

    expect(result.tasks[0]?.input.id).toBe("high");
    expect(result.topThree[0]?.input.id).toBe("high");
  });

  it("fills top-3 with non-automate-first tasks when fewer than 3 qualify", () => {
    const tasks: AuditTaskInput[] = [
      task("a", {
        hoursPerWeek: 5,
        cost: 5,
        frequency: 5,
        bottleneck: 5,
        repeatability: 5,
        judgment: 5,
        errorTolerance: 5,
        dataAvailability: 5,
      }),
      task("b", {
        hoursPerWeek: 5,
        cost: 5,
        frequency: 5,
        bottleneck: 5,
        repeatability: 1,
        judgment: 1,
        errorTolerance: 1,
        dataAvailability: 1,
      }),
      task("c", {
        hoursPerWeek: 1,
        cost: 1,
        frequency: 1,
        bottleneck: 1,
        repeatability: 5,
        judgment: 5,
        errorTolerance: 5,
        dataAvailability: 5,
      }),
    ];

    const result = computeResult(CONTEXT, tasks, 75, { now: FIXED_CLOCK });
    expect(result.topThree).toHaveLength(3);
    expect(result.topThree[0]?.input.id).toBe("a");
  });

  it("computes headline dollars rounded to nearest $1K", () => {
    const tasks: AuditTaskInput[] = [
      task("a", {
        hoursPerWeek: 3,
        cost: 3,
        frequency: 3,
        bottleneck: 3,
        repeatability: 5,
        judgment: 5,
        errorTolerance: 5,
        dataAvailability: 5,
      }),
    ];

    const result = computeResult(CONTEXT, tasks, 50, { now: FIXED_CLOCK });
    // 6 hrs/wk * 52 * $50 = $15,600 → rounds to $16,000
    expect(result.headlineDollars).toBe(16_000);
  });

  it("produces a 7-day plan", () => {
    const tasks: AuditTaskInput[] = [
      task("a", {
        hoursPerWeek: 5,
        cost: 5,
        frequency: 5,
        bottleneck: 5,
        repeatability: 5,
        judgment: 5,
        errorTolerance: 5,
        dataAvailability: 5,
      }),
    ];

    const result = computeResult(CONTEXT, tasks, 75, { now: FIXED_CLOCK });
    expect(result.sevenDayPlan).toHaveLength(7);
    expect(result.sevenDayPlan.map((d) => d.day)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("rejects empty task lists", () => {
    expect(() => computeResult(CONTEXT, [], 50, { now: FIXED_CLOCK })).toThrow();
  });

  it("rejects non-positive hourly cost", () => {
    expect(() => computeResult(CONTEXT, [task("a")], 0, { now: FIXED_CLOCK })).toThrow();
  });

  it("is deterministic for identical inputs", () => {
    const tasks: AuditTaskInput[] = [
      task("alpha", {
        hoursPerWeek: 4,
        cost: 3,
        frequency: 4,
        bottleneck: 3,
        repeatability: 4,
        judgment: 4,
        errorTolerance: 3,
        dataAvailability: 4,
      }),
      task("beta", {
        hoursPerWeek: 4,
        cost: 3,
        frequency: 4,
        bottleneck: 3,
        repeatability: 4,
        judgment: 4,
        errorTolerance: 3,
        dataAvailability: 4,
      }),
    ];
    const r1 = computeResult(CONTEXT, tasks, 75, { now: FIXED_CLOCK });
    const r2 = computeResult(CONTEXT, tasks, 75, { now: FIXED_CLOCK });
    expect(r1).toEqual(r2);
  });
});
