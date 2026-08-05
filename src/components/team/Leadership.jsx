"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Added custom "translateY" to pull Sunil and Ashutosh downward in their frames!
const leaders = [
  { 
    name: "Balmukund Sharma", 
    role: "FOUNDER & CEO", 
    badge: "Ex-TCS | CGI",
    image: "/balmukund.team.png",
    scale: 1.15,
    objectPosition: "50% 20%",
    translateY: "0%"
  },
  { 
    name: "Sunil Kumar Sharma", 
    role: "CTO - TECH HEAD", 
    image: "/sunil.team.png",
    scale: 1.15, // Scaled up slightly to give us room to shift him down
    objectPosition: "50% 0%",
    translateY: "7%" // Pulls him down from the top edge
  },
  { 
    name: "Himanshu Kumar Singh", 
    role: "LEAD SOFTWARE ENGINEER", 
    image: "/Himanshu.team.png",
    scale: 1.4, 
    objectPosition: "50% 35%", 
    translateY: "0%"
  },
  { 
    name: "Ashutosh Kumar Das", 
    role: "CHIEF MARKETING OFFICER", 
    image: "/aashutosh.team.jpeg",
    scale: 1.15, // Scaled up slightly to give us room to shift him down
    objectPosition: "50% 0%",
    translateY: "7%" // Pulls him down from the top edge
  },
];

export default function Leadership() {
  return (
    <section className="py-12 bg-transparent relative z-10">
      <div className="max-w-screen-xl mx-auto">
        
        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {leaders.map((leader, i) => {
            return (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#09090b] border border-white/10 hover:border-white/20 rounded-3xl p-6 flex flex-col justify-between transition-all group shadow-lg"
              >
                {/* Image Container with Hover Scale */}
                <div className="w-full aspect-square bg-[#12141a] border border-white/10 rounded-2xl mb-6 relative overflow-hidden group-hover:border-[#d94814]/40 group-hover:shadow-[0_0_20px_rgba(217,72,20,0.15)] transition-all duration-500">
                  
                  {/* Container handling the hover animation */}
                  <div className="w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out">
                    
                    {/* Inner container applying the individual zoom & downward shift fixes */}
                    <div 
                      className="w-full h-full relative"
                      style={{ 
                        transform: `scale(${leader.scale}) translateY(${leader.translateY})` 
                      }}
                    >
                      <Image 
                        src={leader.image}
                        alt={`${leader.name} - ${leader.role}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        style={{ objectFit: 'cover', objectPosition: leader.objectPosition }}
                        unoptimized
                      />
                    </div>
                  </div>

                </div>
                
                {/* Text Details (Set to a fixed minimum height so the bottom text always aligns) */}
                <div className="min-h-[90px] flex flex-col justify-end">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight">
                    {leader.name}
                  </h3>
                  <p className="text-[10px] md:text-xs font-semibold text-[#d94814] uppercase tracking-wider mb-1">
                    {leader.role}
                  </p>
                  {/* Standardize the badge gap so cards stay the exact same height */}
                  <div className="h-4 mt-1">
                    {leader.badge && (
                      <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                        {leader.badge}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}