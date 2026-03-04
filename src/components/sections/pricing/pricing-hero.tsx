import { Badge } from "@/components/ui/badge";

export function PricingHero() {
  return (
    <section className="pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge variant="secondary" className="mb-4">
          Transparent Pricing
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
          Dominate Your Market with{" "}
          <span className="text-primary">AI-Powered Leads</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Pick your automation level. Every plan includes done-for-you ad
          management, AI lead response, and a dedicated onboarding team.
        </p>
      </div>
    </section>
  );
}
