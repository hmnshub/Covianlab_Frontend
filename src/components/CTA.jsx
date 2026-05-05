"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

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
          className="text-5xl md:text-7xl font-headline font-black mb-6 tracking-tighter"
        >
          Ready to Deploy Your
          <br />
          <span className="text-primary-container">Growth System?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          We are currently accepting high-growth partners for late 2024. Secure
          your spot in our next development cycle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block signature-gradient text-on-primary-fixed px-12 py-5 rounded-sm font-headline font-black text-lg shadow-2xl shadow-cyan-500/20 cursor-pointer"
            >
              Contact Growth Team
            </motion.span>
          </Link>
          <motion.button
            whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.97 }}
            className="px-12 py-5 rounded-sm font-headline font-bold text-lg text-primary border border-outline-variant/30 transition-all cursor-pointer"
          >
            Explore Our Flow
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
