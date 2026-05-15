"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatPhoneNumber } from "@/lib/api";
import { trackEvent } from "@/lib/meta-pixel";
import {
  ArrowRight,
  ArrowLeft,
  User,
  Mail,
  Phone,
  DollarSign,
  CheckCircle,
  Loader2,
  ExternalLink,
} from "lucide-react";
import Cal from "@calcom/embed-react";
import BorderGlow from "@/components/ui/border-glow";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  adSpend: string;
};

type Step = {
  id: keyof FormData | "name";
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

const STEPS: Step[] = [
  {
    id: "name",
    title: "What's your name?",
    subtitle: "So we know who we're making ads for",
    icon: <User className="h-6 w-6" />,
  },
  {
    id: "email",
    title: "What's your email?",
    subtitle: "We'll send your ad previews here",
    icon: <Mail className="h-6 w-6" />,
  },
  {
    id: "phone",
    title: "What's your phone number?",
    subtitle: "For quick updates on your ads",
    icon: <Phone className="h-6 w-6" />,
  },
  {
    id: "adSpend",
    title: "What's your monthly ad spend?",
    subtitle: "Helps us tailor the right package for you",
    icon: <DollarSign className="h-6 w-6" />,
  },
];

const AD_SPEND_OPTIONS = [
  { value: "500-or-less", label: "$500 or less" },
  { value: "1k-2k", label: "$1,000 - $2,000" },
  { value: "3k-5k", label: "$3,000 - $5,000" },
  { value: "5k-plus", label: "$5,000+" },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

function isQualified(adSpend: string): boolean {
  return adSpend !== "500-or-less";
}

export function LeadForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    adSpend: "",
  });
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"form" | "qualified" | "waitlist">("form");
  const stepInputRef = useRef<HTMLInputElement>(null);

  const focusStepInput = useCallback(() => {
    stepInputRef.current?.focus({ preventScroll: true });
  }, []);

  const validateCurrentStep = (): boolean => {
    const step = STEPS[currentStep];
    if (!step) return true;
    const newErrors: Partial<Record<string, string>> = {};

    switch (step.id) {
      case "name":
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        break;
      case "email":
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
          newErrors.email = "Enter a valid email";
        break;
      case "phone":
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        else if (formData.phone.replace(/\D/g, "").length < 10)
          newErrors.phone = "Enter a valid phone number";
        break;
      case "adSpend":
        if (!formData.adSpend) newErrors.adSpend = "Please select an option";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async () => {
    if (!validateCurrentStep()) return;

    if (currentStep < STEPS.length - 1) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsSubmitting(true);

      try {
        const adSpendLabel =
          AD_SPEND_OPTIONS.find((o) => o.value === formData.adSpend)?.label || formData.adSpend;

        await fetch(
          "https://backend-api-production-b536.up.railway.app/api/v1/p/leads/ls_VPUWE5hD",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              first_name: formData.firstName.trim(),
              last_name: formData.lastName.trim(),
              phone_number: formatPhoneNumber(formData.phone),
              email: formData.email.trim(),
              notes: `Monthly Ad Spend: ${adSpendLabel}`,
            }),
          },
        );
      } catch {
        // Still route them — don't block the UX
      } finally {
        trackEvent("Lead", {
          email: formData.email,
          phone: formData.phone,
          firstName: formData.firstName,
          lastName: formData.lastName,
        });
        setIsSubmitting(false);
        setSubmitState(isQualified(formData.adSpend) ? "qualified" : "waitlist");
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
      setErrors({});
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  if (submitState === "qualified") {
    return (
      <section id="lead-form" className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 text-center"
          >
            <div className="bg-success/10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full">
              <CheckCircle className="text-success h-8 w-8" />
            </div>
            <h2 className="font-heading text-foreground mb-3 text-3xl font-bold sm:text-4xl">
              You Qualify!
            </h2>
            <p className="text-muted-foreground text-lg">
              Book your strategy call below and we&apos;ll map out your 300-ad campaign.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Cal
              calLink="nolan-grout-x0fgn8/30min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{
                theme: "dark",
              }}
            />
          </motion.div>
        </div>
      </section>
    );
  }

  if (submitState === "waitlist") {
    return (
      <section id="lead-form" className="py-12 md:py-16">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="bg-primary/10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full">
              <CheckCircle className="text-primary h-8 w-8" />
            </div>
            <h2 className="font-heading text-foreground mb-3 text-3xl font-bold sm:text-4xl">
              Thanks! You&apos;re on the List
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              We&apos;ll reach out when a spot opens up. In the meantime, join our free community to
              start learning.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="rounded-lg px-8 py-6 text-base font-bold"
              asChild
            >
              <a href="https://www.skool.com/prestyj" target="_blank" rel="noopener noreferrer">
                Join Our Community
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  const renderStepContent = () => {
    const step = STEPS[currentStep];
    if (!step) return null;

    switch (step.id) {
      case "name":
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-foreground mb-1.5 block text-sm font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className={cn(
                    "bg-card text-foreground w-full rounded-xl border-2 px-4 py-3 transition-colors",
                    "focus:border-primary focus:ring-primary/20 focus:ring-2 focus:outline-none",
                    "placeholder:text-muted-foreground",
                    errors.firstName ? "border-destructive" : "border-border",
                  )}
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-destructive mt-1 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="text-foreground mb-1.5 block text-sm font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className={cn(
                    "bg-card text-foreground w-full rounded-xl border-2 px-4 py-3 transition-colors",
                    "focus:border-primary focus:ring-primary/20 focus:ring-2 focus:outline-none",
                    "placeholder:text-muted-foreground",
                    errors.lastName ? "border-destructive" : "border-border",
                  )}
                  placeholder="Smith"
                />
                {errors.lastName && (
                  <p className="text-destructive mt-1 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>
          </motion.div>
        );

      case "email":
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <label className="text-foreground mb-1.5 block text-sm font-medium">
              Email Address
            </label>
            <input
              ref={stepInputRef}
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={cn(
                "bg-card text-foreground w-full rounded-xl border-2 px-4 py-3 transition-colors",
                "focus:border-primary focus:ring-primary/20 focus:ring-2 focus:outline-none",
                "placeholder:text-muted-foreground",
                errors.email ? "border-destructive" : "border-border",
              )}
              placeholder="john@company.com"
            />
            {errors.email && <p className="text-destructive mt-1 text-sm">{errors.email}</p>}
          </motion.div>
        );

      case "phone":
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <label className="text-foreground mb-1.5 block text-sm font-medium">Phone Number</label>
            <input
              ref={stepInputRef}
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className={cn(
                "bg-card text-foreground w-full rounded-xl border-2 px-4 py-3 transition-colors",
                "focus:border-primary focus:ring-primary/20 focus:ring-2 focus:outline-none",
                "placeholder:text-muted-foreground",
                errors.phone ? "border-destructive" : "border-border",
              )}
              placeholder="(555) 123-4567"
            />
            {errors.phone && <p className="text-destructive mt-1 text-sm">{errors.phone}</p>}
          </motion.div>
        );

      case "adSpend":
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {AD_SPEND_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={cn(
                  "rounded-xl border-2 p-4 text-center transition-all duration-200",
                  "hover:border-primary hover:bg-primary/5",
                  formData.adSpend === option.value
                    ? "border-primary bg-primary/10 ring-primary/20 ring-2"
                    : "border-border bg-card",
                )}
              >
                <span className="font-heading text-foreground font-semibold">{option.label}</span>
              </button>
            ))}
            {errors.adSpend && (
              <p className="text-destructive col-span-full mt-1 text-center text-sm">
                {errors.adSpend}
              </p>
            )}
          </motion.div>
        );

      default:
        return null;
    }
  };

  const handleSelect = (value: string) => {
    handleInputChange("adSpend", value);
    setErrors((prev) => ({ ...prev, adSpend: undefined }));
  };

  return (
    <section id="lead-form" className="py-12 md:py-16">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <BorderGlow borderRadius={18} innerClassName="p-8 md:p-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleNext();
            }}
          >
            {/* Progress dots */}
            <div className="mb-8 flex justify-center gap-2">
              {STEPS.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === currentStep
                      ? "bg-primary w-8"
                      : index < currentStep
                        ? "bg-primary w-2"
                        : "bg-muted w-2",
                  )}
                />
              ))}
            </div>

            {/* Step header */}
            <div className="mb-8 text-center">
              <motion.div
                key={`icon-${currentStep}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-primary/10 text-primary mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full"
              >
                {STEPS[currentStep]?.icon}
              </motion.div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`header-${currentStep}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h2 className="font-heading text-foreground mb-2 text-2xl font-bold sm:text-3xl">
                    {STEPS[currentStep]?.title}
                  </h2>
                  <p className="text-muted-foreground">{STEPS[currentStep]?.subtitle}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Step content */}
            <div className="relative min-h-[140px] overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentStep}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  onAnimationComplete={(definition) => {
                    if (definition === "center") focusStepInput();
                  }}
                >
                  {renderStepContent()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="border-border mt-8 flex items-center justify-between border-t pt-6">
              <Button
                type="button"
                variant="ghost"
                onClick={handleBack}
                disabled={currentStep === 0}
                className={cn(currentStep === 0 && "invisible")}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>

              <Button
                type="submit"
                size="lg"
                className="min-w-[160px] font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : currentStep === STEPS.length - 1 ? (
                  <>
                    Get My FREE Ads
                    <CheckCircle className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>

            <p className="text-muted-foreground mt-6 text-center text-xs">
              By submitting, you consent to receive marketing communications via email, phone, and
              SMS. You can unsubscribe at any time. See our{" "}
              <a
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground underline"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </BorderGlow>
      </div>
    </section>
  );
}
