import React from 'react';

export default function ClubhouseLifestyle({ onOpenBookModal }) {
  return (
    <section className="w-full py-16 lg:py-20 bg-[#151c13] text-white" id="clubhouse">
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#a0c49d] font-bold block mb-1">
              Lifestyle
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
              40,000 sq.ft Clubhouse
            </h2>
          </div>
          <div className="bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/15 self-start md:self-auto">
            <span className="text-xs font-semibold text-[#a0c49d] uppercase tracking-wider">
              50+ World-Class Amenities
            </span>
          </div>
        </div>

        {/* Feature Visual Banner */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10 mb-8">
          <img
            src="/rhythm_clubhouse.jpg"
            alt="40,000 sq.ft Luxury Clubhouse"
            className="w-full h-72 sm:h-96 lg:h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                World-Class Leisure &amp; Wellness
              </h3>
              <p className="text-xs text-neutral-300 mt-0.5 font-light">
                Olympic-length infinity pool, indoor courts, spa, gymnasium, and private dining.
              </p>
            </div>

            <button
              onClick={onOpenBookModal}
              className="bg-[#557A46] hover:bg-[#3e5c32] text-white text-xs uppercase tracking-wider font-bold px-6 py-2.5 rounded-full transition-all cursor-pointer whitespace-nowrap shadow-md border border-white/20 self-start sm:self-auto"
              type="button"
            >
              Explore Amenities
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
