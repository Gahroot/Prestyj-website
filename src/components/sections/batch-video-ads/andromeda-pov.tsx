import Link from "next/link";
import { ArrowRight, Atom, Layers, Radar, Sparkles } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BorderGlow from "@/components/ui/border-glow";

const PILLARS = [
  {
    icon: Atom,
    title: "Andromeda evaluates 10,000× more candidates per impression",
    body: "Meta's new retrieval engine (co-developed with NVIDIA on GH200 GPUs) was rolled out 2024–2026. A single ad is one candidate in that pool. Volume isn't optional — it's the input the algorithm requires.",
  },
  {
    icon: Layers,
    title: "Creative IS the targeting",
    body: "Advantage+ Audience already finds your buyers from on-platform behavior. The lever you still control is the creative angle. Volume of distinct angles = how many buyer segments you can actually reach.",
  },
  {
    icon: Radar,
    title: "Ad half-life dropped from months to days",
    body: "Coaches' winning ads used to run 6 months. Under Andromeda, half-life is 5–14 days. Your creative supply has to keep up — and a 1-ad-a-week creator can't.",
  },
];

export function AndromedaPOV() {
  return (
    <section className="bg-muted/20 border-border border-y px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll className="mb-12 text-center">
          <Badge variant="outline" className="border-primary/50 text-primary mb-3">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />
            The Andromeda Reality
          </Badge>
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-5xl">
            Volume Isn&apos;t a Preference. It&apos;s the Algorithm&apos;s Input.
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            Meta&apos;s Andromeda update broke the old playbook of one hero ad + narrow lookalike +
            interest stack. The new floor is volume — and creative-as-targeting is how you compete.
          </p>
        </AnimateOnScroll>

        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <AnimateOnScroll key={p.title} delay={i * 0.1}>
                <BorderGlow borderRadius={18} innerClassName="p-7 h-full">
                  <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-foreground mb-3 text-lg leading-snug font-bold">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
                </BorderGlow>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll delay={0.3}>
          <BorderGlow borderRadius={20} innerClassName="p-8 md:p-10 text-center">
            <p className="text-foreground font-heading mb-3 text-lg font-semibold md:text-xl">
              The old way: argue about <em>which</em> hook to test next.
            </p>
            <p className="text-primary font-heading mb-6 text-lg font-bold md:text-xl">
              The new way: ship every hook, every angle, every customer problem — and let the
              algorithm tell you what won.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              {/* CTA-sweep: cold traffic → batch offer */}
              <Button size="lg" className="font-bold" asChild>
                <Link href="/batch-video-ads">
                  Get 100 ads for $497
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="font-bold" asChild>
                <Link href="/blog/andromeda-impact-on-coaches-creators-ads-2026">
                  Read the Andromeda breakdown
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </BorderGlow>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
