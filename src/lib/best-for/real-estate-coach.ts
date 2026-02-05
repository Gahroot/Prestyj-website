import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const realEstateCoach: BestForPageContent = createBestForPage({
  slug: "real-estate-coach",
  niche: {
    name: "Real Estate Coaches & Consultants",
    shortName: "Real Estate Coaches",
    description: "Real estate coaches, trainers, and consultants needing AI lead response",
  },
  meta: {
    title: "AI Receptionist for Real Estate Coaches | Prestyj",
    description:
      "Done-for-you AI response for real estate coaches and consultants. Capture coaching inquiries 24/7, qualify prospects, and book discovery calls. Never miss a potential client again.",
    keywords: [
      "AI for real estate coaches",
      "real estate coaching lead response",
      "real estate consultant automation",
      "coach appointment setting",
      "real estate trainer AI",
      "coaching business automation",
      "real estate mentor AI",
    ],
  },
  hero: {
    badge: "Built for Real Estate Coaches",
    headlineAccent: "Real Estate Coaches & Consultants",
    subheadline:
      "Your clients expect instant response—you deserve the same. AI captures coaching inquiries, qualifies prospects, and books discovery calls while you focus on serving clients.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Phone" as IconName,
      title: "Capture Prospects 24/7",
      description:
        "Agents looking for coaching often call after hours or between showings. AI answers every call instantly—no more missed coaching clients to voicemail.",
    },
    {
      icon: "Filter" as IconName,
      title: "Qualify Serious Coaching Candidates",
      description:
        "AI filters by experience level, production, commitment, and budget. Only qualified prospects make it to your calendar—protect your time for serious clients.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Books Discovery Calls Directly",
      description:
        "AI schedules discovery calls automatically. Prospects commit time on your calendar—higher show-up rates and less time chasing appointments.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Scale Your Coaching Business",
      description:
        "Handle 10x the inquiries without hiring admin staff. AI handles initial response and qualification so you focus on coaching, not administrative work.",
    },
  ],
  painPoints: [
    {
      problem: "Agents call for coaching but reach voicemail",
      solution:
        "AI answers every inquiry immediately. When an agent is researching coaches and ready to commit, they connect instantly—no voicemail tag.",
    },
    {
      problem: "Hours spent on calls with unqualified prospects",
      solution:
        "AI screens for seriousness: years in business, current production, budget for coaching, readiness to commit. Only qualified candidates reach you.",
    },
    {
      problem: "Can't respond while coaching clients or presenting",
      solution:
        "AI handles all incoming calls while you're working. Get notified with full prospect details when a qualified discovery call is booked.",
    },
    {
      problem: "Marketing drives inquiries but slow response loses them",
      solution:
        "AI responds in under 60 seconds. When your content, referrals, or marketing drive interest, prospects connect immediately—while motivation is peak.",
    },
    {
      problem: "Admin work takes time away from coaching revenue",
      solution:
        "AI handles initial contact, qualification, and scheduling. You focus entirely on high-value coaching activities—maximizing revenue per hour.",
    },
  ],
  comparison: {
    headers: ["Feature", "Prestyj AI", "Manual Response"],
    rows: [
      {
        feature: "Response Time",
        prestyj: "Under 60 seconds",
        others: "Hours to days",
      },
      {
        feature: "Prospect Qualification",
        prestyj: "AI screens for seriousness",
        others: "You discover on the call",
      },
      {
        feature: "Scheduling",
        prestyj: "Automated calendar booking",
        others: "Back-and-forth communication",
      },
      {
        feature: "Missed Opportunities",
        prestyj: "Zero—all calls answered",
        others: "Significant (voicemail, timing)",
      },
      {
        feature: "Admin Hours",
        prestyj: "Zero—you coach, AI responds",
        others: "5-10 hours/week minimum",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "Can AI qualify coaching prospects properly?",
      answer:
        "Yes. AI asks the right questions: how long in real estate, current production, previous coaching experience, budget, and commitment level. You get full context before each discovery call.",
    },
    {
      question: "What if someone needs immediate help?",
      answer:
        "AI recognizes urgent situations and escalates them to you immediately. Prospects in crisis or needing immediate attention get priority handling.",
    },
    {
      question: "Does this work for different coaching specialties?",
      answer:
        "Yes. We train AI for your specific coaching niche: new agents, team building, luxury, commercial, short sales, or any specialization. Prospect qualification matches your ideal client profile.",
    },
    {
      question: "Can AI handle payment collection or contracts?",
      answer:
        "AI focuses on response, qualification, and scheduling. Once a prospect is qualified and scheduled, your existing onboarding and payment processes take over—we integrate with your CRM.",
    },
    {
      question: "How many more coaching clients can I expect?",
      answer:
        "Coaches using AI response report 2-3x more discovery calls from the same marketing volume. Faster response and better qualification means converting more inquiries into paying clients.",
    },
  ],
  cta: {
    headline: "Capture Every Coaching Inquiry—24/7",
    subheadline:
      "See how real estate coaches use AI to respond instantly, qualify serious prospects, and book more discovery calls. Schedule a demo to see AI trained for coaching businesses.",
    buttonText: "Book Your Demo",
    footnote: "Prospect-qualified. Calendar-integrated. Live in 1-2 weeks.",
  },
});
