import { Users } from "lucide-react";
import { FOUNDING_COHORT, spotsRemaining } from "@/lib/founding-cohort";
import { cn } from "@/lib/utils";

type SpotCounterProps = {
  className?: string;
  variant?: "badge" | "block";
};

/**
 * Renders the live "X of N spots remaining" indicator.
 * Numbers come from `FOUNDING_COHORT` config so updating spots is a
 * single-line code change.
 */
export function SpotCounter({ className, variant = "badge" }: SpotCounterProps) {
  const remaining = spotsRemaining();
  const taken = FOUNDING_COHORT.spotsFilled;
  const total = FOUNDING_COHORT.totalSpots;
  const isOpen = remaining > 0;

  if (variant === "block") {
    return (
      <div
        className={cn(
          "border-primary/30 bg-primary/5 rounded-2xl border p-6 text-center",
          className,
        )}
      >
        <div className="text-primary mb-3 flex items-center justify-center gap-2">
          <Users className="h-5 w-5" />
          <span className="text-xs font-semibold tracking-wider uppercase">Founding Cohort</span>
        </div>
        <p className="font-heading text-3xl font-bold tracking-tight">
          {isOpen ? (
            <>
              <span className="text-primary">{remaining}</span>
              <span className="text-muted-foreground"> of {total} spots left</span>
            </>
          ) : (
            <span className="text-muted-foreground">Cohort full</span>
          )}
        </p>
        <p className="text-muted-foreground mt-2 text-sm">
          {isOpen
            ? `${taken} already claimed. Applications close when ${total} is reached.`
            : "All founding spots have been claimed. Standard pricing applies."}
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "border-primary/40 bg-primary/10 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold",
        isOpen ? "text-primary" : "text-muted-foreground",
        className,
      )}
    >
      <span className="relative flex h-2 w-2">
        {isOpen ? (
          <>
            <span className="bg-primary/60 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
            <span className="bg-primary relative inline-flex h-2 w-2 rounded-full" />
          </>
        ) : (
          <span className="bg-muted-foreground relative inline-flex h-2 w-2 rounded-full" />
        )}
      </span>
      {isOpen ? `${remaining} of ${total} founding spots left` : "Founding cohort full"}
    </div>
  );
}
