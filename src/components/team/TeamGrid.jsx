"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// --- CUSTOM SVG GRAPHICS ---
const TechLeadIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="16" y="12" width="32" height="12" rx="2" stroke="white" strokeWidth="2"/>
    <rect x="16" y="28" width="32" height="12" rx="2" stroke="white" strokeWidth="2"/>
    <rect x="16" y="44" width="32" height="12" rx="2" stroke="white" strokeWidth="2"/>
    <circle cx="24" cy="18" r="2" fill="#22d3ee"/><circle cx="24" cy="34" r="2" fill="#22d3ee"/><circle cx="24" cy="50" r="2" fill="#22d3ee"/>
    <path d="M42 18h4M42 34h4M42 50h4" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const FullStackIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="12" y="16" width="40" height="32" rx="2" stroke="white" strokeWidth="2"/>
    <path d="M12 26h40" stroke="white" strokeWidth="2"/>
    <circle cx="18" cy="21" r="1.5" fill="#22d3ee"/><circle cx="24" cy="21" r="1.5" fill="#22d3ee"/>
    <path d="M20 36l4 4-4 4M28 44h6" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InternIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M26 22l-10 10 10 10M38 22l10 10-10 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M36 16l-8 32" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const technical = [
  { name: "Raviranjan Mahto", role: "Tech Lead", desc: "Directing the architectural vision and technical excellence of our digital products.", Graphic: TechLeadIcon },
  { name: "Amit Atihya", role: "Full Stack Dev", desc: "Building seamless end-to-end experiences across the entire technology stack.", Graphic: FullStackIcon },
];

const risingTalent = [
  { name: "Sagar kumar", role: "Developer Intern", desc: "Contributing fresh perspectives and growing with our engineering team.", Graphic: InternIcon },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateX: 20, y: 50 },
  visible: { opacity: 1, scale: 1, rotateX: 0, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
};

function MemberCard({ member, delay = 0 }) {
  const GraphicComponent = member.Graphic;
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.03, y: -5, boxShadow: "0 15px 30px -10px rgba(34, 211, 238, 0.2)", borderColor: "rgba(34, 211, 238, 0.5)" }}
      className="group relative flex flex-col p-6 bg-[#161f30]/90 backdrop-blur-sm border border-white/5 rounded-xl shadow-lg transition-colors duration-500 overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      <div className="flex items-center gap-4 relative z-10">
        <div className="flex-shrink-0 w-16 h-16 p-3 rounded-xl bg-slate-800 border border-white/10 group-hover:border-cyan-400/80 group-hover:bg-cyan-950 transition-colors duration-300">
          <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
            <GraphicComponent />
          </motion.div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-headline font-bold text-white text-lg group-hover:text-cyan-400 transition-colors">{member.name}</h3>
              <span className="text-xs font-label uppercase tracking-widest text-cyan-400 font-bold block mt-1">{member.role}</span>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors mt-1" />
          </div>
        </div>
      </div>
      <p className="mt-5 text-sm text-slate-400 leading-relaxed relative z-10">{member.desc}</p>
      <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs font-label uppercase tracking-widest text-slate-400 group-hover:text-cyan-400 transition-colors w-fit relative z-10">
        LinkedIn <ExternalLink className="w-3 h-3" />
      </div>
    </motion.div>
  );
}

export default function TeamGrid() {
  return (
    <section className="py-20 bg-[#0B0F17] perspective-[2000px]">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1 h-6 bg-cyan-400 rounded-full drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <h2 className="text-base font-headline font-black uppercase tracking-wider text-white">Technical Core</h2>
          </div>
          <div className="space-y-4">
            {technical.map((m) => <MemberCard key={m.name} member={m} />)}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } } }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1 h-6 bg-cyan-400 rounded-full drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <h2 className="text-base font-headline font-black uppercase tracking-wider text-white">Rising Talent</h2>
          </div>
          <div className="space-y-4">
            {risingTalent.map((m) => <MemberCard key={m.name} member={m} />)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}