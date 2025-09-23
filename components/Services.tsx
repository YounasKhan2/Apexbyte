"use client";
import { motion } from "framer-motion";
import {
  FiCode,
  FiSmartphone,
  FiCpu,
  FiTrendingUp,
  FiPenTool,
  FiShoppingCart,
  FiGlobe,
  FiLayers,
  FiZap,
  FiServer,
  FiGrid,
} from "react-icons/fi";
import { FaReact, FaNodeJs, FaPhp, FaJava, FaShopify, FaWordpress, FaMagento } from "react-icons/fa";
import { SiFlutter, SiCplusplus } from "react-icons/si";

const services = [
  { icon: FiGlobe, title: "Web Development", desc: "Modern, fast, SEO-friendly websites and apps.", accent: "from-primary/10 to-primary/0" },
  { icon: FaReact, title: "React", desc: "SPA/SSR with Next.js & React best practices.", accent: "from-purple/10 to-purple/0" },
  { icon: FiSmartphone, title: "React Native", desc: "High-performance cross‑platform mobile apps.", accent: "from-highlight/10 to-highlight/0" },
  { icon: SiFlutter, title: "Flutter Mobile Development", desc: "Pixel‑perfect multi‑platform experiences.", accent: "from-primary/10 to-primary/0" },
  { icon: FiCode, title: "Custom Coding", desc: "Tailor‑made features & integrations.", accent: "from-surface-subtle to-transparent" },
  { icon: FaShopify, title: "Shopify Store Development", desc: "Conversion‑focused storefronts.", accent: "from-purple/10 to-purple/0" },
  { icon: FaShopify, title: "Shopify Theme Customization", desc: "Theme tweaks to full redesigns.", accent: "from-primary/10 to-primary/0" },
  { icon: FaWordpress, title: "WordPress Development", desc: "Fast, secure, maintainable sites.", accent: "from-surface-subtle to-transparent" },
  { icon: FiPenTool, title: "Web Design", desc: "Elegant, brand‑consistent UI.", accent: "from-primary/10 to-primary/0" },
  { icon: FiLayers, title: "UI/UX Design", desc: "Research → wireframes → polished UI.", accent: "from-purple/10 to-purple/0" },
  { icon: FiShoppingCart, title: "E‑commerce Development", desc: "Shopify, Magento, custom stacks.", accent: "from-highlight/10 to-highlight/0" },
  { icon: FiCode, title: "HTML/CSS/JavaScript", desc: "Clean, accessible, and responsive.", accent: "from-surface-subtle to-transparent" },
  { icon: FaPhp, title: "PHP", desc: "API & backends with quality patterns.", accent: "from-primary/10 to-primary/0" },
  { icon: FaMagento, title: "Magento", desc: "Enterprise commerce customization.", accent: "from-purple/10 to-purple/0" },
  { icon: FaNodeJs, title: "Node.js", desc: "Performant APIs & services.", accent: "from-surface-subtle to-transparent" },
  { icon: FiCpu, title: "AI Solutions", desc: "LLM integration & automation.", accent: "from-highlight/10 to-highlight/0" },
  { icon: FiTrendingUp, title: "Digital Marketing", desc: "Strategy, content, analytics.", accent: "from-primary/10 to-primary/0" },
  { icon: FiTrendingUp, title: "Social Media Marketing", desc: "Growth across key platforms.", accent: "from-purple/10 to-purple/0" },
  { icon: FiTrendingUp, title: "E‑commerce Marketing", desc: "CRO, funnels, retention.", accent: "from-highlight/10 to-highlight/0" },
  { icon: FiGrid, title: "Social Media Management", desc: "Plan, create, schedule, report.", accent: "from-surface-subtle to-transparent" },
  { icon: FiZap, title: "Paid Ads", desc: "Google, Meta, TikTok, LinkedIn.", accent: "from-primary/10 to-primary/0" },
  { icon: FiZap, title: "Social Media Campaigns", desc: "Concept to execution.", accent: "from-purple/10 to-purple/0" },
  { icon: SiCplusplus, title: "C++", desc: "High‑performance modules.", accent: "from-surface-subtle to-transparent" },
  { icon: FaJava, title: "Java", desc: "Reliable enterprise backends.", accent: "from-primary/10 to-primary/0" },
];

export default function Services() {
  return (
    <section id="services" className="section bg-surface-subtle">
      <div className="container">
        <div className="mb-8">
          <h2 className="font-heading text-3xl md:text-4xl">Services</h2>
          <p className="text-slate-600 mt-2">A clear, comprehensive stack — visible at a glance.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition will-change-transform hover:-translate-y-1 hover:shadow-glow"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${s.accent}`} />
              <div className="relative flex items-center gap-3">
                <s.icon className="h-5 w-5 text-slate-800" aria-hidden="true" focusable="false" />
                <h3 className="font-heading text-base md:text-lg">{s.title}</h3>
              </div>
              <p className="relative mt-2 text-xs md:text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
