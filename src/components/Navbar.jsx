"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Careers", href: "/careers" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHidden(true);
        setIsOpen(false);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-screen-xl flex items-center justify-between gap-4 bg-[#09090b]/85 backdrop-blur-xl border border-white/10 px-5 sm:px-6 py-3.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)] relative"
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <span className="text-lg font-black tracking-tighter text-white">
            Covian<span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Lab</span>
          </span>
        </Link>

        {/* Center Nav Links (Desktop Only) */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 p-1 rounded-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 group cursor-pointer"
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-gradient-to-r from-[#d94814] to-[#ff6b35] rounded-full shadow-[0_0_15px_rgba(217,72,20,0.6)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-neutral-400 group-hover:text-white"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Right CTA Button (Desktop Only) */}
        <div className="hidden md:block">
          <Link 
            href="/contact"
            className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#d94814] hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(217,72,20,0.6)] cursor-pointer inline-block"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-1.5 focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Dropdown Drawer */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          className="absolute top-20 left-4 right-4 bg-[#09090b]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl md:hidden space-y-4 z-40"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#d94814] to-[#ff6b35] text-white shadow-[0_0_15px_rgba(217,72,20,0.4)]"
                      : "text-neutral-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10">
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="w-full bg-white text-black py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#d94814] hover:text-white transition-all shadow-md cursor-pointer block text-center"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}