"use client";

import { motion } from "framer-motion";
import { Zap, MessageSquare, Target } from "lucide-react";

const corePillars = [
  {
    icon: Zap,
    title: "Momentum over Policy",
    desc: "We move fast, break barriers, and prioritize execution over bureaucracy.",
  },
  {
    icon: MessageSquare,
    title: "Building over Talking",
    desc: "We are a shop of makers. We let the shipping cycle do the talking.",
  },
  {
    icon: Target,
    title: "Outcomes over Activity",
    desc: "Every line of code and ad spend is measured strictly by ROI.",
  },
];

export default function Mission() {
  return (
    <section id="mission" className="pt-4 md:pt-12 pb-20 px-6 max-w-screen-xl mx-auto bg-transparent text-white relative z-10">
      
      {/* Section Header Shifted Up */}
      <div className="mb-10 text-center md:text-left max-w-xl">
        <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#d94814] uppercase bg-[#d94814]/10 border border-[#d94814]/30 px-4 py-1.5 rounded-full inline-block mb-3">
          Core Philosophy
        </span>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
          Engineered for velocity and scale.
        </h2>
      </div>

      {/* Top 3 Core Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {corePillars.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                scale: 1.03,
                y: -8,
                boxShadow: "0 25px 50px -15px rgba(0, 0, 0, 0.9)",
              }}
              className="bg-[#12141a] border border-white/10 hover:border-white/30 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="mb-6 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}