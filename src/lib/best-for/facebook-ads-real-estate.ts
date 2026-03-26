import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const facebookAdsRealEstate: BestForPageContent = createBestForPage({
  slug: "facebook-ads-real-estate",
  niche: {
    name: "Facebook Ad Lead Follow-Up",
    shortName: "Facebook Ads",
    description: "Real estate teams converting Facebook ad leads with AI-powered instant response",
  },
  meta: {
    title: "AI Follow-Up for Real Estate Facebook Ad Leads | Prestyj",
    description:
      "Stop letting Facebook ad leads go cold. Prestyj responds to every real estate Facebook lead in under 60 seconds, qualifies buyers and sellers, and books appointments automatically.",
    keywords: [
      "AI lead follow up for real estate Facebook ads",
      "real estate Facebook ad lead conversion",
      "Facebook leads real estate AI",
      "follow up Facebook ad leads real estate",
      "real estate Facebook lead response",
      "AI for real estate Facebook advertising",
    ],
  },
  hero: {
    badge: "Built for Facebook Ad Lead Conversion",
    headlineAccent: "Facebook Ad Leads",
    subheadline:
      "You're spending real money on Facebook ads. But cold leads and slow follow-up are killing your ROI. AI responds to every lead in under 60 seconds — before they forget they even clicked.",
    pattern: "BEST_LEAD_RESPONSE_FOR",
  },
  whyBestFor: [
    {
      icon: "Zap" as IconName,
      title: "Respond Before They Scroll Away",
      description:
        "Facebook leads have the attention span of a scroll. AI engages them while your ad is still fresh — typically within 30 seconds of the form submit.",
    },
    {
      icon: "MessageSquare" as IconName,
      title: "Multi-Channel Follow-Up",
      description:
        "Reach leads via SMS, email, and messenger. Facebook leads expect fast, informal communication — AI delivers exactly that.",
    },
    {
      icon: "Target" as IconName,
      title: "Smart Lead Qualification",
      description:
        "AI asks the right questions — buyer or seller, timeline, price range, pre-approval status — and routes hot leads to your agents immediately.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Maximize Your Ad ROI",
      description:
        "The #1 waste in real estate Facebook advertising is slow follow-up. Fix it with AI and get 3x more appointments from the same ad spend.",
    },
  ],
  painPoints: [
    {
      problem: "Leads going cold within minutes of submitting the form",
      solution:
        "AI engages the lead the moment they submit — while they're still on their phone and thinking about their next move.",
    },
    {
      problem: "High cost per lead but low conversion to appointment",
      solution:
        "When every lead gets an instant, personalized response, your cost per appointment drops dramatically. Same spend, more deals.",
    },
    {
      problem: "Agents too busy with active clients to follow up new leads",
      solution:
        "AI handles the initial response and qualification automatically. Agents only step in when a lead is ready to have a real conversation.",
    },
    {
      problem: "Night and weekend Facebook leads going unanswered",
      solution:
        "Facebook ads run 24/7. Your AI follows up 24/7. No more losing Sunday leads because nobody checked their phone.",
    },
    {
      problem: "No way to know which Facebook leads are worth calling",
      solution:
        "AI qualifies every lead using your criteria and assigns a priority score. Your agents call the best leads first.",
    },
  ],
  comparison: {
    headers: ["Approach", "Prestyj AI", "Manual Follow-Up"],
    rows: [
      {
        feature: "Response Time",
        prestyj: "Under 60 seconds, always",
        others: "Hours (or never, for off-hours leads)",
      },
      {
        feature: "Lead Qualification",
        prestyj: "Automated, consistent, 24/7",
        others: "Manual, inconsistent, business hours only",
      },
      {
        feature: "Follow-Up Sequences",
        prestyj: "Multi-touch automated sequences",
        others: "Relies on agent memory",
      },
      {
        feature: "Cost per Appointment",
        prestyj: "Drops as volume grows",
        others: "Rises with lead volume",
      },
      {
        feature: "Conversion Rate",
        prestyj: "3x improvement typical",
        others: "Industry average: 1–3%",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does Prestyj connect to my Facebook Lead Ads?",
      answer:
        "We integrate directly with your Facebook Lead Ads via webhook or CRM sync. The moment a lead submits your form, AI receives the data and begins the follow-up sequence automatically.",
    },
    {
      question: "What does the AI say to new Facebook leads?",
      answer:
        "We customize the messaging for your market and offer. Typically the AI introduces itself, acknowledges what the lead was looking for, and asks a qualifying question to start the conversation.",
    },
    {
      question: "Can AI handle leads in multiple languages?",
      answer:
        "Yes. Prestyj supports English and Spanish follow-up, important for many real estate markets. Additional languages available on request.",
    },
    {
      question: "What if the lead doesn't respond to the first message?",
      answer:
        "AI runs a multi-touch follow-up sequence — typically 5–7 touches over 2 weeks via SMS and email. Most responses come from the 3rd or 4th touch.",
    },
    {
      question: "How do I see which Facebook campaigns are converting best?",
      answer:
        "Prestyj tracks lead source, first response time, qualification outcome, and appointment booked rate. You can see exactly which campaigns are producing the best ROI.",
    },
  ],
  cta: {
    headline: "Stop Wasting Your Facebook Ad Budget",
    subheadline:
      "Every day you wait is another batch of leads going cold. See how Prestyj converts 3x more Facebook leads with AI — book a demo tailored to your ad setup.",
    buttonText: "Book a Demo",
  },
});
