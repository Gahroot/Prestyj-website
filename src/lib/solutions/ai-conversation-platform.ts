import type { SolutionPageContent } from "./types";

export const aiConversationPlatform: SolutionPageContent = {
  slug: "ai-conversation-platform",
  meta: {
    title: "AI Conversation Platform | Unified Voice, SMS, Email & Chat | Prestyj",
    description:
      "One AI platform that handles every conversation across phone, SMS, email, and web chat. Unified context, consistent responses, and 24/7 coverage for growing businesses ready to scale customer communication.",
    keywords: [
      "AI conversation platform",
      "omnichannel AI customer service",
      "unified messaging platform",
      "AI voice and SMS automation",
      "multi-channel AI chatbot",
      "AI email and chat automation",
      "conversational AI for business",
      "unified inbox AI",
      "AI customer communication platform",
      "all-in-one AI receptionist",
      "cross-channel AI assistant",
      "AI for growing businesses",
    ],
  },
  hero: {
    badge: "AI Conversation Platform",
    headline: "Every Channel.",
    headlineAccent: "One Intelligent AI.",
    subheadline:
      "Phone, SMS, email, and web chat—handled by a single AI that remembers every conversation and responds consistently across every channel. Built for growing businesses ready to scale without hiring an army.",
    stats: [
      { value: "4-in-1", label: "channels unified", color: "primary" },
      { value: "24/7", label: "always-on coverage", color: "success" },
      { value: "<30s", label: "avg. response time", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Your Customers Are Everywhere. Your Team Can't Be.",
    subheadline:
      "Growing businesses lose deals when conversations get fragmented across disconnected tools and channels.",
    points: [
      {
        icon: "Layers",
        title: "Customer conversations scattered across tools",
        description:
          "Phone calls in one system, emails in another, SMS in a third, web chat in a fourth. Your team wastes hours switching tabs and customers get inconsistent answers depending on the channel they chose.",
        color: "destructive",
      },
      {
        icon: "Clock",
        title: "Slow response times across every channel",
        description:
          "Email replies take 12+ hours, web chat goes unanswered after 5pm, and SMS sits in someone's personal phone. Modern customers expect replies in minutes—not the next business day.",
        color: "warning",
      },
      {
        icon: "UserX",
        title: "Hiring can't keep up with growth",
        description:
          "Adding more channels means adding more agents. Training, turnover, and overhead pile up fast. By the time a new rep is fully ramped, your volume has doubled again.",
        color: "primary",
      },
      {
        icon: "History",
        title: "No shared context between channels",
        description:
          "A customer calls Monday, emails Tuesday, and chats Wednesday—each time starting from scratch. Without unified history, every interaction feels like the first, frustrating customers and slowing deals.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "One AI. Every Conversation. Total Coverage.",
    subheadline:
      "Replace four disconnected tools with one intelligent platform that handles every channel your customers use.",
    benefits: [
      {
        icon: "Phone",
        title: "Voice AI That Sounds Human",
        description:
          "Natural-language phone conversations that qualify leads, answer questions, and book appointments. Indistinguishable from a top-tier human rep, available 24/7.",
      },
      {
        icon: "MessageSquare",
        title: "SMS That Actually Converts",
        description:
          "Two-way text conversations with sub-30-second response times. Perfect for missed-call text-back, appointment reminders, and quick lead qualification.",
      },
      {
        icon: "Mail",
        title: "Email Automation With Context",
        description:
          "AI reads, understands, and responds to inbound emails like a trained team member. Drafts replies, schedules meetings, and escalates when human judgment is needed.",
      },
      {
        icon: "Bot",
        title: "Web Chat That Closes Deals",
        description:
          "Embed AI chat on your website that qualifies visitors, answers product questions, and books demos directly into your calendar—turning anonymous traffic into booked pipeline.",
      },
      {
        icon: "Database",
        title: "Unified Conversation History",
        description:
          "Every call, text, email, and chat tied to a single customer record. AI remembers prior context across channels so customers never have to repeat themselves.",
      },
      {
        icon: "Workflow",
        title: "Seamless Human Handoff",
        description:
          "When a conversation needs human expertise, AI hands off to your team with full context, transcript, and recommended next steps. No information lost, no awkward restarts.",
      },
    ],
  },
  calculator: {
    headline: "Multi-Channel Coverage Calculator",
    subheadline:
      "Estimate the revenue you're leaving on the table from slow responses across channels.",
    inputs: {
      leads: {
        label: "Total inbound conversations per month",
        placeholder: "500",
        defaultValue: 500,
      },
      commission: { label: "Average customer value ($)", placeholder: "2000", defaultValue: 2000 },
    },
    reactivationRate: 0.55,
    conversionRate: 0.4,
    resultLabel: "Additional monthly revenue with unified AI",
  },
  objections: {
    headline: "Common Concerns About Unified AI",
    subheadline: "Real answers for businesses considering an all-in-one conversation platform.",
    objections: [
      {
        objection: "We already use separate tools for each channel",
        response:
          "That's exactly the problem. Disconnected tools create disconnected experiences for both customers and your team. Prestyj replaces or integrates with your existing stack—you keep the systems that work and unify the conversation layer on top, so AI has full context across every channel.",
      },
      {
        objection: "AI can't possibly handle every channel well",
        response:
          "Modern conversational AI is channel-aware. The same underlying intelligence adjusts tone for SMS (short, casual), email (detailed, professional), voice (natural, human), and chat (quick, helpful). One brain, four native experiences—not a generic bot bolted onto every channel.",
      },
      {
        objection: "What happens when AI doesn't know the answer?",
        response:
          "AI is built to know its limits. When a conversation requires human judgment—pricing negotiations, complex technical questions, unhappy customers—it hands off seamlessly to your team with the full transcript and context. Your team starts at step five, not step one.",
      },
      {
        objection: "We're worried about losing the personal touch",
        response:
          "AI handles the repetitive 80%—qualifying leads, answering FAQs, booking meetings—so your humans can focus on the high-value 20% where personal touch actually matters. Customers get faster answers, your team gets more meaningful work, and nothing feels robotic.",
      },
    ],
  },
  cta: {
    headline: "Ready to Unify Every Conversation?",
    subheadline:
      "Stop juggling four tools and four inboxes. See how one AI platform can handle every channel, every conversation, every hour of the day.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote:
      "No commitment required. See unified AI handle voice, SMS, email, and chat in a live demo.",
  },
};
