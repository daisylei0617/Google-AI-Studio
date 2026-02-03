
import React from 'react';
import { Page } from '../App';
import { Database, Code, Layout, ArrowRight } from 'lucide-react';

interface SkillsProps {
  onNavigate: (page: Page) => void;
}

const Skills: React.FC<SkillsProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-16">
        
        {/* Left Side: Professional Skills */}
        <div className="lg:col-span-7 space-y-16">
          <div>
            <span className="text-[10px] tracking-[0.4em] text-yellow-500 font-bold uppercase mb-4 block">Core Competencies</span>
            <h2 className="text-5xl font-serif">Skills <span className="italic">&</span> Expertise</h2>
          </div>

          <div className="space-y-10">
             {/* Skill Item */}
             <div className="group">
               <div className="flex justify-between items-center mb-3">
                 <span className="text-xs font-bold tracking-widest uppercase text-gray-300">Strategic Proficiency</span>
               </div>
               <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                 <div className="h-full gold-bg w-[92%] transition-all group-hover:bg-white" />
               </div>
             </div>

             {/* Double Skill Card */}
             <div className="p-6 glass-card rounded-none space-y-8">
                <div className="flex justify-between items-center">
                   <div>
                     <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">ENGLISH (TOEFL 108)</span>
                     <span className="text-lg font-medium">Expert Proficiency</span>
                   </div>
                   <div className="w-12 h-[2px] bg-yellow-500/30" />
                </div>
                <div className="flex justify-between items-center">
                   <div>
                     <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">PRODUCT STRATEGY & AI</span>
                     <span className="text-lg font-medium">Core Focus</span>
                   </div>
                   <div className="w-12 h-[2px] bg-yellow-500/30" />
                </div>
             </div>

             <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: <Database size={18} />, label: 'SQL', desc: 'Data Driven Insights' },
                  { icon: <Code size={18} />, label: 'PYTHON', desc: 'Models & Logic' },
                  { icon: <Layout size={18} />, label: 'FIGMA', desc: 'UI/UX Prototyping' }
                ].map((tool) => (
                  <div key={tool.label} className="p-6 glass-card text-center hover:border-yellow-500/50 transition-all cursor-default">
                    <div className="mx-auto w-10 h-10 flex items-center justify-center bg-yellow-500/10 text-yellow-500 rounded-lg mb-4">
                      {tool.icon}
                    </div>
                    <span className="block text-xs font-bold tracking-widest mb-1">{tool.label}</span>
                    <span className="text-[8px] text-gray-500 uppercase font-bold">{tool.desc}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Right Side: Philosophy & Interests */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="glass-card p-10 relative">
             <div className="absolute top-0 right-10 w-[1px] h-20 bg-yellow-500/30" />
             <p className="text-gray-400 italic leading-loose text-lg font-serif">
               "Blending technical rigor with creative intuition. My toolkit is built on the foundation of elite academic training and hands-on execution in high-growth live streaming environments."
             </p>
             <div className="mt-8 flex items-center gap-4">
               <div className="w-8 h-[1px] bg-gray-600" />
               <span className="text-[10px] tracking-[0.2em] font-bold text-gray-500 uppercase">THE AI PM TOOLKIT</span>
             </div>
          </div>

          <div className="mt-16 space-y-12">
            <div>
              <span className="text-[10px] tracking-[0.4em] text-gray-500 font-bold uppercase mb-4 block">OFF THE CLOCK</span>
              <h2 className="text-4xl font-serif italic">Interests <span className="not-italic">&</span> Life</h2>
            </div>

            <div className="grid grid-cols-3 gap-4">
               <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all">
                  <img src="https://picsum.photos/seed/interest1/400/500" alt="Life" className="w-full h-full object-cover" />
               </div>
               <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all">
                  <img src="https://picsum.photos/seed/interest2/400/500" alt="Life" className="w-full h-full object-cover" />
               </div>
               <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all">
                  <img src="https://picsum.photos/seed/interest3/400/500" alt="Life" className="w-full h-full object-cover" />
               </div>
            </div>

            <div className="grid gap-6">
               <div className="flex gap-4 items-start">
                  <span className="text-yellow-500 text-xs font-bold mt-1">01</span>
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-widest">Logical Oratory</h5>
                    <p className="text-[10px] text-gray-500 leading-relaxed mt-1">Tsinghua Debate Team Member, Best Debater Award Winner.</p>
                  </div>
               </div>
               <div className="flex gap-4 items-start">
                  <span className="text-yellow-500 text-xs font-bold mt-1">02</span>
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-widest">Urban Observer</h5>
                    <p className="text-[10px] text-gray-500 leading-relaxed mt-1">Capturing the silent narratives of city life through street photography.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 p-12 bg-white/5 border border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
         <div className="max-w-md">
           <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to define the next era of AI?</h3>
           <p className="text-gray-400 text-sm">Open for collaborative opportunities and strategic product conversations.</p>
         </div>
         <div className="flex gap-4">
            <button className="gold-bg text-black px-8 py-3 text-[10px] font-bold tracking-[0.2em] hover:scale-105 transition-transform flex items-center gap-2">
              START A PROJECT <ArrowRight size={14} />
            </button>
            <button 
              onClick={() => onNavigate(Page.PROJECTS)}
              className="border border-white/20 px-8 py-3 text-[10px] font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all"
            >
              DOWNLOAD PORTFOLIO
            </button>
         </div>
      </div>
    </div>
  );
};

export default Skills;
