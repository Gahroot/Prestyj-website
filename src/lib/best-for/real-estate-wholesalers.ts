import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const realEstateWholesalers: BestForPageContent = createBestForPage({
  slug: "real-estate-wholesalers",
  niche: {
    name: "Real Estate Wholesalers",
    shortName: "Real Estate Wholesalers",
    description: "Wholesalers who need fast response to motivated seller leads",
  },
  meta: {
    title: "AI Voice for Real Estate Wholesalers | Prestyj",
    description:
      "Done-for-you AI response for wholesaling. Motivated sellers call, AI answers instantly. Qualify deals, gather property details, and contract appointments—24/7.",
    keywords: [
      "AI for real estate wholesalers",
      "wholesaling lead response",
      "motivated seller AI",
      "wholesaling automation",
      "real estate wholesaler assistant",
      "seller call automation",
      "wholesaling AI voice",
    ],
  },
  hero: {
    badge: "Built for Wholesalers",
    headlineAccent: "Real Estate Wholesalers",
    subheadline:
      "In wholesaling, speed is everything. Motivated sellers call and AI responds instantly—qualifying deals, gathering property info, and locking down contracts while competitors are still returning voicemails.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Zap" as IconName,
      title: "Respond Before Your Competition",
      description:
        "Motivated sellers call multiple wholesalers. First to respond often wins the deal. AI answers in seconds—you're first every time, even at 2 AM.",
    },
    {
      icon: "Home" as IconName,
      title: "Property Qualification Built-In",
      description:
        "AI knows what makes a wholesaleable deal: equity, condition, motivation, timeline. Gather the right details and only spend time on viable deals.",
    },
    {
      icon: "Phone" as IconName,
      title: "Voice Builds Trust",
      description:
        "Sellers want to talk, not text. AI voice conversations build rapport and trust—critical when you're asking someone to sign over property rights.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Scale Without Hiring",
      description:
        "Do 10x the deals without 10x the overhead. AI handles initial contact and qualification so you focus on closing and building buyer relationships.",
    },
  ],
  painPoints: [
    {
      problem: "Motivated sellers call and reach voicemail",
      solution:
        "AI answers every call immediately. When a seller is motivated and ready to deal, they connect instantly—no voicemail tag, no cooling off period.",
    },
    {
      problem: "Sellers call multiple wholesalers—whoever responds first wins",
      solution:
        "AI guarantees you're first to respond every time. While competitors are returning calls hours later, you've already qualified the deal and started building rapport.",
    },
    {
      problem: "Hours spent on calls with unmotivated sellers",
      solution:
        "AI filters motivation and deal viability before you ever get involved. Only qualified, motivated sellers make it to your calendar—maximize your closing time.",
    },
    {
      problem: "Can't answer calls while driving for dollars or at work",
      solution:
        "AI handles all incoming calls while you're busy. Get notified with full details when a qualified seller is ready—focus your time on high-value activities.",
    },
    {
      problem: "Cold calling takes hours with low connection rates",
      solution:
        "AI handles inbound response while you focus on outbound. When your marketing drives calls, AI converts them into qualified opportunities automatically.",
    },
  ],
  comparison: {
    headers: ["Feature", "Prestyj AI", "Manual Wholesaling"],
    rows: [
      {
        feature: "Response Time",
        prestyj: "Instant, 24/7",
        others: "Hours to days",
      },
      {
        feature: "Deal Qualification",
        prestyj: "AI filters for motivation",
        others: "You call every lead",
      },
      {
        feature: "Hours Calling",
        prestyj: "Zero—you review qualified deals",
        others: "10-30 hours/week calling",
      },
      {
        feature: "Missed Opportunities",
        prestyj: "Zero—all calls answered",
        others: "Significant (voicemail, timing)",
      },
      {
        feature: "Scalability",
        prestyj: "Instant (unlimited calls)",
        others: "Hiring required",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "Can AI qualify wholesale deals properly?",
      answer:
        "Yes. AI asks the right questions: property condition, seller motivation, timeline, asking price, equity situation. You get full deal details before ever picking up the phone.",
    },
    {
      question: "What if a seller wants to sell immediately?",
      answer:
        "AI recognizes urgency and hot leads, escalating them to you immediately via text or phone. Urgent deals never wait in a queue.",
    },
    {
      question: "Does AI work with cold calling or only inbound?",
      answer:
        "Prestyj focuses on inbound response. When your marketing (direct mail, bandit signs, PPC) drives calls, AI converts them. For outbound, we recommend integrating with your dialer.",
    },
    {
      question: "Can AI handle the contract conversation?",
      answer:
        "AI qualifies and builds rapport. When the seller is ready to move forward, AI seamlessly transfers to you or schedules a contract appointment—your choice based on your workflow.",
    },
    {
      question: "How much faster will I get deals with AI?",
      answer:
        "Wholesalers using AI response report 3-5x more contracted deals from the same lead volume. Speed-to-contact is the single biggest factor in wholesale success, and AI guarantees you're first.",
    },
  ],
  cta: {
    headline: "Never Lose a Wholesale Deal to Speed Again",
    subheadline:
      "See how wholesalers use AI to respond instantly, qualify motivated sellers, and lock down more contracts. Schedule a demo to see AI trained for wholesaling.",
    buttonText: "Book Your Demo",
    footnote: "Motivated seller-focused. Deal qualification built-in. Live in 1-2 weeks.",
  },
});
