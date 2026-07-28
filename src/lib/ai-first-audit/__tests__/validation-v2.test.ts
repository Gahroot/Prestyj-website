import { describe, expect, it } from "vitest";
import { completeAuditRequestSchema } from "@/lib/validations/ai-first-audit-schemas";
import type { WorkflowInput } from "../types";

const validWorkflow = {
  id: "answer-leads",
  title: "Answer new leads",
  category: "lead-response",
  isCustom: false,
  weeklyHours: "4-8",
  impact: "wait",
  readiness: { sameSteps: 4, clearRules: 3, informationEasyToFind: 3 },
} as const;

function request() {
  const workflows: WorkflowInput[] = [
    validWorkflow,
    { ...validWorkflow, id: "missed-calls", title: "Return missed calls" },
    { ...validWorkflow, id: "reviews", title: "Ask for reviews" },
  ];
  return {
    profile: { businessType: "home-services", hourlyCost: 65 },
    workflows,
    contact: { firstName: "  Jordan  ", workEmail: "  JORDAN@EXAMPLE.COM " },
    consent: { followupOptIn: false },
    submissionKey: "a38b04c6-778f-42bb-a8e5-90cd187869d2",
    companyWebsite: "",
    completionTimeMs: 60_000,
  };
}

describe("complete audit request validation", () => {
  it("normalizes contact fields and accepts an unchecked consent", () => {
    const result = completeAuditRequestSchema.parse(request());
    expect(result.contact).toEqual({ firstName: "Jordan", workEmail: "jordan@example.com" });
    expect(result.consent.followupOptIn).toBe(false);
  });

  it("requires 3 to 5 unique workflows", () => {
    expect(completeAuditRequestSchema.safeParse({ ...request(), workflows: [validWorkflow] }).success).toBe(false);
    const duplicate = request();
    duplicate.workflows[1] = { ...duplicate.workflows[1]!, id: "answer-leads" };
    expect(completeAuditRequestSchema.safeParse(duplicate).success).toBe(false);
  });

  it("rejects unknown categories, bot fields, fast submissions, and extra keys", () => {
    expect(
      completeAuditRequestSchema.safeParse({
        ...request(),
        workflows: [
          { ...validWorkflow, category: "unknown" },
          request().workflows[1],
          request().workflows[2],
        ],
      }).success,
    ).toBe(false);
    expect(completeAuditRequestSchema.safeParse({ ...request(), companyWebsite: "spam" }).success).toBe(false);
    expect(completeAuditRequestSchema.safeParse({ ...request(), completionTimeMs: 500 }).success).toBe(false);
    expect(completeAuditRequestSchema.safeParse({ ...request(), secret: "extra" }).success).toBe(false);
  });

  it("maps custom workflow text only to the neutral category", () => {
    const custom = request();
    custom.workflows[0] = {
      ...custom.workflows[0]!,
      id: "custom-one",
      title: "Prepare a very specific client handoff",
      category: "general",
      isCustom: true,
    };
    expect(completeAuditRequestSchema.safeParse(custom).success).toBe(true);
    custom.workflows[0] = { ...custom.workflows[0]!, category: "lead-response" };
    expect(completeAuditRequestSchema.safeParse(custom).success).toBe(false);
  });
});
