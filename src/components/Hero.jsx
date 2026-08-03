"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Animates by WORD to fix the mobile wrapping bug
const FadeInWord = ({ text, className, delayOffset = 0, showCursor = false }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delayOffset + i * 0.15, ease: "easeOut" }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
      {showCursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear", delay: delayOffset + 0.5 }}
          className="inline-block w-[0.15em] h-[0.75em] bg-[#d94814] ml-1 align-baseline"
        />
      )}
    </span>
  );
};

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 px-6 max-w-screen-xl mx-auto overflow-hidden">
      <div className="relative z-10 max-w-4xl">
        
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]"
        >
          <motion.span 
            animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" 
          />
          <span className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-neutral-300">
            Now Accepting New Projects
          </span>
        </motion.div>

        {/* Headline - Forced Block Lines to prevent mobile breaks */}
        <h1 className="text-[2.75rem] sm:text-6xl md:text-[6.5rem] font-bold tracking-tighter leading-[1.05] mb-8">
          <span className="block"><FadeInWord text="Your Complete" className="text-white" delayOffset={0.2} /></span>
          <span className="block"><FadeInWord text="Technology &" className="text-white" delayOffset={0.6} /></span>
          <span className="block"><FadeInWord text="Software Partner." className="text-neutral-500" delayOffset={1.0} showCursor={true} /></span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
          className="text-base md:text-xl text-neutral-400 leading-relaxed max-w-2xl mb-10"
        >
          From high-performance websites and mobile apps to custom software and AI integrations, CovianLab provides the complete technology stack to scale your business.
        </motion.p>

        {/* Action Buttons - Stack on mobile, inline on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 bg-[#d94814] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#c23d10] transition-colors shadow-[0_0_25px_rgba(217,72,20,0.3)] cursor-pointer"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>

          <Link href="/services" className="w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
            >
              <Activity className="w-4 h-4 text-cyan-400" /> Explore Services
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Restored Image Section - Tightened top margin for mobile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 2.0, // Waits for text to finish
          type: "spring", 
          bounce: 0.4 
        }}
        className="relative z-20 w-full mt-12 md:mt-24"
      >
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-full w-3/4 h-3/4 top-1/2 -translate-y-1/2 pointer-events-none" />
          
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <Image 
              src="/himanshuwebuild.png" 
              alt="CovianLab Architecture" 
              width={1200} 
              height={675} 
              className="w-full h-auto object-cover" 
              priority
              unoptimized
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}