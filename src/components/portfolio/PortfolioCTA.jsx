"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";

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
            
            {/* CTA Headline & Description */}
            <div className="lg:col-span-8">
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

            {/* Glowing Graphic Accent */}
            <div className="lg:col-span-4 hidden lg:flex items-center justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-primary-container/20 animate-ping opacity-25" />
                <div className="absolute inset-4 rounded-full border border-primary-container/30" />
                <div className="absolute inset-10 rounded-full border border-white/10" />
                <div className="absolute inset-16 rounded-full bg-primary-container/10 blur-xl" />
                
                {/* Center Core Badge */}
                <div className="relative z-10 text-center p-6 bg-surface/90 border border-white/10 backdrop-blur-md rounded-full w-40 h-40 flex flex-col items-center justify-center">
                  <span className="text-2xl font-headline font-black text-primary-container">
                    100%
                  </span>
                  <span className="text-[9px] font-label uppercase tracking-widest text-on-surface-variant font-bold mt-1">
                    Custom Built
                  </span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}