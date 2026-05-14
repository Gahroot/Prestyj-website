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
  title: "Why Facebook Ads Stop Working (It's Not What You Think)",
  description:
    "Your ads didn't break — your creative expired. A diagnostic guide to the 5 real reasons Facebook ads stop working, and why creative fatigue is the culprit in 80% of accounts.",
  openGraph: {
    title: "Why Facebook Ads Stop Working",
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
    icon: <CreditCard className="h-6 w-6" />,
    title: "Account issues",
    pct: 5,
    diag: "Check Business Manager for policy strikes or billing failures. If clean, it's not this.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Audience saturation",
    pct: 10,
    diag: "You've served to the full audience. Check reach vs. audience size — if reach is 60%+ of the pool, you're saturated.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Bidding / budget shifts",
    pct: 5,
    diag: "Did you change from lowest cost to cost cap? Cut budget below learning phase? These disrupt the algorithm.",
  },
  {
    icon: <MousePointerClick className="h-6 w-6" />,
    title: "Landing page regression",
    pct: 10,
    diag: "Compare LP conversion rate now vs. 30 days ago on identical traffic. If it dropped, fix the page.",
  },
  {
    icon: <Film className="h-6 w-6" />,
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
      <section className="px-4 pt-24 pb-16">
        <div className="mx-auto max-w-5xl text-center">
          <Badge variant="outline" className="border-primary/50 text-primary mb-6">
            DIAGNOSTIC GUIDE
          </Badge>
          <h1 className="font-heading text-foreground mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
            Why Facebook Ads Stop Working
            <span className="text-primary mt-2 block text-3xl md:text-4xl">
              (And It&apos;s Probably Not What You Think)
            </span>
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg md:text-xl">
            Usually your ads didn&apos;t break. Your creative expired. Here&apos;s a diagnostic that
            walks through the five possible causes — and why 80% of the time it&apos;s the one
            nobody wants to hear.
          </p>
          <Button size="lg" className="font-bold" asChild>
            <Link href="/book-demo">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* STATS CALLOUT */}
      <section className="bg-muted/20 border-border/50 border-y px-4 py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 text-center md:grid-cols-3">
          <div>
            <div className="text-primary text-5xl font-bold md:text-6xl">
              <CountUp to={70} duration={1.5} />%
            </div>
            <p className="text-muted-foreground mt-2 text-sm">
              of stalled accounts: creative fatigue
            </p>
          </div>
          <div>
            <div className="text-warning text-5xl font-bold md:text-6xl">
              <CountUp to={14} duration={1.5} />d
            </div>
            <p className="text-muted-foreground mt-2 text-sm">
              average creative lifespan at $5k+/mo spend
            </p>
          </div>
          <div>
            <div className="text-success text-5xl font-bold md:text-6xl">
              <CountUp to={3} duration={1.5} />×
            </div>
            <p className="text-muted-foreground mt-2 text-sm">
              frequency where fatigue typically begins
            </p>
          </div>
        </div>
      </section>

      {/* THE 5 THINGS */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <AnimateOnScroll className="mb-12 text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
              The Five Things It Might Be
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
              Ranked by how often each actually causes the problem.
            </p>
          </AnimateOnScroll>

          <div className="space-y-4">
            {CAUSES.map((cause, i) => (
              <AnimateOnScroll key={cause.title} delay={i * 0.05}>
                <BorderGlow
                  borderRadius={18}
                  innerClassName="p-6"
                  className={cause.highlight ? "shadow-primary/20 shadow-lg" : ""}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${
                        cause.highlight
                          ? "bg-primary/20 text-primary"
                          : "bg-muted/50 text-muted-foreground"
                      }`}
                    >
                      {cause.icon}
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        <h3 className="font-heading text-foreground text-xl font-bold">
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
      <section className="bg-muted/20 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="font-heading text-foreground mb-6 text-3xl font-bold md:text-4xl">
              Why Creative Fatigue Is the #1 Cause for 80% of Accounts
            </h2>
            <p className="text-muted-foreground mb-4 text-lg">
              Media buyers who run real accounts know this: the platform almost never just
              &ldquo;stops working.&rdquo; Accounts don&apos;t silently break. Creative does. The
              reason it feels like the platform broke is that creative fatigue looks like a platform
              problem — your CTR drops, CPMs rise, cost per lead creeps up — but the root cause is
              that your audience has seen your 3-5 ads too many times.
            </p>
            <p className="text-muted-foreground mb-4 text-lg">
              The second reason it&apos;s the #1 cause: every other cause on the list is relatively
              rare. Account restrictions are detectable in Business Manager. Saturation requires you
              to have burned through your full audience, which takes sustained spend. Bidding and
              landing page issues show up in specific metrics you can isolate. Creative fatigue is
              the default explanation — everything else has a signature that rules it in or out
              quickly.
            </p>
            <p className="text-muted-foreground text-lg">
              So if you diagnosed the other four and came up empty, you&apos;re looking at fatigue.
              The{" "}
              <Link href="/ad-fatigue-solution" className="text-primary hover:underline">
                real fix
              </Link>{" "}
              is creative supply — enough new variations, delivered at the right cadence, to keep
              your audience from ever seeing the same ad five times in two weeks.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* DIAGNOSTIC CHECKLIST */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll className="mb-8">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
              Diagnostic: Is It Your Creative?
            </h2>
            <p className="text-muted-foreground text-lg">
              Answer yes/no to each. Four or more &ldquo;yes&rdquo; answers = creative fatigue,
              almost certainly.
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
                    className="border-border/50 flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground">{q}</p>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="border-border text-muted-foreground rounded border px-3 py-1">
                        Yes
                      </span>
                      <span className="border-border text-muted-foreground rounded border px-3 py-1">
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
      <section className="bg-muted/20 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="font-heading text-foreground mb-6 text-3xl font-bold md:text-4xl">
              The Fix You Can Actually Execute
            </h2>
            <p className="text-muted-foreground mb-4 text-lg">
              Knowing the problem is creative fatigue doesn&apos;t help unless you can produce
              enough creative to fix it. The entire reason most accounts stay fatigued is that
              producing 20-50+ new ads per month is impossible in-house and painful through
              agencies.
            </p>
            <p className="text-muted-foreground mb-6 text-lg">
              That&apos;s the gap we fill. One 15-20 minute selfie recording session turned into
              300-1000 unique scripted ad variations in 24 hours. Enough to feed your refresh
              pipeline for weeks off a single recording.
            </p>
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "Every hook, body, and CTA tested in parallel",
                "Native selfie format that outperforms polished production",
                "24-hour turnaround — not weeks",
                "One recording, months of creative supply",
              ].map((benefit) => (
                <div key={benefit} className="text-foreground flex items-start gap-2">
                  <Check className="text-success mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <Button size="lg" className="font-bold" asChild>
              <Link href="/book-demo">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll className="mb-10 text-center">
            <h2 className="font-heading text-foreground text-3xl font-bold md:text-4xl">
              Questions
            </h2>
          </AnimateOnScroll>
          <div className="space-y-4">
            {FAQS.map((item, i) => (
              <AnimateOnScroll key={item.q} delay={i * 0.05}>
                <details className="group bg-card border-border rounded-xl border">
                  <summary className="font-heading text-foreground flex cursor-pointer items-center justify-between gap-4 p-6 font-semibold">
                    <span>{item.q}</span>
                    <span className="text-primary transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="text-muted-foreground px-6 pb-6 leading-relaxed">{item.a}</div>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary/5 px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-5xl">
              Stop Diagnosing. Start Shipping.
            </h2>
            <p className="text-muted-foreground mb-8 text-lg md:text-xl">
              One recording. 300-1000 ad variations. Your account alive again in 24 hours.
            </p>
            <Button size="lg" className="px-10 py-6 text-lg font-bold" asChild>
              <Link href="/book-demo">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
