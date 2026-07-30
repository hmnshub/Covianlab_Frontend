"use client";

import { motion } from "framer-motion";
import { Globe, Heart, BookOpen, Cpu } from "lucide-react";

const benefits = [
  { icon: Globe, title: "Remote-First", desc: "Work from the void, or your couch. Global, asynchronous flow." },
  { icon: Heart, title: "Health & Wellness", desc: "Premium coverage and mental health stipends for clarity." },
  { icon: BookOpen, title: "Learning Stipends", desc: "Annual lab budget for conferences, courses, and curiosities." },
  { icon: Cpu, title: "Tech Stack", desc: "Latest hardware and enterprise licenses of your choice." },
];

export default function LabEcosystem() {
  return (
    <section className="py-24 bg-transparent border-t border-white/5 relative z-10">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            The Lab Ecosystem
          </h2>
          <p className="text-neutral-400 text-lg">
            Engineered to support the high-performance digital artisan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all"
              >
                <div className="mb-6 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-neutral-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {b.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}