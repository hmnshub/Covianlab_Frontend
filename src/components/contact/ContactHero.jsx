"use client";

import { motion } from "framer-motion";
import { Database, Rocket, Clock, BarChart2, Zap } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "All-in-one solution",
    desc: "A unified ecosystem of Data, Tech, Marketing, and AI expertise under one roof.",
  },
  {
    icon: Rocket,
    title: "Startup-first execution",
    desc: "Lean, agile methodologies designed to ship fast and pivot with precision.",
  },
  {
    icon: Clock,
    title: "Future-ready systems",
    desc: "Architecting scalable infrastructures that grow seamlessly with your ambitions.",
  },
  {
    icon: BarChart2,
    title: "Measurable outcomes",
    desc: "Obsessive focus on ROI, lead generation, and tangible business impact.",
  },
];

export default function ContactHero() {
  return (
    <>
      <header className="relative pt-32 pb-16 overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[80%] bg-primary-container/6 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="w-10 h-[2px] bg-primary-container" />
              <span className="text-xs font-label uppercase tracking-widest text-primary-container font-bold">
                Connect with our Architects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="text-[clamp(2.8rem,7vw,5rem)] font-headline font-black leading-[1.1] tracking-tighter text-glow"
            >
              Let's Build{" "}
              <span className="text-primary-container">Something Great</span>{" "}
              Together
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="pl-0 lg:pl-10 lg:border-l border-outline-variant/30"
          >
            <p className="text-lg text-on-surface-variant leading-relaxed">
              We transform complex data landscapes into architectural
              masterpieces. Reach out to start your digital evolution.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Why Choose Us */}
      <section className="py-16 bg-surface">
        <div className="max-w-screen-xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-headline font-black text-on-surface">
              Why you choose{" "}
              <span className="text-primary-container">Covianlab?</span>
            </h2>
            <p className="mt-3 text-on-surface-variant text-sm max-w-sm">
              We aren't just consultants; we are your strategic execution
              partners in the digital void.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-surface-container border border-white/5 rounded-sm p-7 hover:border-primary-container/20 transition-all"
                >
                  <div className="mb-4 w-9 h-9 bg-primary-container/10 rounded-sm flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary-container" />
                  </div>
                  <h3 className="font-headline font-bold text-on-surface mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}

            {/* Full-width card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="md:col-span-2 bg-surface-container border border-white/5 rounded-sm p-7 hover:border-primary-container/20 transition-all flex gap-5 items-start"
            >
              <div className="w-9 h-9 bg-primary-container/10 rounded-sm flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-primary-container" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-on-surface mb-2">
                  Fast, lean, impact-driven delivery
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  We cut the bloat and deliver high-frequency value in every sprint cycle.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
