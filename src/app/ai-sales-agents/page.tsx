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

const pageUrl = "https://prestyj.com/ai-sales-agents";
const pageTitle = "AI Sales Agents | Pricing, SDR Replacement & Cost per Meeting";
const pageDescription =
  "Compare AI sales agent pricing, SDR replacement economics, cost per qualified meeting, and 24/7 lead response with Prestyj's managed AI sales agents.";

const page = {
  slug: "ai-sales-agents",
  url: pageUrl,
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI sales agents",
    "AI sales agent pricing",
    "AI SDR",
    "AI SDR cost",
    "cost per qualified meeting",
    "AI lead response",
    "SDR replacement",
    "AI sales automation",
  ],
  breadcrumbLabel: "AI Sales Agents",
  serviceName: "Prestyj AI Sales Agents",
  serviceType: [
    "AI Sales Agent",
    "AI SDR",
    "AI Lead Qualification",
    "AI Lead Response",
    "Meeting Booking Automation",
    "Sales Pipeline Automation",
  ],
  offerCatalogName: "AI Sales Agent Plans",
  lowPrice: "497",
  highPrice: "4997",
  offerCount: "4",
  hero: {
    eyebrow: "AI SALES AGENTS · SDR COST COMPARISON",
    headline: "AI sales agents that respond, qualify, and book.",
    accent: "Without $75K SDR overhead.",
    subheadline:
      "Prestyj gives sales teams a managed AI sales agent for inbound lead response, qualification, follow-up, CRM updates, and appointment booking — with cost-per-meeting economics a human SDR team cannot match.",
    primaryCta: {
      href: "/book-demo",
      label: "Book an AI sales demo",
      description: "See how the agent handles your real lead flow.",
    },
    secondaryCta: {
      href: "/solutions/ai-sales-agent-cost",
      label: "Compare SDR costs",
      description: "Review the full SDR cost comparison page.",
    },
    stats: [
      {
        value: "$8–25",
        label: "AI cost per qualified meeting",
        detail: "Typical modeled range when inbound volume is high enough to automate first response.",
      },
      {
        value: "$75–95K",
        label: "loaded annual SDR cost",
        detail: "Salary, benefits, commission, tools, management time, recruiting, and turnover.",
      },
      {
        value: "24/7",
        label: "lead response coverage",
        detail: "AI follows up after hours, on weekends, and during call spikes without queueing leads.",
      },
    ],
  },
  tldr: {
    title: "When AI sales agents make sense",
    bullets: [
      "Use an AI sales agent when your team needs faster inbound lead response, consistent qualification, and lower cost per booked meeting before hiring another SDR.",
      "Keep humans on complex discovery, enterprise account strategy, and closing; let AI handle speed-to-lead, repetitive qualification, reminders, and CRM notes.",
      "The clearest ROI appears when missed calls, stale web leads, no-shows, or after-hours inquiries already cost more than the AI agent subscription.",
    ],
  },
  pricingTable: {
    title: "AI sales agent pricing and SDR cost model",
    description:
      "Use this as a buyer-side planning model. Exact pricing depends on lead volume, channels, CRM complexity, and whether voice, SMS, email, or all three are live.",
    columns: ["Cost line", "Prestyj AI sales agent", "Human SDR", "DIY AI tool"],
    rows: [
      {
        label: "Monthly platform/service cost",
        values: ["$497–$4,997 managed", "$6,250–$7,900 loaded", "$100–$1,500 software + build time"],
      },
      {
        label: "Annual all-in cost",
        values: ["$5,964–$59,964", "$75K–$95K per SDR", "$1,200–$18K plus engineering and ops"],
      },
      {
        label: "Coverage hours",
        values: ["168 hours/week", "~40 hours/week", "Depends on what you build"],
      },
      {
        label: "Cost per qualified meeting",
        values: ["Often $8–$25", "Often $100–$300", "Unclear until workflows are tuned"],
      },
      {
        label: "Ramp and turnover",
        values: ["Live in days or weeks", "3–4 month ramp + turnover risk", "Prompting, QA, and maintenance required"],
      },
      {
        label: "CRM and handoff quality",
        values: ["Managed implementation and notes", "Rep-dependent", "Your team owns integrations"],
      },
    ],
  },
  alternativesTable: {
    title: "AI sales agent alternatives compared",
    description:
      "The best answer is rarely “replace every SDR.” Most buyers use AI as the first-response and qualification layer, then route hot conversations to humans.",
    columns: ["Option", "Best fit", "Tradeoff", "Buyer note"],
    rows: [
      {
        label: "Prestyj AI sales agents",
        values: ["Teams that want managed lead response and booking", "Less suited to custom enterprise procurement workflows", "Use when speed and consistency are the bottleneck"],
      },
      {
        label: "Human SDR team",
        values: ["Strategic outbound and complex discovery", "High loaded cost and limited coverage", "Keep humans on accounts where relationship depth matters"],
      },
      {
        label: "Conversica-style AI assistants",
        values: ["Large teams with established sales ops", "May require more process maturity", "Compare implementation effort and CRM ownership"],
      },
      {
        label: "Chatbot-only website tools",
        values: ["Basic website capture", "Weak phone/SMS follow-up", "Useful supplement, not a full SDR replacement"],
      },
      {
        label: "DIY workflow builders",
        values: ["Technical teams with spare ops capacity", "Hidden maintenance and QA time", "Model the internal labor before comparing sticker price"],
      },
    ],
  },
  utilitySection: {
    eyebrow: "BUYER UTILITY",
    title: "What the sales agent actually does",
    description:
      "The page is built around operational jobs, not a generic AI promise. Prestyj’s sales agent sits between new demand and your closers so every lead gets a fast, consistent path to a booked conversation.",
    cards: [
      {
        title: "Inbound speed-to-lead",
        description: "Responds to web forms, missed calls, SMS inquiries, and after-hours leads before the buyer goes to a competitor.",
      },
      {
        title: "Qualification and scoring",
        description: "Asks consistent budget, authority, need, timeline, location, and service-fit questions before routing the lead.",
      },
      {
        title: "Meeting booking",
        description: "Books qualified prospects to the right calendar, confirms appointments, and follows up when leads stall.",
      },
      {
        title: "CRM hygiene",
        description: "Captures notes, tags outcomes, and gives the human seller context instead of another anonymous lead record.",
      },
    ],
  },
  processSection: {
    eyebrow: "IMPLEMENTATION",
    title: "A managed sales-agent launch path",
    description:
      "Prestyj is positioned for buyers who want the outcome, not another AI tool to configure from scratch.",
    cards: [
      {
        title: "Map the qualification rules",
        description: "Define lead sources, disqualifiers, routing logic, service areas, calendars, and the questions a closer needs answered.",
      },
      {
        title: "Launch the AI response layer",
        description: "Connect phone, SMS, email, forms, and CRM handoffs so the agent can respond immediately and escalate exceptions.",
      },
      {
        title: "Optimize from real conversations",
        description: "Review booking quality, objection patterns, no-show rates, and cost per meeting, then tune scripts and routing weekly.",
      },
    ],
  },
  relatedLinks: [
    {
      href: "/blog/ai-sales-agent-pricing-guide-2026",
      label: "AI sales agent pricing guide",
      description: "Detailed 2026 pricing ranges and cost drivers for AI sales agents.",
    },
    {
      href: "/blog/ai-sales-agent-vs-human-sdr-cost",
      label: "AI sales agent vs human SDR cost",
      description: "Compare salary, tools, ramp, turnover, and management overhead.",
    },
    {
      href: "/blog/sales-ai-agent-vs-human-cost-comparison-2026",
      label: "Sales AI vs human cost comparison",
      description: "Side-by-side cost comparison for sales leaders modeling headcount.",
    },
    {
      href: "/blog/ai-lead-response-systems-2026",
      label: "AI lead response systems",
      description: "Why instant response changes conversion economics for inbound teams.",
    },
    {
      href: "/solutions/ai-lead-response",
      label: "AI lead response solution",
      description: "Canonical solution page for speed-to-lead and lead conversion workflows.",
    },
    {
      href: "/best-for/ai-sales-agent",
      label: "Best AI sales agent page",
      description: "Use-case page for buyers comparing AI sales agent vendors.",
    },
  ],
  faqs: [
    {
      question: "How much does an AI sales agent cost?",
      answer:
        "AI sales agent pricing usually depends on lead volume, channels, integrations, and whether the provider manages the implementation. A practical buyer range is a few hundred dollars per month for simple software up to several thousand per month for managed voice, SMS, email, CRM, and appointment-booking workflows.",
    },
    {
      question: "Can an AI sales agent replace a human SDR?",
      answer:
        "An AI sales agent can replace a large share of first-response, qualification, follow-up, and booking work. It should not replace humans for complex discovery, strategic outbound, enterprise relationship building, or closing. The strongest model is AI for speed and consistency, humans for judgment and trust.",
    },
    {
      question: "What is the cost per qualified meeting with AI sales agents?",
      answer:
        "For teams with enough inbound or reactivation volume, AI sales agents often model at $8–$25 per qualified meeting. Human SDR teams commonly land closer to $100–$300 once salary, benefits, commission, tools, management, ramp, and turnover are included.",
    },
    {
      question: "What channels can an AI sales agent handle?",
      answer:
        "A full AI sales agent can handle phone, SMS, email, form fills, missed calls, and CRM-triggered follow-up. The exact channel mix should match where your leads already show intent instead of forcing every buyer into chat.",
    },
    {
      question: "How fast can an AI sales agent go live?",
      answer:
        "Simple inbound workflows can go live in days. More complex routing, compliance, multi-location calendars, and CRM rules can take one to several weeks. The important launch milestone is not just turning on AI; it is proving qualified handoffs and clean CRM notes.",
    },
    {
      question: "Who owns optimization after launch?",
      answer:
        "With Prestyj, optimization is managed. The team reviews conversation outcomes, booking quality, objection handling, and routing gaps so the agent improves from live data instead of leaving your sales ops team to tune prompts alone.",
    },
    {
      question: "What should I compare before choosing a vendor?",
      answer:
        "Compare total monthly cost, setup fees, channel coverage, CRM integrations, transfer logic, conversation QA, appointment-setting accuracy, reporting, and who is responsible when the workflow breaks. Sticker price alone misses most of the real cost.",
    },
  ],
  finalCta: {
    title: "See what an AI sales agent would cost in your pipeline.",
    description:
      "Bring your lead volume, show rate, and SDR cost assumptions. Prestyj will model the cost-per-meeting difference and show where AI should handle the first touch.",
    primaryCta: {
      href: "/book-demo",
      label: "Book a demo",
      description: "Get a custom sales-agent workflow review.",
    },
    secondaryCta: {
      href: "/solutions/ai-sales-agent-cost",
      label: "View SDR cost page",
      description: "Compare the canonical AI vs SDR economics.",
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

export default function AiSalesAgentsPage() {
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
