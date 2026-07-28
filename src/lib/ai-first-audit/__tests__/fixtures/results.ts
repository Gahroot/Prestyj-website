import type { AuditResultV1, AuditResultV2, ScoredWorkflow } from "../../types";
import { getWorkflowGuide } from "../../workflow-guide-library";

export const RESULT_V1_FIXTURE: AuditResultV1 = {
  version: 1,
  context: {
    firstName: "Jordan",
    lastName: null,
    email: "jordan@example.com",
    phone: null,
    businessType: "home-services",
    revenueBand: "1m-3m",
    role: "owner",
  },
  hourlyCost: 65,
  tasks: [],
  topThree: [],
  totalWeeklyHoursSaved: 0,
  totalAnnualDollarsSaved: 0,
  headlineDollars: 0,
  sevenDayPlan: [],
  computedAt: "2026-07-27T00:00:00.000Z",
};

function scoredWorkflow(id: string, title: string, annualTimeCost: number): ScoredWorkflow {
  return {
    input: {
      id,
      title,
      category: "general",
      isCustom: false,
      weeklyHours: "4-8",
      impact: "wait",
      readiness: { sameSteps: 4, clearRules: 4, informationEasyToFind: 4 },
    },
    weeklyHoursMidpoint: 6,
    annualTimeCost,
    impactScore: 67,
    impactLabel: "High",
    readinessScore: 100,
    readinessLabel: "Ready now",
    normalizedTimeCost: 100,
    priorityScore: 86.8,
    priorityAction: "Fix first",
    guide: getWorkflowGuide("general"),
    whyItRanks: "It combines high business impact with work an AI agent can handle now.",
  };
}

const workflows = [
  scoredWorkflow("a", "Answer new leads", 20_280),
  scoredWorkflow("b", "Follow up estimates", 10_140),
  scoredWorkflow("c", "Ask for reviews", 6_760),
];

export const RESULT_V2_FIXTURE: AuditResultV2 = {
  version: 2,
  profile: { businessType: "home-services", hourlyCost: 65 },
  workflows,
  topThree: workflows,
  totalWeeklyHours: 18,
  totalAnnualTimeCost: 37_180,
  firstFixPlan: [
    { title: "Set the first move", body: "Write down the first reply and handoff." },
  ],
  computedAt: "2026-07-27T00:00:00.000Z",
};
