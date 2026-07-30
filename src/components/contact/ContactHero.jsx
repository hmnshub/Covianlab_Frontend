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
  {
    icon: Zap,
    title: "Fast, lean, impact-driven delivery",
    desc: "We cut the bloat and deliver high-frequency value in every sprint cycle.",
  },
];

export default function ContactHero() {
  return (
    <>
      <header className="relative pt-36 pb-20 px-6 max-w-screen-xl mx-auto bg-black text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
              <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
              <span className="text-[11px] font-medium uppercase tracking-widest text-neutral-300">
                Connect with our Architects
              </span>
            </div>

            <h1 className="text-[clamp(2.8rem,7vw,5rem)] font-bold leading-[1.05] tracking-tighter text-white">
              Let's Build <br />
              <span className="text-neutral-500">Something Great</span> Together
            </h1>
          </div>

          <div className="pl-0 lg:pl-10 lg:border-l border-white/10">
            <p className="text-lg text-neutral-400 leading-relaxed">
              We transform complex data landscapes into architectural
              masterpieces. Reach out to start your digital evolution.
            </p>
          </div>
        </div>
      </header>

      {/* Why Choose Us - Spacious, Dynamic & Interactive */}
      <section className="py-24 px-6 max-w-screen-xl mx-auto bg-black text-white">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Why choose <span className="text-neutral-500">Covianlab?</span>
          </h2>
          <p className="text-neutral-400 text-base max-w-lg">
            We aren't just consultants; we are your strategic execution
            partners in the digital void.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                // 👉 Dynamic Pop-out Hover Animation
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  borderColor: "rgba(250, 204, 21, 0.4)",
                  boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.9)",
                }}
                className="bg-[#12141a] border border-white/10 rounded-3xl p-10 transition-colors duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="mb-8 w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-amber-400 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-white text-xl mb-3 tracking-tight">
                    {feat.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}