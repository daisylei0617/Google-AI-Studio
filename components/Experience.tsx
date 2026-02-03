
import React from 'react';
import { Page } from '../App';
import { GraduationCap, Briefcase, ExternalLink } from 'lucide-react';

interface ExperienceProps {
  onNavigate: (page: Page) => void;
}

const Experience: React.FC<ExperienceProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-serif">
          Experience <span className="gold-text italic">&</span> Education
        </h2>
        <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed uppercase tracking-widest">
          Detailed trajectory from premier academic institutions to high-impact AI product leadership.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 relative">
        {/* Timeline divider line (desktop) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

        {/* Education Column */}
        <div className="space-y-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 glass-card text-yellow-500"><GraduationCap size={24} /></div>
            <h3 className="text-xs tracking-[0.3em] font-bold uppercase text-gray-400">Education</h3>
          </div>

          <div className="relative pl-8 border-l border-yellow-500/30 group">
            <div className="absolute -left-1.5 top-0 w-3 h-3 gold-bg rounded-full ring-4 ring-yellow-500/20" />
            <h4 className="text-xl font-bold group-hover:gold-text transition-colors">Peking University <span className="text-yellow-500 ml-2 text-sm">●</span></h4>
            <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">2016 — 2020</p>
            <p className="text-gray-300 mt-3 font-medium">Bachelor of Arts (Honors)</p>
            <div className="flex gap-8 mt-6">
              <div>
                <span className="block text-2xl font-serif gold-text">3.9/4.0</span>
                <span className="text-[10px] text-gray-500 uppercase font-bold">Major GPA</span>
              </div>
              <div>
                <span className="block text-2xl font-serif text-white">Top 1%</span>
                <span className="text-[10px] text-gray-500 uppercase font-bold">Scholarship</span>
              </div>
            </div>
          </div>

          <div className="relative pl-8 border-l border-white/10 group">
            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-gray-600 rounded-full" />
            <h4 className="text-xl font-bold group-hover:text-white transition-colors">University of Oxford</h4>
            <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">2021 — 2022</p>
            <p className="text-gray-300 mt-3 font-medium italic">Visiting Scholar / Exchange Program</p>
            <div className="mt-4 p-4 glass-card text-xs text-gray-400 leading-relaxed border-l-2 border-yellow-500">
              Research focused on AI ethics and global patterns within digital human-centric design ecosystems.
            </div>
          </div>

          <div className="relative pl-8 border-l border-white/10 group">
            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-gray-600 rounded-full" />
            <h4 className="text-xl font-bold group-hover:text-white transition-colors">Tsinghua University <span className="text-yellow-500 ml-2 text-sm">●</span></h4>
            <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">2020 — 2023</p>
            <p className="text-gray-300 mt-3 font-medium">Master in Communication & Technology</p>
            <div className="flex gap-3 mt-4">
              <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-[10px] font-bold tracking-widest border border-yellow-500/20">DISTINCTION THESIS</span>
              <span className="px-3 py-1 bg-white/5 text-gray-400 text-[10px] font-bold tracking-widest border border-white/10">ACADEMIC EXCELLENCE</span>
            </div>
          </div>
        </div>

        {/* Experience Column */}
        <div className="space-y-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 glass-card text-yellow-500"><Briefcase size={24} /></div>
            <h3 className="text-xs tracking-[0.3em] font-bold uppercase text-gray-400">Experience</h3>
          </div>

          <div className="p-6 glass-card relative group hover:border-yellow-500/50 transition-all">
             <div className="flex justify-between items-start">
               <div>
                  <h4 className="text-xl font-bold group-hover:gold-text transition-colors">TikTok Live <span className="text-yellow-500 ml-2 text-sm">●</span></h4>
                  <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">2023 — PRESENT</p>
                  <p className="text-yellow-500/80 text-xs mt-2 font-bold tracking-widest">Senior AI Product Manager</p>
               </div>
               <div className="p-2 bg-yellow-500/10 rounded-lg"><ExternalLink size={16} className="text-yellow-500" /></div>
             </div>
             <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-3 bg-white/5 rounded">
                  <span className="block text-xl font-bold">45%</span>
                  <span className="text-[10px] text-gray-500 uppercase">Streamer Engagement</span>
                </div>
                <div className="p-3 bg-white/5 rounded">
                  <span className="block text-xl font-bold">100M+</span>
                  <span className="text-[10px] text-gray-500 uppercase">Global DAU</span>
                </div>
             </div>
          </div>

          <div className="p-6 glass-card group hover:border-white/30 transition-all">
             <div className="flex justify-between items-start">
               <div>
                  <h4 className="text-xl font-bold">WeChat Pay <span className="text-yellow-500 ml-2 text-sm">●</span></h4>
                  <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">2022 — 2023</p>
                  <p className="text-gray-400 text-xs mt-2 font-bold tracking-widest italic">Product Strategy Intern</p>
               </div>
             </div>
             <ul className="mt-4 space-y-3 text-sm text-gray-400">
               <li className="flex gap-2">
                 <span className="text-yellow-500">•</span> Optimized payment conversion leveraging predictive AI models.
               </li>
               <li className="flex gap-2">
                 <span className="text-yellow-500">•</span> 23% conversion uplift through user behavior analysis.
               </li>
             </ul>
          </div>

          <div className="p-6 glass-card border-dashed border-gray-700">
             <h4 className="text-xl font-bold">OpenAd Startup</h4>
             <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">2019 — 2021</p>
             <p className="text-gray-400 text-xs mt-2 font-bold tracking-widest">Co-Founder & Head of Product</p>
             <div className="mt-4 flex items-center gap-2 text-yellow-500 text-xs font-bold bg-yellow-500/10 w-fit px-3 py-1 rounded">
                <span className="animate-pulse">●</span> SEED FUNDED $1M+
             </div>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-12 border-t border-white/5 flex justify-center">
        <button 
          onClick={() => onNavigate(Page.PROJECTS)}
          className="group flex flex-col items-center gap-4"
        >
          <span className="text-[10px] tracking-[0.5em] text-gray-500 uppercase group-hover:text-white transition-colors">See Next</span>
          <span className="text-3xl font-serif gold-text group-hover:translate-x-2 transition-transform">Detailed Portfolio →</span>
        </button>
      </div>
    </div>
  );
};

export default Experience;
