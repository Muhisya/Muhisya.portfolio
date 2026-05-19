// File: src/App.jsx
import React, { useEffect, useState, useReducer } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/Navi";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// ─── Greetings cycling through languages ───────────────────────────────────
const GREETINGS = [
  { word: "Hello",     lang: "English"    },
  { word: "Halo",      lang: "Indonesian" },
  { word: "Bonjour",   lang: "French"     },
  { word: "Hola",      lang: "Spanish"    },
  { word: "こんにちは",  lang: "Japanese"   },
  { word: "안녕하세요",  lang: "Korean"     },
  { word: "مرحبا",     lang: "Arabic"     },
  { word: "Ciao",      lang: "Italian"    },
  { word: "Olá",       lang: "Portuguese" },
  { word: "Привет",    lang: "Russian"    },
  { word: "你好",       lang: "Chinese"    },
  { word: "Merhaba",   lang: "Turkish"    },
  { word: "Hej",       lang: "Swedish"    },
  { word: "Namaste",   lang: "Hindi"      },
  { word: "Sawubona",  lang: "Zulu"       },
];

// ─── SplashScreen ──────────────────────────────────────────────────────────
function SplashScreen({ onDone }) {
  const prefersReduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  // Cycle through greetings quickly, then exit
  useEffect(() => {
    if (prefersReduced) {
      // Skip animation for accessibility
      const t = setTimeout(onDone, 600);
      return () => clearTimeout(t);
    }

    const CYCLE_MS = 130; // speed per word
    const TOTAL = GREETINGS.length;

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current >= TOTAL) {
        clearInterval(interval);
        setExiting(true);
        // small pause on last word before exit
        setTimeout(onDone, 700);
        return;
      }
      setIndex(current);
    }, CYCLE_MS);

    return () => clearInterval(interval);
  }, [prefersReduced, onDone]);

  const greeting = GREETINGS[index];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#001F29] select-none overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,209,255,0.10) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Brand name — always visible */}
      <div className="mb-10 flex items-baseline gap-0">
        <span
          className="font-extrabold tracking-tight text-white"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", letterSpacing: "-0.02em" }}
        >
          Mu
        </span>
        <span
          className="font-extrabold tracking-tight"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            color: "#00D1FF",
            letterSpacing: "-0.02em",
          }}
        >
          hi
        </span>
        <span
          className="font-extrabold tracking-tight text-white"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", letterSpacing: "-0.02em" }}
        >
          sya
        </span>
      </div>

      {/* Greeting word — switches fast */}
      <div className="relative flex flex-col items-center" style={{ minHeight: 100 }}>
        <AnimatePresence mode="popLayout">
          <motion.p
            key={greeting.word}
            className="font-extrabold text-white text-center leading-none"
            style={{
              fontSize: "clamp(3rem, 10vw, 6rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            transition={{ duration: 0.09, ease: "easeOut" }}
          >
            {greeting.word}
          </motion.p>
        </AnimatePresence>

        {/* Language label */}
        <AnimatePresence mode="popLayout">
          <motion.span
            key={greeting.lang}
            className="mt-3 text-xs tracking-widest uppercase"
            style={{ color: "rgba(0, 209, 255, 0.6)", letterSpacing: "0.2em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.07 }}
          >
            {greeting.lang}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Thin progress bar at bottom */}
      <div
        className="absolute bottom-0 left-0 h-[2px]"
        style={{ background: "rgba(0,209,255,0.15)", width: "100%" }}
      >
        <motion.div
          className="h-full"
          style={{ background: "#00D1FF" }}
          initial={{ width: "0%" }}
          animate={{ width: exiting ? "100%" : `${((index + 1) / GREETINGS.length) * 100}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <SplashScreen key="splash" onDone={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Achievements />
            <Portfolio />
          </main>
          <Contact />
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
