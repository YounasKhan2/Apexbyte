"use client";
import { useMemo } from "react";

const items = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  desc: "A brief description highlighting outcome and tech.",
  img: `/portfolio/${i + 1}.svg`,
}));

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
                className="group relative mr-4 w-[320px] shrink-0 overflow-hidden rounded-3xl border border-slate-200 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    loading="lazy"
                    src={item.img}
                    alt={`${item.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="font-heading">{item.title}</div>
                  <div className="text-sm text-slate-600">{item.desc}</div>
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
