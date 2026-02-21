import { DownloadIcon } from '../datas/Icons';

export default function ResumeTab() {
    return (
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
                        <div className="relative pl-8 md:pl-10 group">
                            {/* Timeline Dot */}
                            <div className="absolute top-1.5 left-0 w-6 h-6 bg-stone-50 border-4 border-slate-300 group-hover:border-amber-700 rounded-full flex items-center justify-center transition-colors">
                                <div className="w-2 h-2 bg-slate-400 rounded-full group-hover:bg-amber-700 transition-colors"></div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                <h3 className="font-serif text-lg md:text-xl font-bold text-slate-800 group-hover:text-amber-800 transition-colors">Freelance Developer</h3>
                                <span className="font-mono text-[10px] md:text-xs text-amber-700 bg-amber-700/10 px-2 py-1 mt-1 sm:mt-0 w-fit">PRESENT</span>
                            </div>
                            <h4 className="text-[10px] md:text-sm font-bold tracking-widest text-slate-500 uppercase mb-2 md:mb-3">MEARN Stack Developer</h4>
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
                                <h3 className="font-serif text-lg md:text-xl font-bold text-slate-800 group-hover:text-amber-800 transition-colors">Luminar Technolab</h3>
                                <span className="font-mono text-[10px] md:text-xs text-slate-400 mt-1 sm:mt-0">2025-2026</span>
                            </div>
                            <h4 className="text-[10px] md:text-sm font-bold tracking-widest text-slate-500 uppercase mb-2 md:mb-3">MEARN Stack Trainee</h4>
                            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                                Focused on core computer science principles, software engineering, and full-stack web development. Currently building scalable applications using the MERN stack.
                            </p>
                        </div>

                        {/* --- EXPERIENCE / PROJECT ENTRY 2 --- */}
                        <div className="relative pl-8 md:pl-10 group">
                            <div className="absolute top-1.5 left-0 w-6 h-6 bg-stone-50 border-4 border-slate-300 group-hover:border-amber-700 rounded-full flex items-center justify-center transition-colors">
                                <div className="w-2 h-2 bg-slate-400 group-hover:bg-amber-700 rounded-full transition-colors"></div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                <h3 className="font-serif text-lg md:text-xl font-bold text-slate-800 group-hover:text-amber-800 transition-colors">University of Engineering & Technology</h3>
                                <span className="font-mono text-[10px] md:text-xs text-slate-400 mt-1 sm:mt-0">2021 - 2025</span>
                            </div>
                            <h4 className="text-[10px] md:text-sm font-bold tracking-widest text-slate-500 uppercase mb-2 md:mb-3">B.Tech Computer Science</h4>
                            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                                Focused on core computer science principles, software engineering, and full-stack web development. Currently building scalable applications using the MERN stack.
                            </p>
                        </div>

                    </div>
                </div>

                {/* RIGHT COLUMN: Skills / Meta Data (Takes 1/3 width) */}
                <div className="lg:col-span-1 space-y-8 border-t-2 lg:border-t-0 lg:border-l-2 border-slate-200 pt-8 lg:pt-0 lg:pl-8 mt-8 lg:mt-0">

                    {/* Operational / Soft Skills */}
                    <div>
                      <h3 className="text-[10px] md:text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">Verified Psychological Traits</h3>
                      <div className="space-y-4 font-mono text-slate-700">
                        
                        <div className="border-b border-slate-200 pb-2 group">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-1.5 h-1.5 bg-amber-700 group-hover:bg-red-800 transition-colors"></div>
                            <span className="text-xs md:text-sm font-bold uppercase tracking-tight text-slate-800">Adaptive Troubleshooting</span>
                          </div>
                          <p className="text-[10px] md:text-xs text-slate-500 pl-3.5 leading-relaxed font-sans">
                            Rapidly integrates emerging tech (e.g., AI APIs) and resolves complex architectural bottlenecks within the MERN stack.
                          </p>
                        </div>

                        <div className="border-b border-slate-200 pb-2 group">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-1.5 h-1.5 bg-amber-700 group-hover:bg-red-800 transition-colors"></div>
                            <span className="text-xs md:text-sm font-bold uppercase tracking-tight text-slate-800">Agile Execution</span>
                          </div>
                          <p className="text-[10px] md:text-xs text-slate-500 pl-3.5 leading-relaxed font-sans">
                            Successfully balances rigorous B.Tech CS academic requirements with the end-to-end delivery of full-stack projects.
                          </p>
                        </div>

                        <div className="border-b border-slate-200 pb-2 group">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-1.5 h-1.5 bg-amber-700 group-hover:bg-red-800 transition-colors"></div>
                            <span className="text-xs md:text-sm font-bold uppercase tracking-tight text-slate-800">Systematic Communication</span>
                          </div>
                          <p className="text-[10px] md:text-xs text-slate-500 pl-3.5 leading-relaxed font-sans">
                            Translates intricate technical specifications into clear, actionable UI/UX flows and well-documented source code.
                          </p>
                        </div>

                      </div>
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
    );
}