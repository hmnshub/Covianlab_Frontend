"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

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
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="w-12 h-[2px] bg-primary-container" />
            <span className="text-sm font-label uppercase tracking-widest text-primary-container font-bold">
              Growth Engineering Lab
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-[clamp(2.8rem,7vw,5rem)] font-headline font-black leading-[1.1] tracking-tighter text-glow"
          >
            Engineering Growth Systems,{" "}
            <span className="text-primary-container">not just websites.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-8 text-lg text-on-surface-variant max-w-xl leading-relaxed"
          >
            We build growth systems, not just services. CovianLab crafts
            end-to-end digital ecosystems that scale startups and enterprises
            through the intersection of tech and performance.
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
              className="signature-gradient text-on-primary-fixed px-10 py-4 rounded-sm font-headline font-black text-base cursor-pointer"
            >
              Scale Your Business
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.96 }}
              className="px-10 py-4 rounded-sm font-headline font-bold text-base text-primary-fixed border border-outline-variant/30 transition-all cursor-pointer"
            >
              View Growth Models
            </motion.button>
          </motion.div>
        </div>

        {/* Right Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="glass-panel p-8 border border-white/10 rounded-sm relative">
            <div className="absolute -top-4 -right-4 w-12 h-12 signature-gradient rounded-sm flex items-center justify-center">
              <TrendingUp className="text-on-primary-fixed w-5 h-5" />
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-xs font-label text-on-surface-variant uppercase">
                  Conversion Efficiency
                </span>
                <span className="text-primary-container font-headline font-bold text-xl">
                  +142%
                </span>
              </div>
              <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "85%" }}
                  transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
                  className="h-full signature-gradient"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[{ value: "ROI", label: "Tracked" }, { value: "Scale", label: "Guaranteed" }].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1 + i * 0.1, duration: 0.4 }}
                    className="bg-surface-container-low p-4 rounded-sm border border-white/5"
                  >
                    <span className="block text-[1.8rem] font-black text-primary font-headline">
                      {stat.value}
                    </span>
                    <span className="text-xs uppercase text-slate-500">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
              {/* Mini bar chart */}
              <div className="flex items-end gap-1.5 h-16 pt-2">
                {[35, 55, 42, 70, 58, 82, 65, 90, 75, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 1.2 + i * 0.05, duration: 0.4 }}
                    className="flex-1 signature-gradient rounded-sm opacity-60"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
