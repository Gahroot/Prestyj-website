import type { SolutionPageContent } from "./types";

export const aiMissedCallTextBack: SolutionPageContent = {
  slug: "ai-missed-call-text-back",
  meta: {
    title: "AI Missed Call Text Back | Capture 100% of Your Calls | Prestyj",
    description: "Never lose a missed call again. AI sends a personalized text within 5 seconds of every missed call, engages the caller in real conversation, and books the appointment automatically. Built for home services, contractors, real estate, and small businesses.",
    keywords: [
      "AI missed call text back",
      "missed call auto-text",
      "automated missed call response",
      "missed call SMS automation",
      "text back missed calls",
      "AI SMS response for missed calls",
      "missed call recovery software",
      "missed call text back for contractors",
      "missed call automation real estate",
      "small business missed call text",
      "AI text back service",
      "missed call to booked appointment",
    ],
  },
  hero: {
    badge: "AI Missed Call Text Back",
    headline: "Every Missed Call,",
    headlineAccent: "Instantly Recovered.",
    subheadline: "When you can't pick up, AI does. The moment a call goes unanswered, our system sends a personalized text in seconds—engaging the caller, qualifying the lead, and booking the appointment before they call your competitor.",
    stats: [
      { value: "5s", label: "to text back", color: "success" },
      { value: "100%", label: "of missed calls recovered", color: "primary" },
      { value: "60%", label: "convert to booked jobs", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Every Missed Call Is Money Walking Away",
    subheadline: "62% of business calls go unanswered—and 85% of those callers never call back. Here's what it's costing you.",
    points: [
      {
        icon: "PhoneMissed",
        title: "Missed calls = missed revenue",
        description: "The average small business misses 30-50% of inbound calls. At a $500-5,000 average ticket, that's tens of thousands in monthly revenue going to whoever picks up first.",
        color: "destructive",
      },
      {
        icon: "Clock",
        title: "Callbacks come too late",
        description: "By the time you call back 2 hours later, the prospect has already hired the next contractor on Google. 78% of customers buy from the company that responds first—not the best one.",
        color: "warning",
      },
      {
        icon: "UserX",
        title: "Voicemails are dead",
        description: "Only 18% of callers leave a voicemail and just 4% of voicemails get returned in time. Your voicemail isn't a follow-up tool—it's a graveyard for leads.",
        color: "primary",
      },
      {
        icon: "DollarSign",
        title: "Paid ads going to waste",
        description: "You're spending $50-500 per click on Google Ads to ring a phone nobody answers. Every missed call is paid traffic burned with zero return on ad spend.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "AI That Texts Back Faster Than You Can Pick Up",
    subheadline: "From missed call to booked appointment in minutes—fully automated, fully personalized.",
    benefits: [
      {
        icon: "Zap",
        title: "Instant 5-Second Response",
        description: "The moment a call rings out, AI fires off a personalized text using the caller's name and your business voice. No delay, no excuses—engaged before they even put the phone down.",
      },
      {
        icon: "MessageSquare",
        title: "Real Two-Way Conversations",
        description: "This isn't a one-line auto-reply. AI carries on a natural SMS conversation, answers questions, qualifies the job, and handles objections—just like your best front-desk rep.",
      },
      {
        icon: "Calendar",
        title: "Books Appointments Automatically",
        description: "Once the lead is qualified, AI checks your live calendar and books the appointment directly—no phone tag, no back-and-forth, no manual data entry.",
      },
      {
        icon: "Bot",
        title: "Trained on Your Business",
        description: "AI knows your services, pricing tiers, service areas, hours, and brand voice. Every text sounds like it came from you—not a generic chatbot.",
      },
      {
        icon: "Workflow",
        title: "Connects to Your CRM",
        description: "Every missed-call conversation auto-logs into your CRM as a new lead with full context: caller info, conversation transcript, qualification answers, and booking status.",
      },
      {
        icon: "BarChart3",
        title: "Track Every Recovered Lead",
        description: "See exactly how many missed calls turned into texts, conversations, and booked jobs. Real-time dashboards show recovered revenue down to the dollar.",
      },
    ],
  },
  calculator: {
    headline: "Missed Call Revenue Calculator",
    subheadline: "See how much revenue you can recover by texting back every missed call.",
    inputs: {
      leads: { label: "Missed calls per month", placeholder: "75", defaultValue: 75 },
      commission: { label: "Average customer value ($)", placeholder: "1500", defaultValue: 1500 },
    },
    reactivationRate: 0.7,
    conversionRate: 0.6,
    resultLabel: "Additional monthly revenue recovered",
  },
  objections: {
    headline: "Common Questions About AI Missed Call Text Back",
    subheadline: "Real answers from business owners already using it.",
    objections: [
      {
        objection: "Won't customers know it's a bot?",
        response: "Modern AI uses natural, conversational language tailored to your brand voice. Most callers can't tell the difference—and frankly, they don't care. They wanted help, and they got it within seconds. Compare that to a voicemail nobody returns, and the choice is obvious.",
      },
      {
        objection: "What if the caller wanted a real person?",
        response: "AI seamlessly hands off to your team the moment a human is needed—either by alerting you in real time or warm-transferring the conversation. You stay in control; AI just handles the 80% of calls that are easy to qualify and book.",
      },
      {
        objection: "We already have an auto-reply on our phone",
        response: "A static \"Sorry we missed you\" text is not the same as a live AI conversation. Auto-replies don't qualify leads, answer questions, or book appointments. AI text back actually closes the loop—turning a missed call into a confirmed job on your calendar.",
      },
      {
        objection: "Will it work with our existing phone system?",
        response: "Yes. Prestyj integrates with most VoIP and business phone providers including RingCentral, OpenPhone, Twilio, Grasshopper, and traditional landlines via call forwarding. Setup typically takes under 30 minutes—no new phone numbers required.",
      },
    ],
  },
  cta: {
    headline: "Stop Losing Jobs to Missed Calls.",
    subheadline: "Every ring you don't answer is a check you don't cash. Turn on AI text back and recover revenue you didn't even know you were losing—starting today.",
    buttonText: "Book Your Demo",
    buttonHref: "/book-demo",
    footnote: "See AI text back a missed call live in under 5 seconds. No commitment required.",
  },
};
