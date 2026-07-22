"use client";

import { motion } from "framer-motion";
import { TrendingUp, Activity, Cpu, Sparkles, ChevronRight } from "lucide-react";

// Deterministic arrays for Next.js SSR compatibility
const particles = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  left: `${(i * 17) % 100}%`,
  top: `${(i * 29) % 100}%`,
  size: (i % 3) + 1.5, // 1.5px to 3.5px
  duration: (i % 5) + 5, // 5s to 9s
  delay: (i % 4) * 1.2,
}));

const verticalLasers = Array.from({ length: 7 }).map((_, i) => ({
  id: i,
  left: `${(i + 1) * 14}%`,
  duration: 3 + (i % 3),
  delay: i * 0.5,
}));

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#020617] selection:bg-cyan-500/30">
      
      {/* =========================================
          1. THE LIVING BACKGROUND ARCHITECTURE 
      ============================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        
        {/* Layer A: Massive Ambient Core Glows */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[30%] -right-[10%] w-[70vw] h-[70vw] bg-cyan-500/10 blur-[150px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] -left-[20%] w-[60vw] h-[60vw] bg-indigo-600/15 blur-[150px] rounded-full"
        />

        {/* Layer B: Center Rotating HUD / Radar Rings */}
        <div className="absolute w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] opacity-20 flex items-center justify-center mix-blend-screen">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-full border-[2px] border-dashed border-cyan-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[70%] h-[70%] border-[4px] border-transparent border-t-indigo-500/30 border-b-cyan-500/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute w-[40%] h-[40%] border border-cyan-300/10 rounded-full"
            style={{ backgroundImage: "repeating-conic-gradient(from 0deg, transparent 0deg, transparent 10deg, rgba(34,211,238,0.05) 10deg, rgba(34,211,238,0.05) 20deg)" }}
          />
        </div>

        {/* Layer C: 3D Perspective Cyber Tunnel (Floor & Ceiling) */}
        <div className="absolute inset-0 [perspective:2000px] opacity-30">
          {/* Floor Grid */}
          <motion.div
            animate={{ backgroundPosition: ["0px 0px", "0px 100px"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [transform:rotateX(70deg)_translateY(200px)_scale(2.5)]"
            style={{ WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 100%, black 10%, transparent 70%)" }}
          />
          {/* Ceiling Grid */}
          <motion.div
            animate={{ backgroundPosition: ["0px 0px", "0px 100px"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [transform:rotateX(-70deg)_translateY(-200px)_scale(2.5)]"
            style={{ WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 10%, transparent 70%)" }}
          />
        </div>

        {/* Layer D: Vertical Shooting Lasers */}
        <div className="absolute inset-0">
          {verticalLasers.map((laser) => (
            <div key={laser.id} className="absolute top-0 bottom-0 w-[1px] bg-white/[0.02]" style={{ left: laser.left }}>
              <motion.div
                animate={{ top: ["-20%", "120%"] }}
                transition={{ duration: laser.duration, repeat: Infinity, ease: "linear", delay: laser.delay }}
                className="absolute w-[2px] h-[20vh] -left-[0.5px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent blur-[1px] opacity-70"
              />
            </div>
          ))}
        </div>

        {/* Layer E: Horizontal Global Scanline */}
        <motion.div
          animate={{ top: ["-10%", "110%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[2px] bg-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.4)] blur-[1px] z-0"
        />

        {/* Layer F: Floating Data Particles (Nodes) */}
        <div className="absolute inset-0">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
              style={{
                left: p.left,
                top: p.top,
                width: `${p.size}px`,
                height: `${p.size}px`,
              }}
              animate={{
                y: [0, -150],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "linear",
                delay: p.delay,
              }}
            />
          ))}
        </div>
      </div>

      {/* =========================================
          2. THE FOREGROUND CONTENT 
      ============================================= */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT COLUMN: The Pitch */}
        <div className="lg:col-span-7">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono tracking-widest text-cyan-400 font-semibold uppercase">
              CovianLab Core v2.0 Online
            </span>
          </motion.div>

          {/* Epic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[clamp(3rem,7vw,5.5rem)] font-headline font-black leading-[1.05] tracking-tighter"
          >
            <span className="text-white">Architecting</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-indigo-400">
              Unfair Advantages.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed font-light"
          >
            We don't just build software. We engineer high-frequency growth systems, autonomous data pipelines, and scalable enterprise architectures that dominate markets.
          </motion.p>

          {/* High-End CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            {/* Primary Button with Shimmer */}
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(34,211,238,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden bg-white text-slate-950 px-8 py-4 rounded-sm font-headline font-black text-sm uppercase tracking-widest group"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative flex items-center gap-2">
                Initialize Build <ChevronRight className="w-4 h-4" />
              </span>
            </motion.button>
            
            {/* Secondary Ghost Button */}
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-sm font-headline font-bold text-sm text-white border border-white/10 hover:border-white/30 transition-all uppercase tracking-widest flex items-center gap-2"
            >
              <Activity className="w-4 h-4 text-cyan-400" /> View Systems
            </motion.button>
          </motion.div>
        </div>


        {/* =========================================
            3. RIGHT COLUMN: FLOATING TECH CLUSTER
        ============================================= */}
        <div className="lg:col-span-5 hidden lg:block relative h-[600px] w-full">
          
          {/* Main Analytics Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
            transition={{ 
              opacity: { delay: 0.7, duration: 0.8 },
              scale: { delay: 0.7, duration: 0.8 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
            }}
            className="absolute top-[15%] right-[10%] w-[90%] z-20 glass-panel p-8 rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] group hover:border-cyan-500/30 transition-colors duration-500"
          >
            <div className="absolute -top-5 -right-5 w-14 h-14 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.5)] transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
              <TrendingUp className="text-white w-6 h-6" />
            </div>
            
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">System Efficiency Output</span>
                <span className="text-white font-headline font-black text-5xl tracking-tighter">
                  +284<span className="text-3xl text-slate-500">%</span>
                </span>
              </div>
              
              <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "92%" }}
                  transition={{ delay: 1.5, duration: 2, ease: "circOut" }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 relative"
                >
                  <div className="absolute top-0 bottom-0 right-0 w-10 bg-gradient-to-l from-white/50 to-transparent blur-[2px]" />
                </motion.div>
              </div>

              {/* Data Bars */}
              <div className="flex items-end gap-2 h-20 pt-4 border-t border-white/5">
                {[30, 45, 35, 60, 50, 85, 70, 95, 80, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 1.8 + i * 0.05, duration: 0.6, type: "spring" }}
                    className="flex-1 bg-cyan-500/20 hover:bg-cyan-400 rounded-t-sm transition-colors duration-300 cursor-crosshair border-t border-cyan-500/30 hover:border-cyan-300"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating Pill 1: Neural Engine */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, y: [0, 15, 0] }}
            transition={{ 
              opacity: { delay: 1.2, duration: 0.5 },
              x: { delay: 1.2, duration: 0.5 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
            className="absolute top-[5%] -left-[10%] z-10 bg-slate-900/60 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-full shadow-2xl flex items-center gap-3"
          >
            <Cpu className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-mono text-slate-300 tracking-wider">AI Engine: <span className="text-white font-bold">Optimizing</span></span>
          </motion.div>

          {/* Floating Pill 2: Live Latency */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ 
              opacity: { delay: 1.4, duration: 0.5 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
            className="absolute bottom-[10%] -left-[5%] z-30 bg-slate-900/80 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">Global Latency</div>
              <div className="text-lg font-black text-white">8.4ms <span className="text-cyan-400 text-sm animate-pulse">●</span></div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Required for the button shimmer effect */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </header>
  );
}