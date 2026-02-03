
import React from 'react';
import { Page } from '../App.tsx';
import { ChevronRight, Linkedin, Instagram } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 md:px-20 overflow-hidden flex flex-col justify-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-8xl font-serif leading-tight">
              <span className="block mb-2">戴蕾</span>
              <span className="gold-text">Dai Lei</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mt-6 font-medium tracking-wide">
              Specializing in <span className="text-white">LLM Applications</span> and <span className="text-white">Live Streaming Growth</span> through cross-disciplinary innovation.
            </p>
          </div>

          <p className="text-gray-500 max-w-md leading-relaxed text-sm">
            With a dual background in <span className="text-gray-300">Finance from Peking University</span> and <span className="text-gray-300">Engineering from Tsinghua University</span>, I bridge the gap between complex algorithms and commercial growth. Currently leading AI product initiatives that redefine user engagement and content ecosystems at scale.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button 
              onClick={() => onNavigate(Page.PROJECTS)}
              className="gold-bg text-black px-10 py-4 font-bold tracking-widest text-xs flex items-center group transition-transform active:scale-95"
            >
              查看作品集
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => onNavigate(Page.EXPERIENCE)}
              className="text-gray-400 hover:text-white transition-colors text-xs tracking-widest flex items-center gap-3 uppercase font-semibold"
            >
              <span className="w-8 h-[1px] bg-gray-600"></span>
              核心案例
            </button>
          </div>

          <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10 max-w-md">
            <div>
              <h4 className="text-[10px] tracking-[0.3em] text-gray-500 font-bold mb-3 uppercase">核心领域</h4>
              <ul className="text-xs space-y-2 text-gray-300">
                <li className="flex items-center gap-2">• 大语言模型 (LLM)</li>
                <li className="flex items-center gap-2">• 全球直播生态</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] tracking-[0.3em] text-gray-500 font-bold mb-3 uppercase">职业路径</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                从金融建模到为全球数亿用户打造高增长的 AI 产品。
              </p>
            </div>
          </div>
        </div>

        <div className="relative group mx-auto md:ml-auto md:mr-0">
          <div className="absolute -inset-4 border border-yellow-500/20 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
          <div className="w-72 h-96 md:w-96 md:h-[500px] overflow-hidden bg-gray-900 border border-white/10 relative">
            <img 
              src="https://picsum.photos/seed/dailei/600/800" 
              alt="Dai Lei Profile" 
              className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
          </div>
          
          <div className="absolute bottom-8 right-[-2rem] flex flex-col gap-4">
            <a href="#" className="p-3 glass-card hover:gold-bg hover:text-black transition-all rounded-full"><Linkedin size={18} /></a>
            <a href="#" className="p-3 glass-card hover:gold-bg hover:text-black transition-all rounded-full"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
