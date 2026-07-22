"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Layers, Cpu } from "lucide-react";

export default function PortfolioCTA() {
  return (
    <section className="py-28 bg-surface border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-sm bg-surface-container border border-white/10 py-20 px-8 lg:px-16 shadow-2xl"
        >
          {/* Ambient Lighting Glows */}
          <div className="absolute right-[-10%] top-[-20%] w-[50%] h-[150%] bg-primary-container/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute left-[-10%] bottom-[-20%] w-[30%] h-[100%] bg-blue-600/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: CTA Headline & Description */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-4 h-4 text-primary-container" />
                <span className="text-xs font-label uppercase tracking-widest text-primary-container font-bold">
                  Next-Gen Digital Infrastructure
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-headline font-black tracking-tight text-on-surface leading-tight">
                Ready to turn your business vision into scalable systems?
              </h2>
              
              <p className="mt-5 text-on-surface-variant text-base leading-relaxed max-w-2xl">
                Our architectures are engineered for growth, high throughput, and long-term durability. Let’s build the technology backbone for your venture.
              </p>
              
              {/* CTAs */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact">
                  <motion.span
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0 0 30px rgba(34,211,238,0.4)",
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 signature-gradient text-on-primary-fixed px-10 py-4 rounded-sm font-headline font-black text-xs cursor-pointer uppercase tracking-widest shadow-lg"
                  >
                    Start a Project <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
                <Link href="/services">
                  <motion.span
                    whileHover={{
                      scale: 1.04,
                      backgroundColor: "rgba(255,255,255,0.06)",
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-block border border-white/20 text-on-surface px-10 py-4 rounded-sm font-headline font-bold text-xs cursor-pointer uppercase tracking-widest transition-all"
                  >
                    Explore Services
                  </motion.span>
                </Link>
              </div>
            </div>

            {/* Right Side: Animated Dynamic Data Core */}
            <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
              <div className="relative w-72 h-72 flex items-center justify-center">
                
                {/* Core Deep Glow */}
                <div className="absolute inset-0 bg-primary-container/20 blur-[70px] rounded-full pointer-events-none" />

                {/* Outer Dashed Orbit (Rotates Clockwise) */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-primary-container/30"
                />

                {/* Inner Solid Orbit with Accent (Rotates Counter-Clockwise) */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-6 rounded-full border border-white/10"
                  style={{ borderTopColor: "rgba(34, 211, 238, 0.8)", borderWidth: "2px" }}
                />

                {/* Satellite Data Node (Orbits on the middle ring) */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-12"
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary-container rounded-full shadow-[0_0_15px_rgba(34,211,238,1)]" />
                </motion.div>

                {/* Central Pulsing Glassmorphism Core */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-32 h-32 bg-surface/80 backdrop-blur-xl border border-primary-container/50 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.2)] overflow-hidden"
                >
                  {/* Internal Core Glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/30 to-blue-600/30" />
                  
                  {/* Tech Icon inside the Core */}
                  <Cpu className="w-10 h-10 text-primary-container relative z-10" />
                </motion.div>

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}