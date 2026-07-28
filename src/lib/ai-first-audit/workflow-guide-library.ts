import type { WorkflowCategory, WorkflowGuide } from "./types";

const SHARED_READINESS_FIXES = {
  sameSteps: "Write down the usual steps and the three most common exceptions.",
  clearRules: "Set clear rules for what the agent can handle and when a person takes over.",
  informationEasyToFind: "Put the current answers, scripts, and records in one reliable place.",
} as const;

function guide(
  category: WorkflowCategory,
  details: Omit<WorkflowGuide, "category" | "readinessFixes"> & {
    readinessFixes?: WorkflowGuide["readinessFixes"];
  },
): WorkflowGuide {
  return {
    category,
    ...details,
    readinessFixes: details.readinessFixes ?? SHARED_READINESS_FIXES,
  };
}

export const WORKFLOW_GUIDES: readonly WorkflowGuide[] = [
  guide("lead-response", {
    problem: "New leads lose interest when the first useful reply takes too long.",
    agentRole: "Lead response agent",
    agentJob: "Reply to new leads, ask the first questions, and route each lead to the right person.",
    firstMove: "Agree on the first reply and the questions every new lead should receive.",
    guardrail: "A person steps in for pricing promises, complaints, or unusual requests.",
    successMetric: "Track median first reply time and booked conversations for 30 days.",
  }),
  guide("missed-calls", {
    problem: "Missed and after-hours calls often become missed jobs or lost conversations.",
    agentRole: "Call response agent",
    agentJob: "Answer missed calls, capture the reason, and book or route the next step.",
    firstMove: "List the five most common call reasons and the right next step for each.",
    guardrail: "A person takes over for emergencies, upset callers, or anything outside the approved call reasons.",
    successMetric: "Track answered missed calls and booked appointments for 30 days.",
  }),
  guide("estimate-followup", {
    problem: "Open estimates go cold when follow-up depends on a busy team member remembering.",
    agentRole: "Estimate follow-up agent",
    agentJob: "Check in on open estimates, answer approved questions, and flag interested buyers.",
    firstMove: "Choose the timing and message for the first three estimate check-ins.",
    guardrail: "A person handles discounts, scope changes, and objections outside the approved answers.",
    successMetric: "Track estimate replies and booked work for 30 days.",
  }),
  guide("appointment-booking", {
    problem: "Back-and-forth scheduling delays the next useful conversation.",
    agentRole: "Booking agent",
    agentJob: "Offer valid times, collect the needed details, and confirm appointments.",
    firstMove: "Define appointment types, available hours, and the details needed before booking.",
    guardrail: "A person handles urgent, complex, or special-access requests.",
    successMetric: "Track time to book and completed appointments for 30 days.",
  }),
  guide("lead-reactivation", {
    problem: "Older leads sit untouched even when some are ready to talk again.",
    agentRole: "Lead reactivation agent",
    agentJob: "Contact older leads with a relevant check-in and surface people who want to talk.",
    firstMove: "Choose one clean lead group and one honest reason to reconnect.",
    guardrail: "A person handles opt-outs, complaints, and leads with sensitive history.",
    successMetric: "Track positive replies and rebooked conversations for 30 days.",
  }),
  guide("sales-followup", {
    problem: "Good sales conversations lose momentum when the next message is late or vague.",
    agentRole: "Sales follow-up agent",
    agentJob: "Send approved next-step messages and remind the owner when a personal reply is needed.",
    firstMove: "Define the next message for the four most common sales outcomes.",
    guardrail: "A person handles negotiation, contract terms, and custom commitments.",
    successMetric: "Track reply rate and days from conversation to decision for 30 days.",
  }),
  guide("crm-updates", {
    problem: "Missing records hide the true state of leads and make follow-up unreliable.",
    agentRole: "CRM update agent",
    agentJob: "Capture approved notes, stages, owners, and next steps after each conversation.",
    firstMove: "Choose the required fields and one source of truth for each field.",
    guardrail: "A person reviews uncertain matches and any change that could reassign ownership.",
    successMetric: "Track complete records and overdue next steps for 30 days.",
  }),
  guide("review-requests", {
    problem: "Happy customers rarely leave a review when the request comes late or not at all.",
    agentRole: "Review request agent",
    agentJob: "Ask eligible customers for a review at the right time and stop after a clear response.",
    firstMove: "Define who is eligible and the event that should trigger the request.",
    guardrail: "A person handles unhappy customers and resolves the issue before any review request.",
    successMetric: "Track requests sent and completed reviews for 30 days.",
  }),
  guide("ad-production", {
    problem: "New ad ideas stall when every video starts from a blank page.",
    agentRole: "Ad production agent",
    agentJob: "Turn approved offers and angles into organized batches of draft ad videos.",
    firstMove: "Choose one offer, three angles, and the claims that are approved for use.",
    guardrail: "A person approves every claim, final cut, and brand-sensitive choice before publishing.",
    successMetric: "Track approved ads produced and cost per tested angle for 30 days.",
  }),
  guide("ad-reporting", {
    problem: "Ad decisions slow down when results live in separate places or lack a clear comparison.",
    agentRole: "Ad results agent",
    agentJob: "Summarize approved ad measures and flag meaningful changes for review.",
    firstMove: "Choose the measures, date range, and thresholds that should trigger attention.",
    guardrail: "A person confirms source data and makes budget decisions.",
    successMetric: "Track reporting time and the age of unreviewed ad results for 30 days.",
  }),
  guide("listing-leads", {
    problem: "Listing inquiries cool quickly when the first reply does not answer the immediate need.",
    agentRole: "Listing lead agent",
    agentJob: "Reply to listing inquiries, collect needs, and route ready buyers to an agent.",
    firstMove: "Define the listing facts the agent may share and the questions it should ask.",
    guardrail: "A licensed person handles advice, offers, fair-housing-sensitive topics, and unusual questions.",
    successMetric: "Track first reply time and qualified buyer conversations for 30 days.",
  }),
  guide("open-house-followup", {
    problem: "Open house interest fades when every visitor gets the same late follow-up.",
    agentRole: "Open house follow-up agent",
    agentJob: "Send a timely check-in, collect intent, and flag visitors ready for a personal call.",
    firstMove: "Choose the visitor questions and the next step for each level of interest.",
    guardrail: "A licensed person handles advice, offers, and fair-housing-sensitive questions.",
    successMetric: "Track visitor replies and follow-up appointments for 30 days.",
  }),
  guide("general", {
    problem: "This work becomes costly when ownership, steps, and exceptions are unclear.",
    agentRole: "Workflow support agent",
    agentJob: "Handle the repeatable steps and pass unclear cases to the right person.",
    firstMove: "Write down the normal start, finish, owner, and three most common exceptions.",
    guardrail: "A person handles any case outside the written rules.",
    successMetric: "Track team time and cases that need a person for 30 days.",
  }),
] as const;

const GUIDES_BY_CATEGORY = new Map(
  WORKFLOW_GUIDES.map((workflowGuide) => [workflowGuide.category, workflowGuide]),
);

export function getWorkflowGuide(category: WorkflowCategory): WorkflowGuide {
  return GUIDES_BY_CATEGORY.get(category) ?? GUIDES_BY_CATEGORY.get("general")!;
}
