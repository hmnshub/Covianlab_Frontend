"use client";

import { motion } from "framer-motion";
import { Activity, Code2, Rocket, Repeat } from "lucide-react";

const pipeline = [
  {
    step: "01",
    title: "The Audit (Data & Strategy)",
    desc: "We don't guess. We map your existing infrastructure and run predictive models before writing a single line of code.",
    icon: Activity,
  },
  {
    step: "02",
    title: "The Build (Engineering)",
    desc: "Scalable, high-performance product development engineered for maximum retention and lightning-fast load times.",
    icon: Code2,
  },
  {
    step: "03",
    title: "The Injection (Growth)",
    desc: "Deploying aggressive, data-backed marketing systems and conversion funnels to scale your acquisition efficiently.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "The Loop (QA & Automation)",
    desc: "Setting up AI workflows and automated testing protocols so the system continually optimizes and improves itself.",
    icon: Repeat,
  },
];

// Light section: this used to be a dark card on a dark page, which is why
// the "01/02/03/04" markers (dark orange gradient) were basically invisible.
// A light surface fixes that for free — big ghost numerals read as structure
// instead of noise, and it gives the page a breather from all-black.
export default function Process() {
  return (
    <section className="py-24 md:py-28 bg-[#EEF4F5] relative z-10">
      <div className="max-w-screen-md mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#d94814] block mb-3">
            Our Methodology
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
            The Architecture <span className="text-neutral-400">of Growth.</span>
          </h2>
        </div>

        {/* 1-by-1 Vertical Pipeline */}
        <div className="flex flex-col gap-5 md:gap-6">
          {pipeline.map((phase, i) => {
            const Icon = phase.icon;

            return (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white border border-black/[0.06] rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row gap-4 md:gap-10 items-start md:items-center hover:border-[#d94814]/25 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-300 overflow-hidden"
              >
                {/* Subtle hover glow, tied to the cool section tone with an orange pop on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/[0.04] blur-[40px] pointer-events-none group-hover:bg-[#d94814]/[0.06] transition-colors duration-500" />

                {/* Ghost accent number */}
                <div className="flex-shrink-0">
                  <span className="text-5xl md:text-7xl font-black text-neutral-200 group-hover:text-[#d94814]/30 transition-colors duration-500">
                    {phase.step}
                  </span>
                </div>

                {/* Content Block */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-[#d94814]" />
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-lg">
                    {phase.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
