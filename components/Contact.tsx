"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { FiMail, FiPhone, FiMessageCircle, FiArrowRight, FiCheck } from "react-icons/fi";

type Step = 1 | 2 | 3;

const SERVICE_OPTIONS = [
  "Web Development",
  "React / Next.js",
  "React Native",
  "Flutter",
  "E‑commerce (Shopify/Magento)",
  "WordPress",
  "Custom Coding",
  "AI Solutions",
  "Digital Marketing",
];

const BUDGET_OPTIONS = ["< $3k", "$3k–$10k", "$10k–$25k", "$25k+", "Undecided"];
const TIMELINE_OPTIONS = ["ASAP", "2–4 weeks", "1–3 months", "Flexible"];

function Chip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border px-3 py-2 text-sm transition ${
        selected ? "border-primary bg-primary/10 text-slate-900" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
      }`}
    >
      <span className="inline-flex items-center gap-2">
        {selected && <FiCheck className="h-4 w-4 text-primary" />}
        {label}
      </span>
    </button>
  );
}

export default function Contact() {
  const [step, setStep] = useState<Step>(1);
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const canContinue1 = services.length > 0 && !!budget && !!timeline;
  const canSubmit = name.trim().length > 1 && /.+@.+\..+/.test(email) && message.trim().length > 5;
  const mailto = useMemo(() => {
    const subject = encodeURIComponent("New Project Inquiry — ApexByte");
    const body = encodeURIComponent(
      `Services: ${services.join(", ")}\nBudget: ${budget}\nTimeline: ${timeline}\n\nMessage: ${message}\n\nName: ${name}\nEmail: ${email}`
    );
    return `mailto:apexbyte63@gmail.com?subject=${subject}&body=${body}`;
  }, [services, budget, timeline, message, name, email]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, services, budget, timeline }),
      });
      if (res.ok) {
        setSent(true);
        setStep(3);
      } else {
        // Graceful fallback to mailto if server not configured
        window.location.href = mailto;
        setTimeout(() => setSent(true), 300);
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section bg-surface-subtle">
      <div className="container grid gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="font-heading text-3xl md:text-4xl">Let’s build something great</h2>
          <p className="mt-3 text-slate-600">Tell us about your goals. We’ll reply within 24 hours.</p>

          <div className="mt-6 mb-2 flex items-center gap-2 text-xs text-slate-500">
            <div className={`h-2 w-2 rounded-full ${step >= 1 ? "bg-primary" : "bg-slate-300"}`} />
            <div className={`h-2 w-2 rounded-full ${step >= 2 ? "bg-primary" : "bg-slate-300"}`} />
            <div className={`h-2 w-2 rounded-full ${step >= 3 ? "bg-primary" : "bg-slate-300"}`} />
          </div>

          <form className="mt-2 grid gap-6" onSubmit={onSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
                  <div className="rounded-3xl border border-slate-200 bg-white p-5">
                    <div className="font-heading text-slate-900">Project basics</div>
                    <div className="mt-4">
                      <div className="text-xs uppercase tracking-wide text-slate-500">Services</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {SERVICE_OPTIONS.map((opt) => (
                          <Chip key={opt} label={opt} selected={services.includes(opt)} onClick={() => setServices((vals) => (vals.includes(opt) ? vals.filter((v) => v !== opt) : [...vals, opt]))} />
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <div className="text-xs uppercase tracking-wide text-slate-500">Budget</div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {BUDGET_OPTIONS.map((b) => (
                            <Chip key={b} label={b} selected={budget === b} onClick={() => setBudget(b)} />
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wide text-slate-500">Timeline</div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {TIMELINE_OPTIONS.map((t) => (
                            <Chip key={t} label={t} selected={timeline === t} onClick={() => setTimeline(t)} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 flex justify-end">
                      <button type="button" disabled={!canContinue1} onClick={() => setStep(2)} className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm text-white ${canContinue1 ? "bg-slate-900 hover:shadow-glow" : "bg-slate-400"}`}>
                        Continue <FiArrowRight />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
                  <div className="rounded-3xl border border-slate-200 bg-white p-5">
                    <div className="font-heading text-slate-900">Your details</div>
                    <div className="mt-4 grid gap-3">
                      <input aria-label="Name" value={name} onChange={(e) => setName(e.target.value)} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30" placeholder="Name" />
                      <input aria-label="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30" placeholder="Email" />
                      <textarea aria-label="Message" value={message} onChange={(e) => setMessage(e.target.value)} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30" placeholder="Tell us about your project" rows={5} />
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <button type="button" onClick={() => setStep(1)} className="text-sm text-slate-600">Back</button>
                      <button type="submit" disabled={!canSubmit || sending} className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm text-white ${canSubmit ? "bg-primary hover:opacity-95" : "bg-slate-400"}`}>
                        {sending ? "Sending..." : "Send message"}
                      </button>
                    </div>
                    <div className="mt-3 text-xs text-slate-500">We’ll never share your info. You’ll hear from us within 24 hours.</div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
                  <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center">
                    <div className="mx-auto mb-3 h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-purple" />
                    <div className="font-heading text-xl">Thanks — we’ll be in touch!</div>
                    <div className="mt-2 text-slate-600">We’ve received your details and will get back within a day.</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 md:space-y-0 md:grid md:grid-rows-[1fr_auto_auto_1fr] md:gap-3"
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:row-start-2">
            <div className="font-heading">Contact info</div>
            <div className="mt-2 text-sm text-slate-700"><a className="link-underline" href="mailto:apexbyte63@gmail.com">apexbyte63@gmail.com</a></div>
            <div className="text-sm text-slate-700"><a className="link-underline" href="tel:+923130812324">+92 313 0812324</a></div>
            <div className="text-sm text-slate-600">Pakistan — serving clients worldwide</div>
          </div>
          <div className="grid grid-cols-3 gap-3 md:row-start-3">
            <a className="group flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-3 hover:shadow-glow" href="mailto:apexbyte63@gmail.com" aria-label="Email">
              <FiMail className="h-5 w-5 text-slate-700 group-hover:text-primary" /> Email
            </a>
            <a className="group flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-3 hover:shadow-glow" href="tel:+923130812324" aria-label="Phone">
              <FiPhone className="h-5 w-5 text-slate-700 group-hover:text-primary" /> Call
            </a>
            <a className="group flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-3 hover:shadow-glow" href="https://wa.me/923130812324?text=Hi%20ApexByte%2C%20I%27d%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FiMessageCircle className="h-5 w-5 text-slate-700 group-hover:text-primary" /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
