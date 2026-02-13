import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const leadtruffle: AlternativePageContent = createAlternativePage({
  slug: "leadtruffle",
  type: "direct-competitor",
  competitor: {
    name: "LeadTruffle",
    shortName: "LeadTruffle",
    pricing: "$229/mo",
    website: "https://www.leadtruffle.co",
    description:
      "Missed call text-back automation for home service contractors",
  },
  meta: {
    title: "Best LeadTruffle Alternative | Full-Solution AI Reception | Prestyj",
    description:
      "Looking for a LeadTruffle alternative? Compare Prestyj vs LeadTruffle: missed call text-back plus AI voice agents, appointment booking, and full lead nurturing. More features, competitive pricing.",
    keywords: [
      "leadtruffle alternative",
      "leadtruffle vs prestyj",
      "leadtruffle competitors",
      "missed call text back alternative",
      "home service ai receptionist",
      "contractor lead response",
      "missed call solution",
    ],
  },
  hero: {
    badge: "LeadTruffle Alternative",
    subheadline:
      "LeadTruffle offers missed call text-back at $229/month. Prestyj handles missed calls with text-back, plus AI voice agents, appointment booking, and full lead nurturing—all at competitive pricing.",
  },
  industryStats: [
    {
      stat: "$229/mo",
      description: "LeadTruffle for missed call text-back only",
    },
    {
      stat: "1 feature",
      description: "LeadTruffle's single focus: missed call text-back",
    },
    {
      stat: "Full journey",
      description: "Prestyj handles calls, texts, booking, and follow-up",
    },
    {
      stat: "24/7 coverage",
      description: "Prestyj AI voice vs. text-only after missed calls",
    },
  ],
  comparison: {
    features: [
      {
        feature: "Missed Call Text-Back",
        prestyj: true,
        competitor: true,
        note: "Both platforms automatically text back missed calls",
      },
      {
        feature: "AI Voice Agents",
        prestyj: true,
        competitor: false,
        note: "LeadTruffle is text-only—no voice conversation capability",
      },
      {
        feature: "Inbound Call Handling",
        prestyj: "AI answers calls live",
        competitor: "Text-back after miss",
        note: "Prestyj answers calls; LeadTruffle only responds after you miss",
      },
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, false),
      {
        feature: "Appointment Booking",
        prestyj: true,
        competitor: false,
        note: "LeadTruffle doesn't book appointments—only sends a text",
      },
      buildAlternativeFeature(STANDARD_FEATURES.LEAD_QUALIFICATION, false),
      {
        feature: "Lead Qualification",
        prestyj: "AI conversation scoring",
        competitor: false,
        note: "LeadTruffle doesn't qualify leads—just sends a text message",
      },
      {
        feature: "Outbound Follow-Up",
        prestyj: "AI nurtures leads over time",
        competitor: false,
        note: "LeadTruffle only responds to missed calls—no ongoing nurture",
      },
      buildAlternativeFeature(STANDARD_FEATURES.BUILT_IN_CRM, false),
      {
        feature: "Built-in CRM",
        prestyj: true,
        competitor: false,
        note: "LeadTruffle doesn't include CRM or lead management",
      },
      {
        feature: "Two-Way Texting",
        prestyj: true,
        competitor: false,
        note: "LeadTruffle sends one-way texts—no ongoing conversation",
      },
    ],
    competitorPricing: {
      price: "$229",
      period: "/month",
      note: "For missed call text-back only",
      pros: [
        "Simple, focused product does one thing well",
        "Quick setup for missed call text-back",
        "Designed specifically for home service contractors",
        "Affordable for single-feature automation",
      ],
      cons: [
        "Text-only—no voice conversation capability",
        "Only responds AFTER you miss a call",
        "No appointment booking or scheduling",
        "No lead qualification or scoring",
        "No ongoing lead nurture or follow-up",
        "No built-in CRM or lead management",
        "One-way texts—no two-way conversations",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Phone",
      title: "AI Voice Agents, Not Just Texts",
      description:
        "LeadTruffle only sends texts after missed calls. Prestyj answers calls live with AI voice, captures information, and handles conversations in real-time.",
    },
    {
      icon: "CalendarCheck",
      title: "Actual Appointment Booking",
      description:
        "LeadTruffle sends a text but doesn't book appointments. Prestyj's AI actually schedules appointments on your calendar and confirms booking details.",
    },
    {
      icon: "TrendingUp",
      title: "Full Lead Nurturing Journey",
      description:
        "LeadTruffle sends one text and stops. Prestyj nurtures leads over time with follow-up sequences, qualification questions, and ongoing engagement.",
    },
    {
      icon: "Database",
      title: "Built-in CRM Included",
      description:
        "LeadTruffle doesn't manage leads. Prestyj includes a full CRM to track conversations, qualify leads, and manage your pipeline in one place.",
    },
  ],
  whenCompetitorFits: [
    "You only need missed call text-back and nothing else",
    "You already have a full system and just want to add one feature",
    "Your volume is very low and $229/mo fits your budget",
    "You don't want AI answering calls—just want a text backup",
    "You handle all booking and follow-up manually",
  ],
  whenPrestyjFits: [
    "You want AI to answer calls, not just text after missing them",
    "You need actual appointment booking, not just a text message",
    "You want lead nurturing and follow-up beyond the first text",
    "You need a built-in CRM to manage your pipeline",
    "You want two-way conversations, not one-way broadcasts",
    "You're looking for better value with more features",
    "You serve home services but want a complete solution",
  ],
  relatedResources: [
    {
      href: "/alternatives/isa-service",
      title: "ISA Service Alternatives",
      description: "Compare to other lead response solutions",
    },
    {
      href: "/blog/why-leads-go-cold",
      title: "Why 80% of Leads Go Cold",
      description: "The data behind lead response times",
    },
    {
      href: "/best-for/home-service-contractors",
      title: "Best for Home Service Contractors",
      description: "Why contractors choose Prestyj",
    },
  ],
  cta: {
    headline: "Need More Than Missed Call Text-Back?",
    subheadline:
      "Stop losing leads to missed calls. Prestyj answers every call with AI, books appointments, and nurtures leads—all at competitive pricing. See it in action.",
    buttonText: "Book Your Free Demo",
    buttonHref: "/book-demo",
    footnote: "No credit card required. See results in minutes.",
  },
});
