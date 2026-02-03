
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Footer from './components/Footer.tsx';

export enum Page {
  HOME = 'home',
  EXPERIENCE = 'experience',
  PROJECTS = 'projects',
  SKILLS = 'skills'
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = (page: Page) => {
    if (page === currentPage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo(0, 0);
      setIsTransitioning(false);
    }, 400);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={navigateTo} />;
      case Page.EXPERIENCE:
        return <Experience onNavigate={navigateTo} />;
      case Page.PROJECTS:
        return <Projects onNavigate={navigateTo} />;
      case Page.SKILLS:
        return <Skills onNavigate={navigateTo} />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-yellow-500 selection:text-black bg-[#0a0a0a]">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      
      <main className={`flex-grow transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 scale-[0.98] blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
        {renderPage()}
      </main>

      <Footer onNavigate={navigateTo} currentPage={currentPage} />
    </div>
  );
};

export default App;
