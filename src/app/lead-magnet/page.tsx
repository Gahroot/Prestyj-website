"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export default function LeadMagnetPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    magnetType: "roofing-playbook",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Call the API endpoint
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
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
                Free Guide
              </div>

              {/* Headline */}
              <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl">
                The Roofer&apos;s 24/7 <span className="text-primary">Lead Response Playbook</span>
              </h1>

              {/* Subheadline */}
              <p className="text-muted-foreground text-xl">
                Stop missing storm calls. Capture every lead with AI-powered instant response.
              </p>

              {/* What You Get */}
              <BorderGlow borderRadius={14} innerClassName="p-6 space-y-4">
                <h2 className="font-heading mb-4 text-lg font-bold">What&apos;s Inside</h2>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="text-primary h-5 w-5 shrink-0" />
                    <div>
                      <p className="font-medium">The 60-Second Standard</p>
                      <p className="text-muted-foreground text-sm">
                        Why speed wins every roofing job
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="text-primary h-5 w-5 shrink-0" />
                    <div>
                      <p className="font-medium">Emergency Triage Protocols</p>
                      <p className="text-muted-foreground text-sm">
                        Prioritize active leaks vs. cosmetic damage
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="text-primary h-5 w-5 shrink-0" />
                    <div>
                      <p className="font-medium">After-Hours Response Strategy</p>
                      <p className="text-muted-foreground text-sm">
                        Capture 40% of calls that come evenings/weekends
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="text-primary h-5 w-5 shrink-0" />
                    <div>
                      <p className="font-medium">Storm Surge Playbook</p>
                      <p className="text-muted-foreground text-sm">
                        Handle 500+ calls without hiring more staff
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="text-primary h-5 w-5 shrink-0" />
                    <div>
                      <p className="font-medium">ROI Calculator</p>
                      <p className="text-muted-foreground text-sm">
                        Calculate your revenue potential from faster response
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="text-primary h-5 w-5 shrink-0" />
                    <div>
                      <p className="font-medium">Implementation Checklist</p>
                      <p className="text-muted-foreground text-sm">
                        Step-by-step guide to deploying AI response
                      </p>
                    </div>
                  </div>
                </div>
              </BorderGlow>

              {/* Who This Is For */}
              <div className="bg-primary/5 border-primary/20 rounded-xl border p-6">
                <div className="mb-4 flex gap-3">
                  <Building2 className="text-primary h-6 w-6" />
                  <h2 className="font-heading text-lg font-bold">Made For Roofing Contractors</h2>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Contractors missing 30%+ of calls</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Teams overwhelmed during storm surge</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Business owners tired of leaving money on table</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Anyone wanting 24/7 response without staffing costs</span>
                  </li>
                </ul>
              </div>

              {/* Social Proof placeholder — early customer results coming soon */}
              <div className="border-border border-t pt-6">
                <p className="text-muted-foreground text-sm">
                  Early customer results coming soon.
                </p>
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
                          Instant Download
                        </div>
                        <h2 className="font-heading text-2xl font-bold">Get Your Free Playbook</h2>
                        <p className="text-muted-foreground">
                          Enter your details and we&apos;ll send the guide immediately.
                        </p>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                          <div className="bg-destructive/10 text-destructive mb-4 rounded-lg p-3 text-sm">
                            {error}
                          </div>
                        )}

                        {/* Name Field */}
                        <div>
                          <label htmlFor="name" className="mb-2 block text-sm font-medium">
                            Full Name <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={handleInputChange("name")}
                            className="border-border bg-background focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                          />
                        </div>

                        {/* Email Field */}
                        <div>
                          <label htmlFor="email" className="mb-2 block text-sm font-medium">
                            Work Email <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            placeholder="john@apexroofing.com"
                            value={formData.email}
                            onChange={handleInputChange("email")}
                            className="border-border bg-background focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                          />
                        </div>

                        {/* Company Field */}
                        <div>
                          <label htmlFor="company" className="mb-2 block text-sm font-medium">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            placeholder="Apex Roofing"
                            value={formData.company}
                            onChange={handleInputChange("company")}
                            className="border-border bg-background focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                          />
                        </div>

                        {/* Submit Button */}
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
                      {/* Success Icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="bg-primary/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                      >
                        <CheckCircle className="text-primary h-8 w-8" />
                      </motion.div>

                      {/* Success Message */}
                      <h2 className="font-heading mb-3 text-2xl font-bold">Check Your Inbox!</h2>
                      <p className="text-muted-foreground mb-6">
                        Your copy of{" "}
                        <span className="font-semibold">
                          The Roofer&apos;s 24/7 Lead Response Playbook
                        </span>{" "}
                        is on its way to <span className="font-medium">{formData.email}</span>.
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

                      {/* What's Next */}
                      <div className="bg-primary/5 space-y-3 rounded-lg p-4 text-left">
                        <p className="font-medium">What&apos;s Next:</p>
                        <ol className="text-muted-foreground space-y-2 text-sm">
                          <li className="flex gap-2">
                            <span className="text-primary font-bold">1.</span>
                            <span>Download and read the playbook</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary font-bold">2.</span>
                            <span>Book a demo to see AI response in action</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary font-bold">3.</span>
                            <span>Start capturing every storm lead</span>
                          </li>
                        </ol>
                      </div>

                      {/* CTA Button */}
                      <a
                        href="/book-demo"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-center font-medium transition-colors"
                      >
                        <Download className="h-4 w-4" />Book a Demo</a>
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
