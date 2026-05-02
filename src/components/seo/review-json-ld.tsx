import { SafeJsonLd } from "./safe-json-ld";

interface ReviewJsonLdProps {
  reviews: Array<{
    author: string;
    rating: number;
    text: string;
    date?: string;
  }>;
  itemName: string;
  itemDescription?: string;
}

export function ReviewJsonLd({
  reviews,
  itemName,
  itemDescription,
}: ReviewJsonLdProps) {
  const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
  const avgRating = (totalRating / reviews.length).toFixed(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: itemName,
    ...(itemDescription && { description: itemDescription }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating,
      reviewCount: reviews.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.text,
      ...(r.date && { datePublished: r.date }),
    })),
  };

  return <SafeJsonLd data={jsonLd} />;
}
