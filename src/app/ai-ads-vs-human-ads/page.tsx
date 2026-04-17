import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X, Bot, User, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import BorderGlow from "@/components/ui/border-glow";
import CountUp from "@/components/ui/count-up";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

export const metadata: Metadata = {
  title: "AI Ads vs Human Ads: Which Actually Converts in 2026? | PRESTYJ",
  description:
    "AI-generated avatars are fast and cheap — but for service businesses where trust drives the sale, a real owner on camera wins. Here's the honest breakdown with a comparison table.",
  openGraph: {
    title: "AI Ads vs Human Ads: Which Converts in 2026? | PRESTYJ",
    description:
      "For service businesses, real faces beat AI avatars. Here's why, with a full comparison table.",
    type: "website",
  },
  alternates: { canonical: "https://prestyj.com/ai-ads-vs-human-ads" },
};

const FAQS = [
  {
    q: "Aren't AI avatars basically indistinguishable from humans now?",
    a: "On a still frame, sometimes. On a 15-second video with a human brain watching? No. Micro-expressions, breath patterns, unscripted eye movement, and the specific cadence of real speech are still detectable — and audiences pattern-match to 'ad' within 2-3 seconds of seeing one. That pattern-match is what kills service-business conversion.",
  },
  {
    q: "Do AI ads ever outperform real humans?",
    a: "Yes — usually in ecommerce and DTC where the product is the hero and trust is a secondary purchase driver. Fast iteration on product-forward creative is a real AI strength. The moment trust in a person is what you're selling, the advantage flips.",
  },
  {
    q: "Isn't it easier to just use an AI avatar?",
    a: "Easier, yes. But 'easier for you' isn't the goal — conversion is. Our whole model is to make the real-founder-on-camera approach almost as easy as AI: one 15-20 minute recording, and we handle everything else.",
  },
  {
    q: "What about hybrid — AI voice over human video?",
    a: "Works for some ecom scenarios. Breaks immediately for personal-brand businesses where your voice is part of your brand. If prospects will meet you later in the funnel, any voice mismatch kills the hand-off.",
  },
  {
    q: "Can I just AI-generate 300 ad variations myself?",
    a: "You can generate 300 AI ads for almost nothing. You will not convert on them in a trust-driven service category. Our batch video ads model solves the real problem: producing the volume with a real human face.",
  },
  {
    q: "Isn't real-face production expensive and slow?",
    a: "It has been historically. That's the specific problem we solved — one 15-20 minute recording becomes 300-1000 unique scripted variations delivered in 24 hours. Same volume advantage as AI, without giving up the human-face conversion advantage.",
  },
];

const COMPARE_ROWS = [
  { feature: "Production speed", prestyj: "24 hours from footage", ai: "Minutes" },
  { feature: "Volume per batch", prestyj: "300-1000 unique ads", ai: "Unlimited" },
  { feature: "Trust signal", prestyj: "Real owner on camera", ai: "Synthetic avatar" },
  { feature: "Authenticity detection", prestyj: "Passes — looks like content", ai: "Detected by audience in 2-3 sec" },
  { feature: "Service business fit", prestyj: "Strong", ai: "Weak" },
  { feature: "Ecommerce / product fit", prestyj: "Good", ai: "Strong" },
  { feature: "Client effort", prestyj: "One 15-20 min recording", ai: "Type a prompt" },
  { feature: "Scripted hook/body/CTA variants", prestyj: "Yes — written for you", ai: "Template-based" },
];

export default function AiAdsVsHumanAdsPage() {
  return (
    <main className="min-h-screen">
      <FAQJsonLd faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          {
            name: "AI Ads vs Human Ads",
            url: "https://prestyj.com/ai-ads-vs-human-ads",
          },
        ]}
      />

      {/* HERO */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
            THE 2026 DEBATE
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
            AI Ads vs Human Ads:
            <span className="block text-primary mt-2">
              Which Actually Converts in 2026?
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Short answer: depends on what you&apos;re selling. For ecommerce,
            AI-generated creative can win on speed and cost. For service businesses
            where trust is the purchase decision, a real owner on camera still
            outperforms AI avatars — even when CTR looks similar.
          </p>
          <Button size="lg" className="font-bold" asChild>
            <Link href="/batch-video-ads#pricing">
              Pick My Batch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 px-4 bg-muted/20 border-y border-border/50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl md:text-6xl font-bold text-primary">
              <CountUp to={2} duration={1.5} />-3s
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              time to detect an AI avatar on video
            </p>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-bold text-warning">
              <CountUp to={300} duration={1.5} />+
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              real-face ads producible in 24 hours with Prestyj
            </p>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-bold text-success">
              <CountUp to={15} duration={1.5} /> min
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              of recording = hundreds of scripted ads
            </p>
          </div>
        </div>
      </section>

      {/* WHAT AI IS GOOD AT */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimateOnScroll>
              <BorderGlow borderRadius={18} innerClassName="p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-success/10 text-success flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-foreground">
                    What AI Ads Are Good At
                  </h2>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Speed — minutes from prompt to output</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Cost — near-zero marginal cost per variation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Product-forward ecom where the object is the hero</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Faceless brands and category products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Rapid variant generation for A/B testing visuals</span>
                  </li>
                </ul>
              </BorderGlow>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <BorderGlow borderRadius={18} innerClassName="p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 text-destructive flex items-center justify-center">
                    <X className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-foreground">
                    What AI Ads Are Bad At
                  </h2>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Building trust in a person or brand founder</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Service businesses where you&apos;ll meet the buyer later</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Authenticity detection — audiences pattern-match fast</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Local businesses relying on personal reputation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Anything where &ldquo;who&rdquo; matters more than &ldquo;what&rdquo;</span>
                  </li>
                </ul>
              </BorderGlow>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* THE REAL FACE WEDGE */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              THE WEDGE
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              The &ldquo;Real Face&rdquo; Wedge
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Personal-brand businesses — real estate agents, coaches, fitness
              trainers, financial advisors, local service founders — lose when they
              switch to AI avatars. Not because the creative is visually bad, but
              because the whole purchase is a trust decision, and trust can&apos;t be
              synthesized. Prospects are effectively asking &ldquo;should I let this
              person into my life / money / home?&rdquo; An AI avatar answers that
              question with a shrug.
            </p>
            <p className="text-muted-foreground text-lg mb-4">
              The paradox: for these businesses, the bottleneck was never creative
              quality. It was <em>volume</em> of real-face creative. They all
              intuitively knew real faces win, but couldn&apos;t produce enough to
              keep their ad accounts fed. AI avatars became the compromise — and it
              showed in the conversion data.
            </p>
            <p className="text-muted-foreground text-lg">
              That compromise is what{" "}
              <Link href="/batch-video-ads" className="text-primary hover:underline">
                our batch service
              </Link>{" "}
              removes.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* HYBRID */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Hybrid: Real Face + Scripted Volume
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              The right answer for most service businesses isn&apos;t pure AI or
              pure artisanal production. It&apos;s a hybrid that steals the best of
              both: the authenticity of real human presence, with the volume economics
              that AI made standard.
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              Our model: you record once, we script everything, we produce hundreds of
              unique variations. One real human face. Hundreds of angles tested in
              parallel. Same speed and volume as AI — without the conversion penalty.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-xl p-5 text-center">
                <User className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-heading font-bold text-foreground">Real face</p>
                <p className="text-sm text-muted-foreground mt-1">
                  You, on camera, selfie style
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5 text-center">
                <Zap className="w-8 h-8 text-warning mx-auto mb-2" />
                <p className="font-heading font-bold text-foreground">AI-level speed</p>
                <p className="text-sm text-muted-foreground mt-1">
                  300-1000 variations in 24 hours
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5 text-center">
                <Bot className="w-8 h-8 text-success mx-auto mb-2" />
                <p className="font-heading font-bold text-foreground">Script engine</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Every hook, body, CTA permutation
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Prestyj vs AI Ad Tools
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Side-by-side on the variables that actually matter for service-business
              conversion.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <BorderGlow borderRadius={18} innerClassName="p-2 md:p-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="border-b border-border">
                    <tr>
                      <th className="p-4 font-heading font-bold text-foreground">Feature</th>
                      <th className="p-4 font-heading font-bold text-primary">
                        Prestyj Batch Video Ads
                      </th>
                      <th className="p-4 font-heading font-bold text-muted-foreground">
                        Generic AI Ad Tools
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE_ROWS.map((row, i) => (
                      <tr
                        key={row.feature}
                        className={
                          i < COMPARE_ROWS.length - 1 ? "border-b border-border/50" : ""
                        }
                      >
                        <td className="p-4 text-foreground font-semibold">{row.feature}</td>
                        <td className="p-4 text-foreground">{row.prestyj}</td>
                        <td className="p-4 text-muted-foreground">{row.ai}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </BorderGlow>
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
              Real Face. AI-Level Volume.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              One recording. 300-1000 scripted variations. Same speed as AI without
              the trust penalty.
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
