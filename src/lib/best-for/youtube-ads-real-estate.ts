import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const youtubeAdsRealEstate: BestForPageContent = createBestForPage({
  slug: "youtube-ads-real-estate",
  niche: {
    name: "YouTube Ad Lead Conversion",
    shortName: "YouTube Ads",
    description: "Real estate teams converting YouTube ad leads with AI-powered instant response",
  },
  meta: {
    title: "AI Lead Response for Real Estate YouTube Ads | Prestyj",
    description:
      "Convert more YouTube ad leads into appointments. Prestyj responds instantly to every real estate YouTube lead, qualifies buyers and sellers, and books showings automatically.",
    keywords: [
      "real estate YouTube ad lead conversion",
      "AI for real estate YouTube advertising",
      "YouTube ad leads real estate follow up",
      "real estate YouTube lead response",
      "YouTube ads real estate brokerages",
      "AI appointment setting YouTube leads",
    ],
  },
  hero: {
    badge: "Built for YouTube Ad Lead Conversion",
    headlineAccent: "YouTube Ad Leads",
    subheadline:
      "YouTube delivers warm, high-intent leads who just watched your video. AI strikes while they're still engaged — responding in under 60 seconds to qualify and book appointments.",
    pattern: "BEST_LEAD_RESPONSE_FOR",
  },
  whyBestFor: [
    {
      icon: "Zap" as IconName,
      title: "Capitalize on Video Intent",
      description:
        "YouTube leads come in warm — they just watched your content and want to know more. AI responds instantly while their interest is at peak.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Book Appointments While They're Watching",
      description:
        "AI can take a lead from inquiry to booked appointment in a single conversation — often within minutes of clicking your YouTube ad.",
    },
    {
      icon: "MessageSquare" as IconName,
      title: "Reference the Video They Watched",
      description:
        "AI is trained on your content and can reference what the lead saw — creating a seamless, personalized experience that converts higher.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Scale Your YouTube ROI",
      description:
        "YouTube ads require significant budget to work. Maximize every dollar by ensuring every lead gets an instant, intelligent follow-up.",
    },
  ],
  painPoints: [
    {
      problem: "YouTube leads going cold because of slow follow-up",
      solution:
        "AI engages every YouTube lead within 60 seconds — before they move on to the next video or competitor's content.",
    },
    {
      problem: "High YouTube ad spend with low appointment conversion",
      solution:
        "Faster follow-up is the single biggest driver of YouTube lead conversion. AI makes sure every lead is engaged immediately.",
    },
    {
      problem: "Leads who watched your video but didn't call",
      solution:
        "AI follows up via SMS and email with multiple touches, reactivating leads who showed interest but didn't convert on first contact.",
    },
    {
      problem: "No way to handle the volume spikes from successful campaigns",
      solution:
        "AI scales instantly with your campaign performance. A viral video that generates 500 leads gets the same 60-second response rate as a 5-lead day.",
    },
    {
      problem: "Hard to qualify YouTube leads before agents call",
      solution:
        "AI qualifies every lead — price range, timeline, buyer or seller, pre-approval — so agents only call leads who are ready to move forward.",
    },
  ],
  comparison: {
    headers: ["Approach", "Prestyj AI", "Manual Follow-Up"],
    rows: [
      {
        feature: "Response Time",
        prestyj: "Under 60 seconds, always",
        others: "Hours (off-hours leads wait overnight)",
      },
      {
        feature: "Lead Qualification",
        prestyj: "Automated before agent engagement",
        others: "Agent qualifies on cold outbound call",
      },
      {
        feature: "Video Campaign Scalability",
        prestyj: "Handles any volume instantly",
        others: "Agent capacity becomes bottleneck",
      },
      {
        feature: "Reactivation of Cold Leads",
        prestyj: "Multi-touch automated sequences",
        others: "Requires manual effort",
      },
      {
        feature: "Cost per Appointment",
        prestyj: "Drops as volume grows",
        others: "Stays flat or increases",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does Prestyj connect with YouTube ad leads?",
      answer:
        "We integrate with your CRM or landing page form. When a YouTube ad lead submits their info, the AI receives it instantly and begins follow-up. Works with Google Ads lead forms too.",
    },
    {
      question: "Can AI reference the specific video or offer the lead saw?",
      answer:
        "Yes. We train the AI on your video content and offers. If you're running a 'sell your home in 30 days' campaign, the AI's opening message references that specific offer.",
    },
    {
      question: "What types of real estate YouTube campaigns work best with Prestyj?",
      answer:
        "All of them — home seller campaigns, buyer education, neighborhood guides, and brand awareness. Any campaign that generates leads benefits from instant AI follow-up.",
    },
    {
      question: "How many follow-up touches does the AI make?",
      answer:
        "Typically 5–7 touches over the first 14 days via SMS and email. After that, leads enter a longer-term nurture sequence.",
    },
    {
      question: "Does Prestyj handle both buyer and seller YouTube campaigns?",
      answer:
        "Yes. We can run different qualification scripts and routing logic for buyer campaigns vs. seller campaigns simultaneously.",
    },
  ],
  cta: {
    headline: "Get More ROI from Your YouTube Ad Budget",
    subheadline:
      "See how Prestyj helps real estate teams and brokerages convert YouTube ad leads at 3x the rate with AI-powered instant follow-up. Book a demo today.",
    buttonText: "Book a Demo",
  },
});
