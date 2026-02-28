"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatPhoneNumber } from "@/lib/api";
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
    icon: <User className="w-6 h-6" />,
  },
  {
    id: "email",
    title: "What's your email?",
    subtitle: "We'll send your ad previews here",
    icon: <Mail className="w-6 h-6" />,
  },
  {
    id: "phone",
    title: "What's your phone number?",
    subtitle: "For quick updates on your ads",
    icon: <Phone className="w-6 h-6" />,
  },
  {
    id: "adSpend",
    title: "What's your monthly ad spend?",
    subtitle: "Helps us tailor the right package for you",
    icon: <DollarSign className="w-6 h-6" />,
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
  const [submitState, setSubmitState] = useState<
    "form" | "qualified" | "waitlist"
  >("form");

  const validateCurrentStep = (): boolean => {
    const step = STEPS[currentStep];
    const newErrors: Partial<Record<string, string>> = {};

    switch (step.id) {
      case "name":
        if (!formData.firstName.trim())
          newErrors.firstName = "First name is required";
        if (!formData.lastName.trim())
          newErrors.lastName = "Last name is required";
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
          AD_SPEND_OPTIONS.find((o) => o.value === formData.adSpend)?.label ||
          formData.adSpend;

        await fetch(
          "https://backend-api-production-b536.up.railway.app/api/v1/lead-form/ls_VPUWE5hD",
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
          }
        );
      } catch {
        // Still route them — don't block the UX
      } finally {
        setIsSubmitting(false);
        setSubmitState(
          isQualified(formData.adSpend) ? "qualified" : "waitlist"
        );
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-6">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-3">
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
              calLink="nolan-grout-nolan-grout-real-estate-y2trgn/30min"
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
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-3">
              Thanks! You&apos;re on the List
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We&apos;ll reach out when a spot opens up. In the meantime, join our free community to start learning.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="font-bold text-base px-8 py-6 rounded-lg"
              asChild
            >
              <a
                href="https://www.skool.com/prestyj"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Our Community
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  const renderStepContent = () => {
    const step = STEPS[currentStep];

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
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  autoFocus
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border-2 bg-card text-foreground transition-colors",
                    "focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",
                    "placeholder:text-muted-foreground",
                    errors.firstName ? "border-destructive" : "border-border"
                  )}
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border-2 bg-card text-foreground transition-colors",
                    "focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",
                    "placeholder:text-muted-foreground",
                    errors.lastName ? "border-destructive" : "border-border"
                  )}
                  placeholder="Smith"
                />
                {errors.lastName && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        );

      case "email":
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              autoFocus
              className={cn(
                "w-full px-4 py-3 rounded-xl border-2 bg-card text-foreground transition-colors",
                "focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",
                "placeholder:text-muted-foreground",
                errors.email ? "border-destructive" : "border-border"
              )}
              placeholder="john@company.com"
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">{errors.email}</p>
            )}
          </motion.div>
        );

      case "phone":
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              autoFocus
              className={cn(
                "w-full px-4 py-3 rounded-xl border-2 bg-card text-foreground transition-colors",
                "focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",
                "placeholder:text-muted-foreground",
                errors.phone ? "border-destructive" : "border-border"
              )}
              placeholder="(555) 123-4567"
            />
            {errors.phone && (
              <p className="text-sm text-destructive mt-1">{errors.phone}</p>
            )}
          </motion.div>
        );

      case "adSpend":
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {AD_SPEND_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={cn(
                  "p-4 rounded-xl border-2 transition-all duration-200 text-center",
                  "hover:border-primary hover:bg-primary/5",
                  formData.adSpend === option.value
                    ? "border-primary bg-primary/10 ring-2 ring-primary/20"
                    : "border-border bg-card"
                )}
              >
                <span className="font-heading font-semibold text-foreground">
                  {option.label}
                </span>
              </button>
            ))}
            {errors.adSpend && (
              <p className="text-sm text-destructive mt-1 col-span-full text-center">
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
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleNext();
          }}
          className="bg-card border border-border rounded-2xl p-8 md:p-10"
        >
          {/* Progress dots */}
          <div className="flex justify-center gap-2 mb-8">
            {STEPS.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === currentStep
                    ? "w-8 bg-primary"
                    : index < currentStep
                      ? "w-2 bg-primary"
                      : "w-2 bg-muted"
                )}
              />
            ))}
          </div>

          {/* Step header */}
          <div className="text-center mb-8">
            <motion.div
              key={`icon-${currentStep}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4"
            >
              {STEPS[currentStep].icon}
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`header-${currentStep}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-2">
                  {STEPS[currentStep].title}
                </h2>
                <p className="text-muted-foreground">
                  {STEPS[currentStep].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Step content */}
          <div className="min-h-[140px] relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentStep}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {renderStepContent()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
            <Button
              type="button"
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 0}
              className={cn(currentStep === 0 && "invisible")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
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
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : currentStep === STEPS.length - 1 ? (
                <>
                  Get My FREE Ads
                  <CheckCircle className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            By submitting, you consent to receive marketing communications via email, phone, and SMS. You can unsubscribe at any time. See our{" "}
            <a href="/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
              Terms
            </a>{" "}
            and{" "}
            <a href="/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
              Privacy Policy
            </a>.
          </p>
        </form>
      </div>
    </section>
  );
}
