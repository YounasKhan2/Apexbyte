import type { Metadata } from "next";
import "../styles/globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-poppins" });

export const metadata: Metadata = {
  metadataBase: new URL("https://apexbyte.example"),
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
    url: "https://apexbyte.example/",
    siteName: "ApexByte",
    title: "ApexByte — Pakistan Software Agency | Web • Mobile • AI",
    description:
      "Premium software agency in Pakistan building Web Apps, Mobile Apps, and AI products for international clients.",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "ApexByte" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@apexbyte",
    title: "ApexByte — Software Agency Pakistan",
    description: "Web, Mobile, and AI solutions for global brands.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://apexbyte.example/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body bg-white text-slate-900 antialiased">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ApexByte",
              url: "https://apexbyte.example/",
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
        {children}
      </body>
    </html>
  );
}
