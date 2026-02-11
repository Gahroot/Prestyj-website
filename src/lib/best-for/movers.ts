import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const movers: BestForPageContent = createBestForPage({
  slug: "movers",
  niche: {
    name: "Moving Companies",
    shortName: "Moving Companies",
    description:
      "Local and long-distance moving companies seeking AI-powered lead response and booking automation",
  },
  meta: {
    title: "AI Voice Agents for Moving Companies | 24/7 Lead Response | Prestyj",
    description:
      "AI voice agents and answering service for moving companies. Respond to moving leads instantly, book estimates 24/7, and capture every time-sensitive job. Moves are urgent—first responder wins.",
    keywords: [
      "AI voice agents moving companies",
      "AI answering service movers",
      "automated lead response moving companies",
      "moving company AI receptionist",
      "AI for movers",
      "moving lead response automation",
      "moving company answering service",
    ],
  },
  hero: {
    badge: "AI for Moving Companies",
    headlineAccent: "Moving Companies",
    subheadline:
      "Moving leads are time-sensitive and urgent. Customers choose the first mover who responds. AI answers every lead instantly, qualifies the move, and books estimates—24/7/365.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Zap" as IconName,
      title: "Capture Time-Sensitive Moving Leads",
      description:
        "Moving customers need help NOW. They call multiple companies and book with whoever responds first. AI answers in under 60 seconds—you capture leads while competitors are still missing calls.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Instant Estimate Booking",
      description:
      "AI books moving estimates directly into your calendar. Captures move details: origin, destination, move size, special items, preferred dates. You show up prepared with qualified prospects ready to book.",
    },
    {
      icon: "MapPin" as IconName,
      title: "Qualify Local and Long-Distance Moves",
      description:
        "AI handles all move types: local moves, long-distance, interstate, commercial relocation. Asks the right questions to understand scope, logistics, and requirements before booking.",
    },
    {
      icon: "Filter" as IconName,
      title: "Filter Out Low-Value Inquiries",
      description:
        "AI qualifies serious prospects: move dates, household size, special items (pianos, safes, antiques), stairs/elevator access. You spend time on estimates that convert—not small jobs or curious callers.",
    },
    {
      icon: "Phone" as IconName,
      title: "Never Miss a $1K-10K Moving Job",
      description:
        "Average move is $1,000-10,000+. Commercial relocations can exceed $50,000. A single missed call is thousands in lost revenue. AI captures every lead, every time—no exceptions.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Scale During Peak Moving Season",
      description:
        "May through September brings call volume you can't staff for. AI scales to handle 100 calls simultaneously without breaking a sweat. Maximize revenue during peak season without hiring temporary staff.",
    },
  ],
  painPoints: [
    {
      problem: "Moving leads are time-sensitive and customers choose fast responders",
      solution:
        "AI answers every call in under 60 seconds. While competitors are missing calls or sending to voicemail, you're engaging the lead, qualifying the move, and booking the estimate. First mover advantage captured.",
    },
    {
      problem: "Missing after-hours and weekend leads from people planning moves",
      solution:
        "Customers research and call movers evenings and weekends when they're not working. AI is available 24/7 to capture leads, book estimates, and start the process. Your competitors are closed—you're open.",
    },
    {
      problem: "Can't answer phone while on moving jobs",
      solution:
        "Your crew is working—can't pick up phones. AI handles all calls professionally. Your team stays productive on current moves while AI fills your pipeline with future jobs.",
    },
    {
      problem: "Peak season call spikes overwhelm office staff",
      solution:
        "Peak moving season brings overwhelming call volume. AI scales instantly—10 calls or 100 calls, same fast response. No stressed receptionists, no missed opportunities, no voicemail jail.",
    },
    {
      problem: "Wasted time on unqualified estimates",
      solution:
        "AI asks the right questions before booking: move dates, origin/destination, home size, special items, access considerations. You arrive prepared and focus on serious prospects—estimate-to-close ratio improves.",
    },
    {
      problem: "Following up on missed calls and voicemails",
      solution:
        "AI eliminates missed calls entirely. Every caller gets immediate engagement. No more callback roulette, no more 'sorry for the delay' when you finally return voicemails—by then, they've booked someone else.",
    },
    {
      problem: "Difficulty distinguishing local vs long-distance leads",
      solution:
        "AI captures move specifics immediately: local move, long-distance, interstate, international. Routes inquiries appropriately and schedules estimates based on your service areas and expertise.",
    },
    {
      problem: "Commercial moving inquiries need fast, professional response",
      solution:
        "Commercial clients need speed and professionalism. AI handles commercial inquiries expertly: office size, timeline, packing services, logistics coordination. Commercial moves often worth $10K-100K+—capture them first.",
    },
    {
      problem: "Inconsistent information gathering from callers",
      solution:
        "AI captures consistent details every time: move dates, locations, home size, special items, access issues, contact info. Better information means accurate estimates and fewer surprises on move day.",
    },
    {
      problem: "Expensive answering service with poor results",
      solution:
        "Generic answering services can't discuss moving specifics or qualify leads properly. AI understands your services, qualifies prospects, and books estimates effectively—at a fraction of the cost.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI", "Traditional Approach"],
    rows: [
      {
        feature: "Lead Response Time",
        prestyj: "Under 60 seconds, 24/7",
        others: "Hours to days (if at all)",
      },
      {
        feature: "Booking Rate",
        prestyj: "Higher (first responder wins)",
        others: "Lower (slow response loses jobs)",
      },
      {
        feature: "Estimate Scheduling",
        prestyj: "Instant, automated booking",
        others: "Phone tag and delays",
      },
      {
        feature: "Lead Qualification",
        prestyj: "AI qualifies before you drive",
        others: "Show up and find out",
      },
      {
        feature: "After-Hours Coverage",
        prestyj: "24/7/365",
        others: "Voicemail or missed calls",
      },
      {
        feature: "Peak Season Scalability",
        prestyj: "Unlimited capacity",
        others: "Overwhelmed, missed calls",
      },
      {
        feature: "Move Type Qualification",
        prestyj: "Local, long-distance, commercial",
        others: "Depends on who answers",
      },
      {
        feature: "Annual Cost",
        prestyj: "Fraction of staffing cost",
        others: "$35,000-50,000+ for receptionist",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "Can AI handle moving-specific questions?",
      answer:
        "AI is configured for moving companies: local moves, long-distance, commercial relocations, packing services, storage options. It gathers move details and qualifies leads—technical discussions happen during your estimate.",
    },
    {
      question: "How does AI book moving estimates?",
      answer:
        "AI checks your calendar in real-time and books estimates based on your availability. Captures origin, destination, move size, special items, preferred dates. You show up prepared with qualified prospects.",
    },
    {
      question: "Can AI handle commercial moving inquiries?",
      answer:
        "Yes. AI handles commercial moves expertly: office size, employee count, packing services, furniture disassembly/assembly, timeline requirements, after-hours options. Commercial moves are high-value—AI ensures you capture them.",
    },
    {
      question: "What about long-distance vs local move qualification?",
      answer:
        "AI distinguishes move types immediately and asks appropriate questions. Local moves: logistics, access, parking. Long-distance: delivery timeline, packing needs, storage. Routes to appropriate estimators based on your expertise.",
    },
    {
      question: "How do moving customers react to AI?",
      answer:
        "Moving customers are stressed and need fast, helpful responses. AI provides instant engagement and captures their information quickly. Most appreciate immediate response and professional booking—more than waiting hours for callbacks.",
    },
    {
      question: "Can AI help with move-day coordination and questions?",
      answer:
        "AI can handle move-day inquiries: status updates, ETA questions, schedule changes. Your crew focuses on moving while AI handles customer communication. Customers get answers without disrupting your operations.",
    },
    {
      question: "Does it integrate with my scheduling software?",
      answer:
        "Prestyj integrates with major scheduling platforms. Estimate bookings sync directly to your calendar—no manual data entry, no double-booking, no confusion.",
    },
    {
      question: "What if a customer wants to speak to a person?",
      answer:
        "AI seamlessly transfers calls when needed. For most inquiries—information gathering, booking estimates, basic questions—AI handles it efficiently. You jump in for complex logistics and relationship building.",
    },
    {
      question: "How does this help during peak moving season?",
      answer:
        "Peak season brings more calls than any team can handle alone. AI scales instantly—every caller gets fast response, every lead gets captured. You maximize revenue during your busiest months without overstaffing.",
    },
  ],
  cta: {
    headline: "Capture Every Moving Lead Instantly",
    subheadline:
      "Moving customers choose the first responder. AI answers every call in under 60 seconds, qualifies the move, and books estimates 24/7. Win more jobs without adding staff.",
    buttonText: "Book Your Demo",
    footnote: "Works with local, long-distance, and commercial moving companies.",
  },
});
