import { mainProjectList, sideProjectList } from "../datas/data";
import { GithubIcon } from "../datas/Icons";

export default function ProjectsTab() {
  return (
    <div className="animate-fadeIn">
      {[
        { title: "Main Operations", list: mainProjectList },
        { title: "Field Simulations", list: sideProjectList },
      ].map((section, idx) => (
        <div key={idx}>
          <header
            className={`border-b-2 border-slate-200 pb-4 mb-8 md:mb-10 ${idx > 0 ? "md:mt-14" : ""}`}
          >
            <h2 className="text-2xl md:text-3xl font-serif text-slate-800 tracking-tight">
              {section.title}
            </h2>
            <p className="text-xs md:text-sm font-bold tracking-widest text-slate-500 uppercase mt-2">
              Visual Evidence & Source Code
            </p>
          </header>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 p-1 md:p-4 mb-10">
            {section.list.map((project) => (
              <div
                key={project.id}
                className={`relative bg-stone-50 p-3 pb-12 md:pb-16 shadow-lg border border-stone-200 transition-all duration-300 transform ${project.tilt} hover:rotate-0 hover:scale-105 hover:shadow-2xl hover:z-50 group cursor-pointer`}
              >
                {/* --- TECH STICKERS --- */}
                <div className="absolute -top-4 -left-2 flex flex-col gap-1 z-40 pointer-events-none">
                  {project.tech?.map((name, i) => (
                    <span
                      key={i}
                      className={`px-2 py-0.5 text-[8px] md:text-[10px] font-bold uppercase tracking-tighter shadow-sm border border-black/10 
                          ${i % 2 === 0 ? "bg-amber-200 -rotate-3" : "bg-blue-200 rotate-2"} 
                          ${i === 1 ? "translate-x-2" : ""}
                        `}
                      style={{
                        boxShadow: "2px 2px 0px rgba(0,0,0,0.1)",
                        fontFamily: "monospace",
                      }}
                    >
                      {name}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <div className="w-full aspect-video bg-slate-800 relative overflow-hidden flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                    {!project.media || project.media.trim() === "" ? (
                      <div className="w-full h-full bg-stone-300 flex items-center justify-center relative overflow-hidden">
                        <div
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(45deg, #000, #000 10px, transparent 10px, transparent 20px)",
                          }}
                        ></div>
                        <span className="text-red-700 font-black text-xl md:text-2xl border-2 md:border-4 border-red-700 p-1 md:p-2 uppercase tracking-tighter transform -rotate-12 bg-stone-300/80 z-10">
                          Redacted
                        </span>
                      </div>
                    ) : project.media.endsWith(".mp4") ? (
                      <video
                        src={project.media}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    ) : (
                      <img
                        src={project.media}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    )}

                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-20"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full px-3 md:px-4 py-2 md:py-3 flex justify-between items-end">
                    <div>
                      <h3 className="font-serif font-bold text-slate-800 text-xs md:text-lg leading-tight group-hover:text-amber-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[10px] md:text-xs font-mono text-slate-400 mt-1">
                        {project.date}
                      </p>
                    </div>
                  </div>
                </a>

                {/* {section.title === "Main Operations" && (
                  <div className="absolute bottom-2 md:bottom-3 right-3 md:right-4 z-30">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-slate-900 transition-colors"
                      title="View Repository"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GithubIcon />
                    </a>
                  </div>
                )} */}

              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
