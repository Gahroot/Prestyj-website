import { FileText, Smartphone, Target, Upload } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Pick the problems to test",
    description:
      "Tell us your offer, audience, market, and the customer problems you want to attack. The 300-ad pack covers 3 pain points, so every angle has a job.",
    highlight: "3 customer problems in the 300-ad pack",
  },
  {
    number: "02",
    icon: FileText,
    title: "We write the scripts",
    description:
      "We build the hook, body, CTA, and variation matrix for you. You do not need to know what to say or how to structure a paid-social creative test.",
    highlight: "Hooks, bodies, CTAs, and captions planned",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "You record once",
    description:
      "Prop up your phone and read the script selfie-style in one take. The recording usually takes 15–20 minutes, and we edit around small mistakes.",
    highlight: "One raw recording file",
  },
  {
    number: "04",
    icon: Upload,
    title: "You get 300 ads to launch",
    description:
      "We cut the footage into finished 9:16 ads with captions and variations, then send the files so you or your media buyer can test them across paid social.",
    highlight: "Delivered in 1–2 business days",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-16 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            How the 300-ad sprint works
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Simple input. Fast output. Enough creative volume to actually learn what converts.
          </p>
        </AnimateOnScroll>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <AnimateOnScroll
              key={step.number}
              delay={index * 0.1}
              className="flex flex-col items-start gap-8 md:flex-row"
            >
              <div className="flex shrink-0 items-center gap-4 md:pt-1">
                <span className="font-heading text-primary/20 text-5xl leading-none font-bold">
                  {step.number}
                </span>
                <step.icon className="text-primary h-8 w-8 shrink-0" />
              </div>
              <div>
                <h3 className="font-heading text-foreground mb-3 text-2xl font-semibold">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <span className="bg-primary/10 text-primary inline-block rounded-full px-3 py-1 text-sm">
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
