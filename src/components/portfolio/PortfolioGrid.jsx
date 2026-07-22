"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  TrendingUp,
  BarChart2,
  ShoppingCart,
  Heart,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Zap,
} from "lucide-react";

const filters = ["All Works", "Web", "Apps", "Data"];

const projects = [
  {
    id: 1,
    index: "01",
    category: "data",
    dept: "Data Engineering",
    title: "Nexus Analytics Engine",
    desc: "Real-time data processing pipeline designed for global logistics enterprise, handling over 2M events per second with sub-millisecond latency.",
    metric: "40%",
    metricLabel: "Infra Cost Reduction",
    status: "Production Deployment",
    stack: ["Go", "Apache Kafka", "Redis", "AWS Kinesis"],
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    icon: BarChart2,
  },
  {
    id: 2,
    index: "02",
    category: "web",
    dept: "Web Architecture",
    title: "Aura Design System",
    desc: "Architected and engineered a scalable multi-platform design system and component architecture for a Fortune 500 fintech platform.",
    metric: "95%",
    metricLabel: "Developer Adoption Rate",
    status: "Multi-Squad Rollout",
    stack: ["React", "TypeScript", "Tailwind CSS", "Figma API"],
    img: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=1200&q=80",
    icon: Cpu,
  },
  {
    id: 3,
    index: "03",
    category: "apps",
    dept: "Mobile Systems",
    title: "Zenith Fintech App",
    desc: "Ultra-low latency mobile banking architecture featuring native end-to-end hardware encryption and real-time ledger sync.",
    metric: "500K+",
    metricLabel: "Active Users (Q1)",
    status: "Live on iOS & Android",
    stack: ["Flutter", "Rust Native", "GraphQL", "AES-256"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    icon: ShieldCheck,
  },
  {
    id: 4,
    index: "04",
    category: "data",
    dept: "Predictive AI",
    title: "Void Intelligence Platform",
    desc: "Autonomous predictive maintenance engine utilizing machine learning models to anticipate mission-critical hardware failures before downtime.",
    metric: "$2.4M",
    metricLabel: "Annual Downtime Saved",
    status: "Enterprise Scaled",
    stack: ["Python", "PyTorch", "Kubernetes", "TimeScaleDB"],
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    icon: Zap,
  },
  {
    id: 5,
    index: "05",
    category: "apps",
    dept: "Biometric IoT",
    title: "VitalPulse Health Ecosystem",
    desc: "Clinical-grade health monitoring system connecting wearable IoT hardware to a real-time biometric feedback loop for medical specialists.",
    metric: "300%",
    metricLabel: "Patient Engagement Boost",
    status: "HIPAA Compliant",
    stack: ["React Native", "WebSockets", "Bluetooth LE", "Node.js"],
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
    icon: Heart,
  },
  {
    id: 6,
    index: "06",
    category: "web",
    dept: "E-Commerce Infrastructure",
    title: "LuxeStore Global Platform",
    desc: "Headless e-commerce system built for high-throughput luxury retail, optimized for instant global edge delivery and localized checkouts.",
    metric: "+22%",
    metricLabel: "Checkout Conversion",
    status: "Global Multi-Region",
    stack: ["Next.js", "Shopify Storefront API", "Vercel Edge", "Stripe"],
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    icon: ShoppingCart,
  },
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All Works");

  const filterKey = activeFilter === "All Works" ? "all" : activeFilter.toLowerCase();
  const filtered =
    filterKey === "all"
      ? projects
      : projects.filter((p) => p.category === filterKey);

  return (
    <section className="pb-40 pt-12 bg-surface relative">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        
        {/* Category Filter Bar (Made Larger) */}
        <div className="sticky top-6 z-50 mb-20 py-5 bg-surface/90 backdrop-blur-xl border border-white/10 rounded-sm px-8 flex items-center justify-between gap-6 flex-wrap shadow-2xl">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-primary-container animate-ping" />
            <span className="text-sm font-label uppercase tracking-widest text-on-surface-variant font-bold">
              Engineering Showcase ({filtered.length})
            </span>
          </div>
          <div className="flex gap-3 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-sm font-label font-bold uppercase tracking-wider px-6 py-3 rounded-sm transition-all cursor-pointer ${
                  activeFilter === f
                    ? "signature-gradient text-on-primary-fixed shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                    : "bg-surface-container border border-white/10 text-on-surface-variant hover:border-white/20 hover:text-on-surface"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Natural Scrolling Container with massive spacing */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter} 
            className="flex flex-col gap-24 lg:gap-40" // Huge vertical spacing pushes footer down
          >
            {filtered.map((project) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  // The "Slap" Animation: Snaps up from below with spring physics
                  initial={{ opacity: 0, y: 150, scale: 0.92, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="relative overflow-hidden bg-surface-container border border-white/10 rounded-sm p-10 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.6)] group hover:border-primary-container/40 transition-colors duration-500"
                >
                  {/* Ambient Glow */}
                  <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-primary-container/10 to-transparent opacity-30 pointer-events-none group-hover:opacity-60 transition-opacity duration-700" />

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left Column: Massive System Details */}
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        {/* Header Badges */}
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                          <div className="flex items-center gap-4">
                            <span className="text-5xl lg:text-6xl font-headline font-black text-primary-container">
                              {project.index}
                            </span>
                            <span className="text-xs lg:text-sm font-label uppercase tracking-widest text-primary-container font-bold bg-primary-container/10 border border-primary-container/20 px-4 py-2 rounded-sm">
                              {project.dept}
                            </span>
                          </div>
                          <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold border border-white/5 bg-surface/80 px-4 py-2 rounded-sm flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            {project.status}
                          </span>
                        </div>

                        {/* Huge Title & Desc */}
                        <h3 className="text-4xl lg:text-5xl font-headline font-black text-on-surface mb-6 leading-tight group-hover:text-primary-container transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-on-surface-variant text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
                          {project.desc}
                        </p>
                      </div>

                      {/* Massive Metric Box */}
                      <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-8 items-end">
                        <div className="p-6 lg:p-8 rounded-sm bg-surface/80 border border-white/5 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/10 rounded-full blur-2xl pointer-events-none" />
                          <div className="flex items-center gap-3 mb-2">
                            <TrendingUp className="w-5 h-5 text-primary-container" />
                            <span className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-bold">
                              Key Impact
                            </span>
                          </div>
                          <div className="text-4xl lg:text-5xl font-headline font-black text-on-surface tracking-tight mt-2">
                            {project.metric}
                          </div>
                          <div className="text-sm lg:text-base text-primary-container font-bold mt-2">
                            {project.metricLabel}
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold block mb-4">
                            Architecture
                          </span>
                          <div className="flex flex-wrap gap-2.5">
                            {project.stack.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs font-mono font-bold text-on-surface/90 bg-white/5 px-4 py-2 rounded-sm border border-white/10 hover:border-primary-container/40 transition-colors cursor-default"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Giant Visual Viewport */}
                    <div className="relative h-[40vh] lg:h-[60vh] rounded-sm overflow-hidden border border-white/10 group-hover:border-primary-container/40 transition-all duration-500 shadow-2xl">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent opacity-90" />

                      {Icon && (
                        <div className="absolute top-6 right-6 p-4 rounded-sm bg-surface/90 backdrop-blur-xl border border-white/10 text-primary-container shadow-2xl">
                          <Icon className="w-6 h-6 lg:w-8 lg:h-8" />
                        </div>
                      )}

                      <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-primary-container text-on-primary-fixed px-6 py-3.5 rounded-sm font-headline font-black text-sm uppercase tracking-wider opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-2xl cursor-pointer">
                        View Case Study <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}