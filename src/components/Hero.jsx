"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Split text into characters for the premium typing effect
const TypingText = ({ text, className, delayOffset = 0 }) => {
  const chars = Array.from(text);
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.04, delayChildren: delayOffset },
        },
      }}
      className={className}
    >
      {chars.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, display: "none" },
            visible: { opacity: 1, display: "inline-block" },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      {/* Blinking Cursor Effect on the last line */}
      {delayOffset > 1 && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className="inline-block w-1 h-[0.8em] bg-[#d94814] ml-2 align-middle"
        />
      )}
    </motion.span>
  );
};

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 px-6 max-w-screen-xl mx-auto overflow-hidden">
      <div className="relative z-10 max-w-4xl">
        
        {/* Status Pill - Added continuous subtle pulse to the dot */}
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
          <span className="text-xs font-medium uppercase tracking-widest text-neutral-300">
            Now Accepting New Projects
          </span>
        </motion.div>

        {/* Headline - Premium Staggered Typing Animation */}
        <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-bold tracking-tighter leading-[1.02] mb-8 flex flex-col">
          <TypingText text="Your Complete" className="text-white" delayOffset={0.2} />
          <TypingText text="Technology &" className="text-white" delayOffset={0.8} />
          <TypingText text="Software Partner." className="text-neutral-500" delayOffset={1.4} />
        </h1>

        {/* Subtitle - Slides up gracefully after headline finishes */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mb-12"
        >
          From high-performance websites and mobile apps to custom software and AI integrations, CovianLab provides the complete technology stack to scale your business.
        </motion.p>

        {/* Action Buttons - Pops in with dynamic hover physics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link href="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-[#d94814] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#c23d10] transition-colors shadow-[0_0_25px_rgba(217,72,20,0.3)] cursor-pointer"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>

          <Link href="/services">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
            >
              <Activity className="w-4 h-4 text-cyan-400" /> Explore Services
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Image Section - Pops in and constantly floats seamlessly */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 80 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          delay: 2.8,
          type: "spring", 
          bounce: 0.4 
        }}
        className="relative z-20 w-full mt-16 md:mt-24"
      >
        {/* Continuous Floating Animation Wrapper */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-full w-3/4 h-3/4 top-1/2 -translate-y-1/2" />
          
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.9)]">
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