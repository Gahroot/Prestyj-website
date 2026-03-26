import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const realEstateBrokerages: BestForPageContent = createBestForPage({
  slug: "real-estate-brokerages",
  niche: {
    name: "Real Estate Brokerages",
    shortName: "Brokerages",
    description: "Brokerages managing multiple agents and high lead volumes from paid advertising",
  },
  meta: {
    title: "Best AI Lead Response for Real Estate Brokerages | Prestyj",
    description:
      "Prestyj helps real estate brokerages respond to every ad lead in under 60 seconds, qualify buyers and sellers, and book appointments 24/7. Built for brokerages doing $20M+.",
    keywords: [
      "best AI for real estate brokerages",
      "brokerage lead management AI",
      "AI lead response brokerage",
      "real estate brokerage automation",
      "brokerage AI appointment setting",
      "real estate brokerage lead conversion",
    ],
  },
  hero: {
    badge: "Built for Real Estate Brokerages",
    headlineAccent: "Real Estate Brokerages",
    subheadline:
      "Your agents are busy showing homes. Your AI handles every inbound lead in under 60 seconds — qualifying buyers and sellers and booking appointments directly onto agent calendars.",
    pattern: "BEST_LEAD_RESPONSE_FOR",
  },
  whyBestFor: [
    {
      icon: "Zap" as IconName,
      title: "Sub-60 Second Response on Every Lead",
      description:
        "Whether it's 9am or 2am, every lead from your Facebook and YouTube ads gets an instant, intelligent response. Never lose a lead to slow follow-up again.",
    },
    {
      icon: "Users" as IconName,
      title: "Intelligent Agent Routing",
      description:
        "Route buyers to buyer agents, sellers to listing agents, and leads by territory or specialty. Every lead lands with the right agent automatically.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Scale Without Adding Staff",
      description:
        "Handle 10x your current lead volume without adding ISAs. Your AI scales instantly with your ad spend — no hiring, training, or turnover.",
    },
    {
      icon: "BarChart3" as IconName,
      title: "Full Broker-Level Visibility",
      description:
        "Track response rates, conversion rates, and appointment volume across all agents. Identify top performers and coach underperformers with real data.",
    },
  ],
  painPoints: [
    {
      problem: "Ad leads going cold before agents follow up",
      solution:
        "AI responds in under 60 seconds, every time. By the time your agent sees the notification, the lead is already qualified and ready to talk.",
    },
    {
      problem: "ISAs quitting and leaving coverage gaps",
      solution:
        "AI never quits, never calls in sick, and never asks for a raise. Full 24/7 coverage with zero turnover risk.",
    },
    {
      problem: "Uneven lead distribution between agents",
      solution:
        "Customizable routing rules ensure fair distribution based on your brokerage's criteria — round-robin, territory, specialty, or availability.",
    },
    {
      problem: "No visibility into lead response performance",
      solution:
        "Real-time dashboards show exactly how fast leads are being contacted, which sources convert best, and where deals fall through.",
    },
    {
      problem: "High cost per acquisition from wasted ad spend",
      solution:
        "When every lead gets an instant follow-up, your ad spend converts at 3x the rate. Same budget, more closings.",
    },
  ],
  comparison: {
    headers: ["Feature", "Prestyj AI", "In-House ISA Team"],
    rows: [
      {
        feature: "Lead Response Time",
        prestyj: "Under 60 seconds, 24/7",
        others: "5–30 min during business hours",
      },
      {
        feature: "Monthly Cost",
        prestyj: "$1,997–$5,997/mo",
        others: "$3,500–$8,000+/mo per ISA",
      },
      {
        feature: "Turnover Risk",
        prestyj: "Zero",
        others: "High — 30–50% annually",
      },
      {
        feature: "Weekend/Evening Coverage",
        prestyj: "Full 24/7 coverage",
        others: "Overtime or gaps",
      },
      {
        feature: "Lead Routing",
        prestyj: "Intelligent rules-based routing",
        others: "Manual or basic spreadsheet",
      },
      {
        feature: "Performance Reporting",
        prestyj: "Real-time dashboard",
        others: "Manual reporting",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does Prestyj handle high lead volume from ads?",
      answer:
        "Prestyj scales to any volume instantly. Whether you're generating 50 or 5,000 leads per month, every lead gets the same sub-60-second response. There are no bottlenecks.",
    },
    {
      question: "Can we customize the AI's qualifying questions?",
      answer:
        "Yes. We train the AI on your brokerage's specific criteria — price range, timeframe, pre-approval status, buyer vs. seller, and any custom questions your agents use.",
    },
    {
      question: "Does it integrate with our CRM?",
      answer:
        "Prestyj integrates with Follow Up Boss, kvCORE, Sierra Interactive, CINC, Real Geeks, and most major real estate CRMs. All conversations and lead data sync automatically.",
    },
    {
      question: "How are appointments booked?",
      answer:
        "The AI qualifies the lead, then offers available slots from the assigned agent's calendar. Appointments are booked directly — no back-and-forth required.",
    },
    {
      question: "What happens if a lead wants to speak with a human immediately?",
      answer:
        "The AI immediately notifies the assigned agent and provides a warm handoff summary. The agent can jump in at any point during the conversation.",
    },
  ],
  cta: {
    headline: "Book a Brokerage Strategy Call",
    subheadline:
      "See how top brokerages use Prestyj to convert 3x more ad leads without adding ISA headcount. We'll show you exactly how it works for your volume and market.",
    buttonText: "Book a Demo",
  },
});
