import { Clock, PhoneMissed, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const painPoints = [
  {
    icon: Clock,
    title: "Leads go cold while you're busy",
    description:
      "You're at a showing, in a meeting, or with a client. A new lead comes in. By the time you call back, they've already moved on.",
    color: "text-warning",
  },
  {
    icon: PhoneMissed,
    title: "Missed calls = missed revenue",
    description:
      "78% of customers work with the first person who responds. Every unanswered call is money walking out the door.",
    color: "text-destructive",
  },
  {
    icon: DollarSign,
    title: "Hiring is expensive and unreliable",
    description:
      "A good ISA or sales assistant costs $4k/month plus commissions. And they still call in sick, take vacations, and quit.",
    color: "text-primary",
  },
];

export function PainPointsSection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Sound Familiar?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every day, sales professionals and real estate agents lose deals they should have won. Here&apos;s why.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <AnimateOnScroll key={point.title} delay={index * 0.15}>
              <Card className="bg-background border-border h-full">
                <CardContent className="p-6">
                  <point.icon className={`h-10 w-10 ${point.color} mb-4`} />
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
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
