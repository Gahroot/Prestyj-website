import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const fieldedgeUsers: BestForPageContent = createBestForPage({
  slug: "fieldedge-users",
  niche: {
    name: "FieldEdge Users",
    shortName: "FieldEdge",
    description:
      "Home service businesses using FieldEdge for field service management, scheduling, and invoicing",
  },
  meta: {
    title: "AI Lead Response for FieldEdge Users | Prestyj",
    description:
      "Automate lead response and dispatch for your FieldEdge-powered service business. AI answers calls, qualifies jobs, and books directly into FieldEdge — 24/7.",
    keywords: [
      "FieldEdge AI integration",
      "AI for FieldEdge",
      "FieldEdge automated dispatch",
      "FieldEdge AI receptionist",
      "FieldEdge lead response automation",
      "AI appointment setting FieldEdge",
    ],
  },
  hero: {
    badge: "Built for FieldEdge",
    headlineAccent: "Your FieldEdge Dispatch",
    subheadline:
      "Stop losing leads to voicemail. AI answers every call, qualifies the service request, and creates jobs directly in FieldEdge — so your dispatch board stays full around the clock.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Calendar" as IconName,
      title: "Direct Job Creation in FieldEdge",
      description:
        "AI captures caller details and creates complete work orders in FieldEdge — customer info, service type, priority level, and scheduling preferences all filled in automatically.",
    },
    {
      icon: "Users" as IconName,
      title: "Customer History Lookup",
      description:
        "AI recognizes existing FieldEdge customers by phone number, pulls service history, and uses past interactions to personalize the conversation. New customers get created seamlessly.",
    },
    {
      icon: "Truck" as IconName,
      title: "Smart Technician Routing",
      description:
        "AI matches jobs to the right technician based on skills, location, and equipment. Emergency calls get priority placement; routine maintenance fills schedule gaps.",
    },
    {
      icon: "Clock" as IconName,
      title: "Real-Time Availability Sync",
      description:
        "AI reads your FieldEdge calendar in real-time to offer accurate slots. No double-booking, no rescheduling callbacks — customers get confirmed appointments on the first call.",
    },
  ],
  painPoints: [
    {
      problem: "Office staff overwhelmed by call volume during peak seasons",
      solution:
        "AI handles unlimited concurrent calls. Your office team focuses on complex customer issues while AI manages routine bookings and qualification automatically.",
    },
    {
      problem: "After-hours calls go to voicemail and never convert",
      solution:
        "AI answers after-hours calls with full FieldEdge context. Emergency calls get booked immediately; routine requests appear on the dispatch board by morning.",
    },
    {
      problem: "Manually entering call details wastes dispatcher time",
      solution:
        "AI captures all information and creates jobs directly in FieldEdge. Dispatchers see ready-to-assign work orders instead of scribbled message pads.",
    },
    {
      problem: "Competitors respond faster and steal your leads",
      solution:
        "AI responds in under 60 seconds. When a homeowner calls three companies, you're the one who answers first and books the appointment before competitors call back.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj + FieldEdge", "FieldEdge Alone", "Answering Service + FieldEdge"],
    rows: [
      {
        feature: "After-Hours Coverage",
        prestyj: "24/7 with full FieldEdge integration",
        others: "Voicemail / Manual message entry",
      },
      {
        feature: "Job Creation",
        prestyj: "Direct to FieldEdge, automated",
        others: "Manual entry / Takes messages only",
      },
      {
        feature: "Customer Recognition",
        prestyj: "Automatic history lookup",
        others: "Manual search / No CRM access",
      },
      {
        feature: "Technician Matching",
        prestyj: "AI routes by skill and location",
        others: "Manual dispatcher assignment / No routing",
      },
      {
        feature: "Peak Volume Handling",
        prestyj: "Unlimited concurrent calls",
        others: "Limited by staff / Overflow to voicemail",
      },
      {
        feature: "Response Time",
        prestyj: "Under 60 seconds",
        others: "Varies by availability / Callback delays",
      },
      {
        feature: "Monthly Cost",
        prestyj: "Fixed rate, no per-call fees",
        others: "Staff salaries / Per-minute charges",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does Prestyj integrate with FieldEdge?",
      answer:
        "Prestyj connects to FieldEdge via API integration. AI accesses your customer database for recognition, reads technician schedules in real-time, and creates work orders directly in your system. Setup is straightforward with your FieldEdge API credentials.",
    },
    {
      question: "Can AI differentiate between emergency and routine service calls?",
      answer:
        "Yes. AI asks targeted questions to assess urgency — no heat in winter, gas leaks, and flooding get flagged as emergencies. You set the priority rules and AI follows them when creating jobs in FieldEdge.",
    },
    {
      question: "Does it work with FieldEdge's flat-rate pricing?",
      answer:
        "AI can reference your FieldEdge pricebook to provide estimates during the call and create jobs with the correct service items. Customers get pricing clarity before the technician arrives.",
    },
    {
      question: "What happens when all technicians are booked?",
      answer:
        "AI offers the next available slot based on real-time FieldEdge availability, or can add callers to a waitlist. You control whether AI can suggest alternate dates or flag urgent jobs for schedule shuffling.",
    },
    {
      question: "How long does it take to get set up?",
      answer:
        "Most FieldEdge integrations are live within 7–10 business days, including API connection, AI training on your service types, and test call validation. No changes to your existing FieldEdge setup are required.",
    },
  ],
  cta: {
    headline: "Automate Your FieldEdge Dispatch Board",
    subheadline:
      "Every call answered, every lead booked. See how AI + FieldEdge fills your schedule and eliminates phone tag — 24/7.",
    buttonText: "Book a Demo",
    footnote: "No credit card required. Built for field service businesses on FieldEdge.",
  },
});
