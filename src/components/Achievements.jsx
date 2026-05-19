import { motion, useReducedMotion } from "framer-motion";

// ─── Achievements data ─────────────────────────────────────────────────────
const ACHIEVEMENTS = [
  {
    title: "GitHub & Workflow",
    subtitle: "Version Control Mastery",
    description:
      "Mastered collaborative development through branching, pull requests, and automated actions to streamline project delivery.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    tag: "Open Source",
  },
  {
    title: "Frontend Journey",
    subtitle: "Web Standards & UI/UX",
    description:
      "Built and deployed multiple responsive applications focusing on performance, accessibility, and modern design principles.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    tag: "Development",
  },
  {
    title: "Open Source",
    subtitle: "Community Contributor",
    description:
      "Dedicated contributor to public repositories, improving code quality and documentation for the wider developer community.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
    ),
    tag: "Community",
  },
];

// ─── Animation helpers ─────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay },
  },
});

const cardVariants = {
  hidden: { opacity: 0, y: 44, filter: "blur(6px)" },
  show: (i) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.13 },
  }),
};

// ─── Component ─────────────────────────────────────────────────────────────
export default function Achievements() {
  const prefersReduced = useReducedMotion();
  const vp = { once: true, amount: 0.15 };

  return (
    <section
      id="achievements"
      name="achievements"
      className="relative min-h-screen text-white flex flex-col items-center justify-center
                 px-4 sm:px-8 py-24 overflow-hidden"
      style={{ background: "#001F29" }}
    >
      {/* ── Ambient glow ──────────────────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute" style={{
          width: 560, height: 560, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,209,255,0.07) 0%, transparent 70%)",
          top: "50%", left: "20%", transform: "translate(-50%, -50%)",
        }}/>
      </div>

      <div className="relative z-10 w-full max-w-6xl">

        {/* ── Heading ───────────────────────────────────────────────────── */}
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
            What I've Accomplished
          </span>
          <h2
            className="font-extrabold leading-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            My Achievements
          </h2>
          <div className="mx-auto mt-4 rounded-full"
            style={{ width: 48, height: 3, background: "#00D1FF", opacity: 0.7 }}
          />
        </motion.div>

        {/* ── Cards grid ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map(({ title, subtitle, description, icon, tag }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={prefersReduced ? {} : cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.22 }}
              className="relative flex flex-col rounded-2xl p-7 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Top cyan accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                style={{ background: "linear-gradient(90deg, transparent, #00D1FF, transparent)" }}
              />

              {/* Icon */}
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl mb-5 flex-shrink-0"
                style={{ background: "rgba(0,209,255,0.12)", color: "#00D1FF" }}
              >
                {icon}
              </div>

              {/* Tag pill */}
              <span
                className="self-start text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                style={{
                  color: "#00D1FF",
                  background: "rgba(0,209,255,0.10)",
                  border: "1px solid rgba(0,209,255,0.2)",
                  letterSpacing: "0.12em",
                }}
              >
                {tag}
              </span>

              {/* Title */}
              <h3
                className="font-bold text-white mb-1"
                style={{ fontSize: "1.05rem", letterSpacing: "-0.02em" }}
              >
                {title}
              </h3>

              {/* Subtitle */}
              <p className="text-xs font-medium mb-4" style={{ color: "#00D1FF", opacity: 0.8 }}>
                {subtitle}
              </p>

              {/* Divider */}
              <div className="mb-4" style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom stat strip ─────────────────────────────────────────── */}
        <motion.div
          className="mt-14 grid grid-cols-3 gap-4"
          variants={prefersReduced ? {} : fadeUp(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {[
            { value: "7+",  label: "Projects built"     },
            { value: "3+",  label: "Years learning"     },
            { value: "100%", label: "Passion for code"  },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center py-5 rounded-xl text-center"
              style={{
                background: "rgba(0,209,255,0.05)",
                border: "1px solid rgba(0,209,255,0.12)",
              }}
            >
              <span
                className="font-extrabold text-white"
                style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", letterSpacing: "-0.03em" }}
              >
                {value}
              </span>
              <span className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
