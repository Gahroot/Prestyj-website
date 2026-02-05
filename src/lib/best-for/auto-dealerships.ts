import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const autoDealerships: BestForPageContent = createBestForPage({
  slug: "auto-dealerships",
  niche: {
    name: "Auto Dealerships & Car Dealers",
    shortName: "Auto Dealerships",
    description: "Car dealerships needing AI lead response and appointment scheduling",
  },
  meta: {
    title: "AI Receptionist for Auto Dealerships | Prestyj",
    description:
      "Done-for-you AI voice response for car dealerships. Capture every lead, qualify buyers, and schedule test drives 24/7. Integrates with your CRM and DMS.",
    keywords: [
      "AI receptionist for car dealerships",
      "auto dealership lead response",
      "car dealer AI assistant",
      "dealership call answering",
      "automotive sales AI",
      "test drive scheduling automation",
      "car dealer appointment setting",
    ],
  },
  hero: {
    badge: "Built for Auto Dealerships",
    headlineAccent: "Auto Dealerships & Car Dealers",
    subheadline:
      "Car buyers shop 24/7—your AI responds 24/7. Qualify leads, answer inventory questions, and book test drives instantly. Never lose a sale to a missed call again.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Phone" as IconName,
      title: "Capture Every Phone Lead",
      description:
        "70% of car buyers still prefer calling. AI answers every call instantly—no more lost sales to voicemail, hold times, or after-hours missed opportunities.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Books Test Drives Directly",
      description:
        "AI doesn't just take messages—it qualifies buyers and schedules test drives directly onto your sales calendar. Prospects show up, not just called back.",
    },
    {
      icon: "Car" as IconName,
      title: "Inventory Knowledge",
      description:
        "AI understands your inventory: makes, models, trims, pricing. Answer questions about availability, features, and compete with online-only buying experiences.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Higher Conversion from Web Leads",
      description:
        "When web leads request calls, AI responds in under 60 seconds. Fast response means dramatically higher show-up rates for test drives and more closed deals.",
    },
  ],
  painPoints: [
    {
      problem: "Car buyers call after hours and get voicemail",
      solution:
        "AI answers 24/7—evenings, weekends, holidays. When a buyer is hot and researching, they reach a human-like voice, not a voicemail they may not leave a message on.",
    },
    {
      problem: "Sales reps miss calls while on the lot with customers",
      solution:
        "AI never misses a call. Your team focuses on in-person buyers while AI handles all incoming inquiries—no more juggling or choosing between floor ups and phone ups.",
    },
    {
      problem: "Web leads go cold before anyone calls back",
      solution:
        "AI responds in under 60 seconds. When a buyer submits a lead and requests a call, they're connected immediately—while interest is peak, not hours later.",
    },
    {
      problem: "BDC teams cost $150K+ annually with turnover",
      solution:
        "One BDC rep costs $4-6K/month. Prestyj covers 24/7 response for a fraction of that—no turnover, no training gaps, consistent quality every call.",
    },
    {
      problem: "Buyers research online but dealerships don't respond fast enough",
      solution:
        "Buyers expect instant responses like they get online. AI delivers that instant response via voice—bridging the gap between digital shopping and dealership experience.",
    },
  ],
  comparison: {
    headers: ["Feature", "Prestyj AI", "Traditional BDC"],
    rows: [
      {
        feature: "Availability",
        prestyj: "24/7/365",
        others: "Business hours only",
      },
      {
        feature: "Response Time",
        prestyj: "Under 60 seconds",
        others: "Minutes to hours",
      },
      {
        feature: "Cost",
        prestyj: "Fraction of BDC costs",
        others: "$150K-250K/year for team",
      },
      {
        feature: "Turnover",
        prestyj: "Zero",
        others: "30-50% annually",
      },
      {
        feature: "CRM Integration",
        prestyj: "Automatic lead logging",
        others: "Manual data entry",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "Can AI answer questions about specific vehicles?",
      answer:
        "Yes. AI learns your inventory and can answer questions about makes, models, trims, features, and pricing. When questions require human expertise, AI seamlessly transfers to your sales team.",
    },
    {
      question: "Does AI integrate with our CRM and DMS?",
      answer:
        "Yes. We integrate with major dealership CRMs and DMS platforms—VinSolutions, Elead, CDK, Reynolds & Reynolds, and others. All conversations and appointments sync automatically.",
    },
    {
      question: "What if a customer needs immediate help?",
      answer:
        "AI handles standard inquiries and scheduling. For urgent issues or complex situations, AI immediately connects the caller to the right person on your team.",
    },
    {
      question: "Can AI schedule test drives directly?",
      answer:
        "Yes. AI accesses your sales calendar, finds available times, and books test drive appointments directly. Customers show up having already committed time to visit your lot.",
    },
    {
      question: "How does this work with our existing BDC team?",
      answer:
        "Many dealerships use AI to handle overflow, after-hours, and initial qualification. Your human BDC focuses on follow-up and closing—AI ensures no lead ever goes uncaptured.",
    },
  ],
  cta: {
    headline: "Capture Every Car Buyer Call—24/7",
    subheadline:
      "See how dealerships use AI to respond instantly, qualify buyers, and book more test drives. Schedule a demo to see AI trained for automotive sales.",
    buttonText: "Book Your Demo",
    footnote: "CRM-integrated. Inventory-aware. Live in 1-2 weeks.",
  },
});
