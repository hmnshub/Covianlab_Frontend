"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

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

  const [loading, setLoading] = useState(false);
  
  // 👉 NEW: Professional UI state instead of browser alert()
  const [status, setStatus] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    // Clear any previous error/success banners when the user starts typing again
    if (status.text) setStatus({ type: "", text: "" });
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", text: "" }); // Reset status on new submission

    const payload = {
      fullName: form.fullName,
      email: form.email,
      serviceInterest: form.service,
      message: form.message,
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        // 👉 Show sleek success banner right inside the form
        setStatus({
          type: "success",
          text: data.message || "Request dispatched successfully! Our team will get in touch soon.",
        });
        
        // Clear form fields
        setForm({
          fullName: "",
          email: "",
          service: "Data Strategy",
          message: "",
        });
      } else {
        // 👉 Show professional error banner
        setStatus({
          type: "error",
          text: data.message || "Failed to dispatch request. Please check your inputs.",
        });
      }
    } catch (error) {
      console.error("Dispatch Error:", error);
      setStatus({
        type: "error",
        text: "Could not reach the server on Port 5000. Please ensure the backend is actively running.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Form Container */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface-container border border-white/5 rounded-sm p-10 flex flex-col justify-between"
        >
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Full Name */}
              <div>
                <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant block mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
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
                  required
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
            <div className="mb-8">
              <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant block mb-3">
                Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Tell us about your project goals..."
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b border-outline-variant/50 pb-2 text-on-surface placeholder-slate-600 outline-none text-sm resize-none focus:border-primary-container transition-colors"
              />
            </div>

            {/* 👉 NEW: Animated Inline Status Banner */}
            <AnimatePresence>
              {status.text && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`p-4 rounded-sm mb-8 flex items-start gap-3 text-sm font-medium border ${
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Submit */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full animate-pulse ${status.type === "success" ? "bg-emerald-400" : "bg-primary-container"}`} />
              <span className="text-xs font-label text-on-surface-variant uppercase tracking-wider">
                {loading ? "Syncing..." : status.type === "success" ? "Dispatched" : "Ready to Sync"}
              </span>
            </div>
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{
                scale: loading ? 1 : 1.04,
                boxShadow: loading ? "none" : "0 0 25px rgba(0,240,255,0.4)",
              }}
              whileTap={{ scale: loading ? 1 : 0.96 }}
              className={`signature-gradient text-on-primary-fixed px-8 py-3 rounded-sm font-headline font-bold text-xs uppercase tracking-widest flex items-center gap-2 ${
                loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {loading ? "Dispatching..." : "Dispatch Request"}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.form>

        {/* HQ Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-surface-container border border-white/5 rounded-sm p-10 flex flex-col justify-between overflow-hidden relative"
        >
          <div className="relative z-10">
            <span className="text-xs font-label uppercase tracking-widest text-primary-container font-bold block mb-6">
              Headquarters
            </span>
            <h2 className="text-4xl font-headline font-black text-on-surface mb-3">
              Bangalore
            </h2>
            <p className="text-on-surface-variant text-sm mb-8">
              Karnataka
              <br />
              India
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-container/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-primary-container" />
                </div>
                <div>
                  <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant block mb-1">
                    Support
                  </span>
                  <a
                    href="mailto:support@covianlab.com"
                    className="text-sm font-bold text-primary-container hover:text-primary transition-colors"
                  >
                    support@covianlab.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-container/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-primary-container" />
                </div>
                <div>
                  <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant block mb-1">
                    Direct Contact
                  </span>
                  <a
                    href="tel:+919981013564"
                    className="text-sm font-bold text-on-surface hover:text-primary-container transition-colors"
                  >
                    +91 9981013564
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Handmade Tech Blueprint Graphic */}
          <div className="absolute bottom-0 left-0 right-0 h-40 opacity-40 flex items-end pointer-events-none">
            <svg
              viewBox="0 0 300 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-primary-container translate-y-4"
            >
              <path d="M10,80 Q50,20 100,50 T200,40 T290,70" stroke="currentColor" strokeWidth="1.5" className="opacity-50" strokeLinecap="round" />
              <path d="M20,90 Q70,40 120,70 T220,20 T300,60" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="opacity-30" strokeLinecap="round" />
              <circle cx="100" cy="50" r="4" fill="currentColor" className="opacity-80" />
              <circle cx="200" cy="40" r="3" fill="currentColor" className="opacity-80" />
              <path d="M96,46 L104,54 M96,54 L104,46" stroke="currentColor" strokeWidth="1" className="opacity-70" />
              <text x="112" y="54" fill="currentColor" fontSize="8" fontFamily="monospace" className="opacity-60 tracking-widest">NODE_01</text>
              <text x="210" y="38" fill="currentColor" fontSize="8" fontFamily="monospace" className="opacity-60 tracking-widest">SYS_REQ</text>
              <line x1="0" y1="90" x2="300" y2="90" stroke="currentColor" strokeWidth="0.5" className="opacity-20" />
              <line x1="100" y1="90" x2="100" y2="85" stroke="currentColor" strokeWidth="1" className="opacity-30" />
              <line x1="200" y1="90" x2="200" y2="85" stroke="currentColor" strokeWidth="1" className="opacity-30" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container via-transparent to-surface-container opacity-80" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}