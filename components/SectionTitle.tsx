
import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = "" }) => {
  return (
    <h2 className={`text-4xl md:text-5xl font-bold text-center text-purple-700 mb-12 md:mb-16 ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;
