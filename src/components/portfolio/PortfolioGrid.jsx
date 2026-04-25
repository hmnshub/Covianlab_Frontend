"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TrendingUp, BarChart2, ExternalLink } from "lucide-react";

const filters = ["All", "Web", "Data", "Marketing"];

const projects = [
  {
    id: 1,
    category: "data",
    dept: "Data Engineering",
    title: "Nexus Analytics Engine",
    desc: "Developed a real-time data processing pipeline for global logistics, handling over 2M events per second with sub-millisecond latency.",
    result: "40% reduction in infrastructure costs & zero-downtime migration.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    icon: BarChart2,
    size: "large",
  },
  {
    id: 2,
    category: "web",
    dept: "Web Experience",
    title: "Aura Design System",
    desc: "Architected a scalable multi-platform design system for a Fortune 500 fintech firm.",
    result: "95% developer adoption rate across 12 product squads.",
    img: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400&q=80",
    icon: null,
    size: "small",
  },
  {
    id: 3,
    category: "marketing",
    dept: "Marketing Tech",
    title: "Growth Loop 2.0",
    desc: "AI-driven customer acquisition strategy leveraging predictive modeling.",
    result: "3.4x ROI increase in first quarter of deployment.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    icon: null,
    size: "medium",
  },
  {
    id: 4,
    category: "data",
    dept: "Data Infrastructure",
    title: "System Integration",
    desc: "End-to-end enterprise data integration across 14 legacy systems.",
    result: "Unified pipeline serving 3M daily active users.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    icon: null,
    size: "feature",
  },
  {
    id: 5,
    category: "web",
    dept: "Web Infrastructure",
    title: "Void Edge Framework",
    desc: "Next-generation serverless framework optimized for extreme edge computing environments.",
    result: "Lighthouse score 100/100 across all core vitals globally.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    icon: null,
    size: "small",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ProjectCard({ project }) {
  const Icon = project.icon;
  const isLarge = project.size === "large";
  const isFeature = project.size === "feature";

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      className="bg-surface-container border border-white/5 rounded-sm overflow-hidden group cursor-pointer transition-all hover:border-primary-container/20 flex flex-col"
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${
          isLarge ? "h-64" : isFeature ? "h-56" : "h-40"
        }`}
      >
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/30 to-transparent" />
        {isFeature && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-headline font-black uppercase tracking-widest text-on-surface/60">
              System Integration
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <span className="text-[10px] font-label uppercase tracking-widest text-primary-container font-bold bg-primary-container/10 px-2.5 py-1 rounded-sm">
            {project.dept}
          </span>
          {Icon && (
            <Icon className="w-5 h-5 text-primary-container opacity-70" />
          )}
        </div>
        <h3 className="text-lg font-headline font-black text-on-surface mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-on-surface-variant leading-relaxed flex-1">
          {project.desc}
        </p>
        {project.result && (
          <div className="mt-4 pt-4 border-t border-outline-variant/20">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-3 h-3 text-primary-container flex-shrink-0" />
              <span className="text-xs font-label uppercase tracking-wider text-primary-container font-bold">
                {isLarge ? "Result:" : "Metric Delivered"}
              </span>
            </div>
            <p
              className={`text-xs mt-1 font-bold ${
                isLarge
                  ? "text-primary-container uppercase tracking-wide"
                  : "text-on-surface-variant"
              }`}
            >
              {project.result}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (p) => p.category === activeFilter.toLowerCase()
        );

  return (
    <section className="pb-24 bg-surface">
      <div className="max-w-screen-xl mx-auto px-8">
        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs font-label font-bold uppercase tracking-wider px-5 py-2 rounded-sm transition-all cursor-pointer ${
                activeFilter === f
                  ? "signature-gradient text-on-primary-fixed"
                  : "bg-surface-container border border-white/10 text-on-surface-variant hover:border-white/20 hover:text-on-surface"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
