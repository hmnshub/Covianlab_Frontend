"use client";

import { motion } from "framer-motion";

export default function GeneralApplication() {
  return (
    <section className="py-32 bg-surface-container">
      <div className="max-w-screen-xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-headline font-black tracking-tight text-on-surface mb-6">
            Don't see your role?
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-10">
            We're always looking for exceptional talent in unexpected places.
            Send us your portfolio or GitHub, and let's start a conversation
            about what you can bring to the void.
          </p>
          <motion.button
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 30px rgba(0,240,255,0.35)",
            }}
            whileTap={{ scale: 0.96 }}
            className="signature-gradient text-on-primary-fixed px-10 py-3.5 rounded-sm font-headline font-bold text-sm cursor-pointer uppercase tracking-wider"
          >
            General Application
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
