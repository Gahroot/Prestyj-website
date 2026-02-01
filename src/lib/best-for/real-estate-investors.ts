import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const realEstateInvestors: BestForPageContent = createBestForPage({
  slug: "real-estate-investors",
  niche: {
    name: "Real Estate Investors",
    shortName: "Investors",
    description: "Real estate investors focused on wholesaling, fix-and-flip, rental acquisitions, and buying from motivated sellers",
  },
  meta: {
    title: "Best AI for Real Estate Investors | Prestyj",
    description:
      "Discover why real estate investors choose Prestyj to qualify motivated seller leads instantly. Handle high-volume PPC and direct mail leads, book property walkthroughs, and close more wholesale deals.",
    keywords: [
      "best AI for real estate investors",
      "motivated seller lead qualification",
      "wholesale real estate automation",
      "investor lead management",
      "fix and flip lead response",
      "rental property acquisition AI",
      "real estate investor CRM",
    ],
  },
  hero: {
    badge: "Built for Real Estate Investors",
    headlineAccent: "Real Estate Investors",
    subheadline:
      "Sort motivated sellers from tire-kickers instantly. Qualify leads, collect property details, and book walkthroughs 24/7 so you focus on analyzing deals and making offers.",
    pattern: "BEST_AI_FOR",
  },
  whyBestFor: [
    {
      icon: "Target" as IconName,
      title: "Instant Motivated Seller Qualification",
      description:
        "AI asks the right questions upfront: timeline, motivation, condition, liens. Only qualified leads reach you, saving hours of wasted calls with unmotivated sellers.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Handle High-Volume Lead Flow",
      description:
        "Running PPC, direct mail, and SEO campaigns? AI responds to 100+ leads per day with the same speed and quality. Scale your marketing without scaling your team.",
    },
    {
      icon: "ClipboardList" as IconName,
      title: "Automated Property Detail Collection",
      description:
        "AI gathers critical info before the walkthrough: square footage, bedrooms, bathrooms, condition, liens, repairs needed. You show up prepared to make offers.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Book Walkthroughs While You Sleep",
      description:
        "Motivated sellers move fast. AI books property walkthroughs to your calendar 24/7, even at midnight when sellers are browsing. Never lose a deal to a faster competitor.",
    },
  ],
  painPoints: [
    {
      problem: "Spending hours calling leads that aren't actually motivated sellers",
      solution:
        "AI qualifies motivation upfront with proven questions: Why are you selling? What's your timeline? Any liens or code violations? Only serious sellers get through.",
    },
    {
      problem: "High PPC and direct mail costs wasted on leads that go uncontacted",
      solution:
        "Every dollar spent on marketing gets instant AI response. No more paying $50-150 per lead and letting them sit for hours or days.",
    },
    {
      problem: "Missing hot leads because you're at property walkthroughs or analyzing deals",
      solution:
        "AI responds in under 60 seconds while you're busy. Leads are qualified, property details collected, and appointments booked before you finish your current walkthrough.",
    },
    {
      problem: "Tire-kickers wasting your time asking for retail prices",
      solution:
        "AI educates sellers on the investor buying process and filters out those looking for retail value. Only sellers willing to negotiate reach your phone.",
    },
    {
      problem: "Deal analysis paralysis from incomplete information",
      solution:
        "AI collects standardized property data from every lead: age, condition, repairs, comps, seller motivation. You have what you need to run numbers before the walkthrough.",
    },
  ],
  comparison: {
    headers: ["Feature", "Prestyj", "Manual Lead Follow-Up"],
    rows: [
      {
        feature: "Lead Response Time",
        prestyj: "Under 60 seconds, 24/7",
        others: "Hours to days (while at walkthroughs)",
      },
      {
        feature: "Motivation Qualification",
        prestyj: "AI asks proven qualification questions",
        others: "Manual calls, inconsistent questions",
      },
      {
        feature: "Property Detail Collection",
        prestyj: "Automated data gathering before walkthrough",
        others: "Gathered during walkthrough or phone call",
      },
      {
        feature: "Lead Volume Handling",
        prestyj: "Unlimited, same quality for lead #1 and #100",
        others: "Limited by your availability",
      },
      {
        feature: "Walkthrough Booking",
        prestyj: "AI books directly to calendar, 24/7",
        others: "Phone tag, back-and-forth scheduling",
      },
      {
        feature: "Cost Per Qualified Lead",
        prestyj: "Maximizes marketing ROI with instant response",
        others: "High abandonment rate drives up cost",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does AI qualify motivated sellers vs. tire-kickers?",
      answer:
        "Our AI is trained on investor-specific qualification questions: motivation (divorce, foreclosure, inherited, downsizing), timeline, property condition, willingness to sell below market, and existing liens or violations. Sellers who aren't motivated or want retail prices are politely filtered out.",
    },
    {
      question: "Can AI collect the property details I need for deal analysis?",
      answer:
        "Yes. AI gathers bedrooms, bathrooms, square footage, age, condition, needed repairs, liens, code violations, and comps. You get standardized data to run your numbers before ever visiting the property.",
    },
    {
      question: "What if a seller has questions about my offer process?",
      answer:
        "AI is trained on the investor buying process: how you calculate offers, why investor prices differ from retail, how fast you close, and whether you buy as-is. It educates sellers and sets proper expectations before you ever talk.",
    },
    {
      question: "Does it work with my direct mail and PPC campaigns?",
      answer:
        "Absolutely. Prestyj integrates with all lead sources: Carrot sites, REI Reply, Facebook PPC, Google PPC, direct mail response lines, and more. All leads get instant AI response regardless of source.",
    },
    {
      question: "Can I use this for wholesale buyer matching too?",
      answer:
        "Yes. AI can qualify wholesale buyers, collect their buying criteria (area, price range, property type, funding), and match them with your inventory. Automate both sides of your wholesale business.",
    },
  ],
  cta: {
    headline: "Stop Wasting Time on Unmotivated Sellers",
    subheadline:
      "See how Prestyj qualifies motivated sellers, collects property details, and books walkthroughs automatically. Book a demo and watch AI handle investor leads in real-time.",
    buttonText: "Book Your Free Demo",
  },
});
