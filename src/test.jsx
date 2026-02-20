import { useState } from 'react';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isOpened, setIsOpened] = useState(false);
  const [isCoverHidden, setIsCoverHidden] = useState(false);
  const tabs = ['Home', 'Projects', 'About', 'Resume', 'Contact'];

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

  return (
    <div className="min-h-screen bg-slate-900 p-4 md:p-8 flex justify-center items-center font-sans overflow-x-clip">
      
      {/* --- RESPONSIVE MAGIC WRAPPER --- */}
      {/* Mobile: flex-row (side-by-side). Desktop: flex-col-reverse (Tabs jump to top, Folder drops to bottom) */}
      <div className="w-full max-w-5xl flex flex-row md:flex-col-reverse relative my-auto">

        {/* ========================================= */}
        {/* 1. FOLDER BODY */}
        {/* ========================================= */}
        {/* Border Radius changes based on where the tabs are positioned! */}
        <div className="flex-1 bg-[#f4e4bc] h-[85vh] md:h-[80vh] rounded-xl rounded-tr-none md:rounded-tr-xl md:rounded-tl-none p-3 md:p-8 shadow-2xl border border-amber-900/20 relative z-10 flex flex-col [perspective:2000px]">

          {/* --- THE FOLD-DOWN FRONT COVER --- */}
          {!isCoverHidden && (
            <div
              className={`absolute inset-0 z-50 bg-[#e2ce9f] rounded-xl rounded-tr-none md:rounded-tr-xl md:rounded-tl-none border-2 border-amber-900/30 flex flex-col items-center justify-center shadow-inner origin-bottom
                    ${isOpened ? 'pointer-events-none' : ''}
                  `}
              style={{
                transform: isOpened ? 'rotateX(-180deg)' : 'rotateX(0deg)',
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
          <div className="flex-1 bg-stone-50 rounded-sm shadow-sm border border-stone-200 p-6 md:p-10 relative overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

            {activeTab === 'Home' && (
              <div className="animate-fadeIn relative">

                {/* 1. THE STAMP: Faded, rotated, and unclickable */}
                <div className="absolute top-0 right-0 transform rotate-12 opacity-10 pointer-events-none select-none">
                  <div className="border-4 border-red-800 p-3 rounded-sm">
                    <span className="text-4xl md:text-5xl font-black tracking-widest text-red-800 uppercase">Confidential</span>
                  </div>
                </div>

                {/* --- MAIN GRID LAYOUT --- */}
                {/* Divides the top section into 3 imaginary columns on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                  {/* Left Side: Text and Data (Takes up 2 of the 3 columns) */}
                  <div className="md:col-span-2 space-y-8 relative z-10">
                    <header className="border-b-2 border-slate-300 pb-4">
                      <h1 className="text-4xl md:text-5xl font-serif text-slate-800 tracking-tight">Akhilesh N.</h1>
                      <p className="text-sm font-bold tracking-widest text-slate-500 uppercase mt-2">MERN Stack Developer & CS Student</p>
                    </header>

                    {/* 2. QUICK INTEL BLOCK: Looks like a typed form field */}
                    <div className="bg-stone-200/50 border-l-4 border-amber-700 p-5 rounded-r-sm shadow-inner">
                      <h3 className="text-xs font-bold tracking-widest text-amber-900 uppercase mb-4 border-b border-amber-700/20 pb-2">Subject Intel</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 font-mono text-xs text-slate-800">
                        <div><span className="text-slate-400">STATUS:</span> B.Tech Computer Science</div>
                        <div><span className="text-slate-400">INSTITUTION:</span> Universal Engineering College</div>
                        <div><span className="text-slate-400">BASE:</span> Kerala, India</div>
                        <div><span className="text-slate-400">COMM-LINK:</span> akhileshthrissur@gmail.com</div>
                        <div className="sm:col-span-2"><span className="text-slate-400">DIRECT LINE:</span> +91 6248221843</div>
                      </div>
                    </div>

                    <p className="text-base leading-relaxed text-slate-600">
                      Welcome to my digital dossier. I am focused on building scalable web applications, intuitive user interfaces, and robust backend systems using the MERN stack.
                    </p>
                  </div>

                  {/* Right Side: Paperclipped Photo (Takes up 1 of the 3 columns) */}
                  <div className="md:col-span-1 relative flex justify-center md:justify-end mt-6 md:mt-0 z-10">

                    {/* The Printed Photo Frame */}
                    <div className="w-48 h-56 bg-slate-300 shadow-lg border-[6px] border-white transform rotate-3 relative hover:rotate-1 transition-transform duration-300">

                      {/* Placeholder for your actual face */}
                      <p className="absolute inset-0 flex items-center justify-center text-slate-500 font-mono text-sm">[Attach Photo]</p>

                      {/* 3. THE PAPERCLIP: Pure CSS illusion */}
                      <div className="absolute -top-6 -left-2 w-5 h-14 border-2 border-slate-400 rounded-full transform -rotate-12 bg-transparent shadow-sm pointer-events-none z-20"></div>
                      <div className="absolute -top-5 -left-1 w-3 h-10 border-2 border-slate-400 rounded-full transform -rotate-12 bg-transparent pointer-events-none z-20"></div>
                    </div>

                  </div>
                </div>

                {/* 4. CAPABILITIES BOARD: Structured Grid instead of messy nodes */}
                <div className="mt-14 border-2 border-slate-200 rounded-sm p-6 relative z-10">
                  <h3 className="absolute -top-3 left-4 bg-stone-50 px-2 text-xs font-bold tracking-widest text-slate-500 uppercase">Verified Capabilities</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                    {['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'REST APIs'].map(tech => (
                      <div key={tech} className="flex items-center space-x-3 group cursor-default">
                        {/* Status Light */}
                        <div className="w-2 h-2 rounded-full bg-amber-700 group-hover:bg-red-600 transition-colors"></div>
                        <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* Other tabs remain identical... */}
            {activeTab === 'Projects' && (
              <div className="animate-fadeIn">

                <header className="border-b-2 border-slate-200 pb-4 mb-10">
                  <h2 className="text-3xl font-serif text-slate-800 tracking-tight">Project Archives</h2>
                  <p className="text-sm font-bold tracking-widest text-slate-500 uppercase mt-2">Visual Evidence & Source Code</p>
                </header>

                {/* --- POLAROID GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 p-4">

                  {projectList.map((project) => (
                    <div
                      key={project.id}
                      // The Polaroid styling: thick bottom padding (pb-16), drop shadow, and dynamic tilt
                      className={`relative bg-stone-50 p-3 pb-16 shadow-lg border border-stone-200 transition-all duration-300 transform ${project.tilt} hover:rotate-0 hover:scale-105 hover:shadow-2xl hover:z-50 group cursor-pointer`}
                    >
                      {/* 1. The Photo/Video Area */}
                      <div className="w-full aspect-video bg-slate-800 relative overflow-hidden flex items-center justify-center group-hover:bg-slate-700 transition-colors">

                        {/* Placeholder for your actual <img> or <video> tag */}
                        <span className="text-slate-400 font-mono text-xs opacity-50">[Attach Media: {project.title}]</span>

                        {/* A subtle glare effect to make the "photo" look glossy */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                      </div>

                      {/* 2. The Polaroid "Chin" (Bottom Area) */}
                      <div className="absolute bottom-0 left-0 w-full px-4 py-3 flex justify-between items-end">

                        {/* Left Side: Title and Date */}
                        <div>
                          {/* Using a handwritten/marker style if you have one, or just a clean dark serif */}
                          <h3 className="font-serif font-bold text-slate-800 text-lg leading-tight group-hover:text-amber-700 transition-colors">{project.title}</h3>
                          <p className="text-xs font-mono text-slate-400 mt-1">{project.date}</p>
                        </div>

                        {/* Right Side: GitHub Link */}
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-400 hover:text-slate-900 transition-colors pb-1"
                          title="View Repository"
                        >
                          {/* Standard GitHub SVG Icon */}
                          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </a>
                      </div>

                    </div>
                  ))}

                </div>
              </div>
            )}

            {/* --- CONTACT TAB --- */}
            {activeTab === 'Contact' && (
              <div className="animate-fadeIn">

                <header className="border-b-2 border-slate-200 pb-4 mb-12">
                  <h2 className="text-3xl font-serif text-slate-800 tracking-tight">Communications Directory</h2>
                  <p className="text-sm font-bold tracking-widest text-slate-500 uppercase mt-2">Approved Contact Channels</p>
                </header>

                <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">

                  {/* 1. THE TAPED BUSINESS CARD */}
                  <div className="relative w-full md:w-80 group">
                    {/* The Scotch Tape Effect */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-white/60 backdrop-blur-md shadow-sm rotate-3 border border-white/40 z-20"></div>

                    {/* The Card Itself */}
                    <div className="bg-stone-100 p-8 shadow-md border border-stone-300 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 relative z-10">
                      <h3 className="font-serif text-2xl text-slate-800 tracking-tight">Akhilesh N.</h3>
                      <p className="font-mono text-xs text-amber-700 mb-8 border-b border-stone-300 pb-2">MERN STACK DEVELOPER</p>

                      <div className="space-y-5 font-mono text-sm text-slate-600">
                        {/* Email */}
                        <a href="mailto:akhileshthrissur@gmail.com" className="flex items-center gap-3 hover:text-amber-700 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                          <span className="truncate">akhileshthrissur@gmail.com</span>
                        </a>

                        {/* Phone */}
                        <a href="tel:+916248221843" className="flex items-center gap-3 hover:text-amber-700 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                          </svg>
                          <span>+91 6248221843</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* 2. THE ROUTING LABELS (Socials) */}
                  <div className="flex-1 w-full space-y-6">
                    <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">External Networks</h3>

                    {/* LinkedIn Label */}
                    <a
                      href="https://www.linkedin.com/in/akhilesh-n-3a1056267"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between p-4 bg-stone-50 border-2 border-slate-300 border-dashed hover:border-amber-700 hover:bg-stone-100 transition-colors cursor-pointer relative overflow-hidden"
                    >
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="w-10 h-10 bg-slate-200 flex items-center justify-center rounded-sm text-slate-600 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 tracking-wide">LinkedIn Profile</h4>
                          <p className="text-xs font-mono text-slate-500">Professional Network</p>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-slate-400 group-hover:text-amber-700 transition-colors">[ ROUTE ]</span>
                    </a>

                    {/* GitHub Label */}
                    <a
                      href="https://github.com/Akhilesh-N2"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between p-4 bg-stone-50 border-2 border-slate-300 border-dashed hover:border-amber-700 hover:bg-stone-100 transition-colors cursor-pointer relative overflow-hidden"
                    >
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="w-10 h-10 bg-slate-200 flex items-center justify-center rounded-sm text-slate-600 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 tracking-wide">GitHub Repository</h4>
                          <p className="text-xs font-mono text-slate-500">Source Code & Archives</p>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-slate-400 group-hover:text-amber-700 transition-colors">[ ROUTE ]</span>
                    </a>

                  </div>
                </div>
              </div>
            )}

            {/* --- RESUME TAB --- */}
            {activeTab === 'Resume' && (
              <div className="animate-fadeIn relative">

                {/* 1. Header with "Attachment" Download Button */}
                <header className="border-b-2 border-slate-300 pb-4 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                  <div>
                    <h2 className="text-3xl font-serif text-slate-800 tracking-tight">Official Service Record</h2>
                    <p className="text-sm font-bold tracking-widest text-slate-500 uppercase mt-2">Curriculum Vitae & Milestones</p>
                  </div>

                  {/* The Download Button (Styled like a tear-off tag) */}
                  <a
                    href="/Akhilesh_Resume.pdf" /* NOTE: Put your actual PDF in your public folder */
                    download
                    className="group flex items-center gap-3 bg-stone-200/60 border border-slate-300 px-4 py-2 shadow-sm hover:bg-amber-700 hover:text-white hover:border-amber-700 transition-all duration-300 cursor-pointer"
                  >
                    <svg className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                    <span className="font-mono text-xs font-bold tracking-widest text-slate-700 group-hover:text-white transition-colors">EXTRACT PDF</span>
                  </a>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                  {/* LEFT COLUMN: The Timeline (Takes 2/3 width) */}
                  <div className="md:col-span-2 relative">

                    {/* The physical printed timeline line */}
                    <div className="absolute top-2 left-[11px] w-0.5 h-full bg-slate-200"></div>

                    <div className="space-y-10">

                      {/* --- EDUCATION ENTRY --- */}
                      <div className="relative pl-10">
                        {/* Timeline Dot */}
                        <div className="absolute top-1.5 left-0 w-6 h-6 bg-stone-50 border-4 border-slate-300 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                          <h3 className="font-serif text-xl font-bold text-slate-800">Universal Engineering College</h3>
                          <span className="font-mono text-xs text-amber-700 bg-amber-700/10 px-2 py-1 mt-1 sm:mt-0">PRESENT</span>
                        </div>
                        <h4 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-3">B.Tech Computer Science</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          Focused on core computer science principles, software engineering, and full-stack web development. Currently building scalable applications using the MERN stack.
                        </p>
                      </div>

                      {/* --- EXPERIENCE / PROJECT ENTRY 1 --- */}
                      <div className="relative pl-10 group">
                        {/* Interactive Timeline Dot */}
                        <div className="absolute top-1.5 left-0 w-6 h-6 bg-stone-50 border-4 border-slate-300 group-hover:border-amber-700 rounded-full flex items-center justify-center transition-colors">
                          <div className="w-2 h-2 bg-slate-400 group-hover:bg-amber-700 rounded-full transition-colors"></div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                          <h3 className="font-serif text-xl font-bold text-slate-800 group-hover:text-amber-800 transition-colors">Wall-E AI Application</h3>
                          <span className="font-mono text-xs text-slate-400 mt-1 sm:mt-0">2026</span>
                        </div>
                        <h4 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-3">Lead Developer</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          Engineered an intelligent budget analyzer chat application. Integrated AI capabilities to process financial data and provide real-time, actionable insights to users.
                        </p>
                      </div>

                      {/* --- EXPERIENCE / PROJECT ENTRY 2 --- */}
                      <div className="relative pl-10 group">
                        <div className="absolute top-1.5 left-0 w-6 h-6 bg-stone-50 border-4 border-slate-300 group-hover:border-amber-700 rounded-full flex items-center justify-center transition-colors">
                          <div className="w-2 h-2 bg-slate-400 group-hover:bg-amber-700 rounded-full transition-colors"></div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                          <h3 className="font-serif text-xl font-bold text-slate-800 group-hover:text-amber-800 transition-colors">CSC-Empower-Hub</h3>
                          <span className="font-mono text-xs text-slate-400 mt-1 sm:mt-0">2025 - 2026</span>
                        </div>
                        <h4 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-3">Full-Stack Engineer</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          Developed a comprehensive web platform to connect and empower the community. Built out secure user authentication, database management, and interactive UI components.
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* RIGHT COLUMN: Skills / Meta Data (Takes 1/3 width) */}
                  <div className="md:col-span-1 space-y-8 border-t-2 md:border-t-0 md:border-l-2 border-slate-200 pt-8 md:pt-0 md:pl-8">

                    {/* Software Proficiency */}
                    <div>
                      <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">Software Proficiency</h3>
                      <ul className="space-y-3 font-mono text-sm text-slate-700">
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
                      <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">Linguistics</h3>
                      <div className="flex gap-2 flex-wrap">
                        <span className="bg-slate-200 text-slate-700 text-xs font-bold px-2 py-1 uppercase">English</span>
                        <span className="bg-slate-200 text-slate-700 text-xs font-bold px-2 py-1 uppercase">Malayalam</span>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            )}

            {/* --- ABOUT TAB --- */}
            {activeTab === 'About' && (
              <div className="animate-fadeIn relative">

                <header className="border-b-2 border-slate-300 pb-4 mb-8">
                  <h2 className="text-3xl font-serif text-slate-800 tracking-tight">Background Overview</h2>
                  <p className="text-sm font-bold tracking-widest text-slate-500 uppercase mt-2">Personal History & Objectives</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                  {/* Left Column: Text (Takes 2/3 width) */}
                  <div className="md:col-span-2 space-y-6 text-slate-700 leading-relaxed text-lg">
                    <p>
                      {/* The Drop Cap (The giant 'A') */}
                      <span className="text-5xl font-serif font-black text-slate-800 float-left mr-3 mt-2 leading-none">A</span>
                      s a dedicated Computer Science student at Universal Engineering College, my primary operational focus is on full-stack web development. I specialize in the MERN stack (MongoDB, Express, React, Node.js), bridging the gap between complex backend logic and intuitive, user-centric frontend interfaces.
                    </p>
                    <p>
                      My approach to software engineering is rooted in problem-solving and efficiency. Whether it is architecting a secure authentication system or designing a skeuomorphic digital portfolio, I treat every project as a mission requiring precision, clean code, and scalable architecture.
                    </p>
                    <p>
                      Currently, I am actively expanding my capabilities in AI integration, as demonstrated in my recent work on the Wall-E budget analyzer, and exploring the deeper mechanics of real-time data processing for platforms like CSC-Empower-Hub.
                    </p>

                    {/* Fake Signature/Sign-off */}
                    <div className="pt-10 pb-4">
                      <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">Authorized Signature</p>
                      {/* Using a default cursive font stack available on most computers */}
                      <div className="font-['Brush_Script_MT',_cursive,_'Segoe_Print'] text-4xl text-slate-800 opacity-80 -rotate-2 transform translate-x-4">
                        Akhilesh N.
                      </div>
                      <div className="w-48 border-b-2 border-slate-300 mt-2"></div>
                    </div>
                  </div>

                  {/* Right Column: Physical Details/Stamps (Takes 1/3 width) */}
                  <div className="md:col-span-1 border-t-2 md:border-t-0 md:border-l-2 border-slate-200 pt-8 md:pt-0 md:pl-8 space-y-10">

                    {/* Core Objectives */}
                    <div>
                      <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">Core Objectives</h3>
                      <ul className="space-y-3 font-mono text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-700 mt-0.5">»</span>
                          <span>Master scalable system architecture.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-700 mt-0.5">»</span>
                          <span>Develop AI-driven web applications.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-700 mt-0.5">»</span>
                          <span>Contribute to open-source tooling.</span>
                        </li>
                      </ul>
                    </div>

                    {/* CSS Barcode / Identification Block */}
                    <div className="relative pt-4">
                      {/* Faded "VERIFIED" Stamp */}
                      <div className="absolute -top-6 -left-4 w-24 h-24 border-4 border-amber-900/10 rounded-full flex items-center justify-center transform -rotate-12 pointer-events-none">
                        <span className="text-amber-900/20 font-black tracking-widest uppercase text-xs">Verified</span>
                      </div>

                      <div className="bg-stone-200/50 p-5 border border-slate-300 rounded-sm relative z-10">
                        <p className="font-mono text-xs text-slate-500 mb-2">IDENTIFICATION CODE</p>
                        <p className="font-mono text-sm font-bold text-slate-800 tracking-widest">AKH-2026-MERN</p>

                        {/* Pure CSS Barcode Illusion */}
                        <div className="mt-4 flex gap-[3px] h-12 opacity-80 mix-blend-multiply">
                          <div className="w-1 bg-slate-800"></div><div className="w-2 bg-slate-800"></div><div className="w-1 bg-slate-800"></div><div className="w-0.5 bg-slate-800"></div><div className="w-3 bg-slate-800"></div><div className="w-1 bg-slate-800"></div><div className="w-2 bg-slate-800"></div><div className="w-0.5 bg-slate-800"></div><div className="w-1 bg-slate-800"></div><div className="w-2 bg-slate-800"></div><div className="w-1 bg-slate-800"></div><div className="w-0.5 bg-slate-800"></div><div className="w-2 bg-slate-800"></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ========================================= */}
        {/* 2. TABS ROW */}
        {/* ========================================= */}
        <div className="flex flex-col md:flex-row relative z-10 pt-10 md:pt-0 pl-0 md:pl-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                flex items-center justify-center font-semibold tracking-widest uppercase transition-all duration-300
                
                /* Mobile: Vertical side tabs */
                py-4 px-2 mb-1 text-[10px]
                rounded-r-lg border-t border-r border-b border-amber-900/20
                
                /* Desktop: Horizontal top tabs */
                md:py-3 md:px-8 md:mb-0 md:mr-1 md:text-sm
                md:rounded-r-none md:rounded-b-none md:rounded-t-lg md:border-l md:border-b-0
                
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

export default Portfolio;