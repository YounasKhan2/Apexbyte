"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Flutter Social App",
    desc: "Modern social network built with Flutter, featuring chat and media sharing.",
    img: "/portfolio/flutter1.png",
  },
  {
    id: 2,
    title: "Flutter Productivity App",
    desc: "Advanced Flutter app for productivity and collaboration.",
    img: "/portfolio/flutter2.png",
  },
  {
    id: 3,
    title: "Portfolio Showcase",
    desc: "Personal portfolio site with interactive case studies and testimonials.",
    img: "/portfolio/portfo.png",
  },
  {
    id: 4,
    title: "Seminars Platform",
    desc: "Online seminars and webinars with live Q&A and analytics.",
    img: "/portfolio/seminars.png",
  },
  {
    id: 5,
    title: "TryRoy SaaS",
    desc: "Subscription-based SaaS for business automation and reporting.",
    img: "/portfolio/tryroy.png",
  },
];

export default function Portfolio() {
  // Duplicate items to enable seamless looping
  const loopItems = useMemo(() => [...items, ...items], []);
  const cardWidth = 480; // widened lg card width for better preview
  const gap = 16; // px gap between cards
  const trackWidth = items.length * (cardWidth + gap); // width of one full set
  const speedPxPerSec = 60; // marquee speed
  const duration = trackWidth / speedPxPerSec; // seconds to move one set (50%)

  return (
    <section id="portfolio" className="section" aria-label="Selected work">
      <div className="container">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl">Portfolio</h2>
            <p className="text-slate-600 mt-2">Selected work from recent projects.</p>
          </div>
          <a href="/#contact" className="hidden lg:inline text-sm link-underline">Work with us</a>
        </div>

        <div className="relative overflow-hidden" role="region" aria-label="Portfolio items">
          {/* gradient fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            className="flex min-w-max items-object-fit gap-4 will-change-transform"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, repeatType: "loop", duration, ease: "linear" }}
            aria-label="Portfolio marquee"
          >
            {loopItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="group relative w-[85vw] max-w-xs sm:w-72 md:w-80 lg:w-[480px] shrink-0 overflow-hidden rounded-3xl border border-slate-200 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-slate-50 flex items-center justify-center">
                  <img
                    loading="lazy"
                    src={item.img}
                    alt={`${item.title} preview`}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="font-heading text-base sm:text-lg">{item.title}</div>
                  <div className="text-xs sm:text-sm text-slate-600">{item.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
