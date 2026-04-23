"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, TrendingUp, Workflow, BrainCircuit } from "lucide-react";
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
          Engineering the digital void with architectural precision. We build
          robust systems that bridge the gap between complex data and intuitive
          human experiences.
        </motion.p>
      </div>
    </section>
  );
}

/* ── Service Cards ─────────────────────── */
const services = [
  {
    icon: Code2,
    title: "Web & App Development",
    description:
      "Beyond simple interfaces. We engineer high-performance, custom tech stacks with React, Node, and specialized cloud infrastructures. Every pixel is responsive, every interaction is intentional.",
    bullets: [
      "Custom React Frameworks",
      "Microservices Architecture",
      "PWA & Native Integrations",
    ],
    hasCode: true,
    col: "md:col-span-4",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & SEO",
    description:
      "Precision-targeted growth strategies designed to dominate the digital landscape. We focus on search intent, technical visibility, and ROI-driven conversion paths.",
    stat: { label: "Growth Rate", value: "+142%" },
    col: "md:col-span-4",
  },
  {
    icon: Workflow,
    title: "Marketing Automation & CRM",
    description:
      "Eliminate manual friction. We build intelligent workflows that nurture leads and manage customer lifecycles with surgical precision.",
    tags: ["Workflows", "Segmentation", "Lead Scoring"],
    col: "md:col-span-3",
  },
  {
    icon: BrainCircuit,
    title: "Data Engineering & ML",
    description:
      "Transform raw data into competitive advantages. Our machine learning models and real-time dashboards provide deep insights into user behavior and market shifts.",
    dual: [
      { label: "Predictive", value: "Analytics" },
      { label: "Real-Time", value: "Dashboards" },
    ],
    col: "md:col-span-5",
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
      className={`${s.col} bg-surface-container hover:bg-surface-container-high transition-all duration-500 p-10 relative overflow-hidden group`}
    >
      <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
        <Icon className="w-32 h-32 text-primary" strokeWidth={0.5} />
      </div>

      <div className="w-10 h-10 bg-primary-container/10 flex items-center justify-center mb-6 rounded-sm">
        <Icon className="w-5 h-5 text-primary-container" />
      </div>
      <h3 className="text-2xl font-headline font-bold mb-4">{s.title}</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm">
        {s.description}
      </p>

      {s.bullets && (
        <ul className="mt-8 space-y-2">
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

      {s.stat && (
        <div className="mt-8 pt-6 border-t border-white/5">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs text-slate-500 uppercase tracking-widest">
              {s.stat.label}
            </span>
            <span className="text-3xl font-headline font-black text-primary-container">
              {s.stat.value}
            </span>
          </div>
          <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "85%" } : {}}
              transition={{ delay: 0.7, duration: 1.2, ease: "easeOut" }}
              className="h-full signature-gradient"
            />
          </div>
        </div>
      )}

      {s.tags && (
        <div className="flex flex-wrap gap-2 mt-8">
          {s.tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-surface-container-lowest border border-white/5 text-xs text-on-surface-variant uppercase"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {s.dual && (
        <div className="grid grid-cols-2 gap-4 mt-8">
          {s.dual.map((d) => (
            <div
              key={d.label}
              className="border-l-2 border-primary-container pl-4"
            >
              <span className="block text-xs text-slate-500 uppercase tracking-widest">
                {d.label}
              </span>
              <span className="block font-headline font-bold text-on-surface mt-1">
                {d.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {s.hasCode && (
        <div className="absolute top-8 right-44 w-44 rounded-sm overflow-hidden bg-surface-container-lowest opacity-20 group-hover:opacity-35 transition-opacity hidden xl:block">
          {[
            "const api = fetch(",
            "  endpoint, {",
            "    method:'POST',",
            "    body: payload",
            "  })",
            ".then(r => r.json())",
          ].map((line, idx) => (
            <div
              key={idx}
              className="text-[9px] font-mono px-3 py-0.5 text-cyan-400/70 leading-5"
            >
              {line}
            </div>
          ))}
        </div>
      )}
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
        <div className="grid grid-cols-1 md:grid-cols-8 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </section>
      <ServicesCTA />
      <Footer
        links={[
          {
            heading: "Explore",
            items: [
              { label: "Services", href: "/services" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Team", href: "/team" },
            ],
          },
          {
            heading: "Legal",
            items: [
              { label: "Privacy", href: "#" },
              { label: "Terms", href: "#" },
            ],
          },
        ]}
      />
    </main>
  );
}
