"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ArrowRight, Briefcase } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const jobs = [
  {
    dept: "Engineering",
    title: "Full Stack Developer Intern",
    location: "Remote",
    type: "Internship",
    category: "engineering",
  },
  {
    dept: "Data Engineering",
    title: "Data Engineer Intern",
    location: "Remote",
    type: "Internship",
    category: "data",
  },
  {
    dept: "Design",
    title: "UI/UX Developer Intern",
    location: "Remote",
    type: "Internship",
    category: "design",
  },
  {
    dept: "Marketing",
    title: "Marketing Intern",
    location: "Remote",
    type: "Internship",
    category: "marketing",
  },
];

const filters = ["All Departments", "Engineering", "Data", "Design", "Marketing"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, duration: 0.3 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function CurrentDeployments() {
  const [activeFilter, setActiveFilter] = useState("All Departments");
  const router = useRouter();

  const filtered =
    activeFilter === "All Departments"
      ? jobs
      : jobs.filter(
          (j) =>
            j.dept.toLowerCase().includes(activeFilter.toLowerCase()) ||
            j.category === activeFilter.toLowerCase()
        );

  const handleApplyClick = (job) => {
    const query = new URLSearchParams({
      role: job.title,
      dept: job.dept,
    }).toString();

    router.push(`/apply?${query}`);
  };

  return (
    <section className="py-20 sm:py-32 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl font-headline font-black tracking-widest uppercase text-on-surface"
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
          className="flex flex-wrap gap-2 mb-8 sm:mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs font-label uppercase tracking-wider px-3.5 py-2 sm:px-4 sm:py-1.5 rounded-sm border transition-all cursor-pointer ${
                activeFilter === f
                  ? "border-primary-container text-primary-container bg-primary-container/10 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                  : "border-white/10 text-on-surface-variant hover:border-white/20"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* 👉 Job list container with min-h-[420px] to prevent layout jumps & snapping */}
        <div className="min-h-[420px] flex flex-col justify-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter} // 👉 Re-runs stagger animations smoothly when filter changes
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="space-y-3 w-full"
            >
              {filtered.length > 0 ? (
                filtered.map((job) => (
                  <motion.div
                    key={job.title}
                    variants={rowVariants}
                    layout // 👉 Animate vertical position changes smoothly
                    whileHover={{ x: 4, borderColor: "rgba(0,240,255,0.3)" }}
                    onClick={() => handleApplyClick(job)}
                    className="bg-surface-container border border-white/5 rounded-sm p-5 sm:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-all group cursor-pointer"
                  >
                    <div>
                      <span className="text-xs font-label text-primary-container uppercase tracking-widest font-bold block mb-1">
                        {job.dept}
                      </span>
                      <h3 className="text-base sm:text-lg font-headline font-bold text-on-surface group-hover:text-primary-container transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 sm:gap-5 mt-2">
                        <span className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                          <MapPin className="w-3 h-3 text-primary-container/70" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                          <Clock className="w-3 h-3 text-primary-container/70" />
                          {job.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-label font-bold text-primary-container group-hover:gap-4 transition-all pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                ))
              ) : (
                /* 👉 Clean fallback UI if no roles match the active filter */
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-surface-container/50 border border-dashed border-white/10 rounded-sm p-12 flex flex-col items-center justify-center text-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-on-surface-variant">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">No active deployments found</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      We currently have no open internship positions in this department.
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}