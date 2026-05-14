"use client";

import { Suspense, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CalcomInlineEmbed } from "@/components/booking/cal-embed";
import { QualificationForm, type QualificationData } from "@/components/booking/qualification-form";
import { CheckCircle, Clock, Zap, User, Building2, Calendar, Sparkles } from "lucide-react";
import BorderGlow from "@/components/ui/border-glow";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

function IntakeSuccessBanner() {
  const searchParams = useSearchParams();
  if (searchParams?.get("intake") !== "success") return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="border-success/30 bg-success/5 mb-8 flex items-start gap-3 rounded-xl border p-4 sm:p-5"
    >
      <div className="bg-success/15 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
        <Sparkles className="text-success h-5 w-5" />
      </div>
      <div>
        <p className="font-heading text-foreground text-base font-bold sm:text-lg">
          Brand kit received — thank you!
        </p>
        <p className="text-muted-foreground mt-1 text-sm">
          Pick a time below for your strategy call so we can walk you through the plan and get
          you live in 24 hours.
        </p>
      </div>
    </motion.div>
  );
}

export default function BookDemoPage() {
  const calendarRef = useRef<HTMLDivElement>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [qualificationData, setQualificationData] = useState<QualificationData | null>(null);

  const handleQualificationComplete = (data: QualificationData) => {
    setQualificationData(data);
    setShowCalendar(true);

    setTimeout(() => {
      calendarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Book a Demo", url: "https://prestyj.com/book-demo" },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Prestyj Strategy Call & Demo",
          description:
            "Book a 30-minute strategy call to see how Prestyj's AI sales agents can automate lead response, qualification, and appointment booking for your business.",
          provider: {
            "@type": "Organization",
            name: "PRESTYJ",
            url: "https://prestyj.com",
          },
          serviceType: "Consultation",
          areaServed: "United States",
        }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Suspense fallback={null}>
            <IntakeSuccessBanner />
          </Suspense>
          <AnimatePresence mode="wait">
            {!showCalendar ? (
              <motion.div
                key="qualification"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Hero Section */}
                <div className="mb-10 space-y-4 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                  >
                    <Calendar className="h-4 w-4" />
                    AI agents for marketing &amp; sales
                  </motion.div>
                  <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl">
                    Book your <span className="text-primary">30-minute demo</span>
                  </h1>
                  <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
                    See how our AI agents respond, qualify, and book leads for your team.
                  </p>
                </div>

                {/* What to Expect / Length / Timezone / Ideal For — above the form */}
                <div className="mb-10 grid gap-8 sm:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="font-heading text-lg font-bold">What to Expect</h3>
                    <ul className="text-muted-foreground space-y-3">
                      <li className="flex gap-3">
                        <span className="text-primary shrink-0 font-bold">1</span>
                        <span>See the AI agents live, handling real lead scenarios</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary shrink-0 font-bold">2</span>
                        <span>Diagnose your lead response &amp; qualification gaps</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary shrink-0 font-bold">3</span>
                        <span>Map the agent to your CRM, calendar, and tools</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary shrink-0 font-bold">4</span>
                        <span>Custom rollout plan for your business</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-heading text-lg font-bold">About This Call</h3>
                    <div className="text-muted-foreground space-y-4 text-sm">
                      <div>
                        <p className="text-foreground mb-1 font-semibold">Length</p>
                        <p>30 minutes — focused, no fluff.</p>
                      </div>
                      <div>
                        <p className="text-foreground mb-1 font-semibold">Ideal For</p>
                        <p>
                          Marketing &amp; sales leaders losing leads to slow response or manual
                          follow-up.
                        </p>
                      </div>
                      <div>
                        <p className="text-foreground mb-1 font-semibold">Timezone</p>
                        <p>Automatically detects and adjusts to your timezone.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Qualification Form */}
                <BorderGlow borderRadius={18} innerClassName="p-6 sm:p-10" className="shadow-sm">
                  <QualificationForm onComplete={handleQualificationComplete} />
                </BorderGlow>

                {/* Trust signals below form */}
                <div className="mt-12 grid gap-6 text-center sm:grid-cols-3">
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Clock className="text-primary h-5 w-5" />
                    </div>
                    <p className="font-medium">30 Minutes</p>
                    <p className="text-muted-foreground text-sm">Quick, focused conversation</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-primary/10 rounded-full p-3">
                      <CheckCircle className="text-primary h-5 w-5" />
                    </div>
                    <p className="font-medium">No Fluff</p>
                    <p className="text-muted-foreground text-sm">Actionable insights &amp; strategy</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Zap className="text-primary h-5 w-5" />
                    </div>
                    <p className="font-medium">Direct Access</p>
                    <p className="text-muted-foreground text-sm">1-on-1 with our team directly</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="calendar"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Qualified Lead Header */}
                <div className="mb-8 space-y-4 text-center">
                  <div className="bg-success/10 text-success inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                    <CheckCircle className="h-4 w-4" />
                    Pick a time below
                  </div>
                  <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl">
                    Schedule Your <span className="text-primary">30-Min Demo</span>
                  </h1>
                  <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
                    Thanks{qualificationData?.firstName ? `, ${qualificationData.firstName}` : ""}!
                    Select a time that works for you.
                  </p>
                </div>

                {/* User Summary Card */}
                {qualificationData && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-muted/50 border-border mb-8 rounded-xl border p-4"
                  >
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <User className="text-muted-foreground h-4 w-4" />
                        <span>{qualificationData.firstName}</span>
                      </div>
                      {qualificationData.companyName && (
                        <div className="flex items-center gap-2">
                          <Building2 className="text-muted-foreground h-4 w-4" />
                          <span>{qualificationData.companyName}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Cal.com Embed */}
                <div ref={calendarRef}>
                  <BorderGlow
                    borderRadius={14}
                    innerStyle={{ overflow: "hidden", borderRadius: "inherit" }}
                    className="shadow-sm"
                  >
                    <CalcomInlineEmbed />
                  </BorderGlow>
                </div>

                {/* Benefits Grid */}
                <div className="border-border mt-12 border-t pt-8">
                  <h3 className="font-heading mb-6 text-lg font-bold">Why Book Now?</h3>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="flex gap-3">
                      <Clock className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                      <div className="text-sm">
                        <p className="font-semibold">30 Minutes</p>
                        <p className="text-muted-foreground">Quick, focused conversation</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                      <div className="text-sm">
                        <p className="font-semibold">No Fluff</p>
                        <p className="text-muted-foreground">Actionable insights &amp; strategy</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Zap className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                      <div className="text-sm">
                        <p className="font-semibold">Direct</p>
                        <p className="text-muted-foreground">1-on-1 with our team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  );
}
