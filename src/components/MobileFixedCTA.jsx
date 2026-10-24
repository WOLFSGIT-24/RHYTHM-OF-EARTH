import React from 'react';

export default function MobileFixedCTA({ onOpenBookModal }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/95 backdrop-blur-xl border-t border-white/15 px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {/* Left Button: Enquire Now */}
        <button
          onClick={onOpenBookModal}
          type="button"
          className="flex-1 bg-[#557A46] hover:bg-[#3e5c32] text-white font-semibold text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-lg active:scale-[0.98] transition-all cursor-pointer text-center"
        >
          Enquire Now
        </button>

        {/* Right Button: Book Site Visit */}
        <button
          onClick={onOpenBookModal}
          type="button"
          className="flex-1 bg-white hover:bg-neutral-100 text-[#1c2b18] font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-lg active:scale-[0.98] transition-all cursor-pointer text-center"
        >
          Book Site Visit
        </button>
      </div>
    </div>
  );
}
