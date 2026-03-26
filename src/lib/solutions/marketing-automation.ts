import type { SolutionPageContent } from "./types";

export const marketingAutomation: SolutionPageContent = {
  slug: "marketing-automation",
  meta: {
    title: "Marketing Automation | AI Ads & Landing Pages for Service Businesses | Prestyj",
    description:
      "Transform your marketing with AI-powered automation. Automated ad management, landing page optimization, and intelligent lead routing that maximizes ROI for home service businesses.",
    keywords: [
      "marketing automation",
      "automated ads and landing pages",
      "AI marketing automation",
      "automated ad management",
      "landing page optimization",
      "lead routing automation",
      "campaign optimization",
      "A/B testing automation",
    ],
  },
  hero: {
    badge: "Marketing Automation AI",
    headline: "Ads, Landing Pages & Leads on Autopilot.",
    headlineAccent: "Multiply Your ROI.",
    subheadline:
      "Replace manual campaign management with AI-powered marketing automation. Optimize ads, test landing pages, and route leads intelligently—24/7.",
    stats: [
      { value: "451%", label: "ROI improvement", color: "success" },
      { value: "73%", label: "lower cost per lead", color: "primary" },
      { value: "3.2x", label: "conversion rate boost", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Manual Marketing Is Bleeding Your Budget",
    subheadline: "Every day, wasted ad spend and missed opportunities cost you thousands.",
    points: [
      {
        icon: "Clock",
        title: "Manual ad management is unsustainable.",
        description:
          "Logging into multiple platforms, adjusting bids, testing creatives—manual ad management consumes 15+ hours per week. Meanwhile, campaigns run unoptimized for days at a time.",
        color: "warning",
      },
      {
        icon: "TrendingDown",
        title: "Inconsistent campaigns kill performance.",
        description:
          "Without systematic optimization, campaigns drift. One week performs great, the next tanks. This inconsistency makes it impossible to scale or predict results.",
        color: "destructive",
      },
      {
        icon: "AlertCircle",
        title: "Poor ROI tracking wastes budget.",
        description:
          "Most businesses can't accurately track which ads, keywords, or landing pages drive actual revenue. Without clear attribution, you're flying blind—and wasting 40%+ of your ad spend.",
        color: "primary",
      },
    ],
  },
  benefits: {
    headline: "Automate Your Way to Better Marketing ROI",
    subheadline: "Our AI-powered marketing automation handles optimization so you can focus on growth.",
    benefits: [
      {
        icon: "RefreshCw",
        title: "Automated Campaign Optimization",
        description:
          "AI continuously monitors and adjusts your campaigns—bid management, budget allocation, audience targeting. Your ads improve automatically, not just when you have time to check.",
      },
      {
        icon: "Target",
        title: "Intelligent A/B Testing",
        description:
          "Automated multivariate testing across ads, headlines, images, and CTAs. The system identifies winners and shifts budget in real-time, maximizing performance without manual intervention.",
      },
      {
        icon: "Zap",
        title: "Real-Time Adjustments",
        description:
          "When performance shifts, the AI responds instantly—not days later. Pause underperformers, scale winners, and adapt to market changes automatically.",
      },
      {
        icon: "BarChart3",
        title: "Landing Page Optimization",
        description:
          "AI analyzes visitor behavior and automatically tests page elements. Headlines, forms, layouts, and CTAs improve continuously based on actual conversion data.",
      },
      {
        icon: "Users",
        title: "Smart Lead Routing",
        description:
          "Leads are automatically scored and routed to the right team member based on value, location, and readiness. High-value leads get priority treatment instantly.",
      },
      {
        icon: "Shield",
        title: "Complete ROI Tracking",
        description:
          "Full-funnel attribution from ad click to closed deal. Know exactly which campaigns, keywords, and landing pages drive revenue—and optimize accordingly.",
      },
    ],
  },
  objections: {
    headline: "Marketing Automation vs Traditional Agencies: The Truth",
    subheadline: "Why AI-powered automation outperforms manual management.",
    objections: [
      {
        objection: "Marketing agencies provide expert human oversight that AI can't match.",
        response:
          "Traditional agencies typically review accounts once per week or less. Our AI monitors your campaigns continuously—every hour of every day—and makes data-driven adjustments instantly. No human expert can match that speed or consistency. Plus, you still have human oversight: our team reviews AI recommendations and strategy.",
      },
      {
        objection: "I need custom strategies, not automated templates.",
        response:
          "Marketing automation isn't about templates—it's about intelligent optimization. The AI learns what works for YOUR specific audience, offers, and goals. It tests, learns, and adapts based on your actual performance data, not generic best practices.",
      },
      {
        objection: "Automation will make mistakes that cost me money.",
        response:
          "Our AI operates within guardrails you define—maximum bid limits, budget constraints, brand guidelines. It optimizes within your parameters, not beyond them. Plus, all significant changes are logged and visible, so you maintain full control and transparency.",
      },
      {
        objection: "This sounds too complex for my small business.",
        response:
          "That's exactly why we built it this way. We handle all the complexity—setup, integration, optimization. You see simple dashboards showing what matters: leads, conversions, and ROI. Most clients are fully operational within 2 weeks with minimal involvement required.",
      },
      {
        objection: "How is this different from the automation tools I already have?",
        response:
          "Most platform automation is basic rule-based logic (pause ad if CPA exceeds $X). Our AI uses machine learning to identify patterns, predict performance, and make nuanced optimizations that simple rules can't match. It's the difference between a thermostat and a smart home system.",
      },
    ],
  },
  calculator: {
    headline: "Calculate Your Marketing Automation ROI",
    subheadline: "See how much you could save with automated optimization.",
    inputs: {
      leads: {
        label: "Monthly ad spend ($)",
        placeholder: "e.g., 5000",
        defaultValue: 5000,
      },
      commission: {
        label: "Average customer value ($)",
        placeholder: "e.g., 3000",
        defaultValue: 3000,
      },
    },
    reactivationRate: 0.4,
    conversionRate: 0.15,
    resultLabel: "Potential additional revenue with marketing automation",
  },
  faqs: [
    {
      question: "How long does it take to set up marketing automation?",
      answer:
        "Most businesses are fully operational within 2-3 weeks. This includes ad account integration, landing page setup, lead routing configuration, and initial optimization. We handle the technical work—you just review and approve.",
    },
    {
      question: "Will this work with my existing advertising platforms?",
      answer:
        "Yes. We integrate with all major advertising platforms including Google Ads, Meta (Facebook/Instagram), TikTok, LinkedIn, and more. If you're running ads, we can optimize them.",
    },
    {
      question: "How does the A/B testing work?",
      answer:
        "Our AI automatically creates and tests multiple variations of your ads and landing pages. It identifies statistically significant winners and shifts traffic to top performers—all without manual intervention. You'll see what's being tested and what's winning in your dashboard.",
    },
    {
      question: "What happens if the AI makes changes I don't like?",
      answer:
        "You maintain full control. Set guardrails for bids, budgets, and brand guidelines. Review all changes in your dashboard. Pause automation anytime. The AI works within your parameters—you're always in the driver's seat.",
    },
    {
      question: "How do you track ROI across different channels?",
      answer:
        "We implement full-funnel tracking from ad click through to closed deal. This includes cross-device attribution, call tracking, form submissions, and CRM integration. You'll know exactly which campaigns drive revenue, not just clicks.",
    },
    {
      question: "What kind of results can I expect?",
      answer:
        "Most clients see 30-50% improvement in cost per lead within the first 90 days, with conversion rates improving 2-3x over time. The exact results depend on your starting point, but continuous optimization compounds gains over time.",
    },
    {
      question: "Do I need technical skills to use this?",
      answer:
        "No. We handle all technical setup and ongoing optimization. Your dashboard shows simple metrics: leads, conversions, cost per acquisition, and ROI. You focus on running your business while the AI optimizes your marketing.",
    },
  ],
  cta: {
    headline: "Ready to Automate Your Marketing ROI?",
    subheadline:
      "Stop wasting budget on unoptimized campaigns. See how AI-powered marketing automation can transform your results.",
    buttonText: "Book Your Free Demo",
    buttonHref: "/book-demo",
    footnote: "No commitment required. See the automation in action with your own campaigns.",
  },
};

// Comparison data for the feature table
export const marketingAutomationComparison = {
  headline: "AI Marketing Automation vs. Traditional Marketing Management",
  subheadline: "See why service businesses are switching to automated marketing.",
  features: [
    {
      feature: "Optimization Frequency",
      prestyj: "Continuous (24/7)",
      competitor: "Weekly or less",
    },
    {
      feature: "A/B Testing",
      prestyj: "Automated multivariate",
      competitor: "Manual setup required",
    },
    {
      feature: "Bid Management",
      prestyj: "AI-optimized in real-time",
      competitor: "Manual adjustments",
    },
    {
      feature: "Landing Page Optimization",
      prestyj: "Continuous AI testing",
      competitor: "Periodic manual updates",
    },
    {
      feature: "Lead Routing",
      prestyj: "Intelligent automation",
      competitor: "Manual assignment",
    },
    {
      feature: "ROI Attribution",
      prestyj: "Full-funnel tracking",
      competitor: "Partial or none",
    },
    {
      feature: "Response to Market Changes",
      prestyj: "Immediate",
      competitor: "Days to weeks",
    },
    {
      feature: "Cross-Channel Optimization",
      prestyj: "Unified AI strategy",
      competitor: "Siloed management",
    },
    {
      feature: "Reporting",
      prestyj: "Real-time dashboards",
      competitor: "Weekly/monthly reports",
    },
    {
      feature: "Cost",
      prestyj: "Performance-based",
      competitor: "Retainer + ad spend",
    },
  ],
};
