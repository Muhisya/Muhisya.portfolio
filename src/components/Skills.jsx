import { motion, useReducedMotion } from "framer-motion";

// ─── Proficiency config ────────────────────────────────────────────────────
// level: 1–4  (1 = Elementary, 2 = Basic, 3 = Intermediate, 4 = Experienced)
const SKILL_GROUPS = [
  {
    title: "Frontend",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: [
      { name: "HTML",       level: 4 },
      { name: "CSS",        level: 4 },
      { name: "JavaScript", level: 3 },
      { name: "React",      level: 2 },
      { name: "Tailwind",   level: 2 },
      { name: "Bootstrap",  level: 1 },
    ],
  },
  {
    title: "Backend & Tools",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    skills: [
      { name: "Node.js",  level: 3 },
      { name: "Git",      level: 4 },
      { name: "MySQL",    level: 2 },
      { name: "Firebase", level: 1 },
      { name: "Figma",    level: 2 },
      { name: "Sketch",   level: 1 },
    ],
  },
];

const LEVEL_LABELS = ["", "Elementary", "Basic", "Intermediate", "Experienced"];
const DOTS = 4;

// ─── Animation helpers ─────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28, filter: "blur(5px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay },
  },
});

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: (i) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.15 },
  }),
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: (i) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.35, ease: "easeOut", delay: i * 0.06 },
  }),
};

// ─── Proficiency dots ──────────────────────────────────────────────────────
function LevelDots({ level }) {
  return (
    <div className="flex gap-[5px] items-center mt-1">
      {Array.from({ length: DOTS }).map((_, i) => (
        <motion.span
          key={i}
          className="rounded-full"
          style={{
            width: 7, height: 7,
            background: i < level ? "#00D1FF" : "rgba(255,255,255,0.12)",
            boxShadow: i < level ? "0 0 6px rgba(0,209,255,0.5)" : "none",
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.07, duration: 0.25, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

// ─── Skill chip ────────────────────────────────────────────────────────────
function SkillChip({ name, level }, i) {
  return (
    <motion.div
      key={name}
      custom={i}
      variants={chipVariants}
      className="flex flex-col px-4 py-3 rounded-xl"
      style={{
        background: "rgba(0,209,255,0.06)",
        border: "1px solid rgba(0,209,255,0.14)",
      }}
      whileHover={{
        background: "rgba(0,209,255,0.13)",
        borderColor: "rgba(0,209,255,0.35)",
        y: -3,
      }}
      transition={{ duration: 0.18 }}
    >
      <span className="text-sm font-semibold text-white" style={{ letterSpacing: "-0.01em" }}>
        {name}
      </span>
      <LevelDots level={level} />
      <span className="text-[10px] mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
        {LEVEL_LABELS[level]}
      </span>
    </motion.div>
  );
}

// ─── Component ─────────────────────────────────────────────────────────────
export default function Skills() {
  const prefersReduced = useReducedMotion();
  const vp = { once: true, amount: 0.15 };

  return (
    <section
      id="skills"
      name="skills"
      className="relative min-h-screen text-white flex flex-col items-center justify-center
                 px-4 sm:px-8 py-24 overflow-hidden"
      style={{ background: "#001820" }}
    >
      {/* ── Ambient glow ──────────────────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute" style={{
          width: 520, height: 520, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,209,255,0.08) 0%, transparent 70%)",
          top: "40%", left: "50%", transform: "translate(-50%, -50%)",
        }}/>
      </div>

      <div className="relative z-10 w-full max-w-5xl">

        {/* ── Heading ───────────────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          variants={prefersReduced ? {} : fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#00D1FF", letterSpacing: "0.18em" }}>
            What I Work With
          </span>
          <h2 className="font-extrabold leading-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}>
            My Skills
          </h2>
          <div className="mx-auto mt-4 rounded-full"
            style={{ width: 48, height: 3, background: "#00D1FF", opacity: 0.7 }}/>
        </motion.div>

        {/* ── Legend ────────────────────────────────────────────────────── */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-12 flex-wrap"
          variants={prefersReduced ? {} : fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {LEVEL_LABELS.slice(1).map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div className="flex gap-[4px]">
                {Array.from({ length: DOTS }).map((_, d) => (
                  <span key={d} className="rounded-full" style={{
                    width: 6, height: 6,
                    background: d <= i ? "#00D1FF" : "rgba(255,255,255,0.12)",
                  }}/>
                ))}
              </div>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* ── Skill group cards ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              custom={gi}
              variants={prefersReduced ? {} : cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              className="rounded-2xl p-6 sm:p-8 flex flex-col gap-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Card header */}
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-xl"
                  style={{ background: "rgba(0,209,255,0.12)", color: "#00D1FF" }}>
                  {group.icon}
                </span>
                <h3 className="font-bold text-lg text-white" style={{ letterSpacing: "-0.02em" }}>
                  {group.title}
                </h3>
              </div>

              {/* Chips grid */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                variants={prefersReduced ? {} : { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
                initial="hidden"
                whileInView="show"
                viewport={vp}
              >
                {group.skills.map((skill, i) => SkillChip(skill, i))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom note ───────────────────────────────────────────────── */}
        <motion.p
          className="text-center mt-10 text-sm"
          style={{ color: "rgba(255,255,255,0.28)" }}
          variants={prefersReduced ? {} : fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          Always learning · always building
        </motion.p>
      </div>
    </section>
  );
}
