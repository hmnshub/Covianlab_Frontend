"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 px-6 max-w-screen-xl mx-auto overflow-hidden">
      <div className="relative z-10 max-w-4xl">
        
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          <span className="text-xs font-medium uppercase tracking-widest text-neutral-300">
            Now Accepting New Projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[clamp(3rem,8vw,6.5rem)] font-bold tracking-tighter leading-[1.02] text-white mb-8"
        >
          We Build Products <br />
          <span className="text-white">That Drive</span> <br />
          <span className="text-neutral-500">Growth.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mb-12"
        >
          From custom websites and mobile apps to data-driven marketing campaigns, CovianLab provides the complete technology stack to scale your business.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center gap-4"
        >
          {/* 👉 Start Your Project with Balanced Burnt Orange Tone */}
          <Link href="/contact">
            <button className="flex items-center gap-2 bg-[#d94814] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#c23d10] hover:scale-105 transition-all shadow-[0_0_25px_rgba(217,72,20,0.3)] cursor-pointer">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </button>
          </Link>

          {/* 👉 Working Explore Services Link */}
          <Link href="/services">
            <button className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
              <Activity className="w-4 h-4 text-cyan-400" /> Explore Services
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}