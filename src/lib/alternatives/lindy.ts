import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const lindy: AlternativePageContent = createAlternativePage({
  slug: "lindy",
  type: "direct-competitor",
  competitor: {
    name: "Lindy AI",
    shortName: "Lindy",
    pricing: "Starting at $299/month",
    website: "https://lindy.ai",
    description:
      "End-to-end AI agent platform for lead generation and business automation",
  },
  meta: {
    title: "Best Lindy AI Alternative for Real Estate | Prestyj",
    description:
      "Looking for a Lindy AI alternative? Compare Prestyj vs Lindy: voice-focused specialist vs generalist approach, done-for-you setup vs self-service. See why real estate teams are switching.",
    keywords: [
      "lindy ai alternative",
      "lindy alternative",
      "lindy ai competitors",
      "AI agent platform alternative",
      "real estate AI voice",
      "lindy ai pricing",
    ],
  },
  hero: {
    badge: "Lindy AI Alternative",
    subheadline:
      "Lindy is a versatile AI agent platform for business automation. But if you're a real estate team that needs expert voice calling for lead response and reactivation, there's a better choice.",
  },
  industryStats: [
    {
      stat: "78%",
      description: "of buyers work with the first agent who responds",
    },
    {
      stat: "5-10 min",
      description: "average time per lead with human ISAs",
    },
    {
      stat: "47 sec",
      description: "average Prestyj response time",
    },
  ],
  comparison: {
    features: [
      {
        feature: "Voice Calling Expertise",
        prestyj: "Core focus",
        competitor: "One of many features",
        note: "Prestyj specializes in voice AI, Lindy is a generalist",
      },
      {
        feature: "Setup & Management",
        prestyj: "Done-for-you",
        competitor: "Self-service",
        note: "Prestyj handles everything for you",
      },
      {
        feature: "Real Estate Optimized",
        prestyj: true,
        competitor: false,
        note: "Prestyj is built specifically for real estate",
      },
      {
        feature: "Lead Reactivation",
        prestyj: true,
        competitor: false,
        note: "Prestyj specializes in reviving dead leads",
      },
      {
        feature: "Built-in CRM",
        prestyj: true,
        competitor: "Limited",
        note: "Prestyj includes full lead management",
      },
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      {
        feature: "Post-Call Follow-up",
        prestyj: "Automated",
        competitor: "Manual setup",
        note: "Prestyj handles full lead lifecycle",
      },
      {
        feature: "Voice Quality",
        prestyj: "Ultra-realistic",
        competitor: "Standard AI voice",
        note: "Prestyj uses advanced voice synthesis",
      },
    ],
    competitorPricing: {
      price: "$299+",
      period: "/month",
      note: "Varies by usage and features",
      pros: [
        "Multi-channel automation",
        "Email, chat, and basic voice",
        "Workflow builder",
        "Integration marketplace",
      ],
      cons: [
        "Generalist approach, not voice-focused",
        "Self-service setup and management",
        "Voice calling is not the core strength",
        "Not optimized for real estate workflows",
        "Limited post-call automation for leads",
        "Standard AI voice quality",
      ],
    },
    prestyjPricingOverrides: {
      price: "Predictable pricing",
      note: "Based on your needs",
      pros: [
        "Expert voice calling is the core focus",
        "Done-for-you setup and optimization",
        "Built specifically for real estate",
        "Lead reactivation included",
        "Built-in CRM and lead management",
        "Ultra-realistic voice quality",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Phone",
      title: "Voice-First, Not Voice-Also",
      description:
        "Lindy offers voice as one of many features. Prestyj is built from the ground up for voice calling excellence. We live and breathe conversational AI for leads.",
    },
    {
      icon: "Wrench",
      title: "Done-For-You Expertise",
      description:
        "Lindy requires you to set up and manage your own agents. Prestyj provides expert, done-for-you setup and ongoing optimization. We handle everything.",
    },
    {
      icon: "Home",
      title: "Real Estate Specialist",
      description:
        "Lindy is a generalist platform for any industry. Prestyj is laser-focused on real estate lead qualification, with workflows built for how you actually sell.",
    },
    {
      icon: "RefreshCw",
      title: "Lead Reactivation Built-In",
      description:
        "Don't just handle new leads—revive thousands of dead leads sitting in your database. Prestyj specializes in done-for-you lead reactivation campaigns.",
    },
  ],
  whenCompetitorFits: [
    "You need multi-channel automation (email, chat, social media)",
    "You want to build and manage agents yourself",
    "You need automation across multiple business functions",
    "Voice calling is not your primary need",
    "You're looking for a general-purpose AI agent platform",
  ],
  whenPrestyjFits: [
    "You need expert voice calling for lead response",
    "You want done-for-you setup without the complexity",
    "You need a solution specifically optimized for real estate",
    "You want to reactivate dead leads, not just handle new ones",
    "You prefer hands-on support over self-service",
    "You value ultra-realistic voice quality and conversion rates",
  ],
  relatedResources: [
    {
      href: "/alternatives/vapi",
      title: "Prestyj vs Vapi",
      description: "Compare to another AI voice platform",
    },
    {
      href: "/alternatives/retell",
      title: "Prestyj vs Retell",
      description: "Compare to voice AI infrastructure",
    },
    {
      href: "/blog/isa-vs-ai",
      title: "ISA vs AI Comparison",
      description: "See how AI compares to human ISAs",
    },
  ],
  cta: {
    headline: "Choose Voice Expertise Over Generic Automation",
    subheadline:
      "Lindy is great for general business automation. But for real estate voice calling that actually converts, Prestyj is the specialist you need.",
    buttonText: "Book Your Free Demo",
    buttonHref: "/book-demo",
    footnote: "No credit card required. No setup complexity.",
  },
});
