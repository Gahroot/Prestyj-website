/** Pure weekly-report rendering (markdown + minimal HTML). */
import { escapeHtml } from "../shared/alert";
import type {
  ContentLogEntry,
  GrowthException,
  Opportunity,
  PerformanceSnapshot,
} from "../shared/contracts";
import type { CtaStats } from "../measure/index";
import { armStats } from "./cta";

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
  out.push(
    "## Pipeline and traffic",
    line("Demos booked", input, "cal", (x) => x.totals.demosBooked),
    line("Qualified demos (all channels)", input, "cal", (x) => x.totals.qualifiedDemos),
    line("Organic sessions", input, "ga4", (x) => x.totals.organicSessions),
    line("AI referral sessions", input, "ga4", (x) => x.totals.aiReferralSessions),
    line("GSC clicks (live pages)", input, "gsc", (x) => gscTotals(x).clicks),
    line("GSC impressions (live pages)", input, "gsc", (x) => gscTotals(x).impressions),
    line("GSC avg position (live pages)", input, "gsc", (x) => gscTotals(x).position, 1, true),
    "",
  );

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
  else if (!input.ctaStats?.ga4) out.push(`- exposures ${NC} (needs GA4)`);
  else
    for (const exp of input.experiments) {
      const arms = armStats(exp.id, input.ctaStats);
      const desc = exp.variants.map((v) => {
        const a = arms.get(v.id);
        return `${v.id} [${v.status}] ${a ? `${a.conversions}/${a.exposures}` : "0/0"}`;
      });
      out.push(`- ${exp.id}: ${desc.join(" · ")} (demos/views)`);
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

  out.push(`## Open exceptions (${input.exceptions.length})`);
  const sev = { critical: 0, warning: 1, info: 2 } as const;
  const exc = [...input.exceptions].sort(
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
  for (const [k, v] of Object.entries(s.sources).sort())
    out.push(`- ${k}: ${v === "ok" ? "ok" : v === "missing-credentials" ? NC : "error"}`);
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
