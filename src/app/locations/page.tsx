import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getAllLocations } from "@/lib/locations";
import { MapPin, ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

const siteUrl = "https://prestyj.com";

export const metadata: Metadata = {
  title: "Home Service Facebook Ads by City | Prestyj Locations",
  description:
    "Find Prestyj's AI-powered Facebook ad services for home service businesses in your city. HVAC, roofing, plumbing, solar, and general contractors across 20+ major US metros.",
  keywords: [
    "home service ads by city",
    "HVAC advertising near me",
    "roofing ads local",
    "Facebook ads for contractors",
    "local home service marketing",
  ],
  openGraph: {
    title: "Home Service Facebook Ads by City | Prestyj Locations",
    description:
      "Find Prestyj's AI-powered Facebook ad services for home service businesses in your city.",
    type: "website",
    url: `${siteUrl}/locations`,
  },
  alternates: {
    canonical: `${siteUrl}/locations`,
  },
};

export default function LocationsPage() {
  const locations = getAllLocations();

  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Locations", url: `${siteUrl}/locations` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-success/5" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge
              variant="outline"
              className="mb-6 border-primary/50 text-primary"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Available Nationwide
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Facebook Ads for Home Services
              <br />
              <span className="text-primary">in Your City</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Prestyj helps HVAC, roofing, plumbing, solar, and general
              contractor businesses run high-converting Facebook ads in 20+
              major US metros. Find your market below.
            </p>
          </div>
        </section>

        {/* City Grid */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="group"
                >
                  <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-lg font-heading font-semibold text-foreground">
                          {location.city.displayName}
                        </h2>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {location.city.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          {location.city.metroPopulation} metro
                        </span>
                        <span className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Explore
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Don&apos;t See Your City?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Prestyj serves home service businesses nationwide. Book a demo to
              learn how we can help you dominate your local market — wherever
              you operate.
            </p>
            <a
              href="/book-demo"
              className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-6 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
