"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
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
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
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

  // 👉 Directs applicant to the standalone application page with URL params
  const handleApplyClick = (job) => {
    const query = new URLSearchParams({
      role: job.title,
      dept: job.dept,
    }).toString();
    
    router.push(`/apply?${query}`);
  };

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
              onClick={() => handleApplyClick(job)}
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
                    <MapPin className="w-3 h-3 text-primary-container/70" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                    <Clock className="w-3 h-3 text-primary-container/70" />
                    {job.type}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm font-label font-bold text-primary-container group-hover:gap-4 transition-all">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}