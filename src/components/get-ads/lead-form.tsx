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
  Building2,
  CheckCircle,
  Loader2,
  Plus,
  Trash2,
  FileText,
  Copy,
  Check,
} from "lucide-react";
import Cal from "@calcom/embed-react";
import BorderGlow from "@/components/ui/border-glow";

const SCRIPT_GEN_URL =
  "https://script-gen-production-5b56.up.railway.app/generate";

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
  businessName: string;
  city: string;
  serviceArea: string;
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
  | "business"
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
    id: "business",
    title: "Tell us about your business",
    subtitle: "Your business name and where you operate",
    icon: <Building2 className="w-6 h-6" />,
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

const GENERATING_MESSAGES = [
  "Analyzing your business profile...",
  "Crafting hook variations...",
  "Writing ad body copy...",
  "Generating call-to-action combos...",
  "Building your 300-ad script library...",
  "Polishing final scripts...",
  "Almost there — verifying quality...",
];

type SubmitState = "form" | "generating" | "complete" | "error";

export function GetAdsLeadForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    city: "",
    serviceArea: "",
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
  const [submitState, setSubmitState] = useState<SubmitState>("form");
  const [generatingMessage, setGeneratingMessage] = useState(0);
  const [scriptMarkdown, setScriptMarkdown] = useState("");
  const [copied, setCopied] = useState(false);
  const stepInputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const messageIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );

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
      case "business":
        if (!formData.businessName.trim())
          newErrors.businessName = "Business name is required";
        break;
      case "painPoints": {
        const filled = formData.painPoints.filter(
          (pp) => pp.painPoint.trim() || pp.solution.trim()
        );
        if (filled.length < 1)
          newErrors.painPoints = "Add at least one pain point";
        formData.painPoints.forEach((pp, i) => {
          if (pp.painPoint.trim() && !pp.solution.trim())
            newErrors[`solution_${i}`] =
              "Add the solution for this pain point";
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
      setSubmitState("generating");
      setGeneratingMessage(0);

      // Rotate status messages while generating
      messageIntervalRef.current = setInterval(() => {
        setGeneratingMessage((prev) =>
          prev < GENERATING_MESSAGES.length - 1 ? prev + 1 : prev
        );
      }, 25000);

      // Build API payload
      const topStats = formData.credibilityClaims
        .filter((c) => c.value.trim())
        .map((c) => `${c.label}: ${c.value}`);

      const painPointsSolutions = formData.painPoints
        .filter((pp) => pp.painPoint.trim())
        .map((pp) => ({
          pain_point: pp.painPoint.trim(),
          solution: pp.solution.trim(),
        }));

      const scriptPayload = {
        business_name: formData.businessName.trim(),
        target_audience: formData.targetAudience.trim(),
        pain_points_solutions: painPointsSolutions,
        offer: formData.offer.trim(),
        lead_magnet: formData.leadMagnetName.trim(),
        top_stats: topStats,
        website_url: formData.websiteUrl.trim(),
        ...(formData.landingPageUrl.trim() && {
          landing_page_url: formData.landingPageUrl.trim(),
        }),
        ...(formData.city.trim() && { city: formData.city.trim() }),
        ...(formData.serviceArea.trim() && {
          service_area: formData.serviceArea.trim(),
        }),
        contact_name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
        contact_email: formData.email.trim(),
        contact_phone: formatPhoneNumber(formData.phone),
      };

      // Fire lead capture + script gen in parallel
      const leadPromise = fetch(
        "https://backend-api-production-b536.up.railway.app/api/v1/p/leads/ls_VPUWE5hD",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: formData.firstName.trim(),
            last_name: formData.lastName.trim(),
            phone_number: formatPhoneNumber(formData.phone),
            email: formData.email.trim(),
            notes: `Business: ${formData.businessName}\nCity: ${formData.city}\nService Area: ${formData.serviceArea}\n\n--- PAIN POINTS & SOLUTIONS ---\n${painPointsSolutions.map((pp, i) => `${i + 1}. ${pp.pain_point} → ${pp.solution}`).join("\n")}\n\n--- TARGET AUDIENCE ---\n${formData.targetAudience}\n\n--- OFFER ---\n${formData.offer}\n\n--- LEAD MAGNET ---\n${formData.leadMagnetName}\n\n--- CREDIBILITY ---\n${topStats.join("\n")}\n\n--- URLS ---\nWebsite: ${formData.websiteUrl}${formData.landingPageUrl ? `\nLanding Page: ${formData.landingPageUrl}` : ""}`,
          }),
        }
      ).catch(() => {
        // Don't block on lead capture failure
      });

      const scriptPromise = fetch(SCRIPT_GEN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(scriptPayload),
        signal: AbortSignal.timeout(300000), // 5 min timeout
      });

      try {
        const [, scriptRes] = await Promise.all([leadPromise, scriptPromise]);

        if (!scriptRes.ok) {
          throw new Error(`Script API returned ${scriptRes.status}`);
        }

        const scriptData = await scriptRes.json();
        setScriptMarkdown(scriptData.markdown || "");
        setSubmitState("complete");
      } catch {
        // If script gen fails, still show success with Cal booking
        setSubmitState("error");
      } finally {
        if (messageIntervalRef.current) {
          clearInterval(messageIntervalRef.current);
          messageIntervalRef.current = null;
        }
        trackEvent("Lead", {
          email: formData.email,
          phone: formData.phone,
          firstName: formData.firstName,
          lastName: formData.lastName,
        });
        setIsSubmitting(false);
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

  const handleCopyScripts = async () => {
    await navigator.clipboard.writeText(scriptMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // --- Generating state ---
  if (submitState === "generating") {
    return (
      <section id="lead-form" className="py-12 md:py-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <BorderGlow borderRadius={18} innerClassName="p-8 md:p-10">
            <div className="text-center space-y-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10"
              >
                <Loader2 className="w-8 h-8 text-primary" />
              </motion.div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
                  Generating Your 300 Ad Scripts
                </h2>
                <p className="text-muted-foreground text-lg mb-2">
                  This takes 2–5 minutes. Don&apos;t close this page.
                </p>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={generatingMessage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center gap-2 text-primary font-medium"
                >
                  <FileText className="w-4 h-4" />
                  {GENERATING_MESSAGES[generatingMessage]}
                </motion.div>
              </AnimatePresence>
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: "5%" }}
                  animate={{ width: "90%" }}
                  transition={{ duration: 240, ease: "linear" }}
                />
              </div>
            </div>
          </BorderGlow>
        </div>
      </section>
    );
  }

  // --- Complete state (scripts ready) ---
  if (submitState === "complete") {
    return (
      <section id="lead-form" className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-6">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-3">
              Your 300 Ad Scripts Are Ready!
            </h2>
            <p className="text-muted-foreground text-lg">
              Copy the scripts below, then book a call to start running them.
            </p>
          </motion.div>

          {/* Script output */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <BorderGlow borderRadius={18} innerClassName="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-foreground text-lg">
                  Ad Scripts
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyScripts}
                  className="gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy All
                    </>
                  )}
                </Button>
              </div>
              <div className="max-h-[500px] overflow-y-auto rounded-lg bg-muted/50 p-4 border border-border">
                <pre className="whitespace-pre-wrap text-sm text-foreground font-mono leading-relaxed">
                  {scriptMarkdown}
                </pre>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Cal booking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center mb-4">
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Now Book Your Strategy Call
              </h3>
              <p className="text-muted-foreground">
                We&apos;ll map out your ad campaign and get these scripts
                running.
              </p>
            </div>
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

  // --- Error state (script gen failed, still show Cal) ---
  if (submitState === "error") {
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
              campaign and deliver your scripts.
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

      case "business":
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Business Name
              </label>
              <input
                ref={stepInputRef as React.RefObject<HTMLInputElement>}
                type="text"
                value={formData.businessName}
                onChange={(e) => updateField("businessName", e.target.value)}
                className={inputClasses(!!errors.businessName)}
                placeholder="e.g. Smith Roofing Co."
              />
              {errors.businessName && (
                <p className="text-sm text-destructive mt-1">
                  {errors.businessName}
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  City{" "}
                  <span className="text-muted-foreground font-normal">
                    (optional)
                  </span>
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => updateField("city", e.target.value)}
                  className={inputClasses(false)}
                  placeholder="e.g. Dallas"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Service Area{" "}
                  <span className="text-muted-foreground font-normal">
                    (optional)
                  </span>
                </label>
                <input
                  type="text"
                  value={formData.serviceArea}
                  onChange={(e) => updateField("serviceArea", e.target.value)}
                  className={inputClasses(false)}
                  placeholder="e.g. DFW Metroplex"
                />
              </div>
            </div>
          </motion.div>
        );

      case "painPoints":
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {formData.painPoints.map((pp, i) => (
                <div
                  key={i}
                  className="rounded-xl border-2 border-border bg-card/50 p-4 space-y-3"
                >
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
                    <Textarea
                      value={pp.painPoint}
                      onChange={(e) =>
                        updatePainPoint(i, "painPoint", e.target.value)
                      }
                      className={cn(
                        "rounded-xl border-2 bg-card min-h-[80px] resize-none text-sm",
                        "focus:border-primary focus:ring-2 focus:ring-primary/20",
                        errors[`painPoint_${i}`]
                          ? "border-destructive"
                          : "border-border"
                      )}
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
                    <Textarea
                      value={pp.solution}
                      onChange={(e) =>
                        updatePainPoint(i, "solution", e.target.value)
                      }
                      className={cn(
                        "rounded-xl border-2 bg-card min-h-[80px] resize-none text-sm",
                        "focus:border-primary focus:ring-2 focus:ring-primary/20",
                        errors[`solution_${i}`]
                          ? "border-destructive"
                          : "border-border"
                      )}
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
            </div>
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
      <div
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300",
          STEPS[currentStep].id === "painPoints" ? "max-w-5xl" : "max-w-xl"
        )}
      >
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
                      Generate My Ads
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
