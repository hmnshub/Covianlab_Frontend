"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-slate-950/40 backdrop-blur-xl shadow-2xl shadow-cyan-900/10"
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter text-cyan-400 font-headline hover:text-cyan-300 transition-colors"
          >
            CovianLab
          </Link>
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 items-center font-headline font-semibold tracking-tight">
          {navLinks.map((link, i) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (i + 1), duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className={
                    isActive
                      ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                      : "text-slate-400 hover:text-slate-100 transition-colors"
                  }
                >
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop CTA & Mobile Hamburger Button */}
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden md:block"
          >
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block signature-gradient text-on-primary-fixed px-6 py-2.5 rounded-sm font-headline font-bold text-sm cursor-pointer"
              >
                Get in Touch
              </motion.span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-6 flex flex-col gap-4 font-headline font-semibold"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    isActive
                      ? "text-cyan-400 text-lg"
                      : "text-slate-400 hover:text-slate-100 text-lg transition-colors"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-2">
              <span className="block text-center signature-gradient text-on-primary-fixed px-6 py-3 rounded-sm font-headline font-bold text-sm">
                Get in Touch
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}