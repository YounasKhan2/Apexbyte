"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
const FAQ = dynamic(() => import("./FAQ"), { ssr: false });

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
  <section className="section" id="testimonials">
      <div className="container">
  <div className="grid gap-8 md:gap-10 lg:grid-cols-2">
          {/* Left: FAQs */}
          <div>
            <FAQ />
          </div>
          {/* Right: Testimonials slider */}
          <div className="relative mx-auto w-full max-w-xl md:max-w-none">
            <h2 className="mb-3 font-heading text-3xl md:text-4xl">What clients say</h2>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-soft backdrop-blur-sm"
              >
                <div className="text-slate-800 leading-relaxed">
                  <span className="text-primary">“</span>
                  {testimonials[index].text}
                  <span className="text-primary">”</span>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    loading="lazy"
                    src={testimonials[index].avatar}
                    alt={testimonials[index].name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <div className="font-heading text-sm text-slate-900">{testimonials[index].name}</div>
                    <div className="text-xs text-slate-600">{testimonials[index].role}</div>
                  </div>
                </div>
                {/* Controls */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex gap-2">
                    <button
                      aria-label="Previous testimonial"
                      className="rounded-full border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-50"
                      onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <button
                      aria-label="Next testimonial"
                      className="rounded-full border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-50"
                      onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-1">
                    {testimonials.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-primary" : "w-2 bg-slate-300"}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
