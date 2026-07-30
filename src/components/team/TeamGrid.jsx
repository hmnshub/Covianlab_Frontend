"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function TeamGrid() {
  const technical = [
    {
      name: "Himanshu Kumar Singh",
      role: "Tech Analyst",
      desc: "Analyzing technical systems, optimizing platform performance, and supporting core software operations.",
    },
  ];

  return (
    <section className="py-24 bg-transparent border-t border-white/5 relative z-10">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-300">
            Technical Core
          </h2>
        </div>

        <div className="space-y-4">
          {technical.map((m) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{m.name}</h3>
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mt-1">{m.role}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-500" />
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}