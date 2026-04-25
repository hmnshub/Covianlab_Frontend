"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <header className="relative pt-32 pb-20 overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[80%] bg-primary-container/6 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="w-10 h-[2px] bg-primary-container" />
            <span className="text-xs font-label uppercase tracking-widest text-primary-container font-bold">
              Connect with our Architects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="text-[clamp(2.8rem,7vw,5rem)] font-headline font-black leading-[1.1] tracking-tighter text-glow"
          >
            Let's Build{" "}
            <span className="text-primary-container">Something Great</span>{" "}
            Together
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="pl-0 lg:pl-10 lg:border-l border-outline-variant/30"
        >
          <p className="text-lg text-on-surface-variant leading-relaxed">
            We transform complex data landscapes into architectural
            masterpieces. Reach out to start your digital evolution.
          </p>
        </motion.div>
      </div>
    </header>
  );
}
