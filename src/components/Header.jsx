import React, { useState, useEffect } from 'react';

export default function Header({ onOpenBookModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Villa Collection', href: '#collection' },
    { label: 'Private Forest', href: '#forest' },
    { label: 'Natural Stone & Specs', href: '#specifications' },
    { label: 'Clubhouse', href: '#clubhouse' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md py-3.5 border-b border-white/10 shadow-xl'
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-6">
        
        {/* Left: Brand Logo (Only Project Name, No Icons) */}
        <a className="flex flex-col group text-left cursor-pointer no-underline" href="#hero">
          <span className="text-white text-base sm:text-lg font-bold tracking-[0.2em] uppercase font-serif transition-colors group-hover:text-[#a0c49d]">
            RHYTHM OF EARTH
          </span>
          <span className="text-[10px] sm:text-[11px] tracking-[0.22em] text-white/65 uppercase font-sans">
            Hosur Road, Bangalore
          </span>
        </a>

        {/* Center / Right: Nav Links + Enquire Button */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="text-[13px] text-white/85 hover:text-white transition-colors font-medium tracking-wide uppercase whitespace-nowrap"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <button
            onClick={onOpenBookModal}
            className="bg-[#557A46] hover:bg-[#3e5c32] text-white transition-all font-medium text-xs tracking-wider uppercase px-6 py-2.5 rounded-full shadow-md cursor-pointer whitespace-nowrap border border-white/15"
            type="button"
          >
            Book Site Visit
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onOpenBookModal}
            className="bg-[#557A46] text-white font-medium text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider"
            type="button"
          >
            Visit
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 text-white border-b border-white/10 px-6 py-5 space-y-4 shadow-2xl backdrop-blur-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-white/85 hover:text-white py-1 uppercase tracking-wider font-medium"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/15 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBookModal(); }}
              className="w-full text-center bg-[#557A46] text-white py-2.5 rounded-xl font-medium text-xs uppercase tracking-wider"
            >
              Book Private Site Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
