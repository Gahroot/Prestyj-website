import Link from "next/link";
import { ArrowDown, BarChart3, Clock3, Gauge } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Wizard } from "@/components/lead-magnet/ai-first-audit/wizard";
import { Button } from "@/components/ui/button";

const VALUE_LABELS = [
  { icon: Clock3, label: "Yearly time cost" },
  { icon: BarChart3, label: "Business impact" },
  { icon: Gauge, label: "Ready for an agent" },
] as const;

export default function AiFirstAuditPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen">
        <section className="pt-24 pb-8 sm:pt-28 sm:pb-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-primary text-sm font-semibold tracking-wide uppercase">
              Free business audit
            </p>
            <h1 className="font-heading mt-4 max-w-3xl text-4xl leading-tight font-bold tracking-tight sm:text-5xl md:text-6xl">
              Find the workflows costing you the most.
            </h1>
            <p className="text-muted-foreground mt-5 max-w-2xl text-lg sm:text-xl">
              See what drains time, slows sales, and hurts customers. Find where an AI agent can
              help first.
            </p>
            <Button asChild size="lg" className="mt-7 min-h-12">
              <Link href="#audit">
                Find my costly workflows
                <ArrowDown aria-hidden="true" />
              </Link>
            </Button>
            <p className="text-muted-foreground mt-3 text-sm">
              Free. About 4 minutes. See your top result before entering your email.
            </p>

            <ul className="border-border mt-8 grid border-y sm:grid-cols-3">
              {VALUE_LABELS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex min-h-14 items-center gap-3 py-3 sm:px-4 sm:first:ps-0">
                  <Icon className="text-primary size-4" aria-hidden="true" />
                  <span className="text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="audit" aria-label="AI-First Audit questions" className="scroll-mt-20 py-8 sm:py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Wizard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
