import {
  Ban,
  Briefcase,
  Clock,
  Cog,
  CreditCard,
  Facebook,
  Headphones,
  Instagram,
  Linkedin,
  Play,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Target,
  Twitter,
  Users,
  Youtube,
} from "lucide-react";

import type { ContentEnginePageConfig } from "./page-config";

export const managedSocialMediaServiceConfig: ContentEnginePageConfig = {
  hero: {
    badge: {
      icon: Briefcase,
      text: "Managed Social Media Service · From $1,997/mo",
    },
    headline: "Managed Social Media Service",
    headlineAccent: "That Actually Ships.",
    subhead:
      "Stop managing freelancers, babysitting agencies, and patching together tools. Prestyj is your fully managed social media service — creating, publishing, and optimizing across 7 platforms. Live in 24 hours.",
    subheadAccent: "your fully managed social media service",
    ctas: [
      {
        label: "See Plans",
        href: "#pricing",
        variant: "default",
        eventName: "ManagedServiceLeadIntent",
        eventLabel: "hero-see-plans",
      },
      {
        label: "Book a Demo",
        href: "/book-demo",
        variant: "outline",
        eventName: "ManagedServiceLeadIntent",
        eventLabel: "hero-book-demo",
      },
    ],
    videoSrc: "/videos/dfy-vsl.mp4",
    videoPoster: "/images/content-engine/vsl-poster.jpg",
    videoAriaLabel: "Managed social media service demo — fully managed content across 7 platforms",
    platforms: ["Instagram", "Facebook", "TikTok", "YouTube", "LinkedIn", "Threads", "X"],
  },

  problem: {
    headline: "Your Social Media Is a Collection of Band-Aids.",
    subhead:
      "A freelancer here, a tool there, an agency you're not sure is doing anything. You need a service — not more pieces.",
    pains: [
      {
        title: "Your freelancer ghosted — again.",
        detail:
          "Freelancers are one person. They get sick, take vacations, find better clients, or just disappear. Your content calendar dies with them.",
      },
      {
        title: "Your agency ships 30 posts/month for $5K.",
        detail:
          "That's $166 per post. You get a single account on 2 platforms. No multi-account strategy, no weekend posting, no volume guarantee. Just a monthly report and an invoice.",
      },
      {
        title: "You're the accidental social media manager.",
        detail:
          "Someone has to write captions, approve posts, resize images, and check analytics. That someone is you. It's 7–10 hours per week you don't have.",
      },
      {
        title: "Three tools, two freelancers, and it still breaks.",
        detail:
          "Canva for design, ChatGPT for copy, Buffer for scheduling, a freelancer for video, and you approve everything. This isn't a system — it's a liability.",
      },
    ],
  },

  solution: {
    headline: "One Managed Service. Every Platform. Zero Work From You.",
    subhead:
      "Prestyj isn't a tool you learn or a freelancer you manage. It's a fully managed service that handles your social media end-to-end.",
    pillars: [
      {
        icon: Headphones,
        title: "Fully Managed, Not Self-Serve",
        description:
          "We set up, create, publish, and optimize. You don't open an app, approve a post, or check a dashboard. This is a service, not software you have to learn.",
      },
      {
        icon: Users,
        title: "Multi-Account Coverage",
        description:
          "Your brand page, your personal brand, and niche accounts — all managed simultaneously. Each targeting a different audience with tailored content.",
      },
      {
        icon: Target,
        title: "Results-Focused, Not Just Active",
        description:
          "Every post is hook-tested and ad-ready. Content that grows your organic reach and feeds your paid funnel. You get weekly digests and monthly performance reports.",
      },
    ],
  },

  howItWorks: {
    headline: "From Signup to Published Content in 24 Hours.",
    subhead: "No onboarding calls. No content briefs. No training period.",
    steps: [
      {
        number: "01",
        icon: CreditCard,
        title: "Pick Your Plan & Connect",
        description:
          "Choose your tier. Grant access to your social accounts. The managed service starts building immediately.",
        highlight: "Day 0",
      },
      {
        number: "02",
        icon: Cog,
        title: "We Build Your Content Engine",
        description:
          "Brand kit, voice profile, prompt stack, platform connections — all wired up and publishing within 24 hours.",
        highlight: "Live in 24h or setup fee refunded",
      },
      {
        number: "03",
        icon: Rocket,
        title: "Content Ships Daily",
        description:
          "Multiple accounts, 7 platforms, every single day. Your social media runs while you focus on your business.",
        highlight: "Day 1 onward",
      },
      {
        number: "04",
        icon: RefreshCw,
        title: "Monthly Refresh + Reporting",
        description:
          "Hooks rotate. Strategy evolves. You get clear performance reports showing what's working across every account and platform.",
        highlight: "Always optimizing",
      },
    ],
  },

  proofBar: {
    stats: [
      { value: "24h", label: "From signup to first published post" },
      { value: "7", label: "Platforms managed simultaneously" },
      { value: "2,700+", label: "Posts shipped per month" },
      { value: "0", label: "Hours per week of your time" },
    ],
  },

  proofScreenshots: {
    headline: "We Manage Our Own Social Media With This.",
    subhead:
      "The same managed service, running every day for Prestyj. See the results for yourself.",
    shots: [
      {
        src: "/images/content-engine/proof-1.webp",
        fallback: "/images/content-engine/proof-1.png",
        alt: "Prestyj brand Instagram — managed daily posting",
        caption: "Our brand IG — managed and posting daily.",
      },
      {
        src: "/images/content-engine/proof-2.webp",
        fallback: "/images/content-engine/proof-2.png",
        alt: "Founder personal LinkedIn managed by the same service",
        caption: "Founder personal LinkedIn — same managed service.",
      },
      {
        src: "/images/content-engine/proof-3.webp",
        fallback: "/images/content-engine/proof-3.png",
        alt: "Multi-platform managed content queue with 30+ posts per day",
        caption: "Multi-platform queue — 30+ posts/day, fully managed.",
      },
    ],
  },

  liveAccounts: {
    headline: "See the Service",
    headlineAccent: "Running Live",
    subhead:
      "These aren't mockups. Every account is live, posting daily, managed by the same service you'll get.",
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
    headline: "Managed by Prestyj.",
    headlineAccent: "Published Automatically.",
    subhead:
      "Real posts, real engagement. Here's what our managed service published this week across Instagram and TikTok.",
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
    headline: "Managed Service vs. Every Other Option.",
    subhead: "Same result. Different level of involvement from you.",
    rows: [
      {
        feature: "You manage it",
        prestyj: "Zero",
        agency: "Weekly calls",
        freelancer: "Daily check-ins",
        inHouse: "Full-time oversight",
      },
      {
        feature: "Posts per month",
        prestyj: "270–2,700",
        agency: "30–60",
        freelancer: "20–40",
        inHouse: "60–120",
      },
      {
        feature: "Accounts managed",
        prestyj: "Up to 3+",
        agency: "1",
        freelancer: "1",
        inHouse: "1–2",
      },
      {
        feature: "Platforms covered",
        prestyj: "Up to 7",
        agency: "2–3",
        freelancer: "1–2",
        inHouse: "2–3",
      },
      {
        feature: "Weekend & holiday posting",
        prestyj: "Yes",
        agency: false,
        freelancer: false,
        inHouse: false,
      },
      {
        feature: "Volume guarantee",
        prestyj: "Yes",
        agency: false,
        freelancer: false,
        inHouse: false,
      },
      {
        feature: "Live in 24 hours",
        prestyj: "Yes",
        agency: false,
        freelancer: "sometimes",
        inHouse: false,
      },
      {
        feature: "Monthly cost",
        prestyj: "$2K–$5K",
        agency: "$5K–$15K",
        freelancer: "$2K–$8K",
        inHouse: "$8K–$12K loaded",
      },
    ],
  },

  faq: {
    headline: "Questions About Managed Social Media.",
    subhead: "If yours isn't here, ask on the demo call.",
    faqs: [
      {
        question: "What does 'managed' actually mean?",
        answer:
          "It means we handle everything — strategy, content creation, design, publishing, and optimization. You don't open an app, approve posts, or manage a dashboard. Your only touchpoint is a weekly digest email showing what shipped.",
      },
      {
        question: "How is this different from hiring an agency?",
        answer:
          "Agencies typically manage one account on 2–3 platforms and ship 30 posts/month. Prestyj manages up to 3+ accounts across 7 platforms and ships 270–2,700 posts/month. It's a different tier of output at a lower price point, and it's live in 24 hours instead of weeks.",
      },
      {
        question: "How is this different from a social media tool?",
        answer:
          "Tools like Buffer, Hootsuite, and Later help you schedule content you've already created. Prestyj creates AND publishes the content. You don't write captions, design images, or pick hashtags. It's a managed service, not software.",
      },
      {
        question: "Do I get to approve posts before they go live?",
        answer:
          "Approval is optional. Most clients let the service run autonomously. You receive a weekly digest of everything that shipped. If you want to enable approval workflows, you can — but the default is full management.",
      },
      {
        question: "What if I don't like a post?",
        answer:
          "Remove it with one click from your weekly digest email. You can also tell the service to avoid specific topics, tones, or content types. It learns your preferences over time.",
      },
      {
        question: "How fast can I get started?",
        answer:
          "24 hours from when you grant account access. If we miss that window, your setup fee is refunded. No onboarding calls, no content briefs, no training period.",
      },
      {
        question: "Can I still post my own content?",
        answer:
          "Yes. Post natively anytime. Your organic posts layer on top of the managed service output. Many clients mix in project photos, personal updates, or time-sensitive content.",
      },
      {
        question: "What does it cost?",
        answer:
          "Plans start at $1,997/month for 1 account on 3 platforms (~270 posts/month). The Pro plan is $2,997/month for 2 accounts on 5 platforms (~900 posts/month). The Max plan is $4,997/month for 3 accounts on all 7 platforms (~2,700 posts/month). Setup fees apply. All plans are month-to-month after setup.",
      },
      {
        question: "What if I need to cancel?",
        answer:
          "Cancel anytime. Month-to-month after setup. No long contracts, no cancellation fees, no retention calls. You keep all the content that was published.",
      },
      {
        question: "Does this work for my industry?",
        answer:
          "If your buyer is on social media, yes. We serve contractors, HVAC, plumbing, roofing, real estate, coaches, consultants, agencies, e-commerce, and B2B companies. The service adapts to your industry's content needs.",
      },
    ],
  },

  cta: {
    headline: "Stop Managing Social Media. Get a Managed Service.",
    subhead:
      "Live in 24 hours. Fully managed. Cancel anytime. Your social media runs itself from day one.",
    buttonLabel: "Book a Demo",
    buttonHref: "/book-demo",
    eventName: "ManagedServiceLeadIntent",
    eventLabel: "final-cta",
    footnote: "See the managed service running live before you commit.",
    sparkColor: "#7058e3",
  },

  pricing: {
    headline: "Pick Your Managed Service Level.",
    subhead: "All-inclusive. Zero per-post fees. Zero time required.",
    tiers: [
      {
        id: "minimum",
        name: "Minimum Plan",
        tagline: "1 managed account — more than most agencies ship manually.",
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
        tagline: "Brand + personal brand, fully managed.",
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
        cta: "Get Pro — Most Popular",
        isPro: true,
      },
      {
        id: "max",
        name: "Max Plan",
        tagline: "3 accounts. Full managed service across every platform.",
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
        "We'll build a custom managed service — your account count, your platforms, your volume target.",
      buttonLabel: "Book a Demo",
      href: "/book-demo",
      eventName: "ManagedServiceLeadIntent",
      eventLabel: "pricing-custom",
    },
    addons: [
      {
        title: "AI Creator / Branded Persona",
        description:
          "We build and run a faceless or AI-persona account on top of your plan — another managed account, zero extra work.",
      },
      {
        title: "Engagement Layer",
        description:
          "DMs, comments, replies handled by us. Full managed service extends beyond posting.",
      },
      {
        title: "Ad-Ready Repurposing",
        description:
          "Every post pre-cut and hook-tested for paid ads. Managed organic feeds your paid funnel.",
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
    badgeText: "Watch the Managed Service",
    headline: "See Managed Social Media in Action",
    subhead:
      "Walk through the managed service end-to-end — from setup to published posts across every platform.",
    embedUrl: "https://www.loom.com/embed/PLACEHOLDER",
    iframeTitle: "Managed social media service walkthrough — see the engine running live",
  },
};
