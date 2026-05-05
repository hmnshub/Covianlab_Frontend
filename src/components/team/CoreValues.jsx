"use client";

import { motion } from "framer-motion";
import { Zap, Flag, Focus, Rocket } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Momentum over policy",
    desc: "We favor decisive action and continuous movement over rigid bureaucratic frameworks.",
  },
  {
    icon: Flag,
    title: "Outcomes over activity",
    desc: "Impact is our metric. We celebrate the results achieved, not the hours spent in motion.",
  },
  {
    icon: Focus,
    title: "Clarity over noise",
    desc: "In a complex world, we strive for simple truths and focused communication.",
  },
  {
    icon: Rocket,
    title: "Void Engineering",
    desc: "We don't fear the digital void; we fill it with purpose-built innovation.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CoreValues() {
  return (
    <section className="py-32 bg-surface-container">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        {/* Left label */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-label uppercase tracking-widest text-primary-container font-bold mb-4"
          >
            Our Core Ethos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-4xl font-headline font-black tracking-tight text-on-surface leading-tight"
          >
            Guided by
            <br />
            Culture.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-5 text-sm text-on-surface-variant leading-relaxed"
          >
            We believe that how we work is as important as what we build. Our
            culture defines our trajectory.
          </motion.p>
        </div>

        {/* Values grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                variants={cardVariants}
                whileHover={{ y: -4, borderColor: "rgba(0,240,255,0.25)" }}
                className="bg-surface-container-high border border-white/5 rounded-sm p-7 transition-all"
              >
                <div className="mb-5 w-10 h-10 rounded-sm bg-primary-container/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary-container" />
                </div>
                <h3 className="text-sm font-headline font-black text-on-surface mb-3 uppercase tracking-wide">
                  {v.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
