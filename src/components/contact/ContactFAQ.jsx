"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is the typical project timeline?",
    a: "Standard architectural phases range from 8 to 24 weeks depending on data complexity and infrastructure requirements. We prioritize high-impact MVP delivery within the first cycle.",
  },
  {
    q: "Do you offer post-deployment support?",
    a: "We provide ongoing 'Sentinel' monitoring and optimization cycles to ensure your digital architecture evolves with your business scale.",
  },
  {
    q: "How do you handle data security?",
    a: "Security is baked into the foundation. We utilize zero-trust architecture principles and multi-layer encryption for all client data environments.",
  },
];

export default function ContactFAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 px-6 max-w-screen-xl mx-auto bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
            Common <br />
            Queries
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Fast-track your understanding of our process and partnership model.
          </p>
        </div>

        <div className="lg:col-span-2 divide-y divide-white/10 border-t border-b border-white/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
              >
                <span className="font-bold text-white text-base group-hover:text-neutral-300 transition-colors pr-8">
                  {faq.q}
                </span>
                <div className="flex-shrink-0 w-6 h-6 text-neutral-400">
                  {open === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              {open === i && (
                <div className="pb-6">
                  <p className="text-neutral-400 leading-relaxed text-sm pr-12">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}