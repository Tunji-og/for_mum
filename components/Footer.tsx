
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center py-10 bg-gradient-to-t from-purple-200 via-rose-100 to-transparent">
      <p className="text-lg text-purple-700 font-semibold">
        With All Our Love,
      </p>
      <p className="text-xl text-purple-800 font-bold mt-1">
        Your Loving Children, Especially Tunji!!!!!!
      </p>
      <p className="text-sm text-slate-500 mt-4">
        &copy; {currentYear} - Happy Father's day Mummy
      </p>
      
    </footer>
  );
};

export default Footer;
