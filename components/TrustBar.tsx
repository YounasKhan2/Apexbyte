"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

type Brand = { name: string; src?: string };

// Map some recognizable brands to available local placeholders (swap with real SVGs later)
const brands: Brand[] = [
  { name: "Stripe", src: "/logos/brand1.svg" },
  { name: "Shopify", src: "/logos/brand2.svg" },
  { name: "Slack", src: "/logos/brand3.svg" },
  { name: "Notion", src: "/logos/brand4.svg" },
  { name: "Vercel", src: "/logos/brand5.svg" },
  { name: "AWS", src: "/logos/brand1.svg" },
  { name: "Cloudflare", src: "/logos/brand2.svg" },
  { name: "Linear", src: "/logos/brand3.svg" },
];

export default function TrustBar() {
  // Duplicate list to enable seamless looping
  const looped = useMemo(() => [...brands, ...brands], []);

  return (
    <section aria-label="Trusted by clients" className="bg-white py-8 md:py-10">
      <div className="container">
        <div className="mb-4 text-center text-xs uppercase tracking-wider text-slate-500">Trusted by teams worldwide</div>
        <div className="relative overflow-hidden">
          {/* gradient fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            className="flex min-w-max items-center gap-10 opacity-80"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" }}
            aria-label="Brand marquee"
          >
            {looped.map((b, idx) => (
              <div key={`${b.name}-${idx}`} className="flex items-center justify-center">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2">
                  {/* logo image (placeholder), hide if it fails */}
                  {b.src ? (
                    <img
                      src={b.src}
                      alt={`${b.name} logo`}
                      className="h-5 w-auto"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        // hide broken image; text wordmark will remain
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  ) : null}
                  <span className="text-sm font-medium text-slate-600">{b.name}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
