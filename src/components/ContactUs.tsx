import React, { useState } from "react";
import { RevealBlock } from "./RevealBlock";
import { SERVICES } from "../constants/data/index";
import { motion } from "framer-motion";
import { SectionTag, SectionTitle } from "./SectionHeading";

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({
        fname: "",
        lname: "",
        email: "",
        service: "",
        message: "",
      });
    }, 3500);
  };

  const inputClass =
    "w-full dark:bg-navy-700 bg-gray-50 border dark:border-white/5 border-navy-900/10 rounded-xl px-4 py-3 text-sm dark:text-white text-navy-900 outline-none focus:border-blue-DEFAULT/60 transition-colors duration-200 dark:placeholder:text-white/20 placeholder:text-navy-900/30";

  return (
    <section id="contact" className="dark:bg-navy-900 bg-white">
      <div className="max-w-6xl mx-auto px-5 py-24">
        <RevealBlock>
          <SectionTag>Contact</SectionTag>
        </RevealBlock>
        <RevealBlock delay={0.1}>
          <SectionTitle>
            Let's Build Something{" "}
            <span className="grad-text">Great Together</span>
          </SectionTitle>
          <p className="dark:text-white/45 text-navy-900/50 text-base max-w-lg leading-relaxed mb-12">
            Have a project in mind? We'd love to hear from you. We reply within
            24 hours.
          </p>
        </RevealBlock>
        <div className="grid md:grid-cols-1 gap-12 items-start">
          {/* Info */}
          <RevealBlock delay={0.1}>
            <div className="space-y-4">
              {[
                { icon: "📧", text: "needsynq@gmail.com" },
                { icon: "📞", text: "+63 994 692 8323" },
                { icon: "📍", text: "Philippines" },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 text-sm dark:text-white/75 text-navy-900/70"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-xl dark:bg-navy-card bg-gray-50 border dark:border-white/5 border-navy-900/5 flex items-center justify-center">
                    {c.icon}
                  </div>
                  {c.text}
                </motion.div>
              ))}
              <div className="mt-6 dark:bg-navy-card bg-gray-50 border dark:border-white/5 border-navy-900/5 rounded-2xl p-5">
                <p className="text-xs dark:text-white/40 text-navy-900/45 leading-relaxed">
                  ☁️ Cloud Providers · 💳 Payment Gateways · 🔌 API Integrations
                </p>
                <p className="text-xs dark:text-white/25 text-navy-900/30 mt-1">
                  Trusted technology partnerships for scalable solutions
                </p>
              </div>
            </div>
          </RevealBlock>

          {/* Form */}
          {/* <RevealBlock delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs dark:text-white/35 text-navy-900/40 font-medium mb-1 block">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Juan"
                    value={form.fname}
                    onChange={(e) =>
                      setForm({ ...form, fname: e.target.value })
                    }
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-xs dark:text-white/35 text-navy-900/40 font-medium mb-1 block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="dela Cruz"
                    value={form.lname}
                    onChange={(e) =>
                      setForm({ ...form, lname: e.target.value })
                    }
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs dark:text-white/35 text-navy-900/40 font-medium mb-1 block">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="juan@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-xs dark:text-white/35 text-navy-900/40 font-medium mb-1 block">
                  Service Needed
                </label>
                <select
                  value={form.service}
                  onChange={(e) =>
                    setForm({ ...form, service: e.target.value })
                  }
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select a service…
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs dark:text-white/35 text-navy-900/40 font-medium mb-1 block">
                  Tell Us About Your Project
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe your idea, problem, or goals…"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className={inputClass}
                  style={{ resize: "none" }}
                />
              </div>
              <motion.button
                type="submit"
                className={`w-full py-3.5 rounded-xl font-syne font-bold text-sm transition-all duration-300 ${
                  sent
                    ? "bg-emerald-500 text-white"
                    : "grad-bg text-white shadow-lg shadow-blue-DEFAULT/30"
                }`}
                whileHover={!sent ? { y: -2, scale: 1.01 } : {}}
                whileTap={!sent ? { scale: 0.98 } : {}}
              >
                {sent ? "✓ Message Sent!" : "Send Message →"}
              </motion.button>
            </form>
          </RevealBlock> */}
        </div>
      </div>
    </section>
  );
}
export default Contact;
