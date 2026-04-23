"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-surface-container-low border-t border-white/5">
      <div ref={ref} className="max-w-screen-xl mx-auto px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-headline font-black mb-12 tracking-tighter"
        >
          Ready to Build <br />
          <span className="text-primary-container">The Future?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          We are currently accepting new clients for late 2024. Secure your spot
          in our development cycle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="signature-gradient text-on-primary-fixed px-12 py-5 rounded-sm font-headline font-black text-xl shadow-2xl shadow-cyan-500/20 cursor-pointer"
          >
            Contact Our Team
          </motion.button>
          <motion.button
            whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.97 }}
            className="px-12 py-5 rounded-sm font-headline font-bold text-xl text-primary border border-outline-variant/30 transition-all cursor-pointer"
          >
            Browse Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
