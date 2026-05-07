import { ClipboardList, Cog, Rocket, RefreshCw } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const STEPS = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Intake & Brand Kit",
    description:
      "We build your brand kit: voice, offers, avatars, colors, proof points, and the angles that move your buyer. One 60-minute call. We handle the rest.",
    highlight: "Done in week one",
  },
  {
    number: "02",
    icon: Cog,
    title: "We Build Your Engine",
    description:
      "Prompt architecture, content sequencing, automation pipelines, and platform connections — wired up to your accounts and tested before anything goes live.",
    highlight: "1–2 weeks of buildout",
  },
  {
    number: "03",
    icon: Rocket,
    title: "50+ Posts/Day Start Shipping",
    description:
      "The engine goes live. Posts ship daily across every platform you signed up for — formatted natively, scheduled smart, on-brand every time.",
    highlight: "1,500+ posts/month",
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Monthly Refresh & Reporting",
    description:
      "We rotate avatars, swap hooks, test new formats, and report on what's actually moving the needle. The engine gets smarter every month.",
    highlight: "Always optimizing",
  },
];

export function ContentEngineHowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            From Zero to 1,500 Posts/Month in Under 3 Weeks.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            One intake call. We build the machine. It ships forever.
          </p>
        </AnimateOnScroll>

        <div className="space-y-12">
          {STEPS.map((step, index) => (
            <AnimateOnScroll
              key={step.number}
              delay={index * 0.1}
              className="flex flex-col md:flex-row items-start gap-8"
            >
              <div className="flex items-center gap-4 md:pt-1 shrink-0">
                <span className="text-5xl font-heading font-bold text-primary/20 leading-none">
                  {step.number}
                </span>
                <step.icon className="h-8 w-8 text-primary shrink-0" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {step.highlight}
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
