export default function About() {
  return (
    
    <section
      id="about"
      name="about"
      className="min-h-screen flex flex-col justify-center items-center text-white max-w-6xl mx-auto w-full px-4 sm:px-6"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <p className="text-[#00D1FF] uppercase tracking-wide text-sm">Get To Know More</p>
        <h2 className="text-5xl font-bold">About Me!</h2>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="relative w-80 h-[425px] bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition">
          <img
            src="/your-photo.png"
            alt="My Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Experience Cards */}
          <div className="flex flex-row justify-center md:justify-start gap-6 mb-10">
            
            {/* Card 1 */}
            <div className="bg-[#00D1FF] flex flex-col items-center justify-center 
                            rounded-xl p-6 w-40 h-48 sm:w-48 sm:h-52 md:w-52 md:h-56 hover:scale-105 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="mb-3 w-10 h-10 shrink-0" width="47" height="47" viewBox="0 0 24 24" fill="none" stroke="#00242C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-bulb"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg>
              <h3 className="text-[#00242C] font-semibold mb-1">Experience</h3>
              <p className="text-sm text-[#00242C] text-center">
                3+ Years<br />Experience
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#00D1FF] flex flex-col items-center justify-center 
                            rounded-xl p-6 w-40 sm:w-48 md:w-52 hover:scale-105 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mb-3 w-10 h-10 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00242C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21H7a2 2 0 0 1 -2 -2V5a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              </svg>
              <h3 className="text-[#00242C] font-semibold mb-1">Projects</h3>
              <p className="text-sm text-[#00242C] text-center">
                7+ Completed
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#00D1FF] flex flex-col items-center justify-center md:hidden
                            rounded-xl p-6 w-40 sm:w-48 md:w-52 hover:scale-105 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mb-3 w-10 h-10 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00242C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
              <h3 className="text-[#00242C] font-semibold mb-1">Teamwork</h3>
              <p className="text-sm text-[#00242C] text-center">
                Collaborative<br />Projects
              </p>
            </div>
          </div>

          {/* About Text */}
          <p className="text-gray-300 text-md max-w-xl mb-10">
            I’m a senior high school student learning and growing as a programmer. I enjoy working on both frontend and backend development using HTML, CSS, JavaScript, Tailwind, and React. I’m passionate about improving my skills and building projects that bring ideas to life.
          </p>

          {/* Button */}
          <a
            href="#contact"
            className="px-6 py-3 border border-[#00D1FF] text-[#00D1FF] rounded-full hover:bg-[#00D1FF] hover:text-gray-900 transition"
          >
            Let's Talk!
          </a>
        </div>
      </div>
    </section>
  );
}
