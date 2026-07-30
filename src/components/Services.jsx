"use client";

import { motion } from "framer-motion";
import { BarChart2, Cpu, Rocket, Bot } from "lucide-react";

const services = [
  { title: "Data & Strategic Models", desc: "Advanced analytics and AI-powered predictive models that form the bedrock of every decision.", icon: BarChart2 },
  { title: "Product Engine", desc: "Scalable design and high-performance development focused on acquisition and retention.", icon: Cpu },
  { title: "Performance Growth", desc: "Aggressive marketing systems that leverage data to find your highest-value customers at scale.", icon: Rocket },
  { title: "QA & AI Automations", desc: "Continuous improvement models through automated testing and AI workflows.", icon: Bot },
];

export default function Services() {
  return (
    <section className="py-28 px-6 max-w-screen-xl mx-auto bg-transparent text-white relative z-10">
      
      {/* Section Header */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Systemized <span className="text-neutral-500">Approach.</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                scale: 1.02,
                y: -8,
                boxShadow: "0 25px 50px -15px rgba(212, 175, 55, 0.15)",
              }}
              className="relative bg-[#0b0b0b] border border-[#d4af37]/30 hover:border-[#d4af37]/70 rounded-3xl p-10 transition-all duration-300 flex flex-col justify-between cursor-pointer group overflow-hidden"
            >
              {/* Subtle gold ambient glow on the card background */}
              <div className="absolute -right-20 -top-20 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/10 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="mb-8 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-inner">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
              </div>
              <p className="relative z-10 text-sm md:text-base text-neutral-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}