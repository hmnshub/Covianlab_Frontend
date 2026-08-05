"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CareersHero() {
  return (
    <header className="relative w-full min-h-[70vh] flex items-center pt-32 pb-16 overflow-hidden bg-transparent z-10">
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-8 w-full">
        
        {/* Stylish Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-3 pr-5 pl-2 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-white hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 group shadow-lg"
          >
            {/* Icon Circle */}
            <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#d94814] group-hover:border-[#d94814] group-hover:shadow-[0_0_15px_rgba(217,72,20,0.6)] transition-all duration-300">
              <ArrowLeft className="w-3.5 h-3.5 text-neutral-300 group-hover:text-white group-hover:-translate-x-0.5 transition-transform" />
            </div>
            Return to Base
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          <span className="text-[11px] font-medium uppercase tracking-widest text-neutral-300">
            Open Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[1.05] tracking-tighter max-w-4xl text-white mb-8"
        >
          Join the Architects <br />
          of the <span className="text-neutral-500">Digital Void.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
            We operate at the bleeding edge of technology, marketing, and
            predictive analytics. CovianLab isn't just a studio; it's a
            collective for those who find beauty in complex data and clean code.
          </p>
        </motion.div>
      </div>
    </header>
  );
}