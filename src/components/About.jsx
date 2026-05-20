import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { Link } from "react-scroll";

// ─── Animation helpers ─────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay },
  },
});

const fadeLeft = {
  hidden: { opacity: 0, x: -40, filter: "blur(6px)" },
  show: {
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─── Stats cards data ──────────────────────────────────────────────────────
const STATS = [
  {
    value: "3+",
    label: "Years of",
    sub: "Experience",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h1m8-9v1m8 8h1m-15.4-6.4l.7.7m12.1-.7l-.7.7"/>
        <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0-1 3a2 2 0 0 1-4 0a3.5 3.5 0 0 0-1-3"/>
        <path d="M9.7 17h4.6"/>
      </svg>
    ),
  },
  {
    value: "7+",
    label: "Projects",
    sub: "Completed",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3v4a1 1 0 0 0 1 1h4"/>
        <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/>
        <path d="M9 13h6m-6 4h4"/>
      </svg>
    ),
  },
  {
    value: "∞",
    label: "Things",
    sub: "To Learn",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
    ),
  },
];

// ─── Component ─────────────────────────────────────────────────────────────
export default function About() {
  const prefersReduced = useReducedMotion();
  const vp = { once: true, amount: 0.2 };

  return (
    <section
      id="about"
      name="about"
      className="relative min-h-screen flex flex-col justify-center text-white overflow-hidden py-24 px-4 sm:px-6"
      style={{ background: "#001F29" }}
    >
      {/* ── Ambient glow ──────────────────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute" style={{
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,209,255,0.07) 0%, transparent 70%)",
          top: "60%", right: "-10%",
        }}/>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">

        {/* ── Section label + heading ───────────────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          variants={prefersReduced ? {} : fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#00D1FF", letterSpacing: "0.18em" }}
          >
            Get To Know More
          </span>
          <h2
            className="font-extrabold leading-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            About Me
          </h2>
          {/* Decorative underline */}
          <div className="mx-auto mt-4 rounded-full"
            style={{ width: 48, height: 3, background: "#00D1FF", opacity: 0.7 }}
          />
        </motion.div>

        {/* ── Main content row ──────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* ── Photo ─────────────────────────────────────────────────── */}
          <motion.div
            className="flex-shrink-0"
            variants={prefersReduced ? {} : fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <div className="relative">
              {/* Glow ring behind image */}
              <div className="absolute inset-0 rounded-3xl"
                style={{
                  background: "rgba(0,209,255,0.12)",
                  transform: "scale(1.06) rotate(-2deg)",
                  borderRadius: 28,
                }}
              />
              <motion.div
                className="relative overflow-hidden"
                style={{
                  width: 280,
                  height: 360,
                  borderRadius: 24,
                  border: "1px solid rgba(0,209,255,0.2)",
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/muhisya.jpg"
                  alt="Muhisya — profile photo"
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.92)" }}
                />
                {/* Subtle cyan overlay on image */}
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(to top, rgba(0,31,41,0.5) 0%, transparent 50%)",
                }}/>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right side ────────────────────────────────────────────── */}
          <div className="flex-1 flex flex-col items-center md:items-start">

            {/* Stat cards */}
            <motion.div
              className="flex flex-row flex-wrap justify-center md:justify-start gap-4 mb-10 w-full"
              variants={prefersReduced ? {} : { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="show"
              viewport={vp}
            >
              {STATS.map(({ value, label, sub, icon }) => (
                <motion.div
                  key={value}
                  variants={prefersReduced ? {} : fadeUp(0)}
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ duration: 0.22 }}
                  className="flex flex-col items-center justify-center rounded-2xl p-5 text-center"
                  style={{
                    width: 140,
                    background: "rgba(0,209,255,0.07)",
                    border: "1px solid rgba(0,209,255,0.18)",
                    color: "#00D1FF",
                  }}
                >
                  <span className="mb-3 opacity-80">{icon}</span>
                  <span className="font-extrabold text-2xl text-white"
                    style={{ letterSpacing: "-0.02em" }}>{value}</span>
                  <span className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {label}<br />{sub}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Bio text */}
            <motion.p
              className="text-base leading-relaxed mb-8 max-w-xl text-center md:text-left"
              style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.85 }}
              variants={prefersReduced ? {} : fadeUp(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={vp}
            >
              I&apos;m a senior high school student growing as a programmer — passionate
              about building clean, responsive web experiences. I work across both
              frontend and backend using{" "}
              <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>
                React, TailwindCSS, and JavaScript
              </span>
              , and I&apos;m always looking for the next thing to learn and build.
            </motion.p>

            {/* Divider */}
            <motion.div
              className="w-full mb-8"
              style={{ height: 1, background: "rgba(255,255,255,0.06)" }}
              variants={prefersReduced ? {} : fadeUp(0.15)}
              initial="hidden"
              whileInView="show"
              viewport={vp}
            />

            {/* CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center md:items-start"
              variants={prefersReduced ? {} : fadeUp(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={vp}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer"
              >
                <motion.span
                  className="flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm text-black"
                  style={{ background: "#00D1FF", display: "flex" }}
                  whileHover={{ scale: 1.05, background: "#4fddfd" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                >
                  Let&apos;s Talk
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6"/>
                  </svg>
                </motion.span>
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.span
                  className="flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm"
                  style={{
                    color: "#00D1FF",
                    border: "1px solid rgba(0,209,255,0.35)",
                    background: "rgba(0,209,255,0.05)",
                    display: "flex",
                  }}
                  whileHover={{
                    scale: 1.05,
                    background: "rgba(0,209,255,0.12)",
                    borderColor: "#00D1FF",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"/>
                  </svg>
                  Download CV
                </motion.span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
