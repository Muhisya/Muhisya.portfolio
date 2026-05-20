import { motion, useReducedMotion } from "framer-motion";
import { Link, scroller } from "react-scroll";

// ─── Data ──────────────────────────────────────────────────────────────────
const NAV_LINKS = ["home", "about", "skills", "achievements", "portfolio", "contact"];

const SOCIALS = [
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
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-hibban-720374332/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

// ─── Animation helpers ─────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24, filter: "blur(5px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay },
  },
});

// ─── Component ─────────────────────────────────────────────────────────────
export default function Footer() {
  const prefersReduced = useReducedMotion();
  const year = new Date().getFullYear();
  const vp = { once: true, amount: 0.2 };

  return (
    <footer
      className="relative w-full text-white overflow-hidden"
      style={{ background: "#00121A" }}
    >
      {/* ── Top cyan divider line ─────────────────────────────────────── */}
      <div className="w-full h-px" style={{
        background: "linear-gradient(90deg, transparent, rgba(0,209,255,0.4), transparent)"
      }}/>

      {/* ── Ambient glow ──────────────────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute" style={{
          width: 500, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,209,255,0.06) 0%, transparent 70%)",
          top: 0, left: "50%", transform: "translateX(-50%)",
        }}/>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">

        {/* ── Top section: brand + nav + socials ───────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-14">

          {/* Brand column */}
          <motion.div
            className="flex flex-col gap-4 max-w-xs"
            variants={prefersReduced ? {} : fadeUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scroller.scrollTo("home", { smooth: true, duration: 500 });
              }}
              className="text-2xl font-extrabold tracking-tight cursor-pointer w-fit"
              style={{ letterSpacing: "-0.03em" }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              Mu<span style={{ color: "#00D1FF" }}>hi</span>sya
            </motion.a>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              A student developer building clean, fast, and thoughtful web experiences.
              Always learning. Always building.
            </p>
            {/* Availability dot */}
            <span className="inline-flex items-center gap-2 text-xs font-medium w-fit"
              style={{ color: "rgba(255,255,255,0.35)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00D1FF" }}/>
              Open to opportunities
            </span>
          </motion.div>

          {/* Nav + Socials column */}
          <div className="flex flex-col sm:flex-row gap-12">

            {/* Quick nav */}
            <motion.div
              variants={prefersReduced ? {} : fadeUp(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={vp}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.16em" }}>
                Navigation
              </p>
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map((section) => (
                  <li key={section}>
                    <Link
                      to={section}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="text-sm cursor-pointer transition-colors duration-150"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "#00D1FF"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={prefersReduced ? {} : fadeUp(0.15)}
              initial="hidden"
              whileInView="show"
              viewport={vp}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.16em" }}>
                Social
              </p>
              <ul className="flex flex-col gap-3">
                {SOCIALS.map(({ label, href, icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-sm transition-colors duration-150"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "#00D1FF"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
                    >
                      {icon}
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* ── Divider ───────────────────────────────────────────────────── */}
        <div className="w-full h-px mb-8" style={{ background: "rgba(255,255,255,0.06)" }}/>

        {/* ── Bottom bar ────────────────────────────────────────────────── */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          variants={prefersReduced ? {} : fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © {year} Muhisya. All rights reserved.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={() => scroller.scrollTo("home", { smooth: true, duration: 600 })}
            className="flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full transition-colors"
            style={{
              color: "rgba(255,255,255,0.4)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            whileHover={{
              color: "#00D1FF",
              borderColor: "rgba(0,209,255,0.3)",
              background: "rgba(0,209,255,0.06)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            Back to top
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
