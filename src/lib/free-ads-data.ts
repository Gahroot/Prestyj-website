/**
 * Data for the Free Ads page — plain-text FAQ entries for JSON-LD consumption,
 * statistics for the proof-points section, and comparison data.
 */

import { pricingTiers } from "./pricing-data";
import { bulkAdPricingTiers } from "./bulk-ad-pricing-data";

export interface FreeAdsFAQ {
  question: string;
  answer: string;
}

const starterTier = pricingTiers.find((t) => t.id === "starter");
if (!starterTier) {
  throw new Error("Starter tier not found in pricing-data.ts");
}
const formatPrice = (n: number): string => `$${n.toLocaleString("en-US")}`;
const STARTER_SETUP = formatPrice(starterTier.setupFee);
const STARTER_MONTHLY = formatPrice(starterTier.monthlyPrice);
const bulkSummary = bulkAdPricingTiers
  .map((t) => `${t.name.replace(" Ads", " ads")} are ${t.price}`)
  .join(", ");

export const freeAdsFaqs: FreeAdsFAQ[] = [
  {
    question: "Are the 300 video ads really included?",
    answer:
      "Yes. When you start a Prestyj AI agents plan from $1,997/mo (setup fee applies), 300 video ads are included with your plan — they are not a standalone free product. We send you the scripts, help you film, and deliver 300 unique video ads ready to run within 24 hours.",
  },
  {
    question: "Who is this for?",
    answer:
      "Service businesses and real estate teams doing 50–500 leads/month. We've shipped batches for contractors, HVAC companies, roofers, plumbers, and real estate teams. If you need vertical video ads at volume, this works.",
  },
  {
    question: "Are the 300 video ads free standing?",
    answer:
      "No. The 300 video ads are bundled with your Prestyj AI agents plan starting at $1,997/mo (setup fee applies). They come as part of the done-for-you system: batch video ads, managed ad spend, and AI agents that book appointments — not as a standalone free product.",
  },
  {
    question: "What kind of footage do I need to send?",
    answer:
      "We'll walk you through everything on the call. We send you the scripts — you just record yourself on your phone using a teleprompter app. No production crew, no fancy equipment. Relatability sells.",
  },
  {
    question: "What happens after I get my 300 ads?",
    answer:
      "We run those ads for you, build the landing page, and deploy AI agents that answer calls, respond to leads in 60 seconds, and book appointments on your calendar — 24/7. The ads are part of the full done-for-you system.",
  },
  {
    question: "How much does the full system cost?",
    answer: `${STARTER_SETUP} setup fee, ${STARTER_MONTHLY}/month, plus a minimum of $1,000/month in ad spend paid directly to Meta. See full pricing details at prestyj.com/pricing.`,
  },
  {
    question: "Can I buy more ads?",
    answer: `Yes. Four one-time batch packages: ${bulkSummary}. All include 24-hour turnaround and error revisions. See full batch ad pricing at prestyj.com/bulk-video-ad-pricing.`,
  },
  {
    question: "Can I see samples before committing?",
    answer:
      "You already are. The ad you clicked, this landing page you're reading, and the AI agents that will follow up with you after you submit — that's the exact system we build for your business.",
  },
  {
    question: "How is this different from other ad agencies?",
    answer:
      "Most agencies hand you a few ads and a report. We deploy the entire pipeline: 300 ads, landing page, and AI agents that respond to leads in seconds — not hours. No leads slip through the cracks because a human wasn't fast enough.",
  },
  {
    question: "What industries do you create video ads for?",
    answer:
      "Service businesses and real estate teams — e.g., HVAC contractors, plumbers, roofers, landscapers, and home service companies. Scripts and ad angles are tailored to your specific offer and audience, not a generic industry template.",
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
  headers: ["Feature", "Prestyj", "DIY Ads", "Hiring an Agency"],
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
      prestyj: "Included with plan",
      diy: "$500–$2,000 in tools",
      agency: "$3,000–$10,000",
    },
    {
      feature: "AI agents lead follow-up",
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
