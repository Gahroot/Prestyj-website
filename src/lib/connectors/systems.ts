import type { ConnectorFaq, ConnectorPoint, ConnectorServiceSlug } from "@/lib/connectors/services";

export type ConnectorSource = { label: string; url: string };

export type ConnectorSystem = {
  slug: string;
  /** System name as buyers search for it. */
  name: string;
  category: string;
  /** Page title without the brand; the root layout appends "| Prestyj". */
  metaTitle: string;
  metaDescription: string;
  title: string;
  lede: string;
  /** Example questions a team could ask through a custom connector. */
  questions: readonly string[];
  /** Example actions, each behind an approval step. */
  actions: readonly string[];
  /** What the vendor or the AI platforms already ship, verified on the date below. */
  existing: { summary: string; points: readonly string[] };
  whyCustom: readonly ConnectorPoint[];
  build: { api: string; auth: string; steps: readonly string[] };
  faqs: readonly ConnectorFaq[];
  sources: readonly ConnectorSource[];
  related: readonly ConnectorServiceSlug[];
};

/** The day the "what already exists" facts were last checked against vendor sources. */
export const connectorSystemsVerified = "2026-10-23";

export const connectorSystems: readonly ConnectorSystem[] = [
  {
    slug: "quickbooks-online",
    name: "QuickBooks Online",
    category: "Accounting",
    metaTitle: "QuickBooks Online Claude Connector and MCP Server",
    metaDescription:
      "A custom Claude connector or MCP server for QuickBooks Online: AR, AP, and P&L questions answered from live books, per-company access, and approval before anything posts.",
    title:
      "A custom Claude connector for QuickBooks Online, built around how your finance team works.",
    lede: "Intuit now publishes its own QuickBooks MCP server, so the question is no longer whether Claude can reach QuickBooks. It is whether it reaches the right company file, with the right permissions, and without posting anything nobody approved.",
    questions: [
      "Which customers have invoices more than 60 days past due, and what do they owe in total?",
      "Show last quarter's spend by vendor for the Marketing class, compared with the same quarter last year.",
      "Which bills are due in the next 14 days, and is there enough in the operating account to cover them?",
      "Summarize the profit and loss for October by location and flag any line that moved more than 20 percent.",
    ],
    actions: [
      "Draft an invoice from a signed quote, held for review before it is sent",
      "Prepare a batch of reminder emails for overdue customers for a person to approve",
      "Create a journal entry draft for an accrual, with the supporting figures attached",
    ],
    existing: {
      summary:
        "Intuit publishes an official, open-source QuickBooks Online MCP server on GitHub. It runs locally over stdio, signs in through your own Intuit developer app with OAuth 2.0, is bound to one company per running process, and Intuit still labels it an early preview. Third-party reporting says Intuit also offers a hosted QuickBooks connector inside Claude that is limited to US customers; we confirm what your account can use during scoping.",
      points: [
        "Covers: broad read and write tools across QuickBooks Online accounting objects and standard reports.",
        "Does not cover: QuickBooks Desktop, which uses a different SDK.",
        "Does not cover: a shared, hosted endpoint for a whole team with your own approval rules, or several company files behind one connector.",
      ],
    },
    whyCustom: [
      {
        title: "Read and write are not the same risk",
        body: "The official server is read and write by default. A custom build ships read-only tools first and puts every posting action behind an explicit approval step and an idempotency key.",
      },
      {
        title: "Several companies, one connector",
        body: "Groups with more than one QuickBooks company need consolidated answers. We route each question to the right realm and label every figure with the company it came from.",
      },
      {
        title: "Your reporting rules",
        body: "Classes, locations, and custom fields mean different things in every business. We encode your definitions so a question about a region returns the same number your controller would.",
      },
      {
        title: "Hosted for the team, not one laptop",
        body: "A remote server with per-user sign-in lets the whole finance team use it from Claude on the web, without each person running a local process with shared keys.",
      },
    ],
    build: {
      api: "QuickBooks Online Accounting API (REST, v3), including the Reports endpoints for P&L, balance sheet, and aging.",
      auth: "OAuth 2.0 through an Intuit developer app, with tokens stored server-side per company and refreshed automatically.",
      steps: [
        "Start in an Intuit sandbox company and agree the 10 to 20 questions the connector must answer.",
        "Ship read tools first: customers, invoices, bills, payments, and the standard reports.",
        "Add write tools only where you ask, each one returning a draft for a person to approve before it posts.",
        "Deploy as a remote MCP server so it works in Claude and in ChatGPT with the same rules.",
      ],
    },
    faqs: [
      {
        question: "Is there already an official QuickBooks MCP server?",
        answer:
          "Yes. Intuit publishes one on GitHub as an early preview. It runs on one machine and connects to one company at a time. If that covers your need, use it. We build when you need a hosted, multi-user connector with approval rules or several companies.",
      },
      {
        question: "Does this work with QuickBooks Desktop?",
        answer:
          "Not through the QuickBooks Online API. Desktop uses a separate SDK and Web Connector. We can scope a Desktop project separately, but the approach and effort are different.",
      },
      {
        question: "Can Claude create invoices or post entries?",
        answer:
          "Only if you want it to. We ship read-only first. Write tools create drafts or require an explicit confirmation, and every write is logged with who asked for it.",
      },
      {
        question: "Can our accountant and our operations lead see different things?",
        answer:
          "Yes. Each person signs in, and the server decides which companies and which tools they can use. Someone in operations can see open invoices without seeing payroll.",
      },
    ],
    sources: [
      {
        label: "Intuit: quickbooks-online-mcp-server on GitHub",
        url: "https://github.com/intuit/quickbooks-online-mcp-server",
      },
      {
        label: "Blackspark: QuickBooks Online MCP server, what exists in September 2026",
        url: "https://www.blacksparkcorp.com/integrations/quickbooks-online-mcp-server",
      },
      {
        label: "Scalekit: QuickBooks MCP vs API, capability and auth guide",
        url: "https://www.scalekit.com/blog/quickbooks-mcp-vs-api",
      },
    ],
    related: ["custom-claude-connectors", "custom-mcp-servers", "done-for-you-claude-connectors"],
  },
  {
    slug: "netsuite",
    name: "NetSuite",
    category: "ERP",
    metaTitle: "NetSuite MCP Server and Custom Claude Connector",
    metaDescription:
      "Custom NetSuite MCP tools for Claude and ChatGPT, built on Oracle's AI Connector Service: SuiteQL and saved searches shaped around your subsidiaries, roles, and close process.",
    title: "NetSuite MCP tools for Claude and ChatGPT, shaped around your subsidiaries and roles.",
    lede: "Oracle ships the NetSuite AI Connector Service and a free set of standard MCP tools. They are generic by design. We build the custom SuiteScript tools and roles that make Claude answer the way your finance and operations teams actually ask.",
    questions: [
      "What is open purchase order exposure by subsidiary and vendor, in USD, as of today?",
      "Which sales orders are pending fulfillment for more than 10 days, and which warehouse holds the stock?",
      "Run the saved search our AP team uses for unmatched vendor bills and summarize the top issues.",
      "How does this month's revenue by department compare with budget, using our consolidated view?",
    ],
    actions: [
      "Create a draft journal entry for an intercompany adjustment, held for approval",
      "Update a sales order's expected ship date after a person confirms the change",
      "Raise a vendor record change request instead of editing the vendor directly",
    ],
    existing: {
      summary:
        "Oracle's NetSuite AI Connector Service is an official remote MCP endpoint that Claude and ChatGPT can connect to with OAuth 2.0. Tools come from the free MCP Standard Tools SuiteApp, and developers can add custom tools written in SuiteScript.",
      points: [
        "Covers: records, native reports, saved searches, and SuiteQL queries, run with the signed-in user's role.",
        "Guardrail: the Administrator role cannot be used, and MCP access is off until a role is granted the permission.",
        "Does not cover: your own business definitions, multi-step workflows, or approval steps. Those need custom tools.",
      ],
    },
    whyCustom: [
      {
        title: "Generic tools, specific questions",
        body: "Standard tools let Claude write its own SuiteQL. Custom tools return the exact figure your team means by 'open exposure' or 'late orders', so answers match the reports finance already trusts.",
      },
      {
        title: "Roles designed for AI use",
        body: "We design the non-administrator roles that connect, so each team reaches only the subsidiaries, records, and fields it should.",
      },
      {
        title: "Writes with a review step",
        body: "Standard tools can create and update records. We wrap writes in tools that create drafts or require confirmation, so nothing posts unreviewed.",
      },
      {
        title: "NetSuite plus everything else",
        body: "When answers need NetSuite and your CRM or warehouse together, a separate MCP server can call both and show where each number came from.",
      },
    ],
    build: {
      api: "NetSuite AI Connector Service with custom tools in SuiteScript 2.1, plus SuiteQL and REST web services where needed.",
      auth: "OAuth 2.0 with PKCE through the AI Connector Service, signed in as a custom non-administrator role.",
      steps: [
        "Enable the required features in a sandbox and design the roles that will connect.",
        "Build custom SuiteScript tools for the questions your team asks most, read-only first.",
        "Add write tools as draft-and-approve flows, with logging on the integration record.",
        "Test in Claude and ChatGPT, then roll out role by role.",
      ],
    },
    faqs: [
      {
        question: "Does NetSuite already work with Claude?",
        answer:
          "Yes. Oracle's AI Connector Service connects Claude and ChatGPT to NetSuite with standard tools. We build on top of it when the standard tools are too general or too permissive for your team.",
      },
      {
        question: "Do we need a separate server outside NetSuite?",
        answer:
          "Often not. Custom tools can live in NetSuite as SuiteScript and run through Oracle's endpoint. We add an external server only when you need other systems in the same answer.",
      },
      {
        question: "Can the AI use an administrator login?",
        answer:
          "No. Oracle blocks the Administrator role for this service. We design narrower roles anyway, because least privilege is what keeps the connector safe.",
      },
      {
        question: "Will it handle multiple subsidiaries and currencies?",
        answer:
          "Yes, if we design for it. Custom tools can state the subsidiary and currency of every figure, and apply your consolidation rules instead of leaving them to the model.",
      },
    ],
    sources: [
      {
        label: "Oracle: Connect to the NetSuite AI Connector Service",
        url: "https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0714082142.html",
      },
      {
        label: "Oracle: Using skills with Claude, ChatGPT, and other MCP clients",
        url: "https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0611102646.html",
      },
      {
        label: "Prolecto: Connecting NetSuite to ChatGPT and Claude with the AI Connector",
        url: "https://blog.prolecto.com/2025/12/06/how-to-connect-netsuite-to-chatgpt-and-claude-using-the-new-ai-connector/",
      },
    ],
    related: ["custom-mcp-servers", "custom-claude-connectors", "custom-chatgpt-plugins"],
  },
  {
    slug: "xero",
    name: "Xero",
    category: "Accounting",
    metaTitle: "Xero MCP Server and Custom Claude Connector",
    metaDescription:
      "Custom Xero connectors for Claude and ChatGPT: cash, receivables, and tracking-category answers across every organisation you run, with OAuth sign-in and approvals on writes.",
    title: "A Xero connector for Claude that works across every organisation you run.",
    lede: "Xero has an official MCP server, both open source and hosted. It connects one organisation at a time with Xero's standard tools. We build when you need several organisations, your own tracking categories, or writes that wait for approval.",
    questions: [
      "What is our cash position across all four Xero organisations, converted to GBP?",
      "Which contacts owe us more than 5,000 and have not paid in 45 days?",
      "Show expenses by tracking category for the Sydney office this financial year.",
      "Which bank transactions from last week are still unreconciled?",
    ],
    actions: [
      "Draft invoices from a list of completed jobs, held as drafts in Xero",
      "Prepare credit notes for approval when a customer dispute is confirmed",
      "Add a new contact after checking it does not already exist",
    ],
    existing: {
      summary:
        "Xero publishes an official open-source MCP server (XeroAPI/xero-mcp-server) that runs locally with a Custom Connection or a bearer token. Xero's developer FAQ also documents an official remote MCP endpoint that uses the same OAuth 2.0 sign-in and rate limits as the Xero API, included on plans Core and above.",
      points: [
        "Covers: contacts, invoices, payments, bank transactions, reports, and selected payroll tools.",
        "Limits: the local server's Custom Connection is tied to one organisation.",
        "Does not cover: consolidated answers across organisations or your own approval rules on writes.",
      ],
    },
    whyCustom: [
      {
        title: "Groups and practices",
        body: "Owners with several entities and accounting practices with many clients need one connector that knows which organisation each question is about.",
      },
      {
        title: "Your tracking categories",
        body: "We map tracking categories and account codes to the way you report, so 'Sydney office costs' means the same thing every time.",
      },
      {
        title: "Approval before posting",
        body: "Invoices and credit notes are created as drafts, and anything that would be authorised waits for a person.",
      },
    ],
    build: {
      api: "Xero Accounting API, plus the Payroll APIs for your region where needed.",
      auth: "OAuth 2.0 with granular scopes, starting from read-only scopes and adding write scopes per tool.",
      steps: [
        "Connect the Xero Demo Company first and agree the question list.",
        "Build read tools for contacts, invoices, bank transactions, and reports.",
        "Add cross-organisation routing and currency handling if you run more than one.",
        "Add draft-only write tools and deploy as a remote server for the team.",
      ],
    },
    faqs: [
      {
        question: "Should we just use Xero's official MCP server?",
        answer:
          "If one organisation and Xero's standard tools cover what you need, yes. We build when you need several organisations, custom reporting rules, or controlled writes.",
      },
      {
        question: "Can this work for an accounting practice with many clients?",
        answer:
          "Yes. We design the connector so each staff member reaches only the client organisations they are assigned to, and every answer names the organisation it came from.",
      },
      {
        question: "Will Claude be able to authorise invoices?",
        answer:
          "Not unless you decide it should. Our default is drafts only, with authorisation left to a person in Xero.",
      },
      {
        question: "Does it count against Xero API limits?",
        answer:
          "Yes. Every MCP call is an API call. We cache reference data and cap result sizes to stay well inside the limits.",
      },
    ],
    sources: [
      {
        label: "Xero Developer: Remote MCP FAQs",
        url: "https://developer.xero.com/faq/remote-mcp",
      },
      {
        label: "XeroAPI: xero-mcp-server on GitHub",
        url: "https://github.com/XeroAPI/xero-mcp-server",
      },
    ],
    related: ["custom-claude-connectors", "done-for-you-claude-connectors", "custom-mcp-servers"],
  },
  {
    slug: "sage-intacct",
    name: "Sage Intacct",
    category: "Accounting",
    metaTitle: "Sage Intacct MCP Server and Claude Connector",
    metaDescription:
      "Custom Sage Intacct connectors for Claude and ChatGPT: dimension-aware answers on entities, departments, and projects, built on Intacct's REST API with least-privilege access.",
    title: "Sage Intacct answers in Claude that respect your entities and dimensions.",
    lede: "Sage offers the Sage Intacct MCP Server as part of its AI Gateway. It gives AI tools governed, read-only access. We build the layer on top that understands your dimensions, entities, and close calendar.",
    questions: [
      "What is gross margin by project for the last three closed periods?",
      "Which entities have open AP over 90 days, grouped by vendor?",
      "Compare department spend against budget for Q3, using our reporting dimensions.",
      "Which revenue contracts renew in the next 60 days and what is their annual value?",
    ],
    actions: [
      "Prepare a reclass entry between departments for a controller to approve",
      "Draft a vendor payment proposal for review, without releasing payment",
    ],
    existing: {
      summary:
        "Sage describes the Sage Intacct MCP Server as part of the Sage Intacct AI Gateway, built on the Intacct REST APIs. Baker Tilly's guide describes it as read-only access to authorized data. We could not confirm a listing in the Claude or ChatGPT directories, so we check availability for your tenant during scoping.",
      points: [
        "Covers: governed, read-only access to authorized Intacct data for MCP-compatible AI tools.",
        "Does not cover: writes, your dimension definitions, or answers that combine Intacct with other systems.",
      ],
    },
    whyCustom: [
      {
        title: "Dimensions carry the meaning",
        body: "Intacct's value is in departments, locations, projects, and custom dimensions. We build tools that take those as inputs so answers match your management reports.",
      },
      {
        title: "Entity-level access",
        body: "Multi-entity companies need people to see only their entities. We enforce that per user on every call.",
      },
      {
        title: "Controlled writes when you need them",
        body: "Where the standard server is read-only, a custom tool can draft entries for approval inside your existing workflow.",
      },
    ],
    build: {
      api: "Sage Intacct REST API, with the legacy XML Web Services only where a needed object is not yet in REST.",
      auth: "OAuth 2.0 for the REST API, connected through a dedicated user with a least-privilege role.",
      steps: [
        "Map your entities, dimensions, and the reports finance trusts.",
        "Build read tools that take dimensions as parameters and return bounded results.",
        "Add draft-only write tools if you want them, then deploy remotely.",
      ],
    },
    faqs: [
      {
        question: "Does Sage already offer an MCP server for Intacct?",
        answer:
          "Yes, as part of the Sage Intacct AI Gateway. It is designed as read-only. We build when you need your own business logic, writes with approval, or several systems in one answer.",
      },
      {
        question: "Is this the same as Sage Copilot?",
        answer:
          "No. Sage Copilot is the AI inside Intacct. A connector brings Intacct data into Claude or ChatGPT, where your team may already work.",
      },
      {
        question: "Can different entities see different data?",
        answer:
          "Yes. The connector checks each person's entity access on every call, so a regional finance lead sees only their entities.",
      },
      {
        question: "Can it combine Intacct with our CRM?",
        answer:
          "Yes. A custom MCP server can call both systems and label which figure came from where, for example bookings from the CRM and recognized revenue from Intacct.",
      },
    ],
    sources: [
      {
        label: "Sage: Sage Intacct AI Gateway",
        url: "https://www.sage.com/en-us/sage-business-cloud/intacct/product-capabilities/platform/ai-gateway/",
      },
      {
        label: "Baker Tilly: Sage Intacct MCP Server guide for finance leaders",
        url: "https://www.bakertilly.com/insights/sage-intacct-mcp-server-finance-leaders",
      },
    ],
    related: ["custom-mcp-servers", "custom-claude-connectors", "done-for-you-claude-connectors"],
  },
  {
    slug: "dynamics-365",
    name: "Microsoft Dynamics 365",
    category: "ERP",
    metaTitle: "Dynamics 365 MCP Server for Claude and ChatGPT",
    metaDescription:
      "Connect Claude and ChatGPT to Dynamics 365 Finance and Supply Chain. We register the client in Entra ID, scope security roles, and build custom tools on Microsoft's ERP MCP server.",
    title:
      "Dynamics 365 in Claude and ChatGPT, through Microsoft's MCP server and your security roles.",
    lede: "Microsoft ships a Dynamics 365 ERP MCP server, but by default only Microsoft clients such as Copilot Studio and VS Code may connect. Getting Claude or ChatGPT in, safely, is an Entra ID and security role project. That is the part we do.",
    questions: [
      "Which purchase orders for legal entity USMF are confirmed but not yet received?",
      "What is on-hand inventory for item group Audio across all warehouses?",
      "Which customers in the UK entity are over their credit limit today?",
      "Summarize vendor invoices waiting in the approval workflow, oldest first.",
    ],
    actions: [
      "Create a purchase requisition draft for a person to submit",
      "Update a sales order line delivery date after confirmation",
    ],
    existing: {
      summary:
        "Microsoft documents the Dynamics 365 ERP MCP server for finance and operations apps. It uses the same security model as the existing API framework, and by default only Microsoft clients (Copilot Studio, VS Code, Microsoft Cowork, Finance Agent) are allowed. Other clients must be registered in Microsoft Entra ID and added to the allowed list. A separate ERP Analytics MCP server (preview) covers Business performance analytics.",
      points: [
        "Covers: data operations and business logic in Finance and Supply Chain Management, filtered by the user's security role.",
        "Requires: admin work to allow Claude or ChatGPT as clients.",
        "Does not cover: Dynamics 365 Business Central or Dataverse-based apps in the same server; we confirm the right endpoint for your product during scoping.",
      ],
    },
    whyCustom: [
      {
        title: "Getting non-Microsoft clients in",
        body: "We handle the Entra ID app registration, the allowed clients list, and consent, so Claude or ChatGPT can connect without opening more than intended.",
      },
      {
        title: "Roles built for AI use",
        body: "The MCP server can do nearly anything a user can. We design narrow security roles so the AI identity sees only what each team needs.",
      },
      {
        title: "Focused tools over a broad surface",
        body: "Where the dynamic server is too open-ended for business users, a custom MCP server offers a short list of well-described tools Claude picks reliably.",
      },
    ],
    build: {
      api: "Dynamics 365 ERP MCP server, OData data entities, and custom services in X++ where a business process needs one.",
      auth: "Microsoft Entra ID with OAuth 2.0, using delegated user sign-in so security roles apply per person.",
      steps: [
        "Enable the ERP MCP server in a sandbox environment and register the client app in Entra ID.",
        "Design security roles for each team that will connect.",
        "Add a custom MCP layer with focused tools if the dynamic server is too broad.",
        "Test in Claude and ChatGPT, then move to production with change control.",
      ],
    },
    faqs: [
      {
        question: "Can Claude connect to the Dynamics 365 ERP MCP server today?",
        answer:
          "Microsoft documents how to allow other agent platforms by registering them in Entra ID and adding them to the allowed clients list. We do that setup and test it for your environment.",
      },
      {
        question: "Does this cover Business Central?",
        answer:
          "The ERP MCP server documented here is for Finance and Supply Chain Management. Business Central has its own APIs, and we scope it as a separate connector.",
      },
      {
        question: "Can the AI do anything a user can?",
        answer:
          "With the dynamic server, roughly yes, within its security role. That is why role design matters, and why we often add a narrower custom layer for business users.",
      },
      {
        question: "Does our data leave the Dynamics environment?",
        answer:
          "Microsoft says the MCP server runs inside your finance and operations environment. Data returned to Claude or ChatGPT is handled under that provider's terms, which we review with you.",
      },
    ],
    sources: [
      {
        label: "Microsoft Learn: Security for Dynamics 365 ERP MCP",
        url: "https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/copilot/mcp/mcp-security",
      },
      {
        label: "Microsoft Learn: Build an agent with Dynamics 365 ERP MCP",
        url: "https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/copilot/build-agent-mcp",
      },
      {
        label: "Microsoft Learn: Dynamics 365 ERP Analytics MCP (preview)",
        url: "https://learn.microsoft.com/en-us/dynamics365/finance/business-performance-analytics/erp-analytics-mcp-overview",
      },
    ],
    related: ["custom-mcp-servers", "custom-chatgpt-plugins", "custom-claude-connectors"],
  },
  {
    slug: "sharepoint",
    name: "SharePoint and OneDrive",
    category: "Documents",
    metaTitle: "SharePoint Claude Connector and ChatGPT Plugin",
    metaDescription:
      "Custom SharePoint and OneDrive connectors for Claude and ChatGPT: scoped to chosen sites with Sites.Selected, aware of metadata and document types, with source links on every answer.",
    title: "SharePoint and OneDrive connectors scoped to the sites that matter.",
    lede: "Anthropic's Microsoft 365 connector already searches SharePoint, OneDrive, Outlook, and Teams as the signed-in user. Many firms want something narrower: a handful of sites, your metadata, and answers that cite the exact document.",
    questions: [
      "Find the latest signed version of the master services agreement with our largest supplier.",
      "Which policies in the HR site were updated this year, and what changed in each?",
      "List every project folder in the Delivery site missing a signed statement of work.",
      "What does our travel policy say about international flights, with a link to the section?",
    ],
    actions: [
      "File an uploaded document into the right library with the required metadata",
      "Create a folder structure for a new client from your template",
    ],
    existing: {
      summary:
        "Anthropic's Microsoft 365 connector lets Claude search and act on SharePoint, OneDrive, Outlook, and Teams with the user's own permissions. It is available on all Claude plans, needs a Microsoft Entra Global Administrator to grant tenant consent, and write tools are admin-controlled. There is no standalone SharePoint connector in Claude's directory.",
      points: [
        "Covers: delegated search and analysis across everything the user can open in Microsoft 365.",
        "Scope: it searches tenant-wide, so restricting it to a few sites is not its design.",
        "Does not cover: your document metadata model, required fields on filing, or ChatGPT on the same rules.",
      ],
    },
    whyCustom: [
      {
        title: "Only the sites you choose",
        body: "Using the Sites.Selected permission, a custom connector can reach named sites only, instead of every library a user can open.",
      },
      {
        title: "Metadata, not just keywords",
        body: "Contract type, counterparty, status, and expiry live in columns. Tools that filter on them answer far better than full-text search alone.",
      },
      {
        title: "Same rules in Claude and ChatGPT",
        body: "One MCP server serves both, so the access rules your IT team approves apply wherever people work.",
      },
    ],
    build: {
      api: "Microsoft Graph: the Search API, sites, lists, and driveItem endpoints.",
      auth: "Microsoft Entra ID with OAuth 2.0 and the on-behalf-of flow, using delegated permissions or Sites.Selected for named sites.",
      steps: [
        "Agree the sites, libraries, and metadata columns in scope.",
        "Register the app in Entra ID and get the minimum permissions approved.",
        "Build search and retrieve tools that return titles, links, and short excerpts.",
        "Add filing tools with required metadata, behind confirmation.",
      ],
    },
    faqs: [
      {
        question: "Why not just use the Microsoft 365 connector?",
        answer:
          "Use it if broad, per-user search is what you want. We build when you need tighter site scoping, your metadata model, writes with required fields, or the same access in ChatGPT.",
      },
      {
        question: "Will Claude see files a person cannot open?",
        answer:
          "No. With delegated permissions every call runs as the signed-in user, and with Sites.Selected the connector cannot reach sites outside the approved list at all.",
      },
      {
        question: "Does it read the whole document into the chat?",
        answer:
          "Only what is needed. Tools return excerpts and links first, and fetch more of a file only when the question requires it.",
      },
      {
        question: "Who needs to approve it in our tenant?",
        answer:
          "An Entra administrator grants consent for the permissions. We prepare the exact list and the reason for each one.",
      },
    ],
    sources: [
      {
        label: "Claude Help Center: Set up the Microsoft 365 connector",
        url: "https://support.claude.com/en/articles/12542951-set-up-the-microsoft-365-connector",
      },
      {
        label: "Claude Help Center: Connect to Microsoft 365",
        url: "https://support.claude.com/en/articles/15183774-connect-to-microsoft-365",
      },
      {
        label: "Claude docs: Microsoft 365 connector",
        url: "https://claude.com/docs/connectors/microsoft/365",
      },
    ],
    related: ["custom-chatgpt-plugins", "custom-claude-connectors", "custom-mcp-servers"],
  },
  {
    slug: "salesforce",
    name: "Salesforce",
    category: "CRM",
    metaTitle: "Salesforce MCP Server and Custom Claude Connector",
    metaDescription:
      "Custom Salesforce MCP servers for Claude and ChatGPT: focused tools for pipeline, accounts, and cases on top of Salesforce's hosted MCP, with read-only rollout and approvals.",
    title: "Salesforce in Claude and ChatGPT, with tools your sales team will actually use.",
    lede: "Salesforce hosted MCP servers are generally available for Enterprise Edition and above. They expose your org as the signed-in user. We decide which servers to switch on, design custom tools for your process, and roll them out read-only first.",
    questions: [
      "Which opportunities over 50,000 in my territory have had no activity in 21 days?",
      "Summarize everything that happened on the Acme account this quarter, including open cases.",
      "What is commit versus best case for the West region this quarter?",
      "Which renewals in the next 90 days have an open escalated case?",
    ],
    actions: [
      "Log a call summary as an activity on the right contact after review",
      "Update next steps and close date on an opportunity with confirmation",
      "Create a follow-up task for the account owner",
    ],
    existing: {
      summary:
        "Salesforce Hosted MCP Servers became generally available in April 2026 for Enterprise Edition orgs and above. They expose data, flows, Apex actions, and queries to MCP clients such as Claude and ChatGPT, and existing permissions apply. Third-party reports say usage may be billed and counts against API limits.",
      points: [
        "Covers: standard SObject servers for read and for create, update, and delete, plus admin-built custom servers.",
        "Requires: an admin to enable each server and register an External Client App.",
        "Does not cover: your sales methodology, forecast definitions, or answers that need systems outside Salesforce.",
      ],
    },
    whyCustom: [
      {
        title: "Your forecast, not raw SOQL",
        body: "Tools that return pipeline the way your forecast defines it give consistent answers, instead of the model writing new queries each time.",
      },
      {
        title: "Read first, then controlled writes",
        body: "We start with the read-only server and add narrow write tools, such as logging an activity, rather than switching on full create, update, and delete.",
      },
      {
        title: "Permission debt surfaces fast",
        body: "Hosted servers inherit your sharing model as it is. We review profiles and field-level security before rollout so the AI does not expose old mistakes.",
      },
    ],
    build: {
      api: "Salesforce Hosted MCP Servers and custom MCP servers in Setup, plus REST API, SOQL, and invocable Apex or Flows for business actions.",
      auth: "OAuth 2.0 through an External Client App, with each user signing in as themselves.",
      steps: [
        "Review sharing, profiles, and field-level security in a sandbox.",
        "Enable the read-only server and build custom tools for your key questions.",
        "Add write actions as Flows or invocable Apex with confirmation.",
        "Roll out to a pilot team in Claude or ChatGPT, then widen.",
      ],
    },
    faqs: [
      {
        question: "Does Salesforce already have an official MCP server?",
        answer:
          "Yes. Hosted MCP Servers are generally available for Enterprise Edition and above. We help you choose, configure, and extend them rather than replace them.",
      },
      {
        question: "Will the AI see records a rep cannot?",
        answer:
          "No. Calls run as the signed-in user with their sharing rules and field-level security. We review those settings first, because the AI will find any gaps.",
      },
      {
        question: "Does it cost extra?",
        answer:
          "Salesforce says hosted server usage may be billed and counts against API limits. We size tool calls and caching with that in mind, and you confirm pricing with Salesforce.",
      },
      {
        question: "Can it combine Salesforce with our ERP?",
        answer:
          "Yes, through a separate MCP server that calls both and labels each figure's source.",
      },
    ],
    sources: [
      {
        label: "Salesforce Developers: Hosted MCP Servers are generally available",
        url: "https://developer.salesforce.com/blogs/2026/04/salesforce-hosted-mcp-servers-are-now-generally-available",
      },
      {
        label: "Coworker: Salesforce MCP setup, tools, and limits",
        url: "https://coworker.ai/blog/salesforce-mcp",
      },
    ],
    related: ["custom-mcp-servers", "custom-claude-connectors", "custom-chatgpt-plugins"],
  },
  {
    slug: "hubspot",
    name: "HubSpot",
    category: "CRM",
    metaTitle: "HubSpot MCP Server and Custom Claude Connector",
    metaDescription:
      "Custom HubSpot connectors for Claude and ChatGPT: pipeline and lifecycle answers using your properties, HubSpot plus billing or product data, and writes behind confirmation.",
    title: "HubSpot connectors for Claude and ChatGPT that know your pipeline rules.",
    lede: "HubSpot's remote MCP server is generally available to all accounts, with read and write access, and powers HubSpot's own Claude and ChatGPT connectors. We build when your answers depend on custom properties, other systems, or tighter write rules.",
    questions: [
      "Which deals in the Enterprise pipeline are stuck in Proposal for more than 30 days?",
      "Which customers have an open ticket and a renewal in the next 60 days?",
      "How many MQLs from the October webinar became opportunities?",
      "Which contacts at Acme have engaged with us this month, and who owns them?",
    ],
    actions: [
      "Turn meeting notes into deal and contact updates, shown for approval first",
      "Create follow-up tasks for owners of stalled deals",
    ],
    existing: {
      summary:
        "HubSpot's remote MCP server at mcp.hubspot.com became generally available on April 13, 2026 for all accounts, with read and write access to CRM objects and OAuth 2.1 with PKCE. HubSpot says its own connectors for Claude and ChatGPT run on it. A separate Developer MCP server is for building HubSpot apps.",
      points: [
        "Covers: CRM objects and engagements with read and write, respecting HubSpot permissions.",
        "Limit: with Sensitive Data turned on, activity and conversation data is blocked through the MCP server.",
        "Does not cover: data outside HubSpot such as billing or product usage, or your own write rules.",
      ],
    },
    whyCustom: [
      {
        title: "HubSpot plus the systems around it",
        body: "Renewal risk usually needs HubSpot, billing, and support data together. A custom server can join them and cite each source.",
      },
      {
        title: "Your properties and stages",
        body: "Custom properties and pipeline stages carry your definitions. Tools built around them return the numbers your RevOps team reports.",
      },
      {
        title: "Write rules you set",
        body: "We limit which properties AI can change and require confirmation, rather than giving broad write access.",
      },
    ],
    build: {
      api: "HubSpot CRM API v3 (objects, associations, search) and the remote HubSpot MCP server where it fits.",
      auth: "OAuth 2.0 through a HubSpot app with only the scopes each tool needs, or a private app token for server-only jobs.",
      steps: [
        "List the questions and the properties and pipelines they depend on.",
        "Decide where the hosted server is enough and where custom tools are needed.",
        "Build read tools, then property-limited write tools with confirmation.",
        "Deploy and roll out to a pilot team.",
      ],
    },
    faqs: [
      {
        question: "Why not just use HubSpot's connector for Claude?",
        answer:
          "Use it if HubSpot alone answers your questions. We build when answers need other systems, your own definitions, or stricter write controls.",
      },
      {
        question: "Can it update deals and contacts?",
        answer:
          "Yes, if you choose. We limit writes to named properties and show the change for confirmation before it is saved.",
      },
      {
        question: "Does Sensitive Data mode affect this?",
        answer:
          "For HubSpot's MCP server, yes: activity data is blocked. A custom server on the standard CRM APIs follows the scopes you grant, and we discuss whether that is appropriate for your data.",
      },
      {
        question: "Will it work in ChatGPT too?",
        answer: "Yes. One MCP server can serve Claude and ChatGPT with the same rules.",
      },
    ],
    sources: [
      {
        label: "HubSpot Developer Changelog: Remote HubSpot MCP server is generally available",
        url: "https://developers.hubspot.com/changelog/remote-hubspot-mcp-server-is-now-generally-available",
      },
      {
        label: "HubSpot docs: Using the HubSpot MCP server",
        url: "https://developers.hubspot.com/docs/build-with-ai/remote-mcp-server",
      },
    ],
    related: [
      "custom-claude-connectors",
      "custom-chatgpt-plugins",
      "done-for-you-claude-connectors",
    ],
  },
  {
    slug: "postgresql",
    name: "PostgreSQL",
    category: "Database",
    metaTitle: "PostgreSQL MCP Server for Claude and ChatGPT",
    metaDescription:
      "A custom PostgreSQL MCP server for your business: named, parameterized tools over approved views, a read-only role, row and time limits, and per-user access. No raw SQL from the model.",
    title:
      "A PostgreSQL MCP server that answers business questions without handing out SQL access.",
    lede: "The reference Postgres MCP server is archived and no longer maintained. Most remaining options give the model a connection string and a run-any-query tool. For a production database, we build something narrower.",
    questions: [
      "How many orders shipped late last week, by carrier?",
      "Which accounts have usage above their plan limit this month?",
      "What is the 30-day retention for customers who signed up in August?",
      "Show the last 20 failed payments with customer and reason.",
    ],
    actions: [
      "Flag an account for follow-up by writing to a dedicated review table",
      "Queue a data correction request instead of editing production rows",
    ],
    existing: {
      summary:
        "There is no maintained official PostgreSQL MCP server from the PostgreSQL project. The MCP reference server (@modelcontextprotocol/server-postgres) was moved to the archived servers repository, which states it is no longer maintained, and Datadog Security Labs showed its read-only mode could be bypassed. Community and hosting-provider servers exist; we review their code before recommending any.",
      points: [
        "Common pattern: a local server with a database connection string and a generic query tool.",
        "Risk: one shared credential, no per-user access, and the model writing arbitrary SQL.",
      ],
    },
    whyCustom: [
      {
        title: "Named tools, not free SQL",
        body: "Each tool runs a reviewed, parameterized query over approved views, so the model cannot wander into tables it should not touch.",
      },
      {
        title: "Database-level guardrails",
        body: "A dedicated read-only role, statement timeouts, and row caps protect production even if a tool is misused.",
      },
      {
        title: "Per-user rules",
        body: "Row-level security or tenant filters from the signed-in user's token mean each person sees only their data.",
      },
    ],
    build: {
      api: "PostgreSQL through a pooled driver, querying views and functions designed for the connector.",
      auth: "OAuth 2.0 for people signing in to the MCP server; a separate least-privilege database role that never reaches the model.",
      steps: [
        "Agree the questions and create views that answer them on a replica.",
        "Build parameterized tools with strict input schemas and row limits.",
        "Add row-level security or tenant filtering from the user's identity.",
        "Deploy remotely with logging, timeouts, and alerts.",
      ],
    },
    faqs: [
      {
        question: "Is there an official Postgres MCP server we can use?",
        answer:
          "Not a maintained one from the MCP project. The reference server is archived. Some database hosts publish their own; we check what fits your setup.",
      },
      {
        question: "Can the model write its own SQL?",
        answer:
          "Only if you want that for a trusted analyst group, and then only against a read-only replica with timeouts. For most teams, named tools are safer and more accurate.",
      },
      {
        question: "Will it slow down our production database?",
        answer:
          "We point it at a read replica where possible and set statement timeouts and row limits so a single question cannot run away.",
      },
      {
        question: "Does this also work for MySQL?",
        answer:
          "The same design works for MySQL and other SQL databases. The tools and guardrails are the same idea; the driver changes.",
      },
    ],
    sources: [
      {
        label: "modelcontextprotocol/servers-archived on GitHub",
        url: "https://github.com/modelcontextprotocol/servers-archived",
      },
      {
        label: "Datadog Security Labs: SQL injection in the Postgres MCP server",
        url: "https://securitylabs.datadoghq.com/articles/mcp-vulnerability-case-study-SQL-injection-in-the-postgresql-mcp-server/",
      },
    ],
    related: ["custom-mcp-servers", "custom-claude-connectors", "done-for-you-claude-connectors"],
  },
  {
    slug: "sql-server",
    name: "Microsoft SQL Server",
    category: "Database",
    metaTitle: "SQL Server MCP Server for Claude and ChatGPT",
    metaDescription:
      "Custom SQL Server and Azure SQL MCP servers for Claude and ChatGPT: curated entities and stored procedures, Entra ID sign-in, and business logic for line-of-business databases.",
    title: "SQL Server and Azure SQL in Claude and ChatGPT, through a controlled tool surface.",
    lede: "Microsoft's open-source SQL MCP Server, part of Data API builder, exposes configured tables, views, and stored procedures with role-based access. It is a strong base. We configure it, or build beside it, for the line-of-business databases your company depends on.",
    questions: [
      "What did each branch invoice yesterday, from the ERP database?",
      "Which jobs are scheduled next week without an assigned technician?",
      "Show stock below reorder point for the main warehouse.",
      "Which customers' contracts expire this month, from the contracts table?",
    ],
    actions: [
      "Run an approved stored procedure to reassign a job, after confirmation",
      "Insert a note into a customer's history table",
    ],
    existing: {
      summary:
        "Microsoft's SQL MCP Server is an open-source feature of Data API builder (version 1.7 and later). It is self-hosted, supports streamable HTTP and stdio, and exposes only the entities and operations a role is allowed. It is not a hosted connector in the Claude or ChatGPT directories.",
      points: [
        "Covers: configured tables, views, and stored procedures with role-based access, for SQL Server, Azure SQL, and other databases.",
        "Requires: someone to write the configuration, host it, and set up authentication.",
        "Does not cover: business definitions across tables, or combining SQL Server with other systems.",
      ],
    },
    whyCustom: [
      {
        title: "Old schemas, clear tools",
        body: "Line-of-business databases often have cryptic table names. We expose views and procedures named for the business, with descriptions Claude can pick correctly.",
      },
      {
        title: "Writes through stored procedures",
        body: "Changes run through approved procedures that enforce your rules, never through direct table edits.",
      },
      {
        title: "On-premises reach",
        body: "Many SQL Server databases sit on a private network. We deploy the server where it can reach the database safely and still be reachable by Claude over HTTPS.",
      },
    ],
    build: {
      api: "Data API builder's SQL MCP Server where it fits, or a custom MCP server using parameterized queries and stored procedures.",
      auth: "Microsoft Entra ID with OAuth 2.0 for users, and a least-privilege SQL login or managed identity for the database.",
      steps: [
        "Inventory the tables and procedures behind the questions in scope.",
        "Create views or procedures with business names, then configure entities and roles.",
        "Deploy in Azure or on your network with HTTPS and Entra sign-in.",
        "Test in Claude and ChatGPT with real questions and refusals.",
      ],
    },
    faqs: [
      {
        question: "Should we use Microsoft's SQL MCP Server?",
        answer:
          "Often, yes, as the base. It is open source and role-aware. We help configure, host, and secure it, and add a custom layer only where your business logic needs one.",
      },
      {
        question: "Our SQL Server is on-premises. Can Claude reach it?",
        answer:
          "Claude connects from Anthropic's cloud, so the MCP server needs a public HTTPS endpoint. We place it so the database itself stays private.",
      },
      {
        question: "Can the AI update data?",
        answer: "Only through stored procedures you approve, with confirmation and logging.",
      },
      {
        question: "Does it work with Azure SQL?",
        answer:
          "Yes. The same design works for SQL Server, Azure SQL, and Azure SQL Managed Instance.",
      },
    ],
    sources: [
      {
        label: "Microsoft Learn: SQL MCP Server overview",
        url: "https://learn.microsoft.com/en-us/azure/data-api-builder/mcp/overview",
      },
      {
        label: "Azure SQL Dev Corner: Introducing SQL MCP Server",
        url: "https://devblogs.microsoft.com/azure-sql/introducing-sql-mcp-server/",
      },
    ],
    related: ["custom-mcp-servers", "custom-chatgpt-plugins", "done-for-you-claude-connectors"],
  },
  {
    slug: "snowflake",
    name: "Snowflake",
    category: "Data warehouse",
    metaTitle: "Snowflake MCP Server and Custom Claude Connector",
    metaDescription:
      "Custom Snowflake MCP servers for Claude and ChatGPT: semantic views, Cortex Agents, and governed SQL set up so business users get consistent, warehouse-backed answers.",
    title: "Snowflake answers in Claude and ChatGPT, governed by your semantic layer.",
    lede: "Snowflake offers a managed MCP server that can expose Cortex Analyst, Cortex Search, Cortex Agents, SQL execution, and your own functions as tools. The hard work is the semantic views and roles behind it. That is where we focus.",
    questions: [
      "What was net revenue by region last quarter, using our finance definitions?",
      "Which product lines had the biggest change in gross margin month over month?",
      "Find support tickets mentioning delivery delays in the last 30 days and summarize themes.",
      "How many active customers do we have today, by segment?",
    ],
    actions: [
      "Save a reviewed query as a shared view for the analytics team",
      "Log a data quality issue to a tracking table for the data team",
    ],
    existing: {
      summary:
        "Snowflake documents a Snowflake-managed MCP server, created with CREATE MCP SERVER, that serves Cortex Analyst, Cortex Search, Cortex Agents, SQL execution, and custom tools without separate infrastructure. The older Snowflake-Labs community MCP server is deprecated in favor of it.",
      points: [
        "Covers: governed access to Snowflake objects as MCP tools, with Snowflake roles.",
        "Requires: semantic views, search services, and agents to be designed and maintained.",
        "Does not cover: systems outside Snowflake that answers also depend on.",
      ],
    },
    whyCustom: [
      {
        title: "The semantic layer decides accuracy",
        body: "Good answers depend on semantic views that define revenue, customers, and periods the way your finance team does. We build and test those.",
      },
      {
        title: "Roles and cost control",
        body: "We set least-privilege roles and warehouse sizing so AI questions do not see restricted data or run up compute.",
      },
      {
        title: "Beyond the warehouse",
        body: "When an answer also needs a live CRM or ERP record, a custom MCP server can combine Snowflake with that system.",
      },
    ],
    build: {
      api: "Snowflake-managed MCP server with Cortex Analyst semantic views, Cortex Search services, and Cortex Agents; SQL API for custom tools.",
      auth: "OAuth 2.0 through Snowflake, with each user mapped to a role, or key-pair auth for service-only jobs.",
      steps: [
        "Agree the metrics and their definitions with finance and analytics.",
        "Build semantic views and search services, and test them against known answers.",
        "Create the MCP server and grant least-privilege roles.",
        "Connect Claude or ChatGPT and monitor accuracy and credit use.",
      ],
    },
    faqs: [
      {
        question: "Does Snowflake already have an MCP server?",
        answer:
          "Yes, a Snowflake-managed MCP server. We use it in most projects. Our work is the semantic views, agents, roles, and testing that make its answers right.",
      },
      {
        question: "How do we stop wrong numbers?",
        answer:
          "By defining metrics once in semantic views and testing the connector against figures your finance team has already signed off.",
      },
      {
        question: "Will it increase our Snowflake bill?",
        answer:
          "Questions use compute and Cortex features may have their own costs. We size warehouses, set timeouts, and monitor usage so costs stay visible.",
      },
      {
        question: "Can people see data their role cannot?",
        answer:
          "No. Calls run under Snowflake roles, and masking and row access policies still apply.",
      },
    ],
    sources: [
      {
        label: "Snowflake docs: Snowflake-managed MCP server",
        url: "https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp",
      },
      {
        label: "Snowflake-Labs/mcp on GitHub (deprecated notice)",
        url: "https://github.com/Snowflake-Labs/mcp",
      },
    ],
    related: ["custom-mcp-servers", "custom-claude-connectors", "custom-chatgpt-plugins"],
  },
  {
    slug: "airtable",
    name: "Airtable",
    category: "Operations database",
    metaTitle: "Airtable MCP Server and Custom ChatGPT Plugin",
    metaDescription:
      "Custom Airtable connectors for Claude and ChatGPT: limited to the bases and fields you choose, schema changes blocked, writes confirmed, and Airtable combined with your other systems.",
    title: "Airtable connectors that change only what you allow.",
    lede: "Airtable runs an official hosted MCP server that can read and write records and even build tables and fields. That power is the reason some teams want a narrower connector for the bases that run operations.",
    questions: [
      "Which projects in the Delivery base are past their due date, and who owns them?",
      "How many open hiring requisitions do we have by department?",
      "Which vendors in the Procurement base have contracts ending this quarter?",
      "Summarize this week's status updates from the Projects table.",
    ],
    actions: [
      "Update a project status after the owner confirms",
      "Add a new request record with required fields validated",
    ],
    existing: {
      summary:
        "Airtable hosts an official MCP server at mcp.airtable.com with OAuth sign-in, included on existing plans and counted against normal API rate limits. Airtable says it reads and writes records and can now build tables, interfaces, and automations, and that MCP access mirrors each user's existing Airtable permissions. We did not confirm a listing in ChatGPT's directory.",
      points: [
        "Covers: record search, create and update, plus tools that build tables, interfaces, and draft automations, across bases the user can access.",
        "Does not cover: limiting AI to certain bases or fields beyond the user's own access, or blocking schema changes by policy.",
      ],
    },
    whyCustom: [
      {
        title: "Narrower than the user",
        body: "A custom connector can reach only named bases and fields, even if the person has wider access in Airtable.",
      },
      {
        title: "No surprise schema edits",
        body: "We leave out tools that create or change tables and fields, so the structure your team relies on stays put.",
      },
      {
        title: "Airtable plus the rest",
        body: "Operations data often needs context from a CRM or accounting system. A custom server can bring both into one answer.",
      },
    ],
    build: {
      api: "Airtable Web API: records, schema read, and webhooks where needed.",
      auth: "OAuth 2.0 with scopes per base, or a personal access token limited to named bases for service jobs.",
      steps: [
        "Pick the bases, tables, and fields in scope.",
        "Build read tools with filters that match how your team works.",
        "Add record updates with validation and confirmation, without schema tools.",
        "Deploy for Claude and ChatGPT with the same rules.",
      ],
    },
    faqs: [
      {
        question: "Why not use Airtable's official MCP server?",
        answer:
          "If broad access to everything a user can open is fine, use it. We build when you want tighter limits, no schema changes, or other systems in the same answer.",
      },
      {
        question: "Can the AI delete records?",
        answer: "Not in our default build. Deletes are left out unless you ask for them.",
      },
      {
        question: "Does it count against Airtable API limits?",
        answer:
          "Yes. We batch requests and cache schema so normal use stays well within the limits.",
      },
      {
        question: "Will it work in ChatGPT?",
        answer: "Yes. The same MCP server serves Claude and ChatGPT.",
      },
    ],
    sources: [
      {
        label: "Airtable: Using the Airtable MCP server",
        url: "https://support.airtable.com/articles/9897799762-using-the-airtable-mcp-server",
      },
      {
        label: "Airtable: The MCP server now builds interfaces and automations",
        url: "https://www.airtable.com/articles/mcp-server-interfaces-automations",
      },
      {
        label: "Airtable: MCP for teams, forms and interface permissions",
        url: "https://www.airtable.com/articles/mcp-forms-and-interface-permissions",
      },
      {
        label: "PulseMCP: Official Airtable MCP server listing",
        url: "https://www.pulsemcp.com/servers/airtable",
      },
      {
        label: "TrueFoundry: Airtable MCP server tools and scopes",
        url: "https://www.truefoundry.com/blog/airtable-mcp-server",
      },
    ],
    related: [
      "custom-chatgpt-plugins",
      "custom-claude-connectors",
      "done-for-you-claude-connectors",
    ],
  },
];

export function getConnectorSystem(slug: string): ConnectorSystem | undefined {
  return connectorSystems.find((system) => system.slug === slug);
}

export const connectorSystemPath = (slug: string): `/${string}` => `/connectors/for/${slug}`;
