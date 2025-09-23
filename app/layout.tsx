import type { Metadata } from "next";
import "../styles/globals.css";
import { Inter, Poppins } from "next/font/google";
import InstallPrompt from "../components/InstallPrompt";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-poppins" });

export const metadata: Metadata = {
  metadataBase: new URL("https://apexbyte.vercel.app"),
  title: {
    default: "ApexByte — Software Agency Pakistan | Web, Mobile, AI",
    template: "%s | ApexByte",
  },
  description:
    "ApexByte is a Pakistan-based premium software agency delivering Web Apps, Mobile Apps, and AI solutions for global clients.",
  keywords: [
    "software agency Pakistan",
    "web development Lahore Karachi Islamabad",
    "mobile app development Pakistan",
    "AI solutions Pakistan",
    "Next.js Tailwind agency",
    "outsourcing Pakistan",
    "international clients",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
  url: "https://apexbyte.vercel.app/",
    siteName: "ApexByte",
    title: "ApexByte — Pakistan Software Agency | Web • Mobile • AI",
    description:
      "Premium software agency in Pakistan building Web Apps, Mobile Apps, and AI products for international clients.",
    images: [
      { url: "/og.svg", width: 1200, height: 630, alt: "ApexByte" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@apexbyte",
    title: "ApexByte — Software Agency Pakistan",
    description: "Web, Mobile, and AI solutions for global brands.",
  images: ["/og.svg"],
  },
  alternates: {
  canonical: "https://apexbyte.vercel.app/",
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
  <link rel="icon" href="/icon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/icons/icon-192.png" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script dangerouslySetInnerHTML={{ __html: `
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js').catch(function(e){console.warn('SW reg failed', e)});
            });
          }
        `}} />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ApexByte",
              url: "https://apexbyte.vercel.app/",
              email: "apexbyte63@gmail.com",
              telephone: "+92 313 0812324",
              sameAs: [
                "https://www.linkedin.com/company/apexbyte",
                "https://twitter.com/apexbyte"
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
              },
              areaServed: ["PK", "US", "UK", "AE", "CA", "AU", "EU"],
              makesOffer: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web App Development" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Solutions" } }
              ],
            }),
          }}
        />
            <InstallPrompt />
            <Analytics />
            <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
