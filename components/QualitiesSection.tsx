
import React from 'react';
import { TRIBUTE_DATA } from '../constants';
import TributeCard from './TributeCard';
import SectionTitle from './SectionTitle';

const QualitiesSection: React.FC = () => {
  return (
    <section id="qualities" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionTitle>Our Everyday Hero</SectionTitle>
      <div className="space-y-12 md:space-y-16">
        {TRIBUTE_DATA.map((tribute, index) => (
          <TributeCard key={tribute.id} item={tribute} index={index} />
        ))}
      </div>
    </section>
  );
};

export default QualitiesSection;
