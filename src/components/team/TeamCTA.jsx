"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TeamCTA() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-screen-xl mx-auto px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-headline font-black tracking-tight text-on-surface mb-10"
        >
          Want to Join the Void?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link href="/careers">
            <motion.span
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 30px rgba(0,240,255,0.4)",
              }}
              whileTap={{ scale: 0.96 }}
              className="inline-block signature-gradient text-on-primary-fixed px-12 py-4 rounded-sm font-headline font-black text-sm cursor-pointer uppercase tracking-widest"
            >
              View Open Positions
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
