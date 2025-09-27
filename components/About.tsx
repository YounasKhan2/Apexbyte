"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section bg-surface-subtle">
  <div className="container grid items-center gap-8 md:gap-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="font-heading text-3xl md:text-4xl">About CubixByte</h2>
          <p className="mt-4 text-slate-600 max-w-prose">
            <b>CubixByte</b> is a next-generation software agency dedicated to building world-class web, mobile, AI, and e-commerce solutions for startups and enterprises. Our mission is to empower ambitious businesses with technology that drives real results.<br /><br />
            Founded by a team of passionate engineers, designers, and strategists, CubixByte blends deep technical expertise with creative vision. We believe in transparency, measurable outcomes, and long-term partnerships. Every project is a collaboration—your goals become our goals.<br /><br />
            <b>Our values:</b> <br />
            <ul className="list-disc ml-6">
              <li>Client-first mindset: Your success is our priority.</li>
              <li>Craftsmanship: We obsess over quality, usability, and performance.</li>
              <li>Innovation: We embrace new technologies to keep you ahead.</li>
              <li>Integrity: Honest advice, clear communication, and ethical work.</li>
            </ul>
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
            <div className="rounded-2xl border border-slate-200 bg-white p-4"><div className="font-heading text-xl">50+</div>projects delivered</div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4"><div className="font-heading text-xl">10+</div>expert team members</div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4"><div className="font-heading text-xl">Global</div>client base</div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="relative glass rounded-3xl p-8 shadow-soft">
            <img
              src="/office.jpg"
              alt="CubixByte office"
              className="h-56 xs:h-60 sm:h-64 md:h-72 lg:h-80 w-full rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute -bottom-4 -right-4 h-12 w-12 rounded-2xl bg-highlight/80 blur-md" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
