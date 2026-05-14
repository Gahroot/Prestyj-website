import { Clock, PhoneMissed, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const painPoints = [
  {
    icon: Clock,
    title: "Your leads respond to the first reply they get",
    description:
      "78% of leads work with whoever responds first. You're in a meeting. They fill out a form. Your competitor calls them back in 2 minutes. You call back in 4 hours. The deal is gone.",
    color: "text-warning",
  },
  {
    icon: PhoneMissed,
    title: "Every cold lead cost you real money",
    description:
      "You spent $40, $80, maybe $150 to generate that lead. When it goes unanswered, you don't just lose the deal — you lose the ad spend that generated it. That's money you'll never get back.",
    color: "text-destructive",
  },
  {
    icon: DollarSign,
    title: "A good sales rep costs $4K–$6K a month — and still clocks out",
    description:
      "And then they call in sick. Take vacations. Quit. Your AI agent never does any of that. Same quality follow-up. A fraction of the cost. Every single day.",
    color: "text-primary",
  },
];

export function PainPointsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="mb-16 text-center">
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Three problems killing your lead-to-revenue funnel
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Businesses spending money on marketing can&apos;t afford these three problems.
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
