"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  Phone,
  Mail,
  Building2,
  FileText,
  CheckCircle,
  Loader2,
  UserCheck,
} from "lucide-react";
import { PhoneInput, normalizeToE164 } from "@/components/ui/phone-input";
import { submitLead } from "@/lib/api";

export default function ReactivateLeadsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const isPhoneValid = normalizeToE164(formData.phone).length >= 12;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const nameParts = formData.name.trim().split(" ");
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(" ") || undefined;
      const normalized = normalizeToE164(formData.phone);
      const digits = normalized.replace(/\D/g, "");
      // Strip leading 1 for 11-digit numbers
      const phone10 =
        digits.length === 11 && digits.startsWith("1")
          ? digits.slice(1)
          : digits;

      await submitLead({
        first_name: firstName,
        last_name: lastName,
        phone_number: phone10,
        email: formData.email,
        company_name: formData.company || undefined,
        notes: "Lead Magnet: reactivate-leads-guide",
        source: "lead-magnet-reactivate-leads",
        trigger_call: true,
      });

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to submit. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange =
    (field: "name" | "email" | "company") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
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
                How to Reactivate{" "}
                <span className="text-primary">Dead Leads</span> with AI
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-muted-foreground">
                Your old leads are worth thousands. Learn how AI turns forgotten
                contacts into booked appointments — automatically.
              </p>

              {/* What You Get */}
              <div className="bg-card rounded-xl border border-border p-6 space-y-4">
                <h2 className="text-lg font-heading font-bold mb-4">
                  What&apos;s Inside
                </h2>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium">The Dead Lead Goldmine</p>
                      <p className="text-sm text-muted-foreground">
                        Why 60% of &quot;dead&quot; leads are still ready to buy
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium">AI Reactivation Sequences</p>
                      <p className="text-sm text-muted-foreground">
                        Proven call and text scripts that re-engage cold leads
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium">Timing & Frequency Playbook</p>
                      <p className="text-sm text-muted-foreground">
                        When to reach out for maximum response rates
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium">Segmentation Framework</p>
                      <p className="text-sm text-muted-foreground">
                        Prioritize which leads to reactivate first
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium">Automation Setup Guide</p>
                      <p className="text-sm text-muted-foreground">
                        Set it and forget it — AI handles follow-up 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Who This Is For */}
              <div className="bg-primary/5 rounded-xl border border-primary/20 p-6">
                <div className="flex gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                  <h2 className="text-lg font-heading font-bold">
                    Built For Service Businesses
                  </h2>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Sitting on 500+ leads that never closed</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Paying for new leads while old ones gather dust</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Team too busy to follow up consistently</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>
                      Ready to turn existing data into revenue
                    </span>
                  </li>
                </ul>
              </div>

              {/* Social Proof */}
              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground italic">
                  &quot;We reactivated 2,400 old leads and booked 47 appointments
                  in the first week. The AI handled everything — calls, texts,
                  follow-ups.&quot;
                </p>
                <p className="text-sm font-medium mt-2">
                  &mdash; Home Services Company, Tampa FL
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
                    <div className="bg-card rounded-2xl border border-border shadow-xl p-8 sm:p-10">
                      {/* Form Header */}
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                          <Phone className="w-4 h-4" />
                          Free Guide + Live Demo
                        </div>
                        <h2 className="text-2xl font-heading font-bold">
                          Get Your Free Guide
                        </h2>
                        <p className="text-muted-foreground">
                          Enter your details and our AI will call you instantly to
                          show you how lead reactivation works.
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

                        {/* Phone Field */}
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium mb-2"
                          >
                            Phone Number{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <PhoneInput
                            id="phone"
                            value={formData.phone}
                            onChange={(value) =>
                              setFormData((prev) => ({ ...prev, phone: value }))
                            }
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Our AI will call this number instantly after you submit.
                          </p>
                        </div>

                        {/* Email Field */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2"
                          >
                            Work Email{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            placeholder="john@company.com"
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
                            placeholder="Acme Services"
                            value={formData.company}
                            onChange={handleInputChange("company")}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={loading || !isPhoneValid}
                          className="w-full bg-primary text-primary-foreground font-medium py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Phone className="w-4 h-4" />
                              Get Guide & See AI Call Live
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
                    className="bg-card rounded-2xl border border-border shadow-xl p-8 sm:p-10 text-center space-y-6"
                  >
                    {/* Success Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto"
                    >
                      <Phone className="w-8 h-8 text-primary" />
                    </motion.div>

                    {/* Success Message */}
                    <div>
                      <h2 className="text-2xl font-heading font-bold mb-3">
                        Check Your Phone!
                      </h2>
                      <p className="text-muted-foreground">
                        Our AI is calling you right now. Pick up to experience
                        lead reactivation in action.
                      </p>
                    </div>

                    {/* What Just Happened */}
                    <div className="bg-primary/5 rounded-lg p-4 text-left space-y-3">
                      <p className="font-medium flex items-center gap-2">
                        <UserCheck className="w-4 h-4 text-primary" />
                        What Just Happened:
                      </p>
                      <ol className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">1.</span>
                          <span>
                            You submitted your info — like an old lead would
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">2.</span>
                          <span>
                            Our AI called you in seconds — no human needed
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary font-bold">3.</span>
                          <span>
                            Imagine this happening to every lead in your database
                          </span>
                        </li>
                      </ol>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="/book-demo"
                      className="inline-flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-medium py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors text-center"
                    >
                      Book a Full Demo
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
