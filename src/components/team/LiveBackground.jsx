"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#0B0F17]">
      {/* 1. Moving Cyber Grid */}
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.25) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 2. Interactive Mouse-Following Spotlight */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[150px]"
        animate={{
          x: `${mousePosition.x}%`,
          y: `${mousePosition.y}%`,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* 3. Floating Neon Particles / Glowing Orbs */}
      <motion.div
        animate={{
          x: [0, 300, -200, 0],
          y: [0, -200, 200, 0],
          scale: [1, 1.4, 0.8, 1],
        }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -300, 250, 0],
          y: [0, 250, -150, 0],
          scale: [0.8, 1.5, 1, 0.8],
        }}
        transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]"
      />
    </div>
  );
}