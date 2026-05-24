"use client";

import { useMemo, useState } from "react";
import { Code2 } from "lucide-react";
import { CopyButton } from "@/components/ui/copy-button";
import { findEmbeddableCalculator } from "@/lib/calculator/embeddable";

interface CalculatorEmbedCtaProps {
  slug: string;
}

/**
 * Drop-in "Embed this calculator" panel for any calculator page. Generates
 * the iframe snippet (with visible attribution) the host site copies into
 * their own page — every embed = a backlink to the canonical calculator URL.
 */
export function CalculatorEmbedCta({ slug }: CalculatorEmbedCtaProps) {
  const calc = findEmbeddableCalculator(slug);
  const [open, setOpen] = useState(false);

  const snippet = useMemo(() => {
    if (!calc) return "";
    const embedUrl = `https://prestyj.com/embed/calculator/${calc.slug}`;
    return (
      `<iframe src="${embedUrl}" width="100%" height="${calc.recommendedHeight}" ` +
      `style="border:0;max-width:900px" loading="lazy" ` +
      `title="${calc.title}"></iframe>\n` +
      `<p style="font-size:12px;color:#555;margin-top:4px">` +
      `Calculator: <a href="${calc.permalink}" rel="noopener">${calc.title} — Prestyj</a></p>`
    );
  }, [calc]);

  if (!calc) return null;

  return (
    <section className="bg-card/50 border-border/60 mx-auto mt-12 max-w-3xl rounded-2xl border p-5">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <Code2 className="text-primary mt-0.5 h-5 w-5" aria-hidden />
          <div>
            <h2 className="font-heading text-foreground text-base font-semibold">
              Embed this calculator on your site
            </h2>
            <p className="text-muted-foreground text-sm">
              Free under CC BY 4.0 — link back to Prestyj is the only requirement.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="text-primary text-sm font-medium underline-offset-2 hover:underline"
        >
          {open ? "Hide snippet" : "Show snippet"}
        </button>
      </header>

      {open ? (
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
              iFrame snippet
            </span>
            <CopyButton text={snippet} />
          </div>
          <pre className="bg-muted/40 text-foreground/90 max-h-56 overflow-auto rounded-lg p-3 text-xs leading-relaxed whitespace-pre-wrap">
            {snippet}
          </pre>
        </div>
      ) : null}
    </section>
  );
}
