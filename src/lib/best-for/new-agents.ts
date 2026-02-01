import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const newAgents: BestForPageContent = createBestForPage({
  slug: "new-agents",
  niche: {
    name: "New Real Estate Agents",
    shortName: "New Agents",
    description: "Agents starting their real estate career who need affordable, effective tools",
  },
  meta: {
    title: "Best Lead Management for New Real Estate Agents | Prestyj",
    description:
      "Start your real estate career right with AI-powered lead management. Affordable, easy to use, and designed to help new agents build their pipeline fast.",
    keywords: [
      "best lead management for new agents",
      "new real estate agent tools",
      "real estate agent starter tools",
      "affordable lead management",
      "new agent lead generation",
      "real estate career start",
    ],
  },
  hero: {
    badge: "Perfect for New Agents",
    headlineAccent: "New Real Estate Agents",
    subheadline:
      "You're building your career from scratch. Get the same lead response capabilities as top producers without the top producer budget.",
    pattern: "BEST_AI_FOR",
  },
  whyBestFor: [
    {
      icon: "DollarSign" as IconName,
      title: "Affordable for New Agents",
      description:
        "You can't afford a $4,000/month ISA when you're just starting out. Prestyj gives you professional lead response at a price that makes sense for your stage.",
    },
    {
      icon: "Zap" as IconName,
      title: "Zero Learning Curve",
      description:
        "You're already learning scripts, contracts, and market knowledge. Prestyj is ready in minutes with no complex setup. Focus on learning real estate, not software.",
    },
    {
      icon: "Clock" as IconName,
      title: "Compete with Experienced Agents",
      description:
        "78% of buyers work with the first responder. With AI, you respond as fast as the top producer with a full team. Level the playing field from day one.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Build Your Pipeline Fast",
      description:
        "Every lead counts when you're starting out. AI ensures no lead goes cold while you're learning. Build momentum from your very first inquiry.",
    },
  ],
  painPoints: [
    {
      problem: "Limited budget for tools and marketing",
      solution:
        "Prestyj is priced for agents at every stage. Get enterprise-level lead response without enterprise-level costs. ROI from one closed deal covers months of service.",
    },
    {
      problem: "Still learning the business while trying to generate leads",
      solution:
        "AI handles lead response and qualification while you focus on learning. You get practice with pre-qualified, appointment-ready leads, not cold calls.",
    },
    {
      problem: "Can't compete with established agents' response times",
      solution:
        "With AI, you respond in 60 seconds. The agent with 20 years experience can't respond faster. Technology is the great equalizer.",
    },
    {
      problem: "Not sure what to say to leads",
      solution:
        "AI follows proven scripts and qualification processes. You learn from watching how AI handles conversations, then take over when leads are warm.",
    },
    {
      problem: "Working another job while building real estate career",
      solution:
        "AI works while you work your other job. Leads that come in during your day job get instant response. Build your pipeline 24/7, even when you can't.",
    },
  ],
  comparison: {
    headers: ["Capability", "With Prestyj", "Without Prestyj"],
    rows: [
      {
        feature: "Response Time",
        prestyj: "Under 60 seconds, always",
        others: "Hours when you're busy or learning",
      },
      {
        feature: "Lead Qualification",
        prestyj: "AI qualifies using proven scripts",
        others: "Learning through trial and error",
      },
      {
        feature: "Availability",
        prestyj: "24/7, even during your other job",
        others: "Limited to your free time",
      },
      {
        feature: "First Impressions",
        prestyj: "Professional, instant, consistent",
        others: "Varies with your confidence level",
      },
      {
        feature: "Follow-up",
        prestyj: "Automated, never forgets",
        others: "Manual, easy to forget when busy",
      },
      {
        feature: "Learning Curve",
        prestyj: "Minutes to set up",
        others: "N/A",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "Can I really afford this as a new agent?",
      answer:
        "Prestyj is designed to be accessible at every career stage. Think of it this way: if AI helps you close just one additional deal this year, it's paid for itself many times over. Most agents see ROI within their first 1-2 months.",
    },
    {
      question: "I'm still learning scripts. Will AI make me dependent?",
      answer:
        "Actually, AI helps you learn faster. You can review how AI handles conversations and learn proven approaches. When leads are ready to meet, you take over with confidence. Think of AI as your training partner.",
    },
    {
      question: "What if I don't have many leads yet?",
      answer:
        "Perfect time to start. When you do get leads (from open houses, sphere, online, anywhere), AI ensures you convert them. Building good habits now sets you up for success as your lead volume grows.",
    },
    {
      question: "Will leads know I'm new if they're talking to AI?",
      answer:
        "AI doesn't reveal your experience level. Leads experience a professional, knowledgeable response. By the time they meet you, they're already impressed by your responsiveness and ready to work with you.",
    },
    {
      question: "I'm working another job. Does this still help?",
      answer:
        "Especially helpful. AI handles leads 24/7, including during your day job. You come home to qualified leads and booked appointments instead of missed opportunities. Many successful agents built their business this way.",
    },
  ],
  cta: {
    headline: "Start Your Career With an Unfair Advantage",
    subheadline:
      "Don't wait until you can afford an ISA to compete with top producers. Book a demo and see how new agents are using AI to build their pipeline fast.",
    buttonText: "Book Your Free Demo",
  },
});
