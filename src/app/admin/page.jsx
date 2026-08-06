"use client";

import { useState } from "react";
import { Check, X, Clock, Lock } from "lucide-react";
import { getApiBaseUrl } from "@/utils/apiBaseUrl";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const BACKEND_URL = getApiBaseUrl();

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === "covianlab2026") {
      setIsAuthenticated(true);
      fetchReviews();
    } else {
      alert("Incorrect Admin Passcode");
    }
  };

  const fetchReviews = async () => {
    try {
      const targetUrl = `${BACKEND_URL}/api/reviews`;
      console.log("Fetching reviews from:", targetUrl);

      const res = await fetch(targetUrl);
      
      // Check if response is actually JSON before parsing
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const textResponse = await res.text();
        throw new Error(`Server returned non-JSON response: ${textResponse.slice(0, 100)}`);
      }

      const data = await res.json();
      setReviews(data);
    } catch (error) {
      console.error("Failed to fetch reviews from backend:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, newStatus) => {
    setReviews((prev) =>
      prev.map((r) => (r._id === id ? { ...r, status: newStatus } : r))
    );

    try {
      await fetch(`${BACKEND_URL}/api/reviews`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
    } catch (error) {
      console.error("Failed to update status", error);
      fetchReviews();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#09090b] text-white flex items-center justify-center p-6">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-md w-full backdrop-blur-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#d94814]/10 border border-[#d94814]/30 flex items-center justify-center text-[#d94814]">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Admin Restricted</h1>
              <p className="text-xs text-neutral-400">Enter passcode to access lab controls</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="password"
              placeholder="Admin Passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d94814]"
              required
            />
            <button
              type="submit"
              className="bg-[#d94814] text-white font-bold text-xs uppercase tracking-widest py-3 rounded-xl hover:bg-[#b53a10] transition-colors cursor-pointer"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">CovianLab Admin Panel</h1>
            <p className="text-neutral-400">Manage incoming reviews and public data.</p>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-white/5 border border-white/10 text-xs px-4 py-2 rounded-xl text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            Lock Screen
          </button>
        </div>

        {loading ? (
          <p className="text-neutral-500">Syncing with Express backend...</p>
        ) : reviews.length === 0 ? (
          <p className="text-neutral-500">No reviews submitted yet.</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-bold text-lg">{review.name}</h3>
                    <span className="text-xs font-semibold text-[#d94814] uppercase tracking-widest bg-[#d94814]/10 px-3 py-1 rounded-full">
                      {review.role}
                    </span>
                    
                    {review.status === "pending" && (
                      <span className="flex items-center gap-1 text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-md">
                        <Clock className="w-3 h-3" /> Pending
                      </span>
                    )}
                    {review.status === "approved" && (
                      <span className="flex items-center gap-1 text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-md">
                        <Check className="w-3 h-3" /> Approved
                      </span>
                    )}
                    {review.status === "rejected" && (
                      <span className="flex items-center gap-1 text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded-md">
                        <X className="w-3 h-3" /> Rejected
                      </span>
                    )}
                  </div>
                  <p className="text-neutral-300">&ldquo;{review.text}&rdquo;</p>
                  <p className="text-neutral-500 text-xs mt-2">
                    Submitted: {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => updateStatus(review._id, "approved")}
                    disabled={review.status === "approved"}
                    className="bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/20 px-4 py-2 rounded-lg font-semibold text-sm transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(review._id, "rejected")}
                    disabled={review.status === "rejected"}
                    className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 px-4 py-2 rounded-lg font-semibold text-sm transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}