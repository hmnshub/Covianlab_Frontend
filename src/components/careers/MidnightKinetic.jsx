"use client";

import { motion } from "framer-motion";
import { Rocket, Eye, BarChart2 } from "lucide-react";

const pillars = [
  {
    icon: Rocket,
    title: "Innovation First",
    desc: "We prioritize R&D in every project. If it hasn't been done before, we're the ones to build it.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    desc: "No silos. No secrets. Every architect has access to the roadmap, the data, and the decision makers.",
  },
  {
    icon: BarChart2,
    title: "Data-Driven Creativity",
    desc: "We marry logic with aesthetic. Every brushstroke is backed by behavioral analytics and performance metrics.",
  },
];

export default function MidnightKinetic() {
  return (
    <section className="py-24 bg-transparent border-t border-white/5 relative z-10">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 block mb-3">
              Core Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Midnight Kinetic.
            </h2>
            <p className="mt-4 text-neutral-400 text-lg max-w-xl leading-relaxed">
              Our philosophy is built on three immutable pillars. We don't
              follow trends; we architect the infrastructure they sit on.
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/[0.02] border border-white/10 p-8 md:p-10 rounded-3xl hover:bg-white/[0.04] transition-colors"
              >
                <div className="mb-8 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-neutral-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-neutral-400 text-base leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}