"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { formatPhoneNumber } from "@/lib/api";
import { trackEvent } from "@/lib/meta-pixel";
import {
  ArrowRight,
  ArrowLeft,
  User,
  Mail,
  Phone,
  AlertTriangle,
  Lightbulb,
  Gift,
  BookOpen,
  Award,
  Globe,
  Target,
  CheckCircle,
  Loader2,
  ExternalLink,
  Plus,
  Trash2,
} from "lucide-react";
import Cal from "@calcom/embed-react";
import BorderGlow from "@/components/ui/border-glow";

type PainPointEntry = {
  painPoint: string;
  solution: string;
};

type CredibilityClaim = {
  label: string;
  value: string;
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  painPoints: PainPointEntry[];
  targetAudience: string;
  offer: string;
  leadMagnetName: string;
  credibilityClaims: CredibilityClaim[];
  websiteUrl: string;
  landingPageUrl: string;
};

type StepId =
  | "name"
  | "email"
  | "phone"
  | "painPoints"
  | "targetAudience"
  | "offer"
  | "leadMagnet"
  | "credibility"
  | "urls";

type Step = {
  id: StepId;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

const STEPS: Step[] = [
  {
    id: "name",
    title: "What's your name?",
    subtitle: "So we know who we're creating ads for",
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
    id: "painPoints",
    title: "Top 3 Pain Points & Solutions",
    subtitle:
      "What problems does your audience face — and how do you solve them?",
    icon: <AlertTriangle className="w-6 h-6" />,
  },
  {
    id: "targetAudience",
    title: "Who's your target audience?",
    subtitle:
      "Describe your ideal customer — demographics, location, situation, etc.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    id: "offer",
    title: "What's your offer?",
    subtitle:
      "Describe the core offer you want to promote (e.g. free inspection, discounted first service)",
    icon: <Gift className="w-6 h-6" />,
  },
  {
    id: "leadMagnet",
    title: "Lead Magnet Name",
    subtitle:
      "What free resource pairs with the offer? (e.g. \"The Homeowner's HVAC Savings Guide\")",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    id: "credibility",
    title: "Your Credibility & Stats",
    subtitle:
      "Numbers that build trust — sales volume, clients helped, years in business, etc.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    id: "urls",
    title: "Your Website & Landing Page",
    subtitle: "Where can we see your brand and where do leads go?",
    icon: <Globe className="w-6 h-6" />,
  },
];

const CREDIBILITY_PRESETS = [
  { label: "Amount Sold", placeholder: "e.g. $5M+ in revenue" },
  { label: "Clients Helped", placeholder: "e.g. 500+ happy clients" },
  {
    label: "Client Results",
    placeholder: "e.g. Saved clients $2M collectively",
  },
  { label: "Years in Business", placeholder: "e.g. 20+ years" },
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

const inputClasses = (hasError: boolean) =>
  cn(
    "w-full px-4 py-3 rounded-xl border-2 bg-card text-foreground transition-colors",
    "focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",
    "placeholder:text-muted-foreground",
    hasError ? "border-destructive" : "border-border"
  );

export function GetAdsLeadForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    painPoints: [
      { painPoint: "", solution: "" },
      { painPoint: "", solution: "" },
      { painPoint: "", solution: "" },
    ],
    targetAudience: "",
    offer: "",
    leadMagnetName: "",
    credibilityClaims: CREDIBILITY_PRESETS.map((p) => ({
      label: p.label,
      value: "",
    })),
    websiteUrl: "",
    landingPageUrl: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<
    "form" | "qualified" | "waitlist"
  >("form");
  const stepInputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const focusStepInput = useCallback(() => {
    stepInputRef.current?.focus({ preventScroll: true });
  }, []);

  const validateCurrentStep = (): boolean => {
    const step = STEPS[currentStep];
    const newErrors: Record<string, string> = {};

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
        if (!formData.phone.trim())
          newErrors.phone = "Phone number is required";
        else if (formData.phone.replace(/\D/g, "").length < 10)
          newErrors.phone = "Enter a valid phone number";
        break;
      case "painPoints": {
        const filled = formData.painPoints.filter(
          (pp) => pp.painPoint.trim() || pp.solution.trim()
        );
        if (filled.length < 1)
          newErrors.painPoints = "Add at least one pain point";
        formData.painPoints.forEach((pp, i) => {
          if (pp.painPoint.trim() && !pp.solution.trim())
            newErrors[`solution_${i}`] = "Add the solution for this pain point";
          if (!pp.painPoint.trim() && pp.solution.trim())
            newErrors[`painPoint_${i}`] = "Add the pain point";
        });
        break;
      }
      case "targetAudience":
        if (!formData.targetAudience.trim())
          newErrors.targetAudience = "Describe your target audience";
        break;
      case "offer":
        if (!formData.offer.trim()) newErrors.offer = "Describe your offer";
        break;
      case "leadMagnet":
        if (!formData.leadMagnetName.trim())
          newErrors.leadMagnetName = "Name your lead magnet";
        break;
      case "credibility": {
        const filledClaims = formData.credibilityClaims.filter(
          (c) => c.value.trim()
        );
        if (filledClaims.length < 1)
          newErrors.credibility = "Fill in at least one credibility stat";
        break;
      }
      case "urls":
        if (!formData.websiteUrl.trim())
          newErrors.websiteUrl = "Website URL is required";
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
        const painPointsSummary = formData.painPoints
          .filter((pp) => pp.painPoint.trim())
          .map(
            (pp, i) =>
              `Pain Point ${i + 1}: ${pp.painPoint} → Solution: ${pp.solution}`
          )
          .join("\n");

        const credibilitySummary = formData.credibilityClaims
          .filter((c) => c.value.trim())
          .map((c) => `${c.label}: ${c.value}`)
          .join("\n");

        const notes = [
          `--- PAIN POINTS & SOLUTIONS ---\n${painPointsSummary}`,
          `--- TARGET AUDIENCE ---\n${formData.targetAudience}`,
          `--- OFFER ---\n${formData.offer}`,
          `--- LEAD MAGNET ---\n${formData.leadMagnetName}`,
          `--- CREDIBILITY ---\n${credibilitySummary}`,
          `--- URLS ---\nWebsite: ${formData.websiteUrl}${formData.landingPageUrl ? `\nLanding Page: ${formData.landingPageUrl}` : ""}`,
        ].join("\n\n");

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
              notes,
            }),
          }
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
        setSubmitState("qualified");
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

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field as string];
      return next;
    });
  };

  const updatePainPoint = (
    index: number,
    key: "painPoint" | "solution",
    value: string
  ) => {
    const updated = [...formData.painPoints];
    updated[index] = { ...updated[index], [key]: value };
    updateField("painPoints", updated);
    setErrors((prev) => {
      const next = { ...prev };
      delete next[`${key}_${index}`];
      delete next.painPoints;
      return next;
    });
  };

  const addPainPoint = () => {
    if (formData.painPoints.length < 5) {
      updateField("painPoints", [
        ...formData.painPoints,
        { painPoint: "", solution: "" },
      ]);
    }
  };

  const removePainPoint = (index: number) => {
    if (formData.painPoints.length > 1) {
      updateField(
        "painPoints",
        formData.painPoints.filter((_, i) => i !== index)
      );
    }
  };

  const updateCredibility = (index: number, value: string) => {
    const updated = [...formData.credibilityClaims];
    updated[index] = { ...updated[index], value };
    updateField("credibilityClaims", updated);
    setErrors((prev) => {
      const next = { ...prev };
      delete next.credibility;
      return next;
    });
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
              You&apos;re All Set!
            </h2>
            <p className="text-muted-foreground text-lg">
              Book your strategy call below and we&apos;ll map out your ad
              campaign.
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
              config={{ theme: "dark" }}
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
              We&apos;ll reach out when a spot opens up. In the meantime, join
              our free community to start learning.
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
                  onChange={(e) => updateField("firstName", e.target.value)}
                  className={inputClasses(!!errors.firstName)}
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
                  onChange={(e) => updateField("lastName", e.target.value)}
                  className={inputClasses(!!errors.lastName)}
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
              ref={stepInputRef as React.RefObject<HTMLInputElement>}
              type="email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              className={inputClasses(!!errors.email)}
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
              ref={stepInputRef as React.RefObject<HTMLInputElement>}
              type="tel"
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              className={inputClasses(!!errors.phone)}
              placeholder="(555) 123-4567"
            />
            {errors.phone && (
              <p className="text-sm text-destructive mt-1">{errors.phone}</p>
            )}
          </motion.div>
        );

      case "painPoints":
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {formData.painPoints.map((pp, i) => (
              <div key={i} className="rounded-xl border-2 border-border bg-card/50 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">
                    #{i + 1}
                  </span>
                  {formData.painPoints.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removePainPoint(i)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    <AlertTriangle className="w-3.5 h-3.5 inline mr-1 text-muted-foreground" />
                    Pain Point
                  </label>
                  <input
                    type="text"
                    value={pp.painPoint}
                    onChange={(e) =>
                      updatePainPoint(i, "painPoint", e.target.value)
                    }
                    className={inputClasses(!!errors[`painPoint_${i}`])}
                    placeholder="e.g. Leads go cold because nobody follows up fast enough"
                  />
                  {errors[`painPoint_${i}`] && (
                    <p className="text-sm text-destructive mt-1">
                      {errors[`painPoint_${i}`]}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    <Lightbulb className="w-3.5 h-3.5 inline mr-1 text-muted-foreground" />
                    Your Solution
                  </label>
                  <input
                    type="text"
                    value={pp.solution}
                    onChange={(e) =>
                      updatePainPoint(i, "solution", e.target.value)
                    }
                    className={inputClasses(!!errors[`solution_${i}`])}
                    placeholder="e.g. AI responds to every lead in under 60 seconds"
                  />
                  {errors[`solution_${i}`] && (
                    <p className="text-sm text-destructive mt-1">
                      {errors[`solution_${i}`]}
                    </p>
                  )}
                </div>
              </div>
            ))}
            {formData.painPoints.length < 5 && (
              <button
                type="button"
                onClick={addPainPoint}
                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <Plus className="w-4 h-4" />
                Add another pain point
              </button>
            )}
            {errors.painPoints && (
              <p className="text-sm text-destructive text-center">
                {errors.painPoints}
              </p>
            )}
          </motion.div>
        );

      case "targetAudience":
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Target Audience
            </label>
            <Textarea
              ref={stepInputRef as React.RefObject<HTMLTextAreaElement>}
              value={formData.targetAudience}
              onChange={(e) => updateField("targetAudience", e.target.value)}
              className={cn(
                "rounded-xl border-2 bg-card min-h-[120px] resize-none",
                "focus:border-primary focus:ring-2 focus:ring-primary/20",
                errors.targetAudience ? "border-destructive" : "border-border"
              )}
              placeholder="e.g. Homeowners aged 35-65 in the Dallas–Fort Worth area who recently experienced storm damage and need roof repairs or replacements"
            />
            {errors.targetAudience && (
              <p className="text-sm text-destructive mt-1">
                {errors.targetAudience}
              </p>
            )}
          </motion.div>
        );

      case "offer":
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Your Offer
            </label>
            <Textarea
              ref={stepInputRef as React.RefObject<HTMLTextAreaElement>}
              value={formData.offer}
              onChange={(e) => updateField("offer", e.target.value)}
              className={cn(
                "rounded-xl border-2 bg-card min-h-[120px] resize-none",
                "focus:border-primary focus:ring-2 focus:ring-primary/20",
                errors.offer ? "border-destructive" : "border-border"
              )}
              placeholder="e.g. Free roof inspection + $500 off any full replacement booked this month. Includes 10-year warranty."
            />
            {errors.offer && (
              <p className="text-sm text-destructive mt-1">{errors.offer}</p>
            )}
          </motion.div>
        );

      case "leadMagnet":
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Lead Magnet Name
            </label>
            <input
              ref={stepInputRef as React.RefObject<HTMLInputElement>}
              type="text"
              value={formData.leadMagnetName}
              onChange={(e) => updateField("leadMagnetName", e.target.value)}
              className={inputClasses(!!errors.leadMagnetName)}
              placeholder='e.g. "The 5-Point Home Inspection Checklist Every Buyer Needs"'
            />
            {errors.leadMagnetName && (
              <p className="text-sm text-destructive mt-1">
                {errors.leadMagnetName}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-2">
              This is the free resource your audience gets in exchange for their
              contact info.
            </p>
          </motion.div>
        );

      case "credibility":
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            {formData.credibilityClaims.map((claim, i) => (
              <div key={claim.label}>
                <label className="block text-sm font-medium text-foreground mb-1">
                  {claim.label}
                </label>
                <input
                  type="text"
                  value={claim.value}
                  onChange={(e) => updateCredibility(i, e.target.value)}
                  className={inputClasses(false)}
                  placeholder={CREDIBILITY_PRESETS[i]?.placeholder}
                />
              </div>
            ))}
            {errors.credibility && (
              <p className="text-sm text-destructive text-center">
                {errors.credibility}
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              Fill in at least one. Leave others blank if they don&apos;t apply.
            </p>
          </motion.div>
        );

      case "urls":
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Website URL
              </label>
              <input
                ref={stepInputRef as React.RefObject<HTMLInputElement>}
                type="url"
                value={formData.websiteUrl}
                onChange={(e) => updateField("websiteUrl", e.target.value)}
                className={inputClasses(!!errors.websiteUrl)}
                placeholder="https://yourcompany.com"
              />
              {errors.websiteUrl && (
                <p className="text-sm text-destructive mt-1">
                  {errors.websiteUrl}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Landing Page URL{" "}
                <span className="text-muted-foreground font-normal">
                  (optional)
                </span>
              </label>
              <input
                type="url"
                value={formData.landingPageUrl}
                onChange={(e) => updateField("landingPageUrl", e.target.value)}
                className={inputClasses(false)}
                placeholder="https://yourcompany.com/offer"
              />
              <p className="text-xs text-muted-foreground mt-1.5">
                Where do your ad leads currently go? Leave blank if you
                don&apos;t have one yet.
              </p>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="lead-form" className="py-12 md:py-16">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <BorderGlow borderRadius={18} innerClassName="p-8 md:p-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleNext();
            }}
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
            <div className="min-h-[200px] relative overflow-hidden">
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

              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground hidden sm:block">
                  Step {currentStep + 1} of {STEPS.length}
                </span>
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
                      Submit
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
            </div>

            <p className="text-center text-xs text-muted-foreground mt-6">
              By submitting, you consent to receive marketing communications via
              email, phone, and SMS. You can unsubscribe at any time. See our{" "}
              <a
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
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
