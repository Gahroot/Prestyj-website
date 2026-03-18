import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const ada: AlternativePageContent = createAlternativePage({
  slug: "ada",
  type: "direct-competitor",
  competitor: {
    name: "Ada",
    shortName: "Ada",
    pricing: "$1,500-12,000/month + platform fees",
    website: "https://ada.com",
    description:
      "Enterprise AI customer automation platform for large brands, originally focused on customer support chatbots",
  },
  meta: {
    title: "Ada Alternative for Lead-Driven Businesses | Prestyj",
    description:
      "Looking for an Ada alternative for real estate, home services, or insurance? Compare Prestyj vs Ada: industry-specific lead response vs. generic customer service, voice-first vs. chat-only, and proven ROI in lead conversion.",
    keywords: [
      "ada alternative",
      "ada cx alternative",
      "ada competitors",
      "ada vs prestyj",
      "customer service automation",
      "ai customer support alternative",
      "ada pricing",
      "ai chatbot alternative",
      "customer service ai",
      "ai for real estate",
      "ai for home services",
    ],
  },
  hero: {
    badge: "Ada Alternative",
    subheadline:
      "Ada is a proven enterprise customer service platform — but focuses on support automation, not lead response. Compare industry-specific alternatives with voice-first architecture, multi-agent systems, and specialization in real estate, home services, and insurance.",
  },
  industryStats: [
    {
      stat: "Customer support focus",
      description: "Ada automates support, not lead generation and qualification",
    },
    {
      stat: "Chat-only platform",
      description: "no voice or SMS capabilities for phone-based leads",
    },
    {
      stat: "$6,000+/month",
      description: "typical enterprise pricing",
    },
    {
      stat: "12+ week deployment",
      description: "enterprise implementations require extensive configuration",
    },
  ],
  comparison: {
    features: [
      {
        feature: "Built for Lead Response",
        prestyj: true,
        competitor: false,
        note:
          "Ada automates customer support (issues, returns, FAQs), not lead generation and qualification",
      },
      {
        feature: "Voice Calling Capabilities",
        prestyj: true,
        competitor: false,
        note: "Ada is chat-only; no voice or phone-based lead handling",
      },
      {
        feature: "SMS/Text Messaging",
        prestyj: true,
        competitor: "Limited",
        note: "Ada supports some SMS channels but not core to platform",
      },
      {
        feature: "Real Estate Workflows",
        prestyj: true,
        competitor: false,
        note:
          "No pre-built flows for buyer/seller qualification, showing requests, portal leads",
      },
      {
        feature: "Home Services Optimization",
        prestyj: true,
        competitor: false,
        note:
          "Lacks emergency dispatch, technician scheduling, service-specific routing",
      },
      {
        feature: "Multi-Agent Architecture",
        prestyj: true,
        competitor: false,
        note:
          "Ada uses single-agent model; Prestyny deploys specialized agents per sales stage",
      },
      {
        feature: "Speed-to-Lead Optimization",
        prestyj: true,
        competitor: false,
        note:
          "Ada focuses on resolution time, not first-response speed critical for leads",
      },
      {
        feature: "Appointment Booking",
        prestyj: true,
        competitor: "Basic",
        note:
          "Ada supports simple booking but lacks complex scheduling, technician routing, calendar integration",
      },
      {
        feature: "Industry Compliance",
        prestyj: true,
        competitor: "Generic",
        note:
          "Ada has general compliance but lacks industry-specific (fair housing, insurance licensing)",
      },
      {
        feature: "CRM Integrations",
        prestyj: true,
        competitor: true,
        note:
          "Both integrate with major CRMs, but Prestyj has native industry CRM support",
      },
      {
        feature: "Implementation Time",
        prestyj: "Days to weeks",
        competitor: "12+ weeks",
        note: "Ada enterprise deployments require extensive configuration and training",
      },
    ],
    competitorPricing: {
      price: "$1,500-12,000",
      period: "/month",
      note: "+ platform fees and implementation costs",
      pros: [
        "Established enterprise platform",
        "Strong NLU and intent recognition",
        "Good for high-volume customer support",
        "Omnichannel support (within chat channels)",
        "Robust analytics and reporting",
      ],
      cons: [
        "Chat-only, no voice capabilities",
        "Customer support focus, not lead generation",
        "12+ week enterprise implementation time",
        "Generic workflows, not industry-tuned",
        "Higher price point for features",
        "Requires extensive configuration for industry use",
      ],
    },
    prestyjPricingOverrides: {
      price: "$28,000",
      period: "/year",
      note: "~$2,300/month for full-featured voice + SMS lead response",
      pros: [
        "Voice-first with AI calling and SMS",
        "Purpose-built for lead response and qualification",
        "Industry-specific workflows out of the box",
        "Deploys in days, not months",
        "Native industry CRM integrations",
        "Multi-agent system (4.8% vs. 1.2% conversion)",
        "Speed-to-lead optimization (47-second response)",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Phone",
      title: "Voice-First vs. Chat-Only",
      description:
        "Phone leads convert 23% higher than chat leads. Ada is chat-only, missing the highest-converting channel. Prestyny's voice-first architecture with AI calling + SMS delivers 4.1% conversion rates. If your leads come from phone calls, Ada can't help them.",
    },
    {
      icon: "Target",
      title: "Lead Response vs. Customer Support",
      description:
        "Ada excels at customer support — answering questions, resolving issues, tracking orders. But lead response is different: speed matters (47-second advantage), qualification matters, appointment booking matters. Prestyj is built for lead conversion, not support ticket resolution.",
    },
    {
      icon: "Building2",
      title: "Industry-Specific vs. Generic Workflows",
      description:
        "Real estate requires pre-approval questions. HVAC needs emergency routing. Insurance needs compliance disclosures. Ada's generic workflows don't handle these. Prestyj comes industry-tuned: deploy in days vs. months of customizing Ada for your use case.",
    },
    {
      icon: "Zap",
      title: "Multi-Agent vs. Single-Agent",
      description:
        "Ada uses one AI agent for everything. Prestyj deploys specialists: Response Agent (12-second latency), Qualification Agent (87% accuracy), Appointment Agent (92% show rate). Specialization wins: 4.8% conversion vs. 1.2% for single-agent systems.",
    },
    {
      icon: "Clock",
      title: "Deploy in Days, Not Quarters",
      description:
      "Ada enterprise deployments take 12+ weeks with extensive configuration. Prestyj deploys in days with industry-tuned workflows out of the box. Faster value, lower implementation cost, quicker ROI.",
    },
  ],
  whenCompetitorFits: [
    "You're a large enterprise needing customer support automation",
    "Your primary customer interaction is chat (web, in-app)",
    "You need to handle high volumes of support inquiries",
    "Customer service is your priority, not lead generation",
    "You have 3+ months for enterprise implementation",
    "Budget accommodates $6K+/month minimum",
  ],
  whenPrestyjFits: [
    "You're in real estate, home services, insurance, or lead-driven business",
    "Phone and SMS are critical lead response channels",
    "Speed-to-lead (responding in seconds) drives your conversions",
    "You need industry-specific qualification and workflows",
    "You want to deploy in days, not months",
    "Lead conversion is your priority, not support ticket volume",
  ],
  relatedResources: [
    {
      href: "/blog/ai-lead-response-systems-2026",
      title: "AI Lead Response Systems: Complete Guide",
      description: "Why lead response automation differs from customer support",
    },
    {
      href: "/blog/multi-agent-sales-system-architecture",
      title: "Multi-Agent Sales System Architecture",
      description: "Specialized agents vs. single-agent platforms",
    },
    {
      href: "/blog/speed-to-lead",
      title: "Speed-to-Lead: Why Response Time Wins",
      description: "The 47-second advantage that drives conversions",
    },
    {
      href: "/alternatives/decagon-ai",
      title: "Decagon AI Alternative",
      description: "Compare other customer service AI platforms",
    },
    {
      href: "/best-for/real-estate-teams",
      title: "Best AI for Real Estate Teams",
      description: "Industry-specific AI solutions",
    },
  ],
  cta: {
    headline: "Need Lead Response, Not Customer Support Chatbots?",
    subheadline:
      "See why real estate, home services, and insurance businesses choose Prestyj's voice-first lead response over chat-only customer support platforms. Industry-tuned workflows, multi-agent performance, and proven 4.8% conversion rates.",
    buttonText: "Book Your Demo",
    buttonHref: "/book-demo",
    footnote: "Voice + SMS. Industry-specific. Deploy in days.",
  },
});
