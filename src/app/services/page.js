"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Rocket, BarChart2, CheckSquare, Layers, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

/* ── Founder's Vision Hero ────────────── */
function FoundersVisionHero() {
  return (
    <section className="relative pt-44 pb-28 px-6 max-w-screen-xl mx-auto overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]"></span>
            <span className="text-xs font-medium tracking-widest text-neutral-300 uppercase">
              Founder's Vision
            </span>
          </div>

          <h1 className="text-[clamp(3.2rem,7vw,5.5rem)] font-bold leading-[1.02] tracking-tighter text-white mb-8">
            We help startups <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
              build, scale, and compete.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl font-normal">
            CovianLab is a B2B tech services company engineered to give growing
            startups access to the same elite engineering, data, and marketing
            talent that enterprise companies take for granted.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-5 lg:pt-16"
        >
          <div className="relative bg-[#12141a] border border-white/10 p-10 md:p-12 rounded-[2.5rem] shadow-2xl">
            <span className="absolute -left-px top-12 h-16 w-[3px] bg-amber-400 rounded-r-full shadow-[0_0_15px_rgba(251,191,36,0.6)]" />
            <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
              "After years spanning data engineering, software development, and
              B2B consulting, I watched great startup ideas stall due to poor
              technical execution. CovianLab was built to be the partner I
              wished those startups had: a focused, senior team that moves
              fast, communicates clearly, and takes absolute ownership of
              outcomes."
            </p>
            <footer className="mt-10 text-right text-sm font-semibold tracking-wider text-white uppercase">
              — Balmukund
            </footer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Hero / Section Header ────────────── */
function Hero() {
  return (
    <section className="relative py-28 px-6 max-w-screen-xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 block mb-4">
            Professional Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Our Specialized <br />
            <span className="text-neutral-500">Solutions.</span>
          </h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-neutral-400 leading-relaxed lg:max-w-md lg:ml-auto pb-2"
        >
          Data-driven tech & marketing solutions for startups. Engineering the
          digital void with architectural precision and strategic growth.
        </motion.p>
      </div>
    </section>
  );
}

/* ── Service Cards ─────────────────────── */
const services = [
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description: "Transform raw data into your most valuable asset. We build the pipelines and visual intelligence layers that power modern startup decision-making.",
    bullets: ["ETL/ELT Pipelines", "Cloud Data Warehousing", "Spark / Hive Processing", "Custom BI Dashboards"],
    col: "md:col-span-8",
    hasImage: true,
  },
  {
    icon: Rocket,
    title: "Web Development & Startup Products",
    description: "Scalable, secure, and user-centric. We turn your product vision into a market-ready digital reality with cutting-edge tech stacks.",
    bullets: ["React / Node.js", "SaaS Product Build", "Modern UI / UX Design"],
    col: "md:col-span-4",
  },
  {
    icon: BarChart2,
    title: "Digital Marketing & Sales",
    description: "Performance-driven growth for B2B and SaaS startups. We don't just generate traffic; we engineer conversion funnels that drive revenue.",
    tags: ["SEO & Ads", "LinkedIn B2B", "Sales Funnels"],
    col: "md:col-span-4",
  },
  {
    icon: CheckSquare,
    title: "QA & Data Testing",
    description: "Reliability at scale. We ensure your systems and data stay accurate and high-performing through rigorous automated validation frameworks.",
    bullets: ["Test Automation", "ETL Validation", "Regression Testing"],
    col: "md:col-span-4",
  },
  {
    icon: Layers,
    title: "IT Consulting & Tech Roadmap",
    description: "Architecting for the future. We provide the strategic technical guidance startups need to scale without breaking their systems.",
    bullets: ["Cloud Architecture", "CRM Implementation", "Scaling Strategy"],
    col: "md:col-span-4",
  },
];

function ServiceCard({ s, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = s.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      // 👉 Spatious Pop-out Hover Animation with Amber Accent
      whileHover={{
        scale: 1.02,
        y: -8,
        borderColor: "rgba(251, 191, 36, 0.4)",
        boxShadow: "0 25px 50px -15px rgba(0, 0, 0, 0.9)",
      }}
      className={`${s.col} bg-[#12141a] border border-white/10 transition-colors duration-300 p-10 md:p-12 relative overflow-hidden rounded-[2.5rem] group flex flex-col justify-between cursor-pointer`}
    >
      {/* Sleek Abstract Background pattern with amber glow */}
      {s.hasImage && (
        <div 
          className="absolute top-0 right-0 w-2/3 h-full opacity-20 pointer-events-none overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to left, black 30%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, black 30%, transparent 100%)'
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:24px_24px] [transform:rotate(-15deg)_scale(1.5)]" />
          <div className="absolute right-[-10%] top-[-10%] w-64 h-64 bg-amber-500/20 blur-[90px] rounded-full" />
        </div>
      )}

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 mb-10 group-hover:scale-110 transition-transform duration-300 shadow-inner">
          <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">{s.title}</h3>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-lg">
          {s.description}
        </p>

        {s.bullets && (
          <ul className="mt-10 space-y-3.5">
            {s.bullets.map((b) => (
              <li key={b} className="flex items-center gap-3.5 text-xs md:text-sm text-neutral-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                {b}
              </li>
            ))}
          </ul>
        )}

        {s.tags && (
          <div className="flex flex-wrap gap-2.5 mt-10">
            {s.tags.map((t) => (
              <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 text-xs text-neutral-300 font-medium rounded-xl">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ── CTA ───────────────────────────────── */
function ServicesCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  
  return (
    <section ref={ref} className="py-36 px-6 text-center border-t border-white/5 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="flex items-center justify-center gap-2.5 mb-8"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
          System Status: Optimal
        </span>
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter text-white"
      >
        Ready to build the future?
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
      >
        <Link href="/contact">
          <button className="flex items-center mx-auto gap-3 bg-amber-400 text-black px-9 py-4.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-amber-300 hover:scale-105 transition-all shadow-[0_0_25px_rgba(251,191,36,0.3)] cursor-pointer">
            Initiate Consultation <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </motion.div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className="relative z-10 bg-transparent min-h-screen">
      <Navbar />
      <FoundersVisionHero />
      <Hero />
      <section className="pb-20 px-6 max-w-screen-xl mx-auto">
        {/* Increased spacing and gaps between cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </section>
      <ServicesCTA />
      <Footer />
    </main>
  );
}