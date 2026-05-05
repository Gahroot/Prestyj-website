import type { SolutionPageContent } from "./types";

export const aiSalesAgentCost: SolutionPageContent = {
  slug: "ai-sales-agent-cost",
  meta: {
    title: "AI Sales Agent Cost vs Human SDR | Cost Per Meeting Comparison | Prestyj",
    description:
      "Compare AI sales agent costs vs human SDRs. See total cost of ownership including salary, commission, turnover, and ramp time. AI sales agents cost 60–80% less while qualifying leads 24/7.",
    keywords: [
      "AI sales agent cost",
      "AI SDR vs human SDR",
      "AI sales agent pricing",
      "cost per meeting AI vs human",
      "AI sales representative comparison",
      "SDR salary vs AI sales agent",
      "AI lead qualification cost",
      "sales automation ROI",
    ],
  },
  hero: {
    badge: "AI Sales Agent Cost Analysis",
    headline: "Your SDR Costs 3x More",
    headlineAccent: "Than You Think.",
    subheadline:
      "An SDR earning $50K/year actually costs $75–95K after quota commission, benefits, manager oversight, and 35% annual turnover. And they work 40 hours/week. See the true cost of human vs. AI sales development.",
    stats: [
      { value: "$75–95K", label: "true annual cost per SDR", color: "destructive" },
      { value: "35%", label: "SDR annual turnover rate", color: "warning" },
      { value: "$8–25", label: "AI cost per qualified meeting", color: "success" },
    ],
  },
  painPoints: {
    headline: "Human SDRs Are Expensive and Fragile",
    subheadline: "The hidden costs of sales development go way beyond salary.",
    points: [
      {
        icon: "DollarSign",
        title: "Salary is just the start: total SDR cost is $75–95K/year",
        description:
          "Base salary ($45–55K) + commission/bonuses ($15–30K) + benefits ($12–18K) + payroll taxes + sales tools ($300/mo) + manager oversight time. A 'mid-level SDR' costs your organization $75–95K per year all-in.",
        color: "destructive",
      },
      {
        icon: "UserX",
        title: "35% turnover means you're always hiring",
        description:
          "SDR turnover averages 35% annually. Each replacement costs $15–25K in recruiting, onboarding, and lost productivity during the 3–4 month ramp period. You're paying for the position twice every three years.",
        color: "warning",
      },
      {
        icon: "TrendingDown",
        title: "Ramp time: 3–4 months of sub-par performance",
        description:
          "New SDRs take 3–4 months to reach full productivity. During ramp, they produce 30–50% of quota. With 35% annual turnover, your team is ALWAYS in ramp mode. You're paying full price for part-time results.",
        color: "primary",
      },
    ],
  },
  benefits: {
    headline: "AI Sales Agents: Full Pipeline, Fraction of the Cost",
    subheadline: "24/7 lead qualification and meeting booking without the overhead.",
    benefits: [
      {
        icon: "Bot",
        title: "24/7 Lead Qualification & Outreach",
        description:
          "AI sales agents work 168 hours/week—not 40. They qualify leads, score intent, and book meetings around the clock. Inbound leads at 10pm? Qualified and booked by 10:01pm.",
      },
      {
        icon: "TrendingUp",
        title: "60–80% Cost Reduction vs. Human SDRs",
        description:
          "AI sales agents cost $400–$800/month ($4,800–$9,600/year) compared to $75–95K/year for a human SDR. That's an 80–90% cost reduction with better coverage hours and zero turnover.",
      },
      {
        icon: "Zap",
        title: "Zero Ramp Time, Zero Turnover",
        description:
          "AI starts performing on day one—no training, no ramp, no learning curve. It doesn't quit after 11 months for a better offer. Consistent performance, month after month, year after year.",
      },
      {
        icon: "Target",
        title: "Consistent Lead Scoring & Qualification",
        description:
          "AI applies the same qualification criteria to every lead—budget, authority, timeline, need. No skipped questions, no assumptions, no mood-dependent quality. Every lead gets a thorough, consistent evaluation.",
      },
      {
        icon: "BarChart3",
        title: "$8–25 Cost Per Qualified Meeting",
        description:
          "Human SDRs cost $100–$300 per qualified meeting when you factor in total compensation, tools, and management overhead. AI delivers qualified meetings at $8–$25 each—a 90%+ reduction in cost per meeting.",
      },
      {
        icon: "Database",
        title: "CRM Integration & Data Sync",
        description:
          "AI syncs with Salesforce, HubSpot, and other CRMs. Qualification notes, call recordings, meeting details, and lead scores update automatically. Your sales reps see everything in their existing workflow.",
      },
    ],
  },
  faqs: [
    {
      question: "How much does a human SDR actually cost per year?",
      answer:
        "Total cost of ownership for a human SDR: base salary ($45–55K) + commission/bonuses ($15–30K) + benefits ($12–18K) + payroll taxes (7.65%) + sales tools ($3,600/yr) + recruiting costs ($5–10K amortized) + manager time ($8–12K in oversight) = $75–95K/year. With 35% turnover, add another $15–25K per replacement cycle.",
    },
    {
      question: "What does an AI sales agent cost?",
      answer:
        "AI sales agents typically cost $400–$800/month ($4,800–$9,600/year) depending on call volume and complexity. This includes 24/7 lead qualification, meeting booking, CRM integration, call analytics, and unlimited concurrent conversations. No benefits, no commission, no turnover costs.",
    },
    {
      question: "What's the cost per qualified meeting for AI vs. human?",
      answer:
        "Human SDR: $100–$300 per qualified meeting (total compensation ÷ meetings set). AI sales agent: $8–$25 per qualified meeting. The difference comes from lower total cost AND higher volume—AI qualifies leads 24/7 at scale while humans work 40 hours/week with limited bandwidth.",
    },
    {
      question: "Can AI handle complex B2B sales conversations?",
      answer:
        "AI handles 80–85% of initial qualification conversations: company size, decision-making authority, timeline, pain points, budget range. Complex discovery calls and solution presentations still need humans. AI excels at top-of-funnel qualification and meeting booking—freeing your human reps for high-value closing conversations.",
    },
    {
      question: "What about SDRs who do both inbound and outbound?",
      answer:
        "AI handles inbound qualification perfectly (instant response, 24/7) and supports outbound with personalized email/phone sequences. For high-touch outbound to enterprise accounts, keep your best SDRs on those strategic campaigns. AI handles the volume work: inbound qualification, outbound to SMB/mid-market, and re-engagement of cold leads.",
    },
    {
      question: "How does AI handle lead scoring?",
      answer:
        "AI scores leads based on qualification criteria you define: company size, role/title, engagement level, timeline, budget indicators. Each conversation adds data points that refine the score. Hot leads (ready to buy) get routed to reps immediately. Warm leads enter nurture sequences. Cold leads are flagged for later reactivation.",
    },
    {
      question: "What's the ROI timeline for switching to AI sales agents?",
      answer:
        "Most companies see positive ROI within 30 days: AI starts qualifying leads and booking meetings immediately, while the monthly cost is 60–80% less than a human SDR. The break-even point is typically 2–3 qualified meetings booked by AI. Everything after that is pure savings and pipeline growth.",
    },
    {
      question: "Should I replace my entire SDR team with AI?",
      answer:
        "Most successful companies use a hybrid model: AI handles inbound lead qualification, after-hours leads, and high-volume outbound to SMB. Human SDRs focus on enterprise accounts, complex discovery, and strategic outbound. This reduces team size by 30–50% while increasing total pipeline coverage.",
    },
  ],
  objections: {
    headline: "Sales Leader Concerns",
    subheadline: "These are the questions sales directors and VPs ask before switching.",
    objections: [
      {
        objection: "My SDRs build relationships—AI can't replicate that.",
        response:
          "SDRs build relationships during discovery and solution conversations—not during initial qualification. AI handles the qualification ('What's your timeline? Budget? Decision process?') so your SDRs spend their time on the relationship-building conversations that actually close deals. More relationships, less screening.",
      },
      {
        objection: "I need humans who understand our product deeply.",
        response:
          "AI is trained on your product knowledge, competitive landscape, common objections, and ideal customer profile. It handles 80–85% of qualification questions accurately. When a prospect asks something AI can't answer, the call transfers to a human rep with full context. Your experts handle the exceptions; AI handles the volume.",
      },
      {
        objection: "My SDR team is already hitting quota—why change?",
        response:
          "If your SDRs are hitting quota, AI makes them more productive by handling overflow leads, after-hours inbound, and re-engagement. Your SDRs focus on their best leads instead of juggling 200+ contacts. Same team, higher output, better results. Or reduce headcount and maintain output at 60–80% lower cost.",
      },
      {
        objection: "The cost savings look great on paper, but will it actually work?",
        response:
          "Our pilot program lets you test AI sales agents with real leads before committing. Run a 2-week pilot alongside your current SDR team. Compare qualification rates, meeting quality, and cost per meeting. The numbers speak for themselves—no faith required.",
      },
    ],
  },
  calculator: {
    headline: "Calculate Your SDR Cost Per Meeting",
    subheadline: "See how much you're really paying for each qualified meeting.",
    inputs: {
      leads: {
        label: "Leads per month",
        placeholder: "e.g., 500",
        defaultValue: 500,
      },
      commission: {
        label: "SDR total annual cost ($)",
        placeholder: "e.g., 85000",
        defaultValue: 85000,
      },
    },
    reactivationRate: 0.15,
    conversionRate: 0.12,
    resultLabel: "Cost per qualified meeting (human SDR)",
  },
  cta: {
    headline: "Cut Your Cost Per Meeting by 80%",
    subheadline:
      "See exactly how much you'd save by adding AI sales agents to your team. Get a custom cost comparison based on your actual pipeline and lead volume.",
    buttonText: "Get Your Cost Comparison",
    buttonHref: "/book-demo",
    footnote: "2-week pilot program available. No contracts. Salesforce & HubSpot integration included.",
  },
};
