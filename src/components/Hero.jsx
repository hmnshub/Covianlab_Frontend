"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Simplified array: Removed heavy jargon, kept it universally understandable
const rotatingPhrases = [
  "Digital Transformation.",
  "Custom Websites.",
  "Management Systems.",
  "System Maintenance.",
  "Mobile Apps.",
  "Data & AI Workflows."
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 md:pt-40 pb-20 px-6 max-w-screen-xl mx-auto overflow-hidden">
      <div className="relative z-10 max-w-5xl">
        
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

        {/* Dynamic Headline */}
        <h1 className="text-[2.75rem] sm:text-6xl md:text-[5.5rem] font-bold tracking-tighter leading-[1.1] mb-4 md:mb-6">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="block text-white"
          >
            We engineer
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="block text-white"
          >
            scalable solutions for
          </motion.span>
          
          <span className="block text-[#d94814] relative mt-1 md:mt-2 h-[130px] sm:h-[80px] md:h-[120px] w-full">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute left-0 w-full"
              >
                {rotatingPhrases[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        
        {/* Modernized Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-base md:text-xl text-neutral-400 leading-relaxed max-w-2xl mb-10"
        >
          From launching high-velocity startups to architecting scalable enterprise systems. CovianLab is the technical engine behind your growth. Built for speed, engineered for scale.
        </motion.p>
        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 bg-[#d94814] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#c23d10] transition-colors shadow-[0_0_25px_rgba(217,72,20,0.3)] cursor-pointer"
            >
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>

          <Link href="/services" className="w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
            >
              <Activity className="w-4 h-4 text-cyan-400" /> Explore Capabilities
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Hero Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0, type: "spring", bounce: 0.4 }}
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