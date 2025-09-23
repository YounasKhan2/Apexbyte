"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { name: "Ava Thompson", role: "CMO, FintechCo", text: "ApexByte moved from idea to launch in 10 weeks. The polish is unreal.", avatar: "/avatars/1.svg" },
  { name: "Liam Chen", role: "CTO, HealthIQ", text: "They feel like an internal team. Pragmatic, fast, and thoughtful.", avatar: "/avatars/2.svg" },
  { name: "Sofia Rossi", role: "Founder, Marketly", text: "Best partner we've worked with. Clear process and excellent outcomes.", avatar: "/avatars/3.svg" },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i: number) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h2 className="font-heading text-3xl md:text-4xl mb-10">What clients say</h2>
        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }} className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-surface-subtle p-8 shadow-soft">
              <div className="text-slate-800 leading-relaxed">
                <span className="text-primary">“</span>
                {testimonials[index].text}
                <span className="text-primary">”</span>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <img loading="lazy" src={testimonials[index].avatar} alt={testimonials[index].name} className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/20" />
                <div>
                  <div className="font-heading text-sm text-slate-900">{testimonials[index].name}</div>
                  <div className="text-xs text-slate-600">{testimonials[index].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
