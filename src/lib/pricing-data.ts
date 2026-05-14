import type { LucideIcon } from "lucide-react";
import {
  Megaphone,
  DollarSign,
  LayoutGrid,
  FileText,
  Globe,
  Database,
  Bot,
  Phone,
  PhoneIncoming,
  RotateCcw,
  Calendar,
  MessageSquare,
  Bell,
  ClipboardList,
} from "lucide-react";

export type TierId = "starter" | "pro" | "scale";

export interface PricingTier {
  id: TierId;
  name: string;
  tagline: string;
  setupFee: number;
  monthlyPrice: number;
  adBudget: string;
  batchAds: string;
  highlights: string[];
  setupIncludes: string[];
  features: Record<string, boolean>;
  story: string;
  bestFor: string;
}

export interface PricingFeature {
  key: string;
  label: string;
  icon: LucideIcon;
  category: "marketing" | "ai" | "platform";
}

export interface PricingFAQ {
  question: string;
  answer: string;
}

export const featureCategories = {
  marketing: "Marketing & Ads",
  ai: "AI Agents",
  platform: "Platform",
} as const;

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "AI agents for getting your first steady stream of leads",
    setupFee: 3997,
    monthlyPrice: 1997,
    adBudget: "$1,000/mo included",
    batchAds: "300/mo",
    highlights: [
      "$1,000/mo in ad spend managed for you",
      "300 short-form video ads delivered monthly",
      "Books meetings directly on your calendar (24/7)",
      "Custom landing page that syncs every lead into your CRM",
    ],
    setupIncludes: [
      "AI appointment agent trained on your business",
      "Custom landing page built & launched",
      "Ad campaigns created across Google & Meta",
      "CRM, calendar & phone number setup",
    ],
    features: {
      AD_MANAGEMENT: true,
      AD_BUDGET: true,
      BATCH_ADS: true,
      LANDING_PAGE: true,
      QUALIFICATION_FORM: false,
      FULL_WEBSITE: false,
      CRM_SYNC: true,
      CALENDAR_INTEGRATION: true,
      AI_APPOINTMENT_AGENT: true,
      AI_CHATBOT: false,
      AI_TEXTING: false,
      LEAD_REACTIVATION: false,
      AI_VOICE: false,
      AI_RECEPTIONIST: false,
    },
    story:
      "You're handling under 50 leads a month, but half go cold because nobody responds fast enough. The Starter plan runs your ads for you, ships 300 short-form video ads a month, gives you a conversion-optimized landing page, and puts an AI agent on every new lead that replies in under 60 seconds, books the meeting on your calendar, and chases no-shows automatically.",
    bestFor:
      "Businesses doing under 50 leads/month who need a reliable top of funnel and instant lead follow-up without hiring.",
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "AI agents for scaling marketing and sales across every channel",
    setupFee: 6997,
    monthlyPrice: 3497,
    adBudget: "$1,500/mo included",
    batchAds: "500/mo",
    highlights: [
      "$1,500/mo in ad spend managed for you",
      "500 short-form video ads delivered monthly",
      "AI agents that chat on your website and text leads back instantly",
      "Wakes up cold leads in your database and routes them to your team",
    ],
    setupIncludes: [
      "Full website + multi-step qualification form built",
      "AI chatbot & texting agent trained on your business",
      "Ad campaigns created across Google & Meta",
      "Lead reactivation campaign for your existing database",
      "CRM, calendar & phone number setup",
    ],
    features: {
      AD_MANAGEMENT: true,
      AD_BUDGET: true,
      BATCH_ADS: true,
      LANDING_PAGE: true,
      QUALIFICATION_FORM: true,
      FULL_WEBSITE: true,
      CRM_SYNC: true,
      CALENDAR_INTEGRATION: true,
      AI_APPOINTMENT_AGENT: true,
      AI_CHATBOT: true,
      AI_TEXTING: true,
      LEAD_REACTIVATION: true,
      AI_VOICE: false,
      AI_RECEPTIONIST: false,
    },
    story:
      "You're handling 50–250 leads a month from ads, your website, and your existing database. The volume is real, but follow-up is uneven and your team can't keep up. The Pro plan adds AI agents that chat on your website, text every new lead back in seconds, qualify buyers from tire-kickers with a multi-step form, and reactivate cold leads in your CRM so nothing gets left on the table.",
    bestFor:
      "Growing businesses doing 50–250 leads/month who need AI agents covering every channel — web, SMS, and database — at once.",
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "AI agents for running marketing and sales at full volume",
    setupFee: 9997,
    monthlyPrice: 5997,
    adBudget: "$2,000/mo included",
    batchAds: "1,000/mo",
    highlights: [
      "$2,000/mo in ad spend managed for you",
      "1,000 short-form video ads delivered monthly",
      "AI voice agent that calls every new lead and books the meeting",
      "AI receptionist that answers your inbound calls around the clock",
    ],
    setupIncludes: [
      "AI voice agent + AI receptionist trained on your business",
      "Full website + qualification form built",
      "AI chatbot & texting agent configured",
      "Multi-market ad campaigns created across Google & Meta",
      "Lead reactivation campaign for your existing database",
      "CRM, calendar & phone number setup",
    ],
    features: {
      AD_MANAGEMENT: true,
      AD_BUDGET: true,
      BATCH_ADS: true,
      LANDING_PAGE: true,
      QUALIFICATION_FORM: true,
      FULL_WEBSITE: true,
      CRM_SYNC: true,
      CALENDAR_INTEGRATION: true,
      AI_APPOINTMENT_AGENT: true,
      AI_CHATBOT: true,
      AI_TEXTING: true,
      LEAD_REACTIVATION: true,
      AI_VOICE: true,
      AI_RECEPTIONIST: true,
    },
    story:
      "You're handling 250+ leads a month, or running multiple locations, and a single team can't reasonably cover every channel anymore. The Scale plan runs your full marketing and sales motion with AI agents — inbound chat and text on every lead, an AI voice agent calling every new lead within minutes, an AI receptionist answering every inbound call, and ad volume tuned for multi-market reach.",
    bestFor:
      "High-volume or multi-location businesses doing 250+ leads/month who want AI agents running marketing and sales end-to-end.",
  },
];

export const pricingFeatures: PricingFeature[] = [
  // Marketing & Ads
  { key: "AD_MANAGEMENT", label: "Ad Management", icon: Megaphone, category: "marketing" },
  { key: "AD_BUDGET", label: "Ad Budget Included", icon: DollarSign, category: "marketing" },
  { key: "BATCH_ADS", label: "Batch Video Ads", icon: LayoutGrid, category: "marketing" },
  // Platform
  { key: "LANDING_PAGE", label: "Landing Page", icon: FileText, category: "platform" },
  {
    key: "QUALIFICATION_FORM",
    label: "Multi-Step Qualification Form",
    icon: ClipboardList,
    category: "platform",
  },
  { key: "FULL_WEBSITE", label: "Full Website", icon: Globe, category: "platform" },
  { key: "CRM_SYNC", label: "CRM Sync", icon: Database, category: "platform" },
  {
    key: "CALENDAR_INTEGRATION",
    label: "Calendar Integration",
    icon: Calendar,
    category: "platform",
  },
  // AI Agents
  { key: "AI_APPOINTMENT_AGENT", label: "AI Appointment Agent", icon: Bell, category: "ai" },
  { key: "AI_CHATBOT", label: "AI Chatbot", icon: Bot, category: "ai" },
  { key: "AI_TEXTING", label: "AI Texting Agent", icon: MessageSquare, category: "ai" },
  { key: "LEAD_REACTIVATION", label: "Lead Reactivation", icon: RotateCcw, category: "ai" },
  { key: "AI_VOICE", label: "AI Voice Agent", icon: Phone, category: "ai" },
  { key: "AI_RECEPTIONIST", label: "AI Receptionist", icon: PhoneIncoming, category: "ai" },
];

export const pricingFaqs: PricingFAQ[] = [
  {
    question: "What does the setup fee cover?",
    answer:
      "The setup fee covers your complete onboarding: custom AI agent training on your business, landing page or website build, ad campaign creation, CRM configuration, calendar integration, and phone number provisioning. Everything is done-for-you — you're live within 7-10 business days.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely. You can upgrade at any time. We'll prorate your setup fee difference and switch you over seamlessly. Most clients who start on Starter upgrade to Pro within 60 days once they see the ROI.",
  },
  {
    question: "What does the included ad budget cover?",
    answer:
      "Your ad budget is spent directly on Google and Meta ads targeting your service area. We manage everything — ad creation, targeting, optimization, and reporting. The budget listed is the minimum included; you can always add more to scale faster.",
  },
  {
    question: "Are there contracts or commitments?",
    answer:
      "No long-term contracts. All plans are month-to-month after the initial setup. We earn your business every month. That said, AI marketing compounds over time — the longer you run, the better your results get.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "Results vary by market and budget, but our clients typically see their first booked appointments within the first week of going live. The AI agent responds to every lead in under 60 seconds, which alone can double your booking rate compared to manual follow-up.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We specialize in real estate teams and brokerages running paid advertising on Facebook, YouTube, and Google. Our AI agents are trained specifically for real estate conversations — qualifying buyers vs. sellers, handling objections, and booking appointments directly onto your agents' calendars.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Most clients are fully live within 7-10 business days. This includes AI agent training, website/landing page setup, ad campaign launch, and CRM configuration. We handle everything — you just need to show up for a 30-minute kickoff call.",
  },
  {
    question: "What are batch video ads?",
    answer:
      "Batch video ads are professionally produced short-form video ads we create for your business. Each batch includes multiple ad variations optimized for different platforms and audiences. More ads means more creative variety, which improves ad performance over time.",
  },
  {
    question: "How does Prestyj compare to hiring an ISA?",
    answer:
      "A good ISA costs $4,000–$6,000/month, works 9-to-5, takes vacations, and eventually quits. The Prestyj Starter plan starts at $1,997/month and provides 24/7 AI lead response, appointment setting, 300 batch video ads, ad management, and a landing page — all done for you. You get the output of a full team for a fraction of the cost of one hire.",
  },
  {
    question: "What's the ROI on the Pro plan?",
    answer:
      "The Pro plan at $3,497/month includes $1,500 in ad budget, 500 batch video ads, AI chatbot, AI texting agent, lead reactivation, and a full website. Clients typically see 3–5x ROI within the first 90 days. One closed deal at $8K–$25K commission pays for months of service. The AI responds in under 60 seconds, which alone can double your booking rate compared to manual follow-up.",
  },
];
