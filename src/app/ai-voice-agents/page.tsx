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

const pageUrl = "https://prestyj.com/ai-voice-agents";
const pageTitle = "AI Voice Agents | Pricing, Cost per Minute & Hidden Fees";
const pageDescription =
  "Compare AI voice agent pricing, cost per minute, hidden fees, testing costs, and answering-service replacement economics with Prestyj's managed AI voice agents.";

const page = {
  slug: "ai-voice-agents",
  url: pageUrl,
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI voice agents",
    "AI voice agent pricing",
    "AI voice agent cost per minute",
    "voice agent testing pricing",
    "hidden costs of AI voice agents",
    "AI answering service",
    "AI receptionist pricing",
    "voice AI cost comparison",
  ],
  breadcrumbLabel: "AI Voice Agents",
  serviceName: "Prestyj AI Voice Agents",
  serviceType: [
    "AI Voice Agent",
    "AI Receptionist",
    "AI Answering Service",
    "Voice Lead Qualification",
    "Appointment Booking Automation",
    "After-Hours Call Handling",
  ],
  offerCatalogName: "AI Voice Agent Plans",
  lowPrice: "497",
  highPrice: "4997",
  offerCount: "4",
  hero: {
    eyebrow: "AI VOICE AGENTS · COST PER MINUTE",
    headline: "AI voice agents that answer, qualify, and book.",
    accent: "With pricing you can actually model.",
    subheadline:
      "Prestyj builds managed AI voice agents for inbound calls, missed-call recovery, after-hours answering, outbound reactivation, and appointment booking — without burying the economics in surprise fees.",
    primaryCta: {
      href: "/book-demo",
      label: "Book a voice-agent demo",
      description: "Hear how a voice agent would handle your calls.",
    },
    secondaryCta: {
      href: "/solutions/ai-voice-agent-pricing",
      label: "See pricing breakdown",
      description: "Review the detailed AI voice pricing solution page.",
    },
    stats: [
      {
        value: "$0.10–0.25/min",
        label: "common per-minute range",
        detail: "Published buyer-planning range before setup, transfer, voicemail, and integration assumptions.",
      },
      {
        value: "60–80%",
        label: "potential receptionist savings",
        detail: "Compared with fully loaded human receptionist or answering-service coverage.",
      },
      {
        value: "24/7",
        label: "phone coverage",
        detail: "Nights, weekends, holidays, overflow, missed calls, and outbound follow-up in one workflow.",
      },
    ],
  },
  tldr: {
    title: "How to evaluate AI voice agents",
    bullets: [
      "Do not compare only the quoted per-minute rate. Ask about setup, connection fees, transfers, voicemail detection, call recording, QA, prompt changes, integrations, and minimum commitments.",
      "Use AI voice agents where speed, consistency, after-hours coverage, or overflow call handling already causes lost revenue.",
      "For high-stakes calls, pair AI with live-transfer rules so the voice agent qualifies and routes instead of pretending to solve every edge case.",
    ],
  },
  pricingTable: {
    title: "AI voice agent pricing model",
    description:
      "Per-minute pricing is useful only after you know what is included. This table separates usage from the hidden costs that often change the total monthly bill.",
    columns: ["Cost line", "Prestyj managed voice agent", "Typical API/DIY voice platform", "Traditional answering service"],
    rows: [
      {
        label: "Usage price",
        values: ["Modeled from call volume and workflow complexity", "$0.05–$0.25/min before add-ons", "$1–$2+ per minute or per-call bundles"],
      },
      {
        label: "Monthly planning range",
        values: ["$497–$4,997 managed", "$100–$2,000 software + labor", "$300–$3,000+ depending on minutes"],
      },
      {
        label: "Setup and workflow build",
        values: ["Managed implementation", "$2K–$10K if outsourced or internal labor", "Usually script setup, not AI workflow design"],
      },
      {
        label: "Hidden fees to inspect",
        values: ["Scoped before launch", "Transfers, recordings, voicemail, LLM, telephony, storage", "Overage minutes, holidays, bilingual, intake complexity"],
      },
      {
        label: "Concurrency",
        values: ["Multiple calls at once", "Depends on telephony and limits", "Limited by staffing and queue rules"],
      },
      {
        label: "Optimization",
        values: ["Managed from transcripts and outcomes", "Your team owns QA", "Script changes, limited automation"],
      },
    ],
  },
  alternativesTable: {
    title: "AI voice agents vs call-center and answering options",
    description:
      "The correct replacement target matters. A voice agent can be a receptionist, overflow layer, lead qualifier, or outbound campaign engine depending on the call type.",
    columns: ["Option", "Best fit", "Tradeoff", "Buyer note"],
    rows: [
      {
        label: "Prestyj AI voice agents",
        values: ["Lead intake, missed calls, outbound follow-up, booking", "Requires call-flow design before launch", "Best when every call needs speed and structured data"],
      },
      {
        label: "Answering services",
        values: ["Basic message taking and overflow", "Costs rise with minutes and intake complexity", "Compare lost bookings, not just monthly invoice"],
      },
      {
        label: "Call centers",
        values: ["Large support teams and complex queues", "Higher management overhead", "Use humans where empathy and judgment dominate"],
      },
      {
        label: "Voice APIs like Vapi, Bland, Retell",
        values: ["Technical teams building custom agents", "You own prompts, QA, telephony, failures", "Sticker price is not total cost of ownership"],
      },
      {
        label: "In-house receptionist",
        values: ["On-site admin and relationship work", "Limited hours and one-call-at-a-time capacity", "AI can handle overflow while staff focus on office work"],
      },
    ],
  },
  utilitySection: {
    eyebrow: "BUYER UTILITY",
    title: "The four voice-agent cost questions to answer first",
    description:
      "A trustworthy AI voice-agent quote starts with the call path. The same per-minute rate can produce very different invoices depending on call length, transfer rules, and QA requirements.",
    cards: [
      {
        title: "How many calls and minutes?",
        description: "Model monthly calls, average handle time, peak spikes, and how many calls currently go unanswered.",
      },
      {
        title: "What counts as billable time?",
        description: "Ask whether voicemail detection, transfers, hold time, recordings, and failed calls create charges.",
      },
      {
        title: "What has to integrate?",
        description: "Calendar booking, CRM notes, service-area logic, emergency routing, and field-service tools affect implementation cost.",
      },
      {
        title: "Who improves the agent?",
        description: "Transcript QA, prompt updates, objection tuning, and routing changes determine whether the voice agent gets better or stalls.",
      },
    ],
  },
  processSection: {
    eyebrow: "IMPLEMENTATION",
    title: "How Prestyj launches voice agents safely",
    description:
      "The goal is not to unleash a generic bot on every caller. The goal is a controlled call flow with escalation paths, transcript review, and measurable booking outcomes.",
    cards: [
      {
        title: "Audit call types and risk",
        description: "Separate booking calls, price shoppers, emergencies, support requests, spam, voicemails, and transfer-required scenarios.",
      },
      {
        title: "Build and test call flows",
        description: "Script qualification, calendar booking, transfer logic, caller consent, CRM notes, and fallback handling before live traffic.",
      },
      {
        title: "Measure real calls",
        description: "Track answer rate, booked appointments, transfer accuracy, call duration, caller sentiment, and total cost per captured lead.",
      },
    ],
  },
  relatedLinks: [
    {
      href: "/blog/ai-voice-agent-costs-compared",
      label: "AI voice agent costs compared",
      description: "Current citation-winning guide to AI voice cost ranges and tradeoffs.",
    },
    {
      href: "/blog/ai-voice-agent-cost-per-minute-at-scale-2026",
      label: "Cost per minute at scale",
      description: "How usage tiers change when call volume grows.",
    },
    {
      href: "/blog/voice-agent-testing-pricing-2026",
      label: "Voice agent testing pricing",
      description: "How to price pilots and QA before full deployment.",
    },
    {
      href: "/blog/hidden-costs-of-ai-voice-agents-2026",
      label: "Hidden costs of AI voice agents",
      description: "Fees and operational costs buyers miss in vendor quotes.",
    },
    {
      href: "/solutions/ai-voice-agent-pricing",
      label: "AI voice pricing solution",
      description: "Canonical solution page for transparent per-minute AI voice pricing.",
    },
    {
      href: "/ai-receptionist",
      label: "AI receptionist",
      description: "Inbound receptionist and answering-service replacement page.",
    },
  ],
  faqs: [
    {
      question: "How much does an AI voice agent cost per minute?",
      answer:
        "AI voice agent rates are commonly quoted around $0.10–$0.25 per minute, but the total bill depends on call volume, average call length, transfers, voicemail detection, recordings, telephony, LLM usage, integrations, and who manages QA. Always ask for a total monthly model, not only the per-minute rate.",
    },
    {
      question: "What hidden costs should I ask about?",
      answer:
        "Ask about setup, minimum commitments, phone numbers, carrier fees, connection fees, transfer fees, voicemail detection, call recording storage, transcript storage, prompt changes, QA, CRM integration, emergency routing, bilingual flows, and overage pricing.",
    },
    {
      question: "Can AI voice agents replace an answering service?",
      answer:
        "AI voice agents can replace or reduce answering-service work when calls follow structured intake, qualification, scheduling, and message-taking flows. Human answering services may still be better for ambiguous, emotional, or high-liability calls unless escalation rules are built in.",
    },
    {
      question: "How should I price a voice-agent pilot?",
      answer:
        "A useful pilot should include real call volume, clear success metrics, transcript review, routing tests, and a cap on usage. Measure answer rate, booked appointments, qualified leads, transfer accuracy, caller sentiment, and cost per captured opportunity.",
    },
    {
      question: "What is better: flat-rate or per-minute pricing?",
      answer:
        "Per-minute pricing is better for variable or early call volume because you pay for usage. Flat-rate pricing can be better when volume is predictable and the provider includes enough minutes, QA, and support. The best comparison is total monthly cost at your expected minutes.",
    },
    {
      question: "Do AI voice agents handle multiple calls at once?",
      answer:
        "Yes, properly configured AI voice agents can handle multiple calls concurrently. That is one of the biggest operational differences versus a single receptionist or small answering-service team during spikes.",
    },
    {
      question: "What businesses are best suited for AI voice agents?",
      answer:
        "Home services, real estate, property management, medical-adjacent scheduling, local services, agencies, and sales teams with missed calls, after-hours demand, or repetitive qualification flows are strong fits. Highly regulated or emergency-heavy calls need stricter escalation design.",
    },
  ],
  finalCta: {
    title: "Model your voice-agent cost before you buy.",
    description:
      "Bring call volume, average call length, missed-call rate, and current answering costs. Prestyj will map the voice-agent workflow and estimate total monthly cost.",
    primaryCta: {
      href: "/book-demo",
      label: "Book a voice demo",
      description: "Review your voice-agent economics.",
    },
    secondaryCta: {
      href: "/solutions/ai-voice-agent-pricing",
      label: "View voice pricing page",
      description: "See the canonical pricing breakdown.",
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

export default function AiVoiceAgentsPage() {
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
