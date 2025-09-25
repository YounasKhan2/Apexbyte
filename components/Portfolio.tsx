"use client";
import { useMemo } from "react";

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
  const cardWidth = 320; // keep existing design width
  const gap = 16; // px gap between cards
  const trackWidth = items.length * (cardWidth + gap); // only one set length
  const speedPxPerSec = 60; // adjust marquee speed
  const duration = trackWidth / speedPxPerSec; // seconds to move one set (50%)

  return (
  <section id="portfolio" className="section" aria-label="Selected work">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl">Portfolio</h2>
            <p className="text-slate-600 mt-2">Swipe or drag to explore selected work.</p>
          </div>
          <a href="#contact" className="hidden md:inline text-sm link-underline">Work with us</a>
        </div>
        <div className="marquee relative overflow-hidden" role="region" aria-label="Portfolio items">
          <div className="marquee-track" style={{ animationDuration: `${duration}s` }}>
            {loopItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="group relative mr-4 w-[85vw] max-w-xs sm:w-72 md:w-80 lg:w-[320px] shrink-0 overflow-hidden rounded-3xl border border-slate-200 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                  <img
                    loading="lazy"
                    src={item.img}
                    alt={`${item.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <div className="font-heading text-base sm:text-lg">{item.title}</div>
                  <div className="text-xs sm:text-sm text-slate-600">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
