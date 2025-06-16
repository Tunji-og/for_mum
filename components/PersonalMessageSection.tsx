
import React from 'react';
import SectionTitle from './SectionTitle';

const PersonalMessageSection: React.FC = () => {
  return (
    <section className="bg-white bg-opacity-70 shadow-xl rounded-xl container mx-auto px-6 sm:px-10 lg:px-16 py-12 md:py-20 my-12">
      <SectionTitle>A Special Message For You, Mum</SectionTitle>
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
          Dearest Mum,
        </p>
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
          On this Father's Day, words feel inadequate to express the depth of our gratitude and admiration. You've not only been an extraordinary mother but also the most incredible father figure we could have ever wished for. Your strength has been our shield, your wisdom our guide, and your love our constant comfort.
        </p>
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
          You've taught us resilience, kindness, and the importance of chasing our dreams, all while shouldering responsibilities with unwavering grace. Thank you for every sacrifice, every lesson, every laugh, and every hug. You are our superhero, our confidante, and our greatest inspiration.
        </p>
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
          We are so incredibly lucky and proud to call you our Mum.
        </p>
        <p className="text-xl md:text-2xl font-semibold text-purple-700 mt-8">
          With all our love, today and always.
        </p>
      </div>
    </section>
  );
};

export default PersonalMessageSection;
