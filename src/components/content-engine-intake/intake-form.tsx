"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, type Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Loader2,
  Palette,
  Send,
  Sparkles,
  Upload,
  Users,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  contentEngineIntakeSchema,
  INDUSTRY_OPTIONS,
  PLATFORM_OPTIONS,
  type ContentEngineIntakeInput,
  type ContentEngineIntakeOutput,
  type PlatformValue,
} from "@/lib/validations/content-engine-intake-schemas";

type StepKey = "basics" | "audience" | "platforms" | "brand";

const STEPS: ReadonlyArray<{
  key: StepKey;
  title: string;
  description: string;
  icon: typeof Building2;
  fields: ReadonlyArray<Path<ContentEngineIntakeInput>>;
}> = [
  {
    key: "basics",
    title: "Business basics",
    description: "Tell us who you are so we can set up your accounts.",
    icon: Building2,
    fields: ["businessName", "industry", "website", "contactName", "contactEmail"],
  },
  {
    key: "audience",
    title: "Audience & voice",
    description: "Help our AI write like you, for the people who buy from you.",
    icon: Users,
    fields: ["targetAudience", "brandVoice", "keyOffers"],
  },
  {
    key: "platforms",
    title: "Platforms & handles",
    description: "Pick the platforms we'll publish to and link your existing accounts.",
    icon: Sparkles,
    fields: ["currentPlatforms", "socialHandles"],
  },
  {
    key: "brand",
    title: "Brand kit",
    description: "Drop in your colors and logo so every post stays on-brand.",
    icon: Palette,
    fields: ["primaryColor", "secondaryColor", "accentColor", "logoDataUrl", "logoNotes"],
  },
];

const MAX_LOGO_BYTES = 3 * 1024 * 1024; // 3MB

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export function ContentEngineIntakeForm() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const form = useForm<ContentEngineIntakeInput, unknown, ContentEngineIntakeOutput>({
    resolver: zodResolver(contentEngineIntakeSchema),
    mode: "onTouched",
    defaultValues: {
      businessName: "",
      // Cast: zod enum input is required, but we want an empty placeholder.
      industry: "" as ContentEngineIntakeInput["industry"],
      website: "",
      contactName: "",
      contactEmail: "",
      targetAudience: "",
      brandVoice: "",
      keyOffers: "",
      currentPlatforms: [],
      socialHandles: {
        instagram: "",
        facebook: "",
        tiktok: "",
        youtube: "",
        linkedin: "",
        threads: "",
        x: "",
        pinterest: "",
      },
      primaryColor: "#7058e3",
      secondaryColor: "",
      accentColor: "",
      logoDataUrl: undefined,
      logoFileName: "",
      logoNotes: "",
    },
  });

  const step = STEPS[stepIndex];
  const isLastStep = stepIndex === STEPS.length - 1;
  const progress = Math.round(((stepIndex + 1) / STEPS.length) * 100);

  const handleNext = async () => {
    const valid = await form.trigger(step.fields);
    if (!valid) return;
    setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
  };

  const handleBack = () => {
    setSubmitError(null);
    setStepIndex((i) => Math.max(i - 1, 0));
  };

  const onSubmit = async (data: ContentEngineIntakeOutput) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/content-engine-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = (await res.json().catch(() => null)) as
          | { error?: string; message?: string }
          | null;
        throw new Error(
          json?.message ?? json?.error ?? "Something went wrong. Try again."
        );
      }
      router.push("/book-demo?intake=success");
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    }
  };

  const handleLogoChange = async (file: File | null) => {
    if (!file) {
      form.setValue("logoDataUrl", undefined, { shouldValidate: true });
      form.setValue("logoFileName", "");
      setLogoPreview(null);
      return;
    }
    if (file.size > MAX_LOGO_BYTES) {
      form.setError("logoDataUrl", {
        type: "manual",
        message: "Logo must be under 3MB",
      });
      return;
    }
    const dataUrl = await fileToDataUrl(file);
    form.setValue("logoDataUrl", dataUrl, { shouldValidate: true });
    form.setValue("logoFileName", file.name);
    setLogoPreview(dataUrl);
  };

  const togglePlatform = (
    value: PlatformValue,
    current: PlatformValue[],
    onChange: (next: PlatformValue[]) => void
  ) => {
    if (current.includes(value)) {
      onChange(current.filter((v) => v !== value));
    } else {
      onChange([...current, value]);
    }
  };

  const StepIcon = step.icon;

  return (
    <Card className="border-border/80 shadow-sm">
      <CardContent className="p-6 sm:p-8 lg:p-10">
        {/* Step header */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>
              Step {stepIndex + 1} of {STEPS.length}
            </span>
            <span>{progress}% complete</span>
          </div>
          <Progress value={progress} />
          <div className="flex items-start gap-4 pt-2">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <StepIcon className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold tracking-tight">
                {step.title}
              </h2>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </div>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
            noValidate
          >
            {step.key === "basics" && <BasicsStep form={form} />}
            {step.key === "audience" && <AudienceStep form={form} />}
            {step.key === "platforms" && (
              <PlatformsStep form={form} togglePlatform={togglePlatform} />
            )}
            {step.key === "brand" && (
              <BrandStep
                form={form}
                logoPreview={logoPreview}
                onLogoChange={handleLogoChange}
              />
            )}

            {submitError && (
              <p className="rounded-md border border-destructive/40 bg-destructive/5 p-3 text-sm text-destructive">
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
                <Button
                  type="button"
                  onClick={handleNext}
                  size="lg"
                  className="sm:min-w-40"
                >
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
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit & Book Demo
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

/* -------------------------------------------------------------------------- */
/*  Step components                                                           */
/* -------------------------------------------------------------------------- */

type FormType = ReturnType<
  typeof useForm<ContentEngineIntakeInput, unknown, ContentEngineIntakeOutput>
>;

function BasicsStep({ form }: { form: FormType }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField
        control={form.control}
        name="businessName"
        render={({ field }) => (
          <FormItem className="sm:col-span-2">
            <FormLabel>Business name</FormLabel>
            <FormControl>
              <Input placeholder="Acme Realty Group" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="industry"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Industry</FormLabel>
            <Select
              onValueChange={field.onChange}
              value={field.value ?? ""}
            >
              <FormControl>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {INDUSTRY_OPTIONS.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
              <Input
                placeholder="https://acme.com"
                {...field}
                value={field.value ?? ""}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="contactName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your name</FormLabel>
            <FormControl>
              <Input placeholder="Jordan Smith" {...field} />
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
                placeholder="jordan@acme.com"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

function AudienceStep({ form }: { form: FormType }) {
  return (
    <div className="space-y-5">
      <FormField
        control={form.control}
        name="targetAudience"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Target audience</FormLabel>
            <FormControl>
              <Textarea
                rows={3}
                placeholder="e.g. First-time homebuyers in Austin, TX, ages 28–40, household income $80k+, looking for guidance through the buying process."
                {...field}
              />
            </FormControl>
            <FormDescription>
              Who buys from you? Demographics, pain points, dreams.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="brandVoice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Brand voice notes</FormLabel>
            <FormControl>
              <Textarea
                rows={3}
                placeholder="e.g. Confident but warm. We use simple language, never corporate-speak. We're funny without being cringey. Always end posts with a clear next step."
                {...field}
              />
            </FormControl>
            <FormDescription>
              Tone, words to use/avoid, vibes, examples.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="keyOffers"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Key offers & products</FormLabel>
            <FormControl>
              <Textarea
                rows={3}
                placeholder="e.g. 1) Free home valuation, 2) Buyer consult ($0), 3) Listing service (2.5%), 4) Investor portfolio review."
                {...field}
              />
            </FormControl>
            <FormDescription>
              The offers we&apos;ll drive traffic and CTAs toward.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

function PlatformsStep({
  form,
  togglePlatform,
}: {
  form: FormType;
  togglePlatform: (
    value: PlatformValue,
    current: PlatformValue[],
    onChange: (next: PlatformValue[]) => void
  ) => void;
}) {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="currentPlatforms"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Current platforms</FormLabel>
            <FormDescription>
              Tap every platform you&apos;re already active on (or want to be).
            </FormDescription>
            <FormControl>
              <div className="flex flex-wrap gap-2 pt-1">
                {PLATFORM_OPTIONS.map((opt) => {
                  const selected = field.value?.includes(opt.value);
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() =>
                        togglePlatform(
                          opt.value,
                          (field.value ?? []) as PlatformValue[],
                          field.onChange
                        )
                      }
                      className="focus:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 rounded-full"
                      aria-pressed={selected}
                    >
                      <Badge
                        variant={selected ? "default" : "outline"}
                        className="cursor-pointer px-3 py-1.5 text-sm"
                      >
                        {selected && (
                          <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
                        )}
                        {opt.label}
                      </Badge>
                    </button>
                  );
                })}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div>
        <FormLabel className="mb-1 block">Social handles (optional)</FormLabel>
        <FormDescription className="mb-3">
          Drop the URL or @handle for any account you want us to publish to.
        </FormDescription>
        <div className="grid gap-4 sm:grid-cols-2">
          {PLATFORM_OPTIONS.map((opt) => (
            <FormField
              key={opt.value}
              control={form.control}
              name={`socialHandles.${opt.value}` as Path<ContentEngineIntakeInput>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-normal text-muted-foreground">
                    {opt.label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={`@your-${opt.value} or https://…`}
                      {...field}
                      value={(field.value as string | undefined) ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function BrandStep({
  form,
  logoPreview,
  onLogoChange,
}: {
  form: FormType;
  logoPreview: string | null;
  onLogoChange: (file: File | null) => Promise<void>;
}) {
  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-3">
        <ColorField
          form={form}
          name="primaryColor"
          label="Primary color"
          required
        />
        <ColorField
          form={form}
          name="secondaryColor"
          label="Secondary (optional)"
        />
        <ColorField
          form={form}
          name="accentColor"
          label="Accent (optional)"
        />
      </div>

      <FormField
        control={form.control}
        name="logoDataUrl"
        render={() => (
          <FormItem>
            <FormLabel>Logo upload</FormLabel>
            <FormDescription>
              PNG, JPG, or SVG. Up to 3MB. Transparent background preferred.
            </FormDescription>
            <FormControl>
              <div>
                {logoPreview ? (
                  <div className="flex items-center gap-4 rounded-lg border border-border bg-muted/40 p-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logoPreview}
                      alt="Logo preview"
                      className="h-16 w-16 rounded-md border border-border bg-background object-contain p-1"
                    />
                    <div className="flex-1 text-sm">
                      <p className="font-medium text-foreground">
                        {form.getValues("logoFileName") || "Logo uploaded"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Looks great. We&apos;ll use this on every post.
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => onLogoChange(null)}
                      aria-label="Remove logo"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <label
                    htmlFor="logo-upload"
                    className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-muted/30 px-6 py-8 text-center transition-colors hover:border-primary/50 hover:bg-muted/50"
                  >
                    <Upload className="h-6 w-6 text-muted-foreground" />
                    <p className="text-sm font-medium text-foreground">
                      Click to upload your logo
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PNG, JPG, or SVG · max 3MB
                    </p>
                    <input
                      id="logo-upload"
                      type="file"
                      accept="image/png,image/jpeg,image/svg+xml,image/webp"
                      className="hidden"
                      onChange={(e) =>
                        onLogoChange(e.target.files?.[0] ?? null)
                      }
                    />
                  </label>
                )}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="logoNotes"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Logo / brand notes (optional)</FormLabel>
            <FormControl>
              <Textarea
                rows={2}
                placeholder="e.g. Use the icon-only version on dark backgrounds. Watermark bottom-right."
                {...field}
                value={field.value ?? ""}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

function ColorField({
  form,
  name,
  label,
  required,
}: {
  form: FormType;
  name: "primaryColor" | "secondaryColor" | "accentColor";
  label: string;
  required?: boolean;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        const value = (field.value as string | undefined) ?? "";
        const isValidHex = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value);
        const swatch = isValidHex
          ? value.startsWith("#")
            ? value
            : `#${value}`
          : "transparent";
        return (
          <FormItem>
            <FormLabel>
              {label}
              {required ? "" : ""}
            </FormLabel>
            <FormControl>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <input
                    type="color"
                    aria-label={`${label} color picker`}
                    value={isValidHex ? swatch : "#000000"}
                    onChange={(e) => field.onChange(e.target.value)}
                    className="h-9 w-9 cursor-pointer rounded-md border border-input bg-transparent p-1"
                  />
                </div>
                <Input
                  placeholder="#7058e3"
                  value={value}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="font-mono"
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
