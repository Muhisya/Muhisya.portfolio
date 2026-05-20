import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

// ─── Animation helpers ─────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay },
  },
});

const fadeLeft = {
  hidden: { opacity: 0, x: -36, filter: "blur(6px)" },
  show: {
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 36, filter: "blur(6px)" },
  show: {
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 },
  },
};

// ─── Info items on the left card ──────────────────────────────────────────
const INFO_ITEMS = [
  {
    label: "Location",
    value: "Pondok Tahfizh Plus Abuzdar",
    link: "https://abudzarplus.ponpes.id/",
    linkLabel: "View on Web",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21c-4-5-6-8-6-11a6 6 0 0 1 12 0c0 3-2 6-6 11z"/>
        <circle cx="12" cy="10" r="2"/>
      </svg>
    ),
  },
  {
    label: "Email",
    value: "hibban241209@student.abudzar.sch.id",
    link: "mailto:hibban241209@student.abudzar.sch.id",
    linkLabel: "Send Email",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/Muhisya",
    link: "https://github.com/Muhisya",
    linkLabel: "View Profile",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
];

// ─── Input field component ─────────────────────────────────────────────────
function Field({ label, type = "text", placeholder, value, onChange, as: As = "input", rows }) {
  const [focused, setFocused] = useState(false);
  const props = {
    value, onChange, placeholder,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    className: "w-full bg-transparent text-white text-sm outline-none placeholder-transparent peer",
    style: { resize: "none" },
  };

  return (
    <div
      className="relative px-4 pt-5 pb-3 rounded-xl transition-colors duration-200"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${focused ? "#00D1FF" : "rgba(255,255,255,0.1)"}`,
        boxShadow: focused ? "0 0 0 3px rgba(0,209,255,0.08)" : "none",
      }}
    >
      <label
        className="absolute text-xs font-medium transition-all duration-200 pointer-events-none"
        style={{
          top: focused || value ? 8 : "50%",
          transform: focused || value ? "none" : "translateY(-50%)",
          color: focused ? "#00D1FF" : "rgba(255,255,255,0.35)",
          fontSize: focused || value ? "0.65rem" : "0.8rem",
          left: 16,
        }}
      >
        {label}
      </label>
      {As === "textarea"
        ? <textarea rows={rows} {...props} />
        : <input type={type} {...props} />
      }
    </div>
  );
}

// ─── Component ─────────────────────────────────────────────────────────────
export default function Contact() {
  const prefersReduced = useReducedMotion();
  const vp = { once: true, amount: 0.15 };

  const [form, setForm] = useState({ email: "", name: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.name || !form.message) return;
    setStatus("sending");
    // Simulate sending — wire up to EmailJS / Formspree / your backend here
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
    setForm({ email: "", name: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section
      id="contact"
      name="contact"
      className="relative min-h-screen flex flex-col items-center justify-center
                 text-white px-4 sm:px-8 py-24 overflow-hidden"
      style={{ background: "#001F29" }}
    >
      {/* ── Ambient glow ──────────────────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute" style={{
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,209,255,0.08) 0%, transparent 70%)",
          bottom: "10%", left: "50%", transform: "translateX(-50%)",
        }}/>
      </div>

      <div className="relative z-10 w-full max-w-5xl">

        {/* ── Heading ───────────────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-14"
          variants={prefersReduced ? {} : fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#00D1FF", letterSpacing: "0.18em" }}>
            Get In Touch
          </span>
          <h2 className="font-extrabold leading-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}>
            Contact Me
          </h2>
          <div className="mx-auto mt-4 rounded-full"
            style={{ width: 48, height: 3, background: "#00D1FF", opacity: 0.7 }}/>
        </motion.div>

        {/* ── Main row ──────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row gap-6 items-stretch">

          {/* ── Left info card ────────────────────────────────────────── */}
          <motion.div
            className="flex flex-col gap-5 rounded-2xl p-7 md:w-2/5"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
            variants={prefersReduced ? {} : fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <div>
              <p className="font-bold text-lg text-white mb-1" style={{ letterSpacing: "-0.02em" }}>
                Let's work together
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                I'm always open to new opportunities, collaborations, or just a friendly chat.
                Drop me a message!
              </p>
            </div>

            <div className="h-px" style={{ background: "rgba(255,255,255,0.07)" }}/>

            {/* Info items */}
            <div className="flex flex-col gap-5">
              {INFO_ITEMS.map(({ label, value, link, linkLabel, icon }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl flex-shrink-0"
                    style={{ background: "rgba(0,209,255,0.10)", color: "#00D1FF" }}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-0.5"
                      style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em" }}>
                      {label.toUpperCase()}
                    </p>
                    <p className="text-sm text-white font-medium">{value}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer"
                      className="text-xs mt-0.5 inline-block transition-colors duration-150"
                      style={{ color: "#00D1FF", opacity: 0.7 }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
                    >
                      {linkLabel} →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="mt-auto pt-4">
              <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full"
                style={{
                  color: "#00D1FF",
                  background: "rgba(0,209,255,0.10)",
                  border: "1px solid rgba(0,209,255,0.22)",
                }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00D1FF" }}/>
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* ── Right form ────────────────────────────────────────────── */}
          <motion.div
            className="flex-1 rounded-2xl p-7"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
            variants={prefersReduced ? {} : fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 h-full">
              <Field
                label="Your Email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange("email")}
              />
              <Field
                label="Your Name"
                placeholder="Muhisya"
                value={form.name}
                onChange={handleChange("name")}
              />
              <Field
                as="textarea"
                label="Message"
                placeholder="Hey, I'd love to collaborate..."
                value={form.message}
                onChange={handleChange("message")}
                rows={5}
              />

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm mt-1 transition-colors"
                style={{
                  background: status === "sent" ? "rgba(0,209,255,0.15)" : "#00D1FF",
                  color: status === "sent" ? "#00D1FF" : "#00242C",
                  border: status === "sent" ? "1px solid rgba(0,209,255,0.4)" : "none",
                  cursor: status !== "idle" ? "not-allowed" : "pointer",
                }}
                whileHover={status === "idle" ? { scale: 1.02, background: "#4fddfd" } : {}}
                whileTap={status === "idle" ? { scale: 0.98 } : {}}
                transition={{ duration: 0.15 }}
              >
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.span key="idle" className="flex items-center gap-2"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                      </svg>
                    </motion.span>
                  )}
                  {status === "sending" && (
                    <motion.span key="sending" className="flex items-center gap-2"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                      Sending...
                    </motion.span>
                  )}
                  {status === "sent" && (
                    <motion.span key="sent" className="flex items-center gap-2"
                      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      Message Sent!
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.25)" }}>
                I'll get back to you within 24–48 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
