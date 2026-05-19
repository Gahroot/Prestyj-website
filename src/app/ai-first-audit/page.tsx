import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Wizard } from "@/components/lead-magnet/ai-first-audit/wizard";
import { Sparkles, Clock, Target, FileText } from "lucide-react";

export default function AiFirstAuditPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-16">
          <div className="bg-primary/10 absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/10 text-primary border-primary/20 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5" />
              The AI-First Audit
            </div>
            <h1 className="font-heading text-foreground mt-5 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Your team is wasting <span className="text-primary">23 hours/week</span> on tasks AI
              can already do.
            </h1>
            <p className="text-muted-foreground mt-5 max-w-2xl text-lg sm:text-xl">
              Take 6 minutes. Score the tasks your team actually runs. Get your top 3 automate-first
              recipes, a 7-day deployment plan, and the exact tools to use — emailed instantly.
              Free, no sales call required.
            </p>

            <div className="text-muted-foreground mt-8 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="text-primary h-4 w-4" /> 6 minutes
              </div>
              <div className="flex items-center gap-2">
                <Target className="text-primary h-4 w-4" /> Personalized top 3
              </div>
              <div className="flex items-center gap-2">
                <FileText className="text-primary h-4 w-4" /> PDF + 7-day plan emailed
              </div>
            </div>
          </div>
        </section>

        {/* Wizard */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Wizard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
