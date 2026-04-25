"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

const jobs = [
  {
    dept: "Engineering",
    title: "Senior Full-Stack Engineer",
    location: "Remote",
    type: "Full-time",
    category: "engineering",
  },
  {
    dept: "Data Science",
    title: "Predictive Data Scientist",
    location: "London / Remote",
    type: "Full-time",
    category: "data",
  },
  {
    dept: "Design",
    title: "Creative Director",
    location: "In Studio / Remote",
    type: "Full-time",
    category: "design",
  },
  {
    dept: "Strategy",
    title: "Marketing Strategist",
    location: "Remote",
    type: "Full-time",
    category: "marketing",
  },
];

const filters = ["All Departments", "Engineering", "Data", "Design", "Marketing"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
};

export default function CurrentDeployments() {
  const [activeFilter, setActiveFilter] = useState("All Departments");

  const filtered =
    activeFilter === "All Departments"
      ? jobs
      : jobs.filter(
          (j) =>
            j.dept.toLowerCase() === activeFilter.toLowerCase() ||
            j.category === activeFilter.toLowerCase()
        );

  return (
    <section className="py-32 bg-surface-container-lowest">
      <div className="max-w-screen-xl mx-auto px-8">
        {/* Header */}
        <div className="mb-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-headline font-black tracking-widest uppercase text-on-surface"
          >
            Current Deployments
          </motion.h2>
        </div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs font-label uppercase tracking-wider px-4 py-1.5 rounded-sm border transition-all cursor-pointer ${
                activeFilter === f
                  ? "border-primary-container text-primary-container bg-primary-container/10"
                  : "border-white/10 text-on-surface-variant hover:border-white/20"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Job list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3"
        >
          {filtered.map((job) => (
            <motion.div
              key={job.title}
              variants={rowVariants}
              whileHover={{ x: 4, borderColor: "rgba(0,240,255,0.2)" }}
              className="bg-surface-container border border-white/5 rounded-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-all group cursor-pointer"
            >
              <div>
                <span className="text-xs font-label text-primary-container uppercase tracking-widest font-bold block mb-1">
                  {job.dept}
                </span>
                <h3 className="text-lg font-headline font-bold text-on-surface">
                  {job.title}
                </h3>
                <div className="flex items-center gap-5 mt-2">
                  <span className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                    <MapPin className="w-3 h-3" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                    <Clock className="w-3 h-3" />
                    {job.type}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-label font-bold text-primary-container group-hover:gap-4 transition-all">
                View Role
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
