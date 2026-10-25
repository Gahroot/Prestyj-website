/**
 * MCP servers Prestyj has built, described from the inspected source repositories.
 * Client names are withheld. These describe engineering, not published business results.
 */
export type ReferenceBuild = {
  name: string;
  systems: readonly string[];
  summary: string;
  details: readonly string[];
};

export const referenceBuildStage = "Built and tested by Prestyj. Client names withheld.";

export const referenceBuilds: readonly ReferenceBuild[] = [
  {
    name: "Portfolio data connector for an investment firm",
    systems: ["Yardi via Power BI", "Monday.com", "SharePoint"],
    summary:
      "A remote, read-only MCP server that answers portfolio questions from evidence-backed records across three source systems.",
    details: [
      "Streamable HTTP endpoint with OAuth protected-resource metadata and a delegated, API-scoped token per user",
      "Denied data is reported as withheld, never guessed or filled from another source",
      "Conflicting sources are shown side by side with their evidence instead of being averaged",
      "Server instructions kept under the 2,048 character limit Claude Code applies, enforced by a test",
    ],
  },
  {
    name: "Connect-once business memory over MCP",
    systems: ["Monday.com", "Yardi", "SharePoint", "Postgres"],
    summary:
      "Syncs a company's apps into typed facts in Postgres once, then hands them to any AI client over MCP.",
    details: [
      "Six tools: schema, brief, read-only SQL with a five second cap, document search, open conflicts, and resolve conflict",
      "When sources disagree, a person answers once and the answer becomes a rule",
      "Works in Claude Desktop, Claude Code, and any other MCP host",
    ],
  },
  {
    name: "Governed context server for a research platform",
    systems: ["Versioned context API", "Webhooks"],
    summary:
      "A stdio MCP server with 24 workflow-specific tools that never sees a database URL or tenant ID.",
    details: [
      "The API key resolves the tenant; caller-supplied tenant or access fields are rejected before execution",
      "Every tool enforces a scope plus result, time, output-token, and cost ceilings",
      "Read-only by default; writes need a separate switch, explicit confirmation, and an idempotency key",
      "A tool-selection benchmark checks that the model picks the right tool for each question",
    ],
  },
  {
    name: "Multi-tenant MCP for isolated customer deployments",
    systems: ["Per-customer deployment", "Per-customer database"],
    summary:
      "One codebase deployed separately for each customer, with an MCP endpoint whose tool catalog comes from that customer's configuration.",
    details: [
      "OAuth token introspection with a dedicated read scope",
      "Per-token rate limits and bounded request sizes",
      "No customer data or secrets in the shared code or deployment packs",
    ],
  },
];
