"use client";

import { motion } from "framer-motion";

export default function PortfolioHero() {
  return (
    <header className="relative pt-36 pb-16 overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-15%] right-[-5%] w-[45%] h-[70%] bg-primary-container/6 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="w-10 h-[2px] bg-primary-container" />
          <span className="text-xs font-label uppercase tracking-widest text-primary-container font-bold">
            Portfolio Exhibition
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="text-[clamp(2.8rem,7vw,5.5rem)] font-headline font-black leading-[1.05] tracking-tighter text-glow max-w-3xl"
        >
          Showcasing Projects,
          <br />
          Skills, and Results
        </motion.h1>

        {/* Underline accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="mt-4 w-20 h-1 signature-gradient rounded-full"
        />
      </div>
    </header>
  );
}
