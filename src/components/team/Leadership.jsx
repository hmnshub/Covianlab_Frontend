"use client";

import { motion } from "framer-motion";

// --- ROLE-SPECIFIC CUSTOM SVG GRAPHICS ---

const GraphGlobeIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M10 10v40h32" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 48v-12M24 48v-20M32 48v-16M40 48v-28" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 36l14-14 8 8 16-16m0 0h-8m8 0v8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="48" cy="48" r="14" stroke="#22d3ee" strokeWidth="2"/>
    <ellipse cx="48" cy="48" rx="6" ry="14" stroke="#22d3ee" strokeWidth="2"/>
    <path d="M34 48h28" stroke="#22d3ee" strokeWidth="2"/>
  </svg>
);

const GearCircuitIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M32 32h16v-12h8M40 32v16h6M24 16h-8v-6M16 48v8h8" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="58" cy="20" r="2" fill="#22d3ee"/>
    <circle cx="48" cy="48" r="2" fill="#22d3ee"/>
    <circle cx="16" cy="8" r="2" fill="#22d3ee"/>
    <circle cx="28" cy="28" r="10" stroke="white" strokeWidth="2"/>
    <path d="M28 14v4M28 38v4M14 28h4M38 28h4M18 18l3 3M37 37l3 3M18 38l3-3M37 18l3 3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="42" cy="44" r="6" stroke="white" strokeWidth="2"/>
    <path d="M42 34v4M42 50v4M32 44h4M48 44h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const TechAnalystIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="10" y="14" width="44" height="36" rx="3" stroke="white" strokeWidth="2"/>
    <path d="M10 24h44" stroke="white" strokeWidth="2"/>
    <circle cx="16" cy="19" r="1.5" fill="#22d3ee"/>
    <circle cx="22" cy="19" r="1.5" fill="#22d3ee"/>
    <path d="M18 36l5 5-5 5M26 46h8" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 42v-8M46 42v-14" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="46" cy="24" r="2" fill="white"/>
  </svg>
);

const MegaphoneArrowIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M14 38l16-8 14 4v-16l-14 4-16-8v24z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M30 30v12l-6-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 14h4v24h-4z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M48 18c4 4 4 12 0 16M54 12c8 8 8 20 0 28" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 54l10-10 8 8 16-16m0 0h-10m10 0v10" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const leaders = [
  { 
    name: "Balmukund Sharma", 
    role: "FOUNDER & CEO", 
    badge: "Ex-TCS | CGI",
    Graphic: GraphGlobeIcon 
  },
  { 
    name: "Sunil Kumar Sharma", 
    role: "CTO - TECH HEAD", 
    Graphic: GearCircuitIcon 
  },
  { 
    name: "Himanshu Kumar Singh", 
    role: "LEAD SOFTWARE ENGINEER", 
    Graphic: TechAnalystIcon 
  },
  { 
    name: "Ashutosh Kumar Das", 
    role: "CHIEF MARKETING OFFICER", 
    Graphic: MegaphoneArrowIcon 
  },
];

export default function Leadership() {
  return (
    <section className="py-24 bg-transparent border-t border-white/5 relative z-10">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-300">
            Leadership
          </h2>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {leaders.map((leader, i) => {
            const GraphicComponent = leader.Graphic;
            
            return (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#09090b] border border-white/10 hover:border-white/20 rounded-3xl p-8 flex flex-col justify-between transition-all group"
              >
                {/* SVG Graphic Box */}
                <div className="w-full aspect-square bg-white/[0.02] border border-white/10 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden group-hover:border-cyan-400/40 transition-colors">
                  <div className="absolute inset-0 bg-cyan-500/5 blur-[30px] pointer-events-none" />
                  <motion.div 
                    animate={{ y: [-4, 4, -4] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: i * 0.2 }}
                    className="w-24 h-24 text-white opacity-85 group-hover:scale-110 transition-transform duration-500"
                  >
                    <GraphicComponent />
                  </motion.div>
                </div>
                
                {/* Text Details */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                    {leader.role}
                  </p>
                  {leader.badge && (
                    <p className="text-[11px] text-neutral-500 uppercase tracking-widest font-medium">
                      {leader.badge}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}