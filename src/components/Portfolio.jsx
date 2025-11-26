import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Kopi Tepi",
    description: "A cozy coffee shop website built with modern design and smooth UI.",
    github: "#",
    website: "https://kopitepi.vercel.app/",
    gradient: "from-amber-400 to-yellow-500",
  },
  {
    id: 2,
    title: "Hostion",
    description: "A web hosting landing page built with responsive Tailwind layout.",
    github: "https://github.com/Muhisya/Hostion",
    website: "https://muhisya.github.io/Hostion/",
    gradient: "from-sky-400 to-blue-500",
  },
  {
    id: 3,
    title: "ClickMe",
    description: "A fun interactive click-based game made with JavaScript and React.",
    github: "https://github.com/Muhisya/ClickMe",
    website: "https://muhisya.github.io/ClickMe/",
    gradient: "from-purple-400 to-violet-500",
  },
  {
    id: 4,
    title: "Slicing Design",
    description: "Frontend slicing project from Figma to responsive web page.",
    github: "https://github.com/Muhisya/web-slice-red",
    website: "https://muhisya.github.io/web-slice-red/",
    gradient: "from-pink-400 to-rose-500",
  },
  {
    id: 5,
    title: "Eid Mubarok",
    description: "A simple Eid greeting page featuring festive UI and smooth animations.",
    github: "https://github.com/Muhisya/eid-webslice",
    website: "https://muhisya.github.io/eid-webslice/",
    gradient: "from-emerald-400 to-green-500",
  },
  {
    id: 6,
    title: "Pokédex",
    description: "Browse and discover Pokémon in a clean, interactive Pokédex UI.",
    github: "https://github.com/HoshiExperience/Pokemon-Deck",
    website: "https://hoshiexperience.github.io/Pokemon-Deck/",
    gradient: "from-indigo-400 to-blue-600",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 
                 text-white bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 lg:mx-12"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="text-[#00D1FF] uppercase tracking-wide text-sm">
          My Recent Work
        </p>
        <h2 className="text-5xl font-bold">My Portfolio</h2>
      </div>

      {/* Card Grid */}
      <div
        className="grid gap-8 w-full max-w-full justify-items-center
                   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#00D1FF] text-[#00242C] rounded-2xl shadow-lg p-6 
                       w-full sm:w-[75%] md:w-[85%] lg:w-[95%] 
                       flex flex-col gap-4 transition-transform 
                       hover:scale-[1.01]"
          >
            {/* Hover Card Header */}
            <div
              className="relative w-full h-56 rounded-xl overflow-hidden group"
            >
              {/* Background → transitions to gradient on hover */}
              <div
                className={`absolute inset-0 bg-[#00242C] transition-all duration-500
                            group-hover:bg-gradient-to-r ${project.gradient}`}
              ></div>

              {/* Title */}
              <h3
                className="absolute inset-0 flex items-center justify-center 
                           text-white text-2xl font-bold z-10 
                           opacity-100 group-hover:opacity-0 transition-opacity duration-300"
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="absolute inset-0 flex items-center justify-center 
                           text-white text-center text-sm px-4 z-10
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {project.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-[#00242C] 
                           text-[#00242C] font-medium transition duration-300 
                           hover:bg-[#00242C] hover:text-[#00D1FF] hover:scale-105"
              >
                <FaGithub className="text-xl" />
              </a>

              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-[#00242C] 
                           text-[#00242C] font-medium transition duration-300 
                           hover:bg-[#00242C] hover:text-[#00D1FF] hover:scale-105"
              >
                <FaLink className="text-xl" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Hide extra cards on mobile */}
      <style>
        {`
          @media (max-width: 640px) {
            #portfolio .grid > div:nth-child(n+4) {
              display: none;
            }
          }
        `}
      </style>
    </section>
  );
}
