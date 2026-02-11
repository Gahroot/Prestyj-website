import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const dialpad: AlternativePageContent = createAlternativePage({
  slug: "dialpad",
  type: "direct-competitor",
  competitor: {
    name: "Dialpad",
    shortName: "Dialpad",
    pricing: "$15-$35/user/month + AI add-ons cost extra",
    website: "https://www.dialpad.com",
    description: "VoIP platform with AI add-ons",
  },
  meta: {
    title: "Best Dialpad Alternative | Prestyj AI Voice Receptionist",
    description:
      "Looking for a Dialpad alternative? Compare Prestyj vs Dialpad: AI-first receptionist vs. VoIP with AI add-ons, flat pricing vs. per-user fees, done-for-you setup vs. complex configuration.",
    keywords: [
      "dialpad alternative",
      "dialpad ai alternative",
      "best dialpad alternative",
      "dialpad competitors",
      "dialpad ai voice agent alternative",
      "ai voice receptionist",
      "voip alternative",
      "dialpad pricing",
      "dialpad vs prestyj",
      "virtual receptionist software",
      "business phone system alternative",
    ],
  },
  hero: {
    badge: "Dialpad Alternative",
    subheadline:
      "Dialpad is a powerful VoIP platform that added AI features. But if you're looking for an AI receptionist that handles inbound leads, qualifies prospects, and manages follow-up without the complexity of a full phone system—Prestyj is built for you.",
  },
  industryStats: [
    {
      stat: "78%",
      description: "of buyers choose the first responder",
    },
    {
      stat: "$15-$35/user/month",
      description: "Dialpad's starting price before AI add-ons",
    },
    {
      stat: "5 minutes",
      description: "Prestyj average setup time with built-in receptionist templates",
    },
    {
      stat: "60%",
      description: "of leads go cold after 1 hour without response",
    },
  ],
  comparison: {
    features: [
      {
        feature: "Primary Focus",
        prestyj: "AI receptionist & lead response",
        competitor: "VoIP phone system",
        note: "Dialpad is a business phone system; Prestyj is for automated lead handling",
      },
      {
        feature: "AI Voice Agent",
        prestyj: "Core product",
        competitor: "Add-on feature",
        note: "Dialpad's AI is an optional add-on, not the primary focus",
      },
      {
        feature: "Pricing Model",
        prestyj: "Flat monthly",
        competitor: "Per-user + AI fees",
        note: "Dialpad charges $15-$35 per user per month, AI features cost extra",
      },
      {
        feature: "Setup Complexity",
        prestyj: "5 minutes, no-code",
        competitor: "Hours to days of configuration",
        note: "Dialpad requires phone system setup, number porting, user training",
      },
      {
        feature: "Agent Seats Required",
        prestyj: "None (fully automated)",
        competitor: "Required for full functionality",
        note: "Dialpad designed for human users with AI assistance",
      },
      buildAlternativeFeature(
        STANDARD_FEATURES.LEAD_QUALIFICATION,
        "Manual or limited",
        "Dialpad relies on human agents or basic AI screening"
      ),
      {
        feature: "Inbound Lead Focus",
        prestyj: "Optimized for lead response",
        competitor: "General call handling",
        note: "Prestyj built for sales leads; Dialpad for all business communications",
      },
      buildAlternativeFeature(
        STANDARD_FEATURES.APPOINTMENT_BOOKING,
        "Requires integration",
        "Dialpad needs external calendar integrations"
      ),
      {
        feature: "Follow-up Automation",
        prestyj: "Built-in lead nurturing",
        competitor: "Limited or manual",
        note: "Prestyj manages full lead lifecycle; Dialpad focuses on live calls",
      },
      buildAlternativeFeature(
        STANDARD_FEATURES.BUILT_IN_CRM,
        "Integrations available",
        "Dialpad connects to CRMs but isn't a CRM itself"
      ),
      {
        feature: "24/7 Availability",
        prestyj: "Always-on AI receptionist",
        competitor: "Depends on user availability",
        note: "Dialpad AI can handle after-hours but is secondary to live users",
      },
      {
        feature: "Industry Templates",
        prestyj: "Receptionist workflows included",
        competitor: "Generic phone system",
        note: "Prestyj has pre-built scripts; Dialpad is a generic VoIP",
      },
    ],
    competitorPricing: {
      price: "$15-$35",
      period: "/user/month",
      note: "+ AI add-on fees, telephony costs, and premium features",
      pros: [
        "Full-featured VoIP business phone system",
        "Voice, video, and messaging in one platform",
        "Call recording and transcriptions",
        "Integrations with popular CRMs and tools",
        "Mobile apps for remote teams",
        "Analytics and call center features",
        "International calling capabilities",
      ],
      cons: [
        "Per-user pricing model gets expensive as you scale",
        "AI features require additional add-on costs",
        "Complex setup and configuration",
        "Designed for teams with human users",
        "Overkill for simple receptionist needs",
        "Learning curve for non-technical users",
        "Not optimized for automated lead response",
        "AI is an add-on, not core to the product",
      ],
    },
    prestyjPricingOverrides: {
      price: "Transparent, flat monthly",
      note: "No per-user fees, no AI add-ons, everything included",
      pros: [
        "AI-first, not an add-on feature",
        "No per-user pricing—scale without cost explosion",
        "5-minute setup, no configuration needed",
        "Built specifically for receptionist workflows",
        "Complete lead lifecycle management",
        "Built-in CRM and follow-up automation",
        "Industry-specific templates included",
        "Designed for automation-first, not user-first",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Target",
      title: "Purpose-Built for Lead Response",
      description:
        "Dialpad is a VoIP platform that added AI features. Prestyj is built from the ground up as an AI receptionist—specialized for handling inbound leads, qualifying prospects, and driving conversions.",
    },
    {
      icon: "DollarSign",
      title: "No Per-User Pricing Trap",
      description:
        "Dialpad charges $15-$35 per user per month, plus extra for AI add-ons. As you grow, costs explode. Prestyj has flat pricing—you handle more calls without paying more per user.",
    },
    {
      icon: "Zap",
      title: "Deploy in Minutes, Not Days",
      description:
        "Dialpad requires setup: phone numbers, user accounts, call flows, integrations. Prestyj works in 5 minutes with pre-built receptionist templates optimized for your industry.",
    },
    {
      icon: "Building2",
      title: "Automation-First, Not User-First",
      description:
        "Dialpad is designed for human users with AI assistance. Prestyj is designed for AI-first operations—fully automated receptionist that handles calls without needing user seats.",
    },
    {
      icon: "HeartHandshake",
      title: "Complete Lead Management",
      description:
        "Dialpad handles calls. Prestyj handles the entire lead lifecycle: qualification, appointment booking, follow-up sequences, CRM syncing, and reactivation campaigns.",
    },
  ],
  whenCompetitorFits: [
    "You have a team of 5+ human users needing a full VoIP phone system",
    "You need video calls, messaging, and voice in one platform",
    "You require call recording and transcriptions for compliance",
    "You're managing international calling across multiple countries",
    "You need extensive user analytics and coaching tools",
    "Your business needs a complete business phone replacement",
    "You have dedicated staff to manage phone system configuration",
  ],
  whenPrestyjFits: [
    "You need an AI receptionist to handle inbound leads automatically",
    "You want to avoid per-user pricing as you scale",
    "You need 24/7 coverage without staffing human agents",
    "You want a solution live in minutes, not hours of configuration",
    "You need complete lead lifecycle management (qualify, book, follow-up)",
    "You're an SMB or growing business needing cost-effective automation",
    "You prefer done-for-you templates over DIY configuration",
    "You want AI-first, not AI-as-an-add-on",
  ],
  relatedResources: [
    {
      href: "/alternatives/ringcentral",
      title: "Prestyj vs RingCentral",
      description: "Compare to another VoIP alternative",
    },
    {
      href: "/alternatives/vapi",
      title: "Prestyj vs Vapi",
      description: "Compare to a developer-first voice infrastructure",
    },
    {
      href: "/best-for/ai-voice-receptionist",
      title: "Best AI Voice Receptionist Solutions",
      description: "Guide to choosing the right AI receptionist",
    },
  ],
  cta: {
    headline: "Skip the VoIP Complexity. Get an AI Receptionist.",
    subheadline:
      "Dialpad is powerful for business phone systems. If you just need an AI receptionist that answers calls, qualifies leads, and manages follow-up—without the complexity and per-user pricing—Prestyj is built for you.",
    buttonText: "Book Your Free Demo",
    buttonHref: "/book-demo",
    footnote: "No per-user fees. No AI add-ons. No complex configuration.",
  },
});
