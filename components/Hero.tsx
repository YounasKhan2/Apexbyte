"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Web Apps", "Mobile Apps", "AI Solutions"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(words[0]);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

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
          </h1>
          <p className="mt-6 text-slate-600 max-w-xl">
            A boutique team delivering delightful products for ambitious brands. Web, mobile, and intelligent systems — designed to scale.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#contact" className="rounded-2xl bg-primary text-white px-5 py-3 shadow-glow hover:opacity-95 transition-transform will-change-transform hover:-translate-y-0.5">Start a project</a>
            <a href="#portfolio" className="rounded-2xl border border-slate-200 px-5 py-3 hover:shadow-soft transition-transform will-change-transform hover:-translate-y-0.5">See our work</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
          <div className="glass rounded-3xl p-8 shadow-soft">
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-24 rounded-2xl bg-gradient-to-br from-surface-soft to-white shadow-inner" />
              ))}
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 h-14 w-14 rounded-2xl bg-highlight/80 blur-md" />
        </motion.div>
      </div>
    </section>
  );
}
