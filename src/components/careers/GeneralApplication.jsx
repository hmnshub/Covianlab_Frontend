"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function GeneralApplication() {
  return (
    <section className="py-24 bg-black text-white text-center relative z-10">
      <div className="max-w-screen-md mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#12141a] border border-white/10 rounded-[2.5rem] p-12 md:p-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 blur-[60px] pointer-events-none" />

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Don't see your role?
          </h2>
          
          <p className="text-sm md:text-base text-neutral-400 leading-relaxed mb-8 max-w-lg mx-auto">
            We're always looking for exceptional talent in unexpected places. Send us your portfolio or GitHub, and let's start a conversation about what you can bring to the void.
          </p>

          {/* 👉 Direct Clickable Mailto Link */}
          <a
            href="mailto:support@covianlab.com"
            className="inline-flex items-center justify-center gap-2 bg-amber-400 text-black px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-amber-300 hover:scale-105 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] cursor-pointer"
          >
            <Mail className="w-4 h-4" /> General Application <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}