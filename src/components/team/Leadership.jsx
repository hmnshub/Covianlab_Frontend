"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const leaders = [
  {
    name: "Balmukund kumar",
    role: "Business & Growth Head",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    large: true,
  },
  {
    name: "Vijay Gaurav",
    role: "CTO / Tech Head",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    large: false,
  },
  {
    name: "Ashutosh kumar Das",
    role: "Head of Marketing and Sales Growth",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    large: false,
  },
];

export default function Leadership() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-screen-xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-1 h-6 bg-primary-container rounded-full" />
          <h2 className="text-lg font-headline font-black uppercase tracking-wider text-on-surface">
            Leadership
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.55 }}
              className={`relative group overflow-hidden rounded-sm bg-surface-container border border-white/5 ${
                leader.large ? "lg:col-span-1 lg:row-span-1" : ""
              }`}
            >
              <div
                className={`w-full overflow-hidden ${
                  leader.large ? "h-80" : "h-52"
                }`}
              >
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <h3 className="font-headline font-black text-on-surface text-lg">
                    {leader.name}
                  </h3>
                  <span className="text-xs font-label uppercase tracking-widest text-primary-container font-bold">
                    {leader.role}
                  </span>
                </div>
                {leader.large && (
                  <ArrowUpRight className="w-5 h-5 text-primary-container opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
