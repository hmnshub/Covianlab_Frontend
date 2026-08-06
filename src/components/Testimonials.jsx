"use client";

import { motion } from "framer-motion";
import { Star, Send } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { getApiBaseUrl } from "@/utils/apiBaseUrl";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const API_URL = getApiBaseUrl();

  const fetchReviews = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/reviews?status=approved`);
      const data = await res.json();
      
      if (data && data.length > 0) {
        setReviews(data);
      } else {
        setReviews([
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
        ]);
      }
    } catch (error) {
      console.error("Failed to fetch reviews from backend", error);
    }
  }, [API_URL]);

  useEffect(() => {
    // Initial load fetches server-approved reviews into the marquee.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchReviews();
  }, [fetchReviews]);

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

  const duplicatedReviews = reviews.length > 0 ? [...reviews, ...reviews] : [];

  return (
    <section className="py-24 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 mb-16 text-center md:text-left">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#d94814] block mb-3">
          Proof of Execution
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Trusted by <span className="text-neutral-500">Visionaries.</span>
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden mb-24">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-6 w-max px-6"
        >
          {duplicatedReviews.map((review, i) => (
            <div
              key={`${review._id || review.id}-${i}`}
              className="w-[350px] md:w-[400px] flex-shrink-0 bg-[#09090b] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-white/20 transition-colors"
            >
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
          ))}
        </motion.div>
      </div>

      <div className="max-w-2xl mx-auto px-6">
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
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-neutral-600"
                />
                <input
                  type="text"
                  placeholder="Service Taken (e.g. App Development)"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-neutral-600"
                />
              </div>
              <textarea
                placeholder="What was it like working with CovianLab?"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-neutral-600 resize-none"
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