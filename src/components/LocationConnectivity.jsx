import React from 'react';

export default function LocationConnectivity({ onOpenBookModal }) {
  const highlights = [
    {
      time: '5 Min',
      label: 'To Metro',
      sub: 'Upcoming & operational transit',
    },
    {
      time: '20 Min',
      label: "India's 2nd Largest Cricket Stadium",
      sub: 'Upcoming international sports hub',
    },
    {
      time: '30 Min',
      label: '2nd International Airport',
      sub: 'Upcoming international gateway',
    },
    {
      time: 'Direct',
      label: 'Right Next to SWIFT City',
      sub: 'High-tech commercial district',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-[#f9fbf8]" id="location">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#557A46] font-bold block mb-1">
              Location Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#1c2b18] tracking-tight">
              Behind Sobha Townpark, Hosur Road
            </h2>
          </div>
          <span className="text-xs font-semibold text-[#557A46] bg-white px-4 py-2 rounded-full border border-neutral-200">
            25+ Acres Master Enclave
          </span>
        </div>

        {/* 4 Connectivity Times Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 border border-neutral-200/80 shadow-sm text-left"
            >
              <span className="text-2xl sm:text-3xl font-bold font-serif text-[#1c2b18] block mb-1">
                {item.time}
              </span>
              <h3 className="text-sm font-bold text-[#1c2b18]">
                {item.label}
              </h3>
              <p className="text-xs text-neutral-500 mt-1 font-light">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
