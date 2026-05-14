import { MessageCircle, Calendar, Zap, Moon } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import BorderGlow from "@/components/ui/border-glow";

const features = [
  {
    icon: Zap,
    title: "Instant Response",
    description: "Under 60 seconds, every time.",
  },
  {
    icon: MessageCircle,
    title: "Speaks as a named team member",
    description: "Leads engage with a named team member. No robotic scripts. No awkward handoffs.",
  },
  {
    icon: Calendar,
    title: "Fills Your Calendar",
    description: "Qualified appointments land on your calendar. You show up and close.",
  },
  {
    icon: Moon,
    title: "Works 24/7",
    description: "Saturday at 11pm. Sunday morning. Holidays. It doesn't take time off.",
  },
];

export function SolutionSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimateOnScroll>
            <h2 className="font-heading text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              AI agents that respond, qualify, and book —{" "}
              <span className="text-primary">24/7.</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Prestyj&apos;s AI agents respond to every lead in under 60 seconds, have a real
              conversation, qualify them, and book a meeting on your calendar. They work nights,
              weekends, and holidays.
            </p>
            <div className="space-y-4">
              <div className="text-muted-foreground flex items-center gap-3">
                <div className="bg-success h-2 w-2 rounded-full" />
                <span>
                  Replies as a named team member (&ldquo;Hey, it&apos;s Alex from [Your
                  Business]&rdquo;)
                </span>
              </div>
              <div className="text-muted-foreground flex items-center gap-3">
                <div className="bg-success h-2 w-2 rounded-full" />
                <span>Qualifies buyers, sellers, and investors naturally</span>
              </div>
              <div className="text-muted-foreground flex items-center gap-3">
                <div className="bg-success h-2 w-2 rounded-full" />
                <span>Books directly to your calendar — no back-and-forth</span>
              </div>
              <div className="text-muted-foreground flex items-center gap-3">
                <div className="bg-success h-2 w-2 rounded-full" />
                <span>Re-engages old leads sitting cold in your CRM</span>
              </div>
              <div className="text-muted-foreground flex items-center gap-3">
                <div className="bg-success h-2 w-2 rounded-full" />
                <span>Works nights, weekends, and holidays without overtime</span>
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
