export default function Contact() {
  return (
    <section
      id="contact"
      name="contact"
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-20"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <p className="text-[#00D1FF] uppercase tracking-wide text-sm">
          Get In Touch
        </p>
        <h2 className="text-5xl font-bold">Contact Me</h2>
      </div>

      {/* Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl">
        {/* Location Card */}
        <div className="bg-[#00D1FF] text-[#00242C] rounded-2xl shadow-lg p-8 bg
                        flex flex-col items-center justify-center text-center 
                        w-full md:w-1/3 mx-auto">
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00242C"
            strokeWidth="2"
            className="mb-4"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M12 21c-4 -5 -6 -8 -6 -11a6 6 0 0 1 12 0c0 3 -2 6 -6 11z" />
            <circle cx="12" cy="10" r="2" />
          </svg>

          <h3 className="font-bold text-lg mb-2">My Location</h3>
          <p className="text-sm mb-6 leading-relaxed">
            Pondok Tahfizh Plus Abuzdar
          </p>
          <a
            href="https://abudzarplus.ponpes.id/"
            className="text-[#00242C] text-sm font-medium border border-[#00242C] px-4 py-2 rounded-2xl transition duration-300 hover:text-gray-800 hover:bg-[#00D1FF]/20"
          >
            Click Me To Check It Out
          </a>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4 w-full md:w-2/3">
          <input
            type="email"
            placeholder="Enter Your Email Here"
            className="w-full p-4 bg-transparent border border-[#00D1FF] rounded-xl 
                       text-[#00D1FF] placeholder-[#00D1FF] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full p-4 bg-transparent border border-[#00D1FF] rounded-xl 
                       text-[#00D1FF] placeholder-[#00D1FF] focus:outline-none"
          />
          <textarea
            rows="5"
            placeholder="Message Here........"
            className="w-full p-4 bg-transparent border border-[#00D1FF] rounded-xl 
                       text-[#00D1FF] placeholder-[#00D1FF] focus:outline-none resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#00D1FF] text-[#00242C] font-semibold py-3 px-8 rounded-xl 
                       hover:bg-[#4fddfd] transition w-fit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
