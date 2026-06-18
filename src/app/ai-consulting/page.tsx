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

const pageUrl = "https://prestyj.com/ai-consulting";
const pageTitle = "AI Consulting | Strategy, Audit & Implementation That Ships";
const pageDescription =
  "AI consulting that ends in working agents, not just a slide deck. Prestyj audits your workflows, prioritizes by ROI, and can implement and manage what it recommends. Compare engagement models, deliverables, and pricing.";

const page = {
  slug: "ai-consulting",
  url: pageUrl,
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI consulting",
    "AI consultant",
    "AI consulting services",
    "AI strategy consulting",
    "AI implementation consulting",
    "AI adoption consultant",
    "AI consulting pricing",
    "AI rollout consulting",
    "is AI consulting worth it",
    "AI consulting engagement models",
  ],
  breadcrumbLabel: "AI Consulting",
  serviceName: "Prestyj AI Consulting",
  serviceType: [
    "AI Consulting",
    "AI Strategy Consulting",
    "AI Implementation Consulting",
    "AI Adoption Advisory",
    "AI Rollout Consulting",
  ],
  offerCatalogName: "AI Consulting Services",
  lowPrice: "1497",
  highPrice: "19997",
  offerCount: "4",
  hero: {
    eyebrow: "AI CONSULTING · STRATEGY TO IMPLEMENTATION",
    headline: "AI consulting that ends in working agents,",
    accent: "not a slide deck.",
    subheadline:
      "Prestyj audits your sales, support, and marketing workflows, prioritizes the highest-ROI AI opportunities, and — unlike advisory-only firms — can implement and manage what it recommends. Strategy and execution under one roof.",
    primaryCta: {
      href: "/book-demo",
      label: "Book an AI strategy session",
      description: "Map your highest-ROI AI opportunities.",
    },
    secondaryCta: {
      href: "/ai-first-audit",
      label: "Start with an AI-first audit",
      description: "Get a prioritized roadmap before you commit.",
    },
    stats: [
      {
        value: "1–2 wks",
        label: "to a prioritized roadmap",
        detail:
          "A focused audit surfaces the workflows where AI pays back fastest, ranked by impact and effort, before any build commitment.",
      },
      {
        value: "Strategy + build",
        label: "under one roof",
        detail:
          "The risk of advisory-only consulting is a roadmap no one executes. Prestyj can implement and manage the agents it recommends.",
      },
      {
        value: "ROI-ranked",
        label: "opportunities, not hype",
        detail:
          "We prioritize by revenue impact, time-to-value, and feasibility — and tell you where AI is not worth it yet.",
      },
    ],
  },
  tldr: {
    title: "What AI consulting should actually deliver",
    bullets: [
      "Good AI consulting produces a prioritized, ROI-ranked roadmap of specific workflows to automate — not a generic strategy deck about the importance of AI.",
      "The biggest risk is advisory-only engagements: a polished plan that stalls because no one owns implementation. Prefer a partner who can also build and manage what they recommend.",
      "Ask up front about engagement model, deliverables, timeline, and pricing — fixed-scope audit, roadmap, retained advisory, or implementation — so you know exactly what you are buying.",
    ],
  },
  pricingTable: {
    title: "AI consulting engagement models",
    description:
      "Consulting pricing varies by scope and depth. The key question is whether the engagement stops at advice or continues into implementation and ownership.",
    columns: ["Engagement", "What you get", "Typical scope", "Best fit"],
    rows: [
      {
        label: "AI-first audit",
        values: ["Workflow audit + prioritized roadmap", "1–2 weeks, fixed scope", "Teams deciding where to start"],
      },
      {
        label: "Strategy + roadmap",
        values: ["Opportunity sizing, sequencing, build-vs-buy", "2–4 weeks", "Leaders planning a multi-quarter rollout"],
      },
      {
        label: "Retained advisory",
        values: ["Ongoing guidance, reviews, vendor selection", "Monthly retainer", "Teams executing with internal staff"],
      },
      {
        label: "Consulting + implementation",
        values: ["Audit, build, integrate, launch, manage", "Scoped per workflow", "Teams that want outcomes, not a deck"],
      },
    ],
  },
  alternativesTable: {
    title: "AI consulting vs agencies, in-house, and platforms",
    description:
      "This page is for buyers deciding how to get expert AI guidance that actually ships, not just which firm has the most impressive deck.",
    columns: ["Approach", "Best fit", "Tradeoff", "Buyer note"],
    rows: [
      {
        label: "Prestyj consulting + implementation",
        values: ["Teams that want strategy and execution together", "Less neutral than pure advisory", "Best when you want the roadmap built, not shelved"],
      },
      {
        label: "Advisory-only AI consultants",
        values: ["Strategy, audits, vendor selection", "Roadmap can stall without an owner", "Confirm who implements after the engagement"],
      },
      {
        label: "Big consulting firms",
        values: ["Large enterprise transformation programs", "High cost, slower, junior delivery teams", "Watch the gap between partners and doers"],
      },
      {
        label: "In-house AI hire",
        values: ["Sustained internal capability", "Hiring time, salary, key-person risk", "Slow to start; strong long-term if funded"],
      },
      {
        label: "Self-serve AI platforms",
        values: ["Teams that already know what to build", "No strategy or prioritization included", "Pair with an audit so you build the right thing"],
      },
    ],
  },
  utilitySection: {
    eyebrow: "BUYER UTILITY",
    title: "What a real consulting engagement includes",
    description:
      "Useful AI consulting is concrete: it names the workflows, the expected ROI, the build-vs-buy call, and the path to production — not just a maturity model and a list of trends.",
    cards: [
      {
        title: "Workflow + opportunity audit",
        description: "Inventory sales, support, and marketing workflows, quantify time and revenue leakage, and surface where AI pays back fastest.",
      },
      {
        title: "Prioritized roadmap",
        description: "Rank opportunities by impact, effort, and feasibility, and sequence them so quick wins fund the bigger initiatives.",
      },
      {
        title: "Build-vs-buy + vendor calls",
        description: "Decide what to build custom, what to buy, and what to run as a managed service — with honest TCO, not vendor hype.",
      },
      {
        title: "Path to production",
        description: "Define ownership, metrics, change management, and the implementation plan so the roadmap actually ships and gets measured.",
      },
    ],
  },
  processSection: {
    eyebrow: "ENGAGEMENT TIMELINE",
    title: "From audit to live agents in three phases",
    description:
      "The sequence matters more than the buzzwords: understand the business first, prioritize ruthlessly, then implement and measure.",
    cards: [
      {
        title: "Audit and prioritize",
        description: "Map workflows, quantify impact, and produce an ROI-ranked roadmap — including where AI is not yet worth it.",
      },
      {
        title: "Decide build vs buy",
        description: "For each priority, choose custom build, off-the-shelf, or managed done-for-you based on cost, time-to-value, and ownership.",
      },
      {
        title: "Implement and measure",
        description: "Ship the highest-ROI workflow first, track outcomes against the business case, and expand only once results hold.",
      },
    ],
  },
  relatedLinks: [
    {
      href: "/ai-first-audit",
      label: "AI-first audit",
      description: "Start with a prioritized roadmap of your highest-ROI AI opportunities.",
    },
    {
      href: "/done-for-you-ai-agents",
      label: "Done-for-you AI agents",
      description: "Managed implementation once the roadmap says build.",
    },
    {
      href: "/custom-ai-agents",
      label: "Custom AI agents",
      description: "Bespoke builds for workflows off-the-shelf agents cannot model.",
    },
    {
      href: "/blog/is-ai-consulting-worth-it-2026",
      label: "Is AI consulting worth it?",
      description: "When consulting pays for itself and when to skip straight to implementation.",
    },
    {
      href: "/blog/ai-consulting-engagement-models-explained-2026",
      label: "AI consulting engagement models",
      description: "Audit, roadmap, retainer, and implementation models compared.",
    },
    {
      href: "/blog/ai-consultant-pricing-guide-2026",
      label: "AI consultant pricing guide",
      description: "What AI consulting costs and how engagements are priced.",
    },
  ],
  faqs: [
    {
      question: "What does an AI consultant actually do?",
      answer:
        "A good AI consultant audits your workflows, identifies where AI creates the most value, ranks those opportunities by ROI and feasibility, and produces a roadmap with a clear build-vs-buy call. The strongest engagements also cover the path to production so the plan ships instead of sitting in a deck.",
    },
    {
      question: "Is AI consulting worth it?",
      answer:
        "It is worth it when it produces a concrete, prioritized roadmap you would not have built alone and prevents expensive mistakes like building the wrong thing or buying the wrong tool. It is not worth it when it stops at generic strategy. The best signal is whether the consultant can also implement and stand behind the results.",
    },
    {
      question: "How is AI consulting priced?",
      answer:
        "Pricing depends on the engagement model: a fixed-scope audit, a strategy and roadmap project, an ongoing advisory retainer, or consulting bundled with implementation. Fixed-scope audits are the lowest-commitment entry point; implementation engagements are scoped per workflow. Ask for deliverables and timelines before committing.",
    },
    {
      question: "How is Prestyj different from advisory-only consultants?",
      answer:
        "Many firms hand over a roadmap and leave. Prestyj can implement and manage what it recommends — sales, voice, support, lead response, and marketing agents — so the strategy turns into working systems. That removes the most common failure mode: a great plan no one executes.",
    },
    {
      question: "Where should we start?",
      answer:
        "Most teams start with an AI-first audit. It produces a prioritized roadmap in one to two weeks, so you invest in the highest-ROI workflow first instead of automating something that does not move the business.",
    },
    {
      question: "Do you cover build-vs-buy decisions?",
      answer:
        "Yes. For each prioritized workflow we recommend custom build, off-the-shelf, or managed done-for-you based on total cost of ownership, time-to-value, and who will own the system long term — not on what is most profitable to sell.",
    },
  ],
  finalCta: {
    title: "Get an AI roadmap you can actually execute.",
    description:
      "Prestyj will audit your workflows, rank the highest-ROI AI opportunities, and — when you are ready — build and manage the agents instead of leaving you with a deck.",
    primaryCta: {
      href: "/book-demo",
      label: "Book an AI strategy session",
      description: "Map your highest-ROI opportunities.",
    },
    secondaryCta: {
      href: "/ai-first-audit",
      label: "Start with an AI-first audit",
      description: "Get a prioritized roadmap first.",
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
