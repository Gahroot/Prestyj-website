import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

/**
 * Social account data — kept in sync with the sameAs array in
 * OrganizationJsonLd (src/components/seo/json-ld.tsx).
 */
const ACCOUNTS = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/prestyj_/",
    icon: Instagram,
    handle: "@prestyj_",
    description: "Daily reels, carousels & behind-the-scenes.",
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61582824703610",
    icon: Facebook,
    handle: "Prestyj",
    description: "Long-form posts & community updates.",
  },
  {
    platform: "TikTok",
    url: "https://www.tiktok.com/@prestyj_",
    icon: Youtube, // TikTok not in lucide; Youtube as generic video stand-in
    handle: "@prestyj_",
    description: "Short-form hooks & viral tests.",
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/@prestyj_",
    icon: Youtube,
    handle: "@prestyj_",
    description: "Tutorials, breakdowns & case studies.",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/company/prestyj/",
    icon: Linkedin,
    handle: "Prestyj",
    description: "B2B thought leadership & product updates.",
  },
  {
    platform: "Threads",
    url: "https://www.threads.net/@prestyj_",
    icon: Twitter, // Threads not in lucide; Twitter as text-first stand-in
    handle: "@prestyj_",
    description: "Conversational posts & engagement.",
  },
  {
    platform: "X",
    url: "https://x.com/prestyj_",
    icon: Twitter,
    handle: "@prestyj_",
    description: "Hot takes, threads & real-time updates.",
  },
] as const;

export function ContentEngineLiveAccounts() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            See Us Posting <span className="text-primary">Right Now</span>.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These aren&apos;t mockups. Every account is live, posting daily, powered
            by the same engine you&apos;ll get.
          </p>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {ACCOUNTS.map((account, index) => (
            <AnimateOnScroll key={account.platform} delay={index * 0.05}>
              <div className="group bg-card border border-border rounded-lg p-5 h-full hover:border-primary/40 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <account.icon className="w-5 h-5 text-primary" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-base font-heading font-semibold text-foreground mb-1">
                  {account.platform}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {account.description}
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <Link href={account.url} target="_blank" rel="noopener noreferrer">
                    {account.handle}
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
