import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-gray-800/40 backdrop-blur-md border-b border-gray-700 text-white z-[100] transform transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 relative">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          Mu<span className="text-[#00D1FF]">hi</span>sya
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {["home", "about", "experience", "portfolio", "contact"].map(
            (section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="hover:text-[#00D1FF] hover:border-b-2 px-2 border-[#00D1FF] rounded-sm transition cursor-pointer"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Theme Toggle (example) */}
        <button className="hidden md:flex px-4 py-2 bg-[#00D1FF] hover:bg-[#4fddfd] rounded-full text-sm font-medium transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
          </svg>
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 focus:outline-none relative z-[200]"
          onClick={toggleMenu}
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: menuOpen ? 1 : 0,
          y: menuOpen ? 0 : -10,
        }}
        transition={{ duration: 0.3 }}
        className={`absolute top-full left-0 w-full ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden md:hidden bg-gray-800/80 backdrop-blur-md border-b border-gray-700 z-[50] transition-all duration-300`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-lg">
          {["home", "about", "experience", "portfolio", "contact"].map(
            (section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setMenuOpen(false)} // close menu when clicking a link
                  className="hover:text-[#00D1FF] transition cursor-pointer"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            )
          )}
        </ul>
      </motion.div>
    </nav>
  );
}
