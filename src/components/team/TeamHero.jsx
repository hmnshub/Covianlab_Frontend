"use client";

import { motion } from "framer-motion";

export default function TeamHero() {
  return (
    <header className="relative pt-36 pb-20 px-6 max-w-screen-xl mx-auto overflow-hidden bg-transparent z-10">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          <span className="text-[11px] font-medium uppercase tracking-widest text-neutral-300">
            The Architect's Guild
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.02] tracking-tighter text-white mb-8"
        >
          The Minds <br />
          <span className="text-neutral-500">Behind the Magic.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-neutral-400 leading-relaxed"
        >
          We are a collective of digital architects, data sorcerers, and
          strategic visionaries committed to engineering the future of
          decentralized intelligence.
        </motion.p>
      </div>
    </header>
  );
}