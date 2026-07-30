"use client";

import { motion } from "framer-motion";
import { Zap, Flag, Focus, Rocket } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Momentum over policy",
    desc: "We favor decisive action and continuous movement over rigid bureaucratic frameworks.",
  },
  {
    icon: Flag,
    title: "Outcomes over activity",
    desc: "Impact is our metric. We celebrate the results achieved, not the hours spent in motion.",
  },
  {
    icon: Focus,
    title: "Clarity over noise",
    desc: "In a complex world, we strive for simple truths and focused communication.",
  },
  {
    icon: Rocket,
    title: "Void Engineering",
    desc: "We don't fear the digital void; we fill it with purpose-built innovation.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-transparent border-t border-white/5 relative z-10">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        
        {/* Top Header: Balanced & Full-Width */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 block mb-3">
              Our Core Ethos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Guided by Culture.
            </h2>
          </div>
          <p className="text-neutral-400 text-lg max-w-xl leading-relaxed">
            We believe that how we work is as important as what we build. Our culture defines our trajectory.
          </p>
        </div>

        {/* 4-Column Balanced Grid (No Empty Spaces) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                // 👉 POP-OUT HOVER ANIMATION & SOLID OPAQUE BACKGROUND
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  borderColor: "rgba(255, 255, 255, 0.25)",
                  boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.9)",
                }}
                className="relative bg-[#0a0d14] border border-white/10 rounded-3xl p-8 transition-colors duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {v.title}
                  </h3>
                </div>
                
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}