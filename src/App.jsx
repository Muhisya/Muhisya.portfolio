// File: src/App.jsx
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navi";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (2.5 seconds)
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
      </main>
      <Contact />
      <Footer />
    </>
  );
}

function SplashScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#001F29] text-white z-50">
      {/* Logo or Brand Name */}
      <h1 className="text-5xl font-extrabold text-white mb-6 animate-pulse">
        Mu<span className="text-[#00D1FF]">hi</span>sya
      </h1>

      {/* Loading Spinner */}
      <div className="w-12 h-12 border-4 border-[#00D1FF] border-t-transparent rounded-full animate-spin"></div>

      {/* Optional tagline */}
      <p className="mt-6 text-sm text-gray-300">Loading...</p>
    </div>
  );
}

export default App;