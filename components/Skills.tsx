
import React from 'react';
import { Page } from '../App.tsx';
import { Database, Code, Layout, ArrowRight } from 'lucide-react';

interface SkillsProps {
  onNavigate: (page: Page) => void;
}

const Skills: React.FC<SkillsProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-7 space-y-16">
          <div>
            <span className="text-[10px] tracking-[0.4em] text-yellow-500 font-bold uppercase mb-4 block">核心胜任力</span>
            <h2 className="text-5xl font-serif">技能 <span className="italic">&</span> 专业领域</h2>
          </div>

          <div className="space-y-10">
             <div className="p-6 glass-card rounded-none space-y-8">
                <div className="flex justify-between items-center">
                   <div>
                     <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">英语能力 (TOEFL 108)</span>
                     <span className="text-lg font-medium">精通</span>
                   </div>
                </div>
                <div className="flex justify-between items-center">
                   <div>
                     <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">产品策略与 AI</span>
                     <span className="text-lg font-medium">核心重点</span>
                   </div>
                </div>
             </div>

             <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: <Database size={18} />, label: 'SQL', desc: '数据驱动洞察' },
                  { icon: <Code size={18} />, label: 'PYTHON', desc: '模型与逻辑' },
                  { icon: <Layout size={18} />, label: 'FIGMA', desc: '原型设计' }
                ].map((tool) => (
                  <div key={tool.label} className="p-6 glass-card text-center hover:border-yellow-500/50 transition-all cursor-default">
                    <div className="mx-auto w-10 h-10 flex items-center justify-center bg-yellow-500/10 text-yellow-500 rounded-lg mb-4">
                      {tool.icon}
                    </div>
                    <span className="block text-xs font-bold tracking-widest mb-1">{tool.label}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="glass-card p-10 relative">
             <p className="text-gray-400 italic leading-loose text-lg font-serif">
               "将技术严谨性与创造性直觉相结合。我的工具箱建立在顶级学术训练和高增长直播环境下的实战经验基础之上。"
             </p>
          </div>

          <div className="mt-16 space-y-12">
            <div>
              <span className="text-[10px] tracking-[0.4em] text-gray-500 font-bold uppercase mb-4 block">工作之外</span>
              <h2 className="text-4xl font-serif italic">兴趣 <span className="not-italic">&</span> 生活</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
