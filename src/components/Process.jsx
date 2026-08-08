"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, MessageSquare, Target, CheckCircle } from "lucide-react";

// NOTE: this file previously used classes like `bg-surface-container-lowest`,
// `text-on-surface`, `font-headline`, `primary-container` — a Material
// Design 3 token naming convention that isn't defined anywhere in this
// project's Tailwind setup. None of that would have resolved to real colors,
// which is almost certainly why this section wasn't showing up anywhere on
// the site. Rewritten below using the same tokens the rest of the homepage
// actually uses (#d94814, neutral-*, etc.), and turned into your new
// homepage section since the copy itself (values + differentiators) is good
// and wasn't being used anywhere.

const dnaValues = [
  {
    icon: Zap,
    title: "Momentum over Policy",
    desc: "We move fast, break barriers, and prioritize speed of execution over rigid bureaucracy.",
  },
  {
    icon: MessageSquare,
    title: "Building over Talking",
    desc: "We are a shop of engineers and makers. We let the shipping cycle do the talking.",
  },
  {
    icon: Target,
    title: "Outcomes over Activity",
    desc: "Busy work is for amateurs. Every line of code and every ad spend is measured by ROI.",
  },
];

const whyUs = [
  "One Stop Solution — Zero friction between tech & marketing.",
  "Scalable Design — Systems built for the next 10x jump.",
  "ROI Focused — Direct link between engineering and revenue.",
  "Continuous Improvement — Dynamic optimization models.",
];

export default function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-[#EEF4F5] relative z-10">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start"
        >
          {/* Left — DNA Values */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-xs font-semibold uppercase tracking-widest text-[#d94814] block mb-3"
            >
              What Drives Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-10 md:mb-12"
            >
              The Covian <span className="text-neutral-400">DNA.</span>
            </motion.h2>

            <div className="space-y-8">
              {dnaValues.map((val, i) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="flex gap-5 items-start"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#d94814]/10 border border-[#d94814]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-[#d94814]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 mb-1.5">
                        {val.title}
                      </h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right — Why Partner with Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-black/[0.06] rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-8">
              Why Partner with Us?
            </h3>
            <ul className="space-y-5">
              {whyUs.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="w-5 h-5 text-[#d94814] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-700 leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-black/[0.06]">
              <p className="text-xs text-neutral-500 leading-relaxed">
                Led by <span className="text-neutral-700 font-medium">Balmukund Sharma</span> — CEO &amp; Founder, Ex-TCS, CGI.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
