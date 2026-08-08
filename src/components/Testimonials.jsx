"use client";

import { motion } from "framer-motion";
import { Star, Send, MessageSquare } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { getApiBaseUrl } from "@/utils/apiBaseUrl";

// Hardcoded fallbacks so the UI NEVER shows a blank screen.
// NOTE: these are placeholders standing in for real client reviews. Once the
// DB has genuine reviews coming through the form below, swap these out (or
// just delete this array — fetchReviews already prefers live data whenever
// any exists).
const fallbackReviews = [
  {
    _id: "1",
    name: "Anjali Patel",
    role: "E-Commerce Bakery Website",
    text: "CovianLab built a beautiful custom website for our bakery. The online ordering system is incredibly smooth, and our online sales went up 30% in the first month.",
  },
  {
    _id: "2",
    name: "Rohan Desai",
    role: "Data Intelligence & Analytics",
    text: "They completely overhauled our data pipeline. Our monthly cloud server costs dropped by 40% within the first two weeks of deployment.",
  },
];

// Below this many unique reviews, an infinite marquee just loops the same
// couple of cards over and over — which reads as fake. Show a clean static
// layout instead until there's enough real variety to loop convincingly.
const MARQUEE_MIN_REVIEWS = 4;

function ReviewCard({ review }) {
  return (
    <div className="w-full h-full bg-[#09090b] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-white/20 transition-colors">
      <div>
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, index) => (
            <Star key={index} className="w-4 h-4 fill-[#d94814] text-[#d94814]" />
          ))}
        </div>
        <p className="text-neutral-300 text-lg leading-relaxed mb-8">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>
      <div>
        <h4 className="text-white font-bold tracking-tight">{review.name}</h4>
        <p className="text-[#d94814] text-xs uppercase tracking-widest font-semibold mt-1">
          {review.role}
        </p>
      </div>
    </div>
  );
}

function InviteCard() {
  return (
    <a
      href="#review-form"
      className="w-full h-full bg-white/[0.02] border border-dashed border-white/15 rounded-3xl p-8 flex flex-col justify-center items-center text-center gap-4 hover:border-[#d94814]/40 hover:bg-white/[0.04] transition-colors"
    >
      <div className="w-12 h-12 rounded-xl bg-[#d94814]/10 border border-[#d94814]/20 flex items-center justify-center">
        <MessageSquare className="w-6 h-6 text-[#d94814]" />
      </div>
      <div>
        <h4 className="text-white font-bold tracking-tight mb-1">Be one of our first reviews</h4>
        <p className="text-sm text-neutral-400 leading-relaxed">
          We're early, and every review gets read. Tell us how the project went.
        </p>
      </div>
    </a>
  );
}

export default function Testimonials() {
  const [reviews, setReviews] = useState(fallbackReviews);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const API_URL = getApiBaseUrl();

  const fetchReviews = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/reviews?status=approved`);
      const data = await res.json();
      if (data && data.length > 0) {
        setReviews(data);
      }
    } catch (error) {
      console.error("Failed to fetch live reviews, keeping defaults", error);
    }
  }, [API_URL]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const hasEnoughForMarquee = reviews.length >= MARQUEE_MIN_REVIEWS;

  // Mobile auto-scroll — only runs once there's enough real variety to loop
  useEffect(() => {
    if (!hasEnoughForMarquee || isPaused || reviews.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, reviews.length, hasEnoughForMarquee]);

  const handleDragEnd = (e, { offset }) => {
    const swipeDistance = offset.x;
    if (swipeDistance < -50) {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    } else if (swipeDistance > 50) {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newReview = {
      name,
      role: role || "Verified Partner",
      text,
      status: "pending"
    };

    try {
      const res = await fetch(`${API_URL}/api/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });

      if (res.ok) {
        setSubmitted(true);
        setName("");
        setRole("");
        setText("");
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Failed to save review:", error);
    }
  };

  // Simple double-up for the seamless -50% marquee loop — only used once
  // there's enough real variety that the repeat isn't obvious. (Previously
  // this padded a 2-review array up to 6 by repeating itself, then doubled
  // that — which is why the same 2 quotes were visibly looping ~6-7 times.)
  const marqueeReviews = hasEnoughForMarquee ? [...reviews, ...reviews] : [];

  return (
    <section className="py-24 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 mb-12 text-center md:text-left">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#d94814] block mb-3">
          Proof of Execution
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Trusted by <span className="text-neutral-500">Visionaries.</span>
        </h2>
      </div>

      {hasEnoughForMarquee ? (
        <div className="relative w-full mb-24">

          {/* DESKTOP VIEW: Continuous Infinite Scroll */}
          <div className="hidden md:flex relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 20, repeat: Infinity }}
              className="flex gap-6 w-max px-6"
            >
              {marqueeReviews.map((review, i) => (
                <div key={`desktop-${review._id || review.id}-${i}`} className="w-[400px] flex-shrink-0">
                  <ReviewCard review={review} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* MOBILE VIEW: Smart Swipeable Carousel */}
          <div
            className="md:hidden relative w-full overflow-hidden px-6"
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <motion.div
              className="flex"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              animate={{ translateX: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {reviews.map((review, i) => (
                <div key={`mobile-${review._id || review.id}-${i}`} className="w-full flex-shrink-0 px-2">
                  <div className="active:scale-[0.98] transition-transform">
                    <ReviewCard review={review} />
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsPaused(true);
                    setTimeout(() => setIsPaused(false), 5000);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "bg-[#d94814] w-6" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      ) : (
        // FEW REVIEWS: static grid, no fake infinite loop — plus an invite
        // card so 1-2 real reviews still fill the row nicely.
        <div className="max-w-5xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={`static-${review._id || review.id || i}`}>
                <ReviewCard review={review} />
              </div>
            ))}
            {reviews.length < 3 && <InviteCard />}
          </div>
        </div>
      )}

      {/* Review Submission Form */}
      <div id="review-form" className="max-w-2xl mx-auto px-6 scroll-mt-32">
        <div className="bg-[#09090b]/80 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#d94814]/10 blur-[50px] pointer-events-none" />

          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-2">Leave a footprint in the lab.</h3>
            <p className="text-sm text-neutral-400">Submit a review. Once verified by the admin, it will compile into the live marquee.</p>
          </div>

          {submitted ? (
            <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl text-center text-sm font-medium">
              Review submitted successfully! It is pending admin approval.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="flex-1 bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition-colors placeholder:text-neutral-500"
                />
                <input
                  type="text"
                  placeholder="Service Taken (e.g. App Development)"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition-colors placeholder:text-neutral-500"
                />
              </div>
              <textarea
                placeholder="What was it like working with CovianLab?"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                rows={3}
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition-colors placeholder:text-neutral-500 resize-none"
              />
              <button
                type="submit"
                className="mt-2 w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer group"
              >
                Submit for Approval <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
