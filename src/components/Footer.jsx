import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0e140d] text-white border-t border-white/10">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Overview (Text Logo Only) */}
          <div className="flex flex-col gap-4 text-left">
            <a className="flex flex-col group cursor-pointer no-underline" href="#hero">
              <span className="text-white text-lg font-bold tracking-[0.22em] uppercase font-serif transition-colors group-hover:text-[#a0c49d]">
                RHYTHM OF EARTH
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#a0c49d] uppercase font-sans">
                Bangalore's FIRST Granite-Road Villa Community
              </span>
            </a>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed font-light">
              25+ Acres master planned private villa community behind Sobha Townpark, Hosur Road. Featuring 4 BHK &amp; Royal 6 BHK villas with private forests, Italian marble, and a 40,000 sq.ft clubhouse.
            </p>
            <div className="pt-2">
              <span className="text-[10px] text-neutral-500 block uppercase tracking-wider mb-1">
                Project Sanctions &amp; Approvals
              </span>
              <span className="text-xs text-[#a0c49d] font-mono">
                RERA Registered Villa Community · Bangalore Urban
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="flex flex-col gap-3 text-left">
            <span className="text-sm font-bold font-serif text-white uppercase tracking-wider mb-1">
              Quick Navigation
            </span>
            <div className="flex flex-col gap-2.5">
              <a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#hero">
                Overview
              </a>
              <a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#collection">
                The Villa Collection
              </a>
              <a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#forest">
                Your Own Private Forest
              </a>
              <a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#specifications">
                Natural Stone &amp; Specifications
              </a>
              <a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#clubhouse">
                40,000 sq.ft Clubhouse &amp; Amenities
              </a>
              <a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#location">
                Location &amp; Connectivity
              </a>
            </div>
          </div>

          {/* Column 3: Site & Sales Experience Center */}
          <div className="flex flex-col gap-3 text-left">
            <span className="text-sm font-bold font-serif text-white uppercase tracking-wider mb-1">
              Experience Center Address
            </span>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Rhythm of Earth Villa Community,<br />
              Behind Sobha Townpark, Off Hosur Road,<br />
              Bangalore Urban District,<br />
              Karnataka – 560100
            </p>
            <div className="pt-3">
              <span className="text-[11px] text-neutral-400 block font-medium">Visiting Hours:</span>
              <span className="text-xs text-neutral-300">10:00 AM – 6:30 PM (Daily by Prior Appointment)</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-xs">
          <p className="text-center sm:text-left">
            © 2026 Rhythm of Earth. All rights reserved. Premium Villa Community.
          </p>
          <div className="flex items-center gap-6">
            <a className="hover:text-white transition-colors" href="#hero">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="#hero">
              Terms &amp; Disclaimers
            </a>
            <a className="hover:text-white transition-colors" href="#hero">
              RERA Compliances
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
