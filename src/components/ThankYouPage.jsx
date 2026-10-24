import React, { useEffect } from 'react';

export default function ThankYouPage({ leadData, onBackToHome }) {
  // Inject Google Ads conversion event snippet into header for Thank You page only
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Thank You | RHYTHM OF EARTH";

    const scriptId = "google-ads-conversion-script";
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.text = `gtag('event', 'conversion', {
    'send_to': 'AW-18341595504/M-2VCJ7r3aUdEPCS-qlE',
    'value': 1.0,
    'currency': 'INR'
});`;
      document.head.appendChild(script);
    }

    // Direct invocation fallback if gtag is already present in window
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-18341595504/M-2VCJ7r3aUdEPCS-qlE",
        value: 1.0,
        currency: "INR"
      });
    }

    return () => {
      document.title = originalTitle;
      const el = document.getElementById(scriptId);
      if (el) {
        el.remove();
      }
    };
  }, []);

  const referenceId = React.useMemo(() => {
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    return `ROE-BLR-${randomNum}`;
  }, []);

  const currentDate = React.useMemo(() => {
    return new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#111810] text-white flex flex-col justify-between">
      {/* Top Header (Text Logo Only) */}
      <header className="w-full bg-black/60 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 py-4 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1380px] mx-auto flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex flex-col text-left cursor-pointer group bg-transparent border-none p-0"
            type="button"
          >
            <span className="text-white text-base sm:text-lg font-bold tracking-[0.2em] uppercase font-serif transition-colors group-hover:text-[#a0c49d]">
              RHYTHM OF EARTH
            </span>
            <span className="text-[10px] tracking-[0.2em] text-[#a0c49d] uppercase font-sans">
              Hosur Road, Bangalore
            </span>
          </button>

          <button
            onClick={onBackToHome}
            type="button"
            className="bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-wider px-5 py-2.5 rounded-full border border-white/20 transition-all cursor-pointer"
          >
            Back to Homepage
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden py-14 px-4 sm:px-6">
        {/* Subtle Ambient Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <img
            src="/rhythm_hero.jpg"
            alt="Rhythm of Earth Villa Enclave"
            className="w-full h-full object-cover scale-105 filter blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111810] via-[#111810]/80 to-[#111810]"></div>
        </div>

        <div className="relative z-10 max-w-3xl w-full mx-auto text-center space-y-8">
          
          {/* Status Badge */}
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#557A46]/20 border border-[#a0c49d]/30 backdrop-blur-md text-[#c2e0be] text-xs font-semibold uppercase tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-[#a0c49d] animate-pulse"></span>
              <span>Site Visit Request Registered</span>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
              Thank You for Your Interest
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed font-light">
              Your request for <strong className="text-white font-medium">RHYTHM OF EARTH — Bangalore's FIRST Granite-Road Villa Community</strong> has been successfully received.
            </p>
          </div>

          {/* Lead Summary Card (if provided) */}
          {leadData && (leadData.name || leadData.phone || leadData.email) && (
            <div className="bg-[#182315]/90 backdrop-blur-xl border border-white/15 rounded-2xl p-6 text-left shadow-2xl max-w-xl mx-auto">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                  Reservation Details
                </span>
                <span className="text-xs font-mono text-[#a0c49d] bg-[#557A46]/20 px-2.5 py-1 rounded-md border border-[#a0c49d]/30">
                  Ref: {referenceId}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {leadData.name && (
                  <div>
                    <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Full Name</span>
                    <span className="font-medium text-white text-base">{leadData.name}</span>
                  </div>
                )}
                {leadData.phone && (
                  <div>
                    <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Phone Number</span>
                    <span className="font-medium text-white text-base">+91 {leadData.phone}</span>
                  </div>
                )}
                {leadData.email && (
                  <div className="sm:col-span-2">
                    <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Email Address</span>
                    <span className="font-medium text-white text-base break-all">{leadData.email}</span>
                  </div>
                )}
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Location</span>
                  <span className="font-medium text-white">Behind Sobha Townpark, Hosur Rd</span>
                </div>
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">Date Registered</span>
                  <span className="font-medium text-white">{currentDate}</span>
                </div>
              </div>
            </div>
          )}

          {/* 3 Step Next Actions */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 text-left shadow-xl max-w-2xl mx-auto">
            <h2 className="text-lg sm:text-xl font-bold font-serif text-white mb-6">
              What Happens Next?
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#557A46] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">Private Villa Specialist Connect</h3>
                  <p className="text-neutral-300 text-xs sm:text-sm mt-0.5 leading-relaxed font-light">
                    Our senior villa advisor will connect with you shortly to share curated 4 BHK &amp; Royal 6 BHK floor plans, plot orientations, and price sheets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#557A46] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">Granite-Road Enclave Documentation</h3>
                  <p className="text-neutral-300 text-xs sm:text-sm mt-0.5 leading-relaxed font-light">
                    Receive complete RERA sanction plans, 25+ acre master layout drawings, and architectural specification brochures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#557A46] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">Chauffeured Site Visit Scheduling</h3>
                  <p className="text-neutral-300 text-xs sm:text-sm mt-0.5 leading-relaxed font-light">
                    Confirm your preferred slot for an experiential tour of the site behind Sobha Townpark, Hosur Road, with dedicated hospitality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={onBackToHome}
              type="button"
              className="bg-[#557A46] hover:bg-[#3e5c32] text-white font-semibold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full shadow-xl transition-all duration-300 cursor-pointer"
            >
              Return to Homepage
            </button>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black/60 border-t border-white/10 py-5 text-center text-neutral-400 text-xs px-4">
        <div className="max-w-[1380px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© 2026 Rhythm of Earth. Behind Sobha Townpark, Hosur Road, Bangalore.</span>
          <button
            onClick={onBackToHome}
            className="text-[#a0c49d] hover:text-white transition-colors cursor-pointer bg-transparent border-none uppercase tracking-wider text-[11px]"
          >
            Explore Rhythm of Earth
          </button>
        </div>
      </footer>
    </div>
  );
}
