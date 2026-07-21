"use client";

import { motion } from "framer-motion";
import { Zap, Flag, Focus, Rocket } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Momentum over policy",
    desc: "We favor decisive action and continuous movement over rigid bureaucratic frameworks.",
  },
  {
    icon: Flag,
    title: "Outcomes over activity",
    desc: "Impact is our metric. We celebrate the results achieved, not the hours spent in motion.",
  },
  {
    icon: Focus,
    title: "Clarity over noise",
    desc: "In a complex world, we strive for simple truths and focused communication.",
  },
  {
    icon: Rocket,
    title: "Void Engineering",
    desc: "We don't fear the digital void; we fill it with purpose-built innovation.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateX: 45, y: 80 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12, mass: 1 },
  },
};

export default function CoreValues() {
  return (
    <section className="relative py-32 bg-[#0B0F17] overflow-hidden perspective-[2000px]">
      
      {/* --- WILD ANIMATED BACKGROUNDS --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated Moving Grid */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.2) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        
        {/* Wandering Glowing Orbs */}
        <motion.div
          animate={{
            x: [0, 200, -200, 0],
            y: [0, -150, 150, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -300, 300, 0],
            y: [0, 200, -200, 0],
            scale: [1, 2, 1],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        
        {/* --- LEFT TEXT CONTENT --- */}
        <div className="relative">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5, duration: 1 }}
            className="text-xs font-label uppercase tracking-widest text-cyan-400 font-bold mb-4"
          >
            Our Core Ethos
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, filter: "blur(10px)", x: -50 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-headline font-black tracking-tight text-white leading-tight drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            Guided by
            <br />
            {/* Color pulsing text */}
            <motion.span
              animate={{ color: ["#ffffff", "#22d3ee", "#ffffff"] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              Culture.
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-base text-slate-400 leading-relaxed border-l-2 border-cyan-400/50 pl-4"
          >
            We believe that how we work is as important as what we build. Our
            culture defines our trajectory.
          </motion.p>
        </div>

        {/* --- DYNAMIC VALUES GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  rotateY: i % 2 === 0 ? 5 : -5, // Tilts left or right depending on grid position
                  rotateX: 5,
                  boxShadow: "0 20px 40px -10px rgba(34, 211, 238, 0.3)",
                  borderColor: "rgba(34, 211, 238, 0.6)",
                }}
                className="relative group bg-[#161f30]/80 backdrop-blur-md border border-white/5 rounded-xl p-8 transition-colors duration-500 overflow-hidden cursor-pointer"
              >
                {/* Continuous Shimmer Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

                <div className="mb-6 w-14 h-14 rounded-lg bg-slate-800/80 border border-white/10 flex items-center justify-center group-hover:bg-cyan-950 transition-colors duration-300">
                  {/* Infinitely Animated Icon */}
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: i * 0.2 }}
                  >
                    <Icon className="w-7 h-7 text-slate-400 group-hover:text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0)] group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] transition-all duration-300" />
                  </motion.div>
                </div>
                
                <h3 className="text-lg font-headline font-black text-white mb-3 uppercase tracking-wide group-hover:text-cyan-400 transition-colors duration-300">
                  {v.title}
                </h3>
                
                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300 relative z-10">
                  {v.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Keyframes for the hover shimmer */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
}