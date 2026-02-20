import { useState } from 'react';

// 1. MOVED OUTSIDE: Static data doesn't need to re-render
const tabs = ['Home', 'Projects', 'Resume', 'Contact'];

const projectList = [
  {
    id: 1,
    title: 'Wall-E',
    subtitle: 'AI Budget Analyzer',
    date: 'Feb 2026',
    githubLink: 'https://github.com/Akhilesh-N2',
    tilt: '-rotate-2',
  },
  {
    id: 2,
    title: 'CSC-Empower-Hub',
    subtitle: 'Full-Stack Platform',
    date: 'Jan 2026',
    githubLink: 'https://github.com/Akhilesh-N2',
    tilt: 'rotate-3',
  }
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isOpened, setIsOpened] = useState(false);
  const [isCoverHidden, setIsCoverHidden] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 p-4 md:p-8 flex justify-center items-center font-sans overflow-x-clip">

      <div className="w-full max-w-6xl flex flex-row md:flex-col-reverse relative my-auto">

        {/* ========================================= */}
        {/* 1. FOLDER BODY */}
        {/* ========================================= */}
        <div className="flex-1 bg-[#f4e4bc] h-[85vh] md:h-[80vh] rounded-xl rounded-tr-none md:rounded-tr-xl md:rounded-tl-none p-3 md:p-8 shadow-2xl border border-amber-900/20 relative z-10 flex flex-col [perspective:2000px]">

          {/* --- THE FOLD-DOWN FRONT COVER --- */}
          {/* --- THE FOLDING FRONT COVER --- */}
          {!isCoverHidden && (
            <div
              className={`absolute inset-0 z-50 bg-[#e2ce9f] rounded-xl rounded-tr-none md:rounded-tr-xl md:rounded-tl-none border-2 border-amber-900/30 flex flex-col items-center justify-center shadow-inner 
                
                /* HINGE POSITION: Left on mobile, Bottom on desktop */
                origin-left md:origin-bottom
                
                /* 3D ROTATION: Y-axis (book fold) on mobile, X-axis (notepad fold) on desktop */
                ${isOpened 
                  ? 'pointer-events-none [transform:rotateY(-180deg)] md:[transform:rotateX(-180deg)]' 
                  : '[transform:rotateY(0deg)] md:[transform:rotateX(0deg)]'
                }
              `}
              style={{
                /* The fade delay remains the exact same */
                opacity: isOpened ? 0 : 1,
                transition: isOpened
                  ? 'transform 1.5s ease-in-out, opacity 0.3s ease-in-out 1.2s'
                  : 'transform 1.5s ease-in-out, opacity 0.3s ease-in-out 0s'
              }}
            >
              <div className="border-4 border-slate-800 p-6 md:p-8 max-w-sm md:max-w-md w-[90%] text-center relative bg-[#ebd8ac] shadow-md">
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-slate-800"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-slate-800"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-slate-800"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-slate-800"></div>

                <h2 className="text-4xl md:text-5xl font-black tracking-widest text-slate-800 uppercase mb-2 font-serif">Dossier</h2>
                <p className="text-base md:text-lg font-bold tracking-[0.3em] text-slate-600 uppercase mb-8">Akhilesh N.</p>

                <div className="flex justify-center mb-8 md:mb-10">
                  <div className="px-3 py-1 bg-slate-800 text-amber-100 font-mono text-[10px] md:text-xs tracking-widest uppercase">Level 4 Clearance Required</div>
                </div>

                <button
                  onClick={() => {
                    setIsOpened(true);
                    setTimeout(() => setIsCoverHidden(true), 1500);
                  }}
                  className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 font-bold text-white transition-all duration-200 bg-red-800 border-2 border-red-900 rounded-sm hover:bg-red-700 shadow-[0_0_15px_rgba(153,27,27,0.5)] hover:shadow-[0_0_25px_rgba(153,27,27,0.8)]"
                >
                  <span className="font-mono tracking-widest text-xs md:text-sm">BREAK SEAL</span>
                  <span className="absolute -left-4 w-4 h-0.5 bg-red-900/50"></span>
                  <span className="absolute -right-4 w-4 h-0.5 bg-red-900/50"></span>
                </button>
              </div>

              <span className="absolute bottom-4 md:bottom-8 right-4 md:right-8 text-amber-900/20 font-mono text-2xl md:text-4xl font-black transform -rotate-12 select-none pointer-events-none">
                DO NOT DUPLICATE
              </span>
            </div>
          )}

          {/* --- INNER PAPER (The "Document") --- */}
          {/* 2. REMOVED DUPLICATE TABS: Your code had About, Resume, and Contact pasted twice! */}
          <div className="flex-1 bg-stone-50 rounded-sm shadow-sm border border-stone-200 p-6 md:p-10 relative overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

            {/* --- HOME TAB --- */}
            {activeTab === 'Home' && (
              <div className="animate-fadeIn relative">
                <div className="absolute top-0 right-0 transform rotate-12 opacity-10 pointer-events-none select-none">
                  <div className="border-2 md:border-4 border-red-800 p-2 md:p-3 rounded-sm">
                    <span className="text-2xl md:text-5xl font-black tracking-widest text-red-800 uppercase">Confidential</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
                  <div className="lg:col-span-2 space-y-6 md:space-y-8 relative z-10">
                    <header className="border-b-2 border-slate-300 pb-4">
                      <h1 className="text-3xl md:text-5xl font-serif text-slate-800 tracking-tight">Akhilesh N.</h1>
                      <p className="text-xs md:text-sm font-bold tracking-widest text-slate-500 uppercase mt-2">MERN Stack Developer & CS Student</p>
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

                  <div className="lg:col-span-1 relative flex justify-center lg:justify-end mt-4 lg:mt-0 z-10">
                    <div className="w-32 h-40 md:w-48 md:h-56 bg-slate-300 shadow-lg border-[4px] md:border-[6px] border-white transform rotate-3 relative hover:rotate-1 transition-transform duration-300">
                      <p className="absolute inset-0 flex items-center justify-center text-slate-500 font-mono text-xs md:text-sm text-center px-2">[Coming soon]</p>
                      <div className="absolute -top-4 -left-2 w-4 h-10 md:-top-6 md:-left-2 md:w-5 md:h-14 border-2 border-slate-400 rounded-full transform -rotate-12 bg-transparent shadow-sm pointer-events-none z-20"></div>
                      <div className="absolute -top-3 -left-1 w-2 h-8 md:-top-5 md:-left-1 md:w-3 md:h-10 border-2 border-slate-400 rounded-full transform -rotate-12 bg-transparent pointer-events-none z-20"></div>
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
            )}

            {/* --- PROJECTS TAB --- */}
            {activeTab === 'Projects' && (
              <div className="animate-fadeIn">
                <header className="border-b-2 border-slate-200 pb-4 mb-8 md:mb-10">
                  <h2 className="text-2xl md:text-3xl font-serif text-slate-800 tracking-tight">Project Archives</h2>
                  <p className="text-xs md:text-sm font-bold tracking-widest text-slate-500 uppercase mt-2">Visual Evidence & Source Code</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 p-2 md:p-4">
                  {projectList.map((project) => (
                    <div key={project.id} className={`relative bg-stone-50 p-2 md:p-3 pb-12 md:pb-16 shadow-lg border border-stone-200 transition-all duration-300 transform ${project.tilt} hover:rotate-0 hover:scale-105 hover:shadow-2xl hover:z-50 group cursor-pointer`}>
                      <div className="w-full aspect-video bg-slate-800 relative overflow-hidden flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                        <span className="text-slate-400 font-mono text-[10px] md:text-xs opacity-50 px-4 text-center">[Attach Media: {project.title}]</span>
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                      </div>

                      <div className="absolute bottom-0 left-0 w-full px-3 md:px-4 py-2 md:py-3 flex justify-between items-end">
                        <div>
                          <h3 className="font-serif font-bold text-slate-800 text-sm md:text-lg leading-tight group-hover:text-amber-700 transition-colors">{project.title}</h3>
                          <p className="text-[10px] md:text-xs font-mono text-slate-400 mt-1">{project.date}</p>
                        </div>
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors pb-1" title="View Repository">
                          <GithubIcon />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* --- ABOUT TAB --- */}
            {activeTab === 'About' && (
              <div className="animate-fadeIn relative">
                <header className="border-b-2 border-slate-300 pb-4 mb-8">
                  <h2 className="text-2xl md:text-3xl font-serif text-slate-800 tracking-tight">Background Overview</h2>
                  <p className="text-xs md:text-sm font-bold tracking-widest text-slate-500 uppercase mt-2">Personal History & Objectives</p>
                </header>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
                  <div className="lg:col-span-2 space-y-4 md:space-y-6 text-slate-700 leading-relaxed text-sm md:text-lg">
                    <p>
                      <span className="text-4xl md:text-5xl font-serif font-black text-slate-800 float-left mr-3 mt-1 leading-none">A</span>
                      s a dedicated Computer Science student at Universal Engineering College, my primary operational focus is on full-stack web development. I specialize in the MERN stack, bridging the gap between complex backend logic and intuitive frontend interfaces.
                    </p>
                    <p>
                      Currently, I am actively expanding my capabilities in AI integration, as demonstrated in my recent work on the Wall-E budget analyzer, and exploring the deeper mechanics of real-time data processing.
                    </p>
                    <div className="pt-6 md:pt-10 pb-4">
                      <p className="text-[10px] md:text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">Authorized Signature</p>
                      <div className="font-['Brush_Script_MT',_cursive,_'Segoe_Print'] text-3xl md:text-4xl text-slate-800 opacity-80 -rotate-2 transform translate-x-4">Akhilesh N.</div>
                      <div className="w-40 md:w-48 border-b-2 border-slate-300 mt-2"></div>
                    </div>
                  </div>
                  <div className="lg:col-span-1 border-t-2 lg:border-t-0 lg:border-l-2 border-slate-200 pt-6 lg:pt-0 lg:pl-8 space-y-8 md:space-y-10">
                    <div className="relative pt-2 md:pt-4">
                      <div className="absolute -top-4 -left-2 md:-top-6 md:-left-4 w-16 h-16 md:w-24 md:h-24 border-2 md:border-4 border-amber-900/10 rounded-full flex items-center justify-center transform -rotate-12 pointer-events-none">
                        <span className="text-amber-900/20 font-black tracking-widest uppercase text-[8px] md:text-xs">Verified</span>
                      </div>
                      <div className="bg-stone-200/50 p-4 md:p-5 border border-slate-300 rounded-sm relative z-10">
                        <p className="font-mono text-[10px] md:text-xs text-slate-500 mb-1 md:mb-2">IDENTIFICATION CODE</p>
                        <p className="font-mono text-xs md:text-sm font-bold text-slate-800 tracking-widest">AKH-2026-MERN</p>
                        <div className="mt-3 md:mt-4 flex gap-[2px] md:gap-[3px] h-8 md:h-12 opacity-80 mix-blend-multiply">
                          <div className="w-1 bg-slate-800"></div><div className="w-2 bg-slate-800"></div><div className="w-1 bg-slate-800"></div><div className="w-0.5 bg-slate-800"></div><div className="w-3 bg-slate-800"></div><div className="w-1 bg-slate-800"></div><div className="w-2 bg-slate-800"></div><div className="w-0.5 bg-slate-800"></div><div className="w-1 bg-slate-800"></div><div className="w-2 bg-slate-800"></div><div className="w-1 bg-slate-800"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* --- RESUME TAB --- */}
            {activeTab === 'Resume' && (
              <div className="animate-fadeIn relative">

                {/* 1. Header with "Attachment" Download Button */}
                <header className="border-b-2 border-slate-300 pb-4 mb-8 md:mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif text-slate-800 tracking-tight">Official Service Record</h2>
                    <p className="text-xs md:text-sm font-bold tracking-widest text-slate-500 uppercase mt-2">Curriculum Vitae & Milestones</p>
                  </div>

                  {/* The Download Button (Styled like a tear-off tag) */}
                  <a
                    href="/Akhilesh_Resume.pdf" /* NOTE: Put your actual PDF in your public folder */
                    download
                    className="group flex items-center gap-2 md:gap-3 bg-stone-200/60 border border-slate-300 px-3 md:px-4 py-2 shadow-sm hover:bg-amber-700 hover:text-white hover:border-amber-700 transition-all duration-300 cursor-pointer"
                  >
                    <DownloadIcon />
                    <span className="font-mono text-[10px] md:text-xs font-bold tracking-widest text-slate-700 group-hover:text-white transition-colors">EXTRACT PDF</span>
                  </a>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">

                  {/* LEFT COLUMN: The Timeline (Takes 2/3 width) */}
                  <div className="lg:col-span-2 relative">

                    {/* The physical printed timeline line */}
                    <div className="absolute top-2 left-[11px] w-0.5 h-full bg-slate-200"></div>

                    <div className="space-y-8 md:space-y-10">

                      {/* --- EDUCATION ENTRY --- */}
                      <div className="relative pl-8 md:pl-10">
                        {/* Timeline Dot */}
                        <div className="absolute top-1.5 left-0 w-6 h-6 bg-stone-50 border-4 border-slate-300 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                          <h3 className="font-serif text-lg md:text-xl font-bold text-slate-800">Universal Engineering College</h3>
                          <span className="font-mono text-[10px] md:text-xs text-amber-700 bg-amber-700/10 px-2 py-1 mt-1 sm:mt-0 w-fit">PRESENT</span>
                        </div>
                        <h4 className="text-[10px] md:text-sm font-bold tracking-widest text-slate-500 uppercase mb-2 md:mb-3">B.Tech Computer Science</h4>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                          Focused on core computer science principles, software engineering, and full-stack web development. Currently building scalable applications using the MERN stack.
                        </p>
                      </div>

                      {/* --- EXPERIENCE / PROJECT ENTRY 1 --- */}
                      <div className="relative pl-8 md:pl-10 group">
                        {/* Interactive Timeline Dot */}
                        <div className="absolute top-1.5 left-0 w-6 h-6 bg-stone-50 border-4 border-slate-300 group-hover:border-amber-700 rounded-full flex items-center justify-center transition-colors">
                          <div className="w-2 h-2 bg-slate-400 group-hover:bg-amber-700 rounded-full transition-colors"></div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                          <h3 className="font-serif text-lg md:text-xl font-bold text-slate-800 group-hover:text-amber-800 transition-colors">Wall-E AI Application</h3>
                          <span className="font-mono text-[10px] md:text-xs text-slate-400 mt-1 sm:mt-0">2026</span>
                        </div>
                        <h4 className="text-[10px] md:text-sm font-bold tracking-widest text-slate-500 uppercase mb-2 md:mb-3">Lead Developer</h4>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                          Engineered an intelligent budget analyzer chat application. Integrated AI capabilities to process financial data and provide real-time, actionable insights to users.
                        </p>
                      </div>

                      {/* --- EXPERIENCE / PROJECT ENTRY 2 --- */}
                      <div className="relative pl-8 md:pl-10 group">
                        <div className="absolute top-1.5 left-0 w-6 h-6 bg-stone-50 border-4 border-slate-300 group-hover:border-amber-700 rounded-full flex items-center justify-center transition-colors">
                          <div className="w-2 h-2 bg-slate-400 group-hover:bg-amber-700 rounded-full transition-colors"></div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                          <h3 className="font-serif text-lg md:text-xl font-bold text-slate-800 group-hover:text-amber-800 transition-colors">CSC-Empower-Hub</h3>
                          <span className="font-mono text-[10px] md:text-xs text-slate-400 mt-1 sm:mt-0">2025 - 2026</span>
                        </div>
                        <h4 className="text-[10px] md:text-sm font-bold tracking-widest text-slate-500 uppercase mb-2 md:mb-3">Full-Stack Engineer</h4>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                          Developed a comprehensive web platform to connect and empower the community. Built out secure user authentication, database management, and interactive UI components.
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* RIGHT COLUMN: Skills / Meta Data (Takes 1/3 width) */}
                  <div className="lg:col-span-1 space-y-8 border-t-2 lg:border-t-0 lg:border-l-2 border-slate-200 pt-8 lg:pt-0 lg:pl-8 mt-8 lg:mt-0">

                    {/* Software Proficiency */}
                    <div>
                      <h3 className="text-[10px] md:text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">Software Proficiency</h3>
                      <ul className="space-y-3 font-mono text-xs md:text-sm text-slate-700">
                        <li className="flex justify-between border-b border-slate-200 pb-1">
                          <span>React.js</span> <span className="text-amber-700">90%</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-200 pb-1">
                          <span>Node.js</span> <span className="text-amber-700">85%</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-200 pb-1">
                          <span>Express</span> <span className="text-amber-700">85%</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-200 pb-1">
                          <span>MongoDB</span> <span className="text-amber-700">80%</span>
                        </li>
                        <li className="flex justify-between border-b border-slate-200 pb-1">
                          <span>Tailwind CSS</span> <span className="text-amber-700">95%</span>
                        </li>
                      </ul>
                    </div>

                    {/* Languages */}
                    <div>
                      <h3 className="text-[10px] md:text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">Linguistics</h3>
                      <div className="flex gap-2 flex-wrap">
                        <span className="bg-slate-200 text-slate-700 text-[10px] md:text-xs font-bold px-2 py-1 uppercase">English</span>
                        <span className="bg-slate-200 text-slate-700 text-[10px] md:text-xs font-bold px-2 py-1 uppercase">Malayalam</span>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            )}

            {/* --- CONTACT TAB --- */}
            {activeTab === 'Contact' && (
              <div className="animate-fadeIn">
                <header className="border-b-2 border-slate-200 pb-4 mb-8 md:mb-12">
                  <h2 className="text-2xl md:text-3xl font-serif text-slate-800 tracking-tight">Communications Directory</h2>
                  <p className="text-xs md:text-sm font-bold tracking-widest text-slate-500 uppercase mt-2">Approved Contact Channels</p>
                </header>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-30 items-start">
                  <div className="relative w-full lg:w-100 group mt-4 lg:mt-10">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 md:w-16 h-5 md:h-6 bg-white/60 backdrop-blur-md shadow-sm rotate-3 border border-white/40 z-20"></div>
                    <div className="bg-stone-100 p-6 md:p-8 shadow-md border border-stone-300 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 relative z-10">
                      <h3 className="font-serif text-xl md:text-2xl text-slate-800 tracking-tight">Akhilesh N.</h3>
                      <p className="font-mono text-[10px] md:text-xs text-amber-700 mb-6 md:mb-8 border-b border-stone-300 pb-2">MERN STACK DEVELOPER</p>
                      <div className="space-y-4 md:space-y-5 font-mono text-xs md:text-sm text-slate-600">

                        <a href="mailto:akhileshthrissur@gmail.com" className="flex items-center gap-2 md:gap-3 hover:text-amber-700 transition-colors">
                          <MailIcon />
                          <span className="truncate">akhileshthrissur@gmail.com</span>
                        </a>

                        <a href="tel:+916248221843" className="flex items-center gap-2 md:gap-3 hover:text-amber-700 transition-colors">
                          <PhoneIcon />
                          <span>+91 6248221843</span>
                        </a>

                      </div>
                    </div>
                  </div>

                  <div className="flex-1 w-full space-y-6">
                    <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">External Networks</h3>

                    <a href="https://www.linkedin.com/in/akhilesh-n-3a1056267" target="_blank" rel="noreferrer" className="group flex items-center justify-between p-4 bg-stone-50 border-2 border-slate-300 border-dashed hover:border-amber-700 hover:bg-stone-100 transition-colors cursor-pointer relative overflow-hidden">
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="w-10 h-10 bg-slate-200 flex items-center justify-center rounded-sm text-slate-600 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                          <LinkedInIcon />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 tracking-wide">LinkedIn Profile</h4>
                          <p className="text-xs font-mono text-slate-500">Professional Network</p>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-slate-400 group-hover:text-amber-700 transition-colors">[ ROUTE ]</span>
                    </a>

                    <a href="https://github.com/Akhilesh-N2" target="_blank" rel="noreferrer" className="group flex items-center justify-between p-4 bg-stone-50 border-2 border-slate-300 border-dashed hover:border-amber-700 hover:bg-stone-100 transition-colors cursor-pointer relative overflow-hidden">
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="w-10 h-10 bg-slate-200 flex items-center justify-center rounded-sm text-slate-600 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                          <GithubIcon />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 tracking-wide">GitHub Repository</h4>
                          <p className="text-xs font-mono text-slate-500">Source Code & Archives</p>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-slate-400 group-hover:text-amber-700 transition-colors">[ ROUTE ]</span>
                    </a>

                    <a href="https://www.instagram.com/_akhilesh_n_?igsh=dmpycTcyamp5aTI1" target="_blank" rel="noreferrer" className="group flex items-center justify-between p-4 bg-stone-50 border-2 border-slate-300 border-dashed hover:border-amber-700 hover:bg-stone-100 transition-colors cursor-pointer relative overflow-hidden">
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="w-10 h-10 bg-slate-200 flex items-center justify-center rounded-sm text-slate-600 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                          <InstagramIcon />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 tracking-wide">Instagram Profile</h4>
                          <p className="text-xs font-mono text-slate-500">Social Media Presence</p>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-slate-400 group-hover:text-amber-700 transition-colors">[ ROUTE ]</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ========================================= */}
        {/* 2. TABS ROW */}
        {/* ========================================= */}
        <div className="flex flex-col md:flex-row relative z-10 pt-0 md:pt-0 pl-0 md:pl-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                flex items-center justify-center font-semibold tracking-widest uppercase transition-all duration-300
                /* Mobile: Vertical side tabs */
                py-4 px-2 mb-1 text-[10px] rounded-r-lg border-t border-r border-b border-amber-900/20
                /* Desktop: Horizontal top tabs */
                md:py-3 md:px-8 md:mb-0 md:mr-1 md:text-sm md:rounded-b-none md:rounded-t-lg md:border-l md:border-b-0
                ${activeTab === tab
                  ? 'bg-[#f4e4bc] text-amber-900 z-20 shadow-[4px_0_6px_rgba(0,0,0,0.05)] md:shadow-sm -translate-x-[2px] md:-translate-x-0 md:translate-y-[1px]'
                  : 'bg-[#e2ce9f] text-amber-900/50 hover:bg-[#ebd8ac] hover:text-amber-900/70 z-0 -translate-x-[1px] md:-translate-x-0 md:translate-y-0'
                }
              `}
            >
              <span className="[writing-mode:vertical-rl] rotate-180 md:[writing-mode:horizontal-tb] md:rotate-0">
                {tab}
              </span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

// 3. EXTRACTED ICONS: Keeps the main JSX clean and highly readable
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-current">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.264 2.242 1.325 3.608.058 1.266.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.264-3.608 1.325-1.266.058-1.645.069-4.85.069s-3.584-.012-4.85  -.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.264-2.242-1.325-3.608C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608C4.533 2.513 5.8 2.224 7.166 2.163c1.266-.058 1.645-.069 4.85-.069zm0-2.163C8.741 0 8.332 0 7.052.07c-1.675.077-3.162.36-4.364 1.562C1.44 2.834 1.156 4.32 1.08 5.995c-.07 1.28-.07 1.689-.07 4s0 2.719.07 4c0 1.675.36 3.162 1.562 4s3 .485 4 .562c1 .058 1 .069 4 .069s3-.012 4-.07c1-.077 3-.36 4-1.562s1.485-2.689 1.562-4c0-1 .012-1 .012-4s0-2.719-.07-4c-.077-1-.36-3-1.562-4S16 .485 15 .407c-1-.058-1-.069-4-.069zM12 5a7 7 0 100 14A7 7 0 0012 5zm0 11.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="w-3 h-3 md:w-4 md:h-4 text-slate-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
    </svg>
  );
}