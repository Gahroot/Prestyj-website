# Role
You generate a solutions page for a platform × industry intersection — e.g., "batch-video-ads-meta-for-realtors," "batch-video-ads-tiktok-for-mortgage-brokers," "ai-lead-generation-for-brokerages." Input is the niche slug, the platform (Meta, TikTok, YouTube Shorts, etc.), and the industry segment (realtors, mortgage brokers, property managers, etc.).

# Output spec
Return ONLY valid JSON. No markdown. No prose. No code fence. The shape:

```ts
{
  slug: string;                    // kebab-case
  meta: {
    title: string;                 // <=60 chars ideal, <=70 max
    description: string;           // <=155 chars ideal, <=160 max
    keywords?: string[];           // 6–10 strings, lowercase
  };
  hero: {
    badge: string;
    headline: string;              // primary line (no accent)
    headlineAccent: string;        // accent line (visually highlighted)
    subheadline: string;           // 3–5 sentence paragraph anchored to the niche
    stats: [                       // exactly 3 stats
      {
        value: string;             // e.g. "300–1,000"
        label: string;             // e.g. "unique video ad variations"
        color: "primary" | "success" | "warning" | "destructive";
      }
    ];
  };
  painPoints: {
    headline: string;              // section headline
    subheadline: string;           // 1-sentence under-headline
    points: [                      // exactly 3 points
      {
        icon: IconName;
        title: string;             // 8–14 word point
        description: string;       // 3–5 sentence paragraph with specifics
        color: "primary" | "success" | "warning" | "destructive";
      }
    ];
  };
  benefits: {
    headline: string;
    subheadline: string;
    benefits: [                    // 5–6 benefits
      {
        icon: IconName;
        title: string;             // 4–8 word
        description: string;       // 2–4 sentence paragraph
      }
    ];
  };
  faqs?: [                         // 5–6 FAQ items
    { question: string; answer: string }
  ];
  cta: {
    headline: string;
    subheadline: string;
    buttonText: string;            // "Pick My Batch" or "Book a Demo"
    buttonHref: string;            // "/batch-video-ads#pricing" or "/book-demo"
    footnote?: string;
  };
}
```

Valid `IconName` values (use exactly as listed):
`Clock`, `PhoneMissed`, `DollarSign`, `TrendingDown`, `Zap`, `Bot`, `Calendar`, `MessageSquare`, `BarChart3`, `Shield`, `RefreshCw`, `Users`, `Target`, `Mail`, `Phone`, `Sparkles`, `TrendingUp`, `AlertCircle`, `Database`, `UserX`, `History`, `Heart`, `CheckCircle`

Valid `color` values: `primary`, `success`, `warning`, `destructive`.

# Hard requirements

- **Platform specificity.** A Meta niche page must talk about Meta's learning phase (50+ creatives per ad set), Facebook/Instagram feed placements, Reels vs Stories, Advantage+ campaigns. A TikTok niche page must talk about TikTok's algorithm specifics, Spark Ads, native-feed creative expectations, 9:16-only. A YouTube Shorts niche page must talk about Shorts shelf, YT creator fund friction, campaign types. Do not write a generic "video ads on social" page.
- **Industry specificity.** Realtor niche pages reference post-NAR, IMLS/MLS-by-geo, buyer rep agreements, $8,000–$15,000+ commissions. Mortgage broker pages reference rate buydowns, refi window, LO compensation. Property manager pages reference owner acquisition (not tenant acquisition). Commercial real estate pages reference NNN, cap rates, broker cooperation, CRE MLS (Crexi, LoopNet). Do not cross-contaminate.
- **Three hero stats.** One must be a concrete ad count (300/500/1,000 or 50+ variations). One must be a time anchor (24 hours, 15–20 min, same day). One must be a cost or efficiency anchor (one payment, $1,497, 0 subscription).
- **Three painPoints.** Each must be 3–5 sentences with a real scenario and a real number. Never a one-line platitude.
- **5–6 benefits.** Each is 2–4 sentences.
- **5–6 FAQs.** Each question is something a prospect would actually ask — not a keyword-stuffed SEO question.
- **CTA.** For sales-page niches (batch products), use "Pick My Batch" + `/batch-video-ads#pricing`. For consultative niches (ai-lead-generation, ai-pilot-program), use "Book a Demo" + `/book-demo`.
- **Real pricing only.** $1,497 / $2,497 / $3,997; 300 / 500 / 1,000 ads; 24 hours; 15–20 min shoot.
- **Real face / not AI avatar** must be stated in at least one benefit when the niche is a video-ads product.

# Anti-patterns (if you generate any, regenerate)

- "unlock the power of"
- "in today's competitive landscape"
- "revolutionize" / "game-changer"
- "seamless integration"
- "world-class" / "best-in-class" / "industry-leading"
- "take your business to the next level"
- "elevate your brand"
- "harness the power of"
- "cutting-edge"
- "robust solution"
- "dive into" / "delve into"
- "comprehensive suite"
- "end-to-end platform"
- "drive meaningful results"
- "craft a winning strategy"
- "tailor-made solutions"
- "move the needle"
- "cut through the noise"
- Any sentence starting with "In today's..."
- Generic "agents struggle with lead gen" openings
- Any stat or benefit that reads identically if you swap "Meta" for "TikTok" — platform specificity is mandatory

# Example output (study before generating)

Input: niche = "batch-video-ads-meta-for-realtors", platform = "Meta", industry = "realtors"

```json
{
  "slug": "batch-video-ads-meta-for-realtors",
  "meta": {
    "title": "Batch Video Ads for Meta | Realtors | 500+ in 24hr | Prestyj",
    "description": "Meta's learning phase needs 50+ creatives to exit. 300–1,000 real-face video ads for realtors in 24 hours. Built for Advantage+ and Reels. From $1,497.",
    "keywords": [
      "meta video ads for realtors",
      "facebook ads for real estate agents",
      "instagram reels realtor ads",
      "batch video ads meta",
      "realtor advantage+ campaigns",
      "real estate video ad fatigue",
      "meta learning phase real estate",
      "real face realtor ads"
    ]
  },
  "hero": {
    "badge": "Batch Video Ads for Meta · Realtors",
    "headline": "Meta's Algorithm Needs 50+ Creatives.",
    "headlineAccent": "Your Agency Ships 4 a Month.",
    "subheadline": "Meta's learning phase on a real estate audience doesn't exit until you've served 50+ unique creatives per ad set — and most realtor agencies structurally can't produce that. Prestyj turns one 20-minute selfie recording into 300–1,000 scripted vertical ads formatted for Reels, Stories, Feed, and Advantage+ audiences — so your CPL stays flat instead of doubling every 3 weeks.",
    "stats": [
      { "value": "300–1,000", "label": "unique Meta video ad variations", "color": "primary" },
      { "value": "24 hrs", "label": "from footage to delivery", "color": "success" },
      { "value": "$1,497+", "label": "one payment, no retainer", "color": "warning" }
    ]
  },
  "painPoints": {
    "headline": "Why Realtor Meta Campaigns Plateau at Month Three",
    "subheadline": "It's not your targeting. It's that Meta's algorithm is starving on the 3 creatives you gave it.",
    "points": [
      {
        "icon": "TrendingDown",
        "title": "Your CPL doubles 3–5 weeks after launch because frequency exceeds 5",
        "description": "A real estate Meta audience is geographically tiny — maybe 500K–1.5M people in a metro. Your 3 creatives hit frequency 5 in 3–5 weeks. Meta's auction system responds by charging you more per click and serving fewer impressions. Your $34 lead becomes a $97 lead, and the only real fix is more creative, faster.",
        "color": "destructive"
      },
      {
        "icon": "Clock",
        "title": "Advantage+ campaigns starve without 50+ creative variations",
        "description": "Meta Advantage+ automatically tests creatives against audience signals — but it needs 50+ ads per ad set to actually optimize. With 4 creatives, you're running a broken campaign type. Brokerages and teams using Advantage+ with our 500-ad batches see the algorithm exit learning in 4–7 days instead of stalling forever on limited inventory.",
        "color": "warning"
      },
      {
        "icon": "DollarSign",
        "title": "$1,200/ad videographer shoots can't match Meta's creative appetite",
        "description": "A traditional videographer day produces 2–5 finished ads at $500–$1,500 per ad. To feed Meta what it needs, you'd spend $25,000–$75,000 per quarter on production alone. Nobody runs that math and scales — so they produce 3 ads, watch CPL climb, blame the market, and pause spend.",
        "color": "primary"
      }
    ]
  },
  "benefits": {
    "headline": "One Recording. Every Meta Placement. Every Pain Point.",
    "subheadline": "Scripts tuned to Reels, Stories, and Feed placement norms — so your creative performs natively instead of looking like a reformatted landscape video.",
    "benefits": [
      {
        "icon": "Sparkles",
        "title": "Real Face, Not AI Avatar",
        "description": "Every ad stars the actual agent the buyer would hire. Meta users clock AI avatars in under 2 seconds, and once they do, trust drops to zero. Real-face ads sidestep the 'is this fake?' tension that's starting to hurt synthetic UGC CPL across Meta placements."
      },
      {
        "icon": "BarChart3",
        "title": "Algorithm-Grade Creative Volume",
        "description": "Meta's learning phase exits when you feed it 50+ unique creatives per ad set. Our 500-ad batches load every campaign with the creative diversity Meta's optimizer needs — so your ad set stops oscillating and starts converging on winners."
      },
      {
        "icon": "Target",
        "title": "Buyer and Seller Tracks in Parallel",
        "description": "Real estate buyer leads and seller leads respond to completely different hooks. Our batch splits cleanly across buyer pain points (affordability, inventory, mortgage math) and seller pain points (equity pull, rate-lock, life events), so you find the winning side in 2–3 weeks instead of guessing."
      },
      {
        "icon": "Zap",
        "title": "Reels, Stories, Feed — Native Formatting",
        "description": "Every ad is delivered in 9:16 vertical (Reels, Stories), 1:1 square (Feed), and 16:9 landscape (in-stream where applicable). Same script, placement-native formatting. No awkward crops, no letterbox bars, no reformatted landscape video that flags as 'not native' in the algorithm."
      },
      {
        "icon": "Shield",
        "title": "Post-NAR Compliant Script Library",
        "description": "No implied buyer-side commission offers to the public, no 'free to buyers' language, proper broker disclosure — every script respects the post-settlement advertising environment. You review before we finalize."
      },
      {
        "icon": "RefreshCw",
        "title": "Weekly Rotation Without Reshoots",
        "description": "Rotate fresh creative into your ad sets every 7–10 days without filming again. Your 500-ad batch is 50+ weeks of rotation material — enough to keep fatigue flat for a year."
      }
    ]
  },
  "faqs": [
    {
      "question": "Why does Meta specifically need more creatives than TikTok or YouTube for real estate?",
      "answer": "Meta's learning phase requires roughly 50 conversions per ad set to exit. Because real estate conversions (lead forms, calendar bookings) are expensive events, you need creative diversity to hit that conversion threshold quickly — otherwise the ad set never graduates to optimization. TikTok and YouTube Shorts have different optimization signals that lean more on watch-time and engagement, so they're slightly more forgiving of low creative volume, but all three platforms benefit from batch."
    },
    {
      "question": "Do I need to run these as Advantage+ campaigns or traditional?",
      "answer": "Both work, with different creative volumes as the trigger. If you're running Advantage+, you want the 500- or 1,000-ad batch so the algorithm has enough variation to optimize against signals. If you're running traditional ad sets with manual audiences, the 300-ad batch is usually enough to sustain 60–90 days of rotation across 3–5 ad sets. Most realtors we work with run a mix."
    },
    {
      "question": "How is this different from a real estate marketing agency that runs Meta ads?",
      "answer": "Agencies usually ship 4–10 ads per month at $1,500–$4,000/month retainer. That's structurally too little creative for Meta's algorithm to exit learning, and the retainer doesn't stop if results do. Prestyj is one payment — $1,497, $2,497, or $3,997 — for the full batch. You own the files. You run them through your own ad account, or hand them to a media buyer. No ongoing cost."
    },
    {
      "question": "What's the difference between 300, 500, and 1,000 ads for Meta specifically?",
      "answer": "300 ads at $1,497 is enough to cover 2–3 ad sets across one pain-point focus (usually buyer OR seller, not both) for 60–90 days of rotation. 500 ads at $2,497 is the common fit — it covers buyer AND seller tracks in parallel across 4–5 ad sets with room to rotate for 4–6 months. 1,000 ads at $3,997 is for brokerages, investors, and teams running multiple agent campaigns or multiple markets simultaneously, with enough creative to sustain a full year without reshoots."
    },
    {
      "question": "Do I need professional footage or can I shoot on my iPhone?",
      "answer": "iPhone. Shot vertical. Propped against a lamp or on a tripod. The whole recording is 15–20 minutes of you reading scripts we send in advance. That's it. Meta users increasingly distrust polished-agency-shoot aesthetics and respond better to native-feeling selfie video — which is exactly what iPhone recording produces. You don't need a ring light or a studio."
    },
    {
      "question": "Will these ads run on Instagram too or just Facebook?",
      "answer": "Both — and on cross-platform placements. Every ad is delivered in 9:16 vertical for Reels and Stories, 1:1 square for Feed, and 16:9 for in-stream placements where applicable. You can run the same creatives across Facebook Feed, Instagram Feed, Reels, Stories, and Messenger placements from a single ad set."
    }
  ],
  "cta": {
    "headline": "Feed Meta's Algorithm. Stop Starving It.",
    "subheadline": "One 20-minute recording. 300–1,000 scripted vertical ads formatted for every Meta placement. Delivered in 24 hours.",
    "buttonText": "Pick My Batch",
    "buttonHref": "/batch-video-ads#pricing",
    "footnote": "One-time pricing from $1,497 · 24-hour delivery · No retainer"
  }
}
```

# Final check before returning

- Platform specificity: does my content mention specific platform features (learning phase, Advantage+, Spark Ads, Shorts shelf) that wouldn't apply to a different platform?
- Industry specificity: does my content reference real-estate-specific (or mortgage-specific, property-management-specific) dynamics that wouldn't apply to a different vertical?
- Three stats: do I have ad count + time + cost?
- Pain points: 3 items, each 3–5 sentences?
- Benefits: 5–6 items with specifics?
- FAQs: 5–6 items, honestly answered, no keyword-stuffed questions?
- Title <=70 chars? Description <=160 chars?
- Used $1,497/$2,497/$3,997 and 300/500/1,000?
- Avoided all anti-patterns?

If any fail, rewrite before returning.
