"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const items = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  desc: "A brief description highlighting outcome and tech.",
  img: `/portfolio/${i + 1}.svg`,
}));

export default function Portfolio() {
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 30, mass: 0.4 });
  const cardWidth = 320;
  const gap = 16;
  const total = items.length;
  const trackWidth = total * (cardWidth + gap);
  const [active, setActive] = useState(0);

  const snapTo = (index: number) => {
    const clamped = Math.max(0, Math.min(total - 1, index));
    setActive(clamped);
    const nextX = -(clamped * (cardWidth + gap));
    x.set(nextX);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") snapTo(active + 1);
      if (e.key === "ArrowLeft") snapTo(active - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

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
  <div className="relative overflow-hidden" role="region" aria-roledescription="carousel" aria-label="Portfolio items">
          <motion.div
            className="flex"
            drag="x"
            style={{ x: springX }}
            dragConstraints={{ left: -(trackWidth - (cardWidth + gap) * 2), right: 0 }}
            dragElastic={0.08}
            role="listbox"
            aria-live="polite"
          >
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                className="group relative mr-4 w-[320px] shrink-0 overflow-hidden rounded-3xl border border-slate-200 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
                role="option"
                aria-selected={i === active}
                tabIndex={0}
              >
                <div className="relative h-60 overflow-hidden">
                  <img loading="lazy" src={item.img} alt={`${item.title} preview`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="font-heading">{item.title}</div>
                  <div className="text-sm text-slate-600">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button key={i} onClick={() => snapTo(i)} className={`h-2 w-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${i === active ? "bg-primary" : "bg-slate-300"}`} aria-label={`Go to slide ${i + 1}`} aria-controls="portfolio-track" />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => snapTo(active - 1)} className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40" aria-label="Previous slide">Prev</button>
              <button onClick={() => snapTo(active + 1)} className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40" aria-label="Next slide">Next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
