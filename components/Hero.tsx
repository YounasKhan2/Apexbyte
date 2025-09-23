"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Web Apps", "Mobile Apps", "AI Solutions"];
const projectImages = [1, 2, 3, 4, 5, 6];

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
      <div className="container grid gap-10 md:grid-cols-2 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h1 className="font-heading text-4xl md:text-6xl leading-tight tracking-tight">
            We craft premium
            <span className="ml-3 rounded-2xl bg-slate-100 px-3 py-1 text-primary shadow-inner ring-1 ring-primary/10">{display}</span>
            faster — and better
          </h1>
          <p className="mt-6 text-slate-600 max-w-xl">
            We help startups and brands ship user‑loved products. From strategy and design to development and launch — we handle the heavy lifting so you can focus on growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-2xl bg-primary text-white px-5 py-3 shadow-glow hover:opacity-95 transition-transform will-change-transform hover:-translate-y-0.5">Get a free quote</a>
            <a href="#portfolio" className="rounded-2xl border border-slate-200 px-5 py-3 hover:shadow-soft transition-transform will-change-transform hover:-translate-y-0.5">See our work</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
          <div className="rounded-3xl overflow-hidden shadow-soft">
            <div className="relative h-72 sm:h-80 md:h-96 lg:h-[28rem] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={projIndex}
                  initial={{ y: "100%", opacity: 0.75 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0.75 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <motion.img
                    src={`/portfolio/${projectImages[projIndex]}.jpg`}
                    alt={`Project ${projectImages[projIndex]}`}
                    loading="eager"
                    className="h-full w-full object-cover will-change-transform"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.08 }}
                    transition={{ duration: 6, ease: "linear" }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  <div className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">Project {projectImages[projIndex]}</div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 h-14 w-14 rounded-2xl bg-highlight/80 blur-md" />
        </motion.div>
      </div>
    </section>
  );
}
