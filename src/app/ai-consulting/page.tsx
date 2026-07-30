import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AiOfferPage } from "@/components/sections/ai-offer-page";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { createServiceJsonLd, type AiOfferPageData } from "@/lib/ai-offer-pages";

const pageUrl = "https://prestyj.com/ai-consulting";
const pageTitle = "Enterprise AI Consulting for Investment Funds | Prestyj";
const pageDescription =
  "Enterprise AI consulting for investment funds and complex companies. Unify data, resolve discrepancies, give AI verified context, and automate high-volume work.";

const page = {
  slug: "ai-consulting",
  url: pageUrl,
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "enterprise AI consulting",
    "AI consulting for investment funds",
    "real estate investment fund AI",
    "enterprise AI data layer",
    "verified AI systems",
    "AI data reconciliation",
    "enterprise AI agents",
    "AI workflow automation consulting",
    "AI strategy for COOs",
    "custom enterprise AI systems",
  ],
  breadcrumbLabel: "Enterprise AI Consulting",
  serviceName: "Prestyj Enterprise AI Consulting",
  serviceType: [
    "Enterprise AI Consulting",
    "AI Data Architecture",
    "Data Reconciliation Systems",
    "Enterprise AI Agent Implementation",
    "AI Workflow Automation",
  ],
  hero: {
    eyebrow: "ENTERPRISE AI CONSULTING · VERIFIED DATA TO AUTOMATED WORK",
    headline: "Make AI work from the same facts",
    accent: "your business trusts.",
    subheadline:
      "Prestyj helps CEOs, COOs, and operating leaders responsible for billion-dollar investment portfolios and complex enterprises build a verified AI operating layer. We unify fragmented sources, surface discrepancies, preserve provenance, and give employees, customers, and AI agents reliable context for real work.",
    primaryCta: {
      href: "/book-demo",
      label: "Book an enterprise AI session",
      description: "Map the data, decisions, and workflows that matter first.",
    },
    secondaryCta: {
      href: "/custom-ai-agents",
      label: "Review custom AI systems",
      description: "See how custom agents fit specialized operations.",
    },
    stats: [
      {
        value: "One layer",
        label: "for approved business truth",
        detail:
          "Models, agents, and employee tools draw from governed context instead of rebuilding an answer from disconnected systems every time.",
      },
      {
        value: "Cross-checked",
        label: "before AI answers",
        detail:
          "Conflicting values, stale records, missing fields, and source disagreements are surfaced for resolution instead of hidden inside a confident response.",
      },
      {
        value: "1 to 100",
        label: "scheduled videos in one day",
        detail:
          "In one high-volume content workflow, the operating target moved from publishing one piece a day to preparing and scheduling 100 with human review.",
      },
    ],
  },
  tldr: {
    title: "Reliable AI needs a truth layer before it needs another chatbot",
    bullets: [
      "Connect the systems that already run the business, then normalize identities, definitions, permissions, and freshness into reusable context.",
      "Make disagreement visible. Every important answer should carry source context, validation status, and a clear path for a person to correct the record.",
      "Put agents on top of that verified layer so they can complete bounded work, reduce repeated retrieval and token usage, and leave an auditable record of what happened.",
    ],
  },
  pricingTable: {
    title: "The architecture that makes enterprise AI dependable",
    description:
      "A useful enterprise AI system is not one prompt connected to every database. It is a controlled path from raw records to verified context to accountable action.",
    columns: ["Layer", "What happens", "Business outcome", "Risk controlled"],
    rows: [
      {
        label: "Connect",
        values: [
          "Ingest approved data from asset, accounting, CRM, document, and operational systems",
          "One governed view of the information AI is allowed to use",
          "Blind spots caused by disconnected sources",
        ],
      },
      {
        label: "Reconcile",
        values: [
          "Match entities, standardize definitions, compare values, and flag conflicts",
          "Teams see which facts agree and which need a decision",
          "Confident answers built on contradictory records",
        ],
      },
      {
        label: "Verify",
        values: [
          "Attach provenance, freshness, permissions, validation state, and ownership",
          "Important outputs can be traced and reviewed",
          "Unverifiable claims and unauthorized data access",
        ],
      },
      {
        label: "Serve",
        values: [
          "Expose reusable context through governed APIs, indexes, and prepared views",
          "Employees and AI tools receive consistent answers faster",
          "Repeated retrieval, oversized prompts, and unnecessary token spend",
        ],
      },
      {
        label: "Act",
        values: [
          "Let agents complete bounded workflows with approvals, logs, and exception handling",
          "AI performs measurable work instead of only generating text",
          "Uncontrolled actions and invisible failures",
        ],
      },
    ],
  },
  alternativesTable: {
    title: "Why most enterprise AI pilots stall after the demo",
    description:
      "The difference is rarely access to a model. It is whether the model receives consistent context, knows what it may do, and can prove what happened afterward.",
    columns: ["Operating model", "Good at", "Breaks when", "Leadership consequence"],
    rows: [
      {
        label: "Ad hoc AI chat",
        values: [
          "Drafting and individual research",
          "The answer depends on company facts or current records",
          "Employees get fast but inconsistent outputs",
        ],
      },
      {
        label: "Point automation",
        values: [
          "One stable trigger and one stable action",
          "The workflow crosses teams, systems, or exceptions",
          "Automation islands create more maintenance",
        ],
      },
      {
        label: "Search over documents",
        values: [
          "Finding passages in an approved corpus",
          "Sources disagree or structured data determines the answer",
          "Retrieved text sounds authoritative without resolving the fact",
        ],
      },
      {
        label: "Verified AI operating layer",
        values: [
          "Shared context, governed access, and multi-step execution",
          "Ownership and review rules have not been defined",
          "AI becomes dependable infrastructure with accountable operators",
        ],
      },
    ],
  },
  utilitySection: {
    eyebrow: "WHERE THE LEVERAGE APPEARS",
    title: "Move from AI experiments to operating capacity",
    description:
      "The verified layer is shared infrastructure. Once it is dependable, the same foundation can support executive decisions, employee tools, customer experiences, and high-volume production without rebuilding the truth for every use case.",
    cards: [
      {
        title: "Portfolio and executive intelligence",
        description:
          "Ask cross-asset questions, compare operating reports, surface exceptions, and prepare decision briefs from governed data with source context attached.",
      },
      {
        title: "Discrepancy control",
        description:
          "Detect conflicting rent rolls, asset records, financial values, dates, or ownership fields and route the exact disagreement to the right reviewer.",
      },
      {
        title: "Reliable employee and customer AI",
        description:
          "Give assistants approved answers, enforce permissions, expose citations where useful, and keep unresolved facts out of customer-facing responses.",
      },
      {
        title: "High-volume production systems",
        description:
          "Turn approved inputs into large batches of videos, static ads, reports, updates, and scheduled content while preserving review gates and brand rules.",
      },
    ],
  },
  processSection: {
    eyebrow: "IMPLEMENTATION SEQUENCE",
    title: "Establish truth. Deploy access. Automate work.",
    description:
      "The sequence prevents a common enterprise mistake: automating a process before the organization agrees on the facts, permissions, and exception rules that process depends on.",
    cards: [
      {
        title: "Establish the verified layer",
        description:
          "Map critical decisions and systems, define the canonical entities and fields, ingest approved sources, and create reconciliation and correction workflows.",
      },
      {
        title: "Deploy trusted AI access",
        description:
          "Serve governed context to employee and customer tools with permissions, source context, evaluation tests, observability, and clear failure behavior.",
      },
      {
        title: "Automate measurable work",
        description:
          "Give agents bounded responsibilities, human approval points, logs, retries, and outcome metrics. Expand only after accuracy and operating value hold.",
      },
    ],
  },
  relatedSection: {
    title: "Original field notes on verified enterprise AI",
    description:
      "Explore the operating patterns behind reliable context, discrepancy handling, lower repeated retrieval, and controlled AI execution.",
  },
  relatedLinks: [
    {
      href: "/blog/enterprise-ai-needs-disagreement-system-not-single-source-of-truth",
      label: "The disagreement system",
      description: "Why enterprise AI must expose conflicting evidence instead of silently choosing a source.",
    },
    {
      href: "/blog/verified-context-layer-enterprise-ai-agents",
      label: "The verified context layer",
      description: "The missing architecture between enterprise systems and AI agents.",
    },
    {
      href: "/blog/ai-for-real-estate-investment-funds-exception-queues",
      label: "AI for real estate investment funds",
      description: "Start with material exception queues instead of another document chatbot.",
    },
    {
      href: "/blog/stop-requerying-company-data-ai-token-costs",
      label: "Stop re-querying the company",
      description: "Reuse verified fact packets without hiding freshness, permissions, or conflicts.",
    },
    {
      href: "/blog/one-video-to-100-ai-workflow-graph",
      label: "From one video to 100",
      description: "The workflow graph that turns generation into controlled production capacity.",
    },
    {
      href: "/custom-ai-agents",
      label: "Custom AI agents",
      description: "Explore agents built around workflows that off-the-shelf tools cannot model safely.",
    },
  ],
  faqs: [
    {
      question: "Who is this enterprise AI consulting for?",
      answer:
        "It is designed for CEOs, COOs, operating partners, and functional leaders at investment funds, real estate investment organizations, and complex enterprises. It fits organizations where critical answers span multiple systems, data quality varies, and a wrong answer can affect capital, operations, customers, or reputation.",
    },
    {
      question: "What is a verified AI data layer?",
      answer:
        "It is a governed layer between source systems and AI applications. It maps entities and business definitions, tracks source and freshness, applies permissions, flags contradictions, and provides reusable context to models and agents. It does not have to replace your warehouse, lake, or systems of record.",
    },
    {
      question: "How does the system handle conflicting sources?",
      answer:
        "We define precedence only where the business has a real rule. When no source is automatically authoritative, the system records the conflict, shows the competing values and provenance, and routes the exception to an accountable reviewer. AI should not quietly choose the most convenient fact.",
    },
    {
      question: "How can this reduce AI token costs?",
      answer:
        "Prepared views, reusable indexes, structured facts, caching, and retrieval rules can reduce the amount of raw context sent to a model on every task. The exact savings depend on workload and architecture, so we baseline retrieval and model usage before claiming an outcome.",
    },
    {
      question: "Can enterprise AI really make a team 100 times more productive?",
      answer:
        "Not as a blanket guarantee. Extreme leverage is realistic in bounded digital workflows where generation, formatting, versioning, quality checks, and scheduling can run in parallel. One content workflow can move from one published asset to 100 prepared and scheduled assets, while judgment, approval, and accountability remain human responsibilities.",
    },
    {
      question: "How do you keep employee and customer AI accurate?",
      answer:
        "We combine approved-source retrieval, structured facts, permission checks, provenance, evaluations, confidence and abstention rules, monitoring, and a correction path. Accuracy is treated as an operating process with owners and feedback, not a one-time prompt-writing exercise.",
    },
    {
      question: "Do you stop at strategy?",
      answer:
        "No. An engagement can include architecture, data integration, reconciliation logic, evaluations, agent development, workflow integration, launch, and ongoing improvement. Scope is based on the systems, risk, and operating outcome rather than a prepackaged software tier.",
    },
  ],
  finalCta: {
    title: "Give every AI system a reliable foundation.",
    description:
      "Bring the decisions, data sources, discrepancies, and workflows that matter most. We will map the verified layer and identify the first piece of work worth putting into production.",
    primaryCta: {
      href: "/book-demo",
      label: "Book an enterprise AI session",
      description: "Start with one consequential decision or workflow.",
    },
    secondaryCta: {
      href: "/custom-ai-agents",
      label: "Review custom AI systems",
      description: "See how specialized agents are scoped and built.",
    },
  },
} satisfies AiOfferPageData;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: page.keywords,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: pageUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
  alternates: {
    canonical: pageUrl,
  },
};

export default function AiConsultingPage() {
  return (
    <>
      <SafeJsonLd data={createServiceJsonLd(page)} />
      <FAQJsonLd faqs={page.faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: page.breadcrumbLabel, url: pageUrl },
        ]}
      />
      <Navbar />
      <AiOfferPage page={page} />
      <Footer />
    </>
  );
}
