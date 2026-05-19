/**
 * Tool recipes — one canonical recommendation per tool category.
 *
 * The wizard never asks the user to pick a tool. We map task category +
 * scores → recipe deterministically. Each recipe is a 1-paragraph starter
 * that an operator can hand to an implementer the next morning.
 */

import type { AuditTaskInput, ToolCategory, ToolRecipe } from "./types";

export const TOOL_RECIPES: readonly ToolRecipe[] = [
  {
    id: "inbox-triage",
    category: "inbox-triage",
    displayName: "AI inbox triage",
    stack: "Claude project + Gmail filters + Zapier",
    starterRecipe:
      "Forward the shared inbox into a Claude project trained on your last 100 'good' replies. Have it draft a reply in a Gmail label called 'AI Draft' — never auto-send. One human spends 20 minutes a day approving the queue. Within two weeks the drafts will match your tone and you can promote the highest-confidence categories (FAQs, shipping status, scheduling) to auto-send.",
    watchOut:
      "Never auto-send replies to angry customers or anything containing pricing/contract language until a human reviews 50+ examples and signs off.",
  },
  {
    id: "voice-agent",
    category: "voice-agent",
    displayName: "AI voice agent for inbound calls",
    stack: "Vapi or Retell + your CRM webhook",
    starterRecipe:
      "Spin up a Vapi or Retell agent with your top 10 FAQs, a 3-question qualification flow, and a webhook to your CRM. Forward only missed / after-hours calls to it for the first month. Listen to every recording for week one — you'll catch tone, edge cases, and the two scripts that need rewriting. Once miss-handling rate is under 5%, point the main line to it.",
    watchOut:
      "Keep a human-handoff phrase ('let me transfer you') wired up to a real cell phone. Voice agents fail badly on accents, background noise, and emotional callers — the handoff matters more than the agent quality.",
  },
  {
    id: "research-workflow",
    category: "research-workflow",
    displayName: "AI research workflow",
    stack: "Claude + Perplexity + a shared prompt library",
    starterRecipe:
      "Build a single Claude project with a saved prompt: 'Given this name, company, and LinkedIn URL, return a 1-paragraph briefing including: recent triggers, likely pain, two specific talking points, and one question to open with.' Pair with Perplexity for citation-grade recent news. The salesperson gets a 90-second briefing instead of doing 25 minutes of LinkedIn surfing per call.",
    watchOut:
      "LLMs hallucinate company details. Always require a source URL in the output and instruct the prompt to say 'unknown' rather than guess.",
  },
  {
    id: "outbound-personalization",
    category: "outbound-personalization",
    displayName: "Personalized outbound at scale",
    stack: "Clay or n8n + Claude + your sending tool",
    starterRecipe:
      "In Clay (or n8n), enrich your target list with one specific data point per lead — recent funding, hiring posts, a public blog post, a podcast appearance. Feed that single fact into a Claude prompt that writes a 3-line opener tying the fact to your offer. Cap personalization to one paragraph; the rest of the email stays templated. You'll get 3–5× reply lift without the hours.",
    watchOut:
      "If the 'specific fact' source is empty or stale, skip the lead — don't let the model paper over thin context with generic flattery. That's how outbound becomes spam.",
  },
  {
    id: "content-ops",
    category: "content-ops",
    displayName: "AI-assisted content drafting",
    stack: "Claude project trained on your past work",
    starterRecipe:
      "Upload your 10 best-performing past pieces (blog posts, ad scripts, captions — whatever applies) into a Claude project. Add a one-page brand voice doc: vocabulary, banned phrases, sentence-length preference, POV. Now your first-draft loop is: 5-bullet outline in, first draft out in 3 minutes. The human still does the final 30% — voice, specifics, the close — which is where the value was anyway.",
    watchOut:
      "Generic AI prose ranks badly and reads worse. The model is a first-drafter, not a publisher. Build in a 'kill the AI tells' editing pass before anything ships.",
  },
  {
    id: "ops-automation",
    category: "ops-automation",
    displayName: "Operations workflow automation",
    stack: "n8n or Zapier + your existing tools",
    starterRecipe:
      "Pick the single recurring sequence that touches the most tools (e.g. 'job completes → invoice → review request → followup task'). Map it in n8n with branches for the 3 most common variations. Run it in parallel to the manual process for a week and reconcile. Once it matches, retire the human checklist. Don't try to automate 5 workflows at once — one to 95% beats five to 60%.",
    watchOut:
      "Automation amplifies bad processes. If the underlying SOP isn't documented, fix the SOP first; otherwise you'll just produce wrong outputs faster.",
  },
  {
    id: "data-entry",
    category: "data-entry",
    displayName: "Document → structured data",
    stack: "Claude API or Anthropic file processing",
    starterRecipe:
      "Drop incoming PDFs / forms / emails into a watched folder or inbox. A Claude call extracts the 8–12 fields you actually need into JSON, which writes straight to your CRM or sheet. Spot-check the first 100. After that you can drop the human review to a 10% audit.",
    watchOut:
      "Anything regulated (medical, legal, financial) needs a human in the loop on every extraction, not a 10% sample. Audit accuracy by field, not by document — one field can be 99% reliable and another 70%.",
  },
  {
    id: "reporting",
    category: "reporting",
    displayName: "Automated weekly reporting",
    stack: "n8n + your data warehouse + Claude for the narrative",
    starterRecipe:
      "Schedule a weekly job that pulls your 6 core metrics from source-of-truth tools (ad platforms, CRM, billing). Feed the numbers + last week's narrative into Claude with the prompt 'write the weekly update in our usual voice, flag the 2 biggest changes, propose 1 question for the team.' Human spends 10 minutes editing instead of 2 hours assembling.",
    watchOut:
      "AI narrative is only as good as the numbers. Validate the data pipeline first — wrong inputs with confident prose is the worst possible report.",
  },
  {
    id: "scheduling",
    category: "scheduling",
    displayName: "AI scheduling assistant",
    stack: "Cal.com or SavvyCal + an email triage layer",
    starterRecipe:
      "Drop a Cal.com link in your standard email signature with two meeting types: 'quick chat' (15 min) and 'working session' (45 min). For inbound requests that come in as prose, use an inbox-triage layer (see the inbox recipe) to recognize scheduling intent and reply with the link. Stop emailing back and forth about times.",
    watchOut:
      "VIPs and warm intros deserve a personal reply, not a link drop. Build a small whitelist your AI knows to escalate instead of auto-replying.",
  },
  {
    id: "hiring-screen",
    category: "hiring-screen",
    displayName: "AI applicant screening",
    stack: "A scoring prompt + your ATS / form tool",
    starterRecipe:
      "Define your 5 must-have criteria for the role in plain language. On every application, a Claude call returns a 1–5 score per criterion plus a 1-paragraph summary. You only read the top quartile. Calibrate by hand-scoring 20 historical applications first to make sure the model agrees with you.",
    watchOut:
      "Bias and EEOC compliance — never let the model see protected attributes (name, photo, address, school) and document your prompt + criteria so you can defend the process.",
  },
  {
    id: "knowledge-base",
    category: "knowledge-base",
    displayName: "Internal AI knowledge base",
    stack: "Claude project + your SOP docs in a single folder",
    starterRecipe:
      "Dump your SOPs, FAQs, and Loom transcripts into a Claude project. Train the team to ask 'the AI' before pinging the operator. Within a month you'll see which questions repeat — those are the gaps in your written SOPs. Fix them, re-upload, repeat. Side benefit: onboarding new hires gets 3× faster.",
    watchOut:
      "Stale docs in → wrong answers out, with full confidence. Put a 90-day review date on every doc, and tag anything that changes faster (pricing, comp, policies) so the model can warn it may be outdated.",
  },
  {
    id: "finance-ops",
    category: "finance-ops",
    displayName: "AR / invoice automation",
    stack: "Your billing tool + n8n + an email writer",
    starterRecipe:
      "Pull the open-invoice list every Monday. n8n fires three escalating reminder emails (day 1, day 7, day 14 past due) — each one drafted by Claude in your voice, referencing the specific invoice and project. Anything past 30 days hits the operator's queue for a personal call. Cash flow goes up without anyone feeling like a collections agent.",
    watchOut:
      "Don't auto-send legal-tone language ('this account will be sent to collections') without human review. Tone-deaf collection emails kill renewals.",
  },
  {
    id: "support-deflection",
    category: "support-deflection",
    displayName: "AI support deflection",
    stack: "Intercom Fin / Zendesk AI agent + your help docs",
    starterRecipe:
      "Point your help center at an AI support agent (Intercom Fin, Zendesk AI, or a Claude-backed widget). It handles the top 30% of tickets — shipping status, password resets, refund eligibility — with a confidence threshold. Below the threshold it hands off to a human. Measure deflection rate weekly and feed the misses back into the help docs.",
    watchOut:
      "Bad deflection is worse than no deflection. If the AI confidently gives a wrong refund policy, you eat the cost. Set the confidence threshold high and lower it slowly as you trust the data.",
  },
  {
    id: "qa-review",
    category: "qa-review",
    displayName: "Creative / output QA pass",
    stack: "Claude + a checklist you already use manually",
    starterRecipe:
      "Take your existing creative review checklist (brand colors, legal disclaimers, CTA present, file naming, etc.) and turn it into a Claude prompt that returns a pass/fail per item. Run every deliverable through it before the senior reviewer sees it. The senior reviewer's job becomes 'judgment calls only' instead of 'checklist + judgment calls.'",
    watchOut:
      "AI is bad at subjective taste — color harmony, photo composition, brand 'feel.' Use it for the mechanical 80% and protect the senior reviewer's time for the qualitative 20%.",
  },
  {
    id: "lead-enrichment",
    category: "lead-enrichment",
    displayName: "Auto lead enrichment",
    stack: "Clay or Apollo + a CRM webhook",
    starterRecipe:
      "On every new lead, fire a Clay or Apollo enrichment that returns title, company size, industry, tech stack, and a 1-line 'why this lead matters' note. Pipe it back to the CRM so the salesperson opens the lead with context already filled in. You stop losing leads to 'I'll get to it tomorrow' because the friction of opening one is now zero.",
    watchOut:
      "Data quality varies wildly by vendor and segment. Sample 50 enrichments before trusting the output and build a manual-override field for when the data is obviously wrong.",
  },
] as const satisfies readonly ToolRecipe[];

const RECIPES_BY_CATEGORY: Record<ToolCategory, ToolRecipe> = TOOL_RECIPES.reduce(
  (acc, recipe) => {
    acc[recipe.category] = recipe;
    return acc;
  },
  {} as Record<ToolCategory, ToolRecipe>,
);

/**
 * Deterministic recipe selection. Given a scored task, return the canonical
 * recipe for its category. Throws if a category has no mapping — caught by
 * the tool-library test to prevent orphan categories at build time.
 */
export function pickRecipe(task: Pick<AuditTaskInput, "category">): ToolRecipe {
  const recipe = RECIPES_BY_CATEGORY[task.category];
  if (!recipe) {
    throw new Error(`No tool recipe registered for category: ${task.category}`);
  }
  return recipe;
}
