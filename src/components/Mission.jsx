"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-surface-container-low">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="border-l-4 border-primary-container pl-12"
          >
            <h2 className="text-4xl lg:text-5xl font-headline font-bold leading-tight">
              One Stop Solution for{" "}
              <span className="text-primary-container italic">
                End-to-End Growth.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Covianlab helps startups and businesses build end-to-end growth
              systems by combining development, performance marketing, data and
              AI solutions under one roof. We eliminate the friction between
              departments to focus on what matters: your bottom line.
            </p>
            <div className="flex items-center gap-4 text-primary">
              <motion.div
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2 h-2 rounded-full bg-primary-container"
              />
              <span className="text-sm font-label font-bold uppercase tracking-widest">
                Active Development Cycle
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
