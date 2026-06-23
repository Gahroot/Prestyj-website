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

const pageUrl = "https://prestyj.com/done-for-you-ai-agents";
const pageTitle = "Done-For-You AI Agents | Your AI Marketing and Sales Team";
const pageDescription =
  "Your done-for-you AI marketing and sales team: voice agents that answer every call, sales agents that respond in 60 seconds, marketing agents that test creative, and appointment booking — all managed by Prestyj.";

const page = {
  slug: "done-for-you-ai-agents",
  url: pageUrl,
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "done-for-you AI agents",
    "managed AI agents",
    "turnkey AI agents",
    "AI agent implementation service",
    "custom AI agent TCO",
    "AI agent build vs buy",
    "done for you AI business",
    "AI implementation service",
  ],
  breadcrumbLabel: "Done-For-You AI Agents",
  serviceName: "Prestyj Done-For-You AI Agents",
  serviceType: [
    "Done-For-You AI Agents",
    "Managed AI Agent Implementation",
    "Turnkey AI Voice Agents",
    "AI Lead Response Implementation",
    "AI Sales Agent Implementation",
    "AI Marketing Agent Implementation",
  ],
  offerCatalogName: "Done-For-You AI Agent Services",
  lowPrice: "497",
  highPrice: "4997",
  offerCount: "5",
  hero: {
    eyebrow: "DONE-FOR-YOU AI AGENTS · YOUR MARKETING AND SALES TEAM",
    headline: "Your done-for-you AI marketing and sales team.",
    accent: "Live in weeks, not quarters.",
    subheadline:
      "Prestyj designs, launches, monitors, and improves AI agents for voice, sales follow-up, lead response, reactivation, and marketing — a complete done-for-you system for service businesses and real estate teams, not a tool you learn.",
    primaryCta: {
      href: "/book-demo",
      label: "Book a call",
      description: "Review your workflow and implementation path.",
    },
    secondaryCta: {
      href: "/pricing",
      label: "See pricing",
      description: "Review plans for the full done-for-you system.",
    },
    stats: [
      {
        value: "1–2 wks",
        label: "typical first launch window",
        detail: "For focused lead response, voice, or reactivation workflows with clear source systems.",
      },
      {
        value: "$200K+",
        label: "possible internal build TCO",
        detail: "Engineering, product, ops, QA, telephony, integrations, monitoring, and maintenance add up fast.",
      },
      {
        value: "60–80%",
        label: "potential TCO reduction",
        detail: "When replacing internal build labor or fragmented vendor/tool stacks with managed execution.",
      },
    ],
  },
  tldr: {
    title: "Your done-for-you AI marketing and sales team",
    bullets: [
      "Prestyj runs your AI voice agents, sales follow-up, lead response, reactivation, and marketing — so service businesses and real estate teams get a complete system, not a tool to learn.",
      "Every agent is part of one workflow: ads generate demand, AI answers every call, sales agents respond in 60 seconds, and appointments land on your calendar — 24/7.",
      "Done for you means Prestyj owns the design, implementation, monitoring, and improvement. You supply the business rules; we handle the rest.",
    ],
  },
  pricingTable: {
    title: "Done-for-you AI agent TCO model",
    description:
      "The managed price is rarely the cheapest sticker price, but it often wins when internal build labor, delays, and maintenance are counted honestly.",
    columns: ["Cost line", "Prestyj done-for-you", "Build internally", "DIY AI platform"],
    rows: [
      {
        label: "First-year cash outlay",
        values: ["Scoped managed plan", "$200K–$500K+ possible", "$1K–$50K tools + labor"],
      },
      {
        label: "Time to useful launch",
        values: ["Days to weeks", "6–18 months", "Weeks to months if team has expertise"],
      },
      {
        label: "Technical work required from buyer",
        values: ["Low", "High", "Moderate to high"],
      },
      {
        label: "Ongoing QA and optimization",
        values: ["Managed", "Internal team", "Your team or consultant"],
      },
      {
        label: "Integration maintenance",
        values: ["Included in managed scope", "Internal engineering", "Often hidden until something breaks"],
      },
      {
        label: "Failure cost",
        values: ["Contained pilot and managed iteration", "Large sunk cost and delayed revenue", "Tool churn and fragmented workflows"],
      },
    ],
  },
  alternativesTable: {
    title: "Managed AI agents vs custom builds and tools",
    description:
      "This page is for buyers deciding how to get an AI workflow live, not just which model API or builder has the lowest monthly fee.",
    columns: ["Approach", "Best fit", "Tradeoff", "Buyer note"],
    rows: [
      {
        label: "Prestyj done-for-you AI agents",
        values: ["Commercial teams that need implementation and outcomes", "Less control than building every component", "Best when time-to-value and ops ownership matter"],
      },
      {
        label: "Internal custom build",
        values: ["Unique workflows, proprietary data, deep product needs", "High cost, long timeline, maintenance burden", "Only build if AI is core infrastructure"],
      },
      {
        label: "AI agent builders",
        values: ["Technical operators prototyping workflows", "You still own QA, integrations, and monitoring", "Compare labor hours, not just plan price"],
      },
      {
        label: "Consultants",
        values: ["Strategy, audits, and custom advisory", "May stop before production ownership", "Ask who monitors performance after launch"],
      },
      {
        label: "Point solutions",
        values: ["One narrow task like chat or transcription", "Fragmented buyer journey", "Works if the problem is isolated"],
      },
    ],
  },
  utilitySection: {
    eyebrow: "BUYER UTILITY",
    title: "What done-for-you should include",
    description:
      "A real turnkey AI service includes workflow design, implementation, testing, monitoring, and improvement. Otherwise, the buyer is still doing the hard parts after the sale.",
    cards: [
      {
        title: "Workflow design",
        description: "Map triggers, channels, qualification rules, escalation paths, CRM fields, success metrics, and failure modes.",
      },
      {
        title: "Technical implementation",
        description: "Connect phone, SMS, email, calendar, CRM, forms, tracking, and reporting systems without making the buyer manage APIs.",
      },
      {
        title: "Launch QA",
        description: "Test edge cases, compliance needs, handoffs, transcripts, booking outcomes, and fallback paths before full traffic.",
      },
      {
        title: "Ongoing optimization",
        description: "Review conversations, outcomes, no-shows, objections, and missed opportunities so the agent improves after launch.",
      },
    ],
  },
  processSection: {
    eyebrow: "IMPLEMENTATION TIMELINE",
    title: "A managed AI launch in four practical phases",
    description:
      "The timeline depends on system complexity, but the sequence should stay the same: scope, build, validate, optimize.",
    cards: [
      {
        title: "Scope the revenue workflow",
        description: "Choose one commercially important workflow such as missed-call response, lead qualification, voice intake, or dormant-lead reactivation.",
      },
      {
        title: "Build and connect the agent",
        description: "Implement prompts, scripts, channel routing, integrations, notifications, CRM notes, and human handoff rules.",
      },
      {
        title: "Launch, monitor, and improve",
        description: "Measure real outcomes, review exceptions, tune messaging, expand channels, and add adjacent workflows only after the first one works.",
      },
    ],
  },
  relatedLinks: [
    {
      href: "/done-for-you-ai-customer-support",
      label: "Done-for-you AI customer support",
      description: "Managed chat, email, and help-desk support implementation with ticket deflection.",
    },
    {
      href: "/custom-ai-agents",
      label: "Custom AI agents",
      description: "Bespoke agents for workflows off-the-shelf and standard managed agents cannot model.",
    },
    {
      href: "/ai-consulting",
      label: "AI consulting",
      description: "Strategy, audit, and ROI-ranked roadmap before committing to a build.",
    },
    {
      href: "/best-for/done-for-you-ai",
      label: "Done-for-you AI use case",
      description: "Existing best-for page for turnkey AI implementation buyers.",
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
      href: "/ai-sales-agents",
      label: "AI sales agents",
      description: "Managed sales-agent page for SDR replacement and cost-per-meeting queries.",
    },
    {
      href: "/ai-voice-agents",
      label: "AI voice agents",
      description: "Managed voice-agent page for cost-per-minute and answering-service comparisons.",
    },
  ],
  faqs: [
    {
      question: "What are done-for-you AI agents?",
      answer:
        "Done-for-you AI agents are managed AI workflows where the provider designs, implements, integrates, monitors, and improves the agent instead of only selling software access. The buyer supplies business rules and approvals; the provider owns the technical execution.",
    },
    {
      question: "How much does done-for-you AI cost?",
      answer:
        "Pricing depends on workflow complexity, channels, integrations, volume, and ongoing optimization requirements. A simple lead-response or voice workflow may be priced like a managed monthly service, while complex custom agents require deeper scoping. The right comparison is total cost of ownership versus internal build or DIY tooling.",
    },
    {
      question: "Is done-for-you AI cheaper than building internally?",
      answer:
        "Often, yes. Internal builds can require engineering, product, QA, telephony, CRM integration, monitoring, security, and ongoing maintenance. If AI is not your core product, managed implementation can reduce both cost and time-to-value.",
    },
    {
      question: "When should I build a custom AI agent instead?",
      answer:
        "Build custom when the agent is core intellectual property, depends on proprietary workflows no vendor can support, or requires deep product integration that justifies a dedicated team. For common revenue workflows like lead response, voice intake, sales qualification, and reactivation, done-for-you is usually faster.",
    },
    {
      question: "What workflows can Prestyj manage?",
      answer:
        "Prestyj focuses on marketing and sales workflows: AI lead response, AI sales agents, AI voice agents, AI receptionist, lead reactivation, batch video ads, social media content, and marketing automation tied to pipeline outcomes for service businesses and real estate teams.",
    },
    {
      question: "How do I avoid buying a black-box AI service?",
      answer:
        "Ask for the workflow map, success metrics, escalation rules, data captured, QA process, reporting cadence, integration ownership, and who updates the agent after launch. Done-for-you should not mean invisible or unmeasurable.",
    },
  ],
  finalCta: {
    title: "Get your done-for-you AI marketing and sales team live.",
    description:
      "Prestyj will map your done-for-you AI marketing and sales system, estimate managed implementation effort, and show how voice, sales, and marketing agents work together to capture every lead.",
    primaryCta: {
      href: "/book-demo",
      label: "Book a call",
      description: "Review your implementation path.",
    },
    secondaryCta: {
      href: "/pricing",
      label: "View pricing",
      description: "See plans for the full done-for-you system.",
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

export default function DoneForYouAiAgentsPage() {
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
