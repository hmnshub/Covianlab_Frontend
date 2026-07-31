"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, Suspense, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  ArrowRight, CheckCircle2, AlertCircle, ArrowLeft, 
  Terminal, Cpu, Zap, Award, UploadCloud, FileText, Trash2 
} from "lucide-react";

const roles = [
  "Full Stack Developer Intern",
  "Data Engineer Intern",
  "UI/UX Developer Intern",
  "Marketing Intern",
  "General / Other",
];

function ApplyFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "Full Stack Developer Intern",
    college: "",
    gradYear: "2027",
    skills: "",
    githubUrl: "",
    linkedinUrl: "",
    availability: "Immediate (3 Months)",
    message: "",
  });

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  useEffect(() => {
    const urlRole = searchParams.get("role");
    if (urlRole && roles.includes(urlRole)) {
      setForm((prev) => ({ ...prev, role: urlRole }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    if (status.text) setStatus({ type: "", text: "" });
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    if (status.text) setStatus({ type: "", text: "" });
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setStatus({ type: "error", text: "File size exceeds 5MB limit. Please upload a smaller PDF or DOCX." });
      return;
    }

    const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!validTypes.includes(file.type)) {
      setStatus({ type: "error", text: "Invalid file format. Please upload a PDF or Word document (.docx)." });
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setResume({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
        type: file.type,
        base64: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const removeResume = () => {
    setResume(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!resume) {
      setStatus({ type: "error", text: "Please upload your Resume / CV before submitting your application." });
      return;
    }

    if (!form.fullName || !form.email || !form.phone || !form.college || !form.skills || !form.message) {
      setStatus({ type: "error", text: "Please fill out all required fields." });
      return;
    }

    setLoading(true);
    setStatus({ type: "", text: "" });

    const payload = {
      fullName: form.fullName,
      email: form.email,
      serviceInterest: `🎯 INTERN APPLICATION: ${form.role}`,
      message: `
📋 APPLICANT DETAILS:
• Phone: ${form.phone}
• College/University: ${form.college} (Class of ${form.gradYear})
• Availability: ${form.availability}
• Resume Attached: ${resume.name} (${resume.size})

💻 TECHNICAL PROFILE:
• Primary Skills/Stack: ${form.skills}
• GitHub / Portfolio: ${form.githubUrl || "N/A"}
• LinkedIn: ${form.linkedinUrl || "N/A"}

📝 COVER NOTE:
${form.message}
      `.trim(),
      resumeFile: {
        filename: resume.name,
        content: resume.base64,
      },
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://covianlab-backend.vercel.app/api/contact", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onload = function () {
      setLoading(false);
      try {
        const data = JSON.parse(xhr.responseText);
        if (xhr.status >= 200 && xhr.status < 300) {
          setStatus({
            type: "success",
            text: "Application & resume transmitted successfully! Our engineering team will review your profile.",
          });
          setForm({
            fullName: "", email: "", phone: "", role: form.role,
            college: "", gradYear: "2027", skills: "", githubUrl: "",
            linkedinUrl: "", availability: "Immediate (3 Months)", message: "",
          });
          removeResume();
        } else {
          setStatus({
            type: "error",
            text: data.message || "Failed to submit application. Please check your inputs.",
          });
        }
      } catch (err) {
        setStatus({ type: "error", text: "Invalid response from backend server." });
      }
    };

    xhr.onerror = function () {
      setLoading(false);
      setStatus({
        type: "error",
        text: "Could not connect to backend server. Ensure connection is active.",
      });
    };

    xhr.send(JSON.stringify(payload));
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5 sm:px-8 py-12 sm:py-20 text-white">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-amber-400 transition-colors mb-8 sm:mb-12 cursor-pointer font-semibold"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Deployments
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Sidebar Details */}
        <div className="lg:col-span-5 space-y-6 sm:space-y-8 bg-[#12141a] border border-white/10 p-8 rounded-3xl shadow-2xl lg:sticky lg:top-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-2">
              Join The Cohort
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Remote Internship Program
            </h1>
            <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
              We don't do busywork. As an intern at Covian Lab, you will ship production code, architect real cloud pipelines, and build systems used by live clients.
            </p>
          </div>

          <hr className="border-white/10" />

          <div className="space-y-5 sm:space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/10 text-amber-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">100% Remote & Asynchronous</h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Work from anywhere. We care about clean pull requests and milestone delivery, not hours sat at a desk.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/10 text-amber-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Direct Engineering Mentorship</h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Weekly 1-on-1 code reviews with senior architects to level up your system design and full-stack capabilities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/10 text-amber-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Live Production Impact</h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  No dummy projects. Your code will be deployed to live environments and tested by real-world users.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/10 text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Pathway to Full-Time</h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Top-performing interns are fast-tracked for permanent core team roles upon academic graduation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form Container */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 bg-[#12141a] border border-white/10 rounded-3xl p-6 sm:p-10 space-y-6 sm:space-y-8 shadow-2xl"
        >
          <div className="border-b border-white/10 pb-4">
            <h3 className="text-lg sm:text-xl font-bold tracking-wider uppercase text-white">
              Applicant Credentials
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Please fill out all technical and academic details accurately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                Target Role *
              </label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full bg-[#0a0c10] border border-white/20 rounded-xl p-3 text-white outline-none text-sm focus:border-amber-400 transition-colors cursor-pointer"
              >
                {roles.map((r) => (
                  <option key={r} value={r} className="bg-[#12141a] text-white">
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                Availability & Duration *
              </label>
              <select
                name="availability"
                value={form.availability}
                onChange={handleChange}
                className="w-full bg-[#0a0c10] border border-white/20 rounded-xl p-3 text-white outline-none text-sm focus:border-amber-400 transition-colors cursor-pointer"
              >
                <option value="Immediate (3 Months)" className="bg-[#12141a]">Immediate (3 Months)</option>
                <option value="Immediate (6 Months)" className="bg-[#12141a]">Immediate (6 Months)</option>
                <option value="Next Month (3 Months)" className="bg-[#12141a]">Next Month (3 Months)</option>
                <option value="Next Month (6 Months)" className="bg-[#12141a]">Next Month (6 Months)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="Alex Mercer"
                value={form.fullName}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-neutral-500 outline-none text-sm focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="alex@domain.com"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-neutral-500 outline-none text-sm focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-neutral-500 outline-none text-sm focus:border-amber-400 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                College / University *
              </label>
              <input
                type="text"
                name="college"
                required
                placeholder="Indian Institute of Technology / MIT / VIT..."
                value={form.college}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-neutral-500 outline-none text-sm focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                Graduation Year *
              </label>
              <select
                name="gradYear"
                value={form.gradYear}
                onChange={handleChange}
                className="w-full bg-[#0a0c10] border border-white/20 rounded-xl p-2.5 text-white outline-none text-sm focus:border-amber-400 transition-colors cursor-pointer"
              >
                <option value="2025" className="bg-[#12141a]">2025</option>
                <option value="2026" className="bg-[#12141a]">2026</option>
                <option value="2027" className="bg-[#12141a]">2027</option>
                <option value="2028" className="bg-[#12141a]">2028</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
              Primary Tech Stack & Tools *
            </label>
            <input
              type="text"
              name="skills"
              required
              placeholder="e.g. React, Next.js, Node.js, MongoDB, Figma, Python, SQL, Docker"
              value={form.skills}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-neutral-500 outline-none text-sm focus:border-amber-400 transition-colors"
            />
            <span className="text-[11px] text-neutral-400 mt-1 block">
              List the core languages, frameworks, or design software you are most confident building with.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                GitHub / Portfolio URL *
              </label>
              <input
                type="url"
                name="githubUrl"
                required
                placeholder="https://github.com/username or your portfolio"
                value={form.githubUrl}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-neutral-500 outline-none text-sm focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                LinkedIn Profile (Optional)
              </label>
              <input
                type="url"
                name="linkedinUrl"
                placeholder="https://linkedin.com/in/username"
                value={form.linkedinUrl}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-neutral-500 outline-none text-sm focus:border-amber-400 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
              Resume / Curriculum Vitae (PDF or DOCX, max 5MB) *
            </label>
            
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="hidden"
            />

            {!resume ? (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="w-full border-2 border-dashed border-white/20 hover:border-amber-400/60 bg-[#0a0c10] hover:bg-amber-400/5 rounded-2xl p-6 sm:p-8 text-center transition-all cursor-pointer group flex flex-col items-center justify-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    Click to upload your Resume
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Supports PDF, DOC, or DOCX files up to 5MB
                  </p>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full border border-amber-400/30 bg-amber-400/5 rounded-2xl p-4 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-bold text-white truncate">
                      {resume.name}
                    </p>
                    <p className="text-[11px] text-amber-400 uppercase tracking-wider font-semibold">
                      Ready for transmission • {resume.size}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={removeResume}
                  className="p-2 text-neutral-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer flex-shrink-0"
                  title="Remove file"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
              Why Covian Lab? / Cover Note *
            </label>
            <textarea
              name="message"
              required
              rows={3}
              placeholder="Tell us about your hardest technical bug, a project you're proud of, or why you want to build systems with our team..."
              value={form.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-neutral-500 outline-none text-sm resize-none focus:border-amber-400 transition-colors"
            />
          </div>

          <AnimatePresence>
            {status.text && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`p-4 rounded-2xl flex items-start gap-3 text-sm font-medium border ${
                  status.type === "success"
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                    : "bg-rose-500/10 border-rose-500/20 text-rose-400"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400 mt-0.5" />
                )}
                <span className="leading-relaxed">{status.text}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${status.type === "success" ? "bg-emerald-400" : "bg-amber-400"}`} />
              <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                {loading ? "Transmitting..." : status.type === "success" ? "Received" : "Ready for Transmission"}
              </span>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.03 }}
              whileTap={{ scale: loading ? 1 : 0.97 }}
              className={`w-full sm:w-auto bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 text-black px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all ${
                loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
              }`}
            >
              {loading ? "Transmitting Profile..." : "Submit Application"}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <section className="min-h-screen bg-black text-white selection:bg-amber-400 selection:text-black overflow-x-hidden">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-xs uppercase tracking-widest text-amber-400">Loading Application Engine...</div>}>
        <ApplyFormContent />
      </Suspense>
    </section>
  );
}