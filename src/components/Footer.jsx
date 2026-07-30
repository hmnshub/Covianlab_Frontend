"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-12 relative z-10 text-white">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-xl font-bold tracking-tight text-white">CovianLab</h3>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
            Engineering end-to-end growth systems for the next generation of business leaders.
          </p>
          
          {/* Support Email */}
          <div className="pt-2">
            <a 
              href="mailto:Support@covianlab.com" 
              className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors font-medium"
            >
              Support@covianlab.com
            </a>
          </div>

          {/* Founder & CEO Details (Normal Text, No Highlights) */}
          <div className="text-sm text-neutral-400 pt-1">
            Balmukund Sharma — CEO & Founder / Ex-TCS, CGI
          </div>
        </div>

        {/* Systems Column */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">Systems</h4>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li><Link href="#services" className="hover:text-white transition-colors">Data Intelligence</Link></li>
            <li><Link href="#services" className="hover:text-white transition-colors">Product Engines</Link></li>
            <li><Link href="#services" className="hover:text-white transition-colors">Performance Growth</Link></li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
           
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-screen-xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
        <p>© 2026 CovianLab. Engineered for Growth.</p>
        <Link href="/contact" className="hover:text-white transition-colors mt-4 md:mt-0">
          Contact
        </Link>
      </div>
    </footer>
  );
}