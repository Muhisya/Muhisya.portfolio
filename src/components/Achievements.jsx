{/* Achievements Section */}
<section
  id="achievements"
  name="achievements"
  className="min-h-screen text-white flex flex-col items-center justify-center 
             px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-20 
             bg-gradient-to-b from-gray-900 to-black"
>
  {/* Section Title */}
  <div className="text-center mb-12">
    <p className="text-[#00D1FF] uppercase tracking-wide text-xs sm:text-sm">
      What I have accomplished
    </p>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">My Achievements!</h2>
  </div>

  {/* Achievement Cards Container */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
    
    {/* Achievement 1 */}
    <div className="bg-[#00D1FF] text-[#00242C] rounded-2xl shadow-lg 
                    p-8 flex flex-col items-center text-center transition-transform hover:scale-[1.03]">
      <div className="bg-[#00242C] text-[#00D1FF] p-4 rounded-full mb-4">
        {/* Icon placeholder: Trophies/Medals */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold uppercase mb-2">Hackathon Winner</h3>
      <p className="text-sm font-medium mb-4">Global Tech Summit 2025</p>
      <p className="text-sm border-t border-[#00242c33] pt-4">
        Developed an AI-driven solution for sustainable energy tracking, winning 1st place among 50+ teams.
      </p>
    </div>

    {/* Achievement 2 */}
    <div className="bg-[#00D1FF] text-[#00242C] rounded-2xl shadow-lg 
                    p-8 flex flex-col items-center text-center transition-transform hover:scale-[1.03]">
      <div className="bg-[#00242C] text-[#00D1FF] p-4 rounded-full mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold uppercase mb-2">Certified Developer</h3>
      <p className="text-sm font-medium mb-4">AWS Cloud Practitioner</p>
      <p className="text-sm border-t border-[#00242c33] pt-4">
        Validated expertise in cloud infrastructure, security, and scalable backend architecture.
      </p>
    </div>

    {/* Achievement 3 */}
    <div className="bg-[#00D1FF] text-[#00242C] rounded-2xl shadow-lg 
                    p-8 flex flex-col items-center text-center transition-transform hover:scale-[1.03]">
      <div className="bg-[#00242C] text-[#00D1FF] p-4 rounded-full mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <h3 className="text-xl font-bold uppercase mb-2">Open Source</h3>
      <p className="text-sm font-medium mb-4">100+ Contributions</p>
      <p className="text-sm border-t border-[#00242c33] pt-4">
        Active contributor to major React libraries and UI frameworks with a focus on accessibility.
      </p>
    </div>

  </div>
</section>