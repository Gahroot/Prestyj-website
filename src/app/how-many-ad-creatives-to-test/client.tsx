"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, Target, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import BorderGlow from "@/components/ui/border-glow";
import CountUp from "@/components/ui/count-up";

type Faq = { q: string; a: string };

const TIER_MAP = (recommended: number) => {
  if (recommended <= 300) return { name: "Minimum", price: "$1,497", count: 300 };
  if (recommended <= 500) return { name: "Pro", price: "$2,497", count: 500 };
  return { name: "Max", price: "$3,997", count: 1000 };
};

export function HowManyCreativesClient({ faqs }: { faqs: Faq[] }) {
  const [spend, setSpend] = useState(5000);
  const [cpc, setCpc] = useState(2.5);
  const [confidence, setConfidence] = useState<90 | 95 | 99>(95);

  const { minClicks, statMin, recommended, tier } = useMemo(() => {
    const confidenceMultiplier = confidence === 99 ? 1.8 : confidence === 95 ? 1 : 0.7;
    const clicksPerVariant = 100 * confidenceMultiplier;
    const totalClicks = spend / Math.max(cpc, 0.1);
    const statMinRaw = Math.max(1, Math.floor(totalClicks / clicksPerVariant));
    const recommendedRaw = statMinRaw * 2.5;
    const tier = TIER_MAP(recommendedRaw);
    return {
      minClicks: Math.round(clicksPerVariant),
      statMin: statMinRaw,
      recommended: Math.round(recommendedRaw),
      tier,
    };
  }, [spend, cpc, confidence]);

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="px-4 pt-24 pb-12">
        <div className="mx-auto max-w-5xl text-center">
          <Badge variant="outline" className="border-primary/50 text-primary mb-6">
            FREE CALCULATOR
          </Badge>
          <h1 className="font-heading text-foreground mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
            How Many Ad Creatives
            <span className="text-primary mt-2 block">Should You Actually Test?</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg md:text-xl">
            Most businesses under-test creative by 10×. Enter your numbers and see the statistical
            minimum — plus what&apos;s realistic for finding breakout winners.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-5xl">
          <BorderGlow borderRadius={20} innerClassName="p-6 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
                <Calculator className="h-5 w-5" />
              </div>
              <h2 className="font-heading text-foreground text-2xl font-bold">
                Creative Test Volume Calculator
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* INPUTS */}
              <div className="space-y-6">
                <div>
                  <label className="text-foreground mb-2 block text-sm font-semibold">
                    Monthly Ad Spend:{" "}
                    <span className="text-primary">${spend.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min={500}
                    max={50000}
                    step={500}
                    value={spend}
                    onChange={(e) => setSpend(Number(e.target.value))}
                    className="accent-primary w-full"
                  />
                  <div className="text-muted-foreground mt-1 flex justify-between text-xs">
                    <span>$500</span>
                    <span>$50,000</span>
                  </div>
                </div>

                <div>
                  <label className="text-foreground mb-2 block text-sm font-semibold">
                    Estimated CPC: <span className="text-primary">${cpc.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min={0.5}
                    max={15}
                    step={0.25}
                    value={cpc}
                    onChange={(e) => setCpc(Number(e.target.value))}
                    className="accent-primary w-full"
                  />
                  <div className="text-muted-foreground mt-1 flex justify-between text-xs">
                    <span>$0.50</span>
                    <span>$15.00</span>
                  </div>
                </div>

                <div>
                  <label className="text-foreground mb-3 block text-sm font-semibold">
                    Confidence Level
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[90, 95, 99].map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setConfidence(c as 90 | 95 | 99)}
                        className={`rounded-lg border px-4 py-2 font-semibold transition ${
                          confidence === c
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-muted-foreground hover:border-primary/50"
                        }`}
                      >
                        {c}%
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* RESULTS */}
              <div className="bg-muted/30 border-border rounded-xl border p-6">
                <p className="text-muted-foreground mb-4 text-xs font-semibold tracking-wide uppercase">
                  Your Results
                </p>

                <div className="border-border/50 mb-6 border-b pb-6">
                  <p className="text-muted-foreground mb-1 text-sm">Statistical minimum</p>
                  <p className="text-foreground text-4xl font-bold">
                    <CountUp to={statMin} duration={0.6} /> creatives / month
                  </p>
                  <p className="text-muted-foreground mt-2 text-xs">
                    Based on {minClicks} clicks per variant at {confidence}% confidence
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-muted-foreground mb-1 text-sm">
                    Recommended volume (to find outlier winners)
                  </p>
                  <p className="text-primary text-5xl font-bold">
                    <CountUp to={recommended} duration={0.6} />
                  </p>
                  <p className="text-muted-foreground mt-2 text-xs">
                    ~2.5× statistical minimum · accounts for distribution of winners/losers
                  </p>
                </div>

                <div className="bg-primary/5 border-primary/30 mb-4 rounded-lg border p-4">
                  <p className="text-primary mb-1 text-xs font-semibold uppercase">
                    Suggested batch tier
                  </p>
                  <p className="font-heading text-foreground text-lg font-bold">
                    {tier.name} — {tier.price}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {tier.count} scripted ads in 24 hours
                  </p>
                </div>

                {/* CTA-sweep: cold traffic → batch offer */}
                <Button size="lg" className="w-full font-bold" asChild>
                  <Link href="/batch-video-ads">
                    Get 100 ads for $497
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </BorderGlow>
        </div>
      </section>

      {/* WHAT THIS MEANS */}
      <section className="bg-muted/20 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="font-heading text-foreground mb-6 text-3xl font-bold md:text-4xl">
              What This Actually Means
            </h2>
            <p className="text-muted-foreground mb-4 text-lg">
              Most businesses produce 2-4 creatives per month and wonder why nothing scales. The
              math above tells you why: they&apos;re testing at 10-20% of the volume required to
              surface a real winner. It&apos;s not that the ads are bad — it&apos;s that the sample
              is too small for winners to separate from the noise.
            </p>
            <p className="text-muted-foreground mb-4 text-lg">
              Winning ads are statistical outliers. In any batch of 50 variations, you typically see
              2-4 breakouts, 30-ish &ldquo;meh,&rdquo; and the rest flat or bad. You cannot reliably
              pick the breakouts in advance — which is exactly why volume is the lever, not taste.
            </p>
            <p className="text-muted-foreground text-lg">
              Producing this volume the traditional way is impossible for most businesses.
              That&apos;s why we built{" "}
              <Link href="/batch-video-ads" className="text-primary hover:underline">
                batch video ads
              </Link>
              : one recording session, 300-1000 scripted variations delivered in 24 hours.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* THE 50-HOOK RULE */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <AnimateOnScroll className="mb-10 text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-4xl">
              The 50-Hook Rule
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
              Media buyers running real accounts converge on the same number: it takes ~50 hook
              variations to find one that consistently breaks out.
            </p>
          </AnimateOnScroll>

          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <AnimateOnScroll>
              <BorderGlow borderRadius={18} innerClassName="p-6 h-full">
                <Target className="text-primary mb-3 h-8 w-8" />
                <h3 className="font-heading text-foreground mb-2 text-lg font-bold">Hooks</h3>
                <p className="text-muted-foreground text-sm">
                  50+ hook variations to find one that holds attention past 3 seconds.
                </p>
              </BorderGlow>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <BorderGlow borderRadius={18} innerClassName="p-6 h-full">
                <Zap className="text-warning mb-3 h-8 w-8" />
                <h3 className="font-heading text-foreground mb-2 text-lg font-bold">Bodies</h3>
                <p className="text-muted-foreground text-sm">
                  30+ body variations to find which pain-point framing converts.
                </p>
              </BorderGlow>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <BorderGlow borderRadius={18} innerClassName="p-6 h-full">
                <TrendingUp className="text-success mb-3 h-8 w-8" />
                <h3 className="font-heading text-foreground mb-2 text-lg font-bold">CTAs</h3>
                <p className="text-muted-foreground text-sm">
                  10+ CTA variants to find what pushes the click at the right moment.
                </p>
              </BorderGlow>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll>
            <p className="text-muted-foreground mx-auto max-w-3xl text-center">
              Multiply those together and you get why{" "}
              <Link href="/batch-video-ads" className="text-primary hover:underline">
                300 ads in 24 hours
              </Link>{" "}
              isn&apos;t overkill — it&apos;s the floor for statistical honesty.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/20 px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll className="mb-10 text-center">
            <h2 className="font-heading text-foreground text-3xl font-bold md:text-4xl">
              Questions
            </h2>
          </AnimateOnScroll>
          <div className="space-y-4">
            {faqs.map((item, i) => (
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
              Stop Under-Testing
            </h2>
            <p className="text-muted-foreground mb-8 text-lg md:text-xl">
              One recording. Hundreds of variations. The volume your spend actually needs.
            </p>
            {/* CTA-sweep: cold traffic → batch offer */}
            <Button size="lg" className="px-10 py-6 text-lg font-bold" asChild>
              <Link href="/batch-video-ads">
                Get 100 ads for $497
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
