"use client";

import { motion } from "framer-motion";
import { Globe, Heart, BookOpen, Cpu } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Remote-First",
    desc: "Work from the void, or your couch. Global, asynchronous flow.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Premium coverage and mental health stipends for clarity.",
  },
  {
    icon: BookOpen,
    title: "Learning Stipends",
    desc: "Annual lab budget for conferences, courses, and curiosities.",
  },
  {
    icon: Cpu,
    title: "Tech Stack",
    desc: "Latest hardware and enterprise licenses of your choice.",
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

export default function LabEcosystem() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-4xl font-headline font-black tracking-tight text-on-surface"
          >
            The Lab Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-on-surface-variant text-sm"
          >
            Engineered to support the high-performance digital artisan.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                variants={cardVariants}
                whileHover={{ y: -4, borderColor: "rgba(0,240,255,0.25)" }}
                className="bg-surface-container border border-white/5 rounded-sm p-8 transition-all"
              >
                <div className="mb-5 w-10 h-10 rounded-sm bg-primary-container/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary-container" />
                </div>
                <h3 className="text-sm font-headline font-bold text-on-surface mb-3 uppercase tracking-wide">
                  {b.title}
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed uppercase tracking-wide">
                  {b.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
