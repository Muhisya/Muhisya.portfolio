import React from "react";

const projects = [
  { id: 1, title: "Kopi Tepi", github: "#", website: "#" },
  { id: 2, title: "Hostion", github: "#", website: "#" },
  { id: 3, title: "Portfolio Website", github: "#", website: "#" },
  { id: 4, title: "Portfolio Website", github: "#", website: "#" },
  { id: 5, title: "Portfolio Website", github: "#", website: "#" },
  { id: 6, title: "Portfolio Website", github: "#", website: "#" },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      name="portfolio"
      className="min-h-screen flex flex-col items-center justify-center text-white 
                 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-6 py-16"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="text-[#00D1FF] uppercase tracking-wide text-sm">My Recent Work</p>
        <h2 className="text-5xl font-bold">My Portfolio</h2>
      </div>

      {/* Cards Grid */}
      <div
        className="grid gap-8 w-full max-w-full
                   grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                   justify-items-center"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#00D1FF] text-[#00242C] rounded-2xl shadow-lg p-6 
                       w-full sm:w-[75%] md:w-[85%] lg:w-[95%] flex flex-col justify-between"
          >
            {/* Image Placeholder */}
            <div className="w-full h-56 bg-[#00242C] rounded-xl mb-4"></div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-3">{project.title}</h3>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={project.github}
                className="px-4 py-2 border border-[#00242C] text-[#00242C] rounded-lg 
                           font-medium hover:bg-[#00242C] hover:text-[#00D1FF] transition"
              >
                Github
              </a>
              <a
                href={project.website}
                className="px-4 py-2 border border-[#00242C] text-[#00242C] rounded-lg 
                           font-medium hover:bg-[#00242C] hover:text-[#00D1FF] transition"
              >
                Website
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Show only 3 cards on mobile */}
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
