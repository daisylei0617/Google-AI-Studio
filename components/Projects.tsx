
import React from 'react';
import { Page } from '../App';
import { Play, Sparkles, TrendingUp, Users } from 'lucide-react';

interface ProjectsProps {
  onNavigate: (page: Page) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="mb-20">
        <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-[10px] font-bold tracking-widest border border-yellow-500/20 mb-6 inline-block">SELECTED CASE STUDIES</span>
        <h2 className="text-5xl md:text-8xl font-serif leading-tight">
          AI Project <span className="gold-text italic">Portfolio</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 gap-8">
           <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
             Product strategic leader focused on the convergence of Large Language Models and automated content generation. Bridging complex AI logic with high-impact market results.
           </p>
           <div className="text-right">
             <span className="text-[10px] tracking-widest text-gray-500 uppercase block mb-1">Core Stack</span>
             <span className="text-xs font-bold text-white tracking-[0.2em]">LLM + PYTHON + SQL</span>
           </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Project One */}
        <div className="glass-card overflow-hidden group">
          <div className="relative h-64 md:h-80 bg-gray-900 flex items-center justify-center">
            <img src="https://picsum.photos/seed/aiad/800/600" alt="OpenAd" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
            <div className="absolute flex items-center gap-4">
              <div className="p-4 bg-yellow-500 rounded-full text-black hover:scale-110 transition-transform cursor-pointer shadow-xl shadow-yellow-500/20"><Play fill="currentColor" size={24} /></div>
            </div>
            <div className="absolute top-6 left-6">
              <span className="px-3 py-1 bg-yellow-500 text-black text-[9px] font-bold tracking-widest uppercase">Awarded</span>
            </div>
          </div>
          
          <div className="p-8 space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-4xl font-serif">OpenAd</h3>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">AI Multimodal Ad Generator</p>
              </div>
              <div className="flex gap-2">
                {['LLM', 'Automation', 'Multimodal'].map(tag => (
                  <span key={tag} className="text-[9px] border border-white/10 px-2 py-1 text-gray-400 uppercase font-bold">{tag}</span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div>
                <h4 className="text-[10px] tracking-[0.2em] text-yellow-500 font-bold uppercase mb-4 flex items-center gap-2">
                  <Sparkles size={12} /> Vision & Engineering
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Architected a zero-to-one multimodal platform using LLMs to automate the creation of professional-grade 1-minute video advertisements from a single product image and text prompt.
                </p>
              </div>
              <div>
                <h4 className="text-[10px] tracking-[0.2em] text-yellow-500 font-bold uppercase mb-4 flex items-center gap-2">
                  <TrendingUp size={12} /> VC & Market Validation
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Secured <span className="text-white">2nd Prize</span> in the Tsinghua University Large Model Application Challenge. Effectively demonstrated prototype value to top-tier VC investors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Two */}
        <div className="glass-card overflow-hidden group">
          <div className="relative h-64 md:h-80 bg-gray-900">
            <img src="https://picsum.photos/seed/tarot/800/600" alt="O'Tarot" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
            <div className="absolute top-6 left-6">
              <span className="px-3 py-1 bg-white/10 border border-white/20 text-white text-[9px] font-bold tracking-widest uppercase">Active Beta</span>
            </div>
          </div>
          
          <div className="p-8 space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-4xl font-serif italic">O'Tarot</h3>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">AI Tarot Mini-Program</p>
              </div>
              <div className="flex gap-2">
                {['Logic Design', 'User Metrics', 'Python'].map(tag => (
                  <span key={tag} className="text-[9px] border border-white/10 px-2 py-1 text-gray-400 uppercase font-bold">{tag}</span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div>
                <h4 className="text-[10px] tracking-[0.2em] text-yellow-500 font-bold uppercase mb-4">Core Logic Design</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Defined intricate logic pipelines for AI-driven spiritual consultations, integrating proprietary data and fine-tuning parameters to ensure high-fidelity, personalized human-like interactions.
                </p>
              </div>
              <div>
                <h4 className="text-[10px] tracking-[0.2em] text-yellow-500 font-bold uppercase mb-4 flex items-center gap-2">
                  <Users size={12} /> Impact & Community
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Achieved successful growth through iterative community feedback, building a core user base of <span className="text-white">100+ active beta testers</span>. Leveraged SQL and user behavioral data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 text-center">
         <p className="text-3xl md:text-5xl font-serif italic mb-12 max-w-2xl mx-auto leading-tight">
           Crafting the future of <span className="gold-text">Intelligent Products.</span>
         </p>
         <button 
           onClick={() => onNavigate(Page.SKILLS)}
           className="text-xs font-bold tracking-[0.4em] uppercase text-gray-500 hover:text-yellow-500 transition-colors"
         >
           Skills & Toolkit ———
         </button>
      </div>
    </div>
  );
};

export default Projects;
