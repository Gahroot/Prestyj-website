import type { SolutionPageContent } from "./types";

export const aiForRealEstateWholesalers: SolutionPageContent = {
  slug: "ai-for-real-estate-wholesalers",
  meta: {
    title: "AI Agents for Real Estate Wholesalers | Automate Your Pipeline",
    description:
      "Discover how AI agents help real estate wholesalers automate skip tracing, lead qualification, deal analysis, and disposition. Close more wholesale deals with less manual work.",
    keywords: [
      "AI for real estate wholesalers",
      "wholesaling automation AI",
      "AI skip tracing",
      "wholesale deal analysis AI",
      "cash buyer matching AI",
      "real estate wholesaling pipeline",
    ],
  },
  hero: {
    badge: "AI for Wholesalers",
    headline: "AI Agents for Real Estate",
    headlineAccent: "Wholesalers",
    subheadline:
      "Automate your entire wholesale pipeline—from distressed lead capture to cash buyer disposition. AI handles skip tracing, qualification, deal analysis, and buyer matching so you close more deals without working 80-hour weeks.",
    stats: [
      { value: "73%", label: "faster lead-to-contract cycle", color: "success" },
      { value: "4.2x", label: "more deals per month", color: "warning" },
      { value: "18 hrs", label: "saved per deal on admin", color: "primary" },
    ],
  },
  painPoints: {
    headline: "Your Wholesale Pipeline Is Leaking Deals",
    subheadline: "Every manual step in wholesaling is a bottleneck that costs you money.",
    points: [
      {
        icon: "Clock",
        title: "Slow lead follow-up losing deals",
        description:
          "Distressed sellers call 3–5 wholesalers before choosing one. If your follow-up takes hours—or happens during business hours only—you're already third or fourth in line. Speed to the seller is everything in wholesaling.",
        color: "destructive",
      },
      {
        icon: "Search",
        title: "Manual skip tracing wasted hours",
        description:
          "You spend 2–4 hours per property hunting down owner contact info across county records, whitepages, and subscription databases. That's 20+ hours a week on research instead of talking to sellers and closing deals.",
        color: "warning",
      },
      {
        icon: "Database",
        title: "CRM data entry eating selling time",
        description:
          "Every lead, every call note, every property detail gets typed into your CRM manually. Reps spend 30–40% of their day on data entry instead of building rapport with motivated sellers and negotiating contracts.",
        color: "primary",
      },
      {
        icon: "Calculator",
        title: "Deal analysis taking too long",
        description:
          "Running comps, estimating rehab costs, calculating ARV and MAO for every lead takes 30–60 minutes per deal. You either rush the numbers and risk overpaying, or you analyze thoroughly and miss the window on hot properties.",
        color: "warning",
      },
      {
        icon: "Users",
        title: "Disposition & cash buyer matching is manual",
        description:
          "You blast your buyers list with every deal, hoping someone bites. Or you manually text your top 10 buyers one by one. Neither approach maximizes your assignment fee, and both waste time you could spend finding the next deal.",
        color: "destructive",
      },
      {
        icon: "Layers",
        title: "Juggling too many disconnected tools",
        description:
          "Skip tracing in one app, CRM in another, deal analysis in a spreadsheet, buyer lists in a Google Sheet, and communication in yet another tool. Data doesn't flow between them, so you re-enter the same information five times.",
        color: "primary",
      },
    ],
  },
  benefits: {
    headline: "AI-Powered Wholesaling From Lead to Close",
    subheadline: "One intelligent system that automates every step of your wholesale pipeline.",
    benefits: [
      {
        icon: "Zap",
        title: "24/7 AI Lead Follow-Up & Qualification",
        description:
          "AI calls, texts, and emails every distressed seller lead within 60 seconds—24/7. It pre-qualifies motivation, timeline, property condition, and price expectations before you ever pick up the phone. You only talk to sellers who are ready to move.",
      },
      {
        icon: "Search",
        title: "Automated Skip Tracing & Owner Identification",
        description:
          "AI instantly cross-references county records, property databases, and public records to find current owner contact information, mailing addresses, phone numbers, and email addresses. What used to take hours now happens in seconds.",
      },
      {
        icon: "Calculator",
        title: "Instant Deal Analysis (ARV, Rehab, MAO)",
        description:
          "AI pulls comparable sales, estimates rehab costs based on property condition and square footage, and calculates your Maximum Allowable Offer in under a minute. Every deal arrives in your pipeline with a full financial analysis attached.",
      },
      {
        icon: "Target",
        title: "Smart Cash Buyer Matching for Dispositions",
        description:
          "AI analyzes your buyer list by location, price range, property type, and purchase history. It automatically sends each deal to the 5–10 buyers most likely to close—maximizing your assignment fee while minimizing time on market.",
      },
      {
        icon: "Database",
        title: "Post-Call CRM Auto-Updates",
        description:
          "Every conversation, qualification detail, property note, and deal status syncs directly to your CRM automatically. Your pipeline stays current without a single keystroke, and your team always knows the status of every lead.",
      },
      {
        icon: "Workflow",
        title: "Unified Wholesaling Pipeline Automation",
        description:
          "One platform handles lead capture, skip tracing, qualification, deal analysis, contract generation, and buyer matching. No more switching between six tools. Your entire wholesale operation runs on a single, intelligent system.",
      },
    ],
  },
  objections: {
    headline: "Wholesaler Concerns About AI",
    subheadline: "Here's what experienced wholesalers ask before adopting AI—and why it works.",
    objections: [
      {
        objection: "AI sounds too complicated for my wholesaling business.",
        response:
          "Prestyj is designed for wholesalers, not engineers. Setup takes 5–7 days, and our team trains the AI on your specific market, deal criteria, and buyer list. You don't write code—you just close more deals. Most wholesalers are fully operational within a week.",
      },
      {
        objection: "My current system works fine.",
        response:
          "If you're closing every deal you touch and have unlimited time, your system works. But most wholesalers leave 60–70% of potential deals on the table due to slow follow-up, incomplete skip tracing, and manual processes. AI doesn't replace what works—it amplifies it.",
      },
      {
        objection: "AI can't understand motivated sellers like I can.",
        response:
          "AI doesn't replace your negotiation skills—it gets you to the negotiation faster and better prepared. AI handles the time-consuming qualification and research, then hands you a fully qualified seller with all the data you need to close. You still bring the human touch that seals the deal.",
      },
      {
        objection: "What about compliance with real estate regulations?",
        response:
          "AI is configured to comply with state-specific wholesaling laws, disclosure requirements, and Do Not Call regulations. All calls are recorded and stored per legal requirements. We work with your compliance team to ensure every interaction meets regulatory standards.",
      },
    ],
  },
  calculator: {
    headline: "Calculate Your Wholesale Revenue with AI",
    subheadline: "See how automating your pipeline impacts your bottom line.",
    inputs: {
      leads: {
        label: "Leads per month",
        placeholder: "e.g., 150",
        defaultValue: 150,
      },
      commission: {
        label: "Average assignment fee ($)",
        placeholder: "e.g., 15000",
        defaultValue: 15000,
      },
    },
    reactivationRate: 0.35,
    conversionRate: 0.05,
    resultLabel: "Additional annual revenue from AI-powered wholesaling",
  },
  cta: {
    headline: "Ready to Automate Your Wholesaling Pipeline?",
    subheadline:
      "Join wholesalers who are replacing manual grunt work with AI-powered pipeline automation. Close more deals, work fewer hours, and scale your operation without adding headcount.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote:
      "See AI skip tracing, deal analysis, and buyer matching in action. No commitment required.",
  },
};
