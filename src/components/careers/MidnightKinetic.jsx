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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function MidnightKinetic() {
  return (
    <section className="py-32 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-3xl font-headline font-black tracking-tight uppercase text-on-surface"
            >
              Midnight Kinetic
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-3 text-on-surface-variant text-sm max-w-md"
            >
              Our philosophy is built on three immutable pillars. We don't
              follow trends; we architect the infrastructure they sit on.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href="#"
            className="text-xs font-label uppercase tracking-widest text-primary-container hover:text-primary transition-colors"
          >
            » Live at CovianLab
          </motion.a>
        </div>

        {/* Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={cardVariants}
                className="glass-panel border border-white/5 p-8 rounded-sm group hover:border-primary-container/20 transition-colors"
              >
                <div className="mb-6 w-10 h-10 text-primary-container">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-base font-headline font-bold text-on-surface mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
