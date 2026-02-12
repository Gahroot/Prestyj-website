import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const restaurants: BestForPageContent = createBestForPage({
  slug: "restaurants",
  niche: {
    name: "Restaurants",
    shortName: "Restaurants",
    description: "Restaurants looking for AI-powered phone answering, order taking, and reservation management",
  },
  meta: {
    title: "AI Phone Answering for Restaurants | Never Miss an Order | Prestyj",
    description:
      "AI voice agents for restaurants handle takeout orders, reservations, and inquiries 24/7. Capture orders after hours, reduce hold times, and integrate with your POS. Stop losing customers to busy signals.",
    keywords: [
      "AI phone answering for restaurants",
      "restaurant AI receptionist",
      "automated takeout orders",
      "restaurant reservation system",
      "AI for restaurants",
      "restaurant answering service",
      "AI order taking",
      "restaurant voice AI",
      "automated restaurant phone system",
      "restaurant call handling",
    ],
  },
  hero: {
    badge: "Restaurant AI",
    headlineAccent: "Restaurants",
    subheadline:
      "Every missed call is a lost order. AI answers phones 24/7, takes takeout orders, books reservations, and handles menu questions—so your staff can focus on preparing great food.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "PhoneCall" as IconName,
      title: "Never Miss Another Order",
      description:
        "When customers call and get a busy signal or voicemail, they call your competitor. AI answers every call instantly, taking takeout orders and reservations 24/7.",
    },
    {
      icon: "Clock" as IconName,
      title: "Capture After-Hours Orders",
      description:
        "30% of calls come outside business hours. AI takes orders for tomorrow's lunch, books dinner reservations, and answers menu questions while you're closed.",
    },
    {
      icon: "Users" as IconName,
      title: "Reduce Hold Times & Abandoned Calls",
      description:
        "During rush hours, phones ring off the hook. AI handles multiple calls simultaneously, so every customer gets immediate service instead of hanging up.",
    },
    {
      icon: "Zap" as IconName,
      title: "Integrates With Your POS",
      description:
        "Orders flow directly into your existing POS system. No re-entry, no errors, and tickets print in the kitchen just like any other order.",
    },
  ],
  painPoints: [
    {
      problem: "Missed calls during rush hours = lost revenue",
      solution:
        "AI answers every call immediately, no matter how busy you are. Takeout orders flow into the kitchen while customers get instant confirmation.",
    },
    {
      problem: "After-hours callers go to competitors",
      solution:
        "Customers call late to order for tomorrow. AI captures these orders while you're closed, ensuring your restaurant gets the business—not the place down the street.",
    },
    {
      problem: "Staff tied up on phone instead of serving guests",
      solution:
        "Your hosts and servers focus on in-house guests. AI handles all takeout orders, menu questions, and reservation inquiries without tying up your team.",
    },
    {
      problem: "Inaccurate orders from rushed phone conversations",
      solution:
        "AI confirms each item, asks about modifications clearly, and repeats orders back. Orders arrive in your POS exactly as the customer requested.",
    },
    {
      problem: "No time to answer menu questions",
      solution:
        "Customers call to ask about ingredients, gluten-free options, and daily specials. AI answers these questions instantly, freeing your staff from endless inquiries.",
    },
    {
      problem: "Reservation management during peak hours",
      solution:
        "AI books tables, checks availability, confirms party size, and sends reservation confirmations—all while your hosts greet incoming guests.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI", "Traditional Approach"],
    rows: [
      {
        feature: "Missed Calls",
        prestyj: "Zero (answers every call)",
        others: "20-40% during peak hours",
      },
      {
        feature: "After-Hours Ordering",
        prestyj: "24/7 order capture",
        others: "Voicemail (no orders)",
      },
      {
        feature: "Order Accuracy",
        prestyj: "AI-verified, confirmed",
        others: "Human error, rushed entries",
      },
      {
        feature: "Simultaneous Call Capacity",
        prestyj: "Unlimited",
        others: "1-2 phone lines",
      },
      {
        feature: "POS Integration",
        prestyj: "Direct to kitchen tickets",
        others: "Manual re-entry required",
      },
      {
        feature: "Menu Knowledge",
        prestyj: "Instant, accurate, updated",
        others: "Depends on staff training",
      },
      {
        feature: "Cost per Order Taken",
        prestyj: "Fraction of human cost",
        others: "Staff time + opportunity cost",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does AI take food orders accurately?",
      answer:
        "AI guides customers through your menu systematically, confirms each item, asks about modifications, and repeats the order back. Orders are sent to your POS system with all details—special instructions, dietary requirements, and quantities included. Accuracy improves because AI isn't rushed or distracted.",
    },
    {
      question: "Does this integrate with my POS system?",
      answer:
        "Prestyj integrates with major restaurant POS systems including Toast, Square, Clover, Micros, and Revel. Orders appear in your system like any other order, printing kitchen tickets and tracking sales automatically.",
    },
    {
      question: "What about complex orders or special requests?",
      answer:
        "AI is trained to handle modifications, substitutions, combo deals, and special instructions. For truly unusual requests, AI can flag the order for staff follow-up or seamlessly transfer to a human if needed.",
    },
    {
      question: "Can customers still speak to a human if they want?",
      answer:
        "Yes. Customers can request to speak with a staff member at any time, and AI seamlessly transfers the call with full context. For routine orders and inquiries, most customers prefer the speed of instant service.",
    },
    {
      question: "How does after-hours ordering work?",
      answer:
        "AI takes orders for future time slots—tomorrow's lunch, dinner reservations, weekend catering. Orders are timestamped and queued for your specified prep time. You arrive to a full order queue without taking a single call.",
    },
    {
      question: "What if we change our menu or prices?",
      answer:
        "Menu updates are simple and take effect immediately. AI always has current pricing, items, and availability—no training required for your staff.",
    },
    {
      question: "Can AI handle multiple restaurant locations?",
      answer:
        "Yes. AI can route calls to the correct location, handle location-specific menus and pricing, and transfer between locations when needed. Multi-location restaurants get unified call handling with local customization.",
    },
    {
      question: "What about reservation cancellations and modifications?",
      answer:
        "AI handles rescheduling requests, checks availability for new times, confirms changes, and updates your reservation system automatically. No-shows are reduced with automated confirmation calls and texts.",
    },
  ],
  cta: {
    headline: "Stop Losing Orders to Busy Signals",
    subheadline:
      "Every missed call is $15-$100+ in lost revenue. Capture every order, reduce hold times, and give your staff time to focus on guests. Book a demo to see AI handling restaurant calls.",
    buttonText: "Book Your Demo",
    footnote: "Works with all major POS systems. No credit card required.",
  },
});
