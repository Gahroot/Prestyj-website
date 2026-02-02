import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const aiVoiceQualification: BestForPageContent = createBestForPage({
  slug: "ai-voice-qualification",
  niche: {
    name: "AI Voice Lead Qualification",
    shortName: "Voice Qualification",
    description: "Sales teams needing to qualify high volumes of leads by phone without expanding staff",
  },
  meta: {
    title: "Best AI for Lead Qualification | Voice Agents That Qualify 24/7 | Prestyj",
    description:
      "AI voice agents qualify every lead by phone in real-time. Ask custom questions, assess budget and timeline, route hot leads instantly. Stop wasting sales time on unqualified prospects.",
    keywords: [
      "AI lead qualification",
      "AI voice qualification",
      "AI lead qualifying agent",
      "automated lead qualification",
      "AI phone qualification",
      "voice AI lead scoring",
      "AI lead qualification software",
      "automated phone qualification",
    ],
  },
  hero: {
    badge: "AI Voice Qualification",
    headlineAccent: "AI Voice Lead Qualification",
    subheadline:
      "Stop wasting sales time on unqualified leads. AI voice agents call every lead, ask your qualifying questions, and route only hot prospects to your team. Qualify 10x more leads without adding staff.",
    pattern: "BEST_AI_FOR",
  },
  whyBestFor: [
    {
      icon: "Phone" as IconName,
      title: "Voice Qualification at Scale",
      description:
        "Text can't capture nuance—voice can. AI voice agents have real conversations that assess genuine interest, urgency, and fit. Qualification accuracy 2-3x higher than text-only approaches.",
    },
    {
      icon: "Target" as IconName,
      title: "Custom Qualification Criteria",
      description:
        "Not all leads are equal. AI asks your specific questions: budget range, timeline, decision-maker status, pain points, or any custom criteria. Routes leads based on your exact definition of 'qualified.'",
    },
    {
      icon: "Zap" as IconName,
      title: "Real-Time Lead Scoring",
      description:
        "AI scores every lead during the conversation and routes hot prospects instantly. Sales gets qualified leads with full context: what they need, when they need it, and why they're interested.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "300% More Qualified Conversations",
      description:
        "Typical sales teams reach 20-30% of leads and qualify maybe half. AI reaches 100%, qualifies everyone, and delivers 3x more qualified conversations to your sales team.",
    },
  ],
  painPoints: [
    {
      problem: "Sales team spends 60-70% of time on unqualified leads",
      solution:
        "AI pre-qualifies every lead before sales involvement. Your team only talks to prospects who meet your criteria: right budget, right timeline, right need. Typical clients see 70% reduction in wasted call time.",
    },
    {
      problem: "Text-only qualification misses critical context",
      solution:
        "Voice reveals tone, urgency, and genuine interest that text can't capture. AI detects hesitation, enthusiasm, and objections in real-time. More accurate qualification means better lead routing.",
    },
    {
      problem: "High lead volume overwhelms sales capacity",
      solution:
        "AI qualifies unlimited volume. 100 leads or 10,000 leads—AI handles it with the same quality. Scale your qualification capacity 10-100x without hiring anyone.",
    },
    {
      problem: "Qualification criteria vary across team members",
      solution:
        "AI applies your qualification criteria consistently, every time. No variation, no personal bias, no inconsistency. Every lead is assessed against the same standards.",
    },
    {
      problem: "Leads go unqualified because team is busy",
      solution:
        "AI works 24/7 and qualifies every lead immediately. No queue, no backlog, no missed opportunities because the team was on other calls. Instant qualification for every inquiry.",
    },
  ],
  comparison: {
    headers: ["Approach", "AI Voice Qualification", "Human SDR/ISA"],
    rows: [
      {
        feature: "Leads Qualified Per Day",
        prestyj: "Unlimited (100s-1000s)",
        others: "20-40 per SDR",
      },
      {
        feature: "Qualification Consistency",
        prestyj: "100% consistent criteria",
        others: "Varies by individual",
      },
      {
        feature: "Cost Per Qualified Lead",
        prestyj: "$2-5 (decreases with volume)",
        others: "$20-50 (fixed by salary)",
      },
      {
        feature: "Qualification Speed",
        prestyj: "Real-time (during call)",
        others: "Hours to days",
      },
      {
        feature: "Coverage Hours",
        prestyj: "24/7/365",
        others: "40-60 hrs/week",
      },
      {
        feature: "Qualification Data Capture",
        prestyj: "Structured + verbatim transcripts",
        others: "Notes (incomplete, inconsistent)",
      },
      {
        feature: "Turnover Impact",
        prestyj: "Zero",
        others: "Complete restart every 6-18 months",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "What qualification questions can AI ask?",
      answer:
        "Any questions you'd ask a lead: budget range, timeline, current situation, pain points, decision-maker status, location, property type—literally anything. We customize qualification scripts for your exact criteria. Most clients use 5-8 core qualifying questions.",
    },
    {
      question: "How does AI know if a lead is qualified or not?",
      answer:
        "You define qualification criteria (e.g., budget >$500K, timeline <6 months, decision-maker). AI scores leads during the conversation based on their responses. Leads meeting your criteria are flagged as qualified and routed accordingly.",
    },
    {
      question: "Can AI detect when someone is giving fake answers?",
      answer:
        "AI uses conversational cues to assess genuine interest: tone, response patterns, follow-up questions asked, hesitation, and engagement level. While not perfect, AI is significantly better than text-only qualification at detecting low-quality leads.",
    },
    {
      question: "What happens with partially qualified leads?",
      answer:
        "You control the routing logic. Options include: nurture sequence for warm leads, immediate sales routing for hot leads, disqualification for poor fits, or custom workflows. Most clients use 3-4 tiers: hot (immediate routing), warm (nurture), cool (long-term follow-up), disqualified.",
    },
    {
      question: "How is this different from a chatbot qualifying leads?",
      answer:
        "Voice is fundamentally different: natural conversation flow, ability to handle objections, detect tone/urgency, and build rapport. Chatbot qualification rates are typically 15-30%. Voice qualification rates are 80-95%. Voice is the difference between a form and a sales conversation.",
    },
  ],
  cta: {
    headline: "Qualify Every Lead. Waste Zero Sales Time.",
    subheadline:
      "See how AI voice qualification delivers 3x more qualified conversations to your sales team. Book a demo to hear AI qualification in action.",
    buttonText: "Hear AI Qualify a Lead Live",
    footnote: "See your exact qualification criteria in a working demo.",
  },
});
