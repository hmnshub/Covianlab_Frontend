"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, MessageSquare, Target, CheckCircle } from "lucide-react";

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

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-surface-container-lowest">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left — DNA Values */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-5xl font-headline font-black tracking-tight mb-12"
            >
              The Covian DNA.
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
                    <div className="w-10 h-10 rounded-sm bg-primary-container/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-primary-container" />
                    </div>
                    <div>
                      <h4 className="font-headline font-black text-on-surface mb-2">
                        {val.title}
                      </h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
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
            className="bg-surface-container border border-white/5 rounded-sm p-10"
          >
            <h3 className="text-2xl font-headline font-black text-on-surface mb-8">
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
                  <CheckCircle className="w-5 h-5 text-primary-container flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-on-surface-variant leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
