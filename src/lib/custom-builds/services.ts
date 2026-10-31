import type { ConnectorServiceSlug } from "@/lib/connectors/services";
import type { BuildPoint } from "@/lib/custom-builds/shared";

export type CustomBuildSlug =
  | "custom-ai-agents"
  | "ai-sales-agents"
  | "ai-marketing-agents"
  | "ai-operations-agents"
  | "enterprise-ai-automation"
  | "custom-software-development";

export type CustomBuildFaq = { question: string; answer: string };

/** Names from src/lib/connectors/reference-builds.ts. */
export type ReferenceBuildName =
  | "Portfolio data connector for an investment firm"
  | "Connect-once business memory over MCP"
  | "Governed context server for a research platform"
  | "Multi-tenant MCP for isolated customer deployments";

export type CustomBuild = {
  slug: CustomBuildSlug;
  navLabel: string;
  primaryKeyword: string;
  /** Page title without the brand; the root layout appends "| Prestyj". */
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lede: string;
  audience: readonly string[];
  examples: readonly BuildPoint[];
  faqs: readonly CustomBuildFaq[];
  related: readonly CustomBuildSlug[];
  connectors: readonly ConnectorServiceSlug[];
  proof: readonly ReferenceBuildName[];
};

export const customBuildHubSlug = "custom-ai-agents" satisfies CustomBuildSlug;

export function customBuildPath(slug: CustomBuildSlug): `/${CustomBuildSlug}` {
  return `/${slug}`;
}

export function customBuildCtaHref(slug: CustomBuildSlug): string {
  return `/book-demo?service=${slug}`;
}

const ownershipFaq: CustomBuildFaq = {
  question: "Who owns the code?",
  answer:
    "Ownership is set in the written scope before work starts. The usual arrangement is that you own the workflow-specific code, prompts, and configuration we write for you, and we keep the right to reuse our general tooling. Your data stays yours in every case and is not used to train shared models.",
};

const securityFaq: CustomBuildFaq = {
  question: "How is our data kept secure?",
  answer:
    "Agents use their own scoped credentials, read-only unless a write is named in the scope, and every run is logged. Where your systems support OAuth, people sign in with their own accounts so the agent sees only what they can see. We document where data is processed and which model providers are used so your security team can review it before anything goes live. We do not claim certifications we have not been audited for.",
};

const maintenanceFaq: CustomBuildFaq = {
  question: "What happens after it is live?",
  answer:
    "We operate and maintain it. Source systems change their APIs, models are updated, and new kinds of exceptions turn up; each of those is handled as part of running the workflow, with changes tested against your past cases before they ship. If you would rather run it yourselves, we hand over the code, the runbook, and the test cases.",
};

export const customBuilds: readonly CustomBuild[] = [
  {
    slug: "custom-ai-agents",
    navLabel: "Custom AI agents",
    primaryKeyword: "custom AI agents",
    metaTitle: "Custom AI Agents Built and Run for Your Business",
    metaDescription:
      "Prestyj designs, builds, and operates custom AI agents for sales, marketing, and operations workflows, connected to the systems you already run, with review gates, an exception queue, and an audit log.",
    eyebrow: "Custom AI agents",
    title: "Custom AI agents, built and run for the work your team repeats every week.",
    lede: "We build agents around one defined workflow at a time: they read from your existing systems, do the work, hold anything uncertain for a person, and hand back a finished output with its sources. Then we keep them running.",
    audience: [
      "Teams with a recurring workflow that pulls from two or more systems and ends in a document, update, or decision",
      "Operators who have tried an off-the-shelf AI tool and found it could not reach their data or follow their rules",
      "Companies that want the work done and maintained, not a platform to configure themselves",
    ],
    examples: [
      {
        title: "Inbound lead research and routing",
        body: "Reads a new form fill, researches the company from public sources and your CRM history, drafts a qualification summary, and routes it to the right owner for review.",
      },
      {
        title: "Weekly reporting pack",
        body: "Pulls figures from the CRM, ad platforms, and finance system, reconciles the totals, drafts the commentary, and holds the pack until the report owner approves it.",
      },
      {
        title: "Document intake and extraction",
        body: "Classifies incoming invoices, contracts, or forms, extracts the fields you define, checks them against the system of record, and queues mismatches.",
      },
      {
        title: "Question answering over company systems",
        body: "A governed agent that answers staff questions from your CRM, ERP, and document store with the source record attached, and says when data is withheld.",
      },
    ],
    faqs: [
      {
        question: "What drives the cost of a custom AI agent?",
        answer:
          "Four things: how many workflows are in scope, how many source systems the agent must read or write, the volume of items it handles, and how strict the review and audit requirements are. A read-only agent over one system costs far less to build and run than one that writes to several systems under approval rules. We price after scoping, in writing.",
      },
      {
        question: "Should we build our own agent or buy an off-the-shelf tool?",
        answer:
          "Buy when a product already covers your workflow and your systems; it will be cheaper. A custom build makes sense when the work spans systems no single product connects to, when your review rules are specific, or when you need the agent to follow your process rather than adapt your process to a tool. We will tell you on the scoping call if buying is the better answer.",
      },
      {
        question: "Will it work with the systems we already use?",
        answer:
          "If a system has an API, a database we can be granted read access to, or a reliable export, we can usually connect to it. We confirm each system during scoping, including how it authenticates and what rate limits apply, and name anything we cannot reach as out of scope rather than promising it.",
      },
      securityFaq,
      ownershipFaq,
      maintenanceFaq,
    ],
    related: ["ai-sales-agents", "ai-marketing-agents", "ai-operations-agents"],
    connectors: ["custom-mcp-servers", "custom-claude-connectors"],
    proof: [
      "Connect-once business memory over MCP",
      "Governed context server for a research platform",
      "Portfolio data connector for an investment firm",
    ],
  },
  {
    slug: "ai-sales-agents",
    navLabel: "AI sales agents",
    primaryKeyword: "AI sales agents",
    metaTitle: "AI Sales Agents for Lead Research, Follow-Up, and CRM Hygiene",
    metaDescription:
      "Custom AI sales agents that research and qualify leads, draft follow-ups for rep approval, keep CRM records clean, and assemble pipeline reports from your own systems.",
    eyebrow: "AI sales agents",
    title: "AI sales agents that do the research, drafting, and CRM upkeep your reps skip.",
    lede: "Reps lose hours to looking up accounts, writing the same follow-ups, and updating fields nobody checks. We build agents that do that groundwork from your CRM and approved sources, and leave every customer-facing message with the rep.",
    audience: [
      "Sales teams whose CRM data is incomplete because updating it competes with selling",
      "Revenue operations leads who rebuild the same pipeline report by hand each week",
      "Founders and sales managers who want faster lead response without unreviewed outreach",
    ],
    examples: [
      {
        title: "Lead research and qualification",
        body: "For each new lead, gathers firmographics from approved sources and prior activity from the CRM, scores it against your written criteria, and attaches the reasoning so a rep can disagree quickly.",
      },
      {
        title: "Follow-up drafting",
        body: "Drafts the follow-up after a call or meeting from the notes and the account history, in your templates, and places it in the rep's queue. Nothing is sent without the rep.",
      },
      {
        title: "CRM hygiene",
        body: "Finds duplicate accounts, stale stages, missing next steps, and contacts that have changed roles, then proposes fixes for an owner to approve rather than overwriting records.",
      },
      {
        title: "Pipeline reporting",
        body: "Builds the weekly pipeline view from the CRM, flags deals that moved backwards or have gone quiet, and drafts the commentary for the sales leader to edit.",
      },
    ],
    faqs: [
      {
        question: "What determines the cost of an AI sales agent?",
        answer:
          "Lead and activity volume, the number of systems involved (CRM, email, enrichment sources, calendar), whether the agent only drafts or also writes to the CRM, and how much review each output needs. We scope those before quoting.",
      },
      {
        question: "Why not use the AI features already in our CRM?",
        answer:
          "Use them if they cover the job. Built-in features tend to work inside one product; a custom agent is worth it when qualification depends on your own criteria, data from outside the CRM, or a review flow the CRM cannot express.",
      },
      {
        question: "Will the agent send emails to prospects on its own?",
        answer:
          "Not by default. Drafts go to the rep for approval. If you later want certain low-risk messages sent automatically, that becomes a named write path in the scope, with its own logging and an easy way to switch it off.",
      },
      {
        question: "Which CRMs can it work with?",
        answer:
          "Any CRM with an API we can be granted scoped access to. We confirm the specific objects, fields, and permissions during scoping. Naming a CRM here is not a claim of a partnership or a prebuilt integration.",
      },
      securityFaq,
      ownershipFaq,
    ],
    related: ["custom-ai-agents", "ai-marketing-agents", "enterprise-ai-automation"],
    connectors: ["custom-claude-connectors", "custom-chatgpt-plugins"],
    proof: [
      "Connect-once business memory over MCP",
      "Governed context server for a research platform",
    ],
  },
  {
    slug: "ai-marketing-agents",
    navLabel: "AI marketing agents",
    primaryKeyword: "AI marketing agents",
    metaTitle: "AI Marketing Agents for Content Ops and Campaign Reporting",
    metaDescription:
      "Custom AI marketing agents for content operations, campaign reporting, research briefs, and asset production, with brand and legal review before anything is published.",
    eyebrow: "AI marketing agents",
    title:
      "AI marketing agents for content operations, reporting, and briefs, with review before anything ships.",
    lede: "Marketing work is full of repeatable assembly: pulling campaign numbers, writing briefs, resizing and versioning assets, keeping the content calendar honest. We build agents for that assembly and keep publishing decisions with your team.",
    audience: [
      "Marketing teams producing more variants, channels, and reports than headcount allows",
      "Marketing operations leads who reconcile numbers across ad platforms, analytics, and the CRM",
      "Brands with approval rules that generic AI writing tools ignore",
    ],
    examples: [
      {
        title: "Campaign reporting",
        body: "Pulls spend and results from each ad platform and analytics, reconciles them to the CRM, notes where the sources disagree, and drafts the weekly summary for the channel owner.",
      },
      {
        title: "Research briefs",
        body: "Assembles a brief on a topic, competitor, or audience from approved sources with every claim linked, so writers start from evidence rather than a blank page.",
      },
      {
        title: "Content operations",
        body: "Turns an approved piece into channel versions, checks them against your style guide and banned-claims list, and files them in the calendar as drafts awaiting approval.",
      },
      {
        title: "Asset production with review",
        body: "Produces resized, localized, or versioned assets from approved masters and routes each batch through brand and, where needed, legal review before release.",
      },
    ],
    faqs: [
      {
        question: "What affects the cost of an AI marketing agent?",
        answer:
          "The number of channels and platforms it reads from, output volume, whether it produces finished assets or drafts, and how many review steps each output passes through. We price after scoping.",
      },
      {
        question: "How do you keep output on brand and accurate?",
        answer:
          "The agent works from your style guide, approved messaging, and a list of claims it may not make, and cites the source for any fact. A named reviewer approves before anything is published. The agent never publishes on its own unless you add that as a scoped write path.",
      },
      {
        question: "Is this better than a content tool subscription?",
        answer:
          "Not always. If a tool covers your channels and approval flow, use it. A custom agent is worth building when the work depends on your own data, such as CRM results or product records, or on review rules a tool cannot enforce.",
      },
      {
        question: "Can it connect to our ad platforms and analytics?",
        answer:
          "Where the platform offers an API and you can grant scoped access, yes. We confirm each account and permission during scoping. Platform names are examples, not partnership claims.",
      },
      securityFaq,
      maintenanceFaq,
    ],
    related: ["custom-ai-agents", "ai-sales-agents", "ai-operations-agents"],
    connectors: ["custom-claude-connectors", "custom-chatgpt-plugins"],
    proof: [
      "Connect-once business memory over MCP",
      "Governed context server for a research platform",
    ],
  },
  {
    slug: "ai-operations-agents",
    navLabel: "AI operations agents",
    primaryKeyword: "AI operations agents",
    metaTitle: "AI Operations Agents for Documents, Reconciliation, and Back Office",
    metaDescription:
      "Custom AI operations agents that process documents, reconcile records across systems, assemble recurring reports, and run back-office workflows with an exception queue and audit log.",
    eyebrow: "AI operations agents",
    title: "AI operations agents for document processing, reconciliation, and back-office work.",
    lede: "Operations work is matching, checking, and filing across systems that were never designed to agree. We build agents that do the matching, send every mismatch to an exception queue with the reason, and leave postings to the people accountable for them.",
    audience: [
      "Finance and operations teams that key data from documents into an ERP or accounting system",
      "Back offices reconciling records between two or more systems every week or month",
      "Operations leads who need a trail showing what was checked, by what, and who approved it",
    ],
    examples: [
      {
        title: "Document processing",
        body: "Reads invoices, purchase orders, contracts, or forms, extracts the fields you specify, validates them against vendor and contract records, and queues anything that does not match.",
      },
      {
        title: "Reconciliation",
        body: "Matches transactions or records across systems, explains each break with the evidence from both sides, and proposes the adjustment for a reviewer to accept or reject.",
      },
      {
        title: "Recurring reporting",
        body: "Assembles the monthly or quarterly operating report from source systems, ties totals back to the ledger, and drafts the variance notes.",
      },
      {
        title: "Exception queue management",
        body: "Triages incoming exceptions, gathers the context a person needs to decide, and tracks each one to resolution so nothing ages silently.",
      },
    ],
    faqs: [
      {
        question: "What drives the cost of an operations agent?",
        answer:
          "Document and transaction volume, the variety of formats, the number of systems to reconcile, whether the agent posts entries or only proposes them, and the audit evidence you need retained. We scope those first.",
      },
      {
        question: "How does it handle documents it cannot read reliably?",
        answer:
          "It does not guess. Low-confidence fields, unknown formats, and conflicting values go to the exception queue with the reason and the source attached, and a person decides.",
      },
      {
        question: "Will it post entries to our ERP or accounting system?",
        answer:
          "Only if you scope that write path, and only after the review gate you set. Many teams start with the agent proposing entries and a person posting them, then widen the write scope once they trust the output.",
      },
      {
        question: "Can we keep using our existing ERP and document store?",
        answer:
          "Yes. The agent sits above them and the system of record stays authoritative. We do not ask you to migrate data into a new platform.",
      },
      ownershipFaq,
      maintenanceFaq,
    ],
    related: ["custom-ai-agents", "enterprise-ai-automation", "custom-software-development"],
    connectors: ["custom-mcp-servers", "done-for-you-claude-connectors"],
    proof: [
      "Portfolio data connector for an investment firm",
      "Connect-once business memory over MCP",
    ],
  },
  {
    slug: "enterprise-ai-automation",
    navLabel: "Enterprise AI automation",
    primaryKeyword: "enterprise AI automation",
    metaTitle: "Enterprise AI Automation with Permissions, Audit, and Rollback",
    metaDescription:
      "Enterprise AI automation across multiple systems, built with SSO and OAuth, per-user permissions, review gates, a full audit trail, and rollback for every write.",
    eyebrow: "Enterprise AI automation",
    title:
      "Enterprise AI automation across your systems, with the permissions and audit trail security will ask for.",
    lede: "Automating one task is easy. Automating work that crosses identity, CRM, ERP, and document systems is a controls problem. We design the permissions, approvals, logging, and rollback first, then the agent.",
    audience: [
      "IT, security, and operations leaders asked to approve AI automation that touches several systems",
      "Organizations with SSO, role-based access, and change-control rules any automation must respect",
      "Teams replacing brittle scripts or RPA bots with agents that explain what they did",
    ],
    examples: [
      {
        title: "Cross-system workflow orchestration",
        body: "An agent that reads a request, gathers data from several systems under the requesting user's permissions, prepares the change, and routes it to the right approver.",
      },
      {
        title: "Per-user access through SSO and OAuth",
        body: "Users sign in through your identity provider, and every tool call runs with a delegated, scoped token, so the agent can never see more than the person asking.",
      },
      {
        title: "Audited writes with rollback",
        body: "Every write is confirmed, idempotent, and logged with its before state, so a change can be reviewed and reversed rather than reconstructed.",
      },
      {
        title: "Governed AI access for staff",
        body: "A single governed endpoint that lets Claude or ChatGPT reach approved company data with rate limits, size limits, and per-tool scopes.",
      },
    ],
    faqs: [
      {
        question: "What drives the cost of enterprise AI automation?",
        answer:
          "The number of systems and identity integrations, the volume of work, how many write paths need approval and rollback, data residency requirements, and the evidence your security and audit teams need. We scope each before pricing.",
      },
      {
        question: "How does it fit our identity and access setup?",
        answer:
          "We integrate with your identity provider where it supports standard protocols such as OAuth or OIDC, and map agent permissions to existing roles. Where a system cannot delegate user permissions, we say so and design a narrower service account with logging.",
      },
      {
        question: "How do review gates and rollback work?",
        answer:
          "Each write path is listed in the scope with its approver. The agent prepares the change, the approver accepts or rejects it, and the change is applied with an idempotency key and a record of the prior state so it can be reversed.",
      },
      {
        question: "Build or buy for enterprise automation?",
        answer:
          "Platforms are a good fit when your workflows match their connectors. A custom build is worth it when you need controls a platform cannot express, systems it does not reach, or code your team can inspect and own.",
      },
      securityFaq,
      ownershipFaq,
      maintenanceFaq,
    ],
    related: ["custom-ai-agents", "ai-operations-agents", "custom-software-development"],
    connectors: ["custom-mcp-servers", "custom-claude-connectors"],
    proof: [
      "Governed context server for a research platform",
      "Multi-tenant MCP for isolated customer deployments",
      "Portfolio data connector for an investment firm",
    ],
  },
  {
    slug: "custom-software-development",
    navLabel: "Custom software development",
    primaryKeyword: "custom software development",
    metaTitle: "Custom Software Development for AI Workflows, Apps, and APIs",
    metaDescription:
      "Custom software development around AI workflows: internal apps, review queues, APIs, and integrations that connect your systems and let people approve what agents produce.",
    eyebrow: "Custom software development",
    title:
      "Custom software development for the apps, APIs, and integrations around your AI workflows.",
    lede: "An agent is only useful if people can review its work and systems can exchange data reliably. We build the surrounding software: review queues, internal apps, APIs, and integrations, as production code with tests.",
    audience: [
      "Companies whose AI workflow needs a review screen, an approval queue, or a dashboard that no product provides",
      "Teams with systems that do not talk to each other and need a maintained integration rather than another export",
      "Businesses that want an API or MCP layer over their own data so AI tools can use it safely",
    ],
    examples: [
      {
        title: "Review and approval apps",
        body: "A focused internal app where reviewers see the agent's output, the sources behind it, and the exception reason, then approve, edit, or reject with one action.",
      },
      {
        title: "APIs over your data",
        body: "A versioned API that exposes the records your workflows need with scopes, limits, and logging, instead of shared database credentials.",
      },
      {
        title: "System integrations",
        body: "Maintained syncs and webhooks between CRM, ERP, document stores, and databases, with conflict handling that surfaces disagreements instead of overwriting them.",
      },
      {
        title: "Per-customer deployments",
        body: "One codebase deployed separately per customer or business unit, with isolated databases and configuration-driven behavior.",
      },
    ],
    faqs: [
      {
        question: "What determines the cost of custom software?",
        answer:
          "The number of screens and user roles, the systems it integrates with, data volume, hosting and isolation requirements, and how much testing and audit evidence is needed. We write a scope and price it after the scoping call.",
      },
      {
        question: "Should we build custom software or buy a product?",
        answer:
          "Buy if a product fits; maintaining custom software is a real commitment. Build when the workflow is specific to how you operate, when you need to own the code, or when integration costs with a product would exceed building the piece you need.",
      },
      {
        question: "What stack do you build in?",
        answer:
          "We usually build in TypeScript with Postgres, deployed to your cloud or ours, and fit your existing stack when there is one. Stack choices are agreed in the scope.",
      },
      ownershipFaq,
      securityFaq,
      maintenanceFaq,
    ],
    related: ["custom-ai-agents", "enterprise-ai-automation", "ai-operations-agents"],
    connectors: ["custom-mcp-servers", "custom-chatgpt-plugins"],
    proof: [
      "Multi-tenant MCP for isolated customer deployments",
      "Connect-once business memory over MCP",
      "Governed context server for a research platform",
    ],
  },
];

export function getCustomBuild(slug: CustomBuildSlug): CustomBuild {
  const build = customBuilds.find((item) => item.slug === slug);
  if (!build) throw new Error(`Unknown custom build: ${slug}`);
  return build;
}
