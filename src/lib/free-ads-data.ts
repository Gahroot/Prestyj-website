/**
 * Data for the Free Ads page — plain-text FAQ entries for JSON-LD consumption,
 * statistics for the proof-points section, and comparison data.
 */

export interface FreeAdsFAQ {
  question: string;
  answer: string;
}

export const freeAdsFaqs: FreeAdsFAQ[] = [
  {
    question: "Are the 300 video ads really free?",
    answer:
      "Yes, 100% free. You send us your raw footage, and within 24 hours we deliver 300 unique video ads ready to run. No catch, no credit card, no commitment. We do this because we know once you see the quality, you'll want the full system.",
  },
  {
    question: "What kind of footage do I need to send?",
    answer:
      "We'll walk you through everything on the call. We send you the scripts — you just record yourself on your phone using a teleprompter app. No production crew, no fancy equipment. Relatability sells.",
  },
  {
    question: "What happens after I get my 300 ads?",
    answer:
      "We hope you give us the opportunity to run those ads for you and set up our full system. If not, the ads are yours and we go our separate ways.",
  },
  {
    question: "How much does the full system cost?",
    answer:
      "$5K setup fee, $2K/month, plus a minimum of $1,000/month in ad spend paid directly to Meta. See full pricing details at prestyj.com/pricing.",
  },
  {
    question: "Can I buy more ads?",
    answer:
      "Yes. 300 ads are $3,000 regular ($1,500 for subscribers), 500 ads are $4,000 ($2,000 for subscribers), and 1,000 ads are $5,000 ($2,500 for subscribers).",
  },
  {
    question: "Can I see samples before committing?",
    answer:
      "You already are. The ad you clicked, this landing page you're reading, and the AI that will follow up with you after you submit — that's the exact system we build for your business. You can also see more samples at prestyj.com/samples.",
  },
  {
    question: "How is this different from other ad agencies?",
    answer:
      "Most agencies hand you a few ads and a report. We build the entire pipeline: 300 ads, landing page, and an AI system that responds to leads in seconds — not hours. No leads slip through the cracks because a human wasn't fast enough.",
  },
  {
    question: "What industries do you create video ads for?",
    answer:
      "We create video ads for service businesses including real estate teams, HVAC contractors, plumbers, roofers, landscapers, and home service companies. Our scripts and ad strategies are tailored to each industry's buyer psychology and seasonal patterns.",
  },
  {
    question: "What platforms do the video ads work on?",
    answer:
      "Our video ads are optimized for Meta (Facebook and Instagram), TikTok, YouTube Shorts, and Google Video campaigns. Each batch includes platform-specific aspect ratios and durations so your ads perform well wherever you run them.",
  },
];

export const freeAdsStats = [
  {
    value: "300+",
    label: "Unique ad variations",
    description: "From a single 15-minute recording session",
  },
  {
    value: "24hr",
    label: "Turnaround time",
    description: "From footage to fully edited ad batch",
  },
  {
    value: "2x",
    label: "Higher engagement",
    description: "Video ads on Meta see 2x higher engagement than static images",
  },
  {
    value: "78%",
    label: "Choose first responder",
    description: "Of customers work with the first business that responds",
  },
];

export const freeAdsComparison = {
  headers: ["Feature", "Prestyj Free Ads", "DIY Ads", "Hiring an Agency"],
  rows: [
    {
      feature: "Number of ads",
      prestyj: "300+ from 1 session",
      diy: "5–10 if you're fast",
      agency: "10–20 per month",
    },
    {
      feature: "Turnaround",
      prestyj: "24 hours",
      diy: "1–2 weeks",
      agency: "2–4 weeks",
    },
    {
      feature: "Cost per batch",
      prestyj: "Free (first batch)",
      diy: "$500–$2,000 in tools",
      agency: "$3,000–$10,000",
    },
    {
      feature: "AI lead follow-up",
      prestyj: "Included",
      diy: "Not included",
      agency: "Extra cost or not available",
    },
    {
      feature: "Landing page",
      prestyj: "Included",
      diy: "Build it yourself",
      agency: "Extra $1,000–$3,000",
    },
    {
      feature: "Scripting",
      prestyj: "Done for you",
      diy: "You write them",
      agency: "Usually included",
    },
    {
      feature: "Combinatorial testing",
      prestyj: "Every hook × angle × CTA",
      diy: "Manual A/B test a few",
      agency: "Limited variations",
    },
  ],
};
