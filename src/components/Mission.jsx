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
    <section className="py-28 px-6 max-w-screen-xl mx-auto bg-transparent text-white relative z-10">
      
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