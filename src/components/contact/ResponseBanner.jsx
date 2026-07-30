"use client";

export default function ResponseBanner() {
  return (
    <section className="py-12 px-6 max-w-screen-xl mx-auto bg-black text-white">
      <div className="bg-white/[0.02] border border-white/10 rounded-3xl py-14 px-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
          Expected Response: Under 4 Hours
        </h3>
        <p className="text-neutral-400 text-sm max-w-lg mx-auto leading-relaxed">
          Our lead architects review every inquiry to ensure you're matched
          with the right expertise from the very first call.
        </p>
      </div>
    </section>
  );
}