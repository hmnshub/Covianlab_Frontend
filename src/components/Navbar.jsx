"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Services", href: "/services" },
  { label: "Team", href: "#team" },
  { label: "Portfolio", href: "#portfolio" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-slate-950/40 backdrop-blur-xl shadow-2xl shadow-cyan-900/10"
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-black tracking-tighter text-cyan-400 font-headline"
        >
          CovianLab
        </motion.div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 items-center font-headline font-semibold tracking-tight">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1), duration: 0.4 }}
            >
              <Link
                href={link.href}
                className={
                  link.active
                    ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                    : "text-slate-400 hover:text-slate-100 transition-colors"
                }
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="signature-gradient text-on-primary-fixed px-6 py-2.5 rounded-sm font-headline font-bold text-sm cursor-pointer"
        >
          Get in Touch
        </motion.button>
      </div>
    </motion.nav>
  );
}
