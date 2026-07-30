"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Layers, Cpu } from "lucide-react";

export default function PortfolioCTA() {
  return (
    <section className="py-32 bg-transparent border-t border-white/5 z-10 relative">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 py-16 px-8 lg:px-16 backdrop-blur-md"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: CTA Headline */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-6">
                <Layers className="w-4 h-4 text-neutral-400" />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
                  Next-Gen Digital Infrastructure
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter text-white leading-tight">
                Ready to turn your business vision into scalable systems?
              </h2>
              
              <p className="mt-6 text-neutral-400 text-lg leading-relaxed max-w-xl">
                Our architectures are engineered for growth, high throughput, and long-term durability. Let’s build the technology backbone for your venture.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold text-sm hover:scale-105 transition-transform">
                    Start a Project <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/services">
                  <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-white/10 transition-colors">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Side: Clean Tech Visual */}
            <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center bg-white/[0.02] border border-white/10 rounded-full">
                {/* Minimal pulse ring */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-4 rounded-full border border-cyan-400/30"
                />
                
                {/* Core Component */}
                <div className="relative z-10 w-24 h-24 bg-black border border-white/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                  <Cpu className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}