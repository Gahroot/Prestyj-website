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

const pageUrl = "https://prestyj.com/ai-marketing-agents";
const pageTitle = "AI Marketing Agents | Batch Video Ads, Content & Lead Response";
const pageDescription =
  "Prestyj AI marketing agents combine batch video ads, AI content operations, marketing automation, and lead response so growth teams can test more creative and convert more demand.";

const page = {
  slug: "ai-marketing-agents",
  url: pageUrl,
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI marketing agents",
    "AI marketing automation agents",
    "AI ad creative agents",
    "batch video ads",
    "AI content department",
    "AI lead response",
    "marketing automation",
    "AI agents for marketing",
  ],
  breadcrumbLabel: "AI Marketing Agents",
  serviceName: "Prestyj AI Marketing Agents",
  serviceType: [
    "AI Marketing Agent",
    "Batch Video Ads",
    "AI Content Department",
    "Marketing Automation",
    "AI Lead Response",
    "Paid Social Creative Testing",
  ],
  offerCatalogName: "AI Marketing Agent Services",
  lowPrice: "497",
  highPrice: "4997",
  offerCount: "5",
  hero: {
    eyebrow: "AI MARKETING AGENTS · CREATIVE TO CONVERSION",
    headline: "AI marketing agents for creative volume and lead conversion.",
    accent: "Not another dashboard to babysit.",
    subheadline:
      "Prestyj connects the work growth teams usually split across creators, editors, social agencies, automations, and SDR follow-up: batch video ads, high-volume content, campaign workflows, and AI lead response.",
    primaryCta: {
      href: "/book-demo",
      label: "Plan your AI marketing stack",
      description: "Map which marketing-agent workflow should launch first.",
    },
    secondaryCta: {
      href: "/batch-video-ads",
      label: "Start with batch video ads",
      description: "Review Prestyj's fastest creative-volume offer.",
    },
    stats: [
      {
        value: "100–1,000",
        label: "video ads per batch",
        detail: "Turn one recording into enough paid-social creative to test hooks, offers, and angles.",
      },
      {
        value: "270–2,700",
        label: "posts per month",
        detail: "AI Content Department output range for teams replacing low-volume social management.",
      },
      {
        value: "60 sec",
        label: "lead-response target",
        detail: "Marketing agents should convert demand quickly, not just publish more content.",
      },
    ],
  },
  tldr: {
    title: "What “AI marketing agent” should mean",
    bullets: [
      "A useful AI marketing agent performs an outcome workflow: creates testable ad variations, publishes content, routes responses, follows up, and records conversion data.",
      "Prestyj treats batch video ads as the creative-testing layer, AI Content Department as the organic/social layer, and AI lead response as the conversion layer.",
      "The buyer test is simple: does the system reduce cost per tested angle, increase publishing volume, or improve speed-to-lead in a measurable way?",
    ],
  },
  pricingTable: {
    title: "AI marketing-agent offer matrix",
    description:
      "Different buyers mean different jobs. Use this matrix to pick the canonical Prestyj page that matches the work you need done first.",
    columns: ["Workflow", "Prestyj route", "Typical pricing signal", "Primary metric"],
    rows: [
      {
        label: "Paid-social creative testing",
        values: ["/batch-video-ads", "$497–$3,997 per batch", "Cost per tested ad angle"],
      },
      {
        label: "YouTube / vertical media testing",
        values: ["/youtube-media-testing-services", "Pricing model and batch size", "Cost per tested hook or angle"],
      },
      {
        label: "High-volume social content",
        values: ["/ai-content-department", "$1,997–$4,997/month", "Effective cost per post"],
      },
      {
        label: "Marketing automation",
        values: ["/solutions/marketing-automation", "Workflow complexity and channels", "Recovered follow-up and campaign speed"],
      },
      {
        label: "Lead response",
        values: ["/solutions/ai-lead-response", "Lead volume and channel mix", "Speed-to-lead and booked appointments"],
      },
    ],
  },
  alternativesTable: {
    title: "AI marketing agents vs agencies and tools",
    description:
      "The key difference is whether you are buying software access, outsourced labor, or a managed workflow with measurable output.",
    columns: ["Option", "Best fit", "Tradeoff", "Buyer note"],
    rows: [
      {
        label: "Prestyj AI marketing agents",
        values: ["Teams that need creative, content, and conversion workflows managed", "Not a blank-canvas enterprise marketing suite", "Use when execution volume is the bottleneck"],
      },
      {
        label: "Traditional marketing agency",
        values: ["Strategy, brand, and campaign oversight", "Low output volume and retainer creep", "Ask for cost per shipped asset and cost per tested angle"],
      },
      {
        label: "AI design/video tools",
        values: ["Internal creative teams with time to operate tools", "Your team still owns scripts, edits, QA, and launch", "Cheap software can hide expensive labor"],
      },
      {
        label: "In-house marketing hire",
        values: ["Cross-functional ownership and company context", "Salary, ramp, and throughput limits", "Often works best managing AI output, not replacing it"],
      },
      {
        label: "CRM automation platforms",
        values: ["Rules, triggers, and nurture infrastructure", "No creative volume by default", "Pair with content and ad supply, or automation has nothing to amplify"],
      },
    ],
  },
  utilitySection: {
    eyebrow: "BUYER UTILITY",
    title: "Map the agent to the marketing bottleneck",
    description:
      "Do not start with the broad label. Start with the constraint that is slowing growth, then pick the AI-agent workflow that directly changes the metric.",
    cards: [
      {
        title: "Creative shortage",
        description: "Use batch video ads when media spend is constrained by too few hooks, angles, and offers to test.",
      },
      {
        title: "Organic inconsistency",
        description: "Use AI Content Department when posts, short-form clips, and authority content ship too slowly.",
      },
      {
        title: "Lead leakage",
        description: "Use AI lead response when forms, calls, DMs, or booked-demo requests sit untouched after intent appears.",
      },
      {
        title: "Workflow drag",
        description: "Use marketing automation when repetitive nurture, reminders, handoffs, or campaign steps block the team.",
      },
    ],
  },
  processSection: {
    eyebrow: "IMPLEMENTATION",
    title: "A practical AI marketing-agent rollout",
    description:
      "Prestyj starts with the workflow that creates the fastest measurable lift, then links the surrounding pages and campaigns into a browseable conversion system.",
    cards: [
      {
        title: "Choose the first metric",
        description: "Pick cost per tested angle, cost per post, speed-to-lead, or recovered appointments before selecting tools.",
      },
      {
        title: "Launch the output layer",
        description: "Ship the batch, content stream, or response workflow with enough volume to generate a real signal.",
      },
      {
        title: "Route learning into follow-up",
        description: "Move winning hooks, objections, and lead signals into retargeting, nurture, sales scripts, and CRM notes.",
      },
    ],
  },
  relatedLinks: [
    {
      href: "/batch-video-ads",
      label: "Batch Video Ads",
      description: "Primary paid-social creative-volume offer: 100–1,000 vertical ads from one recording.",
    },
    {
      href: "/ai-content-department",
      label: "AI Content Department",
      description: "Done-for-you social content engine for high-volume multi-platform posting.",
    },
    {
      href: "/solutions/marketing-automation",
      label: "Marketing automation",
      description: "Canonical solution page for campaign workflows and nurture automation.",
    },
    {
      href: "/solutions/ai-lead-generation",
      label: "AI lead generation",
      description: "How Prestyj connects demand creation to lead capture and conversion.",
    },
    {
      href: "/solutions/ai-lead-response",
      label: "AI lead response",
      description: "Commercial page for instant response after marketing generates intent.",
    },
    {
      href: "/video-ad-testing-pricing",
      label: "Video ad testing pricing",
      description: "Short buyer page for paid-social and media-testing pricing models.",
    },
  ],
  faqs: [
    {
      question: "What is an AI marketing agent?",
      answer:
        "An AI marketing agent is a workflow that performs marketing execution with measurable output: creating ad variations, publishing content, routing leads, following up, or automating campaign steps. The useful definition is task-based, not just a chatbot with marketing copy.",
    },
    {
      question: "How is Prestyj different from an AI marketing tool?",
      answer:
        "Prestyj packages managed workflows and output. Instead of giving your team another blank tool, Prestyj ships batch video ads, high-volume content, lead-response workflows, and automation systems with implementation support.",
    },
    {
      question: "Which AI marketing-agent workflow should I launch first?",
      answer:
        "Start where the revenue leak is clearest. If paid ads are starved for creative, start with batch video ads. If inbound leads are slow to get contacted, start with AI lead response. If your brand disappears between campaigns, start with AI Content Department.",
    },
    {
      question: "Can AI marketing agents replace an agency?",
      answer:
        "They can replace low-volume production, repetitive execution, and some workflow management. Strategy, brand positioning, offer design, and senior campaign judgment may still need human input. The best comparison is cost per shipped asset and cost per conversion workflow, not agency vs AI in the abstract.",
    },
    {
      question: "How do AI marketing agents connect to sales?",
      answer:
        "Marketing agents should feed sales with better signals: which hooks work, which objections appear, which leads respond, and which offers book meetings. Prestyj links creative and content output to AI lead response so demand does not stall after a click or call.",
    },
    {
      question: "What should I measure?",
      answer:
        "Measure cost per tested angle, number of finished assets shipped, speed-to-lead, booked appointments, show rate, qualified pipeline, and the cost of internal time replaced. Avoid judging AI marketing by content volume alone.",
    },
  ],
  finalCta: {
    title: "Build the AI marketing-agent stack around your biggest bottleneck.",
    description:
      "Prestyj will help you decide whether batch video ads, AI Content Department, marketing automation, or AI lead response should launch first.",
    primaryCta: {
      href: "/book-demo",
      label: "Book a planning call",
      description: "Map the first AI marketing-agent workflow.",
    },
    secondaryCta: {
      href: "/batch-video-ads",
      label: "View batch video ads",
      description: "Start with the creative-testing workflow.",
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

export default function AiMarketingAgentsPage() {
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
