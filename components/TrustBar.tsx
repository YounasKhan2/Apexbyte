"use client";
import { motion } from "framer-motion";

const logos = [
  { src: "/logos/brand1.svg", alt: "Brand One" },
  { src: "/logos/brand2.svg", alt: "Brand Two" },
  { src: "/logos/brand3.svg", alt: "Brand Three" },
  { src: "/logos/brand4.svg", alt: "Brand Four" },
  { src: "/logos/brand5.svg", alt: "Brand Five" },
];

export default function TrustBar() {
  return (
    <section aria-label="Trusted by clients" className="py-8 md:py-10 bg-white">
      <div className="container">
        <div className="mb-4 text-center text-xs uppercase tracking-wider text-slate-500">Trusted by teams worldwide</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center gap-6 opacity-80">
          {logos.map((l, i) => (
            <motion.div
              key={l.alt}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center justify-center"
            >
              <img src={l.src} alt={`${l.alt} logo`} className="h-8 w-auto" loading="lazy" decoding="async" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
