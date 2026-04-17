import { SafeJsonLd } from "./safe-json-ld";

const PAGE_URL = "https://prestyj.com/batch-video-ads#pricing";

export function BatchVideoAdsProductJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Batch Video Ads — Scripted Vertical Video Ad Production",
    description:
      "300 to 1,000 scripted vertical video ads produced from 15-20 minutes of your selfie footage. Real faces, not AI avatars. Delivered in 24 hours.",
    brand: {
      "@type": "Brand",
      name: "PRESTYJ",
    },
    image: "https://prestyj.com/og-image.jpg",
    category: "Video Ad Production",
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Real estate agents, teams, brokerages, home services business owners",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "1497",
      highPrice: "3997",
      offerCount: 3,
      availability: "https://schema.org/InStock",
      url: PAGE_URL,
      offers: [
        {
          "@type": "Offer",
          name: "Minimum — 300 Scripted Vertical Video Ads",
          price: "1497",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: PAGE_URL,
        },
        {
          "@type": "Offer",
          name: "Pro — 500 Scripted Vertical Video Ads",
          price: "2497",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: PAGE_URL,
        },
        {
          "@type": "Offer",
          name: "Max — 1,000 Scripted Vertical Video Ads",
          price: "3997",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: PAGE_URL,
        },
      ],
    },
  };

  return <SafeJsonLd data={jsonLd} />;
}
