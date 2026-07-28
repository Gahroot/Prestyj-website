import type { FirstFixPlanItem, ScoredWorkflow } from "./types";

export function buildFirstFixPlan(topWorkflow: ScoredWorkflow): readonly FirstFixPlanItem[] {
  const plan: FirstFixPlanItem[] = [
    {
      title: "Set the first move",
      body: topWorkflow.guide.firstMove,
    },
  ];

  if (topWorkflow.input.readiness.sameSteps < 3) {
    plan.push({
      title: "Make the steps clear",
      body: topWorkflow.guide.readinessFixes.sameSteps,
    });
  }
  if (topWorkflow.input.readiness.clearRules < 3) {
    plan.push({
      title: "Set the handoff rules",
      body: topWorkflow.guide.readinessFixes.clearRules,
    });
  }
  if (topWorkflow.input.readiness.informationEasyToFind < 3) {
    plan.push({
      title: "Gather the right information",
      body: topWorkflow.guide.readinessFixes.informationEasyToFind,
    });
  }

  plan.push(
    {
      title: "Protect the handoff",
      body: topWorkflow.guide.guardrail,
    },
    {
      title: "Measure the first 30 days",
      body: topWorkflow.guide.successMetric,
    },
  );

  return plan;
}
