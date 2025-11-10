export default function Experience() {
  return (
    <section
      id="experience"
      name="experience"
      className="min-h-screen text-white flex flex-col items-center justify-center 
                 px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20 
                 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="text-[#00D1FF] uppercase tracking-wide text-xs sm:text-sm">
          What Skills I Have
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">My Experience!</h2>
      </div>

      {/* Skill Cards Container */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full">
        
        {/* Frontend Development */}
        <div className="bg-[#00D1FF] text-[#00242C] rounded-2xl shadow-lg 
                        p-10 w-full md:w-[540px] lg:w-[530px]  
                        flex flex-col justify-between transition-transform hover:scale-[1.01]">
          <h3 className="text-xl sm:text-2xl font-semibold mb-9 text-center">
            - Frontend Development -
          </h3>
          <div className="grid grid-cols-2 gap-5 text-sm sm:text-base">
            <div>
              <p className="font-bold uppercase">HTML</p>
              <p>Experienced</p>
            </div>
            <div>
              <p className="font-bold uppercase">CSS</p>
              <p>Experienced</p>
            </div>
            <div>
              <p className="font-bold uppercase">JavaScript</p>
              <p>Intermediate</p>
            </div>
            <div>
              <p className="font-bold uppercase">Bootstrap</p>
              <p>Elementary</p>
            </div>
            <div>
              <p className="font-bold uppercase">Tailwind</p>
              <p>Basic</p>
            </div>
            <div>
              <p className="font-bold uppercase">React</p>
              <p>Basic</p>
            </div>
          </div>
        </div>

        {/* Backend Development */}
        <div className="bg-[#00D1FF] text-[#00242C] rounded-2xl shadow-lg 
                        p-10 w-full md:w-[540px] lg:w-[530px] 
                        flex flex-col justify-between transition-transform hover:scale-[1.01]">
          <h3 className="text-xl sm:text-2xl font-semibold mb-9 text-center">
            - Backend Development & Design -
          </h3>
          <div className="grid grid-cols-2 gap-5 text-sm sm:text-base">
            <div>
              <p className="font-bold uppercase">Node.js</p>
              <p>Intermediate</p>
            </div>
            <div>
              <p className="font-bold uppercase">mysql</p>
              <p>Basic</p>
            </div>
            <div>
              <p className="font-bold uppercase">sketch</p>
              <p>Elementary</p>
            </div>
            <div>
              <p className="font-bold uppercase">Firebase</p>
              <p>Elementary</p>
            </div>
            <div>
              <p className="font-bold uppercase">Git</p>
              <p>Experienced</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
