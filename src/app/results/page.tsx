"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { submitLead, formatPhoneNumber } from "@/lib/api";
import {
  ArrowRight,
  Clock,
  TrendingUp,
  Users,
  AlertTriangle,
  Target,
  Star,
  Gift,
  CheckCircle,
  Loader2,
} from "lucide-react";

// What we're building toward - honest goals, not fake results
const goals = [
  {
    icon: Clock,
    target: "<60s",
    label: "Response Time Goal",
    description: "Instant lead engagement",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    target: "3x",
    label: "Appointment Target",
    description: "More booked meetings",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Users,
    target: "90%+",
    label: "Engagement Goal",
    description: "Lead response rate",
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
];

// Verified industry statistics with sources
const industryStats = [
  {
    stat: "4+ hours",
    description: "Average industry response time to new leads",
    source: "Industry research",
  },
  {
    stat: "78%",
    description: "Of buyers work with the first agent who responds",
    source: "NAR research",
  },
  {
    stat: "80%",
    description: "Of leads go cold due to slow follow-up",
    source: "Real estate industry data",
  },
];

// Benefits of being a founding case study
const foundingBenefits = [
  {
    icon: Star,
    title: "Priority Support",
    description: "Direct access to our team throughout your journey",
  },
  {
    icon: Gift,
    title: "Founding Rate",
    description: "Lock in early-adopter pricing for life",
  },
  {
    icon: Target,
    title: "Featured Story",
    description: "Be showcased on our website and marketing",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ResultsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    market: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Required";
    if (!formData.email.trim()) {
      newErrors.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Required";
    } else {
      const phoneDigits = formatPhoneNumber(formData.phone);
      if (phoneDigits.length !== 10) {
        newErrors.phone = "Enter 10-digit phone";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitLead({
        first_name: formData.firstName.trim(),
        last_name: formData.lastName.trim() || undefined,
        phone_number: formatPhoneNumber(formData.phone),
        email: formData.email.trim(),
        notes: formData.market ? `Market: ${formData.market}` : "Founding case study interest",
        source: "founding_case_study",
        trigger_call: false,
        trigger_text: false,
      });
      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
            Early Access
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Be Our First Success Story
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;re looking for founding customers to partner with. Get priority access, founding
            rates, and be featured as a case study.
          </p>
        </section>

        {/* Goals Section - What we're building toward */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
              What We&apos;re Building Toward
            </h2>
            <p className="text-muted-foreground">
              Our performance targets based on industry benchmarks
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-6"
          >
            {goals.map((goal) => (
              <motion.div key={goal.label} variants={itemVariants}>
                <Card className="bg-card border-border text-center h-full">
                  <CardContent className="pt-8 pb-6">
                    <div className={cn("p-4 rounded-full w-fit mx-auto mb-4", goal.bgColor)}>
                      <goal.icon className={cn("w-8 h-8", goal.color)} />
                    </div>
                    <p className={cn("text-4xl font-bold mb-2", goal.color)}>{goal.target}</p>
                    <p className="text-lg font-semibold text-foreground mb-1">{goal.label}</p>
                    <p className="text-sm text-muted-foreground">{goal.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Founding Case Study CTA */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-gradient-to-br from-primary/5 via-background to-success/5 rounded-2xl border border-border p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Badge variant="outline" className="mb-4 border-success/50 text-success">
                  Limited Spots
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                  Become a Founding Case Study
                </h2>
                <p className="text-muted-foreground mb-8">
                  Partner with us early and help shape the product. In return, you get exclusive
                  benefits and featured placement.
                </p>

                <div className="space-y-4">
                  {foundingBenefits.map((benefit) => (
                    <div key={benefit.title} className="flex gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 h-fit">
                        <benefit.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{benefit.title}</p>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right - Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border-border">
                  <CardContent className="p-6 sm:p-8">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                      >
                        <div className="p-4 rounded-full bg-success/10 w-fit mx-auto mb-4">
                          <CheckCircle className="w-10 h-10 text-success" />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                          You&apos;re on the list!
                        </h3>
                        <p className="text-muted-foreground">
                          We&apos;ll reach out within 24 hours to discuss next steps.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Input
                              placeholder="First name *"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange("firstName", e.target.value)}
                              className={cn(errors.firstName && "border-destructive")}
                            />
                            {errors.firstName && (
                              <p className="text-xs text-destructive mt-1">{errors.firstName}</p>
                            )}
                          </div>
                          <div>
                            <Input
                              placeholder="Last name"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange("lastName", e.target.value)}
                            />
                          </div>
                        </div>

                        <div>
                          <Input
                            type="email"
                            placeholder="Email *"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className={cn(errors.email && "border-destructive")}
                          />
                          {errors.email && (
                            <p className="text-xs text-destructive mt-1">{errors.email}</p>
                          )}
                        </div>

                        <div>
                          <Input
                            type="tel"
                            placeholder="Phone *"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className={cn(errors.phone && "border-destructive")}
                          />
                          {errors.phone && (
                            <p className="text-xs text-destructive mt-1">{errors.phone}</p>
                          )}
                        </div>

                        <div>
                          <Input
                            placeholder="Your market (e.g., Austin TX)"
                            value={formData.market}
                            onChange={(e) => handleInputChange("market", e.target.value)}
                          />
                        </div>

                        {submitError && (
                          <p className="text-sm text-destructive text-center">{submitError}</p>
                        )}

                        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Apply to Be a Case Study
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                          No commitment required. We&apos;ll reach out to discuss fit.
                        </p>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industry Comparison Section - Verified Stats */}
        <section className="py-16 mb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-warning" />
                <Badge variant="outline" className="border-warning/50 text-warning">
                  Industry Reality
                </Badge>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                The Cost of Slow Response
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                These verified industry statistics show why speed-to-lead matters.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {industryStats.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="text-center">
                  <p className="text-5xl font-bold text-foreground mb-3">{item.stat}</p>
                  <p className="text-foreground font-medium mb-2">{item.description}</p>
                  <p className="text-xs text-muted-foreground">Source: {item.source}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Related Resources Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h3 className="text-xl font-heading font-semibold text-foreground mb-6 text-center">
            Learn More
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/compare/prestyj-vs-ylopo"
              className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <p className="font-medium text-foreground mb-1">Prestyj vs Ylopo</p>
              <p className="text-sm text-muted-foreground">
                See how we compare to other AI platforms
              </p>
            </Link>
            <Link
              href="/compare/prestyj-vs-isa"
              className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <p className="font-medium text-foreground mb-1">AI vs Human ISA</p>
              <p className="text-sm text-muted-foreground">Compare AI agents to traditional ISAs</p>
            </Link>
            <Link
              href="/blog/why-leads-go-cold"
              className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <p className="font-medium text-foreground mb-1">Why 80% of Leads Go Cold</p>
              <p className="text-sm text-muted-foreground">
                The data behind lead response times
              </p>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary/10 via-background to-success/5 rounded-2xl p-8 sm:p-12 border border-border">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Not Ready for Case Study?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              No problem. Book a demo to see how PRESTYJ can transform your lead response.
            </p>
            <Button size="lg" className="text-lg px-10 py-6" asChild>
              <Link href="/book-demo">
                Book Your Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Free demo. No credit card required.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
