"use client";

import { motion } from "framer-motion";

export default function TeamHero() {
  return (
    <header className="relative pt-36 pb-10 overflow-hidden bg-[#0B0F17]">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[80%] bg-cyan-500/10 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="w-10 h-[2px] bg-cyan-400" />
            <span className="text-xs font-label uppercase tracking-widest text-cyan-400 font-bold">
              The Architect's Guild
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="text-[clamp(3rem,8vw,5.5rem)] font-headline font-black leading-[1.05] tracking-tighter text-white max-w-2xl drop-shadow-[0_0_15px_rgba(34,211,238,0.1)]"
          >
            The Minds <br /> Behind <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">the Magic.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-10 pl-6 border-l-2 border-cyan-400/50 max-w-xl"
          >
            <p className="text-lg text-slate-400 leading-relaxed">
              We are a collective of digital architects, data sorcerers, and
              strategic visionaries committed to engineering the future of
              decentralized intelligence.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Abstract Geometric Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hidden lg:block flex-1 relative w-full h-[350px]"
        >
          {/* Rotating Rings */}
          <div className="absolute inset-4 border border-white/5 rounded-full border-dashed animate-[spin_60s_linear_infinite] opacity-50" />
          <div className="absolute inset-16 border border-cyan-400/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
          
          {/* Center Cube Element */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-[#161f30] rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(34,211,238,0.1)] flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-500 cursor-default">
               <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                 <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                 <polyline points="2 17 12 22 22 17"></polyline>
                 <polyline points="2 12 12 17 22 12"></polyline>
               </svg>
            </div>
          </div>
        </motion.div>

      </div>
    </header>
  );
}
