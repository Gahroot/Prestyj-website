import type { SolutionPageContent } from "./types";

export const aiColdCalling: SolutionPageContent = {
  slug: "ai-cold-calling",
  meta: {
    title: "AI Cold Calling | 1,000 Calls Per Day Without Hiring SDRs | Prestyj",
    description: "AI voice agents that make cold calls at scale, follow your script, handle objections, and book qualified meetings on your calendar. Built for B2B sales teams, real estate, and home services ready to expand.",
    keywords: [
      "AI cold calling software",
      "AI voice agent for sales",
      "automated outbound calling",
      "AI SDR replacement",
      "B2B AI cold calling",
      "AI sales dialer",
      "real estate AI cold caller",
      "AI appointment setter",
      "outbound sales automation",
      "AI cold call script",
      "automated lead qualification",
      "AI meeting booking",
    ],
  },
  hero: {
    badge: "AI Cold Calling Solution",
    headline: "1,000 Cold Calls a Day.",
    headlineAccent: "Zero SDRs Required.",
    subheadline: "AI voice agents call your prospect lists, follow your script, handle objections in real time, and book qualified meetings directly into your reps' calendars. Scale outbound without scaling headcount.",
    stats: [
      { value: "1,000+", label: "calls per day per agent", color: "primary" },
      { value: "10x", label: "cheaper than human SDRs", color: "success" },
      { value: "24/7", label: "always-on dialing", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Cold Calling Is Broken",
    subheadline: "Outbound sales teams burn out, churn fast, and still can't hit pipeline targets.",
    points: [
      {
        icon: "DollarSign",
        title: "SDRs cost $80K+ all-in and quit in 14 months",
        description: "Between salary, commission, benefits, tools, and training, every SDR runs $80,000-$120,000 fully loaded. Then they leave just as they're getting productive—and you start over.",
        color: "destructive",
      },
      {
        icon: "PhoneMissed",
        title: "Reps only make 40-60 dials per day",
        description: "Even your best SDRs spend hours researching, leaving voicemails, and updating the CRM. With <2% connect rates, that's barely 1-2 conversations per day. Your pipeline math doesn't work.",
        color: "warning",
      },
      {
        icon: "TrendingDown",
        title: "Call quality collapses by 3pm",
        description: "Cold calling is mentally brutal. After 50 rejections, energy drops, scripts get rushed, objections go unhandled. The afternoon shift is where deals quietly die.",
        color: "primary",
      },
      {
        icon: "Clock",
        title: "Hiring and ramping takes 90+ days",
        description: "Need to scale outbound for a new market or product launch? You're looking at 3 months to recruit, onboard, and ramp a single SDR—long after your window of opportunity has closed.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "AI Voice Agents That Actually Sell",
    subheadline: "Human-sounding conversations, your script, your CRM, booked meetings—at machine scale.",
    benefits: [
      {
        icon: "Phone",
        title: "Human-Sounding Voice AI",
        description: "Natural intonation, conversational pacing, real-time interruption handling. Prospects engage in real conversations—not stilted robocall scripts. Most never realize they're talking to AI.",
      },
      {
        icon: "MessageSquare",
        title: "Dynamic Objection Handling",
        description: "\"Send me an email,\" \"I'm busy,\" \"We already use someone\"—AI handles the top 50 objections in your industry with proven responses, just like your best closer.",
      },
      {
        icon: "Calendar",
        title: "Live Calendar Booking",
        description: "When a prospect agrees to a meeting, AI books it directly into the right rep's calendar in real time, sends the invite, and triggers a confirmation SMS and email. No handoff fumbles.",
      },
      {
        icon: "RefreshCw",
        title: "Unlimited Parallel Dialing",
        description: "Run 10, 50, or 200 AI agents simultaneously. Burn through a 50,000-contact list in days, not quarters. Scale up for product launches and back down—no hiring or layoffs.",
      },
      {
        icon: "Target",
        title: "Built-In Lead Qualification",
        description: "AI runs your BANT, MEDDIC, or custom qualification framework on every call. Only sales-ready prospects hit your reps' calendars—everyone else gets nurtured automatically.",
      },
      {
        icon: "BarChart3",
        title: "Full Call Analytics & Recordings",
        description: "Every call transcribed, scored, and analyzed. See which scripts win, which objections kill deals, and which lists convert. Iterate your playbook with data, not gut feel.",
      },
    ],
  },
  calculator: {
    headline: "Outbound Pipeline Calculator",
    subheadline: "See how much pipeline AI cold calling can generate from your existing lead lists.",
    inputs: {
      leads: { label: "Prospects to call per month", placeholder: "10000", defaultValue: 10000 },
      commission: { label: "Average deal value ($)", placeholder: "12000", defaultValue: 12000 },
    },
    reactivationRate: 0.08,
    conversionRate: 0.25,
    resultLabel: "Additional monthly pipeline with AI cold calling",
  },
  objections: {
    headline: "Common Concerns About AI Cold Calling",
    subheadline: "Real answers for sales leaders evaluating AI voice agents.",
    objections: [
      {
        objection: "Prospects will hang up the moment they hear AI",
        response: "Today's voice AI is a different category from the robocalls of 5 years ago. Natural pacing, real interruption handling, and conversational tone mean most prospects engage normally. In A/B tests, AI agents often match or beat human SDRs on connect-to-meeting conversion—because they never sound tired, rushed, or annoyed.",
      },
      {
        objection: "Isn't AI cold calling illegal or against TCPA?",
        response: "AI cold calling is legal when done correctly. Prestyj enforces TCPA compliance: business-to-business calling, scrubbing against DNC lists, calling within permitted hours, proper disclosure when required, and full opt-out handling. We handle the compliance layer so your team can focus on pipeline.",
      },
      {
        objection: "AI can't have nuanced sales conversations",
        response: "AI handles structured outbound conversations—qualifying, handling top objections, and booking meetings—as well as or better than most SDRs. For complex discovery and closing, AI hands off to your human reps with full call context and notes. You get AI scale on top-of-funnel and human expertise where it matters.",
      },
      {
        objection: "We'll lose control of our brand voice",
        response: "You control the script, tone, qualifying questions, and objection responses—down to specific phrases. Every call is recorded and transcribed for review. You can update prompts in real time and roll out changes across thousands of calls instantly. More control than you have over a 12-person SDR team.",
      },
    ],
  },
  cta: {
    headline: "Ready to 10x Your Outbound Without Hiring?",
    subheadline: "Stop burning budget on SDR turnover. Launch AI voice agents that dial, qualify, and book meetings while your reps focus on closing.",
    buttonText: "Book Your Demo",
    buttonHref: "/book-demo",
    footnote: "Hear a live AI cold call in your industry. No commitment required.",
  },
};
