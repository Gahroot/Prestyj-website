import { Badge } from "@/components/ui/badge";

export function PricingHero() {
  return (
    <section className="pt-32 pb-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Badge variant="secondary" className="mb-4">
          Transparent Pricing
        </Badge>
        <h1 className="font-heading text-foreground mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
          <span className="text-primary">AI agents</span> for marketing &amp; sales.
          <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2">Plans from $1,997/mo.</span>
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          Pick the plan that fits your business. Every plan includes done-for-you ad management, AI
          lead response, and a dedicated onboarding team.
        </p>
      </div>
    </section>
  );
}
