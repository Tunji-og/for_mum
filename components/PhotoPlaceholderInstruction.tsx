
import React from 'react';

interface PhotoPlaceholderInstructionProps {
  text?: string;
  className?: string;
}

const PhotoPlaceholderInstruction: React.FC<PhotoPlaceholderInstructionProps> = ({ text = "Replace with your photo", className = "" }) => {
  return (
    <div className={`absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-sm shadow-md ${className}`}>
      {text} &#x270F;&#xFE0F;
    </div>
  );
};

export default PhotoPlaceholderInstruction;
