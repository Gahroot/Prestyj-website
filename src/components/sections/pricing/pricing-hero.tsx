import { Badge } from "@/components/ui/badge";

export function PricingHero() {
  return (
    <section className="pt-32 pb-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Badge variant="secondary" className="mb-4">
          Done-For-You AI Agents &amp; Ad Production
        </Badge>
        <h1 className="font-heading text-foreground mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
          Three plans. One system. <span className="text-primary">AI runs your marketing and sales.</span>
          <span className="mt-2 block text-3xl sm:text-4xl lg:text-5xl">Plans from $1,997/mo.</span>
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          We run your ads, produce hundreds of video ad variations, and deploy AI agents that respond
          to leads in 60 seconds and book appointments on your calendar — 24/7. Done for you, not a
          tool you learn.
        </p>
      </div>
    </section>
  );
}
