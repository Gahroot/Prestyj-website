import { describe, it, expect } from "vitest";
import { scoreTask } from "../scoring";
import type { AuditTaskInput } from "../types";

function makeTask(overrides: Partial<AuditTaskInput> = {}): AuditTaskInput {
  return {
    id: "task-1",
    title: "Test task",
    category: "inbox-triage",
    hoursPerWeek: 3,
    frequency: 3,
    repeatability: 3,
    judgment: 3,
    dataAvailability: 3,
    ...overrides,
  };
}

describe("scoreTask", () => {
  it("sums leverage sub-scores (hoursPerWeek + frequency) into a 2–10 axis", () => {
    const result = scoreTask(makeTask({ hoursPerWeek: 5, frequency: 5 }), 50);
    expect(result.leverage).toBe(10);
  });

  it("sums readiness sub-scores (repeatability + judgment + dataAvailability) into a 3–15 axis", () => {
    const result = scoreTask(
      makeTask({ repeatability: 5, judgment: 5, dataAvailability: 5 }),
      50,
    );
    expect(result.readiness).toBe(15);
  });

  it("classifies max-leverage + max-readiness as automate-first", () => {
    const result = scoreTask(
      makeTask({
        hoursPerWeek: 5,
        frequency: 5,
        repeatability: 5,
        judgment: 5,
        dataAvailability: 5,
      }),
      50,
    );
    expect(result.leverage).toBe(10);
    expect(result.readiness).toBe(15);
    expect(result.quadrant).toBe("automate-first");
  });

  it("classifies low/low as ignore", () => {
    const result = scoreTask(
      makeTask({
        hoursPerWeek: 1,
        frequency: 1,
        repeatability: 1,
        judgment: 1,
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
        frequency: 5,
        repeatability: 1,
        judgment: 1,
        dataAvailability: 1,
      }),
      50,
    );
    expect(result.leverage).toBe(10);
    expect(result.readiness).toBe(3);
    expect(result.quadrant).toBe("delegate");
  });

  it("classifies low-leverage / high-readiness as automate-later", () => {
    const result = scoreTask(
      makeTask({
        hoursPerWeek: 1,
        frequency: 1,
        repeatability: 5,
        judgment: 5,
        dataAvailability: 5,
      }),
      50,
    );
    expect(result.quadrant).toBe("automate-later");
  });

  it("computes annual dollars saved from midpoint hours × readiness/15 × hourlyCost × 52", () => {
    // hoursPerWeek=3 → 6 hr/wk midpoint, readiness 15/15 = 1.0, $50/hr → 6 * 52 * 50 = $15,600
    const result = scoreTask(
      makeTask({
        hoursPerWeek: 3,
        repeatability: 5,
        judgment: 5,
        dataAvailability: 5,
      }),
      50,
    );
    expect(result.weeklyHoursSaved).toBe(6);
    expect(result.annualDollarsSaved).toBe(15_600);
  });

  it("haircuts savings by readiness ratio", () => {
    // readiness 9/15 = 0.6, hours midpoint 6, $100/hr → 3.6 hrs/wk * 52 * 100 = $18,720
    const result = scoreTask(
      makeTask({
        hoursPerWeek: 3,
        repeatability: 4,
        judgment: 3,
        dataAvailability: 2,
      }),
      100,
    );
    expect(result.readiness).toBe(9);
    expect(result.weeklyHoursSaved).toBeCloseTo(3.6, 6);
    expect(result.annualDollarsSaved).toBeCloseTo(18_720, 4);
  });

  it("attaches a recipe matching the task category", () => {
    const result = scoreTask(makeTask({ category: "voice-agent" }), 50);
    expect(result.recipe.category).toBe("voice-agent");
    expect(result.recipe.starterRecipe.length).toBeGreaterThan(50);
  });
});
