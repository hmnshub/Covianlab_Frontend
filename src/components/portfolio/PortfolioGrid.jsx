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

// 1. Terminal (Data Backend)
const TerminalVisual = () => (
  <div className="w-full h-full bg-[#050914] p-6 flex flex-col font-mono text-[11px] md:text-sm text-cyan-400 overflow-hidden relative shadow-inner">
    <div className="flex gap-2 mb-4 pb-4 border-b border-white/10 w-full items-center">
      <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_#ff5f56]" />
      <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_#ffbd2e]" />
      <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_#27c93f]" />
      <div className="ml-4 text-slate-400 text-[10px] hidden sm:block">root@nexus-core:~</div>
    </div>
    <div className="flex flex-col gap-2 opacity-100 relative z-10">
      <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
        <span className="text-emerald-400">➜</span> <span className="text-blue-400">~</span> ./start_data_pipeline.sh
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-slate-300">
        [INITIALIZING] Memory allocation: 128GB...
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.9 }} className="text-white">
        [OK] Kubernetes pods spun up (12/12)
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-white">
        [OK] WebSocket tunnels established.
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5 }} className="text-yellow-400 font-bold">
        [WARN] Traffic spike detected. Auto-scaling enabled.
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2.0 }} className="text-emerald-400 font-black text-base mt-2 shadow-emerald-400/50 drop-shadow-md">
        {/* The unescaped > character was causing the crash, it is now safely wrapped */}
        {">"} SYSTEM ONLINE: 2,041,892 events/sec
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2.3 }} className="flex items-center gap-2 mt-2">
        <span className="text-emerald-400">➜</span> <span className="text-blue-400">~</span> 
        <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-4 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
      </motion.div>
    </div>
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/20 blur-[100px] pointer-events-none" />
  </div>
);

// 2. Design System (Web UI Architecture)
// 2. Design System (Web UI Architecture)
const DesignSystemVisual = () => (
  <div className="w-full h-full bg-[#0b1121] flex relative overflow-hidden text-slate-300 font-sans">
    
    {/* Left Sidebar - Component Navigation */}
    <div className="w-1/3 max-w-[150px] h-full border-r border-white/10 bg-slate-900/90 p-4 flex flex-col gap-2 z-10 text-[10px] md:text-xs overflow-hidden">
      <div className="text-slate-500 font-mono mb-2 uppercase tracking-widest text-[9px]">Components</div>
      <div className="py-2 px-3 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-bold shadow-[0_0_10px_rgba(34,211,238,0.1)]">Buttons</div>
      <div className="py-2 px-3 rounded text-slate-400 opacity-60">Typography</div>
      <div className="py-2 px-3 rounded text-slate-400 opacity-60">Color System</div>
      <div className="py-2 px-3 rounded text-slate-400 opacity-60">Form Inputs</div>
      <div className="py-2 px-3 rounded text-slate-400 opacity-60">Modals</div>
    </div>

    {/* Main Canvas - Component Viewer */}
    <div className="flex-1 p-5 lg:p-8 flex flex-col gap-4 lg:gap-6 relative z-10 overflow-hidden">
      
      {/* Header */}
      <div className="border-b border-white/10 pb-4">
        <div className="text-xl font-bold text-white mb-1 tracking-tight">Button</div>
        <div className="text-xs text-slate-400">Primary interactive component for user actions.</div>
      </div>

      {/* Live Component Preview Stage */}
      <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 lg:p-10 flex items-center justify-center gap-4 lg:gap-6 relative overflow-hidden bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px]">
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          className="px-6 py-2.5 bg-cyan-400 text-slate-950 font-bold text-xs lg:text-sm rounded hover:bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-colors cursor-pointer"
        >
          Primary
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          className="px-6 py-2.5 border border-slate-600 text-slate-200 font-bold text-xs lg:text-sm rounded hover:bg-white/10 transition-colors cursor-pointer"
        >
          Secondary
        </motion.button>
      </div>

      {/* Specs and Code Snippets */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 flex-1">
         {/* Code Block */}
         <div className="bg-[#050505] border border-white/10 rounded-lg p-4 font-mono text-[9px] lg:text-[10px] overflow-hidden">
           <div className="text-slate-600 mb-2">// React Implementation</div>
           <div className="text-pink-400 truncate">import <span className="text-white">{"{ Button }"}</span> from <span className="text-emerald-400">'@aura/ui'</span>;</div>
           <div className="mt-3 text-slate-300">
             <span className="text-cyan-400">{"<Button"}</span> <span className="text-indigo-300">variant</span>=<span className="text-emerald-400">"primary"</span><span className="text-cyan-400">{">"}</span><br/>
             &nbsp;&nbsp;Submit Data<br/>
             <span className="text-cyan-400">{"</Button>"}</span>
           </div>
         </div>
         
         {/* Props Table */}
         <div className="bg-slate-900/80 border border-white/10 rounded-lg p-4 flex flex-col gap-3 hidden xl:flex">
           <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Properties</div>
           <div className="flex justify-between items-center text-[10px]">
             <span className="font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">variant</span>
             <span className="text-slate-400">primary | secondary</span>
           </div>
           <div className="flex justify-between items-center text-[10px]">
             <span className="font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">size</span>
             <span className="text-slate-400">sm | md | lg</span>
           </div>
         </div>
      </div>
    </div>
  </div>
);

// 3. Mobile App Visual (Fintech Banking Dashboard)
const DashboardMobileVisual = () => (
  <div className="w-full h-full bg-[#0a0f1c] flex items-center justify-center p-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 to-transparent" />
    
    {/* Premium Glass Phone Frame */}
    <div className="w-[280px] h-[520px] border-[8px] border-slate-800 rounded-[3rem] bg-[#020617] relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10 flex flex-col">
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />
      
      {/* App Header */}
      <div className="px-6 pt-14 pb-4 flex justify-between items-center bg-slate-900/50">
        <div className="flex flex-col gap-2">
          <div className="w-16 h-2 bg-slate-600 rounded-full" />
          <div className="w-24 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[2px]">
           <div className="w-full h-full bg-slate-900 rounded-full border border-white/20" />
        </div>
      </div>

      {/* Main Balance Card */}
      <div className="px-6 py-2">
        <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="w-full h-40 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-2xl p-5 flex flex-col justify-between shadow-[0_15px_30px_rgba(99,102,241,0.4)] relative overflow-hidden">
          <div className="w-16 h-3 bg-white/40 rounded-full" />
          <div className="w-3/4 h-8 bg-white rounded-md shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
          {/* Animated SVG Sparkline */}
          <svg className="absolute bottom-0 left-0 w-full h-16 opacity-50" preserveAspectRatio="none">
            <motion.path 
              d="M0 30 Q 40 10, 80 40 T 160 20 T 280 10 L 280 64 L 0 64 Z" 
              fill="rgba(255,255,255,0.2)" 
              initial={{ y: 20 }} 
              animate={{ y: 0 }} 
              transition={{ duration: 1 }} 
            />
          </svg>
        </motion.div>
      </div>

      {/* Transactions List */}
      <div className="flex-1 px-6 py-4 flex flex-col gap-4">
        {[1, 2, 3].map((i) => (
          <motion.div key={i} initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 + i * 0.1 }} className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${i === 1 ? 'bg-emerald-500/20' : 'bg-slate-800'}`}>
               <div className={`w-4 h-4 rounded-full ${i === 1 ? 'bg-emerald-400 shadow-[0_0_10px_#34d399]' : 'bg-slate-600'}`} />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="w-full h-3 bg-slate-300 rounded-full" />
              <div className="w-1/2 h-2 bg-slate-600 rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

// 4. AI / Network Data Visual
const NetworkVisual = () => (
  <div className="w-full h-full bg-[#020617] relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
    <svg className="absolute inset-0 w-full h-full z-0">
      <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} d="M 20% 30% L 50% 50% L 80% 40% L 70% 80% L 30% 70% Z" stroke="rgba(34, 211, 238, 0.6)" strokeWidth="2" fill="none" />
      <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }} d="M 50% 50% L 30% 70% M 50% 50% L 70% 80%" stroke="rgba(99, 102, 241, 0.6)" strokeWidth="2" fill="none" />
    </svg>
    {[
      { top: "30%", left: "20%", color: "cyan" },
      { top: "50%", left: "50%", color: "indigo", size: "large" },
      { top: "40%", left: "80%", color: "cyan" },
      { top: "80%", left: "70%", color: "indigo" },
      { top: "70%", left: "30%", color: "cyan" },
    ].map((node, i) => (
      <motion.div key={i} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.8 + (i * 0.1), type: "spring" }} className="absolute z-10 flex items-center justify-center" style={{ top: node.top, left: node.left, width: node.size === 'large' ? '56px' : '32px', height: node.size === 'large' ? '56px' : '32px', backgroundColor: node.color === 'cyan' ? 'rgba(34,211,238,0.2)' : 'rgba(99,102,241,0.2)', transform: 'translate(-50%, -50%)', borderRadius: '50%' }}>
          <div className="rounded-full animate-pulse shadow-[0_0_20px_currentColor]" style={{ width: node.size === 'large' ? '20px' : '12px', height: node.size === 'large' ? '20px' : '12px', backgroundColor: node.color === 'cyan' ? '#22d3ee' : '#818cf8', color: node.color === 'cyan' ? '#22d3ee' : '#818cf8' }} />
      </motion.div>
    ))}
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 w-[200%] h-[200%] origin-top-left border-l-[3px] border-cyan-400/80 bg-gradient-to-r from-cyan-500/30 to-transparent pointer-events-none z-20" style={{ transform: "translate(-50%, -50%)" }} />
  </div>
);

// 5. Biometric IoT Visual (Health Tech)
const BiometricVisual = () => (
  <div className="w-full h-full bg-[#030712] relative overflow-hidden flex flex-col justify-center p-8">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(244,63,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(244,63,94,0.1)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
    <div className="absolute top-8 left-8 flex items-center gap-4 z-10 bg-rose-950/50 p-3 rounded-lg border border-rose-500/30">
      <Heart className="text-rose-500 w-8 h-8 animate-[ping_1s_infinite]" />
      <span className="text-rose-400 font-mono font-black text-2xl tracking-widest drop-shadow-[0_0_10px_#f43f5e]">BPM: 72</span>
    </div>
    
    <div className="relative w-full h-40 flex items-center justify-center z-10 mt-10">
      <svg viewBox="0 0 200 60" className="w-full h-40 overflow-visible drop-shadow-[0_0_15px_rgba(244,63,94,1)]">
        <motion.path
          d="M 0 30 L 40 30 L 50 5 L 60 55 L 70 30 L 130 30 L 140 15 L 150 40 L 160 30 L 200 30"
          fill="none"
          stroke="#f43f5e" 
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>

    <div className="absolute bottom-8 right-8 flex flex-col items-end gap-1 z-10">
      <span className="text-[12px] font-mono text-slate-400 uppercase tracking-widest">Vitals Sync</span>
      <span className="text-emerald-400 font-bold font-mono text-sm shadow-emerald-400 drop-shadow-md">✓ Stable_Connection</span>
    </div>
  </div>
);

// 6. E-Commerce Headless Storefront Visual
const EcommerceVisual = () => (
  <div className="w-full h-full bg-[#0a0f1c] flex items-center justify-center p-8 relative overflow-hidden">
    <div className="absolute right-[-10%] top-[-20%] w-[60%] h-[150%] bg-emerald-500/15 blur-[100px] rounded-full pointer-events-none" />
    
    <motion.div 
      initial={{ y: 30, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }} 
      className="w-full max-w-[320px] bg-slate-900/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative z-10"
    >
      {/* Product Image Skeleton with Shimmer */}
      <div className="w-full aspect-video bg-slate-800 rounded-xl relative overflow-hidden border border-white/5">
        <motion.div 
          animate={{ x: ["-100%", "200%"] }} 
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} 
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" 
        />
        {/* Mock Product Details */}
        <div className="absolute bottom-3 right-3 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
           <ShoppingCart className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div className="w-2/3 h-6 bg-white/90 rounded-md shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
          <div className="w-1/4 h-6 bg-emerald-400 rounded-md shadow-[0_0_15px_rgba(52,211,153,0.4)]" />
        </div>
        
        {/* Mock Size/Color Selectors */}
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.3)]" />
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10" />
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10" />
        </div>

        {/* Animated Add to Cart Button */}
        <div className="w-full h-14 mt-2 bg-slate-800 rounded-xl relative overflow-hidden border border-white/10">
          <motion.div 
            animate={{ width: ["0%", "100%", "0%"] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
            className="absolute top-0 left-0 h-full bg-emerald-500 shadow-[0_0_20px_#10b981]" 
          />
          <div className="absolute inset-0 flex items-center justify-center mix-blend-difference text-white font-bold tracking-widest uppercase text-sm">
             Processing
          </div>
        </div>
      </div>
    </motion.div>
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
    <section className="pb-40 pt-12 bg-surface relative">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        
        {/* Category Filter Bar */}
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

        {/* Natural Scrolling Container */}
        <AnimatePresence mode="wait">
          <motion.div key={activeFilter} className="flex flex-col gap-24 lg:gap-40">
            {filtered.map((project) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 150, scale: 0.92, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="relative overflow-hidden bg-surface-container border border-white/10 rounded-sm p-8 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.6)] group hover:border-primary-container/40 transition-colors duration-500"
                >
                  <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-primary-container/10 to-transparent opacity-30 pointer-events-none group-hover:opacity-60 transition-opacity duration-700" />

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left Column: System Details */}
                    <div className="flex flex-col justify-between h-full">
                      <div>
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

                        <h3 className="text-4xl lg:text-5xl font-headline font-black text-on-surface mb-6 leading-tight group-hover:text-primary-container transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-on-surface-variant text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
                          {project.desc}
                        </p>
                      </div>

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

                    {/* Right Column: Dynamic High-Fidelity Visualizers */}
                    <div className="relative h-[45vh] lg:h-[65vh] rounded-xl overflow-hidden border border-white/10 group-hover:border-primary-container/50 transition-all duration-500 shadow-2xl">
                      
                      {project.visualType === "terminal" && <TerminalVisual />}
                      {project.visualType === "design-system" && <DesignSystemVisual />}
                      {project.visualType === "dashboard-mobile" && <DashboardMobileVisual />}
                      {project.visualType === "network" && <NetworkVisual />}
                      {project.visualType === "biometric" && <BiometricVisual />}
                      {project.visualType === "ecommerce" && <EcommerceVisual />}

                      {Icon && (
                        <div className="absolute top-6 right-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-xl border border-white/20 text-primary-container shadow-2xl z-30">
                          <Icon className="w-6 h-6 lg:w-8 lg:h-8" />
                        </div>
                      )}

                      <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-primary-container text-on-primary-fixed px-6 py-3.5 rounded-sm font-headline font-black text-sm uppercase tracking-wider opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-2xl cursor-pointer z-30">
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