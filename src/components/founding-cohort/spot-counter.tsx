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
export function SpotCounter({
  className,
  variant = "badge",
}: SpotCounterProps) {
  const remaining = spotsRemaining();
  const taken = FOUNDING_COHORT.spotsFilled;
  const total = FOUNDING_COHORT.totalSpots;
  const isOpen = remaining > 0;

  if (variant === "block") {
    return (
      <div
        className={cn(
          "rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center",
          className,
        )}
      >
        <div className="mb-3 flex items-center justify-center gap-2 text-primary">
          <Users className="h-5 w-5" />
          <span className="text-xs font-semibold uppercase tracking-wider">
            Founding Cohort
          </span>
        </div>
        <p className="font-heading text-3xl font-bold tracking-tight">
          {isOpen ? (
            <>
              <span className="text-primary">{remaining}</span>
              <span className="text-muted-foreground">
                {" "}
                of {total} spots left
              </span>
            </>
          ) : (
            <span className="text-muted-foreground">Cohort full</span>
          )}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
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
        "inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-semibold",
        isOpen ? "text-primary" : "text-muted-foreground",
        className,
      )}
    >
      <span className="relative flex h-2 w-2">
        {isOpen ? (
          <>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </>
        ) : (
          <span className="relative inline-flex h-2 w-2 rounded-full bg-muted-foreground" />
        )}
      </span>
      {isOpen
        ? `${remaining} of ${total} founding spots left`
        : "Founding cohort full"}
    </div>
  );
}
