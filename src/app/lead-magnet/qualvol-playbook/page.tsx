"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Download, Mail, Building2, FileText, CheckCircle, Loader2 } from "lucide-react";
import BorderGlow from "@/components/ui/border-glow";

interface FormData {
  name: string;
  email: string;
  company: string;
  magnetType: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  downloadUrl: string;
}

export default function QualvolPlaybookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    magnetType: "qualvol-playbook",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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

  const handleDownloadClick = () => {
    if (downloadUrl) {
      window.open(downloadUrl, "_blank");
    }
  };

  const handleInputChange =
    (field: keyof Omit<FormData, "magnetType">) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
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
                The <span className="text-primary">QualVol Content Playbook</span>
              </h1>

              {/* Subheadline */}
              <p className="text-muted-foreground text-xl">
                Quality and volume aren&apos;t opposites — they&apos;re multipliers. The exact
                operating system used to ship hundreds of on-brand posts per week without burning
                out a team or trading reach for polish.
              </p>

              {/* What You Get */}
              <BorderGlow borderRadius={14} innerClassName="p-6 space-y-4">
                <h2 className="font-heading mb-4 text-lg font-bold">What&apos;s Inside</h2>

                <div className="space-y-4">
                  {[
                    {
                      title: "The QualVol Equation",
                      desc: "Why output value is Quality × Volume — and what happens when either input drops to zero",
                    },
                    {
                      title: "The Swarm Model",
                      desc: "How to publish across many accounts on a single creative idea without diluting the brand",
                    },
                    {
                      title: "Quality Floor Scoring Rubric",
                      desc: "A scoring system that holds the quality bar at scale, post by post",
                    },
                    {
                      title: "Platform-Specific Cadence Math",
                      desc: "The actual posts-per-month thresholds for TikTok, Reels, Shorts, Threads, and YouTube long-form",
                    },
                    {
                      title: "Distribution Matrices",
                      desc: "How to map one piece of content into 8–12 surfaces without losing context per platform",
                    },
                    {
                      title: "30-Day QualVol Diagnostic",
                      desc: "Score your current operation in a single afternoon and find the gap to category leadership",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <CheckCircle className="text-primary h-5 w-5 shrink-0" />
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
                    Made For Owners &amp; Marketing Leaders
                  </h2>
                </div>
                <ul className="space-y-3 text-sm">
                  {[
                    "Service businesses serious about category leadership in their metro",
                    "Coaches, CMOs, and agency owners stuck between quality and volume",
                    "Operators ready to ship 1,000+ posts/month without an in-house team of 6",
                    'Anyone tired of "good" content that nobody sees',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Proof placeholder */}
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
                      <div className="mb-8 text-center">
                        <div className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                          <Download className="h-4 w-4" />
                          Instant Download
                        </div>
                        <h2 className="font-heading text-2xl font-bold">Get Your Free Playbook</h2>
                        <p className="text-muted-foreground">
                          Enter your details and we&apos;ll send the guide immediately.
                        </p>
                      </div>

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
                            placeholder="Alex Rivera"
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
                            placeholder="alex@yourcompany.com"
                            value={formData.email}
                            onChange={handleInputChange("email")}
                            className="border-border bg-background focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label htmlFor="company" className="mb-2 block text-sm font-medium">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            placeholder="Acme Co."
                            value={formData.company}
                            onChange={handleInputChange("company")}
                            className="border-border bg-background focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                          />
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
                        <span className="font-semibold">The QualVol Content Playbook</span> is ready
                        to download. We&apos;ve also saved a copy to{" "}
                        <span className="font-medium">{formData.email}</span>.
                      </p>
                      {downloadUrl && (
                        <button
                          onClick={handleDownloadClick}
                          className="bg-primary text-primary-foreground hover:bg-primary/90 mb-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-medium transition-colors"
                        >
                          <Download className="h-4 w-4" />
                          Download Your Playbook Now
                        </button>
                      )}

                      <div className="bg-primary/5 space-y-3 rounded-lg p-4 text-left">
                        <p className="font-medium">What&apos;s Next:</p>
                        <ol className="text-muted-foreground space-y-2 text-sm">
                          <li className="flex gap-2">
                            <span className="text-primary font-bold">1.</span>
                            <span>Read the playbook (about 25 minutes)</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary font-bold">2.</span>
                            <span>Run the 30-day QualVol diagnostic on your operation</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary font-bold">3.</span>
                            <span>Pick your operating model and start compounding</span>
                          </li>
                        </ol>
                      </div>

                      {/* CTA-sweep: cold traffic → batch offer */}
                      <p className="text-muted-foreground mt-6 text-sm">
                        Need scripted video volume to feed your QualVol engine?{" "}
                        <Link
                          href="/batch-video-ads"
                          className="text-primary font-medium underline-offset-4 hover:underline"
                        >
                          Get 100 ads for $497 →
                        </Link>
                      </p>
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
