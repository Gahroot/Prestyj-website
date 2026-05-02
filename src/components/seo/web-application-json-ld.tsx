import { SafeJsonLd } from "./safe-json-ld";

interface WebApplicationJsonLdProps {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
  operatingSystem?: string;
  browserRequirements?: string;
  offers?: {
    price: string;
    priceCurrency: string;
    description?: string;
  };
  featureList?: string[];
  aggregateRating?: {
    ratingValue: string;
    ratingCount: string;
  };
}

export function WebApplicationJsonLd({
  name,
  description,
  url,
  applicationCategory = "BusinessApplication",
  operatingSystem = "Web",
  browserRequirements = "Requires JavaScript. Requires HTML5.",
  offers,
  featureList,
  aggregateRating,
}: WebApplicationJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url,
    applicationCategory,
    operatingSystem,
    browserRequirements,
    ...(offers && {
      offers: {
        "@type": "Offer",
        price: offers.price,
        priceCurrency: offers.priceCurrency,
        ...(offers.description && { description: offers.description }),
        availability: "https://schema.org/OnlineOnly",
      },
    }),
    ...(featureList && { featureList }),
    ...(aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ...aggregateRating,
        bestRating: "5",
        worstRating: "1",
      },
    }),
    provider: {
      "@type": "Organization",
      name: "PRESTYJ",
      url: "https://prestyj.com",
    },
  };

  return <SafeJsonLd data={jsonLd} />;
}
