"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Our Tech", href: "/products" },
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
        {/* Brand Logo - Added relative z-10 to keep it in the background layer */}
        <Link href="/" className="flex items-center group cursor-pointer block relative z-10">
          <div className="relative w-56 h-14 md:w-80 md:h-16 flex-shrink-0 ml-2 md:ml-6">
            <Image 
              src="/logo.png" 
              alt="CovianLab Logo" 
              fill
              className="object-contain object-left origin-left scale-[2] md:scale-[2.5] group-hover:scale-[2.1] md:group-hover:scale-[2.6] transition-transform duration-300 pointer-events-none"
              priority
              unoptimized
            />
          </div>
        </Link>

        {/* Center Nav Links (Desktop Only) - Boosted to z-50 so it cannot be blocked */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 p-1 rounded-full relative z-50">
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

        {/* Right CTA Button (Desktop Only) - Boosted to z-50 */}
        <div className="hidden md:block relative z-50">
          <Link 
            href="/contact"
            className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#d94814] hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(217,72,20,0.6)] cursor-pointer inline-block"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Hamburger Button - Added relative z-50 to place it OVER the invisible logo box */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 focus:outline-none cursor-pointer relative z-50 bg-[#09090b]/50 rounded-full border border-white/10"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Dropdown Drawer - Boosted to z-[60] to sit on top of absolutely everything */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 bg-[#09090b]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl md:hidden space-y-4 z-[60]"
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
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}