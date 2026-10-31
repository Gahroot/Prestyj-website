/** Pure weekly-report rendering (markdown + minimal HTML). */
import { escapeHtml } from "../shared/alert";
import type {
  ContentLogEntry,
  GrowthException,
  Opportunity,
  PerformanceSnapshot,
} from "../shared/contracts";
import type { CtaStats } from "../measure/index";
import { LANE_LABELS, laneForPath, type Lane } from "../../../src/lib/attribution/services";
import { MIN_BOOKINGS, bookingsByVariant } from "./cta";

/** Goal: 10 qualified organic + AI demos per trailing 28 days by this date. */
export const TARGET_QUALIFIED_ORGANIC_AI = 10;
export const TARGET_DATE = "2027-01-29";
const NOT_USED = "not used (owner decision)";
const LANES: readonly Lane[] = ["real-estate", "connectors", "custom-builds"];

function weeksLeft(date: string): number {
  const days =
    (Date.parse(`${TARGET_DATE}T00:00:00Z`) - Date.parse(`${date}T00:00:00Z`)) / 86_400_000;
  return Math.max(0, Math.ceil(days / 7));
}

/** Bookings per GSC click: a proxy, because sessions are not measured (no GA4). */
function proxyRate(demos: number, clicks: number): string {
  return clicks > 0 ? `${((demos / clicks) * 100).toFixed(1)}%` : "n/a (0 clicks)";
}

export type ReportInput = {
  date: string;
  current: PerformanceSnapshot | null;
  weekAgo: PerformanceSnapshot | null; // trailing-28d snapshot from ~7 days earlier
  periodAgo: PerformanceSnapshot | null; // trailing-28d snapshot from ~28 days earlier (prior period)
  contentLog: ContentLogEntry[];
  exceptions: GrowthException[];
  opportunities: Opportunity[];
  ctaStats: CtaStats | null;
  experiments: Array<{ id: string; variants: Array<{ id: string; status: string }> }> | null;
};

const NC = "not connected";
const ok = (s: PerformanceSnapshot | null, src: string | string[]) =>
  s !== null && (Array.isArray(src) ? src : [src]).every((x) => s.sources[x] === "ok");

function fmt(n: number | null, digits = 0): string {
  return n === null
    ? NC
    : n.toLocaleString("en-US", { maximumFractionDigits: digits, minimumFractionDigits: digits });
}
function delta(cur: number | null, prev: number | null, digits = 0, lowerIsBetter = false): string {
  if (cur === null || prev === null) return "";
  const d = cur - prev;
  if (d === 0) return " (no change)";
  const arrow = d > 0 !== lowerIsBetter ? "▲" : "▼";
  return ` (${arrow} ${d > 0 ? "+" : ""}${d.toFixed(digits)})`;
}

type Metric = (s: PerformanceSnapshot) => number | null;
function line(
  label: string,
  input: ReportInput,
  src: string | string[],
  get: Metric,
  digits = 0,
  lowerIsBetter = false,
): string {
  const v = (s: PerformanceSnapshot | null) => (s && ok(s, src) ? get(s) : null);
  const cur = v(input.current);
  if (cur === null) return `- **${label}:** ${NC}`;
  const wk = v(input.weekAgo);
  const pd = v(input.periodAgo);
  const parts = [`- **${label}:** ${fmt(cur, digits)}`];
  if (wk !== null)
    parts.push(`vs a week ago${delta(cur, wk, digits, lowerIsBetter) || " (no data)"}`);
  if (pd !== null)
    parts.push(`vs prior 28d${delta(cur, pd, digits, lowerIsBetter) || " (no data)"}`);
  return parts.join(" · ");
}

const gscTotals = (s: PerformanceSnapshot) => {
  const clicks = s.pages.reduce((n, p) => n + p.gscClicks, 0);
  const impressions = s.pages.reduce((n, p) => n + p.gscImpressions, 0);
  const pw = s.pages.reduce((n, p) => n + (p.gscPosition ?? 0) * p.gscImpressions, 0);
  return { clicks, impressions, position: impressions ? pw / impressions : null };
};

export function renderMarkdown(input: ReportInput): string {
  const s = input.current;
  const out: string[] = [`# Prestyj growth report — ${input.date}`, ""];
  if (!s)
    return [...out, "No performance snapshot yet. Run `npm run growth:measure`.", ""].join("\n");
  out.push(
    `Trailing 28 days ${s.window.start} → ${s.window.end}. Changes compare against the 28-day snapshot from a week ago and the prior 28-day period.`,
    "",
  );

  out.push(
    "## North star",
    line(
      "Qualified demos from organic + AI",
      input,
      "cal",
      (x) => x.totals.qualifiedDemosFromOrganicOrAi,
    ),
    "",
  );
  {
    const cur = ok(s, "cal") ? s.totals.qualifiedDemosFromOrganicOrAi : null;
    out.push(
      "## Target tracker",
      cur === null
        ? `- **Qualified organic + AI demos, trailing 28 days:** ${NC} (target ${TARGET_QUALIFIED_ORGANIC_AI})`
        : `- **Qualified organic + AI demos, trailing 28 days:** ${cur} of ${TARGET_QUALIFIED_ORGANIC_AI} (${cur >= TARGET_QUALIFIED_ORGANIC_AI ? "on target" : `${TARGET_QUALIFIED_ORGANIC_AI - cur} short`})`,
      `- **Weeks left until ${TARGET_DATE}:** ${weeksLeft(input.date)}`,
      "",
    );
  }
  out.push(
    "## Pipeline and traffic",
    line("Demos booked", input, "cal", (x) => x.totals.demosBooked),
    line("Qualified demos (all channels)", input, "cal", (x) => x.totals.qualifiedDemos),
    `- **Sessions (GA4):** ${NOT_USED}; booking rates below use GSC clicks as a proxy`,
    line("GSC clicks (live pages)", input, "gsc", (x) => gscTotals(x).clicks),
    line("GSC impressions (live pages)", input, "gsc", (x) => gscTotals(x).impressions),
    line("GSC avg position (live pages)", input, "gsc", (x) => gscTotals(x).position, 1, true),
    "",
  );

  out.push(
    "## Funnel by lane",
    "GSC impressions → GSC clicks → booked demos → qualified demos. Booking rate = bookings ÷ GSC clicks, a proxy (not sessions: Bing, AI, direct and repeat visits also book). Pages are assigned to lanes by route; bookings by pj_service, else by first-touch landing page.",
  );
  for (const lane of LANES) {
    const pages = s.pages.filter((p) => laneForPath(p.path) === lane);
    const imp = pages.reduce((n, p) => n + p.gscImpressions, 0);
    const clk = pages.reduce((n, p) => n + p.gscClicks, 0);
    const gscPart = ok(s, "gsc") ? `${fmt(imp)} impr → ${fmt(clk)} clicks` : `GSC ${NC}`;
    const l = s.lanes?.find((x) => x.lane === lane);
    const calPart = !ok(s, "cal")
      ? `bookings ${NC}`
      : l
        ? `${l.demosBooked} booked → ${l.qualifiedDemos} qualified (${l.qualifiedDemosFromOrganicOrAi} organic/AI) · booking rate (proxy) ${ok(s, "gsc") ? proxyRate(l.demosBooked, clk) : NC}`
        : "bookings: no lane data in this snapshot";
    out.push(`- **${LANE_LABELS[lane]}:** ${gscPart} → ${calPart}`);
  }
  out.push("", "## Funnel by landing page (top 10)");
  {
    const rows = s.pages
      .filter((p) => p.gscImpressions > 0 || p.demosBooked > 0)
      .sort(
        (a, b) =>
          b.qualifiedDemos - a.qualifiedDemos ||
          b.demosBooked - a.demosBooked ||
          b.gscClicks - a.gscClicks ||
          b.gscImpressions - a.gscImpressions ||
          a.path.localeCompare(b.path),
      )
      .slice(0, 10);
    if (!rows.length) out.push("- no impressions or bookings on any live page this window");
    for (const p of rows)
      out.push(
        `- ${p.path} [${LANE_LABELS[laneForPath(p.path)]}]: ${ok(s, "gsc") ? `${p.gscImpressions} impr → ${p.gscClicks} clicks` : `GSC ${NC}`} → ${ok(s, "cal") ? `${p.demosBooked} booked → ${p.qualifiedDemos} qualified · booking rate (proxy) ${proxyRate(p.demosBooked, p.gscClicks)}` : `bookings ${NC}`}`,
      );
  }
  out.push("");

  out.push("## Ranking movers (GSC, vs a week ago)");
  if (!ok(s, "gsc") || !input.weekAgo || !ok(input.weekAgo, "gsc"))
    out.push(`- ${ok(s, "gsc") ? "no snapshot from a week ago yet" : NC}`);
  else {
    const key = (q: { query: string; page: string | null }) => `${q.query}\u0000${q.page ?? ""}`;
    const prev = new Map(
      input.weekAgo.queries.filter((q) => q.source === "gsc").map((q) => [key(q), q]),
    );
    const moves = s.queries
      .filter((q) => q.source === "gsc" && q.impressions >= 10)
      .flatMap((q) => {
        const p = prev.get(key(q));
        return p && p.position > 0 ? [{ q, d: p.position - q.position }] : [];
      })
      .filter((m) => Math.abs(m.d) >= 1)
      .sort((a, b) => Math.abs(b.d) - Math.abs(a.d) || a.q.query.localeCompare(b.q.query))
      .slice(0, 6);
    if (!moves.length) out.push("- no moves of 1+ position on queries with 10+ impressions");
    for (const m of moves)
      out.push(
        `- ${m.d > 0 ? "▲" : "▼"} "${m.q.query}" → ${m.q.page ?? "?"}: now ${m.q.position.toFixed(1)} (${m.d > 0 ? "+" : ""}${m.d.toFixed(1)})`,
      );
  }
  out.push("");

  out.push("## Top pages by demos");
  if (!ok(s, "cal")) out.push(`- ${NC}`);
  else {
    const top = s.pages
      .filter((p) => p.demosBooked > 0)
      .sort(
        (a, b) =>
          b.qualifiedDemos - a.qualifiedDemos ||
          b.demosBooked - a.demosBooked ||
          a.path.localeCompare(b.path),
      )
      .slice(0, 5);
    if (!top.length) out.push("- no demos attributed to a live landing page this window");
    for (const p of top)
      out.push(`- ${p.path}: ${p.demosBooked} demos, ${p.qualifiedDemos} qualified`);
  }
  out.push("");

  out.push("## CTA experiments");
  if (!input.experiments) out.push("- no experiments file yet");
  else if (!input.ctaStats?.cal) out.push(`- Cal.com bookings ${NC}; no promotion possible`);
  else {
    out.push(
      `- Exposures ${NOT_USED}. Winners are promoted only from Cal.com bookings per variant: ≥${MIN_BOOKINGS} attributed bookings and a significant split vs variant weights (p < 0.05). Until then promotion stays paused.`,
    );
    for (const exp of input.experiments) {
      const booked = bookingsByVariant(exp.id, input.ctaStats);
      const total = [...booked.values()].reduce((n, x) => n + x, 0);
      const desc = exp.variants.map((v) => `${v.id} [${v.status}] ${booked.get(v.id) ?? 0}`);
      const state = exp.variants.some((v) => v.status === "winner")
        ? "winner set"
        : total < MIN_BOOKINGS
          ? `paused: ${total}/${MIN_BOOKINGS} bookings`
          : "no significant difference yet";
      out.push(`- ${exp.id}: ${desc.join(" · ")} bookings — ${state}`);
    }
  }
  out.push("");

  const since = Date.parse(`${input.date}T00:00:00Z`) - 7 * 86_400_000;
  const week = input.contentLog.filter((e) => Date.parse(e.at) >= since);
  const by = (a: ContentLogEntry["action"]) => week.filter((e) => e.action === a);
  out.push("## Content this week");
  for (const [label, action] of [
    ["Published", "publish"],
    ["Refreshed", "refresh"],
    ["Rejected", "reject"],
  ] as const) {
    const items = by(action);
    out.push(
      `- **${label} (${items.length}):** ${items.length ? items.map((e) => (action === "reject" ? `${e.title} — ${e.reasons[0] ?? "no reason"}` : (e.path ?? e.slug))).join("; ") : "none"}`,
    );
  }
  out.push("");

  // GA4 is not used by owner decision; old "missing GA4" warnings are not actionable.
  const openExc = input.exceptions.filter((e) => e.component !== "measure.ga4");
  out.push(`## Open exceptions (${openExc.length})`);
  const sev = { critical: 0, warning: 1, info: 2 } as const;
  const exc = [...openExc].sort(
    (a, b) => sev[a.severity] - sev[b.severity] || b.raisedAt.localeCompare(a.raisedAt),
  );
  const seen = new Set<string>();
  for (const e of exc) {
    const k = `${e.component}|${e.message}`;
    if (seen.has(k)) continue;
    seen.add(k);
    if (seen.size > 8) break;
    out.push(`- [${e.severity}] ${e.component}: ${e.message}`);
  }
  if (!exc.length) out.push("- none");
  out.push("");

  out.push("## Data sources");
  const sources: Record<string, string> = { ...s.sources, ga4: "not-used" };
  for (const [k, v] of Object.entries(sources).sort())
    out.push(
      `- ${k}: ${v === "ok" ? "ok" : v === "missing-credentials" ? NC : v === "not-used" ? NOT_USED : "error"}`,
    );
  out.push("");

  out.push("## Next actions");
  const next = input.opportunities
    .filter((o) => o.status === "open")
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id))
    .slice(0, 5);
  if (!next.length) out.push("- no open opportunities");
  next.forEach((o, i) =>
    out.push(
      `${i + 1}. **${o.kind}** ${o.path ?? `"${o.queries[0] ?? ""}"`} — ${o.evidence} (score ${o.score})`,
    ),
  );
  out.push("");
  return out.join("\n");
}

/** Tiny markdown → HTML for the email (headings, bullets, numbered items, bold). */
export function markdownToHtml(md: string): string {
  const inline = (t: string) =>
    escapeHtml(t)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`(.+?)`/g, "<code>$1</code>");
  const html: string[] = [];
  let list: "ul" | "ol" | null = null;
  const close = () => {
    if (list) html.push(`</${list}>`);
    list = null;
  };
  for (const raw of md.split("\n")) {
    const h = /^(#{1,3}) (.*)$/.exec(raw);
    const li = /^- (.*)$/.exec(raw);
    const ol = /^\d+\. (.*)$/.exec(raw);
    if (h) {
      close();
      html.push(`<h${h[1]?.length}>${inline(h[2] ?? "")}</h${h[1]?.length}>`);
    } else if (li || ol) {
      const kind = li ? "ul" : "ol";
      if (list !== kind) {
        close();
        html.push(`<${kind}>`);
        list = kind;
      }
      html.push(`<li>${inline((li ?? ol)?.[1] ?? "")}</li>`);
    } else if (raw.trim()) {
      close();
      html.push(`<p>${inline(raw)}</p>`);
    } else close();
  }
  close();
  return `<div style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5;max-width:720px">${html.join("\n")}</div>`;
}
