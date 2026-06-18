import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AiOfferPage } from "@/components/sections/ai-offer-page";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import {
  createServiceJsonLd,
  createSoftwareApplicationJsonLd,
  type AiOfferPageData,
} from "@/lib/ai-offer-pages";

const pageUrl = "https://prestyj.com/custom-ai-agents";
const pageTitle = "Custom AI Agents | Built, Integrated & Managed | Cost & TCO";
const pageDescription =
  "Custom AI agents built for your workflow, data, and systems — designed, integrated, launched, and maintained by Prestyj. Compare custom build vs off-the-shelf TCO, timelines, and what bespoke actually requires.";

const page = {
  slug: "custom-ai-agents",
  url: pageUrl,
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "custom AI agents",
    "custom AI agent development",
    "bespoke AI agents",
    "custom AI agent build cost",
    "custom AI agent TCO",
    "build vs buy AI agent",
    "custom conversational AI",
    "AI agent development service",
    "managed custom AI agents",
    "enterprise custom AI agents",
  ],
  breadcrumbLabel: "Custom AI Agents",
  serviceName: "Prestyj Custom AI Agents",
  serviceType: [
    "Custom AI Agent Development",
    "Bespoke AI Agent Implementation",
    "Custom Conversational AI",
    "Managed Custom AI Agents",
    "AI Agent Systems Integration",
  ],
  offerCatalogName: "Custom AI Agent Services",
  lowPrice: "2497",
  highPrice: "24997",
  offerCount: "4",
  hero: {
    eyebrow: "CUSTOM AI AGENTS · BUILD VS BUY",
    headline: "Custom AI agents, built for your workflow — not a template.",
    accent: "Bespoke where it matters, managed everywhere else.",
    subheadline:
      "When an off-the-shelf agent cannot model your data, rules, or systems, Prestyj designs and builds a custom AI agent — then integrates, launches, monitors, and maintains it. You get bespoke behavior without standing up an internal AI team.",
    primaryCta: {
      href: "/book-demo",
      label: "Scope a custom AI agent",
      description: "Review your workflow, data, and integrations.",
    },
    secondaryCta: {
      href: "/done-for-you-ai-agents",
      label: "Compare done-for-you agents",
      description: "When a managed standard agent is the faster path.",
    },
    stats: [
      {
        value: "3–10 wks",
        label: "typical custom build window",
        detail:
          "Bespoke logic, proprietary data, and deep integrations take longer than configuring a standard agent. Scope drives the timeline.",
      },
      {
        value: "$200K+",
        label: "possible internal build TCO",
        detail:
          "A dedicated team for engineering, prompt QA, integrations, telephony or channels, monitoring, and maintenance adds up over a year.",
      },
      {
        value: "Build vs buy",
        label: "decided on the economics",
        detail:
          "Custom is right when the agent is core IP or no vendor fits. For common revenue workflows, a managed standard agent is usually faster and cheaper.",
      },
    ],
  },
  tldr: {
    title: "When you actually need a custom AI agent",
    bullets: [
      "Build custom when the agent is core intellectual property, depends on proprietary workflows or data no vendor supports, or requires deep product integration that a configurable agent cannot reach.",
      "For common revenue workflows — lead response, voice intake, sales qualification, reactivation, tier-1 support — a managed standard agent is usually faster, cheaper, and lower-risk than a bespoke build.",
      "A fair custom TCO counts design, engineering, integration, prompt QA, monitoring, security, and ongoing maintenance — not just the first build invoice. Prestyj can own the build and the upkeep so it does not become orphaned internal software.",
    ],
  },
  pricingTable: {
    title: "Custom AI agent TCO model",
    description:
      "Custom is the most flexible path and the most expensive to do well. The real comparison is lifetime cost and ownership, not the initial build quote.",
    columns: ["Cost line", "Prestyj managed custom", "Build internally", "Off-the-shelf agent"],
    rows: [
      {
        label: "First-year cash outlay",
        values: ["Scoped custom build + management", "$200K–$500K+ possible", "$1K–$50K tools + labor"],
      },
      {
        label: "Time to useful launch",
        values: ["3–10 weeks typical", "6–18 months", "Days to weeks"],
      },
      {
        label: "Fit to proprietary workflow",
        values: ["Bespoke to your rules and data", "Bespoke, if the team delivers", "Limited to what the platform supports"],
      },
      {
        label: "Systems integration depth",
        values: ["Deep, owned end to end", "Internal engineering", "Shallow to moderate"],
      },
      {
        label: "Ongoing QA + maintenance",
        values: ["Managed after launch", "Internal team, ongoing cost", "Vendor-managed core, your config"],
      },
      {
        label: "Risk of orphaned software",
        values: ["Low — maintained as a service", "High if the team disbands", "Low — vendor owns the core"],
      },
    ],
  },
  alternativesTable: {
    title: "Custom build vs managed standard vs platforms",
    description:
      "This page is for buyers deciding how much customization they truly need before paying for a bespoke build.",
    columns: ["Approach", "Best fit", "Tradeoff", "Buyer note"],
    rows: [
      {
        label: "Prestyj managed custom agent",
        values: ["Unique workflows that off-the-shelf cannot model", "Higher cost and longer timeline than standard", "Best when the agent is core to the business"],
      },
      {
        label: "Prestyj done-for-you standard agent",
        values: ["Common revenue and support workflows", "Less bespoke than a full custom build", "Often the faster, cheaper first move"],
      },
      {
        label: "Internal custom build",
        values: ["AI as core product with a dedicated team", "Maintenance and key-person risk", "Only if AI is core infrastructure"],
      },
      {
        label: "AI agent builder platforms",
        values: ["Technical operators prototyping fast", "You own QA, integrations, monitoring", "Compare labor hours, not just plan price"],
      },
      {
        label: "Off-the-shelf agents",
        values: ["Standard, well-supported use cases", "Limited to the platform's capabilities", "Start here unless you hit a hard limit"],
      },
    ],
  },
  utilitySection: {
    eyebrow: "BUYER UTILITY",
    title: "What a real custom build should include",
    description:
      "Custom does not mean a one-off script handed over and forgotten. A defensible custom agent is designed, integrated, tested, monitored, and maintained — or it quietly rots into unowned internal software.",
    cards: [
      {
        title: "Discovery + solution design",
        description: "Map the workflow, data sources, business rules, edge cases, compliance needs, and success metrics before any code is written.",
      },
      {
        title: "Bespoke build + integration",
        description: "Implement custom logic, prompts, and tools, and integrate deeply with your CRM, data, channels, and internal systems.",
      },
      {
        title: "Evaluation + launch QA",
        description: "Test against real scenarios and edge cases, validate accuracy and escalation, and pilot on contained traffic before full rollout.",
      },
      {
        title: "Monitoring + maintenance",
        description: "Track outcomes, review failures, update prompts and integrations, and own upkeep so the agent keeps working as systems change.",
      },
    ],
  },
  processSection: {
    eyebrow: "BUILD TIMELINE",
    title: "A custom AI agent in three practical phases",
    description:
      "Custom timelines vary with complexity, but the disciplined sequence stays the same: prove the case, build it right, then own it.",
    cards: [
      {
        title: "Validate build vs buy",
        description: "Confirm a standard or done-for-you agent genuinely cannot meet the requirement, so you only pay for custom where it earns its cost.",
      },
      {
        title: "Design and build the agent",
        description: "Specify behavior, data, integrations, and guardrails, then implement and evaluate against real scenarios and edge cases.",
      },
      {
        title: "Launch, monitor, and maintain",
        description: "Pilot, measure outcomes, tune, and keep the agent maintained as your data, tools, and policies evolve.",
      },
    ],
  },
  relatedLinks: [
    {
      href: "/done-for-you-ai-agents",
      label: "Done-for-you AI agents",
      description: "Managed standard agents — often the faster, cheaper path before going custom.",
    },
    {
      href: "/best-for/custom-ai-development",
      label: "Custom AI development",
      description: "Use-case page for buyers comparing custom development approaches.",
    },
    {
      href: "/ai-consulting",
      label: "AI consulting",
      description: "Strategy and scoping to decide what to build before you build it.",
    },
    {
      href: "/blog/custom-ai-agent-vs-off-the-shelf-3-year-tco",
      label: "Custom vs off-the-shelf TCO",
      description: "Citation-winning article on three-year AI agent total cost of ownership.",
    },
    {
      href: "/blog/custom-ai-agent-build-cost-breakdown-2026",
      label: "Custom AI build cost breakdown",
      description: "Line-item view of AI build costs and implementation drivers.",
    },
    {
      href: "/blog/hidden-costs-custom-ai-agents-2026",
      label: "Hidden costs of custom AI agents",
      description: "The maintenance, QA, and integration costs that quotes often omit.",
    },
  ],
  faqs: [
    {
      question: "What is a custom AI agent?",
      answer:
        "A custom AI agent is built specifically for your workflow, data, business rules, and systems instead of being configured from a standard template. It is the right choice when off-the-shelf or done-for-you agents cannot model your logic, integrate deeply enough, or meet a proprietary requirement.",
    },
    {
      question: "How much does a custom AI agent cost?",
      answer:
        "Cost depends on the complexity of the logic, the depth of integrations, data requirements, channels, and ongoing maintenance. A focused custom agent is far less than a multi-system enterprise build. The honest comparison is total cost of ownership over time versus a managed standard agent or off-the-shelf platform.",
    },
    {
      question: "Should I build custom or buy an off-the-shelf agent?",
      answer:
        "Start by checking whether a standard or done-for-you agent can do the job, because it is usually faster and cheaper. Go custom only when the agent is core intellectual property, depends on proprietary workflows no vendor supports, or requires deep integration a configurable product cannot reach.",
    },
    {
      question: "Why not just hire engineers and build it in-house?",
      answer:
        "You can, if AI agents are core infrastructure and you can fund a dedicated team for engineering, prompt QA, integrations, monitoring, security, and maintenance indefinitely. Otherwise an internal build often becomes orphaned software. Prestyj can build the custom agent and own its upkeep as a managed service.",
    },
    {
      question: "Do you maintain the agent after it launches?",
      answer:
        "Yes. A custom agent that is not monitored and maintained degrades as data, tools, and policies change. Prestyj tracks outcomes, reviews failures, updates prompts and integrations, and keeps the agent working — so it does not become unowned internal software.",
    },
    {
      question: "What workflows are good candidates for custom agents?",
      answer:
        "Workflows with proprietary logic, unusual data, strict compliance requirements, or deep system integration are the strongest custom candidates. Common revenue workflows like lead response, voice intake, sales qualification, reactivation, and tier-1 support are usually better served by a managed standard agent.",
    },
  ],
  finalCta: {
    title: "Find out whether you actually need custom — before you pay for it.",
    description:
      "Prestyj will pressure-test build vs buy, scope a custom AI agent only where it earns its cost, and compare it against managed standard agents and off-the-shelf platforms.",
    primaryCta: {
      href: "/book-demo",
      label: "Scope a custom AI agent",
      description: "Review your requirements and build path.",
    },
    secondaryCta: {
      href: "/blog/custom-ai-agent-vs-off-the-shelf-3-year-tco",
      label: "Read the TCO guide",
      description: "See the build-vs-buy economics.",
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

export default function CustomAiAgentsPage() {
  return (
    <>
      <SafeJsonLd data={createServiceJsonLd(page)} />
      <SafeJsonLd data={createSoftwareApplicationJsonLd(page)} />
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
