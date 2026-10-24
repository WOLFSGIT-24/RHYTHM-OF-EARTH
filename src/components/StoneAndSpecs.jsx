import React from 'react';

export default function StoneAndSpecs({ onOpenBookModal }) {
  const stones = [
    { title: 'Granite Roads', tag: "Bangalore's First", desc: '100% authentic granite block paved roads.' },
    { title: 'Italian Marble', tag: 'Luxury Interiors', desc: 'Lapped throughout living, dining & suites.' },
    { title: 'Tandur Stone', tag: 'Natural Terraces', desc: 'Hand-cut stone on decks & garden paths.' },
    { title: 'Sand Stone', tag: 'Exterior Facade', desc: 'Textured natural stone accent walls.' },
  ];

  const specifications = [
    '3 Master Suites (out of 4)',
    'Private Birla Elevator',
    'Aditya Birla Aluminium Windows',
    'TOTO Sanitaryware',
    '11 ft Ceilings',
    '8 ft Expansive Windows',
    '3 Car Parks per Villa',
    'Solar-Powered Street Lights',
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-[#f4f7f2]" id="specifications">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Natural Stone Everywhere */}
        <div className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#557A46] font-bold block mb-1">
                Authentic Craftsmanship
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#1c2b18] tracking-tight">
                Natural Stone Everywhere
              </h2>
            </div>
            <span className="text-xs font-semibold text-[#557A46] bg-white px-4 py-2 rounded-full border border-neutral-200">
              Bangalore's FIRST Granite-Road Community
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stones.map((s, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-neutral-200/80 shadow-sm"
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#557A46] bg-[#f0f5ee] px-2.5 py-0.5 rounded-full inline-block mb-2">
                  {s.tag}
                </span>
                <h3 className="text-lg font-bold font-serif text-[#1c2b18]">
                  {s.title}
                </h3>
                <p className="text-xs text-neutral-600 mt-1 font-light">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Signature Specifications */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-neutral-200/80 shadow-md">
          <div className="mb-8 pb-6 border-b border-neutral-100">
            <span className="text-xs uppercase tracking-[0.25em] text-[#557A46] font-bold block mb-1">
              Standard Inclusions
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#1c2b18]">
              Signature Specifications
            </h3>
          </div>

          {/* 8 Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
            {specifications.map((spec, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#f9fbf8] border border-neutral-200/60 flex items-center gap-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-[#557A46] shrink-0"></span>
                <span className="text-xs sm:text-sm font-semibold text-[#1c2b18]">
                  {spec}
                </span>
              </div>
            ))}
          </div>

          {/* Visual Showcase Image */}
          <div className="rounded-xl overflow-hidden shadow-sm border border-neutral-200">
            <img
              src="/rhythm_stone.jpg"
              alt="Italian Marble, Tandur Stone and 11ft Ceilings"
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
