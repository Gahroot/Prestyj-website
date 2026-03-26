import { MessageCircle, Calendar, Zap, Moon } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const features = [
  {
    icon: Zap,
    title: "Instant Response",
    description: "Under 60 seconds, every time. While your competitors are still checking Slack.",
  },
  {
    icon: MessageCircle,
    title: "Sounds Like Your Team",
    description: "Leads engage with a named team member. No robotic scripts. No awkward handoffs.",
  },
  {
    icon: Calendar,
    title: "Fills Your Calendar",
    description: "Qualified appointments land on your calendar. You show up and close.",
  },
  {
    icon: Moon,
    title: "Never Clocks Out",
    description: "Saturday at 11pm. Sunday morning. Holidays. It doesn't take time off.",
  },
];

export function SolutionSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Your AI Team Member.
              <br />
              <span className="text-primary">Always On. Always On Brand.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Think of it like Jamie — your best assistant who picks up every lead, replies naturally as part of your team, and books qualified appointments on your calendar. Your clients will never know it&apos;s AI. They&apos;ll just know your team is incredibly responsive.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Replies as a named team member (&ldquo;Hey, it&apos;s Alex from [Your Brokerage]&rdquo;)</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Qualifies buyers, sellers, and investors naturally</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Books directly to your calendar — no back-and-forth</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Re-engages old leads sitting cold in your CRM</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Works nights, weekends, and holidays without overtime</span>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2} className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <AnimateOnScroll
                key={feature.title}
                delay={0.3 + index * 0.1}
                className="bg-card border border-border rounded-lg p-6"
              >
                <feature.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </AnimateOnScroll>
            ))}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
