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

export default function Process() {
  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="max-w-screen-md mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 block mb-3">
            Our Methodology
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            The Architecture <span className="text-neutral-500">of Growth.</span>
          </h2>
        </div>

        {/* 1-by-1 Vertical Pipeline */}
        <div className="flex flex-col gap-6">
          {pipeline.map((phase, i) => {
            const Icon = phase.icon;
            
            return (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-[#09090b] border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center hover:border-white/20 transition-all overflow-hidden"
              >
                {/* Subtle hover glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d94814]/5 blur-[40px] pointer-events-none group-hover:bg-[#d94814]/10 transition-colors" />

                {/* Massive Accent Number */}
                <div className="flex-shrink-0">
                  <span className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/0 group-hover:from-[#d94814]/40 transition-all duration-500">
                    {phase.step}
                  </span>
                </div>

                {/* Content Block */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-[#d94814]" />
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-lg">
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