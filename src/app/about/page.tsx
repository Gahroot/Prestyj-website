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
    "Prestyj is a done-for-you AI marketing and sales automation company for service businesses and real estate teams — AI agents, batch video ads, and managed ad spend.",
  keywords: [
    "about Prestyj",
    "Prestyj company",
    "Prestyj AI",
    "AI marketing agents",
    "batch video ads",
    "managed ad spend",
    "done-for-you AI marketing",
  ],
  openGraph: {
    title: "About Prestyj",
    description:
      "Prestyj runs your ads, produces hundreds of video ad variations from a single recording, and deploys AI agents that answer calls, respond to leads, and book appointments — 24/7. Done for you.",
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
      "Prestyj runs your ads, produces hundreds of video ad variations from a single recording, and deploys AI agents that answer calls, respond to leads, and book appointments — 24/7. Done for you.",
    images: ["https://prestyj.com/og-image.jpg"],
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const proofPoints = [
  "AI agents that answer calls, respond to leads in under 60 seconds, and book appointments directly into your calendar — 24/7.",
  "One recording session becomes hundreds of video ad variants — hooks, angles, offers, and CTAs — built for Meta, TikTok, YouTube Shorts, and Reels.",
  "Managed Google and Meta ad spend so your budget goes toward what converts, not what looks good in a dashboard.",
];

const capabilities = [
  {
    title: "AI agents",
    description:
      "Voice agents, sales agents, receptionists, and marketing agents that answer calls, follow up with leads, book appointments, and reactivate dead contacts — 24/7.",
    icon: Sparkles,
  },
  {
    title: "Batch video ads",
    description:
      "One recording turned into hundreds of ad variants — hooks, angles, offers, bodies, and CTAs — for Meta, TikTok, YouTube Shorts, and Reels.",
    icon: Video,
  },
  {
    title: "Managed ad spend",
    description:
      "Google and Meta campaigns built, launched, and optimized for you. We test creatives, manage budgets, and report on cost per lead.",
    icon: Megaphone,
  },
  {
    title: "Fast turnaround",
    description:
      "Most clients are live in 7–10 business days. We handle setup, integrations, and training — you just show up to a kickoff call.",
    icon: Timer,
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
      "About Prestyj, a done-for-you AI marketing and sales automation company for service businesses and real estate teams.",
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
              Done-for-you AI agents, batch video ads, and managed ad spend.
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed sm:text-xl">
              Prestyj runs your ads, produces hundreds of video ad variations from a single
              recording, and deploys AI agents that answer calls, respond to leads in 60 seconds,
              and book appointments on your calendar — 24/7. Done for you, not a tool you learn.
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
                  Prestyj is a done-for-you AI marketing and sales automation company for service
                  businesses and real estate teams. We deploy AI agents that answer calls, follow up
                  with leads, and book appointments; produce hundreds of video ad variants from a
                  single recording; and manage your Google and Meta ad spend end-to-end. Instead of
                  hiring an agency, an ISA team, and a video editor, you get one system that runs
                  your marketing and sales.
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
              Three pillars — AI agents, batch video ads, and managed ad spend — designed for
              businesses that need more appointments, lower cost per lead, and less manual work.
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
                    <dd>Done-for-you AI agents, batch video ads, and managed ad spend</dd>
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
