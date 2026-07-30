"use client";

import { motion } from "framer-motion";

export default function PortfolioHero() {
  return (
    <header className="relative pt-36 pb-16 overflow-hidden bg-transparent z-10">
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          <span className="text-[11px] font-medium uppercase tracking-widest text-neutral-400">
            Success Stories
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tighter text-white max-w-3xl"
        >
          End-to-End Growth <br />
          <span className="text-neutral-500">Systems.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-lg text-neutral-400 max-w-xl leading-relaxed"
        >
          Explore how we engineer high-performance platforms, autonomous data pipelines, and scalable architectures for our partners.
        </motion.p>
      </div>
    </header>
  );
}