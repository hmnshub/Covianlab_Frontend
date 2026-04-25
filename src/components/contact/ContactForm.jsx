"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Globe, ArrowRight } from "lucide-react";

const services = [
  "Data Strategy",
  "Cloud Systems",
  "Web Engineering",
  "Marketing Tech",
  "Full Audit",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    service: "Data Strategy",
    message: "",
  });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface-container border border-white/5 rounded-sm p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Full Name */}
            <div>
              <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant block mb-3">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={form.fullName}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-outline-variant/50 pb-2 text-on-surface placeholder-slate-600 outline-none text-sm focus:border-primary-container transition-colors"
              />
            </div>
            {/* Email */}
            <div>
              <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant block mb-3">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@company.com"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-outline-variant/50 pb-2 text-on-surface placeholder-slate-600 outline-none text-sm focus:border-primary-container transition-colors"
              />
            </div>
          </div>

          {/* Service Interest */}
          <div className="mb-8">
            <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant block mb-3">
              Service Interest
            </label>
            <div className="relative border-b border-outline-variant/50 pb-2">
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full bg-transparent text-on-surface outline-none text-sm appearance-none cursor-pointer"
              >
                {services.map((s) => (
                  <option key={s} value={s} className="bg-surface-container">
                    {s}
                  </option>
                ))}
              </select>
              <span className="absolute right-0 top-0 text-on-surface-variant pointer-events-none">
                ▾
              </span>
            </div>
          </div>

          {/* Message */}
          <div className="mb-10">
            <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant block mb-3">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Tell us about your project goals..."
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-transparent border-b border-outline-variant/50 pb-2 text-on-surface placeholder-slate-600 outline-none text-sm resize-none focus:border-primary-container transition-colors"
            />
          </div>

          {/* Submit */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="text-xs font-label text-on-surface-variant uppercase tracking-wider">
                Ready to Sync
              </span>
            </div>
            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 25px rgba(0,240,255,0.4)",
              }}
              whileTap={{ scale: 0.96 }}
              className="signature-gradient text-on-primary-fixed px-8 py-3 rounded-sm font-headline font-bold text-xs cursor-pointer uppercase tracking-widest flex items-center gap-2"
            >
              Dispatch Request
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* HQ Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-surface-container border border-white/5 rounded-sm p-10 flex flex-col justify-between"
        >
          <div>
            <span className="text-xs font-label uppercase tracking-widest text-primary-container font-bold block mb-6">
              Global HQ
            </span>
            <h2 className="text-4xl font-headline font-black text-on-surface mb-3">
              San Francisco
            </h2>
            <p className="text-on-surface-variant text-sm mb-8">
              101 Architecture Way, Suite 500
              <br />
              California, 94103
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-container/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-primary-container" />
                </div>
                <div>
                  <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant block mb-1">
                    General Inquiries
                  </span>
                  <a
                    href="mailto:hello@covianlab.tech"
                    className="text-sm font-bold text-primary-container hover:text-primary transition-colors"
                  >
                    hello@covianlab.tech
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-container/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Globe className="w-4 h-4 text-primary-container" />
                </div>
                <div>
                  <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant block mb-1">
                    Global Reach
                  </span>
                  <span className="text-sm font-bold text-on-surface">
                    London • Tokyo • Berlin
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative world map dots */}
          <div className="mt-10 relative h-28 overflow-hidden opacity-30">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(0,240,255,0.5) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
