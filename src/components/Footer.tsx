import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} JustTruth. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
