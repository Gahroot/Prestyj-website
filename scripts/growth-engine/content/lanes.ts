/**
 * Content lanes. Real estate is the core offer; the connectors and custom AI builds lanes
 * (owner decision, October 2026) publish under the same gates with their own audiences,
 * vocabulary, service page and first-party proof.
 */
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import {
  BOOKABLE_SERVICES,
  type BookableService,
  type Lane,
} from "../../../src/lib/attribution/services";
import { referenceBuildStage, referenceBuilds } from "../../../src/lib/connectors/reference-builds";
import type { ContentLogEntry, Opportunity } from "../shared/contracts";

export type { Lane };
export { BOOKABLE_SERVICES };
export type ServiceLane = Exclude<Lane, "real-estate">;
export const LANES: readonly Lane[] = ["real-estate", "connectors", "custom-builds"];
export const SERVICE_LANES: readonly ServiceLane[] = ["connectors", "custom-builds"];

export type LaneProfile = {
  /** Registry category every article in this lane uses (null = writer picks from existing). */
  category: string | null;
  audiences: string;
  researchFocus: string;
  /** Example buyer-intent questions to steer research. */
  exampleQuestions: readonly string[];
  /** Service the article links to when the writer names none. */
  defaultService: string | null;
};

export const LANE_PROFILES: Record<Lane, LaneProfile> = {
  "real-estate": {
    category: null,
    audiences: "fund|brokerage|owner-operator",
    researchFocus:
      "Prestyj builds and operates AI agents for institutional real estate: real estate investment funds from $500M AUM, commercial brokerages, and CRE owner-operators. Prestyj delivers reviewed deal, fund, investor, portfolio, origination and listing-media work product from the systems a firm already runs, with sources attached and review gates.\nFind high-intent questions decision-makers (CFOs, COOs, heads of IR, asset management, brokerage leaders) ask search engines and AI assistants, where existing content is thin or generic. Ignore residential realtor, home-services and generic AI-consulting topics.",
    exampleQuestions: [],
    defaultService: null,
  },
  connectors: {
    category: "AI connectors",
    audiences: "it-leader|ops-leader|founder",
    researchFocus:
      "Prestyj builds, hosts and maintains custom Claude connectors, custom MCP servers and custom ChatGPT plugins for businesses in any industry, connecting AI assistants to the systems a company already runs (ERP, CRM, databases, document stores) with scoped permissions.\nFind buyer-intent questions IT leaders, operations leaders and founders ask while evaluating a connector or MCP server build: security, OAuth, hosting, build vs buy, Claude vs ChatGPT integration choices, cost drivers. Ignore hobbyist setup tutorials and consumer chatbot topics.",
    exampleQuestions: [
      "How do we evaluate a custom MCP server vendor for our ERP?",
      "Should we connect our CRM to Claude or to ChatGPT first?",
      "What permissions should a Claude connector have on our database?",
    ],
    defaultService: "custom-mcp-servers",
  },
  "custom-builds": {
    category: "Custom AI agents",
    audiences: "sales-leader|marketing-leader|ops-leader|cto",
    researchFocus:
      "Prestyj builds and operates custom AI agents for businesses: sales, marketing and operations agents, enterprise AI automation and custom software, scoped per workflow with least-privilege access, review gates, exception queues and audit logs.\nFind buyer-intent questions sales, marketing and operations leaders and CTOs ask while deciding whether and how to build an AI agent: build vs buy, permissions and audit, data access, review before anything is sent or written. Ignore consumer AI tools and generic 'what is AI' topics.",
    exampleQuestions: [
      "Should we build or buy an AI sales agent for outbound follow-up?",
      "What does enterprise AI automation need for permissions and audit logs?",
      "How do we keep an AI marketing agent from publishing without review?",
    ],
    defaultService: "custom-ai-agents",
  },
};

export function laneServices(lane: Lane): readonly BookableService[] {
  return BOOKABLE_SERVICES.filter((service) => service.lane === lane);
}

/** Service page paths that exist as routes under `root` (custom-build pages may still be in progress). */
export function liveServicePaths(root: string): string[] {
  return BOOKABLE_SERVICES.filter((service) =>
    existsSync(path.join(root, "src/app", service.slug, "page.tsx")),
  ).map((service) => `/${service.slug}`);
}

export function resolveService(lane: Lane, requested: unknown): string | null {
  if (lane === "real-estate") return null;
  const slug = typeof requested === "string" ? requested.trim().replace(/^\//, "") : "";
  const match = laneServices(lane).find((service) => service.slug === slug);
  return match?.slug ?? LANE_PROFILES[lane].defaultService;
}

export const bookDemoServiceHref = (service: string): string =>
  `/book-demo?service=${encodeURIComponent(service)}`;

const RESEARCH_ID = /^research-(connectors|custom-builds)-/;

/** Lane is encoded in the opportunity id (`research-<lane>-<hash>`); everything else is real estate. */
export function laneOfOpportunity(item: Pick<Opportunity, "id">): Lane {
  const match = RESEARCH_ID.exec(item.id);
  return (match?.[1] as ServiceLane | undefined) ?? "real-estate";
}

/** Service slug hint recorded in research evidence as `service=<slug>`. */
export function serviceHint(item: Pick<Opportunity, "evidence">): string | null {
  return /\bservice=([a-z0-9-]+)/.exec(item.evidence)?.[1] ?? null;
}

/** Lanes of new articles published in the rolling 7 days, looked up by slug. */
export function recentPublishLanes(
  log: readonly ContentLogEntry[],
  laneBySlug: ReadonlyMap<string, Lane>,
  now: Date,
): Lane[] {
  const since = now.getTime() - 7 * 86_400_000;
  return log
    .filter((entry) => {
      const at = Date.parse(entry.at);
      return entry.action === "publish" && at > since && at <= now.getTime();
    })
    .sort((a, b) => a.at.localeCompare(b.at))
    .map((entry) => laneBySlug.get(entry.slug) ?? "real-estate");
}

/**
 * Lane rotation under the weekly cap: real estate keeps at least half the slots
 * (service lanes share floor(cap / 2)), and the service lane that published least
 * recently goes first. Input order (score) is kept otherwise.
 */
export function orderByLaneRotation<T extends Pick<Opportunity, "id">>(
  candidates: readonly T[],
  recent: readonly Lane[],
  maxNewPerWeek: number,
): T[] {
  const serviceUsed = recent.filter((lane) => lane !== "real-estate").length;
  const serviceRoom = Math.floor(maxNewPerWeek / 2) - serviceUsed;
  const lastUse = (lane: Lane): number => recent.lastIndexOf(lane);
  const out: T[] = [];
  let serviceTaken = 0;
  // Service lanes ordered least recently published first, for the single shared slot.
  const lanes = [...SERVICE_LANES].sort((a, b) => lastUse(a) - lastUse(b) || a.localeCompare(b));
  const realEstate = candidates.filter((item) => laneOfOpportunity(item) === "real-estate");
  const service = lanes.flatMap((lane) =>
    candidates.filter((item) => laneOfOpportunity(item) === lane),
  );
  // Alternate: if the last publish was real estate and a service slot is open, a service item goes first.
  const lastWasRealEstate = recent.length > 0 && recent[recent.length - 1] === "real-estate";
  const queue = lastWasRealEstate ? [...service, ...realEstate] : [...realEstate, ...service];
  for (const item of queue) {
    if (laneOfOpportunity(item) !== "real-estate") {
      if (serviceTaken >= serviceRoom) continue;
      serviceTaken++;
    }
    out.push(item);
  }
  return out;
}

/** First-party proof the service lanes may cite. Never supports clients, metrics, prices or timelines. */
export function laneProofText(root: string): string {
  const builds = referenceBuilds
    .map(
      (build) =>
        `${build.name} (${build.systems.join(", ")}): ${build.summary} ${build.details.join("; ")}.`,
    )
    .join("\n");
  const readme = path.join(root, "open-source/mcp-connector-check/README.md");
  const tool = existsSync(readme)
    ? readFileSync(readme, "utf8")
        .split("\n## Install")[0]
        ?.replace(/^# .*\n/, "")
        .trim()
    : "";
  return `Reference builds (${referenceBuildStage}):\n${builds}${
    tool ? `\nOpen-source tool by Prestyj, mcp-connector-check:\n${tool}` : ""
  }`;
}

/** Lane vocabulary for the writer. */
export function laneWriterBrief(lane: Lane, root: string): string {
  if (lane === "real-estate") return "";
  const services = laneServices(lane)
    .map((service) => `${service.slug} (${service.label})`)
    .join(", ");
  return `LANE: ${lane}. This article is NOT about real estate. ${LANE_PROFILES[lane].researchFocus.split("\n")[0]}
Readers: ${LANE_PROFILES[lane].audiences.replace(/\|/g, ", ")}. Write plainly for a business buyer evaluating the build.
Choose one service page for the META "service" field from: ${services}. Link to it in the body as [label](/<slug>) and close with a pointer to [book a scoping call](${bookDemoServiceHref("<slug>")}).
Proof: the ONLY Prestyj proof you may describe is the first-party material below. Client names are withheld; never name, imply or invent clients, customer counts, metrics, results, prices or timelines. Anything else about Prestyj is illustrative and must say so.
${laneProofText(root)}`;
}

/**
 * Deterministic CTA wiring for service lanes: the closing /book-demo link carries
 * ?service=<slug>, and the body links to the service page at least once.
 */
export function wireServiceLinks(body: string, service: string, label: string): string {
  let out = body.replace(/\]\(\/book-demo(?:\?[^)]*)?\)/g, `](${bookDemoServiceHref(service)})`);
  if (!out.includes(`](${bookDemoServiceHref(service)})`))
    out = `${out.trimEnd()}\n\nTo scope this for your systems, [book a call](${bookDemoServiceHref(service)}).\n`;
  if (!new RegExp(`\\]\\(/${service}(?:[#)])`).test(out)) {
    const parts = out.trimEnd().split(/\n\s*\n/);
    const closing = parts.pop() ?? "";
    out = `${[...parts, `For how Prestyj scopes and runs this work, see [${label}](/${service}).`, closing].join("\n\n")}\n`;
  }
  return out;
}

/** Vocabulary rules per lane. Service lanes may say "custom AI" and "AI automation" (their offer). */
export const SERVICE_LANE_ALLOWED_TERMS: readonly string[] = [
  "custom ai",
  "ai automation",
  "internal tools",
  "internal tool",
];

export const SERVICE_LANE_USE_TERMS: readonly string[] = [
  "system of record",
  "review gate",
  "exception queue",
  "least privilege",
  "read-only",
  "audit log",
  "source attached",
  "scoped permissions",
  "approval",
];

/** Lines that present Prestyj clients, metrics, prices or timelines as real. */
export function proofBoundaryViolations(body: string): string[] {
  const out: string[] = [];
  const prose = body.split(/\n## Sources\b/)[0] ?? body;
  for (const raw of prose.split("\n")) {
    const line = raw.replace(/\]\([^)]*\)/g, "]");
    if (!/\b(prestyj|we|our)\b/i.test(line)) continue;
    if (/illustrative|synthetic|fictional|hypothetical/i.test(line)) continue;
    const hit =
      /\$\s?\d/.test(line) ||
      /\b\d+(?:\.\d+)?\s?%/.test(line) ||
      /\b\d+\s?(?:-|to)?\s?\d*\s?(?:hours?|days?|weeks?|months?)\b/i.test(line) ||
      /\b(?:our|prestyj(?:'s)?)\s+(?:clients?|customers?)\s+(?:include|such as|like|saw|reported|achieved|cut|saved)/i.test(
        line,
      );
    if (hit) out.push(line.trim().slice(0, 120));
  }
  return out;
}
