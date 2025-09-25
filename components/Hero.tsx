"use client";
import { track } from "../lib/analytics";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Web Apps", "Mobile Apps", "AI Solutions"];
const projectImages = [
  { src: "/portfolio/flutter1.png", title: "Flutter Social App" },
  { src: "/portfolio/flutter2.png", title: "Flutter Productivity App" },
  { src: "/portfolio/portfo.png", title: "Portfolio Showcase" },
  { src: "/portfolio/seminars.png", title: "Seminars Platform" },
  { src: "/portfolio/tryroy.png", title: "TryRoy SaaS" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(words[0]);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  const [projIndex, setProjIndex] = useState(0);

  useEffect(() => {
    const full = words[index];
    if (phase === "typing") {
      if (display.length < full.length) {
        const t = setTimeout(() => setDisplay(full.slice(0, display.length + 1)), 70);
        return () => clearTimeout(t);
      }
      setPhase("pausing");
      const t = setTimeout(() => setPhase("deleting"), 1200);
      return () => clearTimeout(t);
    }
    if (phase === "deleting") {
      if (display.length > 0) {
        const t = setTimeout(() => setDisplay(full.slice(0, display.length - 1)), 40);
        return () => clearTimeout(t);
      }
      setPhase("typing");
      setIndex((i: number) => (i + 1) % words.length);
    }
  }, [display, index, phase]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setProjIndex((i) => (i + 1) % projectImages.length), 6000);
    return () => clearInterval(id);
  }, []);


  return (
    <section id="home" className="section min-h-[85vh] flex items-center relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -top-24 -right-24 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-primary/20 to-purple/20 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
        <svg className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-10 animate-[spin_40s_linear_infinite]" width="700" height="700" viewBox="0 0 700 700" fill="none">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#9333EA" />
            </linearGradient>
          </defs>
          <circle cx="350" cy="350" r="320" stroke="url(#g1)" strokeWidth="1" />
          <circle cx="350" cy="350" r="260" stroke="url(#g1)" strokeWidth="1" />
          <circle cx="350" cy="350" r="200" stroke="url(#g1)" strokeWidth="1" />
        </svg>
      </div>
      <div className="container grid items-center gap-12 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">ApexByte • Web • Mobile • AI</div>
          <h1 className="font-heading text-4xl leading-tight tracking-tight md:text-6xl">
            We craft premium
            <span className="ml-3 bg-gradient-to-r from-primary to-purple bg-clip-text text-transparent">{display}</span>
            <span className="ml-2">faster — and better</span>
          </h1>
          <p className="mt-5 max-w-xl text-slate-600">
            We help startups and brands ship user‑loved products. From strategy and design to development and launch — we handle
            the heavy lifting so you can focus on growth.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {['Next.js', 'React Native', 'Shopify', 'AI / ML'].map((t) => (
              <span key={t} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm">{t}</span>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="#contact"
              onClick={() => track('cta_click', { source: 'hero', label: 'free_quote' })}
              className="rounded-2xl bg-slate-900 px-5 py-3 text-white shadow-glow transition-transform will-change-transform hover:-translate-y-0.5 hover:opacity-95"
            >
              Get a free quote
            </a>
            <a
              href="#portfolio"
              onClick={() => track('cta_click', { source: 'hero', label: 'see_work' })}
              className="rounded-2xl border border-slate-200 px-5 py-3 transition-transform will-change-transform hover:-translate-y-0.5 hover:shadow-soft"
            >
              See our work
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200/70 shadow-soft bg-white">
            <div className="relative h-64 overflow-hidden sm:h-72 md:h-96 lg:h-[28rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={projIndex}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={projectImages[projIndex].src}
                    alt={projectImages[projIndex].title}
                    loading="eager"
                    decoding="async"
                    fetchPriority={projIndex === 0 ? "high" : "auto"}
                    className="h-full w-full object-cover will-change-transform"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {projectImages[projIndex].title}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {/* Floating stat chips */}
          
          
          <div className="absolute -bottom-6 -left-6 h-14 w-14 rounded-2xl bg-highlight/80 blur-md" />
        </motion.div>
      </div>
    </section>
  );
}
