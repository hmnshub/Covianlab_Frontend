"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart2, Cpu, Rocket, Bot } from "lucide-react";

const services = [
  {
    category: "Foundation",
    title: "Data & Strategic Models",
    description:
      "We start with the math. Advanced analytics and AI-powered predictive models that form the bedrock of every decision.",
    icon: BarChart2,
    tags: ["Predictive Models", "ROI Attribution", "Market Intelligence"],
    colSpan: "md:col-span-6",
  },
  {
    category: "Build",
    title: "Product Engine",
    description:
      "Scalable design and high-performance development focused on user acquisition and retention mechanics.",
    icon: Cpu,
    colSpan: "md:col-span-6",
    hasArrow: true,
  },
  {
    category: "Attract",
    title: "Performance Growth",
    description:
      "Aggressive marketing systems that leverage data to find your highest-value customers at scale.",
    icon: Rocket,
    colSpan: "md:col-span-6",
    hasRocket: true,
  },
  {
    category: "Optimize",
    title: "QA & AI Automations",
    description:
      "Continuous improvement models through automated testing and AI workflows that ensure the system never stops evolving.",
    icon: Bot,
    colSpan: "md:col-span-6",
    hasChart: true,
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${service.colSpan} bg-surface-container hover:bg-surface-container-highest transition-all duration-500 p-10 group relative overflow-hidden flex flex-col justify-between min-h-[280px]`}
    >
      {/* Background icon */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
        <Icon className="w-36 h-36 text-primary" strokeWidth={0.5} />
      </div>

      <div className="relative z-10">
        <span className="text-primary-container font-bold text-sm tracking-widest font-label uppercase">
          {service.category}
        </span>
        <h3 className="text-3xl font-headline font-bold mt-4">{service.title}</h3>
        <p className="mt-4 text-on-surface-variant max-w-md">{service.description}</p>
      </div>

      {service.tags && (
        <div className="flex flex-wrap gap-3 mt-8 relative z-10">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1 bg-surface-container-lowest border border-white/5 text-xs text-on-surface-variant uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {service.hasRocket && (
        <motion.div
          className="mt-8 text-primary relative z-10"
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Rocket className="w-10 h-10 text-primary-container" />
        </motion.div>
      )}

      {service.hasChart && (
        <div className="absolute right-10 bottom-10 w-48 p-4 bg-surface-container-lowest/50 rounded-sm hidden lg:block">
          <div className="flex items-end gap-1.5 h-16">
            {[40, 65, 50, 80, 60, 90, 70, 95].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={isInView ? { height: `${h}%` } : {}}
                transition={{ delay: 0.5 + i * 0.06, duration: 0.4 }}
                className="flex-1 signature-gradient rounded-sm opacity-70"
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 bg-surface relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div ref={ref} className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-label uppercase tracking-[0.2em] text-primary-container font-bold mb-4 block"
          >
            Our Systemized Approach
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-headline font-black tracking-tighter"
          >
            What We Do.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-on-surface-variant text-lg max-w-xl"
          >
            We design systems that{" "}
            <strong className="text-on-surface">build, attract, track, and optimize</strong>{" "}
            continuously. No silos, just results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
