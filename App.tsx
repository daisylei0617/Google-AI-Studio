
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

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
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo(0, 0);
      setIsTransitioning(false);
    }, 300);
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
    <div className="min-h-screen flex flex-col selection:bg-yellow-500 selection:text-black">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      
      <main className={`flex-grow transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {renderPage()}
      </main>

      <Footer onNavigate={navigateTo} currentPage={currentPage} />
    </div>
  );
};

export default App;
