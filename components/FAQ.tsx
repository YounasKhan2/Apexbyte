"use client";
import { useState } from "react";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const defaultFaqs: FAQItem[] = [
  {
    id: "q1",
    question: "What services do you offer?",
    answer:
      "We design and build Web Apps (Next.js/React), Mobile Apps (React Native/Flutter), E‑commerce (Shopify/WordPress), and AI features/integrations.",
  },
  {
    id: "q2",
    question: "How do you price projects?",
    answer:
      "We work fixed‑price for well‑defined scopes and time‑and‑materials for evolving work. Every proposal includes scope, timeline, and milestones.",
  },
  {
    id: "q3",
    question: "How quickly can you start?",
    answer:
      "Usually within 1–2 weeks. For urgent engagements we can assemble a focused squad sooner, depending on availability.",
  },
  {
    id: "q4",
    question: "What does your process look like?",
    answer:
      "Discovery → Scope → Design → Build → QA → Launch. Weekly demos, async updates, and a shared tracker keep everything transparent.",
  },
  {
    id: "q5",
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes. We adapt communication, documentation, and governance to fit each organization—from seed‑stage startups to global teams.",
  },
  {
    id: "q6",
    question: "Who owns the IP?",
    answer:
      "You do. Upon final payment, all work product and IP transfer as defined in the Statement of Work.",
  },
];

export default function FAQ({ faqs = defaultFaqs }: { faqs?: FAQItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="w-full">
      <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white/80 shadow-soft backdrop-blur-sm">
        {faqs.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="">
              <button
                className={`flex w-full items-center justify-between px-6 py-5 text-left text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 ${
                  isOpen ? "bg-slate-50/60" : ""
                }`}
                aria-expanded={isOpen}
                aria-controls={`${item.id}-panel`}
                id={`${item.id}-button`}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span className="text-sm md:text-base font-medium">{item.question}</span>
                <svg
                  className={`h-4 w-4 text-slate-600 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                id={`${item.id}-panel`}
                role="region"
                aria-labelledby={`${item.id}-button`}
                className={`grid overflow-hidden px-6 transition-all duration-200 ease-out ${
                  isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0 text-sm leading-relaxed text-slate-600">{item.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
