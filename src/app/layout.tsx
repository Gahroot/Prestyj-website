import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AuroraBackground } from "@/components/effects/aurora-background";
import { PIXEL_ID, LINKEDIN_PARTNER_ID } from "@/lib/meta-pixel";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s — Prestyj",
  },
  description: siteConfig.description,
  keywords: [
    "AI agents for service businesses",
    "AI lead response",
    "AI voice agents",
    "AI sales agents",
    "lead reactivation",
    "300 video ads",
    "batch video ads",
    "paid social creative testing",
    "Meta ad creative testing",
    "TikTok video ads",
    "YouTube Shorts ads",
    "UGC style video ads",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.creator,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  category: "technology",
  // Google Search Console verification. Driven by env so the token can be set
  // (Vercel → Production) without a code change. Omitted entirely when unset so
  // no broken/placeholder meta tag is emitted. Required before branded-query
  // ("Prestyj") impressions can be tracked in Search Console.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
  // Discovery tags — oEmbed (Notion/WordPress/Substack auto-embed) +
  // RSS feed of the statistics dataset (auto-pickup by feed readers and
  // AI freshness pipelines).
  alternates: {
    types: {
      "application/json+oembed": `${siteConfig.url}/oembed`,
      "application/rss+xml": `${siteConfig.url}/feed/stats.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} relative min-h-screen font-sans`}>
        <Script
          id="google-ads-gtag"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18112004799"
          strategy="afterInteractive"
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18112004799', {'allow_enhanced_conversions': true});`}
        </Script>
        {LINKEDIN_PARTNER_ID && (
          <>
            <Script id="linkedin-insight-init" strategy="afterInteractive">
              {`_linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}
            </Script>
            <Script id="linkedin-insight-loader" strategy="afterInteractive">
              {`(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);`}
            </Script>
          </>
        )}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
          {LINKEDIN_PARTNER_ID && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_PARTNER_ID}&fmt=gif`}
              alt=""
            />
          )}
        </noscript>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <AuroraBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
