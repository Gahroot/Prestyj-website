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
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
            FREE CALCULATOR
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
            How Many Ad Creatives
            <span className="block text-primary mt-2">Should You Actually Test?</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Most businesses under-test creative by 10×. Enter your numbers and see the
            statistical minimum — plus what&apos;s realistic for finding breakout winners.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <BorderGlow borderRadius={20} innerClassName="p-6 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-foreground">
                Creative Test Volume Calculator
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* INPUTS */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Monthly Ad Spend: <span className="text-primary">${spend.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min={500}
                    max={50000}
                    step={500}
                    value={spend}
                    onChange={(e) => setSpend(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>$500</span>
                    <span>$50,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Estimated CPC: <span className="text-primary">${cpc.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min={0.5}
                    max={15}
                    step={0.25}
                    value={cpc}
                    onChange={(e) => setCpc(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>$0.50</span>
                    <span>$15.00</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Confidence Level
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[90, 95, 99].map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setConfidence(c as 90 | 95 | 99)}
                        className={`py-2 px-4 rounded-lg border font-semibold transition ${
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
              <div className="bg-muted/30 rounded-xl p-6 border border-border">
                <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-4">
                  Your Results
                </p>

                <div className="mb-6 pb-6 border-b border-border/50">
                  <p className="text-sm text-muted-foreground mb-1">Statistical minimum</p>
                  <p className="text-4xl font-bold text-foreground">
                    <CountUp to={statMin} duration={0.6} /> creatives / month
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Based on {minClicks} clicks per variant at {confidence}% confidence
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-1">
                    Recommended volume (to find outlier winners)
                  </p>
                  <p className="text-5xl font-bold text-primary">
                    <CountUp to={recommended} duration={0.6} />
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    ~2.5× statistical minimum · accounts for distribution of winners/losers
                  </p>
                </div>

                <div className="bg-primary/5 border border-primary/30 rounded-lg p-4 mb-4">
                  <p className="text-xs font-semibold text-primary uppercase mb-1">
                    Suggested batch tier
                  </p>
                  <p className="text-lg font-heading font-bold text-foreground">
                    {tier.name} — {tier.price}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {tier.count} scripted ads in 24 hours
                  </p>
                </div>

                <Button size="lg" className="w-full font-bold" asChild>
                  <Link href="/batch-video-ads#pricing">
                    Pick My Batch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </BorderGlow>
        </div>
      </section>

      {/* WHAT THIS MEANS */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              What This Actually Means
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Most businesses produce 2-4 creatives per month and wonder why nothing
              scales. The math above tells you why: they&apos;re testing at 10-20% of
              the volume required to surface a real winner. It&apos;s not that the
              ads are bad — it&apos;s that the sample is too small for winners to
              separate from the noise.
            </p>
            <p className="text-muted-foreground text-lg mb-4">
              Winning ads are statistical outliers. In any batch of 50 variations, you
              typically see 2-4 breakouts, 30-ish &ldquo;meh,&rdquo; and the rest flat
              or bad. You cannot reliably pick the breakouts in advance — which is
              exactly why volume is the lever, not taste.
            </p>
            <p className="text-muted-foreground text-lg">
              Producing this volume the traditional way is impossible for most
              businesses. That&apos;s why we built{" "}
              <Link href="/batch-video-ads" className="text-primary hover:underline">
                batch video ads
              </Link>
              : one recording session, 300-1000 scripted variations delivered in 24
              hours.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* THE 50-HOOK RULE */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              The 50-Hook Rule
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Media buyers running real accounts converge on the same number: it takes
              ~50 hook variations to find one that consistently breaks out.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <AnimateOnScroll>
              <BorderGlow borderRadius={18} innerClassName="p-6 h-full">
                <Target className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  Hooks
                </h3>
                <p className="text-muted-foreground text-sm">
                  50+ hook variations to find one that holds attention past 3 seconds.
                </p>
              </BorderGlow>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <BorderGlow borderRadius={18} innerClassName="p-6 h-full">
                <Zap className="w-8 h-8 text-warning mb-3" />
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  Bodies
                </h3>
                <p className="text-muted-foreground text-sm">
                  30+ body variations to find which pain-point framing converts.
                </p>
              </BorderGlow>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <BorderGlow borderRadius={18} innerClassName="p-6 h-full">
                <TrendingUp className="w-8 h-8 text-success mb-3" />
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  CTAs
                </h3>
                <p className="text-muted-foreground text-sm">
                  10+ CTA variants to find what pushes the click at the right moment.
                </p>
              </BorderGlow>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto">
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
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Questions
            </h2>
          </AnimateOnScroll>
          <div className="space-y-4">
            {faqs.map((item, i) => (
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
              Stop Under-Testing
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              One recording. Hundreds of variations. The volume your spend actually
              needs.
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
