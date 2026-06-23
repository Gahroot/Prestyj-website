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
  AlertTriangle,
  Target,
  Star,
  Gift,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { VideoObjectJsonLd } from "@/components/seo/video-object-json-ld";
import { VideoTestimonialSection } from "@/components/sections/video-testimonial";
import { MAX_SHERROD_VIDEO_TESTIMONIAL } from "@/lib/testimonials";

// What we're building toward - aspirational targets, not measured results
const goals = [
  {
    icon: Clock,
    target: "<60s",
    label: "Response Time Target",
    description: "AI agents respond to every lead instantly",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    target: "3×",
    label: "More Booked Appointments",
    description: "Agents qualify and book around the clock",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Target,
    target: "90%+",
    label: "Lower Cost Per Lead",
    description: "Batch video ads find winners fast",
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
];

// Cited industry statistics with primary sources
const industryStats = [
  {
    stat: "42 hours",
    description: "Average B2B lead response time across industries",
    source: "Amplemarket / Voiso, 2024–2025",
    href: "https://amplemarket.com/blog/lead-response-time-statistics",
  },
  {
    stat: "78%",
    description: "Of B2B buyers buy from the vendor that responds first",
    source: "LeadConnect / Chili Piper, 2025",
    href: "https://www.chilipiper.com/post/sales-statistics",
  },
  {
    stat: "77%",
    description: "Of inbound leads never receive any response at all",
    source: "InsideSales (via Convoso), 2025",
    href: "https://www.convoso.com/blog/lead-response-statistics/",
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
      const lastName = formData.lastName.trim();
      await submitLead({
        first_name: formData.firstName.trim(),
        ...(lastName && { last_name: lastName }),
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
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "Founding Customers", url: "https://prestyj.com/results" },
        ]}
      />
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Prestyj AI Sales Agent",
          description:
            "Done-for-you AI agents and ad production for service businesses and real estate teams — answer calls, follow up with leads, book appointments, and produce video ads at scale.",
          brand: { "@type": "Brand", name: "Prestyj" },
        }}
      />
      <VideoObjectJsonLd
        videos={[
          {
            vimeoId: MAX_SHERROD_VIDEO_TESTIMONIAL.vimeoId,
            name: MAX_SHERROD_VIDEO_TESTIMONIAL.videoName,
            description: MAX_SHERROD_VIDEO_TESTIMONIAL.videoDescription,
          },
        ]}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="mx-auto mb-20 max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <Badge variant="outline" className="border-primary/50 text-primary mb-6">
            Pre-Launch · AI Agents for Marketing &amp; Sales
          </Badge>
          <h1 className="font-heading text-foreground mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Founding Customers Wanted
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg sm:text-xl">
            The AI agents are pre-revenue and looking for founding partners. No agent case
            studies yet — be the first. In return: priority access, founding rates, and a featured
            story when we have real numbers to share.
          </p>
        </section>

        {/* Goals Section - What we're building toward */}
        <section className="mx-auto mb-20 max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <Badge variant="outline" className="border-warning/50 text-warning mb-4">
              Targets · Not measured results
            </Badge>
            <h2 className="font-heading text-foreground mb-3 text-2xl font-bold sm:text-3xl">
              What We&apos;re Building Toward
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              These are the targets we&apos;ve set for AI agents and ad production outcomes — more
              booked appointments, faster lead response, lower cost per lead — not customer results
              yet. We&apos;ll publish real numbers once founding customers complete their first
              quarter with us.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-3"
          >
            {goals.map((goal) => (
              <motion.div key={goal.label} variants={itemVariants}>
                <Card className="bg-card border-border h-full text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className={cn("mx-auto mb-4 w-fit rounded-full p-4", goal.bgColor)}>
                      <goal.icon className={cn("h-8 w-8", goal.color)} />
                    </div>
                    <p className={cn("mb-2 text-4xl font-bold", goal.color)}>{goal.target}</p>
                    <p className="text-foreground mb-1 text-lg font-semibold">{goal.label}</p>
                    <p className="text-muted-foreground text-sm">{goal.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Cross-product proof — the AI Sales Agent is pre-launch, but the Batch */}
        {/* Video Ads service is already shipping real client outcomes. Surface */}
        {/* one to give the founding-customer CTA something concrete to lean on. */}
        <section className="mx-auto mb-20 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <Badge variant="outline" className="border-success/50 text-success mb-3">
              Already shipping · Batch Video Ads
            </Badge>
            <h2 className="font-heading text-foreground mb-3 text-2xl font-bold sm:text-3xl">
              While the agents are in pre-launch, our ad system already is.
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              A recent result from{" "}
              <Link href="/batch-video-ads" className="text-primary hover:underline">
                Prestyj Batch Video Ads
              </Link>
              {" — "}
              one of the three pillars founding AI agent partners get early access to.
            </p>
          </div>
          <VideoTestimonialSection className="px-0 py-0" />
        </section>

        {/* Founding Case Study CTA */}
        <section className="mx-auto mb-20 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="from-primary/5 via-background to-success/5 border-border rounded-2xl border bg-gradient-to-br p-8 sm:p-12">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Left - Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Badge variant="outline" className="border-success/50 text-success mb-4">
                  Limited Spots
                </Badge>
                <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
                  Become a Founding Case Study
                </h2>
                <p className="text-muted-foreground mb-8">
                  Partner with us early and help shape the product. In return, you get exclusive
                  benefits and featured placement.
                </p>

                <div className="space-y-4">
                  {foundingBenefits.map((benefit) => (
                    <div key={benefit.title} className="flex gap-4">
                      <div className="bg-primary/10 h-fit rounded-lg p-2">
                        <benefit.icon className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-foreground font-semibold">{benefit.title}</p>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
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
                        className="py-8 text-center"
                      >
                        <div className="bg-success/10 mx-auto mb-4 w-fit rounded-full p-4">
                          <CheckCircle className="text-success h-10 w-10" />
                        </div>
                        <h3 className="font-heading text-foreground mb-2 text-xl font-bold">
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
                              <p className="text-destructive mt-1 text-xs">{errors.firstName}</p>
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
                            <p className="text-destructive mt-1 text-xs">{errors.email}</p>
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
                            <p className="text-destructive mt-1 text-xs">{errors.phone}</p>
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
                          <p className="text-destructive text-center text-sm">{submitError}</p>
                        )}

                        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Apply to Be a Case Study
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>

                        <p className="text-muted-foreground text-center text-xs">
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
        <section className="mb-20 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <div className="mb-4 flex items-center justify-center gap-2">
                <AlertTriangle className="text-warning h-5 w-5" />
                <Badge variant="outline" className="border-warning/50 text-warning">
                  Industry Reality
                </Badge>
              </div>
              <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
                The Cost of Slow Response
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                Cited industry statistics — not Prestyj customer data — showing why speed-to-lead
                matters.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-3"
            >
              {industryStats.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="text-center">
                  <p className="text-foreground mb-3 text-5xl font-bold">{item.stat}</p>
                  <p className="text-foreground mb-2 font-medium">{item.description}</p>
                  <p className="text-muted-foreground text-xs">
                    Source:{" "}
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground underline underline-offset-2"
                    >
                      {item.source}
                    </a>
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Related Resources Section */}
        <section className="mx-auto mb-20 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading text-foreground mb-6 text-center text-xl font-semibold">
            Learn More
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <Link
              href="/compare/prestyj-vs-ylopo"
              className="border-border hover:border-primary/50 rounded-lg border p-4 transition-colors"
            >
              <p className="text-foreground mb-1 font-medium">Prestyj vs Ylopo</p>
              <p className="text-muted-foreground text-sm">
                See how we compare to other AI platforms
              </p>
            </Link>
            <Link
              href="/alternatives/human-isa"
              className="border-border hover:border-primary/50 rounded-lg border p-4 transition-colors"
            >
              <p className="text-foreground mb-1 font-medium">AI vs Human ISA</p>
              <p className="text-muted-foreground text-sm">Compare AI agents to traditional ISAs</p>
            </Link>
            <Link
              href="/blog/why-leads-go-cold"
              className="border-border hover:border-primary/50 rounded-lg border p-4 transition-colors"
            >
              <p className="text-foreground mb-1 font-medium">Why 80% of Leads Go Cold</p>
              <p className="text-muted-foreground text-sm">The data behind lead response times</p>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="from-primary/10 via-background to-success/5 border-border rounded-2xl border bg-gradient-to-br p-8 sm:p-12">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              Not Ready for a Case Study?
            </h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-xl text-lg">
              No problem. Book a demo to see how AI agents and batch video ads can run your
              marketing and sales.
            </p>
            <Button size="lg" className="px-10 py-6 text-lg" asChild>
              <Link href="/book-demo">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-muted-foreground mt-4 text-sm">
              Free demo. No credit card required.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
