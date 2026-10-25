import type { GuideSlug } from "@/lib/connectors/guides";

export type ConnectorServiceSlug =
  | "custom-claude-connectors"
  | "done-for-you-claude-connectors"
  | "custom-mcp-servers"
  | "custom-chatgpt-plugins";

export type ConnectorFaq = { question: string; answer: string };
export type ConnectorPoint = { title: string; body: string };

export type ConnectorService = {
  slug: ConnectorServiceSlug;
  navLabel: string;
  /** The search phrase this page is built to answer. */
  primaryKeyword: string;
  /** Page title without the brand; the root layout appends "| Prestyj". */
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lede: string;
  answer: { question: string; paragraphs: readonly string[] };
  deliverables: readonly string[];
  useCases: readonly ConnectorPoint[];
  process: readonly ConnectorPoint[];
  comparison: {
    heading: string;
    intro: string;
    columns: readonly [string, string, string];
    rows: readonly { label: string; values: readonly [string, string, string] }[];
  };
  faqs: readonly ConnectorFaq[];
  related: readonly ConnectorServiceSlug[];
  guides: readonly GuideSlug[];
};

export const connectorServices: readonly ConnectorService[] = [
  {
    slug: "custom-claude-connectors",
    navLabel: "Custom Claude connectors",
    primaryKeyword: "custom Claude connectors",
    metaTitle: "Custom Claude Connectors for Your Business Systems",
    metaDescription:
      "Prestyj builds custom Claude connectors: secure remote MCP servers that let Claude read and act on your CRM, ERP, database, documents, and internal APIs, with OAuth and per-user permissions.",
    eyebrow: "Custom Claude connectors",
    title: "Custom Claude connectors for the systems your business actually runs.",
    lede: "The Claude directory covers the popular SaaS apps. Your ERP, your database, your internal API, and the spreadsheet that runs operations usually have no connector at all. We build one, host it, and roll it out to your Claude Team or Enterprise workspace.",
    answer: {
      question: "What is a custom Claude connector?",
      paragraphs: [
        "A custom Claude connector is a remote MCP (Model Context Protocol) server that Claude reaches over HTTPS. It publishes a small set of tools, such as look up a customer, pull an invoice, or search a contract folder, and Claude calls those tools when a question needs them.",
        "Claude connects to custom connectors from Anthropic's cloud, not from your laptop, so the server needs a stable public HTTPS endpoint and real authentication. On Team and Enterprise plans an owner adds the connector once in Organization settings, then each person signs in with their own account, so Claude only sees what that person is allowed to see.",
        "Building the connector is the easy part. The work that decides whether it is useful is choosing the right tools, writing descriptions Claude picks correctly, keeping answers small enough to fit the context window, and making sure nobody can reach data they should not.",
      ],
    },
    deliverables: [
      "A remote MCP server on a stable HTTPS endpoint, ready to add in Claude",
      "OAuth sign-in so every user connects with their own permissions",
      "Tools designed around the questions your team asks, read-only by default",
      "Server instructions and tool descriptions tuned so Claude picks the right tool",
      "Rollout to your Claude Team or Enterprise workspace, with a short guide for users",
      "Logging, rate limits, and alerts so you can see what the connector is doing",
    ],
    useCases: [
      {
        title: "Your ERP or accounting system",
        body: "Ask Claude for open invoices over 60 days, a vendor's payment history, or the variance behind a budget line, and get figures pulled live from the system of record rather than a stale export.",
      },
      {
        title: "A private database or data warehouse",
        body: "Give Claude a governed, read-only view of the tables that matter, with query time limits and row caps, instead of handing out database credentials.",
      },
      {
        title: "Internal APIs and line-of-business apps",
        body: "Wrap the API your developers already built so sales, support, and operations can use it in plain language without a new dashboard.",
      },
      {
        title: "Document stores with real permissions",
        body: "Search SharePoint, Box, or a file share by keyword and return the document name and link, limited to the folders each person can already open.",
      },
    ],
    process: [
      {
        title: "Scope the questions",
        body: "We start from ten or twenty real questions your team wants Claude to answer and the systems that hold the answers. That list decides the tools, not the other way round.",
      },
      {
        title: "Design a narrow tool surface",
        body: "Each tool does one job with a strict input schema, clear read or write labeling, and bounded results. Fewer, sharper tools beat a mirror of every API endpoint.",
      },
      {
        title: "Build, secure, and test",
        body: "We build the server on the official MCP SDK, add OAuth and server-side authorization, and test it against real questions, including the ones it must refuse.",
      },
      {
        title: "Roll out and support",
        body: "We deploy, add the connector to your workspace, walk your team through it, and keep it running as Claude, the protocol, and your systems change.",
      },
    ],
    comparison: {
      heading: "Directory connector, no-code bridge, or custom connector",
      intro:
        "Use the directory when it covers your app. A custom build earns its cost when the system is private, the permissions are strict, or the answers need your business logic.",
      columns: ["Directory connector", "No-code MCP bridge", "Custom connector from Prestyj"],
      rows: [
        {
          label: "Works with private or in-house systems",
          values: ["Rarely", "If the system has a usable API", "Yes"],
        },
        {
          label: "Tools shaped around your questions",
          values: ["Vendor's choice", "Mirrors the API", "Designed per workflow"],
        },
        {
          label: "Per-user permissions",
          values: [
            "Vendor dependent",
            "Often one shared key",
            "OAuth per user, enforced server-side",
          ],
        },
        {
          label: "Business rules in answers",
          values: ["No", "No", "Yes, in code and tests"],
        },
        {
          label: "Who maintains it",
          values: ["The vendor", "You", "Prestyj, under a support plan"],
        },
      ],
    },
    faqs: [
      {
        question: "Which Claude plans support custom connectors?",
        answer:
          "Anthropic documents custom connectors on Free, Pro, Max, Team, and Enterprise plans, with Free limited to one custom connector. On Team and Enterprise only owners, or roles with the right permission, can add a connector for the organization. Plan rules change, so we confirm them for your workspace during scoping.",
      },
      {
        question: "Does a custom connector work in Claude Desktop and Claude Code?",
        answer:
          "Yes. A connector added to your Claude account is available on the web and in Claude Desktop, and Claude Code can use the same server. We test the connector in each client your team uses, because each one handles long tool lists and server instructions a little differently.",
      },
      {
        question: "Can Claude change data through a connector, or only read it?",
        answer:
          "Both are possible. We ship read-only first. Write tools are added only where you ask for them, are labeled as writes so Claude asks before using them, and can require an explicit confirmation and an idempotency key so a retried request never runs twice.",
      },
      {
        question: "How is our data kept safe?",
        answer:
          "Each user signs in with OAuth, and the server checks their permissions on every call, so Claude can only reach what that person could already see. We never pass database credentials to the model, cap result sizes and query time, and log tool calls without logging secrets.",
      },
      {
        question: "Do we need to submit the connector to Anthropic's directory?",
        answer:
          "No. A private connector for your own workspace is added by URL and never needs directory review. If you want a public listing for your customers, we can prepare the server and the submission materials for Anthropic's directory requirements.",
      },
      {
        question: "How much does a custom Claude connector cost?",
        answer:
          "Each connector is quoted at a fixed scope after a short scoping call, based on the number of systems, the tools needed, and whether you want us to host and maintain it. Book a call and we will give you a written scope and price.",
      },
    ],
    related: ["done-for-you-claude-connectors", "custom-mcp-servers", "custom-chatgpt-plugins"],
    guides: [
      "custom-claude-connector-guide",
      "mcp-server-security-checklist",
      "claude-custom-connector-not-working",
      "add-custom-connector-claude-team-enterprise",
      "oauth-for-mcp-servers",
    ],
  },
  {
    slug: "done-for-you-claude-connectors",
    navLabel: "Done-for-you Claude connectors",
    primaryKeyword: "done for you Claude connectors",
    metaTitle: "Done-for-You Claude Connectors, Built and Managed",
    metaDescription:
      "Done-for-you Claude connectors from Prestyj: we scope, build, host, secure, and maintain the connector that links Claude to your business systems. You bring the questions, we handle the rest.",
    eyebrow: "Done-for-you Claude connectors",
    title: "Done-for-you Claude connectors. You bring the questions, we run the rest.",
    lede: "Most teams do not want an MCP project. They want Claude to know their customers, orders, files, and numbers by next month. We take the whole job: scoping, build, hosting, security, rollout, and upkeep.",
    answer: {
      question: "What does done-for-you mean here?",
      paragraphs: [
        "Done-for-you means your team never touches code, servers, or OAuth settings. We scope the connector with you, build it, host it on infrastructure we manage, add it to your Claude workspace, and keep it working when Claude, the protocol, or your source systems change.",
        "Your part is small and specific: name the questions Claude should answer, give us access to the systems behind them through a service account or API key you control, and name one person who approves what goes live.",
        "Everything we build is yours. You get the source code, the deployment notes, and the right to move it in-house at any time.",
      ],
    },
    deliverables: [
      "A scoping session that turns your team's questions into a written tool plan",
      "The connector, built, tested, and hosted by Prestyj",
      "Workspace setup in Claude Team or Enterprise, plus user sign-in and a one-page guide",
      "Monitoring, error alerts, and updates as Claude and the MCP specification change",
      "A monthly change window for new tools and small adjustments",
      "Full source code and handover notes, owned by you",
    ],
    useCases: [
      {
        title: "Operations teams without developers",
        body: "Get Claude answering questions from your job management, inventory, or booking system without hiring an engineer to learn MCP.",
      },
      {
        title: "Leaders who need it live this quarter",
        body: "Skip the evaluation of SDKs, hosting, and auth patterns. We have built these servers before and start from tested patterns.",
      },
      {
        title: "Firms with strict data rules",
        body: "Keep sensitive systems read-only, scope every tool to a permission, and keep a log of each call for your compliance review.",
      },
      {
        title: "Companies already paying for Claude seats",
        body: "Turn the Claude plan you already have into something that knows your business, instead of a chat window people paste into.",
      },
    ],
    process: [
      {
        title: "Week one: scope",
        body: "A working session with the people who will use Claude. We leave with the list of questions, the systems, the permission model, and a fixed written scope.",
      },
      {
        title: "Build and test",
        body: "We build against a sandbox or read-only account first, then test with your real questions and show you the answers before anyone else sees them.",
      },
      {
        title: "Launch",
        body: "We add the connector to your workspace, switch it on for a pilot group, and adjust tool descriptions based on how Claude actually uses them.",
      },
      {
        title: "Run",
        body: "We host it, watch it, and handle changes. When a source system updates its API or a new Claude feature lands, we update the connector.",
      },
    ],
    comparison: {
      heading: "Doing it yourself versus done-for-you",
      intro:
        "Building an MCP server is a weekend project. Running one your whole company relies on is an ongoing job. This is where the difference shows.",
      columns: ["Do it yourself", "Freelancer build", "Done-for-you from Prestyj"],
      rows: [
        {
          label: "Scoping around real questions",
          values: ["Your time", "Usually skipped", "Included"],
        },
        {
          label: "Hosting and uptime",
          values: ["You", "Handed back to you", "Managed by Prestyj"],
        },
        {
          label: "OAuth and per-user access",
          values: ["You learn it", "Varies", "Included and tested"],
        },
        {
          label: "Updates when Claude or your systems change",
          values: ["You", "New contract", "Included in support"],
        },
        {
          label: "Source code ownership",
          values: ["Yours", "Check the contract", "Yours"],
        },
      ],
    },
    faqs: [
      {
        question: "What do you need from us to start?",
        answer:
          "A list of the questions you want Claude to answer, an owner who can approve scope, and access to the source systems through an account you control, ideally read-only to start. We tell you exactly which permissions each tool needs.",
      },
      {
        question: "Who hosts the connector?",
        answer:
          "By default we host and monitor it for you. If your security team requires it to run in your own cloud account, we deploy it there and hand over the runbook.",
      },
      {
        question: "Do we own what you build?",
        answer:
          "Yes. You own the code and configuration. If you stop working with us, we hand over the repository and deployment notes so your team or another vendor can take over.",
      },
      {
        question: "Can the same connector work in ChatGPT too?",
        answer:
          "Usually yes. Claude connectors and ChatGPT plugins both use MCP, so one server can serve both. We test it in each client, because tool limits and admin controls differ.",
      },
      {
        question: "What happens when Anthropic changes how connectors work?",
        answer:
          "That is part of the service. We track changes to Claude and the MCP specification and update the connector so your team does not notice the change.",
      },
      {
        question: "How is pricing structured?",
        answer:
          "A fixed fee for the initial build, quoted after scoping, and a monthly support fee that covers hosting, monitoring, and a set number of changes. You get both in writing before work starts.",
      },
    ],
    related: ["custom-claude-connectors", "custom-mcp-servers", "custom-chatgpt-plugins"],
    guides: [
      "build-vs-buy-mcp-server",
      "custom-claude-connector-guide",
      "custom-mcp-server-cost",
      "add-custom-connector-claude-team-enterprise",
    ],
  },
  {
    slug: "custom-mcp-servers",
    navLabel: "Custom MCP servers",
    primaryKeyword: "custom MCP server for businesses",
    metaTitle: "Custom MCP Server Development for Businesses",
    metaDescription:
      "Custom MCP server development for businesses. Prestyj designs, builds, secures, and runs Model Context Protocol servers that connect Claude, ChatGPT, and AI agents to your systems.",
    eyebrow: "Custom MCP servers for businesses",
    title: "Custom MCP servers for businesses that need AI to work on real systems.",
    lede: "One well-built MCP server gives Claude, ChatGPT, Cursor, and your own agents the same governed access to your data and actions. We design it around your workflows, secure it like any other production API, and run it.",
    answer: {
      question: "What is an MCP server, in business terms?",
      paragraphs: [
        "MCP, the Model Context Protocol, is an open standard Anthropic introduced in November 2024 for connecting AI applications to tools and data. An MCP server sits in front of one or more of your systems and publishes what an AI may do there as named tools, readable resources, and reusable prompts.",
        "For a business, the server is the control point. It decides which records an AI can read, which actions it can take, how much it can pull at once, and who it is acting for. Every AI client that speaks MCP, including Claude and ChatGPT, then uses the same rules.",
        "A custom MCP server is one built for your systems and workflows rather than a generic wrapper. It encodes your business logic, such as which source wins when two systems disagree, so the AI does not have to guess.",
      ],
    },
    deliverables: [
      "MCP server architecture mapped to your systems, users, and permission model",
      "Tools, resources, and prompts with strict schemas and read or write annotations",
      "Remote deployment over Streamable HTTP, or local stdio for desktop use",
      "OAuth 2.1 authorization with scopes, plus tenant isolation where you need it",
      "Automated tests for tool selection, permissions, limits, and failure cases",
      "Hosting, observability, and a support plan, or a clean handover to your team",
    ],
    useCases: [
      {
        title: "One governed layer for many AI tools",
        body: "Expose your CRM, ERP, and document stores once, and let Claude, ChatGPT, and internal agents share the same access rules and audit log.",
      },
      {
        title: "Reconciling data across systems",
        body: "When two systems disagree on a number, the server can show both values with their sources, or apply your rule for which one wins, instead of leaving it to the model.",
      },
      {
        title: "Customer-facing AI features",
        body: "Give your own product an MCP endpoint so customers can connect it to their Claude or ChatGPT accounts, with per-customer isolation.",
      },
      {
        title: "Agent workflows that take action",
        body: "Let an agent create a ticket, update a record, or start a job with explicit confirmation, idempotency, and a full record of what it did.",
      },
    ],
    process: [
      {
        title: "Architecture",
        body: "We map systems, users, permissions, and the questions and actions in scope, then choose remote or local transport, auth model, and hosting.",
      },
      {
        title: "Tool design",
        body: "We design the smallest tool set that answers the workload, and test that a model picks the right tool for each real question.",
      },
      {
        title: "Hardening",
        body: "Server-side authorization on every call, input validation, result and time limits, rate limits, and logs that never capture secrets.",
      },
      {
        title: "Operate",
        body: "Deployment, monitoring, protocol upgrades, and new tools as your needs grow, with tests that guard every change.",
      },
    ],
    comparison: {
      heading: "Ways to give AI access to your systems",
      intro:
        "Teams usually try exports and one-off API scripts first. An MCP server is what replaces them once more than one person or tool depends on the access.",
      columns: ["File uploads and exports", "One-off API integration", "Custom MCP server"],
      rows: [
        {
          label: "Data freshness",
          values: ["Stale as soon as exported", "Live", "Live"],
        },
        {
          label: "Works across AI clients",
          values: ["Manual per tool", "One app only", "Any MCP client"],
        },
        {
          label: "Per-user permissions",
          values: ["None", "Custom work", "Built in"],
        },
        {
          label: "Audit of what the AI accessed",
          values: ["None", "Custom work", "Every tool call logged"],
        },
        {
          label: "Effort to add the next use case",
          values: ["Repeat by hand", "New integration", "Add a tool"],
        },
      ],
    },
    faqs: [
      {
        question: "Which AI clients can use a custom MCP server?",
        answer:
          "Any client that supports MCP, including Claude, Claude Desktop, Claude Code, ChatGPT, Cursor, and agent frameworks built on the official SDKs. Remote servers reach web clients; local stdio servers suit desktop and developer tools.",
      },
      {
        question: "What systems can you connect?",
        answer:
          "Anything with an API or a database, including CRMs, ERPs, accounting systems, data warehouses, document stores, ticketing tools, and your own internal services. Where a system has no API, we can sync it into a governed store the server reads from.",
      },
      {
        question: "Remote or local MCP server: which do we need?",
        answer:
          "Remote, for almost every business case. A remote server runs on a public HTTPS endpoint with OAuth, so web, desktop, and mobile clients can all use it and access is managed centrally. Local servers make sense for developer tooling on one machine.",
      },
      {
        question: "How do you stop the AI from seeing data it should not?",
        answer:
          "Authorization happens in the server, never in the prompt. Each call is checked against the signed-in user's scopes, tenant and access rules come from the token rather than from anything the model sends, and denied data is reported as withheld rather than guessed.",
      },
      {
        question: "Can you build an MCP server for our SaaS product?",
        answer:
          "Yes. We build customer-facing MCP endpoints with per-customer isolation, OAuth, rate limits, and the tool annotations that the Claude and ChatGPT directories require for submission.",
      },
      {
        question: "How long does a custom MCP server take?",
        answer:
          "It depends on the number of systems and how clean their APIs are. We give a written timeline after scoping. A single read-only system with a good API is much faster than several systems that need reconciling.",
      },
    ],
    related: [
      "custom-claude-connectors",
      "custom-chatgpt-plugins",
      "done-for-you-claude-connectors",
    ],
    guides: [
      "mcp-server-security-checklist",
      "build-vs-buy-mcp-server",
      "custom-mcp-server-cost",
      "mcp-vs-api-vs-zapier",
      "zapier-mcp-vs-composio-vs-custom-mcp",
      "remote-vs-local-mcp-servers",
      "oauth-for-mcp-servers",
      "safe-write-actions-ai-connectors",
    ],
  },
  {
    slug: "custom-chatgpt-plugins",
    navLabel: "Custom ChatGPT plugins",
    primaryKeyword: "custom ChatGPT plugins for business",
    metaTitle: "Custom ChatGPT Plugins for Business Systems",
    metaDescription:
      "Custom ChatGPT plugins for business: Prestyj builds MCP-based plugins that connect ChatGPT Business and Enterprise to your internal data and tools, with admin controls and per-user access.",
    eyebrow: "Custom ChatGPT plugins for business",
    title: "Custom ChatGPT plugins that connect your workspace to your business.",
    lede: "OpenAI now lets companies add their own plugins to ChatGPT, built on MCP. We build the plugin for your internal systems, set it up for your workspace admins, and make sure each person only reaches what they already can.",
    answer: {
      question: "What is a custom ChatGPT plugin?",
      paragraphs: [
        "A custom ChatGPT plugin connects ChatGPT to a system your company runs, such as an internal database, a knowledge base, or a line-of-business app. OpenAI's plugins, previously called connectors and apps, are built on the Model Context Protocol, so a custom plugin is an MCP server that ChatGPT calls when a question needs it.",
        "On Business and Enterprise workspaces, admins decide which plugins are available, who can use them, and what actions they may take. Users then summon the plugin in a conversation and ChatGPT answers with live data instead of whatever was pasted in.",
        "Because the plugin is an MCP server, the same build can usually serve Claude as a custom connector too. That keeps your access rules in one place no matter which assistant your team prefers.",
      ],
    },
    deliverables: [
      "An MCP server packaged as a custom ChatGPT plugin for your workspace",
      "Search and fetch tools so the plugin also works with company knowledge",
      "Admin setup in ChatGPT workspace settings, with role-based availability",
      "Per-user sign-in so ChatGPT only sees what each person can see",
      "Clear disclosure of the data and actions the plugin can reach",
      "Optional Claude connector from the same server, tested in both",
    ],
    useCases: [
      {
        title: "Company knowledge from private systems",
        body: "Bring wikis, policies, and records that ChatGPT's built-in plugins cannot reach into the same company knowledge search your team already uses.",
      },
      {
        title: "Sales and account questions",
        body: "Let reps ask about an account's orders, tickets, and contract terms across systems that have no off-the-shelf plugin.",
      },
      {
        title: "Finance and operations lookups",
        body: "Answer questions about invoices, stock levels, schedules, or job status from the system of record, with the source named in the answer.",
      },
      {
        title: "Actions with approval",
        body: "Create a record or start a process from a conversation, with write actions labeled so ChatGPT asks before it acts.",
      },
    ],
    process: [
      {
        title: "Scope the plugin",
        body: "We confirm your ChatGPT plan and admin settings, list the questions and actions, and agree what the plugin will disclose to users.",
      },
      {
        title: "Build on MCP",
        body: "We build the MCP server, with search and fetch tools for knowledge use and narrow tools for everything else, and test it in your ChatGPT workspace before anyone relies on it.",
      },
      {
        title: "Publish to your workspace",
        body: "We work with your admin to add and publish the plugin, set who can use it, and check it against your data rules.",
      },
      {
        title: "Support it",
        body: "We host and maintain it, and keep it current as OpenAI changes how plugins are configured and reviewed.",
      },
    ],
    comparison: {
      heading: "Custom GPT, built-in plugin, or custom plugin",
      intro:
        "A Custom GPT is a set of instructions and uploaded files. A plugin is a live connection. A custom plugin is that live connection to a system no vendor has covered.",
      columns: ["Custom GPT", "Built-in plugin", "Custom plugin from Prestyj"],
      rows: [
        {
          label: "Live data",
          values: ["No, uploaded files", "Yes, for that vendor's app", "Yes, for your systems"],
        },
        {
          label: "Private or in-house systems",
          values: ["No", "Rarely", "Yes"],
        },
        {
          label: "Per-user permissions",
          values: ["No", "Vendor dependent", "Yes, enforced server-side"],
        },
        {
          label: "Also usable in Claude",
          values: ["No", "Separate setup", "Same MCP server"],
        },
        {
          label: "Admin control",
          values: ["Sharing settings", "Workspace settings", "Workspace settings"],
        },
      ],
    },
    faqs: [
      {
        question: "Are ChatGPT plugins the same as the old 2023 plugins?",
        answer:
          "No. The original ChatGPT plugins were retired in 2024. Today's plugins, which OpenAI previously called connectors and apps, are built on the Model Context Protocol and managed by workspace admins. That is what we build.",
      },
      {
        question: "Which ChatGPT plans can use a custom plugin?",
        answer:
          "OpenAI supports custom MCP-based plugins on Business, Enterprise, and Edu workspaces, subject to admin permissions, with more limited options on individual plans. Plan rules change often, so we check yours during scoping.",
      },
      {
        question: "Is a custom ChatGPT plugin the same as a custom GPT?",
        answer:
          "No. A custom GPT bundles instructions and files you uploaded. A plugin is a live connection to a system, so answers reflect current data and respect each user's access.",
      },
      {
        question: "Can one build work in both ChatGPT and Claude?",
        answer:
          "Usually yes, because both use MCP. We test in both clients and adjust where they differ, such as admin setup, tool annotations, and how many tools each handles well.",
      },
      {
        question: "Does OpenAI train on data accessed through our plugin?",
        answer:
          "OpenAI states that on Business, Enterprise, and Edu plans, data is not used to train its models by default. We also design the plugin to return only what each question needs.",
      },
      {
        question: "Can you list our plugin publicly for our customers?",
        answer:
          "Yes. If you want a public listing, we build to OpenAI's submission requirements, including tool annotations, test cases, and a demo account, and help you through review.",
      },
    ],
    related: ["custom-mcp-servers", "custom-claude-connectors", "done-for-you-claude-connectors"],
    guides: [
      "claude-connectors-vs-chatgpt-plugins",
      "mcp-server-security-checklist",
      "build-custom-chatgpt-plugin",
      "safe-write-actions-ai-connectors",
    ],
  },
];

export function getConnectorService(slug: ConnectorServiceSlug): ConnectorService {
  const service = connectorServices.find((item) => item.slug === slug);
  if (!service) throw new Error(`Unknown connector service: ${slug}`);
  return service;
}

export const connectorServicePath = (slug: ConnectorServiceSlug): `/${string}` => `/${slug}`;
