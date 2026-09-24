import type { ReactElement } from "react";

import type { LayoutRecipe } from "@/lib/layout-lab/layouts";
import { cn } from "@/lib/utils";

const line = "h-1 rounded-[1px] bg-foreground/35";
const faintLine = "h-1 rounded-[1px] bg-foreground/15";
const panel = "border border-foreground/15";

export function LayoutThumbnail({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  return (
    <div
      aria-hidden="true"
      className="bg-background aspect-[4/3] overflow-hidden border-b p-3"
      data-family={recipe.family}
      data-variant={recipe.composition.variant}
    >
      <div className="border-foreground/15 flex h-3 items-center justify-between border-b pb-2">
        <span className="bg-foreground/50 h-1 w-8" />
        <span className="bg-primary h-1 w-5" />
      </div>
      <div className="h-[calc(100%-0.75rem)] pt-3">
        {recipe.family === "editorial" ? (
          <EditorialMini variant={recipe.composition.variant} />
        ) : null}
        {recipe.family === "ledger" ? <LedgerMini variant={recipe.composition.variant} /> : null}
        {recipe.family === "workbench" ? (
          <WorkbenchMini variant={recipe.composition.variant} />
        ) : null}
        {recipe.family === "proof" ? <ProofMini variant={recipe.composition.variant} /> : null}
        {recipe.family === "narrative" ? (
          <NarrativeMini variant={recipe.composition.variant} />
        ) : null}
        {recipe.family === "conversion" ? (
          <ConversionMini variant={recipe.composition.variant} />
        ) : null}
      </div>
    </div>
  );
}

function EditorialMini({ variant }: { variant: 1 | 2 | 3 | 4 }): ReactElement {
  if (variant === 2) {
    return (
      <div className="grid h-full grid-cols-[0.38fr_0.62fr] gap-2">
        <div className={cn(panel, "space-y-2 p-2")}>
          <div className={cn(line, "w-3/4")} />
          <div className={cn(faintLine, "w-full")} />
          <div className={cn(faintLine, "w-4/5")} />
        </div>
        <div className="space-y-2">
          {[0, 1, 2].map((item) => (
            <div key={item} className={cn(panel, "space-y-1.5 p-2")}>
              <div className={cn(line, item === 1 ? "w-2/3" : "w-1/2")} />
              <div className={cn(faintLine, "w-full")} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (variant === 3) {
    return (
      <div className="h-full border-y pt-2">
        <div className={cn(line, "h-2 w-4/5")} />
        <div className={cn(line, "bg-primary mt-1 h-2 w-3/5")} />
        <div className="mt-3 grid grid-cols-3 gap-1">
          {[0, 1, 2].map((item) => (
            <div key={item} className={cn(panel, "h-10")} />
          ))}
        </div>
      </div>
    );
  }
  if (variant === 4) {
    return (
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className={cn(line, "h-2 w-full")} />
          <div className={cn(line, "mt-2 h-2 w-5/6")} />
          <div className={cn(line, "bg-primary mt-2 h-2 w-2/3")} />
        </div>
        <div className="grid grid-cols-[0.3fr_0.7fr] gap-2 border-t pt-2">
          <div className={cn(faintLine, "w-full")} />
          <div className={cn(panel, "h-8")} />
        </div>
      </div>
    );
  }
  return (
    <div className="grid h-full grid-cols-[0.65fr_0.35fr] gap-2">
      <div className="space-y-2 pt-2">
        <div className={cn(line, "h-2 w-full")} />
        <div className={cn(line, "h-2 w-4/5")} />
        <div className={cn(faintLine, "mt-3 w-full")} />
        <div className={cn(faintLine, "w-2/3")} />
      </div>
      <div className={cn(panel, "space-y-2 p-2")}>
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="border-b pb-1.5">
            <div className={cn(faintLine, "w-full")} />
          </div>
        ))}
      </div>
    </div>
  );
}

function LedgerMini({ variant }: { variant: 1 | 2 | 3 | 4 }): ReactElement {
  if (variant === 1) {
    return (
      <div className="flex h-full flex-col justify-center">
        <div className="grid grid-cols-4 border-y">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className={cn(panel, "h-16 p-2")}>
              <div className={cn(item === 2 ? "bg-primary" : "bg-foreground/30", "size-2")} />
              <div className={cn(faintLine, "mt-4 w-full")} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (variant === 2) {
    return (
      <div className="grid h-full grid-cols-[0.7fr_0.3fr] gap-2">
        <div>
          <div className={cn(line, "h-2 w-3/4")} />
          <div className="mt-3 space-y-2">
            {[0, 1, 2].map((item) => (
              <div key={item} className={cn(panel, "h-8")} />
            ))}
          </div>
        </div>
        <div className={cn(panel, "space-y-2 p-2")}>
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className={cn(faintLine, item === 1 ? "bg-primary" : "")} />
          ))}
        </div>
      </div>
    );
  }
  if (variant === 3) {
    return (
      <div className="ml-3 h-full border-l pl-4">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="relative mb-2 border-b pb-2">
            <span
              className={cn(
                "absolute top-0 -left-[1.2rem] size-2 rounded-full",
                item === 2 ? "bg-primary" : "bg-foreground/35",
              )}
            />
            <div className={cn(line, "w-1/2")} />
            <div className={cn(faintLine, "mt-1.5 w-full")} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="h-full border-t">
      {[0, 1, 2, 3].map((item) => (
        <div key={item} className="grid grid-cols-[1rem_0.7fr_1fr] gap-2 border-b py-2">
          <div className={cn(faintLine, "w-full")} />
          <div className={cn(line, item === 1 ? "bg-primary" : "")} />
          <div className={cn(faintLine, "w-full")} />
        </div>
      ))}
    </div>
  );
}

function WorkbenchMini({ variant }: { variant: 1 | 2 | 3 | 4 }): ReactElement {
  if (variant === 2) {
    return (
      <div className="grid h-full grid-cols-4 gap-1">
        {[0, 1, 2, 3].map((lane) => (
          <div key={lane} className={cn(panel, "space-y-1 p-1")}>
            <div className={cn(line, lane === 1 ? "bg-primary" : "")} />
            <div className="h-6 border" />
            <div className="h-8 border" />
          </div>
        ))}
      </div>
    );
  }
  if (variant === 3) {
    return (
      <div className={cn(panel, "h-full")}>
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="grid grid-cols-[1rem_0.5fr_1fr] gap-2 border-b p-2">
            <span
              className={cn("size-2 rounded-full", item === 3 ? "bg-primary" : "bg-foreground/25")}
            />
            <div className={cn(line, "w-full")} />
            <div className={cn(faintLine, "w-full")} />
          </div>
        ))}
      </div>
    );
  }
  if (variant === 4) {
    return (
      <div className="grid h-full grid-cols-[0.35fr_0.65fr] border">
        <div className="space-y-2 border-r p-2">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className={cn(faintLine, item === 0 ? "bg-primary" : "")} />
          ))}
        </div>
        <div className="space-y-2 p-2">
          <div className={cn(line, "w-2/3")} />
          {[0, 1, 2].map((item) => (
            <div key={item} className="h-7 border" />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="grid h-full grid-cols-[0.65fr_0.35fr] gap-2">
      <div className={cn(panel, "space-y-2 p-2")}>
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="grid grid-cols-[1rem_1fr] gap-2 border-b pb-2">
            <div className={cn(faintLine, "w-full")} />
            <div className={cn(line, item === 1 ? "bg-primary" : "")} />
          </div>
        ))}
      </div>
      <div className={cn(panel, "p-2")}>
        <div className={cn(line, "w-2/3")} />
        <div className={cn(faintLine, "mt-3 w-full")} />
        <div className={cn(faintLine, "mt-2 w-full")} />
      </div>
    </div>
  );
}

function ProofMini({ variant }: { variant: 1 | 2 | 3 | 4 }): ReactElement {
  if (variant === 2) {
    return (
      <div className="grid h-full grid-cols-3 gap-1">
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <div key={item} className={cn(panel, "p-2")}>
            <div className={cn(line, item === 2 ? "bg-primary" : "")} />
            <div className={cn(faintLine, "mt-2 w-full")} />
          </div>
        ))}
      </div>
    );
  }
  if (variant === 3) {
    return (
      <div className="grid h-full grid-cols-2 border">
        <div className="border-r p-2">
          <div className={cn(faintLine, "w-1/3")} />
          <div className={cn(line, "mt-3 h-2 w-4/5")} />
          <div className={cn(faintLine, "mt-3 w-full")} />
        </div>
        <div className="p-2">
          <div className={cn(line, "bg-primary w-1/3")} />
          <div className={cn(line, "mt-3 h-2 w-4/5")} />
          <div className={cn(faintLine, "mt-3 w-full")} />
        </div>
      </div>
    );
  }
  if (variant === 4) {
    return (
      <div className="grid h-full gap-1">
        {[0, 1, 2].map((item) => (
          <div key={item} className="grid grid-cols-[1rem_0.6fr_1fr] gap-2 border p-2">
            <div className={cn(faintLine, "w-full")} />
            <div className={cn(line, item === 1 ? "bg-primary" : "")} />
            <div className={cn(faintLine, "w-full")} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="h-full border-t">
      {[0, 1, 2].map((item) => (
        <div key={item} className="grid grid-cols-[0.7fr_1fr_0.8fr] gap-2 border-b py-2">
          <div className={cn(line, item === 0 ? "bg-primary" : "")} />
          <div className={cn(faintLine, "w-full")} />
          <div className={cn(faintLine, "w-full")} />
        </div>
      ))}
    </div>
  );
}

function NarrativeMini({ variant }: { variant: 1 | 2 | 3 | 4 }): ReactElement {
  if (variant === 2) {
    return (
      <div className="grid h-full grid-cols-4 border-t">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="border-r p-2">
            <div className={cn(faintLine, "w-2/3")} />
            <div className={cn(line, item === 1 ? "bg-primary mt-3" : "mt-3")} />
            <div className={cn(faintLine, "mt-2 w-full")} />
          </div>
        ))}
      </div>
    );
  }
  if (variant === 3) {
    return (
      <div className="space-y-1">
        {[0, 1, 2].map((item) => (
          <div key={item}>
            <div className="grid grid-cols-[0.4fr_0.2fr_0.2fr_0.2fr] border p-2">
              <div className={cn(line, item === 1 ? "bg-primary" : "")} />
              <div className={faintLine} />
              <div className={faintLine} />
              <div className={faintLine} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (variant === 4) {
    return (
      <div className="grid h-full grid-cols-4 border-t">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="relative border-r p-2">
            <div className={cn("size-2", item === 3 ? "bg-primary" : "bg-foreground/30")} />
            <div className={cn(line, "mt-4")} />
            <div className={cn(faintLine, "mt-3 w-full")} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="ml-4 h-full border-l pl-4">
      {[0, 1, 2, 3].map((item) => (
        <div key={item} className="relative mb-2">
          <span
            className={cn(
              "absolute top-0 -left-[1.2rem] size-2 rounded-full",
              item === 2 ? "bg-primary" : "bg-foreground/30",
            )}
          />
          <div className={cn(line, "w-1/2")} />
          <div className={cn(faintLine, "mt-1.5 w-4/5")} />
        </div>
      ))}
    </div>
  );
}

function ConversionMini({ variant }: { variant: 1 | 2 | 3 | 4 }): ReactElement {
  if (variant === 1) {
    return (
      <div className="grid h-full grid-cols-3 gap-1">
        {[0, 1, 2].map((item) => (
          <div key={item} className={cn(panel, "p-2")}>
            <div className={cn(line, item === 0 ? "bg-primary" : "")} />
            <div className={cn(faintLine, "mt-3 w-full")} />
            <div className={cn(faintLine, "mt-2 w-4/5")} />
          </div>
        ))}
      </div>
    );
  }
  if (variant === 2) {
    return (
      <div className={cn(panel, "h-full")}>
        <div className="flex justify-between border-b p-2">
          <div className={cn(line, "w-1/3")} />
          <div className={cn(line, "bg-primary w-1/5")} />
        </div>
        <div className="grid grid-cols-[0.65fr_0.35fr] gap-2 p-2">
          <div className="space-y-2">
            <div className={cn(faintLine, "w-full")} />
            <div className={cn(faintLine, "w-4/5")} />
          </div>
          <div className="h-12 border" />
        </div>
      </div>
    );
  }
  if (variant === 3) {
    return (
      <div className="grid h-full grid-cols-5 border-t">
        {[0, 1, 2, 3, 4].map((item) => (
          <div key={item} className="border-r p-1.5">
            <div className={cn("size-2", item === 2 ? "bg-primary" : "bg-foreground/30")} />
            <div className={cn(line, "mt-3")} />
            <div className={cn(faintLine, "mt-2 w-full")} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="grid h-full grid-cols-3 border">
      {[0, 1, 2].map((item) => (
        <div key={item} className="border-r p-2">
          <div className={cn("size-2", item === 0 ? "bg-primary" : "bg-foreground/30")} />
          <div className={cn(line, "mt-4")} />
          <div className={cn(faintLine, "mt-3 w-full")} />
          <div className={cn(faintLine, "mt-2 w-4/5")} />
        </div>
      ))}
    </div>
  );
}
