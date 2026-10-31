/**
 * Copy shared by every page in the custom AI builds lane. Engagement and control language
 * describes how Prestyj scopes and runs builds; it carries no prices, timelines, or guarantees.
 */
export type BuildPoint = { title: string; body: string };

export const buildEngagementSteps: readonly BuildPoint[] = [
  {
    title: "Pick one workflow",
    body: "We start from one recurring piece of work: who does it today, what they open, what they produce, and who signs it off. A build covers that workflow, not a department.",
  },
  {
    title: "Map the source systems",
    body: "We list every system the work touches, how each one authenticates, what the agent may read, and what, if anything, it may write. Systems we cannot reach safely are named as out of scope.",
  },
  {
    title: "Size the volume and the controls",
    body: "Item counts, peak periods, and the review rules your team needs decide the design and the cost. You get a written scope that names the workflow, systems, volume, review owner, and exclusions.",
  },
  {
    title: "Build against real cases",
    body: "We build with test cases drawn from your own past work, including the awkward ones, and run the agent in review-only mode first so your team can compare its output to what they would have produced.",
  },
  {
    title: "Operate and maintain",
    body: "We host, monitor, and maintain what we build: source API changes, model updates, new exception types, and changes to your review rules. You see what ran, what was held, and why.",
  },
];

export const buildControls: readonly BuildPoint[] = [
  {
    title: "Least privilege",
    body: "Each agent gets its own credentials with the narrowest scope the workflow needs. Read-only is the default; every write path is named in the scope and switched on separately.",
  },
  {
    title: "Review gates",
    body: "You decide which outputs a person approves before anything leaves the agent: a CRM update, a sent email, a posted journal entry, a published asset. Nothing that changes a record or reaches an outside party skips its gate.",
  },
  {
    title: "Exception queue",
    body: "Items the agent cannot resolve with confidence, such as missing fields, conflicting sources, or unknown formats, go to a named queue with the reason attached instead of being guessed.",
  },
  {
    title: "Audit log",
    body: "Every run records the inputs read, the tools called, the output produced, and who approved it, so any result can be traced back to its source.",
  },
  {
    title: "The system of record stays authoritative",
    body: "Your CRM, ERP, or document store remains the source of truth. Agents read from it and propose changes to it; they do not keep a parallel copy that drifts.",
  },
];

export const openSourceProof = {
  name: "mcp-connector-check (open source)",
  systems: ["CLI", "MCP server over stdio", "CI"] as const,
  summary:
    "A read-only checker Prestyj wrote that audits a remote MCP server for production readiness and security before it ships as a Claude connector or ChatGPT app.",
  details: [
    "Checks HTTPS, the unauthenticated 401 challenge, OAuth protected-resource metadata (RFC 9728), and authorization server metadata with PKCE S256",
    "Flags tools without descriptions, untyped inputs, and write-looking tools not marked destructive",
    "Only sends initialize and tools/list; it never calls a tool on the server it checks",
    "Tested against a well-behaved and a badly behaved fixture server",
  ] as const,
};
