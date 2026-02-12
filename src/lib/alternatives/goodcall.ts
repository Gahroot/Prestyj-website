import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const goodcall: AlternativePageContent = createAlternativePage({
  slug: "goodcall",
  type: "direct-competitor",
  competitor: {
    name: "Goodcall",
    shortName: "Goodcall",
    pricing: "$59-$199/month",
    website: "https://goodcall.com",
    description:
      "AI phone agent platform for small businesses with automated inbound call handling",
  },
  meta: {
    title: "Best Goodcall Alternative | Prestyj AI Receptionist",
    description:
      "Looking for a Goodcall alternative? Compare Prestyj vs Goodcall: complete lead management vs basic call answering, done-for-you setup vs self-service, predictable pricing vs per-minute fees. See why businesses are switching.",
    keywords: [
      "goodcall alternative",
      "goodcall competitor",
      "goodcall pricing",
      "goodcall alternatives 2025",
      "best goodcall alternative",
      "ai phone agent alternative",
      "ai receptionist software",
      "virtual receptionist alternative",
      "goodcall vs prestyj",
      "ai voice agent",
    ],
  },
  hero: {
    badge: "Goodcall Alternative",
    subheadline:
      "Goodcall is a solid AI phone agent platform. But if you're looking for complete lead management beyond basic call answering, with done-for-you setup and transparent pricing, there's a better solution.",
  },
  industryStats: [
    {
      stat: "67%",
      description: "of small businesses miss calls after hours—Goodcall answers some, Prestyj answers all with lead capture",
    },
    {
      stat: "$59-$199",
      description: "Goodcall's monthly pricing per agent + per-minute fees",
    },
    {
      stat: "5 minutes",
      description: "to deploy Prestyj with full lead management (no configuration)",
    },
  ],
  comparison: {
    features: [
      {
        feature: "Setup & Deployment",
        prestyj: "5 minutes",
        competitor: "Self-service configuration",
        note: "Goodcall requires manual setup; Prestyj is done-for-you",
      },
      {
        feature: "Lead Management",
        prestyj: "Complete lifecycle",
        competitor: "Call answering only",
        note: "Prestyj handles qualification, follow-up, and CRM sync",
      },
      {
        feature: "Pricing Model",
        prestyj: "Transparent monthly",
        competitor: "$59-$199/month + fees",
        note: "Goodcall has base fees plus per-minute and usage charges",
      },
      {
        feature: "CRM Integration",
        prestyj: "Built-in CRM",
        competitor: "Integrations available",
        note: "Prestyj includes full CRM; Goodcall connects to external tools",
      },
      {
        feature: "Lead Qualification",
        prestyj: "Automated scoring",
        competitor: "Basic call handling",
        note: "Prestyj qualifies and routes leads; Goodcall takes messages",
      },
      buildAlternativeFeature(
        STANDARD_FEATURES.BUILT_IN_CRM,
        false,
        "Goodcall requires external CRM for lead management"
      ),
      {
        feature: "Appointment Scheduling",
        prestyj: "Direct booking",
        competitor: "Message taking",
        note: "Prestyj books directly into your calendar",
      },
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      {
        feature: "Post-Call Follow-up",
        prestyj: "Automated SMS/email",
        competitor: "Not included",
        note: "Prestyj nurtures leads after the call",
      },
      {
        feature: "Industry Specialization",
        prestyj: "Real estate & SMB focused",
        competitor: "General small business",
        note: "Prestyj optimized for lead-heavy industries",
      },
      {
        feature: "Implementation Support",
        prestyj: "Done-for-you setup",
        competitor: "Self-serve",
        note: "Prestyj handles everything for you",
      },
    ],
    competitorPricing: {
      price: "$59-$199",
      period: "/month per agent",
      note: "Plus per-minute fees and additional usage charges—typical costs are $100-300+/month",
      pros: [
        "Quick setup for basic call answering",
        "Handles multiple languages",
        "CRM integrations available",
        "Customizable call scripts",
        "Voicemail transcription",
        "After-hours coverage",
        "Suitable for various small businesses",
        "Web-based dashboard for management",
      ],
      cons: [
        "Base fee plus per-minute charges add up",
        "Limited to call answering (no lead management)",
        "Self-service setup and configuration",
        "No built-in CRM or lead qualification",
        "Basic post-call follow-up capabilities",
        "No automated appointment booking",
        "Requires external tools for complete workflow",
        "Support limited to technical issues",
        "Not optimized for lead-heavy industries",
      ],
    },
    prestyjPricingOverrides: {
      price: "Predictable, all-inclusive",
      note: "One transparent price covers everything—no per-minute surprises",
      pros: [
        "Complete lead management, not just call answering",
        "Done-for-you setup and optimization",
        "Built-in CRM with lead qualification",
        "Automated appointment booking",
        "Post-call SMS/email follow-up included",
        "Transparent pricing with no hidden fees",
        "Optimized for real estate and SMBs",
        "White-glove onboarding and support",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Users",
      title: "Complete Lead Management, Not Call Answering",
      description:
        "Goodcall answers calls and takes messages. Prestyj manages the entire lead lifecycle: qualification, scoring, follow-up, and CRM sync. Turn callers into clients, not just contacts.",
    },
    {
      icon: "DollarSign",
      title: "Transparent Pricing, No Surprise Fees",
      description:
        "Goodcall's base fee plus per-minute charges means unpredictable bills. Prestyj offers all-inclusive pricing—you know exactly what you'll pay each month.",
    },
    {
      icon: "Wrench",
      title: "Done-For-You, Not Do-It-Yourself",
      description:
        "Goodcall is self-service configuration. Prestyj provides white-glove setup and ongoing optimization. We handle everything so you can focus on closing deals.",
    },
    {
      icon: "CalendarCheck",
      title: "Books Appointments, Doesn't Just Take Messages",
      description:
        "Goodcall takes messages for you to return later. Prestyj books appointments directly into your calendar and follows up automatically. Faster response means more conversions.",
    },
    {
      icon: "Target",
      title: "Built for Lead-Heavy Industries",
      description:
        "Goodcall is a generalist solution for any small business. Prestyj is optimized for real estate and service businesses where lead response time directly impacts revenue.",
    },
  ],
  whenCompetitorFits: [
    "You only need basic call answering and message taking",
    "Your business has simple inbound call needs",
    "You prefer self-service setup and management",
    "You already have robust lead management tools",
    "You want a general solution for multiple business types",
    "You're comfortable managing integrations yourself",
    "Call volume is low and predictable",
    "You don't need post-call automation or follow-up",
  ],
  whenPrestyjFits: [
    "You need complete lead management beyond call answering",
    "You want done-for-you setup and ongoing optimization",
    "You need predictable pricing without per-minute fees",
    "Lead qualification and follow-up are critical to your business",
    "You want automated appointment booking, not just message taking",
    "You're in real estate or a lead-heavy service industry",
    "You need built-in CRM and lead lifecycle management",
    "You want white-glove support from industry experts",
    "You care about conversion rates, not just answer rates",
  ],
  relatedResources: [
    {
      href: "/alternatives/bland-ai",
      title: "Prestyj vs Bland AI",
      description: "Compare to another developer-focused voice AI platform",
    },
    {
      href: "/alternatives/vapi",
      title: "Prestyj vs Vapi",
      description: "See how we compare to infrastructure-first voice platforms",
    },
    {
      href: "/blog/voice-ai-receptionist",
      title: "Voice AI Receptionist Guide",
      description: "Learn what to look for in an AI receptionist solution",
    },
  ],
  cta: {
    headline: "Stop Missing Calls. Start Converting Leads.",
    subheadline:
      "Goodcall handles calls. Prestyj handles calls AND converts leads. Book your demo to see the difference complete lead management makes.",
    buttonText: "Book Your Free Demo",
    buttonHref: "/book-demo",
    footnote: "No credit card required. Done-for-you setup included.",
  },
});
