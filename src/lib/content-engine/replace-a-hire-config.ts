import {
  Ban,
  BarChart3,
  Bot,
  Building2,
  Calculator,
  Clock,
  Cog,
  CreditCard,
  DollarSign,
  Facebook,
  Instagram,
  Linkedin,
  Play,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Target,
  Timer,
  Twitter,
  Users,
  Volume2,
  Youtube,
  Zap,
} from "lucide-react";

import type { ContentEnginePageConfig } from "./page-config";

export const replaceAHireConfig: ContentEnginePageConfig = {
  hero: {
    badge: {
      icon: Bot,
      text: "AI Content Department \u00B7 From $1,997/mo",
    },
    headline: "AI Content Department",
    headlineAccent: "\u2014 your AI agent for social media.",
    subhead:
      "One of the AI agents in Prestyj\u2019s marketing & sales suite. A full content department \u2014 strategists, designers, copywriters, schedulers \u2014 for less than one junior hire\u2019s salary. 7 platforms, 1,000+ posts/month, live in 24 hours.",
    subheadAccent: "for less than one junior hire\u2019s salary.",
    ctas: [
      {
        label: "See the Math",
        href: "#comparison",
        variant: "default",
        eventName: "ReplaceAHireLeadIntent",
        eventLabel: "hero-see-math",
      },
      {
        label: "Book a Demo",
        href: "/book-demo",
        variant: "outline",
        eventName: "ReplaceAHireLeadIntent",
        eventLabel: "hero-book-demo",
      },
    ],
    videoSrc: "/videos/dfy-vsl.mp4",
    videoPoster: "/images/content-engine/vsl-poster.jpg",
    videoAriaLabel: "AI content department replacing a junior social media hire \u2014 demo video",
    platforms: ["Instagram", "Facebook", "TikTok", "YouTube", "LinkedIn", "Threads", "X"],
  },

  problem: {
    headline: "The Hiring Math Doesn\u2019t Add Up.",
    subhead:
      "One junior social media hire costs $55K\u2013$75K/year loaded. And you still only get 30 posts/month on 2 platforms.",
    pains: [
      {
        title: "Salary + benefits + taxes = $55K\u2013$75K/year.",
        detail:
          "A $40K junior salary becomes $55K\u2013$75K after employer taxes, health insurance, PTO, and equipment. That\u2019s $4,500\u2013$6,250/month for one person who can\u2019t cover 7 platforms.",
      },
      {
        title: "They quit in 12\u201318 months. You start over.",
        detail:
          "Social media manager turnover is 40%+ in the first two years. Every departure costs 3\u20136 months of productivity lost to recruiting, onboarding, and ramp-up.",
      },
      {
        title: "One hire = 30 posts/month on 2 platforms.",
        detail:
          "Even a great social hire tops out at ~1 post/day on 2\u20133 accounts. You need 270\u20132,700 posts/month across 7 platforms. One human can\u2019t do that.",
      },
      {
        title: "Sick days, PTO, creative blocks \u2014 your feed goes dark.",
        detail:
          "Your hire calls in sick and your content calendar collapses. Every gap means lost reach, lost engagement, lost momentum that takes weeks to rebuild.",
      },
    ],
  },

  solution: {
    headline: "An Entire Content Department. One Subscription.",
    subhead:
      "Prestyj replaces a team of strategists, designers, copywriters, and schedulers \u2014 for a fraction of one hire\u2019s loaded cost.",
    pillars: [
      {
        icon: Bot,
        title: "Department-Level Output",
        description:
          "Strategy, creative, copy, design, scheduling, and publishing \u2014 all handled. You get what a 5-person content team would produce, without the headcount.",
      },
      {
        icon: BarChart3,
        title: "7 Platforms, 1,000+ Posts/Month",
        description:
          "Instagram, Facebook, TikTok, YouTube, LinkedIn, Threads, and X \u2014 all posting daily. Multi-account swarm that no single hire could ever manage.",
      },
      {
        icon: Target,
        title: "No Turnover, No Ramp-Up, No Training",
        description:
          "Your AI department doesn\u2019t quit, doesn\u2019t need onboarding, and doesn\u2019t take PTO. Consistent output from day one, every day.",
      },
    ],
  },

  howItWorks: {
    headline: "From Payment to Full Content Department in 24 Hours.",
    subhead: "Skip the job posting, interviews, and 3-month ramp-up.",
    steps: [
      {
        number: "01",
        icon: CreditCard,
        title: "Pick Your Plan & Connect Accounts",
        description:
          "Choose your volume tier. Grant access to your social accounts. The engine starts building immediately.",
        highlight: "Day 0",
      },
      {
        number: "02",
        icon: Cog,
        title: "AI Builds Your Content Engine",
        description:
          "Brand kit, voice, prompt stack, platform connections \u2014 all wired up and producing content in 24 hours.",
        highlight: "Live in 24h or setup fee refunded",
      },
      {
        number: "03",
        icon: Rocket,
        title: "Content Starts Shipping at Scale",
        description:
          "Multiple accounts, 7 platforms, every single day. 30\u201390+ posts per day from day one \u2014 no human could match this.",
        highlight: "Day 1 onward",
      },
      {
        number: "04",
        icon: RefreshCw,
        title: "Monthly Refresh + Optimization",
        description:
          "Hooks rotate. Avatars evolve. Volume stays consistent while content stays fresh. Your department never gets stale.",
        highlight: "Always optimizing",
      },
    ],
  },

  proofBar: {
    stats: [
      { value: "1,000+", label: "Posts shipped per month" },
      { value: "$2K\u2013$5K", label: "vs $55K\u2013$75K/yr for one hire" },
      { value: "7", label: "Platforms covered simultaneously" },
      { value: "24h", label: "From payment to first post" },
    ],
  },

  proofScreenshots: {
    headline: "The AI Department \u2014 Running Right Now.",
    subhead: "The same content engine shipping for Prestyj, every single day. No humans needed.",
    shots: [
      {
        src: "/images/content-engine/proof-1.webp",
        fallback: "/images/content-engine/proof-1.png",
        alt: "Prestyj brand Instagram \u2014 posting daily at volume via AI content department",
        caption: "Our brand IG \u2014 fully automated, posting daily.",
      },
      {
        src: "/images/content-engine/proof-2.webp",
        fallback: "/images/content-engine/proof-2.png",
        alt: "Founder personal LinkedIn powered by the same AI content department",
        caption: "Founder personal LinkedIn \u2014 same engine.",
      },
      {
        src: "/images/content-engine/proof-3.webp",
        fallback: "/images/content-engine/proof-3.png",
        alt: "Multi-platform content queue with 30+ posts per day from the AI department",
        caption: "Multi-platform queue \u2014 30+ posts/day.",
      },
    ],
  },

  liveAccounts: {
    headline: "See Us Posting",
    headlineAccent: "at Scale",
    subhead:
      "These aren\u2019t mockups. Every account is live, posting daily \u2014 powered by the same AI department you\u2019ll get.",
    accounts: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/prestyj_/",
        icon: Instagram,
        handle: "@prestyj_",
        description: "Daily reels, carousels & behind-the-scenes.",
      },
      {
        platform: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61582824703610",
        icon: Facebook,
        handle: "Prestyj",
        description: "Long-form posts & community updates.",
      },
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@prestyj_",
        icon: Youtube,
        handle: "@prestyj_",
        description: "Short-form hooks & viral tests.",
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/@prestyj_",
        icon: Youtube,
        handle: "@prestyj_",
        description: "Tutorials, breakdowns & case studies.",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/prestyj/",
        icon: Linkedin,
        handle: "Prestyj",
        description: "B2B thought leadership & product updates.",
      },
      {
        platform: "Threads",
        url: "https://www.threads.net/@prestyj_",
        icon: Twitter,
        handle: "@prestyj_",
        description: "Conversational posts & engagement.",
      },
      {
        platform: "X",
        url: "https://x.com/prestyj_",
        icon: Twitter,
        handle: "@prestyj_",
        description: "Hot takes, threads & real-time updates.",
      },
    ],
  },

  liveFeed: {
    badgeIcon: Instagram,
    badgeText: "Live Feed",
    headline: "Fresh Off the",
    headlineAccent: "AI Department",
    subhead:
      "Real posts, real engagement. Here\u2019s what the AI content department published this week across Instagram and TikTok.",
    instagramPosts: [
      {
        embedUrl: "https://www.instagram.com/p/DIMpFIhymQC/embed/",
        label: "Instagram Post 1",
      },
      {
        embedUrl: "https://www.instagram.com/p/DII0Tz1yulB/embed/",
        label: "Instagram Post 2",
      },
      {
        embedUrl: "https://www.instagram.com/p/DH_3aVCyLBn/embed/",
        label: "Instagram Post 3",
      },
      {
        embedUrl: "https://www.instagram.com/p/DH0t9EySYgD/embed/",
        label: "Instagram Post 4",
      },
    ],
    instagramHandle: "@prestyj_",
    tiktokPosts: [
      {
        videoId: "7484649258628563240",
        url: "https://www.tiktok.com/@prestyj_/video/7484649258628563240",
        caption: "Prestyj TikTok 1",
      },
      {
        videoId: "7482870044902828832",
        url: "https://www.tiktok.com/@prestyj_/video/7482870044902828832",
        caption: "Prestyj TikTok 2",
      },
    ],
    tiktokHandle: "@prestyj_",
  },

  comparison: {
    headline: "Cost-Per-Hire vs. Cost-Per-Engine",
    subhead: "One junior hire costs more and does less. The math speaks for itself.",
    rows: [
      {
        feature: "Annual cost (loaded)",
        prestyj: "$24K\u2013$60K",
        agency: "$60K\u2013$180K",
        freelancer: "$24K\u2013$96K",
        inHouse: "$55K\u2013$150K+",
      },
      {
        feature: "Posts per month",
        prestyj: "270\u20132,700",
        agency: "30\u201360",
        freelancer: "20\u201340",
        inHouse: "60\u2013120",
      },
      {
        feature: "Platforms covered",
        prestyj: "Up to 7",
        agency: "2\u20133",
        freelancer: "1\u20132",
        inHouse: "2\u20133",
      },
      {
        feature: "Accounts managed",
        prestyj: "Up to 3+",
        agency: "1",
        freelancer: "1",
        inHouse: "1\u20132",
      },
      {
        feature: "Sick days / PTO coverage",
        prestyj: true,
        agency: "sometimes",
        freelancer: false,
        inHouse: false,
      },
      {
        feature: "Weekend & holiday posting",
        prestyj: true,
        agency: false,
        freelancer: false,
        inHouse: false,
      },
      {
        feature: "Turnover risk",
        prestyj: "None",
        agency: "Account manager churn",
        freelancer: "Ghosting risk",
        inHouse: "40%+ in 2 years",
      },
      {
        feature: "Ramp-up time",
        prestyj: "24 hours",
        agency: "2\u20134 weeks",
        freelancer: "1\u20132 weeks",
        inHouse: "3\u20136 months",
      },
      {
        feature: "Hiring / recruiting cost",
        prestyj: "$0",
        agency: "Included (opaque)",
        freelancer: "$0",
        inHouse: "$5K\u2013$15K per hire",
      },
      {
        feature: "Cost per post",
        prestyj: "$0.74\u2013$2.22",
        agency: "$83\u2013$500",
        freelancer: "$50\u2013$200",
        inHouse: "$38\u2013$83",
      },
    ],
  },

  faq: {
    headline: "Replace-a-Hire Questions, Answered.",
    subhead: "Everything you need to know before firing your posting schedule (not your person).",
    faqs: [
      {
        question: "How much does a junior social media hire really cost?",
        answer:
          "The salary is $35K\u2013$45K, but the loaded cost \u2014 including employer taxes (7.65%), health insurance ($6K\u2013$10K/yr), PTO, equipment, software subscriptions, and overhead \u2014 runs $55K\u2013$75K/year. Add recruiting costs ($5K\u2013$15K per hire) and the 3\u20136 month ramp-up period, and your first year cost is $65K\u2013$90K.",
      },
      {
        question: "What does the AI content department actually replace?",
        answer:
          "It replaces the output of a full content department \u2014 strategist, copywriter, designer, video editor, and scheduler. One Prestyj subscription handles content creation, platform publishing, multi-account management, and ongoing optimization. You still need someone to set strategy and review, but the production labor is covered.",
      },
      {
        question: "Can the AI really match human-created content?",
        answer:
          "The content is brand-aligned, hook-tested, and platform-native. It\u2019s not replacing award-winning creative direction \u2014 it\u2019s replacing the volume work that your junior hire was doing: daily posts, carousels, captions, and scheduling. For most businesses, the quality is equal or better because it\u2019s consistent and never has an off day.",
      },
      {
        question: "What if I still want a human involved?",
        answer:
          "Most clients keep a marketing lead or owner in the loop for strategy and brand direction. Prestyj handles the production and publishing. You get a weekly digest of what shipped across all accounts. Optional approval workflows are available if you want to review before posting.",
      },
      {
        question: "How fast can I replace my hire with this?",
        answer:
          "24 hours from when you grant account access. If we miss that window, your setup fee is refunded. Compare that to the 4\u20138 weeks it takes to recruit, interview, and onboard a human hire.",
      },
      {
        question: "What happens when my social media manager quits?",
        answer:
          "With Prestyj, your content doesn\u2019t skip a beat. The AI department doesn\u2019t give two weeks\u2019 notice. If you\u2019re using Prestyj alongside a human hire and they leave, you have zero content gap while you search for a replacement.",
      },
      {
        question: "Is this just a scheduling tool like Buffer or Hootsuite?",
        answer:
          "No. Those tools schedule content you already have. Prestyj creates AND publishes the content. It\u2019s not a tool \u2014 it\u2019s a full content department. Think of it as replacing the team, not giving your team a tool.",
      },
      {
        question: "What\u2019s the cost comparison per post?",
        answer:
          "A junior hire at $55K/year producing 30 posts/month = ~$152/post. An in-house team at $100K/year producing 60\u2013120 posts/month = ~$69\u2013$139/post. Prestyj at $2K\u2013$5K/month producing 270\u20132,700 posts = $0.74\u2013$2.22/post. That\u2019s 50\u2013200\u00D7 cheaper per post.",
      },
      {
        question: "Do I own the content?",
        answer:
          "Yes. All content published through your accounts is yours. You can repurpose, edit, or use it anywhere. There are no licensing restrictions.",
      },
      {
        question: "What if I need more than 2,700 posts/month?",
        answer:
          "We build custom plans for agencies and multi-brand operations. If you need 5,000+ posts/month across dozens of accounts, talk to us and we\u2019ll scope it.",
      },
    ],
  },

  cta: {
    headline: "Stop Paying for a Hire. Start Paying for Output.",
    subhead:
      "An entire content department for less than one junior hire\u2019s salary. Live in 24 hours. Cancel anytime.",
    buttonLabel: "Book a Demo",
    buttonHref: "/book-demo",
    eventName: "ReplaceAHireLeadIntent",
    eventLabel: "final-cta",
    footnote: "See the AI content department running live before you commit.",
    sparkColor: "#7058e3",
  },

  pricing: {
    headline: "A Full Department, One Invoice.",
    subhead: "All-inclusive. No per-post fees. Volume guaranteed.",
    tiers: [
      {
        id: "minimum",
        name: "Minimum Plan",
        tagline: "270 posts/month \u2014 replaces the output of one junior hire for 60% less.",
        setupFee: 1500,
        monthlyPrice: 1997,
        accounts: "1 account (brand OR personal)",
        postsTarget: "~270 posts/month",
        guarantee: "250 posts in 30 days or we credit the difference",
        highlights: [
          "1 account (brand OR personal)",
          "3 platforms",
          "~270 posts/month",
          "AI images, carousels, captions",
          "1 brand kit",
          "Quarterly creative refresh",
          "Email support",
        ],
        cta: "Start with Minimum",
      },
      {
        id: "pro",
        name: "Pro Plan",
        tagline: "900 posts/month \u2014 replaces a 3-person content team. Most popular.",
        setupFee: 2500,
        monthlyPrice: 2997,
        accounts: "2 accounts (brand + personal)",
        postsTarget: "~900 posts/month",
        guarantee: "750 posts in 30 days or we credit the difference",
        highlights: [
          "2 accounts (brand + personal)",
          "5 platforms each",
          "~900 posts/month",
          "AI images, carousels, short-form video",
          "Avatar rotation + hook A/B testing",
          "Monthly creative refresh + strategy call",
          "Direct Slack access",
        ],
        cta: "Get Pro \u2014 Most Popular",
        isPro: true,
      },
      {
        id: "max",
        name: "Max Plan",
        tagline: "2,700 posts/month \u2014 replaces an entire content department.",
        setupFee: 4500,
        monthlyPrice: 4997,
        accounts: "3 accounts (brand + personal + niche)",
        postsTarget: "~2,700 posts/month",
        guarantee: "2,250 posts in 30 days or we credit the difference",
        highlights: [
          "3 accounts (brand + personal + niche)",
          "All 7 platforms",
          "~2,700 posts/month",
          "Multi-brand kits",
          "Bi-weekly strategy calls",
          "Custom reporting dashboard",
          "Dedicated strategist",
        ],
        cta: "Get Max",
      },
    ],
    customCta: {
      headline: "Running an agency or multi-brand operation? Need 5,000+ posts/month?",
      description:
        "We\u2019ll build something custom \u2014 your account count, your platforms, your volume target.",
      buttonLabel: "Book a Demo",
      href: "/book-demo",
      eventName: "ReplaceAHireLeadIntent",
      eventLabel: "pricing-custom",
    },
    addons: [
      {
        title: "AI Creator / Branded Persona",
        description:
          "We build and run a faceless or AI-persona account on top of your plan \u2014 more accounts, more volume.",
      },
      {
        title: "Engagement Layer",
        description:
          "DMs, comments, replies handled by us. Your AI department interacts, not just posts.",
      },
      {
        title: "Ad-Ready Repurposing",
        description: "Every post pre-cut and hook-tested for paid ads.",
      },
    ],
    guarantees: [
      {
        icon: Clock,
        title: "Live in 24 hours",
        description:
          "From the moment you grant account access, or your setup fee is refunded. No 3-month ramp-up.",
      },
      {
        icon: ShieldCheck,
        title: "Volume guarantee",
        description: "We hit your post count in 30 days, or we credit the shortfall to next month.",
      },
      {
        icon: Ban,
        title: "Cancel anytime",
        description: "Month-to-month after setup. No severance, no notice period.",
      },
    ],
  },

  videoWalkthrough: {
    badgeIcon: Play,
    badgeText: "Watch the AI Department",
    headline: "See Your AI Content Department in Action",
    subhead:
      "Walk through the engine end-to-end \u2014 from brief to published post across every platform.",
    embedUrl: "https://www.loom.com/embed/PLACEHOLDER",
    iframeTitle: "AI content department walkthrough \u2014 see the engine running live",
  },
};
