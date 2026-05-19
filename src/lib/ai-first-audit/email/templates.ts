/**
 * Email templates for the AI-First Audit 7-day sequence.
 *
 * Each template is a pure function: given the lead, the computed result,
 * and the public share slug, return `{ subject, html, text }`. Inline
 * styles only — no external CSS, no <link> tags, no images that depend on
 * the receiving client.
 *
 * The whole point is that days 1–7 reference the user's actual top tasks
 * and savings number so the sequence doesn't feel canned.
 */

import type { AuditResult } from "../types";
import { formatCurrency, formatCurrencyCompact, formatHours } from "../format";

export interface EmailContext {
  readonly lead: {
    readonly firstName: string;
    readonly email: string;
  };
  readonly result: AuditResult;
  readonly shareSlug: string;
  readonly baseUrl: string;
}

export interface RenderedEmail {
  readonly subject: string;
  readonly html: string;
  readonly text: string;
}

// -------------------------------------------------------------------------
// Style primitives (inline only — email clients ignore <style> blocks)
// -------------------------------------------------------------------------

const PRIMARY = "#7058E3";
const TEXT = "#1a1a1a";
const MUTED = "#555";
const BG = "#ffffff";

const wrap = (inner: string): string => `<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#f5f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:${TEXT};">
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background:#f5f5f7;">
  <tr><td align="center" style="padding:32px 16px;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="background:${BG};border-radius:12px;padding:32px;max-width:600px;">
      ${inner}
      <tr><td style="padding-top:32px;border-top:1px solid #eee;color:${MUTED};font-size:12px;line-height:1.5;">
        You're getting this because you ran the AI-First Audit at prestyj.com. Unsubscribe by replying with "stop".
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;

const row = (html: string): string =>
  `<tr><td style="padding-bottom:16px;font-size:16px;line-height:1.6;color:${TEXT};">${html}</td></tr>`;

const button = (href: string, label: string): string =>
  `<a href="${href}" style="display:inline-block;background:${PRIMARY};color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:15px;">${label}</a>`;

function shareUrl(ctx: EmailContext): string {
  return `${ctx.baseUrl}/ai-first-audit/r/${ctx.shareSlug}`;
}

function bookUrl(ctx: EmailContext): string {
  return `${ctx.baseUrl}/book-demo?audit=${ctx.shareSlug}`;
}

function topTask(ctx: EmailContext, index: number) {
  return ctx.result.topThree[index] ?? ctx.result.topThree[0] ?? null;
}

// -------------------------------------------------------------------------
// Day 0 — Audit ready (transactional, PDF attached)
// -------------------------------------------------------------------------

export function day0AuditReady(ctx: EmailContext): RenderedEmail {
  const { firstName } = ctx.lead;
  const headline = formatCurrencyCompact(ctx.result.headlineDollars);
  const top1 = topTask(ctx, 0);

  const subject = `${firstName}, your AI-First Audit is ready (${headline}/yr)`;
  const text = `${firstName},

Your AI-First Audit is ready.

Headline: you're lighting roughly ${formatCurrency(ctx.result.headlineDollars)}/year on fire across your top 3 tasks.

Top task to automate first: ${top1?.input.title ?? "see your full audit"}
Recipe: ${top1?.recipe.displayName ?? ""}

View your full audit: ${shareUrl(ctx)}
PDF copy attached.

— The Prestyj team`;

  const html = wrap(`
    ${row(`<h1 style="margin:0 0 16px;font-size:24px;line-height:1.3;color:${TEXT};">Your audit is ready, ${firstName}.</h1>`)}
    ${row(`You're lighting roughly <strong style="color:${PRIMARY};">${formatCurrency(ctx.result.headlineDollars)}/year</strong> on fire across your top 3 tasks. Here's where to start.`)}
    ${
      top1
        ? row(
            `<strong>Top task to automate first:</strong> ${top1.input.title}<br/><span style="color:${MUTED};">Recipe: ${top1.recipe.displayName} — ${top1.recipe.stack}</span>`,
          )
        : ""
    }
    ${row(button(shareUrl(ctx), "View your full audit"))}
    ${row(`The PDF is attached for offline reading. We'll send you one focused note a day for the next week to help you actually ship one of these recipes.`)}
  `);

  return { subject, html, text };
}

// -------------------------------------------------------------------------
// Day 1 — The mistake (uses lowest-readiness task as the cautionary example)
// -------------------------------------------------------------------------

export function day1Mistake(ctx: EmailContext): RenderedEmail {
  // Lowest-readiness task = the wrong place to start.
  const lowest = [...ctx.result.tasks].sort((a, b) => a.readiness - b.readiness)[0];

  const subject = `Day 1: the most expensive AI mistake operators make`;
  const text = `${ctx.lead.firstName},

Most operators automate the wrong thing first. They pick the task that takes the most hours, ignore whether AI is actually ready to handle it, and end up with a broken system that costs more attention than the manual version.

Your audit flagged "${lowest?.input.title ?? "a low-readiness task"}" as low-readiness — that's the kind of task to leave alone for now.

Your top-leverage AND high-readiness task is what to ship this week: ${topTask(ctx, 0)?.input.title ?? ""}.

Full audit: ${shareUrl(ctx)}`;

  const html = wrap(`
    ${row(`<h2 style="margin:0 0 16px;font-size:20px;">The most expensive AI mistake</h2>`)}
    ${row(`Most operators automate the wrong task first. They look at hours-per-week, ignore whether AI is ready to actually do the job, and ship a system that breaks more than it helps.`)}
    ${
      lowest
        ? row(
            `Your audit flagged <strong>"${lowest.input.title}"</strong> as low-readiness — high hours, but AI isn't ready for it yet. Don't start there.`,
          )
        : ""
    }
    ${row(`Start with the highest-readiness, highest-leverage task on your list: <strong>${topTask(ctx, 0)?.input.title ?? ""}</strong>.`)}
    ${row(button(shareUrl(ctx), "Open your audit"))}
  `);

  return { subject, html, text };
}

// -------------------------------------------------------------------------
// Day 2 — The $/hr filter
// -------------------------------------------------------------------------

export function day2DollarFilter(ctx: EmailContext): RenderedEmail {
  const top1 = topTask(ctx, 0);
  const hourly = ctx.result.hourlyCost;

  const subject = `Day 2: the $/hr filter (math on your top task)`;
  const text = `${ctx.lead.firstName},

The Hormozi filter: any task that pays less than your loaded $/hr should be the first thing automated or delegated.

Your loaded $/hr: $${hourly.toFixed(0)}
Your top task ("${top1?.input.title ?? ""}") frees ~${formatHours(top1?.weeklyHoursSaved ?? 0)}/week.
Annualized: ~${formatCurrency(top1?.annualDollarsSaved ?? 0)} of your time back.

Full audit: ${shareUrl(ctx)}`;

  const html = wrap(`
    ${row(`<h2 style="margin:0 0 16px;font-size:20px;">The $/hr filter</h2>`)}
    ${row(`Any task that pays back less than your loaded hourly cost should be the <em>first</em> thing automated or delegated. Below it, you're net negative on every hour you spend.`)}
    ${row(`<table cellspacing="0" cellpadding="0" border="0" width="100%" style="background:#f9f9fb;border-radius:8px;padding:16px;font-size:15px;">
      <tr><td style="padding:8px 0;color:${MUTED};">Your loaded $/hr</td><td style="padding:8px 0;text-align:right;font-weight:600;">$${hourly.toFixed(0)}</td></tr>
      <tr><td style="padding:8px 0;color:${MUTED};">Top task hours/wk freed</td><td style="padding:8px 0;text-align:right;font-weight:600;">${formatHours(top1?.weeklyHoursSaved ?? 0)}</td></tr>
      <tr><td style="padding:8px 0;color:${MUTED};">Annualized value</td><td style="padding:8px 0;text-align:right;font-weight:600;color:${PRIMARY};">${formatCurrency(top1?.annualDollarsSaved ?? 0)}</td></tr>
    </table>`)}
    ${row(button(shareUrl(ctx), "See the math in your audit"))}
  `);

  return { subject, html, text };
}

// -------------------------------------------------------------------------
// Day 3 — Case study (picks by top-1 category)
// -------------------------------------------------------------------------

const CASE_TEMPLATES: Record<string, { lede: string; body: string }> = {
  "voice-agent": {
    lede: "A roofing contractor cut $4K/mo in missed calls in 11 days.",
    body: "They wired a Vapi agent to the after-hours line, fed it their FAQ, and pointed all transfers to the owner's cell. Within two weeks 67% of after-hours calls converted to appointment requests — a 5× improvement on their old voicemail flow.",
  },
  "inbox-triage": {
    lede: "An agency reclaimed 14 hours/week from the shared inbox in 3 weeks.",
    body: "Claude drafted replies into a 'Pending' label. The ops lead approved a batch every morning. By week three, 80% of the drafts went out untouched and the team stopped checking the inbox between approval blocks.",
  },
  "outbound-personalization": {
    lede: "A B2B SaaS 4×'d cold reply rates in 30 days.",
    body: "Each lead was enriched with a single specific data point (recent funding, hiring posts, podcast appearance). One paragraph of personalization, rest templated. Reply rate went from 1.2% to 4.8% on identical lists.",
  },
  "research-workflow": {
    lede: "A consulting firm cut discovery prep from 25 minutes to 90 seconds.",
    body: "One Claude prompt generates a briefing per call: triggers, likely pain, two talking points, one opener. Consultant walks into the call with context they used to spend half their morning gathering.",
  },
  "content-ops": {
    lede: "A coaching brand published 4× more without hiring.",
    body: "Claude trained on their best past pieces turns a 5-bullet outline into a first draft in 3 minutes. The founder still does the final edit — voice and specifics — but the blank-page tax is gone.",
  },
  reporting: {
    lede: "An e-commerce ops lead got Friday afternoons back.",
    body: "n8n pulls the 6 KPIs every Friday at 2pm, Claude writes the weekly narrative in the team's voice, ops lead spends 10 minutes editing instead of 2 hours assembling.",
  },
};

const DEFAULT_CASE = {
  lede: "A consulting firm freed 20 hours/week in their first automation sprint.",
  body: "They picked one task, used a single AI workflow to handle it end-to-end, and ran it in parallel for a week before cutting over. Most teams try to automate five things at once and ship none.",
};

export function day3CaseStudy(ctx: EmailContext): RenderedEmail {
  const top1 = topTask(ctx, 0);
  const tmpl = (top1 && CASE_TEMPLATES[top1.recipe.category]) ?? DEFAULT_CASE;

  const subject = `Day 3: someone who actually shipped this`;
  const text = `${ctx.lead.firstName},

${tmpl.lede}

${tmpl.body}

Your top task lines up with the same category. Full audit: ${shareUrl(ctx)}`;

  const html = wrap(`
    ${row(`<h2 style="margin:0 0 16px;font-size:20px;">${tmpl.lede}</h2>`)}
    ${row(tmpl.body)}
    ${row(`Your top task — <strong>${top1?.input.title ?? ""}</strong> — falls in the same category. The recipe is in your audit.`)}
    ${row(button(shareUrl(ctx), "Open your audit"))}
  `);

  return { subject, html, text };
}

// -------------------------------------------------------------------------
// Day 4 — Tool stack
// -------------------------------------------------------------------------

export function day4ToolStack(ctx: EmailContext): RenderedEmail {
  const top = ctx.result.topThree;

  const subject = `Day 4: your exact tool stack for the top 3`;
  const text = `${ctx.lead.firstName},

Here's the stack for each of your top 3 — no hunting required.

${top
  .map(
    (t, i) => `${i + 1}. ${t.input.title}\n   ${t.recipe.displayName}\n   Stack: ${t.recipe.stack}`,
  )
  .join("\n\n")}

Full audit: ${shareUrl(ctx)}`;

  const html = wrap(`
    ${row(`<h2 style="margin:0 0 16px;font-size:20px;">Your exact tool stack</h2>`)}
    ${row(`No hunting required. Here's the stack mapped to each of your top 3:`)}
    ${top
      .map(
        (
          t,
          i,
        ) => `<tr><td style="padding:12px 16px;background:#f9f9fb;border-radius:8px;margin-bottom:8px;display:block;">
          <div style="font-weight:600;font-size:15px;margin-bottom:4px;">${i + 1}. ${t.input.title}</div>
          <div style="color:${MUTED};font-size:14px;line-height:1.5;">${t.recipe.displayName}<br/><strong style="color:${TEXT};">${t.recipe.stack}</strong></div>
        </td></tr>`,
      )
      .join('<tr><td style="height:8px;"></td></tr>')}
    <tr><td style="height:16px;"></td></tr>
    ${row(button(shareUrl(ctx), "Open the recipes"))}
  `);

  return { subject, html, text };
}

// -------------------------------------------------------------------------
// Day 5 — The "break by week 3" rule
// -------------------------------------------------------------------------

export function day5BreakWeek3(ctx: EmailContext): RenderedEmail {
  const top1 = topTask(ctx, 0);

  const subject = `Day 5: ship in week 1, break it by week 3`;
  const text = `${ctx.lead.firstName},

The rule: if your week-1 automation isn't being stress-tested by week 3, you didn't push it hard enough. Comfortable automations are under-leveraged automations.

For your top task ("${top1?.input.title ?? ""}"), the failure mode to push toward:
${top1?.recipe.watchOut ?? "Stress-test it on the messiest 10% of your real workload."}

Full audit: ${shareUrl(ctx)}`;

  const html = wrap(`
    ${row(`<h2 style="margin:0 0 16px;font-size:20px;">Ship in week 1. Break it by week 3.</h2>`)}
    ${row(`If your week-1 automation isn't being stress-tested by week 3, you didn't push it hard enough. Comfortable automations stay small.`)}
    ${
      top1
        ? row(
            `For <strong>"${top1.input.title}"</strong>, push toward the failure mode: <em>${top1.recipe.watchOut}</em>`,
          )
        : ""
    }
    ${row(button(shareUrl(ctx), "Re-read your audit"))}
  `);

  return { subject, html, text };
}

// -------------------------------------------------------------------------
// Day 6 — Org chart
// -------------------------------------------------------------------------

const BUSINESS_LABEL: Record<string, string> = {
  "real-estate": "real estate team",
  "home-services": "home services business",
  agency: "agency",
  coaching: "coaching practice",
  ecommerce: "e-commerce brand",
  saas: "SaaS company",
  "professional-services": "professional services firm",
  other: "business",
};

const REVENUE_LABEL: Record<string, string> = {
  "under-500k": "under-$500K",
  "500k-1m": "$500K–$1M",
  "1m-3m": "$1M–$3M",
  "3m-10m": "$3M–$10M",
  "over-10m": "$10M+",
};

export function day6OrgChart(ctx: EmailContext): RenderedEmail {
  const business = BUSINESS_LABEL[ctx.result.context.businessType] ?? "business";
  const revenue = REVENUE_LABEL[ctx.result.context.revenueBand] ?? "your revenue band";

  const subject = `Day 6: the AI-first org chart at ${revenue}`;
  const text = `${ctx.lead.firstName},

Most ${revenue} ${business}s have the same org chart problem: humans doing AI-eligible work, and AI doing nothing.

The shift: every recurring task gets evaluated by the rubric you ran (leverage × readiness), not by who happens to be doing it today. Anything top-right of the grid is owned by a system; anything bottom-right is on the watch list; everything else stays human.

Full audit: ${shareUrl(ctx)}`;

  const html = wrap(`
    ${row(`<h2 style="margin:0 0 16px;font-size:20px;">The AI-first org chart at ${revenue}</h2>`)}
    ${row(`Most ${revenue} ${business}s have the same problem: humans doing AI-eligible work, and AI doing nothing.`)}
    ${row(`The shift: every recurring task gets evaluated by the rubric you just ran (leverage × readiness), not by who happens to own it today. Anything top-right of the grid is owned by a system. Anything bottom-right is on the watch list. Everything else stays human.`)}
    ${row(button(shareUrl(ctx), "See your full grid"))}
  `);

  return { subject, html, text };
}

// -------------------------------------------------------------------------
// Day 7 — Offer
// -------------------------------------------------------------------------

export function day7Offer(ctx: EmailContext): RenderedEmail {
  const subject = `Day 7: want us to build one of these for you?`;
  const text = `${ctx.lead.firstName},

You ran the audit. You know which task to automate. The 7-day plan is sitting in your inbox.

If you'd rather hand the build to a team that does this every week, we run a free 30-minute audit-review call. We'll look at your top 3, tell you which one is realistically a week's work and which one is a quarter's work, and you'll leave with a decision either way — no pitch.

Book here: ${bookUrl(ctx)}

Or just hit reply if you have a question.

— The Prestyj team`;

  const html = wrap(`
    ${row(`<h2 style="margin:0 0 16px;font-size:20px;">Want us to build one for you?</h2>`)}
    ${row(`You ran the audit. You know which task to automate. The 7-day plan is in your inbox.`)}
    ${row(`If you'd rather hand the build to a team that does this every week, we run a free 30-minute audit-review call. We'll look at your top 3, tell you which one is realistically a week's work versus a quarter's work, and you'll leave with a decision either way — no pitch.`)}
    ${row(button(bookUrl(ctx), "Book your 30-min review"))}
    ${row(`Or just hit reply if you have a question.`)}
  `);

  return { subject, html, text };
}

// -------------------------------------------------------------------------
// Ordered sequence for the scheduler
// -------------------------------------------------------------------------

export const SEQUENCE: readonly {
  readonly event: string;
  readonly dayOffset: number;
  readonly render: (ctx: EmailContext) => RenderedEmail;
}[] = [
  { event: "day0", dayOffset: 0, render: day0AuditReady },
  { event: "day1", dayOffset: 1, render: day1Mistake },
  { event: "day2", dayOffset: 2, render: day2DollarFilter },
  { event: "day3", dayOffset: 3, render: day3CaseStudy },
  { event: "day4", dayOffset: 4, render: day4ToolStack },
  { event: "day5", dayOffset: 5, render: day5BreakWeek3 },
  { event: "day6", dayOffset: 6, render: day6OrgChart },
  { event: "day7", dayOffset: 7, render: day7Offer },
];
