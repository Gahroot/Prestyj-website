import type { SolutionPageContent } from "./types";

export const aiLeadQualification: SolutionPageContent = {
  slug: "ai-lead-qualification",
  meta: {
    title: "AI Lead Qualification | Instantly Score & Prioritize Every Lead",
    description:
      "Stop wasting hours on tire-kickers. AI agents score, qualify, and prioritize every lead by intent, budget, timeline, and readiness—so your team only calls leads ready to buy. Built for real estate, home services, and high-volume lead buyers.",
    keywords: [
      "AI lead qualification software",
      "automated lead scoring",
      "AI lead scoring for real estate",
      "lead qualification automation",
      "BANT qualification AI",
      "intent-based lead scoring",
      "AI lead prioritization",
      "lead qualification for home services",
      "AI sales qualification agent",
      "automated buyer intent scoring",
      "high-volume lead qualification",
      "AI lead routing and triage",
    ],
  },
  hero: {
    badge: "AI Lead Qualification Solution",
    headline: "Every Lead Scored.",
    headlineAccent: "Only Hot Leads Reach Your Team.",
    subheadline:
      "AI agents instantly engage every new lead, qualify intent, budget, timeline, and readiness, then route only sales-ready prospects to your closers. Built for real estate teams, home service operators, and high-volume lead buyers tired of paying reps to chase tire-kickers.",
    stats: [
      { value: "30s", label: "avg. qualification time", color: "success" },
      { value: "80%", label: "less time wasted on cold leads", color: "primary" },
      { value: "3.2x", label: "higher conversion on qualified leads", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Most of Your Leads Aren't Ready to Buy",
    subheadline:
      "And the ones who are get buried under the ones who aren't. Every hour your team spends qualifying is an hour they're not closing.",
    points: [
      {
        icon: "UserX",
        title: "Reps waste 70% of their day on dead leads",
        description:
          "Sales teams burn through hours dialing leads with no budget, no timeline, or no real intent. Your best closers are stuck doing qualification work instead of closing deals worth $10K-$100K+.",
        color: "destructive",
      },
      {
        icon: "Clock",
        title: "Hot leads go cold while waiting in the queue",
        description:
          "When every lead looks the same in your CRM, the buyer ready to sign tomorrow gets the same response time as the browser six months out. Speed-to-lead drops, conversions tank.",
        color: "warning",
      },
      {
        icon: "DollarSign",
        title: "You're paying $50-$300 per lead—then ignoring most",
        description:
          "High-volume lead buyers spend tens of thousands monthly on Zillow, Angi, Facebook, and Google leads. Without instant qualification, 60-80% never get a meaningful follow-up before going stale.",
        color: "destructive",
      },
      {
        icon: "Target",
        title: "Manual scoring is inconsistent and slow",
        description:
          "Rep A thinks any lead with a phone number is hot. Rep B disqualifies anything without a pre-approval. Without consistent AI scoring, your pipeline is a guessing game and forecasting is fiction.",
        color: "primary",
      },
    ],
  },
  benefits: {
    headline: "AI That Qualifies Like Your Best Rep—At Scale",
    subheadline:
      "Every lead engaged in seconds, scored against your criteria, and routed to the right person at the right time.",
    benefits: [
      {
        icon: "Zap",
        title: "Instant Multi-Channel Engagement",
        description:
          "AI engages every new lead within 30 seconds via SMS, email, or voice—whichever channel they came in on. No lead sits unqualified while your reps are on other calls.",
      },
      {
        icon: "Search",
        title: "BANT + Intent Scoring",
        description:
          "AI conversationally uncovers Budget, Authority, Need, Timeline, and buying intent—then scores each lead 0-100 against your ideal customer profile. No rigid forms, just natural dialogue.",
      },
      {
        icon: "Layers",
        title: "Custom Qualification Criteria",
        description:
          "Set the questions that matter for your business: pre-approval status, service area, project scope, decision-maker role, urgency. AI asks them every time, every lead, without forgetting.",
      },
      {
        icon: "Workflow",
        title: "Smart Routing & Prioritization",
        description:
          "Hot leads route to your top closer instantly. Warm leads enter nurture. Cold leads get long-term drip campaigns. Disqualified leads get a polite decline so your team never sees them.",
      },
      {
        icon: "BarChart3",
        title: "Real-Time Pipeline Intelligence",
        description:
          "Dashboards show qualified-lead volume, average score, conversion by source, and rep performance on AI-handed leads. Finally know which lead sources actually produce buyers.",
      },
      {
        icon: "Database",
        title: "CRM-Native Integration",
        description:
          "Connects to Salesforce, HubSpot, Follow Up Boss, ServiceTitan, GoHighLevel, and more. Scores, tags, and conversation transcripts sync automatically—no double entry, no lost context.",
      },
    ],
  },
  calculator: {
    headline: "Lead Waste Recovery Calculator",
    subheadline: "See how much revenue you're leaving on the table by qualifying leads manually.",
    inputs: {
      leads: { label: "New leads per month", placeholder: "500", defaultValue: 500 },
      commission: { label: "Average deal value ($)", placeholder: "8000", defaultValue: 8000 },
    },
    reactivationRate: 0.55,
    conversionRate: 0.18,
    resultLabel: "Additional monthly revenue with AI qualification",
  },
  objections: {
    headline: "Common Concerns About AI Lead Qualification",
    subheadline: "Honest answers for sales leaders evaluating AI for top-of-funnel work.",
    objections: [
      {
        objection: "AI can't really tell if a lead is serious",
        response:
          "AI doesn't guess—it asks. In a natural 3-5 minute conversation, it surfaces budget range, timeline, decision authority, and specific pain. The result is a structured score backed by a full transcript your reps can review. It's more consistent than humans because it never skips questions or makes assumptions based on a name or area code.",
      },
      {
        objection: "Our leads will feel like they're being interrogated by a bot",
        response:
          "Modern AI uses warm, conversational language and adapts to how leads respond. It introduces itself, explains why it's gathering info, and answers their questions too. Most leads tell us the AI conversation felt easier than filling out a form—because it actually listens and responds.",
      },
      {
        objection: "We've tried lead scoring tools and they were inaccurate",
        response:
          "Static scoring tools rely on form data and behavior tracking—which misses intent. AI qualification scores based on actual conversation: what the lead says, asks, and confirms. The model is trained on your historical wins and losses, so it learns what a buyer in your business actually sounds like.",
      },
      {
        objection: "Our reps will resent AI taking over their leads",
        response:
          "Top reps love it. AI does the work they hate—qualifying tire-kickers—and hands them only sales-ready conversations with full context. Reps using AI qualification typically close 2-3x more deals because they're spending time on real opportunities instead of dialing dead numbers.",
      },
    ],
  },
  cta: {
    headline: "Ready to Stop Wasting Reps on Cold Leads?",
    subheadline:
      "Every unqualified lead your team chases is a hot lead going cold. Let AI handle the qualification so your closers can do what they do best—close.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote: "See AI qualify a real lead in under 60 seconds. No commitment required.",
  },
};
