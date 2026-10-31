/**
 * Service lanes for /book-demo?service=<slug> and for grouping landing pages in the
 * growth report. A slug is the service page path without the leading slash.
 * Unknown values resolve to null and are ignored.
 */
export type Lane = "real-estate" | "connectors" | "custom-builds";

export const LANE_LABELS: Record<Lane, string> = {
  "real-estate": "Institutional real estate",
  connectors: "AI connectors",
  "custom-builds": "Custom AI builds",
};

export type BookableService = { slug: string; lane: Exclude<Lane, "real-estate">; label: string };

export const BOOKABLE_SERVICES: readonly BookableService[] = [
  { slug: "connectors", lane: "connectors", label: "AI connectors" },
  { slug: "custom-claude-connectors", lane: "connectors", label: "Custom Claude connector" },
  {
    slug: "done-for-you-claude-connectors",
    lane: "connectors",
    label: "Done-for-you Claude connector",
  },
  { slug: "custom-mcp-servers", lane: "connectors", label: "Custom MCP server" },
  { slug: "custom-chatgpt-plugins", lane: "connectors", label: "Custom ChatGPT plugin" },
  { slug: "custom-ai-agents", lane: "custom-builds", label: "Custom AI agent" },
  { slug: "ai-sales-agents", lane: "custom-builds", label: "AI sales agent" },
  { slug: "ai-marketing-agents", lane: "custom-builds", label: "AI marketing agent" },
  { slug: "ai-operations-agents", lane: "custom-builds", label: "AI operations agent" },
  { slug: "enterprise-ai-automation", lane: "custom-builds", label: "Enterprise AI automation" },
  {
    slug: "custom-software-development",
    lane: "custom-builds",
    label: "Custom software development",
  },
];

export function getBookableService(value: unknown): BookableService | null {
  if (typeof value !== "string") return null;
  const slug = value.trim().toLowerCase();
  return BOOKABLE_SERVICES.find((s) => s.slug === slug) ?? null;
}

/** Lane of a site path, by route. Connector guides live under /connectors/. */
export function laneForPath(pathname: string): Lane {
  const first = pathname.split("?")[0]?.split("/").filter(Boolean)[0] ?? "";
  return getBookableService(first)?.lane ?? "real-estate";
}

/** Service pages of the non-real-estate lanes, as paths. */
export const SERVICE_PATHS: readonly string[] = BOOKABLE_SERVICES.map((s) => `/${s.slug}`);
