
import React from 'react';
import { Page } from '../App.tsx';
import { GraduationCap, Briefcase, ExternalLink } from 'lucide-react';

interface ExperienceProps {
  onNavigate: (page: Page) => void;
}

const Experience: React.FC<ExperienceProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-serif">
          履历 <span className="gold-text italic">&</span> 教育
        </h2>
        <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed uppercase tracking-widest">
          从顶级学府到极具影响力的 AI 产品领导力之路
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 relative">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

        <div className="space-y-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 glass-card text-yellow-500"><GraduationCap size={24} /></div>
            <h3 className="text-xs tracking-[0.3em] font-bold uppercase text-gray-400">教育背景</h3>
          </div>

          <div className="relative pl-8 border-l border-yellow-500/30 group">
            <div className="absolute -left-1.5 top-0 w-3 h-3 gold-bg rounded-full ring-4 ring-yellow-500/20" />
            <h4 className="text-xl font-bold group-hover:gold-text transition-colors">北京大学 <span className="text-yellow-500 ml-2 text-sm">●</span></h4>
            <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">2016 — 2020</p>
            <p className="text-gray-300 mt-3 font-medium">经济学学士（荣誉）</p>
            <div className="flex gap-8 mt-6">
              <div>
                <span className="block text-2xl font-serif gold-text">3.9/4.0</span>
                <span className="text-[10px] text-gray-500 uppercase font-bold">专业 GPA</span>
              </div>
              <div>
                <span className="block text-2xl font-serif text-white">Top 1%</span>
                <span className="text-[10px] text-gray-500 uppercase font-bold">奖学金</span>
              </div>
            </div>
          </div>

          <div className="relative pl-8 border-l border-white/10 group">
            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-gray-600 rounded-full" />
            <h4 className="text-xl font-bold group-hover:text-white transition-colors">牛津大学</h4>
            <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">2021 — 2022</p>
            <p className="text-gray-300 mt-3 font-medium italic">访问学者</p>
          </div>

          <div className="relative pl-8 border-l border-white/10 group">
            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-gray-600 rounded-full" />
            <h4 className="text-xl font-bold group-hover:text-white transition-colors">清华大学 <span className="text-yellow-500 ml-2 text-sm">●</span></h4>
            <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">2020 — 2023</p>
            <p className="text-gray-300 mt-3 font-medium">传播与技术硕士</p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 glass-card text-yellow-500"><Briefcase size={24} /></div>
            <h3 className="text-xs tracking-[0.3em] font-bold uppercase text-gray-400">职业经历</h3>
          </div>

          <div className="p-6 glass-card relative group hover:border-yellow-500/50 transition-all">
             <div className="flex justify-between items-start">
               <div>
                  <h4 className="text-xl font-bold group-hover:gold-text transition-colors">TikTok Live <span className="text-yellow-500 ml-2 text-sm">●</span></h4>
                  <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">2023 — 至今</p>
                  <p className="text-yellow-500/80 text-xs mt-2 font-bold tracking-widest">高级 AI 产品经理</p>
               </div>
               <div className="p-2 bg-yellow-500/10 rounded-lg"><ExternalLink size={16} className="text-yellow-500" /></div>
             </div>
             <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-3 bg-white/5 rounded">
                  <span className="block text-xl font-bold">45%</span>
                  <span className="text-[10px] text-gray-500 uppercase">主播参与度提升</span>
                </div>
                <div className="p-3 bg-white/5 rounded">
                  <span className="block text-xl font-bold">100M+</span>
                  <span className="text-[10px] text-gray-500 uppercase">全球日活</span>
                </div>
             </div>
          </div>

          <div className="p-6 glass-card group hover:border-white/30 transition-all">
             <div className="flex justify-between items-start">
               <div>
                  <h4 className="text-xl font-bold">微信支付 <span className="text-yellow-500 ml-2 text-sm">●</span></h4>
                  <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">2022 — 2023</p>
                  <p className="text-gray-400 text-xs mt-2 font-bold tracking-widest italic">产品策略实习生</p>
               </div>
             </div>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-12 border-t border-white/5 flex justify-center">
        <button 
          onClick={() => onNavigate(Page.PROJECTS)}
          className="group flex flex-col items-center gap-4"
        >
          <span className="text-[10px] tracking-[0.5em] text-gray-500 uppercase group-hover:text-white transition-colors">下一页</span>
          <span className="text-3xl font-serif gold-text group-hover:translate-x-2 transition-transform">作品集详情 →</span>
        </button>
      </div>
    </div>
  );
};

export default Experience;
