import { describe, expect, it } from "vitest";
import { computeResultV2 } from "../compute-result";
import {
  impactLabel,
  priorityAction,
  readinessLabel,
  readinessScore,
  scoreWorkflows,
} from "../scoring";
import type { WorkflowInput } from "../types";

function workflow(id: string, overrides: Partial<WorkflowInput> = {}): WorkflowInput {
  return {
    id,
    title: `Workflow ${id}`,
    category: "general",
    isCustom: false,
    weeklyHours: "4-8",
    impact: "wait",
    readiness: {
      sameSteps: 4,
      clearRules: 4,
      informationEasyToFind: 4,
    },
    ...overrides,
  };
}

describe("version 2 scoring", () => {
  it("calculates annual time cost only from midpoint, hourly cost, and 52 weeks", () => {
    const [result] = scoreWorkflows([workflow("a")], 65);
    expect(result?.annualTimeCost).toBe(6 * 65 * 52);
  });

  it("maps impact and readiness boundaries to plain labels", () => {
    expect(impactLabel(0)).toBe("Low");
    expect(impactLabel(33)).toBe("Medium");
    expect(impactLabel(67)).toBe("High");
    expect(impactLabel(100)).toBe("Critical");
    expect(readinessLabel(75)).toBe("Ready now");
    expect(readinessLabel(50)).toBe("Needs a little prep");
    expect(readinessLabel(49.99)).toBe("Needs groundwork");
  });

  it("normalizes all-low and all-high readiness answers to 0 and 100", () => {
    expect(readinessScore({ sameSteps: 1, clearRules: 1, informationEasyToFind: 1 })).toBe(0);
    expect(readinessScore({ sameSteps: 4, clearRules: 4, informationEasyToFind: 4 })).toBe(100);
  });

  it("uses the four honest priority action labels", () => {
    expect(priorityAction(67, 75)).toBe("Fix first");
    expect(priorityAction(67, 50)).toBe("Prepare first");
    expect(priorityAction(33, 75)).toBe("Quick win");
    expect(priorityAction(33, 50)).toBe("Leave for now");
  });

  it("weights time cost and impact at 40 percent and readiness at 20 percent", () => {
    const results = scoreWorkflows(
      [
        workflow("highest", { weeklyHours: "over-15", impact: "loss" }),
        workflow("lowest", {
          weeklyHours: "under-1",
          impact: "little",
          readiness: { sameSteps: 1, clearRules: 1, informationEasyToFind: 1 },
        }),
      ],
      65,
    );
    expect(results[0]?.priorityScore).toBe(100);
    expect(results[1]?.priorityScore).toBe(0);
  });

  it("breaks complete ties by stable workflow id", () => {
    const results = scoreWorkflows([workflow("z"), workflow("a"), workflow("m")], 65);
    expect(results.map((result) => result.input.id)).toEqual(["a", "m", "z"]);
  });

  it("builds a version 2 result and readiness-specific first fix plan", () => {
    const result = computeResultV2(
      { businessType: "home-services", hourlyCost: 65 },
      [
        workflow("a", {
          readiness: { sameSteps: 1, clearRules: 2, informationEasyToFind: 4 },
        }),
        workflow("b", { weeklyHours: "1-3", impact: "delay" }),
        workflow("c", { weeklyHours: "under-1", impact: "little" }),
      ],
      { now: () => new Date("2026-07-27T00:00:00.000Z") },
    );
    expect(result.version).toBe(2);
    expect(result.computedAt).toBe("2026-07-27T00:00:00.000Z");
    expect(result.firstFixPlan.map((item) => item.title)).toContain("Make the steps clear");
    expect(result.firstFixPlan.map((item) => item.title)).toContain("Set the handoff rules");
  });
});
