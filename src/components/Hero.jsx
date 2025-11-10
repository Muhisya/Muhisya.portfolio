import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      id="home"
      name="home"
      className="min-h-screen flex flex-col justify-center items-center text-center 
                 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 
                 text-white overflow-x-hidden px-4 sm:px-6 md:px-12 py-12"
    >
      <div className="max-w-md sm:max-w-2xl w-full mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Welcome! I&apos;m <span className="text-[#00D1FF]">Muhisya</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 px-2">
          I’m a web developer who builds clean, responsive, and modern web experiences
          using React and TailwindCSS.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full">
          <Link
            to="portfolio" // 👈 this matches the target section's "name" or "id"
            smooth={true}
            duration={500}
            offset={-70} // optional, adjust for navbar height
            className="w-full sm:w-auto px-5 py-3 bg-[#00D1FF] hover:bg-[#4fddfd] text-gray-900 
                       font-semibold rounded-full transition text-center cursor-pointer"
          >
            View Projects
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="w-full sm:w-auto px-5 py-3 border border-[#00D1FF] text-[#00D1FF] rounded-full 
                       hover:bg-[#00D1FF] hover:text-gray-900 transition text-center cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
