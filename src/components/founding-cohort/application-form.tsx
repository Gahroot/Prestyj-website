"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, type Path, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Loader2,
  Send,
  Target,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  foundingCohortSchema,
  MONTHLY_AD_SPEND_OPTIONS,
  PLATFORM_OPTIONS,
  CREATIVE_SITUATION_OPTIONS,
  type FoundingCohortInput,
  type FoundingCohortOutput,
  type PlatformValue,
} from "@/lib/validations/founding-cohort-schemas";
import { FOUNDING_COHORT } from "@/lib/founding-cohort";
import { cn } from "@/lib/utils";

type StepKey = "basics" | "qualify" | "fit" | "commit";

const STEPS: ReadonlyArray<{
  key: StepKey;
  title: string;
  description: string;
  icon: typeof Building2;
  fields: ReadonlyArray<Path<FoundingCohortInput>>;
}> = [
  {
    key: "basics",
    title: "Who you are",
    description: "Quick basics so we know how to reach you.",
    icon: Building2,
    fields: ["contactName", "contactEmail", "businessName", "website"],
  },
  {
    key: "qualify",
    title: "Where you are",
    description:
      "Founding spots go to businesses already running paid ads — that's the only way the case study produces real numbers.",
    icon: Target,
    fields: ["monthlyAdSpend", "platforms", "creativeSituation"],
  },
  {
    key: "fit",
    title: "What you sell",
    description: "Tell us your offer and why you're the right fit for a founding spot.",
    icon: Users,
    fields: ["offer", "whyYou"],
  },
  {
    key: "commit",
    title: "The trade",
    description:
      "Founding spots aren't free — you pay in testimonial, review, and results data. Confirm you're in for all four.",
    icon: CheckCircle2,
    fields: ["agreeTestimonial", "agreeReview", "agreeRun14Days", "agreeResultsRights"],
  },
];

type ApiResponse =
  | {
      approved: true;
      promoCode: string;
      checkoutHref: string;
      approvedHref: string;
    }
  | {
      approved: false;
      reason: "cohort_full" | "not_qualified";
      message: string;
    };

export function FoundingCohortApplicationForm() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [rejection, setRejection] = useState<{
    reason: "cohort_full" | "not_qualified" | "client_qualify_out";
    message: string;
  } | null>(null);

  const form = useForm<FoundingCohortInput, unknown, FoundingCohortOutput>({
    resolver: zodResolver(foundingCohortSchema),
    mode: "onTouched",
    defaultValues: {
      contactName: "",
      contactEmail: "",
      businessName: "",
      website: "",
      monthlyAdSpend: "" as FoundingCohortInput["monthlyAdSpend"],
      platforms: [],
      creativeSituation: "" as FoundingCohortInput["creativeSituation"],
      offer: "",
      whyYou: "",
      agreeTestimonial: false as unknown as true,
      agreeReview: false as unknown as true,
      agreeRun14Days: false as unknown as true,
      agreeResultsRights: false as unknown as true,
    },
  });

  const step = STEPS[stepIndex] ?? STEPS[0]!;
  const isLastStep = stepIndex === STEPS.length - 1;
  const progress = Math.round(((stepIndex + 1) / STEPS.length) * 100);

  const handleNext = async () => {
    const valid = await form.trigger(step.fields);
    if (!valid) return;

    // Client-side qualify-out after step 2 — kill the form before
    // they waste effort on the rest if they can't qualify anyway.
    if (step.key === "qualify") {
      const spendValue = form.getValues("monthlyAdSpend");
      const option = MONTHLY_AD_SPEND_OPTIONS.find((o) => o.value === spendValue);
      if (option && !option.qualifies) {
        setRejection({
          reason: "client_qualify_out",
          message:
            "Founding spots are reserved for businesses already running paid ads — that's how we get real performance signal for the case study. The standard $1,497 batch is still a great fit and gets you the same 300 ads.",
        });
        return;
      }
    }

    setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
  };

  const handleBack = () => {
    setSubmitError(null);
    setStepIndex((i) => Math.max(i - 1, 0));
  };

  const onSubmit = async (data: FoundingCohortOutput) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/founding-cohort", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = (await res.json().catch(() => null)) as ApiResponse | null;

      if (!res.ok || !json) {
        throw new Error("Something went wrong. Try again.");
      }

      if (!json.approved) {
        setRejection({ reason: json.reason, message: json.message });
        return;
      }

      router.push(json.approvedHref);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Try again.");
    }
  };

  const togglePlatform = (
    value: PlatformValue,
    current: PlatformValue[],
    onChange: (next: PlatformValue[]) => void,
  ) => {
    if (current.includes(value)) {
      onChange(current.filter((v) => v !== value));
    } else {
      onChange([...current, value]);
    }
  };

  // Rejected screen — replaces the form entirely.
  if (rejection) {
    return (
      <Card className="border-border/80 shadow-sm">
        <CardContent className="space-y-6 p-6 sm:p-8 lg:p-10">
          <div className="flex items-start gap-4">
            <div className="bg-muted text-muted-foreground flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
              <AlertCircle className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold tracking-tight">
                Not a founding-cohort fit right now
              </h2>
              <p className="text-muted-foreground mt-2">{rejection.message}</p>
              <p className="text-muted-foreground mt-3 text-sm">
                Not a fit for the cohort? You can still start with our{" "}
                <a href="/batch-video-ads" className="text-primary font-medium hover:underline">
                  $497 sample (100 ads, same engine)
                </a>
                .
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href={FOUNDING_COHORT.checkoutHref}>
                See standard pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                setRejection(null);
                setStepIndex(0);
              }}
            >
              Start over
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const StepIcon = step.icon;

  return (
    <Card className="border-border/80 shadow-sm">
      <CardContent className="p-6 sm:p-8 lg:p-10">
        <div className="mb-8 space-y-4">
          <div className="text-muted-foreground flex items-center justify-between text-sm">
            <span>
              Step {stepIndex + 1} of {STEPS.length}
            </span>
            <span>{progress}% complete</span>
          </div>
          <Progress value={progress} />
          <div className="flex items-start gap-4 pt-2">
            <div className="bg-primary/10 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
              <StepIcon className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold tracking-tight">{step.title}</h2>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
            {step.key === "basics" && <BasicsStep form={form} />}
            {step.key === "qualify" && <QualifyStep form={form} togglePlatform={togglePlatform} />}
            {step.key === "fit" && <FitStep form={form} />}
            {step.key === "commit" && <CommitStep form={form} />}

            {submitError && (
              <p className="border-destructive/40 bg-destructive/5 text-destructive rounded-md border p-3 text-sm">
                {submitError}
              </p>
            )}

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={stepIndex === 0 || form.formState.isSubmitting}
                size="lg"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>

              {!isLastStep ? (
                <Button type="button" onClick={handleNext} size="lg" className="sm:min-w-40">
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  size="lg"
                  className="sm:min-w-48"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Apply for a spot
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

type StepProps = {
  form: UseFormReturn<FoundingCohortInput, unknown, FoundingCohortOutput>;
};

function BasicsStep({ form }: StepProps) {
  return (
    <div className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          control={form.control}
          name="contactName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your name</FormLabel>
              <FormControl>
                <Input placeholder="Jane Doe" autoComplete="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@business.com"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="businessName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Business name</FormLabel>
            <FormControl>
              <Input placeholder="Acme Roofing" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="website"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Website (optional)</FormLabel>
            <FormControl>
              <Input placeholder="acmeroofing.com" {...field} />
            </FormControl>
            <FormDescription>
              Helps us understand your offer before the kickoff call.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

function QualifyStep({
  form,
  togglePlatform,
}: StepProps & {
  togglePlatform: (
    value: PlatformValue,
    current: PlatformValue[],
    onChange: (next: PlatformValue[]) => void,
  ) => void;
}) {
  return (
    <div className="space-y-5">
      <FormField
        control={form.control}
        name="monthlyAdSpend"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Current monthly ad spend</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Pick your range" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {MONTHLY_AD_SPEND_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormDescription>
              Founding spots are reserved for businesses already spending — the case study needs
              real ad-account data.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="platforms"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Platforms you currently advertise on</FormLabel>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {PLATFORM_OPTIONS.map((option) => {
                const active = field.value?.includes(option.value);
                return (
                  <button
                    type="button"
                    key={option.value}
                    onClick={() => togglePlatform(option.value, field.value ?? [], field.onChange)}
                    className={cn(
                      "rounded-lg border px-3 py-2 text-left text-sm font-medium transition",
                      active
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-background text-foreground hover:border-primary/40",
                    )}
                    aria-pressed={active}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="creativeSituation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>How are you currently producing creative?</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Pick the closest match" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {CREATIVE_SITUATION_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

function FitStep({ form }: StepProps) {
  return (
    <div className="space-y-5">
      <FormField
        control={form.control}
        name="offer"
        render={({ field }) => (
          <FormItem>
            <FormLabel>What do you sell?</FormLabel>
            <FormControl>
              <Textarea
                rows={3}
                placeholder="Residential roof replacements in Phoenix, $14K avg ticket, financed."
                {...field}
              />
            </FormControl>
            <FormDescription>One or two sentences. Service, market, price point.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="whyYou"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Why you for a founding spot?</FormLabel>
            <FormControl>
              <Textarea
                rows={4}
                placeholder="What's broken in your current creative? What would a winning ad change about your business?"
                {...field}
              />
            </FormControl>
            <FormDescription>
              We&apos;re picking founders who&apos;ll actually run the ads and have something to say
              in a testimonial.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

const COMMITMENTS: Array<{
  name: "agreeTestimonial" | "agreeReview" | "agreeRun14Days" | "agreeResultsRights";
  label: string;
  detail: string;
}> = [
  {
    name: "agreeRun14Days",
    label: `Run the batch for ${FOUNDING_COHORT.testWindowDays}+ days at $${FOUNDING_COHORT.minDailyTestSpendUsd}/day minimum on the platform of your choice.`,
    detail: "No spend, no signal. We need real performance data, not a download-and-shelf.",
  },
  {
    name: "agreeTestimonial",
    label: "Record a 3–5 minute video testimonial after the 14-day test.",
    detail: "What you tested, what won, the number that moved. Specifics, not vibes.",
  },
  {
    name: "agreeReview",
    label: "Leave a Google review on delivery.",
    detail: "We'll send the link the day the batch is ready.",
  },
  {
    name: "agreeResultsRights",
    label:
      "Allow Prestyj to use your name, logo, ad screenshots, and performance data in marketing.",
    detail:
      "Standard case-study rights — we don't share private financials or proprietary creative.",
  },
];

function CommitStep({ form }: StepProps) {
  return (
    <div className="space-y-4">
      <div className="border-primary/30 bg-primary/5 rounded-xl border p-4 text-sm">
        <p className="text-foreground font-semibold">The deal, plainly:</p>
        <p className="text-muted-foreground mt-1">
          You get 300 video ads (a $1,497 batch) for $0. We get a founding case study. All four
          boxes have to be checked or it doesn&apos;t work for either of us.
        </p>
      </div>
      {COMMITMENTS.map((commitment) => (
        <FormField
          key={commitment.name}
          control={form.control}
          name={commitment.name}
          render={({ field, fieldState }) => (
            <FormItem>
              <label
                className={cn(
                  "flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition",
                  field.value
                    ? "border-primary bg-primary/5"
                    : "border-border bg-background hover:border-primary/40",
                  fieldState.error && "border-destructive",
                )}
              >
                <input
                  type="checkbox"
                  className="accent-primary mt-1 h-4 w-4 shrink-0"
                  checked={Boolean(field.value)}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
                <span className="space-y-1">
                  <span className="text-foreground block text-sm font-medium">
                    {commitment.label}
                  </span>
                  <span className="text-muted-foreground block text-xs">{commitment.detail}</span>
                </span>
              </label>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </div>
  );
}
