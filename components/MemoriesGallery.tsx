
import React from 'react';
import { GALLERY_ITEMS } from '../constants';
import SectionTitle from './SectionTitle';

const MemoriesGallery: React.FC = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionTitle>A Walk Down Memory Lane</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {GALLERY_ITEMS.map((image) => (
          <div 
            key={image.id} 
            className="group relative rounded-lg overflow-hidden shadow-lg aspect-square transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                {image.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemoriesGallery;
