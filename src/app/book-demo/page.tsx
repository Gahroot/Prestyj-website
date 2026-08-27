import type { Metadata } from "next";

import { BookDemoClient } from "@/components/booking/book-demo-client";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Get access",
  description:
    "Bring Prestyj one institutional real estate workflow, the systems behind it, and the person who owns the final work product.",
  alternates: { canonical: `${siteConfig.url}/book-demo` },
};

export default function BookDemoPage() {
  return (
    <>
      <SafeJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Prestyj workflow scoping call",
          description: metadata.description,
          provider: { "@id": siteConfig.organizationId },
          serviceType: "Institutional real estate AI workflow consultation",
        }}
      />
      <Navbar />
      <main>
        <section className="border-b pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-primary text-sm font-semibold">Get access</p>
            <h1 className="font-heading mt-5 max-w-5xl text-4xl font-bold tracking-tight text-balance sm:text-6xl">
              Start with the work, not the pitch.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-3xl text-lg leading-8">
              Show us one workflow that crosses systems, consumes analyst time, or loses its source
              on the way to a decision. We will map the smallest proof that can earn trust.
            </p>
          </div>
        </section>
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BookDemoClient />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
