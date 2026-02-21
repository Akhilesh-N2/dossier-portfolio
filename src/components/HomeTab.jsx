export default function HomeTab() {
  return (
    <div className="animate-fadeIn relative">
      <div className="absolute top-0 right-0 transform rotate-12 opacity-10 pointer-events-none select-none">
        <div className="border-2 md:border-4 border-red-800 p-2 md:p-3 rounded-sm">
          <span className="text-2xl md:text-5xl font-black tracking-widest text-red-800 uppercase">Confidential</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
        <div className="lg:col-span-2 space-y-6 md:space-y-8 relative z-10">
          
          {/* --- HEADER: Now uses Flexbox to put the mobile photo on the right --- */}
          <header className="border-b-2 border-slate-300 pb-4 flex justify-between items-start gap-2">
            <div>
              <h1 className="text-3xl md:text-5xl font-serif text-slate-800 tracking-tight">Akhilesh N.</h1>
              <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-slate-500 uppercase mt-2">
                MERN Stack Developer & CS Student
              </p>
            </div>

            {/* --- MOBILE PHOTO: Tiny ID badge (Hidden on Desktop) --- */}
            <div className="lg:hidden relative flex-shrink-0 z-10 mt-1">
              <div className="w-16 h-20 sm:w-20 sm:h-24 bg-slate-300 shadow-md border-2 sm:border-4 border-white transform rotate-3 relative hover:rotate-1 transition-transform duration-300">
                <p className="absolute inset-0 flex items-center justify-center text-slate-500 font-mono text-[8px] sm:text-[10px] text-center px-1 leading-tight">
                  [Pending]
                </p>
                {/* Tiny Tape */}
                <div className="absolute -top-2 -left-1 w-3 h-5 border border-slate-400 rounded-full transform -rotate-12 bg-transparent shadow-sm pointer-events-none z-20"></div>
              </div>
            </div>
          </header>

          <div className="bg-stone-200/50 border-l-4 border-amber-700 p-4 md:p-5 rounded-r-sm shadow-inner">
            <h3 className="text-[10px] md:text-xs font-bold tracking-widest text-amber-900 uppercase mb-3 border-b border-amber-700/20 pb-2">Subject Intel</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 font-mono text-[10px] md:text-xs text-slate-800">
              <div><span className="text-slate-400">STATUS:</span> B.Tech CS</div>
              <div><span className="text-slate-400">INSTITUTION:</span> Universal Eng. College</div>
              <div><span className="text-slate-400">BASE:</span> Kerala, India</div>
              <div className="sm:col-span-2 truncate"><span className="text-slate-400">COMM:</span> akhileshthrissur@gmail.com</div>
            </div>
          </div>

          <p className="text-sm md:text-base leading-relaxed text-slate-600">
            Welcome to my digital dossier. I am focused on building scalable web applications, intuitive user interfaces, and robust backend systems using the MERN stack.
          </p>
        </div>

        {/* --- DESKTOP PHOTO: Large Polaroid (Hidden on Mobile) --- */}
        <div className="hidden lg:flex lg:col-span-1 relative justify-end mt-4 lg:mt-0 z-10">
          <div className="w-48 h-56 bg-slate-300 shadow-lg border-[6px] border-white transform rotate-3 relative hover:rotate-1 transition-transform duration-300">
            <p className="absolute inset-0 flex items-center justify-center text-slate-500 font-mono text-sm text-center px-2">[Coming soon]</p>
            {/* Desktop Tape */}
            <div className="absolute -top-6 -left-2 w-5 h-14 border-2 border-slate-400 rounded-full transform -rotate-12 bg-transparent shadow-sm pointer-events-none z-20"></div>
            <div className="absolute -top-5 -left-1 w-3 h-10 border-2 border-slate-400 rounded-full transform -rotate-12 bg-transparent pointer-events-none z-20"></div>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-14 border-2 border-slate-200 rounded-sm p-4 md:p-6 relative z-10">
        <h3 className="absolute -top-3 left-4 bg-stone-50 px-2 text-[10px] md:text-xs font-bold tracking-widest text-slate-500 uppercase">Verified Capabilities</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-2">
          {['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML/CSS', 'Tailwind', 'REST APIs'].map(tech => (
            <div key={tech} className="flex items-center space-x-2 md:space-x-3 group cursor-default">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-700 group-hover:bg-red-600 transition-colors"></div>
              <span className="text-xs md:text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}