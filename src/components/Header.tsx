import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-black hover:text-orange-500 transition-colors">
          JustTrue
        </Link>
        
        <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
