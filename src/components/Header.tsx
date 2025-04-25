import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-4xl md:text-5xl font-bold hover:opacity-90 transition-opacity">
          <span className="text-black">Just</span>
          <span className="text-orange-500">Truth</span>
        </Link>
        
        <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
