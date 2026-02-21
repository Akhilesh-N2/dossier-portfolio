import { MailIcon, PhoneIcon, LinkedInIcon, GithubIcon, InstagramIcon } from '../datas/Icons';

export default function ContactTab() {
    return (
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

                            <a href="tel:+916238221843" className="flex items-center gap-2 md:gap-3 hover:text-amber-700 transition-colors">
                                <PhoneIcon />
                                <span>+91 6238221843</span>
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
    );
}