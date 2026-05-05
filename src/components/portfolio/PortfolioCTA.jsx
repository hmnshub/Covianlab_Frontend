"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PortfolioCTA() {
  return (
    <section className="py-28 bg-surface-container-lowest">
      <div className="max-w-screen-xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-sm bg-surface-container border border-white/5 py-24 px-10"
        >
          <div className="absolute right-[-10%] top-[-20%] w-[40%] h-[150%] bg-primary-container/5 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-headline font-black tracking-tight text-on-surface leading-tight">
                Ready to collaborate your business ideas into a scalable
                systems?
              </h2>
              <p className="mt-5 text-on-surface-variant leading-relaxed">
                Our projects are more than just deliverables; they are
                engineered solutions built for high-performance digital
                environments.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact">
                  <motion.span
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0 0 28px rgba(0,240,255,0.4)",
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-block signature-gradient text-on-primary-fixed px-10 py-3.5 rounded-sm font-headline font-black text-sm cursor-pointer uppercase tracking-wider"
                  >
                    Start a Project
                  </motion.span>
                </Link>
                <Link href="/services">
                  <motion.span
                    whileHover={{
                      scale: 1.04,
                      backgroundColor: "rgba(255,255,255,0.05)",
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-block border border-outline-variant/40 text-on-surface px-10 py-3.5 rounded-sm font-headline font-bold text-sm cursor-pointer uppercase tracking-wider transition-all"
                  >
                    View Services
                  </motion.span>
                </Link>
              </div>
            </div>

            {/* Decorative globe visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-56 h-56">
                <div className="absolute inset-0 rounded-full border border-primary-container/10 animate-pulse" />
                <div className="absolute inset-4 rounded-full border border-primary-container/15" />
                <div className="absolute inset-8 rounded-full border border-primary-container/20" />
                <div className="absolute inset-12 rounded-full bg-primary-container/10 blur-md" />
                <div
                  className="w-full h-full rounded-full opacity-20"
                  style={{
                    background:
                      "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=60') center/cover",
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
