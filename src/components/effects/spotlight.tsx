import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
}

export function Spotlight({ className }: SpotlightProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
        style={{ animation: "spotlight-in 1s ease-out forwards" }}
      />
      <div
        className="absolute -top-20 right-0 w-[500px] h-[500px] bg-success/10 rounded-full blur-[100px]"
        style={{ animation: "spotlight-in 1s ease-out 0.2s forwards", opacity: 0 }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]"
        style={{ animation: "spotlight-in 1s ease-out 0.4s forwards", opacity: 0 }}
      />
    </div>
  );
}
