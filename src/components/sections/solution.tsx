import { Captions, Clapperboard, FileText, Target } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import BorderGlow from "@/components/ui/border-glow";

const features = [
  {
    icon: FileText,
    title: "Scripts written for you",
    description: "Hooks, bodies, CTAs, and pain-point angles mapped before you record.",
  },
  {
    icon: Clapperboard,
    title: "One recording session",
    description: "Read the script once on your phone. No studio, actors, or production day.",
  },
  {
    icon: Captions,
    title: "Finished vertical ads",
    description: "Edited, captioned 9:16 files ready for paid social upload.",
  },
  {
    icon: Target,
    title: "Built to test angles",
    description: "Hundreds of variations across hooks, pain points, and offers.",
  },
];

export function SolutionSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimateOnScroll>
            <h2 className="font-heading text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              We turn one recording into a full creative testing library.
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              You give us the business, offer, audience, and customer problems. We write the scripts,
              tell you exactly what to record, and turn the raw footage into 300 ads built to test what
              your market responds to.
            </p>
            <div className="space-y-4">
              <div className="text-muted-foreground flex items-center gap-3">
                <div className="bg-success h-2 w-2 rounded-full" />
                <span>
                  300 unique vertical video ads from one 15–20 minute recording
                </span>
              </div>
              <div className="text-muted-foreground flex items-center gap-3">
                <div className="bg-success h-2 w-2 rounded-full" />
                <span>3 customer pain points tested in the minimum batch</span>
              </div>
              <div className="text-muted-foreground flex items-center gap-3">
                <div className="bg-success h-2 w-2 rounded-full" />
                <span>Multiple hooks, bodies, CTAs, and captions per angle</span>
              </div>
              <div className="text-muted-foreground flex items-center gap-3">
                <div className="bg-success h-2 w-2 rounded-full" />
                <span>Delivered in 1–2 business days after footage is received</span>
              </div>
              <div className="text-muted-foreground flex items-center gap-3">
                <div className="bg-success h-2 w-2 rounded-full" />
                <span>One-time pack — no retainer, no media buying, no mystery scope</span>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2} className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <AnimateOnScroll key={feature.title} delay={0.3 + index * 0.1}>
                <BorderGlow borderRadius={10} innerClassName="p-6">
                  <feature.icon className="text-primary mb-3 h-8 w-8" />
                  <h3 className="font-heading text-foreground mb-2 font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </BorderGlow>
              </AnimateOnScroll>
            ))}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
