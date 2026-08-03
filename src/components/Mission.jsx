"use client";

import { useState, useEffect } from "react";
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
    opacity: 0.5 
  },
  center: { 
    x: 0, 
    opacity: 1, 
    zIndex: 1 
  },
  exit: { 
    x: "-100%", 
    opacity: 0.5, 
    zIndex: 0 
  },
};

export default function Mission() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500); 
    return () => clearInterval(timer);
  }, []);

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
      <div className="relative w-full max-w-5xl mx-auto">
        
        {/* 👉 Removed the backgrounds and borders here. 
            Adjusted heights so it perfectly hugs the image on mobile without extra space. */}
        <div className="relative w-full h-[220px] sm:h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center">
          
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", ease: "easeInOut", duration: 0.6 },
                opacity: { duration: 0.6 }
              }}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              <Image 
                src={images[currentIndex]} 
                alt={`Philosophy slide ${currentIndex + 1}`} 
                fill
                // 👉 object-contain ensures the image NEVER crops on the sides
                className="object-contain w-full h-full drop-shadow-2xl" 
                unoptimized
                priority
              />
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
                idx === currentIndex ? "w-8 bg-[#d94814]" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}