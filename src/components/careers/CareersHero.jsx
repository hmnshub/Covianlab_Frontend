"use client";

import { motion } from "framer-motion";

export default function CareersHero() {
  return (
    <header className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest via-surface to-surface" />
        <div className="absolute top-[-15%] right-[-5%] w-[55%] h-[70%] bg-primary-container/8 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-[-10%] w-[40%] h-[50%] bg-primary-container/5 blur-[100px] rounded-full" />
        <div
          className="w-full h-full opacity-10"
          style={{
            background:
              "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1600&q=60') center/cover no-repeat",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="w-10 h-[2px] bg-primary-container" />
          <span className="text-xs font-label uppercase tracking-widest text-primary-container font-bold">
            Open Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="text-[clamp(3.2rem,9vw,6.5rem)] font-headline font-black leading-[1.05] tracking-tighter max-w-4xl text-glow"
        >
          Join the Architects
          <br />
          of the <span className="text-primary-container">Digital Void.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-10 pl-6 border-l-2 border-primary-container/50 max-w-xl"
        >
          <p className="text-lg text-on-surface-variant leading-relaxed">
            We operate at the bleeding edge of technology, marketing, and
            predictive analytics. CovianLab isn't just a studio; it's a
            collective for those who find beauty in complex data and clean code.
          </p>
        </motion.div>
      </div>
    </header>
  );
}
