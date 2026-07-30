"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-screen-xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          CovianLab
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
          <Link href="#mission" className="hover:text-white transition-colors">Mission</Link>
          <Link href="#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black px-5 py-2.5 rounded-full text-xs font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl">
          <Link
            href="#mission"
            onClick={() => setIsOpen(false)}
            className="block text-neutral-300 hover:text-white text-base font-medium transition-colors"
          >
            Mission
          </Link>
          <Link
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block text-neutral-300 hover:text-white text-base font-medium transition-colors"
          >
            Services
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-neutral-300 hover:text-white text-base font-medium transition-colors"
          >
            Contact
          </Link>
          
          <div className="pt-4">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black py-3 rounded-full text-sm font-bold shadow-md">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}