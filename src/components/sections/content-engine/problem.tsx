import { X } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const PAINS = [
  {
    title: "Your agency ships 30 posts/month for $5K",
    detail:
      "That's $166 per post. They blame the algorithm when nothing performs. You renew anyway because firing them means starting over.",
  },
  {
    title: "Your in-house hire burns out in 6 months",
    detail:
      "Junior social manager: $55K/year + benefits. They post inconsistently, take vacations, and quit the second something better comes along.",
  },
  {
    title: "You're posting from your phone at 11pm",
    detail:
      "DIY mode. You know you should batch. You don't. Posts go out twice a week. Reach is flat. The algorithm rewards consistency you can't deliver.",
  },
  {
    title: "Freelancers charge $100 per post",
    detail:
      "And you need 50 a day across 7 platforms. Do the math — it's $150K/month before anyone hits publish. Not a real option.",
  },
];

export function ContentEngineProblem() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Every Way You&apos;ve Tried to Post Consistently Has Failed.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Not because you&apos;re lazy. Because the math doesn&apos;t work with humans.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {PAINS.map((pain, i) => (
            <AnimateOnScroll key={pain.title} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-lg p-6 h-full">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">
                      {pain.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pain.detail}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
