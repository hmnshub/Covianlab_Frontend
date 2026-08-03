"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Lightbulb, Code2, Layout, Rocket } from "lucide-react";
import Link from "next/link";

// 1. Updated Animation: Animates by WORD instead of letter to fix the mobile wrapping bug
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

// 2. Data for our new responsive code-based Grid
const processSteps = [
  { title: "WE THINK", desc: "Strategy & Architecture", icon: Lightbulb, delay: 2.0 },
  { title: "WE BUILD", desc: "Scalable Engineering", icon: Code2, delay: 2.2 },
  { title: "WE DESIGN", desc: "Premium UI/UX", icon: Layout, delay: 2.4 },
  { title: "WE DELIVER", desc: "Launch & Growth", icon: Rocket, delay: 2.6 }
];

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

        {/* Action Buttons */}
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

      {/* 👉 NEW: Responsive 4-Step Grid (Replaces the static image) */}
      <div className="relative z-20 w-full mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        
        {/* Ambient Back Glow */}
        <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full w-full h-full top-1/2 -translate-y-1/2 pointer-events-none" />

        {processSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: step.delay, ease: "easeOut" }}
              whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
              className="group bg-[#0f1115]/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 transition-all flex items-start gap-5 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-cyan-400 group-hover:bg-cyan-400/10 transition-colors shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-500 font-medium">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}