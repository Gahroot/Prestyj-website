import Link from "next/link";
import { ArrowLeft, Clock, Lock, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContentEngineIntakeForm } from "@/components/content-engine-intake/intake-form";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

export default function ContentEngineIntakePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          {
            name: "Done-For-You Social Media",
            url: "https://prestyj.com/done-for-you-social-media",
          },
          {
            name: "Brand Kit Intake",
            url: "https://prestyj.com/done-for-you-social-media/intake",
          },
        ]}
      />
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/done-for-you-social-media"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to plans
          </Link>

          <div className="mb-10 space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Pro Plan onboarding
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl">
              Send us your <span className="text-primary">brand kit</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Five quick steps and our team can have your content swarm prepped
              before your strategy call. The more you share, the faster we go
              live.
            </p>
          </div>

          <ContentEngineIntakeForm />

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <p className="font-medium">~5 minutes</p>
              <p className="text-sm text-muted-foreground">
                Save time on your demo call
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <p className="font-medium">Live in 24 hours</p>
              <p className="text-sm text-muted-foreground">
                From account access to first post
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <p className="font-medium">Private & secure</p>
              <p className="text-sm text-muted-foreground">
                Only seen by your assigned team
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
