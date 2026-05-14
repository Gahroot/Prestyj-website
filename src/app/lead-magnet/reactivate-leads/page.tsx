"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Phone, Mail, Building2, Sparkles, CheckCircle, Loader2 } from "lucide-react";
import { PhoneInput, normalizeToE164 } from "@/components/ui/phone-input";
import { submitLead } from "@/lib/api";
import BorderGlow from "@/components/ui/border-glow";

export default function ReactivateLeadsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const isPhoneValid = normalizeToE164(formData.phone).length >= 12;
  const canSubmit = !loading && isPhoneValid && consent;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setError("Please confirm you agree to receive a phone call from our AI agent.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const nameParts = formData.name.trim().split(" ");
      const firstName = nameParts[0] ?? formData.name.trim();
      const lastName = nameParts.slice(1).join(" ");
      const normalized = normalizeToE164(formData.phone);
      const digits = normalized.replace(/\D/g, "");
      // Strip leading 1 for 11-digit numbers
      const phone10 = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;

      await submitLead({
        first_name: firstName,
        ...(lastName && { last_name: lastName }),
        phone_number: phone10,
        email: formData.email,
        ...(formData.company && { company_name: formData.company }),
        notes: "Lead Magnet: reactivate-leads-live-demo (user consented to AI call)",
        source: "lead-magnet-reactivate-leads",
        trigger_call: true,
      });

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange =
    (field: "name" | "email" | "company") => (e: React.ChangeEvent<HTMLInputElement>) => {
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
                <Sparkles className="h-4 w-4" />
                Live AI Demo
              </div>

              {/* Headline */}
              <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl">
                Experience an <span className="text-primary">AI Reactivation Call</span> Live
              </h1>

              {/* Subheadline */}
              <p className="text-muted-foreground text-xl">
                Your old leads are worth thousands. Submit your number and our AI agent will call
                you in under 60 seconds — exactly the way it would re-engage one of your dormant
                leads.
              </p>

              {/* What You'll Experience */}
              <BorderGlow borderRadius={14} innerClassName="p-6 space-y-4">
                <h2 className="font-heading mb-4 text-lg font-bold">What You&apos;ll Experience</h2>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="text-primary h-5 w-5 shrink-0" />
                    <div>
                      <p className="font-medium">A real reactivation call</p>
                      <p className="text-muted-foreground text-sm">
                        Our AI agent calls you in under 60 seconds — the same flow that re-engages
                        cold leads
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="text-primary h-5 w-5 shrink-0" />
                    <div>
                      <p className="font-medium">Natural conversation</p>
                      <p className="text-muted-foreground text-sm">
                        Hear how the agent handles objections, qualifies intent, and books
                        appointments
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="text-primary h-5 w-5 shrink-0" />
                    <div>
                      <p className="font-medium">SMS follow-up</p>
                      <p className="text-muted-foreground text-sm">
                        After the call, you&apos;ll get a text summary you can forward to your team
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="text-primary h-5 w-5 shrink-0" />
                    <div>
                      <p className="font-medium">Zero scripts to read</p>
                      <p className="text-muted-foreground text-sm">
                        Just answer like a customer would — see exactly what your prospects hear
                      </p>
                    </div>
                  </div>
                </div>
              </BorderGlow>

              {/* Who This Is For */}
              <div className="bg-primary/5 border-primary/20 rounded-xl border p-6">
                <div className="mb-4 flex gap-3">
                  <Building2 className="text-primary h-6 w-6" />
                  <h2 className="font-heading text-lg font-bold">Built For Service Businesses</h2>
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
                    <span>Ready to turn existing data into revenue</span>
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
                          <Phone className="h-4 w-4" />
                          Call You in &lt;60 Seconds
                        </div>
                        <h2 className="font-heading text-2xl font-bold">
                          Get a Live AI Demo Call
                        </h2>
                        <p className="text-muted-foreground">
                          Enter your details and our AI agent will call you right now to walk
                          through a reactivation scenario.
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

                        {/* Phone Field */}
                        <div>
                          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                            Phone Number <span className="text-destructive">*</span>
                          </label>
                          <PhoneInput
                            id="phone"
                            value={formData.phone}
                            onChange={(value) => setFormData((prev) => ({ ...prev, phone: value }))}
                            className="border-border bg-background focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                          />
                          <p className="text-muted-foreground mt-1 text-xs">
                            Our AI agent will call this number within 60 seconds of submit.
                          </p>
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
                            placeholder="john@company.com"
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
                            placeholder="Acme Services"
                            value={formData.company}
                            onChange={handleInputChange("company")}
                            className="border-border bg-background focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                          />
                        </div>

                        {/* TCPA Consent */}
                        <label className="border-border bg-muted/20 flex cursor-pointer items-start gap-3 rounded-lg border p-3 text-sm">
                          <input
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            required
                            className="accent-primary mt-0.5 h-4 w-4 shrink-0 cursor-pointer"
                          />
                          <span className="text-muted-foreground">
                            By submitting, you agree to receive a phone call and follow-up text
                            from our AI agent at the number provided.{" "}
                            <span className="text-foreground font-medium">
                              Yes — you&apos;ll get to experience the product live.
                            </span>
                          </span>
                        </label>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={!canSubmit}
                          className="bg-primary text-primary-foreground hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Phone className="h-4 w-4" />
                              Call Me Now
                            </>
                          )}
                        </button>
                      </form>

                      {/* Trust Signals */}
                      <div className="border-border mt-6 border-t pt-6">
                        <div className="text-muted-foreground flex items-center gap-2 text-xs">
                          <Mail className="h-3 w-3" />
                          <span>One call, one text. No spam. Reply STOP anytime.</span>
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
                      innerClassName="p-8 sm:p-10 text-center space-y-6"
                      className="shadow-xl"
                    >
                      {/* Success Icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="bg-primary/10 mx-auto flex h-16 w-16 items-center justify-center rounded-full"
                      >
                        <CheckCircle className="text-primary h-8 w-8" />
                      </motion.div>

                      {/* Success Message */}
                      <div>
                        <h2 className="font-heading mb-3 text-2xl font-bold">
                          Your phone is about to ring.
                        </h2>
                        <p className="text-muted-foreground">
                          Our AI agent is dialing{" "}
                          <span className="text-foreground font-semibold">
                            {normalizeToE164(formData.phone) || formData.phone}
                          </span>{" "}
                          now. Pick up and have a real conversation — answer the way one of your
                          leads would.
                        </p>
                      </div>

                      {/* What's Next */}
                      <div className="bg-primary/5 space-y-3 rounded-lg p-4 text-left">
                        <p className="font-medium">What happens next:</p>
                        <ol className="text-muted-foreground space-y-2 text-sm">
                          <li className="flex gap-2">
                            <span className="text-primary font-bold">1.</span>
                            <span>You&apos;ll get a call within 60 seconds from our AI agent</span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary font-bold">2.</span>
                            <span>
                              A text summary lands at the same number right after the call
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-primary font-bold">3.</span>
                            <span>
                              If you want to deploy this on your own dead-lead list, book a
                              strategy call below
                            </span>
                          </li>
                        </ol>
                      </div>

                      {/* CTA Button */}
                      <a
                        href="/book-demo"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-center font-medium transition-colors"
                      >
                        Book a Strategy Call
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
