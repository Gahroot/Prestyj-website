export type GuideSlug =
  | "custom-claude-connector-guide"
  | "claude-connectors-vs-chatgpt-plugins"
  | "mcp-server-security-checklist"
  | "build-vs-buy-mcp-server"
  | "custom-mcp-server-cost"
  | "claude-custom-connector-not-working"
  | "add-custom-connector-claude-team-enterprise"
  | "build-custom-chatgpt-plugin"
  | "mcp-vs-api-vs-zapier"
  | "zapier-mcp-vs-composio-vs-custom-mcp"
  | "oauth-for-mcp-servers"
  | "remote-vs-local-mcp-servers"
  | "safe-write-actions-ai-connectors";

export type GuideSection = {
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export type ConnectorGuide = {
  slug: GuideSlug;
  /** Page title without the brand; the root layout appends "| Prestyj". */
  metaTitle: string;
  title: string;
  description: string;
  published: string;
  modified: string;
  summary: readonly string[];
  sections: readonly GuideSection[];
  sources: readonly { label: string; url: string }[];
};

const anthropicCustomConnectors = {
  label: "Anthropic: Get started with custom connectors using remote MCP",
  url: "https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp",
};
const anthropicConnectors = {
  label: "Anthropic: Use connectors to extend Claude's capabilities",
  url: "https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities",
};
const openAiPlugins = {
  label: "OpenAI: Plugins in ChatGPT",
  url: "https://chatgpt.com/features/plugins/",
};
const openAiBusinessNotes = {
  label: "OpenAI: ChatGPT Business release notes",
  url: "https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes",
};
const mcpSpec = {
  label: "Model Context Protocol specification",
  url: "https://modelcontextprotocol.io/specification",
};
const mcpAuth = {
  label: "Model Context Protocol: Authorization",
  url: "https://modelcontextprotocol.io/specification/draft/basic/authorization",
};

const anthropicIpAddresses = {
  label: "Anthropic: IP addresses",
  url: "https://platform.claude.com/docs/en/api/ip-addresses",
};
const openAiCustomMcp = {
  label: "OpenAI Help: Connecting custom MCP servers in ChatGPT",
  url: "https://help.openai.com/en/articles/12584461-developer-mode-apps-and-full-mcp-connectors-in-chatgpt-beta",
};
const openAiConnectTest = {
  label: "OpenAI: Connect and test your plugin",
  url: "https://developers.openai.com/plugins/deploy/connect-chatgpt",
};
const openAiAuth = {
  label: "OpenAI: Authentication for plugin MCP servers",
  url: "https://developers.openai.com/plugins/build/auth",
};
const openAiMcpServer = {
  label: "OpenAI: Build an MCP server",
  url: "https://developers.openai.com/plugins/build/mcp-server",
};
const openAiTunnel = {
  label: "OpenAI: Secure MCP Tunnel",
  url: "https://developers.openai.com/api/docs/guides/secure-mcp-tunnels",
};
const mcpTransports = {
  label: "Model Context Protocol: Transports",
  url: "https://modelcontextprotocol.io/specification/2025-06-18/basic/transports",
};
const mcpTools = {
  label: "Model Context Protocol: Tools",
  url: "https://modelcontextprotocol.io/specification/2025-11-25/server/tools",
};
const mcpSecurity = {
  label: "Model Context Protocol: Security best practices",
  url: "https://modelcontextprotocol.io/specification/2025-11-25/basic/security_best_practices",
};
const zapierMcp = {
  label: "Zapier MCP",
  url: "https://zapier.com/mcp",
};
const zapierMcpUsage = {
  label: "Zapier MCP docs: Usage and billing",
  url: "https://docs.zapier.com/mcp/overview/usage",
};
const composioHome = {
  label: "Composio",
  url: "https://composio.dev",
};
const composioConnect = {
  label: "Composio docs: Composio Connect",
  url: "https://docs.composio.dev/docs/composio-connect",
};

export const connectorGuides: readonly ConnectorGuide[] = [
  {
    slug: "custom-claude-connector-guide",
    metaTitle: "Custom Claude Connectors: A Business Guide",
    title: "Custom Claude connectors: what they are and how businesses use them",
    description:
      "A plain-language guide to custom Claude connectors for business: how they work, which plans support them, how rollout works on Team and Enterprise, and what separates a useful connector from a demo.",
    published: "2026-10-23",
    modified: "2026-10-23",
    summary: [
      "A custom Claude connector is a remote MCP server that Claude reaches over HTTPS.",
      "Claude calls it from Anthropic's cloud, so it needs a public endpoint and real authentication.",
      "On Team and Enterprise, an owner adds it once and each person signs in with their own account.",
      "Usefulness depends on tool design and permissions far more than on the protocol.",
    ],
    sections: [
      {
        heading: "Directory connectors and custom connectors",
        paragraphs: [
          "Claude has two kinds of connectors. Directory connectors are prebuilt and reviewed by Anthropic, and cover popular apps such as Google Drive, Slack, Notion, HubSpot, and Stripe. Custom connectors are any remote MCP server you add yourself by URL.",
          "Both use the same technology, the Model Context Protocol. The difference is who built the server and who is responsible for it. If your system has a directory connector that does what you need, use it. A custom connector is for everything else: the in-house database, the ERP with no listing, the internal API, or a popular app where you need tighter permissions or your own business rules.",
        ],
      },
      {
        heading: "How a custom connector works",
        paragraphs: [
          "The connector is a web service that speaks MCP at an HTTPS address, commonly ending in /mcp. When Claude starts a conversation with the connector enabled, it asks the server what tools it offers. Each tool has a name, a description, and an input schema. When a question needs one, Claude calls the tool, the server runs it against your system, and the result comes back into the conversation.",
          "Anthropic's documentation is explicit that Claude connects to custom connectors from Anthropic's cloud infrastructure, even when someone is using Claude Desktop. That is why the server cannot sit only on your office network: it needs a reachable endpoint, or an approved network path, and it needs to authenticate every request.",
        ],
      },
      {
        heading: "Plans and rollout",
        paragraphs: [
          "Anthropic documents custom connectors on Free, Pro, Max, Team, and Enterprise plans, with the Free plan limited to one custom connector. On Team and Enterprise, only owners, or roles granted the right permission, can add a connector for the organization, under Organization settings and then Connectors.",
          "Adding a connector to the organization does not give anyone access by itself. Each member connects and authenticates individually, and then enables the connector in the conversations where they want it. When the connector uses per-user OAuth, Claude can only reach what that person could already reach in the source system. When it uses one shared credential, everyone reaches whatever that credential can, which is rarely what a business wants.",
        ],
      },
      {
        heading: "What makes a connector useful instead of a demo",
        paragraphs: [
          "Most connectors that disappoint are thin wrappers that expose every API endpoint as a tool. Claude then has dozens of similar tools to choose from, picks the wrong one, or pulls far more data than the question needs.",
        ],
        bullets: [
          "Start from real questions. Ten or twenty questions your team asks every week decide the tool list.",
          "Keep tools narrow. One job per tool, a strict schema, and a description that says when to use it and when not to.",
          "Bound every result. Cap rows, document counts, and response size so answers fit the context window.",
          "Separate reads from writes. Label write tools so Claude asks before using them, and ship read-only first.",
          "Write server instructions. A short set of rules sent at connection time, such as how to treat missing data, steers Claude more than any prompt a user writes. Keep it short: Claude Code truncates long instructions at 2,048 characters.",
          "Test with questions the connector must refuse, not only the ones it should answer.",
        ],
      },
      {
        heading: "When to build, and when to buy",
        paragraphs: [
          "If you have developers with time and only one system to connect, building in-house is reasonable; the official SDKs are good. If the connector will be used by a whole team, touches sensitive data, or spans several systems, the ongoing work of hosting, authorization, and keeping up with protocol changes is usually the bigger cost. That is the work a done-for-you connector covers.",
        ],
      },
    ],
    sources: [anthropicCustomConnectors, anthropicConnectors, mcpSpec],
  },
  {
    slug: "claude-connectors-vs-chatgpt-plugins",
    metaTitle: "Claude Connectors vs ChatGPT Plugins for Business",
    title: "Claude connectors vs ChatGPT plugins: one MCP server, two assistants",
    description:
      "How Claude custom connectors and ChatGPT custom plugins compare for business use, what they share through MCP, where admin controls and plan rules differ, and how to serve both from one server.",
    published: "2026-10-23",
    modified: "2026-10-23",
    summary: [
      "Claude connectors and ChatGPT plugins are both built on the Model Context Protocol.",
      "One well-designed MCP server can usually serve both assistants.",
      "The differences are in admin setup, plan rules, and how each client handles tools.",
      "Keep access rules in the server so they hold no matter which assistant asks.",
    ],
    sections: [
      {
        heading: "The short answer",
        paragraphs: [
          "Claude calls them connectors. OpenAI now calls them plugins, after earlier names of connectors and apps. Under both names, a custom integration is an MCP server: a web service that publishes tools the assistant can call. That shared foundation is the most useful fact for a business, because it means you do not have to build twice.",
          "These are not the original ChatGPT plugins from 2023, which were retired in 2024. Today's plugins are MCP-based and managed by workspace admins.",
        ],
      },
      {
        heading: "Where they are the same",
        paragraphs: [
          "Both assistants discover the tools a server offers, read their descriptions and schemas, and call them when a question needs them. Both support remote servers over HTTPS with OAuth sign-in, and both respect read and write labeling so the assistant can ask before taking an action.",
        ],
        bullets: [
          "Same protocol and the same server code",
          "Per-user sign-in so each person sees only their own data",
          "Tool annotations that mark read-only, destructive, and open-world tools",
          "The same need for narrow tools, bounded results, and clear descriptions",
        ],
      },
      {
        heading: "Where they differ",
        paragraphs: [
          "Claude: Anthropic documents custom connectors on every plan, including one on Free. On Team and Enterprise, an owner adds the connector in Organization settings, and members connect individually.",
          "ChatGPT: OpenAI supports custom MCP plugins on Business, Enterprise, and Edu workspaces, subject to admin permissions. In the current Plugins experience you add one from ChatGPT Plugins as a custom MCP server, without turning on Developer Mode first. Admins choose which plugins are available and to whom, and OpenAI offers compliance logs of tool calls. Custom connectors with search and fetch tools can also feed ChatGPT's company knowledge feature.",
          "Both vendors change these rules often. Check the current documentation for your plan before you commit to a rollout date.",
        ],
      },
      {
        heading: "Building one server for both",
        paragraphs: [
          "Design the tools once around your workflows, keep authorization in the server rather than in prompts, and then test in each client. In practice the adjustments are small: tool descriptions that one model reads more literally than the other, a search and fetch pair for ChatGPT's knowledge features, and the slightly different admin steps to publish in each workspace.",
          "If you plan a public listing for your customers, both directories ask for explicit tool annotations, test cases, and a demo account, so it is worth building to those requirements from the start.",
        ],
      },
    ],
    sources: [anthropicCustomConnectors, openAiPlugins, openAiBusinessNotes, mcpSpec],
  },
  {
    slug: "mcp-server-security-checklist",
    metaTitle: "MCP Server Security Checklist for Businesses",
    title: "MCP server security checklist for businesses",
    description:
      "A practical security checklist for businesses deploying a custom MCP server for Claude or ChatGPT: authentication, server-side authorization, tool design, limits, logging, and testing.",
    published: "2026-10-23",
    modified: "2026-10-23",
    summary: [
      "Authorization belongs in the server, checked on every call, never in the prompt.",
      "Tenant and access rules should come from the verified token, not from model input.",
      "Bound every tool: rows, time, payload size, and cost.",
      "Treat tool results as data, never as instructions.",
    ],
    sections: [
      {
        heading: "Why MCP servers need their own security review",
        paragraphs: [
          "An MCP server is a production API whose caller is a language model acting for a person. The model can be steered by the content it reads, it can retry, and it can call tools in combinations nobody planned. The server has to be safe even when the model is wrong.",
        ],
      },
      {
        heading: "Identity and authorization",
        paragraphs: [],
        bullets: [
          "Use OAuth with per-user tokens for remote servers. Avoid one shared credential that gives everyone the same access.",
          "Validate the token on every request, including its audience, so a token issued for another service is rejected.",
          "Derive tenant, account, and access groups from the verified token. Reject any tenant or permission fields the model supplies.",
          "Check authorization for every resource the tool touches, server-side, on every call.",
          "Report denied data as withheld. Never fall back to a lower-trust source to fill the gap.",
        ],
      },
      {
        heading: "Tool design",
        paragraphs: [],
        bullets: [
          "Ship read-only first. Add write tools one at a time, only where asked.",
          "Annotate every tool as read-only, destructive, or open-world so clients can ask before acting.",
          "Require explicit confirmation and an idempotency key for writes, so a retry never runs twice.",
          "Validate inputs with strict schemas and reject unknown fields.",
          "Never accept raw SQL or file paths from the model unless the server enforces read-only access and limits.",
        ],
      },
      {
        heading: "Limits and data minimization",
        paragraphs: [],
        bullets: [
          "Cap rows, documents, and response size for every tool.",
          "Set execution time limits and return a clear timeout so the model can retry narrower.",
          "Rate limit per user and per token.",
          "Return only the fields a question needs. Leave out internal IDs and personal data that are not required.",
        ],
      },
      {
        heading: "Prompt injection and untrusted content",
        paragraphs: [
          "Documents, emails, and records a tool returns can contain text written to manipulate the model. Mark tool output as data in your server instructions, keep write tools behind confirmation, and never let content returned by one tool silently trigger a write in another.",
        ],
      },
      {
        heading: "Logging and testing",
        paragraphs: [],
        bullets: [
          "Log tool name, user, outcome, and latency for every call. Never log tokens or secrets.",
          "Write negative tests: wrong tenant, expired token, missing scope, oversized request.",
          "Test tool selection with real questions so the model picks the right tool.",
          "Re-run the suite on every change and every protocol upgrade.",
        ],
      },
    ],
    sources: [mcpAuth, mcpSpec, anthropicConnectors],
  },
  {
    slug: "build-vs-buy-mcp-server",
    metaTitle: "Build vs Buy a Custom MCP Server",
    title: "Build vs buy: should your business build its own MCP server?",
    description:
      "How to decide between building a custom MCP server in-house, using a no-code MCP bridge, or hiring a done-for-you build, with the real costs that show up after launch.",
    published: "2026-10-23",
    modified: "2026-10-23",
    summary: [
      "A prototype MCP server is quick to build. Running one a team depends on is ongoing work.",
      "No-code bridges suit clean APIs and low-risk data.",
      "In-house builds suit teams with developers who will own it long term.",
      "Done-for-you suits teams that want it live and maintained without a new engineering project.",
    ],
    sections: [
      {
        heading: "The three options",
        paragraphs: [
          "No-code bridge: a hosted product turns an existing API into MCP tools. It is the fastest start when the system has a clean API and the data is low risk, but tools tend to mirror the API, and access often runs through one shared key.",
          "In-house build: your developers use the official MCP SDKs. You get full control and no vendor dependency, at the cost of your team learning OAuth for MCP, tool design, hosting, and keeping up with the specification.",
          "Done-for-you: a specialist scopes, builds, hosts, and maintains the server for you. You trade some control for speed and for not adding another system to your team's on-call list.",
        ],
      },
      {
        heading: "The costs that show up after launch",
        paragraphs: ["The first version is rarely the expensive part. These are:"],
        bullets: [
          "Hosting, uptime, and certificates for a public HTTPS endpoint",
          "OAuth setup and per-user permission checks that pass a security review",
          "Tool descriptions retuned as people find questions the server answers badly",
          "Protocol and client changes from Anthropic and OpenAI",
          "Source system API changes, rate limits, and outages",
          "New tools as more teams ask for access",
        ],
      },
      {
        heading: "A simple way to decide",
        paragraphs: [
          "Choose a no-code bridge if the API is clean, the data is not sensitive, and a shared credential is acceptable. Build in-house if you have developers who want to own an MCP server for years. Choose done-for-you if the connector touches sensitive data, spans more than one system, needs per-user access, or simply has to be live this quarter without pulling engineers off other work.",
          "Whichever you pick, insist on owning the code and configuration, on read-only defaults, and on server-side authorization. Those three decide whether you can trust and keep what you built.",
        ],
      },
    ],
    sources: [mcpSpec, mcpAuth, anthropicCustomConnectors],
  },
  {
    slug: "custom-mcp-server-cost",
    metaTitle: "How Much Does a Custom MCP Server Cost?",
    title: "How much does a custom MCP server cost? The drivers that decide the price",
    description:
      "What actually drives the cost of a custom MCP server for a business: the number of systems, the auth model, write actions, hosting, and maintenance, plus how usage-priced bridges are billed.",
    published: "2026-10-23",
    modified: "2026-10-23",
    summary: [
      "There is no standard price for a custom MCP server. Scope sets the cost.",
      "The biggest drivers are how many systems it touches, per-user auth, and write actions.",
      "Hosting and maintenance are ongoing costs, not one-off line items.",
      "Usage-priced bridges such as Zapier MCP bill per tool call, so compare total cost at your volume.",
    ],
    sections: [
      {
        heading: "Why there is no list price",
        paragraphs: [
          "Searching for the price of a custom MCP server turns up numbers that are hard to compare, because the phrase covers very different jobs. A server that lets one person read one clean API from their laptop and a server that lets a whole company read and update three systems through Claude and ChatGPT are both custom MCP servers. The protocol is the same. The work is not.",
          "The useful question is not what a server costs but what your server needs to do. Once you can answer the five questions below, any builder, in-house or external, can give you a real estimate, and you can compare quotes on the same scope.",
        ],
      },
      {
        heading: "Driver 1: how many systems, and how clean their APIs are",
        paragraphs: [
          "Every source system adds its own authentication, its own rate limits, its own data model, and its own failure modes. One system with a modern, documented API is the cheapest case. Several systems that describe the same customer or order differently cost more, because the server has to decide which source wins when they disagree, or show both values with their sources.",
          "Systems with no API at all, such as an old database or a shared spreadsheet, need a governed read path or a sync into a store the server can query. That is often the single largest line in a quote.",
        ],
        bullets: [
          "Count the systems, not the features you want.",
          "Ask which ones have a usable API and who owns access to it.",
          "Note any place where two systems hold the same data with different values.",
        ],
      },
      {
        heading: "Driver 2: the auth model",
        paragraphs: [
          "The cheapest setup is one shared credential, such as an API key that every request uses. Anthropic's documentation is clear about the trade-off: a connector that uses a shared credential gives everyone who uses it that credential's access. For low-risk data that may be acceptable. For anything with customer, financial, or HR data, it usually is not.",
          "Per-user access means OAuth. The MCP authorization specification is built on OAuth 2.1, and requires the server to validate that each access token was issued for it. Doing this properly, connecting it to your identity provider, and checking each user's permissions in the source system on every call is real engineering work. It is also the work that gets a connector through a security review.",
        ],
      },
      {
        heading: "Driver 3: read-only or write actions",
        paragraphs: [
          "A read-only server answers questions. A server with write actions creates tickets, updates records, or sends messages. Writes cost more to build because each one needs strict input validation, clear labeling so the assistant asks before using it, protection against a retried request running twice, and tests for the cases where it must refuse.",
          "Both Anthropic and OpenAI let tools be marked by behavior. OpenAI's plugin documentation describes readOnlyHint, destructiveHint, and openWorldHint annotations, and says they help ChatGPT choose confirmation behavior but do not replace authorization, validation, or confirmation in your server. Budget for that server-side work on every write tool.",
        ],
      },
      {
        heading: "Driver 4: hosting and network path",
        paragraphs: [
          "Claude reaches custom connectors from Anthropic's cloud, not from the user's device, so the server must be reachable from the public internet or from Anthropic's published IP ranges through your firewall. ChatGPT needs a public HTTPS endpoint or OpenAI's Secure MCP Tunnel. Either way you are running a production web service with certificates, uptime monitoring, logging, and someone on call.",
          "Hosting in a vendor's environment is usually cheaper to start. Hosting inside your own cloud account, often required by security teams for sensitive data, adds deployment and handover work.",
        ],
      },
      {
        heading: "Driver 5: maintenance after launch",
        paragraphs: [
          "The first version is rarely the expensive part over a year. Source system APIs change, Claude and ChatGPT change how they handle tools and admin settings, the MCP specification is revised, and people ask for new tools once the first ones work. Ask any builder what is included after launch and how changes are priced.",
          "For usage-priced bridges, model your volume. Zapier's documentation says Zapier MCP runs on your existing Zapier plan with no separate MCP billing, and each successful tool call uses two tasks from your plan's allowance. A question that searches and then updates ten records is eleven tool calls. At low volume that is cheap; at team scale, compare it with a fixed-scope build.",
        ],
      },
      {
        heading: "How to get a quote you can compare",
        paragraphs: [
          "Two quotes for the same server can differ widely because they assume different things. Before you compare numbers, check what each one includes, so you are not choosing a cheaper build that leaves the expensive parts to your team.",
          "Write down the ten or twenty questions people will ask, the systems that hold the answers, whether each person should see only their own data, which actions should be allowed, and where the server must run. Send the same list to every option you are weighing. Prestyj quotes custom MCP servers this way: a fixed written scope after a short scoping call, with hosting and maintenance priced separately so you can see both.",
        ],
        bullets: [
          "Does the price include OAuth with per-user permissions, or a shared key?",
          "Which AI clients will it be tested in: Claude, ChatGPT, or both?",
          "Who hosts it, and who is alerted when it goes down at night?",
          "How many write tools are included, and how is each one confirmed and tested?",
          "What happens when a source system changes its API or the MCP specification is revised?",
          "Do you own the code and configuration, and can you move it in-house later?",
          "How are new tools priced after launch?",
        ],
      },
    ],
    sources: [
      anthropicCustomConnectors,
      anthropicConnectors,
      mcpAuth,
      openAiMcpServer,
      openAiTunnel,
      zapierMcpUsage,
    ],
  },
  {
    slug: "claude-custom-connector-not-working",
    metaTitle: "Claude Custom Connector Not Working? Fixes",
    title: "Claude custom connector not working? A troubleshooting checklist",
    description:
      "Why a Claude custom connector fails to add, connect, or show its tools, and how to fix it: plan and role limits, network reachability from Anthropic's cloud, OAuth settings, and tool problems.",
    published: "2026-10-23",
    modified: "2026-10-23",
    summary: [
      "No Add option usually means a role limit on Team or Enterprise, not a bug.",
      "Claude connects from Anthropic's cloud, so a server only reachable on your VPN will fail.",
      "Most sign-in failures come from the authentication or OAuth client settings chosen when adding it.",
      "If tools are missing, check the per-conversation toggle and the server's own tool list.",
    ],
    sections: [
      {
        heading: "Start by finding where it fails",
        paragraphs: [
          "A custom connector can fail at four points: you cannot add it, it will not connect, sign-in fails, or it connects but Claude does not use its tools. Each has different causes, so first note exactly where it stops and what message you see. Then work through the matching section below.",
        ],
      },
      {
        heading: "You cannot find the option to add a custom connector",
        paragraphs: [
          "On individual Pro and Max plans, Anthropic's steps are Customize, then Connectors, then the add button and Add custom connector. On Team and Enterprise plans, members do not add custom connectors there. Anthropic documents that only Owners and Primary Owners can add them on Team plans, and on Enterprise plans Owners, Primary Owners, and people with a custom role that includes Manage access to Libraries. Owners add them under Organization settings, then Connectors, then Add, Custom, and Web.",
          "If you are a member, ask an owner to add the connector for the organization. Once it is added, you will find it under Customize, then Connectors, usually with a Custom label, and click Connect. Also check your plan: Anthropic says custom connectors are available on Free, Pro, Max, Team, and Enterprise, with Free limited to one, so a Free account that already has one cannot add another.",
        ],
      },
      {
        heading: "It will not connect, even though the URL works for you",
        paragraphs: [
          "This is the most common cause of confusion. Anthropic's documentation states that Claude connects to a remote MCP server from Anthropic's cloud infrastructure rather than from your device, and that this applies to claude.ai, Claude Desktop, Cowork, and the mobile apps. A server on a private corporate network, behind a VPN, or blocked by a firewall will not connect, even if you can open it from your own machine.",
        ],
        bullets: [
          "Make sure the server has a public HTTPS address with a valid certificate.",
          "If it must stay on a private network, allowlist Anthropic's published IP ranges in your firewall.",
          "Use the full MCP endpoint path the server expects, often ending in /mcp.",
          "Confirm the server speaks a remote transport. Local servers configured in claude_desktop_config.json are a separate mechanism and are not available in claude.ai or Cowork.",
          "Check the server's logs for the request. If nothing arrives, the problem is the network path, not Claude.",
        ],
      },
      {
        heading: "Sign-in or OAuth errors",
        paragraphs: [
          "When adding a connector, Claude detects authentication settings and lets you change them. Under Authentication you choose Sign in now, Sign in when needed, or No sign in. Under OAuth client you choose Claude's published identity, automatic registration, or your own OAuth client. Under Request headers you can add a fixed credential such as an API key if the server does not use OAuth.",
          "A mismatch here is the usual cause of sign-in failures. If the server expects OAuth but you chose No sign in, requests are rejected. If your authorization server does not support automatic registration, choose your own OAuth client and enter its details. If it uses an API key, put the key in Request headers instead.",
          "On the server side, the MCP authorization specification requires servers to validate that access tokens were issued for them. A token issued for a different audience should be rejected, which is correct behavior, so make sure your identity provider issues tokens for the MCP server's own address. Note also that Anthropic says editing a custom connector means removing it and adding it again with the new details.",
        ],
      },
      {
        heading: "Connected, but the tools do not show or are not used",
        paragraphs: [
          "Connectors are enabled per conversation. Anthropic's steps are the plus button at the lower left of the chat, then Connectors, where each connector has a toggle. Within a connector, tools can also be disabled from the Search and tools menu. Check both before debugging the server.",
        ],
        bullets: [
          "Confirm the server returns its tools when listed. The MCP Inspector tool can list and call them directly.",
          "Check that tool names and descriptions are clear. Claude chooses tools from their descriptions, and vague ones get skipped.",
          "On Team and Enterprise, owners can disable specific tool calls that render interactive connectors in Organization settings, so check whether a tool was turned off there.",
          "In Research, Anthropic notes that advanced research cannot invoke tools from local MCP servers, and that Claude may call connector tools many times without further approval.",
        ],
      },
      {
        heading: "A quick test sequence",
        paragraphs: [
          "When you cannot tell which layer is failing, test from the outside in. Each step rules out one cause, so you stop guessing and know which person needs to fix it.",
        ],
        bullets: [
          "From a machine outside your network, open the server URL. If it does not respond, fix the network path or allowlist first.",
          "Connect with the MCP Inspector and list the tools. If that fails, the server or transport is the problem, not Claude.",
          "Call one tool from the Inspector with a valid token. If it fails, check token validation and the audience your identity provider issues.",
          "Add the connector in Claude with the matching authentication settings, then connect as a regular member, not only as an owner.",
          "Enable it in a new conversation and ask a question that clearly needs one tool. If Claude does not call it, rewrite that tool's description.",
          "Keep a short log of each fix. Most teams hit the same two or three problems again when they add their next connector.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "If the network path is open, authentication settings match, and the server still returns errors, the problem is in the server code: transport handling, token validation, or tool schemas. That is where Prestyj's custom Claude connector work usually starts when a team brings us a connector that almost works. We fix the server, then test it in each Claude client your team uses.",
        ],
      },
    ],
    sources: [
      anthropicCustomConnectors,
      anthropicConnectors,
      anthropicIpAddresses,
      mcpAuth,
      openAiConnectTest,
    ],
  },
  {
    slug: "add-custom-connector-claude-team-enterprise",
    metaTitle: "Add a Custom Connector to Claude Team or Enterprise",
    title: "How to add a custom connector to Claude Team or Enterprise",
    description:
      "Step-by-step admin guide to adding a custom connector to a Claude Team or Enterprise organization: who can add it, the settings to choose, how members connect, and a rollout checklist.",
    published: "2026-10-23",
    modified: "2026-10-23",
    summary: [
      "Only owners, or Enterprise roles with the right permission, can add a custom connector.",
      "An owner adds it once in Organization settings, then each member connects individually.",
      "The authentication choice decides whether people see their own data or a shared view.",
      "Pilot with a small group, then roll out with a one-page guide.",
    ],
    sections: [
      {
        heading: "Who can add a connector",
        paragraphs: [
          "Anthropic documents that anyone can build and host a connector, but adding one to an organization is restricted. On Team plans only Owners and Primary Owners can add custom connectors. On Enterprise plans, Owners, Primary Owners, and people with a custom role that includes Manage access to Libraries can add them.",
          "Adding a connector to the organization does not switch it on for everyone. Members connect to it and enable it themselves. Anthropic describes this as the way Claude stays limited to the tools and data each user can already access, unless the connector uses a shared credential such as an API key.",
        ],
      },
      {
        heading: "Before you start",
        paragraphs: ["Have these ready before an owner opens the settings page:"],
        bullets: [
          "The remote MCP server URL, on a public HTTPS address Claude can reach from Anthropic's cloud. If it sits on a private network, allowlist Anthropic's IP ranges first.",
          "The authentication method the server uses: OAuth, an API key or other fixed credential, or none.",
          "If OAuth, whether your authorization server accepts Claude's published identity, automatic registration, or needs its own OAuth client ID and secret.",
          "A clear name users will recognize in their connector list.",
          "A short list of what the connector can do, including any write actions.",
        ],
      },
      {
        heading: "Admin steps",
        paragraphs: [
          "These are Anthropic's documented steps for Team and Enterprise owners at the time of writing:",
        ],
        bullets: [
          "Go to Organization settings, then Connectors.",
          "Click Add, hover over Custom, and select Web.",
          "Enter the connector name users will see.",
          "Enter the remote MCP server URL and click Continue.",
          "Review the authentication settings Claude detected, adjust them if needed, and click Continue.",
          "Under Authentication, choose Sign in now, Sign in when needed, or No sign in.",
          "Under OAuth client, choose Use Claude's published identity (Anthropic's recommended option), Register automatically, or Use your own OAuth client. This setting is hidden if you chose No sign in.",
          "Under Request headers, add any fixed credential the server needs, such as an API key.",
          "Click Add.",
        ],
      },
      {
        heading: "Per-user authentication versus a shared credential",
        paragraphs: [
          "This is the most important choice in the whole setup. With OAuth sign-in, each member authenticates as themselves, and Anthropic notes that Claude inherits each person's permissions from the connected service. If someone cannot open a file or record in the source system, the connector cannot reach it from Claude either.",
          "With a fixed credential in Request headers, Anthropic is explicit that everyone who uses the connector reaches the service with that same credential. If you must use one, create a credential limited to what every member should be allowed to see, and never use an administrator key.",
        ],
      },
      {
        heading: "What members do",
        paragraphs: [
          "Members can disconnect the connector at any time from their own settings, and owners can remove it for the whole organization under Organization settings, then Connectors. Tell users both, so they know access is under control.",
          "Once the connector is added, members go to Customize, then Connectors, find the connector (it usually carries a Custom label), and click Connect to sign in. In a chat, they enable it with the plus button, then Connectors, using the toggle for each conversation.",
          "If the connector URL is on a domain that matches a Connectors Directory listing, Anthropic says it may show that service's name and branding instead of the Custom label. It is still your connector and uses the exact URL the owner entered.",
        ],
      },
      {
        heading: "Rollout checklist",
        paragraphs: [],
        bullets: [
          "Test with an owner account and a regular member account, and confirm each sees only their own data.",
          "Start with read-only tools. Add write tools only after a pilot group has used it.",
          "Pick five to ten pilot users with real questions, and collect the questions Claude answered badly.",
          "Tell users how to review tool approval prompts, and to choose Allow always only for tools they trust to run unsupervised.",
          "If people use Research, disable write tools for it, since Anthropic notes Research can call connector tools without further approval.",
          "Write a one-page guide: what the connector does, how to connect, and who to ask.",
          "Remember that editing a connector means removing it and adding it again, so plan URL or auth changes for a quiet window.",
        ],
      },
      {
        heading: "Common mistakes, and having it done for you",
        paragraphs: [
          "Most rollout problems come from setup choices that seemed harmless at the time. A few are worth checking before the connector reaches the whole organization.",
          "Adding the connector takes minutes. The work around it, choosing the auth model, testing permissions with real accounts, and running the pilot, takes longer. With Prestyj's done-for-you Claude connectors, we handle that rollout in your workspace along with the server itself, and leave your team with the user guide.",
        ],
        bullets: [
          "Testing only as an owner. Owners often have wider access in the source system, so the connector looks better than it will for members.",
          "Using an administrator API key in Request headers. Every member then has administrator reach through Claude.",
          "Pointing at a server only reachable on the office network. Claude calls from Anthropic's cloud, so it will fail for everyone.",
          "Launching with write tools switched on before anyone has seen how Claude uses the read tools.",
          "Giving the connector a technical name members do not recognize, so nobody turns it on.",
          "Skipping the user guide. People who do not know a connector exists, or when to enable it, will not use it.",
        ],
      },
    ],
    sources: [anthropicCustomConnectors, anthropicConnectors, anthropicIpAddresses],
  },
  {
    slug: "build-custom-chatgpt-plugin",
    metaTitle: "How to Build a Custom ChatGPT Plugin for Your Company",
    title: "How to build a custom ChatGPT plugin for your company",
    description:
      "How companies build a custom ChatGPT plugin today: an MCP server, OpenAI's plugin docs, which ChatGPT plans allow custom MCP servers, admin publishing and RBAC, and testing before rollout.",
    published: "2026-10-23",
    modified: "2026-10-23",
    summary: [
      "A custom ChatGPT plugin for a company is built around an MCP server.",
      "OpenAI documents custom MCP connections for Business, Enterprise, and Edu workspaces on ChatGPT web.",
      "Admins and owners publish plugins to the workspace; Enterprise and Edu add role-based access.",
      "Test tool selection with real requests before anyone else sees it.",
    ],
    sections: [
      {
        heading: "What OpenAI calls it today",
        paragraphs: [
          "OpenAI's naming has moved several times, so it is worth being precise. The current developer documentation is titled Plugins, and describes building and publishing plugins with skills, MCP servers, and optional UI. The pages at the older Apps SDK address now lead to these Plugins docs. In the OpenAI Help Center, the related admin page refers to custom MCP server connections and MCP apps, and the admin console still has a Manage Legacy Apps entry under Plugins.",
          "For a company that wants ChatGPT to reach internal systems, the part that matters is the MCP server. OpenAI's docs describe the MCP server as what gives a plugin tools and access to external systems. Skills and a custom interface are optional extras. These are not the original 2023 ChatGPT plugins.",
        ],
      },
      {
        heading: "Which plans allow it",
        paragraphs: [
          "OpenAI's Help Center says custom MCP server connections and full MCP support are available for ChatGPT Business and Enterprise/Edu customers on ChatGPT web. Permissions differ by plan:",
        ],
        bullets: [
          "Business: only admins and owners can create and publish plugins for custom MCP servers.",
          "Enterprise and Edu: admins and owners can create and test connections, and can use role-based access control to let selected members create connections. Only admins and owners can publish to the workspace.",
          "The workspace permission to look for is called Create plugins with MCPs.",
          "OpenAI's plugins page says Enterprise and Edu administrators must enable plugins in workspace settings before users can connect them.",
        ],
      },
      {
        heading: "Step 1: design the tools",
        paragraphs: [
          "Start from what people need to get done, not from your API. OpenAI's planning docs recommend an inventory of use cases and a focused tool surface built from it. Each tool should do one job with a strict input schema and a description that says when to use it.",
          "Label each tool honestly. OpenAI documents three annotations: readOnlyHint only when the tool cannot change state, destructiveHint when a tool can cause outcomes that are hard to reverse, and openWorldHint when it reaches the public internet or open-ended external entities. OpenAI states these help ChatGPT choose confirmation behavior but do not replace authorization, validation, or confirmation in your server.",
          "If you want the plugin to feed ChatGPT's company knowledge feature, OpenAI says to implement the standard search and fetch tool schemas and mark other read-only tools as read-only.",
        ],
      },
      {
        heading: "Step 2: build, authenticate, and host",
        paragraphs: [
          "Build the server with an official MCP SDK and serve it over streamable HTTP, typically at /mcp. For anything that exposes customer-specific data or write actions, OpenAI's authentication guide says to authenticate users, using an OAuth 2.1 flow that follows the MCP authorization specification. Your server hosts protected resource metadata, your identity provider publishes OAuth metadata, and ChatGPT registers as a client using a client ID metadata document, dynamic registration, or a predefined client.",
          "For hosting, ChatGPT needs a public HTTPS endpoint or a Secure MCP Tunnel. OpenAI describes the tunnel as an outbound-only connection from inside your network, so a private server can be used without opening inbound firewall ports. It supports private connections, not public directory submission.",
        ],
      },
      {
        heading: "Step 3: connect, test, and publish",
        paragraphs: [
          "OpenAI's current steps: go to ChatGPT Plugins, select the plus button, then Add custom MCP server. Enter a name and description, choose a public URL or a tunnel, configure authentication, accept the risk warning, select Create as a plugin, and review the tools ChatGPT discovered. The Help Center notes you no longer need to turn on Developer Mode first in the current Plugins experience.",
          "Then test. OpenAI recommends an evaluation set with direct requests, indirect requests for the same goal, follow-ups that reuse earlier results, write actions that need confirmation, and requests that should not call any tool. Record the tool chosen, the arguments, and the result, and rerun the set whenever you change names, descriptions, or schemas.",
          "When it is ready, an admin publishes it to the workspace and chooses which roles get access. OpenAI says workspace-published plugins stay inside your workspace and are not added to the public Plugins Directory. For oversight, OpenAI's plugins page describes compliance logs covering tool calls and files accessed.",
        ],
      },
      {
        heading: "Common mistakes to avoid",
        paragraphs: [
          "The first version of a company plugin usually fails in predictable ways. Most of them are design problems, not ChatGPT problems, and are cheaper to avoid than to fix after rollout.",
        ],
        bullets: [
          "Mirroring every API endpoint as a tool. ChatGPT then has to choose among many similar tools and often picks the wrong one.",
          "Using one shared service account, so every employee sees the same data regardless of their role.",
          "Marking a tool read-only when it can change state. OpenAI says readOnlyHint should be true only when the tool cannot.",
          "Returning huge results. Cap rows and fields so answers stay focused.",
          "Testing only happy paths. Include requests the plugin should refuse, and follow-ups that reuse earlier results.",
          "Publishing to the whole workspace at once instead of to a pilot role first.",
        ],
      },
      {
        heading: "Build it once for ChatGPT and Claude",
        paragraphs: [
          "Because the plugin is an MCP server, the same server can usually serve Claude as a custom connector too. Keep access rules in the server, and test in each assistant. Prestyj's custom ChatGPT plugin work follows these steps for your internal systems, including the admin setup and role-based rollout in your workspace.",
        ],
      },
    ],
    sources: [
      openAiCustomMcp,
      openAiPlugins,
      openAiMcpServer,
      openAiAuth,
      openAiConnectTest,
      openAiTunnel,
    ],
  },
  {
    slug: "mcp-vs-api-vs-zapier",
    metaTitle: "MCP vs API vs Zapier: When You Need an MCP Server",
    title: "MCP vs API vs Zapier: when does a business need an MCP server?",
    description:
      "A plain comparison of an MCP server, a direct API integration, and Zapier for business AI use, with clear signs for when each one is the right tool.",
    published: "2026-10-23",
    modified: "2026-10-23",
    summary: [
      "An API is how software talks to your system. MCP is how an AI assistant does.",
      "Zapier is best for fixed, repeatable workflows, and now also offers its own MCP server.",
      "You need an MCP server when people want to ask open questions of your systems from Claude or ChatGPT.",
      "A custom MCP server usually sits on top of your existing APIs, not in place of them.",
    ],
    sections: [
      {
        heading: "Three different jobs",
        paragraphs: [
          "A simple way to tell them apart is to ask who decides what happens next. With an API integration, a developer decided in advance. With a Zap, the workflow designer decided in advance and an event starts it. With an MCP server, the assistant decides during the conversation, within the limits the server sets. That last point is the reason an MCP server needs careful tool design and permission checks: it is the only one of the three where the next step is chosen at run time.",
          "These three are often compared as if they compete, but they answer different needs. An API is the door into a system for other software. A workflow tool like Zapier runs a defined sequence when something happens. An MCP server lets an AI assistant decide, in the moment, which of a set of tools to use to answer a person's question or complete a request.",
          "Most businesses end up using all three. The decision is which one should carry a particular job.",
        ],
      },
      {
        heading: "What an API gives you, and what it does not",
        paragraphs: [
          "A direct API integration is code that calls a system in a fixed way, for a known purpose. It is the right choice when one application needs one thing done the same way every time, such as syncing new orders into accounting.",
          "An API on its own is not something Claude or ChatGPT can use. Anthropic's documentation describes connectors as remote MCP servers, and OpenAI's plugin docs describe the MCP server as what gives a plugin tools and access to external systems. To let an assistant use your API, something has to present it as MCP tools with names, descriptions, and input schemas. That something is an MCP server.",
        ],
      },
      {
        heading: "Where Zapier fits",
        paragraphs: [
          "Zapier's MCP docs also matter for budgeting. Zapier says MCP usage comes out of your existing plan's task allowance, with two tasks for each successful tool call, so an assistant that searches and then updates several records uses several calls. That is easy to predict for occasional use and worth modeling before a whole team relies on it.",
          "Zapier's classic strength is triggered workflows: when this happens in one app, do that in another. For a repeatable process with a clear trigger, a Zap is simpler and more predictable than asking an AI to do it each time.",
          "Zapier now also offers Zapier MCP, a hosted MCP server that its site says connects AI clients such as Claude, ChatGPT, and Cursor to its catalog of 9,000+ apps, with credentials managed by Zapier and app and action level access controls. Zapier describes MCP as where work starts and Zaps as how it keeps running. So the real question is often not Zapier or MCP, but Zapier's MCP server or your own.",
        ],
      },
      {
        heading: "Signs you need an MCP server",
        paragraphs: [],
        bullets: [
          "People want to ask open questions of your data from Claude or ChatGPT, not run one fixed workflow.",
          "The system is private or in-house, so no directory connector or bridge covers it.",
          "Each person should see only what they can already see in the source system.",
          "Answers need your business rules, such as which system wins when two disagree.",
          "You want one governed layer that several AI clients share, with one audit log.",
        ],
      },
      {
        heading: "Signs you do not",
        paragraphs: [],
        bullets: [
          "The task is the same every time and starts from a clear event. Use a workflow tool or an API integration.",
          "The app already has a directory connector in Claude or a plugin in ChatGPT that does what you need.",
          "The apps are mainstream SaaS, the data is low risk, and a hosted bridge with managed credentials meets your access rules.",
          "Nobody will ask questions of the system from an AI assistant at all.",
        ],
      },
      {
        heading: "A worked example",
        paragraphs: [
          "Take a company whose team wants to ask questions like which customers have overdue invoices and open support tickets. The invoices sit in an accounting system and the tickets in a help desk.",
          "A direct API integration could build a fixed report that answers exactly that question, and nothing else. A Zap could post a weekly list to a chat channel when invoices pass a due date. Both are useful and predictable.",
          "An MCP server lets someone ask that question, then follow up with which of those customers renewed last year, or draft a reminder for the largest one, without a developer building each variation. If both systems are mainstream apps in a catalog, a hosted MCP bridge may be enough. If the accounting system is private, or each account manager should see only their own customers, that points to a custom MCP server built on the systems' APIs.",
        ],
      },
      {
        heading: "How they work together",
        paragraphs: [
          "A custom MCP server is usually built on your existing APIs. The server calls the API, applies authorization and limits, and presents a short list of well-described tools to the assistant. Where a step should run unattended on a schedule or trigger, it can stay in Zapier or your own code.",
          "If your use case matches the first list, Prestyj's custom MCP server service designs that layer around your systems and the questions your team asks, and keeps it running as Claude, ChatGPT, and the protocol change.",
        ],
      },
    ],
    sources: [anthropicConnectors, anthropicCustomConnectors, openAiMcpServer, zapierMcp, mcpSpec],
  },
  {
    slug: "zapier-mcp-vs-composio-vs-custom-mcp",
    metaTitle: "Zapier MCP vs Composio vs a Custom MCP Server",
    title: "Zapier MCP vs Composio vs a custom MCP server: a fair comparison",
    description:
      "How Zapier MCP, Composio, and a custom-built MCP server compare for businesses connecting Claude or ChatGPT to their apps: coverage, auth, controls, pricing model, and fit.",
    published: "2026-10-23",
    modified: "2026-10-23",
    summary: [
      "Zapier MCP and Composio are hosted catalogs covering thousands of mainstream apps.",
      "Both manage app credentials and use discovery tools so the AI finds actions on demand.",
      "A custom MCP server suits private systems, strict permissions, and business rules.",
      "Many companies use a hosted catalog for SaaS apps and a custom server for core systems.",
    ],
    sections: [
      {
        heading: "What each option is",
        paragraphs: [
          "Zapier MCP is a hosted MCP server from Zapier. Its site says it lets Claude, ChatGPT, Cursor, and other AI clients take action across 9,000+ apps, with managed auth and permissions you control. Zapier's docs describe one endpoint over Streamable HTTP, with OAuth inside the MCP client or a connection token for code.",
          "Composio is a developer platform for giving agents tools and managed authentication. Its documentation describes access to 1,600+ apps with OAuth, API keys, and tokens scoped to each end user. For existing MCP clients, Composio Connect is a single MCP server URL, and its site also lists an MCP gateway and enterprise governance controls.",
          "A custom MCP server is one built for your own systems, by your team or a builder, using the official MCP SDKs. It exposes only the tools you design, and runs where you choose.",
        ],
      },
      {
        heading: "How Zapier MCP works",
        paragraphs: [
          "Rather than loading every action into the conversation, Zapier says its MCP server gives the agent discovery tools to search for the capability it needs, then run it. When no standard action fits, Zapier describes Code Actions, where the agent writes and runs code to reach an internal API or reshape data. Workflows that worked can be saved as Skills, or deployed as Zaps.",
          "For control, Zapier lists credentials kept in its managed layer rather than passed to the model, app and action level access controls, a history of every MCP action, and SOC 2 Type II certification. On pricing, Zapier's docs say MCP runs on your existing Zapier plan with no separate MCP billing, and each successful tool call uses two tasks. Failed calls do not count.",
        ],
      },
      {
        heading: "How Composio works",
        paragraphs: [
          "Composio's docs say Composio Connect exposes seven meta-tools that let the agent discover what is available, authorize apps on demand, and run tools across apps in parallel. The first time an app is needed, Composio generates an OAuth link to approve, and the connection then persists.",
          "Composio leans toward developers building agents and products: it offers SDKs, per-user sessions exposed through hosted MCP endpoints, single-toolkit MCP servers, triggers, and sandboxed code execution. Its site also lists a Firewall feature that it says blocks instructions hidden in tool results before the agent reads them.",
        ],
      },
      {
        heading: "Side by side",
        paragraphs: [],
        bullets: [
          "Coverage: Zapier MCP and Composio cover thousands of mainstream SaaS apps out of the box. A custom server covers exactly the systems you build it for, including private ones.",
          "Private systems: both catalogs mention ways to reach internal APIs, Zapier through Code Actions and Composio through custom tools and sandboxes. A custom server is designed around them from the start.",
          "Tool design: the catalogs expose their own action library through discovery tools. A custom server exposes a short list of tools shaped around your team's questions and business rules.",
          "Credentials: both catalogs hold app credentials for you. With a custom server, credentials stay in your identity provider and infrastructure.",
          "Pricing model: Zapier bills tasks per successful tool call on your Zapier plan. Check Composio's current pricing page for its model. A custom server is a build cost plus hosting and maintenance.",
          "Dependency: with a catalog, your AI access runs through that vendor. A custom server you own can move to another host.",
        ],
      },
      {
        heading: "Questions to ask before you commit",
        paragraphs: [
          "Whichever direction you lean, a short set of questions makes the trade-offs concrete. Ask them of the vendor, or of your own team for a custom build.",
        ],
        bullets: [
          "Which of our systems are covered today, and which would need custom code?",
          "Does each person sign in with their own account, or does one connection serve everyone?",
          "Where are app credentials stored, and who can see them?",
          "Can we limit which actions are allowed, per app and per user?",
          "Is there a record of every tool call that names the person who made it?",
          "How is usage billed, and what does our expected monthly volume cost?",
          "If we leave, what do we take with us?",
        ],
      },
      {
        heading: "Which to choose",
        paragraphs: [
          "Whichever you pick, the same safety basics apply. Start with read access, turn on write actions only where people need them, and check that you can see a record of each call. The MCP specification and both assistant vendors put the burden of authorization on the server, so with a hosted catalog you rely on the vendor's controls, and with a custom server you set them yourself.",
          "Choose Zapier MCP if your team already uses Zapier, the apps are in its catalog, and you want non-technical staff to start quickly. Choose Composio if you are a developer building an agent or product that needs many third-party apps with per-user auth. Choose a custom MCP server when the core system is private or has no catalog entry, when each person must see only their own records under rules you define, or when answers must apply your business logic.",
          "These are not exclusive. A common setup is a hosted catalog for email, calendar, and chat apps, and a custom server for the ERP, database, or internal API. Prestyj builds that custom layer as part of its custom MCP server service, and can work alongside whichever catalog your team already uses.",
        ],
      },
    ],
    sources: [zapierMcp, zapierMcpUsage, composioHome, composioConnect, mcpSpec],
  },
  {
    slug: "oauth-for-mcp-servers",
    metaTitle: "OAuth for MCP Servers, Explained for Business",
    title: "OAuth for MCP servers, explained for business owners",
    description:
      "What OAuth means for an MCP server behind Claude or ChatGPT, why per-user access matters, and why one shared API key is the risky shortcut, in plain language for business owners.",
    published: "2026-10-23",
    modified: "2026-10-23",
    summary: [
      "OAuth lets each person sign in as themselves, so the AI acts with their permissions.",
      "A shared API key gives everyone the same access, often far more than they should have.",
      "The MCP specification bases authorization on OAuth 2.1 and forbids passing tokens through.",
      "Authorization still has to be checked in the server on every call.",
    ],
    sections: [
      {
        heading: "The question OAuth answers",
        paragraphs: [
          "When Claude or ChatGPT calls a tool on your MCP server, the server has to know two things: who is asking, and what they are allowed to reach. OAuth is the standard way to answer both without anyone handing over a password. The person signs in to your system once, approves the connection, and the assistant receives a token that represents that person and nothing more.",
          "Anthropic's support article describes it from the user's side: adding a custom connector typically involves an OAuth sign-in that lets Claude act on your behalf without ever seeing your password, and you can revoke it at any time.",
        ],
      },
      {
        heading: "Why a shared API key is risky",
        paragraphs: [
          "Shared keys tend to appear for understandable reasons: the source system's API only issues one key, or the first prototype needed to work quickly. If a source system truly cannot issue per-user credentials, the server can still sign people in with OAuth through your identity provider, then apply each person's permissions itself before using the system key. That keeps the key out of the assistant and makes the server, not the key, decide who sees what.",
          "The shortcut is one API key, stored in the connector, used for every request. It works on day one. The problem is who it works for. Anthropic states plainly that on Team and Enterprise plans, everyone who uses a connector with a fixed credential reaches the service with that same credential.",
        ],
        bullets: [
          "Everyone sees everything the key can see. A sales assistant and the CFO get the same access.",
          "Your source system's own permissions stop mattering, because it only sees one user.",
          "Logs show the key, not the person, so you cannot tell who asked for what.",
          "Removing one person's access means rotating the key for everyone.",
          "If the key leaks, it works for anyone who holds it until you notice.",
        ],
      },
      {
        heading: "What per-user OAuth gives you",
        paragraphs: [
          "With per-user OAuth, Anthropic notes that Claude inherits each person's permissions from the connected service: if someone cannot open a file or record in the source system, the connector cannot reach it from Claude either. OpenAI's plugins page makes the same point for ChatGPT, saying it only accesses information the user can already see in the connected plugin.",
          "That means your existing permission model, the one your IT team already manages, keeps working. Leavers lose access when their account is disabled. Audit logs name real people.",
        ],
      },
      {
        heading: "What the MCP specification requires",
        paragraphs: [
          "You do not need to read the specification yourself. You need a builder who can show you that each of these is in place, ideally with a test that proves a token for another service is refused.",
          "The MCP authorization specification is based on OAuth 2.1 and applies to remote servers that use HTTP. A few of its rules matter to buyers because they are where weak builds cut corners:",
        ],
        bullets: [
          "Audience checks: servers must validate that each access token was issued specifically for them, so a token meant for another service is rejected.",
          "No token passthrough: the security guidance explicitly forbids a server accepting a client's token and passing it straight to a downstream API.",
          "PKCE: clients must use it, which protects the sign-in code from being intercepted.",
          "Discovery: the server publishes metadata that tells the assistant where to sign in. OpenAI's guide describes this as a protected resource metadata endpoint on your server.",
        ],
      },
      {
        heading: "OAuth is not the whole answer",
        paragraphs: [
          "A token tells the server who is calling. The server still has to check, on every call, whether that person may reach the specific record requested. Tenant, account, and access group should come from the verified token, never from anything the model sends. OpenAI's docs say annotations and client confirmations do not replace authorization in your server.",
          "Local servers are different. The specification says servers using the stdio transport should not follow the OAuth flow and should take credentials from the environment instead, which is one reason local servers suit single-user developer setups rather than company rollouts.",
        ],
      },
      {
        heading: "How sign-in looks for your team",
        paragraphs: [
          "For the people using the connector, OAuth is a familiar step. In Claude, an owner adds the connector once, then each member opens Connectors and clicks Connect, which opens the sign-in page of your system or identity provider. After approving, they are returned to Claude and the connector is ready.",
          "In ChatGPT, OpenAI's guide describes the same pattern. ChatGPT reads your server's metadata to find the sign-in page, the user signs in, and ChatGPT holds a token for that user. OpenAI also notes that ChatGPT Enterprise workspaces can verify email domains, and the guide describes how an authorization server can restrict sign-in to the organization's own workspace.",
          "When someone leaves, disabling their account in your identity provider stops new tokens. Users can also disconnect the connector themselves, and Anthropic notes permissions can be revoked in Claude's settings or in the third-party service.",
        ],
      },
      {
        heading: "What to ask your builder",
        paragraphs: [
          "Ask whether the server uses per-user OAuth or a shared key, which identity provider it uses, whether it validates token audience, and where permission checks happen. Prestyj's custom Claude connectors and custom MCP servers use per-user OAuth with server-side checks by default, connected to the identity provider you already run.",
        ],
      },
    ],
    sources: [
      mcpAuth,
      mcpSecurity,
      anthropicCustomConnectors,
      anthropicConnectors,
      openAiAuth,
      openAiPlugins,
    ],
  },
  {
    slug: "remote-vs-local-mcp-servers",
    metaTitle: "Remote vs Local MCP Servers and Hosting Options",
    title: "Remote vs local MCP servers, and where a business should host one",
    description:
      "The difference between local and remote MCP servers, which Claude and ChatGPT surfaces support each, and the hosting options for a business, from public HTTPS to private networks and tunnels.",
    published: "2026-10-23",
    modified: "2026-10-23",
    summary: [
      "A local server runs on one computer over stdio. A remote server runs on the web over Streamable HTTP.",
      "Claude's web, desktop, and mobile connectors call remote servers from Anthropic's cloud.",
      "Private servers can be reached through firewall allowlists or, for ChatGPT, a Secure MCP Tunnel.",
      "For a team rollout, remote is almost always the right choice.",
    ],
    sections: [
      {
        heading: "The two transports",
        paragraphs: [
          "The difference matters most for who can use the server. A local server only exists on the computer it is installed on, so each person who wants it needs their own copy and their own credentials. A remote server is set up once and shared, which is why Claude's organization settings and ChatGPT's workspace publishing both work with remote servers.",
          "The MCP specification defines two standard ways for an assistant to talk to a server. With stdio, the client launches the server as a program on the same machine and exchanges messages through standard input and output. With Streamable HTTP, the server is a web service the client reaches over the network.",
          "In practice, stdio means a local server: it lives on one person's computer, uses that computer's network, and takes credentials from its environment. Streamable HTTP means a remote server: one deployment that many people and many clients can use, with OAuth sign-in.",
        ],
      },
      {
        heading: "Where each one works",
        paragraphs: [
          "Anthropic's documentation says Claude connects to remote custom connectors from Anthropic's cloud, across claude.ai, Claude Desktop, Cowork, and the mobile apps. Local servers configured in Claude Desktop through claude_desktop_config.json are a separate mechanism that uses your local network, and Anthropic says they are not available in Cowork or claude.ai. It also notes that advanced Research cannot invoke tools from local MCP servers.",
          "On the ChatGPT side, OpenAI's testing guide asks for a public HTTPS endpoint, typically at /mcp, or a Secure MCP Tunnel. OpenAI also documents desktop-only plugins that run a local MCP server, as a separate submission path.",
        ],
      },
      {
        heading: "When local makes sense",
        paragraphs: [
          "A local server is not automatically safer. It runs with the permissions of the person's computer and whatever credentials sit in its environment, which the MCP authorization specification says is how stdio servers should get credentials. Every laptop that runs it holds those credentials, and there is no central log of what was called. For one developer that is acceptable. For a team it is harder to control than one remote server.",
        ],
        bullets: [
          "A developer connecting tools on their own machine, such as a code editor or a local database.",
          "A personal workflow where only one person needs access.",
          "Prototyping a tool design before building the remote version.",
        ],
      },
      {
        heading: "Why businesses usually need remote",
        paragraphs: [],
        bullets: [
          "It works in the browser, desktop, and mobile versions of Claude, not only on one computer.",
          "An admin adds it once for the organization, and each member signs in with their own account.",
          "Access is controlled centrally. Removing a person or a tool happens in one place.",
          "Logging and rate limits live on the server, so you can see every call.",
          "Updates ship once instead of on every laptop.",
        ],
      },
      {
        heading: "Hosting options for a remote server",
        paragraphs: [
          "Public HTTPS endpoint: the simplest path. The server runs on a cloud platform with a valid certificate and requires OAuth on every request. It works with both Claude and ChatGPT and is required for public directory listings.",
          "Private network with an allowlist: if the server must sit inside your network, Anthropic says you need to allowlist Anthropic's published IP addresses so inbound connections from Claude can reach it. Servers behind a VPN or a blocking firewall will not connect.",
          "Secure MCP Tunnel for ChatGPT: OpenAI describes an outbound-only tunnel, where a client inside your network polls OpenAI for work and forwards it to your private server, so you do not open inbound firewall ports. OpenAI notes it does not support public plugin submission.",
          "Vendor-hosted or your own cloud: a builder can host the server for you, or deploy it into your own cloud account so data and logs stay inside your boundary. Security teams often prefer the second for sensitive systems.",
        ],
      },
      {
        heading: "Questions for your security team",
        paragraphs: [
          "Hosting a remote MCP server is a normal web service decision, and your security team will likely ask the same questions they ask of any internet-facing API. Having answers ready shortens the review.",
        ],
        bullets: [
          "Where will the server run, and in whose cloud account?",
          "Which source systems will it reach, and through which credentials?",
          "Will inbound traffic come from the public internet, from Anthropic's published IP ranges, or through an outbound tunnel?",
          "How are user tokens validated, and where are permission checks enforced?",
          "What is logged, how long is it kept, and does it exclude tokens and secrets?",
          "Who is alerted when it fails, and how are updates deployed and tested?",
          "Can we move the server to another host later without rebuilding it?",
        ],
      },
      {
        heading: "Choosing for your business",
        paragraphs: [
          "A practical rule: build locally to try out tool designs, then move to remote before anyone outside the build team depends on it. The tools and their descriptions carry over; what changes is the transport, sign-in, and hosting around them.",
          "If more than one person will use the server, or anyone will use it from the web or a phone, build it remote. Then choose hosting based on where the data lives and what your security team requires. Prestyj's custom MCP servers are built remote by default, hosted by us or deployed into your cloud, with local stdio builds reserved for developer tooling.",
        ],
      },
    ],
    sources: [
      mcpTransports,
      anthropicCustomConnectors,
      anthropicIpAddresses,
      openAiConnectTest,
      openAiTunnel,
    ],
  },
  {
    slug: "safe-write-actions-ai-connectors",
    metaTitle: "Read-Only First: Safe Write Actions in AI Connectors",
    title: "Read-only first: designing safe write actions and approvals in an AI connector",
    description:
      "How to add write actions to a Claude connector or ChatGPT plugin safely: start read-only, annotate tools honestly, require confirmation, prevent duplicate writes, and keep checks in the server.",
    published: "2026-10-23",
    modified: "2026-10-23",
    summary: [
      "Launch read-only. Add write tools one at a time, where people ask for them.",
      "Annotate each tool honestly so Claude and ChatGPT know when to ask first.",
      "Annotations guide the assistant; the server still enforces permissions and validation.",
      "Make writes confirmable, idempotent, logged, and easy to reverse.",
    ],
    sections: [
      {
        heading: "Why start read-only",
        paragraphs: [
          "Read-only does not mean low value. Answering questions from live data across several systems is often most of the benefit, and it can be rolled out to more people with less review. When writes do arrive, they arrive into a connector that the team already trusts and understands.",
          "Anthropic's documentation reminds users that connector tools can read data, create, modify, or delete data, and take actions on a user's behalf. A wrong answer from a read tool is a bad answer someone can check. A wrong write changes your records.",
          "Starting read-only lets a team learn how the assistant actually uses the connector, which questions it handles well, and where it picks the wrong tool, before anything can change. It also makes the first security review much shorter. Add writes once you know which ones people really need.",
        ],
      },
      {
        heading: "Label every tool honestly",
        paragraphs: [
          "MCP lets each tool carry annotations describing its behavior. OpenAI's plugin documentation describes three: readOnlyHint, set to true only when the tool cannot change state; destructiveHint, true when a tool can cause outcomes that are irreversible or hard to reverse; and openWorldHint, true when a tool reaches the public internet or open-ended external entities.",
          "Assistants use these to decide when to ask before acting. OpenAI states they help choose confirmation and safety behavior but do not replace authorization, validation, or confirmation in your server. The MCP specification adds that clients must treat annotations as untrusted unless they come from trusted servers. Treat them as guidance for the assistant, never as your only control.",
        ],
      },
      {
        heading: "Keep a person in the loop",
        paragraphs: [
          "Confirmation works best when the prompt is specific. Show the record, the field, the old value, and the new value, so the person approving can actually tell whether the change is right.",
          "The MCP tools specification says that for trust, safety, and security there should always be a human in the loop with the ability to deny tool invocations. Both assistants provide this at the client level. Anthropic tells users to review tool approval requests and choose Allow always only for tools they trust to run unsupervised.",
          "Be careful with features that act autonomously. Anthropic notes that during Research, Claude can invoke connector tools without further approval, and advises disabling tools that can take write actions. Plan your write tools so they are safe to turn off in those modes.",
        ],
      },
      {
        heading: "Design rules for write tools",
        paragraphs: [],
        bullets: [
          "One action per tool. Create a ticket and close a ticket are separate tools, never one with a mode flag.",
          "Strict input schemas. Reject unknown fields and validate every value against the source system's rules.",
          "Preview, then commit. Return a summary of exactly what will change, and require an explicit confirmation before writing.",
          "Idempotency keys. Require a unique key per request so a retry never runs the action twice.",
          "Server-side permission checks. Confirm the signed-in user may make this change to this record on every call, using identity from the verified token.",
          "Limits. Cap how many records one call can change, and rate limit writes per user.",
          "Prefer reversible actions. Draft instead of send, archive instead of delete, where the business allows.",
          "Log every write with the user, tool, inputs, and outcome, without logging secrets.",
        ],
      },
      {
        heading: "Guard against injected instructions",
        paragraphs: [
          "The MCP security guidance and both vendors' documentation return to the same point: the model can be wrong or be misled, so the server must be safe anyway. Keeping writes narrow, confirmed, and checked server-side is what makes that true.",
          "Anthropic warns that malicious content can contain hidden instructions meant to make Claude take unintended actions. Documents, emails, and records your read tools return are untrusted text. Never let content returned by one tool silently trigger a write in another, and keep writes behind confirmation so a person sees what is about to happen.",
        ],
      },
      {
        heading: "Example: a safe create-ticket tool",
        paragraphs: [
          "Suppose support staff want Claude or ChatGPT to open tickets in your help desk. A safe first write tool would do only that: create one ticket, with a title, a description, a priority from a fixed list, and the customer it belongs to.",
          "The server checks that the signed-in user may create tickets for that customer, rejects any field it does not recognize, and requires an idempotency key so the same request cannot create two tickets. The tool is annotated as not read-only and not destructive, since a new ticket is easy to close. Before writing, the assistant shows the ticket details and asks the person to confirm.",
          "Every call is logged with the user, the ticket created, and the result. Only once that tool has run well for a few weeks would you add a second one, such as updating a ticket's status, with its own checks and tests.",
        ],
      },
      {
        heading: "A rollout order that works",
        paragraphs: [
          "Launch read-only with a pilot group. Collect the actions people ask for. Add the lowest-risk, most reversible write first, behind confirmation, and test it with requests it must refuse as well as those it should complete. Then add the next one. This is how Prestyj builds write actions into custom MCP servers and ChatGPT plugins: read-only by default, with each write added on request and tested before it goes live.",
        ],
      },
    ],
    sources: [mcpTools, anthropicCustomConnectors, openAiMcpServer, mcpSecurity],
  },
];

export function getConnectorGuide(slug: string): ConnectorGuide | undefined {
  return connectorGuides.find((guide) => guide.slug === slug);
}

export const connectorGuidePath = (slug: GuideSlug): `/${string}` => `/connectors/${slug}`;
