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

  const handleInputChange = (field: keyof Omit<FormData, "magnetType">) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <FileText className="w-4 h-4" />
                Free Playbook
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl font-heading font-bold tracking-tighter">
                The $20M+ Brokerage Playbook:{" "}
                <span className="text-primary">How Top Teams Convert 3x More Ad Leads with AI</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-muted-foreground">
                The exact playbook top real estate teams and brokerages use to respond to every Facebook and YouTube lead in under 60 seconds — and book 3x more appointments without adding ISAs.
              </p>

              {/* What You Get */}
              <BorderGlow borderRadius={14} innerClassName="p-6 space-y-4">
                <h2 className="text-lg font-heading font-bold mb-4">What&apos;s Inside</h2>

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
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </BorderGlow>

              {/* Who This Is For */}
              <div className="bg-primary/5 rounded-xl border border-primary/20 p-6">
                <div className="flex gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                  <h2 className="text-lg font-heading font-bold">
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

              {/* Social Proof */}
              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground italic">
                  &quot;We implemented this playbook and went from 2% to 8% lead-to-appointment rate on
                  our Facebook campaigns in 45 days. The AI ISA cost comparison alone saved us from
                  hiring a third ISA.&quot;
                </p>
                <p className="text-sm font-medium mt-2">&mdash; Team Leader, 22-Agent Brokerage, Phoenix AZ</p>
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
                    <BorderGlow borderRadius={18} innerClassName="p-8 sm:p-10" className="shadow-xl">
                      {/* Form Header */}
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                          <Download className="w-4 h-4" />
                          Free Instant Access
                        </div>
                        <h2 className="text-2xl font-heading font-bold">
                          Get Your Free Playbook
                        </h2>
                        <p className="text-muted-foreground">
                          We&apos;ll send it immediately — no fluff, no sales pitch.
                        </p>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                          <div className="mb-4 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
                            {error}
                          </div>
                        )}

                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            placeholder="Sarah Johnson"
                            value={formData.name}
                            onChange={handleInputChange("name")}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Work Email <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            placeholder="sarah@premierhomes.com"
                            value={formData.email}
                            onChange={handleInputChange("email")}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        </div>

                        <div>
                          <label htmlFor="brokerage" className="block text-sm font-medium mb-2">
                            Brokerage / Team Name
                          </label>
                          <input
                            type="text"
                            id="brokerage"
                            placeholder="Premier Homes Team"
                            value={formData.brokerage}
                            onChange={handleInputChange("brokerage")}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        </div>

                        <div>
                          <label htmlFor="teamSize" className="block text-sm font-medium mb-2">
                            Team Size
                          </label>
                          <select
                            id="teamSize"
                            value={formData.teamSize}
                            onChange={handleInputChange("teamSize")}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
                          <label htmlFor="adSpend" className="block text-sm font-medium mb-2">
                            Monthly Ad Spend
                          </label>
                          <select
                            id="adSpend"
                            value={formData.adSpend}
                            onChange={handleInputChange("adSpend")}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
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
                          className="w-full bg-primary text-primary-foreground font-medium py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Download className="w-4 h-4" />
                              Get Your Free Playbook
                            </>
                          )}
                        </button>
                      </form>

                      {/* Trust Signals */}
                      <div className="mt-6 pt-6 border-t border-border">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Mail className="w-3 h-3" />
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
                  <BorderGlow borderRadius={18} innerClassName="p-8 sm:p-10 text-center" className="shadow-xl">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </motion.div>

                    <h2 className="text-2xl font-heading font-bold mb-3">
                      Check Your Inbox!
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Your copy of{" "}
                      <span className="font-semibold">
                        The $20M+ Brokerage Playbook
                      </span>{" "}
                      is on its way to{" "}
                      <span className="font-medium">{formData.email}</span>.
                    </p>
                    {downloadUrl && (
                      <button
                        onClick={handleDownloadClick}
                        className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download Your Playbook Now
                      </button>
                    )}

                    <div className="bg-primary/5 rounded-lg p-4 text-left space-y-3 mt-6">
                      <p className="font-medium">What&apos;s Next:</p>
                      <ol className="space-y-2 text-sm text-muted-foreground">
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

                    <a
                      href="/book-demo"
                      className="inline-flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-medium py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors text-center mt-4"
                    >
                      Book Your Strategy Call
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
