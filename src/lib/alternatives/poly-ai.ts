import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const polyAi: AlternativePageContent = createAlternativePage({
  slug: "poly-ai",
  type: "direct-competitor",
  competitor: {
    name: "PolyAI",
    shortName: "PolyAI",
    pricing: "Custom enterprise pricing",
    website: "https://poly.ai",
    description:
      "Enterprise voice AI platform specializing in customer service automation for large-scale call centers",
  },
  meta: {
    title: "Best PolyAI Alternative | Prestyj AI Voice Receptionist",
    description:
      "Looking for a PolyAI alternative? Compare Prestyj vs PolyAI: fast SMB implementation vs months-long enterprise deployment, transparent pricing vs custom contracts, industry-specialized vs one-size-fits-all.",
    keywords: [
      "polyai alternative",
      "polyai competitor",
      "enterprise voice AI alternative",
      "alternative to polyai",
      "polyai pricing",
      "AI voice receptionist",
      "customer service AI alternative",
      "voice AI platform",
      "call center automation alternative",
      "enterprise voice assistant",
    ],
  },
  hero: {
    badge: "PolyAI Alternative",
    subheadline:
      "PolyAI is powerful for enterprise call centers with months to invest in custom deployment. But if you're a business that needs a voice AI solution implemented quickly without enterprise complexity—there's a better alternative.",
  },
  industryStats: [
    {
      stat: "3-6 months",
      description: "typical PolyAI enterprise implementation timeline",
    },
    {
      stat: "$50,000+",
      description: "starting cost for PolyAI enterprise contracts",
    },
    {
      stat: "15 minutes",
      description: "to go live with Prestyj (no enterprise project needed)",
    },
  ],
  comparison: {
    features: [
      {
        feature: "Implementation Time",
        prestyj: "15 minutes",
        competitor: "3-6 months",
        note: "PolyAI requires extensive training, integration, and enterprise project management",
      },
      {
        feature: "Pricing Model",
        prestyj: "Transparent monthly",
        competitor: "Custom enterprise",
        note: "PolyAI requires sales contracts, minimum commitments, and often six-figure deals",
      },
      {
        feature: "Minimum Commitment",
        prestyj: "None",
        competitor: "Annual contracts",
        note: "PolyAI typically requires 12+ month commitments with significant minimums",
      },
      {
        feature: "Industry Specialization",
        prestyj: "Multi-industry templates",
        competitor: "Generic customer service",
        note: "PolyAI focuses on broad CX use cases; Prestyj has industry-specific workflows",
      },
      {
        feature: "Setup Complexity",
        prestyj: "No-code, self-serve",
        competitor: "Enterprise project",
        note: "PolyAI requires professional services, data scientists, and integration work",
      },
      buildAlternativeFeature(
        STANDARD_FEATURES.AI_VOICE,
        true,
        "Both support voice AI, but Prestyj is optimized for receptionist workflows"
      ),
      {
        feature: "SMB-Friendly",
        prestyj: true,
        competitor: false,
        note: "PolyAI is designed for enterprise call centers with high call volumes",
      },
      buildAlternativeFeature(
        STANDARD_FEATURES.APPOINTMENT_BOOKING,
        true,
        "Prestyj has pre-built booking flows; PolyAI requires custom configuration"
      ),
      {
        feature: "24/7 Phone Coverage",
        prestyj: true,
        competitor: true,
        note: "Both provide 24/7 availability, but Prestyj includes it out-of-box",
      },
      {
        feature: "Training Required",
        prestyj: "None",
        competitor: "Extensive",
        note: "PolyAI requires conversation design, NLU training, and optimization cycles",
      },
      {
        feature: "Support Model",
        prestyj: "Business support",
        competitor: "Enterprise CSM",
        note: "PolyAI provides enterprise account management; Prestyj provides hands-on business guidance",
      },
      {
        feature: "Customization vs Speed",
        prestyj: "Template-first",
        competitor: "Full customization",
        note: "PolyAI offers deep customization at the cost of implementation time; Prestyj prioritizes speed-to-value",
      },
    ],
    competitorPricing: {
      price: "Custom",
      period: "enterprise contract",
      note: "Typical implementations start at $50,000+ annually with significant implementation fees",
      pros: [
        "Highly customizable for complex use cases",
        "Enterprise-grade infrastructure and security",
        "Proven at massive scale (millions of calls)",
        "Advanced analytics and conversation insights",
        "Multi-language capabilities",
        "Omnichannel deployment (phone, web, messaging)",
        "Dedicated enterprise support and CSM",
        "HIPAA and SOC2 compliant",
      ],
      cons: [
        "Lengthy sales and implementation process (3-6 months)",
        "High minimum commitments ($50K+ annually)",
        "Requires significant internal resources",
        "Complex pricing with multiple components",
        "Overkill for SMBs and mid-market businesses",
        "Lengthy contracts (12+ months typically)",
        "Designed for call centers, not front desks",
        "Expensive professional services for setup",
        "Ongoing optimization requires specialized skills",
        "Not cost-effective for lower call volumes",
      ],
    },
    prestyjPricingOverrides: {
      price: "Transparent, predictable",
      note: "No enterprise contracts or minimum commitments. Start immediately.",
      pros: [
        "Live in 15 minutes, not months",
        "Industry-specific templates included",
        "No annual contracts required",
        "All-in pricing with no hidden fees",
        "Built for businesses of all sizes",
        "White-glove onboarding included",
        "Business-focused support (not just technical)",
        "Cancel anytime flexibility",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Zap",
      title: "Go Live Today, Not Next Quarter",
      description:
        "PolyAI's enterprise implementation takes 3-6 months of project management, data preparation, and training. Prestyj is built for speed—answer calls and handle workflows on day one with pre-built templates.",
    },
    {
      icon: "DollarSign",
      title: "Transparent Pricing, Not Enterprise Contracts",
      description:
        "PolyAI requires custom contracts with $50K+ minimums and annual commitments. Prestyj offers transparent pricing with no long-term contracts—scale up or down as your business needs change.",
    },
    {
      icon: "Target",
      title: "Industry-Specialized, Not Generic",
      description:
        "PolyAI is built for broad customer service use cases. Prestyj offers specialized workflows for your industry—real estate, healthcare, legal, financial services—with pre-configured conversation flows.",
    },
    {
      icon: "HeartHandshake",
      title: "Business Support, Not Just Enterprise CSMs",
      description:
        "PolyAI provides enterprise account management. Prestyj provides hands-on business support: call quality optimization, workflow refinement, and strategic guidance to maximize your ROI.",
    },
  ],
  whenCompetitorFits: [
    "You're a large enterprise with 1000+ daily calls",
    "You have complex, multi-turn conversation requirements",
    "You need deep integration with legacy systems",
    "You have an internal team of conversation designers and NLU specialists",
    "You're building a custom solution from the ground up",
    "You require advanced analytics and conversation mining",
    "You have significant budget and timeline for implementation",
    "You need omni-channel deployment across phone, web, and messaging",
    "You're replacing an entire call center operation",
    "You require multi-language support across dozens of languages",
  ],
  whenPrestyjFits: [
    "You want to answer calls today, not in 3-6 months",
    "You're an SMB or mid-market business needing voice AI",
    "You prefer transparent pricing over custom enterprise contracts",
    "You want industry-specific templates, not generic customer service",
    "You don't have an internal AI/conversation design team",
    "You need a receptionist solution, not a full call center replacement",
    "You value speed-to-value over unlimited customization",
    "You want the flexibility to scale without long-term commitments",
    "You prefer hands-on business support over enterprise account management",
    "You're looking for predictable monthly costs without surprise fees",
    "You want to start small and scale as you prove value",
    "You need a solution that works with your existing phone system",
  ],
  relatedResources: [
    {
      href: "/alternatives/bland-ai",
      title: "Prestyj vs Bland AI",
      description: "Compare another developer-focused voice AI platform",
    },
    {
      href: "/alternatives/retell",
      title: "Prestyj vs Retell AI",
      description: "Compare another platform requiring technical implementation",
    },
    {
      href: "/best-for/ai-voice-receptionist",
      title: "Best AI Voice Receptionist Solutions",
      description: "Learn what makes a great AI receptionist for your industry",
    },
  ],
  cta: {
    headline: "Ready to Answer Calls Today?",
    subheadline:
      "Skip the enterprise sales cycle and months-long implementation. Prestyj is live in 15 minutes with transparent pricing and industry-specific templates.",
    buttonText: "Book Your Free 15-Minute Demo",
    buttonHref: "/book-demo",
    footnote:
      "See your AI receptionist live with your real phone number. No enterprise contract, no implementation project, no obligation.",
  },
});
