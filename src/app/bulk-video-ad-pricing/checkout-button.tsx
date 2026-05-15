"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BatchTierId } from "@/lib/batch-tiers";

type Props = {
  tierId: BatchTierId;
  label: string;
  variant?: "default" | "outline";
};

export function BulkCheckoutButton({
  tierId,
  label,
  variant = "default",
}: Props): React.ReactElement {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startCheckout = async (): Promise<void> => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier: tierId }),
      });
      if (!res.ok) {
        throw new Error(`Checkout failed (${res.status})`);
      }
      const data = (await res.json()) as { url?: string };
      if (!data.url) throw new Error("Missing checkout URL");
      window.location.href = data.url;
    } catch (err) {
      console.error("[bulk-checkout]", { tierId, err });
      setError("We couldn't start checkout. Please try again in a moment.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Button
        size="lg"
        variant={variant}
        className="w-full font-bold"
        disabled={loading}
        onClick={startCheckout}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Redirecting…
          </>
        ) : (
          <>
            {label}
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
      {error && <p className="text-destructive mt-2 text-center text-xs">{error}</p>}
    </div>
  );
}
