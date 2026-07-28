import { formatCurrency } from "../format";
import type { AuditResultV2, ScoredWorkflow } from "../types";

export interface RenderedEmail {
  readonly subject: string;
  readonly html: string;
  readonly text: string;
}

export interface AuditEmailContextV2 {
  readonly firstName: string;
  readonly result: AuditResultV2;
  readonly shareSlug: string;
  readonly unsubscribeToken: string;
  readonly baseUrl: string;
}

export interface AuditEmailStepV2 extends RenderedEmail {
  readonly kind: "report" | "day-1" | "day-3" | "day-7";
  readonly dayOffset: 0 | 1 | 3 | 7;
}

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function reportUrl(context: AuditEmailContextV2): string {
  return `${context.baseUrl}/ai-first-audit/r/${context.shareSlug}`;
}

export function unsubscribeUrl(context: AuditEmailContextV2): string {
  return `${context.baseUrl}/api/ai-first-audit/unsubscribe/${encodeURIComponent(context.unsubscribeToken)}`;
}

function htmlDocument(input: {
  heading: string;
  paragraphs: readonly string[];
  actionUrl: string;
  actionLabel: string;
  unsubscribe?: string;
}): string {
  const paragraphs = input.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
  const unsubscribe = input.unsubscribe
    ? `<p style="color:#6b6b76;font-size:12px"><a href="${input.unsubscribe}">Stop follow-up emails</a></p>`
    : "";
  return `<!doctype html><html><body style="background:#ffffff;color:#171717;font-family:Arial,sans-serif;line-height:1.55;margin:0;padding:24px"><main style="margin:0 auto;max-width:560px"><h1 style="font-size:24px;line-height:1.25">${input.heading}</h1>${paragraphs}<p><a href="${input.actionUrl}" style="background:#7058e3;color:#ffffff;display:inline-block;padding:12px 18px;text-decoration:none">${input.actionLabel}</a></p>${unsubscribe}</main></body></html>`;
}

function firstWorkflow(context: AuditEmailContextV2): ScoredWorkflow {
  const workflow = context.result.topThree[0];
  if (!workflow) throw new Error("A report email needs a top workflow");
  return workflow;
}

function reportEmail(context: AuditEmailContextV2): AuditEmailStepV2 {
  const workflow = firstWorkflow(context);
  const url = reportUrl(context);
  const heading = `Your workflow audit is ready, ${escapeHtml(context.firstName)}.`;
  const cost = formatCurrency(workflow.annualTimeCost);
  const text = `${context.firstName},\n\nYour workflow audit is ready.\n\nStart with ${workflow.input.title}. Its estimated yearly time cost is ${cost}. It has ${workflow.impactLabel.toLowerCase()} business impact and is ${workflow.readinessLabel.toLowerCase()} for an AI agent.\n\nView your full report: ${url}`;
  const html = htmlDocument({
    heading,
    paragraphs: [
      `Start with <strong>${escapeHtml(workflow.input.title)}</strong>.`,
      `Its estimated yearly time cost is <strong>${cost}</strong>. It has ${workflow.impactLabel.toLowerCase()} business impact and is ${workflow.readinessLabel.toLowerCase()} for an AI agent.`,
    ],
    actionUrl: url,
    actionLabel: "View your full report",
  });
  return { kind: "report", dayOffset: 0, subject: "Your workflow audit is ready", text, html };
}

function dayOneEmail(context: AuditEmailContextV2): AuditEmailStepV2 {
  const workflow = firstWorkflow(context);
  const url = reportUrl(context);
  const unsubscribe = unsubscribeUrl(context);
  const text = `${context.firstName},\n\nStart with ${workflow.input.title}.\n\nYour first move: ${workflow.guide.firstMove}\n\nKeep the scope small. Test the usual cases before adding exceptions.\n\nOpen your report: ${url}\nStop follow-ups: ${unsubscribe}`;
  const html = htmlDocument({
    heading: `Start with ${escapeHtml(workflow.input.title)}.`,
    paragraphs: [
      `<strong>Your first move:</strong> ${escapeHtml(workflow.guide.firstMove)}`,
      "Keep the scope small. Test the usual cases before adding exceptions.",
    ],
    actionUrl: url,
    actionLabel: "Open your report",
    unsubscribe,
  });
  return { kind: "day-1", dayOffset: 1, subject: `Start with ${workflow.input.title}`, text, html };
}

function dayThreeEmail(context: AuditEmailContextV2): AuditEmailStepV2 {
  const workflow = firstWorkflow(context);
  const blocker =
    workflow.readinessLabel === "Ready now"
      ? workflow.guide.guardrail
      : workflow.input.readiness.sameSteps < 3
        ? workflow.guide.readinessFixes.sameSteps
        : workflow.input.readiness.clearRules < 3
          ? workflow.guide.readinessFixes.clearRules
          : workflow.guide.readinessFixes.informationEasyToFind;
  const url = reportUrl(context);
  const unsubscribe = unsubscribeUrl(context);
  const text = `${context.firstName},\n\nFix this blocker first.\n\n${blocker}\n\nThis keeps unclear cases with a person while the common work gets easier.\n\nOpen your report: ${url}\nStop follow-ups: ${unsubscribe}`;
  const html = htmlDocument({
    heading: "Fix this blocker first.",
    paragraphs: [escapeHtml(blocker), "Keep unclear cases with a person while the common work gets easier."],
    actionUrl: url,
    actionLabel: "Open your report",
    unsubscribe,
  });
  return { kind: "day-3", dayOffset: 3, subject: "Fix this blocker first", text, html };
}

function daySevenEmail(context: AuditEmailContextV2): AuditEmailStepV2 {
  const workflow = firstWorkflow(context);
  const url = reportUrl(context);
  const unsubscribe = unsubscribeUrl(context);
  const text = `${context.firstName},\n\nWhat your agent should improve.\n\n${workflow.guide.agentJob}\n\nFor the next 30 days: ${workflow.guide.successMetric}\n\nOpen your report: ${url}\nStop follow-ups: ${unsubscribe}`;
  const html = htmlDocument({
    heading: "What your agent should improve.",
    paragraphs: [
      escapeHtml(workflow.guide.agentJob),
      `<strong>For the next 30 days:</strong> ${escapeHtml(workflow.guide.successMetric)}`,
    ],
    actionUrl: url,
    actionLabel: "Open your report",
    unsubscribe,
  });
  return { kind: "day-7", dayOffset: 7, subject: "What your agent should improve", text, html };
}

export function buildAuditEmailSequenceV2(
  context: AuditEmailContextV2,
): readonly AuditEmailStepV2[] {
  return [
    reportEmail(context),
    dayOneEmail(context),
    dayThreeEmail(context),
    daySevenEmail(context),
  ];
}
