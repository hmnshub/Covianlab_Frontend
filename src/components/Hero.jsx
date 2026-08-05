"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Activity, Code2, Smartphone, Cpu, Database, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const rotatingPhrases = [
  "Digital Transformation.",
  "Custom Websites.",
  "Management Systems.",
  "System Maintenance.",
  "Mobile Apps.",
  "Data & AI Workflows."
];

const capabilities = [
  {
    title: "Web & SaaS Platforms",
    desc: "End-to-end product engineering. We build lightning-fast web apps and custom dashboards using modern frameworks.",
    icon: Code2,
    colSpan: "md:col-span-2",
    delay: 0.1,
  },
  {
    title: "Hybrid Mobile Apps",
    desc: "One codebase. Two platforms. High-performance iOS and Android applications engineered with Flutter.",
    icon: Smartphone,
    colSpan: "md:col-span-1",
    delay: 0.2,
  },
  {
    title: "AI Workflows",
    desc: "Integrate intelligent LLMs and machine learning models directly into your operations to automate heavy lifting.",
    icon: Cpu,
    colSpan: "md:col-span-1",
    delay: 0.3,
  },
  {
    title: "Data Intelligence",
    desc: "Stop guessing. We build custom data pipelines and analytics systems that turn raw metrics into actionable growth strategies.",
    icon: Database,
    colSpan: "md:col-span-2",
    delay: 0.4,
  }
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
    <div className="relative overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 md:pt-40 pb-16 px-6 max-w-screen-xl mx-auto">
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

          {/* Universal Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-base md:text-xl text-neutral-400 leading-relaxed max-w-2xl mb-10"
          >
            From launching high-velocity startups to architecting enterprise data pipelines. CovianLab is the technical engine behind your growth. Built for speed, engineered for scale.
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
      </section>

      {/* --- BENTO GRID SECTION --- */}
      <section className="py-20 px-6 max-w-screen-xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-[#d94814] uppercase bg-[#d94814]/10 border border-[#d94814]/30 px-4 py-1.5 rounded-full inline-block mb-6"
          >
            Core Capabilities
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Built for <span className="text-neutral-500">modern founders.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-lg leading-relaxed"
          >
            We don't use templates. We engineer custom technology stacks designed to give your startup an unfair advantage in the market.
          </motion.p>
        </div>

        {/* Modern Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
                whileHover={{ y: -5 }}
                className={`relative bg-[#09090b]/80 backdrop-blur-md border border-white/10 hover:border-[#d94814]/50 rounded-3xl p-8 transition-all duration-300 group overflow-hidden ${item.colSpan}`}
              >
                {/* Subtle hover glow effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#d94814]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-8 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-[#d94814] group-hover:bg-[#d94814]/10 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-base text-neutral-400 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-sm font-bold text-[#d94814] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Explore <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}