"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Download, Mail, Building2, FileText, CheckCircle, Loader2 } from "lucide-react";
import BorderGlow from "@/components/ui/border-glow";

interface FormData {
  name: string;
  email: string;
  brokerage: string;
  teamSize: string;
  adSpend: string;
  magnetType: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  downloadUrl: string;
}

export default function BrokeragePlaybookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    brokerage: "",
    teamSize: "",
    adSpend: "",
    magnetType: "brokerage-playbook",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.brokerage,
          magnetType: formData.magnetType,
          metadata: {
            teamSize: formData.teamSize,
            adSpend: formData.adSpend,
          },
        }),
      });

      const data: ApiResponse = await response.json();

      if (data.success) {
        setSubmitted(true);
        setDownloadUrl(data.downloadUrl || null);
      } else {
        setError(data.message || "Failed to submit form");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange =
    (field: keyof Omit<FormData, "magnetType">) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleDownloadClick = () => {
    if (downloadUrl) {
      window.open(downloadUrl, "_blank");
    }
  };

  return (
    <>
      <Navbar />
      <main className="from-background to-muted/20 min-h-screen bg-gradient-to-b">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                <FileText className="h-4 w-4" />
                Free Playbook
              </div>

              {/* Headline */}
              <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl">
                The $20M+ Brokerage Playbook:{" "}
                <span className="text-primary">How Top Teams Convert 3x More Ad Leads with AI</span>
              </h1>

              {/* Subheadline */}
              <p className="text-muted-foreground text-xl">
                The exact playbook top real estate teams and brokerages use to respond to every
                Facebook and YouTube lead in under 60 seconds — and book 3x more appointments
                without adding ISAs.
              </p>

              {/* What You Get */}
              <BorderGlow borderRadius={14} innerClassName="p-6 space-y-4">
                <h2 className="font-heading mb-4 text-lg font-bold">What&apos;s Inside</h2>

                <div className="space-y-4">
                  {[
                    {
                      title: "Speed to Lead Data",
                      desc: "The statistics behind why the first 60 seconds determine 78% of your deals",
                    },
                    {
                      title: "AI vs. Human ISA Cost Breakdown",
                      desc: "Real numbers on ISA cost, turnover, and why AI wins on ROI at $20M+",
                    },
                    {
                      title: "Facebook & YouTube Lead Playbook",
                      desc: "The follow-up sequence top brokerages use to convert ad leads at 6–9%",
                    },
                    {
                      title: "AI Response Benchmarks",
                      desc: "What sub-60-second response looks like and how to achieve it at scale",
                    },
                    {
                      title: "CRM Integration Checklist",
                      desc: "How to add AI on top of Follow Up Boss, kvCORE, Sierra, and CINC",
                    },
                    {
                      title: "ROI Calculator",
                      desc: "Calculate exactly how many additional closings AI would generate for your team",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </BorderGlow>

              {/* Who This Is For */}
              <div className="bg-primary/5 border-primary/20 rounded-xl border p-6">
                <div className="mb-4 flex gap-3">
                  <Building2 className="text-primary h-6 w-6" />
                  <h2 className="font-heading text-lg font-bold">
                    Made for Real Estate Team Leaders & Broker-Owners
                  </h2>
                </div>
                <ul className="space-y-3 text-sm">
                  {[
                    "Teams doing $10M–$200M+ in production",
                    "Brokerages spending $1K+/month on Facebook or YouTube ads",
                    "Teams running or considering an ISA program",
                    "Broker-owners who think like business owners",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Proof placeholder — early customer results coming soon */}
              <div className="border-border border-t pt-6">
                <p className="text-muted-foreground text-sm">Early customer results coming soon.</p>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BorderGlow
                      borderRadius={18}
                      innerClassName="p-8 sm:p-10"
                      className="shadow-xl"
                    >
                      {/* Form Header */}
                      <div className="mb-8 text-center">
                        <div className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                          <Download className="h-4 w-4" />
                          Free Instant Access
                        </div>
                        <h2 className="font-heading text-2xl font-bold">Get Your Free Playbook</h2>
                        <p className="text-muted-foreground">
                          We&apos;ll send it immediately — no fluff, no sales pitch.
                        </p>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                          <div className="bg-destructive/10 text-destructive mb-4 rounded-lg p-3 text-sm">
                            {error}
                          </div>
                        )}

                        <div>
                          <label htmlFor="name" className="mb-2 block text-sm font-medium">
                            Full Name <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            placeholder="Sarah Johnson"
                            value={formData.name}
                            onChange={handleInputChange("name")}
                            className="border-border bg-background focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="mb-2 block text-sm font-medium">
                            Work Email <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            placeholder="sarah@premierhomes.com"
                            value={formData.email}
                            onChange={handleInputChange("email")}
                            className="border-border bg-background focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label htmlFor="brokerage" className="mb-2 block text-sm font-medium">
                            Brokerage / Team Name
                          </label>
                          <input
                            type="text"
                            id="brokerage"
                            placeholder="Premier Homes Team"
                            value={formData.brokerage}
                            onChange={handleInputChange("brokerage")}
                            className="border-border bg-background focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label htmlFor="teamSize" className="mb-2 block text-sm font-medium">
                            Team Size
                          </label>
                          <select
                            id="teamSize"
                            value={formData.teamSize}
                            onChange={handleInputChange("teamSize")}
                            className="border-border bg-background focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                          >
                            <option value="">Select team size...</option>
                            <option value="1-5">1–5 agents</option>
                            <option value="6-15">6–15 agents</option>
                            <option value="16-30">16–30 agents</option>
                            <option value="31-75">31–75 agents</option>
                            <option value="75+">75+ agents</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="adSpend" className="mb-2 block text-sm font-medium">
                            Monthly Ad Spend
                          </label>
                          <select
                            id="adSpend"
                            value={formData.adSpend}
                            onChange={handleInputChange("adSpend")}
                            className="border-border bg-background focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                          >
                            <option value="">Select monthly ad spend...</option>
                            <option value="under-1k">Under $1,000/month</option>
                            <option value="1k-3k">$1,000–$3,000/month</option>
                            <option value="3k-7k">$3,000–$7,000/month</option>
                            <option value="7k-15k">$7,000–$15,000/month</option>
                            <option value="15k+">$15,000+/month</option>
                          </select>
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="bg-primary text-primary-foreground hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Download className="h-4 w-4" />
                              Get Your Free Playbook
                            </>
                          )}
                        </button>
                      </form>

                      {/* Trust Signals */}
                      <div className="border-border mt-6 border-t pt-6">
                        <div className="text-muted-foreground flex items-center gap-2 text-xs">
                          <Mail className="h-3 w-3" />
                          <span>No spam, ever. Unsubscribe anytime.</span>
                        </div>
                      </div>
                    </BorderGlow>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BorderGlow
                      borderRadius={18}
                      innerClassName="p-8 sm:p-10 text-center"
                      className="shadow-xl"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="bg-primary/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                      >
                        <CheckCircle className="text-primary h-8 w-8" />
                      </motion.div>

                      <h2 className="font-heading mb-3 text-2xl font-bold">
                        Your Playbook Is Ready
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        <span className="font-semibold">The $20M+ Brokerage Playbook</span> is ready
                        to download. We&apos;ve also saved a copy to{" "}
                        <span className="font-medium">{formData.email}</span>.
                      </p>
                      {downloadUrl && (
                        <button
                          onClick={handleDownloadClick}
                          className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-medium transition-colors"
                        >
                          <Download className="h-4 w-4" />
                          Download Your Playbook Now
                        </button>
                      )}

                      <div className="bg-primary/5 mt-6 space-y-3 rounded-lg p-4 text-left">
                        <p className="font-medium">What&apos;s Next:</p>
                        <ol className="text-muted-foreground space-y-2 text-sm">
                          <li className="flex gap-2">
                            <span className="text-primary font-bold">1.</span>
                            <span>Read the playbook (takes about 20 minutes)</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary font-bold">2.</span>
                            <span>Book a demo to see AI lead response in action</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary font-bold">3.</span>
                            <span>Start converting 3x more of your ad leads</span>
                          </li>
                        </ol>
                      </div>

                      {/* CTA-sweep: cold traffic → batch offer */}
                      <a
                        href="/batch-video-ads"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-center font-medium transition-colors"
                      >
                        Get 100 ads for $497
                      </a>
                    </BorderGlow>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
