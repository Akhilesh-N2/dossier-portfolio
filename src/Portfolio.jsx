import { useState, useEffect } from 'react';
import { tabs } from './datas/data';
import HomeTab from './components/HomeTab';
import ProjectsTab from './components/ProjectsTab';
import ResumeTab from './components/ResumeTab';
import ContactTab from './components/ContactTab';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isOpened, setIsOpened] = useState(false);
  const [isCoverHidden, setIsCoverHidden] = useState(false);

  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  

  // Helper to dynamically render the correct component
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Home': return <HomeTab />;
      case 'Projects': return <ProjectsTab />;
      case 'Resume': return <ResumeTab />;
      case 'Contact': return <ContactTab />;
      default: return <HomeTab />;
    }
  };

  return (

    <div className="min-h-screen bg-slate-900 p-4 md:p-8 flex justify-center items-center font-sans overflow-x-clip">   {/* cursor-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2220%22%20height=%2220%22%20viewBox=%220%200%2024%2024%22%20fill=%22black%22><path%20d=%22M4%200l16%2012-7.5%202L10%2024z%22/></svg>'),_default] */}

      <div className="w-full max-w-6xl flex flex-row md:flex-col-reverse relative my-auto">

        {/* 1. FOLDER BODY */}
        <div className="flex-1 bg-[#f4e4bc] h-[85vh] md:h-[80vh] rounded-xl rounded-tr-none md:rounded-tr-xl md:rounded-tl-none p-3 md:p-8 shadow-2xl border border-amber-900/20 relative z-10 flex flex-col [perspective:2000px]">

          {/* --- THE FOLDING FRONT COVER --- */}
          {!isCoverHidden && (
            <div
              className={`absolute inset-0 z-[100] bg-[#e2ce9f] rounded-xl rounded-tr-none md:rounded-tr-xl md:rounded-tl-none border-2 border-amber-900/30 flex flex-col items-center justify-center shadow-inner origin-left md:origin-bottom ${isOpened ? 'pointer-events-none [transform:rotateY(-180deg)] md:[transform:rotateX(-180deg)]' : '[transform:rotateY(0deg)] md:[transform:rotateX(0deg)]'}`}
              style={{
                opacity: isOpened ? 0 : 1,
                transition: isOpened ? 'transform 1.5s ease-in-out, opacity 0.3s ease-in-out 1.2s' : 'transform 1.5s ease-in-out, opacity 0.3s ease-in-out 0s'
              }}
            >
              <div className="border-4 border-slate-800 p-6 md:p-8 max-w-sm md:max-w-md w-[90%] text-center relative bg-[#ebd8ac] shadow-md">
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-slate-800"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-slate-800"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-slate-800"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-slate-800"></div>
                <h2 className="text-4xl md:text-5xl font-black tracking-widest text-slate-800 uppercase mb-2 font-serif">Dossier</h2>
                <p className="text-base md:text-lg font-bold tracking-[0.3em] text-slate-600 uppercase mb-8">Akhilesh N.</p>
                <div className="flex justify-center mb-8 md:mb-10"><div className="px-3 py-1 bg-slate-800 text-amber-100 font-mono text-[10px] md:text-xs tracking-widest uppercase">Level 4 Clearance Required</div></div>
                <button
                  onClick={() => { setIsOpened(true); setTimeout(() => setIsCoverHidden(true), 1500); }}
                  className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 font-bold text-white transition-all duration-200 bg-red-800 border-2 border-red-900 rounded-sm hover:bg-red-700 shadow-[0_0_15px_rgba(153,27,27,0.5)] hover:shadow-[0_0_25px_rgba(153,27,27,0.8)]"
                >
                  <span className="font-mono tracking-widest text-xs md:text-sm">OPEN</span>
                  <span className="absolute -left-4 w-4 h-0.5 bg-red-900/50"></span>
                  <span className="absolute -right-4 w-4 h-0.5 bg-red-900/50"></span>
                </button>
              </div>
              <span className="absolute bottom-4 md:bottom-8 right-4 md:right-8 text-amber-900/20 font-mono text-2xl md:text-4xl font-black transform -rotate-12 select-none pointer-events-none">DO NOT DUPLICATE</span>
            </div>
          )}

          {/* --- INNER PAPER --- */}
          <div className="flex-1 bg-stone-50 rounded-sm shadow-sm border border-stone-200 p-6 md:p-10 relative overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* INJECT THE CHOSEN COMPONENT HERE */}
            {renderTabContent()}
          </div>
        </div>

        {/* 2. TABS ROW */}
        <div className="flex flex-col md:flex-row relative z-10 pt-0 md:pt-0 pl-0 md:pl-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                flex items-center justify-center font-semibold tracking-widest uppercase transition-all duration-300
                py-4 px-2 mb-1 text-[10px] rounded-r-lg border-t border-r border-b border-amber-900/20
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