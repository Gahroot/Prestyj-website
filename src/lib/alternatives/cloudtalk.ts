import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const cloudtalk: AlternativePageContent = createAlternativePage({
  slug: "cloudtalk",
  type: "direct-competitor",
  competitor: {
    name: "CloudTalk",
    shortName: "CloudTalk",
    pricing: "$55+/user/month + AI add-ons",
    website: "https://cloudtalk.io",
    description:
      "Cloud-based call center software with AI voice agent capabilities for sales and support teams",
  },
  meta: {
    title: "Best CloudTalk Alternative | Prestyj AI Voice Receptionist",
    description:
      "Looking for a CloudTalk alternative? Compare Prestyj vs CloudTalk: AI-first receptionist vs. call center software, transparent pricing vs. per-user fees, done-for-you setup vs. complex configuration.",
    keywords: [
      "cloudtalk alternative",
      "cloudtalk ai alternative",
      "best cloudtalk alternative",
      "cloudtalk competitors",
      "cloudtalk ai voice agent alternative",
      "ai voice receptionist",
      "cloud call center alternative",
      "cloudtalk pricing",
      "cloudtalk vs prestyj",
      "virtual receptionist software",
    ],
  },
  hero: {
    badge: "CloudTalk Alternative",
    subheadline:
      "CloudTalk is a powerful call center platform with AI features. But if you're looking for an AI receptionist that handles inbound leads, qualifies prospects, and manages follow-up without the complexity of a full call center system—Prestyj is built for you.",
  },
  industryStats: [
    {
      stat: "82%",
      description: "of consumers expect an immediate response to sales inquiries",
    },
    {
      stat: "$55+/user",
      description: "CloudTalk's starting price per agent before AI add-ons",
    },
    {
      stat: "5 minutes",
      description: "Prestyj average setup time with built-in receptionist templates",
    },
  ],
  comparison: {
    features: [
      {
        feature: "Primary Focus",
        prestyj: "AI receptionist & lead response",
        competitor: "Call center operations",
        note: "CloudTalk is for agent teams; Prestyj is for automated lead handling",
      },
      {
        feature: "AI Voice Agent",
        prestyj: "Core product",
        competitor: "Add-on feature",
        note: "CloudTalk's AI is an optional feature, not the primary focus",
      },
      {
        feature: "Pricing Model",
        prestyj: "Flat monthly",
        competitor: "Per-user + AI fees",
        note: "CloudTalk charges $55+ per agent plus AI add-on costs",
      },
      {
        feature: "Setup Complexity",
        prestyj: "5 minutes, no-code",
        competitor: "Days to weeks of configuration",
        note: "CloudTalk requires call flows, agent training, and system setup",
      },
      {
        feature: "Agent Seats Required",
        prestyj: "None (fully automated)",
        competitor: "Required for full functionality",
        note: "CloudTalk designed for human agent teams with AI assistance",
      },
      buildAlternativeFeature(
        STANDARD_FEATURES.LEAD_QUALIFICATION,
        "Manual or limited",
        "CloudTalk relies on human agents or basic AI screening"
      ),
      {
        feature: "Inbound Lead Focus",
        prestyj: "Optimized for lead response",
        competitor: "General call handling",
        note: "Prestyj built for sales leads; CloudTalk for support and sales calls",
      },
      buildAlternativeFeature(
        STANDARD_FEATURES.APPOINTMENT_BOOKING,
        "Requires integration",
        "CloudTalk needs external calendar integrations"
      ),
      {
        feature: "Follow-up Automation",
        prestyj: "Built-in lead nurturing",
        competitor: "Limited or manual",
        note: "Prestyj manages full lead lifecycle; CloudTalk focuses on live calls",
      },
      buildAlternativeFeature(
        STANDARD_FEATURES.BUILT_IN_CRM,
        "Integrations available",
        "CloudTalk connects to CRMs but isn't a CRM itself"
      ),
      {
        feature: "24/7 Availability",
        prestyj: "Always-on AI receptionist",
        competitor: "Depends on agent staffing",
        note: "CloudTalk AI can handle after-hours but is secondary to live agents",
      },
      {
        feature: "Industry Templates",
        prestyj: "Receptionist workflows included",
        competitor: "Generic call center",
        note: "Prestyj has pre-built scripts; CloudTalk is generic",
      },
    ],
    competitorPricing: {
      price: "$55+",
      period: "/user/month",
      note: "+ AI Agent add-on fees, telephony costs, and premium features",
      pros: [
        "Full-featured call center platform",
        "Advanced call routing and queuing",
        "Agent analytics and coaching tools",
        "Integrations with 60+ tools",
        "International phone numbers in 160+ countries",
        "Voice analytics and call recording",
        "Team collaboration features",
      ],
      cons: [
        "Expensive per-user pricing model",
        "AI features require additional add-on costs",
        "Complex setup and configuration",
        "Designed for teams with human agents",
        "Overkill for simple receptionist needs",
        "Steep learning curve for non-technical users",
        "Requires ongoing agent management",
        "Not optimized for automated lead response",
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
        "Designed for automation-first, not agent-first",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Target",
      title: "Purpose-Built for Lead Response",
      description:
        "CloudTalk is a call center platform with AI added on. Prestyj is built from the ground up as an AI receptionist—specialized for handling inbound leads, qualifying prospects, and driving conversions.",
    },
    {
      icon: "DollarSign",
      title: "No Per-User Pricing Trap",
      description:
        "CloudTalk charges $55+ per agent per month, plus AI add-ons. As you grow, costs explode. Prestyj has flat pricing—you handle more calls without paying more per user.",
    },
    {
      icon: "Zap",
      title: "Deploy in Minutes, Not Days",
      description:
        "CloudTalk requires complex setup: call flows, agent scripts, integrations, training. Prestyj works in 5 minutes with pre-built receptionist templates optimized for your industry.",
    },
    {
      icon: "Building2",
      title: "Automation-First, Not Agent-First",
      description:
        "CloudTalk is designed for human agents with AI assistance. Prestyj is designed for AI-first operations—fully automated receptionist that handles calls without needing agent seats.",
    },
    {
      icon: "HeartHandshake",
      title: "Complete Lead Management",
      description:
        "CloudTalk handles calls. Prestyj handles the entire lead lifecycle: qualification, appointment booking, follow-up sequences, CRM syncing, and reactivation campaigns.",
    },
  ],
  whenCompetitorFits: [
    "You have a team of 10+ human agents needing a full call center platform",
    "You need advanced agent analytics, coaching, and performance monitoring",
    "You require complex call routing across multiple departments and queues",
    "You're managing international operations across 160+ countries",
    "You need extensive agent collaboration and monitoring tools",
    "Your business is call center operations, not automated reception",
    "You have dedicated staff to manage call center configuration",
  ],
  whenPrestyjFits: [
    "You need an AI receptionist to handle inbound leads automatically",
    "You want to avoid per-user pricing as you scale",
    "You need 24/7 coverage without staffing human agents",
    "You want a solution live in minutes, not weeks of configuration",
    "You need complete lead lifecycle management (qualify, book, follow-up)",
    "You're an SMB or growing business needing cost-effective automation",
    "You prefer done-for-you templates over DIY configuration",
    "You want AI-first, not AI-as-an-add-on",
  ],
  relatedResources: [
    {
      href: "/alternatives/bland-ai",
      title: "Prestyj vs Bland AI",
      description: "Compare to another AI voice platform",
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
    headline: "Skip the Call Center Complexity. Get an AI Receptionist.",
    subheadline:
      "CloudTalk is powerful for call centers. If you just need an AI receptionist that answers calls, qualifies leads, and manages follow-up—without the complexity and per-user pricing—Prestyj is built for you.",
    buttonText: "Book Your Free Demo",
    buttonHref: "/book-demo",
    footnote: "No per-user fees. No AI add-ons. No complex configuration.",
  },
});
