/**
 * Data for the Platform page — FAQs, statistics, and comparison table data.
 */

export interface PlatformFAQ {
  question: string;
  answer: string;
}

export const platformFaqs: PlatformFAQ[] = [
  {
    question: "What is a custom AI sales agent?",
    answer:
      "A custom AI sales agent is a purpose-built AI trained on your specific scripts, objection handling, and qualification criteria. Unlike generic chatbots, it speaks your language, understands your industry, and follows your exact sales process. It can handle inbound lead qualification, outbound follow-up, appointment booking, and review collection — all automatically.",
  },
  {
    question: "How does the multi-agent architecture work?",
    answer:
      "Prestyj deploys specialized agents for different functions: one agent handles inbound call qualification, another manages SMS follow-up, a third sends appointment reminders, and a fourth collects reviews after service. Each agent is optimized for its specific role but shares a unified view of every contact in your CRM.",
  },
  {
    question: "What CRM integrations are available?",
    answer:
      "Follow Up Boss is the native connector we run in production today. We build connectors to the other major CRMs — kvCORE, Sierra Interactive, CINC, Real Geeks, ServiceTitan, Jobber, Housecall Pro, HubSpot, Salesforce, and Pipedrive — during onboarding using each vendor’s API or webhooks, typically inside the 7–10 day go-live window. Bi-directional sync keeps your pipeline current in real-time. We also support custom integrations via Zapier and Make.",
  },
  {
    question: "How fast can I get started?",
    answer:
      "Most clients are fully live within 7–10 business days. This includes custom AI agent training, workflow setup, CRM configuration, and phone number provisioning. You just need a 30-minute kickoff call — we handle everything else.",
  },
  {
    question: "Is the platform secure and compliant?",
    answer:
      "Yes. Prestyj runs on SOC 2 compliant infrastructure with HIPAA-ready configurations. All calls are recorded with consent management, and role-based access controls support multi-location businesses. Data encryption is enforced at rest and in transit.",
  },
  {
    question: "Can I customize the AI agent's voice and personality?",
    answer:
      "Absolutely. Your AI agent's voice, tone, vocabulary, and conversation flow are fully customizable. We train it on your actual sales scripts, objection responses, and brand voice guidelines so leads experience a natural, on-brand conversation every time.",
  },
  {
    question: "What happens when the AI can't answer a question?",
    answer:
      "The AI hands off cleanly to a human team member with full conversation context. You get notified immediately so you can step in without the lead ever feeling dropped. The AI is designed to handle qualification and booking, not replace your expertise on complex questions.",
  },
  {
    question: "How much does the platform cost?",
    answer:
      "Plans start at $1,997/month with a one-time setup fee. Pricing scales based on the number of AI agents, integrations, and ad volume you need. Visit prestyj.com/pricing for full details on all three plans.",
  },
];

export const platformStats = [
  {
    value: "15+",
    label: "CRM and tool integrations",
    description: "Native and on-request connectors to the tools you already use",
  },
  {
    value: "24/7",
    label: "AI agent availability",
    description: "Never miss a lead, even at 2 AM on a Sunday",
  },
  {
    value: "< 60s",
    label: "Average response time",
    description: "Vs. 4+ hour industry average for manual follow-up",
  },
  {
    value: "4.9/5",
    label: "Customer rating (150+ reviews)",
    description: "Top-rated AI sales platform on Google",
  },
];

export const platformComparison = {
  headers: ["Feature", "Prestyj Platform", "Generic AI Chatbot", "Building In-House"],
  rows: [
    {
      feature: "Custom voice agents",
      prestyj: "Purpose-built for your sales process",
      generic: "Template-based responses",
      inhouse: "Requires AI engineering team",
    },
    {
      feature: "CRM integration",
      prestyj: "Follow Up Boss native; others built during onboarding",
      generic: "Limited or Zapier-only",
      inhouse: "Months of development",
    },
    {
      feature: "Multi-agent architecture",
      prestyj: "Deploy specialized agents per function",
      generic: "Single chatbot",
      inhouse: "Complex orchestration to build",
    },
    {
      feature: "24/7 availability",
      prestyj: "Built-in",
      generic: "Built-in",
      inhouse: "Requires infrastructure + monitoring",
    },
    {
      feature: "Compliance (SOC 2/HIPAA)",
      prestyj: "Built-in",
      generic: "Varies",
      inhouse: "Expensive to implement and maintain",
    },
    {
      feature: "Setup time",
      prestyj: "7–10 business days",
      generic: "Hours to days",
      inhouse: "3–6 months",
    },
    {
      feature: "Monthly cost",
      prestyj: "From $1,997/mo",
      generic: "$50–$500/mo (limited capability)",
      inhouse: "$10K–$30K/mo (team + infra)",
    },
    {
      feature: "Ongoing optimization",
      prestyj: "Included — we optimize continuously",
      generic: "Self-serve",
      inhouse: "Requires dedicated ML engineers",
    },
  ],
};
