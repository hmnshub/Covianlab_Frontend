"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const stats = [
  { value: "24k", label: "Events/Sec" },
  { value: "0.4ms", label: "Latency" },
];

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface to-surface" />
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[80%] bg-primary-container/10 blur-[120px] rounded-full" />
        <div
          className="w-full h-full opacity-20 grayscale"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(0,240,255,0.08) 0%, transparent 70%), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80') center/cover no-repeat",
          }}
        />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="w-12 h-[2px] bg-primary-container" />
            <span className="text-sm font-label uppercase tracking-widest text-primary-container font-bold">
              Innovation Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-[clamp(3rem,8vw,5.5rem)] font-headline font-black leading-[1.1] tracking-tighter text-glow"
          >
            Tech, Marketing, and Data Solutions{" "}
            <span className="text-primary-container">Under One Roof.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-8 text-xl text-on-surface-variant max-w-2xl leading-relaxed"
          >
            We bridge the gap between creative vision and technical execution.
            CovianLab crafts high-performance digital ecosystems for the next
            generation of business leaders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(0,240,255,0.4)" }}
              whileTap={{ scale: 0.96 }}
              className="signature-gradient text-on-primary-fixed px-10 py-4 rounded-sm font-headline font-black text-lg cursor-pointer"
            >
              Launch Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.96 }}
              className="px-10 py-4 rounded-sm font-headline font-bold text-lg text-primary-fixed border border-outline-variant/30 transition-all cursor-pointer"
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </div>

        {/* Right Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="lg:col-span-4 hidden lg:block"
        >
          <div className="glass-panel p-8 border border-white/10 rounded-sm relative">
            <div className="absolute -top-4 -right-4 w-12 h-12 signature-gradient rounded-sm flex items-center justify-center">
              <Zap className="text-on-primary-fixed w-5 h-5 fill-current" />
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-xs font-label text-on-surface-variant uppercase">
                  Network Load
                </span>
                <span className="text-primary-container font-headline font-bold">
                  98.2%
                </span>
              </div>
              <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "98%" }}
                  transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
                  className="h-full signature-gradient"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1 + i * 0.1, duration: 0.4 }}
                    className="bg-surface-container-low p-4 rounded-sm"
                  >
                    <span className="block text-[2rem] font-black text-primary font-headline">
                      {stat.value}
                    </span>
                    <span className="text-xs uppercase text-slate-500">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
