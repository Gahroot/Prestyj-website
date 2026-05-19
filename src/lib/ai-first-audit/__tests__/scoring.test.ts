import { describe, it, expect } from "vitest";
import { scoreTask } from "../scoring";
import type { AuditTaskInput } from "../types";

function makeTask(overrides: Partial<AuditTaskInput> = {}): AuditTaskInput {
  return {
    id: "task-1",
    title: "Test task",
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

describe("scoreTask", () => {
  it("sums sub-scores into 4–20 axes", () => {
    const result = scoreTask(
      makeTask({ hoursPerWeek: 5, cost: 4, frequency: 5, bottleneck: 4 }),
      50,
    );
    expect(result.leverage).toBe(18);
  });

  it("classifies max-leverage + max-readiness as automate-first", () => {
    const result = scoreTask(
      makeTask({
        hoursPerWeek: 5,
        cost: 5,
        frequency: 5,
        bottleneck: 5,
        repeatability: 5,
        judgment: 5,
        errorTolerance: 5,
        dataAvailability: 5,
      }),
      50,
    );
    expect(result.leverage).toBe(20);
    expect(result.readiness).toBe(20);
    expect(result.quadrant).toBe("automate-first");
  });

  it("classifies low/low as ignore", () => {
    const result = scoreTask(
      makeTask({
        hoursPerWeek: 1,
        cost: 1,
        frequency: 1,
        bottleneck: 1,
        repeatability: 1,
        judgment: 1,
        errorTolerance: 1,
        dataAvailability: 1,
      }),
      50,
    );
    expect(result.quadrant).toBe("ignore");
  });

  it("classifies high-leverage / low-readiness as delegate", () => {
    const result = scoreTask(
      makeTask({
        hoursPerWeek: 5,
        cost: 5,
        frequency: 5,
        bottleneck: 5,
        repeatability: 1,
        judgment: 1,
        errorTolerance: 1,
        dataAvailability: 1,
      }),
      50,
    );
    expect(result.leverage).toBe(20);
    expect(result.readiness).toBe(4);
    expect(result.quadrant).toBe("delegate");
  });

  it("classifies low-leverage / high-readiness as automate-later", () => {
    const result = scoreTask(
      makeTask({
        hoursPerWeek: 1,
        cost: 1,
        frequency: 1,
        bottleneck: 1,
        repeatability: 5,
        judgment: 5,
        errorTolerance: 5,
        dataAvailability: 5,
      }),
      50,
    );
    expect(result.quadrant).toBe("automate-later");
  });

  it("computes annual dollars saved from midpoint hours × readiness/20 × hourlyCost × 52", () => {
    // hoursPerWeek=3 → 6 hr/wk midpoint, readiness 20/20 = 1.0, $50/hr → 6 * 52 * 50 = $15,600
    const result = scoreTask(
      makeTask({
        hoursPerWeek: 3,
        repeatability: 5,
        judgment: 5,
        errorTolerance: 5,
        dataAvailability: 5,
      }),
      50,
    );
    expect(result.weeklyHoursSaved).toBe(6);
    expect(result.annualDollarsSaved).toBe(15_600);
  });

  it("haircuts savings by readiness ratio", () => {
    // readiness 10/20 = 0.5, hours midpoint 6, $100/hr → 3 hrs/wk * 52 * 100 = $15,600
    const result = scoreTask(
      makeTask({
        hoursPerWeek: 3,
        repeatability: 4,
        judgment: 3,
        errorTolerance: 2,
        dataAvailability: 1,
      }),
      100,
    );
    expect(result.readiness).toBe(10);
    expect(result.weeklyHoursSaved).toBe(3);
    expect(result.annualDollarsSaved).toBe(15_600);
  });

  it("attaches a recipe matching the task category", () => {
    const result = scoreTask(makeTask({ category: "voice-agent" }), 50);
    expect(result.recipe.category).toBe("voice-agent");
    expect(result.recipe.starterRecipe.length).toBeGreaterThan(50);
  });
});
