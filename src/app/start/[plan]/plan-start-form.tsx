"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, ArrowRight, Loader2, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { planStartSchema, type PlanStartInput } from "@/lib/validations/plan-start-schemas";
import type { TierId } from "@/lib/pricing-data";

type Props = {
  plan: TierId;
  planName: string;
};

export function PlanStartForm({ plan, planName }: Props): React.JSX.Element {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const form = useForm<PlanStartInput>({
    resolver: zodResolver(planStartSchema),
    defaultValues: { name: "", email: "" },
  });

  const onSubmit = async (values: PlanStartInput): Promise<void> => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, name: values.name, email: values.email }),
      });
      const data = (await res.json().catch(() => null)) as { url?: string; error?: string } | null;
      if (!res.ok || !data?.url) {
        setSubmitError(data?.error ?? "We couldn't start checkout. Please try again in a moment.");
        return;
      }
      window.location.assign(data.url);
    } catch (error) {
      console.error("[plan-start-form] checkout error", error);
      setSubmitError("We couldn't start checkout. Please try again in a moment.");
    }
  };

  const isSubmitting = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your name</FormLabel>
              <FormControl>
                <Input
                  autoComplete="name"
                  placeholder="Jane Doe"
                  disabled={isSubmitting}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Work email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  disabled={isSubmitting}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {submitError ? (
          <div
            role="alert"
            className="border-destructive/40 bg-destructive/10 text-destructive flex items-start gap-2 rounded-md border px-3 py-2 text-sm"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
            <span>{submitError}</span>
          </div>
        ) : null}

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Redirecting to checkout…
            </>
          ) : (
            <>
              Continue to secure checkout
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>

        <p className="text-muted-foreground flex items-center justify-center gap-1.5 text-xs">
          <Lock className="h-3 w-3" />
          Payment is processed by Stripe. {planName} starts the moment payment clears.
        </p>
      </form>
    </Form>
  );
}
