/**
 * Deterministic 7-day deployment plan generator.
 *
 * Inputs: the user's top-3 scored tasks + their business context.
 * Output: an array of 7 `DayPlan` entries — fixed cadence, but the body
 * text references the user's actual top tasks and recipes so it doesn't
 * feel generic.
 */

import type { BusinessContext, DayPlan, ScoredTask } from "./types";

interface RawDay {
  readonly title: string;
  /** Index into topThree (0..2) or null for org-wide days. */
  readonly focusTaskIndex: number | null;
  readonly render: (top: readonly ScoredTask[], ctx: BusinessContext) => string;
}

function safeTop(top: readonly ScoredTask[], index: number): ScoredTask | null {
  return top[index] ?? null;
}

function shortTitle(task: ScoredTask): string {
  return task.input.title.replace(/\.$/, "");
}

const DAY_TEMPLATES: readonly RawDay[] = [
  {
    title: "Day 1 — Pick your one",
    focusTaskIndex: 0,
    render: (top) => {
      const t = safeTop(top, 0);
      if (!t) return "Pick the single highest-leverage task and commit to it for the week.";
      return `Your top task is "${shortTitle(t)}". Stop trying to automate three things at once — block 60 minutes today, write the SOP for this one task as it runs manually right now, and screenshot every screen and tool involved.`;
    },
  },
  {
    title: "Day 2 — Stand up the tool",
    focusTaskIndex: 0,
    render: (top) => {
      const t = safeTop(top, 0);
      if (!t) return "Pick a single tool and create an account.";
      return `Spin up the stack for "${shortTitle(t)}": ${t.recipe.stack}. Don't build anything yet — get accounts created, billing set up, and confirm the integrations connect to the systems you already use.`;
    },
  },
  {
    title: "Day 3 — Build the v1",
    focusTaskIndex: 0,
    render: (top) => {
      const t = safeTop(top, 0);
      if (!t) return "Build the smallest possible version that produces useful output.";
      return `Build the smallest end-to-end version of the recipe: ${t.recipe.starterRecipe}`;
    },
  },
  {
    title: "Day 4 — Shadow run",
    focusTaskIndex: 0,
    render: (top) => {
      const t = safeTop(top, 0);
      if (!t) return "Run the automation in parallel with your human process and compare outputs.";
      return `Run the new system in parallel with your manual process — same inputs, both outputs side by side. Spot-check 10 examples. Watch for the failure mode: ${t.recipe.watchOut}`;
    },
  },
  {
    title: "Day 5 — Cut over",
    focusTaskIndex: 0,
    render: (top) => {
      const t = safeTop(top, 0);
      if (!t) return "Turn off the manual workflow and let the new system own it.";
      return `If shadow run was at >90% acceptable on day 4, cut over today. Retire the manual checklist for "${shortTitle(t)}", set a Friday calendar block to review the week's outputs, and tell the team that any miss goes into a single shared doc — don't fix issues in DMs.`;
    },
  },
  {
    title: "Day 6 — Queue up #2",
    focusTaskIndex: 1,
    render: (top) => {
      const t = safeTop(top, 1);
      if (!t) return "Identify the next task to automate now that you've shipped one.";
      return `Your second priority is "${shortTitle(t)}" — recipe: ${t.recipe.displayName} (${t.recipe.stack}). Don't start building yet. Just write the SOP and identify who on the team will own it. Resist the urge to start in parallel; you finish faster sequentially.`;
    },
  },
  {
    title: "Day 7 — Org chart shift",
    focusTaskIndex: null,
    render: (top, ctx) => {
      const t3 = safeTop(top, 2);
      const businessNote =
        ctx.businessType === "agency" || ctx.businessType === "saas"
          ? "your account/CS team"
          : "the person who was doing this manually";
      const third = t3 ? ` Your third task waiting in the wings is "${shortTitle(t3)}".` : "";
      return `One week in — you've shipped one automation, scoped a second. Today, sit with ${businessNote} and ask: what are they doing now with the time the automation gave back? If the answer is "the same work, just less of it," you bought yourself nothing. If the answer is "higher-leverage work I never had time for," you bought yourself the next quarter.${third}`;
    },
  },
];

export function buildSevenDayPlan(
  topTasks: readonly ScoredTask[],
  context: BusinessContext,
): readonly DayPlan[] {
  return DAY_TEMPLATES.map((template, i) => ({
    day: i + 1,
    title: template.title,
    body: template.render(topTasks, context),
    focusTaskIndex: template.focusTaskIndex,
  }));
}
