"use client";

import { motion, AnimatePresence } from "framer-motion";
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
    <section className="py-28 bg-surface">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left label */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-4xl font-headline font-black tracking-tight text-on-surface leading-tight"
          >
            Common
            <br />
            Queries
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-5 text-sm text-on-surface-variant leading-relaxed"
          >
            Fast-track your understanding of our process and partnership model.
          </motion.p>
        </div>

        {/* FAQ items */}
        <div className="lg:col-span-2 space-y-0 divide-y divide-outline-variant/20">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
              >
                <span className="font-headline font-bold text-on-surface group-hover:text-primary-container transition-colors pr-8">
                  {faq.q}
                </span>
                <div className="flex-shrink-0 w-6 h-6 text-primary-container">
                  {open === i ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-on-surface-variant leading-relaxed text-sm pr-12">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
