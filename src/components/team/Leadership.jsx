"use client";

import { motion } from "framer-motion";

// --- CUSTOM SVG GRAPHICS ---
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
  { name: "Balmukund kumar", role: "BUSINESS & GROWTH HEAD", Graphic: GraphGlobeIcon },
 
  { name: "Ashutosh kumar Das", role: "HEAD OF MARKETING AND SALES GROWTH", Graphic: MegaphoneArrowIcon },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12, mass: 1 },
  },
};

export default function Leadership() {
  return (
    <section className="py-20 bg-[#0B0F17] text-white">
      <div className="max-w-screen-xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5, duration: 1 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-1 h-6 bg-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          <h2 className="text-lg font-headline font-black uppercase tracking-widest text-white">
            Leadership
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {leaders.map((leader, i) => {
            const GraphicComponent = leader.Graphic;
            return (
              <motion.div
                key={leader.name}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  y: -6,
                }}
                className="flex flex-col group cursor-pointer relative p-2 rounded-2xl transition-all duration-300"
              >
                {/* Clean Image Container with smooth border highlight instead of box-shadow box */}
                <div className="w-full aspect-[4/3] bg-[#131B2E] rounded-xl flex items-center justify-center mb-5 relative overflow-hidden border border-cyan-500/20 group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300">
                  {/* Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                  
                  {/* Floating Icon */}
                  <motion.div 
                    animate={{ y: [-6, 6, -6] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: i * 0.2 }}
                    className="w-36 h-36 opacity-85 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 drop-shadow-[0_0_8px_rgba(34,211,238,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                  >
                    <GraphicComponent />
                  </motion.div>
                </div>
                
                <div className="px-1">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest leading-relaxed">
                    {leader.role}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `@keyframes shimmer { 100% { transform: translateX(100%); } }`}} />
    </section>
  );
}