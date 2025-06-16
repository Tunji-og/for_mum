
import React from 'react';
import HeroSection from './components/HeroSection';
import QualitiesSection from './components/QualitiesSection';
import MemoriesGallery from './components/MemoriesGallery';
import PersonalMessageSection from './components/PersonalMessageSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-700 overflow-x-hidden">
      <HeroSection />
      <div className="py-12 md:py-20 space-y-20 md:space-y-32">
        <QualitiesSection />
        <MemoriesGallery />
        <PersonalMessageSection />
      </div>
      <Footer />
    </div>
  );
};

export default App;
