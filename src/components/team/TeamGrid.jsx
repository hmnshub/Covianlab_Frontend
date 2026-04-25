"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const engineering = [
  {
    name: "Liam Chen",
    role: "Principal Data Scientist",
    desc: "Pioneering neural networks for real-time market sentiment analysis.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Infrastructure",
    desc: "Architecting the backbone of high-frequency data pipelines.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
];

const marketing = [
  {
    name: "Jameson Wu",
    role: "Strategic Growth Lead",
    desc: "Bridging the gap between complex tech and human connection.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    name: "Maya Patel",
    role: "Brand Architect",
    desc: "Crafting the narratives that define digital leadership.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
];

function MemberCard({ member, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex gap-5 p-5 bg-surface-container border border-white/5 rounded-sm group hover:border-primary-container/20 transition-all"
    >
      <div className="w-14 h-14 rounded-sm overflow-hidden flex-shrink-0">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-headline font-bold text-on-surface text-sm">
              {member.name}
            </h3>
            <span className="text-[10px] font-label uppercase tracking-widest text-primary-container font-bold block mt-0.5">
              {member.role}
            </span>
          </div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="flex-shrink-0 w-6 h-6 text-outline/40 hover:text-primary-container transition-colors cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
          </motion.div>
        </div>
        <p className="mt-2 text-xs text-on-surface-variant leading-relaxed">
          {member.desc}
        </p>
        <div className="mt-3 flex items-center gap-1.5 text-[10px] font-label uppercase tracking-widest text-outline hover:text-primary-container transition-colors cursor-pointer">
          LinkedIn
          <ExternalLink className="w-2.5 h-2.5" />
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamGrid() {
  return (
    <section className="py-20 bg-surface-container-lowest">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Engineering */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-1 h-6 bg-primary-container rounded-full" />
            <h2 className="text-base font-headline font-black uppercase tracking-wider text-on-surface">
              Engineering &amp; Intelligence
            </h2>
          </motion.div>
          <div className="space-y-4">
            {engineering.map((m, i) => (
              <MemberCard key={m.name} member={m} delay={i * 0.12} />
            ))}
          </div>
        </div>

        {/* Marketing */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-1 h-6 bg-primary-container rounded-full" />
            <h2 className="text-base font-headline font-black uppercase tracking-wider text-on-surface">
              Marketing Strategists
            </h2>
          </motion.div>
          <div className="space-y-4">
            {marketing.map((m, i) => (
              <MemberCard key={m.name} member={m} delay={i * 0.12 + 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
