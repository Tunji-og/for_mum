
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center text-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/Images/mum_hero.png" // Replace with your actual hero image file
          alt="Our wonderful Mum looking radiant with her daughters" 
          className="w-full h-full object-cover filter brightness-50" 
        />
      </div>
      <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          To Our Amazing Mum
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl text-rose-200 font-light">
          Happy Father's Day
        </p>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
          You've worn so many hats with grace and strength, especially the one that filled a father's shoes. Today, we celebrate you for the incredible parent you are – our rock, our guide, our everything.
        </p>
        <div className="pt-6">
          <a
            href="#qualities" // Link to the next section
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transition-transform transform hover:scale-105"
          >
            See Our Tribute
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-rose-100 via-purple-50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
