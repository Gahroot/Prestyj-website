import type { SolutionPageContent } from "./types";

export const aiVoiceAssistantBusiness: SolutionPageContent = {
  slug: "ai-voice-assistant-business",
  meta: {
    title: "AI Voice Assistant for Business | Automate Customer Calls | Prestyj",
    description: "Enterprise-grade AI voice assistant that answers customer calls 24/7, handles inquiries, and automates phone-based workflows. Built for medium businesses, enterprises, and multi-location companies.",
    keywords: [
      "AI voice assistant for business",
      "enterprise AI phone system",
      "automated customer call handling",
      "AI receptionist for enterprise",
      "multi-location AI voice agent",
      "business phone automation AI",
      "AI customer service voice agent",
      "conversational AI for call centers",
      "AI call routing and IVR replacement",
      "voice AI for medium business",
      "enterprise voice automation platform",
      "AI phone assistant for multi-location",
    ],
  },
  hero: {
    badge: "Enterprise AI Voice Assistant",
    headline: "Every Call Answered.",
    headlineAccent: "Every Workflow Automated.",
    subheadline: "An enterprise-grade AI voice assistant that handles customer calls, answers questions, and runs phone-based workflows across every location—24/7. Built for medium businesses, enterprises, and multi-location companies.",
    stats: [
      { value: "24/7", label: "always-on coverage", color: "primary" },
      { value: "100%", label: "calls answered", color: "success" },
      { value: "70%", label: "call deflection", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Phone Operations Are Costing You More Than You Think",
    subheadline: "Growing businesses lose customers, agents, and margin to broken phone workflows.",
    points: [
      {
        icon: "PhoneMissed",
        title: "Hold times are killing your CX",
        description: "Customers wait 8+ minutes for an agent, then abandon. Each abandoned call is a lost sale, a churn risk, or a complaint headed to your reviews page.",
        color: "destructive",
      },
      {
        icon: "DollarSign",
        title: "Call center headcount is unsustainable",
        description: "Agents cost $40K–$80K loaded, turn over every 14 months, and 60% of their calls are repetitive FAQs that don't need a human at all.",
        color: "warning",
      },
      {
        icon: "Layers",
        title: "Multi-location chaos",
        description: "Each location has its own phone tree, hours, and processes. Customers get bounced between branches, and routing rules break the moment you open a new site.",
        color: "primary",
      },
      {
        icon: "Clock",
        title: "After-hours and overflow goes dark",
        description: "Nights, weekends, and call spikes drop straight to voicemail. Competitors with 24/7 coverage scoop up the demand you can't service.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "Enterprise Voice AI That Actually Works",
    subheadline: "A unified AI voice layer that handles inquiries, automates workflows, and scales across every location.",
    benefits: [
      {
        icon: "Bot",
        title: "Natural Human-Like Conversations",
        description: "Sub-second response, real-time interruption handling, and context-aware dialogue. Customers get answers in plain language—not a frustrating phone tree.",
      },
      {
        icon: "Workflow",
        title: "End-to-End Workflow Automation",
        description: "Beyond Q&A: AI books appointments, processes orders, updates accounts, takes payments, and triggers downstream systems—all over the phone.",
      },
      {
        icon: "Database",
        title: "Deep Systems Integration",
        description: "Connects to your CRM, ERP, scheduling, ticketing, and knowledge base. AI pulls live customer data and writes back updates in real time.",
      },
      {
        icon: "Layers",
        title: "Multi-Location Ready",
        description: "One AI brain, configured per location. Routes by branch, language, and business hours so every site sounds local while operations stay centralized.",
      },
      {
        icon: "BarChart3",
        title: "Full Conversation Analytics",
        description: "Every call transcribed, tagged, and scored. Spot trending issues, measure containment, and feed insights back into product, ops, and training.",
      },
      {
        icon: "Shield",
        title: "Enterprise Security & Compliance",
        description: "SOC 2, HIPAA-ready, PII redaction, and call recording controls. Role-based access, audit logs, and data residency options for regulated industries.",
      },
    ],
  },
  calculator: {
    headline: "Voice AI ROI Calculator",
    subheadline: "See how much your phone operations could save with an AI voice assistant.",
    inputs: {
      leads: { label: "Inbound calls per month", placeholder: "10000", defaultValue: 10000 },
      commission: { label: "Average cost per call ($)", placeholder: "8", defaultValue: 8 },
    },
    reactivationRate: 0.7,
    conversionRate: 0.85,
    resultLabel: "Estimated monthly savings with AI",
  },
  objections: {
    headline: "Common Concerns About Enterprise Voice AI",
    subheadline: "Straight answers for operations and CX leaders evaluating voice AI.",
    objections: [
      {
        objection: "Our customers won't trust an AI on the phone",
        response: "Modern voice AI sounds natural, responds in under a second, and resolves issues faster than most IVRs or queued agents. In production deployments, CSAT for AI-handled calls regularly matches or exceeds human agents—because customers care more about fast resolution than who's on the line.",
      },
      {
        objection: "Our workflows are too complex to automate",
        response: "Voice AI doesn't need to handle 100% of calls. It deflects the 60–70% that are repetitive (status checks, FAQs, scheduling, account updates) and warm-transfers the rest to a human with full context attached. Your agents stop answering the same five questions and focus on the calls that actually need them.",
      },
      {
        objection: "We can't rip and replace our existing phone system",
        response: "You don't have to. Prestyj sits on top of your current telephony—Genesys, Five9, Twilio, RingCentral, NICE, or legacy PBX—via SIP or API. Deploy on a single queue or location first, prove the ROI, then expand. No forklift upgrade required.",
      },
      {
        objection: "How do we keep this secure and compliant?",
        response: "Prestyj is built for enterprise: SOC 2 Type II, HIPAA-ready architecture, PCI-compliant payment capture, automatic PII redaction, and configurable data retention. Every call is logged with full audit trails, and customer data stays inside your approved boundaries.",
      },
    ],
  },
  cta: {
    headline: "Ready to Automate Your Phone Operations?",
    subheadline: "See how an enterprise AI voice assistant can deflect 70% of calls, automate workflows, and scale across every location—without adding headcount.",
    buttonText: "Book Your Demo",
    buttonHref: "/book-demo",
    footnote: "Custom enterprise deployments. See a live AI voice assistant handle real-world workflows in under 30 minutes.",
  },
};
