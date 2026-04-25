"use client";

import { motion } from "framer-motion";

export default function TeamHero() {
  return (
    <header className="relative pt-36 pb-24 overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[80%] bg-primary-container/7 blur-[130px] rounded-full" />
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
            The Architect's Guild
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="text-[clamp(3rem,8vw,5.5rem)] font-headline font-black leading-[1.05] tracking-tighter text-glow max-w-2xl"
        >
          The Minds Behind{" "}
          <span className="text-primary-container">the Magic.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-10 pl-6 border-l-2 border-primary-container/50 max-w-xl"
        >
          <p className="text-lg text-on-surface-variant leading-relaxed">
            We are a collective of digital architects, data sorcerers, and
            strategic visionaries committed to engineering the future of
            decentralized intelligence.
          </p>
        </motion.div>
      </div>
    </header>
  );
}
