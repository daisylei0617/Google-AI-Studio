
import React from 'react';
import { Page } from '../App';
import { Mail, Github, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, currentPage }) => {
  return (
    <footer className="px-6 md:px-20 py-12 border-t border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-[10px] text-gray-500 tracking-[0.3em] font-bold uppercase mb-2">Get in touch</p>
          <a href="mailto:contact@dailei.ai" className="text-lg md:text-xl font-medium hover:text-yellow-500 transition-colors">contact@dailei.ai</a>
        </div>

        <div className="flex gap-8 text-[10px] tracking-widest font-bold text-gray-500 uppercase">
          <button onClick={() => onNavigate(Page.HOME)} className="hover:text-white transition-colors">Intro</button>
          <button onClick={() => onNavigate(Page.EXPERIENCE)} className="hover:text-white transition-colors">Background</button>
          <button onClick={() => onNavigate(Page.PROJECTS)} className="hover:text-white transition-colors">Case Studies</button>
          <button onClick={() => onNavigate(Page.SKILLS)} className="hover:text-white transition-colors">Expertise</button>
        </div>

        <div className="flex gap-4">
          <a href="#" className="p-2 text-gray-500 hover:text-yellow-500 transition-colors"><Mail size={18} /></a>
          <a href="#" className="p-2 text-gray-500 hover:text-yellow-500 transition-colors"><Github size={18} /></a>
          <a href="#" className="p-2 text-gray-500 hover:text-yellow-500 transition-colors"><Globe size={18} /></a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-gray-600 uppercase tracking-widest font-bold">
        <p>© 2024 DAI LEI — PROFESSIONAL PORTFOLIO</p>
        <p>PEKING & TSINGHUA ALUMNA</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-white transition-colors">BEHANCE</a>
          <a href="#" className="hover:text-white transition-colors">EMAIL</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
