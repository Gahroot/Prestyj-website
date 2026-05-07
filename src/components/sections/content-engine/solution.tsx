import { Layers, Wand2, Calendar, BarChart3, Palette, Share2 } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const PILLARS = [
  {
    icon: Wand2,
    title: "AI-Generated Creative at Scale",
    description:
      "85+ prompt templates. Image, carousel, and short-form video creative — formatted natively for each platform. Your brand voice, your offers, your colors.",
  },
  {
    icon: Layers,
    title: "Strategic Content Sequencing",
    description:
      "Not random posts. A real strategy: hooks, proof, offers, education, social proof, and CTAs — sequenced so your feed builds trust and converts attention.",
  },
  {
    icon: Share2,
    title: "Native Multi-Platform Publishing",
    description:
      "Instagram, Facebook, TikTok, YouTube, LinkedIn, Threads, X — formatted correctly for each. No reposting square images to a vertical platform and hoping.",
  },
  {
    icon: Calendar,
    title: "24/7 Posting Cadence",
    description:
      "50+ posts per day, every day. The algorithm rewards volume + consistency. We deliver both — without you ever opening a content calendar.",
  },
  {
    icon: Palette,
    title: "Monthly Brand Refresh",
    description:
      "Avatars rotate. Hooks evolve. New formats get tested. Your feed never goes stale because the engine is constantly being optimized in the background.",
  },
  {
    icon: BarChart3,
    title: "Real Reporting, Not Vanity Metrics",
    description:
      "What hooks worked. What formats converted. What platforms moved the needle. We tell you what to double down on — not how many likes you got.",
  },
];

export function ContentEngineSolution() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Meet Your AI Content Department.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            For less than the cost of one junior hire, you get an entire content team
            running 24/7 — built to do what humans can&apos;t.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => (
            <AnimateOnScroll key={pillar.title} delay={i * 0.05}>
              <div className="bg-card border border-border rounded-lg p-6 h-full hover:border-primary/40 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
