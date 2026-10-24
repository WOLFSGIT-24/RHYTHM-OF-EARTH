import React from 'react';

export default function Hero({ onOpenBookModal }) {
  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden pt-28 pb-16" id="hero">
      {/* Background Image with Ambient Architectural Lighting Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Rhythm of Earth Luxury Villa Enclave"
          className="w-full h-full object-cover scale-105"
          src="/rhythm_hero.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75"></div>
        <div className="absolute inset-0 bg-[#1c2b18]/25 mix-blend-overlay"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl w-full mx-auto px-5 sm:px-8 lg:px-12 flex flex-col items-center justify-center space-y-6">
        
        {/* Top Centered Pill Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#c2e0be] text-xs font-semibold uppercase tracking-[0.2em] shadow-lg">
          Bangalore's FIRST Granite-Road Villa Community
        </div>

        {/* Main Title: RHYTHM OF EARTH */}
        <div className="space-y-2 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-serif leading-[1.08] drop-shadow-md">
            RHYTHM OF EARTH
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-neutral-200 tracking-wide font-sans">
            25+ Acres of Crafted Private Living · Behind Sobha Townpark, Hosur Road
          </p>
        </div>

        {/* Why rent an apartment quote */}
        <div className="py-2 px-6 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 max-w-2xl">
          <p className="text-sm sm:text-base text-[#c2e0be] font-medium tracking-wide">
            Why rent an apartment when you can OWN a private villa?
          </p>
        </div>

        {/* Connectivity Strip (Clean, architectural, no unwanted icons) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-2">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/15 text-center">
            <span className="block text-xl sm:text-2xl font-bold text-white font-serif">5 Min</span>
            <span className="block text-xs text-neutral-300 font-medium tracking-wide mt-0.5">To Metro</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/15 text-center">
            <span className="block text-xl sm:text-2xl font-bold text-white font-serif">20 Min</span>
            <span className="block text-xs text-neutral-300 font-medium tracking-wide mt-0.5">2nd Largest Cricket Stadium</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/15 text-center">
            <span className="block text-xl sm:text-2xl font-bold text-white font-serif">30 Min</span>
            <span className="block text-xs text-neutral-300 font-medium tracking-wide mt-0.5">Upcoming 2nd Int'l Airport</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/15 text-center">
            <span className="block text-xl sm:text-2xl font-bold text-white font-serif">Direct</span>
            <span className="block text-xs text-neutral-300 font-medium tracking-wide mt-0.5">Adjacent to SWIFT City</span>
          </div>
        </div>

        {/* Centered Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#collection"
            className="inline-flex items-center justify-center bg-white hover:bg-neutral-100 text-[#1e3319] text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-full shadow-2xl transition-all duration-300 cursor-pointer no-underline"
          >
            Explore Villa Collection
          </a>
          <button
            onClick={onOpenBookModal}
            className="inline-flex items-center justify-center bg-[#557A46] hover:bg-[#3e5c32] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-full transition-all duration-300 shadow-xl cursor-pointer border border-white/20"
            type="button"
          >
            Book Private Site Visit
          </button>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-center text-white/70 space-y-1 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.25em] block font-medium">Scroll to Discover</span>
        <div className="w-px h-5 bg-white/40 mx-auto animate-pulse"></div>
      </div>
    </section>
  );
}
