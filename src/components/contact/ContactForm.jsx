"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

const services = [
  "Data Engineering & Analytics",
  "AI & Machine Learning Integration",
  "Full-Stack Web Development",
  "Cloud Architecture & DevOps",
  "B2B Growth & Marketing Tech",
  "UI/UX Design Systems",
  "Enterprise IT Consulting",
  "Other (Specify)",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    service: "Data Engineering & Analytics",
    customService: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    if (status.text) setStatus({ type: "", text: "" });
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", text: "" });

    const finalService = form.service === "Other (Specify)" ? form.customService : form.service;

    const payload = {
      fullName: form.fullName,
      email: form.email,
      serviceInterest: finalService,
      message: form.message,
    };

    try {
      const API_URL = window.location.hostname === "localhost"
        ? "http://localhost:5000/api/contact"
        : "https://covianlab-backend.vercel.app/api/contact";

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          text: data.message || "Request dispatched successfully! Our team will get in touch soon.",
        });
        setForm({ fullName: "", email: "", service: "Data Engineering & Analytics", customService: "", message: "" });
      } else {
        setStatus({
          type: "error",
          text: data.message || "Failed to dispatch request. Please check your inputs.",
        });
      }
    } catch (error) {
      console.error("Dispatch Error:", error);
      setStatus({
        type: "error",
        text: "Could not reach the server. Please ensure the backend is actively running.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    // 👉 ADDED id="contact" HERE SO NAVBAR BUTTONS CAN TARGET IT
    <section id="contact" className="py-20 px-6 max-w-screen-xl mx-auto bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Form Container */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#12141a] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-2xl"
        >
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Alex Chen"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-neutral-500 outline-none text-sm focus:border-amber-400 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="alex@enterprise.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-neutral-500 outline-none text-sm focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                Service Interest
              </label>
              <div className="relative border-b border-white/20 pb-2">
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-transparent text-white outline-none text-sm appearance-none cursor-pointer"
                >
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-neutral-900 text-white">
                      {s}
                    </option>
                  ))}
                </select>
                <span className="absolute right-0 top-0 text-neutral-400 pointer-events-none">
                  ▼
                </span>
              </div>
            </div>

            {/* Conditional Input if "Other" is selected */}
            <AnimatePresence>
              {form.service === "Other (Specify)" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-8 overflow-hidden"
                >
                  <label className="text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-2">
                    Specify Your Interest
                  </label>
                  <input
                    type="text"
                    name="customService"
                    required
                    placeholder="e.g., Custom Blockchain Integration"
                    value={form.customService}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-amber-400/50 pb-2 text-white placeholder-neutral-500 outline-none text-sm focus:border-amber-400 transition-colors"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mb-8">
              <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Describe your project scope, architecture requirements, or timeline goals..."
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-neutral-500 outline-none text-sm resize-none focus:border-amber-400 transition-colors"
              />
            </div>

            <AnimatePresence>
              {status.text && (
                <div
                  className={`p-4 rounded-2xl mb-8 flex items-start gap-3 text-sm font-medium border ${
                    status.type === "success"
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                      : "bg-rose-500/10 border-rose-500/20 text-rose-400"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400 mt-0.5" />
                  )}
                  <span className="leading-relaxed">{status.text}</span>
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${status.type === "success" ? "bg-emerald-400" : "bg-amber-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]"}`} />
              <span className="text-xs text-neutral-300 uppercase tracking-wider font-semibold">
                {loading ? "Syncing..." : status.type === "success" ? "Dispatched" : "Ready to Sync"}
              </span>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className={`bg-amber-400 text-black px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-amber-300 hover:scale-105 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] ${
                loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {loading ? "Dispatching..." : "Dispatch Request"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* HQ Info */}
        <div className="bg-[#12141a] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden relative shadow-2xl">
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-4">
              Headquarters
            </span>
            <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">
              Bangalore
            </h2>
            <p className="text-neutral-400 text-sm mb-8">
              Karnataka, India
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                  <Mail className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-1">
                    Support
                  </span>
                  <a
                    href="mailto:support@covianlab.com"
                    className="text-sm font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    support@covianlab.com
                  </a>
                </div>
              </div>

              <div className="flex items-state gap-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
                  <Phone className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-1">
                    Direct Contact
                  </span>
                  <a
                    href="tel:+919981013564"
                    className="text-sm font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    +91 9981013564
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}