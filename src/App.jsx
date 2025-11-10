// File: src/App.jsx
import React from 'react';
import Navbar from './components/Navi';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from "./components/Portfolio";

function App() {
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

export default App;