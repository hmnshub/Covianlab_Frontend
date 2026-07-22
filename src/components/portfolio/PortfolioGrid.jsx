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
    visualType: "terminal",
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
    visualType: "design-system",
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
    visualType: "dashboard-mobile",
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
    visualType: "network",
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
    visualType: "biometric",
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
    visualType: "ecommerce",
    icon: ShoppingCart,
  },
];

/* ========================================================
    UPGRADED HIGH-FIDELITY VISUALIZERS 
======================================================== */

const TerminalVisual = () => (
  <div className="w-full h-full bg-[#050914] p-4 md:p-6 flex flex-col font-mono text-[10px] md:text-sm text-cyan-400 overflow-hidden relative shadow-inner">
    <div className="flex gap-2 mb-3 pb-3 border-b border-white/10 w-full items-center">
      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56]" />
      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]" />
      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f]" />
      <div className="ml-4 text-slate-400 text-[10px] hidden sm:block">root@nexus-core:~</div>
    </div>
    <div className="flex flex-col gap-1.5 md:gap-2 relative z-10">
      <div className="text-emerald-400">➜ <span className="text-blue-400">~</span> ./start_data_pipeline.sh</div>
      <div className="text-slate-300">[INITIALIZING] Memory allocation: 128GB...</div>
      <div className="text-white">[OK] Kubernetes pods spun up (12/12)</div>
      <div className="text-white">[OK] WebSocket tunnels established.</div>
      <div className="text-yellow-400 font-bold">[WARN] Traffic spike detected. Auto-scaling.</div>
      <div className="text-emerald-400 font-black text-xs md:text-base mt-1">
        {">"} SYSTEM ONLINE: 2,041,892 events/sec
      </div>
    </div>
    <div className="absolute bottom-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-cyan-500/20 blur-[80px] pointer-events-none" />
  </div>
);

const DesignSystemVisual = () => (
  <div className="w-full h-full bg-[#0b1121] flex relative overflow-hidden text-slate-300 font-sans">
    <div className="w-1/3 max-w-[120px] md:max-w-[150px] h-full border-r border-white/10 bg-slate-900/90 p-3 md:p-4 flex flex-col gap-2 z-10 text-[9px] md:text-xs">
      <div className="text-slate-500 font-mono mb-1 uppercase tracking-widest text-[8px]">Components</div>
      <div className="py-1.5 px-2 md:py-2 md:px-3 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-bold">Buttons</div>
      <div className="py-1.5 px-2 md:py-2 md:px-3 rounded text-slate-400 opacity-60">Typography</div>
      <div className="py-1.5 px-2 md:py-2 md:px-3 rounded text-slate-400 opacity-60">Color System</div>
    </div>
    <div className="flex-1 p-3 md:p-6 flex flex-col gap-3 relative z-10 overflow-hidden">
      <div className="border-b border-white/10 pb-2">
        <div className="text-sm md:text-lg font-bold text-white tracking-tight">Button</div>
        <div className="text-[10px] md:text-xs text-slate-400">Primary interactive component.</div>
      </div>
      <div className="bg-slate-800/50 border border-white/10 rounded-xl p-3 md:p-6 flex items-center justify-center gap-3">
        <button className="px-4 py-1.5 md:px-6 md:py-2.5 bg-cyan-400 text-slate-950 font-bold text-xs rounded shadow-md">Primary</button>
        <button className="px-4 py-1.5 md:px-6 md:py-2.5 border border-slate-600 text-slate-200 font-bold text-xs rounded">Secondary</button>
      </div>
      <div className="bg-[#050505] border border-white/10 rounded-lg p-3 font-mono text-[9px] overflow-hidden">
        <span className="text-pink-400">import <span className="text-white">{"{ Button }"}</span> from <span className="text-emerald-400">'@aura/ui'</span>;</span>
      </div>
    </div>
  </div>
);

const DashboardMobileVisual = () => (
  <div className="w-full h-full bg-[#0a0f1c] flex items-center justify-center p-2 md:p-6 relative overflow-hidden">
    <div className="w-[220px] md:w-[260px] h-[360px] md:h-[460px] border-[6px] md:border-[8px] border-slate-800 rounded-[2.5rem] bg-[#020617] relative overflow-hidden shadow-2xl z-10 flex flex-col">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20" />
      <div className="px-4 pt-10 pb-2 flex justify-between items-center bg-slate-900/50">
        <div className="w-16 h-3 bg-white rounded-full" />
        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400" />
      </div>
      <div className="px-4 py-2">
        <div className="w-full h-24 md:h-32 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-xl p-3 flex flex-col justify-between shadow-lg">
          <div className="w-12 h-2 bg-white/40 rounded-full" />
          <div className="w-24 h-5 bg-white rounded-md" />
        </div>
      </div>
      <div className="flex-1 px-4 py-2 flex flex-col gap-2">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-800" />
            <div className="flex-1 flex flex-col gap-1.5">
              <div className="w-full h-2 bg-slate-300 rounded-full" />
              <div className="w-1/2 h-1.5 bg-slate-600 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const NetworkVisual = () => (
  <div className="w-full h-full bg-[#020617] relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
    <svg className="absolute inset-0 w-full h-full z-0">
      <path d="M 20% 30% L 50% 50% L 80% 40% L 70% 80% L 30% 70% Z" stroke="rgba(34, 211, 238, 0.6)" strokeWidth="2" fill="none" />
    </svg>
    {[
      { top: "30%", left: "20%", color: "cyan" },
      { top: "50%", left: "50%", color: "indigo", size: "large" },
      { top: "40%", left: "80%", color: "cyan" },
      { top: "70%", left: "30%", color: "cyan" },
    ].map((node, i) => (
      <div key={i} className="absolute z-10 flex items-center justify-center" style={{ top: node.top, left: node.left, width: '24px', height: '24px', backgroundColor: 'rgba(34,211,238,0.2)', transform: 'translate(-50%, -50%)', borderRadius: '50%' }}>
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
      </div>
    ))}
  </div>
);

const BiometricVisual = () => (
  <div className="w-full h-full bg-[#030712] relative overflow-hidden flex flex-col justify-center p-4 md:p-8">
    <div className="absolute top-4 left-4 flex items-center gap-2 z-10 bg-rose-950/50 p-2 rounded-lg border border-rose-500/30">
      <Heart className="text-rose-500 w-5 h-5 animate-ping" />
      <span className="text-rose-400 font-mono font-bold text-sm md:text-xl">BPM: 72</span>
    </div>
    <div className="relative w-full h-24 md:h-40 flex items-center justify-center z-10 mt-6">
      <svg viewBox="0 0 200 60" className="w-full h-24 md:h-40 overflow-visible">
        <path d="M 0 30 L 40 30 L 50 5 L 60 55 L 70 30 L 130 30 L 140 15 L 150 40 L 160 30 L 200 30" fill="none" stroke="#f43f5e" strokeWidth="2.5" />
      </svg>
    </div>
  </div>
);

const EcommerceVisual = () => (
  <div className="w-full h-full bg-[#0a0f1c] flex items-center justify-center p-4 relative overflow-hidden">
    <div className="w-full max-w-[260px] md:max-w-[300px] bg-slate-900/90 border border-white/20 rounded-xl p-4 flex flex-col gap-4 shadow-2xl relative z-10">
      <div className="w-full aspect-video bg-slate-800 rounded-lg relative overflow-hidden">
        <div className="absolute bottom-2 right-2 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
          <ShoppingCart className="w-4 h-4 text-white" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="w-1/2 h-4 bg-white/90 rounded" />
        <div className="w-1/4 h-4 bg-emerald-400 rounded" />
      </div>
      <div className="w-full h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-xs uppercase tracking-wider">
        Processing
      </div>
    </div>
  </div>
);

/* ========================================================
   MAIN COMPONENT GRID
======================================================== */

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All Works");

  const filterKey = activeFilter === "All Works" ? "all" : activeFilter.toLowerCase();
  const filtered = filterKey === "all" ? projects : projects.filter((p) => p.category === filterKey);

  return (
    <section className="pb-20 md:pb-40 pt-8 md:pt-12 bg-surface relative">
      <div className="max-w-screen-xl mx-auto px-4 md:px-10">
        
        {/* Category Filter Bar */}
        <div className="sticky top-4 z-50 mb-12 md:mb-20 py-3 md:py-5 bg-surface/90 backdrop-blur-xl border border-white/10 rounded-sm px-4 md:px-8 flex items-center justify-between gap-4 flex-wrap shadow-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-ping" />
            <span className="text-xs md:text-sm font-label uppercase tracking-widest text-on-surface-variant font-bold">
              Showcase ({filtered.length})
            </span>
          </div>
          <div className="flex gap-2 md:gap-3 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-xs md:text-sm font-label font-bold uppercase tracking-wider px-3 md:px-6 py-2 md:py-3 rounded-sm transition-all cursor-pointer ${
                  activeFilter === f
                    ? "signature-gradient text-on-primary-fixed shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    : "bg-surface-container border border-white/10 text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Natural Scrolling Container */}
        <AnimatePresence mode="wait">
          <motion.div key={activeFilter} className="flex flex-col gap-12 md:gap-32">
            {filtered.map((project) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative overflow-hidden bg-surface-container border border-white/10 rounded-sm p-5 md:p-12 lg:p-16 shadow-xl group hover:border-primary-container/40 transition-colors"
                >
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    
                    {/* Left Column: System Details */}
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 md:mb-8">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl md:text-6xl font-headline font-black text-primary-container">
                              {project.index}
                            </span>
                            <span className="text-[10px] md:text-xs font-label uppercase tracking-widest text-primary-container font-bold bg-primary-container/10 border border-primary-container/20 px-3 py-1.5 rounded-sm">
                              {project.dept}
                            </span>
                          </div>
                          <span className="text-[10px] md:text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold border border-white/5 bg-surface/80 px-3 py-1.5 rounded-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {project.status}
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-4xl lg:text-5xl font-headline font-black text-on-surface mb-4 md:mb-6 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-on-surface-variant text-sm md:text-lg leading-relaxed mb-6 md:mb-10 max-w-xl">
                          {project.desc}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
                        <div className="p-4 md:p-6 rounded-sm bg-surface/80 border border-white/5">
                          <div className="flex items-center gap-2 mb-1">
                            <TrendingUp className="w-4 h-4 text-primary-container" />
                            <span className="text-[10px] md:text-xs font-label uppercase tracking-wider text-on-surface-variant font-bold">
                              Key Impact
                            </span>
                          </div>
                          <div className="text-2xl md:text-4xl font-headline font-black text-on-surface tracking-tight mt-1">
                            {project.metric}
                          </div>
                          <div className="text-xs md:text-sm text-primary-container font-bold mt-1">
                            {project.metricLabel}
                          </div>
                        </div>

                        <div>
                          <span className="text-[10px] md:text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold block mb-2 md:mb-4">
                            Architecture
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                              <span
                                key={tech}
                                className="text-[10px] md:text-xs font-mono font-bold text-on-surface/90 bg-white/5 px-3 py-1.5 rounded-sm border border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Dynamic Visualizer (Fixed Height for Mobile Single-Frame View) */}
                    <div className="relative h-[280px] sm:h-[340px] lg:h-[550px] rounded-lg overflow-hidden border border-white/10 shadow-lg">
                      {project.visualType === "terminal" && <TerminalVisual />}
                      {project.visualType === "design-system" && <DesignSystemVisual />}
                      {project.visualType === "dashboard-mobile" && <DashboardMobileVisual />}
                      {project.visualType === "network" && <NetworkVisual />}
                      {project.visualType === "biometric" && <BiometricVisual />}
                      {project.visualType === "ecommerce" && <EcommerceVisual />}

                      {Icon && (
                        <div className="absolute top-4 right-4 p-3 rounded-lg bg-slate-900/95 backdrop-blur-xl border border-white/20 text-primary-container shadow-xl z-30">
                          <Icon className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                      )}

                      <div className="absolute bottom-4 right-4 hidden md:flex items-center gap-2 bg-primary-container text-on-primary-fixed px-5 py-2.5 rounded-sm font-headline font-bold text-xs uppercase tracking-wider opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-xl cursor-pointer z-30">
                        View Case Study <ArrowUpRight className="w-4 h-4" />
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