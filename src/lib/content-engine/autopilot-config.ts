import {
  Ban,
  Clock,
  Cog,
  CreditCard,
  Eye,
  Facebook,
  Instagram,
  Linkedin,
  Play,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Twitter,
  Youtube,
  Zap,
} from "lucide-react";

import type { ContentEnginePageConfig } from "./page-config";

export const autopilotContentEngineConfig: ContentEnginePageConfig = {
  hero: {
    badge: {
      icon: Sparkles,
      text: "Social Media On Autopilot \u00B7 Zero-Touch Operation",
    },
    headline: "Social Media On Autopilot \u2014",
    headlineAccent: "You Never Open The App Again.",
    subhead:
      "You don\u2019t create, schedule, approve, or post anything. The engine writes, designs, publishes, and optimizes \u2014 across every platform, every account, every day. From $1,997/mo.",
    subheadAccent: "You don\u2019t create, schedule, approve, or post anything.",
    ctas: [
      {
        label: "See How It Works",
        href: "#how-it-works",
        variant: "default",
        eventName: "AutopilotLeadIntent",
        eventLabel: "hero-see-how",
      },
      {
        label: "Book a Demo",
        href: "/book-demo",
        variant: "outline",
        eventName: "AutopilotLeadIntent",
        eventLabel: "hero-book-demo",
      },
    ],
    videoSrc: "/videos/dfy-vsl.mp4",
    videoPoster: "/images/content-engine/vsl-poster.jpg",
    videoAriaLabel: "Social media on autopilot \u2014 zero-touch content engine demo video",
    platforms: ["Instagram", "Facebook", "TikTok", "YouTube", "LinkedIn", "Threads", "X"],
  },

  problem: {
    headline: "Social Media Is a Part-Time Job You Never Asked For.",
    subhead: "Every hour you spend on social media is an hour stolen from your actual business.",
    pains: [
      {
        title:
          "You spend 1\u20132 hours a day on social media \u2014 and it\u2019s still not enough.",
        detail:
          "Writing captions, resizing images, picking hashtags, responding to comments, checking analytics. It adds up to 7\u201310 hours per week. That\u2019s a part-time job you didn\u2019t hire for.",
      },
      {
        title: "You opened Instagram 4 times today \u2014 and not for your own enjoyment.",
        detail:
          "Social media went from \u201cfun marketing channel\u201d to \u201ctask that lives in your head rent-free.\u201d You think about posting during dinner. You check engagement before bed. It\u2019s attention drain, not business growth.",
      },
      {
        title: "You hired someone to handle it \u2014 and now you\u2019re managing them instead.",
        detail:
          "Content reviews, approval chains, briefs, feedback, revisions. You replaced \u201cdoing social media\u201d with \u201cmanaging the person doing social media.\u201d The time savings never materialized.",
      },
      {
        title: "The moment you stop paying attention, everything stops.",
        detail:
          "Skip a week of posting and your reach drops 40%. Miss a day of engagement and the algorithm buries you. Social media only works when you\u2019re consistent \u2014 but consistency requires constant attention.",
      },
    ],
  },

  solution: {
    headline: "Zero-Touch Social Media.",
    subhead:
      "You don\u2019t open an app. You don\u2019t approve a post. You don\u2019t check a dashboard. The engine handles everything.",
    pillars: [
      {
        icon: Zap,
        title: "Fully Autonomous Publishing",
        description:
          "Content is created, formatted, scheduled, and published without any human involvement. No approval queues, no review cycles, no \u201cCan you check this?\u201d The engine runs 24/7.",
      },
      {
        icon: Eye,
        title: "Weekly Digest, Not Daily Drag",
        description:
          "Instead of checking apps daily, you get one weekly email showing what shipped across every account and platform. Read it in 60 seconds. That\u2019s your entire social media workload.",
      },
      {
        icon: Target,
        title: "Self-Optimizing Content",
        description:
          "The engine tracks engagement patterns, rotates hooks, evolves messaging, and doubles down on what works \u2014 all without your input. Your content gets better every month while you do nothing.",
      },
    ],
  },

  howItWorks: {
    headline: "From Payment to Autopilot in 24 Hours.",
    subhead: "Three steps. Zero ongoing effort.",
    steps: [
      {
        number: "01",
        icon: CreditCard,
        title: "Pay & Connect",
        description:
          "Pick your plan. Grant account access. You\u2019re done \u2014 the engine takes over from here.",
        highlight: "Day 0",
      },
      {
        number: "02",
        icon: Cog,
        title: "AI Builds Your Brand Engine",
        description:
          "Brand kit, voice, prompt stack, platform connections \u2014 wired up and publishing within 24 hours. No onboarding calls, no content briefs from you.",
        highlight: "Live in 24h or setup fee refunded",
      },
      {
        number: "03",
        icon: Rocket,
        title: "It Runs. You Don\u2019t.",
        description:
          "Multiple accounts, 7 platforms, every single day. Content ships while you sleep. Your only touchpoint is a weekly digest email.",
        highlight: "Day 1 onward \u2014 fully hands-off",
      },
      {
        number: "04",
        icon: RefreshCw,
        title: "Monthly Optimization (Automatic)",
        description:
          "Hooks rotate. Avatars evolve. Top-performing formats get amplified. The engine improves itself without strategy calls or your input.",
        highlight: "Always optimizing",
      },
    ],
  },

  proofBar: {
    stats: [
      { value: "0", label: "Hours per week of your time" },
      { value: "24h", label: "Live from payment to first post" },
      { value: "7", label: "Platforms covered" },
      { value: "2,700+", label: "Posts shipped per month" },
    ],
  },

  proofScreenshots: {
    headline: "We Run This for Ourselves. Hands-Off.",
    subhead: "The same engine, shipping every day for Prestyj. Nobody on our team opens the apps.",
    shots: [
      {
        src: "/images/content-engine/proof-1.webp",
        fallback: "/images/content-engine/proof-1.png",
        alt: "Prestyj brand Instagram \u2014 posting daily on autopilot",
        caption: "Our brand IG \u2014 posting daily on autopilot.",
      },
      {
        src: "/images/content-engine/proof-2.webp",
        fallback: "/images/content-engine/proof-2.png",
        alt: "Founder personal LinkedIn powered by the same autopilot engine",
        caption: "Founder personal LinkedIn \u2014 same engine, zero touch.",
      },
      {
        src: "/images/content-engine/proof-3.webp",
        fallback: "/images/content-engine/proof-3.png",
        alt: "Multi-platform content queue running on autopilot",
        caption: "Multi-platform queue \u2014 running itself.",
      },
    ],
  },

  liveAccounts: {
    headline: "See Us Posting",
    headlineAccent: "Without Touching It",
    subhead:
      "These aren\u2019t mockups. Every account is live, posting daily, with zero manual involvement \u2014 powered by the same engine you\u2019ll get.",
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
    headlineAccent: "Autopilot Engine",
    subhead:
      "Real posts, real engagement. Here\u2019s what the engine published this week across Instagram and TikTok \u2014 with nobody at the wheel.",
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
    headline: "Autopilot vs. Every Other Way to Do Social Media.",
    subhead: "The difference is your time.",
    rows: [
      {
        feature: "Hours per week of your time",
        prestyj: "0",
        agency: "2\u20134",
        freelancer: "3\u20135",
        inHouse: "5\u201310",
      },
      {
        feature: "Do you have to approve posts?",
        prestyj: "No",
        agency: "Yes, weekly",
        freelancer: "Yes, every post",
        inHouse: "Yes, every post",
      },
      {
        feature: "Posts per month",
        prestyj: "270\u20132,700",
        agency: "30\u201360",
        freelancer: "20\u201340",
        inHouse: "60\u2013120",
      },
      {
        feature: "Accounts managed",
        prestyj: "Up to 3+",
        agency: "1",
        freelancer: "1",
        inHouse: "1\u20132",
      },
      {
        feature: "Platforms covered",
        prestyj: "Up to 7",
        agency: "2\u20133",
        freelancer: "1\u20132",
        inHouse: "2\u20133",
      },
      {
        feature: "Posts on weekends/holidays",
        prestyj: true,
        agency: false,
        freelancer: false,
        inHouse: false,
      },
      {
        feature: "Self-optimizing content",
        prestyj: true,
        agency: false,
        freelancer: false,
        inHouse: false,
      },
      {
        feature: "Monthly cost",
        prestyj: "$2K\u2013$5K",
        agency: "$5K\u2013$15K",
        freelancer: "$2K\u2013$8K",
        inHouse: "$8K\u2013$12K loaded",
      },
    ],
  },

  faq: {
    headline: "Questions About Hands-Off Social Media.",
    subhead: "If yours isn\u2019t here, ask on the demo call.",
    faqs: [
      {
        question: "Do I have to approve posts before they go live?",
        answer:
          "No. The engine publishes autonomously. Most clients never touch the dashboard. If you want approval control, you can enable it \u2014 but the default is full autopilot.",
      },
      {
        question: "What if I don\u2019t like a post that went live?",
        answer:
          "Remove it with one click from your weekly digest email. You can also tell the engine to avoid specific topics, tones, or content types going forward. It learns your preferences over time.",
      },
      {
        question: "How do I know what\u2019s being posted?",
        answer:
          "You receive a weekly digest email showing every post that shipped across all your accounts and platforms. Most clients read it in under 60 seconds. That\u2019s your entire social media involvement.",
      },
      {
        question: "Does this mean I lose control of my brand?",
        answer:
          "No. The engine is trained on your brand profile \u2014 your services, tone, audience, colors, and voice. Content reads like your business, not like a robot. You can update your brand profile anytime.",
      },
      {
        question: "What if my industry is too niche for AI?",
        answer:
          "We serve contractors, HVAC, plumbing, roofing, real estate, coaches, consultants, agencies, and dozens of other industries. The engine adapts to each one. Your niche is exactly what it\u2019s built for.",
      },
      {
        question: "Can I still post my own content?",
        answer:
          "Yes. Post natively anytime you want. Your organic posts layer on top of the engine\u2019s output. Many clients mix in project photos or personal updates alongside the automated content.",
      },
      {
        question: "How is this different from Buffer, Hootsuite, or Later?",
        answer:
          "Those are scheduling tools \u2014 you still have to create the content. Prestyj creates AND publishes the content. No writing, no designing, no scheduling. It\u2019s a content department, not a calendar.",
      },
      {
        question: "What if I want to cancel?",
        answer:
          "Cancel anytime. Month-to-month after setup. No long contracts, no cancellation fees, no retention calls.",
      },
      {
        question: "How fast until it\u2019s running?",
        answer:
          "24 hours from when you grant account access. If we miss that window, your setup fee is refunded.",
      },
      {
        question: "Will this get me shadowbanned?",
        answer:
          "No. Volume is split across multiple accounts and 7 platforms. Each account posts at algorithm-safe rates. The engine is designed for sustainable growth, not spam.",
      },
    ],
  },

  cta: {
    headline: "Stop Opening the App. Start Running the Engine.",
    subhead:
      "Live in 24 hours. Fully hands-off. Cancel anytime. Your social media runs itself from day one.",
    buttonLabel: "Book a Demo",
    buttonHref: "/book-demo",
    eventName: "AutopilotLeadIntent",
    eventLabel: "final-cta",
    footnote: "See the autopilot engine running live before you commit.",
    sparkColor: "#7058e3",
  },

  pricing: {
    headline: "Pick Your Autopilot Level.",
    subhead: "All-inclusive. Zero per-post fees. Zero time required.",
    tiers: [
      {
        id: "minimum",
        name: "Minimum Plan",
        tagline: "1 account on autopilot \u2014 more than most agencies ship manually.",
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
          "Weekly digest email",
          "Email support",
        ],
        cta: "Start with Minimum",
      },
      {
        id: "pro",
        name: "Pro Plan",
        tagline: "Brand + personal brand on full autopilot.",
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
          "Self-optimizing content engine",
          "Monthly performance report",
          "Direct Slack access",
        ],
        cta: "Get Pro \u2014 Most Popular",
        isPro: true,
      },
      {
        id: "max",
        name: "Max Plan",
        tagline: "3 accounts. Full hands-off coverage across every platform.",
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
          "Bi-weekly performance reviews",
          "Custom reporting dashboard",
          "Dedicated strategist",
        ],
        cta: "Get Max",
      },
    ],
    customCta: {
      headline: "Running 4+ accounts? Agency reselling? Multi-brand operator?",
      description:
        "We\u2019ll build something custom \u2014 your account count, your platforms, all on autopilot.",
      buttonLabel: "Book a Demo",
      href: "/book-demo",
      eventName: "AutopilotLeadIntent",
      eventLabel: "pricing-custom",
    },
    addons: [
      {
        title: "AI Creator / Branded Persona",
        description:
          "We build and run a faceless or AI-persona account on top of your plan \u2014 another account on autopilot.",
      },
      {
        title: "Engagement Layer",
        description: "DMs, comments, replies handled by us. Full autopilot extends beyond posting.",
      },
      {
        title: "Ad-Ready Repurposing",
        description:
          "Every post pre-cut and hook-tested for paid ads. Autopilot organic feeds your paid funnel.",
      },
    ],
    guarantees: [
      {
        icon: Clock,
        title: "Live in 24 hours",
        description: "From the moment you grant account access, or your setup fee is refunded.",
      },
      {
        icon: ShieldCheck,
        title: "Volume guarantee",
        description: "We hit your post count in 30 days, or we credit the shortfall to next month.",
      },
      {
        icon: Ban,
        title: "Cancel anytime",
        description: "Month-to-month after setup. No long contracts.",
      },
    ],
  },

  videoWalkthrough: {
    badgeIcon: Play,
    badgeText: "Watch the Autopilot Engine",
    headline: "See Zero-Touch Social Media in Action",
    subhead:
      "Walk through the content engine end-to-end \u2014 from setup to published posts across every platform, with no human involvement.",
    embedUrl: "https://www.loom.com/embed/PLACEHOLDER",
    iframeTitle:
      "Autopilot content engine walkthrough \u2014 see zero-touch social media running live",
  },
};
