"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
  <section id="about" className="section bg-surface-subtle">
      <div className="container grid items-center gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="font-heading text-3xl md:text-4xl">About us</h2>
          <p className="mt-4 text-slate-600 max-w-prose">
            We are a senior team of designers and engineers partnering with founders and enterprises to ship polished products, faster.
            We value clarity, craft, and measurable outcomes.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
            <div className="rounded-2xl border border-slate-200 bg-white p-4"><div className="font-heading text-xl">50+ </div>projects shipped</div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4"><div className="font-heading text-xl">8 yrs</div>avg experience</div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4"><div className="font-heading text-xl">24/7</div>support window</div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="relative glass rounded-3xl p-8 shadow-soft">
            <div className="h-56 rounded-2xl bg-gradient-to-br from-primary/20 to-purple/20" />
            <div className="absolute -bottom-4 -right-4 h-12 w-12 rounded-2xl bg-highlight/80 blur-md" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
