import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link, scroller } from "react-scroll";

const NAV_LINKS = ["home", "about", "skills", "portfolio", "contact"];

export default function Navbar() {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive]     = useState("home");

  // Mount entrance
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  // Frosted bg on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracker via IntersectionObserver
  useEffect(() => {
    const observers = [];
    NAV_LINKS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={mounted ? { y: 0, opacity: 1 } : { y: -64, opacity: 0 }}
        transition={
          prefersReduced
            ? { duration: 0 }
            : { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }
        }
        className="fixed top-0 left-0 w-full z-[100]"
        style={{
          background: scrolled
            ? "rgba(0, 18, 24, 0.82)"
            : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          transition: "background 0.4s ease, border-color 0.4s ease",
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          {/* ── Logo ─────────────────────────────────────────── */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scroller.scrollTo("home", { smooth: true, duration: 500 });
            }}
            className="text-xl font-extrabold text-white tracking-tight select-none"
            style={{ letterSpacing: "-0.02em" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            Mu<span style={{ color: "#00D1FF" }}>hi</span>sya
          </motion.a>

          {/* ── Desktop nav links ─────────────────────────────── */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((section) => {
              const isActive = active === section;
              return (
                <li key={section}>
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer block"
                    style={{
                      color: isActive ? "#00D1FF" : "rgba(255,255,255,0.65)",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.95)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                    }}
                  >
                    {/* Active pill background */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: "rgba(0, 209, 255, 0.10)" }}
                        transition={{ type: "spring", stiffness: 380, damping: 34 }}
                      />
                    )}
                    <span className="relative z-10">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── CTA button (desktop) ──────────────────────────── */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold rounded-full px-5 py-2 text-black"
              style={{ background: "#00D1FF" }}
              whileHover={{ scale: 1.04, background: "#4fddfd" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"/>
              </svg>
              Resume
            </motion.a>
          </div>

          {/* ── Hamburger (mobile) ────────────────────────────── */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-lg focus:outline-none relative z-[200]"
            style={{ background: menuOpen ? "rgba(0,209,255,0.1)" : "transparent" }}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <motion.span
              className="block w-5 h-[2px] rounded-full bg-white origin-center"
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
            />
            <motion.span
              className="block w-5 h-[2px] rounded-full bg-white"
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.18 }}
            />
            <motion.span
              className="block w-5 h-[2px] rounded-full bg-white origin-center"
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile menu overlay ───────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-[90] md:hidden"
              style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              className="fixed top-0 right-0 h-full w-64 z-[95] md:hidden flex flex-col"
              style={{
                background: "rgba(0, 18, 24, 0.97)",
                backdropFilter: "blur(20px)",
                borderLeft: "1px solid rgba(255,255,255,0.07)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={
                prefersReduced
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 320, damping: 34 }
              }
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                <span className="text-white font-bold text-lg tracking-tight"
                  style={{ letterSpacing: "-0.02em" }}>
                  Mu<span style={{ color: "#00D1FF" }}>hi</span>sya
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-400 hover:text-white transition"
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              {/* Drawer links */}
              <ul className="flex flex-col gap-1 px-4 pt-6 flex-1">
                {NAV_LINKS.map((section, i) => {
                  const isActive = active === section;
                  return (
                    <motion.li
                      key={section}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.22 }}
                    >
                      <Link
                        to={section}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium cursor-pointer transition-colors duration-150"
                        style={{
                          color: isActive ? "#00D1FF" : "rgba(255,255,255,0.65)",
                          background: isActive ? "rgba(0,209,255,0.10)" : "transparent",
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: isActive ? "#00D1FF" : "rgba(255,255,255,0.2)" }}
                        />
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Resume CTA inside drawer */}
              <div className="px-6 pb-8">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-black transition"
                  style={{ background: "#00D1FF" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"/>
                  </svg>
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
