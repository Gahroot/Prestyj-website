import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const aiCustomerEngagement: BestForPageContent = createBestForPage({
  slug: "ai-customer-engagement",
  niche: {
    name: "AI Customer Engagement",
    shortName: "Customer Engagement",
    description: "Service businesses needing unified omnichannel AI engagement across voice, SMS, email, and web chat",
  },
  meta: {
    title: "AI Customer Engagement | Omnichannel AI for Service Businesses | Prestyj",
    description:
      "Unify customer engagement across voice, SMS, email, and web chat with omnichannel AI. 89% customer retention boost. Consistent messaging on every channel, 24/7.",
    keywords: [
      "AI customer engagement",
      "omnichannel customer engagement",
      "omnichannel AI",
      "AI engagement platform",
      "multi-channel customer engagement",
      "AI customer communication",
      "unified customer engagement",
      "omnichannel messaging AI",
    ],
  },
  hero: {
    badge: "Omnichannel AI",
    headlineAccent: "AI Customer Engagement",
    subheadline:
      "Engage customers on their preferred channel—voice, SMS, email, or web chat—with AI that maintains context across every conversation. 89% of customers stay loyal to brands with seamless omnichannel experiences.",
    pattern: "BEST_AI_FOR",
  },
  whyBestFor: [
    {
      icon: "MessageSquare" as IconName,
      title: "True Omnichannel Engagement",
      description:
        "One AI across voice, SMS, email, and web chat. Customers switch channels without repeating themselves. Context follows the conversation, creating seamless experiences that build loyalty.",
    },
    {
      icon: "Bot" as IconName,
      title: "Consistent AI Messaging",
      description:
        "Every channel delivers the same brand voice, pricing, and information. No mixed messages or conflicting details. AI ensures consistency whether customers call, text, email, or chat.",
    },
    {
      icon: "Clock" as IconName,
      title: "24/7 Availability on All Channels",
      description:
        "Night calls, weekend texts, holiday emails—AI responds instantly on every channel. No more missed messages or delayed responses that drive customers to competitors.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "89% Higher Customer Retention",
      description:
        "Businesses with strong omnichannel engagement retain 89% of customers vs 33% for weak engagement. Unified AI delivers the seamless experience customers expect.",
    },
  ],
  painPoints: [
    {
      problem: "Fragmented communication across disconnected channels",
      solution:
        "AI unifies voice, SMS, email, and web chat into one platform. Customer context travels across every channel. No more 'I already told the other agent that' frustrations.",
    },
    {
      problem: "Missed messages buried in separate inboxes",
      solution:
        "Centralized AI monitors all channels simultaneously. Texts, emails, chats, and voicemails route through one intelligent system. Zero messages slip through the cracks.",
    },
    {
      problem: "Inconsistent customer experience across touchpoints",
      solution:
        "AI maintains brand consistency everywhere. Same pricing, same policies, same tone—whether customers call at 2pm or chat at 2am. No conflicting information.",
    },
    {
      problem: "Customers frustrated by repeating information",
      solution:
        "AI remembers every interaction across all channels. When a customer emails after calling, AI knows the full context. Seamless handoffs that respect customer time.",
    },
    {
      problem: "Cannot scale engagement without hiring more staff",
      solution:
        "AI handles unlimited conversations across all channels simultaneously. Double your engagement capacity without adding headcount. Scale customer communications effortlessly.",
    },
  ],
  comparison: {
    headers: ["Capability", "Prestyj Omnichannel AI", "Single-Channel Approach"],
    rows: [
      {
        feature: "Channel Coverage",
        prestyj: "Voice + SMS + Email + Web Chat",
        others: "Usually one channel (or disconnected tools)",
      },
      {
        feature: "Cross-Channel Context",
        prestyj: "Full conversation history across all channels",
        others: "Lost when customers switch channels",
      },
      {
        feature: "Response Consistency",
        prestyj: "100% consistent messaging everywhere",
        others: "Varies by channel and agent",
      },
      {
        feature: "Availability",
        prestyj: "24/7 on all channels simultaneously",
        others: "Limited hours, varying by channel",
      },
      {
        feature: "Customer Retention Rate",
        prestyj: "89% (omnichannel average)",
        others: "33% (single-channel average)",
      },
      {
        feature: "Missed Messages",
        prestyj: "Zero—unified monitoring",
        others: "Common across fragmented systems",
      },
      {
        feature: "Scalability",
        prestyj: "Unlimited concurrent conversations",
        others: "Limited by staffing each channel",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does AI maintain context across different channels?",
      answer:
        "Prestyj AI uses a unified conversation memory that persists across all channels. When a customer calls, then follows up via text, AI recognizes them and continues the conversation seamlessly. All interaction history is centralized and instantly accessible.",
    },
    {
      question: "Can customers switch channels mid-conversation?",
      answer:
        "Absolutely. That's the power of omnichannel AI. A customer can start on web chat, continue via SMS, and finalize details on a voice call—all without repeating information. AI maintains full context throughout.",
    },
    {
      question: "Which channels does the omnichannel AI support?",
      answer:
        "Prestyj supports voice (inbound and outbound calls), SMS/text messaging, email, and web chat. All channels are managed by the same AI with consistent branding, messaging, and customer context.",
    },
    {
      question: "How quickly does AI respond on each channel?",
      answer:
        "Voice calls are answered instantly (zero rings). SMS and web chat respond in under 60 seconds. Email responses are typically sent within 2-5 minutes. All channels maintain the same qualification and engagement logic.",
    },
    {
      question: "What happens if a customer prefers one specific channel?",
      answer:
        "AI adapts to customer preferences. If someone only wants to text, AI engages entirely via SMS. If they prefer calls, AI focuses on voice. The system learns preferences and optimizes for each customer's communication style.",
    },
  ],
  cta: {
    headline: "Unify Your Customer Engagement",
    subheadline:
      "See how omnichannel AI delivers consistent, seamless experiences across voice, SMS, email, and chat. Book a demo to see unified engagement in action.",
    buttonText: "See Omnichannel AI Live",
    footnote: "Most demos complete in 15 minutes. See your exact use case in action.",
  },
});
