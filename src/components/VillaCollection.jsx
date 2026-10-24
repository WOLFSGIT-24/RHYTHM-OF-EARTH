import React from 'react';

export default function VillaCollection({ onOpenBookModal }) {
  const villas = [
    {
      name: 'Luxe',
      type: '4 BHK Villa',
      plot: '1,400 sq.ft',
      builtUp: '2,800 sq.ft',
      features: ['3 Master Suites', 'Private Birla Elevator', 'Double-Height Courtyard', '3 Car Parks'],
    },
    {
      name: 'Elite',
      type: '4 BHK Villa',
      plot: '1,750 sq.ft',
      builtUp: '3,500 sq.ft',
      features: ['3 Master Suites', 'Sunken Garden', '8 ft Windows', '11 ft Ceilings'],
    },
    {
      name: 'Signature',
      type: '4 BHK Villa',
      plot: '2,100 sq.ft',
      builtUp: '4,200 sq.ft',
      features: ['12 Trees Private Forest', 'Rooftop Fruit Orchard', 'Italian Marble', 'Private Elevator'],
    },
    {
      name: 'Royal',
      type: '6 BHK Villa',
      plot: '6,000 sq.ft',
      builtUp: '9,000 sq.ft',
      features: ['Palatial 6 BHK Estate', 'Double-Height Courtyard', '3 Car Parks', 'Exclusive Grounds'],
    },
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-[#f9fbf8]" id="collection">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#557A46] font-bold block mb-1">
            Villa Collection
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#1c2b18] tracking-tight">
            4 BHK &amp; Royal 6 BHK Villas
          </h2>
        </div>

        {/* 4 Villa Cards Grid - Compact & Clean */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {villas.map((villa, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-neutral-200/80 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                  <span className="text-xs uppercase tracking-wider text-[#557A46] font-semibold">
                    {villa.name}
                  </span>
                  <span className="text-xs text-neutral-400 font-medium font-mono">
                    {villa.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-serif text-[#1c2b18] mt-3">
                  {villa.name}
                </h3>

                {/* Plot & Built-up */}
                <div className="my-4 p-3 rounded-xl bg-[#f4f7f2] border border-neutral-200/60 grid grid-cols-2 gap-2 text-center">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-medium">Plot</span>
                    <span className="text-sm font-bold text-[#1c2b18] font-serif">{villa.plot}</span>
                  </div>
                  <div className="border-l border-neutral-200">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-medium">Built-Up</span>
                    <span className="text-sm font-bold text-[#1c2b18] font-serif">{villa.builtUp}</span>
                  </div>
                </div>

                {/* Compact Highlights List */}
                <ul className="space-y-2 py-1">
                  {villa.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs text-neutral-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#557A46] shrink-0"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-5 border-t border-neutral-100">
                <button
                  onClick={onOpenBookModal}
                  className="w-full bg-[#f4f7f2] hover:bg-[#557A46] text-[#1c2b18] hover:text-white text-xs font-semibold uppercase tracking-wider py-2.5 rounded-xl transition-all duration-200 cursor-pointer text-center"
                  type="button"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Concise Pitch */}
        <div className="bg-[#1c2b18] text-white rounded-2xl p-6 sm:p-7 shadow-lg border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-serif">
              Why rent an apartment when you can OWN a private villa?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1 font-light">
              Freehold land ownership with private forest courtyards in a 25+ acre gated community.
            </p>
          </div>
          <button
            onClick={onOpenBookModal}
            className="bg-[#557A46] hover:bg-[#3e5c32] text-white text-xs uppercase tracking-wider font-bold px-7 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap shadow-md shrink-0"
            type="button"
          >
            Book Site Visit
          </button>
        </div>

      </div>
    </section>
  );
}
