
import React from 'react';
import { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { label: 'EXPERIENCE', page: Page.EXPERIENCE },
    { label: 'PROJECTS', page: Page.PROJECTS },
    { label: 'EXPERTISE', page: Page.SKILLS },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-20 py-8 mix-blend-difference">
      <div 
        className="text-xl font-bold tracking-widest cursor-pointer hover:text-yellow-500 transition-colors"
        onClick={() => onNavigate(Page.HOME)}
      >
        DAI LEI
      </div>
      
      <div className="hidden md:flex items-center space-x-12">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => onNavigate(item.page)}
            className={`text-xs tracking-[0.2em] font-medium transition-all hover:text-yellow-500 ${
              currentPage === item.page ? 'text-yellow-500 underline underline-offset-8' : 'text-gray-400'
            }`}
          >
            {item.label}
          </button>
        ))}
        <button 
          onClick={() => onNavigate(Page.SKILLS)}
          className="px-6 py-2 border border-white text-xs tracking-widest hover:bg-white hover:text-black transition-all"
        >
          CONNECT
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
