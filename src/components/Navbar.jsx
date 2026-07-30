"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Careers", href: "/careers" },
  { name: "Team", href: "/team" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If scrolling down and past 80px, hide navbar. If scrolling up, show navbar.
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHidden(true);
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
      // 👉 Hide on scroll down, reveal on scroll up
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center justify-between gap-8 bg-[#09090b]/80 backdrop-blur-xl border border-white/10 px-6 py-3.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
      >
        {/* Brand Logo: Covian in White, Lab in Tech Blue */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <span className="text-lg font-black tracking-tighter text-white">
            Covian<span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Lab</span>
          </span>
        </Link>

        {/* Center Nav Links */}
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

        {/* Right CTA Button */}
        <div>
          <Link href="/contact">
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#d94814] hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(217,72,20,0.6)] cursor-pointer">
              Get in Touch
            </button>
          </Link>
        </div>
      </motion.nav>
    </motion.header>
  );
}