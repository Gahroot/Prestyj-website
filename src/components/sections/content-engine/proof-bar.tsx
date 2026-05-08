import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const STATS = [
  { value: "24h", label: "Live from payment to first post" },
  { value: "3", label: "Accounts running in parallel" },
  { value: "7", label: "Platforms covered" },
  { value: "2,700+", label: "Posts shipped per month" },
];

export function ContentEngineProofBar() {
  return (
    <section className="py-12 border-y border-border bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
