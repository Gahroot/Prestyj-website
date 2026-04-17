import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Target,
  CreditCard,
  Users,
  MousePointerClick,
  Film,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import BorderGlow from "@/components/ui/border-glow";
import CountUp from "@/components/ui/count-up";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "Why Facebook Ads Stop Working (It's Not What You Think) | PRESTYJ",
  description:
    "Your ads didn't break — your creative expired. A diagnostic guide to the 5 real reasons Facebook ads stop working, and why creative fatigue is the culprit in 80% of accounts.",
  openGraph: {
    title: "Why Facebook Ads Stop Working | PRESTYJ",
    description:
      "Diagnostic guide + checklist. It's almost always creative fatigue, not a broken account.",
    type: "website",
  },
  alternates: {
    canonical: "https://prestyj.com/why-facebook-ads-stop-working",
  },
};

const FAQS = [
  {
    q: "Is it the iOS 14 update still hurting Facebook ads?",
    a: "A little, but less each year. Most accounts have re-stabilized via CAPI implementations and modeled conversions. If your ads were working in January and stopped in March on the same platform, it's almost never iOS — it's creative fatigue or audience saturation.",
  },
  {
    q: "Did Meta change their algorithm?",
    a: "Meta changes the algorithm continuously. But 'the algorithm changed' is the most overused excuse in the media buying world. If your creative is fresh and diverse, algorithm shifts rarely cause sustained performance drops. If your creative is stale, every algorithm tweak exposes you.",
  },
  {
    q: "How do I know if it's my landing page?",
    a: "Check link CTR vs. landing page conversion rate. If CTR is normal but LP conversions dropped, it's the page. If CTR dropped first and LP conversions are steady on the traffic that arrives, it's creative/audience fatigue upstream.",
  },
  {
    q: "Will pausing and relaunching fix it?",
    a: "Sometimes it temporarily resets learning phase metrics, but it doesn't solve fatigue. The audience still remembers. Relaunching with the same creative buys you 2-5 days before performance collapses again.",
  },
  {
    q: "What if my account got restricted?",
    a: "Account health issues will show in Business Manager — policy violations, disabled ads, or restricted ad accounts. If Business Manager is clean, you're dealing with performance issues, not account issues.",
  },
  {
    q: "How do I fix creative fatigue without spending months producing ads?",
    a: "That's exactly what our batch video ads service is built for. One 15-20 minute recording, 300-1000 scripted ad variations in 24 hours.",
  },
];

const CAUSES = [
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Account issues",
    pct: 5,
    diag: "Check Business Manager for policy strikes or billing failures. If clean, it's not this.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Audience saturation",
    pct: 10,
    diag: "You've served to the full audience. Check reach vs. audience size — if reach is 60%+ of the pool, you're saturated.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Bidding / budget shifts",
    pct: 5,
    diag: "Did you change from lowest cost to cost cap? Cut budget below learning phase? These disrupt the algorithm.",
  },
  {
    icon: <MousePointerClick className="w-6 h-6" />,
    title: "Landing page regression",
    pct: 10,
    diag: "Compare LP conversion rate now vs. 30 days ago on identical traffic. If it dropped, fix the page.",
  },
  {
    icon: <Film className="w-6 h-6" />,
    title: "Creative fatigue",
    pct: 70,
    diag: "Same 3-5 ads running >2 weeks, frequency climbing, CTR decay. The #1 cause, by a wide margin.",
    highlight: true,
  },
];

export default function WhyFacebookAdsStopWorkingPage() {
  return (
    <main className="min-h-screen">
      <FAQJsonLd faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          {
            name: "Why Facebook Ads Stop Working",
            url: "https://prestyj.com/why-facebook-ads-stop-working",
          },
        ]}
      />

      {/* HERO */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
            DIAGNOSTIC GUIDE
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Why Facebook Ads Stop Working
            <span className="block text-primary mt-2 text-3xl md:text-4xl">
              (And It&apos;s Probably Not What You Think)
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Usually your ads didn&apos;t break. Your creative expired. Here&apos;s a
            diagnostic that walks through the five possible causes — and why 80% of
            the time it&apos;s the one nobody wants to hear.
          </p>
          <Button size="lg" className="font-bold" asChild>
            <Link href="/batch-video-ads#pricing">
              Pick My Batch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* STATS CALLOUT */}
      <section className="py-12 px-4 bg-muted/20 border-y border-border/50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl md:text-6xl font-bold text-primary">
              <CountUp to={70} duration={1.5} />%
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              of stalled accounts: creative fatigue
            </p>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-bold text-warning">
              <CountUp to={14} duration={1.5} />d
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              average creative lifespan at $5k+/mo spend
            </p>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-bold text-success">
              <CountUp to={3} duration={1.5} />×
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              frequency where fatigue typically begins
            </p>
          </div>
        </div>
      </section>

      {/* THE 5 THINGS */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              The Five Things It Might Be
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Ranked by how often each actually causes the problem.
            </p>
          </AnimateOnScroll>

          <div className="space-y-4">
            {CAUSES.map((cause, i) => (
              <AnimateOnScroll key={cause.title} delay={i * 0.05}>
                <BorderGlow
                  borderRadius={18}
                  innerClassName="p-6"
                  className={cause.highlight ? "shadow-lg shadow-primary/20" : ""}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        cause.highlight
                          ? "bg-primary/20 text-primary"
                          : "bg-muted/50 text-muted-foreground"
                      }`}
                    >
                      {cause.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="font-heading font-bold text-xl text-foreground">
                          {cause.title}
                        </h3>
                        <Badge
                          variant="outline"
                          className={
                            cause.highlight
                              ? "border-primary/40 text-primary"
                              : "border-border text-muted-foreground"
                          }
                        >
                          ~{cause.pct}% of cases
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">
                        <span className="text-foreground font-semibold">Diagnostic: </span>
                        {cause.diag}
                      </p>
                    </div>
                  </div>
                </BorderGlow>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* DEEPER DIVE */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Why Creative Fatigue Is the #1 Cause for 80% of Accounts
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Media buyers who run real accounts know this: the platform almost never
              just &ldquo;stops working.&rdquo; Accounts don&apos;t silently break.
              Creative does. The reason it feels like the platform broke is that
              creative fatigue looks like a platform problem — your CTR drops, CPMs
              rise, cost per lead creeps up — but the root cause is that your
              audience has seen your 3-5 ads too many times.
            </p>
            <p className="text-muted-foreground text-lg mb-4">
              The second reason it&apos;s the #1 cause: every other cause on the list
              is relatively rare. Account restrictions are detectable in Business
              Manager. Saturation requires you to have burned through your full
              audience, which takes sustained spend. Bidding and landing page issues
              show up in specific metrics you can isolate. Creative fatigue is the
              default explanation — everything else has a signature that rules it in
              or out quickly.
            </p>
            <p className="text-muted-foreground text-lg">
              So if you diagnosed the other four and came up empty, you&apos;re looking
              at fatigue. The{" "}
              <Link href="/ad-fatigue-solution" className="text-primary hover:underline">
                real fix
              </Link>{" "}
              is creative supply — enough new variations, delivered at the right
              cadence, to keep your audience from ever seeing the same ad five times
              in two weeks.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* DIAGNOSTIC CHECKLIST */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll className="mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Diagnostic: Is It Your Creative?
            </h2>
            <p className="text-muted-foreground text-lg">
              Answer yes/no to each. Four or more &ldquo;yes&rdquo; answers = creative
              fatigue, almost certainly.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <BorderGlow borderRadius={18} innerClassName="p-6 md:p-8">
              <ol className="space-y-4">
                {[
                  "Have your currently running ads been live for more than 14 days?",
                  "Do you have fewer than 10 active creatives per ad set?",
                  "Is your rolling 7-day frequency above 2.5 on your main audience?",
                  "Has CTR dropped 25%+ from launch week on the same audience?",
                  "Has CPM inflated 15%+ with no targeting changes?",
                  "Have comments and engagement dropped on existing ads?",
                  "Are you spending $3k+/month and producing fewer than 8 new ads per month?",
                  "Do your retargeting audiences perform worse than they did 30 days ago?",
                ].map((q, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 pb-4 border-b border-border/50 last:border-0 last:pb-0"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground">{q}</p>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="px-3 py-1 rounded border border-border text-muted-foreground">
                        Yes
                      </span>
                      <span className="px-3 py-1 rounded border border-border text-muted-foreground">
                        No
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </BorderGlow>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FIX YOU CAN EXECUTE */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              The Fix You Can Actually Execute
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Knowing the problem is creative fatigue doesn&apos;t help unless you can
              produce enough creative to fix it. The entire reason most accounts stay
              fatigued is that producing 20-50+ new ads per month is impossible
              in-house and painful through agencies.
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              That&apos;s the gap we fill. One 15-20 minute selfie recording session
              turned into 300-1000 unique scripted ad variations in 24 hours. Enough
              to feed your refresh pipeline for weeks off a single recording.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                "Every hook, body, and CTA tested in parallel",
                "Native selfie format that outperforms polished production",
                "24-hour turnaround — not weeks",
                "One recording, months of creative supply",
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-2 text-foreground">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <Button size="lg" className="font-bold" asChild>
              <Link href="/batch-video-ads#pricing">
                Pick My Batch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Questions
            </h2>
          </AnimateOnScroll>
          <div className="space-y-4">
            {FAQS.map((item, i) => (
              <AnimateOnScroll key={item.q} delay={i * 0.05}>
                <details className="group bg-card border border-border rounded-xl">
                  <summary className="cursor-pointer p-6 font-heading font-semibold text-foreground flex items-center justify-between gap-4">
                    <span>{item.q}</span>
                    <span className="transition group-open:rotate-180 text-primary">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {item.a}
                  </div>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Stop Diagnosing. Start Shipping.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              One recording. 300-1000 ad variations. Your account alive again in 24
              hours.
            </p>
            <Button size="lg" className="font-bold text-lg px-10 py-6" asChild>
              <Link href="/batch-video-ads#pricing">
                Pick My Batch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
