import { describe, it, expect } from "vitest";
import { buildSevenDayPlan } from "../seven-day-plan";
import { scoreTask } from "../scoring";
import type { AuditTaskInput, BusinessContext } from "../types";

const CONTEXT: BusinessContext = {
  firstName: "Sam",
  lastName: null,
  email: "sam@example.com",
  phone: null,
  businessType: "saas",
  revenueBand: "1m-3m",
  role: "owner",
};

function input(id: string, overrides: Partial<AuditTaskInput> = {}): AuditTaskInput {
  return {
    id,
    title: `Task ${id}`,
    category: "inbox-triage",
    hoursPerWeek: 4,
    frequency: 4,
    repeatability: 4,
    judgment: 4,
    dataAvailability: 4,
    ...overrides,
  };
}

describe("buildSevenDayPlan", () => {
  it("returns exactly 7 days numbered 1–7", () => {
    const top = [scoreTask(input("a"), 50), scoreTask(input("b"), 50), scoreTask(input("c"), 50)];
    const plan = buildSevenDayPlan(top, CONTEXT);
    expect(plan).toHaveLength(7);
    expect(plan.map((d) => d.day)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("references the top-1 task in early days", () => {
    const top = [
      scoreTask(input("a", { title: "Triage support inbox" }), 50),
      scoreTask(input("b"), 50),
      scoreTask(input("c"), 50),
    ];
    const plan = buildSevenDayPlan(top, CONTEXT);
    expect(plan[0]?.body).toContain("Triage support inbox");
  });

  it("references task 2 on day 6", () => {
    const top = [
      scoreTask(input("a"), 50),
      scoreTask(input("b", { title: "Lead enrichment" }), 50),
      scoreTask(input("c"), 50),
    ];
    const plan = buildSevenDayPlan(top, CONTEXT);
    expect(plan[5]?.body).toContain("Lead enrichment");
  });

  it("is deterministic", () => {
    const top = [scoreTask(input("a"), 50), scoreTask(input("b"), 50), scoreTask(input("c"), 50)];
    const a = buildSevenDayPlan(top, CONTEXT);
    const b = buildSevenDayPlan(top, CONTEXT);
    expect(a).toEqual(b);
  });

  it("handles fewer than 3 top tasks without throwing", () => {
    const top = [scoreTask(input("a"), 50)];
    const plan = buildSevenDayPlan(top, CONTEXT);
    expect(plan).toHaveLength(7);
  });
});
