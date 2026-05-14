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
  title: "Home Service Facebook Ads by City",
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
    title: "Home Service Facebook Ads by City",
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
        <section className="relative overflow-hidden py-16">
          <div className="from-primary/10 via-background to-success/5 absolute inset-0 bg-gradient-to-br" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
            <Badge variant="outline" className="border-primary/50 text-primary mb-6">
              <MapPin className="mr-2 h-4 w-4" />
              Available Nationwide
            </Badge>
            <h1 className="font-heading text-foreground mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
              Facebook Ads for Home Services
              <br />
              <span className="text-primary">in Your City</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg sm:text-xl">
              Prestyj helps HVAC, roofing, plumbing, solar, and general contractor businesses run
              high-converting Facebook ads in 20+ major US metros. Find your market below.
            </p>
          </div>
        </section>

        {/* City Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {locations.map((location) => (
                <Link key={location.slug} href={`/locations/${location.slug}`} className="group">
                  <Card className="hover:border-primary/50 h-full transition-all duration-200 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="bg-primary/10 rounded-lg p-2">
                          <MapPin className="text-primary h-5 w-5" />
                        </div>
                        <h2 className="font-heading text-foreground text-lg font-semibold">
                          {location.city.displayName}
                        </h2>
                      </div>
                      <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                        {location.city.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          {location.city.metroPopulation} metro
                        </span>
                        <span className="text-primary flex items-center gap-1 font-medium transition-all group-hover:gap-2">
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
        <section className="relative overflow-hidden py-24">
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Don&apos;t See Your City?
            </h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
              Prestyj serves home service businesses nationwide. Book a demo to learn how we can
              help you dominate your local market — wherever you operate.
            </p>
            <a
              href="/book-demo"
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md px-10 py-6 text-lg font-medium transition-colors"
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
