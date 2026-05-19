import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// ─── Project data ──────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: "Kopi Tepi",
    description: "A cozy coffee shop website built with modern design and smooth UI.",
    github: "#",
    website: "https://kopitepi.vercel.app/",
    image: "/projects/kopitepi.png",
    accent: "#F59E0B",
    tags: ["React", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Qudex",
    description: "Read, listen, and bookmark the Holy Al-Quran with a modern, fast, and immersive digital experience.",
    github: "https://github.com/Muhisya/qudex",
    website: "https://muhisya.github.io/qudex/",
    image: "/projects/qudex.png",
    accent: "#38BDF8",
    tags: ["JavaScript", "API"],
  },
  {
    id: 3,
    title: "Meathera",
    description: "Real-time weather info with high accuracy — check today's temperature and ambient conditions instantly.",
    github: "https://github.com/Muhisya/meathera",
    website: "https://meathera.netlify.app/",
    image: "/projects/meathera.png",
    accent: "#A78BFA",
    tags: ["React", "API"],
  },
  {
    id: 4,
    title: "Vantedge",
    description: "Frontend slicing project converting a Figma design into a pixel-perfect responsive web page.",
    github: "https://github.com/Muhisya/vantedge",
    website: "https://vantedg.netlify.app/",
    image: "/projects/vantedge.png",
    accent: "#F472B6",
    tags: ["HTML", "CSS"],
  },
  {
    id: 5,
    title: "Ultraman Card",
    description: "A festive Eid greeting page featuring a playful UI and smooth animations.",
    github: "https://github.com/Muhisya/ultraman-card",
    website: "https://ultrasearch.netlify.app/",
    image: "/projects/eid.png",
    accent: "#34D399",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    id: 6,
    title: "Pokédex",
    description: "Browse and discover Pokémon in a clean, interactive Pokédex UI.",
    github: "https://github.com/HoshiExperience/Pokemon-Deck",
    website: "https://hoshiexperience.github.io/Pokemon-Deck/",
    image: "/projects/pokedex.png",
    accent: "#818CF8",
    tags: ["JavaScript", "API"],
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
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.08 },
  }),
};

// ─── GitHub icon ───────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

// ─── Project card ──────────────────────────────────────────────────────────
function ProjectCard({ project, index, onPreview }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22 }}
    >
      {/* ── Image area ──────────────────────────────────────────────── */}
      <div
        className="relative w-full overflow-hidden cursor-pointer"
        style={{ height: 210 }}
        onClick={() => onPreview(project)}
      >
        {/* Fallback gradient bg shown behind image */}
        <div
          className="absolute inset-0"
          style={{ background: `${project.accent}18` }}
        />

        {/* Project image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.07)" : "scale(1)" }}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />

        {/* Overlay on hover */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{
            background: "rgba(0,0,0,0.55)",
            opacity: hovered ? 1 : 0,
            backdropFilter: "blur(2px)",
          }}
        >
          <span
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Preview
          </span>
        </div>

        {/* Accent top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: project.accent, opacity: 0.85 }}
        />
      </div>

      {/* ── Card body ───────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide"
              style={{
                background: `${project.accent}18`,
                color: project.accent,
                border: `1px solid ${project.accent}35`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          className="font-bold text-white"
          style={{ fontSize: "1.05rem", letterSpacing: "-0.02em" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "rgba(255,255,255,0.48)" }}
        >
          {project.description}
        </p>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />

        {/* Action buttons */}
        <div className="flex items-center gap-3 pt-1">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-colors duration-150"
            style={{
              color: "rgba(255,255,255,0.55)",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.55)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
            }}
          >
            <GithubIcon /> GitHub
          </a>

          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-colors duration-150 ml-auto"
            style={{
              color: project.accent,
              background: `${project.accent}12`,
              border: `1px solid ${project.accent}30`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${project.accent}25`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `${project.accent}12`;
            }}
          >
            Live Demo <ExternalIcon />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Image preview modal ───────────────────────────────────────────────────
function PreviewModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-4xl w-full"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.93, opacity: 0, y: 10 }}
        transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent bar */}
        <div className="rounded-t-2xl h-[3px]" style={{ background: project.accent }} />

        {/* Image */}
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full rounded-b-2xl object-cover"
          style={{ maxHeight: "75vh", border: "1px solid rgba(255,255,255,0.1)" }}
        />

        {/* Info bar */}
        <div
          className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4 rounded-b-2xl"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(10px)" }}
        >
          <div>
            <p className="font-bold text-white text-sm" style={{ letterSpacing: "-0.01em" }}>
              {project.title}
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
              {project.tags.join(" · ")}
            </p>
          </div>
          <div className="flex gap-3">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
              style={{ color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.08)" }}>
              <GithubIcon /> Code
            </a>
            <a href={project.website} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-black"
              style={{ background: project.accent }}>
              <ExternalIcon /> Visit
            </a>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-9 h-9 rounded-full flex items-center justify-center text-white"
          style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.15)" }}
          aria-label="Close preview"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────
export default function Portfolio() {
  const prefersReduced = useReducedMotion();
  const [preview, setPreview] = useState(null);
  const vp = { once: true, amount: 0.05 };

  return (
    <section
      id="portfolio"
      name="portfolio"
      className="relative min-h-screen flex flex-col items-center justify-center
                 px-4 sm:px-8 py-24 overflow-hidden text-white"
      style={{ background: "#001820" }}
    >
      {/* ── Ambient glow ──────────────────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute" style={{
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,209,255,0.06) 0%, transparent 70%)",
          top: "30%", right: "-10%",
        }}/>
      </div>

      <div className="relative z-10 w-full max-w-6xl">

        {/* ── Heading ───────────────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-14"
          variants={prefersReduced ? {} : fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#00D1FF", letterSpacing: "0.18em" }}
          >
            My Recent Work
          </span>
          <h2
            className="font-extrabold leading-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            My Portfolio
          </h2>
          <div className="mx-auto mt-4 rounded-full"
            style={{ width: 48, height: 3, background: "#00D1FF", opacity: 0.7 }}
          />
        </motion.div>

        {/* ── Grid ──────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onPreview={setPreview}
            />
          ))}
        </div>

        {/* ── View more link ────────────────────────────────────────────── */}
        <motion.div
          className="flex justify-center mt-12"
          variants={prefersReduced ? {} : fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <a
            href="https://github.com/Muhisya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.span
              className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold"
              style={{
                color: "#00D1FF",
                border: "1px solid rgba(0,209,255,0.35)",
                background: "rgba(0,209,255,0.05)",
                display: "flex",
              }}
              whileHover={{ scale: 1.04, background: "rgba(0,209,255,0.12)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              <GithubIcon />
              View More on GitHub
            </motion.span>
          </a>
        </motion.div>
      </div>

      {/* ── Preview modal ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {preview && (
          <PreviewModal
            project={preview}
            onClose={() => setPreview(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
