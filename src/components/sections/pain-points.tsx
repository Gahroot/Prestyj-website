import { Clock, DollarSign, Repeat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const painPoints = [
  {
    icon: Repeat,
    title: "You are testing too few ads to know what works",
    description:
      "Three hooks, one polished video, and a couple captions is not a creative test. It is a guess. You need enough variation to see which customer problems, claims, and CTAs actually get attention.",
    color: "text-warning",
  },
  {
    icon: Clock,
    title: "Creative production is slower than ad fatigue",
    description:
      "Most teams take weeks to plan, script, film, edit, review, and launch a handful of videos. By the time the next batch is ready, the account is already starving for fresh creative.",
    color: "text-destructive",
  },
  {
    icon: DollarSign,
    title: "Agencies and creators are too expensive for volume",
    description:
      "If every ad costs hundreds or thousands to make, you cannot test enough angles. The math breaks before you ever find the message your market wants to hear.",
    color: "text-primary",
  },
];

export function PainPointsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-16 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            The problem is not your ad account. It is creative volume.
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Cold traffic does not care about your brand yet. The winning message usually comes from
            testing more angles than your competitors can produce.
          </p>
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-3">
          {painPoints.map((point, index) => (
            <AnimateOnScroll key={point.title} delay={index * 0.15}>
              <Card className="bg-background border-border h-full">
                <CardContent className="p-6">
                  <point.icon className={`h-10 w-10 ${point.color} mb-4`} />
                  <h3 className="font-heading text-foreground mb-3 text-xl font-semibold">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
