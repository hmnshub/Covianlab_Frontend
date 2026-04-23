"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Discovery", desc: "Deep dive into your business model, identifying core friction points and opportunities." },
  { num: "02", title: "Strategy", desc: "Defining the architectural blueprint and technical stack for optimal performance." },
  { num: "03", title: "Execution", desc: "Rapid prototyping and iterative development using our high-end studio framework." },
  { num: "04", title: "Optimization", desc: "Continuous data-driven refinement to ensure the solution scales as you grow." },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-surface-container-lowest">
      <div className="max-w-screen-xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-headline font-black mb-6">Our Process.</h2>
          <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
            Precision engineering at every stage of the lifecycle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="p-8 hover:bg-surface-container transition-colors border-l border-white/5 group cursor-default"
            >
              <span className="text-6xl font-headline font-black text-primary/10 group-hover:text-primary-container/30 transition-colors">
                {step.num}
              </span>
              <h4 className="text-xl font-headline font-bold mt-4 text-primary">{step.title}</h4>
              <p className="mt-4 text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
