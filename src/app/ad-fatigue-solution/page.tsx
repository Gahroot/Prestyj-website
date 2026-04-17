import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import BorderGlow from "@/components/ui/border-glow";
import CountUp from "@/components/ui/count-up";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "Ad Fatigue Solution: It's a Supply Problem, Not a Strategy Problem | PRESTYJ",
  description:
    "Ad fatigue isn't fixed by 'rotate your creative' advice. It's a creative supply problem. Here's the math on how many ads you actually need per month — and how to produce them.",
  openGraph: {
    title: "Ad Fatigue Solution: It's a Supply Problem | PRESTYJ",
    description:
      "Fatigue means your creative library is too small relative to spend. Here's the real fix.",
    type: "website",
  },
  alternates: { canonical: "https://prestyj.com/ad-fatigue-solution" },
};

const FAQS = [
  {
    q: "Isn't this just duct-taping a bigger problem?",
    a: "No. Ad fatigue is a mechanical outcome of repetition × frequency × audience size — it happens to every account at every spend tier. It's not a symptom of a bad offer or a broken funnel. The only real lever is creative volume. You can optimize everything else perfectly and still get fatigued by Friday if your library is too small.",
  },
  {
    q: "What if my offer is the real issue?",
    a: "If your offer doesn't convert, no amount of creative will save it. But most accounts have a workable offer and a creative bottleneck — you can tell because CTRs were fine at launch and only decayed after the same audience saw the same 3-5 ads 4+ times. If launch-week metrics were strong and decayed, it's fatigue. If launch-week metrics were bad, it's offer.",
  },
  {
    q: "How many creatives do I actually need per month?",
    a: "At $3k-5k/mo spend: 8-12 fresh variations per month minimum. At $10k+/mo: 20-40+ per month. At $25k+/mo: 50-100+. Most teams produce 2-4 per month and wonder why performance decays by week three.",
  },
  {
    q: "Can I just rotate between a few good ads?",
    a: "Rotating 3 ads between 3 ad sets doesn't reset fatigue — your audience still sees the same creative inventory. Rotation only works if the library is large enough that the effective repeat rate per user stays under 3-4.",
  },
  {
    q: "Will AI-generated ads solve this?",
    a: "For ecommerce where the product is the hero, sometimes yes. For service businesses where trust is the purchase driver, AI-generated talking heads underperform real founders on camera — often dramatically. See our breakdown of AI vs human ads for details.",
  },
  {
    q: "How do you actually produce this volume?",
    a: "One 15-20 minute selfie recording session, turned into 300-1000 unique scripted variations in 24 hours. See batch video ads for the full system.",
  },
];

const REFRESH_TABLE = [
  { spend: "$1k-3k/mo", fresh: "4-6 ads", frequency: "Every 2-3 weeks" },
  { spend: "$3k-5k/mo", fresh: "8-12 ads", frequency: "Every 2 weeks" },
  { spend: "$5k-10k/mo", fresh: "15-25 ads", frequency: "Weekly" },
  { spend: "$10k-25k/mo", fresh: "30-50 ads", frequency: "Twice weekly" },
  { spend: "$25k+/mo", fresh: "50-100+ ads", frequency: "Daily drops" },
];

export default function AdFatigueSolutionPage() {
  return (
    <main className="min-h-screen">
      <FAQJsonLd faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Ad Fatigue Solution", url: "https://prestyj.com/ad-fatigue-solution" },
        ]}
      />

      {/* HERO */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
            AD FATIGUE · DIAGNOSED
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Ad Fatigue Isn&apos;t a Strategy Problem.
            <span className="block text-primary mt-2">It&apos;s a Supply Problem.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Every blog post tells you to &ldquo;rotate your creative.&rdquo; None of them tell you
            how to produce the replacement volume. That&apos;s because the real answer
            isn&apos;t a strategy — it&apos;s a factory.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="font-bold" asChild>
              <Link href="/batch-video-ads#pricing">
                Pick My Batch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/how-often-refresh-ad-creative">
                Calculate my refresh cadence
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* STATS CALLOUT */}
      <section className="py-12 px-4 bg-muted/20 border-y border-border/50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl md:text-6xl font-bold text-primary">
              <CountUp to={80} duration={1.5} />%
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              of underperforming ad accounts are fatigued, not broken
            </p>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-bold text-warning">
              <CountUp to={50} duration={1.5} />+
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              hook variations needed to find one that converts
            </p>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-bold text-success">
              <CountUp to={3} duration={1.5} />×
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              frequency cap where CTR decay usually begins
            </p>
          </div>
        </div>
      </section>

      {/* WHY YOUR ADS STOP WORKING */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll className="mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Why Your Ads Stop Working
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Ad fatigue is not mysterious. It&apos;s mechanical. You pick an audience.
              You run the same few ads at it. Frequency climbs. CTR drops. CPMs inflate
              because the algorithm has to reach deeper into the audience to find
              someone who hasn&apos;t seen your ad four times already.
            </p>
            <p className="text-muted-foreground text-lg mb-4">
              The math is brutal: <span className="text-foreground font-semibold">same audience × same hooks × repeated exposure = fatigue</span>.
              There is no strategy, bid cap, or optimization lever that defeats this
              equation. Only fresh creative resets it.
            </p>
            <p className="text-muted-foreground text-lg">
              So when a guru says &ldquo;refresh your creative every 7-14 days,&rdquo;
              they&apos;re technically correct and practically useless. That&apos;s like
              telling a starving person to eat more food. The question isn&apos;t
              <em> whether</em> to refresh — it&apos;s <em>how</em> you produce the
              replacement volume on a schedule your business can actually sustain.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* WHAT THE GURUS MISS */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <Badge variant="outline" className="mb-4 border-destructive/40 text-destructive">
              THE BLIND SPOT
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              What the Gurus Miss
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              The standard advice — &ldquo;rotate your creative,&rdquo; &ldquo;refresh
              your hooks,&rdquo; &ldquo;test new angles&rdquo; — assumes you have a
              production pipeline capable of feeding 15, 30, or 50 new ads into the
              account every week. Almost nobody does. The advice is given by people
              whose business is coaching, not actually producing volume.
            </p>
            <p className="text-muted-foreground text-lg">
              A $10k/month spend account needs roughly 20-40 fresh creatives per month
              to keep frequency capped below fatigue thresholds. At the industry
              average of 1-2 ads produced per week per in-house team, that account
              will be perpetually fatigued. It&apos;s not a tactics problem. It&apos;s a
              capacity problem — and no amount of &ldquo;rotate your hooks&rdquo;
              advice creates capacity.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* THE REAL FIX */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              The Real Fix: Creative Supply at Cadence
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              You don&apos;t solve fatigue with a better strategy. You solve it by
              building a creative supply chain that matches your spend.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Record once", body: "One 15-20 minute selfie session. No studio. No crew. Just you reading scripts we wrote for you." },
              { num: "02", title: "Get 300-1000 variations", body: "Every hook, body, and CTA permutation cut into unique ads — delivered in 24 hours." },
              { num: "03", title: "Feed the algorithm", body: "Drip new variations weekly. Frequency stays capped. Fatigue never arrives." },
            ].map((step, i) => (
              <AnimateOnScroll key={step.num} delay={i * 0.1}>
                <BorderGlow borderRadius={18} innerClassName="p-8 h-full">
                  <span className="text-xs font-mono text-primary">{step.num}</span>
                  <h3 className="text-xl font-heading font-bold text-foreground mt-3 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.body}</p>
                </BorderGlow>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* REFRESH CADENCE MATH */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              The Math of Refresh Cadence
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              How many fresh ads you actually need per month, by spend tier.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <BorderGlow borderRadius={18} innerClassName="p-2 md:p-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="border-b border-border">
                    <tr>
                      <th className="p-4 font-heading font-bold text-foreground">Monthly Spend</th>
                      <th className="p-4 font-heading font-bold text-foreground">Fresh Ads / Month</th>
                      <th className="p-4 font-heading font-bold text-foreground">Drop Cadence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {REFRESH_TABLE.map((row, i) => (
                      <tr key={row.spend} className={i < REFRESH_TABLE.length - 1 ? "border-b border-border/50" : ""}>
                        <td className="p-4 text-foreground font-semibold">{row.spend}</td>
                        <td className="p-4 text-primary font-semibold">{row.fresh}</td>
                        <td className="p-4 text-muted-foreground">{row.frequency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </BorderGlow>
          </AnimateOnScroll>

          <AnimateOnScroll className="mt-8 text-center">
            <p className="text-muted-foreground mb-6">
              Compare to your current output. If you&apos;re producing 2-4 ads a month
              and spending $5k+, you&apos;re structurally fatigued — and no
              optimization will change that.
            </p>
            <Button size="lg" className="font-bold" asChild>
              <Link href="/batch-video-ads#pricing">
                Pick My Batch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SIGNS YOU ARE FATIGUED */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Five Signs You&apos;re Already Fatigued
            </h2>
            <ol className="space-y-4">
              {[
                "CTR has dropped 30%+ from launch week on the same audience.",
                "Frequency in Ads Manager is sitting above 3 and climbing.",
                "CPM has inflated 20%+ with no audience change.",
                "Cost per lead is creeping up week over week despite unchanged targeting.",
                "You have 3-5 active creatives and they&apos;ve been running more than 2 weeks.",
              ].map((sign, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-foreground text-lg pt-1" dangerouslySetInnerHTML={{ __html: sign }} />
                </li>
              ))}
            </ol>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-muted/20">
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
              Solve Fatigue at the Source
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              One recording. 300-1000 scripted ad variations. Your creative library
              finally big enough to match your spend.
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
