"use client";

import { motion } from "framer-motion";
import { Activity, Cpu, ShieldCheck, Zap, Heart, ShoppingCart } from "lucide-react";

/* ========================================================
   UNIQUE BESPOKE VISUALIZERS (High-End & Lightweight)
======================================================== */

const NexusVisual = () => (
  <div className="relative w-full h-full bg-[#030712] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-cyan-900/20 blur-[80px]" />
    <div className="relative flex items-end gap-2 md:gap-3 h-32 md:h-48 z-10">
      {[40, 75, 45, 95, 60, 85, 50].map((h, i) => (
        <motion.div
          key={i}
          animate={{ height: [`${h}%`, `${h + 15}%`, `${h}%`] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
          className="w-4 md:w-6 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-md shadow-[0_0_15px_rgba(34,211,238,0.5)]"
        />
      ))}
    </div>
  </div>
);

const AuraVisual = () => (
  <div className="relative w-full h-full bg-[#020617] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-teal-900/20 blur-[80px]" />
    {/* Floating Glass Components */}
    <motion.div 
      animate={{ y: [-10, 10, -10] }} 
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-40 md:w-56 h-24 md:h-32 bg-teal-500/10 backdrop-blur-xl border border-teal-400/30 rounded-2xl -translate-x-12 -translate-y-8 md:-translate-x-16 md:-translate-y-12 shadow-[0_0_30px_rgba(45,212,191,0.15)] flex flex-col p-4 gap-3"
    >
      <div className="w-1/2 h-3 bg-teal-400/40 rounded-full" />
      <div className="w-3/4 h-3 bg-teal-400/20 rounded-full" />
    </motion.div>
    <motion.div 
      animate={{ y: [10, -10, 10] }} 
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-48 md:w-64 h-20 md:h-28 bg-white/[0.05] backdrop-blur-2xl border border-white/20 rounded-2xl translate-x-8 translate-y-12 flex items-center justify-between p-4 md:p-6 shadow-2xl z-10"
    >
      <div className="w-1/2 h-4 md:h-6 bg-white/20 rounded-full" />
      <div className="w-10 h-6 md:w-16 md:h-8 bg-teal-400 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.6)]" />
    </motion.div>
  </div>
);

const ZenithVisual = () => (
  <div className="relative w-full h-full bg-[#050511] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-indigo-900/20 blur-[80px]" />
    {/* Floating Fintech Card */}
    <motion.div 
      animate={{ y: [-8, 8, -8], rotateY: [-5, 5, -5] }} 
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="w-64 md:w-80 h-40 md:h-48 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(79,70,229,0.4)] border border-white/30 relative overflow-hidden z-10"
    >
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.2)_25%,transparent_30%)]" />
      <div className="w-10 h-8 md:w-12 md:h-10 bg-yellow-400/90 rounded-md shadow-inner" />
      <div className="flex justify-between items-end">
        <div className="w-32 md:w-40 h-4 bg-white/50 rounded-full" />
        <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-white/80" />
      </div>
    </motion.div>
  </div>
);

const VoidVisual = () => (
  <div className="relative w-full h-full bg-[#110505] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-rose-900/20 blur-[80px]" />
    {/* AI Radar Ping */}
    <motion.div animate={{ scale: [1, 2.5], opacity: [0.8, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }} className="absolute w-24 h-24 border-2 border-rose-500 rounded-full" />
    <motion.div animate={{ scale: [1, 2.5], opacity: [0.8, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1.25, ease: "easeOut" }} className="absolute w-24 h-24 border-2 border-rose-500 rounded-full" />
    
    <div className="relative z-10 w-6 h-6 bg-rose-500 rounded-full shadow-[0_0_30px_rgba(244,63,94,1)] flex items-center justify-center">
      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
    </div>
  </div>
);

const VitalPulseVisual = () => (
  <div className="relative w-full h-full bg-[#020d08] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-emerald-900/20 blur-[80px]" />
    <svg viewBox="0 0 200 100" className="w-[80%] h-32 md:h-48 drop-shadow-[0_0_15px_rgba(16,185,129,0.8)] z-10">
      <motion.path
        d="M 0 50 L 50 50 L 65 20 L 90 90 L 110 50 L 200 50"
        fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} 
        animate={{ pathLength: 1 }} 
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  </div>
);

const LuxeStoreVisual = () => (
  <div className="relative w-full h-full bg-[#140d02] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-amber-900/20 blur-[80px]" />
    {/* High-End Checkout Bar */}
    <div className="w-56 md:w-72 h-14 md:h-16 bg-amber-500/10 border border-amber-500/30 rounded-full p-1.5 flex items-center relative overflow-hidden z-10 backdrop-blur-md shadow-[0_0_30px_rgba(245,158,11,0.15)]">
      <motion.div 
        animate={{ width: ["15%", "100%", "15%"] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-amber-600/40 to-amber-400/80 rounded-full"
      />
      <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500 rounded-full flex items-center justify-center z-20 shadow-lg">
        <ShoppingCart className="w-5 h-5 text-black" />
      </div>
      <span className="text-amber-400 font-bold text-xs md:text-sm uppercase tracking-widest z-20 ml-6 md:ml-8">Processing</span>
    </div>
  </div>
);


/* ========================================================
   PROJECT DATA & STACKING GRID
======================================================== */

const projects = [
  {
    id: 1,
    index: "01",
    dept: "Data Engineering",
    title: "Nexus Analytics Engine",
    desc: "Real-time data processing pipeline designed for global logistics enterprise, handling over 2M events per second with sub-millisecond latency.",
    impact: "40%",
    impactLabel: "Infra Cost Reduction",
    theme: {
      accentText: "text-cyan-400",
      accentBorder: "border-cyan-400/30",
      accentBg: "bg-cyan-400/10",
    },
    visual: <NexusVisual />,
  },
  {
    id: 2,
    index: "02",
    dept: "Web Architecture",
    title: "Aura Design System",
    desc: "Architected and engineered a scalable multi-platform design system and component architecture for a Fortune 500 fintech platform.",
    impact: "95%",
    impactLabel: "Developer Adoption Rate",
    theme: {
      accentText: "text-teal-400",
      accentBorder: "border-teal-400/30",
      accentBg: "bg-teal-400/10",
    },
    visual: <AuraVisual />,
  },
  {
    id: 3,
    index: "03",
    dept: "Mobile Systems",
    title: "Zenith Fintech App",
    desc: "Ultra-low latency mobile banking architecture featuring native end-to-end hardware encryption and real-time ledger sync.",
    impact: "500K+",
    impactLabel: "Active Users (Q1)",
    theme: {
      accentText: "text-indigo-400",
      accentBorder: "border-indigo-400/30",
      accentBg: "bg-indigo-400/10",
    },
    visual: <ZenithVisual />,
  },
  {
    id: 4,
    index: "04",
    dept: "Predictive AI",
    title: "Void Intelligence Platform",
    desc: "Autonomous predictive maintenance engine utilizing machine learning models to anticipate mission-critical hardware failures before downtime.",
    impact: "$2.4M",
    impactLabel: "Annual Downtime Saved",
    theme: {
      accentText: "text-rose-400",
      accentBorder: "border-rose-400/30",
      accentBg: "bg-rose-400/10",
    },
    visual: <VoidVisual />,
  },
  {
    id: 5,
    index: "05",
    dept: "Biometric IoT",
    title: "VitalPulse Health Ecosystem",
    desc: "Clinical-grade health monitoring system connecting wearable IoT hardware to a real-time biometric feedback loop for medical specialists.",
    impact: "300%",
    impactLabel: "Patient Engagement Boost",
    theme: {
      accentText: "text-emerald-400",
      accentBorder: "border-emerald-400/30",
      accentBg: "bg-emerald-400/10",
    },
    visual: <VitalPulseVisual />,
  },
  {
    id: 6,
    index: "06",
    dept: "E-Commerce",
    title: "LuxeStore Global Platform",
    desc: "Headless e-commerce system built for high-throughput luxury retail, optimized for instant global edge delivery and localized checkouts.",
    impact: "+22%",
    impactLabel: "Checkout Conversion",
    theme: {
      accentText: "text-amber-400",
      accentBorder: "border-amber-400/30",
      accentBg: "bg-amber-400/10",
    },
    visual: <LuxeStoreVisual />,
  },
];

export default function PortfolioGrid() {
  return (
    <section className="pb-32 pt-12 bg-transparent relative z-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        
        {/* The Stacking Container */}
        <div className="relative flex flex-col gap-6 md:gap-12 pb-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              // 👉 STICKY STACKING LOGIC
              className="sticky w-full rounded-[2rem] md:rounded-[2.5rem] bg-[#09090b] border border-white/5 p-6 lg:p-12 shadow-2xl flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-between"
              style={{ top: `calc(12vh + ${index * 35}px)` }}
            >
              
              {/* Left Column: Sharp Typography & Metrics */}
              <div className="flex-1 w-full flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <span className={`text-4xl md:text-5xl font-black ${project.theme.accentText}`}>
                    {project.index}
                  </span>
                  <span className={`text-[10px] md:text-xs uppercase tracking-widest font-bold border px-4 py-1.5 rounded-full ${project.theme.accentText} ${project.theme.accentBorder} ${project.theme.accentBg}`}>
                    {project.dept}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1] text-white mb-6">
                  {project.title}
                </h2>
                <p className="text-base md:text-lg text-neutral-400 leading-relaxed mb-10 max-w-lg">
                  {project.desc}
                </p>

                <div className="pt-8 border-t border-white/10">
                  <div>
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-neutral-500 font-bold block mb-1">
                      Key Impact
                    </span>
                    <div className="text-3xl md:text-4xl font-black text-white tracking-tight">
                      {project.impact}
                    </div>
                    <div className={`text-xs md:text-sm font-bold mt-1 ${project.theme.accentText}`}>
                      {project.impactLabel}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: High-End Bespoke Visualizers */}
              <div className="w-full lg:w-[45%] aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl relative border border-white/5 bg-[#030303]">
                {project.visual}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}