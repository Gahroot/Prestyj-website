import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const boomtownUsers: BestForPageContent = createBestForPage({
  slug: "boomtown-users",
  niche: {
    name: "BoomTown Users",
    shortName: "BoomTown",
    description:
      "Real estate teams and brokerages using BoomTown for lead generation, CRM, and transaction management",
  },
  meta: {
    title: "AI Lead Response for BoomTown Users | Prestyj",
    description:
      "Supercharge your BoomTown CRM with AI that responds to leads in under 60 seconds, qualifies buyers and sellers, and books appointments automatically — 24/7.",
    keywords: [
      "BoomTown AI integration",
      "AI for BoomTown",
      "BoomTown lead response automation",
      "BoomTown AI follow-up",
      "BoomTown real estate AI",
      "AI appointment setting BoomTown",
    ],
  },
  hero: {
    badge: "Built for BoomTown",
    headlineAccent: "BoomTown Users",
    subheadline:
      "BoomTown delivers the leads. Prestyj's AI converts them. Respond in under 60 seconds, qualify every prospect, and book showings — all syncing seamlessly with your BoomTown CRM.",
    pattern: "BEST_AI_FOR",
  },
  whyBestFor: [
    {
      icon: "Zap" as IconName,
      title: "Instant Response on All BoomTown Leads",
      description:
        "Every lead from BoomTown — website, paid ads, IDX, or third-party sources — gets an AI response in under 60 seconds. Speed-to-lead that beats every competitor.",
    },
    {
      icon: "Database" as IconName,
      title: "Seamless BoomTown CRM Sync",
      description:
        "All AI conversations, qualification notes, and appointments sync back to BoomTown automatically. Your CRM stays current without any manual data entry from agents.",
    },
    {
      icon: "MessageSquare" as IconName,
      title: "Conversations Beyond Drip Campaigns",
      description:
        "BoomTown automates email sequences but can't hold a conversation. Prestyj's AI engages leads in real dialogue — answering questions, addressing objections, and moving toward a booked showing.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Maximize Your BoomTown ROI",
      description:
        "You invest in BoomTown for lead generation. Prestyj ensures those leads don't go cold. More responses, more conversations, more closings from the same lead spend.",
    },
  ],
  painPoints: [
    {
      problem: "BoomTown drip campaigns getting low engagement",
      solution:
        "Automated emails get ignored. AI sends personalized messages that start real conversations — leading to actual appointments instead of unsubscribe clicks.",
    },
    {
      problem: "Leads going cold before agents follow up",
      solution:
        "AI contacts every BoomTown lead in under 60 seconds. By the time your agent opens the lead notification, the prospect is already qualified and ready to book.",
    },
    {
      problem: "After-hours leads losing interest overnight",
      solution:
        "AI responds 24/7. A Saturday evening Zillow lead gets qualified and booked before they browse other listings on Sunday morning.",
    },
    {
      problem: "Agents cherry-picking leads instead of working all of them",
      solution:
        "AI pre-qualifies every lead so agents focus on high-intent prospects. Low-quality leads get automated nurture instead of being ignored entirely.",
    },
  ],
  comparison: {
    headers: ["Capability", "BoomTown + Prestyj", "BoomTown Alone"],
    rows: [
      {
        feature: "Lead Response Time",
        prestyj: "Under 60 seconds, always",
        others: "Depends on agent availability",
      },
      {
        feature: "After-Hours Coverage",
        prestyj: "Full qualification and booking, 24/7",
        others: "Auto-response email only",
      },
      {
        feature: "Conversational AI",
        prestyj: "Full two-way dialogue with prospects",
        others: "Automated drip sequences",
      },
      {
        feature: "Lead Qualification",
        prestyj: "Automated, before agent involvement",
        others: "Manual agent calls required",
      },
      {
        feature: "Appointment Booking",
        prestyj: "AI books to agent calendars directly",
        others: "Manual coordination by agents",
      },
      {
        feature: "Cold Lead Reactivation",
        prestyj: "AI re-engages dormant BoomTown database",
        others: "Manual agent outreach",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does Prestyj integrate with BoomTown?",
      answer:
        "We connect via BoomTown's API. When a lead enters your BoomTown pipeline, Prestyj receives it instantly and begins AI follow-up. Conversation data and appointments sync back into BoomTown automatically.",
    },
    {
      question: "Will Prestyj conflict with BoomTown's action plans?",
      answer:
        "Prestyj works alongside your existing BoomTown automations. We recommend letting AI handle initial outreach and real-time conversations, then transitioning to BoomTown action plans for long-term nurture.",
    },
    {
      question: "Can it handle leads from BoomTown's Predictive Analytics?",
      answer:
        "Yes. Prestyj can respond to Predictive Analytics leads — reaching out to homeowners before they even list. Early engagement with high-probability sellers gives your team a first-mover advantage.",
    },
    {
      question: "Does it work with BoomTown's team assignment rules?",
      answer:
        "Absolutely. Prestyj respects your BoomTown lead routing — round-robin, geographic, or source-based. Appointments get booked to the assigned agent's calendar automatically.",
    },
    {
      question: "Can Prestyj reactivate old BoomTown leads?",
      answer:
        "Yes. We run targeted re-engagement campaigns on your dormant BoomTown database — filtering by last activity, lead source, or any criteria. Many teams see 20%+ response rates from leads inactive for months.",
    },
  ],
  cta: {
    headline: "Turn BoomTown Leads Into Booked Appointments",
    subheadline:
      "Every lead responded to, every prospect qualified. See how AI + BoomTown converts more of your lead spend into closed deals.",
    buttonText: "Book a Demo",
    footnote: "No credit card required. Built for real estate teams on BoomTown.",
  },
});
