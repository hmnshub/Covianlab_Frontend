"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Activity, Code2, Smartphone, Cpu, Database } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// --- ABSTRACT UI VISUALS FOR BENTO CARDS ---
const SaasDashboard = () => (
  <div className="absolute inset-0 p-8 flex items-end justify-center pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-700">
    <div className="w-[85%] h-[60%] rounded-t-2xl bg-white/[0.02] border-t border-x border-white/10 p-5 flex flex-col gap-4 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-cyan-500/10 to-transparent" />
      <div className="w-full h-4 rounded-full bg-white/5 relative z-10" />
      <div className="flex gap-4 h-full relative z-10">
        <div className="w-1/3 h-full rounded-lg bg-white/5" />
        <div className="flex-1 h-full flex flex-col gap-3">
          <div className="w-full h-10 rounded-lg bg-white/5" />
          <div className="w-full h-full rounded-lg bg-white/5" />
        </div>
      </div>
    </div>
  </div>
);

const AppWireframe = () => (
  <div className="absolute inset-0 p-8 flex flex-col items-end justify-start pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-700">
    <div className="w-1/2 h-[90%] rounded-[2rem] bg-white/[0.02] border border-white/10 p-4 flex flex-col gap-4 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#d94814]/10 to-transparent" />
      <div className="w-1/3 h-2 mx-auto rounded-full bg-white/20 mb-2 relative z-10" />
      <div className="w-full h-12 rounded-xl bg-white/5 relative z-10" />
      <div className="w-3/4 h-6 rounded-xl bg-white/5 relative z-10" />
      <div className="w-full flex-1 rounded-t-xl bg-white/5 relative z-10 mt-auto" />
    </div>
  </div>
);

// --- DATA ARRAYS ---
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
    gridClass: "md:col-span-2 lg:col-span-2",
    visual: SaasDashboard,
    glowTheme: "cyan", 
    delay: 0.1,
  },
  {
    title: "Hybrid Mobile Apps",
    desc: "One codebase, two platforms. High-performance iOS and Android applications designed for seamless multi-device experiences.",
    icon: Smartphone,
    gridClass: "md:col-span-1 lg:row-span-2",
    visual: AppWireframe,
    glowTheme: "orange",
    delay: 0.2,
  },
  {
    title: "AI Workflows",
    desc: "Integrate intelligent LLMs and machine learning models directly into your operations to automate heavy lifting.",
    icon: Cpu,
    gridClass: "md:col-span-1",
    glowTheme: "orange",
    delay: 0.3,
  },
  {
    title: "Data Intelligence",
    desc: "Stop guessing. We build custom data pipelines and analytics systems that turn raw metrics into actionable growth strategies.",
    icon: Database,
    gridClass: "md:col-span-1 md:col-span-1",
    glowTheme: "cyan",
    delay: 0.4,
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Increased slightly to 2000ms because the overlapping transition makes it feel much faster inherently
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      
      {/* ========================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================= */}
      <section className="relative pt-32 md:pt-40 pb-16 px-6 max-w-screen-xl mx-auto">
        <div className="relative z-10 max-w-5xl">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.5 }}
            className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]"
          >
            <motion.span 
              animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" 
            />
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-neutral-300">
              Now Accepting New Projects
            </span>
          </motion.div>

          <h1 className="text-[2.75rem] sm:text-6xl md:text-[5.5rem] font-bold tracking-tighter leading-[1.1] mb-4 md:mb-6">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="block text-white"
            >
              We engineer
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="block text-white"
            >
              scalable solutions for
            </motion.span>
            
            {/* Added 3D perspective to the container */}
            <span 
              className="block text-[#d94814] relative mt-1 md:mt-2 h-[130px] sm:h-[80px] md:h-[120px] w-full"
              style={{ perspective: "1000px" }}
            >
              {/* UPDATED: Removed mode="wait" completely. They now animate over each other seamlessly! */}
              <AnimatePresence>
                <motion.span
                  key={index}
                  // Tighter Y rotation and blur so it looks sleek, not messy
                  initial={{ y: 50, opacity: 0, rotateX: -80, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, rotateX: 0, filter: "blur(0px)" }}
                  exit={{ y: -50, opacity: 0, rotateX: 80, filter: "blur(8px)" }}
                  // Premium Apple-style bezier curve easing instead of a bouncy spring
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "50% 50%" }}
                  className="absolute left-0 w-full"
                >
                  {rotatingPhrases[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-base md:text-xl text-neutral-400 leading-relaxed max-w-2xl mb-10"
          >
            From launching high-velocity startups to architecting enterprise data pipelines. CovianLab is the technical engine behind your growth. Built for speed, engineered for scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
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

      {/* ========================================= */}
      {/* 2. BENTO GRID SECTION (Untouched) */}
      {/* ========================================= */}
      <section className="py-20 px-6 max-w-screen-xl mx-auto relative z-10">
        
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:auto-rows-[320px]">
          {capabilities.map((item) => {
            const Icon = item.icon;
            const Visual = item.visual;
            
            const borderHover = item.glowTheme === "cyan" ? "md:hover:border-cyan-500/40" : "md:hover:border-[#d94814]/40";
            const glowBg = item.glowTheme === "cyan" ? "bg-cyan-500/5 group-hover:bg-cyan-500/10" : "bg-[#d94814]/5 group-hover:bg-[#d94814]/10";
            const iconGlow = item.glowTheme === "cyan" ? "md:group-hover:text-cyan-400 md:group-hover:bg-cyan-500/10" : "md:group-hover:text-[#d94814] md:group-hover:bg-[#d94814]/10";

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: item.delay }}
                className={`group relative bg-[#09090b]/80 backdrop-blur-md border border-white/10 ${borderHover} rounded-3xl p-8 transition-all duration-500 overflow-hidden flex flex-col justify-end ${item.gridClass}`}
              >
                <div className={`absolute top-0 right-0 w-48 h-48 blur-[60px] pointer-events-none transition-colors duration-500 ${glowBg}`} />
                
                {Visual && <Visual />}
                
                <div className="relative z-10 w-full max-w-[90%] mt-20">
                  <div className={`mb-6 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-300 ${iconGlow}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}