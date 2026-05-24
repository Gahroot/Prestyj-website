"use client";

import { useMemo, useState } from "react";
import { CopyButton } from "@/components/ui/copy-button";
import { buildCitation, buildStatEmbedSnippets, type FlatStatistic } from "@/lib/statistics";

type EmbedFormat = "iframe" | "markdown" | "html";
type CitationFormat = "apa" | "mla" | "chicago" | "bibtex";

interface ShareCitePanelProps {
  stat: FlatStatistic;
}

/**
 * The single most important UI surface for backlinks: this is where a
 * journalist / blogger / marketer picks how they want to reference the
 * statistic. Every format we offer embeds a link back to the stat's
 * permalink, so every "Copy" press primes a backlink.
 */
export function ShareCitePanel({ stat }: ShareCitePanelProps) {
  const [embedFormat, setEmbedFormat] = useState<EmbedFormat>("iframe");
  const [citationFormat, setCitationFormat] = useState<CitationFormat>("apa");

  const embed = useMemo(() => buildStatEmbedSnippets(stat), [stat]);
  const citation = useMemo(() => buildCitation(stat), [stat]);

  const embedSnippet =
    embedFormat === "iframe"
      ? embed.iframeWithAttribution
      : embedFormat === "markdown"
        ? embed.markdown
        : embed.plainHtml;

  const citationSnippet =
    citationFormat === "apa"
      ? citation.apa
      : citationFormat === "mla"
        ? citation.mla
        : citationFormat === "chicago"
          ? citation.chicago
          : citation.bibtex;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Embed snippet */}
      <section className="bg-card border-border/60 flex flex-col gap-3 rounded-2xl border p-5">
        <header className="flex items-center justify-between gap-2">
          <h3 className="font-heading text-foreground text-base font-semibold">Embed this stat</h3>
          <CopyButton text={embedSnippet} />
        </header>
        <FormatToggle
          value={embedFormat}
          onChange={(v) => setEmbedFormat(v as EmbedFormat)}
          options={[
            { value: "iframe", label: "iFrame" },
            { value: "markdown", label: "Markdown" },
            { value: "html", label: "HTML" },
          ]}
        />
        <pre className="bg-muted/40 text-foreground/90 max-h-56 overflow-auto rounded-lg p-3 text-xs leading-relaxed whitespace-pre-wrap">
          {embedSnippet}
        </pre>
        <p className="text-muted-foreground text-xs">
          Free to embed on any site — attribution back to Prestyj is required by the dataset license
          (CC BY 4.0).
        </p>
      </section>

      {/* Citation block */}
      <section className="bg-card border-border/60 flex flex-col gap-3 rounded-2xl border p-5">
        <header className="flex items-center justify-between gap-2">
          <h3 className="font-heading text-foreground text-base font-semibold">How to cite</h3>
          <CopyButton text={citationSnippet} />
        </header>
        <FormatToggle
          value={citationFormat}
          onChange={(v) => setCitationFormat(v as CitationFormat)}
          options={[
            { value: "apa", label: "APA" },
            { value: "mla", label: "MLA" },
            { value: "chicago", label: "Chicago" },
            { value: "bibtex", label: "BibTeX" },
          ]}
        />
        <pre className="bg-muted/40 text-foreground/90 max-h-56 overflow-auto rounded-lg p-3 text-xs leading-relaxed whitespace-pre-wrap">
          {citationSnippet}
        </pre>
        <p className="text-muted-foreground text-xs">
          Original source: {stat.source.name}
          {stat.source.year ? `, ${stat.source.year}` : null}
          {stat.source.url ? (
            <>
              {" "}
              ·{" "}
              <a className="underline" href={stat.source.url} rel="noopener" target="_blank">
                primary source
              </a>
            </>
          ) : null}
        </p>
      </section>
    </div>
  );
}

interface ToggleOption {
  value: string;
  label: string;
}

function FormatToggle({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (next: string) => void;
  options: ToggleOption[];
}) {
  return (
    <div className="bg-muted/40 inline-flex w-fit rounded-lg p-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={[
            "rounded-md px-3 py-1 text-xs font-medium transition-colors",
            value === opt.value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          ].join(" ")}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
