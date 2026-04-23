"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, TrendingUp, BarChart2 } from "lucide-react";

const services = [
  {
    category: "Architecture",
    title: "Web Development",
    description: "High-fidelity corporate sites and complex web applications built for speed, SEO, and massive scale.",
    icon: Globe,
    tags: ["React", "Next.js", "Webflow"],
    colSpan: "md:col-span-8",
  },
  {
    category: "Product",
    title: "App Design",
    description: "Native and hybrid mobile experiences that prioritize user psychology and fluid interactions.",
    icon: Smartphone,
    colSpan: "md:col-span-4",
  },
  {
    category: "Growth",
    title: "Marketing",
    description: "Data-driven performance marketing and content strategies that dominate the digital noise.",
    icon: TrendingUp,
    colSpan: "md:col-span-4",
    hasArrow: true,
  },
  {
    category: "Intelligence",
    title: "Data Insights",
    description: "Advanced analytics, AI-powered predictive modeling, and custom dashboard engineering for decision makers.",
    icon: BarChart2,
    colSpan: "md:col-span-8",
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
        <h3 className="text-4xl font-headline font-bold mt-4">{service.title}</h3>
        <p className="mt-6 text-on-surface-variant max-w-md text-lg">{service.description}</p>
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

      {service.hasArrow && (
        <motion.div
          className="mt-8 text-primary relative z-10"
          whileHover={{ x: 8 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <TrendingUp className="w-10 h-10" />
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
        <div ref={ref} className="mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-label uppercase tracking-[0.2em] text-primary-container font-bold mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-headline font-black tracking-tighter"
          >
            What We Do.
          </motion.h2>
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
