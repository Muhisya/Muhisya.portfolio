import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-scroll";

// ─── Roles that cycle with a typewriter effect ─────────────────────────────
const ROLES = [
  "Web Developer",
  "React Enthusiast",
  "UI/UX Tinkerer",
  "Frontend Craftsman",
];

// ─── Animation variants ────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.13, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  show:   { opacity: 1, y: 0,  filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

// ─── Typewriter hook ───────────────────────────────────────────────────────
function useTypewriter(words, speed = 80, pause = 1600) {
  const [display, setDisplay]   = useState("");
  const [wordIdx, setWordIdx]   = useState(0);
  const [charIdx, setCharIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;

    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }

    setDisplay(word.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

// ─── Component ─────────────────────────────────────────────────────────────
export default function Hero() {
  const prefersReduced = useReducedMotion();
  const role = useTypewriter(ROLES);

  return (
    <section
      id="home"
      name="home"
      className="relative min-h-screen flex flex-col justify-center items-center
                 text-center text-white overflow-hidden px-4 sm:px-6 md:px-12"
      style={{ background: "#001F29" }}
    >
      {/* ── Ambient background glows ──────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Primary cyan glow */}
        <div
          className="absolute"
          style={{
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,209,255,0.13) 0%, transparent 65%)",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Secondary accent glow */}
        <div
          className="absolute"
          style={{
            width: 340,
            height: 340,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,209,255,0.07) 0%, transparent 70%)",
            bottom: "15%",
            right: "10%",
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* ── Main content ──────────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 max-w-2xl w-full mx-auto flex flex-col items-center"
        variants={prefersReduced ? {} : container}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.div variants={prefersReduced ? {} : fadeUp}>
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-6 px-4 py-1.5 rounded-full"
            style={{
              color: "#00D1FF",
              background: "rgba(0,209,255,0.10)",
              border: "1px solid rgba(0,209,255,0.22)",
              letterSpacing: "0.15em",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#00D1FF" }}
            />
            Available for work
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={prefersReduced ? {} : fadeUp}
          className="font-extrabold leading-[1.08] mb-4"
          style={{
            fontSize: "clamp(2.6rem, 8vw, 5rem)",
            letterSpacing: "-0.03em",
          }}
        >
          Hi, I&apos;m{" "}
          <span style={{ color: "#00D1FF" }}>Muhisya</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          variants={prefersReduced ? {} : fadeUp}
          className="mb-6 h-8 flex items-center justify-center"
        >
          <span
            className="font-semibold text-lg sm:text-xl"
            style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "-0.01em" }}
          >
            {role}
            <span
              className="inline-block w-[2px] h-5 ml-1 align-middle animate-pulse rounded-sm"
              style={{ background: "#00D1FF", verticalAlign: "middle" }}
            />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={prefersReduced ? {} : fadeUp}
          className="text-sm sm:text-base leading-relaxed mb-10 max-w-lg"
          style={{ color: "rgba(255,255,255,0.52)" }}
        >
          I build clean, fast, and thoughtfully designed web experiences — focused
          on React, TailwindCSS, and interfaces people actually enjoy using.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={prefersReduced ? {} : fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
        >
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            offset={-80}
            className="group relative w-full sm:w-auto cursor-pointer"
          >
            <motion.span
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-black w-full"
              style={{ background: "#00D1FF" }}
              whileHover={{ scale: 1.04, background: "#4fddfd" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              View Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </motion.span>
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="w-full sm:w-auto cursor-pointer"
          >
            <motion.span
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm w-full"
              style={{
                color: "#00D1FF",
                border: "1px solid rgba(0,209,255,0.40)",
                background: "rgba(0,209,255,0.05)",
              }}
              whileHover={{
                scale: 1.04,
                background: "rgba(0,209,255,0.12)",
                borderColor: "#00D1FF",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              Contact Me
            </motion.span>
          </Link>
        </motion.div>

        {/* Social links row */}
        <motion.div
          variants={prefersReduced ? {} : fadeUp}
          className="flex items-center gap-5 mt-10"
        >
          {[
            {
              label: "GitHub",
              href: "https://github.com/Muhisya",
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              ),
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/muhammad-hibban-720374332/",
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              ),
            },
            {
              label: "Email",
              href: "mailto:hibban241209@student.abudzar.sch.id",
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
                </svg>
              ),
            },
          ].map(({ label, href, icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-10 h-10 rounded-xl transition-colors"
              style={{
                color: "rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              whileHover={{
                scale: 1.12,
                color: "#00D1FF",
                borderColor: "rgba(0,209,255,0.35)",
                background: "rgba(0,209,255,0.08)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ──────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.25)", letterSpacing: "0.18em" }}>
          scroll
        </span>
        <motion.div
          className="w-[1px] h-8 rounded-full"
          style={{ background: "rgba(0,209,255,0.4)" }}
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
