import { Badge } from "@/components/ui/badge";
import { HeroDemoForm } from "@/components/sections/hero-demo-form";

export function HeroDemoSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div
        className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        style={{ animation: "fade-up 0.6s ease-out forwards" }}
      >
        {/* Left side - Headline */}
        <div className="space-y-6 text-center lg:text-left" style={{ animation: "fade-up 0.5s ease-out 0.15s both" }}>
          <div className="flex justify-center lg:justify-start">
            <Badge variant="outline" className="border-primary/50 text-primary">
              The AI Workforce for Service Businesses
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1]">
            Deploy AI Agents That Qualify Leads & Book Appointments 24/7
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
            Every lead answered in under 60 seconds. AI that qualifies, books, and follows up—for real estate, home services, and high-growth businesses.
          </p>
        </div>

        {/* Right side - Form */}
        <div className="relative" style={{ animation: "fade-up 0.5s ease-out 0.3s both" }}>
          <HeroDemoForm />
        </div>
      </div>
    </section>
  );
}
