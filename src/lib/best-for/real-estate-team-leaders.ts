import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const realEstateTeamLeaders: BestForPageContent = createBestForPage({
  slug: "real-estate-team-leaders",
  niche: {
    name: "Real Estate Team Leaders",
    shortName: "Team Leaders",
    description: "Team leaders scaling production without adding ISA headcount",
  },
  meta: {
    title: "AI Tools for Real Estate Team Leaders | Prestyj",
    description:
      "Real estate team leaders use Prestyj to respond to leads instantly, eliminate ISA turnover, and scale team production without adding headcount. Built for leaders running paid ads.",
    keywords: [
      "AI tools for real estate team leaders",
      "real estate team leader automation",
      "scale real estate team with AI",
      "real estate team leader lead management",
      "AI for team leader real estate",
      "real estate team leader productivity",
    ],
  },
  hero: {
    badge: "Built for Real Estate Team Leaders",
    headlineAccent: "Real Estate Team Leaders",
    subheadline:
      "You built your team to grow. But leads going cold, ISAs quitting, and agents buried in admin are keeping you stuck. AI handles lead response so your agents can focus on closing.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Users" as IconName,
      title: "Run Like a Bigger Team",
      description:
        "AI gives every agent on your team 24/7 coverage. Your 5-agent team responds to leads like a 20-agent operation — without the overhead.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Grow Revenue, Not Headcount",
      description:
        "Every new hire adds cost, management time, and risk. AI scales with your lead volume and ad spend — not your payroll.",
    },
    {
      icon: "Target" as IconName,
      title: "Protect Your Ad Investment",
      description:
        "You're spending real money on ads. AI makes sure every lead is contacted in under 60 seconds — so no ad dollar is wasted on a cold lead.",
    },
    {
      icon: "BarChart3" as IconName,
      title: "Coach with Real Data",
      description:
        "See exactly which leads came in, how fast they were contacted, and what happened. Use data to coach your agents and optimize your team's performance.",
    },
  ],
  painPoints: [
    {
      problem: "ISAs quitting after you've invested weeks in training",
      solution:
        "AI is your most loyal employee. It never quits, never has bad days, and gets better over time as you refine the scripts.",
    },
    {
      problem: "Uneven follow-up across your agent roster",
      solution:
        "AI ensures every lead gets the same high-quality follow-up — regardless of which agent it's routed to or what time of day it comes in.",
    },
    {
      problem: "Agents spending hours on admin instead of selling",
      solution:
        "AI handles initial contact, qualification, and appointment booking. Your agents step in only when a lead is ready to meet.",
    },
    {
      problem: "No visibility into what's happening with leads after distribution",
      solution:
        "Full conversation history, response time data, and conversion tracking. Know exactly what's happening at every stage of your pipeline.",
    },
    {
      problem: "Weekend and evening leads falling through the cracks",
      solution:
        "AI covers 24/7. Saturday night leads get the same instant response as Monday morning leads — your team looks professional even when they're not working.",
    },
  ],
  comparison: {
    headers: ["Feature", "Prestyj AI", "In-House ISA"],
    rows: [
      {
        feature: "Monthly Cost",
        prestyj: "$1,997–$3,497/mo",
        others: "$3,500–$6,000+/mo per ISA",
      },
      {
        feature: "Turnover Risk",
        prestyj: "Zero",
        others: "30–50% annual turnover",
      },
      {
        feature: "Training Time",
        prestyj: "7–10 day setup",
        others: "2–4 weeks per hire",
      },
      {
        feature: "Coverage Hours",
        prestyj: "24/7/365",
        others: "40–60 hrs/week",
      },
      {
        feature: "Performance Consistency",
        prestyj: "100% consistent",
        others: "Varies by ISA",
      },
      {
        feature: "Scalability",
        prestyj: "Unlimited with no extra cost",
        others: "Hire more ISAs",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does Prestyj integrate with my existing team workflow?",
      answer:
        "Prestyj integrates with your CRM and calendar. Leads flow in, AI handles the first response and qualification, then routes hot leads to the right agent with a full conversation summary.",
    },
    {
      question: "Can I customize how leads are distributed to agents?",
      answer:
        "Yes. You set the routing rules — round-robin, territory, buyer/seller split, availability, or any combination. Rules can be changed anytime.",
    },
    {
      question: "Will the AI sound like it's from our team?",
      answer:
        "Absolutely. We train the AI with your team's name, brand voice, and specific talking points. Leads will engage with a personalized response that represents your team.",
    },
    {
      question: "How do I monitor what the AI is doing with leads?",
      answer:
        "You have full access to a dashboard showing all conversations, response times, qualification outcomes, and appointments booked. You can read any conversation at any time.",
    },
    {
      question: "What's the ROI for team leaders?",
      answer:
        "Most team leaders see positive ROI within 30 days. One additional closing per month — which AI-powered instant follow-up makes very achievable — typically pays for 3–6 months of service.",
    },
  ],
  cta: {
    headline: "Scale Your Team Without Scaling Your Headcount",
    subheadline:
      "See how the top real estate team leaders use Prestyj to run 24/7 lead response, eliminate ISA problems, and grow production. Book a team leader strategy call today.",
    buttonText: "Book a Demo",
  },
});
