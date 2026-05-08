import { Users, Share2, Target } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const PILLARS = [
  {
    icon: Users,
    title: "Multi-Account Swarm",
    description:
      "Your brand. Your personal page. Your niche accounts. Up to 3+ accounts, each on autopilot, each targeting a different buyer.",
  },
  {
    icon: Share2,
    title: "Native Across 7 Platforms",
    description:
      "IG, FB, TikTok, YouTube, LinkedIn, Threads, X. Formatted right for each. No square images on vertical platforms.",
  },
  {
    icon: Target,
    title: "Ad-Ready by Default",
    description:
      "Every post is hook-tested and ready to run as a paid ad. The same content that grows your organic powers your funnel.",
  },
];

export function ContentEngineSolution() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            The Content Is the Targeting.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every audience sees content built for them — because we run every account
            that matters.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
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
