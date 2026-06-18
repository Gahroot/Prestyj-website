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

const pageUrl = "https://prestyj.com/done-for-you-ai-customer-support";
const pageTitle = "Done-For-You AI Customer Support Implementation | Managed Setup";
const pageDescription =
  "Done-for-you AI customer support implementation across chat, email, and help desk. Prestyj designs, integrates, launches, and optimizes support agents that deflect tickets and escalate cleanly — no internal build.";

const page = {
  slug: "done-for-you-ai-customer-support",
  url: pageUrl,
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "done-for-you AI customer support implementation",
    "done for you AI customer support",
    "AI customer support implementation service",
    "managed AI support agent",
    "AI help desk implementation",
    "AI customer service setup service",
    "AI ticket deflection implementation",
    "AI support chatbot done for you",
    "customer support AI implementation",
    "turnkey AI customer service",
  ],
  breadcrumbLabel: "Done-For-You AI Customer Support",
  serviceName: "Prestyj Done-For-You AI Customer Support Implementation",
  serviceType: [
    "Done-For-You AI Customer Support Implementation",
    "Managed AI Help Desk Agents",
    "AI Ticket Deflection Implementation",
    "AI Support Chat Implementation",
    "AI Email Support Implementation",
    "AI Customer Service Integration",
  ],
  offerCatalogName: "Done-For-You AI Customer Support Services",
  lowPrice: "997",
  highPrice: "7997",
  offerCount: "5",
  hero: {
    eyebrow: "DONE-FOR-YOU AI CUSTOMER SUPPORT · MANAGED IMPLEMENTATION",
    headline: "Done-for-you AI customer support, implemented end to end.",
    accent: "Deflect tickets, not customers.",
    subheadline:
      "Prestyj scopes, builds, integrates, launches, monitors, and improves AI support agents across chat, email, and your help desk — so your team buys resolved tickets and faster response times instead of staffing another build project.",
    primaryCta: {
      href: "/book-demo",
      label: "Scope a managed support agent",
      description: "Review your tickets, channels, and integrations.",
    },
    secondaryCta: {
      href: "/done-for-you-ai-agents",
      label: "See all done-for-you AI agents",
      description: "Sales, voice, lead response, and marketing workflows.",
    },
    stats: [
      {
        value: "1–3 wks",
        label: "typical first launch window",
        detail:
          "For a single channel with a clean knowledge base and one help-desk integration. Multi-channel and multi-system rollouts take longer.",
      },
      {
        value: "40–70%",
        label: "potential ticket deflection",
        detail:
          "Repetitive, well-documented questions are the most deflectable. Edge cases and account-specific issues should still escalate to humans.",
      },
      {
        value: "24/7",
        label: "first-response coverage",
        detail:
          "AI answers instantly at any hour, then hands complex or sensitive cases to your team with full conversation context.",
      },
    ],
  },
  tldr: {
    title: "Who should buy done-for-you AI support",
    bullets: [
      "Choose done-for-you when support volume is hurting response times or CSAT but you do not have spare engineers, prompt QA, and help-desk integration capacity to build and maintain it internally.",
      "It works best when a large share of tickets are repetitive and documented — order status, account changes, how-to questions, returns, scheduling — so the agent can resolve them while humans handle judgment calls.",
      "A fair comparison counts knowledge-base cleanup, integration work, prompt QA, escalation design, monitoring, and ongoing tuning — not just the per-conversation price of a chatbot tool.",
    ],
  },
  pricingTable: {
    title: "Done-for-you AI support TCO model",
    description:
      "The managed price is rarely the lowest sticker price, but it usually wins once knowledge-base prep, integration work, QA, and ongoing tuning are counted honestly.",
    columns: ["Cost line", "Prestyj done-for-you", "Build internally", "DIY support chatbot"],
    rows: [
      {
        label: "First-year cash outlay",
        values: ["Scoped managed plan", "$150K–$400K+ possible", "$5K–$60K tools + labor"],
      },
      {
        label: "Time to useful launch",
        values: ["1–3 weeks per channel", "4–12 months", "Weeks to months if team has expertise"],
      },
      {
        label: "Knowledge base preparation",
        values: ["Audited and structured for you", "Internal team", "Your team, often underestimated"],
      },
      {
        label: "Help-desk + CRM integration",
        values: ["Included in managed scope", "Internal engineering", "Often limited or manual"],
      },
      {
        label: "Escalation + handoff design",
        values: ["Built and tested before launch", "Internal team", "Frequently an afterthought"],
      },
      {
        label: "Ongoing QA and tuning",
        values: ["Managed against deflection + CSAT", "Internal team", "Your team or a consultant"],
      },
      {
        label: "Failure cost",
        values: ["Contained pilot and managed iteration", "Large sunk cost, frustrated customers", "Bad answers erode trust quietly"],
      },
    ],
  },
  alternativesTable: {
    title: "Managed AI support vs platforms, builds, and BPOs",
    description:
      "This page is for buyers deciding how to get AI support live and accountable, not just which chatbot tool has the lowest monthly fee.",
    columns: ["Approach", "Best fit", "Tradeoff", "Buyer note"],
    rows: [
      {
        label: "Prestyj done-for-you AI support",
        values: ["Teams that need implementation and outcomes", "Less control than building every component", "Best when response time and CSAT matter now"],
      },
      {
        label: "Internal custom build",
        values: ["Unique support flows, proprietary systems", "High cost, long timeline, maintenance burden", "Only build if support AI is core infrastructure"],
      },
      {
        label: "Support chatbot platforms",
        values: ["Technical teams configuring their own bot", "You own KB prep, integrations, QA, escalation", "Compare labor hours, not just plan price"],
      },
      {
        label: "Outsourced BPO / contact center",
        values: ["Pure human capacity at volume", "Higher cost per ticket, slower nights/weekends", "AI can deflect tier-1 before it reaches them"],
      },
      {
        label: "Generic AI consultants",
        values: ["Strategy, audits, advisory", "May stop before production ownership", "Ask who runs QA and tuning after launch"],
      },
    ],
  },
  utilitySection: {
    eyebrow: "BUYER UTILITY",
    title: "What a real support implementation includes",
    description:
      "Turnkey AI customer support is more than a chat widget. The hard parts are the knowledge base, the integrations, the escalation rules, and the ongoing tuning — which is exactly what a done-for-you implementation should own.",
    cards: [
      {
        title: "Knowledge base audit",
        description: "Inventory help articles, macros, past tickets, and policies; fix gaps and contradictions so the agent answers from a clean, current source.",
      },
      {
        title: "Channel + help-desk integration",
        description: "Connect chat, email, and your help desk (Zendesk, Intercom, Freshdesk, Gorgias, HubSpot) so conversations, tickets, and customer context stay in sync.",
      },
      {
        title: "Escalation + handoff design",
        description: "Define which intents resolve automatically and which warm-transfer to a human with full context — including refunds, billing disputes, and sensitive accounts.",
      },
      {
        title: "Deflection + CSAT tuning",
        description: "Review transcripts, track deflection rate, resolution rate, and CSAT, and tune answers and routing so quality improves after launch instead of drifting.",
      },
    ],
  },
  processSection: {
    eyebrow: "IMPLEMENTATION TIMELINE",
    title: "A managed support launch in three practical phases",
    description:
      "The timeline depends on channels, ticket complexity, and integrations, but the sequence stays the same: scope and prep, build and connect, launch and tune.",
    cards: [
      {
        title: "Scope and prep the knowledge",
        description: "Pick the highest-volume channel and ticket types, audit the knowledge base, and define success metrics — deflection rate, first-response time, and CSAT.",
      },
      {
        title: "Build, integrate, and QA",
        description: "Implement the agent, connect the help desk and CRM, design escalation paths, and test real ticket scenarios, edge cases, and handoffs before live traffic.",
      },
      {
        title: "Launch, monitor, and improve",
        description: "Go live on contained traffic, review transcripts and escalations, tune answers and routing, then expand to more channels and intents once quality holds.",
      },
    ],
  },
  relatedLinks: [
    {
      href: "/done-for-you-ai-agents",
      label: "Done-for-you AI agents",
      description: "Managed implementation across sales, voice, lead response, and marketing workflows.",
    },
    {
      href: "/ai-receptionist",
      label: "AI receptionist",
      description: "Managed phone coverage for inbound calls, routing, and after-hours answering.",
    },
    {
      href: "/ai-voice-agents",
      label: "AI voice agents",
      description: "Managed voice-agent page for cost-per-minute and answering-service comparisons.",
    },
    {
      href: "/custom-ai-agents",
      label: "Custom AI agents",
      description: "When a support workflow needs bespoke logic and deep system integration.",
    },
    {
      href: "/ai-consulting",
      label: "AI consulting",
      description: "Strategy, audit, and rollout planning before committing to an implementation.",
    },
    {
      href: "/blog/ai-customer-engagement-2026",
      label: "AI customer engagement",
      description: "Article on automating customer engagement and support touchpoints.",
    },
  ],
  faqs: [
    {
      question: "What is done-for-you AI customer support implementation?",
      answer:
        "It is a managed engagement where the provider designs, integrates, launches, monitors, and improves AI support agents across chat, email, and your help desk — instead of only selling chatbot software. You supply your knowledge base, policies, and approvals; the provider owns the technical execution and ongoing tuning.",
    },
    {
      question: "How much can AI realistically deflect?",
      answer:
        "Deflection depends on how repetitive and well-documented your tickets are. Teams with a large share of order-status, account, how-to, and policy questions often deflect 40–70% of tier-1 volume. Account-specific, sensitive, or judgment-heavy cases should still escalate to humans with full context.",
    },
    {
      question: "Will AI replace my support team?",
      answer:
        "No. The goal is to remove repetitive tier-1 volume so your team focuses on complex, high-value, and sensitive cases. Well-designed implementations escalate cleanly and warm-transfer with the full conversation, so customers are not forced to repeat themselves.",
    },
    {
      question: "Which help desks and tools do you integrate with?",
      answer:
        "Common integrations include Zendesk, Intercom, Freshdesk, Gorgias, and HubSpot, plus the CRM and order or account systems your agents reference. Integration scope is confirmed during scoping so the agent has the context it needs to resolve and route tickets.",
    },
    {
      question: "Is done-for-you cheaper than building support AI internally?",
      answer:
        "Often, yes. Internal builds require engineering, knowledge-base cleanup, integrations, prompt QA, escalation design, monitoring, and ongoing maintenance. If support AI is not your core product, managed implementation usually reduces both cost and time-to-value.",
    },
    {
      question: "How do I avoid a chatbot that gives wrong answers?",
      answer:
        "Insist on a knowledge-base audit, grounded answers with sources, tested escalation rules, a contained pilot before full traffic, and a tuning cadence tied to deflection rate and CSAT. A done-for-you implementation should be measurable, not a black box.",
    },
  ],
  finalCta: {
    title: "Scope your AI support implementation before you build it.",
    description:
      "Prestyj will audit your tickets and knowledge base, map channels and integrations, and compare managed implementation against internal build and DIY chatbot costs.",
    primaryCta: {
      href: "/book-demo",
      label: "Scope a managed support agent",
      description: "Review your implementation path.",
    },
    secondaryCta: {
      href: "/done-for-you-ai-agents",
      label: "See all done-for-you AI agents",
      description: "Compare adjacent managed workflows.",
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

export default function DoneForYouAiCustomerSupportPage() {
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
