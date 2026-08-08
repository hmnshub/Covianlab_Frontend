"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/momentum.jpg.png",
  "/building.jpg.png",
  "/outcome.jpg.png",
];

const slideVariants = {
  enter: {
    x: "100%",
    opacity: 0
  },
  center: {
    x: 0,
    opacity: 1,
    zIndex: 1
  },
  exit: {
    x: "-100%",
    opacity: 0,
    zIndex: 0
  },
};

// Was 2000ms — barely enough time to read the slide before it moved on,
// and combined with no preloading it made the whole thing feel glitchy.
const SLIDE_DURATION = 4500;

export default function Mission() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [failedSlides, setFailedSlides] = useState({});
  const preloaded = useRef(false);

  // Preload every slide once on mount so switching images never has to wait
  // on a network fetch mid-transition (this was the main cause of the
  // "blank flash" / buggy-looking loading behavior).
  useEffect(() => {
    if (preloaded.current || typeof window === "undefined") return;
    preloaded.current = true;
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      id="mission"
      className="pt-10 md:pt-16 pb-16 md:pb-24 px-4 md:px-6 max-w-screen-xl mx-auto bg-transparent text-white relative z-10 overflow-hidden"
    >

      {/* Section Header */}
      <div className="mb-8 text-center max-w-2xl mx-auto flex flex-col items-center">
        <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#d94814] uppercase bg-[#d94814]/10 border border-[#d94814]/30 px-4 py-1.5 rounded-full inline-block mb-4">
          Core Philosophy
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          Engineered for velocity and scale.
        </h2>
      </div>

      {/* Auto-Sliding Image Container */}
      <div
        className="relative w-full max-w-5xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        <div className="relative w-full h-[220px] sm:h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center overflow-hidden rounded-2xl bg-[#0d0d10] border border-white/10">

          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", ease: [0.25, 1, 0.5, 1], duration: 0.7 },
                opacity: { duration: 0.5, ease: "linear" }
              }}
              style={{ willChange: "transform, opacity" }}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              {failedSlides[currentIndex] ? (
                // Graceful fallback if a slide image 404s instead of a
                // broken-image icon or an empty box.
                <div className="flex flex-col items-center justify-center gap-3 text-center px-6">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10" />
                  <span className="text-neutral-500 text-sm">Visual coming soon</span>
                </div>
              ) : (
                <Image
                  src={images[currentIndex]}
                  alt={`Philosophy slide ${currentIndex + 1}`}
                  fill
                  className="object-contain w-full h-full drop-shadow-2xl"
                  unoptimized
                  priority
                  onError={() =>
                    setFailedSlides((prev) => ({ ...prev, [currentIndex]: true }))
                  }
                />
              )}
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Navigation Dots */}
        <div className="mt-4 md:mt-6 flex justify-center gap-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-[#d94814]" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
