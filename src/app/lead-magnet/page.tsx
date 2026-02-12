"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Download, Mail, Building2, FileText, CheckCircle, Loader2 } from "lucide-react";

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

  const handleInputChange = (field: keyof Omit<FormData, "magnetType">) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                Free Guide
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl font-heading font-bold tracking-tighter">
                The Roofer&apos;s 24/7{" "}
                <span className="text-primary">Lead Response Playbook</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-muted-foreground">
                Stop missing storm calls. Capture every lead with AI-powered instant
                response.
              </p>

              {/* What You Get */}
              <div className="bg-card rounded-xl border border-border p-6 space-y-4">
                <h2 className="text-lg font-heading font-bold mb-4">What&apos;s Inside</h2>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium">The 60-Second Standard</p>
                      <p className="text-sm text-muted-foreground">
                        Why speed wins every roofing job
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium">Emergency Triage Protocols</p>
                      <p className="text-sm text-muted-foreground">
                        Prioritize active leaks vs. cosmetic damage
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium">After-Hours Response Strategy</p>
                      <p className="text-sm text-muted-foreground">
                        Capture 40% of calls that come evenings/weekends
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium">Storm Surge Playbook</p>
                      <p className="text-sm text-muted-foreground">
                        Handle 500+ calls without hiring more staff
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium">ROI Calculator</p>
                      <p className="text-sm text-muted-foreground">
                        Calculate your revenue potential from faster response
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium">Implementation Checklist</p>
                      <p className="text-sm text-muted-foreground">
                        Step-by-step guide to deploying AI response
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Who This Is For */}
              <div className="bg-primary/5 rounded-xl border border-primary/20 p-6">
                <div className="flex gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                  <h2 className="text-lg font-heading font-bold">Made For Roofing Contractors</h2>
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

              {/* Social Proof */}
              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground italic">
                  &quot;This playbook showed us exactly what we were missing. We implemented
                  AI response and captured $450K in additional storm revenue
                  the first season.&quot;
                </p>
                <p className="text-sm font-medium mt-2">&mdash; Apex Roofing, Denver CO</p>
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
                    <div className="bg-card rounded-2xl border border-border shadow-xl p-8 sm:p-10">
                      {/* Form Header */}
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                          <Download className="w-4 h-4" />
                          Instant Download
                        </div>
                        <h2 className="text-2xl font-heading font-bold">
                          Get Your Free Playbook
                        </h2>
                        <p className="text-muted-foreground">
                          Enter your details and we&apos;ll send the guide immediately.
                        </p>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                          <div className="mb-4 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
                            {error}
                          </div>
                        )}

                        {/* Name Field */}
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2"
                          >
                            Full Name <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={handleInputChange("name")}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        </div>

                        {/* Email Field */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2"
                          >
                            Work Email <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            placeholder="john@apexroofing.com"
                            value={formData.email}
                            onChange={handleInputChange("email")}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        </div>

                        {/* Company Field */}
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium mb-2"
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            placeholder="Apex Roofing"
                            value={formData.company}
                            onChange={handleInputChange("company")}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        </div>

                        {/* Submit Button */}
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
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-card rounded-2xl border border-border shadow-xl p-8 sm:p-10 text-center"
                  >
                    {/* Success Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </motion.div>

                    {/* Success Message */}
                    <h2 className="text-2xl font-heading font-bold mb-3">
                      Check Your Inbox!
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Your copy of{" "}
                      <span className="font-semibold">
                        The Roofer&apos;s 24/7 Lead Response Playbook
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

                    {/* What's Next */}
                    <div className="bg-primary/5 rounded-lg p-4 text-left space-y-3">
                      <p className="font-medium">What&apos;s Next:</p>
                      <ol className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">1.</span>
                          <span>Download and read the playbook</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">2.</span>
                          <span>
                            Book a demo to see AI response in action
                          </span>
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
                      className="inline-flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-medium py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors text-center"
                    >
                      <Download className="w-4 h-4" />
                      Book Your Demo
                    </a>
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
