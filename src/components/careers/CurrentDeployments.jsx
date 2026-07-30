"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight, Briefcase, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const jobs = [
  {
    id: 1,
    index: "01",
    dept: "Engineering",
    title: "Full Stack Developer Intern",
    location: "Remote",
    type: "Internship",
    category: "engineering",
    desc: "Build and scale high-throughput web applications using Next.js, Node.js, and modern cloud infrastructure. Collaborate directly with core architects.",
    requirements: ["React / Next.js", "Tailwind CSS", "REST / WebSockets", "Git & CI/CD"],
  },
  {
    id: 2,
    index: "02",
    dept: "Data Engineering",
    title: "Data Engineer Intern",
    location: "Remote",
    type: "Internship",
    category: "data",
    desc: "Design resilient ETL pipelines, handle large-scale data streams, and build real-time processing systems with sub-millisecond latency.",
    requirements: ["Python / Go", "SQL & NoSQL", "Apache Kafka", "Cloud Warehousing"],
  },
  {
    id: 3,
    index: "03",
    dept: "Design",
    title: "UI/UX Developer Intern",
    location: "Remote",
    type: "Internship",
    category: "design",
    desc: "Craft minimalist, high-converting digital interfaces, design systems, and cinematic web experiences inspired by modern developer tooling.",
    requirements: ["Figma / Prototyping", "Tailwind CSS", "Micro-interactions", "User Research"],
  },
  {
    id: 4,
    index: "04",
    dept: "Marketing",
    title: "Marketing Intern",
    location: "Remote",
    type: "Internship",
    category: "marketing",
    desc: "Engineer performance-driven growth funnels, manage B2B campaigns, and analyze behavioral metrics to scale digital acquisition.",
    requirements: ["Growth Analytics", "Content Strategy", "SEO & Ad Funnels", "Copywriting"],
  },
];

const filters = ["All Departments", "Engineering", "Data", "Design", "Marketing"];

export default function CurrentDeployments() {
  const [activeFilter, setActiveFilter] = useState("All Departments");
  const router = useRouter();

  const filtered = activeFilter === "All Departments" 
    ? jobs 
    : jobs.filter(j => j.dept.toLowerCase().includes(activeFilter.toLowerCase()) || j.category === activeFilter.toLowerCase());

  const handleApplyClick = (job) => {
    const query = new URLSearchParams({ role: job.title, dept: job.dept }).toString();
    router.push(`/apply?${query}`);
  };

  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Current Deployments
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-16">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all ${
                activeFilter === f
                  ? "bg-white text-black"
                  : "bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Stacking Cards Container with Black Base & Orange Accents */}
        <div className="relative flex flex-col gap-6 md:gap-12 pb-24">
          {filtered.length > 0 ? (
            filtered.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                // 👉 STICKY STACKING WITH TRUE BLACK & SUBTLE ORANGE BORDER ACCENT
                className="sticky w-full rounded-[2.5rem] bg-[#09090b] border border-[#d94814]/40 hover:border-[#d94814] transition-colors p-8 lg:p-14 shadow-2xl flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-between"
                style={{ top: `calc(12vh + ${index * 35}px)` }}
              >
                
                {/* Left Column: Job Details & Requirements */}
                <div className="flex-1 w-full flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl font-black text-[#d94814]">
                        {job.index}
                      </span>
                      <span className="text-xs uppercase tracking-widest font-bold border border-[#d94814]/30 px-4 py-1.5 rounded-full text-[#d94814] bg-[#d94814]/10">
                        {job.dept}
                      </span>
                    </div>

                    <h3 className="text-3xl lg:text-5xl font-bold tracking-tighter leading-tight text-white mb-6">
                      {job.title}
                    </h3>
                    <p className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-8 max-w-lg">
                      {job.desc}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 mb-8">
                      <span className="flex items-center gap-2 text-sm text-neutral-300 font-medium">
                        <MapPin className="w-4 h-4 text-[#d94814]" /> {job.location}
                      </span>
                      <span className="flex items-center gap-2 text-sm text-neutral-300 font-medium">
                        <Clock className="w-4 h-4 text-[#d94814]" /> {job.type}
                      </span>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/10">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold block mb-3">
                      Key Stack / Requirements
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req) => (
                        <span key={req} className="text-xs font-mono text-neutral-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#d94814]" /> {req}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Action Card */}
                <div className="w-full lg:w-[40%] aspect-square rounded-2xl overflow-hidden bg-black/60 border border-white/10 p-8 flex flex-col justify-between shadow-inner relative">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#d94814]/10 blur-[60px] pointer-events-none" />
                  
                  <div>
                    <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold block mb-2">
                      Deployment Status
                    </span>
                    <div className="text-xl font-bold text-white">
                      Active Application
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      Ready to build systems that scale? Submit your portfolio and join our core engineering rotation.
                    </p>
                    <button
                      onClick={() => handleApplyClick(job)}
                      className="w-full flex items-center justify-center gap-2 bg-[#d94814] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[#b83b0f] transition-colors shadow-xl cursor-pointer"
                    >
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))
          ) : (
            <div className="bg-[#09090b] border border-dashed border-white/10 rounded-[2.5rem] p-16 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neutral-500">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <p className="text-base font-bold text-white">No active deployments found</p>
                <p className="text-sm text-neutral-400 mt-1">We currently have no open positions in this department.</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}