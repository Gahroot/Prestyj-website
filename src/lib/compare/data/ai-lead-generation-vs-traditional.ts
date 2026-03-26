import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

export const aiLeadGenVsTraditionalData: ComparePageData = createComparePage({
  slug: "ai-lead-generation-vs-traditional",
  competitorName: "Traditional Lead Generation",
  hero: {
    badge: "Comparison Guide",
    title: "AI Lead Generation vs Traditional Methods:",
    titleAccent: "The Real Comparison",
    subtitle:
      "AI-powered lead generation responds 10x faster, costs less per lead, and never sleeps. See how modern AI compares to manual lead handling methods.",
    description: "",
    keyStats: [
      {
        value: "<60s",
        label: "AI response time",
      },
      {
        value: "24/7",
        label: "AI availability",
      },
      {
        value: "10x",
        label: "Faster qualification",
      },
      {
        value: "78%",
        label: "Choose first responder",
      },
    ],
  },
  pricing: {
    prestyj: {
      price: "Custom pricing",
      priceSubtext: "Pay for results",
      features: [
        { text: "Under 60 second response time", included: true },
        { text: "24/7/365 availability", included: true },
        { text: "Lower cost per qualified lead", included: true },
        { text: "Unlimited lead capacity", included: true },
        { text: "Instant scalability", included: true },
      ],
    },
    competitor: {
      price: "High",
      priceSubtext: "Labor + overhead costs",
      features: [
        { text: "Hours to days response time", included: false },
        { text: "Business hours only", included: false },
        { text: "Higher cost per qualified lead", included: false },
        { text: "Limited by staff capacity", included: false },
        { text: "Requires hiring to scale", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Response Time",
      prestyj: "Under 60 seconds",
      competitor: "Hours to days",
      note: "78% of buyers work with the first responder",
    },
    {
      feature: "Availability",
      prestyj: "24/7/365",
      competitor: "Business hours",
      note: "Most leads come in after hours",
    },
    {
      feature: "Cost Per Lead",
      prestyj: "Lower",
      competitor: "Higher",
      note: "No salaries, benefits, or overhead",
    },
    {
      feature: "Qualification Rate",
      prestyj: "Higher",
      competitor: "Lower",
      note: "Consistent qualification criteria",
    },
    {
      feature: "Scalability",
      prestyj: "Unlimited",
      competitor: "Limited by staff",
    },
    {
      feature: "Consistency",
      prestyj: "100% consistent",
      competitor: "Varies by person",
      note: "AI never has a bad day",
    },
    {
      feature: "Training Required",
      prestyj: "None - instant deployment",
      competitor: "Weeks to months",
    },
    {
      feature: "Follow-Up",
      prestyj: "Automated & persistent",
      competitor: "Manual & inconsistent",
      note: "82% of leads never receive follow-up",
    },
    {
      feature: "Lead Capacity",
      prestyj: "Unlimited simultaneous leads",
      competitor: "Limited by staff count",
    },
  ],
  whySwitch: {
    title: "When Traditional Methods Still Work",
    description:
      "There are scenarios where traditional lead generation approaches may still be the right choice.",
    reasons: [
      {
        icon: "Users",
        title: "Low Lead Volume",
        description:
          "If you receive fewer than 10 leads per month, manual handling may be manageable without AI assistance.",
      },
      {
        icon: "Heart",
        title: "High-Touch Relationships",
        description:
          "Luxury markets or enterprise clients who expect personalized human interaction from the first contact.",
      },
      {
        icon: "Brain",
        title: "Complex Consultative Sales",
        description:
          "Technical products requiring deep expertise and lengthy discovery calls that AI cannot yet handle.",
      },
      {
        icon: "Building2",
        title: "Established Processes",
        description:
          "Organizations with highly optimized manual workflows that would be disrupted by automation.",
      },
    ],
  },
  relatedResources: [
    {
      title: "Speed to Lead Guide",
      description: "Why 5 minutes is already too late for lead response",
      href: "/blog/speed-to-lead",
      linkText: "Read article",
    },
    {
      title: "Prestyj vs Human ISA",
      description: "Compare AI to hiring dedicated sales staff",
      href: "/compare/prestyj-vs-isa",
      linkText: "Read comparison",
    },
    {
      title: "See Real Results",
      description: "Case studies from businesses using AI lead generation",
      href: "/results",
      linkText: "View results",
    },
  ],
  cta: {
    title: "Ready to 10x Your Lead Response?",
    description:
      "See how AI lead generation can transform your response times and conversion rates. Book a free demo to see it in action with your leads.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer: "Free demo. No credit card required.",
  },
});

// Pain points of traditional lead generation methods
export const traditionalMethodPainPoints = [
  {
    title: "Slow Response Times",
    description:
      "Manual lead handling means hours or days before first contact. Studies show 78% of buyers work with the first responder - if you're not first, you've likely lost the lead.",
  },
  {
    title: "Limited Business Hours",
    description:
      "Most leads come in during evenings and weekends when your team is off. Without 24/7 coverage, you're missing the majority of high-intent inquiries.",
  },
  {
    title: "Inconsistent Follow-Up",
    description:
      "82% of leads never receive follow-up. Human reps forget, get busy, or prioritize the 'hot' leads while letting others go cold.",
  },
  {
    title: "High Labor Costs",
    description:
      "Salaries, benefits, training, turnover - the true cost of manual lead handling is often 2-3x the base salary when you factor in all expenses.",
  },
  {
    title: "Scalability Constraints",
    description:
      "Want to handle more leads? You need to hire, train, and manage more people. Growth is limited by your ability to recruit and retain staff.",
  },
  {
    title: "Quality Variance",
    description:
      "Every rep has good days and bad days. Qualification quality varies based on mood, workload, experience, and countless other factors.",
  },
];

// Benefits of AI-powered lead generation
export const aiLeadGenBenefits = [
  {
    title: "Instant Response",
    description:
      "AI responds in under 60 seconds, 24/7/365. Be the first to engage every lead, regardless of when they reach out.",
  },
  {
    title: "Always Available",
    description:
      "Nights, weekends, holidays - AI never takes time off. Capture and qualify leads whenever they're ready to engage.",
  },
  {
    title: "Consistent Quality",
    description:
      "Every lead gets the same high-quality qualification process. No variance based on mood, time of day, or workload.",
  },
  {
    title: "Lower Cost Per Lead",
    description:
      "No salaries, no benefits, no turnover costs. Pay for results, not for hours worked. Lower your cost per qualified lead significantly.",
  },
  {
    title: "Unlimited Scalability",
    description:
      "Handle 10 leads or 10,000 leads with the same system. Scale your marketing without worrying about overwhelming your team.",
  },
  {
    title: "Persistent Follow-Up",
    description:
      "AI never forgets to follow up. Automated nurture sequences ensure no lead falls through the cracks, increasing conversion rates.",
  },
];

// FAQ about AI vs traditional lead generation
export const aiVsTraditionalFAQ = [
  {
    question: "How much faster is AI lead response compared to traditional methods?",
    answer:
      "AI responds in under 60 seconds, while traditional methods typically take hours or even days. This is critical because 78% of buyers work with the first responder - being first can double or triple your conversion rates.",
  },
  {
    question: "Can AI handle complex lead qualification questions?",
    answer:
      "Modern AI lead generation systems handle 80-90% of common qualification questions. For complex scenarios, AI can gather initial information and schedule a handoff to a human expert for detailed discussions.",
  },
  {
    question: "What does AI lead generation cost compared to hiring staff?",
    answer:
      "AI lead generation typically costs 50-70% less than equivalent human staffing when you factor in salary, benefits, training, and turnover. You also get 24/7 coverage that would require multiple shifts with human staff.",
  },
  {
    question: "Will leads know they're talking to AI?",
    answer:
      "Modern AI conversational systems are highly natural. Many leads don't realize they're chatting with AI. The key is transparency when appropriate and seamless handoff to humans for complex needs.",
  },
  {
    question: "What happens to my existing team if I implement AI?",
    answer:
      "AI handles initial response and qualification, freeing your team to focus on high-value activities: closing deals, building relationships, and handling complex scenarios. Most teams become more productive, not smaller.",
  },
  {
    question: "How quickly can I implement AI lead generation?",
    answer:
      "Unlike hiring which takes weeks or months, AI lead generation can be deployed in days. Most businesses are fully operational within 1-2 weeks, including customization and integration with existing systems.",
  },
];

export const aiLeadGenVsTraditionalMetadata: CompareMetadata = {
  slug: "ai-lead-generation-vs-traditional",
  competitorName: "Traditional Lead Generation",
  title: "AI Lead Generation vs Traditional Methods | 10x Faster Response | Prestyj",
  description:
    "Compare AI-powered lead generation vs traditional methods. AI responds in under 60 seconds, costs less per lead, and scales instantly. See response times, costs, availability, and qualification rates compared.",
  keywords: [
    "AI lead generation vs traditional",
    "AI vs manual lead generation",
    "automated lead response",
    "AI lead qualification",
    "lead generation automation",
    "traditional vs AI sales",
    "AI sales agent comparison",
    "lead response time statistics",
    "cost per lead comparison",
    "24/7 lead response",
  ],
};
