import React from 'react';

export default function PrivateForest({ onOpenBookModal }) {
  const forestFeatures = [
    {
      title: '12 Trees',
      detail: 'Native shade & canopy trees planted in every villa homestead.',
    },
    {
      title: 'Sunken Garden',
      detail: 'Private stone-tiered garden courtyard beside the living room.',
    },
    {
      title: 'Double-Height Courtyard',
      detail: 'Central glass-encased atrium bringing natural light and sky inside.',
    },
    {
      title: 'Rooftop Fruit Orchard',
      detail: 'Private terrace garden curated with fresh fruit-bearing trees.',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-[#182315] text-white" id="forest">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#a0c49d] font-bold block mb-1">
              Biophilic Design
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
              Your Own Private Forest
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-md">
            12 Trees • Sunken Garden • Double-Height Courtyard • Rooftop Fruit Orchard
          </p>
        </div>

        {/* Feature Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-8">
          {/* Left Image */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-xl border border-white/10 h-72 sm:h-96 lg:h-[420px]">
            <img
              src="/rhythm_forest.jpg"
              alt="Central Double-Height Courtyard and Sunken Garden"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
              <span className="text-xs text-[#a0c49d] font-semibold block">Private Courtyard View</span>
              <p className="text-xs text-neutral-200 mt-0.5 font-light">
                Double-height glass atrium with integrated indoor trees and natural light.
              </p>
            </div>
          </div>

          {/* Right: 4 Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {forestFeatures.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 transition-all text-left"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base font-bold font-serif text-white">
                    {item.title}
                  </h3>
                  <span className="text-[11px] text-[#a0c49d] font-mono">0{idx + 1}</span>
                </div>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
