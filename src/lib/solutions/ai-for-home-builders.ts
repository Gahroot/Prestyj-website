import type { SolutionPageContent } from "./types";

export const aiForHomeBuilders: SolutionPageContent = {
  slug: "ai-for-home-builders",
  meta: {
    title: "AI Agents for Home Builders | Automate Sales & Construction",
    description:
      "AI agents for home builders. Automate buyer follow-up, manage construction timelines, streamline permitting, and deliver a world-class buyer experience from first click to close.",
    keywords: [
      "AI for home builders",
      "home builder automation",
      "construction AI tools",
      "new home sales AI",
      "permit tracking automation",
      "builder CRM AI",
    ],
  },
  hero: {
    badge: "AI for Home Builders",
    headline: "AI Agents for Home",
    headlineAccent: "Builders",
    subheadline:
      "From first website visit to final walkthrough, AI automates buyer engagement, construction coordination, and compliance management. Build more homes with fewer headaches and happier buyers.",
    stats: [
      { value: "$480K", label: "avg. savings from permit automation", color: "warning" },
      { value: "34%", label: "faster sales cycle", color: "success" },
      { value: "62%", label: "reduction in buyer complaints", color: "primary" },
    ],
  },
  painPoints: {
    headline: "Home Building Has Too Many Moving Parts",
    subheadline: "Every manual process in your operation is a delay, a cost overrun, or a dissatisfied buyer.",
    points: [
      {
        icon: "PhoneMissed",
        title: "New construction leads falling through cracks",
        description:
          "A couple visits your model home on Saturday, fills out an interest card, and never hears back until Tuesday. By then, they've toured three competing communities and put a deposit elsewhere. New construction buyers expect instant engagement.",
        color: "destructive",
      },
      {
        icon: "Clock",
        title: "Permit delays costing $480K+/year",
        description:
          "Every day a permit sits in review costs you $1,200–$2,500 in carrying costs, labor idle time, and delayed closings. Most builders have no systematic way to track permit status or proactively resolve issues before they become delays.",
        color: "warning",
      },
      {
        icon: "MessageSquare",
        title: "Buyer communication is inconsistent",
        description:
          "Some buyers get weekly updates; others hear nothing for a month. Sales teams are too busy with new prospects to nurture existing buyers. The result? Anxious buyers who call daily, post negative reviews, and walk away at the last minute.",
        color: "primary",
      },
      {
        icon: "Calendar",
        title: "Scheduling conflicts & subcontractor chaos",
        description:
          "The electrician shows up before framing is complete. The plumber is double-booked. The drywall crew waits three days for inspection sign-off. Scheduling conflicts cost the average builder $150K–$300K annually in rework and delays.",
        color: "warning",
      },
      {
        icon: "DollarSign",
        title: "Cost estimation errors killing margins",
        description:
          "Material costs fluctuate weekly, labor rates vary by subcontractor, and change orders pile up without proper tracking. A 5% cost overrun on a $500K home is $25,000 in lost profit—and most builders see 8–12% overruns.",
        color: "destructive",
      },
      {
        icon: "FileText",
        title: "Manual daily reporting & safety compliance",
        description:
          "Superintendents spend 1–2 hours daily on site reports, safety checklists, and photo documentation. This administrative burden takes them away from the job site where their expertise is most needed.",
        color: "primary",
      },
    ],
  },
  benefits: {
    headline: "AI-Powered Building From Blueprint to Keys",
    subheadline: "Automate sales, construction coordination, and compliance so you build better homes, faster.",
    benefits: [
      {
        icon: "Zap",
        title: "24/7 AI Lead Capture & Qualification for New Builds",
        description:
          "AI responds to website inquiries, model home visits, and referral leads instantly—day or night. It qualifies buyers by budget, timeline, preferred community, and must-have features, then books appointments directly into your sales team's calendar.",
      },
      {
        icon: "FileText",
        title: "Automated Permit Tracking & Compliance Alerts",
        description:
          "AI monitors permit applications across all your jurisdictions, tracks review status, and alerts you to delays before they impact your schedule. It also flags upcoming inspections and compliance deadlines so nothing falls through the cracks.",
      },
      {
        icon: "MessageSquare",
        title: "Proactive Buyer Communication & Milestone Updates",
        description:
          "AI sends personalized updates at every construction milestone: foundation poured, framing complete, drywall hung, final walkthrough scheduled. Buyers feel informed and confident, reducing anxiety calls by 70% and cancellation rates by 40%.",
      },
      {
        icon: "Calendar",
        title: "AI-Optimized Scheduling & Subcontractor Coordination",
        description:
          "AI coordinates trades based on actual completion status, weather forecasts, material delivery dates, and inspector availability. It reschedules automatically when delays occur and notifies all parties of changes—instantly.",
      },
      {
        icon: "Calculator",
        title: "Predictive Cost Estimation & Change Order Management",
        description:
          "AI tracks real-time material pricing, labor rates, and historical cost data to generate accurate estimates and flag potential overruns before they happen. Change orders are documented, approved, and costed automatically—no more profit leakage.",
      },
      {
        icon: "CheckCircle",
        title: "Automated Daily Reports & Safety Compliance",
        description:
          "AI generates daily site reports from superintendent notes, photos, and IoT sensor data. Safety checklists are completed, documented, and stored automatically. Your team spends less time on paperwork and more time building.",
      },
    ],
  },
  objections: {
    headline: "Builder Concerns About AI",
    subheadline: "Home builders have unique challenges. Here's how AI addresses them.",
    objections: [
      {
        objection: "Construction is too hands-on for AI.",
        response:
          "AI doesn't swing hammers or pour concrete. It handles the administrative and coordination work that bogs down your team: scheduling, permit tracking, buyer communication, and reporting. Your tradespeople and superintendents focus on what they do best—building quality homes.",
      },
      {
        objection: "Our buyers want human interaction.",
        response:
          "They do—and they get it. AI handles routine updates and initial qualification, then seamlessly hands warm buyers to your sales team. Your people spend their time on high-value interactions: design center appointments, financing discussions, and closing celebrations—not answering 'When will my house be done?' for the hundredth time.",
      },
      {
        objection: "We can't afford to experiment with AI.",
        response:
          "You can't afford not to. Permit delays alone cost the average mid-size builder $480K+ annually. Scheduling conflicts add another $150K–$300K. Buyer cancellations from poor communication cost even more. AI pays for itself by preventing a single major delay.",
      },
      {
        objection: "Our team isn't tech-savvy.",
        response:
          "Prestyj is designed for construction professionals, not software engineers. Your team uses familiar interfaces—text, email, phone—and AI handles the complexity behind the scenes. Training takes a few hours, not weeks. And our support team is always available.",
      },
    ],
  },
  calculator: {
    headline: "Calculate Your Builder ROI with AI",
    subheadline: "See how AI automation impacts your construction operation's bottom line.",
    inputs: {
      leads: {
        label: "New builds per year",
        placeholder: "e.g., 50",
        defaultValue: 50,
      },
      commission: {
        label: "Average sale price ($)",
        placeholder: "e.g., 450000",
        defaultValue: 450000,
      },
    },
    reactivationRate: 0.3,
    conversionRate: 0.06,
    resultLabel: "Additional annual revenue from AI-powered sales & operations",
  },
  cta: {
    headline: "Build Smarter with AI-Powered Automation",
    subheadline:
      "Transform your home building operation with AI that handles sales follow-up, construction coordination, and buyer communication—so you build more homes with fewer headaches.",
    buttonText: "Book a Builder Demo",
    buttonHref: "/book-demo",
    footnote: "See AI scheduling, permit tracking, and buyer communication in action.",
  },
};
