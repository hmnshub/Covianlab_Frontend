"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const leaders = [
  {
    name: "Balmukund Sharma",
    role: "Founder & CEO",
    badge: "Ex-TCS | CGI",
    image: "/balmukund.team.png",
    scale: 1.15,
    objectPosition: "50% 20%",
    translateY: "0%",
  },
  {
    name: "Sunil Kumar Sharma",
    role: "Co-founder, CTO",
    image: "/sunil.team.png",
    scale: 1.15,
    objectPosition: "50% 0%",
    translateY: "7%",
  },
  {
    name: "Himanshu Kumar Singh",
    role: "Tech Head",
    image: "/Himanshu.team.png",
    scale: 1.25,
    objectPosition: "50% 0%",
    translateY: "0%",
  },
  {
    name: "Ashutosh Kumar Das",
    role: "Chief Marketing Officer",
    image: "/aashutosh.team.jpeg",
    scale: 1.15,
    objectPosition: "50% 0%",
    translateY: "7%",
  },
  {
    name: "Sourav Shrivastava",
    role: "Marketing & Social Media",
    image: "/saurabh.jpeg",
    scale: 1.05,
    objectPosition: "50% 0%",
    translateY: "0%",
  },
];

export default function Leadership() {
  return (
    <section>
      {/* Leadership Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
        {leaders.map((leader, i) => {
          return (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
              className={`lg:col-span-3 bg-[#09090b] border border-white/10 hover:border-white/20 rounded-3xl p-6 flex flex-col justify-between transition-all group shadow-lg ${
                i === 4 ? "lg:col-start-5" : ""
              }`}
            >
              {/* Image Container */}
              <div
                className="
                  w-full
                  aspect-square
                  bg-[#12141a]
                  border border-white/10
                  rounded-2xl
                  mb-6
                  relative
                  overflow-hidden
                  group-hover:border-[#d94814]/40
                  group-hover:shadow-[0_0_20px_rgba(217,72,20,0.15)]
                  transition-all
                  duration-500
                "
              >
                {/* Hover Animation */}
                <div className="w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out">
                  
                  {/* Individual Image Crop */}
                  <div
                    className="w-full h-full relative"
                    style={{
                      transform: `scale(${leader.scale}) translateY(${leader.translateY})`,
                    }}
                  >
                    <Image
                      src={leader.image}
                      alt={`${leader.name} - ${leader.role}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="grayscale"
                      style={{
                        objectFit: "cover",
                        objectPosition: leader.objectPosition,
                      }}
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* Text Details */}
              <div className="min-h-[90px] flex flex-col justify-end">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight">
                  {leader.name}
                </h3>

                <p className="text-[10px] md:text-xs font-semibold text-[#d94814] uppercase tracking-wider mb-1">
                  {leader.role}
                </p>

                {/* Badge */}
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
    </section>
  );
}