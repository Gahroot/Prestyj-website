import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const fintech: BestForPageContent = createBestForPage({
  slug: "fintech",
  niche: {
    name: "Fintech Companies & Financial Technology",
    shortName: "Fintech",
    description: "Fintech companies, neobanks, and financial technology firms needing AI customer response",
  },
  meta: {
    title: "AI Voice for Fintech Companies | Prestyj",
    description:
      "Done-for-you AI voice response for fintech companies. Handle customer inquiries, qualify leads, and route to the right team 24/7. Compliance-aware and CRM-integrated.",
    keywords: [
      "AI for fintech companies",
      "fintech customer support automation",
      "neobank AI voice",
      "financial technology AI assistant",
      "fintech lead response",
      "fintech customer service AI",
      "banking AI automation",
    ],
  },
  hero: {
    badge: "Built for Fintech",
    headlineAccent: "Fintech & Financial Technology",
    subheadline:
      "Fintech customers expect instant responses—AI delivers them 24/7. Handle inquiries, qualify prospects, and route conversations while maintaining compliance standards.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Shield" as IconName,
      title: "Compliance-Aware Conversations",
      description:
        "Our AI understands financial services constraints. No advice that triggers regulations, no guaranteed returns—just compliant qualification and routing.",
    },
    {
      icon: "Zap" as IconName,
      title: "Instant Response Sets You Apart",
      description:
        "Fintech is about speed and convenience. AI responds in seconds—meeting customer expectations and outperforming traditional financial institutions.",
    },
    {
      icon: "Route" as IconName,
      title: "Smart Inquiry Routing",
      description:
        "AI qualifies and routes: sales to sales, support to support, compliance issues to the right team. No more transfer roulette or dropped conversations.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Scale Without Expensive Support Teams",
      description:
        "Handle 10x the inquiries without hiring proportionally. AI handles initial response and qualification—humans handle complex, high-value interactions.",
    },
  ],
  painPoints: [
    {
      problem: "Customers expect instant responses like big tech",
      solution:
        "Fintech users are conditioned by Google, Amazon, and Apple to instant responses. AI delivers that instant experience 24/7—differentiating your fintech from traditional banks with faster service.",
    },
    {
      problem: "Support costs scale linearly with customer growth",
      solution:
        "Every new customer means more support inquiries. Traditional models require hiring more support staff as you grow. AI handles unlimited inquiries at one flat cost—better unit economics.",
    },
    {
      problem: "Complex routing wastes customer time",
      solution:
        "Customers get transferred between departments, repeat their story, and often end up frustrated. Poor routing kills fintech retention. AI qualifies intent and routes correctly the first time.",
    },
    {
      problem: "After-hours inquiries go to voicemail and go cold",
      solution:
        "Fintech happens 24/7—customers bank, invest, and research on their schedule. After-hours calls are lost opportunities. AI handles all after-hours inquiries automatically.",
    },
    {
      problem: "Support teams are overwhelmed by basic questions",
      solution:
        "40-60% of support inquiries are routine questions that waste expensive human talent. AI handles routine inquiries automatically—account questions, features, pricing—humans focus on complex issues.",
    },
  ],
  comparison: {
    headers: ["Feature", "Prestyj AI", "Traditional Support"],
    rows: [
      {
        feature: "Response Time",
        prestyj: "Under 60 seconds",
        others: "Minutes to hours (or never)",
      },
      {
        feature: "Availability",
        prestyj: "24/7/365",
        others: "Business hours only",
      },
      {
        feature: "Cost Scaling",
        prestyj: "Flat monthly",
        others: "Linear with customer count",
      },
      {
        feature: "First Contact Resolution",
        prestyj: "AI handles routine issues",
        others: "Often requires escalation",
      },
      {
        feature: "Customer Experience",
        prestyj: "Instant, like big tech",
        others: "Traditional banking speeds",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "Can AI handle compliance-sensitive conversations?",
      answer:
        "Yes. Our AI is designed for compliance-aware interactions. No regulated advice, no guarantees, no inappropriate recommendations—just information gathering, qualification, and proper routing.",
    },
    {
      question: "What if a customer has a complex issue?",
      answer:
        "AI handles routine inquiries and recognizes complex situations. When a conversation requires human expertise, AI seamlessly transfers to the right team with full context.",
    },
    {
      question: "Can AI integrate with our fintech CRM and systems?",
      answer:
        "Yes. We integrate with Salesforce, HubSpot, Zendesk, Intercom, and custom systems. All conversations and customer data sync automatically.",
    },
    {
      question: "How does this work with our existing support team?",
      answer:
        "Many fintechs use AI as the first line of defense—handling routine inquiries and after-hours calls. Your human team focuses on complex issues, high-value customers, and escalated situations.",
    },
    {
      question: "Can AI handle sales inquiries too?",
      answer:
        "Yes. AI qualifies and routes sales prospects separately from support inquiries. Hot leads get immediate engagement and routing to your sales team.",
    },
  ],
  cta: {
    headline: "Give Customers the Instant Experience They Expect",
    subheadline:
      "See how fintech companies use AI to respond instantly, route intelligently, and scale support without proportional hiring. Schedule a demo to see AI for fintech.",
    buttonText: "Book Your Demo",
    footnote: "Compliance-aware. CRM-integrated. Live in 1-2 weeks.",
  },
});
