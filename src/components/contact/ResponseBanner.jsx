"use client";

import { motion } from "framer-motion";

export default function ResponseBanner() {
  return (
    <section className="py-8 bg-surface">
      <div className="max-w-screen-xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface-container-high border border-white/5 rounded-sm py-16 px-8 text-center"
        >
          <h3 className="text-2xl font-headline font-black text-on-surface mb-4">
            Expected Response: Under 4 Hours
          </h3>
          <p className="text-on-surface-variant text-sm max-w-lg mx-auto leading-relaxed">
            Our lead architects review every inquiry to ensure you're matched
            with the right expertise from the very first call.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
