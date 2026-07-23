"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const footerLinks = {
  Systems: ["Data Intelligence", "Product Engines", "Performance Growth"],
  Company: ["Growth Models", "Portfolio", "Privacy"],
};

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-slate-950">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 w-full border-t border-white/5">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="text-xl font-bold text-slate-100 font-headline mb-4">CovianLab</div>
          <p className="text-slate-500 text-sm leading-relaxed mb-3">
            Engineering end-to-end growth systems for the next generation of business leaders.
          </p>
          <div className="mt-2 text-xs text-slate-600 uppercase tracking-widest space-y-1">
            <div>Founder &amp; CEO</div>
            <div className="text-slate-400 font-semibold">Balmukund kumar</div>
            
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h5 className="font-label text-sm uppercase tracking-widest text-cyan-400 mb-8 font-bold">{section}</h5>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link}>
                  <motion.a
                    whileHover={{ x: 4, color: "#67e8f9" }}
                    href="#"
                    className="text-slate-500 hover:text-cyan-300 transition-colors inline-block text-sm"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Updates / Newsletter */}
        <div>
          <h5 className="font-label text-sm uppercase tracking-widest text-cyan-400 mb-8 font-bold">Updates</h5>
          <div className="bg-surface-container-low p-1 border border-white/5 flex">
            <input
              type="email"
              placeholder="Your Work Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-none outline-none text-sm w-full px-4 text-on-surface placeholder-slate-600"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="signature-gradient p-2 flex-shrink-0 cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 text-on-primary-fixed" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-12 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-slate-500 text-xs font-label tracking-widest uppercase">
          © 2026 CovianLab. Engineered for Growth.
        </span>
        <div className="flex gap-8">
          <Link href="#" className="text-slate-500 hover:text-cyan-400 text-xs uppercase tracking-widest transition-colors">Terms</Link>
          <Link href="/contact" className="text-slate-500 hover:text-cyan-400 text-xs uppercase tracking-widest transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
