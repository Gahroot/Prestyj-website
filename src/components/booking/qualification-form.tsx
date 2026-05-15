"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { submitLead, formatPhoneNumber } from "@/lib/api";
import { trackEvent } from "@/lib/meta-pixel";
import { ArrowRight, Loader2 } from "lucide-react";
import {
  qualificationFormSchema,
  type QualificationFormData,
} from "@/lib/validations/form-schemas";

export type QualificationData = QualificationFormData;

interface QualificationFormProps {
  onComplete: (data: QualificationData) => void;
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function QualificationForm({ onComplete }: QualificationFormProps) {
  const [formData, setFormData] = useState<QualificationData>({
    firstName: "",
    email: "",
    phone: "",
    companyName: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof QualificationData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (field: keyof QualificationData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);

    const result = qualificationFormSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Partial<Record<keyof QualificationData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof QualificationData;
        if (!newErrors[field]) newErrors[field] = issue.message;
      });
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const validated = result.data;
      await submitLead({
        first_name: validated.firstName,
        phone_number: formatPhoneNumber(validated.phone),
        email: validated.email,
        company_name: validated.companyName,
        notes: `Source: book-demo page (single-step form)`,
        source: "book_demo_form",
        trigger_call: false,
        trigger_text: false,
      });

      trackEvent("Lead", {
        email: validated.email,
        phone: validated.phone,
        firstName: validated.firstName,
      });
      onComplete(validated);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-2xl" noValidate>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        <motion.div variants={itemVariants}>
          <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium">
            Name *
          </label>
          <input
            id="firstName"
            type="text"
            autoComplete="name"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className={cn(
              "bg-card w-full rounded-xl border-2 px-4 py-3 transition-colors",
              "focus:border-primary focus:ring-primary/20 focus:ring-2 focus:outline-none",
              errors.firstName ? "border-destructive" : "border-border",
            )}
            placeholder="Jane Smith"
          />
          {errors.firstName && <p className="text-destructive mt-1 text-sm">{errors.firstName}</p>}
        </motion.div>

        <motion.div variants={itemVariants}>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Work Email *
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={cn(
              "bg-card w-full rounded-xl border-2 px-4 py-3 transition-colors",
              "focus:border-primary focus:ring-primary/20 focus:ring-2 focus:outline-none",
              errors.email ? "border-destructive" : "border-border",
            )}
            placeholder="jane@company.com"
          />
          {errors.email && <p className="text-destructive mt-1 text-sm">{errors.email}</p>}
        </motion.div>

        <motion.div variants={itemVariants}>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className={cn(
              "bg-card w-full rounded-xl border-2 px-4 py-3 transition-colors",
              "focus:border-primary focus:ring-primary/20 focus:ring-2 focus:outline-none",
              errors.phone ? "border-destructive" : "border-border",
            )}
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && <p className="text-destructive mt-1 text-sm">{errors.phone}</p>}
        </motion.div>

        <motion.div variants={itemVariants}>
          <label htmlFor="companyName" className="mb-1.5 block text-sm font-medium">
            Company *
          </label>
          <input
            id="companyName"
            type="text"
            autoComplete="organization"
            value={formData.companyName}
            onChange={(e) => handleInputChange("companyName", e.target.value)}
            className={cn(
              "bg-card w-full rounded-xl border-2 px-4 py-3 transition-colors",
              "focus:border-primary focus:ring-primary/20 focus:ring-2 focus:outline-none",
              errors.companyName ? "border-destructive" : "border-border",
            )}
            placeholder="Acme Inc."
          />
          {errors.companyName && (
            <p className="text-destructive mt-1 text-sm">{errors.companyName}</p>
          )}
        </motion.div>
      </motion.div>

      {submitError && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-destructive mt-4 text-center text-sm"
        >
          {submitError}
        </motion.p>
      )}

      <div className="mt-8">
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading calendar...
            </>
          ) : (
            <>
              See Available Times
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>

      <p className="text-muted-foreground mt-6 text-center text-xs">
        Your information is secure and will never be shared with third parties.
      </p>
    </form>
  );
}
