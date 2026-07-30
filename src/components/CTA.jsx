"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 bg-transparent border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter text-white"
        >
          Ready to Deploy Your <br />
          <span className="text-neutral-500">Growth System?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 max-w-xl mx-auto mb-10 text-lg"
        >
          We are accepting high-growth partners for late 2026. Secure your spot in our next development cycle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <Link href="/contact">
            <button className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]">
              Contact Growth Team
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}