"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Rocket, BarChart2, CheckSquare, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

/* ── Hero ─────────────────────────────── */
function Hero() {
  return (
    <section className="relative pt-36 pb-20 px-8 max-w-screen-xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-3 mb-8 border-l-2 border-primary-container pl-4"
      >
        <span className="text-xs font-label uppercase tracking-widest text-primary-container font-bold">
          Professional Expertise
        </span>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-[clamp(3.2rem,7vw,5.5rem)] font-headline font-black leading-[1.05] tracking-tighter text-glow"
        >
          Our Specialized
          <br />
          <span className="text-primary-container">Solutions.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg text-on-surface-variant leading-relaxed pt-6"
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
    description:
      "Transform raw data into your most valuable asset. We build the pipelines and visual intelligence layers that power modern startup decision-making.",
    bullets: [
      "ETL/ELT Pipelines",
      "Cloud Data Warehousing",
      "Spark / Hive Processing",
      "Custom BI Dashboards",
    ],
    col: "md:col-span-8",
    hasImage: true,
  },
  {
    icon: Rocket,
    title: "Web Development & Startup Products",
    description:
      "Scalable, secure, and user-centric. We turn your product vision into a market-ready digital reality with cutting-edge tech stacks.",
    bullets: ["React / Node.js", "SaaS Product Build", "Modern UI / UX Design"],
    col: "md:col-span-4",
  },
  {
    icon: BarChart2,
    title: "Digital Marketing & Sales",
    description:
      "Performance-driven growth for B2B and SaaS startups. We don't just generate traffic; we engineer conversion funnels that drive revenue.",
    tags: ["SEO & Ads", "LinkedIn B2B", "Sales Funnels"],
    col: "md:col-span-4",
  },
  {
    icon: CheckSquare,
    title: "QA & Data Testing",
    description:
      "Reliability at scale. We ensure your systems and data stay accurate and high-performing through rigorous automated validation frameworks.",
    bullets: ["Test Automation", "ETL Validation", "Regression Testing"],
    col: "md:col-span-4",
  },
  {
    icon: Layers,
    title: "IT Consulting & Tech Roadmap",
    description:
      "Architecting for the future. We provide the strategic technical guidance startups need to scale without breaking their systems.",
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
      transition={{ duration: 0.55, delay: i * 0.1 }}
      className={`${s.col} bg-surface-container-low hover:bg-surface-container-highest transition-all duration-500 p-10 relative overflow-hidden group rounded-sm`}
    >
      {s.hasImage && (
        <div className="absolute top-0 right-0 w-2/5 h-full opacity-30 group-hover:opacity-50 transition-opacity">
          <div
            className="w-full h-full"
            style={{
              background:
                "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=60') center/cover no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low to-transparent" />
        </div>
      )}

      <div className="relative z-10 max-w-md">
        <div className="text-primary-container mb-6">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-headline font-bold mb-4">{s.title}</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed">
          {s.description}
        </p>

        {s.bullets && (
          <ul className="mt-6 space-y-2">
            {s.bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 text-xs text-on-surface-variant uppercase tracking-wide"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        )}

        {s.tags && (
          <div className="flex flex-wrap gap-2 mt-8">
            {s.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-surface-dim border border-outline-variant/10 text-xs text-on-surface-variant uppercase"
              >
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
    <section ref={ref} className="py-40 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="flex items-center justify-center gap-3 mb-10"
      >
        <motion.span
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-2 h-2 rounded-full bg-primary-container block"
        />
        <span className="text-xs font-label uppercase tracking-widest text-primary-container font-bold">
          System Status: Optimal
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl md:text-6xl font-headline font-black mb-12 tracking-tighter"
      >
        Ready to build the future?
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
      >
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-14 py-4 border border-primary-container/50 text-primary font-headline font-bold text-lg rounded-sm hover:bg-primary-container/10 transition-all cursor-pointer"
          >
            Initiate Consultation
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-surface min-h-screen">
      <Navbar />
      <Hero />
      <section className="pb-8 px-8 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
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
