"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    text: "The data insights platform CovianLab built for us transformed how we approach our quarterly projections. Their technical precision is unmatched.",
    name: "Marcus Thorne",
    role: "CTO, Vertex Dynamics",
    glass: true,
  },
  {
    text: "Our user conversion rate increased by 40% after the web redesign. They don't just build sites; they build growth engines.",
    name: "Elena Rodriguez",
    role: "Founder, Aura Digital",
    glass: false,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-8 overflow-hidden">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-end justify-between mb-16"
        >
          <div className="max-w-xl">
            <span className="text-primary-container font-bold font-label uppercase tracking-widest text-sm mb-4 block">
              Validation
            </span>
            <h2 className="text-5xl font-headline font-black">Trusted by Leaders.</h2>
          </div>
          <div className="hidden md:flex gap-4 mt-6 md:mt-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1))}
              className="w-14 h-14 rounded-full border border-outline-variant/30 flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-primary-fixed transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActive((p) => (p + 1) % testimonials.length)}
              className="w-14 h-14 rounded-full border border-outline-variant/30 flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-primary-fixed transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`flex-1 p-10 rounded-sm ${t.glass ? "glass-panel border border-white/5" : "bg-surface-container-high"}`}
            >
              <div className="flex gap-1 text-primary-container mb-8">
                {Array(5).fill(0).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-2xl font-headline italic leading-relaxed text-on-surface">
                "{t.text}"
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-surface-container-highest flex items-center justify-center text-primary font-headline font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <span className="block font-bold text-slate-100">{t.name}</span>
                  <span className="text-xs uppercase tracking-widest text-slate-500 font-label">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
