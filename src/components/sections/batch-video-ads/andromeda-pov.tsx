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
    <section className="py-24 px-4 bg-muted/20 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-12">
          <Badge variant="outline" className="mb-3 border-primary/50 text-primary">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            The Andromeda Reality
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Volume Isn&apos;t a Preference. It&apos;s the Algorithm&apos;s Input.
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Meta&apos;s Andromeda update broke the old playbook of one hero ad + narrow
            lookalike + interest stack. The new floor is volume — and creative-as-targeting
            is how you compete.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <AnimateOnScroll key={p.title} delay={i * 0.1}>
                <BorderGlow borderRadius={18} innerClassName="p-7 h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {p.body}
                  </p>
                </BorderGlow>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll delay={0.3}>
          <BorderGlow borderRadius={20} innerClassName="p-8 md:p-10 text-center">
            <p className="text-lg md:text-xl text-foreground font-heading font-semibold mb-3">
              The old way: argue about <em>which</em> hook to test next.
            </p>
            <p className="text-lg md:text-xl text-primary font-heading font-bold mb-6">
              The new way: ship every hook, every angle, every pain point — and let the
              algorithm tell you what won.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" className="font-bold" asChild>
                <a href="#pricing">
                  Get 100+ Angles in My Next Sprint
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
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
