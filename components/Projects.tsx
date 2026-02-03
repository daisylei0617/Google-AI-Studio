
import React from 'react';
import { Page } from '../App.tsx';
import { Play, Sparkles, TrendingUp, Users } from 'lucide-react';

interface ProjectsProps {
  onNavigate: (page: Page) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="mb-20">
        <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-[10px] font-bold tracking-widest border border-yellow-500/20 mb-6 inline-block">精选案例集</span>
        <h2 className="text-5xl md:text-8xl font-serif leading-tight">
          AI 项目 <span className="gold-text italic">作品集</span>
        </h2>
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
          </div>
          
          <div className="p-8 space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-4xl font-serif">OpenAd</h3>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">AI 多模态广告生成器</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              利用大语言模型（LLM）构建的零到一多模态平台，仅凭一张产品图和一段文字即可自动生成 1 分钟专业级广告视频。
            </p>
          </div>
        </div>

        {/* Project Two */}
        <div className="glass-card overflow-hidden group">
          <div className="relative h-64 md:h-80 bg-gray-900">
            <img src="https://picsum.photos/seed/tarot/800/600" alt="O'Tarot" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
          </div>
          
          <div className="p-8 space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-4xl font-serif italic">O'Tarot</h3>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">AI 塔罗咨询小程序</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              设计复杂的 AI 心理咨询逻辑链路，集成专有数据微调模型，确保高保真、个性化的人机交互体验。
            </p>
          </div>
        </div>
      </div>

      <div className="mt-32 text-center">
         <button 
           onClick={() => onNavigate(Page.SKILLS)}
           className="text-xs font-bold tracking-[0.4em] uppercase text-gray-500 hover:text-yellow-500 transition-colors"
         >
           技能与工具栈 ———
         </button>
      </div>
    </div>
  );
};

export default Projects;
