import type { SolutionPageContent } from "./types";

export const aiIntegrationService: SolutionPageContent = {
  slug: "ai-integration-service",
  meta: {
    title: "AI Integration Service for Business | Connect AI to Your Workflow | Prestyj",
    description:
      "AI tools that don't integrate with your CRM, phone system, and workflow are useless. Prestyj's AI integration service connects AI capabilities into your existing tech stack — so data flows automatically and your team doesn't have to learn a new system.",
    keywords: [
      "AI integration service",
      "AI integration for business",
      "connect AI to CRM",
      "AI workflow integration",
      "AI system integration",
      "AI API integration service",
      "AI integration consulting",
      "automate business with AI",
    ],
  },
  hero: {
    badge: "AI Integration Service",
    headline: "AI That Doesn't Connect to Your Workflow Is Just a Demo.",
    headlineAccent: "We Make It Real.",
    subheadline:
      "You bought an AI tool. It's sitting there, disconnected from your CRM, your phone system, your email, your scheduling software. Your team has to manually copy data between systems. Prestyj's AI integration service connects AI into your existing workflow so it actually works — automatically.",
    stats: [
      { value: "50+", label: "tools and platforms integrated", color: "success" },
      { value: "80%", label: "reduction in manual data entry", color: "primary" },
      { value: "2 weeks", label: "average integration timeline", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Why AI Tools Sit Unused",
    subheadline:
      "The #1 reason businesses abandon AI tools: they don't fit into the existing workflow.",
    points: [
      {
        icon: "Target",
        title: "Disconnected tools create more work, not less",
        description:
          "An AI chatbot that doesn't sync to your CRM. An AI phone agent that doesn't log calls. An AI email tool that doesn't connect to your booking system. Each disconnected tool adds a manual step — the opposite of automation.",
        color: "destructive",
      },
      {
        icon: "Clock",
        title: "Custom integrations take months and cost $20K+",
        description:
          "Hiring a developer to build custom API integrations between your AI tools and business systems takes 2–4 months and costs $15–50K. Most businesses give up before the integration is finished.",
        color: "warning",
      },
      {
        icon: "Users",
        title: "Your team won't use a tool that adds steps to their day",
        description:
          "If using the AI tool means logging into a separate dashboard, copying data, or switching contexts — your team won't use it. AI adoption requires zero-friction integration into existing workflows.",
        color: "primary",
      },
    ],
  },
  benefits: {
    headline: "AI That Works Inside Your Existing Systems",
    subheadline:
      "We connect AI capabilities into the tools your team already uses — no new dashboards, no context switching, no manual data transfer.",
    benefits: [
      {
        icon: "Zap",
        title: "CRM Integration (Salesforce, HubSpot, Zoho, Pipedrive)",
        description:
          "AI automatically syncs conversation data, lead scores, call recordings, and follow-up tasks to your CRM. Every AI interaction appears in the contact record — your sales team sees the full context without switching tools.",
      },
      {
        icon: "Phone",
        title: "Phone System Integration",
        description:
          "AI voice agents integrate with your existing phone system. Incoming calls route to AI for qualification, then transfer to your team with full conversation context. Outbound follow-ups triggered by CRM events.",
      },
      {
        icon: "Calendar",
        title: "Calendar & Booking Integration",
        description:
          "AI books appointments directly into your calendar (Google Calendar, Calendly, Cal.com, Acuity). Confirmation texts, reminder sequences, and rescheduling handled automatically.",
      },
      {
        icon: "MessageSquare",
        title: "Communication Stack Integration",
        description:
          "AI connects with your email (Gmail, Outlook), SMS platform, Slack, and Microsoft Teams. Notifications, follow-ups, and escalations happen in the tools your team already monitors.",
      },
      {
        icon: "Database",
        title: "Data Pipeline Automation",
        description:
          "AI triggers data flows between systems: new lead → CRM record → qualification → nurture sequence → appointment → follow-up. Every step automated. Zero manual data transfer.",
      },
      {
        icon: "Shield",
        title: "Secure, Compliant Data Handling",
        description:
          "All integrations follow security best practices: encrypted data transfer, SOC 2 compliance, GDPR/CCPA-ready data handling. Your customer data stays secure throughout the AI integration.",
      },
    ],
  },
  objections: {
    headline: "What Operations Leaders Ask",
    subheadline:
      "These questions come from COOs, operations managers, and IT directors evaluating AI integration.",
    objections: [
      {
        objection: "We have a custom/legacy system — can you integrate with it?",
        response:
          "Most likely, yes. We work with REST APIs, webhooks, Zapier, Make (Integromat), and custom middleware. If your system has an API or can export data, we can integrate with it. We've connected AI to systems built in the 2000s.",
      },
      {
        objection: "Won't integration break when tools update their APIs?",
        response:
          "We monitor API changes and maintain integrations as part of our service. When a vendor updates their API, we update the integration before it breaks. Your workflow keeps running.",
      },
      {
        objection: "We already use Zapier for integrations — why do we need this?",
        response:
          "Zapier handles simple trigger-action workflows. AI integration often requires complex logic: conditional routing, data transformation, error handling, and real-time processing. We handle the complexity that Zapier can't — and we maintain it.",
      },
      {
        objection: "How long does an integration take?",
        response:
          "Standard integrations (CRM, calendar, phone, email) take 1–2 weeks. Custom or complex integrations with legacy systems take 2–4 weeks. You'll see working integrations within the first week of the engagement.",
      },
    ],
  },
  faqs: [
    {
      question: "What CRM systems do you integrate with?",
      answer:
        "Salesforce, HubSpot, Zoho, Pipedrive, Keap (Infusionsoft), Close, Copper, Zendesk Sell, and custom CRMs via API. If your CRM has an API, we can integrate with it.",
    },
    {
      question: "Do you integrate with industry-specific tools?",
      answer:
        "Yes — ServiceTitan, Jobber, Housecall Pro for home services; Follow Up Boss, kvCORE, BoomTown for real estate; Dentrix, Open Dental for dental; Clio, PracticePanther for legal. We specialize in industry-specific integration.",
    },
    {
      question: "What happens when data doesn't sync correctly?",
      answer:
        "Every integration includes error monitoring and alerting. If a sync fails, you're notified immediately and our team investigates. We include a 99.5% uptime SLA for all integration data flows.",
    },
    {
      question: "Can we start with one integration and add more later?",
      answer:
        "Absolutely. Most clients start with CRM + calendar integration, then add phone, email, SMS, and marketing automation in subsequent phases. Modular integration lets you build at your own pace.",
    },
    {
      question: "How much does AI integration cost?",
      answer:
        "Standard integrations (CRM, calendar, email) start at $3,000–$5,000 per integration. Full workflow automation across 3–5 systems ranges from $10,000–$25,000. The ROI typically pays for the integration within 60–90 days through time savings and error reduction.",
    },
    {
      question: "Do we need to change our existing tools?",
      answer:
        "No. We integrate AI into your existing tech stack. If a tool is genuinely limiting your AI capabilities, we'll recommend alternatives — but we never require you to switch systems to work with us.",
    },
  ],
  cta: {
    headline: "Make Your AI Tools Actually Work Together.",
    subheadline:
      "AI integration service that connects your AI capabilities to your CRM, phone, calendar, and communication tools. Automated data flows, zero manual work.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote: "50+ tool integrations · 2-week standard timeline · Ongoing maintenance included",
  },
};
