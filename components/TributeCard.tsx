
import React from 'react';
import { TributeItem } from '../types';

interface TributeCardProps {
  item: TributeItem;
  index: number;
}

const TributeCard: React.FC<TributeCardProps> = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`bg-white shadow-xl rounded-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1`}>
      <div className={`md:flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className="md:w-1/2 relative">
          <img 
            src={item.imageSrc} 
            alt={item.imageAlt} 
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center mb-4">
            {item.icon}
            <h3 className="text-3xl font-bold text-purple-700 ml-3">{item.title}</h3>
          </div>
          <p className="text-slate-600 leading-relaxed text-lg">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TributeCard;
