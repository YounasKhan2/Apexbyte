import type { Metadata } from "next";
import "../styles/globals.css";
import { Inter, Poppins } from "next/font/google";
import InstallPrompt from "../components/InstallPrompt";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GATracker from "../components/GATracker";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-poppins" });
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cubixbyte.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CubixByte  Web, Mobile, AI & E-commerce Solutions",
    template: "%s | CubixByte",
  },
  description:
    "CubixByte helps startups and enterprises build web, mobile, AI, and e-commerce products with speed and polish. Trusted by teams worldwide.",
  keywords: [
    "software agency",
    "web development",
    "mobile app development",
    "AI solutions",
    "Next.js Tailwind agency",
    "outsourcing",
    "international clients",
    "CubixByte",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB", "ar_AE"],
    url: "https://www.cubixbyte.com/",
    siteName: "CubixByte",
    title: "CubixByte  Web, Mobile, AI & E-commerce Solutions",
    description:
      "Build your next product with CubixByte. From strategy to launch, we deliver results.",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "CubixByte" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cubixbyte",
    title: "CubixByte  Web, Mobile, AI & E-commerce Solutions",
    description: "Build your next product with CubixByte. From strategy to launch, we deliver results.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://www.cubixbyte.com/",
    languages: {
      "en-US": "/",
      "en-GB": "/",
      "ar-AE": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body bg-white text-slate-900 antialiased">
  <link rel="manifest" href="/manifest.webmanifest" />
  <meta name="theme-color" content="#2563EB" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Performance hints for hero images */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop"
          imageSrcSet="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop 1200w, https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop 1600w"
          imageSizes="(max-width: 768px) 100vw, 50vw"
        />
        <link rel="icon" href="/icons/cubixbyte-favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/cubixbyte-logo.svg" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="apple-mobile-web-app-title" content="CubixByte" />
        <script dangerouslySetInnerHTML={{ __html: `
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js').catch(function(e){console.warn('SW reg failed', e)});
            });
          }
        `}} />
        {/* GA4 (free) */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} 
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', { send_page_view: false });
            ` }} />
          </>
        ) : null}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CubixByte",
              url: "https://www.cubixbyte.com/",
              email: "cubixbyte@gmail.com",
              telephone: "+1 (470) 202-8820",
              sameAs: [
                "https://www.linkedin.com/company/cubixbyte",
                "https://www.facebook.com/share/16vsNNkoRH/",
                "https://www.instagram.com/cubixbyte?igsh=MTVnbXdvMGN0djJhZA%3D%3D&utm_source=qr",
                "https://x.com/cubixbyte"
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              areaServed: ["US", "PK", "UK", "AE", "CA", "AU", "EU"],
              makesOffer: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web App Development" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Solutions" } }
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CubixByte",
              url: "https://www.cubixbyte.com/",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.cubixbyte.com/?q={search_term_string}"
                },
                queryInput: "required name=search_term_string"
              }
            }),
          }}
        />
            <InstallPrompt />
            <Suspense fallback={null}>
              <GATracker />
            </Suspense>
            <Analytics />
            <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
