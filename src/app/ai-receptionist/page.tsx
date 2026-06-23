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

const pageUrl = "https://prestyj.com/ai-receptionist";
const pageTitle = "AI Receptionist for Service Businesses | Never Miss a Lead";
const pageDescription =
  "An AI receptionist that answers every call in under 5 seconds, qualifies leads, and books appointments 24/7 — part of your done-for-you AI marketing and sales system. Managed by Prestyj.";

const page = {
  slug: "ai-receptionist",
  url: pageUrl,
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "AI receptionist",
    "AI answering service",
    "answering service replacement",
    "AI receptionist cost",
    "HVAC answering service cost",
    "AI phone answering service",
    "after-hours call handling",
    "AI virtual receptionist",
  ],
  breadcrumbLabel: "AI Receptionist",
  serviceName: "Prestyj AI Receptionist",
  serviceType: [
    "AI Receptionist",
    "AI Virtual Receptionist",
    "AI Answering Service",
    "After-Hours Call Handling",
    "Appointment Booking Receptionist",
    "Inbound Voice Agent",
  ],
  offerCatalogName: "AI Receptionist Plans",
  lowPrice: "399",
  highPrice: "4997",
  offerCount: "4",
  hero: {
    eyebrow: "AI RECEPTIONIST · NEVER MISS A LEAD",
    headline: "Never miss a lead — the AI answers every call.",
    accent: "Part of your done-for-you AI marketing and sales system.",
    subheadline:
      "Prestyj gives service businesses and real estate teams a 24/7 AI receptionist for missed calls, overflow, after-hours intake, appointment booking, and human escalation — so every lead that calls gets captured.",
    primaryCta: {
      href: "/book-demo",
      label: "Hear an AI receptionist",
      description: "Review your call flow and replacement economics.",
    },
    secondaryCta: {
      href: "/pricing",
      label: "See pricing",
      description: "Review plans for the full AI marketing and sales system.",
    },
    stats: [
      {
        value: "<5 sec",
        label: "target pickup time",
        detail: "Callers get answered before voicemail, hold queues, or storm-season spikes create lost opportunities.",
      },
      {
        value: "24/7",
        label: "after-hours coverage",
        detail: "Nights, weekends, holidays, lunch breaks, overflow, and emergency routing in one workflow.",
      },
      {
        value: "50–60%",
        label: "possible hybrid savings",
        detail: "HVAC cost models often favor AI-led call handling with human escalation for the hardest 10–20% of calls.",
      },
    ],
  },
  tldr: {
    title: "When an AI receptionist beats an answering service",
    bullets: [
      "Use an AI receptionist when missed calls, after-hours demand, call spikes, manual intake, or answering-service overages already cost more than a managed voice workflow.",
      "Keep human escalation for emotional emergencies, complex consultations, compliance exceptions, and callers who explicitly request a person.",
      "For contractors and HVAC operators, compare cost per booked appointment and dispatch-ready intake quality — not just per-minute sticker price.",
    ],
  },
  pricingTable: {
    title: "AI receptionist vs answering-service cost model",
    description:
      "Answering-service invoices usually scale with minutes, surcharges, holidays, and manual handoffs. AI receptionist economics improve when calls are repetitive, seasonal, or appointment-driven.",
    columns: ["Cost line", "Prestyj AI receptionist", "Traditional answering service", "Human front desk"],
    rows: [
      {
        label: "Monthly planning range",
        values: ["$399–$4,997 managed", "$300–$4,000+ with overages", "$3,500–$6,500 loaded"],
      },
      {
        label: "After-hours pricing",
        values: ["Same workflow 24/7", "Often premium or limited", "Requires overtime or second shift"],
      },
      {
        label: "Call spikes",
        values: ["Concurrent calls handled", "Queue, hold, or voicemail risk", "One caller at a time"],
      },
      {
        label: "Booking and dispatch data",
        values: ["Structured notes and calendar/CRM handoff", "Often message-taking", "Staff-dependent consistency"],
      },
      {
        label: "Manual data entry",
        values: ["Reduced with integrations", "Common hidden admin cost", "Built into staff workload"],
      },
      {
        label: "Best replacement target",
        values: ["Routine intake, booking, overflow, missed calls", "Basic message capture", "In-office visitors and complex service"],
      },
    ],
  },
  alternativesTable: {
    title: "AI receptionist alternatives for inbound calls",
    description:
      "The right model depends on call risk. Prestyj is strongest where speed, structured intake, booking, and cost control matter more than having a human answer every routine call.",
    columns: ["Option", "Best fit", "Tradeoff", "Buyer note"],
    rows: [
      {
        label: "Prestyj AI receptionist",
        values: ["Missed calls, after-hours intake, booking, overflow", "Needs a designed call flow and escalation policy", "Best when every call needs fast structured capture"],
      },
      {
        label: "Ruby / AnswerConnect / MAP",
        values: ["Human warmth and basic message-taking", "Minutes, overages, manual entry, limited concurrency", "Compare cost per booked job, not only monthly plan"],
      },
      {
        label: "Smith.ai hybrid live answering",
        values: ["Live-agent plus web-chat support", "Higher per-call and live-agent cost", "Useful benchmark for human escalation layer"],
      },
      {
        label: "In-house receptionist",
        values: ["Office visitors, staff coordination, nuanced calls", "Limited hours and turnover risk", "Often pairs well with AI overflow"],
      },
      {
        label: "DIY voice platforms",
        values: ["Technical teams building custom phone agents", "You own QA, integrations, and failed-call monitoring", "Sticker price excludes operations labor"],
      },
    ],
  },
  utilitySection: {
    eyebrow: "BUYER UTILITY",
    title: "Answering-service replacement checklist",
    description:
      "Before replacing a live answering service, separate routine calls from exception calls. The best AI receptionist workflow is explicit about what it handles, what it books, and what it escalates.",
    cards: [
      {
        title: "Define routine intake",
        description: "Name, phone, address, service area, issue type, urgency, equipment details, preferred appointment time, and consent to text.",
      },
      {
        title: "Set escalation rules",
        description: "Route emergencies, angry callers, high-ticket consults, elderly-care concerns, compliance issues, and repeat failures to a person.",
      },
      {
        title: "Model seasonal spikes",
        description: "For HVAC, plumbing, and roofing, compare storm or heatwave call volume rather than an average quiet month.",
      },
      {
        title: "Measure booked outcomes",
        description: "Track pickup rate, booking rate, transfer accuracy, average call length, cost per booked job, and manual-entry hours saved.",
      },
    ],
  },
  processSection: {
    eyebrow: "IMPLEMENTATION",
    title: "How Prestyj launches an AI receptionist",
    description:
      "The workflow starts with call triage and ends with a calendar, CRM, or dispatch board entry your team can act on immediately.",
    cards: [
      {
        title: "Map call types and scripts",
        description: "Audit calls, answering-service scripts, booking rules, service areas, emergency definitions, and FAQs the receptionist should handle.",
      },
      {
        title: "Connect booking and handoffs",
        description: "Configure phone numbers, transfer rules, calendars, CRM or field-service notes, notifications, recordings, and fallback paths.",
      },
      {
        title: "Review calls and tune weekly",
        description: "Use transcripts and outcomes to improve questions, escalation, empathy, booking accuracy, and cost per captured opportunity.",
      },
    ],
  },
  relatedLinks: [
    {
      href: "/solutions/ai-virtual-receptionist",
      label: "AI virtual receptionist solution",
      description: "Canonical solution page for front-desk coverage and call routing.",
    },
    {
      href: "/ai-voice-agents",
      label: "AI voice agents",
      description: "Commercial hub for voice-agent pricing, per-minute costs, and hidden fees.",
    },
    {
      href: "/blog/ai-voice-platforms-vs-answering-services-cost-hvac-2026",
      label: "AI voice vs answering services for HVAC",
      description: "HVAC-specific cost comparison for AI platforms and answering services.",
    },
    {
      href: "/blog/hvac-answering-service-cost-comparison-2026",
      label: "HVAC answering-service cost comparison",
      description: "Dedicated HVAC answering-service cost page for seasonal operators.",
    },
    {
      href: "/blog/ai-answering-services-vs-traditional-answering-services-contractors-2026",
      label: "AI vs traditional answering for contractors",
      description: "Contractor-focused comparison of AI answering and live operator services.",
    },
    {
      href: "/blog/hidden-cost-answering-services-2026",
      label: "Hidden cost of answering services",
      description: "Surcharges, overages, and manual-entry costs that distort headline plans.",
    },
  ],
  faqs: [
    {
      question: "What is an AI receptionist?",
      answer:
        "An AI receptionist is a voice agent that answers inbound calls, greets callers, asks intake questions, books appointments, routes calls, captures notes, and escalates exceptions to a human when needed. It replaces routine answering-service work while preserving human handoff for edge cases.",
    },
    {
      question: "Can an AI receptionist replace my answering service?",
      answer:
        "Yes, for routine intake, appointment booking, missed-call recovery, after-hours coverage, and overflow. Most businesses should keep human escalation for emotional emergencies, compliance-sensitive calls, complex consultations, and callers who explicitly request a person.",
    },
    {
      question: "How much does an AI receptionist cost?",
      answer:
        "AI receptionist pricing depends on call volume, call length, integrations, booking complexity, QA, and whether the provider manages implementation. A managed monthly range can start in the hundreds and rise into the thousands for multi-location or high-volume call flows.",
    },
    {
      question: "Why compare cost per booked appointment instead of per minute?",
      answer:
        "Businesses do not buy minutes; they buy answered calls, booked appointments, dispatch-ready jobs, and captured revenue. A cheaper per-minute service can be more expensive if it misses calls, takes messages without booking, or creates manual data-entry work.",
    },
    {
      question: "Is an AI receptionist good for HVAC companies?",
      answer:
        "HVAC is a strong fit because demand spikes during heatwaves and cold snaps, after-hours calls matter, and routine intake can be structured around service area, equipment type, symptom, urgency, and appointment availability. High-emotion emergency calls should still have escalation paths.",
    },
    {
      question: "What integrations matter most?",
      answer:
        "Calendar booking, CRM notes, missed-call text-back, field-service systems such as ServiceTitan, Housecall Pro, or Jobber, and notification handoffs matter most. The goal is to avoid creating another inbox your staff has to manually retype.",
    },
    {
      question: "What should I test before going live?",
      answer:
        "Test emergency routing, appointment booking, caller consent, transfer behavior, noisy audio, accents, repeat callers, wrong numbers, angry callers, after-hours rules, and CRM or dispatch-board notes before sending all traffic to the AI receptionist.",
    },
  ],
  finalCta: {
    title: "Replace message-taking with booked appointments.",
    description:
      "Bring your answering-service invoice, call volume, average job value, and booking rules. Prestyj will model the AI receptionist within your done-for-you AI marketing and sales system and show the replacement economics.",
    primaryCta: {
      href: "/book-demo",
      label: "Book a receptionist demo",
      description: "Hear the call flow and review your economics.",
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

export default function AiReceptionistPage() {
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
