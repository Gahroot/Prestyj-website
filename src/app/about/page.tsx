import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  ClipboardCheck,
  Mail,
  Megaphone,
  RefreshCw,
  Search,
  Sparkles,
  Timer,
  Users,
  Video,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import BorderGlow from "@/components/ui/border-glow";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { AUTHOR_LIST } from "@/lib/blog/authors";

const PAGE_URL = "https://prestyj.com/about";
const CONTACT_EMAIL = "hello@prestyj.com";

export const metadata: Metadata = {
  title: "About Prestyj",
  description:
    "About Prestyj, the batch video ads and AI marketing systems company that turns one recording session into hundreds of vertical ad variations for paid social testing.",
  keywords: [
    "about Prestyj",
    "Prestyj company",
    "Prestyj AI",
    "Prestyj batch video ads",
    "paid social creative testing company",
  ],
  openGraph: {
    title: "About Prestyj",
    description:
      "Prestyj turns one recording session into hundreds of vertical video ads for paid social creative testing.",
    type: "website",
    url: PAGE_URL,
    siteName: "Prestyj",
    images: [
      {
        url: "https://prestyj.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Prestyj",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Prestyj",
    description:
      "Prestyj turns one recording session into hundreds of vertical video ads for paid social creative testing.",
    images: ["https://prestyj.com/og-image.jpg"],
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const proofPoints = [
  "One recording session becomes a structured testing library, not a single polished ad.",
  "Scripts, hooks, bodies, CTAs, captions, and 9:16 exports are built for Meta, TikTok, YouTube Shorts, and Reels.",
  "The core offer is designed for businesses that need creative volume without hiring editors, creators, or an agency retainer.",
];

const capabilities = [
  {
    title: "Batch video ads",
    description:
      "High-volume vertical video ad variations from existing founder, operator, or product footage.",
    icon: Video,
  },
  {
    title: "Creative testing systems",
    description: "Hook, angle, offer, body, and CTA variation maps for paid social testing.",
    icon: Megaphone,
  },
  {
    title: "Fast turnaround",
    description:
      "Production workflows built around speed, volume, and clear upload-ready deliverables.",
    icon: Timer,
  },
  {
    title: "AI-assisted marketing operations",
    description:
      "AI-supported content, lead response, and sales automations for businesses that need leverage.",
    icon: Sparkles,
  },
];

const methodologySteps = [
  {
    title: "Source from primary data",
    description:
      "Every claim starts with a named, linkable source — platform documentation, published studies, first-party benchmarks, or vendor pricing pages. We do not publish numbers we cannot point back to.",
    icon: Search,
  },
  {
    title: "Write from operating experience",
    description:
      "Each post is owned by the team member who actually runs that system — voice agents, paid social, lead response, or automation — not a generic content desk. Bylines map to real expertise.",
    icon: Users,
  },
  {
    title: "Editorial and accuracy review",
    description:
      "Pricing, comparison, and statistics content is reviewed before publishing to pressure-test claims, check competitor facts, and flag anything that reads as speculation rather than evidence.",
    icon: ClipboardCheck,
  },
  {
    title: "Update as the market moves",
    description:
      "AI tooling, ad platforms, and pricing change fast. We revisit cornerstone guides on a schedule and stamp each article with a published and last-updated date so you know how current it is.",
    icon: RefreshCw,
  },
];

export default function AboutPage(): React.ReactElement {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${PAGE_URL}#about-page`,
    name: "About Prestyj",
    url: PAGE_URL,
    description:
      "About Prestyj, a batch video ads and AI marketing systems company for businesses running paid social creative testing.",
    isPartOf: {
      "@id": "https://prestyj.com/#website",
    },
    about: {
      "@id": "https://prestyj.com/#organization",
    },
    primaryImageOfPage: "https://prestyj.com/og-image.jpg",
  };

  const authorsSchema = AUTHOR_LIST.map((author) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${PAGE_URL}#${author.slug}`,
    name: author.name,
    url: `${PAGE_URL}#${author.slug}`,
    jobTitle: author.jobTitle,
    description: author.bio,
    knowsAbout: [...author.expertise],
    worksFor: {
      "@id": "https://prestyj.com/#organization",
    },
  }));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: "About", url: PAGE_URL },
        ]}
      />
      <SafeJsonLd data={aboutPageSchema} />
      {authorsSchema.map((schema) => (
        <SafeJsonLd key={schema["@id"]} data={schema} />
      ))}
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-primary mb-4 text-sm font-bold tracking-[0.3em] uppercase">
              About Prestyj
            </p>
            <h1 className="font-heading text-foreground text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
              A creative volume system for paid social teams.
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed sm:text-xl">
              Prestyj helps businesses turn one recording session into hundreds of vertical video ad
              variations so they can test more hooks, pain points, offers, and CTAs without building
              a full in-house production team.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6 lg:px-8">
          <BorderGlow borderRadius={16} innerClassName="p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <h2 className="font-heading text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
                  What Prestyj does
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  The flagship Prestyj offer is batch video ad production: scripts, angle mapping,
                  editing, captions, and platform-ready exports at a volume built for modern
                  creative testing. Instead of trying to make one perfect ad, teams get a library of
                  variants they can launch, measure, and iterate from.
                </p>
              </div>
              <ul className="space-y-4">
                {proofPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </BorderGlow>
        </section>

        <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="font-heading text-foreground text-3xl font-bold tracking-tight">
              Core capabilities
            </h2>
            <p className="text-muted-foreground mx-auto mt-3 max-w-2xl">
              Prestyj is positioned around practical marketing output: more ad angles, more tests,
              faster learning cycles, and less production bottleneck.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <div key={capability.title} className="border-border bg-card rounded-2xl border p-6">
                <capability.icon className="text-primary mb-4 h-6 w-6" />
                <h3 className="font-heading text-foreground text-lg font-semibold">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="editorial-methodology"
          className="mx-auto mt-16 max-w-5xl px-4 sm:px-6 lg:px-8"
        >
          <div className="mb-8 text-center">
            <p className="text-primary mb-3 text-sm font-bold tracking-[0.3em] uppercase">
              Editorial methodology
            </p>
            <h2 className="font-heading text-foreground text-3xl font-bold tracking-tight">
              How we research and publish
            </h2>
            <p className="text-muted-foreground mx-auto mt-3 max-w-2xl">
              Prestyj content is written by named operators on our team and held to a consistent
              standard. Here is the process behind every guide, comparison, and statistics page.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {methodologySteps.map((step, index) => (
              <div key={step.title} className="border-border bg-card rounded-2xl border p-6">
                <div className="mb-4 flex items-center gap-3">
                  <step.icon className="text-primary h-6 w-6" />
                  <span className="text-muted-foreground text-sm font-semibold tabular-nums">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="font-heading text-foreground text-lg font-semibold">{step.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="authors" className="mx-auto mt-16 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-primary mb-3 text-sm font-bold tracking-[0.3em] uppercase">
              The team
            </p>
            <h2 className="font-heading text-foreground text-3xl font-bold tracking-tight">
              Who writes for Prestyj
            </h2>
            <p className="text-muted-foreground mx-auto mt-3 max-w-2xl">
              Articles are bylined to the person who owns that system in practice. Each author
              writes only within their area of expertise.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {AUTHOR_LIST.map((author) => (
              <article
                key={author.slug}
                id={author.slug}
                className="border-border bg-card scroll-mt-28 rounded-2xl border p-6"
              >
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="bg-primary/15 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-base font-bold"
                  >
                    {author.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                  <div>
                    <h3 className="font-heading text-foreground text-lg font-semibold">
                      {author.name}
                    </h3>
                    <p className="text-primary text-sm font-medium">{author.jobTitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{author.bio}</p>
                <ul className="mt-4 space-y-2">
                  {author.credentials.map((credential) => (
                    <li key={credential} className="flex gap-2 text-sm">
                      <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{credential}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {author.expertise.map((topic) => (
                    <span
                      key={topic}
                      className="border-border text-muted-foreground rounded-full border px-2.5 py-0.5 text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="border-border bg-card rounded-2xl border p-6 sm:p-8">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="font-heading text-foreground text-2xl font-bold tracking-tight">
                  Company details
                </h2>
                <dl className="text-muted-foreground mt-5 grid gap-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-foreground font-semibold">Brand</dt>
                    <dd>Prestyj</dd>
                  </div>
                  <div>
                    <dt className="text-foreground font-semibold">Website</dt>
                    <dd>prestyj.com</dd>
                  </div>
                  <div>
                    <dt className="text-foreground font-semibold">Primary category</dt>
                    <dd>Batch video ads and AI-assisted marketing systems</dd>
                  </div>
                  <div>
                    <dt className="text-foreground font-semibold">Contact</dt>
                    <dd>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground">
                        {CONTACT_EMAIL}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <Button asChild size="lg">
                <Link href="/contact">
                  <Mail className="h-4 w-4" />
                  Contact Prestyj
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
